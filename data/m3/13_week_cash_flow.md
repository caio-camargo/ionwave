# 13-Week Cash Flow — M3: Financial Model

**TUP**: M3 | **Tab**: 6 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-008 (Cash Runway)
**Cross-Reference**: M25 (Financial Ops — originated the 13-week concept)

---

## 1. Purpose

The 13-week cash flow forecast is the **tactical survival instrument**. While the 3-year model (cash_flow_model.md) provides strategic direction, this forecast tells you **exactly when you run out of money** and **exactly which checks to write this week**.

Updated weekly. Always looks 13 weeks forward. This is the document that prevents surprise death.

[Confidence: A | Source: Standard treasury management practice, adopted by M25 for IonWave | Date: 2026-02-11]

---

## 2. Template Structure

### 2.1 Weekly Cash Position (Populate with Actuals)

| Line Item | Week 1 | Week 2 | Week 3 | Week 4 | Week 5 | Week 6 | Week 7 | Week 8 | Week 9 | Week 10 | Week 11 | Week 12 | Week 13 |
|-----------|--------|--------|--------|--------|--------|--------|--------|--------|--------|---------|---------|---------|---------|
| **Opening Cash** | $40,000 | | | | | | | | | | | | |
| **INFLOWS** | | | | | | | | | | | | | |
| Stripe settlements | | | | | | | | | | | | | |
| Subscription renewals | | | | | | | | | | | | | |
| One-time orders | | | | | | | | | | | | | |
| Other income | | | | | | | | | | | | | |
| **Total Inflows** | | | | | | | | | | | | | |
| **OUTFLOWS** | | | | | | | | | | | | | |
| Ad spend (Meta) | | | | | | | | | | | | | |
| Ad spend (Google) | | | | | | | | | | | | | |
| Inventory orders | | | | | | | | | | | | | |
| Fulfillment/shipping | | | | | | | | | | | | | |
| Stripe fees | | | | | | | | | | | | | |
| Software/SaaS | | | | | | | | | | | | | |
| Insurance | | | | | | | | | | | | | |
| Legal | | | | | | | | | | | | | |
| Accounting | | | | | | | | | | | | | |
| Contractor payments | | | | | | | | | | | | | |
| Founder draw | | | | | | | | | | | | | |
| Tax reserves | | | | | | | | | | | | | |
| Miscellaneous | | | | | | | | | | | | | |
| **Total Outflows** | | | | | | | | | | | | | |
| **Net Cash Flow** | | | | | | | | | | | | | |
| **Closing Cash** | | | | | | | | | | | | | |
| **Weeks of Runway** | | | | | | | | | | | | | |

### 2.2 Pre-Launch Example (Week 1-4 Populated with Estimates)

| Line Item | Week 1 | Week 2 | Week 3 | Week 4 |
|-----------|--------|--------|--------|--------|
| **Opening Cash** | $40,000 | $36,500 | $26,800 | $24,450 |
| **INFLOWS** | | | | |
| Stripe settlements | $0 | $0 | $450 | $1,100 |
| **Total Inflows** | $0 | $0 | $450 | $1,100 |
| **OUTFLOWS** | | | | |
| Entity formation | $2,000 | $0 | $0 | $0 |
| Insurance (annual) | $0 | $1,500 | $0 | $0 |
| First inventory order (deposit) | $0 | $8,000 | $0 | $0 |
| Website/Shopify | $500 | $0 | $39 | $0 |
| Ad testing (Week 3 start) | $0 | $0 | $700 | $1,400 |
| Software setup | $200 | $200 | $100 | $100 |
| Photography | $0 | $0 | $500 | $0 |
| Inventory balance | $0 | $0 | $2,000 | $0 |
| Misc | $800 | $0 | $461 | $200 |
| **Total Outflows** | $3,500 | $9,700 | $3,800 | $1,700 |
| **Net Cash Flow** | -$3,500 | -$9,700 | -$3,350 | -$600 |
| **Closing Cash** | $36,500 | $26,800 | $24,450 | $23,850 |
| **Weeks of Runway** | ~19 | ~14 | ~14 | ~14 |

[Confidence: C | Source: Capital requirements estimates | Date: 2026-02-11]

---

## 3. Rolling Forecast Protocol

### 3.1 Weekly Update Cadence

| Day | Action | Time Required |
|-----|--------|-------------|
| **Monday** | Update actual cash position (bank balance + pending Stripe) | 10 min |
| **Monday** | Record prior week's actual inflows/outflows | 15 min |
| **Monday** | Update forecast for Weeks 2-13 based on new data | 20 min |
| **Monday** | Calculate weeks of runway | 5 min |
| **Monday** | Flag any week where closing cash < $5,000 | Immediate |

### 3.2 Confidence Gradient

| Forecast Horizon | Accuracy | Action |
|-----------------|----------|--------|
| Week 1-2 | High (known commitments) | Execute |
| Week 3-4 | Medium (predictable patterns) | Plan |
| Week 5-8 | Low (assumptions) | Direction only |
| Week 9-13 | Very low (extrapolation) | Scenario planning |

### 3.3 Kill Criteria Triggers

| Threshold | Action | M30 Reference |
|-----------|--------|--------------|
| Runway < 13 weeks | Reduce discretionary spend | RF-5 warning |
| Runway < 8 weeks | Pause non-essential spending, begin fundraise | RF-5 warning |
| Runway < 4 weeks | Emergency: pause all growth spend | RF-5 KILL |
| Runway < 2 weeks | Wind-down protocol | Existential |

[Confidence: A | Source: Standard treasury management, M30 kill criteria | Date: 2026-02-11]

---

## 4. Variance Analysis

### 4.1 Weekly Variance Template

| Category | Forecasted | Actual | Variance $ | Variance % | Explanation | Action Required? |
|----------|-----------|--------|-----------|-----------|-------------|-----------------|
| Revenue | | | | | | |
| Ad spend | | | | | | |
| COGS | | | | | | |
| Fixed costs | | | | | | |
| **Net** | | | | | | |

### 4.2 Materiality Thresholds

| Variance | Response |
|----------|----------|
| < 5% | Normal fluctuation, no action |
| 5-15% | Note and investigate; update future forecasts |
| 15-30% | Significant — root cause analysis required |
| > 30% | Critical — model assumptions may be wrong; reassess |

---

## 5. Intelligence Gaps

| Gap | Impact | Validation Path | Priority |
|-----|--------|----------------|----------|
| No actuals to populate template | Template is unfilled until launch | Populate Week 1 at launch | CRITICAL |
| Inventory timing uncertain | Large lumpy outflows hard to predict | Lock supplier lead times | HIGH |
| Ad spend variability | Can swing $500-5K/week | Implement hard daily caps | MEDIUM |

---

## 6. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 4/5 | Template is complete and methodology is sound |
| Confidence Honesty | 5/5 | Confidence gradient is explicit |
| Upgrade Path Quality | 5/5 | Weekly cadence + variance analysis = self-improving |
| Actionability | 5/5 | Directly operational — use on Day 1 |
| Integration | 4/5 | Ties M25, M30 kill criteria |

**Tab Score: 8.5/10** — High score because the template itself is the deliverable, and it is fully usable.
