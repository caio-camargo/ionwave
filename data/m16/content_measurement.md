# Content Measurement Framework — M16: Content & SEO

**TUP**: M16 | **Tab**: 6 of 6
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-006 (Organic Growth Lift), HYP-001 (CAC)

---

## 1. Measurement Philosophy

### 1.1 The Content ROI Problem

Content marketing has a delayed return — unlike paid ads where you spend $1 and see a result tomorrow, content investments compound over 6-18 months. This creates a measurement challenge: how do you know if content is working before the compounding kicks in?

**Solution**: Track **leading indicators** (early signals that predict future organic success) alongside **lagging indicators** (actual business outcomes). Don't kill the content program at Month 3 because organic revenue is still tiny — look at whether the leading indicators are trending in the right direction.

### 1.2 Metric Hierarchy

```
LEADING INDICATORS (Months 1-6)
├── Indexed pages growing
├── Search impressions increasing
├── Keywords entering top 100
├── Backlinks accumulating
└── Content production on cadence

MIDDLE INDICATORS (Months 3-9)
├── Organic sessions growing month-over-month
├── Keywords moving to top 10-20
├── Organic CTR improving
├── Time on page / engagement signals
└── Email subscribers from content

LAGGING INDICATORS (Months 6-18)
├── Organic traffic as % of total
├── Revenue attributed to organic
├── Content ROI (revenue ÷ production cost)
├── Blended CAC reduction from organic
└── Customer LTV from organic channel
```

---

## 2. KPI Dashboard

### 2.1 Primary KPIs (Report Monthly)

| KPI | Definition | Source | Month 3 Target | Month 6 Target | Month 12 Target |
|-----|-----------|--------|---------------|----------------|-----------------|
| **Organic sessions** | Unique sessions from organic search | GA4 | 200-500 | 1,000-2,500 | 5,000-10,000 |
| **Organic % of total** | Organic sessions ÷ total sessions | GA4 | 3-5% | 8-12% | 10-20% *(U6)* |
| **Keywords in top 10** | Number of keywords ranking positions 1-10 | Ahrefs/GSC | 5-10 | 20-50 | 50-150 |
| **Referring domains** | Unique domains linking to IonWave | Ahrefs | 15-25 | 30-50 | 75-150 |
| **Content output** | Articles published per month | Internal | 4-5 | 8-10 | 10-12 |
| **Organic revenue** | Revenue from organic traffic | GA4 | <$500 | $500-2,000 | $2,000-8,000 |

### 2.2 Secondary KPIs (Review Monthly)

| KPI | Definition | Healthy Range |
|-----|-----------|--------------|
| **Organic CTR** | Clicks ÷ impressions in Search Console | >3% average |
| **Average position** | Average keyword ranking position | Declining (improving) over time |
| **Bounce rate (organic)** | Single-page sessions from organic | <60% for blog, <40% for product pages |
| **Pages per session (organic)** | Average pages viewed per organic visit | >1.5 |
| **Email signups from content** | Newsletter subscriptions from blog CTAs | 2-5% of organic visitors |
| **Domain Authority** | Moz/Ahrefs domain metric | Growing steadily |

### 2.3 Content-Level KPIs (Per Article)

| Metric | Purpose | Action Trigger |
|--------|---------|---------------|
| **Organic sessions** | Is this article driving traffic? | <10 sessions/month after 3 months → refresh or de-prioritize |
| **Keyword position** | Is it ranking for target keyword? | Not in top 50 after 3 months → content quality issue or keyword too competitive |
| **Avg time on page** | Is the content engaging? | <1 minute → content doesn't match intent or is low quality |
| **Scroll depth** | Are people reading the full article? | <50% → content is too long or front-loaded poorly |
| **CTA click rate** | Is it driving business action? | <1% → CTA misaligned with content intent |
| **Backlinks earned** | Is it attracting natural links? | Any article earning links = signal to create more like it |

---

## 3. Attribution Model

### 3.1 How to Attribute Revenue to Content

Content rarely drives a direct last-click purchase. The typical journey:

```
ORGANIC SEARCH → Blog Article → Exit → (days pass) →
PAID AD → Product Page → Purchase
```

If we only count last-click, content gets zero credit. Instead, use **multi-touch attribution**:

| Model | How It Works | When to Use |
|-------|------------|------------|
| **Last-click** | 100% credit to final touchpoint | Default in GA4 — avoid for content valuation |
| **First-click** | 100% credit to first touchpoint | Good for content: shows which articles introduce new visitors |
| **Linear** | Equal credit to all touchpoints | Good for understanding the full journey |
| **Data-driven** | Google's ML-based attribution | Use when traffic volume is high enough (Month 6+) |

**Recommended**: Use **first-click attribution** to evaluate content's role in customer acquisition. This answers: "Which blog articles bring in people who eventually buy?"

### 3.2 GA4 Setup for Content Attribution

1. **Create content groupings**: Group blog articles by pillar (Pillar 1-5) and type (pillar, cluster, comparison)
2. **Set up conversions**: Track email signup, add-to-cart, and purchase as conversion events
3. **Tag content UTMs**: If sharing content links externally, use UTM parameters for tracking
4. **Exploration reports**: Build a monthly content performance exploration in GA4

### 3.3 Organic Channel Value Calculation

Monthly formula:

```
ORGANIC CHANNEL VALUE =
  (Organic Sessions × CVR × AOV) +
  (Organic Email Signups × Email CVR × AOV × Email Cadence) +
  (Brand Search Lift attributable to content × Paid CPC saved)
```

Simplified version for early stage:

```
ORGANIC VALUE = Organic Revenue (first-click) + Equivalent Paid Traffic Cost
```

Where **Equivalent Paid Traffic Cost** = organic sessions × average CPC you'd pay for those keywords.

**Caveat** *(Dialogue upgrade U4)*: "Equivalent paid traffic cost" is a directional metric, not real revenue. You can't deposit saved CPC. Use it to justify continued investment, but don't confuse it with actual ROI. Real ROI = organic revenue (first-click attributed) ÷ content production cost.

Example at Month 6:
- 2,000 organic sessions × $1.50 avg CPC = $3,000 equivalent paid traffic cost
- Even if organic revenue is only $1,000, the content program is saving $3,000 in ad spend

---

## 4. Reporting Cadence

### 4.1 Weekly (5 min review)

| Check | Source | Action if Abnormal |
|-------|--------|-------------------|
| Content published this week? | Content calendar | If behind, identify blocker |
| Any crawl errors? | Google Search Console | Fix immediately |
| Site speed normal? | PageSpeed Insights | Audit if degraded |

### 4.2 Monthly (30 min review)

| Report | Contents | Owner |
|--------|---------|-------|
| **Organic Traffic Report** | Sessions, % of total, MoM growth, top pages | Operator |
| **Keyword Report** | New rankings, position changes, top 10 count | Operator |
| **Content Performance** | Best/worst articles, refresh candidates | Operator |
| **Backlink Report** | New referring domains, DA growth | Operator |
| **Content Output** | Articles published vs plan, quality gate compliance | Operator |

### 4.3 Quarterly (60 min strategic review)

| Question | Data Sources |
|----------|-------------|
| Is organic traffic trending toward the HYP-006 target (10%)? | GA4 organic % trend |
| Which content pillars are performing best? | GA4 content grouping |
| Are we ranking for priority keywords? | Ahrefs rank tracker |
| Is content ROI improving? | Revenue ÷ production cost trend |
| Should we adjust the content calendar based on data? | All of the above |
| Are there new keyword opportunities from Search Console? | GSC query data |

---

## 5. Benchmarks & Guardrails

### 5.1 Industry Benchmarks (DTC Supplement Brands)

| Metric | Industry Average | IonWave Target | Notes |
|--------|-----------------|---------------|-------|
| Organic % of traffic (Year 1) | 10-20% | 10-20% (base), 15-25% (aggressive) | Revised: 15-25% requires perfect execution *(Dialogue U6)* |
| Blog CVR to email | 2-5% | 3% | Standard for gated content / newsletter CTA |
| Blog CVR to purchase | 0.5-2% | 1% | Content visitors are TOFU — lower CVR expected |
| Content production cost per article | $50-500 | $30-100 | AI-assisted production reduces cost |
| Time to first page ranking (long-tail) | 3-6 months | 3-4 months | Marine plasma keywords are low competition |
| Time to first page ranking (medium) | 6-12 months | 6-9 months | Requires DA 15-25 |
| Content ROI breakeven | 6-12 months | 10-14 months | New brands take longer; AI helps but doesn't eliminate ramp *(Dialogue U4)* |

[Confidence: C | Source: Industry benchmarks compiled from various DTC and content marketing studies. Ranges reflect variance across brands and categories.]

### 5.2 Guardrail Metrics

| Guardrail | Threshold | If Violated |
|-----------|-----------|-------------|
| Content production cadence | ≥80% of planned output | Investigate: resource constraint? quality gate too strict? |
| Organic traffic MoM growth | ≥10% MoM after Month 3 | SEO audit: technical issues? content quality? link building stalled? |
| Core Web Vitals | All green | Fix immediately — CWV affects rankings |
| Crawl errors | <5 total | Fix broken links, check redirects |
| Brand search volume | Growing | If flat, content isn't building awareness |

### 5.3 Kill Criteria (When to Reevaluate Content Strategy)

Consider fundamental strategy review if:
- **Month 6**: Organic traffic still <3% of total despite consistent execution
- **Month 9**: No keywords in top 10 for target terms
- **Month 12**: Content ROI still negative with no improvement trend
- **Any time**: Google algorithm penalty detected (sudden 50%+ traffic drop)

**Important**: Don't kill the program too early. Content SEO is inherently slow to start. The leading indicators (indexed pages, impressions, keyword positions) should be trending positively even if traffic is still small.

---

## 6. SEO Tool Stack (Measurement-Focused)

| Tool | Function | Cost | Priority |
|------|----------|------|----------|
| **Google Search Console** | Indexing, search queries, CTR, position tracking | Free | Day 1 |
| **Google Analytics 4** | Traffic, attribution, conversions, audience | Free | Day 1 |
| **Ahrefs Lite** | Keyword tracking, backlink monitoring, competitor analysis, site audit | $99/month | Month 2-3 |
| **Screaming Frog** | Technical SEO audits (free up to 500 URLs) | Free | Monthly |
| **Google Looker Studio** | Custom dashboards combining GA4 + GSC data | Free | Month 3 |
| **Hotjar / Microsoft Clarity** | Heatmaps, scroll depth, user behavior on content | Free | Month 3 |

**Phase 1 minimum** (Month 0-2): GSC + GA4 = $0
**Phase 2 recommended** (Month 3+): Add Ahrefs + Looker Studio = $99/month

---

## 7. Content Program Health Score

### 7.1 Monthly Health Score (Composite)

Score each dimension 1-5, weight, and calculate composite:

| Dimension | Weight | Score Criteria |
|-----------|--------|---------------|
| **Output consistency** | 20% | 5 = 100% of plan, 3 = 80%, 1 = <50% |
| **Organic traffic growth** | 25% | 5 = >20% MoM, 3 = 10-20%, 1 = flat/declining |
| **Keyword progress** | 20% | 5 = new top-10 rankings, 3 = top-50 progress, 1 = no movement |
| **Link acquisition** | 15% | 5 = exceeding target, 3 = on target, 1 = below target |
| **Content quality** | 10% | 5 = all pass quality gate, 3 = most pass, 1 = quality issues |
| **Technical health** | 10% | 5 = all CWV green, 3 = minor issues, 1 = major issues |

**Composite score**:
- 4.0-5.0: Excellent — content program is on track
- 3.0-3.9: Good — performing but opportunities for improvement
- 2.0-2.9: Warning — specific dimensions need attention
- <2.0: Critical — fundamental issues to address

---

## 8. Hypothesis Cross-Reference

| Hypothesis | How Measurement Framework Feeds It |
|-----------|-----------------------------------|
| **HYP-006** (Organic Growth 10%) | This framework directly tracks whether HYP-006 is being achieved. Monthly organic % of total traffic is the primary metric. If we're not reaching 10% by Month 6-8, we know early. |
| **HYP-006.2** (SEO) | Keyword rankings, DA growth, and content output are the operational metrics for HYP-006.2. This framework provides the evidence basis for confidence upgrades. |
| **HYP-001** (CAC ≤$40) | Organic channel value calculation shows how content reduces blended CAC. As organic traffic grows, blended CAC drops — this framework quantifies the effect. |
| **HYP-005** (Blended LTV) | Content-educated customers may have higher LTV (more informed, higher conviction). Track organic vs paid customer cohort LTV to validate (requires 6+ months of data). |

---

*End of M16 Content & SEO TUP — 6 tabs complete.*
