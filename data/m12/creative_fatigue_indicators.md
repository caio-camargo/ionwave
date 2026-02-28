# Creative Fatigue Indicators — M12: Ad Creative

**Version**: 1.0.0
**TUP**: M12 — Ad Creative
**Cluster**: BCL-3 (DR & Creative)
**Purpose**: Detection system for creative fatigue with response protocols
**Status**: Production
**Cross-references**: M12 (Creative Replenishment, Creative Performance Tracker), M13 (ROAS Decay Model, Winning Ad Iterations)

---

## 1. What Is Creative Fatigue?

**Definition**: Performance degradation of an ad over time as the target audience becomes over-exposed.

**Mechanism**: Repeated exposure → habituation → blindness. Brain stops processing familiar stimuli.

**Timeline**: 2-4 weeks at $100/day spend (faster at higher spend, slower at lower spend).

**Impact**: CPA increases 30-80%, hook rate declines 20-50%, ROAS collapses.

[Confidence: A | Source: M13 roas_decay_model.md, neuroscience of habituation | Date: 2026-02]

---

## 2. The 5 Fatigue Indicators

### 2.1 Indicator #1: Hook Rate Decline

**Signal**: ThruPlay Rate (or 3-second video play rate) declines >15% week-over-week.

**Example**:
- Week 1: 32% hook rate
- Week 2: 30% hook rate (-6%, NORMAL)
- Week 3: 25% hook rate (-17%, FATIGUE SIGNAL)

**Why It Matters**: Hook rate is the earliest predictor of fatigue. Audience has "seen it before" and scrolls past.

**Threshold**: >15% WoW decline = EARLY WARNING. >25% cumulative decline = CONFIRMED FATIGUE.

[Confidence: A | Source: Meta video engagement metrics | Date: 2026-02]

---

### 2.2 Indicator #2: CPM Inflation

**Signal**: Cost per 1,000 impressions rises >20% week-over-week.

**Example**:
- Week 1: $10 CPM
- Week 2: $11 CPM (+10%, NORMAL)
- Week 3: $14 CPM (+27%, FATIGUE SIGNAL)

**Why It Matters**: Meta/TikTok algorithms charge more to show fatigued ads (lower engagement = higher auction price).

**Threshold**: >30% cumulative CPM increase = CONFIRMED FATIGUE.

[Confidence: A | Source: Meta auction dynamics, M13 roas_decay_model.md | Date: 2026-02]

---

### 2.3 Indicator #3: Frequency Creep

**Signal**: Average frequency (times ad shown per person) exceeds 3-4 per week.

**Example**:
- Week 1: 1.8 frequency
- Week 2: 2.5 frequency (OK)
- Week 3: 4.2 frequency (FATIGUE RISK)

**Why It Matters**: High frequency = smaller audience repeatedly exposed. Indicates audience exhaustion.

**Threshold**: Frequency >4 = HIGH RISK. Frequency >5 = RETIRE AD.

[Confidence: A | Source: Meta frequency dynamics | Date: 2026-02]

---

### 2.4 Indicator #4: CPA Spike

**Signal**: Cost per acquisition increases >30% from baseline.

**Example**:
- Weeks 1-2: $26 CPA (baseline)
- Week 3: $32 CPA (+23%, WATCH)
- Week 4: $38 CPA (+46%, CONFIRMED FATIGUE)

**Why It Matters**: CPA is the ultimate business metric. 30%+ increase erodes profitability.

**Threshold**: CPA +30% = CONFIRMED FATIGUE. CPA +50% = RETIRE IMMEDIATELY.

[Confidence: A | Source: M13 scaling kill criteria | Date: 2026-02]

---

### 2.5 Indicator #5: CTR Decline

**Signal**: Click-through rate drops >20% from baseline.

**Example**:
- Weeks 1-2: 2.4% CTR
- Week 3: 2.0% CTR (-17%, WATCH)
- Week 4: 1.7% CTR (-29%, CONFIRMED FATIGUE)

**Why It Matters**: Lower CTR = ad no longer compelling. Audience either ignores or actively avoids.

**Threshold**: CTR -20% = CONFIRMED FATIGUE.

[Confidence: A | Source: Meta ad engagement benchmarks | Date: 2026-02]

---

## 3. Fatigue Detection Matrix

### 3.1 Severity Levels

| Level | Criteria | Action | Timeline |
|-------|----------|--------|----------|
| **HEALTHY** | All metrics stable or improving | Continue scaling | Ongoing |
| **EARLY WARNING** | 1 indicator triggered (e.g., hook rate -15%) | Prepare Tier 1 derivatives | Within 3-5 days |
| **MODERATE FATIGUE** | 2 indicators triggered (e.g., hook rate -20% + CPM +25%) | Launch derivatives NOW, reduce budget 30% | Within 24-48 hours |
| **SEVERE FATIGUE** | 3+ indicators triggered | Retire ad, launch derivatives | Immediately |

[Confidence: A | Source: Creative fatigue response protocols | Date: 2026-02]

---

### 3.2 Example Scenarios

**Scenario A: Early Warning**
- Hook Rate: -16% (TRIGGER)
- CPM: +12% (OK)
- Frequency: 2.8 (OK)
- CPA: +8% (OK)
- CTR: -5% (OK)

**Diagnosis**: EARLY WARNING (1 indicator)
**Action**: Prepare 2-3 Tier 1 derivatives (hook swaps, text overlays). Launch within 3 days.

---

**Scenario B: Moderate Fatigue**
- Hook Rate: -22% (TRIGGER)
- CPM: +28% (TRIGGER)
- Frequency: 3.9 (approaching threshold)
- CPA: +18% (OK, but rising)
- CTR: -12% (OK)

**Diagnosis**: MODERATE FATIGUE (2 indicators)
**Action**: Launch derivatives NOW. Reduce original ad budget by 30%. Monitor daily.

---

**Scenario C: Severe Fatigue**
- Hook Rate: -35% (TRIGGER)
- CPM: +42% (TRIGGER)
- Frequency: 5.2 (TRIGGER)
- CPA: +55% (TRIGGER)
- CTR: -28% (TRIGGER)

**Diagnosis**: SEVERE FATIGUE (5 indicators)
**Action**: RETIRE AD IMMEDIATELY. Pause campaign. Launch 3-5 derivatives. Do not scale original ad further.

[Confidence: A | Source: Fatigue scenario modeling | Date: 2026-02]

---

## 4. Fatigue Timeline by Budget Level

### 4.1 Spend-Based Fatigue Timelines

| Daily Spend | Fatigue Onset | Explanation |
|-------------|--------------|-------------|
| **$25-50/day** | 5-8 weeks | Low spend = slow audience saturation |
| **$50-100/day** | 3-5 weeks | IonWave launch budget (M13) |
| **$100-250/day** | 2-4 weeks | Industry standard (M13 research) |
| **$250-500/day** | 1-3 weeks | High spend = fast saturation |
| **$500+/day** | 1-2 weeks | Requires continuous creative refresh |

**IonWave Implication**: At $50-100/day Phase 1 budget, expect 4-6 week winner lifespan. Plan derivatives at Week 3.

[Confidence: A | Source: M13 roas_decay_model.md, agency benchmarks | Date: 2026-02]

---

### 4.2 Platform-Specific Fatigue Rates

**Meta**: 3-5 weeks at $100/day (largest audience, slower saturation)
**TikTok**: 2-4 weeks at $100/day (younger audience, faster scroll velocity)
**YouTube**: 4-6 weeks at $100/day (intentional viewing, longer tolerance)

**Why?** TikTok users scroll faster, see more content/day → fatigue faster. YouTube users watch longer → tolerate repetition better.

[Confidence: B | Source: Platform engagement research 2024 | Date: 2026-02]

---

## 5. Fatigue Response Playbook

### 5.1 Response Protocol: Early Warning

**Trigger**: 1 indicator triggered (e.g., hook rate -15%)

**Actions**:
1. **Prepare Tier 1 Derivatives** (M12 creative_replenishment.md):
   - Swap hook (new first 3 seconds)
   - Swap text overlay
   - Create cut-down (60s → 15s)
2. **Target**: 2-3 derivatives ready within 3 days
3. **Budget**: Keep original ad budget stable
4. **Monitoring**: Check metrics daily

**Expected Outcome**: Derivatives extend winner lifespan by 2-4 weeks.

[Confidence: A | Source: M13 winning_ad_iterations.md | Date: 2026-02]

---

### 5.2 Response Protocol: Moderate Fatigue

**Trigger**: 2 indicators triggered (e.g., hook rate -20% + CPM +25%)

**Actions**:
1. **Launch Derivatives IMMEDIATELY** (use backlog or rush production)
2. **Reduce Original Ad Budget by 30%** (slow the bleed)
3. **Increase Derivative Budget by 30%** (shift spend to fresh creative)
4. **Test 3-5 Derivatives** (higher volume needed)
5. **Monitor Daily**: Track if derivatives perform better

**Expected Outcome**: 1-2 derivatives match or beat original ad CPA.

[Confidence: A | Source: Fatigue response protocols | Date: 2026-02]

---

### 5.3 Response Protocol: Severe Fatigue

**Trigger**: 3+ indicators triggered (e.g., all 5 indicators breached)

**Actions**:
1. **PAUSE ORIGINAL AD** (stop spending on dead creative)
2. **Launch 5+ Derivatives** (high volume needed to find new winner)
3. **Test New Angles** (original angle may be exhausted)
4. **Increase Creative Production Budget** (emergency UGC order if needed)
5. **Do Not Scale Original Ad** (even if it had a good day — fatigue is terminal)

**Expected Outcome**: New winner emerges from derivatives, or pivot to new angle.

[Confidence: A | Source: Emergency creative response | Date: 2026-02]

---

## 6. Preventative Strategies

### 6.1 Strategy #1: Proactive Derivative Production

**Approach**: Don't wait for fatigue signals. Produce derivatives at Week 2-3 of winner lifespan.

**Rationale**: By the time fatigue is detected (Week 3-4), you've already lost 1-2 weeks of optimal performance. Proactive production keeps creative fresh.

**Cadence**: Produce 2-3 Tier 1 derivatives every 2 weeks for active winners.

[Confidence: A | Source: M12 creative_strategy.md 7-day refresh target | Date: 2026-02]

---

### 6.2 Strategy #2: Audience Expansion

**Approach**: If frequency >3, expand audience size (broaden targeting, add LAL tiers, test new interests).

**Rationale**: Fatigue = audience exhaustion. Fresh audience = fresh performance.

**Example**: If ad targets LAL 1-3% (frequency 4.2), expand to LAL 1-5% or test Advantage+ Broad.

[Confidence: B | Source: Meta audience expansion strategies | Date: 2026-02]

---

### 6.3 Strategy #3: Budget Pulsing

**Approach**: Reduce ad budget by 50% for 3-5 days, then return to normal.

**Rationale**: "Rest period" lets audience forget the ad. Lower frequency = reduced fatigue.

**Use Case**: If moderate fatigue detected but no derivatives ready, pulse budget to buy time.

**Caution**: Only works 1-2 times per ad. Not a long-term solution.

[Confidence: C | Source: Experimental; limited evidence | Date: 2026-02]

---

## 7. Fatigue Tracking Dashboard

### 7.1 Weekly Fatigue Monitoring (Google Sheets)

**Structure**: Add fatigue indicators to creative performance tracker (M12 creative_performance_tracker.md).

**Additional Columns**:
- **WoW Hook Rate Change** (%)
- **WoW CPM Change** (%)
- **Current Frequency**
- **WoW CPA Change** (%)
- **WoW CTR Change** (%)
- **Fatigue Level** (Healthy / Early Warning / Moderate / Severe)

**Conditional Formatting**:
- GREEN = Healthy
- YELLOW = Early Warning (1 indicator)
- ORANGE = Moderate Fatigue (2 indicators)
- RED = Severe Fatigue (3+ indicators)

**Update Frequency**: Weekly (Monday review)

[Confidence: A | Source: Creative tracking best practices | Date: 2026-02]

---

### 7.2 Fatigue Alert System (Optional, Month 6+)

**Tool**: Google Sheets + Apps Script OR Supermetrics + Slack

**Trigger**: Auto-alert when ad crosses fatigue threshold.

**Example Alert**:
"⚠️ Ad 'IW_Meta_MissingMineral_UGC_HookA_15s_v1' hit MODERATE FATIGUE:
- Hook Rate: -22% WoW
- CPM: +28% WoW
Action: Launch derivatives within 24 hours."

**Recommendation**: Manual monitoring Month 1-6, automate if volume becomes unmanageable (10+ active ads).

---

## 8. Post-Fatigue Analysis (Learning Loop)

### 8.1 Retirement Debrief

**When**: After retiring a fatigued ad.

**Questions**:
1. **How long did this ad last?** (days from launch to retirement)
2. **What was total spend?** (cumulative)
3. **What was average CPA over lifespan?** (vs target)
4. **Which indicator triggered first?** (hook rate, CPM, frequency, CPA, CTR)
5. **Did derivatives work?** (if tested, what was their CPA?)
6. **What would we do differently?** (produce derivatives earlier? expand audience sooner?)

**Output**: 1-paragraph log entry in creative tracker "Notes" column.

[Confidence: A | Source: Continuous improvement protocols | Date: 2026-02]

---

### 8.2 Winner Lifespan Benchmarking

**Goal**: Establish IonWave-specific fatigue timelines by angle, format, platform.

**Method**: Track all winners for 3+ months, calculate:
- Average lifespan (days)
- Average spend before fatigue
- Derivative success rate (% of derivatives that matched or beat original CPA)

**Use Case**: "Missing Mineral UGC ads on Meta last 28 days on average → produce derivatives at Day 21."

**Timeline**: Months 3-6 to gather sufficient data.

[Confidence: B | Source: Data-driven fatigue modeling | Date: 2026-02]

---

## 9. Fatigue Myths & Misconceptions

### Myth #1: "Higher production quality = longer lifespan"

**Reality**: Production quality does NOT prevent fatigue. A $5,000 studio ad fatigues just as fast as a $50 UGC ad if the message is the same.

**Why?** Fatigue is about MESSAGE repetition, not visual polish.

[Confidence: A | Source: Creative fatigue research | Date: 2026-02]

---

### Myth #2: "Pausing an ad for a week resets fatigue"

**Reality**: Pausing helps slightly (reduces frequency), but does NOT reset fatigue. Audience still remembers the ad.

**Why?** Memory decay takes months, not days.

**Better Solution**: Launch derivatives with new hooks.

[Confidence: B | Source: Memory research | Date: 2026-02]

---

### Myth #3: "If an ad is fatigued, the angle is dead"

**Reality**: Angle can still work. Test new hooks, formats, or creatives within the same angle.

**Example**: "Missing Mineral" angle fatigues with Hook A. Hook B (different first 3 seconds) performs well.

[Confidence: A | Source: M13 winning_ad_iterations.md | Date: 2026-02]

---

## Intelligence Gaps

| Gap | Impact | Validation Path |
|-----|--------|----------------|
| IonWave-specific fatigue timelines | High | Track all ads Month 1-6, measure average winner lifespan by angle/format/platform |
| Optimal derivative production timing | Medium | Test proactive (Week 2) vs reactive (Week 4) derivative production, compare lifespan extension |
| Budget pulsing effectiveness | Low | Experimental — test on 1-2 fatigued ads, measure recovery |
| Frequency threshold for supplements vs other categories | Medium | Industry benchmark is 3-4; validate if supplement audience tolerates higher/lower frequency |

---

## Next Steps

1. **Pre-Launch**: Add fatigue indicator columns to creative performance tracker
2. **Month 1**: Establish baseline metrics (hook rate, CPM, CPA) for all ads
3. **Month 2**: Monitor WoW changes, detect first fatigue signals
4. **Month 3**: Run first post-fatigue analysis, refine thresholds
5. **Month 6**: Benchmark IonWave-specific fatigue timelines

---

**Version History**:
- v1.0.0 (2026-02-10): Initial fatigue detection system with 5 indicators, severity matrix, response protocols, preventative strategies, tracking dashboard
