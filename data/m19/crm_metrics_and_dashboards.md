# CRM Metrics & Dashboards

**TUP**: M19 — Customer Lifecycle & CRM
**Version**: 1.0.0
**Last Updated**: 2026-02-07
**Source Tabs**: 453 (CRM Metrics Dashboard)

---

## 1. The CRM Scorecard

The CRM scorecard is the single view that tells you whether the customer relationship machine is working. It spans two layers: **funnel health** (weekly) and **relationship depth** (monthly).

### Funnel Health Metrics (Review Weekly)

These metrics track stage-to-stage conversion across the lifecycle:

| Metric | Definition | Target | Red Flag | Data Source |
|--------|-----------|--------|----------|-------------|
| **Impressions → Aware** | Hook rate on ads | >25% | <15% | Meta Ads |
| **Aware → Interested** | Ad CTR | >1.5% | <0.5% | Meta Ads |
| **Interested → Considering** | Email capture rate OR ATC rate | >5% email / >8% ATC | <2% / <4% | Shopify + Klaviyo |
| **Considering → Purchase** | Checkout conversion rate | >3% | <1.5% | Shopify |
| **First → Repeat** | 60-day repeat purchase rate | >25% | <15% | Shopify |
| **Customer → Advocate** | Referral participation rate | >10% | <3% | Referral program |
| **Retained → Lapsed** | 60-day churn rate | <20% | >35% | Computed |

### Relationship Depth Metrics (Review Monthly)

These metrics measure the quality and depth of customer relationships over time:

| Metric | Definition | Target | Red Flag | Data Source |
|--------|-----------|--------|----------|-------------|
| **Average LTV** | Total revenue ÷ Total unique customers | >$120 (12-month) | <$60 | Shopify / Lifetimely |
| **LTV:CAC Ratio** | Average LTV ÷ Average CAC | >3:1 | <2:1 | Computed |
| **NPS** | Net Promoter Score from surveys | >50 | <20 | Survey tool (Delighted / Retently) |
| **Subscription Rate** | Subscribers ÷ Total customers | >20% | <8% | Shopify / Recharge |
| **Review Rate** | Reviews ÷ Delivered orders | >15% | <5% | Review platform |
| **UGC Submission Rate** | UGC submitted ÷ Requests sent | >8% | <2% | UGC platform |
| **Support Satisfaction** | CSAT on support tickets | >90% | <75% | Gorgias |
| **Email List Health** | Active engaged ÷ Total list | >40% | <20% | Klaviyo |

### Decision Triggers

When a metric hits its red flag threshold, it triggers a specific investigation:

| Red Flag | Investigation | Owner |
|----------|--------------|-------|
| Hook rate <15% | Creative fatigue — rotate ad creative, test new hooks | M7/M8 |
| CTR <0.5% | Audience mismatch or ad creative failure | M7 |
| Email capture <2% | Landing page popup not converting — test offer/timing | M6/M17 |
| CVR <1.5% | Checkout friction or pricing objection | M5/M10 |
| Repeat rate <15% | Product satisfaction, onboarding, or replenishment flow failure | M3/M20/M17 |
| Referral <3% | No referral program OR insufficient NPS | M26 |
| Churn >35% | Systemic product or experience issue | M3/M20/M21 |
| LTV <$60 | Low repeat rate + low AOV — combined problem | M10/M19/M21 |
| LTV:CAC <2:1 | Spending too much on acquisition OR LTV too low | M7/M19 |
| NPS <20 | Product or experience failure — urgent investigation | M3/M20 |
| Sub rate <8% | Subscription offer not compelling or poorly timed | M21/M17 |
| Review rate <5% | Review request flow missing or poorly timed | M27/M17 |
| CSAT <75% | Support quality issue | M20 |
| List health <20% | Deliverability risk — sunset inactive subscribers | M17 |

---

## 2. Dashboard Architecture

### Founder Daily CRM Check-In (5 Minutes) *(U8)*

In Month 1-6, the founder IS the CRM. This daily protocol replaces formal dashboards:

**Every morning (5 minutes)**:
1. **Shopify Home** (1 min): Yesterday's orders, revenue, returning vs. new. Any new orders from subscribers?
2. **Klaviyo Dashboard** (1 min): Any flow failures? Email deliverability above 95%? Any unsubscribes from key flows?
3. **Gorgias Inbox** (2 min): Any open tickets from yesterday? Any adverse reaction reports? CSAT on last 5 closed tickets?
4. **Recharge Dashboard** (1 min): Any subscription cancellations today? Any failed payments pending?

**Decision rule**: If anything is red (order spike/drop >50%, CSAT <75%, adverse reaction, payment failure spike), stop and investigate before doing anything else.

**What you DON'T need to look at daily**: Cohort data, RFM segments, LTV calculations, NPS trends. These are weekly/monthly cadences.

### Weekly Dashboard (Founder Review)

| Section | Metrics | Source | Time to Build |
|---------|---------|-------|---------------|
| **Acquisition** | Hook rate, CTR, CPC, CPM, email captures | Meta Ads Manager + Klaviyo | 5 minutes |
| **Conversion** | Site traffic, ATC rate, CVR, AOV, revenue | Shopify Analytics | 3 minutes |
| **Retention** | Repeat purchase rate, subscription conversions, churn | Shopify + Recharge | 5 minutes |
| **Engagement** | Email open rate, click rate, SMS engagement | Klaviyo | 3 minutes |
| **Support** | Ticket volume, CSAT, first response time, activation rate | Gorgias + M20 scorecard | 5 minutes |

**Total weekly review time**: 20-25 minutes

### Monthly Dashboard (Business Review — feeds M25 MBR)

| Section | Metrics | Source |
|---------|---------|-------|
| **Lifetime Value** | Cohort LTV curves (M1/M3/M6/M12), LTV by source, blended LTV | Lifetimely / Peel |
| **Segmentation** | Segment distribution, net segment migration, VIP growth | Klaviyo / Tresl |
| **NPS & Satisfaction** | NPS trend, CSAT trend, NPS by segment, promoter conversion rate | Survey tool + Gorgias |
| **Channel Health** | LTV:CAC by source, payback period, channel grade (A-F) | Computed from Shopify + Meta |
| **Churn** | Monthly churn rate, voluntary vs. involuntary, dunning recovery rate | Recharge + Klaviyo |
| **List Health** | Active %, deliverability, unsubscribe rate, spam complaints | Klaviyo |

### Quarterly Dashboard (Strategic Review)

| Question | Metrics | Threshold for Action |
|----------|---------|---------------------|
| Are newer cohorts better? | M1 retention trend across cohorts | 3 consecutive declining cohorts → product/onboarding investigation |
| Is LTV improving? | Blended 12-month projected LTV trend | Declining 2 consecutive quarters → deep dive |
| Are channels efficient? | LTV:CAC by source, channel grade distribution | Any channel at D/F grade for 3+ months → kill or restructure |
| Is the brand health? | NPS trend, review rate, UGC rate | NPS declining 2 quarters → brand health audit |
| Is the list growing healthily? | List growth rate minus churn rate | Net negative → acquisition problem |

---

## 3. Phase-Gated Measurement Stack

### Pre-Revenue (Now)

| What to Track | How | Cost |
|---------------|-----|------|
| Email list growth | Klaviyo dashboard | $0 (included) |
| Website traffic | Google Analytics 4 | $0 |
| Social engagement | Platform native analytics | $0 |

### Month 1-3 (Launch)

| What to Track | How | Cost |
|---------------|-----|------|
| All funnel metrics | Shopify Analytics + Klaviyo | $0 (included) |
| First cohort data | Manual Google Sheet | $0 |
| Support metrics | Gorgias dashboard | $60/month (Basic) |
| Revenue by source | Shopify + UTM tracking | $0 |

### Month 3-6 ($50K+ Revenue)

| What to Track | How | Cost |
|---------------|-----|------|
| Cohort-based LTV | Lifetimely | $75-149/month |
| RFM segmentation | Tresl Segments | $29-79/month |
| All monthly metrics | Automated dashboards | Included in tools |

### Month 6-12 ($250K+ Revenue)

| What to Track | How | Cost |
|---------------|-----|------|
| Full analytics suite | Peel Analytics OR Triple Whale | $499-1,129/month |
| Advanced RFM + predictive | Included in Peel | Included |
| Channel-level LTV:CAC | Lifetimely + attribution | Included |

---

## 4. Cross-Reference with Other TUPs

| Metric Area | Primary TUP | M19's Role |
|-------------|-------------|-----------|
| **Support metrics** (CSAT, ticket volume, activation rate) | M20 — Customer Support | M19 consumes these metrics into the CRM scorecard |
| **Email metrics** (open rate, click rate, flow performance) | M17 — Email | M19 defines which flows serve which lifecycle stages; M17 reports performance |
| **Retention metrics** (subscription rate, churn, LTV) | M21 — Subscription & Retention | M19 provides the measurement framework; M21 provides the tactics |
| **Analytics infrastructure** (BI tools, reporting cadence) | M25 — Analytics | M25 builds the reporting pipes; M19 defines what to measure for CRM |
| **VOC / NPS** | M27 — Voice of Customer | M27 does deep qualitative research; M19 tracks NPS as an operational metric |
| **Acquisition metrics** (CAC, ROAS, hook rate) | M7 — Ads | M19 evaluates acquisition quality via LTV:CAC; M7 optimizes for efficiency |

---

## 5. Intelligence Gaps

| Gap | Priority | Validation Path |
|-----|----------|----------------|
| Actual funnel conversion rates at each stage | CRITICAL | Measure from Day 1 of ads; establish baseline by Month 3 |
| Realistic LTV targets (current estimates are all D-grade) | CRITICAL | Need 6+ months of cohort data |
| Email list health benchmarks for supplements | HIGH | Benchmark against Klaviyo supplement customer data |
| Optimal dashboard review frequency at founder stage | MEDIUM | Start with weekly, adjust based on signal-to-noise |
| Integration points between analytics tools | MEDIUM | Map data flows after tool stack is purchased |
