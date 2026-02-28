# Bilateral Contract: VA Engagement

**Version**: 1.0.0
**Date Created**: 2026-02-27
**Author**: Caio, Claude
**AI Model**: claude-opus-4-6
**Purpose**: Bilateral commitment between IonWave (via Caio/Danilo) and the VA
**Status**: Draft
**Framework**: Contract Engineering (project_specs/CONTRACT_ENGINEERING.md)
**Related**: role_brief.md, deliverable_registry.md, chain_specification.md

---

## Parties

**Party A (IonWave / Project)**: Represented by Caio (operations) and Danilo (founder). Provides the VA Package, Trade Pitch One-Pager, Claude workspace access, and compensation.

**Party B (VA)**: Virtual Assistant contractor engaged to find an MBA intern type for the IonWave recruiting cascade.

---

## 1. What the Project Commits To

### 1.1 Materials & Access

| Commitment | Specification | Timeline |
|------------|--------------|----------|
| **VA Package** | Complete package: role brief, sourcing playbook, screening criteria, outreach templates | Provided at engagement start (Day 0) |
| **Trade Pitch One-Pager** | The document the VA uses to pitch the opportunity to candidates | Provided at Day 0 |
| **Claude workspace access** | Configured Claude session with pre-loaded context, deliverable tracking, and outreach assistance | Provided at Day 0 |
| **Responsiveness** | Caio responds to VA questions or escalations within 24 hours on business days | Ongoing |
| **Clear feedback** | If a deliverable doesn't meet spec, specific written feedback on what's missing and what's needed | Within 48 hours of submission |

### 1.2 Compensation

| Component | Amount | Schedule |
|-----------|--------|----------|
| **Retainer** | [AMOUNT TBD — DEC-CHAIN-005] | [SCHEDULE TBD — monthly? biweekly?] |
| **Duration** | 4-6 weeks (extendable to 8 weeks if shortlist progress is demonstrated) | — |

**Payment terms**: Cash compensation only. No equity. Paid on [schedule TBD] via [method TBD].

**Extension clause**: If the VA has not produced a shortlist by Week 6 but has demonstrated active outreach (pipeline reports show consistent volume and engagement), the engagement may be extended by 2 weeks at Caio's discretion. If no viable shortlist by Week 8, the engagement ends.

### 1.3 Support

| Support Type | What It Means |
|-------------|---------------|
| **Onboarding** | Caio walks the VA through the package and answers initial questions (30-60 min call or async exchange) |
| **Claude assistance** | Claude helps draft outreach, evaluate candidates, format reports — available throughout the engagement |
| **Escalation path** | If the VA encounters a situation not covered by the playbook, Caio is the escalation point |

---

## 2. What the VA Commits To

### 2.1 Deliverables

| ID | Deliverable | Due | Format | Minimum Standard |
|----|------------|-----|--------|-----------------|
| DEL-VA-001 | **Brief Acknowledgment** | 48 hours after package receipt | Written confirmation + 3 questions demonstrating comprehension | Questions must show the VA has read and understood the role brief and sourcing playbook |
| DEL-VA-002 | **Sourcing Plan** | Week 1 (7 days after start) | Markdown: channels identified, outreach volume targets, weekly timeline | At least 3 sourcing channels, realistic volume targets (15+ outreach/week) |
| DEL-VA-003 | **Weekly Pipeline Report** | Every Friday by end of day | Markdown table: candidate name, source channel, screening status, notes | Shows active outreach. Minimum 5 new contacts/week. |
| DEL-VA-004 | **Candidate Shortlist** | By Week 4 (hard deadline: Week 6) | Per screening_criteria.md shortlist format: scored rubric for each candidate | 3+ candidates scoring 3.5+/5 on the rubric |
| DEL-VA-005 | **Final Recommendation** | 1 week after shortlist accepted | Top candidate with rationale, rubric evidence, and any concerns | Clear recommendation with evidence, not just "I like this person" |

### 2.2 Working Practices

| Practice | Specification |
|----------|--------------|
| **Work through Claude** | Sourcing, screening evaluation, and report drafting should be done through the Claude workspace as much as practically possible |
| **Honest reporting** | Pipeline reports must reflect actual outreach activity. Do not inflate numbers. If a week was slow, say so. |
| **Proactive communication** | If you're stuck, blocked, or behind — say so immediately, don't wait for the deadline to pass |
| **Confidentiality** | The Trade materials (One-Pager, any Trade content shared) are confidential. Do not share beyond the candidates being pitched. |

---

## 3. Event-Based Contract Model

Per Contract Engineering framework: each deliverable follows the event chain.

### DEL-VA-001: Brief Acknowledgment

```
TRIGGER EVENT:     VA receives the VA Package (Day 0)
MONITORING:        Claude checks for acknowledgment submission
DEADLINE EVENT:    48 hours after Day 0
FULFILLMENT EVENT: VA submits written acknowledgment + 3 questions
BREACH EVENT:      No submission after 48 hours
CONSEQUENCE EVENT: Claude prompts (L0 Nudge). If no response after 72 hours,
                   Caio contacts VA directly. If no response after 96 hours,
                   engagement is reconsidered.
```

### DEL-VA-002: Sourcing Plan

```
TRIGGER EVENT:     Brief acknowledgment accepted
MONITORING:        Claude checks for sourcing plan submission
DEADLINE EVENT:    7 days after engagement start
FULFILLMENT EVENT: VA submits sourcing plan meeting format spec
BREACH EVENT:      No submission or plan below minimum (fewer than 3 channels)
CONSEQUENCE EVENT: Claude prompts for revision with specific feedback.
                   Deadline extended by 3 days for resubmission.
                   If still missing after extension: L1 Warning to Caio.
```

### DEL-VA-003: Weekly Pipeline Report

```
TRIGGER EVENT:     Every Friday (recurring)
MONITORING:        Claude checks for report submission weekly
DEADLINE EVENT:    End of day Friday
FULFILLMENT EVENT: VA submits pipeline report with all required fields
BREACH EVENT:      Report missing, or report shows <5 new contacts/week
CONSEQUENCE EVENT:
  - Missing report: L0 Nudge on Saturday. L1 Warning if 2 consecutive misses.
  - Below volume: Claude flags pattern. After 2 consecutive below-volume weeks,
    L1 Warning: "Pipeline volume is consistently below target."
  - 3+ consecutive misses: L2 Escalation to Caio with recommendation.
```

### DEL-VA-004: Candidate Shortlist

```
TRIGGER EVENT:     3+ candidates pass initial screening (or Week 4, whichever first)
MONITORING:        Claude tracks screening status in pipeline reports
DEADLINE EVENT:    Week 4 (soft) / Week 6 (hard)
FULFILLMENT EVENT: VA submits 3+ candidates with complete rubric scoring per
                   screening_criteria.md format
BREACH EVENT:      No shortlist by Week 6 OR shortlist candidates score <3.5
CONSEQUENCE EVENT:
  - Week 4 no shortlist: Claude prompts for status and revised timeline.
  - Week 6 no shortlist: L2 Escalation. Caio evaluates whether to extend
    (if pipeline progress visible) or terminate engagement.
  - Shortlist below threshold: Claude returns with specific feedback.
    VA gets 1 week to revise or add candidates.
```

### DEL-VA-005: Final Recommendation

```
TRIGGER EVENT:     Shortlist accepted [by whom — DEC-CHAIN-003]
MONITORING:        Claude tracks recommendation submission
DEADLINE EVENT:    1 week after shortlist acceptance
FULFILLMENT EVENT: VA submits top candidate with rationale and evidence
BREACH EVENT:      No recommendation after 1 week
CONSEQUENCE EVENT: L0 Nudge. If no response after 3 additional days,
                   Caio makes selection from shortlist directly.
```

---

## 4. Termination Conditions

### Project May Terminate If:

| Condition | When | Consequence |
|-----------|------|-------------|
| VA doesn't submit brief acknowledgment | 96+ hours after package receipt | Engagement ends. VA paid for days worked (if any). |
| 3+ consecutive missed pipeline reports | After 3rd miss | Engagement ends. VA paid through last complete week. |
| No shortlist by Week 6 hard deadline | Week 6 | Engagement ends. VA paid through Week 6. |
| No shortlist by Week 8 (if extended) | Week 8 | Engagement ends. VA paid through Week 8. |
| Gross misrepresentation | Any time | Engagement ends immediately. VA paid through last verified deliverable. |

### VA May Terminate If:

| Condition | When | Consequence |
|-----------|------|-------------|
| Project fails to provide promised materials | Within first week | VA may exit with no obligation |
| Caio consistently unresponsive (>48 hours on 3+ occasions) | Any time | VA may exit with 1 week notice, paid through exit |
| Scope changes significantly from this contract | Any time | VA may exit with 1 week notice, paid through exit |

---

## 5. Handoff Upon Completion

When the VA's engagement concludes (recommendation accepted):

1. VA submits all pipeline data (full candidate list with notes, not just shortlist)
2. VA introduces the selected MBA intern candidate to Caio (or designated contact)
3. VA is available for 1 week of transition support (answer questions the MBA intern may have about candidate pipeline)
4. Engagement ends. Final payment processed.

The VA does not manage the MBA intern. The VA does not continue in the chain. Clean handoff, clean exit.

---

## 6. Signatures

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project (IonWave) | _________________ | _________________ | _________________ |
| VA | _________________ | _________________ | _________________ |

---

## Open Items (Must Resolve Before Signing)

- [ ] DEC-CHAIN-005: VA retainer amount
- [ ] Payment schedule (monthly, biweekly, weekly?)
- [ ] Payment method (bank transfer, PayPal, Wise, etc.)
- [ ] DEC-CHAIN-003: Who approves the shortlist/recommendation? (VA autonomous, Claude-assisted, Caio backstop?)
- [ ] Legal review: Does this need formal legal contract or is this structural agreement sufficient?

---

## Version History

**v1.0.0 (2026-02-27)**: Initial bilateral contract. Event-based model applied to all 5 deliverables. Termination conditions for both parties. Handoff protocol. 5 open items flagged.
