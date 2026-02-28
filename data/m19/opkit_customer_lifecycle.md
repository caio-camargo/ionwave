# OpKit: Customer Lifecycle & CRM Operations (OK-M19-001)

**Type**: Production OpKit
**Domain**: Customer Lifecycle Management & CRM
**Applicable To**: Any DTC brand (supplement-specific sections flagged)
**Source TUP**: M19 — Customer Lifecycle & CRM
**Version**: 1.0.0
**Date Created**: 2026-02-07

---

## 1. Instruction Doc — How to Build a DTC Customer Lifecycle System

### Step-by-Step (8 Steps)

**Step 1: Define Your Lifecycle Stages**
- Choose 6-8 stages (more than 8 adds complexity without value at <5,000 customers)
- Each stage needs: Definition, Trigger In, Trigger Out, Primary Action, KPI
- Start with: Prospect → Lead → First Purchase → Repeat → VIP → At Risk → Churned
- Add Champion/Advocate stage when you have 500+ customers
- For consumables: adjust timing to product consumption cycle, not calendar time

**Step 2: Choose Your CRM Stack**
- Phase 1 (Day 1): Shopify + Klaviyo + Subscription tool (Recharge, Loop, Skio)
- Phase 2 (500+ customers): Add analytics tool (Lifetimely, Peel, Triple Whale)
- Phase 3 (500+ customers with 180+ days): Add RFM segmentation (Tresl Segments, Klaviyo built-in)
- Do NOT purchase analytics tools before you have the data to feed them
- Tool purchases trigger on customer count, not revenue

**Step 3: Build Minimum Viable Automation (Day 1)**
- Build ONLY 3 flows before first sale:
  1. Welcome Series (3 emails, Day 0/1/3) — ~3 hours setup
  2. Post-Purchase Series (4 emails, Day 0/3/7/14) — ~3 hours setup
  3. Abandoned Cart (3 emails + 1 SMS, Hour 1/Day 1/Day 3) — ~2 hours setup
- Everything else (replenishment, win-back, VIP, sunset) waits until you have data
- Total Day 1 setup: 8-11 hours

**Step 4: Implement Customer Segmentation**
- Start with behavioral segments in Klaviyo (built-in, free):
  - Prospects (email only), One-Timers, Repeat Buyers, Subscribers, VIPs, At-Risk, Lapsed, Churned
- At 500+ customers: implement RFM scoring
  - Score each customer 1-5 on Recency, Frequency, Monetary
  - Create 6-8 RFM segments with specific strategies per segment
- For consumables: adjust Recency thresholds to consumption cycle (30-day supply → Score 5 if purchased within 20 days)

**Step 5: Set Up Your Metrics Dashboard**
- Daily (5 minutes): Check orders, email health, support inbox, subscription cancellations
- Weekly (20 minutes): Full funnel conversion, retention metrics, email performance
- Monthly: Cohort LTV, segment migration, channel health, NPS
- Quarterly: Full LTV curves, strategic channel decisions, brand health audit

**Step 6: Implement Cohort Analysis**
- Month 1-6: Manual Google Sheet (free) — track customers by acquisition month, revenue per month
- Month 6+: Automated with Lifetimely or similar tool
- Track both revenue retention AND customer retention by cohort
- Compare cohorts diagonally (are newer cohorts better?) and vertically (does retention stabilize?)

**Step 7: Build Your Churn Prevention Stack**
- Priority 1: Dunning flow (recover failed payments) — 22% of churn is involuntary
- Priority 2: Replenishment flow (prevent product gap) — trigger before product depletion
- Priority 3: Subscription cancel prevention (offer pause/skip)
- Priority 4: At-risk intervention (segment at-risk customers by reason: product, budget, attention)
- Priority 5: Win-back flow (3 emails over 30 days for lapsed customers)

**Step 8: Calculate and Track LTV**
- Pre-data: Use Simple LTV (AOV × frequency × lifespan) for fundraising/planning
- Month 3+: Start churn-based LTV for subscription projections
- Month 6+: Switch to cohort-based LTV (most accurate, requires data)
- Track LTV by acquisition source — some channels produce higher-LTV customers
- Target: 3:1 LTV:CAC minimum; 4:1+ for healthy scaling

### For Supplement/Health Brands — Additional Considerations
- Consumption cycle timing: Adjust lifecycle and replenishment triggers to product supply duration (30/60/90 days)
- Expected outcomes timeline: Supplements need longer evaluation periods than typical DTC (30-90 days for results vs. instant gratification)
- NPS timing: Survey at Day 30+ (product needs time to show value), not Day 7
- At-risk sub-segmentation: Product-disappointed vs. budget-constrained vs. attention-lapsed require different interventions
- Churn seasonality: January resolution fade, summer routine disruption, holiday budget shifts

---

## 2. Grading Rubric

| Dimension | A (Excellent) | B (Good) | C (Adequate) | D (Weak) | F (Failing) |
|-----------|--------------|----------|--------------|----------|-------------|
| **Lifecycle Model** | 6-8 stages with triggers, KPIs, email mapping, non-linear paths acknowledged | 6+ stages with triggers and KPIs | Stages defined but no triggers | Vague "awareness → purchase → retention" | No lifecycle model |
| **Segmentation** | Behavioral + RFM dual-layer, at-risk sub-segments, phase-gated implementation | 6+ behavioral segments with strategies | Basic segments (new/returning/VIP) | Ad-hoc targeting | No segmentation |
| **LTV & Cohort Analysis** | Cohort-based LTV tracking, LTV by source, confidence intervals, seasonal adjustment | LTV tracked monthly with cohort framework | Simple LTV calculated, basic retention | Revenue-focused, no cohort analysis | No LTV calculation |
| **Metrics & Dashboards** | Daily + weekly + monthly cadence, decision triggers, founder-appropriate workflow | Weekly review with key metrics | Some metrics tracked but no cadence | Occasional Shopify checks | No systematic measurement |
| **Churn Prevention** | Multi-signal risk score, at-risk sub-segments, dunning + replenishment + intervention flows | Risk identification with intervention flows | Basic win-back flow only | Reactive to cancellations | No churn prevention |
| **CRM Stack** | Phase-gated by customer count, tool triggers defined, no premature spending | Appropriate tools for stage | Some tools, some unnecessary for stage | Over-tooled or under-tooled | No CRM tools |

---

## 3. Graded Example — IonWave (Trade #84)

| Dimension | Grade | Rationale |
|-----------|-------|-----------|
| Lifecycle Model | **B+** | 8 operational stages with triggers, KPIs, supplement-specific timing. Non-linear paths acknowledged. Minimum Viable CRM prioritizes founder bandwidth. All transition rates are pre-revenue estimates. |
| Segmentation | **A-** | Dual-layer (behavioral + RFM) with at-risk sub-segments. Phase-gated by customer count. RFM thresholds calibrated for supplements. Empty until 500+ customers. |
| LTV & Cohort Analysis | **B** | Cohort framework with confidence intervals. Three methods compared. LTV by source hierarchy estimated. All actual data empty (D-grade). |
| Metrics & Dashboards | **B+** | Founder daily 5-minute check-in. Full weekly/monthly/quarterly cadence. Decision triggers with cross-TUP ownership. |
| Churn Prevention | **A-** | 4-signal churn risk formula (Phase 1 + Phase 2). At-risk sub-segments. Dunning as Priority 1. Seasonality mapped. |
| CRM Stack | **B+** | 5-phase stack gated by customer count. No premature tool spending. Shopify + Klaviyo handle 80% at launch. |

**Overall: 8.4/10**

---

## 4. Scaffolds

### Scaffold A: Lifecycle Stage Definitions

```
## [Brand] Customer Lifecycle

### Stages
| Stage | Definition | Trigger In | Trigger Out | Primary Action | KPI |
|-------|-----------|-----------|-------------|---------------|-----|
| Prospect | [Definition] | [Trigger] | [Trigger] | [Action] | [KPI] |
| Lead | [Definition] | [Trigger] | [Trigger] | [Action] | [KPI] |
| First Purchase | [Definition] | [Trigger] | [Trigger] | [Action] | [KPI] |
| Repeat | [Definition] | [Trigger] | [Trigger] | [Action] | [KPI] |
| VIP | [Definition] | [Trigger] | [Trigger] | [Action] | [KPI] |
| At Risk | [Definition] | [Trigger] | [Trigger] | [Action] | [KPI] |
| Churned | [Definition] | [Trigger] | [Trigger] | [Action] | [KPI] |

### Minimum Viable CRM (Day 1 Flows)
1. Welcome Series: [# emails], [timing], [~X hours setup]
2. Post-Purchase: [# emails], [timing], [~X hours setup]
3. Abandoned Cart: [# emails + SMS], [timing], [~X hours setup]
Total Day 1 setup: ~[X] hours

### Tier 2 Flows (Month 1-2)
4. [Flow name]: [trigger]
5. [Flow name]: [trigger]
6. [Flow name]: [trigger]

### Tier 3 Flows (Month 3+)
7. [Flow name]: [trigger]
...
```

### Scaffold B: LTV Tracking

```
## [Brand] LTV & Cohort Analysis

### Current LTV (Updated [Date])
- Simple LTV: $[X] (AOV $[X] × [X]x/year × [X] years)
- Churn-Based LTV: $[X] (ARPU $[X] × [X]% margin ÷ [X]% monthly churn)
- Cohort-Based LTV: $[X] (based on [X]-month actuals)

### LTV by Acquisition Source
| Source | Customers | CAC | M3 LTV | M12 LTV | LTV:CAC | Grade |
|--------|-----------|-----|--------|---------|---------|-------|
| [Source] | [N] | $[X] | $[X] | $[X] | [X]:1 | [A-F] |
...
| BLENDED | [N] | $[X] | $[X] | $[X] | [X]:1 | [A-F] |

### Cohort Revenue Retention
| Cohort | Customers | M0 | M1 | M2 | M3 | M6 | M12 |
|--------|-----------|-----|-----|-----|-----|-----|------|
| [Month Year] | [N] | 100% | [X]% | [X]% | [X]% | [X]% | [X]% |

### Decision Rules
- LTV:CAC <2:1 for 3 months → reduce channel spend
- LTV:CAC >5:1 → invest more in channel
- M1 retention <30% → investigate product/onboarding
- Monthly churn >7% → churn task force
```

### Scaffold C: CRM Metrics Scorecard

```
## [Brand] CRM Scorecard — Week of [Date]

### Daily Check-In
- [ ] Orders reviewed (yesterday: [X] orders, $[X] revenue)
- [ ] Email health checked (deliverability: [X]%, no flow failures)
- [ ] Support inbox clear ([X] open tickets, CSAT: [X]%)
- [ ] Subscriptions reviewed ([X] cancellations, [X] failed payments)

### Weekly Funnel Health
| Metric | This Week | Last Week | Target | Status |
|--------|-----------|-----------|--------|--------|
| Hook rate | [X]% | [X]% | >25% | [🟢/🟡/🔴] |
| Ad CTR | [X]% | [X]% | >1.5% | [🟢/🟡/🔴] |
| Email capture | [X]% | [X]% | >5% | [🟢/🟡/🔴] |
| CVR | [X]% | [X]% | >3% | [🟢/🟡/🔴] |
| Repeat rate | [X]% | [X]% | >25% | [🟢/🟡/🔴] |
| Churn rate | [X]% | [X]% | <20% | [🟢/🟡/🔴] |

### Monthly Depth Metrics
| Metric | This Month | Target | Red Flag |
|--------|-----------|--------|----------|
| Avg LTV | $[X] | >$120 | <$60 |
| LTV:CAC | [X]:1 | >3:1 | <2:1 |
| NPS | [X] | >50 | <20 |
| Sub rate | [X]% | >20% | <8% |
| List health | [X]% | >40% | <20% |
```
