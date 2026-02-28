# SKU Architecture — M10: Pricing & Offer

**TUP**: M10 | **Tab**: 4 of 6
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-004 (Gross Margin), HYP-005 (Blended LTV), HYP-003.1 (Product Efficacy)

---

## 1. SKU Architecture as Strategy

### 1.1 The Principle

SKU architecture is not a product catalog — it's a strategic weapon. Each SKU serves a specific business function:

| Function | What It Does | Example |
|----------|-------------|---------|
| **Hero SKU** | Drives 80%+ of revenue. The product people think of. | 30-sachet box, unflavored |
| **Trial SKU** | Lowers entry barrier. Converts skeptics. | 10-sachet starter pack |
| **Retention SKU** | Increases lifetime value through variety. | Flavored variants |
| **Premium SKU** | Lifts AOV for willing-to-pay-more segment. | Extra-strength or specialty formulation |
| **Bundle** | Increases AOV per transaction. | 2-pack, 3-pack |

Not every function needs a SKU at launch. The architecture defines what exists now, what comes next, and why.

### 1.2 IonWave's Launch Constraint

From M0 trade thesis and financial model:
- **Capital**: $30-50K initial raise — cannot fund multiple SKU production runs
- **MOQ**: Supplement manufacturers typically require 500-1,000 unit minimums per SKU
- **Inventory risk**: Each new SKU ties up $3-5K in inventory
- **Complexity cost**: Each SKU adds packaging, listing, 3PL SKU management
- **Focus**: First 6 months must validate core unit economics (CAC, churn, subscription rate)

**Conclusion**: Launch with minimum viable SKU set. Add SKUs based on data, not aspiration.

---

## 2. Launch SKU Set (Wave 1: Months 0-6)

### 2.1 Hero SKU: Marine Plasma Electrolyte — 30 Sachets

| Attribute | Detail |
|-----------|--------|
| **Product** | Marine plasma electrolyte powder, unflavored |
| **Format** | Individual sachets (mix into water) |
| **Count** | 30 sachets per box (1/day, 30-day supply) |
| **SKU ID** | IW-MP-30-UF |
| **Price (One-time)** | $59.00 |
| **Price (Subscription)** | $50.15 (15% off) |
| **COGS** | $18-20 landed |
| **Gross Margin** | 66-69% (one-time), 60-64% (subscription) |
| **Target** | 80%+ of revenue |

**Why unflavored at launch:**
- Seaonic is unflavored — validates market accepts this format [A-grade, competitor evidence]
- Simpler formulation = faster to market
- Lower COGS (no flavoring, no flavor-specific testing)
- One production run, one package design
- Flavored variants identified as strongest differentiator (M0 thesis) but defer to Wave 2

**Per-sachet economics:**
- Revenue: $1.97 (one-time) / $1.67 (subscription)
- COGS: $0.60-0.67 per sachet
- Gross profit: $1.30-1.37 per sachet (one-time) / $1.00-1.07 (subscription)

[Confidence: B | Source: Offer Strategy Tab 1, Financial Model, M0 thesis]

### 2.2 Bundle Options (Same SKU, Different Quantities)

| Bundle | Price | Per Box | Discount | Margin | Shopify Implementation |
|--------|-------|---------|----------|--------|----------------------|
| **1 box** | $59.00 | $59.00 | — | 66% | Standard product listing |
| **2-box** | $106.00 | $53.00 | 10% | 64% | Shopify variant or bundle app |
| **3-box** | $147.00 | $49.00 | 17% | 59% | Shopify variant or bundle app |

**Bundle strategy note** (from Offer Strategy Tab 1): Bundles serve a different job than subscriptions. A customer buying a 3-pack to try is not competing with subscription — they're on a path to becoming a subscriber. Track conversion from bundle → subscription.

**Kill criteria**: If bundle mix exceeds 30% of revenue AND drags blended margin below 60%, restrict bundle discounts. [Source: HYP-004 kill threshold]

### 2.3 What's NOT in Wave 1

| Excluded SKU | Why Not Yet | When |
|-------------|------------|------|
| Flavored variants | MOQ, inventory risk, formulation time | Wave 2 (Month 6+) |
| Trial/sample pack (10 sachets) | Dilutes AOV, complicates pricing psychology | Wave 2 (if conversion data warrants) |
| Concentrate bottle | High formulation risk, different production line | Wave 3+ (Month 12+) |
| Magnesium add-on | Different product category, regulatory considerations | Wave 3+ |
| Premium/extra-strength | No data on demand; premature line extension | Wave 3+ |

---

## 3. Expansion Architecture (Waves 2-4)

### 3.1 Wave 2: Flavor Expansion (Months 6-9)

**Trigger**: Launch Wave 2 when ALL of these conditions are met:
- ✅ Hero SKU achieving >3% CVR
- ✅ Subscription rate >45%
- ✅ At least 200 customers (for survey data)
- ✅ Follow-on capital secured (Stage 2)
- ✅ Supplier confirmed for flavored production

| SKU | SKU ID | Price | COGS (Est.) | Margin | Function |
|-----|--------|-------|-------------|--------|----------|
| **Citrus Burst** (30 sachets) | IW-MP-30-CB | $59.00 | $21-23 | 61-64% | Retention / acquisition variant |
| **Berry Blend** (30 sachets) | IW-MP-30-BB | $59.00 | $21-23 | 61-64% | Retention / acquisition variant |
| **Starter Kit** (10 sachets, mixed flavors) | IW-MP-10-MX | $24.99 | $8-10 | 60-67% | Trial / conversion SKU |

**Why flavors matter (from M0 thesis)**:
- "Flavored options" rated as STRONGEST differentiator against Seaonic
- Seaonic is unflavored, salty — taste is a common complaint in marine plasma
- Flavors enable variety-seeking retention (rotate flavors each month)
- Subscription feature: "Choose your flavor each month" = engagement mechanism

**Flavor selection rationale**:
- Citrus and berry are safest bets in the supplement category [C-grade, DTC supplement benchmark]
- Start with 2 flavors max — test demand before expanding
- Each flavor SKU requires separate production run: $5-8K inventory commitment per flavor

**Starter Kit rationale**:
- $24.99 is below the "impulse buy" threshold for the health-conscious ICP
- 10 sachets = ~10 days, enough to feel the product before committing
- Mixed flavors showcase range
- Clear conversion path: Starter Kit → Full Box Subscription

[Confidence: C | Source: M0 differentiation analysis, DTC supplement benchmarks]

### 3.2 Wave 3: Premium Tier + Format Innovation (Months 12-18)

**Trigger**: Launch Wave 3 when ALL of these conditions are met:
- ✅ Monthly revenue >$15K
- ✅ Flavored SKUs showing >20% of new customer mix
- ✅ Customer feedback data supports premium demand
- ✅ Supplier can produce new formulations

| SKU | SKU ID | Price | Function |
|-----|--------|-------|----------|
| **Marine Plasma + Magnesium Glycinate** (30 sachets) | IW-MPM-30-UF | $69.00 | Premium tier / AOV lift |
| **Marine Plasma Concentrate** (liquid dropper, 30-day) | IW-MPC-30-UF | $79.00 | Premium format / differentiation |
| **Variety Pack** (30 sachets: 10 each of 3 flavors) | IW-MP-30-VP | $59.00 | Retention / gifting |

**Premium tier strategy**:
- $69 (matches current Seaonic pricing) for an enhanced formulation
- Creates a "good/better" tier within IonWave's lineup
- Magnesium glycinate is the most-requested mineral supplement add-on [C-grade, DTC supplement trend data]
- Concentrate format is the highest-risk, highest-differentiation option from M0 thesis

### 3.3 Wave 4: Ecosystem Expansion (Month 18+)

Deferred to Product Roadmap (Tab 5). These are strategic options, not plans:
- Magnesium standalone product
- Sleep-formulation variant (marine plasma + L-theanine)
- Sport-specific formulation (higher sodium)
- Wholesale/B2B channel SKUs

---

## 4. Naming & SKU Conventions

### 4.1 SKU ID System

```
IW-{PRODUCT}-{COUNT}-{VARIANT}

IW     = IonWave (brand prefix)
PRODUCT = MP (Marine Plasma), MPM (Marine Plasma + Mg), MPC (Concentrate)
COUNT  = 30 (sachets), 10 (starter), etc.
VARIANT = UF (Unflavored), CB (Citrus Burst), BB (Berry Blend), VP (Variety Pack), MX (Mixed)
```

### 4.2 Product Naming Convention

| Internal Name | Customer-Facing Name | Why |
|--------------|---------------------|-----|
| IW-MP-30-UF | IonWave Marine Plasma — Original | "Original" implies more flavors coming |
| IW-MP-30-CB | IonWave Marine Plasma — Citrus Burst | Descriptive, evocative |
| IW-MP-10-MX | IonWave Starter Kit | Focus on "start" not "small" |
| IW-MPM-30-UF | IonWave Marine Plasma+ | "+" signals premium |

---

## 5. Cross-Sell & Upsell Architecture

### 5.1 In-Funnel Upsells

| Trigger | Offer | Expected AOV Lift |
|---------|-------|--------------------|
| Cart page (1 box selected) | "Add a second box for 10% off both" | +$47 (→$106 AOV) |
| Post-purchase page | "Add a Starter Kit for a friend: $19.99" (one-time discounted) | +$20 |
| Subscription management | "Add a second SKU to your subscription" | +$50/month |

### 5.2 Subscription Cross-Sell (Wave 2+)

| Trigger | Offer | Rationale |
|---------|-------|-----------|
| Month 3 of subscription | "Try our new Citrus Burst — swap or add?" | Retention play: variety prevents boredom |
| Customer survey (post-10 orders) | "Upgrade to Marine Plasma+ for $10/month more" | Premium upgrade for loyal customers |
| Subscription cancel flow | "Switch to a different flavor before you go" | Save offer (from M21 win-back design) |

---

## 6. Inventory & Supply Chain Implications

### 6.1 Wave 1 Inventory Plan

| SKU | Initial Order | Reorder Point | Lead Time | Inventory Cost |
|-----|--------------|---------------|-----------|----------------|
| IW-MP-30-UF | 500 units | 150 units | 4-6 weeks | $10,000 |

**Cash flow note**: At $20 COGS × 500 units = $10,000 tied up in inventory. This is 20-33% of the initial raise. Cannot afford to have multiple SKUs tying up inventory capital in Wave 1.

### 6.2 Wave 2 Inventory Plan (Projected)

| SKU | Initial Order | Inventory Cost | Total New Capital |
|-----|--------------|----------------|------------------|
| IW-MP-30-CB | 300 units | $6,600 | — |
| IW-MP-30-BB | 300 units | $6,600 | — |
| IW-MP-10-MX | 500 units | $4,500 | — |
| **Total** | — | — | **$17,700** |

This requires follow-on capital (Stage 2). Do not expand SKU set without capital secured.

---

## 7. Intelligence Gaps & Decisions Pending

| Gap | Impact | Upgrade Path | Timing |
|-----|--------|-------------|--------|
| No customer feedback on flavored marine plasma | HIGH — flavors are the #1 differentiator but untested | Post-launch survey at 100+ customers: "Would you prefer flavored options?" | Month 3-4 |
| Flavored COGS not confirmed | MEDIUM — estimated $21-23 but supplier hasn't quoted | Request flavored production quote from supplier | Pre-Wave 2 |
| Starter kit cannibalization risk | LOW-MEDIUM — may attract small-buyers who never upgrade | Track starter → full conversion rate. Kill if <30% convert | Wave 2 |
| Concentrate format feasibility | HIGH for Wave 3 — completely different production | Supplier feasibility discussion | Month 9+ |
| Bundle vs subscription cannibalization | MEDIUM — do bundles prevent subscription? | Track: % of bundle buyers who later subscribe | Month 3+ |

---

## 8. Hypothesis Cross-Reference

| Hypothesis | How SKU Architecture Affects It |
|-----------|-------------------------------|
| **HYP-004** (Gross Margin ≥60%) | Each new SKU has its own margin profile. Flavored variants may have lower margin ($21-23 COGS vs $20). Must maintain blended ≥60%. |
| **HYP-005** (Blended LTV $106) | Flavored variants and premium tier increase LTV through variety retention and AOV lift. Starter kit may lower initial AOV but increase conversion-to-subscription. |
| **HYP-003.1** (Product Efficacy) | Flavored variants must not compromise marine plasma concentration or mineral profile. Formulation integrity is non-negotiable. |

---

*Next: Tab 5 (Product Roadmap), Tab 3 (Product Customization)*
