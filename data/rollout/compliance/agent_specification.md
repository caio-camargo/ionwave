# Compliance Agent Specification

**Version**: 1.0.0
**Date Created**: 2026-02-26
**Author**: Caio, Claude
**AI Model**: claude-sonnet-4-6
**Purpose**: How a Claude agent monitors the recruiting cascade — active project management, not passive monitoring
**Status**: Draft
**Related**: chain_specification.md, deliverable_registry.md, CONTRACT_ENGINEERING.md, M36 performance_monitoring.md, CLAUDE_AS_OS_SYSTEM.md

---

## 1. Core Design Principle

The compliance agent **actively asks for deliverables** when they're due. It is a project manager, not a dashboard. When the VA's weekly pipeline report is due on Friday and hasn't been submitted, Claude doesn't wait for someone to notice — Claude messages the VA: "Your pipeline report is due today. Please submit it."

This is Danilo's answer to "who watches them?" — Claude watches them. The work of compliance is defined and encoded. The agent executes the monitoring, prompts for deliverables, evaluates what it can, and escalates what it can't.

---

## 2. Agent Capabilities

### What the Agent CAN Do

| Capability | How | Example |
|-----------|-----|---------|
| **Track deadlines** | Read deliverable_registry.md, compare against current date | "DEL-VA-003 (Pipeline Report) is due today (Friday)" |
| **Prompt for deliverables** | Send structured message to chain node when deadline arrives | "Your weekly pipeline report is due. Please submit: candidate name, source, status, notes." |
| **Verify format compliance** | Check submitted deliverable against required format spec | "Your report is missing the 'source' column. Please add sourcing channel for each candidate." |
| **Count/measure deliverables** | Quantitative checks on submitted work | "You reported 3 new contacts this week. Minimum is 5. Please update or explain." |
| **Track pipeline state** | Maintain running state of the chain (who's active, what phase, what's overdue) | "Chain status: VA active (Week 3), MBA not yet found, VP not yet found, Operator not yet found." |
| **Generate status reports** | Produce chain-wide status summary on demand or on schedule | Weekly chain status report to Caio or designated oversight |
| **Escalate** | Notify designated human when thresholds are crossed | "VA has not submitted pipeline report for 2 consecutive weeks. Escalating to [oversight]." |

### What the Agent CANNOT Do

| Limitation | Why | What happens instead |
|-----------|-----|---------------------|
| **Evaluate candidate quality** | Soft skills, cultural fit, judgment — not machine-assessable | Agent checks that screening rubric is filled in; human evaluates the scores |
| **Determine if someone is gaming metrics** | Volume without quality (10 contacts/week but all irrelevant) | Agent flags pattern (e.g., "all candidates rejected at next stage") for human review |
| **Assess pitch delivery** | Whether the MBA intern is pitching well to VP candidates | Agent tracks conversion rate (pitches → interested → committed); flags if below threshold |
| **Make hiring decisions** | Whether a candidate should be advanced or rejected | Agent ensures process is followed; decision authority per chain_specification.md |
| **Handle exceptions** | Novel situations not covered by the deliverable registry | Agent escalates with context: "Situation not covered by protocol: [description]. Needs human judgment." |

### Design Implication

Claude handles **"did they do the work?"** — the structural layer. Human judgment is still needed for **"is the work good?"** — but Claude surfaces when and where that judgment is needed, reducing the monitoring burden to specific decision points rather than continuous oversight.

---

## 3. Agent Architecture: Claude-as-Workspace

### Core Model

Claude is not an external monitor — Claude is the **work surface**. Each chain node works *in* Claude. This means:

- The VA does their sourcing, screening, and reporting *through* a Claude session
- The MBA intern drafts outreach, evaluates candidates, and submits pipeline reports *through* a Claude session
- The VP does integration work, Capital Formation outreach logging, and operator evaluation *through* a Claude session

Claude is simultaneously the **tool** (helping them do the work), the **monitor** (tracking deliverables), and the **context holder** (remembering everything that happened in the session).

### Why This Is Stronger Than External Monitoring

| External monitor model | Claude-as-workspace model |
|----------------------|--------------------------|
| Claude reconstructs what happened from submitted files | Claude was there when the work happened |
| Checks deliverables at deadline | Can flag problems in real time ("that candidate doesn't match the profile") |
| Evaluates format only | Can evaluate quality in context (saw the screening conversation) |
| Prompts feel like nagging | Prompts feel like a collaborator checking in |
| Separate compliance layer = overhead | Compliance is embedded in the work itself |

### What Each Node's Workspace Contains

**VA Workspace:**
- Pre-loaded: VA role brief, sourcing playbook, screening criteria, outreach templates, bilateral contract
- Pre-loaded: Trade Pitch One-Pager
- Pre-loaded: Deliverable schedule (Claude knows what's due and when)
- Claude proactively: helps draft outreach messages, helps evaluate candidates against rubric, prompts for pipeline reports, flags when shortlist deadline approaches

**MBA Intern Workspace:**
- Pre-loaded: MBA Brief (role brief, VP candidate profile, sourcing methodology, screening criteria, pitch materials, bilateral contract)
- Pre-loaded: Full Trade access (imagination passet, or curated subset)
- Pre-loaded: Deliverable schedule
- Claude proactively: helps develop VP pitch, helps evaluate VP candidates against screening rubric, tracks outreach funnel, prompts for biweekly reports

**VP Workspace:**
- Pre-loaded: VP Brief (role brief, integration requirements, operator recruitment, Capital Formation, bilateral contract)
- Pre-loaded: Full Trade (complete imagination passet + data layer)
- Pre-loaded: M4 fundraising playbook, M1 operator system docs
- Pre-loaded: Deliverable schedule
- Claude proactively: guides integration work, helps develop Capital Formation strategy, helps evaluate operator candidates against M1 criteria

### Deployment Configurations (Research Complete — Not Yet Locked Down)

| Configuration | Platform | How it works | Pros | Cons | Status |
|--------------|----------|-------------|------|------|--------|
| **A: Claude Code sessions** | Claude Code CLI | Each node gets a repo clone (or shared repo) with their brief + Trade context. Caio sets up the session, node person runs it. | Full file system access, git-native, proven capability, free (API cost only). Shared repo = centralized compliance data. | Requires terminal comfort. Each session is ephemeral (context lost between sessions unless committed to files). Caio may need to help set up. | **Available now — strongest option** |
| **B: Claude Cowork** | Anthropic's Cowork (Desktop app) | Each node gets a Cowork workspace with pre-loaded context via plugins/folder instructions. Custom plugins for compliance. | GUI-based (no terminal needed). Plugins encode role-specific workflows. Scheduled tasks for recurring checks. Persistent memory across sessions. MCP connectors for Google Drive, email, etc. | **No shared workspace** — each person is isolated. No cross-session visibility (admin can't see into other users' sessions). Single-user, single-machine (desktop app must be open). Cowork and Projects are separate features — cannot combine. No programmatic orchestration API. $20-200/mo per user. | **Researched — not viable for centralized monitoring** |
| **C: Claude.ai Projects** | Claude.ai with Projects feature | Each node gets a Project with uploaded context files. Project instructions define the compliance behavior. | Simple, web-based, anyone can use it. Project instructions act as system prompt. Team plan enables shared knowledge bases. | No file system access, no git, no automation, no bash. Limited to conversation. Can't write files to a shared workspace. | **Available now, limited** |
| **D: Hybrid (Code + Projects)** | Code for Caio oversight + Projects for chain nodes | Caio runs compliance reviews in Code (full power). Chain nodes work in Claude.ai Projects (easiest interface). Deliverables flow into shared repo via Caio or lightweight automation. | Best of both worlds — nodes get simplicity, oversight gets power. Git repo is the single source of truth. | Coordination overhead. Caio becomes the bridge between platforms. | **Recommended starting point** |
| **E: Custom agent (Agent SDK)** | Anthropic Agent SDK | Build a custom agent that runs in a web interface, pre-loaded with Trade context, compliance logic baked in. | Full control, purpose-built for this use case. Could serve as reusable infrastructure across Trades. | Engineering effort to build. Overkill for one chain, valuable if reused. | **Future consideration** |

### Cowork Research Summary (Feb 2026)

Cowork was investigated as a potential deployment platform for the chain. Key findings:

**What Cowork offers:** GUI-based agentic workspace, custom plugins (can encode role-specific workflows), scheduled/recurring tasks, MCP connectors (Google Drive, Gmail, etc.), persistent memory, folder-specific instructions. Plugins are built on MCP, so any MCP server can extend capabilities. Enterprise plans offer plugin marketplace administration.

**Why it doesn't work for this use case:**
1. **No shared workspace.** Each person gets isolated sessions. No "shared project space" where Claude sees everyone's work.
2. **No cross-session visibility.** An admin cannot see into other users' Cowork sessions. Activity is not captured in audit logs.
3. **Single-user, single-machine.** Desktop app must be open and machine awake. No server-side execution.
4. **No programmatic orchestration.** No API to spin up sessions, assign tasks across users, or aggregate results.
5. **Cowork and Projects are separate features.** Cannot combine shared knowledge bases (Projects) with agentic execution (Cowork).

**Ironic conclusion:** The Claude Code + git + CLAUDE.md approach already in use for the IonWave project is closer to the multi-agent coordination pattern needed than Cowork currently offers.

**Future watch:** Anthropic has hinted at multi-agent and multi-user Cowork features but no timeline. If shipped, revisit Configuration B.

### Recommended Approach

Start with **D (Hybrid: Code + Projects)**:
- **Caio** uses Claude Code for oversight, compliance reviews, and status reports (full power)
- **Chain nodes** (VA, MBA, VP) use Claude.ai Projects with pre-loaded context files and project instructions that encode compliance behavior
- **Git repo** is the single source of truth — all deliverables flow into `data/rollout/` via Caio or lightweight process
- **Compliance agent** runs in Claude Code, reads from the repo, generates prompts and reports

This is Danilo's "light automaton on top" — the content types (TUPs, contracts, deliverable registry) are the substance; the Code session is the ticker that says "it's Friday, pipeline report time."

[CONFIGURATION DECISION — research complete, recommendation made, not yet locked down. Final decision depends on what's practical for a VA-level user.]

---

## 4. Per-Node Controller Pattern

Whether Claude runs in Code, Cowork, or Projects, the control logic is the same. Claude follows this loop (encoded in session instructions / project instructions / custom plugin):

```
ALWAYS ACTIVE during any session with this chain node:

1. KNOW what deliverables are expected (deliverable_registry.md is in context)
2. KNOW when they're due (trigger events + deadlines, relative to session state)
3. AT SESSION START:
     → Greet the node person. Summarize current state.
     → "You have [N] deliverables upcoming. [DEL-XX-NNN] is due [date]."
     → If anything is overdue: "Your [deliverable] was due [date]. Let's work on it now."
4. DURING WORK:
     → Help with the task (outreach drafting, candidate evaluation, etc.)
     → Track progress toward deliverables in real time
     → If the person produces something that matches a deliverable: "This looks like it could serve as your [deliverable name]. Want me to format it for submission?"
5. AT SESSION END:
     → Summarize what was accomplished
     → Note deliverable status changes
     → Remind of upcoming deadlines
     → Write session summary to a persistent file (if file system access available)
6. IF deliverable completed:
     → Evaluate against spec (format, required fields, thresholds)
     → Mark complete in chain state
     → If chain milestone reached: note that next node can be activated
7. IF overdue:
     → Escalation per framework (Section 6)
```

### Chain State Machine

```
CHAIN STATE:
  va_status: active | complete | failed
  mba_status: not_started | active | complete | failed
  vp_status: not_started | active | complete | failed
  operator_status: not_started | active | complete | failed

TRANSITIONS:
  va_status: active → complete  (when DEL-VA-005 Final Recommendation accepted)
  va_status: active → failed    (when >6 weeks, no shortlist, no viable extension)
  mba_status: not_started → active (when va_status = complete, MBA intern onboarded)
  mba_status: active → complete (when DEL-MBA-005 VP Recommendation accepted)
  ...and so on
```

The agent maintains this state and reports it on demand.

---

## 5. Prompting Behavior

### Tone

The agent should be **professional, concise, and helpful** — not robotic, not aggressive. It's a competent project manager, not a nagging bot.

**Good**: "Hi [name], your weekly pipeline report is due today. Please submit a table with: candidate name, source channel, screening status, and notes. Let me know if you have questions about the format."

**Bad**: "ALERT: DEL-VA-003 OVERDUE. SUBMIT IMMEDIATELY."

**Bad**: "Hey! Just checking in, no pressure, whenever you get a chance... your report was kinda due yesterday? Sorry to bother you!"

### Prompting Templates

**Upcoming deadline (1-2 days before)**:
> Your [deliverable name] is due on [date]. The expected format is [brief description]. If you need clarification on what to submit, I can walk you through the requirements.

**At deadline (day of)**:
> Your [deliverable name] is due today ([date]). Please submit: [specific format requirements]. Once I receive it, I'll confirm it meets the specification.

**Overdue (1-2 days late)**:
> Your [deliverable name] was due on [date] and I haven't received it yet. Please submit it at your earliest convenience. If there's a blocker preventing submission, let me know and I'll note it in the status report.

**Overdue (3-5 days late — warning level)**:
> Your [deliverable name] is now [N] days overdue. I'm flagging this in the weekly status report. If there's a reason for the delay, please let me know so I can record it. Otherwise, please submit by [new date].

**Overdue (>5 days — escalation level)**:
> Your [deliverable name] is [N] days overdue with no submission or explanation. I'm escalating this to [oversight person]. If there are circumstances I'm not aware of, please respond so I can include that context in the escalation.

### Format Feedback Templates

**Missing fields**:
> I've received your [deliverable name]. It's missing the following required fields: [list]. Please add these and resubmit.

**Below threshold**:
> Your [deliverable name] shows [metric] at [value], which is below the minimum threshold of [threshold]. Specifically: [detail]. Please update or provide context for why this is below target.

**Accepted**:
> Your [deliverable name] has been received and meets the specification. Marked as complete. Next deliverable: [next item] due [date].

---

## 6. Escalation Framework

| Level | Trigger | Action | Timeline |
|-------|---------|--------|----------|
| **L0: Nudge** | 1-2 days overdue | Re-prompt the node | Immediate |
| **L1: Warning** | 3-5 days overdue OR quality below threshold | Flag in weekly status report to Caio | Next status report |
| **L2: Escalation** | >5 days overdue OR repeated quality issues (3+ consecutive below threshold) | Direct notification to Caio + recommendation | Within 24 hours |
| **L3: Chain Break** | Node fails entirely (no output after correction window) OR node abandons | Direct notification to Caio + Danilo + fallback protocol activation | Within 24 hours |

### Escalation Report Format

```markdown
## ESCALATION: [Level] — [Node] — [Deliverable]

**Date**: [date]
**Node**: [VA / MBA intern / VP]
**Deliverable**: [DEL-XX-NNN: name]
**Due date**: [original due date]
**Days overdue**: [N]
**Previous prompts sent**: [count] on [dates]
**Node response**: [summary of any response, or "No response"]
**Pattern**: [first occurrence / recurring — context]
**Recommendation**: [e.g., "Send final warning with 48-hour deadline" or "Activate fallback protocol per chain_specification.md Section 4"]
```

---

## 7. Status Reporting

### Weekly Chain Status Report

Generated every Monday (or on demand). Distributed to Caio (and Danilo if he wants it).

```markdown
# Recruiting Cascade — Weekly Status Report
**Week of**: [date]
**Report generated by**: Claude compliance agent

## Chain State
- VA: [active | complete | failed] — Week [N] of [max]
- MBA Intern: [not_started | active | complete | failed]
- VP: [not_started | active | complete | failed]
- Operator: [not_started | active | complete | failed]

## This Week's Activity

### VA Node
- **Deliverables due this week**: [list]
- **Deliverables submitted**: [list with status: accepted / needs revision / overdue]
- **Pipeline summary**: [N] candidates in pipeline, [N] new this week, [N] screened
- **On track for shortlist deadline?**: [Yes / At risk / No]
- **Flags**: [any concerns]

### [MBA / VP / Operator nodes as applicable]

## Escalations
- [List any active escalations, or "None"]

## Upcoming Deadlines (Next 7 Days)
- [Deliverable]: due [date]
- [Deliverable]: due [date]

## Open Decisions Blocking Progress
- [DEC-CHAIN-NNN]: [description] — blocks [what]
```

---

## 8. Integration with Contract Engineering

Each bilateral contract (in `va_package/bilateral_contract.md`, etc.) defines commitments using the event-based model from `project_specs/CONTRACT_ENGINEERING.md`:

```
TRIGGER EVENT → MONITORING → DEADLINE EVENT → FULFILLMENT EVENT → BREACH EVENT → CONSEQUENCE EVENT
```

The compliance agent operationalizes this:

| Contract Element | Agent Role |
|-----------------|-----------|
| **TRIGGER EVENT** | Agent detects trigger (e.g., VA starts → pipeline report schedule activates) |
| **MONITORING** | Agent checks deliverable_registry.md against submissions |
| **DEADLINE EVENT** | Agent prompts at deadline |
| **FULFILLMENT EVENT** | Agent evaluates submitted deliverable against spec |
| **BREACH EVENT** | Agent detects missed deadline or below-threshold quality |
| **CONSEQUENCE EVENT** | Agent escalates per framework; human executes consequence |

The agent does NOT execute consequences (contract termination, replacement, etc.). It detects breaches and escalates. Humans decide and act.

---

## 9. Tooling Requirements

### Minimum Viable Tooling (Phase 1)

| Need | Solution | Cost |
|------|----------|------|
| Deliverable submission | Shared Google Drive folder or Git repo | Free |
| Agent trigger | Caio runs Claude Code session weekly | Per-session API cost |
| Communication | WhatsApp or email (whatever the VA already uses) | Free |
| State tracking | `chain_state.json` in the rollout folder, updated by agent | Free |

### Upgraded Tooling (Phase 2)

| Need | Solution | Cost |
|------|----------|------|
| Deliverable submission | Lightweight project management tool (Notion, Linear, or even a simple Google Form → Sheet) | $0-20/mo |
| Agent trigger | Scheduled Claude API call (GitHub Actions or Apps Script) | $5-20/mo |
| Communication | Structured messages via tool or email automation | Included |
| State tracking | Automated from deliverable submissions | Included |

Danilo's framing: "a very dumb contract management tool." The tool needs to do three things:
1. Accept deliverable submissions (file upload or structured form)
2. Track deadlines (dates associated with deliverables)
3. Send notifications (reminders when deadlines approach)

Everything else (evaluation, escalation, status reporting) is handled by the Claude agent reading from the tool's data.

---

## 10. LLM Legibility Requirements

Per the LLM Legibility Guarantee principle (`CLAUDE_AS_OS_SYSTEM.md`):

1. **All deliverables must be plain text** (markdown preferred). No proprietary formats, no complex Excel, no PDFs.
2. **Structured data in JSON** where machine-readability matters (chain_state.json, deliverable tracking).
3. **Self-contained documents** — each deliverable has enough context to be evaluated independently.
4. **Consistent templates** — deliverable formats are standardized so the agent knows what to look for.
5. **Inline state tracking** — checkboxes, timestamps, status fields within documents.

If a deliverable can't be parsed by Claude, the compliance system breaks. Format compliance is therefore the first thing the agent checks.

---

## Version History

**v1.0.0 (2026-02-26)**: Initial specification. Agent capabilities and limitations defined. Per-node controller pattern. Prompting templates. Escalation framework (L0-L3). Status report format. Contract Engineering integration. Tooling requirements (Phase 1 and Phase 2). LLM legibility requirements.
