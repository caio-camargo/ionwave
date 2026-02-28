/**
 * IonWave Renderers
 * Converts JSON data into HTML for dashboard display.
 */

const Renderers = {

  /**
   * Render a confidence badge inline.
   * @param {string} level - A, B, C, or D
   * @returns {string} HTML
   */
  confidenceBadge(level) {
    if (!level) return '';
    return `<span class="confidence-badge confidence-${level}" data-tooltip="Confidence: ${level}">${level}</span>`;
  },

  /**
   * Render a status badge.
   * @param {string} status
   * @returns {string} HTML
   */
  statusBadge(status) {
    const map = {
      'draft': 'badge-warning',
      'empty_template': 'badge-critical',
      'in_progress': 'badge-info',
      'review': 'badge-review',
      'complete': 'badge-success',
      'migrated': 'badge-success',
      'migrating': 'badge-info',
      'xlsx_only': 'badge-neutral'
    };
    const cls = map[status] || 'badge-neutral';
    return `<span class="badge ${cls}">${status.replace(/_/g, ' ')}</span>`;
  },

  /**
   * Render a quality score with color.
   * @param {string} score - e.g., "4.5/10"
   * @returns {string} HTML
   */
  qualityScore(score) {
    if (!score) return '<span class="badge badge-neutral">Not assessed</span>';
    const num = parseFloat(score);
    let cls = 'badge-critical';
    if (num >= 7) cls = 'badge-success';
    else if (num >= 5) cls = 'badge-warning';
    else if (num >= 3) cls = 'badge-warning';
    return `<span class="badge ${cls}">${score}</span>`;
  },

  /**
   * Render a value that might have confidence metadata.
   * Handles both plain values and {value, confidence, source, ...} objects.
   * @param {*} val
   * @returns {string} HTML
   */
  dataValue(val) {
    if (val === null || val === undefined) return '<span class="text-dim">--</span>';
    // Confidence-annotated data point: {value, confidence, source}
    if (typeof val === 'object' && !Array.isArray(val) && val.value !== undefined) {
      let html = Renderers.escapeHtml(String(val.value));
      if (val.confidence) html += ' ' + Renderers.confidenceBadge(val.confidence);
      if (val.source) html += ` <span class="text-dim" style="font-size:var(--font-size-xs)">[${Renderers.escapeHtml(val.source)}]</span>`;
      return html;
    }
    // Array: render as inline list or comma-separated
    if (Array.isArray(val)) {
      if (val.length === 0) return '<span class="text-dim">--</span>';
      if (val.every(item => typeof item === 'string' || typeof item === 'number')) {
        return val.map(item => Renderers.escapeHtml(String(item))).join(', ');
      }
      // Array of objects: render each as a mini key-value block
      return '<ul class="narrative-list">' + val.map(item => {
        if (typeof item === 'string' || typeof item === 'number') {
          return `<li>${Renderers.escapeHtml(String(item))}</li>`;
        }
        if (typeof item === 'object' && item !== null) {
          return `<li>${Renderers.keyValuePairs(item)}</li>`;
        }
        return `<li>${Renderers.escapeHtml(String(item))}</li>`;
      }).join('') + '</ul>';
    }
    // Plain object (no .value): render recursively as key-value pairs
    if (typeof val === 'object') {
      return Renderers.keyValuePairs(val);
    }
    return Renderers.escapeHtml(String(val));
  },

  /**
   * Render a structured table from an array of objects.
   * @param {Array} rows - Array of objects
   * @param {Array<string>} columns - Column keys to display
   * @param {Object} [headers] - Map of key -> display header
   * @returns {string} HTML
   */
  table(rows, columns, headers) {
    if (!rows || rows.length === 0) {
      return Renderers.emptyState('No data');
    }
    headers = headers || {};
    let html = '<table class="data-table"><thead><tr>';
    for (const col of columns) {
      html += `<th>${Renderers.escapeHtml(headers[col] || col.replace(/_/g, ' '))}</th>`;
    }
    html += '</tr></thead><tbody>';
    for (const row of rows) {
      html += '<tr>';
      for (const col of columns) {
        html += `<td>${Renderers.dataValue(row[col])}</td>`;
      }
      html += '</tr>';
    }
    html += '</tbody></table>';
    return html;
  },

  /**
   * Render a card with header and body content.
   * @param {string} title
   * @param {string} bodyHtml
   * @param {string} [headerRight] - Optional right-side header content
   * @returns {string} HTML
   */
  card(title, bodyHtml, headerRight) {
    return `
      <div class="card">
        <div class="card-header">
          <span>${Renderers.escapeHtml(title)}</span>
          ${headerRight ? `<span>${headerRight}</span>` : ''}
        </div>
        <div class="card-body">${bodyHtml}</div>
      </div>
    `;
  },

  /**
   * Render a narrative section (prose content with optional subsections).
   * @param {Object} data - Narrative data object
   * @returns {string} HTML
   */
  narrative(data) {
    let html = '';
    for (const [key, value] of Object.entries(data)) {
      if (key.startsWith('_')) continue;
      const heading = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

      if (typeof value === 'string') {
        html += `<div class="narrative-section">
          <h3 class="narrative-heading">${Renderers.escapeHtml(heading)}</h3>
          <p class="narrative-text">${Renderers.escapeHtml(value)}</p>
        </div>`;
      } else if (Array.isArray(value)) {
        // Check if array contains complex objects (not just strings/numbers)
        const hasComplexItems = value.some(item => typeof item === 'object' && item !== null && item.value === undefined);
        if (hasComplexItems) {
          html += `<div class="narrative-section">
            <h3 class="narrative-heading">${Renderers.escapeHtml(heading)}</h3>
            ${value.map(item => {
              if (typeof item === 'string') return `<p class="narrative-text">${Renderers.escapeHtml(item)}</p>`;
              if (typeof item === 'object' && item !== null) return Renderers.objectBlock(item);
              return `<p class="narrative-text">${Renderers.escapeHtml(String(item))}</p>`;
            }).join('')}
          </div>`;
        } else {
          html += `<div class="narrative-section">
            <h3 class="narrative-heading">${Renderers.escapeHtml(heading)}</h3>
            <ul class="narrative-list">
              ${value.map(item => {
                if (typeof item === 'string') {
                  return `<li>${Renderers.escapeHtml(item)}</li>`;
                }
                return `<li>${Renderers.dataValue(item)}</li>`;
              }).join('')}
            </ul>
          </div>`;
        }
      } else if (typeof value === 'object' && value !== null) {
        // Nested object - render as key-value pairs or recurse
        if (value.value !== undefined) {
          // It's a data point with confidence
          html += `<div class="narrative-section">
            <h3 class="narrative-heading">${Renderers.escapeHtml(heading)}</h3>
            <p class="narrative-text">${Renderers.dataValue(value)}</p>
          </div>`;
        } else {
          html += `<div class="narrative-section">
            <h3 class="narrative-heading">${Renderers.escapeHtml(heading)}</h3>
            ${Renderers.keyValuePairs(value)}
          </div>`;
        }
      }
    }
    return html;
  },

  /**
   * Render key-value pairs from an object.
   * @param {Object} obj
   * @returns {string} HTML
   */
  keyValuePairs(obj) {
    let html = '<dl class="persona-body">';
    for (const [key, value] of Object.entries(obj)) {
      if (key.startsWith('_')) continue;
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      html += `<dt>${Renderers.escapeHtml(label)}</dt>`;
      html += `<dd>${Renderers.dataValue(value)}</dd>`;
    }
    html += '</dl>';
    return html;
  },

  /**
   * Render a complex object as a titled card-like block.
   * Used for array items that are complex objects (e.g., customer archetypes).
   * @param {Object} obj
   * @param {string} [titleKey] - Key to use as the block title
   * @returns {string} HTML
   */
  objectBlock(obj, titleKey) {
    // Try to find a good title from common naming keys
    const titleKeys = titleKey ? [titleKey] : ['profile_name', 'archetype_name', 'name', 'label', 'segment', 'title'];
    let title = null;
    for (const tk of titleKeys) {
      if (obj[tk]) {
        title = typeof obj[tk] === 'object' && obj[tk].value ? String(obj[tk].value) : String(obj[tk]);
        break;
      }
    }
    let html = '<div class="card" style="margin-bottom: var(--gap-sm);">';
    if (title) {
      html += `<div class="card-header"><span>${Renderers.escapeHtml(title)}</span></div>`;
    }
    html += `<div class="card-body">${Renderers.keyValuePairs(obj)}</div></div>`;
    return html;
  },

  /**
   * Render dependency tags.
   * @param {Array<string>} deps
   * @returns {string} HTML
   */
  dependencyTags(deps) {
    if (!deps || deps.length === 0) return '<span class="text-dim">None</span>';
    return `<div class="dep-list">
      ${deps.map(d => `<a href="views/${d.replace(/_/g, '-')}.html" class="dep-tag">${d.replace(/_/g, ' ')}</a>`).join('')}
    </div>`;
  },

  /**
   * Render an empty state.
   * @param {string} message
   * @returns {string} HTML
   */
  emptyState(message) {
    return `<div class="empty-state">
      <div class="empty-state-icon">--</div>
      <div class="empty-state-text">${Renderers.escapeHtml(message)}</div>
    </div>`;
  },

  /**
   * Render file-level metadata header for a trade file view.
   * @param {Object} meta - _meta.json data
   * @returns {string} HTML
   */
  fileHeader(meta) {
    return `
      <div class="stats-ribbon">
        <div class="stat-box accent-${parseFloat(meta.quality_score) >= 6 ? 'success' : 'warning'}">
          <div class="stat-value">${meta.quality_score || '--'}</div>
          <div class="stat-label">Quality</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">${meta.sheets.length}</div>
          <div class="stat-label">Sheets</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">T${meta.tier}</div>
          <div class="stat-label">Tier</div>
        </div>
        <div class="stat-box accent-info">
          <div class="stat-value">v${meta.version}</div>
          <div class="stat-label">Version</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">${meta.audited ? 'Yes' : 'No'}</div>
          <div class="stat-label">Audited</div>
        </div>
      </div>
    `;
  },

  /**
   * Auto-render a sheet based on its data_type.
   * @param {Object} sheetData - Full sheet JSON (with _meta and data)
   * @returns {string} HTML
   */
  autoRender(sheetData) {
    if (!sheetData || !sheetData._meta) return Renderers.emptyState('No data loaded');

    const type = sheetData._meta.data_type;
    const data = sheetData.data;

    switch (type) {
      case 'structured_table':
        return Renderers.autoTable(data);
      case 'narrative':
        return Renderers.narrative(data);
      case 'template':
        return Renderers.autoTemplate(sheetData);
      case 'hybrid':
        return Renderers.autoHybrid(data);
      default:
        return Renderers.narrative(data);
    }
  },

  /**
   * Auto-detect table structure and render.
   */
  autoTable(data) {
    // Find the first array of objects in the data
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
        const columns = Object.keys(value[0]).filter(k => !k.startsWith('_'));
        return Renderers.table(value, columns);
      }
    }
    return Renderers.narrative(data);
  },

  /**
   * Render a template (mostly empty data with structure shown).
   */
  autoTemplate(sheetData) {
    let html = '';
    if (sheetData._meta.note) {
      html += `<div class="card" style="border-left: 3px solid var(--color-warning); margin-bottom: var(--gap-md);">
        <div class="card-body">
          <span class="badge badge-warning">Template</span>
          <p style="margin-top: var(--gap-sm); font-size: var(--font-size-sm); color: var(--text-secondary);">${Renderers.escapeHtml(sheetData._meta.note)}</p>
        </div>
      </div>`;
    }
    if (sheetData.template_structure) {
      html += '<div class="narrative-section"><h3 class="narrative-heading">Expected Structure</h3>';
      for (const [section, schema] of Object.entries(sheetData.template_structure)) {
        const heading = section.replace(/_schema$/, '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        html += `<p style="font-size:var(--font-size-sm); color:var(--text-dim); margin-top:var(--gap-sm);"><strong>${heading}:</strong> `;
        html += Object.entries(schema).map(([k, v]) => `${k} (${v})`).join(', ');
        html += '</p>';
      }
      html += '</div>';
    }
    html += Renderers.narrative(sheetData.data);
    return html;
  },

  /**
   * Render hybrid content (mix of tables and narrative).
   */
  autoHybrid(data) {
    let html = '';
    for (const [key, value] of Object.entries(data)) {
      if (key.startsWith('_')) continue;
      const heading = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
        const columns = Object.keys(value[0]).filter(k => !k.startsWith('_'));
        html += `<div class="narrative-section">
          <h3 class="narrative-heading">${Renderers.escapeHtml(heading)}</h3>
          ${Renderers.table(value, columns)}
        </div>`;
      } else if (Array.isArray(value)) {
        html += `<div class="narrative-section">
          <h3 class="narrative-heading">${Renderers.escapeHtml(heading)}</h3>
          <ul class="narrative-list">${value.map(v => `<li>${Renderers.escapeHtml(String(v))}</li>`).join('')}</ul>
        </div>`;
      } else if (typeof value === 'string') {
        html += `<div class="narrative-section">
          <h3 class="narrative-heading">${Renderers.escapeHtml(heading)}</h3>
          <p class="narrative-text">${Renderers.escapeHtml(value)}</p>
        </div>`;
      } else if (typeof value === 'object' && value !== null) {
        if (value.value !== undefined) {
          html += `<div class="narrative-section">
            <h3 class="narrative-heading">${Renderers.escapeHtml(heading)}</h3>
            <p class="narrative-text">${Renderers.dataValue(value)}</p>
          </div>`;
        } else {
          html += `<div class="narrative-section">
            <h3 class="narrative-heading">${Renderers.escapeHtml(heading)}</h3>
            ${Renderers.keyValuePairs(value)}
          </div>`;
        }
      }
    }
    return html;
  },

  /**
   * HTML-escape a string.
   */
  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};
