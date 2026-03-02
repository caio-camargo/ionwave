# VA Workspace — Upload Manifest

**Version**: 1.0.0
**Date Created**: 2026-03-02
**Purpose**: Checklist of files to upload to the Claude.ai Project for the VA workspace

---

## Setup Steps

### 1. Create the Project

1. Go to [claude.ai](https://claude.ai)
2. Click "Projects" in the sidebar (requires Pro plan — $20/mo)
3. Click "Create Project"
4. Name it: **IonWave — VA Workspace**
5. Optionally add a description: "Recruiting workspace for the IonWave VA — finding an MBA intern type"

### 2. Set Custom Instructions

1. In the project, click the gear icon or "Settings"
2. Find "Custom Instructions" (sometimes called "Project Instructions")
3. Open `va_workspace/project_instructions.md` from this repo
4. Copy everything **below the line** that says "PASTE EVERYTHING BELOW THIS LINE INTO CUSTOM INSTRUCTIONS"
5. Paste it into the Custom Instructions field
6. Save

### 3. Upload Knowledge Files

Upload these 6 files **in this order** (order matters for context priority):

| # | File | Source Path in Repo | Why |
|---|------|-------------------|-----|
| 1 | **role_brief.md** | `data/rollout/va_package/role_brief.md` | The VA's primary job description — most important context |
| 2 | **screening_criteria.md** | `data/rollout/va_package/screening_criteria.md` | The 6-dimension rubric — needed for candidate evaluation |
| 3 | **sourcing_playbook.md** | `data/rollout/va_package/sourcing_playbook.md` | Where and how to find candidates |
| 4 | **outreach_templates.md** | `data/rollout/va_package/outreach_templates.md` | Message templates for different channels |
| 5 | **trade_pitch_onepager.md** | `data/rollout/trade_pitch_onepager.md` | The document shared with candidates to explain the opportunity |
| 6 | **bilateral_contract.md** | `data/rollout/va_package/bilateral_contract.md` | Terms of engagement — what VA delivers, compensation, deadlines |

**Total**: 6 files, all markdown, approximately 25KB total.

### 4. Verify

After uploading, start a conversation in the project and ask:
> "What documents do you have access to? List them."

Claude should list all 6 files. If any are missing, re-upload.

---

## What NOT to Upload

Do NOT upload these — they're for oversight (Caio), not for the VA:

- `compliance/agent_specification.md` — internal compliance logic
- `compliance/deliverable_registry.md` — machine-readable specs (already encoded in custom instructions)
- `compliance/tooling_requirements.md` — infrastructure decisions
- `chain_specification.md` — full cascade architecture
- `_meta.json` — package metadata
- Any MBA, VP, or operator brief files

The VA sees their package and the pitch one-pager. Nothing else.

---

## Maintenance

### When to Update

| Trigger | Action |
|---------|--------|
| VA package files are revised in the repo | Re-upload the changed file(s) to the Project |
| Custom instructions are revised | Re-paste into Project Settings |
| A new VA starts (original leaves or is replaced) | Create a fresh Project (don't reuse the old one — conversation history would confuse) |

### Version Sync

The source of truth is always the git repo. The Claude.ai Project is a deployment — if they diverge, the repo wins. Record the date of last sync here:

**Last synced to Claude.ai Project**: _not yet deployed_

---

## Open Items Before Deployment

Before handing this to a real VA, resolve:

- [ ] **DEC-CHAIN-005**: VA retainer amount — role_brief.md and bilateral_contract.md say "[AMOUNT TBD]"
- [ ] **DEC-CHAIN-003**: Approval authority — role_brief.md says "[Approval authority TBD]"
- [ ] **Contact method**: trade_pitch_onepager.md says "[TBD — VA provides contact method]"
- [ ] **Payment schedule and method**: bilateral_contract.md has "[SCHEDULE TBD]" and "[method TBD]"

These must be filled in before a real VA can use the workspace. For testing purposes, you can leave them as-is.

---

## Version History

**v1.0.0 (2026-03-02)**: Initial manifest. 6 files, setup steps, exclusion list, maintenance protocol.
