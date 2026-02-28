# M36 Operational Infrastructure — Performance Monitoring

**Version**: 1.0.0
**TUP**: M36 — Operational Infrastructure
**Cluster**: BCL-6 Operations & Infra
**Author**: Claude (TWP-001 v2.0.0 workshop)
**Date**: 2026-02-17
**Status**: Production
**Source Tabs**: 843 (operating_parameters), 842 (kpi_dashboard), 826 (weekly_review), 828 (monthly_review), 829 (quarterly_review)

---

## Overview

You cannot manage what you do not measure. But measurement without a cadence is just noise.

This document defines IonWave’s performance monitoring system: the specific instruments (KPIs and thresholds), the regular cadence for reviewing them, and the escalation triggers that turn a data point into an action. The system is designed for a solo founder running lean — minimum viable monitoring that catches problems before they compound.

**Current state (pre-launch)**: Phase 1 monitoring (manual, repo-based, Claude-reviewed). Phase 2 (automated triggers, API-connected dashboard) is blocked on DEC-2026-02-17-003 (monitoring system architecture decision).

[Confidence: B | Source: Danilo’s operating_parameters tabs 843, 842 | Date: 2026-02-17]

---

## 1. Operating Parameters (The Instruments)

Operating parameters are the gauges on the cockpit. They tell you if the business is inside normal operating range or trending toward a problem. IonWave has five primary parameters at launch.

### 1.1 CAC — Customer Acquisition Cost

**Target**: <0 per customer
**Current Grade**: B (pre-launch estimate — not yet validated by actual spend)
**Owner**: Danilo
**Review Cadence**: Weekly

**Why 0?** Backward-engineered from LTV. If IonWave targets 20+ LTV per customer (average order ~0, 2+ purchases over 12 months) and minimum margin is 60%, then sustainable CAC ceiling is 0. Above 0 and the unit economics break at current margins.

**How to calculate**: Total ad spend in period ÷ total new customers in period. Use 7-day attribution window as primary (platform attribution is unreliable; use MER as secondary check).

**Thresholds:**
| CAC Range | Status | Action |
|-----------|--------|--------|
| <5 | GREEN | Scale ad spend |
| 5-0 | YELLOW | Monitor weekly; hold current spend |
| 0-5 | ORANGE | Pause scaling; diagnose funnel |
| >5 | RED | Pause new ad spend; immediate review |

[Confidence: B | Source: tab 843 operating_parameters, M3 financial model | Date: 2026-02-17]

### 1.2 ROAS — Return on Ad Spend

**Target**: >2.0x
**Current Grade**: B (pre-launch estimate)
**Owner**: Danilo
**Review Cadence**: Daily (trend), Weekly (action threshold)

**Why 2.0x?** At 60% gross margin, 2.0x ROAS generates a positive contribution margin after ad spend. Below 2.0x, IonWave is losing money on paid acquisition at the contribution level. Note: ROAS is a vanity metric if margins are unknown — MER (Marketing Efficiency Ratio) is more reliable at scale.

**MER vs ROAS**: ROAS is platform-reported (subject to attribution errors). MER = Total Revenue / Total Ad Spend (all channels). Use MER as the business-level truth; ROAS for creative-level optimization.

**Thresholds:**
| ROAS | Status | Action |
|------|--------|--------|
| >3.0x | GREEN | Scale aggressively |
| 2.0-3.0x | YELLOW | Optimize; maintain spend |
| 1.5-2.0x | ORANGE | Pause scaling; creative review |
| <1.5x | RED | Pause ad spend; immediate diagnosis |

[Confidence: B | Source: tab 843 operating_parameters, M30 analytics | Date: 2026-02-17]

### 1.3 Safety Stock — Inventory Buffer

**Target**: 14 days of inventory buffer at all times
**Current Grade**: B (pre-launch policy, not yet in operation)
**Owner**: Danilo
**Review Cadence**: Weekly (inventory count)

**Why 14 days?** Supplier lead time is typically 10-21 days from order to receipt. A 14-day buffer means you can reorder the moment stock drops below threshold and still have product when the shipment arrives. Zero buffer = stockout risk on any supplier delay.

**How to calculate**: Current units on hand ÷ average daily units sold (use 7-day rolling average post-launch).

**Thresholds:**
| Days on Hand | Status | Action |
|-------------|--------|--------|
| >28 days | GREEN | Normal operations |
| 14-28 days | YELLOW | Place reorder; monitor |
| 7-14 days | ORANGE | Expedite reorder; consider reducing ad spend |
| <7 days | RED | Pause ads; emergency supplier contact |

[Confidence: B | Source: tab 843 operating_parameters, M24 fulfillment | Date: 2026-02-17]

### 1.4 Support SLA — First Response Time

**Target**: <4 hours first response during business hours (9am-6pm local time)
**Current Grade**: B (pre-launch policy)
**Owner**: Danilo
**Review Cadence**: Weekly (average response time audit)

**Why 4 hours?** Supplement customers with questions or complaints escalate quickly. A 4-hour window is fast enough to prevent chargebacks and social complaints while being achievable for a solo operator. Goal is acknowledgment within 4 hours; resolution can take longer.

**Measurement**: Export Gorgias/support platform weekly; calculate median and 90th percentile first response time.

**Thresholds:**
| First Response | Status | Action |
|----------------|--------|--------|
| <2 hours | GREEN | Excellent |
| 2-4 hours | YELLOW | Acceptable; maintain |
| 4-8 hours | ORANGE | Review workload; consider templates |
| >8 hours | RED | Support crisis; triage immediately |

[Confidence: B | Source: tab 843 operating_parameters, industry best practice | Date: 2026-02-17]

### 1.5 Ad Test Budget — Cost per New Creative

**Target**: 00 per new ad creative before scaling decision
**Current Grade**: B (pre-launch policy)
**Owner**: Danilo
**Review Cadence**: Per creative launch (not a cadence — a gate)

**Why 00?** At 0 target CAC, 00 spend should generate 2-3 conversions if a creative is performing. Not statistically significant, but enough to identify total failures quickly. Scale only creatives that clear 00 without zero conversions and show ROAS >1.5x in initial test.

**The Creative Testing Protocol:**
1. New creative enters test at 00 budget over 3-5 days
2. If zero conversions at 00: Kill it. Do not spend more hoping it turns around.
3. If ROAS >1.5x at 00: Promote to 00/day test for 7 days
4. If ROAS >2.0x at 00/day: Scale to full budget allocation
5. Creative fatigue: Monitor CTR weekly; replace any creative with >20% CTR decline

[Confidence: B | Source: tab 843 operating_parameters | Date: 2026-02-17]

---

## 2. Review Cadence

A cadence is a forcing function. Without it, you review only when there is a crisis — which means you discover problems too late.

### 2.1 Daily Review (Ad Metrics Only)

**Who**: Danilo
**When**: Each morning, first 15 minutes
**Time commitment**: 15 minutes
**Platform**: Meta Ads Manager + Google Ads dashboard (or Northbeam/TripleWhale if implemented)

**What to check:**
1. ROAS yesterday (by campaign and account total)
2. Spend yesterday (pacing on daily budget?)
3. Any policy flags or account warnings
4. Any new creative test results (if test launched in last 48 hours)

**Decision rule**: Daily review is observe-only unless a RED threshold is hit. Only three actions allowed from daily review:
- Kill an ad creative showing zero conversions after 00 spend
- Pause ad spend if account suspension notice appears
- Flag an anomaly for investigation in the weekly review

[Confidence: B | Source: tab 826 weekly_review, D2C standard practice | Date: 2026-02-17]

### 2.2 Weekly Review (Financials + Operations)

**Who**: Danilo
**When**: Every Friday, 1-2 hours
**Time commitment**: 60-90 minutes
**Output**: Brief written update to M36 ops log (5 bullet points)

**Agenda (in order):**
1. **Cash position** (10 min): Update 13-week cash flow model. Current runway in days. Flag if <90 days.
2. **Ad performance** (20 min): Week-over-week ROAS, CAC, CTR by creative. Kill underperformers. Flag ready-to-scale creatives.
3. **Inventory** (10 min): Units on hand vs. weekly velocity. Days of stock remaining. Reorder needed?
4. **Customer support** (10 min): Tickets closed, average response time, recurring complaint themes.
5. **Anomalies from daily review** (10 min): Any flagged items to investigate and resolve.
6. **Next week plan** (10 min): Creative tests launching, campaigns to adjust, reorders to place.

[Confidence: B | Source: tab 826 weekly_review | Date: 2026-02-17]

### 2.3 Monthly Review (Full KPI Dashboard)

**Who**: Danilo + Studio 3 (if active)
**When**: First Monday of each month
**Time commitment**: 2-3 hours
**Output**: Monthly KPI summary document (stored in data/m36/monthly_reviews/)

**Agenda:**
1. **Revenue summary** (20 min): Total revenue, MRR (if subscription), AOV trend, new vs. returning revenue split
2. **Unit economics** (20 min): CAC by channel, LTV trend, payback period (months to recover CAC), contribution margin
3. **Operating parameters scorecard** (20 min): Rate each of the 5 parameters GREEN/YELLOW/ORANGE/RED vs. previous month
4. **Risk register review** (20 min): Any risks elevated? Any new risks emerging? Update mitigation status.
5. **Capabilities assessment** (20 min): Score each of the 11 capability domains (1-4 maturity). Are we progressing?
6. **Studio 3 dialogue** (30 min): If Studio 3 active: debrief on decisions made, get perspective on upcoming decisions

**Key Monthly KPIs to Track:**
| KPI | Target | Actual | Status |
|-----|--------|--------|--------|
| Monthly Revenue | (set by M3 model) | TBD | TBD |
| CAC | <0 | TBD | TBD |
| ROAS | >2.0x | TBD | TBD |
| Gross Margin | >60% | TBD | TBD |
| Safety Stock | >14 days | TBD | TBD |
| Support SLA | <4hr | TBD | TBD |
| Churn (subscription) | <5%/month | TBD | TBD |
| NPS | >40 | TBD | TBD |

[Confidence: B | Source: tab 828 monthly_review, M30 analytics | Date: 2026-02-17]

### 2.4 Quarterly Review (Strategic)

**Who**: Danilo + Studio 3 (required)
**When**: End of Q1, Q2, Q3, Q4
**Time commitment**: Half day (4 hours)
**Output**: Quarterly strategic memo (1-2 pages, stored in data/m36/quarterly_reviews/)

**Agenda:**
1. **Hypothesis validation review** (45 min): For each live hypothesis in the registry, update status. Any confirmed? Any invalidated? Any needing more data?
2. **Capability maturity assessment** (30 min): Full 11-domain scoring. Are we hitting M6 targets (2-3 across all)? Roadblocks?
3. **Risk register refresh** (30 min): Re-score all risks with updated data. Add any new risks. Archive resolved risks.
4. **Decision TBDs review** (30 min): Which decisions can now be made? Which need more time? Owner and timeline for each.
5. **Strategic direction** (60 min): Are we on track for the thesis? What would we change? Adjust plan for next quarter.
6. **Cascade to operations** (45 min): Translate strategic decisions into operational changes for Q+1.

[Confidence: B | Source: tab 829 quarterly_review | Date: 2026-02-17]

---

## 3. Red Flags and Escalation

Not all alerts require the same response. IonWave uses a three-tier escalation model: **Monitor**, **Investigate**, **Escalate**.

### 3.1 Immediate Action (Escalate — Stop What You Are Doing)

These triggers require same-day action. Do not wait for a scheduled review.

| Trigger | Threshold | Action |
|---------|-----------|--------|
| ROAS collapses | <1.0x for 48 hours | Pause all ad spend; diagnose before resuming |
| Cash runway | <30 days | Cash crisis protocol R003-P |
| Ad account suspension | Any platform notice | Ad account banned protocol R002-P |
| Serious customer complaint | Illness/injury/adverse reaction | Product defect protocol R004-P |
| Inventory stockout | 0 units on hand | Supplier emergency + pause ads |
| Legal notice | Any demand letter/FDA/FTC | Legal protocol R006-P |

[Confidence: B | Source: synthesized from risk register + operating parameters | Date: 2026-02-17]

### 3.2 Weekly Investigation (Investigate — Next Review)

These patterns should be flagged at daily review and investigated at the weekly review.

| Pattern | Threshold | Investigation Focus |
|---------|-----------|--------------------|
| ROAS declining | >15% week-over-week drop | Creative fatigue vs. audience saturation vs. seasonality |
| CAC rising | >0 for 2 consecutive weeks | Funnel analysis: landing page, offer, creative, audience |
| CTR dropping | >20% week-over-week drop | Creative fatigue; refresh creative test queue |
| Support volume spike | >150% of weekly average | Diagnose root cause: product issue, fulfillment delay, or billing |
| Churn spike | >2x previous month | Customer exit survey; product or expectation issue |
| Inventory below 14 days | Safety stock threshold | Trigger reorder; assess if ads need to slow |

[Confidence: B | Source: M30 analytics, M24 fulfillment, operating_parameters | Date: 2026-02-17]

### 3.3 Monthly Watch (Monitor — Trend Only)

These are not crises but indicate a trajectory that needs attention over 30-60 days.

| Pattern | What It May Signal | Review |
|---------|-------------------|--------|
| LTV declining quarter-over-quarter | Product quality, competition, or market saturation | Quarterly strategic review |
| NPS below 40 | Product or experience gap vs. expectation | Monthly review + customer research |
| Gross margin compressing | Input cost increase or discount overuse | Monthly financial review |
| Repeat purchase rate declining | Retention problem; subscription cancel analysis | Monthly cohort review |
| Capability stagnation | No maturity improvement in 2+ months | Quarterly capability assessment |

[Confidence: B | Source: M30 analytics, M25 financial ops | Date: 2026-02-17]

### 3.4 Studio 3 Escalation Triggers

The following events require proactive notification to Studio 3 (not just for the monthly check-in):

- Any CRITICAL risk event triggers (R001 at score 15)
- Cash runway drops below 60 days
- ROAS below 1.5x for 2+ consecutive weeks
- Any legal notice or regulatory inquiry
- Decision TBDs that have become urgent (needed to unblock operations)
- Any hypothesis reaches INVALIDATED status (changes the strategic direction)

[Confidence: B | Source: Studio 3 operating model | Date: 2026-02-17]

---

## 4. The Monitoring Stack

IonWave’s monitoring system is built in two phases. Phase 1 is operational now. Phase 2 is pending a decision.

### 4.1 Phase 1: Repo-Based, Claude-Reviewed (Current)

**Status**: Active

Phase 1 uses manual data entry + Claude session reviews. It is low-cost, immediately implementable, and sufficient for pre-launch through the first 6 months of operations.

**How it works:**
1. Danilo updates key metrics weekly in a structured Markdown file (data/m36/kpi_log.md)
2. At each Studio 3 session, Claude ingests the KPI log and produces: GREEN/YELLOW/ORANGE/RED status for each operating parameter, flagged anomalies, and recommended actions for next week
3. Monthly review: Claude produces a structured monthly memo from the 4-week KPI log

**Weekly KPI log structure (plain text, no special characters):**
Week of YYYY-MM-DD | Revenue: ,XXX | Ad Spend: ,XXX | MER: X.Xx | ROAS: X.Xx | New customers: XX | CAC:  | Inventory days on hand: XX | Support avg first response hours: XX | Cash runway: XX days | Notes: [anomalies]

**Limitations of Phase 1:**
- No automated alerts: Danilo must notice and log before Claude can flag
- No real-time data: Weekly cadence means problems can compound for 7 days before being caught
- Manual labor: approximately 30 minutes per week of data gathering

[Confidence: A | Source: existing Studio 3 session protocol | Date: 2026-02-17]

### 4.2 Phase 2: Automated Triggers (Pending DEC-2026-02-17-003)

**Status**: DECISION TBD — blocked on DEC-2026-02-17-003 (monitoring system architecture)

Phase 2 automates the data gathering and adds real-time threshold alerts.

**What Phase 2 would enable:**
- Shopify webhook → automatic revenue/order logging
- Meta/Google API → automatic daily ROAS/spend pull
- Threshold alerts: When ROAS drops below 1.5x, automated Slack/email notification fires
- Weekly auto-generated KPI summary (no manual logging required)
- Monthly dashboard auto-populated from live data

**Architecture options (pending DEC-2026-02-17-003):**
1. **GitHub Actions + Claude API**: Scheduled workflow pulls data, passes to Claude, posts summary to repo. Cost: approx /usr/bin/bash/month infrastructure + Claude API usage.
2. **Apps Script + Sheets + Claude API**: Google Sheets as data layer, Apps Script for automation, Claude for analysis. Cost: free infrastructure + Claude API.
3. **Commercial MMA tool (Northbeam/TripleWhale)**: 00-500/month. Provides cross-channel attribution automatically. Overkill for pre-launch but worth considering at >K/day ad spend.

**Blocker**: Phase 2 requires an Anthropic API key provisioned for the IonWave environment. This is the open decision.

**Recommendation**: Implement Phase 1 on Day 1. Revisit Phase 2 architecture at the M3 ops review (90 days post-launch) when ad spend and data volume justify the setup cost.

[Confidence: B | Source: M30 analytics, monitoring system research | Date: 2026-02-17]

---

## 5. KPI Dashboard Structure

This is the canonical structure for IonWave’s monthly KPI review. Fill it in from the weekly KPI logs.

### 5.1 Top-Line Health

| Metric | M-2 | M-1 | This Month | Target | Status |
|--------|-----|-----|------------|--------|--------|
| Revenue | — | — | | M3 model | TBD |
| MER | — | — | | >2.5x | TBD |
| Gross Margin | — | — | | >60% | TBD |
| New Customers | — | — | | M3 model | TBD |

### 5.2 Acquisition

| Metric | M-2 | M-1 | This Month | Target | Status |
|--------|-----|-----|------------|--------|--------|
| CAC (blended) | — | — | | <0 | TBD |
| ROAS (Meta) | — | — | | >2.0x | TBD |
| ROAS (Google) | — | — | | >2.0x | TBD |
| Ad Spend | — | — | | M3 model | TBD |

### 5.3 Retention

| Metric | M-2 | M-1 | This Month | Target | Status |
|--------|-----|-----|------------|--------|--------|
| Subscription Churn | — | — | | <5%/mo | TBD |
| Repeat Purchase Rate | — | — | | >30% at M3 | TBD |
| NPS | — | — | | >40 | TBD |
| LTV (12-month) | — | — | | >20 | TBD |

### 5.4 Operations

| Metric | M-2 | M-1 | This Month | Target | Status |
|--------|-----|-----|------------|--------|--------|
| Inventory Days on Hand | — | — | | >14 days | TBD |
| Support First Response | — | — | | <4 hours | TBD |
| Cash Runway | — | — | | >90 days | TBD |
| Orders Fulfilled On-Time | — | — | | >98% | TBD |

[Confidence: B | Source: tabs 842 kpi_dashboard, 843 operating_parameters | Date: 2026-02-17]

---

## 6. Capabilities Maturity Dashboard

Track operational readiness across 11 domains using the 1-4 maturity scale (from operational_system.md).

**Scoring**: 1=Initial/Ad hoc, 2=Documented/Repeatable, 3=Managed/Measured, 4=Optimized/Automated

| Domain | Current (Pre-Launch) | Target M6 | Target M18 | Owner |
|--------|---------------------|-----------|------------|-------|
| Paid Ads | 1 | 2-3 | 3-4 | Danilo |
| Creative Production | 1 | 2-3 | 3-4 | Danilo / CM |
| Landing Pages | 1 | 2-3 | 3-4 | Danilo |
| Email/SMS | 1 | 2-3 | 3-4 | Danilo / CM |
| Product Development | 1 | 2 | 3 | Danilo |
| Supply Chain | 1 | 2-3 | 3-4 | Danilo |
| Customer Support | 1 | 2 | 3 | Danilo / CM |
| Analytics | 1 | 2-3 | 3-4 | Danilo |
| Financial Management | 1 | 2-3 | 3-4 | Danilo |
| HR / Hiring | 1 | 2 | 3 | Danilo |
| Legal / Compliance | 1 | 2 | 2-3 | Danilo + Legal |

**Note**: M6 and M18 targets are informed estimates based on typical D2C brand trajectories. Not validated against IonWave-specific data. Review and adjust at each quarterly strategic review.

[Confidence: C | Source: tab 832 capabilities, D2C benchmark comparison | Date: 2026-02-17]

---

*This document feeds into: M30 (analytics system), M25 (financial ops), M9 (ecommerce — tech stack for monitoring), M3 (financial model — targets)*
