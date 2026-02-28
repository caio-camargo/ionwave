# Funnel Architecture & Testing Framework

**TUP**: M15 — Landing Pages & Conversion
**Sources**: Tabs 400 (All Pages & Funnels), 401 (Funnel), 402 (Funnel Architecture), 403 (Ref Funnel Anatomy)
**Cross-TUP**: M14 (Testing & Optimization), M9 (Ecommerce Infrastructure), M17 (Email), M19 (Customer Lifecycle), M28 (Market Expansion — channel strategy)

---

## 1. IonWave Site Map

| Page | URL | Purpose | Traffic Source |
|------|-----|---------|--------------|
| Homepage | ionwave.co | Brand story, product intro, social proof | Direct, organic, referral |
| Product Page (PDP) | /products/marine-plasma | Full product detail, purchase | Retargeting, brand search, warm traffic |
| Landing Page — Hook 1 | /lp/78-minerals | Long-form, comparison focused | Cold Meta ads (mineral deficiency angle) |
| Landing Page — Hook 2 | /lp/ocean-body | Story-driven, science focused | Cold Meta ads (science/ocean angle) |
| Cart | /cart | Upsell, urgency, trust badges | Internal (after ATC) |
| Checkout | /checkout | Streamlined purchase, trust signals | Internal (after cart) |
| Thank You | /thank-you | Order confirmation, referral program, post-purchase upsell | Internal (after purchase) |
| Quiz (Phase 2) | /quiz | Lead capture, personalization | Cold traffic, email |

### Page Performance Tracking Template

| Page | Traffic | Bounce Rate | Time on Page | CVR | Revenue | Notes |
|------|---------|-------------|--------------|-----|---------|-------|
| Homepage | — | — | — | — | — | |
| Product Page | — | — | — | — | — | |
| Landing Page 1 | — | — | — | — | — | |
| Landing Page 2 | — | — | — | — | — | |
| Cart | — | — | — | — | — | |
| Checkout | — | — | — | — | — | |
| Thank You | — | — | — | — | — | |

---

## 2. Funnel Architectures

Eight distinct funnel shapes, each optimized for a different traffic temperature and audience type.

### Architecture Comparison

| ID | Architecture | Flow | Best For | Expected CVR | Pros | Cons |
|----|-------------|------|----------|:------------:|------|------|
| **A** | Direct to PDP | Ad → PDP → Checkout | Warm traffic, retargeting, brand-aware | 2-4% | Shortest path, lowest friction | No education, ad must do heavy lifting |
| **B** | Landing Page | Ad → LP → PDP → Checkout | Cold traffic, complex products | 1.5-3% | More education, builds trust, email capture | Extra step = drop-off |
| **C** | VSL Funnel | Ad → VSL Page → Checkout | High-ticket, needs explanation | 1-2.5% | Deep education, qualifies buyers, higher AOV | Long watch = drop-off, production cost |
| **D** | Advertorial | Ad → Advertorial → LP/PDP → Checkout | Skeptical audience, health claims | 0.8-2% | Feels like content, builds credibility | Two steps before product, compliance risk |
| **E** | Quiz Funnel | Ad → Quiz → Personalized Rec → Checkout | Multiple SKUs, personalization | 1-2% | High engagement, email capture, personalized | Complex to build, need multiple outcomes |
| **F** | Listicle/Review | Ad → "Top 5 Electrolytes" → PDP → Checkout | Comparison shoppers, SEO | 1-2.5% | Social proof, positions vs competitors | Must rank yourself #1 credibly |
| **G** | Direct Checkout | Ad → Checkout (1-click) | Impulse, retargeting, very warm | 3-5% | Maximum conversion, zero friction | No education, high refund risk |
| **H** | LP+VSL Hybrid (U1) | Ad → Short LP (problem + proof) → Embedded VSL → Checkout | Cold traffic, mid-price products | 1.5-3% | Combines education + authority, caters to readers AND watchers | More complex build, two content types |

> **U1 Note (CRO Director)**: Pure LP or pure VSL funnels are becoming rare in 2026. Best performers run hybrid pages — a short LP section (problem agitation + social proof) with an embedded 3-5 minute VSL, then checkout below. This catches both readers (who skip the video) and watchers (who skip the text).

### IonWave Architecture Priority

| Priority | Architecture | Why | When |
|----------|-------------|-----|------|
| **P0** | B: Landing Page | Marine plasma needs education — cold traffic won't buy on PDP alone | Day 1 |
| **P0** | A: Direct PDP | For retargeting, brand search, warm audiences | Day 1 |
| **P1** | H: LP+VSL Hybrid (U1) | Combines education + authority for cold traffic at mid-price ($47-59) | Week 2-3 |
| **P1** | D: Advertorial | Supplement buyers are skeptical — editorial style builds trust | Week 2-3 |
| **P2** | C: VSL (short-form, U19) | 3-5 min video (not 30 min) — appropriate for $47-59 price point | Month 2 |
| **P3** | E: Quiz (reframed, U18) | Not product recommendation (single SKU) — instead: lead capture + personalized education ("What's depleting your minerals?") → email capture → recommendation → purchase | Month 3+ |

---

## 3. Primary Funnel Flow (IonWave Day 1)

```
TRAFFIC (Meta primary)
    |
    v
ADS (hooks: mineral deficiency, ocean science, competitor comparison, "just seawater?" objection)
    |
    ├── Cold traffic ──────────> LANDING PAGE (long-form: problem > solution > proof > offer > CTA)
    |                                |
    |                                v
    |                           PRODUCT PAGE (subscription default, one-time option)
    |                                |
    ├── Warm/retargeting ──────> PRODUCT PAGE (direct)
    |                                |
    v                                v
                               CART (order bump: add second box 10-15% off)
                                    |
                                    v
                               CHECKOUT (Shop Pay priority, trust signals, subscription pre-selected)
                                    |
                                    v
                               POST-PURCHASE UPSELL (3-month commitment, complementary product)
                                    |
                                    v
                               THANK YOU (order confirm, referral program link, NPS pre-seed)
                                    |
                                    v
                               EMAIL NURTURE (M17 post-purchase sequence → subscription retention → referral)
```

### Funnel Metrics by Stage

| Stage | Target Volume (per 1K impressions) | Target Rate | Diagnostic If Below |
|-------|:----------------------------------:|:-----------:|-------------------|
| Ad Impressions | 1,000 | 100% | — |
| Ad Clicks | 15 | 1.5% CTR | Hook not working → test new creative |
| LP/PDP Visitors | 15 | 100% of clicks | Page load issue → check speed |
| Add to Cart | 2.25 | 15% ATC | Offer not resonating → test pricing/copy |
| Checkout Start | 1.35 | 60% of ATC | Friction → check shipping costs, trust signals |
| Purchase | 0.95 | 70% checkout completion | Checkout friction → simplify, add Shop Pay |
| Subscription | 0.38 | 40% of purchases | Subscription UX → check toggle visibility |

> **At $35 CAC and $47 subscription AOV**: 1 order per ~1,050 impressions. Need ~1,050,000 impressions/month for 1,000 customers. At $10 CPM = $10,500/month ad spend for 1,000 customers.

### Sensitivity Analysis (U2)

The metrics above are optimistic for a new, unknown brand. First 4-8 weeks will likely see lower performance:

| Scenario | CTR | ATC Rate | Checkout Completion | Orders per 1K Impressions | CAC at $10 CPM | Test Budget (50 orders/variant) |
|----------|:---:|:--------:|:------------------:|:-------------------------:|:--------------:|:-----------------------------:|
| **Pessimistic** (Week 1-2) | 0.8% | 8% | 50% | 0.32 | $31 | $1,550/variant |
| **Realistic** (Week 3-6) | 1.2% | 12% | 60% | 0.86 | $12 | $580/variant |
| **Optimistic** (Week 8+) | 1.5% | 15% | 70% | 1.58 | $6 | $320/variant |

**Implication**: At pessimistic rates, architecture testing budget should be ~$6,200 (4 variants × $1,550), not $4,000. Plan for the pessimistic case.

---

## 4. Traffic Routing by Audience Temperature

Different audiences need different funnels:

| Audience | Temperature | Recommended Funnel | Why |
|----------|:----------:|-------------------|-----|
| Brand search ("IonWave") | 🔴 Hot | Direct PDP or checkout | They know what they want |
| Retargeting (visited, no purchase) | 🟠 Warm | Direct PDP + urgency/social proof | Reminder, not education |
| Retargeting (cart abandoners) | 🟠 Warm | Direct checkout + discount (via email/SMS) | Remove final friction |
| LAL of purchasers | 🟡 Lukewarm | Landing page | Similar profiles but need some education |
| Interest targeting (biohackers, keto) | 🔵 Cold | Landing page or advertorial | Need to build awareness + trust |
| Broad targeting | 🔵 Cold | VSL or advertorial | Need maximum education before purchase |
| Competitor targeting (LMNT fans) | 🔵 Cold | Listicle/comparison page | Position against the alternative they know |

---

## 5. Funnel Testing Framework

### Philosophy
> "Test radically different approaches, not just button colors. Find the winning funnel **shape** first."

Testing hierarchy (impact descending):
1. **Architecture test** (which funnel shape?) — 10x impact
2. **Element test** (which sections in which order?) — 5x impact
3. **Copy test** (which headline/CTA?) — 2x impact
4. **Design test** (colors, images, layout) — 1x impact

### IonWave Funnel Test Plan

| Phase | Week | Test | Budget | Success Metric | Decision |
|-------|------|------|--------|---------------|----------|
| **1: Architecture** | W3 | A: Direct PDP vs B: Landing Page | $500 each | CVR, CAC | Winner gets 70% of Phase 2 budget |
| **1: Architecture** | W3 | C: VSL vs D: Advertorial | $500 each | CVR, CAC, AOV | Winner competes with A/B winner |
| **2: Validate** | W4 | Top 2 architectures head-to-head | $750 each | CVR, CAC, ROAS | Pick primary funnel |
| **3: Optimize** | W5-6 | A/B test within winning architecture | $1,500 total | CVR lift | Headline, CTA, social proof, layout |
| **4: Scale** | W7+ | Scale winner, test secondary funnel | 70/30 split | Blended ROAS | Primary + backup funnel |

### Kill Criteria by Architecture

| Architecture | Primary Metric | Kill If | Minimum Data |
|-------------|---------------|---------|-------------|
| Direct PDP | CVR | < 1.5% | 200+ visitors |
| Landing Page | LP→PDP rate + CVR | LP→PDP < 20% | 200+ LP visitors |
| VSL | Watch time + CVR | Avg watch < 30% | 100+ plays |
| Advertorial | Read time + CTR to LP | CTR to LP < 5% | 200+ readers |
| Quiz | Completion rate + CVR | Completion < 40% | 100+ starts |

### Winner Criteria
1. **Primary**: Lowest CAC at 100+ conversions
2. **Secondary**: Highest AOV (if CAC is within 10%)
3. **Tertiary**: Scalability (can it handle 10x traffic?)

> **Statistical note**: Need ~50 conversions per variant for 80% confidence. At $35 CAC, that's ~$1,750 spend per funnel to validate. Total Phase 1 budget: ~$4,000.

---

## 6. Build Requirements

| Asset | Description | Build Time | Cost | Priority |
|-------|------------|:----------:|:----:|----------|
| Product Page (PDP) | Shopify product page, optimized copy, reviews widget | 1-2 days | $0 | P0 — Day 1 |
| Landing Page v1 | Long-form LP per copy template | 2-3 days | $0-200 | P0 — Day 1 |
| Landing Page v2 | Short-form LP (hero + benefits + CTA only) | 1 day | $0 | P1 — Week 2 |
| VSL Page | Video sales letter + checkout below | 3-5 days | $500-1,500 | P1 — Week 2 |
| Advertorial | Editorial-style article ("I tried marine plasma...") | 2-3 days | $0-300 | P2 — Week 3 |
| Quiz Funnel | Octane/Typeform quiz → personalized recommendation | 3-5 days | $50-200 | P3 — Month 2 |
| Listicle | "Top 5 Electrolytes for Biohackers" comparison | 1-2 days | $0 | P3 — Month 2 |

### Landing Page Builder Recommendation

| Tool | Price | A/B Testing | Best For |
|------|:-----:|:-----------:|---------|
| **Zipify Pages** | $19-99/mo | ✓ Built-in | IonWave primary choice — templates tested on $180M store |
| Shogun | $39-299/mo | ✓ Robust | More advanced testing but higher price |
| PageFly | Free-$99/mo | Limited | Budget alternative for early stages |
| Replo | $99-499/mo | ✓ Advanced | Analytics-driven enterprise optimization |

**Recommendation**: Start with Zipify Pages ($19/mo) — purpose-built for D2C funnels, includes split testing, and templates are from an actual supplement brand's successful pages.

---

## 7. Emma Relief Reference Funnel

Emma Relief (by Konscious) is a supplement brand doing ~$4M/year with a VSL-centric funnel. This is the benchmark Danilo identified for IonWave to study.

### Emma Relief Funnel Stages

| Stage | What Emma Does | IonWave Must Do | Build Status |
|-------|---------------|-----------------|:------------:|
| **1. Meta Ad** | Short-form video, multiple creatives, authority + UGC + curiosity hooks | Same: short-form Meta ads, hook variants, per M14 creative testing | Skeleton |
| **2. Advertorial** | Editorial-style page (looks like health article). Educates on problem before selling. | Advertorial on electrolyte science, hydration myths. Bridge between ad and LP/VSL. | Not started |
| **3. VSL** | Dr. Gina Sam 30-min VSL. Doctor-authority. "7 Second Morning Ritual" hook. Problem → Failed Solutions → Mechanism → Product → Offer → Urgency. | Authority figure + 10-15 min VSL (shorter for electrolytes vs gut health). 12-block VSL structure. | Not started |
| **4. Sales Page** | Below VSL: long-form with ingredients, studies, testimonials, FAQ. Multi-bottle discounts. 90-day guarantee. Same-page checkout. | Same: sales page below VSL. Tiered pricing. 30-day guarantee. Shopify checkout. | Not started |
| **5. Upsell** | Post-purchase upsell to additional products. One-click. AOV from ~$47 → ~$126. | Post-purchase upsell: bundle commitment, complementary product. Target 2x AOV lift. | Not started |
| **6. Email/Retention** | Post-purchase → replenishment → cross-sell → subscription → winback. | Per M17 flows. Klaviyo. | Per M17 |
| **7. Retargeting** | Stage-specific retargeting creative (visitors, abandoners, past purchasers). | Per M19 lifecycle stages + M14 creative. | Not started |

### Emma Relief Lessons (and Cautions)

**What to replicate:**
- Multi-funnel architecture (not just one path)
- VSL as education tool for skeptical audiences
- Authority positioning (doctor/expert figure)
- Aggressive creative testing (259+ ad creatives in library)

**What to avoid:**
- Aggressive upsell practices (BBB F rating, customer complaints about billing)
- Overpromising (their health claims are aggressive — FTC risk)
- Customer trust erosion (complaints about subscription cancellation difficulty)
- IonWave should be trustworthy-first, not aggressive-first

---

## 8. VSL Architecture (If Tested)

Should IonWave test a VSL in Phase 1-2, here is the recommended structure:

### 10-15 Minute VSL for Marine Plasma

| Block | Time | Content | Psychology |
|-------|:----:|---------|-----------|
| 1. Hook | 0:00-0:30 | "What if everything you know about hydration is wrong?" | Stop the scroll, create curiosity |
| 2. Problem | 0:30-2:00 | Mineral depletion crisis (soil, water, modern diet) | Agitate — they didn't know they had this problem |
| 3. Failed Solutions | 2:00-3:30 | Synthetic supplements, sugar electrolytes, pills | "Maybe you've tried..." — validate their frustration |
| 4. Discovery | 3:30-5:00 | René Quinton, blood plasma = seawater, 1897 research | Authority through science story |
| 5. Mechanism | 5:00-7:00 | How ionic minerals work vs synthetic. 78 minerals, bioavailability | "Here's WHY it works" |
| 6. Product Reveal | 7:00-8:00 | IonWave Marine Plasma — sourcing, testing, format | Product as the logical conclusion |
| 7. Social Proof | 8:00-10:00 | Real testimonials (video if possible) + results | "People like you have tried this and..." |
| 8. Offer | 10:00-11:00 | Pricing tiers, subscription, bundle | Make it easy to say yes |
| 9. Guarantee | 11:00-12:00 | 30-day money-back, no questions asked | Remove final risk |
| 10. CTA | 12:00-end | "Click the button below" + urgency element | Direct action instruction |

> **FTC NOTE**: Every claim in the VSL is subject to FTC scrutiny. Testimonials must be real. Health claims must be substantiated. "Results may vary" is not a safe harbor. The 2022 FTC Health Products Compliance Guidance applies to video content.

---

## 9. Cross-TUP Alignment

| TUP | Funnel Architecture Alignment |
|-----|------------------------------|
| M9 | Shopify store is the PDP; LP builder is a Shopify app; checkout is Shopify native |
| M10 | Pricing tiers and offer structure power the conversion point at every funnel endpoint |
| M14 | Creative testing protocol determines which ads feed which funnels; headline tests cross-pollinate |
| M17 | Email flows are the retention leg of every funnel (post-purchase, abandoned cart, winback) |
| M19 | Customer lifecycle stages determine which funnel a visitor enters (CRM-to-funnel routing) |
| M22 | UGC provides social proof content for LP, PDP, and VSL |
| M23 | Influencer content feeds advertorial and social proof sections |
| M24 | Shipping/fulfillment promises on LP/PDP must match operational reality |
| M28 | Channel strategy determines traffic sources feeding each funnel |
| M30 | Funnel metrics (CVR, ATC, CAC by funnel) are tracked in MBR |
