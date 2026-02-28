# M17: Expert Persona Dialogue Summary

**TUP**: M17 — Email & SMS
**Version**: 1.0.0
**Date**: 2026-02-07
**Protocol**: TWP-001 v2.0.0

---

## Personas

1. **Skeptical Investor** — Financial rigor, ROI validation, margin math
2. **Growth Engineer** — Unit economics, compounding mechanisms, growth loops
3. **Operations Expert** — Scalability, maintenance burden, execution reality

---

## Round Log

### ROUND 1
- **CHALLENGE**: Over-engineered 12-flow email system for a pre-launch brand with 0 customers
- **RESPONSE**: Build order addresses this — only 3 flows at launch. ROI is asymmetric (build once, earn continuously). Cart flow alone pays for Klaviyo after 4 recoveries.
- **SYNTHESIS**: Architecture is sound IF maintenance time is quantified. Solo founder needs to know ongoing hours/month.
- **OUTCOME**: UPGRADED
- **ACTION**: U1 — Added §7 "Maintenance Time Budget" to email_flow_architecture.md (~1.5 hrs/month for 3 launch flows, ~3-4 hrs/month at full 12 flows)

### ROUND 2
- **CHALLENGE**: Discount escalation across flows creates arbitrage — customers learn to abandon carts or lapse to get bigger discounts
- **RESPONSE**: Different incentive types per flow (% off vs. free shipping vs. larger %). Time-gating prevents manipulation (25% off requires 90 days of inactivity).
- **SYNTHESIS**: Margin math confirms profitability even at 25% off ($14.15 net/order). Defense is: never offer bigger discount in a faster flow + no code stacking.
- **OUTCOME**: UPGRADED
- **ACTION**: U2 — Added "Discount Defense Policy" to email_abandoned_cart.md with 5 explicit rules + margin math

### ROUND 3
- **CHALLENGE**: Unverified health claims in post-purchase emails (73% energy improvement, etc.) create FTC risk
- **RESPONSE**: Flag all unsubstantiated claims as [VOID], build pre-launch compliance checklist, use qualitative language until real data exists
- **SYNTHESIS**: FTC enforcement in supplements is aggressive. Must differentiate safe claims (ingredients, sourcing) from risky claims (energy, sleep, recovery) from prohibited claims (disease treatment).
- **OUTCOME**: UPGRADED
- **ACTION**: U3 — Added "FTC Compliance Checklist" to email_post_purchase.md with safe/risky/prohibited claim categories

### ROUND 4
- **CHALLENGE**: Welcome flow doesn't split by acquisition source — should it from Day 1?
- **RESPONSE**: One good flow beats 4 mediocre source-specific flows at low volume. But need clear triggers for when to build the first split.
- **SYNTHESIS**: Define specific thresholds: source concentration >30% AND total list >500, or CVR variance >50% between sources.
- **OUTCOME**: UPGRADED
- **ACTION**: U4 — Added §5.5 "Segmentation Trigger Thresholds" to email_segmentation.md with 4 quantified triggers

### ROUND 5
- **CHALLENGE**: Box insert ROI — is $0.50-0.70/package justified or feel-good branding?
- **RESPONSE**: Referral card math is positive (1 referral per 50 orders = 7.8x ROI on $0.15 card cost). Quick start guide reduces onboarding confusion for novel product.
- **SYNTHESIS**: Both referral ROI and churn prevention justify the spend. Box inserts are defensible.
- **OUTCOME**: RESOLVED

### ROUND 6
- **CHALLENGE**: 9 markdown files vs. Klaviyo execution — documentation-to-execution gap
- **RESPONSE**: Designate markdown as v1.0 blueprint, Klaviyo as live source of truth post-build. Files are "why we built it" reference, not living docs.
- **SYNTHESIS**: All three personas agree — add clear Source of Truth policy.
- **OUTCOME**: UPGRADED
- **ACTION**: U6 — Added §8 "Source of Truth Policy" to email_flow_architecture.md

### ROUND 7
- **CHALLENGE**: Final review across all content
- **RESPONSE**: All personas agree content is coherent. Discount defense, compliance tagging, Founder Mode phasing, and segmentation triggers address major concerns.
- **OUTCOME**: RESOLVED — **Saturation reached.**

---

## Summary

| Metric | Value |
|--------|-------|
| Total rounds | 7 |
| Saturated | Yes (Round 7) |
| Upgrades applied | 5 (U1, U2, U3, U4, U6) |
| Unresolved gaps | 0 |
| Files modified | email_flow_architecture.md (U1, U6), email_abandoned_cart.md (U2), email_post_purchase.md (U3), email_segmentation.md (U4) |

---

## What Would Have Been Missed

Without the persona dialogue, the following gaps would have remained:

1. **No maintenance time budget** — founder would have built 12 flows without knowing the ongoing time cost
2. **Discount arbitrage vulnerability** — customers could game the system by abandoning or lapsing
3. **FTC compliance risk** — unverified statistics would have been sent as email claims
4. **Premature segmentation** — no clear triggers for when to invest in source-specific flows
5. **Documentation drift** — no clear policy on markdown vs. Klaviyo as source of truth
