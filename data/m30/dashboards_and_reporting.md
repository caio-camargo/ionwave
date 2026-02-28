# M30 Dashboards & Reporting
**TUP**: M30 Analytics & Dashboards
**Source Tabs**: 628 (Reporting Templates), 629 (Metrics Dashboard Master), 630 (Key Metrics Dashboard), 631 (KPI Dashboard)
**Version**: 1.0.0
**Quality**: 7.5/10
**Status**: Workshop Draft
**Confidence Baseline**: B-C (industry frameworks applied to IonWave stage)

---

## Purpose
Define what IonWave looks at, how often, and in what format. This is the operating rhythm made visible — the daily, weekly, monthly, and quarterly heartbeat of the business.

**Design Principle**: Founder Mode first. One person, wearing all hats, needs to check the business health in <5 minutes daily. No enterprise dashboarding tools needed at launch — a Google Sheet + Slack bot will do until $50K+ MRR.

---

## 1. Dashboard Architecture — Staged by Growth Phase

### Phase 0: Pre-Launch (Month 0)
**Tool**: Google Sheets + manual entry
**Time commitment**: 10 min/day

Track ONLY:
- Email list growth (daily count)
- Landing page conversion rate
- Pre-launch survey responses
- Cash remaining vs budget

### Phase 1: Launch → $10K MRR (Months 1-6)
**Tool**: Google Sheets MVD (Minimum Viable Dashboard) + Shopify native analytics + Meta Ads Manager
**Time commitment**: 10 min/day, 30 min/week, 1 hr/month

#### Minimum Viable Dashboard (MVD) — The Only 7 Numbers That Matter
*(Dialogue Upgrade U1: A solo founder tracking 50 metrics is tracking zero metrics.)*

| # | Metric | Target | Source | Cadence |
|---|--------|--------|--------|---------|
| 1 | **Revenue** (net) | Growing MoM | Shopify | Daily |
| 2 | **Orders** | Growing MoM | Shopify | Daily |
| 3 | **Ad Spend** | Within budget | Meta Ads | Daily |
| 4 | **CAC** (blended) | <$40 | Calculated: Spend / New Customers | Weekly |
| 5 | **Subscription Rate** | >50% | Subscription platform | Weekly |
| 6 | **Cash Balance** | >60 days runway | Bank | Daily |
| 7 | **MER** (blended efficiency) | >3x | Calculated: Total Revenue / Total Marketing | Weekly |

**Everything else waits.** No creative metrics, no cohort analysis, no NPS, no email revenue % until Phase 2. The MVD is a Google Sheet with 7 rows, conditional formatting (green/yellow/red), and formulas pre-built. See OpKit for template.

#### Phase 1 Full Cadence (builds on MVD)

| Cadence | What to Check | Where | Time |
|---------|--------------|-------|------|
| **Daily** | MVD metrics 1-3, 6 (Revenue, Orders, Spend, Cash) | Shopify + Meta + Bank | 5 min |
| **Daily** | Support tickets (any fires?) | Helpdesk | 3 min |
| **Weekly** | MVD metrics 4-5, 7 (CAC, Sub Rate, MER) | Calculated in Sheets | 10 min |
| **Weekly** | Inventory days remaining | 3PL + Sheets | 5 min |
| **Monthly** | Simplified MBR (see §4 below) | Sheets + Accounting | 1 hr |
| **Monthly** | Red Flag Dashboard scan (existential metrics only) | Sheets | 10 min |

#### Vanity Metrics Ban List — Phase 1 (Dialogue Upgrade U12)
The following metrics are explicitly BANNED from Phase 1 dashboards. They feel productive but drive zero revenue decisions:
- Social media followers (Instagram, TikTok, Twitter)
- Website pageviews (without conversion context)
- Email list size (without engagement rates)
- Instagram/TikTok engagement rate
- "Brand awareness" metrics of any kind
- Press mentions count

These may enter at Phase 3 ($50K+ MRR) when a brand marketing budget exists.

### Phase 2: $10K-$50K MRR (Months 6-12)
**Tool**: Add Triple Whale or Polar Analytics for attribution + automated dashboards
**Time commitment**: 10 min/day, 1 hr/week, 3 hrs/month

New additions:
- Automated daily Slack digest (revenue, orders, ROAS, CAC)
- Multi-touch attribution reporting
- Amazon channel dashboard (if launched)
- Creative performance tracker
- Cohort analysis automation

### Phase 3: $50K+ MRR (Month 12+)
**Tool**: Consider Looker/Metabase for custom dashboards if team grows beyond founder
**Time commitment**: Delegated to ops/analytics hire

New additions:
- Custom BI dashboards
- B2B channel reporting
- Retail channel reporting
- Team KPI dashboards
- Automated alerting (Slack/email when thresholds hit)

[Confidence: B | Source: D2C founder best practices, Triple Whale/Polar feature sets, IonWave growth model | Verified: 2026-02-08]

---

## 2. Founder Daily Check-In (The 5-Minute Pulse)

**When**: Every morning, before starting work.
**Where**: Shopify app + Meta Ads app + Bank app (mobile-first)

```
DAILY PULSE — [Date]
━━━━━━━━━━━━━━━━━━━━
Revenue:     $[___]  (vs yesterday: +/-%)
Orders:      [___]   (vs yesterday: +/-%)
Ad Spend:    $[___]
ROAS:        [___]x  (🟢 >2.5x | 🟡 1.5-2.5x | 🔴 <1.5x)
Cash:        $[___]  (runway: [___] days)
Fires:       [any support issues/stockouts/ad problems?]
━━━━━━━━━━━━━━━━━━━━
One thing to fix today: _______________
```

**Rule**: If any metric is RED, that becomes the day's #1 priority. Everything else waits.

**Slack Format** (for team updates):
```
📊 IonWave Daily — [Date]
💰 Revenue: $[X] | Orders: [X] | AOV: $[X]
📈 Ad Spend: $[X] | ROAS: [X]x | CAC: $[X]
🔋 Cash: $[X] | Runway: [X] days
🚦 Status: [🟢/🟡/🔴]
```

---

## 3. Weekly Report

**When**: Every Monday morning
**Audience**: Founder + any advisors/investors who requested updates
**Time to produce**: 30 minutes

### Template

```
IONWAVE WEEKLY — Week of [Date]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 KEY METRICS
| Metric          | This Week | Last Week | Change | Target | Status |
|-----------------|-----------|-----------|--------|--------|--------|
| Revenue         | $[___]    | $[___]    | +/-%   | $[___] | 🟢/🟡/🔴 |
| Orders          | [___]     | [___]     | +/-%   | [___]  | 🟢/🟡/🔴 |
| New Customers   | [___]     | [___]     | +/-%   | [___]  | 🟢/🟡/🔴 |
| CAC (blended)   | $[___]    | $[___]    | +/-%   | <$40   | 🟢/🟡/🔴 |
| ROAS            | [___]x    | [___]x    | +/-%   | >2.5x  | 🟢/🟡/🔴 |
| Subscription %  | [___]%    | [___]%    | +/-%   | >50%   | 🟢/🟡/🔴 |
| MER             | [___]x    | [___]x    | +/-%   | >3x    | 🟢/🟡/🔴 |

🏆 WINS
• [What worked this week]
• [What worked this week]

🚧 BLOCKERS
• [What's stuck or broken]
• [What's stuck or broken]

📋 NEXT WEEK PRIORITIES
1. [Top priority]
2. [Second priority]
3. [Third priority]

🚨 RED FLAGS: [Any kill criteria approaching? Y/N — if Y, detail below]
```

---

## 4. Monthly Business Review (MBR)

### Early-Stage MBR (Months 1-3) — 1 Hour Max
*(Dialogue Upgrade U5: No pre-revenue founder should spend a full day on an MBR.)*

**When**: First week of each month
**Time**: 1 hour total — that's it.

The early-stage MBR answers exactly 4 questions:

**Q1: Are we acquiring customers at viable economics?**
- CAC this month: $[___] (target: <$40, kill: >$60)
- MER this month: [___]x (target: >3x)
- New customers: [___]

**Q2: Are they staying?**
- Subscription conversion: [___]% (target: >50%, YELLOW: <30%)
- Churn (if data available): [___]% (target: <8%)
- Any churn patterns? (cancellation reasons)

**Q3: How much cash do we have?**
- Cash on hand: $[___]
- Runway at current burn: [___] days (kill: <30)
- Cash in vs cash out this month: $[___] vs $[___]

**Q4: What are we doing differently next month?**
- Top learning from this month: ___
- #1 priority for next month: ___
- Anything to stop doing: ___

#### Monthly Hypothesis Prompt (Dialogue Upgrade U13)
For each of the 3 most critical hypotheses, write ONE sentence:

> "HYP-001 (CAC): This month's data [supports/weakens/doesn't change] this hypothesis because [specific reason]."
> "HYP-002 (Subscription): This month's data [supports/weakens/doesn't change] this hypothesis because [specific reason]."
> "HYP-003 (Churn): This month's data [supports/weakens/doesn't change] this hypothesis because [specific reason]."

If you can't write that sentence, you're not measuring the right things.

---

### Full MBR (Month 4+) — 3 Hours Max

**When**: First week of each month
**Time**: 2-3 hours of analysis + 1 hour review meeting (if team/advisors)

Expand to the full 8-section MBR only after Month 3, when you have enough data to make it worthwhile:

**Section 1: Executive Summary** (1 page)
- MRR and growth trajectory
- Months to $30K MRR target (updating projection monthly)
- Cash runway
- One-sentence health assessment: "On track / Watch / At risk / Critical"

**Section 2: Revenue Deep Dive**
- Revenue by channel (D2C, Amazon, B2B when applicable)
- Revenue by customer type (new vs returning vs subscription)
- AOV trends
- MRR bridge (beginning MRR + new + expansion - contraction - churn = ending MRR)

**Section 3: Acquisition**
- CAC by channel (Meta, Google, organic, referral, influencer)
- Best and worst performing creatives (top/bottom 3)
- CVR funnel: Impressions → Clicks → ATC → Purchase
- Email list growth and capture rate

**Section 4: Retention**
- Cohort retention table (each monthly cohort's retention curve)
- Churn analysis: voluntary vs involuntary, reasons
- Subscription conversion trends
- Monthly hypothesis prompt (see above)

**Section 5: Operations**
- Inventory status and reorder timeline
- Support ticket volume and satisfaction
- Shipping performance

**Section 6: Financial Health**
- Full P&L (revenue, COGS, gross margin, opex, net)
- Cash flow vs projection
- Updated 13-week cash forecast (from M25)

**Section 7: Red Flag & Hypothesis Check**
- Existential metrics status (CAC, Cash, Contribution Margin)
- Monitoring metrics status (all others)
- Hypothesis prompt for top 3 hypotheses
- Any confidence grade changes?

**Section 8: Decisions Needed**
- List of decisions to make this month
- Data supporting each decision
- Recommendation

**Cross-Reference**: Monthly MBR structure integrates with M25 Survival Five scorecard. The MBR IS the Survival Five review — don't create two separate processes.

[Confidence: B | Source: D2C MBR best practices, M25 Survival Five framework, Y Combinator startup metrics guidance | Verified: 2026-02-08]

---

## 5. Quarterly Deep Review

**When**: End of Q1 (Month 3), Q2 (Month 6), Q3 (Month 9), Q4 (Month 12)
**Time**: Half-day (4-6 hours)

### QBR Additions Beyond Monthly
- **Competitive landscape refresh** — has anything changed? (reference M26)
- **ICP validation** — are we selling to who we expected? (reference M27)
- **Pricing review** — should price/offer change? (reference M10)
- **Channel mix review** — rebalance channel allocation? (reference M28)
- **Hypothesis formal review** — upgrade/downgrade confidence grades, update validation plans
- **Portfolio Reality Check** — are we still on a viable path? (reference M28 constraint scenarios)
- **Product development pipeline** — any new SKUs warranted? (reference M28 product readiness triggers)

### Go/No-Go Gates
**Month 3**: First real data checkpoint. Enough to see CAC and initial conversion patterns.
- GREEN: CAC <$45, CVR >2%, subscription rate >35% → continue, optimize
- YELLOW: CAC $45-55, CVR 1.5-2%, sub rate 25-35% → investigate, adjust
- RED: CAC >$55, CVR <1.5%, sub rate <25% → pivot or kill discussion

**Month 6**: Follow-on capital decision point (from IonWave financial model).
- GREEN: On track for $15K+ MRR by Month 12 → raise follow-on
- YELLOW: $8-15K MRR trajectory → extend runway, optimize
- RED: <$8K MRR trajectory → serious pivot or wind-down

**Month 12**: Full-year review.
- Validate or invalidate each hypothesis with real data
- Update all projections with actuals
- Make Year 2 plan

---

## 6. Metrics Master View — IonWave KPIs

The consolidated single-page dashboard view. This is what you'd print and pin to the wall.

### Revenue & Growth
| Metric | Target | Warning | Kill | Cadence |
|--------|--------|---------|------|---------|
| MRR | $25K by M12 | <$8K at M6 | Negative growth 3 months | Monthly |
| MoM Growth | >20% | <10% | Negative 2 months | Monthly |
| AOV | $49 | <$35 | <$25 | Weekly |

### Acquisition
| Metric | Target | Warning | Kill | Cadence |
|--------|--------|---------|------|---------|
| CAC | <$40 | >$50 | >$60 for 14 days | Weekly |
| ROAS | >2.5x | <2x | <1.5x for 7 days | Daily |
| CVR | >2.5% | <2% | <1% | Daily |
| CTR | >1% | <0.5% | N/A | Daily |

### Retention
| Metric | Target | Warning | Kill | Cadence |
|--------|--------|---------|------|---------|
| Subscription % | >50% | <30% | <10% | Weekly |
| Monthly Churn | <8% | >12% | >15% for 2 months | Monthly |
| LTV:CAC | >3x | <2x | <1.5x | Monthly |
| Email Revenue % | >25% | <15% | N/A | Weekly (activate Month 3+, requires 1K+ subscribers — U9) |

### Operations
| Metric | Target | Warning | Kill | Cadence |
|--------|--------|---------|------|---------|
| Inventory Days | 30-45 | <14 | <7 | Weekly |
| Ship Time | <3 days | >5 days | >7 days | Daily |
| CSAT | >4.5 | <4.0 | <3.5 | Weekly |
| Chargeback Rate | <0.3% | >0.5% | >0.75% | Monthly |

### Financial
| Metric | Target | Warning | Kill | Cadence |
|--------|--------|---------|------|---------|
| Gross Margin | >65% | <60% | <50% | Monthly |
| Contribution Margin | >20% | <10% | Negative 30 days | Monthly |
| Runway | >90 days | <60 days | <30 days | Weekly |

---

## 7. Tool Progression

| Phase | Revenue | Analytics Stack | Cost | Setup Time |
|-------|---------|----------------|------|------------|
| Pre-launch | $0 | Google Sheets + Shopify native | $0 | 4 hrs |
| Launch ($0-10K MRR) | <$10K/mo | + Klaviyo analytics + Meta Ads dashboard | $0 (included) | 2 hrs |
| Growth ($10-50K MRR) | $10-50K/mo | + Triple Whale or Polar Analytics + post-purchase survey | $100-300/mo | 8 hrs |
| Scale ($50K+ MRR) | $50K+/mo | + Looker/Metabase (if team) + automated alerts | $500-1K/mo | 20+ hrs |

**Rule**: Never buy tools ahead of the data to fill them. A Google Sheet you actually update daily beats a $500/mo dashboard nobody checks.

[Confidence: B | Source: Triple Whale/Polar pricing, D2C analytics stack surveys, YC startup guidance | Verified: 2026-02-08]

---

## 8. Intelligence Gaps

| Gap | Impact | Upgrade Path | Priority |
|-----|--------|-------------|----------|
| G1: Templates are theoretical (no real data) | Can't validate utility until launch | First real MBR at Month 1 will reveal what's useful vs noise | HIGH (time-gated) |
| G2: Tool recommendations need testing | Pricing and features may change | Trial Triple Whale/Polar at $10K MRR, evaluate fit | MEDIUM |
| G3: Reporting cadence may be too heavy for solo founder | Risk of metric fatigue → stops checking | Start with daily pulse only, add weekly/monthly gradually | MEDIUM |
