# VSL Testing Protocol

**Version**: 1.0.0
**TUP**: M11 — VSL Production
**Cluster**: BCL-3 (DR & Creative)
**Purpose**: Statistical rigor for creative testing — no guessing, no vibes
**Status**: Production

---

## Core Principle

**Data kills creative. Gut feeling kills businesses.**

Every VSL test must reach statistical significance before declaring a winner. No exceptions.

[Confidence: A | Source: Direct response testing best practices (Agora, ClickBank) | Date: 2026-02-09]

---

## Testing Hierarchy

**Test in this order. Never test lower-level variables before higher-level winners are found.**

| Level | Variable | Impact | Test First? |
|-------|----------|--------|-------------|
| **1. ANGLE** | Which story/mechanism | 10x | ✅ YES — Test first |
| **2. HOOK** | First 3-5 seconds | 3-5x | Test within winning angle |
| **3. BODY** | Proof/mechanism section | 2x | Test within winning hook |
| **4. OFFER** | Pricing/bonuses/guarantee | 1.5x | Test within winning body |
| **5. CTA** | Button text, urgency | 1.1x | Test last — smallest impact |

**Why this order matters**:
- Testing CTA variants before finding the winning angle is like optimizing the paint color on a car that doesn't run.
- Angle has 10x more impact than CTA. Find the right story first.

Each level requires its own test cycle before moving down.

[Confidence: A | Source: ClickBank top performers, Agora testing frameworks | Date: 2026-02-09]

---

## Test Parameters

| Parameter | Minimum | Target | Notes |
|-----------|---------|--------|-------|
| **Budget per variant** | $50 | $150-250 | Must reach statistical significance |
| **Impressions per variant** | 1,000 | 3,000-5,000 | Minimum for reliable CPA data |
| **Test duration** | 48 hrs | 5-7 days | Account for day-of-week variance |
| **Variants per test** | 2 | 3-5 | One control + variations |
| **Statistical confidence** | 85% | 95% | 85% acceptable for early tests |
| **Audience** | Broad (1% LAL max) | Broad | Don't narrow audience during creative testing |

**Critical**: Don't narrow targeting during creative tests. If you test on a hyper-narrow audience (e.g., "30-35 male biohackers in Austin"), you won't know if the creative works or if the audience is just small.

Test creative on BROAD audiences. Narrow after you find a winner.

[Confidence: A | Source: Meta Ads best practices 2026 | Date: 2026-02-09]

---

## Winner Criteria

| Metric | Kill Threshold | Continue Testing | Winner | Champion |
|--------|---------------|------------------|--------|----------|
| **CPA** | > 3x target | 1.5-3x target | < 1.5x target | < target CPA |
| **Hook Rate** (3-sec view) | < 20% | 20-30% | 30-40% | > 40% |
| **Hold Rate** (completed view) | < 10% | 10-20% | 20-30% | > 30% |
| **CTR** | < 0.5% | 0.5-1.0% | 1.0-2.0% | > 2.0% |
| **ROAS** | < 0.5x | 0.5-1.0x | 1.0-2.0x | > 2.0x |

**IonWave target CPA**: $30 (based on M3 Financial Model, 40% gross margin scenario)

**Winner threshold**: CPA < $45 (1.5x target)
**Champion threshold**: CPA < $30 (at-target)

[Confidence: B | Source: Derived from M3 Financial Model (unresolved margin dispute) | Date: 2026-02-09]

---

## Kill Rules

### HARD KILLS (stop immediately, no exceptions)

1. **CPA > 3x target after $150 spend** → Angle is fundamentally wrong
2. **Hook rate < 15% after 2,000 impressions** → Hook doesn't stop the scroll
3. **Zero purchases after $250 spend** → Fundamental mismatch (product-market fit issue, not creative)

**Action**: Kill the variant. Move to next test. Document learnings in post-mortem.

### SOFT KILLS (evaluate, likely kill)

1. **CPA 2-3x target after $250** → May iterate hook but angle is suspect
2. **High CTR but zero conversions** → Landing page or offer problem, NOT VSL (hand off to M15)
3. **CPA declining but still above target** → Extend test 48 hrs max, then decide

**Action**: Evaluate context. If you've already tested 3+ hooks on this angle with no winner, kill the angle.

### NEVER KILL

1. **Before minimum impressions reached** (1,000 min) → False signal, variance too high
2. **Based on single-day data** → Day-of-week variance can swing CPA 30-50%
3. **Because of 'gut feeling'** → Data only. No exceptions.

---

## Scaling Protocol

Once you find a winner, scale methodically. Don't jump from $50/day to $500/day overnight.

| Phase | Daily Budget | Action | Watch For |
|-------|-------------|--------|-----------|
| **Test** | $25-50/variant | Run test, collect data | Statistical significance (3,000+ impressions) |
| **Validate** | $100-200/day | Run winner at 2x budget for 5 days | CPA stability — not just one good day |
| **Scale 1** | $300-500/day | Increase 20% every 48 hrs if CPA holds | CPA creep > 15% (sign of audience saturation) |
| **Scale 2** | $500-1000/day | Duplicate to new ad sets, new audiences (1% LAL, 2% LAL) | Audience saturation, frequency > 2.5 |
| **Scale 3** | $1000+/day | Launch on additional platforms (TikTok, YouTube), create derivative content | Creative fatigue (declining CTR over 7 days) |
| **Refresh** | Maintain | New hooks on winning angle, new proof points | When CPA rises 20%+ from peak |

**Key insight**: CPAs often increase 10-20% when you scale. This is normal. Only panic if CPA > 1.5x target.

**Creative fatigue timeline**: Most VSLs start showing fatigue at 4-6 weeks. Plan for refresh before CPA degrades.

[Confidence: A | Source: ClickBank scaling benchmarks, Meta Ads best practices | Date: 2026-02-09]

---

## Platform-Specific Testing

Test the same VSL across platforms to identify where IonWave converts best.

| Platform | Budget Allocation | Expected CPA Range | Notes |
|----------|------------------|-------------------|-------|
| **Meta (FB + IG)** | 50% | $25-40 | Largest scale potential, mature targeting |
| **TikTok** | 30% | $30-50 | Younger audience, UGC-style VSLs perform better |
| **YouTube** | 20% | $20-35 | Long-form tolerance, higher intent audience |

**Test protocol**: Run same VSL on all 3 platforms simultaneously with $500 budget each. Measure CPA, hook rate, completion rate. Double down on best-performing platform.

**Adaptation needs**:
- **TikTok**: Faster pacing, text overlays, vertical format
- **Meta**: Captions mandatory (85% watch with sound off)
- **YouTube**: Can use longer VSLs (5-8 min), pre-roll vs mid-roll testing

[Confidence: C | Source: Industry benchmarks — IonWave-specific data unavailable until post-launch | Date: 2026-02-09]

---

## Hook Testing Protocol (Within Winning Angle)

Once you've identified a winning angle, optimize the hook.

**Process**:
1. Produce 5 hook variants (use `hook_library.md` frameworks)
2. Test each as first 5 seconds of ad, same body/CTA
3. Spend $20-30 per hook variant (2-3 days)
4. Measure: Hook Rate (ThruPlay/Impressions), Hold Rate at 0:15, CPA
5. Kill anything below 20% hook rate after $50 spend
6. Winner = highest hook rate with acceptable CPA
7. Lock winner, test next variable (body or offer)
8. Repeat every 2-3 weeks to combat creative fatigue

**Expected improvement**: Hook optimization typically improves CPA by 20-40% vs original.

[Confidence: A | Source: Direct response hook testing best practices | Date: 2026-02-09]

---

## A/B Testing Checklist

Before launching any test:

- [ ] Only ONE variable is different between variants (don't test hook + CTA simultaneously)
- [ ] Minimum budget allocated ($50/variant minimum, $150+ recommended)
- [ ] Test duration set to 5-7 days (account for day-of-week variance)
- [ ] Audience is BROAD (save narrow targeting for scaling phase)
- [ ] Success criteria defined BEFORE test starts (what CPA makes this a winner?)
- [ ] Kill criteria defined (at what point do we stop spending?)
- [ ] Statistical significance calculator ready (use [Evan Miller's calculator](https://www.evanmiller.org/ab-testing/chi-squared.html))

**Common mistake**: Testing 5 variables at once (new hook + new music + new CTA + new offer + new length). You won't know which change caused the result.

**Test ONE thing at a time.**

---

## Metrics Definitions

| Metric | Definition | How to Calculate | What It Means |
|--------|-----------|------------------|---------------|
| **Hook Rate** | % of people who watched ≥3 seconds | ThruPlays (3-sec) / Impressions | Did the hook stop the scroll? |
| **Hold Rate** | % of people who completed the video | Completed Views / ThruPlays | Did they watch the whole thing? |
| **CTR** | % of people who clicked | Link Clicks / Impressions | Did they take action? |
| **CPA** | Cost per acquisition | Total Spend / Purchases | What did each customer cost? |
| **ROAS** | Return on ad spend | Revenue / Ad Spend | Are we profitable? |
| **Frequency** | Avg times same person saw ad | Impressions / Reach | Are we burning out the audience? |

**Warning signs**:
- **Frequency > 2.5** → Audience saturation, time to expand or refresh creative
- **CTR declining over 7 days** → Creative fatigue, launch new hook variants
- **CPA increasing while ROAS stable** → LTV is carrying you, but CAC efficiency is declining

---

## Intelligence Gaps & Upgrade Paths

| Gap | Current Grade | Why D/C | Upgrade Path | Target Grade |
|-----|--------------|---------|--------------|--------------|
| **IonWave-specific CPA benchmarks** | D | Pre-launch — no tested VSLs yet | Run first 5-angle test, collect real CPA data | A |
| **Platform performance comparison** | D | Don't know if Meta/TikTok/YouTube convert differently for marine plasma | Test same VSL across 3 platforms with $500 each | A |
| **Hook rate benchmarks for marine plasma category** | C | Using general supplement data (20-35%); no marine plasma-specific benchmarks | Post-launch: track hook rates across 10+ variants | A |
| **Creative fatigue timeline** | C | Using industry average (4-6 weeks); IonWave-specific timeline unknown | Track CTR decay over first 3 winning VSLs | A |

---

## Related Documents

- `vsl_as_trade_framework.md` — VSL lifecycle and portfolio strategy
- `script_architecture.md` — Script structure and kill criteria per section
- `hook_library.md` — 10 proven hook frameworks with testing guidelines
- `financial_model.md` — Cost per VSL, ROI scenarios, portfolio economics
- `production_spec.md` — Technical specs for VSL variants

---

## Sources

- [ClickBank Top Supplement Offers](https://www.clickbank.com/blog/best-supplement-affiliate-programs/)
- [Agora Direct Response Testing](https://robertskrob.com/largest-direct-response-marketing-company-communicates-new-members/)
- [Meta Ads Best Practices 2026](https://levitatemedia.com/learn/what-is-vsl-how-to-create-a-perfect-video-sales-letter)
- M3 Financial Model — IonWave target CPA ($30 baseline)
