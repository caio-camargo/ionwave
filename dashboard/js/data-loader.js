/**
 * IonWave Data Loader
 * Fetches JSON data files and provides them to renderers.
 * All paths are relative to the dashboard/ directory.
 */

const DataLoader = {
  _cache: {},
  // Determine base path relative to the repo root
  _getBasePath() {
    // Extract the base URL (e.g., /ionwave-dashboard/ or /)
    const pathSegments = window.location.pathname.split('/').filter(s => s);
    const repoName = pathSegments.length > 0 && !pathSegments[0].endsWith('.html') ? pathSegments[0] : '';
    const base = repoName ? `/${repoName}` : '';
    console.log('[DataLoader] pathname:', window.location.pathname);
    console.log('[DataLoader] pathSegments:', pathSegments);
    console.log('[DataLoader] repoName:', repoName);
    console.log('[DataLoader] base path:', `${base}/data`);
    return `${base}/data`;
  },
  get _basePath() {
    return this._getBasePath();
  },

  /**
   * Fetch and cache a JSON file.
   * @param {string} path - Relative path from data/ directory (e.g., "01_strategic_foundation/thesis.json")
   * @returns {Promise<Object>}
   */
  async load(path) {
    if (this._cache[path]) {
      console.log('[DataLoader] Cache hit:', path);
      return this._cache[path];
    }

    const url = `${this._basePath}/${path}`;
    console.log('[DataLoader] Fetching:', url);
    try {
      const response = await fetch(url);
      console.log('[DataLoader] Response status:', response.status, 'for', url);
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
      const data = await response.json();
      this._cache[path] = data;
      console.log('[DataLoader] Successfully loaded:', path);
      return data;
    } catch (err) {
      console.error(`[DataLoader] FAILED to load ${url}`, err);
      return null;
    }
  },

  /**
   * Load the master manifest.
   * @returns {Promise<Object>}
   */
  async loadManifest() {
    return this.load('manifest.json');
  },

  /**
   * Load the _meta.json for a trade file directory.
   * @param {string} fileId - e.g., "01_strategic_foundation"
   * @returns {Promise<Object>}
   */
  async loadFileMeta(fileId) {
    return this.load(`${fileId}/_meta.json`);
  },

  /**
   * Load a specific sheet's JSON.
   * @param {string} fileId - e.g., "01_strategic_foundation"
   * @param {string} sheetId - e.g., "thesis"
   * @returns {Promise<Object>}
   */
  async loadSheet(fileId, sheetId) {
    return this.load(`${fileId}/${sheetId}.json`);
  },

  /**
   * Load all sheets for a trade file.
   * @param {string} fileId - e.g., "01_strategic_foundation"
   * @returns {Promise<Object>} Map of sheetId -> data
   */
  async loadAllSheets(fileId) {
    const meta = await this.loadFileMeta(fileId);
    if (!meta) return {};

    const results = {};
    const promises = meta.sheets.map(async (sheet) => {
      const data = await this.loadSheet(fileId, sheet.id);
      if (data) results[sheet.id] = data;
    });
    await Promise.all(promises);
    return results;
  },

  /**
   * Load a markdown file from tracking directory.
   * @param {string} filename - e.g., "Open_Questions.md"
   * @returns {Promise<string>} Raw markdown text
   */
  async loadTracking(filename) {
    // Get base path same way as data
    const pathSegments = window.location.pathname.split('/').filter(s => s);
    const repoName = pathSegments.length > 0 && !pathSegments[0].endsWith('.html') ? pathSegments[0] : '';
    const base = repoName ? `/${repoName}` : '';
    const url = `${base}/tracking/${filename}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
      const text = await response.text();
      return text;
    } catch (err) {
      console.error(`DataLoader: Failed to load tracking file ${url}`, err);
      return null;
    }
  },

  /**
   * Parse Open Questions markdown to extract CRITICAL questions.
   * @param {string} markdown - Raw markdown content
   * @returns {Array<Object>} Array of {id, title, status, discovered, question, options, owner, blocks}
   */
  parseOpenQuestions(markdown) {
    const questions = [];
    const lines = markdown.split('\n');

    let inCritical = false;
    let currentQ = null;
    let currentField = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Detect CRITICAL section
      if (line.includes('## 🔴 CRITICAL')) {
        inCritical = true;
        continue;
      }

      // Exit CRITICAL section when we hit HIGH
      if (line.includes('## 🟡 HIGH')) {
        inCritical = false;
        break;
      }

      if (!inCritical) continue;

      // Start of new question
      if (line.match(/^### Q\d+:/)) {
        if (currentQ) questions.push(currentQ);
        currentQ = {
          id: line.match(/Q\d+/)[0],
          title: line.replace(/^### Q\d+:\s*/, ''),
          status: '',
          discovered: '',
          question: '',
          whyMatters: '',
          options: [],
          owner: '',
          blocks: ''
        };
        currentField = null;
        continue;
      }

      if (!currentQ) continue;

      // Extract fields
      if (line.startsWith('**Status:**')) {
        currentQ.status = line.replace('**Status:**', '').trim();
      } else if (line.startsWith('**Discovered:**')) {
        currentQ.discovered = line.replace('**Discovered:**', '').trim();
      } else if (line.startsWith('**The Question:**')) {
        currentField = 'question';
      } else if (line.startsWith('**Why It Matters:**')) {
        currentField = 'whyMatters';
      } else if (line.startsWith('**Options:**')) {
        currentField = 'options';
      } else if (line.startsWith('**Owner:**')) {
        currentQ.owner = line.replace('**Owner:**', '').trim();
        currentField = null;
      } else if (line.startsWith('**Blocks:**')) {
        currentQ.blocks = line.replace('**Blocks:**', '').trim();
        currentField = null;
      } else if (line.startsWith('**Decision Needed By:**')) {
        currentField = null;
      } else if (line.startsWith('---')) {
        if (currentQ) questions.push(currentQ);
        currentQ = null;
        currentField = null;
      } else if (currentField && line.trim()) {
        if (currentField === 'options' && line.match(/^\d+\./)) {
          currentQ.options.push(line.trim());
        } else if (currentField === 'question' || currentField === 'whyMatters') {
          currentQ[currentField] += (currentQ[currentField] ? ' ' : '') + line.trim();
        }
      }
    }

    if (currentQ) questions.push(currentQ);
    return questions;
  },

  /**
   * Clear the cache (useful for forcing reload).
   */
  clearCache() {
    this._cache = {};
  }
};
