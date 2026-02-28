# Scaling Framework

## Overview
Systematic methodology for scaling validated ad campaigns while maintaining or improving efficiency. Based on the 20% Rule, platform-specific learning phase requirements, and 2026 algorithm behavior patterns.

## The 20% Rule [Confidence: A | Source: Meta Ads best practices 2024-2025, industry consensus | Date: 2026-02]

### Core Principle
**Never increase daily budget by more than 20% at a time to avoid resetting the learning phase.**

**Why 20%**:
- Meta, TikTok, and Google algorithms use machine learning models that require stable data patterns
- Budget increases >20% trigger learning phase reset (algorithm must re-calibrate delivery)
- Learning phase reset = 3-7 days of unstable performance and inefficient delivery
- Gradual scaling maintains algorithmic confidence and delivery efficiency

### Tiered Scaling by Conversion Volume [Confidence: A | Source: High-volume account analysis, learning phase mechanics | Date: 2026-02]

**The 20% Rule is the safe default, but high-volume accounts can scale more aggressively:**

**Tier 1: <200 conversions/week per campaign**
- **Max Increase**: 20% every 3-4 days
- **Rationale**: Insufficient volume for confident learning phase stability; conservative approach required
- **Budget Range**: Typically $50-500/day

**Tier 2: 200-500 conversions/week per campaign**
- **Max Increase**: 30% every 3-4 days (tested safely)
- **Rationale**: Moderate volume provides buffer; algorithm has strong confidence signal
- **Budget Range**: Typically $500-2,000/day

**Tier 3: >500 conversions/week per campaign**
- **Max Increase**: 40-50% possible with tight monitoring
- **Rationale**: High volume = robust learning; algorithm can absorb larger budget shifts
- **Budget Range**: Typically $2,000+/day
- **Monitoring Required**: Daily ROAS checks, immediate rollback if efficiency drops >15%

**Important**: Conversion volume is the key variable, not budget. A $1,000/day campaign with 100 conversions/week should use 20% Rule (Tier 1), not 30-50%.

### Platform-Specific Thresholds [Confidence: A | Source: Platform documentation 2025-2026 | Date: 2026-02]

**Meta**:
- **20% Rule**: Applies to campaign budget or ad set budget increases
- **Frequency**: Wait 3-4 days between increases (allow algorithm to stabilize)
- **Learning Phase**: 50 conversions per week per ad set required for exit
- **Significant Edits** (trigger reset): Audience changes, budget increase >20%, new creative, bid strategy change

**TikTok**:
- **20% Rule**: Applies to ad group budget increases
- **Frequency**: Wait 2-3 days between increases (TikTok learning phase faster than Meta)
- **Learning Phase**: 50 conversions within 7 days per ad group required
- **Creative Refresh**: More sensitive to creative fatigue, scale must be paired with creative velocity

**Google/YouTube**:
- **30% Rule**: Google allows slightly higher increases (up to 30%) without major disruption
- **Frequency**: Wait 3-5 days between increases (Smart Bidding needs recalibration time)
- **Learning Phase**: 30-50 conversions per campaign in 30 days for Smart Bidding optimization
- **Seasonal Adjustments**: Algorithm adapts faster to seasonal patterns (Q4 holiday surge)

## Vertical vs Horizontal Scaling [Confidence: A | Source: Performance marketing frameworks, Danilo research | Date: 2026-02]

### Vertical Scaling (Budget Increases)

**Definition**: Increasing budget on existing winning campaigns/ad sets.

**When to Use**:
- Campaign has consistent ROAS/CPA performance for 7+ days
- Campaign is out of learning phase (50+ conversions achieved)
- Impression share <80% (room for additional volume without saturation)
- No creative fatigue signs (CTR stable, CPM not rising >15%)

**Execution Protocol**:
1. **Baseline Performance**: Document 7-day average ROAS, CPA, daily spend, conversions
2. **Budget Increase**: Increase by 20% (Meta/TikTok) or 30% (Google)
3. **Monitoring Window**: Watch performance for 3-4 days post-increase
4. **Success Criteria**: ROAS decline <10%, CPA increase <15% acceptable during stabilization
5. **Next Increase**: If performance holds, repeat after 3-4 days

**Example**:
```
Day 0: Ad set spending $100/day at 3.5 ROAS (baseline)
Day 1: Increase to $120/day (20% increase)
Day 2-4: Monitor performance (expect minor ROAS dip to 3.2-3.3)
Day 5: If ROAS stabilizes at 3.3+, increase to $144/day (20% of new baseline)
```

**Vertical Scaling Limits**:
- **Audience Saturation**: Performance degrades when reaching >60% of target audience weekly
- **CPM Inflation**: When CPM increases >25% from baseline, audience saturation likely
- **ROAS Decay**: Expect 10-20% ROAS decline as you scale (smaller audience, higher CPM)

### Horizontal Scaling (Expansion)

**Definition**: Duplicating winning campaigns/ad sets with variations (new audiences, placements, creatives, or platforms).

**When to Use**:
- Vertical scaling has reached efficiency plateau (ROAS declining despite stable spend)
- Single campaign spending >$500/day (risk concentration)
- Need to diversify risk (algorithm changes, ad fatigue, audience saturation)
- Proven creative/offer can be tested with new audiences

**Expansion Vectors**:

1. **New Audiences**:
   - Lookalike expansions (1% → 3% → 5% seed list variations)
   - Geographic expansion (state → national → international)
   - Demographic variations (age ranges, gender, income levels)

2. **New Placements**:
   - Meta: Facebook Feed → Instagram Reels → Audience Network
   - TikTok: TikTok Feed → Pangle Network (if performance warrants)
   - YouTube: In-Stream → Discovery → Shorts

3. **New Creatives** (derivative strategy):
   - Same hook, different format (video → carousel → static)
   - Same message, different talent/voice
   - Same structure, updated copy/visuals

4. **New Platforms**:
   - After success on primary platform (Meta), test secondary (TikTok, YouTube)
   - Allocate 10-20% of scaling budget to platform expansion tests

**Execution Protocol**:
1. **Duplicate Winner**: Clone campaign structure, creative, targeting
2. **Single Variable Change**: Modify only ONE element (audience OR creative OR placement)
3. **Test Budget**: Start at 50% of original campaign daily spend
4. **Comparison Window**: 7-14 days to compare performance vs original
5. **Scale or Kill**: If performance within 80% of original ROAS, scale; if <70%, kill

**Example**:
```
Original Campaign: Broad audience, Video Creative A, $200/day, 3.5 ROAS
Horizontal Test 1: LAL 1-3%, Video Creative A, $100/day → 7 days → 3.2 ROAS → Scale
Horizontal Test 2: Broad audience, Video Creative B, $100/day → 7 days → 2.0 ROAS → Kill
```

## Learning Phase Management [Confidence: A | Source: Meta Learning Phase documentation 2025, TikTok Ads Manager 2025 | Date: 2026-02]

### Meta Learning Phase

**Definition**: Period during which Meta's delivery system explores optimal ad delivery (which users, times, placements).

**Exit Criteria**:
- **50 optimization events** (conversions) per ad set within 7 days
- Consistent delivery pattern established (algorithm confidence threshold reached)

**Learning Phase States**:
- **Learning**: Active optimization, performance unstable (expect 20-40% variance)
- **Learning Limited**: Insufficient volume to exit learning (<50 events/week), performance suboptimal
- **Active**: Exited learning phase, stable optimized delivery

**Best Practices**:
- **Budget Sizing**: Allocate enough budget to achieve 50 conversions/week (minimum viability)
  - Example: If CPA = $30, minimum ad set budget = $214/day ($30 × 50 / 7 days)
- **Avoid Edits**: During learning phase, avoid all targeting, creative, or budget changes >20%
- **Patience**: Allow 3-7 days for learning phase completion before evaluating performance
- **Consolidation**: Fewer ad sets with higher budgets exit learning faster than many small ad sets

### TikTok Learning Phase [Confidence: A | Source: TikTok for Business optimization guide 2025 | Date: 2026-02]

**Exit Criteria**:
- **50 conversion events** per ad group within 7 days (same as Meta)
- Faster learning cycle than Meta (typically 2-4 days vs 3-7 days)

**Key Differences from Meta**:
- **Creative Sensitivity**: Creative fatigue develops faster (2-3 weeks vs Meta 4-6 weeks)
- **Algorithm Aggressiveness**: TikTok algorithm explores delivery more aggressively early
- **Volume Requirements**: Requires higher creative refresh rate to maintain scale

**Best Practices**:
- **Budget Sizing**: Minimum $30-50/day per ad group (lower CPA than Meta typically)
- **Creative Pipeline**: Plan for 2x creative refresh rate vs Meta
- **Testing Velocity**: Run more tests simultaneously (TikTok favors fresh creative)

### Google/YouTube Learning Phase [Confidence: A | Source: Google Ads Smart Bidding guide 2025 | Date: 2026-02]

**Smart Bidding Learning Period**:
- **30-50 conversions** per campaign within 30 days for Target CPA/Target ROAS strategies
- **7 days minimum** for initial model training (even with sufficient conversion volume)

**Key Differences**:
- **Search Intent Data**: Google leverages search data (faster learning for high-intent keywords)
- **Seasonal Adjustments**: Algorithm accounts for day-of-week, seasonal patterns automatically
- **Cross-Campaign Learning**: Google applies learnings across campaigns within same account (faster optimization)

**Best Practices**:
- **Budget Sizing**: Allocate enough for 30-50 conversions per month per campaign
- **Bid Strategy Consistency**: Avoid switching bid strategies (triggers reset)
- **Conversion Tracking**: Ensure GA4 + Google Ads conversion tags both tracking (data richness improves learning)

## Scaling Decision Framework [Confidence: A | Source: M14 alignment, M30 MER framework, Danilo research | Date: 2026-02]

### When to Scale (Go Signals)

**Quantitative Criteria**:
- **ROAS**: Meets or exceeds target blended ROAS (typically 2.5-4.0x for e-commerce)
- **Volume**: Campaign out of learning phase (50+ conversions/week)
- **Consistency**: 7+ days of stable performance (ROAS variance <15%)
- **Impression Share**: <80% (room for expansion without saturation)
- **CPM Stability**: CPM increase <10% week-over-week (no auction pressure)

**Qualitative Criteria**:
- **Creative Performance**: CTR stable or increasing, no fatigue signs
- **Audience Health**: Frequency <3 per week (not over-saturating audience)
- **Platform Stability**: No major algorithm updates or delivery issues reported

**MER Validation** (from M30):
- **Blended Performance Check**: Even if campaign ROAS strong, validate overall MER (Marketing Efficiency Ratio) not declining
- **Incremental Lift**: New spend should maintain or improve total business MER, not cannibalize other channels

### When to Kill (Stop Signals)

**Existential Kill Criteria** (from M14):
- **Minimum Viable Data**: Ad has reached traffic threshold (e.g., 10 purchases for e-commerce) and failed to meet target
- **ROAS <50% of target**: If target = 3.0x, kill at <1.5x after sufficient data
- **Days in Test**: Exceeded maximum test window (14 days for Meta/TikTok, 21 days for YouTube) without hitting minimum data or target

**Monitoring Kill Criteria** (gradual decline):
- **ROAS Decay >30%**: Performance dropped >30% from peak and shows no recovery after 5 days
- **CPM Inflation >40%**: Audience saturation evident (CPM spike without volume increase)
- **Frequency >5**: Severe audience fatigue (seeing same ad 5+ times per week)
- **CTR Decline >50%**: Creative fatigue (CTR dropped by half from initial performance)

**Budget Reallocation**:
- Pause underperforming campaigns/ad sets immediately after kill decision
- Redirect budget to winning campaigns using 20% Rule scaling increments
- Archive killed campaigns for future reference (don't delete – preserve learning)

### When to Pause (Temporary Hold)

**Platform Issues**:
- Major algorithm update reported (Meta/TikTok/Google) → pause 24-48 hours, monitor industry reports
- Pixel/tracking issues detected (conversion mismatch >20%) → pause until resolved
- Payment/billing issues → resolve before resuming

**Business Constraints**:
- Inventory shortage (can't fulfill orders) → pause until restocked
- Cash flow constraints (can't support ad spend) → reduce budgets 50% rather than full pause
- Team capacity (can't handle inquiry volume) → reduce budgets proportionally

**Creative Refresh Window**:
- Creative fatigue detected but new creative not ready → reduce budget 30-50% until refresh deployed
- Maintain minimal spend to preserve algorithm learning rather than full pause

## Scaling Playbook by Budget Tier [Confidence: B | Source: IonWave framework, industry benchmarks | Date: 2026-02]

### Tier 1: $1,000-3,000/month ($35-100/day)

**Focus**: Single platform dominance, high creative velocity
- **Platform**: Meta only (most efficient for low budgets)
- **Structure**: 1 Testing Campaign ($30/day), 1 Scaling Campaign ($50/day)
- **Scaling Approach**: Vertical only (horizontal requires more budget)
- **Scaling Timeline**: 20% increases every 5-7 days (longer stabilization at low volume)
- **Creative Strategy**: 2-3 new creatives per month (limited testing capacity)

### Tier 2: $3,000-10,000/month ($100-333/day)

**Focus**: Platform validation, audience expansion
- **Platform**: Meta primary (70%), TikTok test (30%)
- **Structure**: Meta – 1 Testing ($50/day), 1 Scaling ($150/day); TikTok – 1 Testing ($50/day)
- **Scaling Approach**: Vertical primary, horizontal audience tests
- **Scaling Timeline**: 20% increases every 4-5 days
- **Creative Strategy**: 4-6 new creatives per month (1-2 per week)

### Tier 3: $10,000-30,000/month ($333-1,000/day)

**Focus**: Multi-platform diversification, audience segmentation
- **Platform**: Meta 50% ($500/day), YouTube 35% ($350/day), TikTok 15% ($150/day)
- **Structure**: Per platform – 1 Testing, 1-2 Scaling campaigns
- **Scaling Approach**: Vertical + horizontal (audience, creative, platform expansion)
- **Scaling Timeline**: 20% increases every 3-4 days
- **Creative Strategy**: 8-12 new creatives per month (2-3 per week), A/B testing capacity

### Tier 4: $30,000-100,000/month ($1,000-3,333/day)

**Focus**: Sophisticated segmentation, rapid iteration, channel optimization
- **Platform**: Meta 50% ($1,650/day), YouTube 35% ($1,155/day), TikTok 15% ($495/day)
- **Structure**: Multiple campaigns per platform (testing, scaling, retargeting, audience segments)
- **Scaling Approach**: Aggressive horizontal expansion (audience, geo, creative, format)
- **Scaling Timeline**: 20% increases every 3 days (high volume supports faster scaling)
- **Creative Strategy**: 15-20 new creatives per month (4-5 per week), systematic testing framework

### Tier 5: $100,000+/month ($3,333+/day)

**Focus**: Operational excellence, marginal gains, brand integration
- **Platform**: Diversified (explore emerging platforms: Reddit, Pinterest, Snapchat at 5-10%)
- **Structure**: Dedicated teams per platform, sophisticated segmentation
- **Scaling Approach**: Continuous optimization, international expansion, brand/performance blend
- **Scaling Timeline**: Daily budget adjustments, algorithmic budget pacing
- **Creative Strategy**: 20-30+ new creatives per month, in-house production team, brand partnerships

## Surf Scaling Methodology [Confidence: B | Source: Danilo research, performance marketing case studies | Date: 2026-02]

### Concept
**Ride the wave of high-performing periods, reduce spend during low-performing periods.**

**Unlike rigid 20% Rule scaling, surf scaling adjusts budgets up/down based on real-time performance signals.**

### When to Use
- **Seasonal businesses**: High variance in demand (e.g., holiday products, tax services)
- **Creative-sensitive products**: Performance tightly coupled to creative freshness
- **Mature accounts**: Established baseline performance, can detect variance quickly

### Execution Protocol

**Daily Performance Review**:
1. **Morning Check** (9-10 AM): Review previous day performance (ROAS, CPA, spend)
2. **Performance Classification**:
   - **Hot** (ROAS >120% of target): Increase budget 20-30% same day
   - **Warm** (ROAS 90-120% of target): Maintain budget, monitor
   - **Cool** (ROAS 70-90% of target): Reduce budget 20%, investigate causes
   - **Cold** (ROAS <70% of target): Reduce budget 50% or pause, troubleshoot

**Example**:
```
Monday: Campaign ROAS 4.5x (target 3.0x) → Hot → Increase budget $500 → $600 (+20%)
Tuesday: Campaign ROAS 3.8x → Still Hot → Increase budget $600 → $720 (+20%)
Wednesday: Campaign ROAS 2.5x → Cool → Reduce budget $720 → $576 (-20%)
Thursday: Campaign ROAS 2.0x → Cold → Reduce budget $576 → $288 (-50%), investigate
Friday: Campaign ROAS 3.2x (after creative refresh) → Warm → Maintain $288, monitor
```

**Risks**:
- **Over-Reaction**: Daily volatility can trigger unnecessary changes (use 2-day rolling average)
- **Learning Phase Resets**: Frequent >20% changes can disrupt algorithm learning
- **Operator Fatigue**: Requires daily active management (not suitable for all teams)

**Best Fit**:
- Experienced media buyers with time for daily optimization
- Accounts with high conversion volume (50+ conversions/day) to enable daily decision-making
- Products with high variance in demand or creative performance

## Intelligence Gaps & Upgrade Paths

### Current Gaps [Confidence: D | Upgrade Path: Direct testing documentation | Date: 2026-02]
1. **Platform-Specific Learning Phase Duration**: Exact days to exit learning by vertical/product (anecdotal 3-7 days, but variance high)
2. **ROAS Decay Curves by Scale**: Quantified ROAS decline curves from $100/day → $1,000/day → $10,000/day by platform
3. **Surf Scaling Performance Data**: Case studies comparing surf scaling vs 20% Rule in controlled tests

### Upgrade Opportunities
- **Source**: 90-day scaling test documentation (20% Rule vs 30% Rule vs surf scaling) with daily performance logs
- **Source**: Learning phase duration tracking by platform, vertical, and budget size (sample size 50+ campaigns)
- **Source**: ROAS decay modeling (regression analysis of spend vs ROAS across 100+ campaigns)

## Cross-References
- **M11 (Budget Allocation)**: Platform allocation informs scaling priority (Meta first, then YouTube, then TikTok)
- **M14 (Creative Testing Protocol)**: Kill criteria determines when to stop scaling underperformers
- **M30 (Performance Metrics)**: MER framework validates scaling decisions at blended level
- **account_structure.md**: Campaign tiers (testing, scaling, retargeting) support scaling methodology
- **roas_decay_model.md**: Expected ROAS decline patterns inform scaling expectations
- **daily_checklist.md**: Daily scaling decision workflow

---

**Version**: 1.0
**Last Updated**: 2026-02-10
**Primary Sources**: Meta Ads Best Practices (2024-2025), TikTok Optimization Guide (2025), Google Smart Bidding Documentation (2025), Danilo V-M13 research
