# Cash Flow Monitoring — M3: Financial Model

**TUP**: M3 | **Tab**: 12 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Cross-Reference**: M25 (Financial Ops), M30 (Kill Criteria)

---

## 1. Purpose

Daily, weekly, and monthly pulse checks to ensure IonWave never runs out of cash unexpectedly. This is the **monitoring system** that feeds into the 13-week cash flow forecast and triggers the M30 kill criteria when thresholds are crossed.

**Philosophy**: Cash is the oxygen of the business. You can have great margins, growing revenue, and happy customers — and still die if you run out of cash. Monitor it like a vital sign.

---

## 2. Daily Cash Pulse (5 Minutes)

### 2.1 Morning Dashboard Check

**Every morning before 9 AM:**

| Check | Tool | Takes | What You're Looking For |
|-------|------|-------|----------------------|
| Bank balance | Mercury app | 30 sec | Balance > 2 weeks of average weekly spend |
| Stripe pending | Stripe dashboard | 30 sec | Payouts processing normally, no holds |
| Yesterday's revenue | Shopify dashboard | 1 min | Revenue within expected daily range |
| Yesterday's ad spend | Meta + Google apps | 1 min | Within daily budget caps |
| Quick ROAS | Meta + Shopify | 1 min | Revenue / Ad spend > 1.5x |

### 2.2 Daily Alert Thresholds

| Alert | Condition | Response |
|-------|-----------|----------|
| **Cash critical** | Bank balance < $3,000 | Pause all non-essential spend immediately |
| **Stripe hold** | Payout delayed > 3 days | Contact Stripe support, check for disputes |
| **Revenue zero** | $0 in revenue for 24 hours | Check website, checkout flow, ad delivery |
| **Ad overspend** | Daily spend > 130% of cap | Lower bids, check automated rules |
| **ROAS crash** | Daily ROAS < 0.5x | Pause all ad sets, investigate |

---

## 3. Weekly Cash Review (30 Minutes, Monday)

### 3.1 Weekly Review Template

| Metric | Last Week | This Week | Trend | Notes |
|--------|----------|----------|-------|-------|
| Opening cash balance | | | | |
| Total inflows | | | | |
| Total outflows | | | | |
| Closing cash balance | | | | |
| Net cash flow | | | | |
| Weeks of runway (at current burn) | | | | |
| Largest single outflow | | | | |
| Stripe payout timing | | | | Normal / Delayed |

### 3.2 Weekly Cash Health Score

```
Cash Health Score = (Cash Balance / Next 4 Weeks Projected Outflows) x 100

Score > 200: Healthy — full control
Score 150-200: Good — maintain discipline
Score 100-150: Caution — tighten discretionary spend
Score 75-100: Warning — reduce growth spend, begin contingency planning
Score < 75: Critical — pause all non-essential spend, emergency measures
```

### 3.3 Action Protocol by Health Score

| Score Range | Actions |
|-------------|---------|
| **> 200** | Continue normal operations. Consider accelerating growth if metrics support it. |
| **150-200** | Normal operations. No new commitments without cash impact assessment. |
| **100-150** | Reduce discretionary spend. Delay non-critical purchases. Review ad spend efficiency daily. |
| **75-100** | Cut ad spend to profitable-only campaigns. Defer founder draw. Begin fundraise preparation. |
| **< 75** | Emergency: pause all paid acquisition. Contact investors. Activate survival protocol (M30). |

---

## 4. Monthly Cash Flow Review (1-2 Hours)

### 4.1 Monthly Review Agenda

| Step | Duration | Action |
|------|----------|--------|
| 1 | 15 min | Reconcile bank statements to bookkeeping records |
| 2 | 15 min | Review actual vs budgeted cash flows |
| 3 | 15 min | Analyze largest variances (> 15% from budget) |
| 4 | 15 min | Update next 3 months' cash flow forecast |
| 5 | 15 min | Review kill criteria metrics against M30 thresholds |
| 6 | 15 min | Identify upcoming large cash commitments (inventory reorders, insurance renewals, etc.) |

### 4.2 Monthly Variance Report

| Category | Budget | Actual | Variance | % | Root Cause | Action |
|----------|--------|--------|----------|---|-----------|--------|
| Revenue | | | | | | |
| COGS | | | | | | |
| Ad spend | | | | | | |
| Fixed costs | | | | | | |
| **Net cash** | | | | | | |

---

## 5. Cash Flow Warning System

### 5.1 Graduated Warning Levels (Tied to M30)

| Level | Trigger | Monitoring Frequency | Actions |
|-------|---------|---------------------|---------|
| **GREEN** | Runway > 16 weeks, Cash Health Score > 150 | Weekly review | Normal operations |
| **YELLOW** | Runway 8-16 weeks, Score 100-150 | Semi-weekly review | Reduce discretionary spend, prepare contingency |
| **ORANGE** | Runway 4-8 weeks, Score 75-100 | Daily review | Cut growth spend, begin fundraise, defer all non-essential costs |
| **RED** | Runway < 4 weeks, Score < 75 | Daily review + action | Emergency: pause all paid acquisition, contact investors, activate survival mode |
| **BLACK** | Runway < 2 weeks | Continuous | Wind-down or emergency capital injection only |

### 5.2 Escalation Contacts

| Level | Who to Notify | How |
|-------|-------------|-----|
| GREEN | No one (self-manage) | — |
| YELLOW | Co-founder/partner | Weekly update |
| ORANGE | Co-founder + Advisor | Call within 48 hours |
| RED | All stakeholders | Emergency call within 24 hours |
| BLACK | Legal counsel + All stakeholders | Immediate — wind-down or emergency raise |

---

## 6. Cash Flow Optimization Tactics

### 6.1 Quick Wins (Implement Immediately)

| Tactic | Cash Impact | Effort |
|--------|-----------|--------|
| Use business credit card for all purchases (30-day float) | +30 days on all expenses | Low |
| Set Stripe payouts to daily (not weekly) | Faster cash access | Low |
| Negotiate Net 30 with suppliers (vs prepayment) | Delays outflows 30 days | Medium |
| Pre-sell/waitlist before ordering inventory | Revenue before expense | Medium |

### 6.2 Emergency Levers (If Cash Gets Tight)

| Lever | Cash Savings | Consequence |
|-------|-------------|------------|
| Pause all advertising | $15-40K/month | Revenue growth stops completely |
| Delay inventory reorder | $8-17K per order | Risk stockout in 21 days |
| Defer founder draw | $3-5K/month | Founder unpaid |
| Negotiate payment plan with suppliers | Varies | May affect relationship |
| Short-term credit line | $5-20K | Interest cost, personal guarantee likely |

---

## 7. Intelligence Gaps

| Gap | Impact | Validation Path | Priority |
|-----|--------|----------------|----------|
| No monitoring tools set up | Can't track cash in real time | Set up Mercury + Stripe dashboards pre-launch | HIGH |
| No baseline data for "normal" cash patterns | Can't detect anomalies | Build baseline in Month 1-3 | HIGH |
| No automated alerts | Relies on manual checking | Set up Mercury auto-alerts at $5K threshold | MEDIUM |

---

## 8. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 4/5 | Comprehensive monitoring system |
| Confidence Honesty | 4/5 | Acknowledges no baseline data |
| Upgrade Path Quality | 5/5 | Graduated system from daily to monthly |
| Actionability | 5/5 | Every alert has a specific response |
| Integration | 5/5 | Directly ties to M25 + M30 kill criteria |

**Tab Score: 8.5/10**
