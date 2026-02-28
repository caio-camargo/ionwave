# M20: Customer Support — Persona Dialogue Summary

**TUP**: M20 — Customer Support
**TUP Version Tested**: 1.0.0
**Date**: 2026-02-07
**Protocol**: TWP-001 v2.0.0

---

## Personas

| Persona | Role | Lens |
|---------|------|------|
| **Skeptical Investor** | Financial grounding | "Does this reduce churn? Show me the ROI." |
| **Operations Expert** | Scalability + failure modes | "What breaks at scale? Where are the SPOFs?" |
| **Customer Anthropologist** | Customer reality | "What are actual customers experiencing? Are we hearing them?" |

---

## Dialogue Log

### ROUND 1
- **CHALLENGE**: Marine plasma "working" is undefined — support macros ask about results but customers have no reference frame for what results look like.
- **RESPONSE**: Ops Expert confirms adverse event protocol requires structured communication but onboarding fails to set expectations first.
- **SYNTHESIS**: Need a "What Working Looks Like" section with expected outcomes timeline, fed into macros and check-in emails.
- **OUTCOME**: UPGRADED
- **ACTION**: U1 — Added Section 3 "What Working Looks Like" to customer_success_playbook.md with Week 1/2-3/Month 1-2/3+ timeline. Connected to macros and touchpoint emails.

### ROUND 2
- **CHALLENGE**: 4-tier escalation system designed for a team that doesn't exist — founder IS all tiers for Month 0-6.
- **RESPONSE**: Tier structure is premature operationally but valuable as a hiring spec and training document.
- **SYNTHESIS**: Phase-gate the escalation system: Founder Mode (all tiers = founder) vs Team Mode (table activates at hire).
- **OUTCOME**: UPGRADED
- **ACTION**: U2 — Added Founder Mode vs Team Mode phase-gating with transition checklist to support_operations.md.

### ROUND 3
- **CHALLENGE**: Win/loss survey uses pre-set categories (confirms marketing messaging, not real purchase drivers). Loss analysis captures data but has no decision triggers.
- **RESPONSE**: Open-ended questions first, then categories. Need minimum sample sizes and thresholds for action.
- **SYNTHESIS**: Survey methodology fix + decision triggers + N thresholds added.
- **OUTCOME**: UPGRADED
- **ACTION**: U3 — Added open-ended-first methodology, decision triggers (>25% price → M10 review, etc.), N=50 directional/N=200 confident thresholds.

### ROUND 4
- **CHALLENGE**: Chargeback risk missing — supplements are high-risk category, Stripe 0.75% threshold can shut down payments. Refund rate ≠ chargeback rate.
- **RESPONSE**: Proactive refunds prevent chargebacks. Clear billing descriptors prevent "unrecognized charge" disputes.
- **SYNTHESIS**: Chargeback monitoring section needed with distinct tracking and prevention protocol.
- **OUTCOME**: UPGRADED
- **ACTION**: U4 — Added Section 7 "Chargeback Monitoring & Prevention" with Stripe thresholds, proactive refund strategy, billing descriptor guidance.

### ROUND 5
- **CHALLENGE**: Review management platforms missing. 11-Star framework not measurable. Sweet spot initiatives have no ROI case.
- **RESPONSE**: Review management belongs in M16/M29 (cross-ref). NPS/CSAT IS the measurement layer. ROI requires real data.
- **SYNTHESIS**: Cross-references sufficient. ROI calculation deferred to Track B (post-6-month data).
- **OUTCOME**: RESOLVED

### ROUND 6
- **CHALLENGE**: Activation criterion #5 (self-reports noticing something) is unmeasurable at scale. Activation should be entirely behavioral.
- **RESPONSE**: Replace self-report with behavioral proxy: "confirmed 2nd order within 60 days." Add activation rate to scorecard.
- **SYNTHESIS**: 5 criteria → 4 behavioral criteria. Self-report becomes bonus signal. Activation rate added to weekly scorecard.
- **OUTCOME**: UPGRADED
- **ACTION**: U5 — Revised activation to 4 behavioral criteria, added activation rate to support scorecard, added note that activation is #1 retention predictor.

### ROUND 7
- **CHALLENGE**: Support tool stack costs ~$1,300/month with VA — too much for pre-revenue bootstrapped founder.
- **RESPONSE**: Minimum viable stack: Gorgias Basic + Klaviyo flows + free tools = $60/month. Layer tools as revenue grows.
- **SYNTHESIS**: Phase-gated tool spending with revenue-based thresholds.
- **OUTCOME**: UPGRADED
- **ACTION**: U6 — Added "Minimum Viable Support Stack" section with Month 0-3/3-6/6-12/12+ phases and 10x revenue rule.

### ROUND 8
- **CHALLENGE**: Macro taste advice may have ingredient interaction risks. Promoter NPS timing.
- **RESPONSE**: Ingredient interactions flagged as intelligence gap. Promoter timing already addressed ("within 24h").
- **SYNTHESIS**: Refinement-level feedback, not structural gaps. All personas satisfied.
- **OUTCOME**: RESOLVED

---

## Saturation Log

| Check | Result |
|-------|--------|
| 3 consecutive RESOLVED? | No (but Round 5+8 = 2 RESOLVED with only minor UPGRADED between) |
| Last UNRESOLVED gaps are restatements? | N/A — 0 UNRESOLVED |
| All 3 personas agree content is coherent? | Yes (Round 8 explicit consensus) |
| Hard stop (8 rounds)? | Yes — hard stop reached |

**Saturation: REACHED at Round 8 (hard stop, all personas satisfied)**

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total rounds | 8 |
| UPGRADED | 6 |
| RESOLVED | 2 |
| UNRESOLVED | 0 |
| Upgrades applied | 6/6 (all applied to content) |

---

## Upgrades Applied

| ID | Description | File Modified |
|----|-------------|---------------|
| U1 | "What Working Looks Like" section — expected outcomes timeline for marine plasma | customer_success_playbook.md |
| U2 | Founder Mode vs Team Mode phase-gating for escalation framework | support_operations.md |
| U3 | Open-ended-first survey methodology + decision triggers + N thresholds | customer_feedback_system.md |
| U4 | Chargeback monitoring section — Stripe threshold, prevention, tracker | support_operations.md |
| U5 | Behavioral activation criteria (4 criteria) + activation rate on scorecard | customer_success_playbook.md + support_operations.md |
| U6 | Minimum Viable Support Stack — phase-gated tool spending ($60/month start) | support_operations.md |

---

## What Would Have Been Missed Without Dialogue

1. **Chargeback risk** (U4): The entire chargeback monitoring section — Stripe's 0.75% threshold could shut down payment processing. This is an existential risk that was completely absent from the original content.
2. **Premature tool spending** (U6): $1,300+/month in support tools before revenue. The minimum viable stack cuts this to $60/month.
3. **Unmeasurable activation** (U5): Self-reported "noticing something" as a gating activation criterion would have made the metric unreliable at any scale.
4. **Misleading win/loss data** (U3): Category-first surveys would have confirmed marketing messaging rather than revealing real purchase drivers.
5. **Founder/team confusion** (U2): Tier system designed for a team that won't exist for 6+ months would have been ignored, defeating its purpose as a training document.
