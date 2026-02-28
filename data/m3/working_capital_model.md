# Working Capital Model — M3: Financial Model

**TUP**: M3 | **Tab**: 7 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-004 (Gross Margin), HYP-008 (Cash Runway)
**Cross-Reference**: M6 (Supply Chain), M13 (Media Buying), M24 (Fulfillment), M25 (Financial Ops)

---

## REC-001 MARGIN DISPUTE — HANDLING

> Working capital requirements are **margin-dependent**: lower margins mean less cash generated per order, requiring more capital to fund the same growth rate. The negative-CM scaling problem from M13 is amplified in the Conservative margin scenario.

---

## 1. Working Capital Cycle

### 1.1 Cash Conversion Cycle Components

| Component | Days | Description | Source | Grade |
|-----------|------|-------------|--------|-------|
| **Days Inventory Outstanding (DIO)** | 66 | 21-day safety stock + 45-day lead time | M6 Supply Chain | C |
| **Days Sales Outstanding (DSO)** | 2 | Stripe settlement | Stripe terms | A |
| **Days Payable Outstanding (DPO)** | 30 | Supplier Net 30 terms | M6 supplier terms estimate | C |
| **Cash Conversion Cycle** | **38 days** | DIO + DSO - DPO | Calculated | C |

**What this means**: Every dollar of growth requires 38 days of cash float. If you want to add $10K/month in revenue, you need approximately $12,600 in additional working capital ($10K x 38/30) to fund the inventory and operating costs before that revenue arrives.

### 1.2 Working Capital Paradox

**Positive side**: D2C subscription collects payment BEFORE shipping. Cash hits the bank 2 days after order.

**Negative side**: Inventory must be purchased 45-75 days BEFORE it generates revenue. At scale, the inventory investment can exceed the available cash.

```
Timeline of a single order's cash flow:
Day -60: Place order with contract manufacturer (50% deposit = $8.70/box)
Day -15: Receive goods, pay balance ($8.70/box)
Day 0:   Customer orders, pays $50.15 (subscription)
Day +2:  Cash settles in bank ($50.15 - $1.75 Stripe fee = $48.40)
Day +3:  Ship order (fulfillment cost $2.50-6.00)

Net: Paid $17.40 + $2.50 = $19.90 on Day -60/-15, received $48.40 on Day +2
Working capital locked: $19.90 for 62-77 days
```

[Confidence: B | Source: M6 supply chain, Stripe terms, standard D2C operations | Date: 2026-02-11]

---

## 2. Negative-CM Scaling Cash Implications

### 2.1 The M13 Problem: Scaling While Losing Money on New Customers

From M13 (Media Buying): In Phase 1-2, IonWave is expected to have negative contribution margin on new customer acquisition. Each new customer costs $30-50 in CAC but may only generate $20-30 in first-order contribution margin (after COGS, fulfillment, shipping).

**The cash implication**: Every new customer COSTS cash in Month 1. The subscription model recovers this investment over months 2-6. But scaling acquisition = scaling cash burn.

### 2.2 Working Capital by Growth Rate

| Monthly New Customers | Inventory Investment | Acquisition Cost | First-Month Cash Deficit | Payback Period |
|----------------------|---------------------|-----------------|--------------------------|----------------|
| 100 | $1,740 | $4,000 | -$3,500 | 2.5 months |
| 300 | $5,220 | $12,000 | -$10,500 | 2.5 months |
| 500 | $8,700 | $20,000 | -$17,500 | 2.5 months |
| 1,000 | $17,400 | $40,000 | -$35,000 | 2.5 months |
| 2,000 | $34,800 | $80,000 | -$70,000 | 2.5 months |

**Key insight**: At 1,000 new customers/month, IonWave needs $35K/month in ADDITIONAL working capital just to fund growth. This is why growing too fast without sufficient capital is dangerous.

### 2.3 Margin Impact on Working Capital Deficit

The working capital deficit per new customer varies dramatically by margin:

| Metric | Conservative (42% GM) | Realistic (60% GM) | Optimistic (67% GM) |
|--------|----------------------|-------------------|-------------------|
| Revenue per order | $53.68 (blended) | $53.68 | $53.68 |
| COGS per order | $31.13 | $21.47 | $17.71 |
| Gross profit per order | $22.55 | $32.21 | $35.97 |
| Minus CAC ($40) | -$17.45 | -$7.79 | -$4.03 |
| **First-order cash deficit** | **-$17.45** | **-$7.79** | **-$4.03** |
| Months to recover (from subs) | **4.8 months** | **2.5 months** | **1.7 months** |

**REC-001 impact**: At Conservative margins, payback takes 4.8 months vs 1.7 months at Optimistic. This nearly triples the working capital requirement.

[Confidence: C | Source: Model calculations based on cash_flow_model.md + M13 | Date: 2026-02-11]

---

## 3. Inventory Working Capital Requirements

### 3.1 Reorder Formula (from M6)

```
Reorder Point = (Daily Sales Rate x Lead Time) + Safety Stock
Safety Stock = Daily Sales Rate x 21 days
Lead Time = 45 days

Example at 500 orders/month (17/day):
  Reorder Point = (17 x 45) + (17 x 21) = 765 + 357 = 1,122 units
  Capital locked = 1,122 x $17.40 = $19,523
```

### 3.2 Inventory Investment by Phase

| Phase | Orders/Month | Reorder Point (units) | Capital Locked | % of Monthly Revenue |
|-------|-------------|----------------------|---------------|---------------------|
| Launch (M1-3) | 100-400 | 330-1,100 | $5,742-$19,140 | 122%-141% |
| Growth (M4-6) | 400-800 | 1,100-2,200 | $19,140-$38,280 | 80%-87% |
| Scale (M7-12) | 800-1,200 | 2,200-3,300 | $38,280-$57,420 | 77%-84% |

**Critical finding**: In the Launch phase, inventory investment EXCEEDS monthly revenue. This is the working capital trap — you must invest more in inventory than you earn in sales.

[Confidence: C | Source: M6 reorder formula, M5 COGS | Date: 2026-02-11]

---

## 4. Working Capital Management Strategies

### 4.1 Cash Management Levers

| Strategy | Cash Savings | Implementation | Risk |
|----------|-------------|----------------|------|
| **Negotiate Net 30 supplier terms** | Delays $8-17K payments by 30 days | Request at first reorder | Supplier may require deposit |
| **Small initial orders** | Reduces locked capital by 50-70% | Accept higher per-unit cost | May stock out if demand exceeds forecast |
| **Credit card float** | 30-day free financing on all purchases | Use business credit card | Discipline required — always pay in full |
| **Pre-orders / waitlist** | Revenue before inventory | Landing page with deposits | May lose impatient customers |
| **Just-in-time inventory** | Reduce safety stock to 14 days | Requires reliable supplier | Stockout risk during demand spikes |

### 4.2 Weekly Cash Position Tracking

**Minimum weekly check**:
1. Current bank balance
2. Pending Stripe payouts (2-day lag)
3. Outstanding supplier invoices
4. Committed ad spend (next 7 days)
5. Inventory on hand (days of coverage)

**Working capital health formula**:
```
WC Health = (Cash + Receivables) / (Payables + Committed Spend Next 30 Days)

Target: > 1.5x
Warning: < 1.2x
Kill: < 0.8x
```

[Confidence: B | Source: M25 Financial Ops, standard treasury management | Date: 2026-02-11]

---

## 5. Scenario Modeling: Growth vs. Capital

### 5.1 Maximum Sustainable Growth Rate by Capital Available

| Available Capital | Max Monthly Growth | Limiting Factor |
|------------------|-------------------|----------------|
| $10K | +50 customers/month | Inventory funding |
| $25K | +150 customers/month | Ad spend + inventory |
| $50K | +350 customers/month | Working capital cycle |
| $100K | +700 customers/month | Operational capacity |
| $250K | +1,500 customers/month | Market saturation risk |

### 5.2 Cash Runway Impact of Growth Decisions

| Decision | Cash Impact | Runway Impact |
|----------|-----------|--------------|
| Grow 20% faster than plan | -$5K/month additional burn | -2 months runway |
| Grow 20% slower than plan | +$3K/month saved | +1.5 months runway |
| Pause growth entirely | +$15-40K/month (ad savings) | +6-12 months runway |
| Double growth rate | -$20K/month additional burn | -4 months runway |

---

## 6. Intelligence Gaps

| Gap | Impact | Validation Path | Priority |
|-----|--------|----------------|----------|
| Actual cash conversion cycle unknown | Could be 20 or 60 days | Month 1-3 measurement | CRITICAL |
| Supplier payment terms not negotiated | Net 30 vs prepayment = 30-day swing | Negotiate at first order | HIGH |
| Credit card limits unknown | May constrain ad spend float | Apply for business credit card pre-launch | MEDIUM |
| RBF availability unconfirmed | Non-dilutive capital may not be accessible | Apply at $10K MRR milestone | MEDIUM |

---

## 7. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 3/5 | Good framework, pre-launch estimates |
| Confidence Honesty | 5/5 | Margin-dependent scenarios, honest about working capital trap |
| Upgrade Path Quality | 4/5 | Clear measurement protocol |
| Actionability | 5/5 | Weekly tracking protocol, lever identification, growth constraints |
| Integration | 5/5 | Ties M6, M13, M24, M25, M30 |

**Tab Score: 8.0/10**
