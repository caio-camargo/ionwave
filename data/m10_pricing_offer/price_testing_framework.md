# Price Testing Framework — M10: Pricing & Offer

**TUP**: M10 | **Tab**: 2 of 6
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-004 (Gross Margin), HYP-002 (Subscription Conversion)

---

## 1. Testing Philosophy

### 1.1 Price Testing as Science, Not Guesswork

Every price change at IonWave is a hypothesis test with a defined protocol. This framework exists because:
- **$10 price changes = ~17% revenue swing per order** — too important for gut feel
- **Price signals quality** in the marine plasma category — wrong price destroys positioning
- **PT-000 already proved this**: $49 beat $39 by +23% RPV. Price ≠ volume; Revenue Per Visitor is the metric.

**Core principle**: We test price points by Revenue Per Visitor (RPV), not conversion rate alone. A higher price can lose conversion but win on RPV — and RPV is what pays the bills.

### 1.2 What We Test vs. What We Don't

| Test | Don't Test |
|------|-----------|
| Base price points ($49 vs $59) | Prices below $39 (proven to lose positioning) |
| Subscription discount % (10%, 15%, 20%) | Discounts above 25% (attracts deal-seekers) |
| Bundle pricing tiers | Individual SKU pricing during first 90 days |
| Anchoring framing (show competitor price or not) | Deceptive pricing (e.g., fake "was $99") |
| Per-serving vs per-box framing | Drip pricing (add fees at checkout) |

---

## 2. Test Architecture

### 2.1 Standard Test Protocol

Every price test follows this structure:

```
TEST CARD
─────────────────────────────────
Test ID:     PT-{NNN}
Hypothesis:  [What we believe and why]
Variants:    A: [Control] | B: [Challenger]
Metric:      RPV (primary), CVR (secondary), AOV (diagnostic)
Sample:      {N}/audience, {target} total visitors
Duration:    Min 14 days, max 30 days
Confidence:  95% significance threshold
Traffic:     50/50 split, stratified by source
Kill:        Stop early if one variant wins by >3σ
─────────────────────────────────
```

### 2.2 Sample Size Requirements

| Baseline CVR | Minimum Detectable Effect | Required Sample (per variant) | Total Visitors |
|-------------|--------------------------|-------------------------------|----------------|
| 3% | 20% relative (0.6pp) | 2,000 | 4,000 |
| 3% | 15% relative (0.45pp) | 3,500 | 7,000 |
| 3% | 10% relative (0.3pp) | 8,000 | 16,000 |
| 5% | 20% relative (1pp) | 700 | 1,400 |
| 5% | 15% relative (0.75pp) | 1,250 | 2,500 |

[Confidence: A | Source: standard power analysis, 80% power, 95% significance]

**Practical implication at IonWave's scale**: With early traffic (~50-100 visitors/day), a 4,000-sample test takes 40-80 days. We can only run 4-6 price tests per year in the early stage. Every test slot is precious — don't waste them on low-impact questions.

### 2.3 Test Type Classification *(Dialogue upgrade U4)*

| Type | Definition | Parallelism Rule | Example |
|------|-----------|-----------------|---------|
| **Price test** | Variants show different dollar amounts | ONE at a time. Sequential only. | PT-001 ($49 vs $59) |
| **Presentation test** | Same price, different display/layout | Can run parallel with price tests. | PT-006 (sub-first vs standard layout) |
| **Offer test** | Different discount/bundle structure at same base price | ONE at a time (interacts with price). | PT-002 (10% vs 15% sub discount) |

**Why the distinction matters**: Price tests contaminate each other (customers seeing different prices = broken data). But a layout test showing the same prices in different default order (subscription-first vs one-time-first) doesn't alter price perception and can safely run alongside a price test. This distinction prevents the sequential queue from blocking valuable UX experiments.

### 2.4 Traffic Allocation Rules

1. **Never run more than 1 price test simultaneously** — price tests contaminate each other
2. **Presentation tests may run in parallel with price tests** — as long as they show identical prices in all variants
3. **All traffic sources get the same split** — no paid-only or organic-only testing
4. **Exclude returning customers** — price tests are for first-visit pricing perception only
5. **Hold shipping and add-ons constant** — only test the variable being tested
6. **No mid-test changes** — if you change a creative or LP during the test, the test is void

---

## 3. Test History & Active Tests

### 3.1 Completed Tests

| Test ID | Date | Hypothesis | Variants | Winner | Lift | Sample | Decision |
|---------|------|-----------|----------|--------|------|--------|----------|
| **PT-000** | 2026-01-15 | Higher price signals premium quality | A: $39/box \| B: $49/box | $49 | +23% RPV | ~2,500 | Implemented $49 as base |

**PT-000 Key Learning**: In the marine plasma category, price *increases* conversion (up to a point). Likely because $39 triggered "too cheap to be real" skepticism for a product claiming 78 ocean minerals. The premium price anchored quality perception.

[Confidence: B | Source: tracking/Price_Testing_Log.md | Date: 2026-01-15]

### 3.2 Active Tests

| Test ID | Launched | Hypothesis | Variants | Sample Progress | Expected Completion |
|---------|---------|-----------|----------|-----------------|-------------------|
| **PT-001** | 2026-02-15 | $59 maintains RPV advantage over $49 | A: $49/box \| B: $59/box | 1,647/4,000 (41%) | ~2 weeks at current rate |

**PT-001 Stakes**: This is the highest-stakes test in the M10 pricing architecture. The entire offer strategy document (Tab 1) assumes $59. If $49 wins decisively (>15% RPV improvement), we need to:
- Revise base price to $49
- Recalculate all margins (drops from 66% to 57% at $20 COGS)
- Re-evaluate subscription discount (15% of $49 = $41.65 → potentially too low for motivation)
- Re-run financial model with new price point
- Re-check HYP-004 (blended margin may drop below 60% kill threshold at $49)

**VOID — requires: PT-001 completion. All pricing decisions downstream are conditional on this result.**

[Confidence: D | Source: tracking/Price_Testing_Log.md — test still running]

### 3.3 Planned Test Queue

| Priority | Test ID | Hypothesis | Variants | Prerequisite | Est. Start |
|----------|---------|-----------|----------|-------------|-----------|
| 1 | PT-002 | 15% sub discount is optimal | A: 10% off \| B: 15% off | PT-001 complete | Month 2 |
| 2 | PT-003 | Anchor framing lifts RPV | A: No anchor \| B: "Compare at $69" | PT-002 complete | Month 3 |
| 3 | PT-004 | Per-serving framing beats per-box | A: "$59/box" \| B: "$1.97/day" | Any time | Month 3-4 |
| 4 | PT-005 | 2-box bundle at 10% off lifts AOV | A: No bundle \| B: 2-box $106 | Post-launch | Month 4+ |
| 5 | PT-006 | Subscription-first layout beats one-time-first | A: Standard \| B: Sub-first | Post-launch | Month 2 |

**Queue logic**: PT-001 (price) → PT-002 (subscription discount) → PT-003 (anchoring) → PT-004 (framing). Each test informs the next. Don't skip ahead.

---

## 4. Metrics & Measurement

### 4.1 Primary Metric: Revenue Per Visitor (RPV)

**RPV = Total Revenue / Total Unique Visitors**

Why RPV over conversion rate:
- A $59 price with 2.5% CVR = $1.48 RPV
- A $49 price with 3.0% CVR = $1.47 RPV
- CVR says $49 wins. RPV says they're equal. RPV is the truth.

### 4.2 Secondary Metrics (Track But Don't Decide On)

| Metric | Why Track | Why Not Primary |
|--------|----------|----------------|
| **Conversion Rate (CVR)** | Volume indicator | Doesn't capture revenue |
| **Average Order Value (AOV)** | Bundle/upsell diagnostic | Doesn't capture traffic efficiency |
| **Subscription Attach Rate** | HYP-002 tracking | Affected by funnel design, not just price |
| **Cart Abandonment Rate** | Price shock detector | Many causes beyond price |
| **Refund Rate (30-day)** | Buyer's remorse indicator | Lagging, slow to measure |

### 4.3 Guardrail Metrics (Must Not Degrade)

| Guardrail | Threshold | If Violated |
|-----------|-----------|-------------|
| Gross margin | ≥60% blended | Do not implement winning variant |
| Subscription rate | ≥40% | Investigate if price change broke sub funnel |
| Refund rate | ≤5% | Higher price may trigger buyer's remorse |
| Brand perception | Qualitative | Monitor review sentiment, support tickets |

---

## 5. Analysis Framework

### 5.1 Decision Rules

| Result | Action |
|--------|--------|
| **Variant B wins by ≥10% RPV, p<0.05** | Implement B. Log as validated. |
| **Variant B wins by 5-10% RPV, p<0.05** | Implement B cautiously. Monitor for 30 days. |
| **No significant difference** | Keep control (lower operational risk). Log as inconclusive. |
| **Variant B loses** | Keep control. Document why hypothesis was wrong. |
| **Guardrail violated** | Do not implement regardless of RPV result. |

### 5.2 Post-Test Protocol

After every test:
1. **Log result** in this document (Section 3.1)
2. **Update offer_strategy.md** (Tab 1) if price change implemented
3. **Update financial model** if margin implications
4. **Update hypothesis index** — price tests are evidence events for HYP-004
5. **Register in validation_log.json** — formal evidence upgrade/downgrade
6. **Queue next test** from planned test list (Section 3.3)
7. **30-day post-implementation check** — did real-world performance match test results?

---

## 6. Tool & Platform Setup

### 6.1 Recommended Setup (Shopify-Based)

| Function | Tool | Notes |
|----------|------|-------|
| A/B testing | Convert.com or Google Optimize successor | Shopify-native A/B splits |
| Price display variants | Shopify Scripts or custom theme code | Show different prices to different cohorts |
| Analytics | GA4 + Shopify Analytics | RPV calculated from both |
| Subscription tracking | Loop Subscriptions | Tracks subscription attach rate per variant |
| Statistical significance | Built-in (Convert) or manual (Google Sheets calculator) | 95% threshold standard |

**Budget**: Convert.com ~$200/month. Worth it if testing saves even one $10 price mistake on $50K+ annual revenue.

### 6.2 Test Implementation Checklist

For each new test:
- [ ] Test card written (Section 2.1 format)
- [ ] Sample size calculated (Section 2.2)
- [ ] Traffic split configured (50/50)
- [ ] Returning visitors excluded
- [ ] Guardrail metrics dashboard set up
- [ ] Kill criteria documented
- [ ] End date calendared
- [ ] Post-test protocol assigned to an owner

---

## 7. Price Sensitivity Learnings (Cumulative)

This section accumulates learnings across all tests. Updated as each test concludes.

### What We Know:
- **$39 loses to $49 on RPV (+23%)** — marine plasma at $39 feels "too cheap to be real" [B-grade, PT-000]
- **Premium positioning works** — customers who buy marine plasma expect to pay premium [C-grade, competitive benchmark]
- **AOV sweet spot is $55-65** — based on competitive landscape and PT-000 signal [C-grade, triangulated]
- **Seaonic at $69 is the relevant anchor**, not LMNT at $45 [B-grade, market positioning]

### What We Don't Know Yet:
- Whether $59 beats $49 on RPV (PT-001, running)
- Optimal subscription discount % (planned: PT-002)
- Whether competitive anchor framing lifts RPV (planned: PT-003)
- Price elasticity by acquisition channel (need segment data, Month 3+)
- International price sensitivity (deferred to M28)

---

## 8. Hypothesis Cross-Reference

| Hypothesis | How Price Testing Feeds It |
|-----------|--------------------------|
| **HYP-004** (Gross Margin ≥60%) | Every price test is a margin test. PT-001 outcome directly determines whether base margin hits target. |
| **HYP-002** (Subscription Conversion 50-60%) | PT-002 (subscription discount test) will provide first real data. Subscription attach rate is tracked as secondary metric in all tests. |

---

*Next: Tab 3 (Product Customization), Tab 4 (SKU Architecture)*
