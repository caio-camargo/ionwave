# SEO Strategy — M16: Content & SEO

**TUP**: M16
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-006 (Organic Growth Lift), HYP-001 (CAC — organic reduces blended CAC)
**Danilo Source**: ops_model_v10_dump/410_seo_strategy_overview.json (27 rows)

---

## Purpose

Define IonWave's SEO strategy with realistic expectations, proper E-E-A-T infrastructure, and a phased approach calibrated for a bootstrapped DTC supplement brand. SEO is the long game — it compounds over 12-24 months but produces little in the first 6.

**The honest framing**: SEO will NOT be IonWave's primary revenue driver for the first 12 months. Meta Ads will drive acquisition. But every month you delay starting SEO, you push out the compounding payoff. Start building from Month 1, even at minimal investment.

---

## 1. Why SEO Matters for IonWave (Specifically)

Danilo's overview listed generic SEO benefits. Here's the IonWave-specific case:

| Benefit | IonWave Context |
|---------|----------------|
| **Reduces blended CAC** | At $35-45 CAC from paid, even 10-15% organic traffic reduces blended CAC by $3-7. At scale, this is $3K-7K/month in saved ad spend. |
| **Captures high-intent search traffic** | People searching "electrolytes for fasting" or "best keto electrolytes" are ready to buy. Organic captures intent that paid can't. |
| **Builds brand authority** | E-E-A-T signals from quality content make your site more trustworthy to both Google AND customers. |
| **Creates competitive moat** | SEO authority compounds. Established content + backlinks are hard for competitors to replicate quickly. |
| **Diversifies from Meta dependency** | Meta CPMs rose 27% YoY. Organic traffic is insurance against paid channel volatility. |
| **Marine plasma = uncontested territory** | There is virtually NO SEO competition for "marine plasma electrolyte" terms. This is your keyword wedge. |

---

## 2. SEO Timeline Reality (New Domain, Supplement Space)

Danilo's timeline was directionally correct but lacked specifics. Here's the calibrated version:

| Timeframe | What Happens | Realistic Organic Traffic | Investment Focus |
|-----------|-------------|--------------------------|-----------------|
| **Month 1-3** | Google indexes site. Rankings: nowhere or page 5+. Brand terms only. | **50-200 visits/month** | Technical SEO setup, first blog posts, E-E-A-T infrastructure |
| **Month 4-6** | Long-tail articles appear on page 2-3. Site starts earning topical signals. | **200-800 visits/month** | Consistent publishing (1/week), initial link building |
| **Month 7-12** | Long-tail keywords hit page 1. Medium-tail on page 2. Content velocity compounds. | **800-3,000 visits/month** | Scale to 2/week, medium-tail keywords, podcast guesting |
| **Month 12-18** | Medium keywords reach page 1. Organic becomes meaningful traffic source. | **3,000-8,000 visits/month** | Target competitive keywords, digital PR |
| **Month 18-24** | Organic is #2 or #3 traffic source. Some competitive keywords on page 1. | **8,000-20,000 visits/month** | Content authority maintenance, topical clusters |

**The Google sandbox**: Google never confirmed it, but new domains consistently take 6-12 months to gain traction. This is not a penalty — it reflects the time needed for Google to build trust through crawl history, content quality evaluation, and backlink accumulation.

**Key acceleration levers**:
- PR mentions generating backlinks (LMNT's podcast sponsorships turbo-charged their SEO)
- Original research/data content that gets cited by other sites
- Founder podcast appearances generating show-note backlinks

---

## 3. E-E-A-T Infrastructure (Critical for YMYL)

### What is YMYL?

"Your Money or Your Life" — Google's category for content that could impact health, financial stability, or safety. Supplement websites are squarely YMYL. Content is held to a **higher standard** than non-YMYL sites.

### E-E-A-T Breakdown

| Signal | What It Means | IonWave Implementation |
|--------|-------------|----------------------|
| **Experience** | Author has first-hand experience with the topic | Founder-authored content, "In our testing...", real customer stories, product journey documentation |
| **Expertise** | Author has relevant credentials or deep knowledge | Named authors with bios, expert reviewer badge ("Reviewed by [Name], RD") |
| **Authoritativeness** | Site is recognized as an authority | Backlinks from health publications, citations from other sites, consistent topical content |
| **Trustworthiness** | Site is transparent and accurate | Clear About page, editorial policy, source citations, supplement disclaimers |

### Required E-E-A-T Pages (Build Before Publishing Content)

| Page | Priority | What It Contains |
|------|----------|-----------------|
| **About Us** | P0 | Founder story, team credentials, company mission, why marine plasma, photos |
| **Science / Research** | P0 | Marine plasma sourcing rationale, cited studies (PubMed links), formulation transparency |
| **Editorial Policy** | P1 | How content is created, fact-checking process, expert review disclosure |
| **Privacy Policy** | P0 | Required by law + Google trust signal |
| **Terms of Service** | P0 | Legal requirement |
| **Shipping & Returns** | P0 | Ecommerce trust signal |
| **Contact** | P1 | Real phone, email, physical address — trust signals |

### Author Bio Implementation on Shopify

Use Shopify metafields (free, built-in since 2022):

1. Create custom metafields for blog articles:
   - `author_name` (text)
   - `author_credentials` (text, e.g., "Sports Nutritionist, CSCS")
   - `author_bio` (rich text, 2-3 sentences)
   - `reviewer_name` (text)
   - `reviewer_credentials` (text)
   - `last_updated` (date)
   - `sources_count` (number)

2. Surface these in your article template via Liquid code
3. Add "Reviewed by [Name], [Credentials]" badge to article header

**Cost of expert review**: $50-150 per article from a freelance registered dietitian or sports nutritionist. Batch 3-5 articles for efficiency. This is one of the highest-ROI investments in SEO for a supplement brand.

### Supplement-Specific Brands That Rank Well (and Why)

| Brand | Organic Traffic | Key E-E-A-T Signal |
|-------|----------------|---------------------|
| **Examine.com** | 800K+ monthly | Researcher authors, dozens of citations per article, systematic evidence grading |
| **Legion Athletics** | ~500K monthly | Named RD authors, 20-50 citations per article, transparent formulation |
| **LMNT** | Growing rapidly | Science page with cited studies, advisor board with physicians, podcast-generated backlinks |
| **AG1 (Athletic Greens)** | Strong DA | Massive PR-generated backlinks, physician advisor board |

**IonWave's opportunity**: Marine plasma is a genuinely novel ingredient positioning. There is almost zero SEO competition for "marine plasma" terms. Build topical authority in this uncontested space first, then ladder into competitive terms.

---

## 4. SEO Strategy Pillars

### Pillar 1: Technical SEO (Month 1 — One-Time Setup)

See `technical_seo_checklist.md` for complete checklist. Key items:
- Site speed (Core Web Vitals target: 70+ mobile PageSpeed)
- Structured data (Product, Article, FAQ, Organization schema)
- Sitemap submitted to GSC
- Clean URL structure
- Shopify-specific issues addressed (duplicate /collections/ URLs)

### Pillar 2: On-Page SEO (Ongoing)

Every page and blog post must have:
- Unique title tag (<60 chars, include primary keyword)
- Unique meta description (<160 chars, include CTA)
- One H1 per page
- H2-H3 heading hierarchy
- Descriptive image alt text
- Internal links to/from related content (minimum 3 per blog post)
- Schema markup appropriate to content type

### Pillar 3: Content Strategy (Month 2+)

See `seo_content_strategy.md` for full pillar/cluster model. Summary:
- 5 content pillars: Hydration Science, Keto & Low-Carb, Athletic Performance, Natural Health, Product Comparisons
- Pillar pages (3,000-5,000 words) + supporting articles (1,500-2,500 words)
- Publishing cadence: 1/week (Month 1-3) → 2/week (Month 4-6) → 2-3/week (Month 7+)

### Pillar 4: Link Building (Month 3+)

See `seo_link_building.md` for full strategy. Summary:
- Expert quote platforms (Qwoted, Featured.com)
- Podcast guesting
- Original research/data content
- Guest posting on health publications
- Digital PR

### Pillar 5: Local SEO — NOT APPLICABLE

Danilo listed Local SEO as a pillar. **Skip this for IonWave.** Local SEO (Google Business Profile, local citations) is for businesses with a physical location serving local customers. IonWave is a national DTC brand. No Google Business Profile needed.

---

## 5. SEO Budget Allocation

### By Marketing Budget Tier

| Total Marketing Budget | SEO Allocation | What It Buys |
|----------------------|----------------|-------------|
| **$1K/month** | $200 (20%) = mostly your time | Free tools + $10-20 SEO app + founder writes 1 blog/week |
| **$2-3K/month** | $600-900 (30%) | Above + 2-3 expert reviews/month ($150-450) + freelance content assist |
| **$4-5K/month** | $1.6-2K (40%) | Above + freelance writer ($200-400/month) + basic link building outreach + Ahrefs Lite ($99/mo) |
| **$10K+/month** | $2-3K (20-30%) | Full content team, digital PR, comprehensive link building |

**The 60/40 principle for bootstrapped brands**: Spend 60-80% on paid (immediate revenue) and 20-40% on organic (compounding returns). Shift allocation toward organic as it proves out over 12-18 months.

### SEO ROI Projection

Conservative estimate for IonWave, assuming consistent effort:

| Month | Organic Sessions | CVR | Revenue from Organic | Cumulative SEO Investment |
|-------|-----------------|-----|---------------------|--------------------------|
| 6 | 500 | 2% | $590 | $1,800 |
| 12 | 2,500 | 2.5% | $3,688 | $4,200 |
| 18 | 6,000 | 3% | $10,620 | $7,200 |
| 24 | 15,000 | 3% | $26,550 | $10,800 |

Assumptions: $59 AOV, gradual CVR improvement as content quality and targeting improve. By Month 18-24, organic revenue should exceed cumulative SEO investment — after that, it's compounding returns.

**Conservative scenario** (1.5% blended CVR — more realistic for mixed informational + commercial traffic):

| Month | Organic Sessions | CVR | Revenue from Organic | Cumulative SEO Investment |
|-------|-----------------|-----|---------------------|--------------------------|
| 6 | 500 | 1.5% | $443 | $1,800 |
| 12 | 2,500 | 1.5% | $2,213 | $4,200 |
| 18 | 6,000 | 1.5% | $5,310 | $7,200 |
| 24 | 15,000 | 1.5% | $13,275 | $10,800 |

Even in the conservative scenario, organic revenue exceeds cumulative investment by Month 24. The base case assumes CVR improves as the keyword mix shifts from informational to commercial — verify this assumption against GA4 data after Month 6.

**ROI breakeven calibration** *(Merged from Session A dialogue upgrade U4)*: Content ROI breakeven for a new brand with no existing audience is realistically 10-14 months, not 8-10. The "equivalent paid traffic cost" (organic sessions × avg CPC) is a useful directional metric for justifying continued investment, but it's not real revenue — you can't deposit saved CPC. Real ROI = organic revenue (first-click attributed) ÷ content production cost.

**Organic traffic % target calibration** *(Merged from Session A dialogue upgrade U6)*: Month 12 organic traffic as % of total — **base case: 10-15%**, **aggressive case: 15-25%**. Most new DTC brands achieve 8-12% organic at Month 12. Reaching 15%+ requires consistently excellent execution across content, link building, and technical SEO. Even at 10%, the program is valuable: that's $0 marginal CAC traffic.

---

## 6. Success Metrics

### Monthly Tracking Dashboard

| Metric | Tool | Month 3 Target | Month 6 Target | Month 12 Target |
|--------|------|----------------|----------------|-----------------|
| Organic sessions | GA4 | 100+ | 500+ | 2,500+ |
| Indexed pages | GSC | 15+ | 30+ | 60+ |
| Keywords on page 1 | GSC | 2-5 (branded + ultra-long-tail) | 10-20 | 30-50 |
| Keywords on page 1-2 | GSC | 10-15 | 30-50 | 80-120 |
| Domain Rating | Ahrefs (free check) | 5-10 | 15-25 | 25-35 |
| Referring domains | GSC backlinks report | 10-20 | 30-50 | 80-150 |
| Blog posts published | Internal | 12 (1/week) | 24 | 52+ |
| Email subscribers from organic | GA4 events | 50-100 | 200-500 | 1,000-2,000 |
| Organic revenue | GA4 | $0-100 | $200-600 | $2,000-5,000 |

### Red Flags to Watch

| Signal | What It Means | Action |
|--------|-------------|--------|
| Organic traffic declining after initial growth | Possible algorithm update impact, thin content penalties | Audit content quality, check GSC for manual actions |
| Pages indexed < pages published | Crawl issues, noindex tags, thin content | Check GSC Coverage report, fix technical issues |
| High impressions, low CTR (<2%) | Title tags and meta descriptions not compelling | Rewrite meta data for top 10 impression pages |
| Domain Rating stagnant after 6 months | Link building isn't working | Increase outreach effort, try different tactics |
| No keywords on page 1 after 9 months | Content not matching search intent, or too competitive | Refocus on longer-tail keywords, improve content depth |

---

## 7. Intelligence Gaps

| Gap | Impact | How to Close | Priority |
|-----|--------|-------------|----------|
| No real keyword data (only Danilo estimates) | Keyword strategy may be targeting wrong terms | Subscribe to Ubersuggest ($29/mo) or use free Google Keyword Planner after launch | P1 — Month 1 |
| No competitor backlink analysis | Can't identify link building opportunities | Ahrefs free backlink checker for top 3 competitors. Full Ahrefs at $99/mo when budget allows | P2 — Month 3 |
| Unverified Shopify Core Web Vitals | May have speed issues affecting rankings | Run PageSpeed Insights audit immediately after theme selection | P0 — Pre-launch |
| No actual search volume for "marine plasma" terms | May be overestimating the keyword opportunity | Google Search Console will show real impression data after 1-2 months | P1 — Month 2 |
