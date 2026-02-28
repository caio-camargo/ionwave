# Compliance Tooling Requirements

**Version**: 1.0.0
**Date Created**: 2026-02-27
**Author**: Caio, Claude
**AI Model**: claude-opus-4-6
**Purpose**: Specification for the "dumb contract management tool" — what it needs to do, options, and recommendation
**Status**: Draft
**Related**: agent_specification.md, deliverable_registry.md, chain_specification.md

---

## Danilo's Framing

> "Its probably just like a very dumb contract mgmt tool we can use"

The compliance system needs three things:
1. **Accept deliverable submissions** (file upload or structured input)
2. **Track deadlines** (dates associated with deliverables)
3. **Send notifications** (reminders when deadlines approach)

Everything else — evaluation, escalation, status reporting — is handled by the Claude agent reading from the tool's data.

---

## Requirements

### Must-Have

| Requirement | Why |
|------------|-----|
| **Deliverable submission** | Chain nodes need a place to submit their work |
| **Deadline tracking** | The system needs to know what's due and when |
| **Status visibility** | Caio (and the Claude agent) needs to see current state |
| **LLM-readable data** | Claude must be able to parse everything — no proprietary formats |
| **Low cost** | Pre-revenue. Every dollar matters. |
| **Low setup effort** | Caio sets this up. It can't require engineering. |

### Nice-to-Have

| Requirement | Why |
|------------|-----|
| **Automated notifications** | So Caio doesn't have to manually trigger Claude reminders |
| **Template-based submission** | So deliverables arrive in consistent format |
| **Access control** | So each node sees only their relevant materials |
| **Audit trail** | Record of when deliverables were submitted, reviewed, accepted/rejected |

### Not Required

| Feature | Why Not |
|---------|---------|
| Complex workflow automation | Claude handles the logic. The tool just holds data. |
| User management / permissions (enterprise-grade) | 4-5 people total. Simple is fine. |
| Analytics / dashboards | Claude generates status reports from raw data. |
| Integration with CRM or project management suites | Scope creep. Keep it simple. |

---

## Options Evaluated

### Option A: Shared Git Repository (Recommended for Phase 1)

**How it works**: All deliverables live in the existing git repo under `data/rollout/`. Each node submits deliverables as markdown files. Claude Code reads from the repo to evaluate and generate reports.

| Aspect | Detail |
|--------|--------|
| **Submission** | Chain nodes submit deliverables as markdown files (via Caio, or directly if they have repo access) |
| **Deadline tracking** | Encoded in `deliverable_registry.md` + `chain_state.json` |
| **Notifications** | Claude Code sessions triggered by Caio (Phase 1) or scheduled (Phase 2) |
| **Status visibility** | `chain_state.json` in the repo — machine-readable chain status |
| **LLM-readable** | Yes — everything is markdown/JSON in a git repo. This is exactly what Claude Code is built for. |
| **Cost** | $0 (repo already exists, Claude Code API cost per session) |
| **Setup** | Minimal — create `chain_state.json`, set up folder structure for submissions |

**Pros**: Zero cost, zero new tools, already proven (this project runs on it), full LLM legibility, git history = audit trail.

**Cons**: Requires terminal comfort (or Caio as intermediary). Not self-service for a VA.

**Verdict**: Best Phase 1 option. The repo is the single source of truth.

### Option B: Google Forms → Google Sheets

**How it works**: Create a Google Form for each deliverable type. Submissions go to a Sheet. Claude reads the Sheet (via export or API).

| Aspect | Detail |
|--------|--------|
| **Submission** | Chain nodes fill out a form with required fields |
| **Deadline tracking** | Manual (Caio sets reminders) or Apps Script automation |
| **Status visibility** | Google Sheet — sortable, filterable |
| **LLM-readable** | Yes — export as CSV/JSON. Claude can parse. |
| **Cost** | $0 (Google Workspace) |
| **Setup** | 30-60 min to create forms + sheet |

**Pros**: Web-native, anyone can use it (no terminal), template-enforced format, free.

**Cons**: Data lives outside the repo (split source of truth). Forms can't handle file attachments well. Requires manual export for Claude to read.

**Verdict**: Good fallback if chain nodes can't work with the repo.

### Option C: Notion

**How it works**: Create a Notion workspace with databases for deliverables, deadlines, and chain state. Each node gets a page with their requirements.

| Aspect | Detail |
|--------|--------|
| **Submission** | Chain nodes update their Notion page |
| **Deadline tracking** | Notion database with date properties + reminders |
| **Status visibility** | Notion views (board, table, calendar) |
| **LLM-readable** | Partial — Notion API exists but adds integration complexity |
| **Cost** | $0-10/mo (free tier may suffice for 4-5 users) |
| **Setup** | 1-2 hours to set up workspace |

**Pros**: Clean UI, good for non-technical users, built-in reminders, decent for small teams.

**Cons**: Another tool to manage. Data outside the repo. API integration needed for Claude to read. Notion can be overkill for 15 deliverables.

**Verdict**: Viable if user experience for chain nodes is the priority. But adds complexity.

### Option D: Linear / Asana / Trello

**How it works**: Create a project management board with tasks for each deliverable.

| Aspect | Detail |
|--------|--------|
| **Submission** | Chain nodes update task status and attach deliverables |
| **Deadline tracking** | Built-in due dates and notifications |
| **Cost** | $0-20/mo depending on plan |

**Pros**: Purpose-built for task tracking.

**Cons**: Way too heavy for 15 deliverables across 4 people. Another tool. Data outside repo. Would need to teach the VA how to use it.

**Verdict**: Overkill. Reject.

---

## Recommendation

### Phase 1 (Immediate — VA Activation)

**Use the git repo (Option A)** with Caio as intermediary:

1. Chain nodes submit deliverables to Caio via **whatever communication channel they already use** (WhatsApp, email, etc.)
2. Caio places deliverables in the repo under `data/rollout/submissions/[node]/`
3. Caio runs Claude Code compliance sessions (weekly or as triggered)
4. Claude reads from the repo, evaluates, generates status reports and prompts

**Supplementary**: If a chain node needs a structured submission form, create a simple Google Form that feeds a Sheet. Caio exports to repo periodically.

**Chain state file** (`data/rollout/chain_state.json`):

```json
{
  "version": "1.0.0",
  "last_updated": "2026-02-27",
  "chain": {
    "va": {
      "status": "not_started",
      "person": null,
      "start_date": null,
      "deliverables": {
        "DEL-VA-001": { "status": "pending", "due": null, "submitted": null },
        "DEL-VA-002": { "status": "pending", "due": null, "submitted": null },
        "DEL-VA-003": { "status": "pending", "due": null, "submitted": null },
        "DEL-VA-004": { "status": "pending", "due": null, "submitted": null },
        "DEL-VA-005": { "status": "pending", "due": null, "submitted": null }
      }
    },
    "mba": {
      "status": "not_started",
      "person": null,
      "start_date": null,
      "deliverables": {
        "DEL-MBA-001": { "status": "pending", "due": null, "submitted": null },
        "DEL-MBA-002": { "status": "pending", "due": null, "submitted": null },
        "DEL-MBA-003": { "status": "pending", "due": null, "submitted": null },
        "DEL-MBA-004": { "status": "pending", "due": null, "submitted": null },
        "DEL-MBA-005": { "status": "pending", "due": null, "submitted": null }
      }
    },
    "vp": {
      "status": "not_started",
      "person": null,
      "start_date": null,
      "deliverables": {
        "DEL-VP-001": { "status": "pending", "due": null, "submitted": null },
        "DEL-VP-002": { "status": "pending", "due": null, "submitted": null },
        "DEL-VP-003": { "status": "pending", "due": null, "submitted": null },
        "DEL-VP-004": { "status": "pending", "due": null, "submitted": null },
        "DEL-VP-005": { "status": "pending", "due": null, "submitted": null }
      }
    },
    "operator": {
      "status": "not_started",
      "person": null,
      "start_date": null
    }
  }
}
```

### Phase 2 (After Validation — If Chain Works)

If the cascade model proves viable and is reused for future Trades:
- Consider a lightweight custom tool (Option E from agent_specification.md)
- Or a Notion workspace if multiple chains run simultaneously
- Scheduled Claude API calls (via GitHub Actions or Apps Script) for automated compliance checks
- Estimated cost: $5-50/mo depending on automation level

---

## Version History

**v1.0.0 (2026-02-27)**: Initial tooling requirements. 4 options evaluated. Git repo recommended for Phase 1. Chain state JSON schema defined.
