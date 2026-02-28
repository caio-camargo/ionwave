# OpKit: Ecommerce Infrastructure Setup (OK-M9-001)

> A complete playbook for setting up a D2C ecommerce store from zero to launch on Shopify.

## Metadata

- **OpKit ID**: OK-M9-001
- **TUP**: M9 (Ecommerce Infra)
- **Type**: Production
- **Version**: 1.0.0
- **Quality Grade**: 8.5/10
- **Created**: 2026-02-09

---

## Instructions (14 Steps)

### Step 1: Define Your Platform Strategy
Choose your ecommerce platform. For D2C consumable brands at $0-$50K MRR, Shopify is the default recommendation (operational simplicity, native payments, best app ecosystem). Only consider alternatives if you have specific requirements Shopify can't meet.

### Step 2: Set Your Performance Budget
Before touching anything, establish hard limits: maximum 8 apps, 500KB JavaScript budget, 3 external scripts, 2 custom fonts. Write these down. Enforce them ruthlessly.

### Step 3: Select Your Core Stack
Choose the non-negotiable tools for launch (see `tech_stack_and_tools.md`). For subscription D2C: Shopify + subscription app + email platform + reviews + analytics + ad pixel + payment processor. Budget: $50-130/mo.

### Step 4: Follow the Week 1 Setup Sequence
Use the Day 1-7 strict priority order (see `store_setup_and_launch.md`). Do not spend weeks on theme customization before products are uploaded. Speed to launch > perfection.

### Step 5: Set Up Tracking Architecture
Implement pixel + server-side (hybrid) tracking from Day 1. Meta Pixel + CAPI, GA4, subscription events. Establish MER as your primary efficiency metric, not platform ROAS (see `tracking_and_attribution.md`).

### Step 6: Configure Subscription-First UX
If your brand has a subscription model, make it the default purchase option. Use toggle (not dropdown), show subscription price first, one-time as secondary. This directly impacts subscription conversion rate.

### Step 7: Implement Security Essentials
Password manager, 2FA on all critical accounts, ad spend caps. These are Day 0 requirements, not "nice to haves." See `operations_governance.md`.

### Step 8: Complete Pre-Launch Testing
Run the full testing protocol: test orders (desktop + mobile), email flows, subscription orders, page speed check (≥70 on PageSpeed Insights), tracking verification. All P0 tests must pass before launch.

### Step 9: Launch
Follow the launch sequence: remove password, verify organic checkout first, turn on paid traffic Day 2-3. Do NOT run ads before verifying checkout works.

### Step 10: Establish Operational Cadence
Daily: 5-min MVD check + support inbox. Weekly: file cleanup + speed check. Monthly (starting Month 2): Tool ROI review + app audit + tracking check.

### Step 11: Phase-Gate Your Tool Growth
Don't add Growth Stack tools until unlock triggers are met (see `tech_stack_and_tools.md`). Each new tool must prove ROI before the next gets added.

### Step 12: Monitor Consent & Compliance
Implement cookie consent banner. Configure Consent Mode v2 for GA4. Ensure CCPA compliance if targeting US audiences.

### Step 13: Grade Your Setup
Use the rubric below to assess your implementation quality.

### Step 14: Iterate
Monthly speed audits, quarterly security reviews, ongoing tool ROI assessment. Remove tools that don't earn their place.

---

## Grading Rubric

| Grade | Score | Criteria |
|-------|-------|----------|
| **A** | 9-10 | All Core Stack tools configured with server-side tracking. Performance budget enforced. Subscription-first UX. Full security setup. Page speed ≥ 80. All pre-launch tests pass. Consent management active. |
| **B** | 7-8 | Core Stack complete. Browser pixel tracking (CAPI optional). Subscription configured but UX not optimized. Security essentials done. Page speed 60-79. Most tests pass. |
| **C** | 5-6 | Store functional but gaps: missing subscription setup, no server-side tracking, security incomplete, page speed 40-59, some tests skipped. |
| **D** | 3-4 | Store live but major issues: no tracking verification, no 2FA, too many apps (>12), page speed <40, no test orders run. |
| **F** | 0-2 | Store not functional or critical security gaps (no password manager, no 2FA, shared credentials). |

---

## Scaffold (4 Files)

Any D2C brand can start from these templates:

1. **`tech_stack_and_tools.md`** — Phase-gated tool selection (Core → Growth → Scale) with performance budget, cost tracking, credential management, "Do Not Install" list
2. **`store_setup_and_launch.md`** — Week 1 setup sequence, 8-section checklist, subscription UX pattern, page speed targets (CWV 2026), launch sequence
3. **`tracking_and_attribution.md`** — MER as north star, pixel + CAPI setup, UTM taxonomy, attribution model comparison, consent management, ad spend safety
4. **`operations_governance.md`** — Security checklist, folder structure, naming conventions, phase-gated governance, operational cadence

---

## IonWave Graded Example

**Trade**: IonWave Trade #84
**Quality**: 8.5/10
**Key Decisions**:
- Shopify Basic at launch ($29/mo), upgrade at ~$10K MRR
- Recharge/Skio for subscriptions (core to model)
- MER as primary metric (not ROAS) — aligned with M30
- 8-app maximum at launch, 500KB JS budget
- Week 1 setup sequence (7 days to launch)
- Subscription-first UX (toggle, not dropdown)
- Consent Mode v2 from Day 1
- Meta daily spend cap at 2x normal budget

---

## Adaptation Guide

### For Non-Subscription D2C Brands
- Remove subscription setup section (Step 6)
- Core Stack cost drops to ~$70/mo (no Recharge/Skio)
- Subscription UX pattern doesn't apply
- Focus on AOV optimization (bundles, upsells) instead

### For Multi-SKU Brands (10+ Products)
- Collection page optimization becomes critical (pagination, filtering)
- Product tagging system needs more structure
- Inventory management tool moves to Core Stack (not Growth)
- Speed budget is harder to maintain — stricter image optimization required

### For International D2C
- Shopify Markets for multi-currency/multi-language
- Consent Mode v2 is mandatory (not optional)
- Shipping configuration is more complex
- Tax settings need country-specific rules

### For Marketplace-First Brands
- Shopify may not be Day 1 platform (Amazon/Etsy first)
- Tracking setup changes significantly (marketplace pixels, not your own)
- Security focus shifts to marketplace account protection
- Folder structure and naming still apply universally

---

## Universal Principles

1. **Launch speed > perfection** — A live store generating data beats a perfect store generating nothing
2. **Performance has a budget** — Hard limits on apps, JavaScript, fonts. Enforce ruthlessly
3. **MER is truth** — Platform ROAS lies post-iOS 14.5. Use MER for business decisions
4. **Phase-gate everything** — Don't build $50K MRR infrastructure for a pre-launch startup
5. **Security is Day 0** — Password manager + 2FA + ad spend caps before anything else
6. **Every tool must earn its place** — Monthly ROI review. Can't articulate value in one sentence? Cancel
7. **Subscription-first UX** — If you have subscriptions, the entire purchase experience revolves around them
