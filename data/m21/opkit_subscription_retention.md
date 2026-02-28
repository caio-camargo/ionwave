# OpKit: Subscription & Retention Design Kit

**OpKit ID**: OK-M21-001
**TUP**: M21 (Subscription & Retention)
**Version**: 1.0.0
**Date**: 2026-02-06
**For**: Any DTC consumable Trade setting up subscription infrastructure
**Graded Example**: IonWave Trade #84 (quality: 8.0/10)

---

## What This OpKit Produces

A complete subscription and retention system for a DTC consumable brand, including:
1. Subscription platform selection (evaluated against Trade's specific needs)
2. Subscription psychology framework (why people subscribe and cancel in your category)
3. Churn prediction model (behavioral signals, composite risk scoring, dunning stack)
4. Win-back strategy (education-first, flexibility-second, discount-last)
5. Retention playbook (prioritized tactics with implementation timeline)

---

## Instructions (Step-by-Step)

### Step 1: Platform Selection

**Research and compare** the current Shopify subscription platforms against these criteria:
- Pricing (monthly + transaction fees)
- Shopify native checkout support
- Churn prevention features (cancel flows, pause/skip, dunning)
- Analytics/reporting
- Integration with email platform (Klaviyo or equivalent)
- Migration difficulty

**Scaffold**: Use the comparison table format in `data/m21/subscription_platform.json` as template. Evaluate at least 3 platforms.

**Decision rule**: For pre-launch, optimize for (1) free/low-cost tier for testing, (2) Shopify native checkout, (3) email platform integration depth. Don't overpay for AI features you can't use until you have 200+ subscribers.

### Step 2: Map Your Subscription Psychology

**For your specific product category**, research and document:
- Top 5 reasons people subscribe (ranked by strength)
- Top 6 reasons people cancel (ranked by frequency)
- Category-specific structural challenges (what makes retention hard in your category?)
- Your product's unique retention levers (what creates switching cost?)

**Scaffold**: Use the framework in `data/m21/subscription_psychology.md`. Replace IonWave/marine plasma specifics with your product/category.

### Step 3: Build Your Churn Prediction Model

**Identify the behavioral signals** that predict churn for your product:
- Start with the universal signals (skip, payment failure, support complaint, email disengagement)
- Add category-specific signals (product fatigue for consumables, usage tracking for apps, etc.)
- Design composite risk scoring tiers (CRITICAL / HIGH / MEDIUM / LOW)
- Design your dunning stack (smart retries + card updater + email + SMS)

**Scaffold**: Use `data/m21/churn_prediction.json` as template. The signal list and dunning stack are largely universal. Customize interventions for your product.

### Step 4: Design Your Win-Back Strategy

**Choose your approach**: education-first (if you have a strong science/expertise story) or value-first (if your product has obvious tangible benefits).

**Design the sequence**:
- Pre-cancellation save flow (survey → alternatives → pause → graceful exit)
- Post-cancellation win-back (8-10 touchpoints over 90-180 days)
- Channel strategy (email + SMS, escalating based on engagement)

**Anti-pattern check**: Review your sequence for discount-ladder traps. If your max discount exceeds 20% or you offer ongoing subscription discounts to win back, you're likely training discount behavior.

**Scaffold**: Use `data/m21/win_back_offer_ladder.md` as template. Replace depletion messaging with your product's equivalent education content.

### Step 5: Build Your Retention Playbook

**Prioritize tactics** into three tiers:
- Tier 1: Before launch (dunning, save flow, frequency, pre-charge notification, onboarding)
- Tier 2: First 90 days (win-back, churn prediction, SMS management)
- Tier 3: Month 6+ (loyalty, VIP, community, product line expansion)

**Design implementation timeline** with specific week-by-week actions.

**Scaffold**: Use `data/m21/retention_playbook.md` as template. The tier structure and timeline are universal. Customize tactics for your product.

---

## Grading Rubric

| Grade | Evidence Coverage | Confidence Honesty | Upgrade Paths | Actionability | Reusability |
|-------|------------------|--------------------|---------------|---------------|-------------|
| **A (9-10)** | Every section has A/B-grade evidence. IonWave-specific data incorporated. | Every grade defensible. No inflation. | Every gap has specific, actionable upgrade path. | Ready to implement. Timeline concrete. | All frameworks work for any DTC consumable. |
| **B (7-8)** | Most sections have B/C-grade evidence. Industry benchmarks well-sourced. | Mostly accurate. 1-2 generous grades. | Most gaps have actionable paths. | Implementable with minor adjustments. | Frameworks mostly generalizable. |
| **C (5-6)** | Several sections at C/D-grade. Some benchmarks unsourced. | Several generous grades. | Half the paths are vague. | Requires significant work to implement. | IonWave-specific, needs adaptation. |
| **D (3-4)** | Mostly D-grade or unsourced. | Systematic inflation. | Vague or missing paths. | Framework only, not implementable. | Not reusable. |
| **F (<3)** | No evidence. | No grades. | No paths. | Not useful. | Not applicable. |

**IonWave's grade**: 8.0/10 (B+). Strengths: honest confidence grading, strong industry evidence, actionable playbook. Weakness: no IonWave-specific data (pre-launch), depletion messaging unvalidated.

---

## What's NOT in This OpKit (Out of Scope)

- Email copy (see M17: Email)
- SMS strategy details (see M18: SMS)
- Customer lifecycle CRM architecture (see M19: Customer Lifecycle)
- Customer support processes (see M20: Support)
- Referral program design (see M22: Referral)
- Pricing/offer strategy (see M10: Pricing & Offer)
