# CRO Testing Framework & Compliance

**TUP**: M15 — Landing Pages & Conversion
**Sources**: Cross-cutting synthesis from all M15 tabs + research
**Cross-TUP**: M14 (Testing & Optimization), M9 (Ecommerce Infrastructure), M30 (Analytics & Reporting)

---

## 1. CRO Philosophy

> "Test architecture before elements. Test elements before copy. Test copy before design."

Conversion Rate Optimization is a systematic process of increasing the percentage of visitors who take a desired action. It is NOT:
- ❌ Changing button colors randomly
- ❌ A/B testing everything at once
- ❌ Copying what competitors do without testing
- ❌ Optimizing for clicks instead of revenue

CRO IS:
- ✅ Hypothesis-driven experimentation
- ✅ Prioritized by expected impact (10x architecture > 1x design)
- ✅ Statistically rigorous (proper sample sizes, significance thresholds)
- ✅ Revenue-focused (CAC and ROAS, not just CVR)

### Testing Impact Hierarchy

| Level | What You Test | Example | Expected Impact |
|-------|--------------|---------|:--------------:|
| **Architecture** | Which funnel shape? | LP vs PDP vs VSL vs Advertorial | **10x** |
| **Elements** | Which sections, in which order? | Social proof below hero vs after problem | **5x** |
| **Copy** | Which words? | "Try Risk-Free" vs "Shop Now" vs "Get Started" | **2x** |
| **Design** | Which visuals? | Green CTA vs orange CTA, product photo A vs B | **1x** |

**Implication**: Most teams spend 90% of effort on Level 4 (design tweaks) and 10% on Level 1 (architecture). This is backwards. The IonWave test plan inverts this — architecture testing first.

---

## 2. A/B Testing Protocol

### Statistical Requirements

| Parameter | Value | Why |
|-----------|-------|-----|
| **Significance threshold** | 95% (p < 0.05) | Industry standard for reliable results |
| **Minimum Detectable Effect (MDE)** | 10-20% | Realistic for architecture tests |
| **Sample size per variant** | ~50 conversions OR ~500 visitors (whichever comes first) | 80% statistical power |
| **Test duration** | 2-6 weeks minimum | Capture weekday/weekend variation |
| **Maximum concurrent tests** | 2 | Avoid interaction effects on low traffic |

### Common Mistakes (Avoid)

| Mistake | Why It's Bad | Fix |
|---------|-------------|-----|
| **Peeking** (checking results daily and stopping early) | Inflates false positive rate to 20-30% | Pre-commit to sample size; don't look until reached |
| **Too many variants** | Splits traffic too thin, never reaches significance | Max 2-3 variants per test |
| **Testing too small** | "Blue vs green button" — even if it wins, the lift is trivial | Test big things first (architecture, offers) |
| **Ignoring seasonality** | Tuesday traffic ≠ Saturday traffic | Run tests for full weeks, minimum 2 |
| **Declaring winners on CVR alone** | High CVR but low AOV = worse outcome | Primary metric: revenue per visitor (RPV) |
| **Not accounting for returning visitors** | Same person sees different variants across sessions | Use cookie-based assignment, exclude returning |

### Recommended A/B Testing Tools (2026)

| Tool | Price | Best For | Key Feature |
|------|:-----:|---------|------------|
| **VWO** | Free-$356/mo | IonWave recommended start | Free plan, SmartStats (Bayesian), visual editor |
| **Convert** | $99/mo | SMB alternative | Good Shopify integration, privacy-focused |
| **Zipify Split Testing** | Included with Zipify Pages | LP-specific testing | Native to LP builder |
| **Optimizely** | Enterprise pricing | Later stage | Full experimentation platform |

---

## 3. IonWave CRO Test Roadmap

### Month 1: Architecture Tests

| Week | Test | Hypothesis | Budget | Kill If | Promote If |
|------|------|-----------|--------|---------|-----------|
| W3 | LP (long-form) vs PDP (direct) | Cold traffic needs education before purchase | $500/variant | CVR < 1% | CVR > 2.5% |
| W3 | VSL vs Advertorial | Skeptical audience responds to authority OR editorial | $500/variant | Watch time < 30% / CTR < 5% | CVR > 2% |
| W4 | Top 2 winners head-to-head | Best architecture at scale | $750/variant | CAC > $60 | CAC < $40 |

### Month 2: Element Tests (within winning architecture)

| Test | Hypothesis | Priority |
|------|-----------|----------|
| Social proof placement (hero vs section 3) | Earlier social proof reduces bounce | P0 |
| Long LP vs short LP (hero + benefits + CTA only) | Shorter path = less drop-off | P1 |
| Comparison table position (section 5 vs section 9) | Competitor-aware traffic converts faster with early comparison | P1 |
| FAQ on LP vs FAQ on PDP only | FAQ on LP reduces PDP bounce | P2 |

### Month 3: Copy & Design Tests

| Test | Hypothesis | Priority |
|------|-----------|----------|
| Headline type (benefit vs question vs contrarian) | Different ICP segments respond to different hooks | P0 |
| CTA copy ("Try Risk-Free" vs "Start Your Subscription") | Risk-free reduces anxiety for first-time buyers | P1 |
| Hero image (product shot vs lifestyle vs science visual) | Lifestyle images create emotional connection | P1 |
| Guarantee phrasing ("30-day guarantee" vs "Full refund, no questions") | Specific language reduces anxiety more | P2 |

---

## 4. FTC & DSHEA Compliance Framework

### Supplement Advertising Requirements (2026)

This is non-negotiable. Supplement advertising is among the most heavily regulated consumer categories.

### Required Disclaimers

Every page selling a supplement must include:

> ***"These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."***

- Must appear in **boldface** (per DSHEA requirement)
- Must be proximate to any structure/function claim
- December 2025 FDA update: moving toward requiring disclaimer only once per label (not every panel), but advertising still requires clear and conspicuous placement

### Claim Types & Rules

| Claim Type | Example | Allowed? | Requirement |
|-----------|---------|:--------:|------------|
| **Structure/Function** | "Supports energy production" | ✅ | Substantiation + 30-day FDA notification + disclaimer |
| **Nutrient Content** | "Contains 78 minerals" | ✅ | Truthful and not misleading |
| **Health Claim** | "Reduces risk of heart disease" | ❌ | Requires FDA-approved health claim (very few exist) |
| **Disease Claim** | "Cures fatigue" / "Treats dehydration" | ❌ | Illegal for supplements. FDA enforcement. |
| **Implied Disease Claim** | "Doctor recommended for chronic fatigue" | ❌ | FTC treats implied claims same as explicit |

### IonWave Compliance Audit

| Claim in Danilo Copy | Status | Fix Required |
|---------------------|:------:|-------------|
| "78 Minerals" | ✅ OK | Nutrient content claim — must be verifiable by CoA |
| "98% Bioavailable" | ⚠️ RISK | Needs specific study citation or must be removed. "Highly bioavailable" with asterisk + source is safer. |
| "90% of Americans are deficient in at least one mineral" | ⚠️ RISK | Common but needs specific citation. USDA studies exist — cite the specific study. |
| "Sustained Energy" / "Faster Recovery" / "Mental Clarity" | ⚠️ CAUTION | Structure/function claims — allowed with substantiation + disclaimer. Must NOT imply treating a disease. |
| "Better Sleep" | ⚠️ CAUTION | Structure/function claim — allowed if substantiated. "Supports healthy sleep" is safer than "fixes insomnia." |
| "Human blood plasma is 98% identical to seawater" | ⚠️ RISK | Oversimplification of Quinton's research. Needs careful wording: "shares a similar mineral profile" is more defensible than "98% identical." |
| "10,000+ optimizers" | ❌ FAIL | Fictional pre-launch number. MUST be replaced with real data or removed entirely. |
| "127 reviews" / "4.8/5" | ❌ FAIL | Fictional reviews. FTC Consumer Review Rule: $53,088+ per violation for fake reviews. |
| Testimonials (Marcus T., Jennifer R., David K.) | ❌ FAIL | Fabricated testimonials. FTC prohibits this under any circumstances. Template only — must be replaced. |

### Testimonial Disclosure Rules (FTC Revised July 2023)

1. **Material connections** must be disclosed clearly and conspicuously
2. **Results claims** must include typical results disclosure (not just "results may vary")
3. Disclosures must be **"unavoidable"** — especially on social media (can't bury in fine print)
4. **Endorser must actually use the product** — no fictional personas
5. Before/after testimonials must be **truthful and representative** of typical results

### Testimonial Compliance Protocol (U4)

When collecting and displaying real customer testimonials:
1. **Obtain written permission** from every testimonial provider
2. **Verify claims** — if a customer says "my energy doubled," confirm they use the product consistently
3. **Include typical results disclosure**: "Individual results may vary. [X]% of customers in our survey reported [specific outcome]." — NOT just "results may vary"
4. **Disclose material connections**: If the reviewer received a free product, discount, or incentive, state it clearly
5. **No cherry-picking** — display a representative sample of reviews, including mid-range ones (4-star reviews build credibility)
6. **Date-stamp reviews** — fresh reviews matter more; stale 2-year-old reviews reduce trust

### FTC Negative Option Rule Compliance (U3 — CRITICAL)

Since January 2024, the FTC's revised negative option rule requires strict compliance for subscription-based products. This is the #1 enforcement priority for D2C supplements.

**Requirements:**
- ☐ **Clear disclosure** of ALL material subscription terms BEFORE obtaining billing info (price, frequency, how to cancel)
- ☐ **Simple cancellation** mechanism — at least as easy as signing up
- ☐ **Separate consent** for recurring charges (cannot be buried in general T&C acceptance)
- ☐ **Confirmation before charging** — send confirmation email/notification before first and each subsequent charge
- ☐ **FTC click-to-cancel rule (U16)**: Cancellation must be available through the SAME medium used to sign up. Online signup = online cancel. No "call to cancel."
- ☐ Cancel button must be as easy to find as subscribe button

**Non-compliance penalty**: FTC can pursue civil penalties + restitution. Emma Relief-style complaints about difficult cancellation trigger FTC investigation.

### Comparative Advertising Verification (U10)

When using comparison tables (IonWave vs LMNT vs multivitamin):
- ☐ Every data point is verifiable and truthful
- ☐ Specify WHICH competitor product (e.g., "LMNT Electrolyte Mix" not just "LMNT")
- ☐ No misleading omissions (if competitor has advantages, don't hide them)
- ☐ Cite sources for competitor data (their website, packaging, CoA)
- ☐ Update quarterly — competitor products change

### René Quinton Claim Compliance (U9)

The Quinton science narrative is a marketing asset but requires careful wording:
- ❌ **AVOID**: "Blood plasma is 98% identical to seawater"
- ✅ **USE**: "In 1897, René Quinton documented that human blood plasma shares a remarkably similar mineral profile with seawater at specific ocean depths"
- ❌ **AVOID**: Implying that drinking marine plasma heals medical conditions
- ✅ **USE**: Structure/function framing — "supports mineral balance" not "fixes deficiency"
- **Context**: Quinton Dispensaries operated under European medical device regulation, NOT US supplement law. Do not reference Quinton's clinical treatments in marketing.

### Guarantee Language (U21)

- ❌ **AVOID**: "30-Day Feel-the-Difference Guarantee" (implies guaranteed perceptible result)
- ✅ **USE**: "30-Day Money-Back Guarantee" with clear terms:
  - Full refund within 30 days of purchase
  - No questions asked
  - Product return NOT required (or if required, pre-paid return label provided)
  - Actually honor it — FTC tracks guarantee complaint patterns

### California Prop 65 Compliance (U15 — CRITICAL)

Marine plasma from ocean water may contain trace amounts of substances on California's Prop 65 list (arsenic, cadmium, lead, mercury) — even at levels safe for consumption.

**Required actions:**
1. ☐ Obtain Certificate of Analysis (CoA) testing for ALL Prop 65 listed substances
2. ☐ Compare test results against Prop 65 MADL/NSRL thresholds
3. ☐ If ANY substance exceeds Prop 65 threshold: add California-specific product page disclaimer
4. ☐ Legal review before selling in California (consider Prop 65 counsel)
5. ☐ Cross-reference M24 (quality control, supplier CoA requirements)

> **Prop 65 exposure**: A single Prop 65 lawsuit (typically brought by bounty-hunter plaintiffs, not the state) can result in $2,500/day penalties plus settlement. For supplement brands, this is a routine risk. Budget $3-5K for Prop 65 compliance review in M25.

### Annual Compliance Audit (U24)

FTC enforcement changes yearly. At minimum:
- **Quarterly**: Review all page copy against current FTC guidance
- **Annually**: Full legal review by FTC-experienced attorney ($2-5K, budget in M25)
- **On trigger**: Any FTC warning letter, competitor enforcement action, or new rule → immediate review
- **Track**: FTC Health Products Compliance Guidance updates, NAD decisions, competitor enforcement actions

### Required Page Elements

Every IonWave product/landing page must include:
- ☐ DSHEA disclaimer (boldface, near claims)
- ☐ FDA disclaimer ("not intended to diagnose, treat, cure, or prevent any disease")
- ☐ Real testimonials only (replace all fictional ones before launch)
- ☐ Material connection disclosure on all endorsements
- ☐ Typical results disclosure on testimonials (U4)
- ☐ Privacy policy link
- ☐ Terms of service link
- ☐ Clear subscription terms with separate consent (U3)
- ☐ Subscription cancellation via same medium as signup (U16)
- ☐ Physical address (per CAN-SPAM, required if email collection)
- ☐ Prop 65 warning if applicable (U15)
- ☐ Comparison data verification (U10)
- ☐ Compliant guarantee language (U21)

---

## 5. CRO Metrics Dashboard

Track these metrics weekly (integrate with M30 analytics):

### Funnel Metrics

| Metric | How to Calculate | Benchmark | Tool |
|--------|-----------------|:---------:|------|
| **CVR (Overall)** | Purchases / Unique Visitors | 2-3% | GA4, Triple Whale |
| **ATC Rate** | Add-to-Carts / PDP Views | 8-12% | Shopify Analytics |
| **Cart-to-Purchase** | Purchases / Cart Views | 45-55% | Shopify Analytics |
| **LP→PDP Rate** | PDP Views from LP / LP Views | 20-35% | GA4 |
| **Bounce Rate** | Single-page sessions / Total sessions | 50-65% | GA4 |
| **Scroll Depth** | Average scroll % | 40-60% | Hotjar / Lucky Orange |
| **Time on Page** | Average engagement time | 1-2 min | GA4 |

### Revenue Metrics

| Metric | How to Calculate | Benchmark | Tool |
|--------|-----------------|:---------:|------|
| **RPV (Revenue Per Visitor)** | Total Revenue / Unique Visitors | $1-3 | Triple Whale |
| **AOV** | Revenue / Orders | $47-75 | Shopify |
| **CAC** | Ad Spend / New Customers | $25-50 | Triple Whale |
| **ROAS** | Revenue / Ad Spend | 2-3x | Triple Whale |
| **Subscription Rate** | Subscription Orders / Total Orders | 30-50% | Recharge |

### Heatmap & Session Recording (U11)

Install heatmap/session recording tool from Day 1:
- **Start with**: Microsoft Clarity (FREE) — heatmaps + session recordings, no cost
- **Upgrade to**: Lucky Orange ($10/mo) when you need checkout-specific data (native Shopify app with automatic checkout tracking — Hotjar can't track Shopify checkout due to cross-domain issues)
- Track: click maps, scroll maps, session recordings
- Review: 10 sessions/week to identify friction points qualitatively
- Use alongside quantitative A/B test data for "why" behind numbers

### Server-Side Tracking (U22)

Client-side analytics (GA4 with gtag.js) misses 15-25% of conversions due to ad blockers, ITP, and tracking prevention. For CRO, accurate data is non-negotiable.

**Required setup:**
1. ☐ Shopify server-side pixel (native, free) — tracks checkout events accurately
2. ☐ Meta Conversions API (CAPI) — server-side event matching for accurate Meta attribution
3. ☐ Consider Elevar ($150/mo) for unified server-side tracking across all channels
4. ☐ Cross-reference M30 analytics setup for full tracking architecture

> Without server-side tracking, you're optimizing against incomplete data. A "winning" A/B test variant might actually be losing if the tracking misses 20% of conversions from the other variant.

---

## 6. Post-Launch CRO Sprint Calendar

| Week | Focus | Actions | Decision |
|------|-------|---------|----------|
| W1 | **Baseline** | Launch PDP + LP. Install analytics. Record heatmaps. | Establish baseline metrics |
| W2 | **Diagnose** | Review heatmaps, identify highest-friction points | Prioritize fixes |
| W3 | **Architecture Test** | Test LP vs PDP (cold traffic) | Which funnel shape wins? |
| W4 | **Validate** | Scale winner, test runner-up architecture | Confirm with more data |
| W5-6 | **Element Tests** | Social proof placement, LP length, comparison position | Within-funnel optimization |
| W7-8 | **Copy Tests** | Headlines, CTAs, guarantee phrasing | Fine-tuning |
| W9-10 | **Checkout** | Checkout flow, trust badges, express checkout | Reduce abandonment |
| W11-12 | **AOV** | Order bumps, post-purchase upsells, bundle offers | Increase revenue per customer |

### Modular LP Design for Rapid Variant Creation (U13)

Ad creative fatigues every 2-4 weeks in supplement D2C. The LP must support rapid variant creation:

- **Section-level modularity**: Each section (hero, problem, solution, benefits, proof, FAQ, CTA) should be independently swappable
- **LP builder must support**: Section cloning, drag-and-drop reordering, variant duplication
- **Zipify Pages strength**: Section-level templates that can be rearranged without rebuilding
- **Naming convention**: `LP-[hook]-[variant]-[date]` (e.g., `LP-78minerals-v3-20260301`)
- **Version control**: Screenshot + metrics before any section swap

### CRO Wins Documentation Protocol (U14)

Every successful test creates institutional knowledge. Document:

| Field | Content |
|-------|---------|
| **Test ID** | Sequential (CRO-001, CRO-002, ...) |
| **Date** | Start and end date |
| **Hypothesis** | "We believe [change] will [outcome] because [reason]" |
| **Variant** | What was changed (with screenshots) |
| **Result** | Winning variant, confidence %, CVR lift |
| **Revenue Impact** | Estimated annual revenue impact at current traffic |
| **Implementation** | Date implemented, who implemented |
| **Learning** | What this tells us about our audience |

Store in a shared document (Google Sheet or Notion). Review quarterly to identify patterns.

---

## 8. Cross-TUP Alignment

| TUP | CRO Framework Alignment |
|-----|------------------------|
| M9 | Shopify analytics setup, page speed monitoring, checkout configuration |
| M10 | Pricing tests are CRO tests — offer architecture directly impacts CVR |
| M14 | Creative testing feeds CRO (winning ad hooks become LP headlines) |
| M17 | Email recovery (abandoned cart, browse abandon) is part of the conversion system |
| M19 | Customer lifecycle determines which CRO path matters (new vs returning vs VIP) |
| M24 | Shipping promises on pages must match fulfillment reality |
| M25 | Financial model depends on CVR and AOV assumptions — CRO changes the math |
| M30 | MBR includes funnel metrics; CRO results feed monthly reporting |
