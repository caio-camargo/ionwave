# Persona Dialogue Summary — M10: Pricing & Offer

**TUP**: M10
**Version Tested**: 1.0.0
**Date**: 2026-02-06
**Protocol**: TWP-001 v2.0.0, Phase 6

---

## Personas Selected

| Persona | Rationale |
|---------|-----------|
| **Skeptical Investor** | Pricing is the core of unit economics. Every margin assumption gets questioned. |
| **Growth Engineer** | Pricing drives CAC payback, LTV, and the compounding subscription model. |
| **Brand Strategist** | In marine plasma, price IS the brand signal. Wrong price = wrong positioning. |

---

## Round 1

**CHALLENGE (Skeptical Investor):** "The entire pricing architecture sits on PT-001 which hasn't concluded. You've built 6 tabs of content around a $59 price point that may lose to $49. What happens to the business if $49 wins? Your blended margin drops from 63% to potentially 54% — below the 60% kill threshold."

**RESPONSE (Growth Engineer):** "Fair point, but the architecture handles this. Tab 1 explicitly flags PT-001 as a VOID condition and documents what changes if $49 wins: margin drops, subscription discount needs recalculation, financial model revision. The framework is designed to flex. Also, PT-000 showed higher price won (+23% RPV), so the trend favors $59. The bigger risk isn't $49 vs $59 — it's whether CAC stays at $35. That sensitivity analysis (Financial Model Section 2.5) shows CAC is the #1 variable, not price."

**SYNTHESIS (Brand Strategist):** "Both valid. The VOID marking is good discipline. But I'd push harder: if $49 wins, IonWave isn't just revising margins — it's repositioning from 'accessible premium' to 'category average.' At $49, you're $4 above LMNT. The premium brand narrative collapses. The contingency plan should address positioning, not just margins."

**OUTCOME: UPGRADED**
**ACTION:** Added positioning implication to PT-001 contingency notes in offer_strategy.md — if $49 wins, IonWave needs to reframe from price advantage to pure product/science differentiation vs LMNT, since price gap disappears.

---

## Round 2

**CHALLENGE (Growth Engineer):** "The subscription discount is set at 15% based on ProfitWell research for general DTC. But marine plasma is a niche category where the subscription decision is driven more by health conviction than savings. Seaonic offers 28% — you're offering nearly half that. What evidence do you have that 15% is sufficient for marine plasma specifically?"

**RESPONSE (Brand Strategist):** "Seaonic's 28% may be a weakness, not a benchmark. Deep discounting attracts price-sensitive subscribers who churn 20-40% faster (ProfitWell data, cited in Tab 1). IonWave's approach per M21 is that the subscription-first funnel design, not the discount, drives conversion. The discount is a sweetener. And we're explicitly planning PT-002 to test 10% vs 15% — we're not committing to 15% permanently."

**SYNTHESIS (Skeptical Investor):** "The logic holds but the evidence is C-grade at best. ProfitWell data is cross-category, not marine plasma. And the claim that funnel design drives more conversion than discount is from M21 which is also untested. What saves this is the planned test (PT-002). Mark the 15% as provisional and ensure PT-002 runs in Month 2 as planned."

**OUTCOME: RESOLVED** — PT-002 is already planned. The 15% is correctly marked as recommended, not finalized. Evidence grade properly reflects C confidence.

---

## Round 3

**CHALLENGE (Brand Strategist):** "The 'don't anchor against LMNT' instruction in the offer strategy is smart — but what about when customers inevitably compare? LMNT is 10x IonWave's likely brand awareness. Every potential IonWave customer has probably already tried or heard of LMNT. The pricing copy can avoid LMNT, but customers will make the comparison themselves. At $59 vs $45, IonWave needs to justify a 31% premium over the category gorilla. Is the '78 vs 3 minerals' enough?"

**RESPONSE (Growth Engineer):** "The competitor claims audit (M26) identifies '3 vs 78 minerals' as LMNT's single biggest substantive weakness. But you're right that the pricing document doesn't address the value justification in enough depth. The framing table (Tab 1, Section 2.3) has 'per-mineral' framing ($0.02/mineral) and 'vs competitor' framing (15% less than Seaonic). But there's no explicit LMNT comparison framing for when customers bring it up organically. There should be a 'why we cost more than LMNT' narrative for FAQs, customer support, and ad comments."

**SYNTHESIS (Skeptical Investor):** "Agreed. The pricing architecture handles the Seaonic comparison well but is oddly silent on the LMNT comparison, which is the one customers will actually make. A short 'LMNT comparison' talking point should exist somewhere — not in the pricing page itself, but in the value justification toolkit for content, support, and comments."

**OUTCOME: UPGRADED**
**ACTION:** Added LMNT comparison talking point to offer_strategy.md value framing section. Frame: "LMNT gives you 3 synthetic minerals for $1.50/serving. IonWave gives you 78 ocean-sourced minerals for $1.67/serving. That's $0.17/day for 75 additional minerals your body needs."

---

## Round 4

**CHALLENGE (Skeptical Investor):** "The per-order economics in Tab 1 show blended margin of 62.7% at 60% subscription mix. But HYP-004 targets 67%. You acknowledge this 'margin tension' but don't address it as a problem to solve. Are you comfortable telling an investor that the pricing architecture structurally can't hit the hypothesis target?"

**RESPONSE (Growth Engineer):** "Two perspectives here. First, the 67% target in HYP-004 was set before the subscription discount was designed — it's based on one-time pricing only. The financial model uses $20 COGS at $59 = 66%. With subscription discount, it drops. Second, the 60% kill threshold is the real gate, not the 67% target. 62.7% clears that gate with margin. The right move is to update HYP-004's target from 67% to reflect subscription-adjusted reality — probably 62-64% is the honest target."

**SYNTHESIS (Brand Strategist):** "The Growth Engineer is right. The 67% was naive — it didn't account for subscription economics. But this means HYP-004 needs a revision, not just a note in Tab 1. The hypothesis registry should be updated to reflect the subscription-adjusted target. This is a genuine upgrade action."

**OUTCOME: UPGRADED**
**ACTION:** Flagged HYP-004 for revision in hypothesis cross-reference phase (Phase 10). Target should be revised from 67% to 62-64% with note that subscription discount structurally reduces margin. Kill threshold remains 60%.

---

## Round 5

**CHALLENGE (Growth Engineer):** "The price testing framework (Tab 2) says 'never run more than 1 price test simultaneously' and estimates 40-80 days per test at current traffic. That's 4-6 tests per year. But the queue has 6 tests (PT-001 through PT-006), some of which are time-sensitive (PT-006, subscription-first layout, arguably should run from Day 1 alongside PT-001). Is the sequential queue too conservative? Are there any tests that can run in parallel without contamination?"

**RESPONSE (Skeptical Investor):** "Price tests contaminate each other — a customer seeing different prices on different visits destroys data integrity. But the Growth Engineer has a point about PT-006. Layout tests (subscription-first vs standard) are not price tests per se — they're UX tests at the same price point. PT-006 could potentially run in parallel with PT-001 if properly segmented. But I'd be cautious about adding complexity to a brand-new testing infrastructure."

**SYNTHESIS (Brand Strategist):** "Compromise: allow layout/UX tests to run parallel with price tests, but only if they don't affect the price displayed. PT-006 qualifies because both variants show the same prices, just in different default order. Update the testing framework to distinguish between 'price tests' (one at a time) and 'presentation tests' (can run parallel)."

**OUTCOME: UPGRADED**
**ACTION:** Added distinction in price_testing_framework.md between price tests (sequential) and presentation/UX tests (can run parallel with price tests as long as they don't alter the price shown).

---

## Round 6

**CHALLENGE (Brand Strategist):** "The SKU architecture (Tab 4) plans for flavored variants in Wave 2. But the upsell page copy (Tab 6) is almost entirely for Wave 1 with single-SKU upsells. When flavors launch, the upsell architecture changes completely — cross-sell between flavors becomes the primary retention mechanism. Has anyone thought about what the upsell experience looks like with 3-4 SKUs?"

**RESPONSE (Growth Engineer):** "Tab 6 Section 5 covers subscription portal upsells for Wave 2+. It mentions flavor swapping and upgrading. But you're right — it's thin. The real Wave 2 upsell architecture should be: (1) cross-flavor sampling in cart, (2) 'try the new flavor' in post-purchase, (3) flavor rotation as retention mechanism in subscription portal. This should be designed when Wave 2 launches, not now."

**SYNTHESIS (Skeptical Investor):** "Agree this is a Wave 2 concern, not Wave 1. The current Tab 6 correctly focuses on what matters at launch. But I'd add a clear 'Wave 2 upsell redesign' placeholder to prevent it falling through the cracks."

**OUTCOME: RESOLVED** — Tab 6 already has Wave 2 sections. The detail level is appropriate for current stage (Wave 1 production, Wave 2 placeholder). Will be re-workshopped when Wave 2 launches.

---

## Round 7

**CHALLENGE (Skeptical Investor):** "Product Roadmap (Tab 5) shows 8 validation gates for Wave 1, with a gate review at Month 6. But the Financial Model shows capital constraint hitting at Month 6-7. If Wave 1 gates aren't all cleared by Month 6, and you need to raise follow-on capital, you're asking investors for money while potentially failing validation gates. How do you handle the chicken-and-egg problem?"

**RESPONSE (Growth Engineer):** "The gates are ordered by importance. G1-G5 (CAC, CVR, subscription rate, churn, margin) are the unit economics that investors need to see. G6 (PT-001 completion) should resolve by Month 2, not Month 6. G7 (NPS) and G8 (capital secured) are parallel tracks. The real investor pitch at Month 6 is: 'Here are our unit economics after 6 months of live data.' If G1-G5 are strong, capital is raise-able even if G7 isn't perfect. The staged capital strategy (Financial Model Section 2.4) addresses this explicitly."

**SYNTHESIS (Brand Strategist):** "Adequate. The staged capital approach already handles this. The key risk is not the chicken-and-egg — it's that if unit economics are marginal (CAC $40, churn 12% — exactly base case), investors may hesitate. The roadmap doesn't address the 'marginal success' scenario where gates are technically passed but not compellingly. Worth noting but not actionable right now."

**OUTCOME: RESOLVED** — Existing financial model and staged capital strategy address this. The marginal-success scenario is a genuine business risk but outside M10's scope (belongs in M3 financial planning).

---

## Round 8 (Final)

**CHALLENGE (Growth Engineer):** "Across all 6 tabs, the product customization tab (Tab 3) is notably thinner than the others. It's essentially 'use Loop Subscriptions, offer frequency flexibility.' Is this a real tab or should it be folded into another tab?"

**RESPONSE (Brand Strategist):** "Tab 3 is thin because the customization story for a single-SKU launch is inherently limited. The value of keeping it separate is forward-looking — when flavors and premium tiers launch, customization becomes a major retention lever. The tab structure is correct even if the current content is light."

**SYNTHESIS (Skeptical Investor):** "Agreed. Tab 3 is appropriately thin for launch stage. Its intelligence gaps clearly point to Wave 2+ expansion. No action needed."

**OUTCOME: RESOLVED** — Three consecutive RESOLVED rounds (6, 7, 8).

---

## Saturation Log

| Round | Outcome | New Material? |
|-------|---------|---------------|
| 1 | UPGRADED | Yes — positioning contingency for $49 win |
| 2 | RESOLVED | No |
| 3 | UPGRADED | Yes — LMNT comparison talking point |
| 4 | UPGRADED | Yes — HYP-004 revision flagged |
| 5 | UPGRADED | Yes — price test vs presentation test distinction |
| 6 | RESOLVED | No |
| 7 | RESOLVED | No |
| 8 | RESOLVED | No |

**Saturation reached at Round 8** (3 consecutive RESOLVED rounds: 6, 7, 8).

**Rounds: 8 | Upgrades: 4 | Resolved: 4 | Unresolved: 0**

---

## Upgrades Applied

| # | Source Round | Change | File Updated |
|---|-------------|--------|-------------|
| U1 | Round 1 | Added positioning contingency if PT-001 favors $49 | offer_strategy.md |
| U2 | Round 3 | Added LMNT comparison talking point to value framing | offer_strategy.md |
| U3 | Round 4 | Flagged HYP-004 for target revision (67% → 62-64%) | Phase 10 action item |
| U4 | Round 5 | Distinguished price tests (sequential) from presentation tests (parallel-eligible) | price_testing_framework.md |

---

## Unresolved Gaps

None. All challenges were either resolved by existing content or upgraded.

---

## What Would Have Been Missed (Without Dialogue)

1. **The positioning collapse at $49** — Tab 1 treated the $49 contingency as a margin problem. The dialogue revealed it's a brand positioning problem: at $49, IonWave is no longer "accessible premium below Seaonic" but "generic price-competitive vs everyone."

2. **The LMNT comparison gap** — Tab 1 explicitly said "don't anchor against LMNT" but didn't provide any narrative for when customers inevitably make the comparison. This would have been a real-world gap in customer support and ad comment responses.

3. **The HYP-004 target mismatch** — The 67% margin target was structurally unachievable given subscription discounts. Without the Skeptical Investor pressing this, we'd have a hypothesis target that the pricing architecture can never hit — undermining the entire hypothesis system's credibility.

4. **The sequential vs parallel testing distinction** — The blanket "one test at a time" rule would have blocked valuable UX tests (like subscription-first layout) for months while price tests ran. The distinction between price tests and presentation tests unlocks faster learning.
