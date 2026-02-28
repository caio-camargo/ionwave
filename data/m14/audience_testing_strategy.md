# Audience Testing Strategy — M14: Testing & Optimization

**TUP**: M14 | **Tab**: 2 of 6
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-001 (CAC), HYP-009 (Pre-Launch Demand)
**Danilo Source**: ops_model_v10_dump/376_audience_strategy.json (5 rows — skeleton with audience tiers only)
**Cross-references**: data/m27_customer_research/ (ICP analysis, customer archetypes), data/m14/creative_testing_protocol.md (creative tests before audience tests)

---

## 1. Core Principle

**Test creative FIRST, audiences LAST.**

At $500-2K/month ad spend, audience testing competes for the same limited budget as creative testing. Creative variables (hook, angle, format) have 3-5x more impact on CPA than audience targeting at this budget. Meta's algorithm is better at finding your audience than manual interest stacking — if you give it good creative.

**When to start audience testing:**
- You have at least 1 proven creative winner (graduated from testing to scaling)
- Monthly ad spend is ≥ $1,500 (enough to allocate $300-500 to audience tests)
- You have at least 4 weeks of campaign data

---

## 2. Audience Tiers

### 2.1 Tier Architecture

| Tier | Audience | Description | Est. Size (US) | Test Priority | Expected CPA vs Core |
|------|----------|-------------|----------------|--------------|---------------------|
| **0: Broad** | 25-55, US, all interests | Let Meta's algorithm optimize | 100M+ | DEFAULT — use from Day 1 | Baseline |
| **1: Core** | Health-conscious, supplement buyers | Interest: health, supplements, nutrition, wellness | 20-40M | Month 1-2 | 0.8-1.0x |
| **2A: Athletes** | Fitness enthusiasts, endurance athletes | Interest: CrossFit, running, triathlon, gym, Strava | 15-25M | Month 2-3 | 0.9-1.2x |
| **2B: Biohackers** | Optimization community | Interest: fasting, nootropics, biohacking, quantified self | 3-8M | Month 2-3 | 0.7-1.0x (potentially best) |
| **3: Wellness parents** | Family health decision makers | Interest: organic food, clean living, family wellness | 10-20M | Month 4+ | 1.0-1.3x |
| **4: Lookalike 1%** | Statistically similar to buyers | Based on first 100+ purchasers | Varies | After 100+ customers | 0.6-0.9x (typically best) |
| **5: Lookalike 3-5%** | Broader lookalike | Wider net for scaling | Varies | After Lookalike 1% proven | 0.8-1.1x |

### 2.2 Danilo's Original vs. Expanded

Danilo listed 5 audiences in a single row each. Expanded:

| Danilo Original | What Was Missing | What We Added |
|----------------|-----------------|--------------|
| "Health-conscious 25-45" | No targeting details, no size estimate | Interest stack, estimated reach, CPA expectation |
| "Athletes, fitness enthusiasts" | No sub-segmentation | Split CrossFit/endurance vs gym-general |
| "Biohackers, optimization community" | No size estimate | Estimated 3-8M US reach, flagged as potentially highest CVR |
| "Wellness moms, family health" | Gender assumption | Broadened to "wellness parents," deferred to Month 4+ |
| "Lookalikes" | No threshold for when to build | Specified: 100+ customers minimum for viable 1% LAL |

---

## 3. Testing Protocol

### 3.1 Prerequisites

Before running any audience test:
- [ ] At least 1 creative winner exists (CT-XXX graduated to scaling campaign)
- [ ] Monthly ad spend ≥ $1,500
- [ ] 4+ weeks of campaign performance data
- [ ] Creative held CONSTANT across all audience tests (same winning creative in every ad set)

### 3.2 Standard Audience Test Structure

```
Campaign: ABO (Ad Set Budget Optimization)
Budget: $20-30/day per ad set
Duration: 7-14 days

Ad Set 1: Control audience (Tier 0 Broad or Tier 1 Core)
  → Same winning creative
Ad Set 2: Test audience (the audience being evaluated)
  → Same winning creative
Ad Set 3: (Optional) Second test audience
  → Same winning creative

Primary metric: CPA
Secondary: CVR, subscription rate, AOV, ROAS
Diagnostic: CPM (audience cost), CTR (message-audience fit)
```

### 3.3 Decision Rules

| Outcome | Criteria | Action |
|---------|----------|--------|
| **Add to rotation** | Test CPA ≤ 1.2x Control CPA | Include in scaling campaign targeting |
| **Iterate** | Test CPA 1.2-1.5x Control CPA | Try narrower interest stack or different creative angle for this audience |
| **Kill** | Test CPA > 1.5x Control CPA | This audience doesn't respond at current price. Revisit at $5K+ spend. |
| **Replace control** | Test CPA < 0.8x Control CPA | This audience is better than your current default. Switch. |

### 3.4 Audience × Creative Interaction

The most powerful tests combine audience AND creative — a specific message for a specific audience:

| Audience | Best Creative Angle (Hypothesis) |
|----------|--------------------------------|
| Athletes | Performance + recovery ("Replace what you sweat out with 78 minerals") |
| Biohackers | Ingredient science + completeness ("78 trace elements. Zero fillers.") |
| Wellness parents | Purity + family safety ("From the deep ocean, not a lab") |
| Health-conscious general | Problem → solution ("Tired by 2pm? Your electrolytes are incomplete.") |

These are hypotheses to test, not facts. The creative testing protocol may surface different winning angles for each audience.

---

## 4. Phased Rollout

### Phase 0: Month 1-2 (Launch) — Passive Audience Learning

*(Dialogue upgrade UPG-6)*

- **Targeting**: Broad (Tier 0) only
- **Why**: Let Meta's algorithm learn with no constraints. Interest stacking at low spend restricts the algorithm.
- **Ad spend**: 100% of budget on creative testing with broad targeting.
- **Passive learning**: You don't need dedicated audience tests to learn about your audience. After 7+ days of broad targeting, Meta's reporting gives you FREE audience data:
  1. **Ads Manager → Breakdown → By Age**: Which age groups convert? Tells you whether to narrow later.
  2. **Breakdown → By Gender**: Does one gender convert at meaningfully different CPA?
  3. **Breakdown → By Placement**: Feed vs Reels vs Stories — where does your creative work?
  4. **Breakdown → By Region**: Any geographic patterns?
  5. **Breakdown → By Platform**: Instagram vs Facebook performance gap?

  **Action**: Review breakdowns weekly. Build a profile of "who is actually buying" from real data. This replaces explicit audience tests at Phase 0 — Meta already tested the audiences for you. Only run formal audience tests (Phase 1+) when breakdowns show clear segmentation opportunities the algorithm isn't exploiting.

### Phase 1: Month 2-3 (First Audience Tests)
- **Test**: Core (Tier 1) vs Broad (Tier 0)
- **Then**: Athletes (Tier 2A) vs Core (Tier 1)
- **And**: Biohackers (Tier 2B) vs Core (Tier 1)
- **Budget**: 20-30% of monthly spend on audience tests

### Phase 2: Month 4-6 (Lookalike + Expansion)
- **Build**: 1% Lookalike of purchasers (requires 100+ customers)
- **Test**: Lookalike 1% vs best-performing interest audience
- **Test**: Wellness parents (Tier 3) vs Core
- **Budget**: 15-25% of spend on audience tests (the rest on creative iteration)

### Phase 3: Month 6+ (Scaling)
- **Scale**: Best 2-3 audiences with proven creative
- **Test**: Lookalike 3-5% for broader reach
- **Begin**: Audience × creative interaction tests
- **Budget**: Systematic allocation based on CPA by audience

---

## 5. Retargeting Audiences

### 5.1 When to Start Retargeting
- **Minimum**: 1,000 monthly site visitors (enough for a viable retargeting pool)
- **At $500-1K/month total spend**: Skip dedicated retargeting. Meta Advantage+ handles this automatically.
- **At $2K+/month**: Consider 5-10% of budget on retargeting

### 5.2 Retargeting Audiences (When Ready)

| Audience | Window | Priority |
|----------|--------|----------|
| Site visitors (non-purchasers) | 7 days | 1 — hottest leads |
| Add-to-cart abandoners | 7 days | 1 — highest intent |
| Site visitors (non-purchasers) | 30 days | 2 |
| Page viewers (product page) | 14 days | 2 |
| Video viewers (75%+ watched) | 30 days | 3 — brand-aware |
| Instagram/Facebook engagers | 30 days | 3 |

### 5.3 Retargeting Creative

Retargeting creative should be DIFFERENT from prospecting:
- Prospecting: Problem/benefit hooks to generate interest
- Retargeting: Objection-handling (price justification, testimonials, guarantee), urgency (limited stock), social proof (review compilations)

---

## 6. Intelligence Gaps

| ID | Gap | Grade | Upgrade Path |
|----|-----|-------|-------------|
| GAP-1 | No IonWave audience data exists | D | First 4 weeks of Meta ads provide initial audience signals. CPA by age/gender/interest from Meta reporting. |
| GAP-2 | Biohacker audience size estimate unverified | C | Verify reach in Meta Ads Manager audience builder before test launch. |
| GAP-3 | Lookalike requires 100+ customers | D | Track customer count. At ~$45 CPA, need ~$4,500 in total spend to reach 100 customers. |
| GAP-4 | Audience × creative interaction is hypothesis only | D | Validated by testing each audience with the angle hypothesized above vs. generic winner. |
