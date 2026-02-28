# OpKit: Landing Pages & Conversion (OK-M15-001)

**Version**: 1.0.0
**Source TUP**: M15 — Landing Pages & Conversion
**Quality Grade**: 8.2/10
**Protocol**: TWP-001 v2.0.0

---

## 1. Purpose

This OpKit provides a reusable framework for building, testing, and optimizing landing pages, product pages, checkout flows, and conversion funnels for D2C e-commerce brands. It covers: conversion psychology, copy frameworks, headline formulas, funnel architecture selection, checkout optimization, CRO testing methodology, and compliance (FTC/DSHEA for supplements, Prop 65, subscription rules).

## 2. Instructions (12 Steps)

### Phase 1: Foundation (Week 0)

**Step 1: Define your conversion equation**
- Map your specific D-F-A (Desire, Friction, Anxiety) for each audience segment
- List every anxiety your ICP carries about your product category
- For each anxiety, identify the page element that addresses it
- Rule: Reducing one anxiety often beats increasing ten desires

**Step 2: Build your page architecture**
- Select funnel architecture(s) from the 8-architecture menu (A through H)
- Match architectures to audience temperatures (hot/warm/cold)
- For complex/new products: plan LP or hybrid (H) for cold traffic
- For established products: direct PDP (A) for warm/retargeting
- Priority: Test architecture BEFORE testing copy

**Step 3: Compliance foundation**
- Identify all regulatory requirements for your product category
- For supplements: FTC substantiation, DSHEA disclaimer, Prop 65 testing
- For subscriptions: FTC negative option rule, click-to-cancel compliance
- For testimonials: Material connection disclosure, typical results requirement
- Get legal review BEFORE launch — not after enforcement

### Phase 2: Build (Weeks 1-2)

**Step 4: Write your copy library**
- Generate 10+ headline variants using the formula library (17 types)
- Write section copy for each page section (hero, problem, solution, benefits, proof, FAQ, CTA)
- Create comparison tables (include "status quo" column)
- Write FAQ answers that reduce anxiety AND increase desire
- Keep all copy at 5th-7th grade reading level

**Step 5: Build your product page (PDP)**
- This is your Day 1 must-have — warm traffic needs a PDP
- Subscription-first display (pre-selected, toggle > dropdown)
- Trust badges, review widget, FAQ section
- Express checkout (Shop Pay priority)
- Mobile-optimized (60-70% of traffic is mobile)

**Step 6: Build your landing page(s)**
- One long-form LP for cold traffic education
- Modular section design for rapid variant creation
- Follow optimal page flow: Hero → Social Proof → Problem → Solution → Benefits → How It Works → Deep Proof → FAQ → Final CTA → Guarantee
- Clean URL structure (/lp/[hook-name])

### Phase 3: Optimize Checkout (Week 2-3)

**Step 7: Implement checkout optimization**
- Guest checkout enabled
- Express checkout (Shop Pay, Apple Pay, PayPal)
- Trust badges visible at checkout
- Shipping costs shown BEFORE checkout page
- Order bump (complementary product, one-click add)

**Step 8: Build post-purchase flow**
- Post-purchase upsell (one-click, no re-entering payment)
- Thank you page optimization (confirmation + referral + NPS)
- Email nurture sequence trigger (cross-reference email lifecycle TUP)

### Phase 4: Test (Weeks 3-8)

**Step 9: Run architecture tests**
- Test 2-4 funnel architectures simultaneously
- Equal budget per variant
- Minimum 50 conversions per variant for 80% confidence
- Use pessimistic rate assumptions for budget planning
- Kill criteria defined per architecture type

**Step 10: Run element and copy tests**
- Only AFTER winning architecture is identified
- Test elements (section order, placement) before copy (headlines, CTAs)
- A/B test with proper statistical rigor (95% significance, 2+ week duration)
- Track revenue per visitor (RPV), not just CVR

### Phase 5: Scale & Maintain (Ongoing)

**Step 11: Scale winning funnels**
- 70% budget to primary funnel, 30% to secondary
- Monitor creative fatigue (2-4 week cycles for supplement ads)
- Create new LP variants using modular section swaps
- Document all test wins (CRO wins protocol)

**Step 12: Compliance maintenance**
- Quarterly copy review against current FTC guidance
- Annual full legal review ($2-5K)
- Replace placeholder testimonials with real ones as customers arrive
- Monitor Prop 65 compliance for new batches
- Track subscription complaint patterns (early warning for FTC issues)

## 3. Grading Rubric

| Grade | Criteria |
|-------|---------|
| **A (9-10)** | All funnel architectures tested. PDP + LP + checkout fully optimized. Compliance fully cleared (legal review, Prop 65 CoA, FTC disclosures). Server-side tracking. CRO wins documented. Subscription rate > 40%. |
| **B (7-8.9)** | PDP + LP live and optimized. Checkout optimized with Shop Pay. Compliance framework in place but not fully attorney-reviewed. A/B testing active. Subscription pre-selected. Post-purchase upsell active. |
| **C (5-6.9)** | PDP live with basic optimization. LP exists but not tested against alternatives. Checkout has basic trust signals. Compliance disclaimers present but not comprehensively audited. No A/B testing yet. |
| **D (3-4.9)** | PDP live but not optimized. No landing page. No checkout optimization. Compliance disclaimers missing or incomplete. No testing infrastructure. |
| **F (<3)** | Default Shopify theme with no conversion optimization. No compliance review. Fictional testimonials live. No analytics beyond Shopify defaults. |

## 4. Scaffold (5 Files)

1. `landing_page_psychology.md` — Conversion equation, 5-second test, page flow, visual hierarchy, psychological elements, mobile optimization, page speed budget
2. `copy_and_headlines.md` — 17 headline formulas, section templates, IonWave LP copy reference, PDP copy reference, copy testing protocol
3. `checkout_optimization.md` — Cart abandonment analysis, checkout checklist, recovery system, AOV boosters, subscription-first design, post-purchase optimization
4. `funnel_architecture.md` — 8 funnel architectures, testing framework, build requirements, traffic routing, Emma Relief reference, VSL architecture
5. `cro_testing_framework.md` — Testing methodology, FTC/DSHEA compliance, Prop 65, subscription rules, metrics dashboard, sprint calendar

## 5. IonWave Graded Example

**Grade: 8.2/10 (B+)**

Strengths:
- Comprehensive funnel architecture menu (8 types) with testing framework
- Strong compliance framework (FTC, DSHEA, Prop 65, negative option rule)
- Expert dialogue produced 25 upgrades, 23 applied (3 critical)
- Conversion psychology grounded in research (conversion equation, anxiety mapping)
- Practical checkout optimization with specific tool recommendations
- CRO testing methodology with statistical rigor

Gaps (-1.8):
- Actual landing page not yet built — all content is framework/template (-0.4)
- No attorney review completed yet (-0.4)
- Prop 65 CoA testing not yet done (-0.3)
- VSL script not written, authority figure not identified (-0.3)
- All testimonials still fictional — must be replaced post-launch (-0.2)
- Creative fatigue response system noted but not fully architected (-0.2)

## 6. Adaptation Guide

### For Non-Supplement D2C (Fashion, Beauty, Home)
- Skip DSHEA compliance section
- Keep FTC testimonial and negative option rules (apply to all subscriptions)
- Modify anxiety map for your category (fashion: fit/size/return concerns)
- Comparison table structure works for any product category
- Checkout optimization is universal — apply as-is

### For B2B / SaaS
- Replace PDP with pricing page
- Replace checkout optimization with demo/trial signup optimization
- VSL → Demo video or webinar recording
- Social proof → Case studies, logos, metrics
- Subscription compliance → contract/billing compliance
- Mobile-first may not apply (B2B often desktop-heavy)

### For High-Ticket Products ($200+)
- VSL funnel becomes primary (not secondary)
- Longer education required — advertorial + VSL + sales page
- Quiz funnel for lead capture before purchase
- Phone/chat CTA alongside online purchase
- Installment options more important (Afterpay, Affirm, Klarna)

### For Multi-SKU Brands
- Quiz funnel becomes P1 priority (personalization drives conversion)
- PDP template per product with shared section library
- Cross-sell becomes primary AOV lever (not bundle)
- LP per product category, not per SKU
- Comparison table: your products vs each other (help them choose)

## 7. Universal Principles

1. **Conversion = Desire − Friction − Anxiety** — Optimize all three, not just desire
2. **Test architecture before copy** — Finding the right funnel shape is 10x more impactful than the right headline
3. **Subscription rate is the most valuable CRO metric** — 3-4x LTV difference between subscribers and one-time buyers
4. **Page speed is a conversion lever** — Every second of delay costs ~7% conversion
5. **Compliance is not optional** — FTC enforcement is aggressive in health products; budget for legal review
6. **Design for exits, not just entrances** — Easy cancellation builds trust and reduces chargeback/complaint risk
7. **Server-side tracking or you're guessing** — Client-side analytics miss 15-25% of conversions
8. **Modular pages beat static pages** — Creative fatigues every 2-4 weeks; your LP must support rapid iteration
