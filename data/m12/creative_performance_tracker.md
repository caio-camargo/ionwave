# Creative Performance Tracker — M12: Ad Creative

**Version**: 1.0.0
**TUP**: M12 — Ad Creative
**Cluster**: BCL-3 (DR & Creative)
**Purpose**: Metrics, KPIs, and tracking methodology for ad creative performance
**Status**: Production
**Cross-references**: M13 (Attribution Model, Daily Checklist), M30 (Analytics & Dashboards)

---

## 1. Core Creative Metrics

### 1.1 Primary Metrics (Decision-Making)

| Metric | Definition | Target | Why It Matters |
|--------|-----------|--------|----------------|
| **CPA** (Cost Per Acquisition) | Total ad spend ÷ purchases | <$30 (HYP-001) | Ultimate profitability metric |
| **Hook Rate** | ThruPlay views ÷ impressions | >25% | Measures first 3-second effectiveness |
| **ROAS** | Revenue ÷ ad spend | >2.5x (break-even) | Determines scalability |
| **CTR** | Clicks ÷ impressions | >2% (Meta), >1.5% (TikTok) | Measures message-market fit |

[Confidence: A | Source: M13 scaling_framework.md, M30 mvd.md | Date: 2026-02]

---

### 1.2 Secondary Metrics (Diagnostic)

| Metric | Definition | Target | Use Case |
|--------|-----------|--------|----------|
| **3-Second Video Play Rate** | 3s video plays ÷ impressions | >40% | Hook quality check |
| **25%/50%/75%/95% Video Completion** | % of viewers reaching each milestone | 50% at 25%, 25% at 50% | Engagement depth |
| **CPM** (Cost Per Mille) | Cost per 1,000 impressions | $8-15 (Meta) | Fatigue indicator (CPM +30% = fatigue) |
| **Frequency** | Avg times ad shown to same person | <3 per week | Fatigue risk threshold |
| **Outbound CTR** | Link clicks ÷ impressions | >1.5% | LP-ad alignment check |

[Confidence: A | Source: Meta reporting metrics, M13 roas_decay_model.md | Date: 2026-02]

---

## 2. Tracking Methodology

### 2.1 The Creative Performance Dashboard (Google Sheets)

**Structure**: One row per ad variant, updated weekly.

**Columns**:
1. **Ad Name** (naming convention: M12 creative_naming_convention.md)
2. **Platform** (Meta, TikTok, YouTube)
3. **Angle** (MissingMineral, Contrarian, etc.)
4. **Format** (UGC, Founder, Static)
5. **Hook** (HookA, HookB, etc.)
6. **Length** (15s, 30s, 60s)
7. **Date Launched**
8. **Status** (Testing, Winner, Fatigued, Retired)
9. **Spend** (cumulative)
10. **Impressions**
11. **CPM**
12. **Hook Rate** (ThruPlay/Impressions)
13. **CTR**
14. **Clicks**
15. **Purchases**
16. **CPA**
17. **Revenue**
18. **ROAS**
19. **Frequency**
20. **Days Active**
21. **Notes**

**Example Row**:
| Ad Name | Platform | Angle | Format | Hook | Length | Date | Status | Spend | Impr | CPM | Hook Rate | CTR | Clicks | Purch | CPA | Rev | ROAS | Freq | Days | Notes |
|---------|----------|-------|--------|------|--------|------|--------|-------|------|-----|-----------|-----|--------|-------|-----|-----|------|------|------|-------|
| IW_Meta_MissingMineral_UGC_HookA_15s_v1 | Meta | MissingMineral | UGC | HookA | 15s | 2026-02-10 | Winner | $450 | 45K | $10 | 32% | 2.4% | 1080 | 18 | $25 | $1,260 | 2.8x | 2.1 | 21 | Strong performer, watch for fatigue Week 4 |

[Confidence: A | Source: Creative tracking best practices | Date: 2026-02]

---

### 2.2 Data Source Integration

**Where to Pull Data**:
- **Meta Ads Manager**: Campaign → Ad Set → Ad level reporting (export CSV weekly)
- **TikTok Ads Manager**: Campaign reporting → export
- **Google Analytics 4**: Landing page performance (cross-reference with ad traffic)
- **Shopify**: Order data (validate attribution)

**Update Frequency**:
- **Daily**: CPA, spend, purchases (for active testing)
- **Weekly**: Full dashboard update (all metrics)
- **Monthly**: Historical trend analysis

[Confidence: A | Source: M13 daily_checklist.md | Date: 2026-02]

---

## 3. Performance Thresholds (Kill vs Scale)

### 3.1 Testing Phase (First $50 Spend)

| Decision | Threshold | Action |
|----------|-----------|--------|
| **KILL** | CPA >$60 (2x target) OR <1 conversion after $50 | Pause ad immediately |
| **CONTINUE TESTING** | CPA $30-60 OR 1-3 conversions | Monitor, give 2-3 more days |
| **SCALE** | CPA <$30 AND ≥10 conversions | Increase budget 20-30% |

[Confidence: A | Source: M14 testing_protocol.md kill criteria | Date: 2026-02]

---

### 3.2 Scaling Phase (Winner Management)

| Signal | Threshold | Action |
|--------|-----------|--------|
| **Healthy Winner** | CPA stable, hook rate >25%, frequency <3 | Continue scaling |
| **Early Fatigue Warning** | CPM +20%, hook rate -10%, frequency 3-4 | Prepare Tier 1 derivatives |
| **Fatigue Confirmed** | CPA +30%, hook rate -20%, CPM +40%, frequency >4 | Launch derivatives, reduce budget 50% |
| **Retire** | CPA >2x target after derivative attempts | Pause ad, log learnings |

[Confidence: A | Source: M13 roas_decay_model.md, M12 creative_fatigue_indicators.md | Date: 2026-02]

---

## 4. Performance Patterns to Watch

### 4.1 Hook Rate Decline Pattern

**Healthy Ad**:
- Week 1: 32% hook rate
- Week 2: 30% hook rate (-6%)
- Week 3: 28% hook rate (-6%)
- Week 4: 26% hook rate (-7%)

**Fatigued Ad**:
- Week 1: 32% hook rate
- Week 2: 28% hook rate (-13%)
- Week 3: 22% hook rate (-21%)
- Week 4: 18% hook rate (-18%) → RETIRE

**Rule**: >15% week-over-week decline = fatigue signal.

[Confidence: B | Source: Creative fatigue industry patterns | Date: 2026-02]

---

### 4.2 CPM Inflation Pattern

**Healthy Ad**:
- Week 1: $10 CPM
- Week 2: $11 CPM (+10%)
- Week 3: $11.50 CPM (+5%)
- Week 4: $12 CPM (+4%)

**Fatigued Ad**:
- Week 1: $10 CPM
- Week 2: $12 CPM (+20%)
- Week 3: $15 CPM (+25%)
- Week 4: $18 CPM (+20%) → RETIRE

**Rule**: >30% cumulative CPM increase = fatigue confirmed.

[Confidence: A | Source: Meta CPM mechanics, fatigue research | Date: 2026-02]

---

## 5. Comparative Analysis (Angle vs Format vs Platform)

### 5.1 Angle Performance Ranking

**How to Analyze**: Filter dashboard by angle, calculate average CPA across all ads in that angle.

**Example Output** (Month 3):
| Angle | Ads Tested | Avg CPA | Winner Count | Winner % |
|-------|-----------|---------|--------------|----------|
| Missing Mineral | 12 | $26 | 3 | 25% |
| Contrarian | 8 | $32 | 1 | 12.5% |
| Comparison | 10 | $29 | 2 | 20% |
| Problem Reframe | 5 | $38 | 0 | 0% |
| Authority | 6 | $35 | 1 | 16.7% |

**Decision**: Double down on Missing Mineral (lowest CPA, highest winner %).

---

### 5.2 Format Performance Ranking

**How to Analyze**: Filter dashboard by format, calculate average CPA.

**Example Output** (Month 3):
| Format | Ads Tested | Avg CPA | Hook Rate | Notes |
|--------|-----------|---------|-----------|-------|
| UGC | 18 | $27 | 31% | Best performer |
| Founder | 10 | $33 | 26% | Works for authority angles |
| Static | 6 | $42 | 18% | Low engagement |
| Testimonial | 7 | $29 | 28% | Strong for warm audiences |

**Decision**: Prioritize UGC, test more testimonials.

---

### 5.3 Platform Performance Comparison

**How to Analyze**: Compare CPA, hook rate, ROAS by platform.

**Example Output** (Month 3-4):
| Platform | Spend | CPA | ROAS | Hook Rate | Notes |
|----------|-------|-----|------|-----------|-------|
| Meta | $4,500 | $28 | 2.9x | 30% | Primary channel, scalable |
| TikTok | $1,200 | $35 | 2.3x | 25% | Higher engagement, lower conv rate |
| YouTube | $800 | $32 | 2.6x | 22% | Educational content performs best |

**Decision**: Meta remains primary, TikTok second (Month 3+), YouTube third (Month 4+).

[Confidence: B | Source: M13 channel_diversification.md | Date: 2026-02]

---

## 6. Weekly Performance Review Protocol

### 6.1 Monday Review Checklist

**Tasks** (30 minutes):
1. Export last week's ad performance from Meta/TikTok/YouTube
2. Update creative performance tracker (all metrics)
3. Calculate week-over-week changes (CPA, hook rate, CPM)
4. Identify:
   - New winners (CPA <$30, ≥10 conversions)
   - Fatigued ads (CPA +30%, hook rate -20%)
   - Underperformers to kill (CPA >$60)
5. Flag actions for the week:
   - Scale winners (increase budget 20-30%)
   - Produce derivatives for fatigued winners
   - Kill underperformers
   - Launch backlog ads

**Output**: Action list for the week.

[Confidence: A | Source: M13 daily_checklist.md | Date: 2026-02]

---

### 6.2 Monthly Performance Deep Dive

**Tasks** (60-90 minutes):
1. Angle performance ranking (which angles drive lowest CPA?)
2. Format performance ranking (UGC vs Founder vs Static?)
3. Hook testing results (which hooks had highest hook rate?)
4. Winner lifespan analysis (how long do winners last before fatigue?)
5. Hit rate calculation (% of tested ads that become winners)
6. Platform ROI comparison (which platform delivers best ROAS?)
7. Creative production ROI (did $500 UGC spend yield CAC improvement?)

**Output**: Monthly insights report (1-page summary for team).

[Confidence: B | Source: Monthly business review best practices | Date: 2026-02]

---

## 7. Attribution Nuances

### 7.1 Platform-Reported vs MER

**Challenge**: Meta reports ROAS 3.5x, but Shopify revenue ÷ total ad spend (MER) = 2.8x.

**Why?** Attribution windows, multi-touch paths, view-through conversions inflate platform-reported ROAS.

**Solution**: Track BOTH metrics:
- **Platform ROAS**: Directional signal (which ads work?)
- **Blended MER** (M30): True profitability (M30 mvd.md)

**Decision Rule**: Platform ROAS guides creative decisions, MER guides budget decisions.

[Confidence: A | Source: M13 attribution_model.md, M30 attribution_framework.md | Date: 2026-02]

---

### 7.2 View-Through vs Click-Through Attribution

**Meta Default**: 7-day click, 1-day view attribution.

**Meaning**:
- **Click Attribution**: User clicked ad, purchased within 7 days → ad gets credit
- **View Attribution**: User saw ad (didn't click), purchased within 1 day → ad gets partial credit

**Creative Implication**: High-engagement ads (strong hook, long watch time) benefit from view-through attribution even if CTR is lower.

**Tracking**: Meta reports both. Focus on click-through for direct response, view-through for brand/awareness.

[Confidence: A | Source: Meta attribution documentation | Date: 2026-02]

---

## 8. Performance Benchmarks (Industry vs IonWave)

### 8.1 Industry Benchmarks (Health/Supplement D2C, 2024-2025)

| Metric | Industry Avg | Top Quartile | Source |
|--------|-------------|--------------|--------|
| **Hook Rate** | 20-25% | 30-40% | Meta Creative Best Practices 2024 |
| **CTR** | 1.5-2.0% | 2.5-3.5% | Wordstream 2024 benchmarks |
| **CPA** | $35-50 | $20-30 | D2C supplement category avg |
| **ROAS** | 2.0-2.5x | 3.0-4.0x | Agency benchmarks |
| **CPM** | $10-20 | $7-12 | Meta auction dynamics 2024 |

[Confidence: B | Source: Industry benchmark reports 2024-2025 | Date: 2026-02]

---

### 8.2 IonWave Target Benchmarks

| Metric | Phase 1 Target (Month 1-3) | Phase 2 Target (Month 4-6) | Phase 3 Target (Month 7-12) |
|--------|---------------------------|---------------------------|----------------------------|
| **CPA** | <$35 (acceptable), <$28 (good) | <$30 (HYP-001 target) | <$25 (optimized) |
| **Hook Rate** | >25% | >28% | >30% |
| **ROAS** | >2.5x (break-even) | >3.0x | >3.5x |
| **Winner Hit Rate** | 10-15% | 15-20% | 20-25% |

**Why Phase-Gated?** Month 1-3 = learning phase (expect higher CPA). Month 4+ = optimization phase (proven winners scaled).

[Confidence: B | Source: M13 scaling_framework.md, M14 testing expectations | Date: 2026-02]

---

## 9. Reporting Cadence

### 9.1 Daily (During Active Testing)

**Audience**: Operator/founder only
**Format**: Quick dashboard glance (5 min)
**Metrics**: Spend, CPA, purchases (current day)
**Action**: Kill underperformers if threshold breached

---

### 9.2 Weekly

**Audience**: Internal team (operator + any partners)
**Format**: Updated creative performance tracker + 1-page summary
**Metrics**: All primary + secondary metrics, week-over-week changes
**Action**: Scale winners, prepare derivatives, plan production

---

### 9.3 Monthly

**Audience**: Stakeholders (founder, advisors, investors if applicable)
**Format**: Creative insights report (1-2 pages)
**Contents**:
- Angle performance ranking
- Format performance ranking
- Winner count + lifespan
- Hit rate
- Platform ROI comparison
- Next month's creative roadmap

[Confidence: A | Source: Reporting best practices | Date: 2026-02]

---

## 10. Tools & Automation

### 10.1 Recommended Tools

**Creative Performance Tracking**:
- **Google Sheets** (free): Sufficient for Month 1-6, manual CSV imports
- **Supermetrics** ($99/month): Auto-sync Meta/TikTok/Google data to Sheets (Month 6+)
- **Triple Whale** ($129/month): All-in-one D2C dashboard, creative analytics (Month 6+)
- **Motion** ($99/month): Creative analytics + fatigue detection (Month 6+)

**IonWave Recommendation**: Google Sheets (Month 1-6), add Supermetrics if manual updates become bottleneck (Month 6+).

[Confidence: A | Source: D2C analytics tool landscape 2024 | Date: 2026-02]

---

### 10.2 Automated Alerts (Optional, Month 6+)

**Use Case**: Auto-notify when ad crosses threshold (e.g., "Ad X just hit $60 CPA — kill?").

**How to Build**:
- Google Sheets + Apps Script: Conditional formatting + email trigger
- Slack integration: Auto-post daily performance summary to Slack channel
- Meta Rules: Auto-pause ads if CPA >$60 after $50 spend (risky, prefer manual)

**Recommendation**: Manual for Month 1-6 (learn the system), automate later if needed.

---

## Intelligence Gaps

| Gap | Impact | Validation Path |
|-----|--------|----------------|
| IonWave-specific benchmarks (hook rate, CPA, winner %) | High | Establish baseline Month 1-3, refine targets Month 4+ |
| Optimal tracking frequency (daily vs weekly updates) | Low | Test both cadences, settle on what's sustainable |
| View-through attribution value for IonWave | Medium | Compare Meta view-through vs click-through attribution split Month 2-3 |

---

## Next Steps

1. **Pre-Launch** (Week -1): Set up creative performance tracker (Google Sheets template)
2. **Day 1**: Integrate first ad data (even if limited)
3. **Week 1**: Establish weekly Monday review ritual (30 min)
4. **Month 3**: Run first monthly deep dive, refine benchmarks
5. **Month 6**: Evaluate tool upgrade (Supermetrics or Triple Whale)

---

**Version History**:
- v1.0.0 (2026-02-10): Initial performance tracking framework with metrics, thresholds, analysis methods, reporting cadence
