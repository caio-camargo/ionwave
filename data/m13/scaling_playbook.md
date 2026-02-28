# Scaling Playbook

## Overview
Step-by-step operational playbook for scaling ad campaigns from testing through validation to aggressive expansion. Integrates 20% Rule methodology, learning phase management, and kill criteria from M14.

## Three-Phase Scaling Model [Confidence: A | Source: Performance marketing frameworks, Danilo research, M14 alignment | Date: 2026-02]

```
Phase 1: Testing (Days 1-14)
  ↓ [Validation Gate: Minimum Viable Data + Target ROAS]
Phase 2: Validation (Days 15-30)
  ↓ [Scale Gate: Consistent 7-Day Performance]
Phase 3: Scaling (Day 31+)
```

## Phase 1: Testing (Days 1-14)

### Objective
**Identify winning campaigns/ad sets/creatives that meet or exceed target ROAS with minimum viable statistical confidence.**

### Setup Protocol

**Campaign Launch Checklist**:
- [ ] Pixel/CAPI tracking verified (test purchase tracked end-to-end)
- [ ] Campaign structure follows account_structure.md standards
- [ ] Testing budget allocated (20-30% of total platform spend)
- [ ] Kill criteria defined (from M14): Minimum 10 purchases OR 14 days, whichever first
- [ ] Target ROAS/CPA documented (e.g., Target ROAS 3.0x, Kill threshold <1.5x)

**Initial Budget Sizing** [Confidence: A | Source: Platform learning phase requirements | Date: 2026-02]:

**Meta**:
- **Minimum**: $50/day per ad set (enough to generate 50 conversions/week at typical CPA)
- **Example**: If expected CPA = $30, minimum budget = $214/day per ad set
- **Ad Sets**: 3-5 simultaneous tests (audience or creative variations)

**TikTok**:
- **Minimum**: $30/day per ad group (lower CPA environment)
- **Example**: If expected CPA = $20, minimum budget = $143/day per ad group
- **Ad Groups**: 3-5 simultaneous tests

**YouTube**:
- **Minimum**: $50/day per campaign (higher CPM, longer consideration cycle)
- **Example**: If expected CPA = $40, minimum budget = $280/day per campaign
- **Campaigns**: 2-3 simultaneous tests (creative or audience variations)

### Pre-Launch: Tracking Validation (Day 0)

**CRITICAL: Validate tracking before spending a single dollar. Broken tracking = wasted spend + delayed learning.**

**Pre-Launch Tracking Validation Checklist**:
1. [ ] **Test Purchase End-to-End**:
   - Complete real purchase on website (use test mode or real $1 purchase)
   - Verify you receive order confirmation email
   - Check backend (Shopify, WooCommerce) for order record

2. [ ] **Verify Pixel Fires**:
   - Meta: Events Manager → Test Events → Should show "Purchase" event with correct value
   - TikTok: Events Manager → Event Tracking → Should show "CompletePayment" event
   - Google: Google Ads → Conversions → Should show conversion recorded

3. [ ] **Check CAPI (Server-Side)**:
   - Meta: Events Manager → Data Sources → Conversions API → "Server" event source should appear
   - Verify event_id matches between Pixel and CAPI (deduplication check)

4. [ ] **Backend Revenue Match**:
   - Platform reports $X revenue → Backend shows same order for $X → MATCH ✓
   - If mismatch: Tracking issue (fix before launch)

5. [ ] **Conversion Attribution**:
   - Click your own test ad → complete purchase → verify platform attributes conversion to test ad
   - If not attributed: UTM parameters, pixel, or attribution window issue (fix before launch)

**If ANY checkpoint fails**: Fix tracking before launching campaigns. Broken tracking = flying blind.

### Days 1-3: Launch Window

**Actions**:
- Launch campaigns at initial budget
- **Do NOT edit**: Allow algorithm to begin learning phase
- Monitor only for critical errors (tracking failures, disapproved ads, payment issues)

**Expected Performance**:
- **High Volatility**: ROAS/CPA can swing 50-100% day-to-day
- **CPM Exploration**: Algorithm testing different audiences/times (CPM may be 20-40% higher than eventual baseline)
- **Low Conversion Volume**: Expect <50% of target conversion volume (algorithm exploring)

**Day 2 Tracking Audit (MANDATORY if zero conversions after 48 hours)**:

**Problem**: Zero conversions could be broken tracking OR poor creative. Must diagnose before assuming creative failure.

**Day 2 Audit Checklist** (if zero conversions after 48 hours):
1. [ ] **Re-Run Test Purchase**: Complete another test purchase, verify pixel fires (Events Manager)
2. [ ] **Check Events Manager**: Are ANY events firing? (PageView, AddToCart, InitiateCheckout)
   - If NO events: Pixel not installed or broken → fix immediately
   - If events but no Purchase: Checkout flow issue (pixel not on confirmation page) → fix immediately
3. [ ] **Backend Revenue Check**: Any sales in backend that platform didn't track?
   - If YES: Attribution issue (UTM parameters, conversion window) → investigate
   - If NO: Either tracking works or genuinely no sales yet
4. [ ] **Impression Volume Check**: Are ads getting impressions?
   - If <1,000 impressions in 48 hours: Budget too low, audience too narrow, or ads disapproved → fix
   - If >10,000 impressions but zero conversions: Likely poor creative/offer, not tracking (continue test)

**Decision**:
- **If tracking broken**: Pause campaigns, fix tracking, relaunch (don't waste spend on untracked campaigns)
- **If tracking works + zero conversions**: Poor creative/offer OR need more time (continue to Day 7 evaluation)

**Red Flags (Immediate Action Required)**:
- **Zero Conversions After 48 Hours**: Run Day 2 Tracking Audit immediately (see above)
- **Zero Impressions**: Check audience size (must be >1M), budget sufficient, ad approval status
- **CPA >200% of Target**: If CPA = $30 target but actual $60+, review targeting (audience too narrow/competitive)

### Days 4-7: Early Signal Detection

**Actions**:
- **Performance Ranking**: Identify top performers (highest ROAS, lowest CPA)
- **Kill Weak Performers**: If ad set has <3 conversions after 7 days, likely underpowered → kill or increase budget
- **Budget Reallocation**: Shift budget from clear losers to emerging winners (within 20% Rule)

**Decision Framework**:

**Winner (Continue)**:
- 5+ conversions in 7 days AND ROAS >80% of target
- Example: Target 3.0x ROAS, achieving 2.5x+ with 5+ conversions → continue

**Potential (Monitor)**:
- 3-5 conversions in 7 days AND ROAS >50% of target
- Example: Target 3.0x ROAS, achieving 1.8-2.4x with 3-5 conversions → give until Day 10

**Loser (Kill)**:
- <3 conversions in 7 days (insufficient data rate)
- OR ROAS <50% of target with 5+ conversions (statistically unlikely to improve)
- Example: 2 conversions in 7 days OR 7 conversions at 1.2x ROAS (target 3.0x) → kill

### Days 8-14: Validation Window

**Actions**:
- **Minimum Viable Data Check**: Ensure remaining ad sets have 10+ conversions by Day 14 (M14 requirement)
- **ROAS Consistency**: Look for 3+ consecutive days of ROAS >target (algorithm stabilizing)
- **Learning Phase Status**: Check if ad sets exiting learning phase (Meta/TikTok)

**Validation Gate Criteria** (Must Pass to Move to Phase 2):
1. **Data Sufficiency**: 10+ conversions within 14 days (M14 minimum)
2. **Performance Target**: ROAS ≥target (e.g., 3.0x) over 7-day average
3. **Consistency**: ROAS variance <20% over last 5 days (stable delivery)
4. **Learning Phase**: Exited learning phase OR on track to exit (40+ of 50 required conversions)

**Example Decision**:
```
Ad Set A: 15 conversions, 3.2x ROAS, variance 12% → PASS → Move to Phase 2
Ad Set B: 8 conversions, 3.5x ROAS, variance 8% → FAIL (data insufficient) → Continue testing
Ad Set C: 12 conversions, 1.8x ROAS, variance 25% → FAIL (below target) → Kill
```

**If No Winners by Day 14**:
- **Diagnose Root Cause**:
  - **Offer Problem**: Product-market fit, pricing, offer strength
  - **Creative Problem**: Hook not compelling, message unclear, CTA weak
  - **Targeting Problem**: Audience too narrow/broad, wrong platform
  - **Tracking Problem**: Conversion tracking issues (check pixel, CAPI)
- **Iterate**: Launch new testing campaign with revised creative/offer/targeting
- **Do NOT Scale**: Never scale campaigns that haven't passed validation gate

## Phase 2: Validation (Days 15-30)

### Objective
**Confirm winning campaigns can maintain performance at 1.5-2x initial spend before aggressive scaling.**

### Entry Criteria
- Passed Phase 1 Validation Gate (10+ conversions, target ROAS, consistency)
- Campaign out of learning phase OR very close (45+ of 50 conversions)

### Validation Scaling Protocol

**Week 3 (Days 15-21)**:

**Day 15 Actions**:
1. **Increase Budget 20%**: If starting at $100/day, increase to $120/day
2. **Document Baseline**: Record Day 14 performance (ROAS, CPA, CPM, CTR, Frequency)
3. **Set Monitoring Alerts**: ROAS drops >15%, CPM increases >20%, Frequency >4

**Days 16-18 (Stabilization)**:
- **Expected**: ROAS may dip 5-15% temporarily (algorithm adjusting to new budget)
- **Action**: Monitor only, no edits
- **Concern If**: ROAS drops >20% or CPM spikes >30% (may indicate audience saturation)

**Day 19 Check**:
- **If ROAS Stabilized** (within 10% of baseline): Increase budget 20% again → $144/day
- **If ROAS Down 10-20%**: Wait 2 more days for stabilization
- **If ROAS Down >20%**: Reduce budget back to previous level ($100/day), investigate

**Day 22 Check**:
- Repeat evaluation and 20% increase if performance stable

**Week 4 (Days 22-30)**:

**Objective**: Reach 2x initial spend while maintaining ROAS within 15% of baseline.

**Target**: If started at $100/day, goal is $200/day by Day 30.

**Scaling Timeline**:
```
Day 15: $100 → $120 (+20%)
Day 19: $120 → $144 (+20%)
Day 23: $144 → $173 (+20%)
Day 27: $173 → $208 (+20%)
```

**Scale Gate Criteria** (Must Pass to Move to Phase 3):
1. **Volume**: Spending 1.5-2x initial daily budget consistently
2. **Efficiency**: ROAS within 85% of Phase 1 baseline (some decay acceptable)
3. **Stability**: 7 consecutive days at elevated spend without performance collapse
4. **Audience Health**: Frequency <3, CPM increase <25% from baseline

**Example Decision**:
```
Campaign A: $100/day → $200/day, ROAS 3.2x → 2.9x (9% decline), Frequency 2.1 → PASS → Phase 3
Campaign B: $100/day → $180/day, ROAS 3.2x → 2.3x (28% decline), Frequency 4.2 → FAIL → Pause scaling
```

**If Scale Gate Fails**:
- **Pause Budget Increases**: Hold at current spend level
- **Diagnose**:
  - **Audience Saturation**: Frequency >3.5, CPM spike >30% → expand audience or add creatives
  - **Creative Fatigue**: CTR decline >30% → refresh creative
  - **Platform Issues**: Check for algorithm updates, pixel issues
- **Iterate**: Address root cause before resuming scaling

## Phase 3: Scaling (Day 31+)

### Objective
**Maximize spend at target efficiency through vertical scaling, horizontal expansion, and continuous optimization.**

### Entry Criteria
- Passed Phase 2 Scale Gate (2x spend, maintained efficiency, stable for 7 days)

### Vertical Scaling (Budget Increases)

**Standard Operating Procedure**:

**Every 3-4 Days**:
1. **Performance Check**: Review 3-day rolling average ROAS/CPA
2. **If Performance Stable** (ROAS within 10% of target):
   - Increase budget 20% (Meta/TikTok) or 30% (Google)
3. **If Performance Degrading** (ROAS down 10-20%):
   - Hold budget, investigate causes (creative fatigue, audience saturation)
4. **If Performance Strong** (ROAS >120% of target):
   - Consider aggressive 30% increase (Meta/TikTok) or 50% increase (Google)

**Vertical Scaling Ceiling** [Confidence: B | Source: Industry benchmarks, Danilo research | Date: 2026-02]:

**Indicators You've Hit Ceiling**:
- **ROAS Decay >25%**: Performance declined by quarter despite optimizations
- **CPM Inflation >40%**: Severe audience saturation or competitive pressure
- **Frequency >5**: Over-saturating audience (showing ads too often)
- **Impression Share >80%**: Reaching most of available audience already

**When Vertical Ceiling Hit**:
- **Stop Budget Increases**: Hold at current spend or reduce 10-20%
- **Pivot to Horizontal Scaling**: Expand via new audiences, creatives, platforms
- **Consider**: Current campaign may be at mature plateau (maintain, don't force scale)

### Horizontal Scaling (Expansion)

**Expansion Priority Matrix** [Confidence: B | Source: IonWave framework, risk-reward analysis | Date: 2026-02]:

**Priority 1 (Lowest Risk, Fastest Test)**:
1. **Creative Derivatives**: Same winning ad, minor variations (cut-downs, new hooks, talent swaps)
2. **Audience Expansion**: Lookalike audiences (1% → 3% → 5%)
3. **Placement Expansion**: Enable additional placements on same platform (Instagram Reels, Audience Network)

**Priority 2 (Medium Risk, 7-14 Day Test)**:
4. **Geographic Expansion**: State → National → International
5. **Demographic Variations**: Age/gender segments of winning audience
6. **New Creative Formats**: Video → Carousel → Static (same message, different format)

**Priority 3 (High Risk, 14-30 Day Test)**:
7. **Platform Expansion**: Meta → TikTok, Meta → YouTube (same creative/offer, new platform)
8. **New Offers/Angles**: Different value proposition or messaging angle
9. **Funnel Stage Shift**: Direct response → Video views → Engagement (top-of-funnel expansion)

**Horizontal Expansion Protocol**:

**Step 1: Clone Winner**:
- Duplicate existing winning campaign/ad set
- Keep all elements identical except ONE variable

**Step 2: Modify Single Variable**:
- Change ONLY audience OR creative OR placement OR platform
- Example: Keep creative identical, test LAL 3-5% vs LAL 1-3%

**Step 3: Test Budget Allocation**:
- Allocate 50% of original campaign budget to new test
- Example: If original = $200/day, new test = $100/day

**Step 4: Comparison Window**:
- Run for 7-14 days (sufficient for minimum viable data)
- Compare performance to original campaign

**Step 5: Scale or Kill Decision**:
- **If ROAS ≥80% of original**: Scale using Phase 2 validation protocol
- **If ROAS 60-80% of original**: Monitor for 7 more days (may improve)
- **If ROAS <60% of original**: Kill test, document learning

**Example**:
```
Original Campaign: Broad audience, Video A, Meta Feed, $200/day, 3.5x ROAS

Horizontal Test 1: LAL 3-5%, Video A, Meta Feed, $100/day
  → 7 Days → 3.0x ROAS (86% of original) → SCALE (move to Phase 2 validation)

Horizontal Test 2: Broad audience, Video B, Meta Feed, $100/day
  → 7 Days → 1.8x ROAS (51% of original) → KILL

Horizontal Test 3: Broad audience, Video A, TikTok Feed, $100/day
  → 7 Days → 2.8x ROAS (80% of original) → SCALE (move to Phase 2 validation)
```

### Continuous Optimization (Ongoing)

**Weekly Actions**:
- [ ] **Performance Review**: Rank all campaigns by ROAS, identify top/bottom performers
- [ ] **Budget Reallocation**: Shift 10-20% of budget from bottom performers to top performers
- [ ] **Creative Refresh Check**: Identify ads with CTR decline >30% or Frequency >4 (fatigue signals)
- [ ] **Audience Analysis**: Review frequency, CPM trends (saturation indicators)
- [ ] **Scaling Decisions**: Identify campaigns ready for 20% budget increases

**Monthly Actions**:
- [ ] **Channel Performance Review**: Evaluate Meta vs TikTok vs YouTube blended performance
- [ ] **Budget Reallocation**: Adjust platform allocation based on MER (from M30)
- [ ] **Horizontal Expansion Planning**: Identify new audiences, creatives, or platforms to test
- [ ] **Learning Documentation**: Log winning/losing tests, update playbook

**Quarterly Actions**:
- [ ] **Strategic Review**: Evaluate overall media buying strategy, platform mix, team capacity
- [ ] **Budget Forecasting**: Project next quarter spend, revenue, ROAS based on current trajectory
- [ ] **Process Optimization**: Identify bottlenecks in creative production, testing velocity, decision-making
- [ ] **Competitive Analysis**: Review competitor creative, platform usage, offer strategies

## Scaling Playbook by Platform [Confidence: B | Source: Platform-specific best practices, Danilo research | Date: 2026-02]

### Meta Scaling Playbook

**Phase 1 (Days 1-14)**:
- Launch 3-5 ad sets at $50-100/day each
- Test variations: Broad vs LAL audiences, Video vs Carousel, different hooks
- Kill criteria: <10 purchases by Day 14 OR ROAS <50% target

**Phase 2 (Days 15-30)**:
- Scale winners 20% every 3-4 days
- Target: 2x initial spend by Day 30 with ROAS within 85% of baseline
- Monitor: Frequency (<3), CPM stability, CTR

**Phase 3 (Day 31+)**:
- Vertical: Continue 20% increases every 3-4 days until efficiency plateau
- Horizontal: Creative derivatives, LAL expansions, Instagram Reels tests
- Ceiling Indicators: Frequency >5, CPM +40%, ROAS decline >25%

### TikTok Scaling Playbook

**Phase 1 (Days 1-14)**:
- Launch 3-5 ad groups at $30-50/day each
- Test variations: Native UGC creative styles, Automatic vs Interest targeting
- Kill criteria: <10 purchases by Day 10 (TikTok faster feedback) OR ROAS <50% target

**Phase 2 (Days 15-30)**:
- Scale winners 20% every 2-3 days (TikTok learning faster)
- Target: 2x initial spend by Day 25 with ROAS within 80% of baseline
- Monitor: Creative fatigue (refresh every 2-3 weeks vs Meta 4-6 weeks)

**Phase 3 (Day 31+)**:
- Vertical: Continue 20% increases every 2-3 days (higher creative velocity required)
- Horizontal: Creative refresh (new talent, hooks), format tests (Spark Ads)
- Ceiling Indicators: CTR decline >40% (creative fatigue), CPM +50%

### YouTube Scaling Playbook

**Phase 1 (Days 1-21)**:
- Launch 2-3 campaigns at $50-100/day each (longer consideration cycle)
- Test variations: In-Stream vs Discovery, Custom Intent vs In-Market audiences
- Kill criteria: <10 conversions by Day 21 OR CPA >150% target

**Phase 2 (Days 22-45)**:
- Scale winners 30% every 4-5 days (Google allows larger increases)
- Target: 2x initial spend by Day 45 with CPA within 90% of baseline
- Monitor: View-through conversions (YouTube drives more VTC than Meta)

**Phase 3 (Day 46+)**:
- Vertical: Continue 30% increases every 4-5 days until efficiency plateau
- Horizontal: Creative derivatives (different video lengths), audience expansions (geo, demo)
- Ceiling Indicators: Impression share >75%, CPA inflation >30%

## Troubleshooting Guide [Confidence: A | Source: Common failure modes, diagnostic frameworks | Date: 2026-02]

### Problem: Campaign Stuck in Learning Phase (Meta/TikTok)

**Symptoms**:
- 14+ days in learning phase, <50 conversions achieved
- Performance volatility high (ROAS swings 30%+ day-to-day)

**Diagnosis**:
- **Insufficient Budget**: Budget too low to generate 50 conversions/week
- **Too Many Ad Sets**: Budget spread across too many ad sets (each needs 50 conversions/week)
- **Low Conversion Rate**: Audience/offer/creative not converting well

**Solution**:
1. **Consolidate**: Combine ad sets (fewer ad sets with higher budgets exit learning faster)
2. **Increase Budget**: If CPA = $30, need minimum $214/day per ad set ($30 × 50 / 7 days)
3. **Optimize Conversion Event**: Consider optimizing for "Add to Cart" instead of "Purchase" if purchase volume too low

### Problem: ROAS Decline During Scaling

**Symptoms**:
- ROAS dropped 20-40% after budget increases
- CPM increased 25%+, Frequency increased to 4+

**Diagnosis**:
- **Audience Saturation**: Reached most of available audience, showing ads too frequently
- **Creative Fatigue**: CTR declined 30%+, same creative seen too many times
- **Auction Competition**: CPM spike indicates competitive pressure increased

**Solution**:
1. **Reduce Budget**: Step back budget 20% to previous efficient level
2. **Expand Audience**: Broaden targeting, add LAL audiences, or expand geography
3. **Refresh Creative**: Deploy new creative variations or derivatives
4. **Split Campaigns**: Divide large campaign into 2-3 smaller campaigns (frequency resets)

### Problem: Strong ROAS But Low Volume

**Symptoms**:
- ROAS >target (e.g., 5.0x when target 3.0x)
- Spending <50% of daily budget (underspending)

**Diagnosis**:
- **Audience Too Narrow**: Target audience too small for budget allocated
- **Bid Too Low**: Bid strategy not competitive enough to win auctions
- **Budget Too High**: Budget exceeds available audience at current targeting

**Solution**:
1. **Expand Audience**: Broaden targeting parameters, increase LAL percentage (1% → 3%)
2. **Increase Bid**: Switch from Lowest Cost to Cost Cap or Bid Cap (more aggressive bidding)
3. **Reduce Budget**: Lower budget to match available audience size (then scale horizontally)

### Problem: Conversions Tracked in Ads Manager But Not in Backend

**Symptoms**:
- Meta/TikTok/Google reporting 50 conversions
- Backend (Shopify, WooCommerce) shows 30 conversions from ads

**Diagnosis**:
- **Attribution Mismatch**: Pixel uses 7-day click / 1-day view; backend may use last-click
- **Tracking Issues**: Duplicate tracking, pixel not firing correctly
- **View-Through Conversions**: Platform counting VTC that backend doesn't attribute

**Solution**:
1. **Validate Tracking**: Test purchase end-to-end, check pixel fires correctly
2. **Use Blended Metrics**: Rely on MER (total revenue / total ad spend) not just platform ROAS
3. **Accept Attribution Gap**: 10-20% variance normal (use backend as source of truth for budgeting)

## Intelligence Gaps & Upgrade Paths

### Current Gaps [Confidence: D | Upgrade Path: Direct testing | Date: 2026-02]
1. **Phase Duration Optimization**: Ideal length for Phase 1 (Testing) and Phase 2 (Validation) by vertical (14 days standard, but may vary)
2. **Scaling Velocity Limits**: Maximum safe scaling rate without efficiency loss (20% Rule standard, but 30-40% may work in high-volume accounts)
3. **Platform-Specific Ceilings**: Exact spend thresholds where vertical scaling efficiency plateaus by platform

### Upgrade Opportunities
- **Source**: 6-month scaling documentation tracking phase durations, scaling rates, and efficiency outcomes across 20+ campaigns
- **Source**: A/B tests of 20% vs 30% vs 40% scaling increments with performance outcomes
- **Source**: Vertical scaling ceiling case studies (spend level where ROAS decay accelerates)

## Cross-References
- **M14 (Creative Testing Protocol)**: Kill criteria (10 purchases OR 14 days) integrated into Phase 1
- **M30 (Performance Metrics)**: MER validation ensures scaling doesn't degrade blended performance
- **scaling_framework.md**: 20% Rule, vertical vs horizontal scaling theory
- **account_structure.md**: Campaign tier structure (testing, scaling, retargeting) supports playbook phases
- **daily_checklist.md**: Daily operational tasks align with scaling review cadence

---

**Version**: 1.0
**Last Updated**: 2026-02-10
**Primary Sources**: Performance marketing scaling frameworks, M14 Creative Testing Protocol, Danilo V-M13 research
