# M19 Dialogue Summary — Customer Lifecycle & CRM

**TUP**: M19
**Protocol**: TWP-001 v2.0.0
**Date**: 2026-02-07
**Rounds**: 5
**Personas**: Data Scientist, DTC Growth Operator, Behavioral Economist
**Saturation**: Yes (Round 5, all three saturated)

---

## Upgrade Log

| ID | Source Persona | Issue | Resolution | File(s) Affected |
|----|--------------|-------|------------|-------------------|
| **U1** | Data Scientist | Cohort analysis sample sizes lack confidence intervals; RFM thresholds should be distribution-based | Added 95% CI at key sample sizes; noted RFM recalibration at 500+ customers | ltv_and_cohort_analysis.md |
| **U2** | DTC Growth Operator | 10 flows pre-launch = 2-3 weeks of setup, blocking first sale | Created Minimum Viable CRM (3 flows for Day 1, 8-11 hours setup) | lifecycle_and_segmentation.md |
| **U3** | Behavioral Economist | Linear lifecycle model ignores shortcuts, skips, and oscillations | Added non-linear customer paths: shortcut transitions, oscillation patterns, measurement framing | crm_architecture.md |
| **U4** | DTC Growth Operator | Tool triggers by revenue ($50K) are unreliable; $149/month analytics at $5K/month revenue is 3% overhead | Changed to customer-count triggers (500+ customers for analytics tools) | crm_architecture.md |
| **U5** | Behavioral Economist | At-Risk is 3+ distinct profiles requiring different interventions | Split into At-Risk (Product), At-Risk (Budget), At-Risk (Attention) with tailored strategies | lifecycle_and_segmentation.md |
| **U6** | Data Scientist | Point-in-time metrics miss seasonality; supplement churn peaks in January | Added seasonality awareness, 3-month rolling averages for channel grading | ltv_and_cohort_analysis.md |
| **U7** | Behavioral Economist | Churn Risk Score undefined — just "computed weekly" with no formula | Defined Phase 1 (simple days-since-purchase) and Phase 2 (4-signal weighted model) | ltv_and_cohort_analysis.md |
| **U8** | DTC Growth Operator | Weekly dashboard is too formal for Month 1 founder; needs daily 5-minute protocol | Added Founder Daily CRM Check-In: 4 tools, 5 minutes, clear decision rule | crm_metrics_and_dashboards.md |

---

## Resolved (No Upgrade Needed)

| Round | Persona | Issue | Why Resolved |
|-------|---------|-------|--------------|
| 2 | Data Scientist | LTV:CAC ratio ignores payback period | Already addressed — payback targets by channel included in LTV by Source section |
| 3 | DTC Growth Operator | CRM Tab Map lacks priority | Priority is wave-planning (TUP Workshop Tracker), not M19's scope |
| 4 | Data Scientist | Segment migration monthly at small scale is noise | Noted — quarterly until 1,000+ customers |
| 4 | Behavioral Economist | Advocacy conflates passive (reviews) and active (referrals) | Noted in segment definitions |

---

## What Would Have Been Missed Without Dialogue

1. **Confidence intervals on cohort data** — Without U1, the playbook would have said "50 customers is enough" when 50 customers gives you a ±14% error bar. Founders would have made budget decisions on noise.

2. **3-week pre-launch paralysis** — Without U2, a solo founder would have built 10 Klaviyo flows before selling a single unit. The Minimum Viable CRM cuts this to 8-11 hours and 3 flows.

3. **At-Risk segment blindness** — Without U5, every at-risk customer gets the same win-back email. A product-disappointed customer gets a discount (insult), a budget-constrained customer gets a product reminder (irrelevant), and an attention-lapsed customer gets a personal note (overkill). Three segments, three interventions.

4. **Churn risk as black box** — Without U7, "churn risk score" was an undefined computed field. Now it has a clear formula at two complexity levels, implementable from Day 1.

5. **Tool spending before data exists** — Without U4, the playbook recommended Lifetimely at $50K revenue — potentially $149/month when monthly revenue is $4-5K. Triggering on customer count (500+) ensures the data justifies the tool.
