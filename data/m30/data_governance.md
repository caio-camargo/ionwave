# M30 Data Governance
**TUP**: M30 Analytics & Dashboards
**Source Tabs**: 634 (Data Freshness Requirements), 635 (Screenshot Evidence Log)
**Version**: 1.0.0
**Quality**: 7.0/10
**Status**: Workshop Draft
**Confidence Baseline**: B-C (cadence recommendations based on D2C operational requirements)

---

## Purpose
Define data quality standards: how fresh data must be, how evidence is captured, and how data quality is maintained. Without governance, dashboards rot — numbers get stale, definitions drift, and decisions get made on bad data.

---

## 1. Data Freshness Requirements

Every piece of data in the IonWave model has a required update cadence. Stale data is worse than no data — it creates false confidence.

### Tier 1: Real-Time (Update as Events Happen)

| Data Type | Source | Why Real-Time | Owner |
|-----------|--------|--------------|-------|
| Decision Log | Manual | Decisions lose context if not logged immediately | Founder |
| Risk Register (new risks) | Manual | New risks need immediate visibility | Founder |
| Ad account status changes | Meta Ads | Account restrictions require immediate response | Founder |
| Stockout alerts | 3PL | Can't sell what you don't have | Ops |

**Implementation**: These are event-driven, not scheduled. Set up notifications from source systems (email alerts from Meta, low-stock alerts from 3PL).

### Tier 2: Daily

| Data Type | Source | Implementation | Est. Time |
|-----------|--------|---------------|-----------|
| Revenue & Orders | Shopify | Shopify daily email summary + manual check | 2 min |
| Ad Spend & ROAS | Meta Ads Manager | Meta daily email + manual check | 2 min |
| Cash Balance | Bank account | Mobile banking app | 1 min |
| Support Tickets (new) | Helpdesk | Helpdesk dashboard | 3 min |
| Inventory status (during low stock) | 3PL | 3PL portal | 2 min |

**Total daily commitment**: ~10 minutes

### Tier 3: Weekly

| Data Type | Source | Implementation | Est. Time |
|-----------|--------|---------------|-----------|
| CAC (blended) | Calculated | Ad spend / new customers for the week | 5 min |
| CVR (site) | Shopify + GA4 | Orders / sessions | 3 min |
| Subscription conversion rate | Subscription platform | New subs / new customers | 3 min |
| MER | Calculated | Total revenue / total marketing spend | 3 min |
| Email performance | Klaviyo | Open rates, click rates, email revenue | 10 min |
| Inventory days | 3PL + Shopify | Current stock / avg daily sales | 5 min |
| Creative performance | Meta Ads | CTR, hook rate, hold rate by creative | 10 min |
| Competitor monitoring | Manual / SEMrush | Price checks, new product launches, ad activity | 15 min |

**Total weekly commitment**: ~60 minutes (one Monday session)

### Tier 4: Monthly

| Data Type | Source | Implementation | Est. Time |
|-----------|--------|---------------|-----------|
| Full P&L | Accounting (QBO/Xero) | Revenue, COGS, gross margin, opex, net | 1 hr |
| Cohort retention analysis | Subscription platform | Month-N retention for each cohort | 30 min |
| Unit economics validation | Calculated | COGS, contribution margin, LTV actuals vs projections | 30 min |
| Cash flow forecast (13-week) | Spreadsheet (M25) | Update with actuals, re-project | 30 min |
| Churn analysis | Subscription platform | Rate, reasons, voluntary vs involuntary | 20 min |
| NPS / CSAT | Survey tool | Net Promoter Score, satisfaction trends | 15 min |
| Red Flag Dashboard scan | M30 | Check all 12 kill criteria against current data | 15 min |
| Cross-TUP validation spot check | M30 | Check 3-5 validation rules | 15 min |
| Hypothesis status review | Hypothesis registry | Any grades to update? Any near validation? | 15 min |

**Total monthly commitment**: ~4 hours (one afternoon)

### Tier 5: Quarterly

| Data Type | Source | Implementation | Est. Time |
|-----------|--------|---------------|-----------|
| Competitive landscape refresh | M26, web research | Has anything changed? New competitors? | 2 hrs |
| ICP validation | M27, customer data | Are we selling to who we expected? | 1 hr |
| Pricing review | M10, market data | Should price/offer change? | 1 hr |
| Channel mix review | M28, analytics | Rebalance channel allocation? | 1 hr |
| Full cross-TUP validation | M30 | All 10 rules checked | 1 hr |
| Hypothesis formal review | Hypothesis registry | Upgrade/downgrade confidence grades | 1 hr |

**Total quarterly commitment**: ~7 hours (one full day per quarter)

### Tier 6: Static (Update Only When Fundamentals Change)

| Data Type | Trigger for Update |
|-----------|-------------------|
| Core metric definitions (Data Dictionary) | When a metric formula changes |
| Kill criteria thresholds | When hypothesis is validated or invalidated |
| Business model parameters (price, COGS structure) | When pricing or supplier changes |
| ICP definition | After quarterly review if significant shift |
| Dashboard architecture | When new channels or tools are added |

[Confidence: B | Source: D2C operational cadence best practices, IonWave capacity constraints (solo founder), M25 financial ops rhythm | Verified: 2026-02-08]

---

## 2. Data Quality Standards

### The 5 Data Quality Rules

| Rule | Definition | Example Violation | Fix |
|------|-----------|-------------------|-----|
| **Accurate** | Number reflects reality | ROAS says 5x but real ROAS is 2.5x (platform over-attribution) | Use MER as primary, ROAS as secondary |
| **Complete** | No missing data points | Revenue tracked but COGS not updated → can't calculate margin | Block: no revenue reporting without COGS |
| **Consistent** | Same metric = same definition everywhere | "Churn" means cancellation in one tab, non-renewal in another | Single definition in Data Dictionary |
| **Timely** | Data arrives within its freshness window | Monthly P&L not done until 3 weeks into next month | Set calendar reminder, block 1st-week time |
| **Relevant** | Only track what drives decisions | Tracking 50 metrics when only 10 matter at current stage | Phase-gate metrics. Phase 1 = 15 metrics max. |

### Metric Staleness Indicators

| Staleness Level | Definition | Action |
|-----------------|-----------|--------|
| **Fresh** | Updated within its cadence window | No action needed |
| **Aging** | 1-2x overdue from cadence | Update priority — add to this week's task list |
| **Stale** | >2x overdue | Metric is unreliable. Mark as STALE in dashboard. Do not use for decisions until refreshed. |
| **Dead** | >4x overdue or source broken | Remove from dashboard. Either fix source or deprecate metric. |

**Example**: Weekly metric (CAC) not updated for 3 weeks = STALE. Must be refreshed before any ad spend decisions.

---

## 3. Evidence & Documentation Protocol

### Screenshot Evidence Log

Every significant milestone needs proof-of-work documentation. This builds the audit trail for investors, advisors, and future team members.

| Category | What to Capture | When | Where to Store |
|----------|----------------|------|---------------|
| **Ad launches** | Ads Manager showing campaign live | At launch | Google Drive → Evidence → Ads |
| **Email flows** | Flow builder showing active flow + test send | At activation | Google Drive → Evidence → Email |
| **Tracking verification** | Pixel/conversion events firing correctly | At setup + monthly | Google Drive → Evidence → Tracking |
| **Milestone achievements** | Dashboard showing metric achieved (e.g., first 100 orders) | When achieved | Google Drive → Evidence → Milestones |
| **Kill criteria triggered** | Dashboard showing metric in RED zone | When triggered | Google Drive → Evidence → Red Flags |
| **A/B test results** | Platform showing test results with statistical significance | At test completion | Google Drive → Evidence → Tests |
| **Financial milestones** | Bank/Stripe showing revenue thresholds | When crossed | Google Drive → Evidence → Financial |

### Evidence Log Template

| Date | Category | Description | Screenshot Link | Verified By | Notes |
|------|----------|-------------|-----------------|-------------|-------|
| [Date] | Ad Launch | Hook Test Ad #1 live in Meta Ads Manager | [Drive link] | [Name] | First paid ad launched |
| [Date] | Email Flow | Welcome flow triggered on test order | [Drive link] | [Name] | 5-email sequence active |
| [Date] | Tracking | Pixel firing on purchase event | [Drive link] | [Name] | Server-side + browser pixel confirmed |

### Evidence Quality Requirements

1. **Screenshots must include timestamps** — browser clock or platform timestamp visible
2. **Metric screenshots must show context** — not just a number, show the dashboard/report it came from
3. **Comparative screenshots** — for improvements, show before and after
4. **No editing** — screenshots must be unmodified. Use highlighting/annotations only.
5. **Naming convention**: `YYYY-MM-DD_Category_Description.png` (e.g., `2026-03-15_Ad_Hook-Test-1-Launch.png`)

---

## 4. Data Source Hierarchy

When two data sources disagree, which one wins?

| Rank | Source Type | Example | Trust Level | Known Limitations (Dialogue Upgrade U7) |
|------|-----------|---------|-------------|----------------------------------------|
| 1 | **Bank account / Stripe** | Actual cash received | Ground truth | Timing delays (pending transactions), refunds may not show same day |
| 2 | **Shopify orders** | Order count, revenue | Primary — source of truth for revenue | Doesn't account for returns until processed. Subscription revenue may lag. |
| 3 | **Subscription platform** | Subscription status, churn | Primary — source of truth for subscriptions | Paused vs cancelled distinction varies by platform. Define clearly. |
| 4 | **3PL system** | Inventory levels, shipments | Primary — source of truth for operations | Data may lag 24-48 hrs. Cycle count discrepancies common (2-5%). |
| 5 | **Post-purchase survey** | Attribution ("how did you hear about us?") | Strong signal — direct customer report | Response bias (customers forget, attribute to last touchpoint). 30-50% response rate typical. |
| 6 | **GA4 / server-side tracking** | Sessions, conversions, attribution | Good for funnel behavior | Under-reports by 10-25% due to ad blockers, consent mode, cross-device gaps. Not reliable for absolute conversion counts. |
| 7 | **Meta Ads Manager** | ROAS, conversions, attribution | Platform context only (U2) | Over-reports by 20-40% post-iOS 14.5. Use ONLY for comparing creatives/campaigns within Meta. Never for business decisions. |
| 8 | **Third-party tools** (Triple Whale, etc.) | Blended metrics, modeled attribution | Good for trends, not ground truth | Models vary. Different tools give different numbers. Compare to Stripe/Shopify actuals quarterly. |

**Rule**: When Stripe says you made $10K and Meta says you made $15K from ads, believe Stripe. Meta is inflating.

[Confidence: B | Source: iOS 14.5 attribution research, D2C analytics community consensus, Meta's own reporting caveats | Verified: 2026-02-08]

---

## 5. Data Governance Calendar

A unified calendar of all data activities:

| Timeframe | Activity | Time Required | Owner |
|-----------|---------|---------------|-------|
| **Every morning** | Daily Pulse check (revenue, spend, cash, fires) | 10 min | Founder |
| **Every Monday** | Weekly report compilation + metric refresh | 1 hr | Founder |
| **1st of each month** | Monthly Business Review preparation | 4 hrs | Founder |
| **1st of each month** | Cross-TUP validation spot check (3-5 rules) | 15 min | Founder |
| **1st of each month** | Red Flag Dashboard full scan | 15 min | Founder |
| **End of Q** | Quarterly Deep Review | Half-day | Founder + Advisors |
| **End of Q** | Full cross-TUP validation audit | 1 hr | Founder |
| **End of Q** | Hypothesis confidence grade review | 1 hr | Founder |
| **Ad hoc** | Metric definition updates (Data Dictionary) | 15 min | Whoever changes it |
| **Ad hoc** | Evidence logging (screenshots, milestones) | 5 min per event | Whoever achieves it |

### Graceful Degradation — When You Can't Do Everything (Dialogue Upgrade U11)

Founders will skip weeks. Life happens. The system needs to degrade gracefully, not collapse.

| If You Can Only Do... | Do This | Skip This |
|----------------------|---------|-----------|
| **1 thing** | Daily Pulse (5 min — revenue, cash, fires) | Everything else |
| **2 things** | Daily Pulse + Weekly MVD refresh (CAC, Sub Rate, MER) | Monthly MBR, evidence logging |
| **3 things** | Daily + Weekly + Monthly simplified MBR (4 questions, 1 hr) | Quarterly review, cross-TUP validation |
| **Everything** | Full governance calendar as documented | — |

**Minimum Viable Governance**: The Daily Pulse is NON-NEGOTIABLE. If you're not checking revenue, cash, and fires every morning, you're flying blind. Everything else can be recovered from. Missing the Daily Pulse for a week means you could miss a cash crisis.

**Recovery Protocol**: If you've skipped 2+ weeks of weekly reporting:
1. Don't try to backfill — just do THIS week's numbers
2. Compare to the last week you did track (even if it was 3 weeks ago)
3. Note the gap in your evidence log
4. Resume normal cadence

**Total ongoing time commitment**:
- Daily: 10 min (NON-NEGOTIABLE)
- Weekly: 1 hr (included in above)
- Monthly: ~5 hrs
- Quarterly: ~8 hrs

[Confidence: C | Source: Estimated time commitments — will need calibration with real experience | Verified: 2026-02-08]

---

## 6. IonWave-Specific Data Quality Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **Meta over-attribution** | HIGH | Overestimates ROAS → overspend on ads | Always cross-check with MER. Post-purchase survey for true attribution. |
| **Subscription churn miscounting** | MEDIUM | Under/overcount if pauses vs cancellations mixed | Define precisely: churn = cancelled. Paused = separate metric. |
| **Cohort LTV calculation drift** | MEDIUM | Early cohorts may not represent steady-state behavior | Don't extrapolate LTV from <3 months of data. Use monthly cohort snapshots. |
| **Cash runway over-optimism** | HIGH | Projecting revenue growth into runway extends it artificially | Calculate runway on CURRENT burn rate only, not projected improvement. |
| **Vanity metrics distraction** | MEDIUM | Tracking followers/pageviews instead of revenue/LTV | Phase-gate metrics. Vanity metrics only enter at Phase 3+. |
| **Inventory data lag** | MEDIUM | 3PL data delayed → stockout surprise | Set reorder point at 2x lead time, not 1x. Buffer for data lag. |

---

## 7. Intelligence Gaps

| Gap | Impact | Upgrade Path | Priority |
|-----|--------|-------------|----------|
| G1: Evidence logging process untested | May be too heavy or too light for solo founder | Test at launch, simplify if needed. Minimum: milestone screenshots only. | MEDIUM |
| G2: Data governance calendar is aspirational | Solo founder may not sustain all cadences | Start with daily + weekly only. Add monthly at Month 2. Quarterly at Month 3. | HIGH |
| G3: No data backup/archival strategy | Data loss risk if tool accounts closed | Monthly export of key data to Google Drive. Don't rely solely on SaaS tools. | MEDIUM |
| G4: Freshness requirements reference many TUPs not yet workshopped | Some source systems don't exist yet | Update freshness requirements as TUPs are activated | LOW |
