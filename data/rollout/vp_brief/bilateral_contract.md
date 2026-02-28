# Bilateral Contract: VP Engagement

**Version**: 1.0.0
**Date Created**: 2026-02-27
**Author**: Caio, Claude
**AI Model**: claude-opus-4-6
**Purpose**: Bilateral commitment between IonWave (via Caio/Danilo) and the VP
**Status**: Draft
**Framework**: Contract Engineering (project_specs/CONTRACT_ENGINEERING.md)
**Related**: role_brief.md, deliverable_registry.md, chain_specification.md

---

## Parties

**Party A (IonWave / Project)**: Represented by Caio (operations) and Danilo (founder). Provides the VP Brief, full Trade access, Claude workspace access, and equity compensation.

**Party B (VP)**: Engaged to lead Capital Formation (seed fundraising) and recruit the Operator for IonWave.

---

## 1. What the Project Commits To

### 1.1 Materials & Access

| Commitment | Specification | Timeline |
|------------|--------------|----------|
| **VP Brief** | Complete package: role brief, integration requirements, operator recruitment guide, capital formation guide | Provided at engagement start (Day 0) |
| **Full Trade access** | Complete imagination passet (41 TUPs) + data layer + Claude interface | Provided at Day 0 |
| **M4 Fundraising playbook** | Complete fundraising methodology, investor targeting, pitch framework | Provided at Day 0 |
| **M1 Operator system** | Full operator compensation, onboarding, certification, contract template | Provided at Day 0 |
| **Claude workspace access** | Configured Claude session with full Trade context, deliverable tracking, fundraising and recruiting assistance | Provided at Day 0 |
| **Responsiveness** | Caio responds to escalations within 24 hours on business days | Ongoing |
| **Introduction support** | Warm introductions to investors/operators in project network, where available and appropriate | As requested |

### 1.2 Compensation

| Component | Specification |
|-----------|--------------|
| **Equity** | [AMOUNT TBD — DEC-CHAIN-002: range 5-10%, exact terms to be negotiated] |
| **Retainer** | [TBD — may be necessary to attract VP-caliber candidates] |
| **Instrument** | [TBD — DEC-CHAIN-007: SAFE, convertible note, promise letter, or deferred grant] |
| **Vesting** | [TBD — recommended: hybrid time + milestone. Milestones: integration artifact passed, operator placed, first capital committed] |

**Open items**: The equity amount, retainer, instrument, and vesting terms must be negotiated and defined before the VP signs. These terms are the centerpiece of the VP pitch — they must be compelling enough to attract deal-making talent while preserving sufficient equity for the Operator (15%) and other stakeholders.

### 1.3 Authority

| Domain | VP Authority | Project Authority |
|--------|-------------|-------------------|
| **Investor outreach** | VP decides who to approach and how | Project provides materials and intro support |
| **Investor terms** | VP negotiates within defined parameters (SAFE, $250-500K cap) | Danilo approves final term sheets |
| **Operator selection** | VP evaluates and recommends | [TBD — DEC-CHAIN-003: who makes final Operator decision?] |
| **Operator compensation** | VP presents M1 structure. Minor negotiation within defined bounds. | Danilo approves material deviations from M1 terms |
| **Spend authority** | None pre-funding | Post-funding: per Capital allocation plan |

---

## 2. What the VP Commits To

### 2.1 Deliverables

| ID | Deliverable | Due | Format | Minimum Standard |
|----|------------|-----|--------|-----------------|
| DEL-VP-001 | **Integration Work Artifact** | Week 2 (quality gate) | 2,000-3,000 word Trade narrative per integration_requirements.md | Must pass evaluation: accurate, own-voice, demonstrates deep comprehension |
| DEL-VP-002 | **Capital Formation Pipeline** | Week 3, updated biweekly | Investor pipeline tracker + strategy document | 50+ targets identified, outreach begun, strategy articulated |
| DEL-VP-003 | **Operator Sourcing Plan** | Week 3 | Channels, target profiles, timeline, evaluation approach | At least 3 channels, operator profile aligned with M1 |
| DEL-VP-004 | **Operator Candidate Shortlist** | By Week 6 (hard deadline: Week 10) | 2-3 candidates evaluated against M1 criteria | Candidates meet M1 profile, scored on evaluation framework |
| DEL-VP-005 | **Operator Confirmation & Handoff** | 2 weeks after shortlist accepted | Confirmed operator + compensation agreement + M1 onboarding plan | Operator committed, terms agreed, 3-week onboarding scheduled |

### 2.2 Working Practices

| Practice | Specification |
|----------|--------------|
| **Work through Claude** | Fundraising strategy, operator evaluation, and deliverables should be developed through the Claude workspace as much as practically possible |
| **Integration first** | Must complete DEL-VP-001 before proceeding with Capital Formation or Operator recruiting |
| **Time commitment** | Minimum 10 hours/week across both functions |
| **Honest reporting** | Pipeline reports must reflect actual activity and progress |
| **Confidentiality** | Full Trade and investor pipeline details are confidential |
| **Fiduciary responsibility** | VP represents IonWave's interests in investor and operator conversations. No side deals, no conflicts of interest. |

---

## 3. Event-Based Contract Model

### DEL-VP-001: Integration Work Artifact

```
TRIGGER EVENT:     VP receives VP Brief + full Trade access (Day 0)
MONITORING:        Claude tracks reading progress and artifact submission
DEADLINE EVENT:    End of Week 2
FULFILLMENT EVENT: VP submits integration artifact meeting quality criteria
BREACH EVENT:      No submission by Week 2, or artifact fails evaluation
CONSEQUENCE EVENT:
  - No submission: Claude prompts. 3-day extension.
  - Failed evaluation: Return with specific feedback. 1-week revision window.
  - Failed twice: L2 Escalation. Reconsider VP placement.
                   VP who cannot demonstrate Trade comprehension cannot
                   credibly pitch investors or evaluate operators.
```

**Quality gate**: DEL-VP-002 through DEL-VP-005 do not activate until DEL-VP-001 passes.

### DEL-VP-002: Capital Formation Pipeline

```
TRIGGER EVENT:     DEL-VP-001 passes evaluation
MONITORING:        Claude tracks pipeline submission biweekly
DEADLINE EVENT:    Initial: Week 3. Then biweekly on Fridays.
FULFILLMENT EVENT: VP submits pipeline update with all required fields
BREACH EVENT:      Missing update, or pipeline shows no outreach activity
CONSEQUENCE EVENT:
  - Missing: L0 Nudge. L1 Warning if 2 consecutive misses.
  - No activity: Claude flags. After 2 consecutive zero-activity periods,
    L2 Escalation: "Capital Formation showing no progress."
```

### DEL-VP-003: Operator Sourcing Plan

```
TRIGGER EVENT:     DEL-VP-001 passes evaluation
MONITORING:        Claude checks for sourcing plan submission
DEADLINE EVENT:    Week 3
FULFILLMENT EVENT: VP submits operator sourcing plan aligned with M1
BREACH EVENT:      No submission or plan misaligned with M1 operator profile
CONSEQUENCE EVENT: Claude prompts with specific feedback. 5-day extension.
```

### DEL-VP-004: Operator Candidate Shortlist

```
TRIGGER EVENT:     Operator sourcing in progress, 2+ candidates evaluated
MONITORING:        Claude tracks operator pipeline in biweekly reports
DEADLINE EVENT:    Week 6 (soft) / Week 10 (hard)
FULFILLMENT EVENT: VP submits 2-3 candidates with M1-aligned evaluation
BREACH EVENT:      No shortlist by Week 10
CONSEQUENCE EVENT:
  - Week 6 no shortlist: Status check and revised timeline.
  - Week 8 no shortlist: L1 Warning.
  - Week 10 no shortlist: L2 Escalation. Evaluate whether to extend,
    pivot sourcing strategy, or activate fallback.
```

### DEL-VP-005: Operator Confirmation & Handoff

```
TRIGGER EVENT:     Shortlist accepted
MONITORING:        Claude tracks confirmation and handoff progress
DEADLINE EVENT:    2 weeks after shortlist acceptance
FULFILLMENT EVENT: Confirmed operator, compensation agreement, onboarding plan
BREACH EVENT:      No confirmation after 2 weeks
CONSEQUENCE EVENT: L0 Nudge. If negotiation is in progress, extend by 2 weeks
                   with status reporting. If stalled, L2 Escalation.
```

---

## 4. Termination Conditions

### Project May Terminate If:

| Condition | When | Consequence |
|-----------|------|-------------|
| Integration artifact fails twice | After second failed attempt | Engagement ends. No equity vested. |
| 3+ consecutive missed deliverables across any function | After 3rd miss | Engagement ends. Equity vesting per milestones achieved. |
| No operator shortlist by Week 10 hard deadline | Week 10 | Engagement ends for operator function. Capital Formation may continue if productive. |
| Conflict of interest discovered | Any time | Engagement ends immediately. No equity vested. |
| No Capital Formation activity for 4+ weeks | Any time | L2 Escalation. If no resolution, engagement ends for Capital Formation function. |

### VP May Terminate If:

| Condition | When | Consequence |
|-----------|------|-------------|
| Equity terms not finalized within 2 weeks of start | Week 2 | VP may exit with no obligation |
| Project fails to provide promised materials/access | Within first 2 weeks | VP may exit with no obligation |
| Project leadership consistently unresponsive (>48 hours on 3+ occasions) | Any time | VP may exit with 2 weeks notice |
| Scope changes significantly from this contract | Any time | VP may exit with 2 weeks notice, equity vesting per milestones achieved |
| Legal/ethical concern with the venture | Any time | VP may exit immediately with no obligation |

---

## 5. Ongoing Relationship

Unlike the VA and MBA intern (who exit after their node is complete), the VP's relationship with IonWave may be **ongoing**:

- **Capital Formation continues** after the Operator is placed. The Operator needs capital to execute.
- **Advisor/Board role possible** — depending on equity level and mutual interest, the VP may transition to a board or advisory role post-Operator placement.
- **Future fundraising** — if IonWave validates and needs Series Seed or A, the VP may lead that raise.

The specifics of the ongoing relationship should be discussed and defined as the engagement matures. This contract covers the initial engagement (find the Operator + begin Capital Formation). Continuation terms are negotiated separately.

---

## 6. Signatures

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project (IonWave) | _________________ | _________________ | _________________ |
| VP | _________________ | _________________ | _________________ |

---

## Open Items (Must Resolve Before Signing)

- [ ] DEC-CHAIN-002: VP equity amount (5%? 7%? 10%?)
- [ ] VP retainer amount (if any)
- [ ] DEC-CHAIN-007: Equity instrument (SAFE, convertible note, promise letter, deferred grant)
- [ ] Vesting schedule and milestone definitions
- [ ] DEC-CHAIN-003: Who approves the Operator selection? (VP autonomous, Caio backstop, calibration session with Danilo?)
- [ ] VP authority boundaries: what investor terms can VP agree to without Danilo approval?
- [ ] Ongoing relationship: what happens after Operator is placed?
- [ ] Legal review: pre-entity equity commitment, fiduciary responsibilities
- [ ] Non-compete/exclusivity: can VP work on other ventures simultaneously?

---

## Version History

**v1.0.0 (2026-02-27)**: Initial bilateral contract. Event-based model for all 5 deliverables. Quality gate on integration artifact. Termination conditions for both parties. Ongoing relationship framework. 9 open items flagged.
