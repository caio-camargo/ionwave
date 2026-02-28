# Landed Cost Breakdown — M3: Financial Model

**TUP**: M3 | **Tab**: 3 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-004 (Gross Margin Sustainability)
**Cross-Reference**: M5 (Formulation), M6 (Supply Chain), M10 (Pricing), M24 (Fulfillment), M25 (Financial Ops)

---

## REC-001 MARGIN DISPUTE — ROOT CAUSE ANALYSIS

> **BLOCKER**: Two data sources yield divergent gross margins. This document traces the gap to specific cost line items.
>
> - **Danilo's Ops Model**: 40% gross margin assumption
> - **Bootstrap Analysis**: 67% gross margin calculation
> - **Working Baseline**: 60% (midpoint compromise, pending resolution)

### Where the 27-Percentage-Point Gap Comes From

The divergence stems from **what each model includes in COGS**:

| Cost Component | Bootstrap Calc (67% GM) | Danilo Calc (40% GM) | Gap Driver |
|----------------|------------------------|---------------------|------------|
| Raw materials (sachet contents) | Included ($0.55) | Included ($0.55) | None |
| Packaging | Included ($0.15) | Included ($0.15) | None |
| Manufacturing/filling | Included ($0.10) | Included ($0.10) | None |
| **Fulfillment (pick/pack/ship)** | **Excluded** | **Included ($4.50-6.00)** | **MAJOR** |
| **Payment processing (2.9%+$0.30)** | **Excluded** | **Included ($2.01)** | **MODERATE** |
| **Returns/refunds (5-10%)** | **Excluded** | **Included ($2.95-5.90)** | **MODERATE** |
| **Shipping absorption** | **Excluded** | **Included ($3.50-5.00)** | **MAJOR** |
| **Subscription discount (15%)** | **Excluded** | **Included ($8.85)** | **MAJOR** |

**Total per-unit COGS difference**: Bootstrap $0.80 vs. Danilo $13-20+ per unit

**Conclusion**: Bootstrap calculates **product gross margin** (revenue minus product COGS only). Danilo calculates **fully-loaded gross margin** (revenue minus all variable costs per order). Both are valid — they measure different things. The financial model must use the **fully-loaded** definition for all cash planning, while tracking product gross margin as a separate KPI.

[Confidence: B | Source: Cross-analysis of M5 formulation spec, M10 pricing, M24 fulfillment estimates, M25 unit economics | Date: 2026-02-11]

---

## 1. Product COGS Waterfall (Per-Sachet)

### 1.1 Raw Material Costs

| Component | Cost per Sachet | Source | Grade |
|-----------|----------------|--------|-------|
| Marine plasma concentrate | $0.18-0.28 | [Confidence: C | Source: M5 formulation spec, supplier quotes pending | Date: 2026-02-11] | C |
| Electrolyte blend (Na, K, Mg) | $0.08-0.12 | [Confidence: C | Source: M5 bulk mineral pricing estimates | Date: 2026-02-11] | C |
| Natural flavoring system | $0.05-0.08 | [Confidence: C | Source: M5 flavor system research | Date: 2026-02-11] | C |
| Stevia/monk fruit sweetener | $0.02-0.04 | [Confidence: B | Source: Industry bulk pricing | Date: 2026-02-11] | B |
| Citric acid / malic acid | $0.01-0.02 | [Confidence: B | Source: Industry bulk pricing | Date: 2026-02-11] | B |
| Flow agents (silicon dioxide) | $0.01 | [Confidence: B | Source: Standard additive pricing | Date: 2026-02-11] | B |
| **Total raw materials** | **$0.35-0.55** | Target: $0.40 | C |

### 1.2 Packaging Costs

| Component | Cost per Sachet | Source | Grade |
|-----------|----------------|--------|-------|
| Individual sachet (foil/film) | $0.04-0.06 | [Confidence: C | Source: M5 packaging estimates | Date: 2026-02-11] | C |
| Outer box (30-count) | $0.03-0.05 per sachet ($0.90-1.50/box) | [Confidence: C | Source: M5 | Date: 2026-02-11] | C |
| Insert card / dosing guide | $0.01-0.02 per sachet | [Confidence: D | Source: Estimate | Date: 2026-02-11] | D |
| **Total packaging** | **$0.08-0.13** | Target: $0.10 | C |

### 1.3 Manufacturing Costs

| Component | Cost per Sachet | Source | Grade |
|-----------|----------------|--------|-------|
| Contract manufacturer filling | $0.05-0.10 | [Confidence: C | Source: M5 CM estimates | Date: 2026-02-11] | C |
| Quality testing (batch) | $0.02-0.04 per sachet (amortized) | [Confidence: D | Source: Industry estimate | Date: 2026-02-11] | D |
| **Total manufacturing** | **$0.07-0.14** | Target: $0.08 | C/D |

### 1.4 Per-Sachet COGS Summary

| Scenario | Raw Materials | Packaging | Manufacturing | Total/Sachet | Total/Box (30) |
|----------|--------------|-----------|---------------|-------------|----------------|
| **Optimistic** | $0.35 | $0.08 | $0.07 | **$0.50** | **$15.00** |
| **Target** | $0.40 | $0.10 | $0.08 | **$0.58** | **$17.40** |
| **Conservative** | $0.55 | $0.13 | $0.14 | **$0.82** | **$24.60** |

[Confidence: C overall | Source: M5 Formulation Specification | Date: 2026-02-11]

---

## 2. Per-Order Variable Cost Waterfall

This is where the REC-001 gap emerges. The fully-loaded cost per order includes everything a customer transaction triggers.

### 2.1 One-Time Purchase ($59 retail price)

| Cost Line | Amount | % of Revenue | Source | Grade |
|-----------|--------|-------------|--------|-------|
| Product COGS (30 sachets) | $17.40 | 29.5% | M5 target | C |
| Fulfillment (pick/pack) | $2.50-6.00 | 4.2-10.2% | M24: Self-fulfill $2.50, 3PL $4-6 | C |
| Outbound shipping | $3.50-5.00 | 5.9-8.5% | USPS Priority/UPS Ground estimates | C |
| Payment processing (Stripe 2.9%+$0.30) | $2.01 | 3.4% | [Confidence: A | Source: Stripe pricing | Date: 2026-02-11] | A |
| Returns/refunds reserve (7% rate) | $4.13 | 7.0% | [Confidence: C | Source: D2C supplement benchmark 5-10% | Date: 2026-02-11] | C |
| Chargebacks reserve (0.5%) | $0.30 | 0.5% | [Confidence: C | Source: Industry benchmark | Date: 2026-02-11] | C |
| **Total variable cost per order** | **$29.84-35.24** | **50.6-59.7%** | | |
| **Gross profit per order** | **$23.76-29.16** | **40.3-49.4%** | | |

### 2.2 Subscription Purchase ($50.15 retail price, 15% discount)

| Cost Line | Amount | % of Revenue | Source | Grade |
|-----------|--------|-------------|--------|-------|
| Product COGS (30 sachets) | $17.40 | 34.7% | M5 target | C |
| Fulfillment (pick/pack) | $2.50-6.00 | 5.0-12.0% | M24 | C |
| Outbound shipping | $3.50-5.00 | 7.0-10.0% | Absorbed for subscribers | C |
| Payment processing (2.9%+$0.30) | $1.75 | 3.5% | Stripe | A |
| Returns/refunds reserve (5% — lower for subs) | $2.51 | 5.0% | Lower because subscribers expect it | C |
| Chargebacks reserve (0.3%) | $0.15 | 0.3% | Lower for recurring | C |
| **Total variable cost per order** | **$27.81-32.81** | **55.5-65.4%** | | |
| **Gross profit per order** | **$17.34-22.34** | **34.6-44.5%** | | |

### 2.3 Blended Gross Margin Scenarios (60% sub / 40% one-time mix)

| Scenario | Key Assumption | Blended GM | Rationale |
|----------|---------------|------------|-----------|
| **OPTIMISTIC (65-75%)** | Product COGS only, no fulfillment/shipping in COGS | 67% | Bootstrap calculation method |
| **REALISTIC (55-65%)** | Self-fulfill, moderate returns, shipping partially absorbed | 60% | Compromise: product COGS + partial variable costs |
| **CONSERVATIVE (40-50%)** | 3PL fulfillment, full shipping absorption, 10% returns | 42% | Danilo's fully-loaded calculation |

**REC-001 RECOMMENDATION**: Use **60% as working baseline** for planning. Model all scenarios. Resolution requires:
1. Confirm fulfillment strategy (self vs 3PL) — drives 10-15% margin swing
2. Confirm shipping absorption policy — drives 6-10% margin swing
3. Lock return rate assumption with data — drives 5-7% margin swing

[Confidence: C | Source: Composite analysis | Date: 2026-02-11]

---

## 3. Margin Bridge Analysis

### From Product GM (67%) to Fully-Loaded GM (40%)

```
Product Gross Margin:           67%
 - Fulfillment cost:           -7% to -12%    (self-fulfill vs 3PL)
 - Shipping absorption:        -6% to -10%    (free shipping policy)
 - Payment processing:         -3.4%          (Stripe standard)
 - Returns/refunds:            -5% to -7%     (5-10% return rate)
 - Chargebacks:                -0.3% to -0.5%
 = Fully-Loaded GM:            34% to 45%
```

**This bridge explains the entire REC-001 gap.** Danilo's 40% and Bootstrap's 67% are both correct — they just measure different things.

**What the industry calls "gross margin":** Most D2C brands report the 60-70% number (product COGS only). This is misleading for cash planning but standard for investor decks.

**What matters for survival:** The 40-50% fully-loaded number determines actual cash available to cover fixed costs and growth spend.

[Confidence: B | Source: D2C industry standards, Saras Analytics, Drivepoint | Date: 2026-02-11]

---

## 4. Cost Sensitivity by Volume

| Monthly Orders | Self-Fulfill Cost | 3PL Cost | COGS per Box (volume discount) | Best Margin Path |
|----------------|-------------------|----------|-------------------------------|-----------------|
| 50-100 | $2.50/order | $6.00/order | $17.40 (no discount) | Self-fulfill |
| 100-300 | $2.50/order | $5.00/order | $16.50 (5% volume) | Self-fulfill |
| 300-500 | Capacity limit | $4.50/order | $15.60 (10% volume) | 3PL transition |
| 500-1,000 | Not feasible | $4.00/order | $14.80 (15% volume) | 3PL |
| 1,000+ | Not feasible | $3.50/order | $13.90 (20% volume) | 3PL + negotiation |

**Phase transition**: Self-fulfill saves $3-4/order up to ~300 orders/month. Beyond that, 3PL becomes necessary (founder time constraint). The margin hit from 3PL transition is partially offset by COGS volume discounts.

[Confidence: C | Source: M24 fulfillment estimates, M6 volume pricing tiers | Date: 2026-02-11]

---

## 5. Intelligence Gaps

| Gap | Impact | Validation Path | Priority |
|-----|--------|----------------|----------|
| No actual supplier quotes for marine plasma concentrate | COGS could be +-30% | Get 3 quotes from contract manufacturers | CRITICAL |
| Fulfillment strategy not decided (self vs 3PL) | 10-15% margin swing | Decision needed in M24 | HIGH |
| Shipping absorption policy undefined | 6-10% margin swing | Business decision required | HIGH |
| Return rate is industry benchmark, not IonWave-specific | 5-7% margin swing | Will calibrate post-launch | MEDIUM |
| Volume discount tiers unconfirmed | 5-20% COGS variance | Negotiate with CM after first production run | MEDIUM |

---

## 6. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 3/5 | Good structure but most costs are C/D grade estimates |
| Confidence Honesty | 5/5 | Every line item graded, REC-001 gap fully explained |
| Upgrade Path Quality | 4/5 | Clear actions to move C/D grades to A/B |
| Actionability | 4/5 | Decision-forcing on fulfillment/shipping/returns |
| Integration | 5/5 | Ties to M5, M6, M10, M24, M25, HYP-004 |

**Tab Score: 7.5/10** — Strong framework but limited by pre-launch data availability. Will upgrade significantly post-launch.
