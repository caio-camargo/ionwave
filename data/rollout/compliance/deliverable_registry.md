# Deliverable Registry

**Version**: 1.0.0
**Date Created**: 2026-02-26
**Author**: Caio, Claude
**AI Model**: claude-sonnet-4-6
**Purpose**: Machine-readable checklist of all expected deliverables across all chain nodes. The compliance agent reads this to know what to check, when, and how.
**Status**: Draft
**Related**: agent_specification.md, chain_specification.md

---

## How This Document Works

Each deliverable has:
- **ID**: Unique identifier (DEL-{NODE}-{NNN})
- **Trigger**: What activates this deliverable (event-based, not calendar-based)
- **Due**: When it must be submitted (relative to trigger)
- **Format**: What it must look like (structure, required fields)
- **Eval criteria**: What the agent checks (quantitative/structural)
- **Human eval needed**: What requires human judgment (flagged for review)
- **If missing**: What the agent says/does
- **Escalation**: When to escalate and to whom

---

## VA Node Deliverables

### DEL-VA-001: Brief Acknowledgment

| Field | Value |
|-------|-------|
| **Trigger** | VA receives the VA Package |
| **Due** | 48 hours after receipt |
| **Format** | Written message: (1) confirmation of reading the brief, (2) summary of the role in their own words (3-5 sentences), (3) at least 2 questions |
| **Eval criteria** | Summary accurately describes the job (find MBA intern, not run business). Questions show engagement, not confusion about basics. |
| **Human eval needed** | Are the questions good? Do they show the VA understood the role? |
| **If missing (at deadline)** | "Have you completed your review of the VA brief? Please share: (1) your summary of the role in 3-5 sentences, (2) at least 2 questions." |
| **Escalation** | L1 Warning if >3 days. L2 if >5 days (possible mismatch — VA may not be right fit). |

---

### DEL-VA-002: Sourcing Plan

| Field | Value |
|-------|-------|
| **Trigger** | After DEL-VA-001 accepted |
| **Due** | 7 days after DEL-VA-001 |
| **Format** | Markdown document with: (1) 3+ sourcing channels identified (with rationale), (2) outreach volume targets (minimum 20 outreaches/week), (3) timeline to shortlist (target: Week 4), (4) screening criteria they'll use (must align with `va_package/screening_criteria.md`) |
| **Eval criteria** | At least 3 channels. Volume target >= 20/week. Timeline <= 6 weeks to shortlist. Screening criteria reference the provided rubric. |
| **Human eval needed** | Are the channels realistic? Is the volume achievable? |
| **If missing** | "Your sourcing plan was due [date]. Please submit: channels (3+), outreach volume targets, timeline, and screening approach." |
| **Escalation** | L1 if >3 days late. L2 if >7 days (VA may be stalled). |

---

### DEL-VA-003: Weekly Pipeline Report

| Field | Value |
|-------|-------|
| **Trigger** | Every Friday after DEL-VA-002 accepted |
| **Due** | End of day Friday, every week |
| **Format** | Markdown table with columns: Candidate Name, Source Channel, Date Contacted, Response Status (no reply / interested / screened / rejected / advanced), Screening Score (if screened), Notes |
| **Eval criteria** | At least 5 new contacts per week. At least 1 candidate in "screened" or "advanced" status by Week 3. Table format correct (all columns present). |
| **Human eval needed** | Quality of candidates (are they actually MBA-intern-caliber?). Pattern detection (all rejections = bad pitch or wrong channels). |
| **If missing** | "Weekly pipeline report is due today. Please submit a table with: candidate name, source, contact date, status, screening score (if applicable), notes." |
| **Escalation** | L0 Nudge if missed once. L1 Warning if missed 2 consecutive weeks. L2 if missed 3 weeks (VA likely disengaged). |

**Agent pattern detection**: If pipeline reports show >80% "no reply" rate for 3 consecutive weeks, flag: "Response rate is below 20%. Consider adjusting outreach templates or channels."

---

### DEL-VA-004: Candidate Shortlist

| Field | Value |
|-------|-------|
| **Trigger** | 3+ candidates pass initial screening (score above threshold in screening criteria) |
| **Due** | Within 4 weeks of VA start (hard deadline: 6 weeks) |
| **Format** | Structured profiles for each candidate: (1) Name & contact, (2) Background summary (education, experience, relevant skills), (3) Screening rubric scores (per `va_package/screening_criteria.md`), (4) VA's assessment (2-3 sentences), (5) Availability and compensation expectations |
| **Eval criteria** | 3+ candidates. All rubric dimensions scored. Minimum threshold scores met per screening criteria. Background summaries are substantive (not just a LinkedIn paste). |
| **Human eval needed** | Are these actually good candidates? Does the VA's assessment show good judgment? |
| **If missing at Week 4** | "You've been sourcing for 4 weeks. A shortlist of 3+ candidates is expected now. Current pipeline shows [N] candidates screened. Please submit your shortlist or explain what's blocking progress." |
| **If missing at Week 6 (hard deadline)** | "Hard deadline for MBA intern shortlist has been reached (Week 6). Current status: [N] candidates screened, [N] above threshold. Escalating to [oversight] for decision on next steps." |
| **Escalation** | L1 at Week 4 if no shortlist. L2 at Week 5. L3 at Week 6 (triggers fallback protocol). |

---

### DEL-VA-005: Final Recommendation

| Field | Value |
|-------|-------|
| **Trigger** | Shortlist reviewed (by designated approver — see DEC-CHAIN-003) |
| **Due** | 1 week after shortlist submission |
| **Format** | (1) Top candidate with detailed rationale (why this person over others), (2) Second choice (backup), (3) Any concerns or risks flagged, (4) Proposed next steps (intro meeting, contract discussion) |
| **Eval criteria** | Recommendation references screening scores. Rationale is specific (not "they seemed good"). Backup candidate identified. |
| **Human eval needed** | Final approval decision (per DEC-CHAIN-003). |
| **If missing** | "Your final recommendation was due [date]. Please submit: top candidate with rationale, backup candidate, concerns, and proposed next steps." |
| **Escalation** | L1 if >3 days. L2 if >7 days. |

**Chain transition**: When DEL-VA-005 is accepted and MBA intern is confirmed, VA node status → complete. MBA node status → active. MBA deliverable schedule activates.

---

## MBA Intern Node Deliverables

### DEL-MBA-001: Onboarding Acknowledgment

| Field | Value |
|-------|-------|
| **Trigger** | MBA intern receives the MBA Brief + Trade access |
| **Due** | 72 hours after receipt (longer than VA — more material to review) |
| **Format** | (1) Confirmation of reading the MBA Brief, (2) Summary of their role (find the VP) in their own words, (3) Summary of the Trade opportunity (demonstrates they reviewed the one-pager and skimmed the passet), (4) 3+ questions |
| **Eval criteria** | Role summary is accurate. Trade summary shows genuine engagement (not just regurgitation). Questions are substantive. |
| **Human eval needed** | Does this person actually understand what they're doing? |
| **If missing** | "Have you completed your review of the MBA Brief and Trade materials? Please share: (1) your understanding of your role, (2) a summary of the Trade opportunity, (3) at least 3 questions." |
| **Escalation** | L1 if >5 days. L2 if >7 days. |

---

### DEL-MBA-002: VP Sourcing Plan

| Field | Value |
|-------|-------|
| **Trigger** | After DEL-MBA-001 accepted |
| **Due** | 7 days after onboarding acknowledgment |
| **Format** | (1) VP candidate profile adapted from `mba_brief/vp_candidate_profile.md`, (2) 5+ sourcing channels with rationale, (3) outreach volume targets (minimum 10 quality outreaches/week — lower volume, higher quality than VA), (4) Timeline to shortlist (target: Week 8, hard deadline: Week 12), (5) Pitch strategy (how they'll present the opportunity to VP candidates) |
| **Eval criteria** | VP profile aligns with `vp_candidate_profile.md`. 5+ channels. Volume >= 10/week. Timeline <= 12 weeks. Pitch strategy is articulated. |
| **Human eval needed** | Is the pitch strategy compelling? Are the channels realistic for VP-level recruiting? |
| **If missing** | "Your VP sourcing plan was due [date]. Please submit: VP profile, sourcing channels (5+), volume targets, timeline, and pitch strategy." |
| **Escalation** | L1 if >5 days. L2 if >10 days (serious stall). |

---

### DEL-MBA-003: Biweekly Outreach Report

| Field | Value |
|-------|-------|
| **Trigger** | Every other Friday after DEL-MBA-002 accepted |
| **Due** | End of day, every other Friday |
| **Format** | (1) Outreach log: VP candidate name, channel, date contacted, response, (2) Conversations in progress (who's interested, what stage), (3) Pitch feedback (what's resonating, what's not), (4) Pipeline funnel: contacted → responded → interested → screened → advanced |
| **Eval criteria** | Minimum 10 new quality outreaches per 2-week period. At least 1 conversation in progress by Week 4 of MBA's tenure. Funnel data present. |
| **Human eval needed** | Quality of conversations. Whether pitch feedback suggests the approach needs adjustment. |
| **If missing** | "Your biweekly outreach report is due today. Please submit: outreach log, conversations in progress, pitch feedback, and pipeline funnel." |
| **Escalation** | L0 Nudge if missed once. L1 if missed twice. L2 if missed three times. |

**Agent pattern detection**: If contacted → responded rate is <10% after 4 weeks, flag: "VP response rate is very low. Review pitch materials and channels. This is the hardest link in the chain — consider whether adjustments are needed."

---

### DEL-MBA-004: VP Candidate Shortlist

| Field | Value |
|-------|-------|
| **Trigger** | 2+ VP candidates pass screening (per `mba_brief/screening_criteria.md`) |
| **Due** | Within 8 weeks of MBA start (hard deadline: 12 weeks) |
| **Format** | Per candidate: (1) Name & background, (2) Why they fit the VP profile, (3) Screening rubric scores, (4) Conversation history summary, (5) Their expressed interest level and conditions (comp expectations, time commitment), (6) MBA intern's assessment and recommendation |
| **Eval criteria** | 2+ candidates (VP pool is smaller — lower bar than VA's 3+). Rubric dimensions scored. Interest level and conditions documented. |
| **Human eval needed** | This is the critical handoff. Are these VP-caliber people? Does the MBA intern's judgment hold up? |
| **If missing at Week 8** | "VP candidate shortlist expected at Week 8. Current pipeline: [N] contacted, [N] screened, [N] above threshold. Please submit shortlist or provide a status update on the most promising conversations." |
| **If missing at Week 12 (hard deadline)** | "Hard deadline for VP shortlist reached (Week 12). Escalating to [oversight] for decision on chain continuation. Options: extend timeline, replace MBA intern, activate fallback per chain_specification.md." |
| **Escalation** | L1 at Week 8 if no shortlist. L2 at Week 10. L3 at Week 12 (triggers fallback). |

---

### DEL-MBA-005: VP Recommendation & Handoff

| Field | Value |
|-------|-------|
| **Trigger** | Shortlist reviewed and approved |
| **Due** | 2 weeks after shortlist (VP negotiation and confirmation) |
| **Format** | (1) Confirmed VP with signed bilateral contract (or agreement in principle), (2) Handoff package prepared (VP Brief + Trade access + integration requirements), (3) Transition plan (MBA intern's role going forward — done? advisory? continues?) |
| **Eval criteria** | VP confirmed and committed. Contract terms documented. Handoff package assembled. |
| **Human eval needed** | Contract terms review. VP commitment is genuine. |
| **If missing** | "VP confirmation and handoff was due [date]. Please provide: VP status, contract status, and handoff preparation status." |
| **Escalation** | L1 if >7 days. L2 if VP backs out (return to shortlist or fallback). |

**Chain transition**: When DEL-MBA-005 complete and VP confirmed, MBA node → complete. VP node → active.

---

## VP Node Deliverables

### DEL-VP-001: Integration Work Artifact

| Field | Value |
|-------|-------|
| **Trigger** | VP receives VP Brief + full Trade access |
| **Due** | 2 weeks after receipt |
| **Format** | Written document (2-5 pages): (1) The Trade in the VP's own words — what the business is, why it works, what the risks are, (2) The 3 weakest assumptions in the Trade and proposed alternatives, (3) Capital Formation strategy adapted to VP's own network and approach, (4) Operator profile adapted from M1 with VP's perspective |
| **Eval criteria** | Demonstrates genuine engagement with the Trade (not surface-level). Weakest assumptions are real (not softball). Capital Formation strategy is concrete (names channels, not just "I'll make calls"). |
| **Human eval needed** | This IS the integration work. Quality of analysis must be evaluated by someone who knows the Trade (Caio or calibration session with Danilo if in scope). |
| **If missing** | "Your integration work artifact is due [date]. This is the most important deliverable in your onboarding — it demonstrates that you've processed the Trade at depth. Please submit: Trade summary in your own words, 3 weakest assumptions with alternatives, Capital Formation strategy, and Operator profile." |
| **Escalation** | L1 if >5 days. L2 if >10 days (VP may not be doing the work). L3 if >14 days (serious concern about VP commitment). |

**This is the quality gate for the VP.** If the integration artifact is thin, the VP hasn't done the work. Per Three Models methodology: if integration is thin, the partnership doesn't activate.

---

### DEL-VP-002: Capital Formation Pipeline

| Field | Value |
|-------|-------|
| **Trigger** | After DEL-VP-001 accepted |
| **Due** | Ongoing — first report 2 weeks after integration, then biweekly |
| **Format** | (1) Outreach log: advisor/investor name, type (advisor/investor/both), date contacted, status, (2) Active conversations summary, (3) Advisor insights (what are they saying about the business? any TUP adjustments needed?), (4) Capital committed or in discussion |
| **Eval criteria** | Minimum 10 outreaches in first 2-week period. At least 2 active conversations by Week 4. Advisor insights documented (not just "had a good call"). |
| **Human eval needed** | Quality of advisor insights. Whether Capital Formation is progressing. |
| **If missing** | "Capital Formation pipeline report is due. Please submit: outreach log, active conversations, advisor insights, and capital status." |
| **Escalation** | L1 if missed once. L2 if missed twice (VP may be focused only on Operator search). |

---

### DEL-VP-003: Operator Sourcing Plan

| Field | Value |
|-------|-------|
| **Trigger** | After DEL-VP-001 accepted (parallel with Capital Formation) |
| **Due** | 1 week after integration artifact accepted |
| **Format** | (1) Operator candidate profile (adapted from M1), (2) Sourcing channels, (3) Screening approach (including M1 PM Competence Framework), (4) Timeline to recommendation |
| **Eval criteria** | Profile aligns with M1. Channels identified. PM Competence Framework referenced. Timeline <= 6 weeks. |
| **Human eval needed** | Is the VP's read on what kind of operator is needed correct? |
| **If missing** | "Operator sourcing plan due [date]. Please submit: operator profile, channels, screening approach, timeline." |
| **Escalation** | Standard (L1 at +5 days). |

---

### DEL-VP-004: Operator Shortlist

| Field | Value |
|-------|-------|
| **Trigger** | 2+ candidates pass VP screening |
| **Due** | Within 4 weeks of sourcing plan (hard deadline: 6 weeks) |
| **Format** | Per candidate: (1) Background, (2) PM Competence self-assessment score, (3) VP's evaluation, (4) Comp expectations vs M1 offer, (5) Availability |
| **Eval criteria** | 2+ candidates. PM Competence score >= 60. Comp expectations aligned with M1 structure. |
| **Human eval needed** | Operator quality. PM Competence Framework alignment. |
| **If missing at Week 4** | "Operator shortlist expected. Current pipeline status?" |
| **If missing at Week 6** | Escalate to L3 — triggers fallback. |

---

### DEL-VP-005: Operator Confirmation & Handoff

| Field | Value |
|-------|-------|
| **Trigger** | Operator selected, contract negotiated |
| **Due** | 2 weeks after shortlist |
| **Format** | (1) Confirmed Operator with signed contract (per M1 template), (2) Onboarding plan activated (M1 3-week reading plan), (3) Calibration session scheduled (if applicable per DEC-CHAIN-003) |
| **Eval criteria** | Contract signed. Onboarding scheduled. All M1 certification prerequisites in motion. |
| **Human eval needed** | Contract review. Calibration session participation (if in scope). |
| **If missing** | Standard prompts. |

**Chain transition**: When DEL-VP-005 complete, VP node → complete (for Operator search; Capital Formation continues). Operator node → active. Operator enters M1 onboarding.

---

## Summary Table

| ID | Node | Deliverable | Due (relative) | Cadence |
|----|------|------------|----------------|---------|
| DEL-VA-001 | VA | Brief Acknowledgment | +48 hrs from start | One-time |
| DEL-VA-002 | VA | Sourcing Plan | +7 days from DEL-VA-001 | One-time |
| DEL-VA-003 | VA | Pipeline Report | Every Friday | Weekly |
| DEL-VA-004 | VA | Candidate Shortlist | Week 4 (hard: Week 6) | One-time |
| DEL-VA-005 | VA | Final Recommendation | +7 days from shortlist | One-time |
| DEL-MBA-001 | MBA | Onboarding Acknowledgment | +72 hrs from start | One-time |
| DEL-MBA-002 | MBA | VP Sourcing Plan | +7 days from DEL-MBA-001 | One-time |
| DEL-MBA-003 | MBA | Biweekly Outreach Report | Every other Friday | Biweekly |
| DEL-MBA-004 | MBA | VP Shortlist | Week 8 (hard: Week 12) | One-time |
| DEL-MBA-005 | MBA | VP Recommendation & Handoff | +14 days from shortlist | One-time |
| DEL-VP-001 | VP | Integration Work Artifact | +14 days from start | One-time |
| DEL-VP-002 | VP | Capital Formation Pipeline | Biweekly after DEL-VP-001 | Biweekly |
| DEL-VP-003 | VP | Operator Sourcing Plan | +7 days from DEL-VP-001 | One-time |
| DEL-VP-004 | VP | Operator Shortlist | Week 4 (hard: Week 6) | One-time |
| DEL-VP-005 | VP | Operator Confirmation | +14 days from shortlist | One-time |

**Total: 15 deliverables across 3 active nodes (Operator onboarding handled by M1).**

---

## Version History

**v1.0.0 (2026-02-26)**: Initial deliverable registry. 15 deliverables across VA (5), MBA intern (5), VP (5). Each with trigger, deadline, format, eval criteria, escalation path. Agent pattern detection flags included for pipeline and outreach metrics.
