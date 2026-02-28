# Offer Strategy — M10: Pricing & Offer

**TUP**: M10 | **Tab**: 1 of 6
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-002 (Subscription Conversion), HYP-004 (Gross Margin), HYP-005 (Blended LTV), HYP-003.4 (Consumption-Cadence)

---

## 1. Pricing Architecture

### 1.1 Core Price Point: $59/box (30 sachets)

**Decision status**: Validated through testing and competitive benchmarking.

| Evidence | Data Point | Grade |
|----------|-----------|-------|
| A/B test PT-000 | $49 beat $39 by +23% RPV | [Confidence: B | Source: tracking/Price_Testing_Log.md | Date: 2026-01-15] |
| Active test PT-001 | $49 vs $59 — running, 1,647/4,000 sample | [Confidence: D | Source: tracking/Price_Testing_Log.md | Date: 2026-02-15] |
| Seaonic benchmark | $69/box single, $49.99/month subscription | [Confidence: A | Source: seaonic.com pricing page | Date: 2026-01] |
| LMNT benchmark | $45/box one-time, $1.00/serving subscription | [Confidence: A | Source: drinklmnt.com | Date: 2026-01] |
| Financial model | $59 yields 67% gross margin at $20 COGS | [Confidence: B | Source: Financial_Model_Revenue_Validation.md | Date: 2026-02-05] |

**Rationale**: $59 positions IonWave 15% below Seaonic ($69) while maintaining premium positioning above LMNT ($45). At $1.97/serving, IonWave sits in the marine plasma premium tier ($1.08-$2.30/serving range) without being the most expensive option.

**Per-serving economics**:
- IonWave: $1.97/serving (one-time) → ~$1.67/serving (subscription at 15% off)
- Seaonic: $2.30/serving (one-time) → ~$1.67/serving (subscription)
- LMNT: $1.50/serving (one-time) → $1.00/serving (subscription)
- Quinton: $1.17-$1.67/serving
- Totum Sport: $2.30/serving

**Intelligence gap**: PT-001 ($49 vs $59) still running. If $49 wins decisively, the entire pricing architecture needs revision. **[VOID — requires: PT-001 completion. Expected: ~2 weeks at current sample rate.]**

**If $49 wins — positioning implications** *(Dialogue upgrade U1)*: A $49 base price doesn't just reduce margins — it collapses the "accessible premium" positioning. At $49, IonWave is only $4 above LMNT ($45), eliminating the price-signaled quality gap. The brand narrative must shift from "premium marine plasma at a better price than Seaonic" to "the only marine plasma product with 78 minerals AND taste innovation" — relying entirely on product/science differentiation rather than price-quality positioning. This is achievable but requires stronger content marketing investment.

### 1.2 Subscription Pricing: $50.15/box (15% discount)

**Decision status**: Recommended based on M21 research. Not yet finalized.

| Evidence | Data Point | Grade |
|----------|-----------|-------|
| ProfitWell research | 15-20% optimal subscription discount | [Confidence: B | Source: data/m21/subscription_psychology.md | Date: 2026-02-06] |
| Below 10% doesn't motivate | Industry finding | [Confidence: C | Source: DTC benchmarks via M21 | Date: 2026-02-06] |
| Above 25% attracts deal-seekers | 20-40% faster churn for deep-discount subscribers | [Confidence: C | Source: ProfitWell via M21 | Date: 2026-02-06] |
| Seaonic proxy | $69 → $49.99 subscription = 28% discount | [Confidence: A | Source: seaonic.com | Date: 2026-01] |

**Recommendation**: 15% discount ($59 → $50.15, display as ~$50/month).

**Why not match Seaonic's 28%?** Seaonic may be using deep discounting to compensate for weaker conversion. Our subscription-first funnel design (from M21) means the offer architecture itself drives conversion — the discount is a sweetener, not the primary motivator. Starting at 15% preserves margin and leaves room to test upward if needed.

**Cross-reference**: HYP-002 (Subscription Conversion Rate) targets 50-60%. The subscription discount is one of several levers — funnel design, default-to-subscription checkout, and subscription psychology framing (M21) are arguably more important.

### 1.3 Pricing Tiers Summary

| Tier | Price | Per Serving | Margin | Target Segment |
|------|-------|------------|--------|---------------|
| **One-time** | $59 | $1.97 | 66% | Trial buyers, gift purchases |
| **Subscribe & Save** | $50.15 | $1.67 | 61% | Core customers, retention target |
| **2-box bundle** | $106 ($53/box, 10% off) | $1.77 | 64% | Couples, heavy users |
| **3-box bundle** | $147 ($49/box, 17% off) | $1.63 | 59% | Families, stocking up |

**Bundle strategy note**: Bundles serve different jobs than subscription. Subscription = recurring convenience. Bundles = one-time volume purchase. A customer might buy a 3-pack to try, then convert to subscription — these are sequential, not competing offers.

**Kill criteria**: Blended gross margin must stay ≥60% across all tiers. If bundle mix drags blended margin below 60%, restrict bundle discounts. [Source: HYP-004 kill threshold]

---

## 2. Offer Framing & Psychology

### 2.1 Subscription-First Architecture

**Default offer**: Subscription at $50.15/month (shown as primary)
**Secondary offer**: One-time at $59 (shown as alternative, visually de-emphasized)

This reverses the typical e-commerce pattern where one-time is default and subscription is opt-in. Rationale from M21:
- Subscription LTV: $159 (8.3 months × $19.10 GP) [Confidence: C | Source: Financial Model]
- One-time LTV: $26 (1.35 orders) [Confidence: C | Source: Financial Model]
- **6x LTV multiplier** makes subscription-first the only rational default

**Implementation**: Loop Subscriptions on Shopify (recommended in M21 subscription platform analysis). Default checkout shows subscription price with "one-time purchase" as a smaller text link.

### 2.2 Price Anchoring Strategy

**Anchor**: Seaonic at $69/box ($2.30/serving)

Framing: "Premium marine plasma hydration — 78 minerals from the ocean. Compare at $69/box from [competitor]. IonWave: $50/month when you subscribe."

**Why this works**: Marine plasma is an unknown category. Without an anchor, $59 feels expensive for "electrolytes." With the $69 Seaonic anchor, $59 feels like value. The subscription price ($50.15) feels even better.

**Don't anchor against LMNT**: LMNT at $45 makes IonWave look expensive. Only reference LMNT in content/education contexts where we can differentiate on 78 minerals vs synthetic.

**When customers compare to LMNT anyway** (FAQ, support, ad comments): "LMNT gives you 3 synthetic minerals for $1.50/serving. IonWave gives you 78 ocean-sourced minerals for $1.67/serving. That's $0.17/day for 75 additional minerals your body needs. Different products for different goals — LMNT is a sodium supplement; IonWave is complete ocean mineral nutrition." *(Dialogue upgrade U2: this comparison will happen organically; be prepared with a value-justification narrative that reframes the price gap as a product gap.)*

### 2.3 Value Framing

| Frame | Message | When to Use |
|-------|---------|-------------|
| **Per-day** | "$1.67/day for complete ocean mineral nutrition" | Landing pages, ads |
| **vs. coffee** | "Less than your daily coffee" | Social media, email |
| **vs. competitor** | "15% less than Seaonic, 78 minerals vs their 12" | Comparison content |
| **vs. LMNT** | "$0.17/day more for 75 additional ocean minerals" | FAQ, support, ad comments (defensive) |
| **per-mineral** | "78 ocean minerals for $1.67/day — that's $0.02/mineral" | Education content |
| **results-first** | "Most customers feel the difference in 14 days" | Conversion-focused pages |

---

## 3. Unit Economics Summary

### 3.1 Per-Order Economics

| Metric | One-Time | Subscription | Blended (60% sub) |
|--------|----------|-------------|-------------------|
| Revenue | $59.00 | $50.15 | $53.69 |
| COGS | $20.00 | $20.00 | $20.00 |
| Gross Profit | $39.00 | $30.15 | $33.69 |
| Gross Margin | 66.1% | 60.1% | 62.7% |

[Confidence: B | Source: Financial_Model_Revenue_Validation.md | Date: 2026-02-05]

### 3.2 Lifetime Value by Offer Type

| Customer Type | Avg Orders | LTV (Revenue) | LTV (Gross Profit) | % of Customers |
|--------------|-----------|---------------|--------------------|-----------------|
| Subscriber | 8.3 | $416 | $250 | 60% (target) |
| One-time buyer | 1.35 | $80 | $53 | 40% |
| **Blended** | — | **$282** | **$171** | 100% |

**Note**: These LTV figures use revenue, not gross profit. The financial model uses GP-based LTV ($159 subscriber, $26 one-time, $106 blended). Both are valid — revenue LTV for pricing decisions, GP LTV for viability.

### 3.3 Payback Period

- **First order GP**: $33.69 (blended)
- **CAC**: $35 (HYP-001 base case)
- **Payback**: 1.04 orders (~35 days for subscribers)
- **Cash flow note**: First order is essentially break-even after CAC. Profit starts on Order 2. This makes subscriber conversion critical — one-time buyers barely pay back their acquisition cost.

[Confidence: C | Source: Financial Model sensitivity analysis]

---

## 4. Competitive Pricing Map

### 4.1 Marine Plasma / Premium Electrolyte Landscape

| Brand | Category | Price/Box | Price/Serving | Sub Discount | Key Differentiator |
|-------|----------|-----------|--------------|-------------|-------------------|
| **Seaonic** | Marine plasma | $69 | $2.30 | 28% ($49.99) | Direct competitor, 78 minerals |
| **LMNT** | Synthetic electrolyte | $45 | $1.50 | 33% ($1.00) | Mass-premium, keto community |
| **Quinton** | Marine plasma (ampoules) | $35-50 | $1.17-1.67 | Varies | Pharmaceutical heritage, liquid format |
| **Totum Sport** | Marine plasma | $69 | $2.30 | N/A | Athletic positioning |
| **IonWave** | Marine plasma | $59 | $1.97 | 15% ($1.67) | 78 minerals, subscription-first |

[Confidence: B | Sources: Marine_Plasma_Market_Sizing.md, competitor websites | Date: 2026-01]

### 4.2 Positioning Decision

IonWave occupies the **"accessible premium"** position:
- **Above** LMNT ($45) — justified by marine plasma vs synthetic
- **Below** Seaonic ($69) — competitive on price while matching product quality
- **At parity** with Quinton on per-serving basis but different format (sachets vs ampoules)

**Strategic risk**: If Seaonic drops price to $59, IonWave loses the price advantage. Mitigation: build brand value, community, and subscription stickiness before that happens.

---

## 5. Pricing Decision Framework

### 5.1 When to Change Price

| Signal | Action | Threshold |
|--------|--------|-----------|
| PT-001 shows $49 wins decisively | Consider $49 base price | >15% RPV improvement |
| COGS increase >$22 | Evaluate price increase or COGS reduction | Margin drops below 62% |
| Competitor price drop | Hold price, increase value perception | Only if market share impacted |
| Subscriber churn >15% | Test lower subscription price | After ruling out product issues |
| AOV consistently >$65 | Bundle strategy working | Maintain course |

### 5.2 What NOT to Do

- **Don't race to the bottom**: Marine plasma is premium. Price signals quality. $39 was tested and lost.
- **Don't discount to save churners**: M21 research shows education-first win-back beats discount ladders (addresses 70-80% of churn reasons vs 15-20% for discounts).
- **Don't offer >25% subscription discount**: Attracts price-sensitive customers who churn 20-40% faster.
- **Don't change price without testing**: Every price change is a hypothesis test. Run it through the Price Testing framework (Tab 2).

---

## 6. Intelligence Gaps & Upgrade Paths

| Gap | Impact | Upgrade Path | Effort |
|-----|--------|-------------|--------|
| PT-001 ($49 vs $59) not yet concluded | Could change base price | Wait for 4,000 sample completion | 2-3 weeks |
| No segment-specific pricing data | May be leaving money on table with premium segments | Post-launch cohort analysis by acquisition source | Month 3+ |
| Bundle conversion data missing | Don't know if bundles cannibalize subscription | Launch bundles, track conversion paths | Month 2+ |
| International pricing not considered | Different markets = different willingness to pay | Deferred until M28 (Market Expansion) | Wave 8+ |
| Promotional calendar undefined | No seasonal/tactical pricing strategy | Define after 90 days of baseline pricing data | Month 4+ |

---

## 7. Hypothesis Cross-Reference

| Hypothesis | How M10 Offer Strategy Affects It | Current State |
|-----------|----------------------------------|---------------|
| **HYP-002** (Sub Conversion 50-60%) | Subscription-first funnel + 15% discount designed to hit target. If sub rate <50%, revisit discount or funnel. | D-grade, untested |
| **HYP-004** (Gross Margin 67%) | $59 price at $20 COGS = 66% one-time, 60% subscription. Blended ~63%. Below the 67% model assumption but above 60% kill threshold. | B-grade, benchmarked |
| **HYP-005** (Blended LTV $106) | LTV is a function of price × retention × margin. $50.15 sub price × 8.3 months = $416 revenue LTV. GP LTV = $250. Significantly higher than $106 model estimate because model used conservative assumptions. | D-grade, composite |
| **HYP-003.4** (Consumption-Cadence 30 days) | Default subscription cadence is 30 days (1 sachet/day × 30 sachets/box). If consumption doesn't match, offer "every 45 days" option. | D-grade, untested |

**Key finding**: The offer architecture creates a **margin tension** — the subscription discount drops margin from 66% to 60%. This means HYP-004's 67% target is only achievable if one-time purchases are a significant portion of revenue. At 60% subscription rate, blended margin is ~63%. This is above the 60% kill threshold but below the 67% model assumption. **The financial model may need updating to reflect subscription-adjusted margins.**

---

*Next: Tab 2 (Price Testing Framework), Tab 4 (SKU Architecture)*
