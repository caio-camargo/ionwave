# Cash Flow Model — M3: Financial Model

**TUP**: M3 | **Tab**: 1 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-001 (CAC), HYP-002 (Subscription Rate), HYP-003 (Churn), HYP-004 (Gross Margin), HYP-005 (LTV), HYP-008 (Cash Runway)
**Cross-Reference**: M2 (Entity/Legal), M4 (Fundraising), M5 (COGS), M6 (Supply Chain), M10 (Pricing), M13 (Media Buying), M24 (Fulfillment), M25 (Financial Ops), M30 (Analytics/Kill Criteria)

---

## REC-001 MARGIN DISPUTE — HANDLING

> **This model presents THREE parallel scenarios** wherever margin assumptions affect projections.
> - **Conservative (40-50% GM)**: Danilo's fully-loaded gross margin. Fulfillment, shipping, payment processing, returns ALL included in COGS.
> - **Realistic (55-65% GM)**: Working baseline. Self-fulfill Phase 1, partial shipping absorption. 60% GM used as default.
> - **Optimistic (65-75% GM)**: Bootstrap product-only gross margin. Valid for product KPI tracking, NOT for cash planning.
>
> **BLOCKER: REC-001 must be resolved before locking this model.** See `landed_cost_breakdown.md` for gap analysis.

---

## 1. Revenue Assumptions

### 1.1 Pricing Structure (from M10)

| Product | Price | Per-Serving | GM (Realistic) |
|---------|-------|------------|----------------|
| One-time box (30 sachets) | $59.00 | $1.97 | 60% |
| Subscribe & Save (30 sachets) | $50.15 | $1.67 | 55% |
| 2-box bundle | $106.00 ($53/box) | $1.77 | 58% |
| 3-box bundle | $147.00 ($49/box) | $1.63 | 53% |

[Confidence: B | Source: M10 Offer Strategy, pending PT-001 completion | Date: 2026-02-11]

### 1.2 Customer Acquisition Assumptions (from M13)

| Phase | Timeline | Daily Ad Spend | CAC | New Customers/Month |
|-------|----------|---------------|-----|-------------------|
| Phase 1: Testing | Month 1-3 | $100-500/day | $30-50 | 60-500 |
| Phase 2: Scaling | Month 4-6 | $500-1,000/day | $40-60 | 250-750 |
| Phase 3: Optimized | Month 7-12 | $1,000-3,000/day | $35-55 | 550-2,600 |
| Phase 4: Mature | Month 13-36 | $2,000-5,000/day | $30-50 | 1,200-5,000 |

[Confidence: C | Source: M13 Scaling Framework, HYP-001 | Date: 2026-02-11]

### 1.3 Retention Assumptions (from M19/M21)

| Metric | Value | Source | Grade |
|--------|-------|--------|-------|
| Subscription attach rate | 60% (target) | M10, HYP-002 | C |
| Month 1 churn | 45% | M19 estimates | D |
| Month 2-3 churn | 30-35% | M19 estimates | D |
| Steady-state churn | 25-30%/month | M19, HYP-003 | D |
| Reactivation rate | 5-10% | Industry benchmark | D |

[Confidence: D | Source: Pre-launch estimates, no actuals | Date: 2026-02-11]

---

## 2. Three-Year Monthly Cash Flow Projections

### 2.1 Year 1 Monthly Projections — REALISTIC SCENARIO (60% GM)

| Month | New Cust. | Active Subs | One-Time Orders | Revenue | COGS (60% GM) | Gross Profit | Ad Spend | Fixed Costs | Net Cash Flow | Cumulative |
|-------|----------|------------|----------------|---------|--------------|-------------|----------|------------|--------------|-----------|
| 1 | 60 | 36 | 24 | $4,718 | $1,887 | $2,831 | $2,400 | $4,500 | -$4,069 | -$4,069 |
| 2 | 120 | 90 | 48 | $8,270 | $3,308 | $4,962 | $4,800 | $4,500 | -$4,338 | -$8,407 |
| 3 | 200 | 163 | 80 | $13,618 | $5,447 | $8,171 | $8,000 | $4,500 | -$4,329 | -$12,736 |
| 4 | 350 | 310 | 140 | $24,041 | $9,616 | $14,425 | $15,000 | $5,000 | -$5,575 | -$18,311 |
| 5 | 500 | 450 | 200 | $35,243 | $14,097 | $21,146 | $22,500 | $5,000 | -$6,354 | -$24,665 |
| 6 | 600 | 570 | 240 | $43,791 | $17,516 | $26,275 | $27,000 | $5,500 | -$6,225 | -$30,890 |
| 7 | 650 | 665 | 260 | $49,781 | $19,912 | $29,869 | $29,250 | $5,500 | -$4,881 | -$35,771 |
| 8 | 700 | 740 | 280 | $54,782 | $21,913 | $32,869 | $31,500 | $5,500 | -$4,131 | -$39,902 |
| 9 | 750 | 800 | 300 | $59,040 | $23,616 | $35,424 | $33,750 | $6,000 | -$4,326 | -$44,228 |
| 10 | 800 | 850 | 320 | $62,710 | $25,084 | $37,626 | $36,000 | $6,000 | -$4,374 | -$48,602 |
| 11 | 850 | 890 | 340 | $65,884 | $26,354 | $39,530 | $38,250 | $6,000 | -$4,720 | -$53,322 |
| 12 | 900 | 920 | 360 | $68,540 | $27,416 | $41,124 | $40,500 | $6,500 | -$5,876 | -$59,198 |
| **Y1 Total** | **6,480** | | | **$490,418** | **$196,167** | **$294,251** | **$288,950** | **$64,500** | **-$59,198** | |

**Year 1 Key Metrics (Realistic):**
- Total revenue: ~$490K
- Total gross profit: ~$294K
- Total ad spend: ~$289K
- Total fixed costs: ~$65K
- Net cash burn: ~$59K
- MER (Marketing Efficiency Ratio): 1.70x

### 2.2 Year 1 — CONSERVATIVE SCENARIO (42% GM)

| Quarter | Revenue | COGS (42% GM) | Gross Profit | Ad Spend | Fixed Costs | Net Cash Flow |
|---------|---------|--------------|-------------|----------|------------|--------------|
| Q1 | $26,606 | $15,431 | $11,175 | $15,200 | $13,500 | -$17,525 |
| Q2 | $103,075 | $59,784 | $43,291 | $64,500 | $15,500 | -$36,709 |
| Q3 | $163,603 | $94,890 | $68,713 | $94,500 | $17,000 | -$42,787 |
| Q4 | $197,134 | $114,338 | $82,796 | $114,750 | $18,500 | -$50,454 |
| **Y1 Total** | **$490,418** | **$284,443** | **$205,975** | **$288,950** | **$64,500** | **-$147,475** |

### 2.3 Year 1 — OPTIMISTIC SCENARIO (67% GM)

| Quarter | Revenue | COGS (67% GM) | Gross Profit | Ad Spend | Fixed Costs | Net Cash Flow |
|---------|---------|--------------|-------------|----------|------------|--------------|
| Q1 | $26,606 | $8,780 | $17,826 | $15,200 | $13,500 | -$10,874 |
| Q2 | $103,075 | $34,015 | $69,060 | $64,500 | $15,500 | -$10,940 |
| Q3 | $163,603 | $53,989 | $109,614 | $94,500 | $17,000 | -$1,886 |
| Q4 | $197,134 | $65,054 | $132,080 | $114,750 | $18,500 | -$1,170 |
| **Y1 Total** | **$490,418** | **$161,838** | **$328,580** | **$288,950** | **$64,500** | **-$24,870** |

### 2.4 Year 2-3 Annual Summary (Realistic 60% GM)

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Revenue | $490K | $1.2M | $2.4M |
| Gross Profit | $294K | $720K | $1,440K |
| Ad Spend | $289K | $540K | $840K |
| Fixed Costs | $65K | $120K | $200K |
| Net Cash Flow | -$59K | +$60K | +$400K |
| MER | 1.70x | 2.22x | 2.86x |
| Active Subscribers (end) | 920 | 2,200 | 4,500 |

[Confidence: D for Y2-Y3 | Source: Growth model extrapolation | Date: 2026-02-11]

---

## 3. Fixed Cost Structure

### 3.1 Monthly Fixed Costs — Phase 1 (Month 1-6)

| Category | Monthly Cost | Annual | Source | Grade |
|----------|-------------|--------|--------|-------|
| Founder salary/draw | $0 (deferred) | $0 | Business decision | B |
| Shopify Plus | $0 (Basic $39) | $468 | Shopify pricing | A |
| Software stack (email, SMS, analytics) | $200-400 | $3,600 | Klaviyo, GA4, misc | B |
| Insurance (product liability) | $150-250/mo | $2,400 | M2 estimates | C |
| Legal/compliance reserve | $500/mo | $6,000 | M2: $15-25K Y1 | C |
| Accounting/bookkeeping | $200-300/mo | $3,000 | M25: outsourced | C |
| Storage/warehouse | $200-500/mo | $4,200 | Home garage → small unit | D |
| Miscellaneous | $200-300/mo | $3,000 | Buffer | D |
| **Total fixed (Phase 1)** | **$1,490-2,290** | **$22,668** | | |

### 3.2 Monthly Fixed Costs — Phase 2 (Month 7-12)

| Category | Monthly Cost | Annual | Notes |
|----------|-------------|--------|-------|
| Founder salary/draw | $3,000-5,000 | $36-60K | If funded |
| Shopify | $39-399 | $2,388 | May upgrade to Shopify |
| Software stack | $400-800 | $7,200 | Scale Klaviyo, add tools |
| 3PL monthly minimum | $500-1,000 | $9,000 | If transitioned |
| Insurance | $200-350/mo | $3,300 | Increased coverage |
| Legal reserve | $500/mo | $6,000 | Ongoing |
| Accounting | $300-500/mo | $4,800 | Growing complexity |
| Customer service (PT) | $500-1,000/mo | $9,000 | Part-time help |
| **Total fixed (Phase 2)** | **$5,439-9,149** | **$77,688** | | |

[Confidence: C | Source: M2, M24, M25 estimates | Date: 2026-02-11]

---

## 4. Cash Flow Timing Dynamics

### 4.1 Positive Working Capital (Revenue)
- **Subscription revenue**: Charged immediately, cash in bank within 2 business days (Stripe standard)
- **One-time revenue**: Charged at checkout, same 2-day settlement
- **Net effect**: Revenue = cash almost immediately

### 4.2 Negative Working Capital (Expenses)
- **Inventory prepayment**: Net 30-50% deposit, balance on shipment. 45-day lead time means paying 45-75 days before revenue
- **Ad spend**: Daily billing, paid immediately via credit card
- **Fulfillment**: Self-fulfill = costs as incurred; 3PL = Net 15-30
- **Net effect**: Cash goes out 30-75 days before revenue comes in

### 4.3 Cash Conversion Cycle

```
Cash Conversion Cycle = Days Inventory Outstanding + Days Sales Outstanding - Days Payable Outstanding

DIO: 21 days (safety stock) + 45 days (lead time) = 66 days average
DSO: 2 days (Stripe settlement)
DPO: 30 days (supplier terms)

CCC = 66 + 2 - 30 = 38 days

Meaning: You need ~38 days of operating costs as working capital buffer.
```

[Confidence: C | Source: M6 supply chain, Stripe terms, supplier estimates | Date: 2026-02-11]

---

## 5. Capital Injection Points

### 5.1 SAFE Raise (from M4)

| Parameter | Value | Source |
|-----------|-------|--------|
| Amount | $30-50K | M4 Fundraising |
| Instrument | SAFE (Post-money) | M4 |
| Valuation cap | $250-500K | M4 |
| Timing | Pre-launch or Month 1-2 | M4 |
| Use of funds | Inventory ($15K), Ads ($10K), Legal ($5K), Working capital ($10-20K) | M3 allocation |

### 5.2 Revenue-Based Financing (if applicable)

Once reaching $10K+ MRR with subscription revenue, IonWave may qualify for RBF:
- Typical terms: 6-12% flat fee, repaid as % of monthly revenue (5-15%)
- Available from: Clearco, Wayflyer, Pipe
- Best for: Inventory financing without dilution

[Confidence: C | Source: 2026 D2C funding research | Date: 2026-02-11]

---

## 6. Kill Criteria Integration (from M30)

| Metric | Warning | Kill | Model Impact |
|--------|---------|------|-------------|
| CAC > $50 for 14 days | Reduce ad spend 50% | Pause all paid acquisition | Revenue projections collapse |
| Cash runway < 60 days | Fundraise immediately | Wind down if no path | Model assumes 90+ day runway |
| Contribution margin negative 30 days | Audit all variable costs | Pause growth spend | Shifts to survival mode |
| MER < 1.5x for 30 days | Reduce spend to profitable-only | Full growth pause | Revenue growth stalls |

[Confidence: B | Source: M30 Red Flags & Validation | Date: 2026-02-11]

---

## 7. Intelligence Gaps

| Gap | Impact | Validation Path | Priority |
|-----|--------|----------------|----------|
| All customer acquisition numbers are pre-launch assumptions | Revenue projections may be 50-200% off | Month 1-3 actual data | CRITICAL |
| Churn rates are industry estimates, not IonWave data | Subscriber revenue could be much lower | Month 2-4 cohort data | CRITICAL |
| REC-001 margin dispute unresolved | $88K swing in Y1 net cash flow between scenarios | Resolve fulfillment/shipping/returns policy | CRITICAL |
| No actual CAC data | Entire model depends on $30-50 CAC holding | First $5K ad test | CRITICAL |
| Y2-Y3 are extrapolations | Low confidence beyond Month 12 | Quarterly model updates | HIGH |

---

## 8. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 3/5 | Comprehensive structure but all inputs are pre-launch estimates |
| Confidence Honesty | 5/5 | REC-001 explicitly handled, all grades transparent |
| Upgrade Path Quality | 4/5 | Clear month-by-month calibration plan |
| Actionability | 4/5 | Three scenarios enable decision-making at any margin reality |
| Integration | 5/5 | Connects M2, M4, M5, M6, M10, M13, M24, M25, M30 |

**Tab Score: 7.5/10** — Strong framework with honest uncertainty. Primary limitation: zero actuals.
