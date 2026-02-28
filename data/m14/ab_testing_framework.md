# A/B Testing Framework — M14: Testing & Optimization

**TUP**: M14 | **Tab**: 4 of 6
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-001 (CAC), HYP-002 (Subscription Conversion), HYP-004 (Gross Margin)
**Danilo Sources**: ops_model_v10_dump/379_ab_testing_framework.json, 380_ab_testing_framework1.json, 381_ab_testing_framework2.json (CONSOLIDATED — 3 near-duplicate tabs merged into 1 authoritative framework)
**Cross-references**: data/m10_pricing_offer/price_testing_framework.md (price tests — use M10, NOT this), data/m14/experimentation_framework.json (parent framework)

---

## 1. Purpose & Scope

This framework covers **on-site A/B testing** for landing pages, product pages, checkout flow, and other website elements. It does NOT cover:
- **Price testing** → Use M10 Price Testing Framework (sequential protocol, RPV as primary metric)
- **Ad creative testing** → Use M14 Creative Testing Protocol (platform-native testing)
- **Email/SMS testing** → Will be covered in M17/M18

### 1.1 The Traffic Reality

IonWave's early traffic (~50-100 visitors/day, 1,500-3,000/month) makes traditional A/B testing of on-site elements difficult. The framework below accounts for this by:
1. Recommending qualitative methods at very low traffic
2. Using Bayesian methods for faster decisions when possible
3. Reserving frequentist A/B testing for high-impact decisions
4. Matching test methodology to traffic tier

---

## 2. What to Test On-Site (Priority Order)

### 2.1 Testing Priority Matrix

| Priority | Element | Expected Impact | Traffic Needed | Method |
|----------|---------|----------------|---------------|--------|
| 1 | **Headline** | 20-50% CVR lift possible | 500+ per variant | Bayesian A/B |
| 2 | **Hero image/video** | 15-40% CVR lift | 500+ per variant | Bayesian A/B |
| 3 | **Subscription-first default** | 15-30% sub rate change | 500+ per variant | Bayesian A/B |
| 4 | **Price/offer display** | Variable (use M10) | 2,000+ per variant | Sequential (M10) |
| 5 | **Social proof placement** | 5-15% CVR lift | 1,000+ per variant | Bayesian A/B |
| 6 | **Page length** (long vs short) | 5-20% CVR lift | 1,000+ per variant | Pre/post |
| 7 | **CTA text** | 3-10% CVR lift | 2,000+ per variant | Bayesian A/B |
| 8 | **Testimonial format** (video vs text) | 5-15% CVR lift | 1,000+ per variant | Pre/post |

### 2.2 Do NOT Test (First 6 Months)

| Element | Why Not |
|---------|---------|
| Button colors | <1% effect — undetectable without 50K+ visitors |
| Font changes | No meaningful conversion impact at any traffic level |
| Minor copy tweaks ("Buy Now" vs "Add to Cart") | <1% effect |
| Multiple simultaneous redesign changes | Learn nothing about what worked |
| Navigation layout micro-changes | Use heatmaps, then just fix problems |
| Checkout flow details | Too few conversions to measure. Fix obvious issues without testing. |

---

## 3. Statistical Methodology

### 3.1 When to Use Each Method

| Traffic Level | Method | Decision Rule |
|--------------|--------|---------------|
| <30 visits/day | **Qualitative judgment** | Heatmaps, session recordings, customer feedback. Ship best guess. |
| 30-100 visits/day | **Pre/post + Bayesian** | Run version A for 2 weeks, then version B. Or use Bayesian with early-stopping. |
| 100-500 visits/day | **Standard A/B (Bayesian)** | Simultaneous split test. Bayesian for faster results. |
| 500+ visits/day | **Full A/B (frequentist or Bayesian)** | Standard experimentation program with statistical rigor. |

### 3.2 Frequentist A/B Testing

**When to use**: Price tests, checkout changes, subscription terms — anywhere a wrong decision has high financial impact.

| Parameter | Setting |
|-----------|---------|
| Confidence threshold | 95% (p < 0.05) |
| Statistical power | 80% |
| Minimum test duration | 14 days (captures day-of-week variance) |
| Peeking policy | No peeking before planned sample size |

**Sample Size Requirements** (per variant, 95% confidence, 80% power):

| Baseline CVR | 30% relative MDE | 20% relative MDE | 15% relative MDE |
|-------------|------------------|------------------|------------------|
| 2% | 4,300 | 9,800 | 17,400 |
| 3% | 2,800 | 6,500 | 11,500 |
| 5% | 1,600 | 3,800 | 6,700 |

**Practical implication**: At 3% CVR and 2,000 monthly visitors, detecting a 20% relative effect requires 6,500 visitors per variant = 6.5 months. Only test elements where you expect 30%+ relative improvement.

### 3.3 Bayesian A/B Testing

**When to use**: Landing page elements, headline tests, social proof tests — anywhere faster decisions are worth the slight trade-off in certainty.

| Parameter | Setting |
|-----------|---------|
| Prior | Weakly informative Beta(1,1) for new tests. Informed priors from previous tests for iterations. |
| Decision threshold | 95% probability variant beats control |
| Practical threshold | If expected loss of choosing wrong variant is <0.1% absolute CVR, ship it |

**Why Bayesian is better at low traffic**:
- No fixed sample size — check results any time without inflating false positives
- Intuitive output: "93% chance variant B is better" (vs. "p = 0.07, not significant")
- Expected loss framework: "If I'm wrong, I lose 0.05% CVR" — helps make decisions when sample is small
- Can incorporate prior knowledge from previous tests

**Practical rule** (Stucchio framework): Run until 100+ total conversions or a time limit. Then check:
1. P(B > A) > 75% AND expected loss < 0.5% absolute CVR → Ship B
2. P(B > A) between 50-75% after time limit → Effect probably too small to matter
3. P(B > A) < 50% → Keep A

**Expected loss thresholds for IonWave:**
- Landing page changes: ship if expected loss < 0.1% absolute CVR
- Creative decisions: ship if expected loss < 0.5% absolute CVR
- Price/checkout changes: use frequentist (95%), not Bayesian

**Low-conversion warning** *(Dialogue upgrade UPG-4)*: Bayesian analysis with <30 conversions per variant is **directional only** — it tells you which way the wind blows, not where the ball lands. At 500 visitors and 3% CVR = 15 conversions per variant, treat Bayesian results as "probably better" not "confidently better." Only use to choose between two options when the cost of being wrong is low and reversible.

### 3.4 Pre/Post Testing

**When simultaneous split testing isn't possible** (very low traffic, major redesigns, or Shopify limitations):

1. Run version A for 2-4 weeks. Record daily CVR, RPV, sessions.
2. Switch to version B for 2-4 weeks.
3. Compare metrics while controlling for: day-of-week patterns, ad spend levels, traffic source mix, promotions, and seasonality.
4. Change only ONE thing between periods.

**Limitations**: Confounding variables (traffic mix, seasonality) weaken conclusions. Use for directional signals, not definitive answers.

### 3.5 The "Just Ship It" Threshold

Not everything needs a test. Ship without testing when:
- The change is obviously better (fixing broken UX, adding missing CTA)
- The potential downside is tiny (email copy tweak)
- You'd need 6+ months to detect the effect size
- Customer feedback overwhelmingly points in one direction
- You're choosing between two options and neither is risky

**Never "just ship it" on**: Price changes, subscription terms, checkout flow changes, or anything affecting revenue per visitor. These always get tested.

---

## 4. Testing Tools — Post-Google Optimize

**Google Optimize was shut down September 2023.** Danilo's original framework referenced it. Below is the current landscape.

### 4.1 Recommended Tool Stack by Phase

#### Phase 0: $0/month (Pre-revenue, <100 visitors/day)

| Function | Tool | Cost |
|----------|------|------|
| Session recordings + heatmaps | Microsoft Clarity | $0 (unlimited, fully free) |
| Analytics | Shopify Analytics + GA4 | $0 |
| Statistical significance | ABTestGuide.com calculator | $0 |
| On-site "testing" | Manual sequential (change page, compare in GA4) | $0 |

#### Phase 1: $0-50/month (100+ visitors/day, 3,000+/month)

| Function | Tool | Cost |
|----------|------|------|
| On-site A/B testing | Neat A/B Testing (Shopify app) | Free plan or $29/month |
| Landing page testing | Shoplift (Shopify app, Bayesian methodology) | Free plan or $49/month |
| Email A/B testing | Klaviyo built-in | $0 beyond Klaviyo sub |

#### Phase 2: $50-200/month (Revenue > $5K/month)

| Function | Tool | Cost |
|----------|------|------|
| Price A/B testing | Intelligems | ~$99/month |
| On-site A/B testing | Neat A/B ($49-99 tier) or Shoplift ($49 tier) | $49-99/month |

[Confidence: B | Source: Shopify App Store, tool documentation. Pricing should be verified — tools change plans frequently.]

### 4.2 Tool Comparison

| Tool | Cost | Free Plan | Real Price Testing | Shopify Native | Statistical Method |
|------|------|-----------|-------------------|---------------|-------------------|
| **Neat A/B** | $0-199 | Yes | No | Yes | Frequentist |
| **Shoplift** | $0-149 | Yes | No | Yes | Bayesian |
| **Intelligems** | $99-399 | No (trial) | **Yes** | Yes | Frequentist (RPV) |
| **Trident AB** | $0-29 | Yes | No | Yes | Frequentist |
| Convert.com | $199+ | No | Display only | No (JS snippet) | Both |
| VWO | $99-199+ | No | Display only | No (JS snippet) | Bayesian |

**Key insight**: Intelligems is the only Shopify-native tool that does real price testing (different actual prices in cart/checkout). This is what M10's price testing framework needs for PT-002 onwards.

### 4.3 Analytics & Attribution

| Tool | Cost | When It's Worth It |
|------|------|--------------------|
| Shopify Analytics + GA4 | $0 | Always (baseline) |
| Microsoft Clarity | $0 | Always (session recordings, heatmaps) |
| Triple Whale | $100-300/month | When ad spend > $15-20K/month |
| Northbeam | $400-1K+/month | When ad spend > $50K/month |

**Under $10K/month ad spend**: UTM parameters + GA4 + Shopify Analytics + a spreadsheet is sufficient. Attribution tools optimize the marginal 5-15% — not enough savings to justify the cost.

---

## 5. Testing Velocity by Stage

| Stage | Monthly Visitors | On-Site Tests/Month | Ad Creative Tests/Month | Focus |
|-------|-----------------|---------------------|------------------------|-------|
| Pre-launch | <1,000 | 0-1 | 2-4 | Creative testing only (platform has traffic) |
| Early (Mo 1-3) | 1K-3K | 1-2 | 4-8 | Find winning creative angles. 1 LP change/month. |
| Growing (Mo 3-6) | 3K-15K | 2-4 | 8-12 | Systematic program. Creative + LP in parallel. |
| Scaling (Mo 6+) | 15K+ | 4-8 | 12-20 | Full program: creative + LP + email + checkout. |

---

## 6. Landing Page Testing Playbook

### 6.1 IonWave Landing Page Test Queue

| Priority | Test ID | Element | Control | Variant | Expected Effect | Method |
|----------|---------|---------|---------|---------|----------------|--------|
| 1 | LP-001 | Headline | "Marine Electrolytes — 78 Ocean Minerals" | "Your Body Runs on Ocean Minerals. Give It What It Needs." | 20-40% CVR change | Bayesian |
| 2 | LP-002 | Hero visual | Product pack shot on white | Product dissolving in water (dynamic) | 15-30% CVR change | Bayesian |
| 3 | LP-003 | Sub-first default | One-time default, sub as option | Subscription pre-selected, one-time as downgrade | 15-30% sub rate change | Bayesian |
| 4 | LP-004 | Social proof | Reviews below fold | Reviews in hero section + sticky review bar | 10-20% CVR change | Pre/post |
| 5 | LP-005 | Page length | Full long-form (ingredient science, founder story, FAQ) | Short-form (hero + benefits + reviews + CTA) | Variable | Pre/post |

### 6.2 Testing Rules for Landing Pages

1. **One test at a time on the same page** — unless the tests affect completely independent sections
2. **Minimum 14-day duration** — captures day-of-week variance
3. **All traffic sources in the same test** — no paid-only or organic-only splits
4. **Document the hypothesis BEFORE launching** — file the experiment card in test_log.json
5. **Exclude returning customers from first-impression tests** — they've already formed opinions

---

## 7. Audience Testing Strategy

### 7.1 IonWave Audience Tiers (from Danilo tab 376 — expanded)

| Tier | Audience | Description | Testing Priority |
|------|----------|-------------|-----------------|
| **Core** | Health-conscious 25-45 | Broad health + supplements interest | Test FIRST — this is the broadest viable audience |
| **Expansion 1** | Athletes / fitness | CrossFit, running, endurance sports, gym | Test at Month 2-3 after core is validated |
| **Expansion 2** | Biohackers / optimization | Fasting, nootropics, quantified self | Test at Month 2-3 — potentially highest CVR but smallest pool |
| **Expansion 3** | Wellness parents | Family health, organic food, clean living | Test at Month 4+ |
| **Lookalikes** | Based on purchasers | 1% lookalike of first 100+ customers | Available only after 100+ purchases |

### 7.2 Audience Testing Rules

1. **Test CREATIVE first, audiences LAST.** At $1-2K/month, you cannot afford to dilute creative testing budget with audience tests.
2. **Use broad targeting initially.** Let Meta's algorithm find your audience. Interest stacking at low spend restricts the algorithm's ability to optimize.
3. **Only test audiences when you have a proven creative winner.** Hold creative constant, change only the audience.
4. **1% Lookalike is the unlock.** Once you have 100+ customers, build a 1% Lookalike of purchasers. This typically outperforms interest targeting.

### 7.3 Audience Test Protocol

```
Prerequisite: At least 1 creative winner (CT-XXX graduated to scaling)

Test structure:
  ABO campaign, $20-30/day per ad set
  Same winning creative in every ad set
  Ad Set 1: Core audience (health-conscious, broad)
  Ad Set 2: Expansion audience being tested
  Duration: 7-14 days
  Primary metric: CPA
  Secondary: CVR, subscription rate, AOV

Decision:
  Expansion CPA ≤ 1.2x Core CPA → Add to targeting rotation
  Expansion CPA > 1.5x Core CPA → Kill this audience for now
  Between 1.2-1.5x → Iterate (narrow further or test different interests)
```

---

## 8. Intelligence Gaps

| ID | Gap | Grade | Upgrade Path |
|----|-----|-------|-------------|
| GAP-1 | Google Optimize recommended in Danilo original — now dead | FIXED | Replaced with current tool recommendations |
| GAP-2 | 3 duplicate A/B tabs provided no net new methodology | FIXED | Consolidated into single authoritative framework |
| GAP-3 | No IonWave on-site test data exists | D | Run first 3 LP tests. Calibrate benchmarks. |
| GAP-4 | Shopify app pricing may have changed since research | C | Verify Neat A/B, Shoplift, Intelligems pricing before purchase |
| GAP-5 | Bayesian priors not calibrated for marine plasma supplement | D | After 10+ tests, build category-specific priors |
