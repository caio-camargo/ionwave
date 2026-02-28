# M30 Data Dictionary
**TUP**: M30 Analytics & Dashboards
**Source Tabs**: 627 (Data Dictionary)
**Version**: 1.0.0
**Quality**: 7.5/10
**Status**: Workshop Draft
**Confidence Baseline**: B-C (industry-standard definitions applied to IonWave context)

---

## Purpose
Single source of truth for every metric IonWave tracks. Every metric has a precise definition, formula, data source, and update cadence so that two people looking at the same number always agree on what it means.

**Rule**: If a metric appears in any dashboard, report, or decision framework, it MUST have an entry here. No orphan metrics.

---

## 1. Revenue & Growth Metrics

| Metric | Definition | Formula | Source | Cadence | Notes |
|--------|-----------|---------|--------|---------|-------|
| **Revenue** | Total gross revenue before refunds/returns | Sum of all order values | Shopify | Daily | Includes one-time + subscription |
| **Net Revenue** | Revenue minus refunds, returns, chargebacks | Revenue - Refunds - Returns - Chargebacks | Shopify | Daily | This is the number that matters |
| **MRR** | Monthly Recurring Revenue from active subscriptions | Sum of all active subscription values | Subscription platform (Recharge/Loop) | Daily | Excludes one-time purchases |
| **ARR** | Annualized Recurring Revenue | MRR x 12 | Calculated | Monthly | Projection, not actuals |
| **MoM Growth** | Month-over-month revenue growth rate | (This Month Revenue - Last Month Revenue) / Last Month Revenue | Calculated | Monthly | Use net revenue |
| **AOV** | Average Order Value | Net Revenue / Total Orders | Shopify | Daily | Track separately for one-time vs subscription |
| **Revenue per Customer** | Average revenue generated per unique customer | Net Revenue / Unique Customers | Shopify | Monthly | Different from AOV (one customer can have multiple orders) |
| **Subscription Revenue %** | Share of revenue from subscriptions vs one-time | Subscription Revenue / Total Net Revenue | Calculated | Weekly | Target: >50%. Below 30% = YELLOW (see HYP-002 sensitivity) |

[Confidence: B | Source: Shopify standard definitions + IonWave model parameters | Verified: 2026-02-08]

---

## 2. Acquisition Metrics

| Metric | Definition | Formula | Source | Cadence | Notes |
|--------|-----------|---------|--------|---------|-------|
| **CAC** | Cost to Acquire a Customer | Total Marketing Spend / New Customers Acquired | Meta Ads + Shopify | Weekly | Use blended CAC (all channels) AND per-channel CAC. See HYP-001. |
| **Blended CAC** | CAC across all channels including organic | Total Marketing Spend / All New Customers (paid + organic) | All platforms | Weekly | Always lower than paid CAC. Track both. |
| **MER** | Marketing Efficiency Ratio — PRIMARY efficiency metric (Dialogue Upgrade U2) | Total Revenue / Total Marketing Spend | Calculated | Weekly | **Use this, not ROAS, for business decisions.** Includes organic revenue. Honest measure of total marketing efficiency. Target: >3x. Kill: <1.5x. |
| **ROAS** | Return on Ad Spend — SECONDARY, platform context only (U2) | Revenue attributed to ads / Ad Spend | Meta Ads Manager | Daily (during active spend) | Platform-reported ROAS overstates by 20-40% post-iOS 14.5. Use ONLY for comparing creatives/campaigns within Meta. Never use for business-level decisions. |
| **CPC** | Cost per Click | Ad Spend / Clicks | Meta Ads | Daily | Monitor for CPM inflation trends |
| **CPM** | Cost per 1,000 Impressions | (Ad Spend / Impressions) x 1,000 | Meta Ads | Daily | Rising CPMs = category getting crowded or creative fatigue |
| **CTR** | Click-Through Rate | Clicks / Impressions | Meta Ads | Daily | Target: >1%. Below 0.5% = creative problem |
| **CVR** | Conversion Rate (site) | Orders / Sessions | Shopify + GA4 | Daily | Target: >2.5%. Below 1.5% = landing page problem |
| **CPA** | Cost per Acquisition (any action) | Spend / Desired Actions | Meta Ads | Daily | Can be cost per lead, per ATC, per purchase |
| **New Customers** | Count of first-time purchasers | Unique customers with first order in period | Shopify | Daily | Distinguish from returning customers |
| **Email Capture Rate** | % of visitors who provide email | Email signups / Unique visitors | Klaviyo + GA4 | Weekly | Target: 5-10% with pop-up |
| **Post-Purchase Survey Attribution** | Self-reported "how did you hear about us?" | Survey responses categorized by channel | Post-purchase survey tool (e.g., Fairing/Enquire Labs) | Weekly | **Awareness attribution** — tells you where they DISCOVERED you. See attribution model below. |

### Attribution Model — Awareness vs Conversion (Dialogue Upgrade U4)

Two types of attribution answer different questions:

| Type | Question Answered | Source | Use For |
|------|------------------|--------|---------|
| **Awareness Attribution** | "How did they find us?" | Post-purchase survey | Channel investment decisions (should we spend more on podcasts vs Instagram?) |
| **Conversion Attribution** | "What drove the click/purchase?" | UTM parameters / last-click | Campaign optimization (which ad drove this purchase?) |

**When they disagree** (e.g., survey says "podcast" but UTM says "Meta retargeting ad"): This is NOT a data error. It means the customer discovered IonWave through a podcast but converted through a Meta retargeting ad. That's multi-touch attribution — both channels contributed. Neither is wrong.

**Decision rule**: For channel INVESTMENT decisions (should we sponsor more podcasts?), weight awareness attribution (survey) at 60% and conversion attribution (UTM) at 40%. For campaign OPTIMIZATION decisions (which ad creative works best?), use conversion attribution (UTM) only.

[Confidence: B | Source: Meta Ads standard definitions, Shopify analytics, M28 attribution model (U2), post-iOS 14.5 attribution research | Verified: 2026-02-08]

---

## 3. Retention & Subscription Metrics

| Metric | Definition | Formula | Source | Cadence | Notes |
|--------|-----------|---------|--------|---------|-------|
| **Monthly Churn** | % of active subscribers who cancel in a month | Cancelled Subscriptions / Active Subscriptions at start of month | Subscription platform | Monthly | Target: <8%. Kill: >15% for 2 months. See HYP-003. |
| **Voluntary Churn** | Churn from active customer cancellation | Voluntary Cancellations / Active Subs | Subscription platform | Monthly | Track separately from involuntary |
| **Involuntary Churn** | Churn from failed payments | Failed Payment Cancellations / Active Subs | Subscription platform + Stripe | Monthly | Recoverable via dunning. Target: <2% |
| **Subscription Conversion Rate** | % of first-time buyers who subscribe (vs one-time) | New Subscribers / New Customers | Shopify + Subscription platform | Weekly | Target: >50%. Viable to 30%. Crisis at 10%. See HYP-002 + M28 U12. |
| **LTV** | Customer Lifetime Value | Average Revenue per Customer x Average Lifespan | Calculated | Monthly | Use cohort-based LTV, not blended. See HYP-005. |
| **LTV:CAC** | Ratio of lifetime value to acquisition cost | LTV / CAC | Calculated | Monthly | Target: >3x. Kill: <1.5x. See Red Flag Dashboard. |
| **Repeat Purchase Rate** | % of customers who buy 2+ times | Customers with 2+ orders / Total Customers | Shopify | Monthly | Target: >30% |
| **Time to Second Order** | Average days between first and second purchase | Avg(Order 2 Date - Order 1 Date) | Shopify | Monthly | Shorter = healthier. Target: <45 days |
| **Cohort Retention** | % of a cohort still active at Month N | Active in Month N / Original Cohort Size | Subscription platform | Monthly | Track Month 1, 3, 6, 12 cohorts |
| **NPS** | Net Promoter Score | % Promoters (9-10) - % Detractors (0-6) | Survey tool | Monthly | Target: >50. Below 20 = product/experience problem |
| **Email Revenue %** | Revenue attributed to email channel | Email-attributed Revenue / Total Revenue | Klaviyo | Weekly | Target: >25%. Healthy D2C brands get 30-40%. |

[Confidence: B | Source: Subscription industry standards, IonWave hypothesis registry (HYP-002, HYP-003, HYP-005) | Verified: 2026-02-08]

---

## 4. Operations Metrics

| Metric | Definition | Formula | Source | Cadence | Notes |
|--------|-----------|---------|--------|---------|-------|
| **Inventory Days** | Days of inventory on hand at current sell rate | Current Inventory Units / Avg Daily Units Sold | 3PL + Shopify | Weekly | Target: 30-45 days. <7 = stockout risk (Red Flag). |
| **Ship Time** | Average days from order to delivery | Avg(Delivery Date - Order Date) | 3PL / Shipping carrier | Daily | Target: <3 days for fulfillment, <5 days total |
| **Order Accuracy** | % of orders shipped correctly | Correct Orders / Total Orders | 3PL | Weekly | Target: >99.5% |
| **Support Tickets** | Volume of customer support inquiries | Count of tickets opened | Helpdesk (Gorgias/Zendesk) | Daily | Track per 100 orders for ratio |
| **First Response Time** | Time to first reply on support ticket | Avg time from ticket creation to first agent response | Helpdesk | Daily | Target: <4 hours business hours |
| **Resolution Time** | Time to resolve support ticket | Avg time from creation to closure | Helpdesk | Weekly | Target: <24 hours |
| **CSAT** | Customer Satisfaction Score | Positive ratings / Total ratings | Helpdesk | Weekly | Target: >4.5/5 |
| **Return Rate** | % of orders returned | Returns / Total Orders | Shopify + 3PL | Monthly | Target: <3% for supplements |
| **Chargeback Rate** | % of transactions disputed | Chargebacks / Total Transactions | Stripe / Payment processor | Monthly | Kill threshold: >0.75% (Visa/MC will flag). See M20. |
| **Supplier Lead Time** | Days from PO to receipt | Avg(Receipt Date - PO Date) | Supplier tracking | Monthly | Kill: >90 days. Warning: >60 days. |

[Confidence: B-C | Source: D2C/3PL industry benchmarks, M20 support metrics, M24 fulfillment parameters | Verified: 2026-02-08]

---

## 5. Financial Health Metrics

| Metric | Definition | Formula | Source | Cadence | Notes |
|--------|-----------|---------|--------|---------|-------|
| **Cash on Hand** | Available cash balance | Bank balance + liquid investments | Bank account | Daily | The most important number pre-profitability |
| **Runway** | Days of operations remaining at current burn | Cash on Hand / Daily Burn Rate | Calculated | Weekly | Warning: <60 days. Kill: <30 days. See HYP-008. |
| **Burn Rate** | Monthly cash consumption | Monthly Expenses - Monthly Revenue | Calculated | Monthly | Track net burn (revenue-adjusted) not gross burn |
| **Gross Margin** | Revenue minus COGS as % | (Revenue - COGS) / Revenue | Calculated | Monthly | Target: >65%. Kill: <50%. See HYP-004. |
| **Contribution Margin** | Gross margin minus variable costs (shipping, payment processing, ads) | (Revenue - COGS - Variable Costs) / Revenue | Calculated | Monthly | Kill: Negative for 30 days. Must be positive for unit economics to work. |
| **COGS per Unit** | Direct cost to produce one unit | (Raw materials + Manufacturing + Packaging) / Units | Supplier invoices | Monthly | Track closely — this drives gross margin. |
| **Working Capital** | Cash available for short-term operations | Current Assets - Current Liabilities | Accounting | Monthly | Negative = danger |
| **Break-Even Point** | Units/revenue needed to cover all costs | Fixed Costs / Contribution Margin per Unit | Calculated | Quarterly | Update whenever pricing or COGS changes |

[Confidence: B | Source: Standard accounting definitions, IonWave financial model, HYP-004/HYP-008 | Verified: 2026-02-08]

---

## 6. Channel-Specific Metrics (Multi-Channel Phase)

| Metric | Definition | Formula | Source | Cadence | Notes |
|--------|-----------|---------|--------|---------|-------|
| **Amazon Revenue** | Revenue from Amazon channel | Amazon Seller Central sales | Amazon Seller Central | Daily (when live) | Track net after fees. See M28 Amazon margin waterfall. |
| **Amazon Margin** | Net margin on Amazon after all fees | (Revenue - COGS - Referral Fee - FBA Fee - PPC) / Revenue | Calculated | Weekly | Target: >20%. IonWave estimate: 26%. |
| **Amazon BSR** | Best Seller Rank in primary category | BSR number | Amazon | Daily | Lower = better. Track trends not absolute. |
| **Amazon Review Count** | Total verified reviews | Count | Amazon | Weekly | Cold start target: 50 reviews in 60 days. |
| **B2B Revenue** | Revenue from wholesale/B2B channel | B2B orders and invoices | B2B order system | Monthly | Track per-account and total. |
| **B2B Reorder Rate** | % of B2B accounts that reorder | Reordering Accounts / Total Active B2B Accounts | B2B system | Quarterly | Target: >80% with auto-reorder (M28 U3). |
| **Channel Concentration** | % of revenue from single channel | Largest Channel Revenue / Total Revenue | Calculated | Monthly | Warning: >70% from one channel for 6+ months (M28 U10). |

[Confidence: C | Source: M28 channel strategy, Amazon standard metrics | Verified: 2026-02-08]

---

## 7. Content & Creative Metrics

| Metric | Definition | Formula | Source | Cadence | Notes |
|--------|-----------|---------|--------|---------|-------|
| **Hook Rate** | % of ad viewers who watch past 3 seconds | 3-second views / Impressions | Meta Ads | Daily | Target: >30%. Below 20% = hook problem. |
| **Hold Rate** | % of ad viewers who watch to completion | ThruPlays / Impressions | Meta Ads | Daily | Target varies by length. 15s: >15%. |
| **Creative Fatigue Index** | Declining performance of a creative over time | CTR trend + CPA trend over 7 days | Calculated | Weekly | Replace creative when CTR drops >30% from peak |
| **UGC Assets in Library** | Total usable UGC content pieces | Count of approved assets | Content management | Monthly | Target: 6-10 per creator (M23 repurposing multiplier) |
| **Email Open Rate** | % of emails opened | Opens / Delivered | Klaviyo | Per send | Benchmark: 30-40% for flows, 20-30% for campaigns |
| **Email Click Rate** | % of email recipients who click | Clicks / Delivered | Klaviyo | Per send | Benchmark: 2-5% |

[Confidence: B-C | Source: Meta Ads definitions, Klaviyo standards, M23 creative metrics, M17 email benchmarks | Verified: 2026-02-08]

---

## 8. Hypothesis Monitoring Metrics

These metrics directly test IonWave's core business hypotheses:

| Hypothesis | Primary Metric | Kill Threshold | Warning | Target | Validation Method |
|-----------|---------------|----------------|---------|--------|-------------------|
| **HYP-001** CAC | Blended CAC | >$60 for 14 days | >$50 | <$40 | Meta Ads + Shopify attribution |
| **HYP-002** Subscription Rate | Subscription Conversion Rate | <10% | <20% | >50% | Shopify + Subscription platform |
| **HYP-003** Churn | Monthly Churn | >15% for 2 months | >12% | <8% | Subscription platform |
| **HYP-004** Gross Margin | Gross Margin % | <50% | <60% | >65% | Accounting (COGS vs Revenue) |
| **HYP-005** LTV | Cohort LTV at Month 12 | <$64 | <$100 | >$120 | Cohort analysis |
| **HYP-006** Organic Growth | MER (blended efficiency) | <1.5x | <2x | >3x | Total Revenue / Total Marketing |
| **HYP-007** Timeline | MRR vs Month | <50% of plan at Month 6 | <75% of plan | On track | MRR trend |
| **HYP-008** Capital | Cash Runway | <30 days | <60 days | >90 days | Bank balance / Burn rate |

[Confidence: B | Source: IonWave hypothesis registry, financial model, kill criteria from M0 Thesis | Verified: 2026-02-08]

---

## 9. Metric Naming Conventions

| Rule | Example | Why |
|------|---------|-----|
| Use standard abbreviations | CAC not "customer acquisition cost" in dashboards | Consistency |
| Always specify time period | "Monthly Churn" not just "Churn" | Ambiguity prevention |
| Distinguish current vs target | "CAC (Current)" vs "CAC (Target)" | Clarity |
| Note data source | "ROAS (Meta-reported)" vs "ROAS (post-purchase survey)" | Source matters — platform ROAS overstates |
| Prefix channel when multi-channel | "Amazon Revenue" vs "D2C Revenue" | Prevent aggregation confusion |

---

## 10. Intelligence Gaps

| Gap | Impact | Upgrade Path | Priority |
|-----|--------|-------------|----------|
| G1: No actual data yet (pre-launch) | All metrics are targets, not actuals | Fill as IonWave launches. First real data at Month 1. | HIGH (but time-gated) |
| G2: Attribution methodology not finalized | CAC accuracy depends on methodology | Implement post-purchase survey + UTM + unique codes (M28 U2) at launch | HIGH |
| G3: Cohort LTV requires 6+ months of data | Can't validate HYP-005 until Month 6+ | Use proxy cohorts from industry benchmarks until real data | MEDIUM |
| G4: B2B and Amazon metrics are theoretical | Channel not yet live | Add to tracking when channels launch (Phase 2+) | LOW (future) |
