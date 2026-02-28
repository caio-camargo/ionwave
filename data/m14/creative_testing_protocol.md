# Creative Testing Protocol — M14: Testing & Optimization

**TUP**: M14 | **Tab**: 1 of 6
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-001 (CAC), HYP-002 (Subscription Conversion)
**Danilo Sources**: ops_model_v10_dump/375_creative_testing_protocol.json (5 rows — skeleton), ops_model_v10_dump/348_creative_testing_protocol1.json (37 rows — M12 reference, more substantive)
**Cross-references**: data/m22/ugc_brand_brief.md (approved claims), data/m22/ugc_creator_program.json (creator economics)

---

## 1. Testing Philosophy

### 1.1 Core Principle
**Creative is the #1 lever for a bootstrapped DTC brand on Meta/TikTok.** At $500-2K/month ad spend, you cannot out-bid competitors. You can only out-create them. Every creative test is a hypothesis about what resonates with your ICP — not a random variation.

### 1.2 Budget Reality Check

| Monthly Ad Spend | Daily Budget | Testable Creatives/Month | Meaningful Winners Expected |
|-----------------|-------------|--------------------------|----------------------------|
| $500 | ~$16/day | 3-4 | 0-1 (survival mode) |
| $1,000 | ~$33/day | 4-6 | 0-1 |
| $1,500 | ~$50/day | 6-8 | 1 |
| $2,000 | ~$66/day | 8-10 | 1-2 |

[Confidence: B | Source: DTC practitioner consensus, Common Thread Collective, Foxwell Digital]

**At 10% hit rate and 5 creatives/month tested, expect ~1 winner every 2 months.** This is why iteration on proven angles matters more than constant net-new concepts at low budget.

### 1.3 Hit Rates by Creative Type

| Creative Type | Hit Rate (% becoming "winners") | Notes |
|--------------|--------------------------------|-------|
| Net-new concepts (different angle/format) | 5-15% | High risk, high learning value |
| Iterations on proven winners (new hook, same concept) | 20-35% | Lower risk, compounds learning |
| Hook variations on winning body | 25-40% | Cheapest to produce, fastest iteration |

[Confidence: C | Source: Agency case studies, Motion analytics platform data]

---

## 2. Testing Hierarchy — What to Test First

### 2.1 Priority Order (Highest Impact First)

**Tier 1: CONCEPT / ANGLE** — The biggest lever

> "What story are we telling? What pain point? What desire?"

Test fundamentally different persuasion approaches before anything else. At IonWave's budget, you cannot afford to waste test slots on minor variations until you've found a concept that resonates.

IonWave concept candidates:
- **Ocean purity origin**: "From 2,000 feet deep in the Pacific"
- **Athletic performance**: "Why athletes are switching from lab-made electrolytes"
- **Anti-synthetic ingredients**: "78 minerals. Zero synthetic fillers."
- **Daily wellness ritual**: "This changed my morning routine"
- **Problem → solution**: "Tired by 2pm? Your electrolytes are incomplete."

**Tier 2: FORMAT** — Second biggest lever

| Format | Best For | Production Cost | Testing Priority |
|--------|---------|----------------|-----------------|
| UGC testimonial | Social proof, relatability | $50-150/video (M22 creator program) | HIGH — test early |
| Founder-to-camera | Trust, origin story, premium positioning | $0 (in-house) | HIGH — free to produce |
| Product demo | Visual differentiation (ocean minerals dissolving) | $0-50 (in-house) | MEDIUM |
| Static image | Quick production, headline testing | $0-25 (Canva/AI) | MEDIUM |
| Carousel | Educational, ingredient breakdowns | $0-25 | LOW at launch |

**Tier 3: HOOK** — Third in impact, but fastest to test

The first 3 seconds (Meta) or 1-2 seconds (TikTok) determine if anyone sees your ad. Once you have a winning concept + format, hook testing is the cheapest way to iterate.

Hook frameworks (from M22 UGC brand brief):
1. **Problem statement**: "Tired by 2pm? Your electrolytes are wrong."
2. **Counter-intuitive**: "Why your electrolytes are making you MORE dehydrated"
3. **Social proof**: "I quit [popular brand] for this and here's why"
4. **Question**: "Did you know your body is missing 75 essential minerals?"
5. **Demonstration**: [Product dissolving in water — visual hook]
6. **Authority**: "My nutritionist told me to stop taking synthetic electrolytes"
7. **Comparison**: "3 minerals vs 78 minerals — which would you choose?"
8. **Urgency/FOMO**: "This sold out twice last month"

**Tier 4+: BODY, CTA, AUDIENCE** — Test AFTER tiers 1-3

Body content, call-to-action text, and audience targeting should be iterated only after concept, format, and hook have been validated. At $1-2K/month, audience testing is wasteful — let Meta's algorithm find your audience.

### 2.2 Is "Isolate One Variable" Practical at Low Budget?

**No.** At 3-5 creatives per month, strict single-variable testing would take 6+ months to learn what a smarter approach teaches in 6 weeks.

**The pragmatic alternative:**
- **Month 1-2**: Test 3-4 fundamentally different concepts simultaneously. You're looking for the concept that resonates, not isolating variables.
- **Month 2-3**: Take the winning concept and test 3-4 variations of hook/format. Now you're closer to single-variable testing.
- **Month 3+**: Hook velocity testing — 3-5 new hooks per week on the proven body.

---

## 3. Meta Ads Testing Framework

### 3.1 Campaign Structure

```
TESTING CAMPAIGN (ABO, 30-40% of budget)
  Purpose: Find winners
  Budget: Ad Set Budget Optimization (NOT CBO)
  Reason: CBO starves underperformers before data accumulates
  Structure:
    Ad Set 1: Creative A ($15-20/day)
    Ad Set 2: Creative B ($15-20/day)
    Ad Set 3: Creative C ($15-20/day)
  Targeting: Broad (US, 25-55, no interest stacking)
  Duration: 3-7 days per batch

SCALING CAMPAIGN (CBO or Advantage+, 60-70% of budget)
  Purpose: Spend efficiently on proven winners
  Budget: Campaign Budget Optimization
  Structure:
    Ad Set: Broad (graduated winners only)
      Winning Creative 1
      Winning Creative 2
      Winning Creative 3

RETARGETING (optional, 0-10% of budget)
  Only when site traffic > 1,000/month
  At $1K/month total spend, skip — Advantage+ handles this
```

[Confidence: B | Source: Foxwell Digital, DTC practitioner consensus]

**2025-2026 Advantage+ caveat**: Meta is progressively pushing Advantage+ Shopping Campaigns. If manual ABO becomes unavailable, use Advantage+ for scaling and a manual campaign for testing.

### 3.2 ABO vs CBO for Testing

| Approach | Testing | Scaling |
|----------|---------|---------|
| **ABO** | PREFERRED — gives each creative equal spend | Less efficient |
| **CBO** | BAD — allocates 80%+ to one ad set at $33/day | Good for scaling winners |

### 3.3 Dynamic Creative Testing (DCT)

**Not recommended at IonWave's budget.** DCT optimizes for Meta's chosen combination but obscures which element won. At $30/day, it becomes a black box with no actionable learning. Exception: testing 5+ static image headline variations in a single DCT ad set works as a lightweight screen.

---

## 4. Kill/Scale Decision Framework

### 4.1 IonWave-Specific Thresholds

Calibrated for $59 subscription product, ~$45 target CPA:

**Stage 1: Leading Indicators (Day 3 — BEFORE conversion data exists)**

| Metric | Kill Threshold | Data Minimum |
|--------|---------------|-------------|
| CTR (link) | < 0.5% | 1,000+ impressions |
| Hook rate (video) | < 20% 3-sec view rate | 1,000+ impressions |
| CPM | > $40 (audience cost too high) | 1,000+ impressions |
| Frequency | > 2.5 | Any time |

**Stage 2: Conversion Indicators (Day 5-7 — after 50+ link clicks)**

*(Dialogue upgrade UPG-3: At $59 AOV and 3% CVR, you need ~33 clicks for 1 conversion. At $1.50-3.00 CPC, that's $50-100 for your FIRST conversion. Never kill based on CPA until you have 50+ link clicks — otherwise you're killing creatives that simply haven't had a chance to convert yet.)*

| Metric | Kill Threshold | Data Minimum |
|--------|---------------|-------------|
| CPA | > $67 (1.5x target) | **50+ link clicks** (not just spend) |
| Add to Cart rate | < 3% of link clicks | 50+ link clicks |
| ROAS | < 1.0x | $100+ spent AND 50+ clicks |

[Confidence: B | Source: Agency consensus frameworks, adjusted for IonWave economics]

### 4.2 Day-by-Day Decision Protocol (Two-Stage)

```
Day 1-2: DO NOTHING.
  Let Meta exit learning phase. Don't touch anything.

Day 3: STAGE 1 CHECK (leading indicators only).
  < 500 impressions → Budget or targeting issue. Increase budget or broaden.
  CTR < 0.5%        → Hook is dead. KILL.
  Hook rate < 20%    → First frame isn't stopping scrollers. KILL.
  CTR ≥ 0.8%        → Creative is engaging. CONTINUE regardless of conversions.

Day 5: STAGE 2 CHECK (conversion indicators — IF 50+ link clicks).
  < 50 link clicks   → Don't make CPA decisions yet. Continue to Day 7.
  50+ clicks, 0 conv → Landing page issue OR audience mismatch. Check LP before killing.
  50+ clicks, CPA ≤ $45 → Strong signal. Continue to Day 7 for confirmation.
  50+ clicks, CPA > $67 → KILL.

Day 7: FINAL DECISION.
  CPA ≤ target ($45)          → GRADUATE to scaling campaign.
  CPA 1-1.3x target ($45-59)  → ITERATE (new hook on same body).
  CPA > 1.3x target ($59+)    → KILL.
  < 50 link clicks at Day 7   → Budget too low or creative not engaging. KILL or extend 3 days.
```

### 4.3 Sunk Cost Discipline

*(Dialogue upgrade UPG-8)*

The hardest decision at $500-1K/month is killing a creative that's "almost working." Every dollar feels precious. This leads to the worst possible behavior: continuing to spend on marginal creatives hoping they'll turn around.

**The rule**: Once you've spent 1.5x target CPA ($67) with zero conversions AND 50+ link clicks, the money is gone regardless. Killing doesn't waste the spend — it prevents MORE waste. The learning from a killed creative (what DIDN'T work) has the same value as a winner (what DID work) if you document it.

**Reframe**: You're not spending $67 to "see if this works." You're spending $67 to learn whether this creative angle resonates. Either outcome is information. The only waste is spending $67 and learning nothing because you didn't record the result.

### 4.4 What a "Winner" Looks Like

| Tier | Criteria | Action |
|------|----------|--------|
| **Winner** (top 10%) | CPA < $45, CTR > 1.5%, holds 7+ days | Scale: increase budget 20-30% every 3 days |
| **Performer** (top 25%) | CPA $45-55, CTR > 1.0%, holds 5+ days | Maintain + iterate with new hooks |
| **Marginal** (50th pctl) | CPA $55-70, CTR 0.8-1.0% | Test 2-3 hook variations before killing |
| **Loser** (bottom 50%) | CPA > $70 or CTR < 0.8% | Kill after $50-70 spent |

---

## 5. Creative Scaling Protocol

*(Dialogue upgrade UPG-9)*

### 5.1 From Testing to Scaling

When a creative graduates from the testing campaign (CPA ≤ $45, CTR > 1.5%, Day 7):

```
STEP 1: GRADUATE (Day 7-8)
  Move winning creative to scaling campaign (CBO or Advantage+).
  Initial scaling budget: 2x testing budget for that creative.
  Example: tested at $15/day → scale to $30/day.

STEP 2: RAMP (Day 8-20)
  Increase budget 20-30% every 3 days IF CPA stays within target.
  $30 → $40 → $52 → $67 → $87...
  Monitor CPA daily. If CPA spikes >20% after a budget increase,
  hold for 48 hours before increasing again.

STEP 3: STABILIZE (Day 20+)
  When budget increase causes CPA to rise above 1.3x target ($59),
  you've hit the creative's ceiling. HOLD at the last stable budget.
  This is the creative's "cruising altitude."

STEP 4: MAINTAIN (ongoing)
  At cruising altitude, monitor weekly:
  - CPA trending up? → Early fatigue. Start producing replacement.
  - CTR declining? → Audience saturation. Expand targeting or refresh hook.
  - ROAS stable? → Don't touch it. Let it run.
```

### 5.2 When to Stop Scaling

| Signal | Meaning | Action |
|--------|---------|--------|
| Budget increase causes CPA > 1.3x target | Hit the creative's spend ceiling | Hold at last stable level |
| Frequency > 3.0 in broad targeting | Audience exhaustion at this budget | Can't scale further without new audiences |
| CPA rising 3 days in a row | Beginning of fatigue cycle | Reduce budget 30%, start replacement |
| Adding $100/day yields <$100 incremental revenue | Diminishing returns | Maintain, don't scale |

---

## 6. Creative Fatigue

### 5.1 Decay Rates at Low Spend

| Monthly Spend | Typical Creative Lifespan |
|--------------|--------------------------|
| $500-1K | 4-8 weeks |
| $1K-3K | 3-6 weeks |
| $3K-10K | 2-4 weeks |
| $10K+ | 1-3 weeks |

[Confidence: C | Source: Motion analytics data, DTC practitioner reports]

### 5.2 Fatigue Signals

**Early warning (act within 3-5 days):**
1. Frequency climbing above 2.5
2. CTR declining 20%+ from peak
3. CPM increasing 15-25%+ from baseline

**Confirmed fatigue (act immediately):**
4. CPA increasing 30%+ over 5-7 day moving average
5. CTR drops below 0.7% from 1.2%+ baseline
6. ROAS drops below breakeven

**Response protocol**: Reduce budget 30-50% to extend life while preparing replacement. Launch replacement in testing campaign. Never increase budget on a fatigued creative.

### 5.3 New Creative Volume Required

| Monthly Spend | New Creatives/Month | Mix |
|--------------|---------------------|-----|
| $500-1K | 3-5 | 1-2 new concepts + 2-3 iterations |
| $1K-2K | 5-8 | 2-3 new concepts + 3-5 iterations |
| $2K-5K | 8-15 | 3-5 concepts + 5-10 iterations |

"New creative" includes lightweight production: re-cutting a winning video with a new hook (30 min), turning a UGC screenshot into a static ad, changing a headline overlay on a proven format.

---

## 6. Creative Brief → Test → Learn → Iterate Loop

### 6.1 Two-Week Cycle

```
PHASE 1: BRIEF (Day 1)
  Define concept/angle being tested
  Write hypothesis: "We believe [audience] will respond to
    [message] because [reason]"
  Specify format, hook approach, CTA, offer
  Reference prior learnings
  Assign naming convention code

PHASE 2: PRODUCE (Day 2-5)
  Create asset (video, image, copy)
  Video: film/edit with 2-3 hook variations
  Static: create 2-3 headline variations
  Quality check against M22 UGC Brand Brief (approved claims)

PHASE 3: TEST (Day 5-12)
  Launch in testing campaign (ABO, $15-20/day per creative)
  Follow Day-by-Day Decision Protocol (Section 4.2)

PHASE 4: LEARN (Day 12-13)
  Log outcome in test_log.json (Winner/Performer/Marginal/Loser)
  Write 1-2 sentence learning
  Compare to prior tests for emerging patterns

PHASE 5: ITERATE (Day 13-15)
  Winner → Graduate to scaling, plan 2-3 hook variations
  Performer → Test 2 new hooks on same body
  Marginal → Test different format with same concept
  Loser → Archive learnings, next concept
```

**Cycle time**: 2 weeks per loop. **Monthly cadence**: 2 full loops minimum.

### 6.2 Naming Convention

```
[Date]_[Platform]_[Format]_[Concept]_[HookVariant]_[Version]

Examples:
2026-02_META_UGC_OceanPurity_HookA_v1
2026-02_META_STATIC_AthletePerformance_Headline3_v2
2026-02_TT_SPARK_MorningRoutine_HookB_v1
```

### 6.3 Per-Creative Tracking Fields

Every creative gets logged in test_log.json with:
- Creative ID (naming convention), launch/kill dates, platform, campaign
- Format, concept/angle, hook, CTA, offer, target audience
- Performance: spend, impressions, CPM, clicks, CPC, CTR, purchases, CPA, ROAS, hook rate, hold rate
- Outcome: Winner / Performer / Marginal / Loser
- Learning: 1-2 sentences
- Next action: Scale / Iterate (what specifically?) / Kill

---

## 7. TikTok-Specific Testing

### 7.1 Key Differences from Meta

| Dimension | Meta | TikTok |
|-----------|------|--------|
| Creative style | Polished UGC, direct response | Raw/authentic, entertainment-first |
| Hook window | 3 seconds | 1-2 seconds (faster scroll) |
| Sound | Often off (Feed) | Almost always ON |
| Creative lifespan | 4-8 weeks at low spend | 2-4 weeks (faster cycle) |
| Attribution | Generally reliable with CAPI | View-through attribution inflated |
| Min daily budget | $5/ad set ($15-20 recommended) | $20/ad group (platform-enforced) |

### 7.2 Budget Allocation

**Start 100% Meta. Add TikTok later.**

| Phase | Timeline | Meta | TikTok |
|-------|----------|------|--------|
| Launch | Month 1-3 | 100% | 0% (organic/Spark only) |
| Expansion | Month 4-6 | 70-80% | 20-30% |
| Diversification | Month 6+ | 50-60% | 30-40% |

Exception: If strong TikTok-native UGC is available, consider $200-300/month Spark Ads test in Month 2-3.

### 7.3 Spark Ads Strategy

Send product to 5-10 micro-creators (1K-50K followers in wellness/fitness). Have them post organically. If a post gets organic traction (500+ views, good engagement), boost with Spark Ads. Cheapest way to test creative concepts on TikTok.

---

## 8. IonWave Month 1 Action Plan ($1,000 Budget)

1. **Meta only.** Do not split budget.
2. **Produce 4 creatives** testing fundamentally different concepts:
   - Ocean purity / deep sea origin (UGC or founder video)
   - Athletic performance / electrolyte switch (UGC testimonial)
   - Daily wellness ritual / morning routine (lifestyle UGC)
   - Anti-synthetic / clean label (static comparison ad)
3. **Sequential batches, NOT all at once.** *(Dialogue upgrade UPG-2: At $1K/month = $33/day, you can only fund 1-2 ad sets at $15-20/day simultaneously. Run Batch 1 (2 creatives, $15/day each) for 5-7 days. Kill losers. Run Batch 2 (2 creatives) for 5-7 days.)*
4. **1 ABO testing campaign**, $15-20/day per ad set (max 2 ad sets simultaneously at $1K budget), broad targeting (US, 25-55).
5. **Follow two-stage kill protocol (Section 4.2).** Don't kill on CPA until 50+ link clicks.
6. **Set up creative test log on day 1.** Track everything from the start.

### 8.1 Critical Note for $59 Subscription Model

First-purchase ROAS of 1.0-1.8x is normal and expected for premium subscription DTC. Profitability comes from month 2+ subscription revenue. A creative generating $50 CPA customers who retain for 6 months vastly outperforms one generating $35 CPA that cancel after month 1. Optimize for LTV-to-CAC ratio over time, not just first-purchase CPA.

---

## 9. Benchmarks — DTC Supplement on Meta

| Metric | Low | Median | Good | Excellent |
|--------|-----|--------|------|-----------|
| CPM | $25-35 | $15-25 | $10-18 | <$10 |
| CPC (link) | $3.00+ | $1.50-3.00 | $0.80-1.50 | <$0.80 |
| CTR (link) | <0.8% | 0.8-1.5% | 1.5-2.5% | >2.5% |
| CVR (LP→purchase) | <1.5% | 1.5-3.0% | 3.0-5.0% | >5.0% |
| CPA (first purchase) | >$80 | $40-80 | $25-45 | <$25 |
| ROAS (first purchase) | <1.0x | 1.0-2.0x | 2.0-3.5x | >3.5x |

[Confidence: C | Source: Varos, Revealbot, Databox benchmark reports. IonWave-adjusted: higher CPM ($18-28) for premium US health audience, lower CVR (2-3%) for $59 price point.]

---

## 10. Intelligence Gaps

| ID | Gap | Grade | Upgrade Path |
|----|-----|-------|-------------|
| GAP-1 | No IonWave creative performance data exists | D | Run first 5 creative tests. Calibrate all thresholds with real data. |
| GAP-2 | Creative fatigue rates are category benchmarks, not IonWave-specific | D | Track actual lifespan of first 3 winning creatives. |
| GAP-3 | Meta Advantage+ interface evolving rapidly | C | Verify current ABO availability and test structure monthly. |
| GAP-4 | TikTok benchmarks may not apply to premium supplement | C | Defer TikTok until Month 4+. Validate with small test budget first. |
