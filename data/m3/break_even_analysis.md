# Break-Even Analysis — M3: Financial Model

**TUP**: M3 | **Tab**: 9 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-001 (CAC), HYP-004 (Gross Margin), HYP-008 (Cash Runway)
**Cross-Reference**: M10 (Pricing), M13 (Media Buying), M25 (Financial Ops)

---

## REC-001 MARGIN DISPUTE — HANDLING

> Break-even points calculated at **three margin levels**: 40% (Danilo), 60% (Working Baseline), and 67% (Bootstrap). The difference in break-even timing is 6-12+ months depending on margin reality.

---

## 1. Monthly Operating Break-Even

### 1.1 Fixed Cost Base (Monthly)

| Phase | Monthly Fixed Costs | Notes |
|-------|-------------------|-------|
| Phase 1 (M1-6) | $4,500-5,500 | No founder draw, minimal overhead |
| Phase 2 (M7-12) | $6,000-9,000 | Founder draw starts, CS hire |
| Phase 3 (M13-24) | $10,000-15,000 | Growing team, upgraded tools |

### 1.2 Break-Even Revenue (Monthly, Excluding Ad Spend)

```
Break-Even Revenue = Fixed Costs / Gross Margin %
```

| Scenario | GM % | Phase 1 BE Revenue | Phase 2 BE Revenue | Phase 3 BE Revenue |
|----------|------|-------------------|-------------------|-------------------|
| **Conservative (40%)** | 40% | $12,500/mo | $18,750/mo | $31,250/mo |
| **Realistic (60%)** | 60% | $8,333/mo | $12,500/mo | $20,833/mo |
| **Optimistic (67%)** | 67% | $7,463/mo | $11,194/mo | $18,657/mo |

### 1.3 Break-Even Revenue (Including Ad Spend)

Ad spend is a variable cost in D2C. True break-even must include it:

```
True Break-Even Revenue = Fixed Costs / (Gross Margin % - Ad Spend as % of Revenue)
```

Assuming ad spend = 50% of revenue in early months:

| Scenario | GM % | Effective Margin (GM - 50% ads) | Phase 1 True BE | Achievable? |
|----------|------|-----------------------------|----------------|------------|
| **Conservative (40%)** | 40% | -10% | **NEVER** (negative margin) | NO |
| **Realistic (60%)** | 60% | 10% | $50,000/mo | ~Month 9-10 |
| **Optimistic (67%)** | 67% | 17% | $29,412/mo | ~Month 5-6 |

**CRITICAL FINDING**: At 40% gross margin with 50% ad spend ratio, the business CANNOT break even. Every additional dollar of revenue LOSES money. This is the core danger of the Conservative scenario.

**Resolution path**: Either (a) achieve >50% GM, or (b) reduce ad spend below GM%, or (c) grow organic revenue to dilute ad spend ratio.

[Confidence: B | Source: Standard break-even methodology | Date: 2026-02-11]

---

## 2. Unit-Level Break-Even

### 2.1 Orders to Break-Even (Monthly)

```
Monthly BE Orders = Fixed Costs / Contribution Margin per Order
```

| Scenario | Contribution Margin/Order | Phase 1 BE Orders | Phase 2 BE Orders |
|----------|--------------------------|-------------------|-------------------|
| Conservative (CM $5/order after ads) | $5.00 | 1,000 orders/mo | 1,500 orders/mo |
| Realistic (CM $12/order after ads) | $12.00 | 417 orders/mo | 625 orders/mo |
| Optimistic (CM $18/order after ads) | $18.00 | 278 orders/mo | 389 orders/mo |

**Note**: Contribution margin = Gross profit per order minus allocated CAC. At Conservative margins with high CAC, the per-order CM can be very thin or negative.

### 2.2 Active Subscribers to Break-Even (Excluding Acquisition)

Once a subscriber is acquired, their ongoing contribution margin (no CAC on repeat orders) is:

| Scenario | Monthly Sub Revenue | Monthly Sub COGS | Monthly Sub CM | Subs to Cover Fixed Costs |
|----------|-------------------|-----------------|---------------|--------------------------|
| Conservative (42% GM) | $50.15 | $29.09 | $21.06 | 238-427 subs |
| Realistic (60% GM) | $50.15 | $20.06 | $30.09 | 167-299 subs |
| Optimistic (67% GM) | $50.15 | $16.55 | $33.60 | 149-268 subs |

**What this means**: If IonWave can build a base of ~300 active subscribers (Realistic scenario), the subscription revenue alone covers fixed costs. All new acquisition and one-time revenue becomes pure growth fuel.

[Confidence: C | Source: Model calculations | Date: 2026-02-11]

---

## 3. Cumulative Break-Even (When Total Revenue Exceeds Total Costs)

### 3.1 Cumulative Break-Even Timeline

| Scenario | Cumulative Revenue = Cumulative Costs | Month Achieved |
|----------|--------------------------------------|---------------|
| **Optimistic** (67% GM, $30 CAC) | ~$180K cumulative | **Month 8-9** |
| **Realistic** (60% GM, $40 CAC) | ~$420K cumulative | **Month 14-16** |
| **Conservative** (42% GM, $45 CAC) | ~$900K cumulative | **Month 24+** (if ever) |

### 3.2 Investor Break-Even (SAFE Return + Operations)

Including the SAFE investment that needs to be returned to investors (at conversion):

| Scenario | Total Capital Required to BE | Time to Capital Return | Investor Multiple at BE |
|----------|------------------------------|----------------------|------------------------|
| Optimistic | $50K (SAFE) + $25K (burn) = $75K | Month 12-14 | 1.5-2x |
| Realistic | $40K (SAFE) + $59K (burn) = $99K | Month 18-20 | 1.2-1.5x |
| Conservative | $50K (SAFE) + $147K (burn) = $197K | Month 30+ | <1x (loss) |

[Confidence: D | Source: Scenario extrapolation | Date: 2026-02-11]

---

## 4. Break-Even Sensitivity to Key Variables

### 4.1 Margin Impact on Break-Even Timing

| GM % | Monthly BE Revenue (Phase 1) | Time to Monthly BE | Cumulative BE Month |
|------|------------------------------|-------------------|-------------------|
| 40% | $12,500 (excl. ads), NEVER (incl. ads) | Never (with ads) | 24+ |
| 45% | $11,111 | Month 18 | 22 |
| 50% | $10,000 | Month 14 | 18 |
| 55% | $9,091 | Month 11 | 16 |
| 60% | $8,333 | Month 9 | 14 |
| 65% | $7,692 | Month 7 | 11 |
| 67% | $7,463 | Month 6 | 9 |

**Margin is the single largest determinant of break-even timing.** A 10-percentage-point improvement in GM accelerates break-even by 4-6 months.

### 4.2 CAC Impact on Break-Even

| CAC | Per-Order CM (60% GM) | Monthly BE Orders | Time to Monthly BE |
|-----|----------------------|------------------|-------------------|
| $25 | $19.21 | 260 | Month 5 |
| $30 | $14.21 | 352 | Month 7 |
| $35 | $9.21 | 543 | Month 9 |
| $40 | $4.21 | 1,187 | Month 12 |
| $45 | -$0.79 | **NEVER** | **NEVER** |
| $50 | -$5.79 | **NEVER** | **NEVER** |

**KEY FINDING at 60% GM**: If CAC exceeds ~$44, the business cannot break even because per-order contribution margin goes negative. The model requires GM > CAC as a % of revenue.

[Confidence: B | Source: Mathematical analysis | Date: 2026-02-11]

---

## 5. Path to Profitability

### 5.1 The Three Phases of Break-Even

```
Phase 1: INVESTMENT (Month 1-6)
  → Every month loses money. CAC investment front-loaded.
  → Cash flow: deeply negative
  → Funded by: SAFE capital

Phase 2: RECOVERY (Month 7-14)
  → Subscriber base generates recurring revenue without CAC
  → Monthly losses shrink
  → Organic/referral revenue grows, diluting ad spend ratio
  → Cash flow: improving but still negative cumulative

Phase 3: PROFIT (Month 15+)
  → Monthly revenue exceeds monthly costs (operating break-even)
  → Cumulative losses begin to be repaid
  → Subscriber base is the profit engine
  → Cash flow: positive monthly, cumulative still recovering
```

### 5.2 Key Levers to Accelerate Break-Even

| Lever | Impact on BE Timing | Difficulty | REC-001 Dependence |
|-------|-------------------|-----------|-------------------|
| Reduce COGS (volume discounts) | -2 months | Medium | Low |
| Self-fulfill longer (avoid 3PL) | -3 months | High (time-intensive) | HIGH |
| Improve subscription rate | -2 months | Medium | Low |
| Reduce churn | -3 months | Hard | Low |
| Reduce CAC (better creative) | -4 months | Medium | Low |
| Raise prices ($59 → $69) | -3 months | Risk: lower conversion | Low |
| Eliminate free shipping | -2 months | Risk: lower conversion | HIGH |

---

## 6. Intelligence Gaps

| Gap | Impact | Validation Path | Priority |
|-----|--------|----------------|----------|
| Actual contribution margin per order unknown | BE timing could be off by 6+ months | Month 3 actual P&L | CRITICAL |
| Ad spend efficiency unknown | If ads are more efficient, BE accelerates | Month 1-3 ROAS data | CRITICAL |
| Organic revenue contribution unknown | Could significantly accelerate BE | Month 4-6 channel attribution | HIGH |
| Break-even assumes no seasonal variation | Holiday Q4 could accelerate or slow | First full Q4 analysis | MEDIUM |

---

## 7. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 3/5 | Standard methodology, pre-launch inputs |
| Confidence Honesty | 5/5 | Shows where Conservative scenario literally cannot break even |
| Upgrade Path Quality | 4/5 | Clear lever identification |
| Actionability | 5/5 | Decision-forcing: margin must exceed threshold for viability |
| Integration | 4/5 | Ties pricing, CAC, churn, margin |

**Tab Score: 7.5/10**
