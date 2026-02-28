# Bilateral Contract: MBA Intern Engagement

**Version**: 1.0.0
**Date Created**: 2026-02-27
**Author**: Caio, Claude
**AI Model**: claude-opus-4-6
**Purpose**: Bilateral commitment between IonWave (via Caio/Danilo) and the MBA intern
**Status**: Draft
**Framework**: Contract Engineering (project_specs/CONTRACT_ENGINEERING.md)
**Related**: role_brief.md, deliverable_registry.md, chain_specification.md

---

## Parties

**Party A (IonWave / Project)**: Represented by Caio (operations) and Danilo (founder). Provides the MBA Brief, full Trade access, Claude workspace access, and equity compensation.

**Party B (MBA Intern)**: Engaged to find a VP-level deals/fundraising person for the IonWave recruiting cascade.

---

## 1. What the Project Commits To

### 1.1 Materials & Access

| Commitment | Specification | Timeline |
|------------|--------------|----------|
| **MBA Brief** | Complete package: role brief, VP candidate profile, sourcing methodology, screening criteria, pitch materials | Provided at engagement start (Day 0) |
| **Trade Pitch One-Pager** | The document the MBA intern uses to pitch VP candidates | Provided at Day 0 |
| **Full Trade access** | Complete imagination passet (41 TUPs) + data layer + Claude interface | Provided at Day 0 |
| **Claude workspace access** | Configured Claude session with pre-loaded Trade context, deliverable tracking, and outreach/evaluation assistance | Provided at Day 0 |
| **Responsiveness** | Caio responds to escalations within 24 hours on business days | Ongoing |
| **Clear feedback** | Specific written feedback on deliverables within 48 hours of submission | Within 48 hours |

### 1.2 Compensation

| Component | Specification |
|-----------|--------------|
| **Type** | Equity in IonWave venture |
| **Amount** | [TBD — DEC-CHAIN-001, resolved as equity; specific amount/terms not yet defined] |
| **Instrument** | [TBD — DEC-CHAIN-007: SAFE, convertible note, promise letter, or deferred grant — depends on pre-entity legal structure] |
| **Vesting** | [TBD — likely milestone-based: equity vests upon successful VP placement] |
| **Duration** | 8-14 weeks (extendable if pipeline progress is demonstrated) |

**Open items**: The equity amount, instrument, and vesting terms must be defined before the MBA intern signs this contract. A candidate cannot reasonably commit without knowing the specific equity offer.

### 1.3 Support

| Support Type | What It Means |
|-------------|---------------|
| **Onboarding** | Caio or designated contact walks the MBA intern through the brief and Trade context (60-90 min) |
| **Claude assistance** | Claude helps with Trade comprehension, outreach drafting, candidate evaluation, report formatting — available throughout |
| **Escalation path** | If the MBA intern encounters situations not covered by the methodology, Caio is the escalation point |
| **VP introduction support** | If warm intros would help reach specific VP candidates, Caio will evaluate and facilitate where possible |

---

## 2. What the MBA Intern Commits To

### 2.1 Deliverables

| ID | Deliverable | Due | Format | Minimum Standard |
|----|------------|-----|--------|-----------------|
| DEL-MBA-001 | **Onboarding Acknowledgment** | 1 week after start | Written Trade review summary + 5 questions + mini-pitch draft | Questions demonstrate Trade comprehension. Mini-pitch must accurately represent the opportunity. |
| DEL-MBA-002 | **VP Sourcing Plan** | Week 2 | Channels, target profiles, outreach timeline, volume targets | At least 3 sourcing channels, 50+ target names, realistic volume schedule |
| DEL-MBA-003 | **Biweekly Outreach Report** | Every 2 weeks (Fridays) | Outreach log with response rates, candidate pipeline status, analysis | Shows sustained outreach activity. Minimum 10 new contacts per biweekly period. |
| DEL-MBA-004 | **VP Candidate Shortlist** | By Week 8 (hard deadline: Week 12) | 2-3 candidates with complete rubric scoring per screening_criteria.md | Each candidate scored on all 6 dimensions. Minimum 3.5/5 weighted score. |
| DEL-MBA-005 | **VP Recommendation & Handoff** | 2 weeks after shortlist accepted | Top candidate + evaluation evidence + negotiation status + handoff plan | Clear recommendation with evidence. Compensation discussion summarized. Handoff logistics defined. |

### 2.2 Working Practices

| Practice | Specification |
|----------|--------------|
| **Work through Claude** | Outreach drafting, candidate evaluation, and report preparation should be done through the Claude workspace as much as practically possible |
| **Trade comprehension** | MBA intern must demonstrate genuine understanding of the Trade — enough to pitch it credibly and answer VP candidate questions |
| **Honest reporting** | Pipeline reports must reflect actual activity. If outreach is slow, say so. Don't inflate. |
| **Proactive communication** | If stuck, blocked, or behind — communicate immediately, don't wait for deadline |
| **Confidentiality** | Trade materials are confidential. Share only with candidates being actively evaluated, per the staged disclosure protocol in pitch_materials.md |

---

## 3. Event-Based Contract Model

### DEL-MBA-001: Onboarding Acknowledgment

```
TRIGGER EVENT:     MBA intern receives the MBA Brief + Trade access (Day 0)
MONITORING:        Claude tracks reading progress and acknowledgment submission
DEADLINE EVENT:    7 days after Day 0
FULFILLMENT EVENT: MBA intern submits Trade review + 5 questions + mini-pitch
BREACH EVENT:      No submission after 7 days, or submission shows no Trade engagement
CONSEQUENCE EVENT: Claude prompts for completion. If no submission by Day 10,
                   Caio contacts MBA intern directly.
                   If no submission by Day 14 with no explanation: engagement reconsidered.
```

### DEL-MBA-002: VP Sourcing Plan

```
TRIGGER EVENT:     Onboarding acknowledgment accepted
MONITORING:        Claude checks for sourcing plan submission
DEADLINE EVENT:    Week 2 (14 days after start)
FULFILLMENT EVENT: MBA intern submits sourcing plan with channels, targets, timeline
BREACH EVENT:      No submission, or plan lacks specificity (no target names, no channel detail)
CONSEQUENCE EVENT: Claude prompts for revision with feedback.
                   3-day extension for resubmission.
                   If still missing: L1 Warning to Caio.
```

### DEL-MBA-003: Biweekly Outreach Report

```
TRIGGER EVENT:     Every 2 weeks on Friday (recurring)
MONITORING:        Claude checks for report submission biweekly
DEADLINE EVENT:    End of day Friday, biweekly
FULFILLMENT EVENT: MBA intern submits outreach log with all required fields
BREACH EVENT:      Report missing, or report shows <10 new contacts/period
CONSEQUENCE EVENT:
  - Missing report: L0 Nudge. L1 Warning if 2 consecutive misses.
  - Below volume: Claude flags pattern. After 2 consecutive low-volume reports,
    L1 Warning: "Outreach volume consistently below target."
  - 3+ consecutive misses or below-volume: L2 Escalation to Caio.
```

### DEL-MBA-004: VP Candidate Shortlist

```
TRIGGER EVENT:     2+ candidates pass deep evaluation (or Week 8, whichever first)
MONITORING:        Claude tracks screening status in outreach reports
DEADLINE EVENT:    Week 8 (soft) / Week 12 (hard)
FULFILLMENT EVENT: MBA intern submits 2-3 candidates with full rubric scoring
BREACH EVENT:      No shortlist by Week 12, or candidates score <3.5
CONSEQUENCE EVENT:
  - Week 8 no shortlist: Claude prompts for status and revised timeline.
  - Week 10 no shortlist: L1 Warning. Caio evaluates pipeline health.
  - Week 12 no shortlist: L2 Escalation. Evaluate whether to extend,
    replace MBA intern, or activate fallback (DEC-CHAIN-006).
  - Shortlist below threshold: Return with specific feedback. 2-week revision window.
```

### DEL-MBA-005: VP Recommendation & Handoff

```
TRIGGER EVENT:     Shortlist accepted [by whom — DEC-CHAIN-003]
MONITORING:        Claude tracks recommendation submission
DEADLINE EVENT:    2 weeks after shortlist acceptance
FULFILLMENT EVENT: MBA intern submits top VP candidate with full evaluation + handoff plan
BREACH EVENT:      No recommendation after 2 weeks
CONSEQUENCE EVENT: L0 Nudge. If no response after 1 additional week,
                   Caio advances the strongest shortlist candidate directly.
```

---

## 4. Termination Conditions

### Project May Terminate If:

| Condition | When | Consequence |
|-----------|------|-------------|
| No onboarding acknowledgment | 14+ days after start | Engagement ends. No equity vested. |
| 3+ consecutive missed biweekly reports | After 3rd miss | Engagement ends. Equity vesting per milestone (if any milestones met). |
| No shortlist by Week 12 hard deadline | Week 12 | Engagement ends. Equity vesting per milestone. |
| Gross misrepresentation or confidentiality breach | Any time | Engagement ends immediately. No equity vested. |

### MBA Intern May Terminate If:

| Condition | When | Consequence |
|-----------|------|-------------|
| Project fails to provide promised materials/access | Within first 2 weeks | MBA intern may exit with no obligation |
| Equity terms not defined within 2 weeks of start | Week 2 | MBA intern may exit — cannot commit without knowing compensation |
| Caio consistently unresponsive (>48 hours on 3+ occasions) | Any time | MBA intern may exit with 2 weeks notice |
| Scope changes significantly | Any time | MBA intern may exit with 2 weeks notice |

---

## 5. Handoff Upon Completion

When the VP recommendation is accepted:

1. MBA intern introduces the VP candidate to Caio (or designated contact)
2. MBA intern provides full pipeline data (all candidates evaluated, not just shortlist)
3. MBA intern is available for 2 weeks of transition support (answer VP's questions about the evaluation process, candidate pipeline, and context gathered during sourcing)
4. Equity vesting milestones confirmed and recorded
5. Engagement concludes

The MBA intern does not manage the VP. The MBA intern does not continue in the chain unless a separate engagement is agreed.

---

## 6. Signatures

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project (IonWave) | _________________ | _________________ | _________________ |
| MBA Intern | _________________ | _________________ | _________________ |

---

## Open Items (Must Resolve Before Signing)

- [ ] DEC-CHAIN-001: Specific equity amount for MBA intern
- [ ] DEC-CHAIN-007: Equity instrument (SAFE, convertible note, promise letter, deferred grant)
- [ ] Vesting schedule: milestone-based (VP placement triggers vest) or time-based or hybrid?
- [ ] DEC-CHAIN-003: Who approves the VP shortlist/recommendation?
- [ ] Legal review: Pre-entity equity commitment mechanism
- [ ] What happens to equity if MBA intern finds the VP but the venture later fails?

---

## Version History

**v1.0.0 (2026-02-27)**: Initial bilateral contract. Event-based model for all 5 deliverables. Termination conditions for both parties. Handoff protocol. 6 open items flagged including pre-entity equity instrument question.
