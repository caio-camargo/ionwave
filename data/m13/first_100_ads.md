# First 100 Ads: Launch Phase Strategy

## Overview
Systematic playbook for launching paid acquisition from $0 to first 100 ads tested, optimized for $1,500-3,000/month budgets ($50-100/day). Integrates M11 platform sequencing (Meta → YouTube → TikTok) and M14 kill criteria for capital-efficient testing.

## Launch Phase Definition [Confidence: A | Source: IonWave framework, M11 alignment | Date: 2026-02]

### What is "First 100 Ads"?

**Scope**: First 30-90 days of paid acquisition, from account setup through finding 3-5 scalable winners.

**Budget Range**: $1,500-3,000/month ($50-100/day total spend)

**Primary Goals**:
1. **Validate Product-Market Fit**: Can we profitably acquire customers via paid ads?
2. **Identify Winning Creative**: Which ad concepts/hooks drive target ROAS?
3. **Prove Unit Economics**: CAC < LTV, ROAS > break-even threshold
4. **Build Foundation**: Pixel data, creative library, audience insights for scaling phase

**Success Criteria**:
- **3-5 Scalable Winners**: Ads with ≥10 purchases, ROAS ≥target, consistent 7+ days
- **Break-Even or Better**: Blended MER ≥break-even ROAS (e.g., 2.5x for 40% margin product)
- **Creative Learnings**: Clear understanding of which hooks, angles, formats work
- **Ready to Scale**: Foundation in place to increase budget 3-5x in Month 4

## Pre-Launch Checklist [Confidence: A | Source: Account setup best practices | Date: 2026-02]

### Week -2 to -1: Foundation Setup

**Business & Product Readiness**:
- [ ] **Product**: Inventory available, fulfillment process tested (can ship within 24-48 hours)
- [ ] **Website**: Conversion-optimized landing page or Shopify store (mobile-responsive, fast load <3 seconds)
- [ ] **Payment Processing**: Stripe/PayPal/Shopify Payments configured and tested
- [ ] **Customer Service**: Email/chat support ready (expect 5-10 inquiries/day at $100/day spend)
- [ ] **Unit Economics**: Know COGS, shipping cost, contribution margin (determines break-even ROAS)

**Tracking & Analytics**:
- [ ] **Meta Pixel**: Installed, base code + events (ViewContent, AddToCart, Purchase) tested
- [ ] **Meta CAPI**: Shopify app or server-side integration configured (improves iOS tracking)
- [ ] **TikTok Pixel**: Installed, events tested (will use in Month 2-3)
- [ ] **Google Ads Tag**: Installed + Enhanced Conversions configured (will use Month 2-3)
- [ ] **Google Analytics 4**: Property created, linked to website, conversion events configured
- [ ] **Test Purchase**: Complete end-to-end test purchase, verify all pixels fire correctly

**Ad Account Setup** (from account_structure.md):
- [ ] **Meta Business Manager**: Created, ad account linked, payment method added
- [ ] **Domain Verification**: Domain verified in Meta (improves ad delivery)
- [ ] **Aggregated Event Measurement**: Configured (iOS 14.5+ requirement, prioritize Purchase event)
- [ ] **Ad Account Backup**: Backup payment method added (avoid campaign pauses)

**Creative Assets Prepared**:
- [ ] **Product Photography**: 10-20 high-quality product images (lifestyle + detail shots)
- [ ] **Video Content**: 5-10 video ads ready (UGC style, 15-30 seconds, vertical 9:16 format)
- [ ] **Ad Copy**: 10-15 variations of primary value proposition (problem, solution, benefit, CTA)
- [ ] **Landing Page**: 2-3 variations ready to test (product page, dedicated landing page, quiz/funnel)

## Month 1: Meta Foundation (Days 1-30) [Confidence: A | Source: M11 platform sequencing, Danilo research | Date: 2026-02]

### Why Meta First?

**Advantages for Launch**:
- **Largest Audience**: 3B+ users (highest probability of finding target audience)
- **Best Attribution**: Post-iOS 14.5, Meta still has strongest tracking (Pixel + CAPI)
- **Proven Formats**: Most documented best practices, creative frameworks, case studies
- **Fastest Learning**: High volume enables faster testing (reach 10 purchases faster than YouTube/TikTok)

**Month 1 Budget**: $1,500-2,000 ($50-65/day)

### Week 1-2: Initial Testing (Days 1-14)

**Campaign Structure**:

**Campaign 1: Testing Campaign (CBO)**:
- **Budget**: $50/day total
- **Objective**: Conversions (Purchase)
- **Ad Sets**: 3 ad sets at ~$17/day each (algorithm distributes within CBO)
  - Ad Set 1: Broad Targeting (Advantage+ audience, 18-65+, all genders, national)
  - Ad Set 2: LAL 1-3% (if email list ≥100 customers; otherwise skip)
  - Ad Set 3: Interest Targeting (2-3 core interests related to product category)

**Creative Testing Matrix**:

**5 Initial Ads** (diversified testing):
1. **Ad 1: UGC Testimonial** (talking head, customer sharing result)
   - Hook: "I've struggled with [problem] for years..."
   - Body: Product demo + result
   - CTA: "Try it risk-free"

2. **Ad 2: Problem/Solution** (text overlay + b-roll)
   - Hook: "Tired of [problem]?"
   - Body: Show problem → introduce solution → product demo
   - CTA: "Shop now"

3. **Ad 3: Before/After** (visual transformation)
   - Hook: Before/after split screen
   - Body: How transformation happened (product usage)
   - CTA: "Get yours today"

4. **Ad 4: Educational** (how-to, value-first)
   - Hook: "3 reasons why [problem] happens"
   - Body: Educate → position product as solution
   - CTA: "Learn more"

5. **Ad 5: Social Proof** (review compilation)
   - Hook: "10,000+ 5-star reviews"
   - Body: Customer testimonials, star ratings, review snippets
   - CTA: "Join thousands of happy customers"

**Daily Actions** (from daily_checklist.md):
- **Days 1-3**: Monitor only (allow learning phase to begin, don't edit)
- **Day 4-7**: Check for critical issues (tracking failures, zero impressions, disapprovals)
- **Day 7**: Performance ranking (CTR, early ROAS signals), kill bottom 2 ads if CTR <0.5%

**Week 2 Evaluation (Day 14)**:

**Apply M14 Kill Criteria**:
- [ ] **Kill**: Ads with <10 purchases AND 14 days elapsed (insufficient data rate)
- [ ] **Kill**: Ads with ≥10 purchases but ROAS <50% of target (e.g., <1.5x if target 3.0x)
- [ ] **Continue**: Ads with 5-9 purchases and ROAS >80% of target (give more time)
- [ ] **Winner**: Ads with ≥10 purchases and ROAS ≥target (graduate to scaling)

**Expected Outcome Week 1-2**:
- **1-2 Winners**: Ads meeting M14 criteria (10+ purchases, target ROAS)
- **3-4 Killed**: Ads failing CTR or ROAS thresholds
- **Learning**: Which hooks, formats, messaging resonates with audience

### Week 3-4: Scaling + Iteration (Days 15-30)

**Campaign Structure Evolution**:

**Campaign 1: Testing Campaign**:
- **Budget**: $30/day (reduced, ongoing testing)
- **Purpose**: Continue testing new creative variations (5 new ads per week)

**Campaign 2: Scaling Campaign** (NEW):
- **Budget**: $20-35/day (start small, apply 20% Rule)
- **Purpose**: Scale Week 1-2 winners
- **Ad Sets**: 1-2 ad sets with winning audiences
- **Ads**: 1-2 winning ads from Week 1-2

**Creative Iteration**:
- **Derivatives of Winners**: Create 3-5 hook variations of winning ad (same body/CTA, new hooks)
- **New Concepts**: Test 2-3 entirely new ad concepts (different angles, formats)
- **Total New Ads Week 3-4**: 10-15 ads tested

**Scaling Protocol**:
- **Day 15**: Increase scaling campaign budget 20% if ROAS stable (e.g., $20 → $24/day)
- **Day 19**: Increase 20% again if ROAS within 90% of baseline (e.g., $24 → $29/day)
- **Day 23**: Increase 20% again (e.g., $29 → $35/day)
- **Day 27**: Increase 20% again (e.g., $35 → $42/day)

**Week 4 Evaluation (Day 30)**:

**Month 1 Success Metrics**:
- [ ] **3-5 Scalable Winners**: Ads with ≥10 purchases, ROAS ≥target, consistent 7+ days
- [ ] **Blended ROAS**: Month 1 blended ROAS ≥break-even (e.g., 2.5x for 40% margin)
- [ ] **Learning Phase**: Top campaigns out of learning phase (50+ conversions)
- [ ] **Creative Library**: 20-30 ads tested, clear understanding of winning hooks/formats

**If Month 1 Fails** (No winners, ROAS <break-even):
- **Diagnose Root Cause**:
  - **Product-Market Fit**: Is there demand for product at this price point?
  - **Creative Quality**: Are ads compelling enough to stop scroll?
  - **Targeting**: Is audience definition correct?
  - **Offer**: Is offer strong enough to convert cold traffic?
- **Iterate**: Adjust weakest element (creative, offer, targeting, price) and test Month 2
- **Do NOT Scale**: Never scale campaigns that haven't proven profitability at small scale

## Month 2: Meta Optimization + YouTube Intro (Days 31-60) [Confidence: A | Source: M11 platform allocation | Date: 2026-02]

### Month 2 Goals

**Primary**: Scale Meta winners 2-3x while maintaining efficiency.
**Secondary**: Introduce YouTube testing (10-20% of budget).

**Month 2 Budget**: $2,000-2,500 ($65-85/day)
- **Meta**: $1,600-2,000/month ($53-67/day) — 80% of budget
- **YouTube**: $400-500/month ($13-17/day) — 20% of budget

### Meta Scaling (Month 2)

**Campaign Structure**:

**Campaign 1: Testing Campaign**:
- **Budget**: $30/day (ongoing creative testing)
- **Purpose**: Test 10-15 new ads per week (derivatives + new concepts)

**Campaign 2: Scaling Campaign**:
- **Budget**: $40-60/day (scaled from Month 1's $20-35/day)
- **Purpose**: Scale proven winners from Month 1
- **Scaling Protocol**: 20% increases every 3-4 days (from scaling_framework.md)

**Campaign 3: Retargeting Campaign** (NEW):
- **Budget**: $10-15/day
- **Purpose**: Convert website visitors who didn't purchase
- **Audiences**: 7-day website visitors, 30-day engaged (video views, add to cart)
- **Creative**: Direct CTA, urgency/scarcity ("Limited time offer"), testimonials

**Creative Strategy**:
- **Derivatives**: 60% of new ads (variations of Month 1 winners)
- **New Concepts**: 40% of new ads (new angles, formats, talent)
- **Refresh Cadence**: Deploy new creative every 3-4 weeks (proactive fatigue management)

**Expected Month 2 Outcomes**:
- **Spend**: $53-67/day Meta (2-3x Month 1)
- **ROAS**: 10-20% decline acceptable (scaling-induced decay expected)
- **Winners**: 5-8 total scalable ads (Month 1 winners + Month 2 new winners)

### YouTube Introduction (Month 2)

**Why YouTube Month 2**:
- **Meta Foundation**: Month 1 validated product-market fit on Meta (de-risked)
- **Diversification**: Reduce single-platform risk (Meta algorithm changes, ad account issues)
- **Budget Capacity**: $13-17/day sufficient for YouTube minimum viable testing

**YouTube Campaign Structure**:

**Campaign 1: YouTube In-Stream Testing**:
- **Budget**: $13-17/day
- **Objective**: Conversions (Purchase)
- **Ad Format**: Skippable In-Stream (15-30 second video ads before YouTube videos)
- **Targeting**: Custom Intent audiences (based on search keywords + website visitors)
- **Creative**: 3-5 video ads (repurpose top Meta video ads, add 5-second hook optimized for YouTube)

**YouTube Creative Adaptation**:
- **Longer Hook Window**: YouTube users can't skip for 5 seconds (vs 3 seconds Meta scroll decision)
- **Higher Production Value**: YouTube audiences expect more polished content (less tolerance for raw UGC)
- **Sound-On**: 95%+ YouTube views with sound (optimize audio, music, voiceover)

**Month 2 YouTube Goals**:
- **Data Gathering**: 20-30 purchases in Month 2 (enough to validate potential)
- **CPA Benchmark**: Establish baseline CPA for YouTube (typically 20-40% higher than Meta initially)
- **Creative Learnings**: Which Meta ads translate well to YouTube

**Month 2 YouTube Decision (Day 60)**:
- **If CPA <150% of Meta CPA**: Continue YouTube Month 3, consider budget increase
- **If CPA 150-200% of Meta CPA**: Continue at same budget, optimize targeting/creative
- **If CPA >200% of Meta CPA**: Pause YouTube, revisit in Month 4-6 after more Meta scale

## Month 3: Multi-Platform Optimization + TikTok Consideration (Days 61-90) [Confidence: A | Source: M11 platform allocation | Date: 2026-02]

### Month 3 Goals

**Primary**: Reach $100/day blended spend with profitable ROAS.
**Secondary**: Optimize Meta + YouTube, consider TikTok if bandwidth allows.

**Month 3 Budget**: $3,000/month ($100/day)
- **Meta**: $2,100/month ($70/day) — 70% of budget
- **YouTube**: $600/month ($20/day) — 20% of budget
- **TikTok**: $300/month ($10/day) — 10% of budget (if ready)

### Meta Scaling (Month 3)

**Campaign Structure**:

**Campaign 1: Testing Campaign**:
- **Budget**: $30/day (ongoing)
- **Focus**: Test new concepts + refresh fatigued creatives

**Campaign 2: Scaling Campaign**:
- **Budget**: $60-80/day (scaled from Month 2)
- **Focus**: Scale proven winners, monitor for fatigue (frequency, CPM, CTR)

**Campaign 3: Retargeting Campaign**:
- **Budget**: $15-20/day
- **Focus**: Retarget growing website traffic pool

**Campaign 4: Horizontal Expansion** (NEW):
- **Budget**: $10-20/day
- **Focus**: Test new audiences (geo expansion, demographic segments, LAL variations)

**Creative Refresh**:
- **Month 1 Ads**: Likely fatigued by Month 3 (Week 8-12) → refresh with derivatives
- **Cadence**: Expect to refresh 2-3 top ads in Month 3 (proactive fatigue management)

### YouTube Scaling (Month 3)

**If Month 2 YouTube Successful** (CPA <150% Meta):
- **Budget**: $20/day (increase from $13-17/day)
- **Campaign Expansion**: Add YouTube Discovery ads (test thumbnail/headline variations)
- **Creative**: Test 3-5 new YouTube-specific video ads (not just Meta repurposing)

**If Month 2 YouTube Marginal** (CPA 150-200% Meta):
- **Budget**: Maintain $13-17/day
- **Optimization Focus**: Improve targeting (tighter Custom Intent audiences), test longer video formats (30-60 seconds)

### TikTok Introduction (Month 3) [Optional]

**Why TikTok Month 3**:
- **Meta + YouTube Validated**: Multi-platform foundation established
- **Bandwidth**: Team has capacity for 3rd platform (creative production, optimization time)
- **Budget**: $10/day minimum for TikTok testing

**TikTok Campaign Structure**:

**Campaign 1: TikTok Testing**:
- **Budget**: $10/day
- **Objective**: Conversions (Complete Payment)
- **Ad Format**: In-Feed Video ads (9:16 vertical video)
- **Targeting**: Automatic targeting (let TikTok algorithm optimize)
- **Creative**: 3-5 native-feeling video ads (UGC style, trending audio, fast-paced)

**TikTok Creative Requirements**:
- **Native Feel**: Must look like organic TikTok content (polished ads underperform)
- **Trending Audio**: Use trending sounds/music (algorithm favors)
- **Fast Hook**: 1-3 seconds (faster than Meta's 3-5 seconds)
- **Creator Talent**: Use TikTok creators or talent that "feels TikTok"

**Month 3 TikTok Goals**:
- **Data Gathering**: 10-15 purchases in Month 3 (validate potential)
- **CPA Benchmark**: Establish baseline (TikTok CPA often 10-30% lower than Meta initially)
- **Creative Learnings**: Which TikTok-specific formats work

**Month 3 TikTok Decision (Day 90)**:
- **If CPA <Meta CPA**: Scale TikTok in Month 4 (high priority, efficient channel)
- **If CPA 100-120% of Meta CPA**: Continue TikTok Month 4, optimize creative/targeting
- **If CPA >150% of Meta CPA**: Pause TikTok, revisit in Month 5-6

### Month 3 End Evaluation (Day 90)

**Quarter 1 Success Metrics**:
- [ ] **Blended ROAS**: Q1 average ROAS ≥break-even + 20% buffer (e.g., 3.0x if break-even 2.5x)
- [ ] **Spend Level**: Spending $100/day consistently (Month 3)
- [ ] **Platform Mix**: 2-3 platforms active (Meta mandatory, YouTube + TikTok validated or testing)
- [ ] **Creative Library**: 50-100 ads tested, 10-15 scalable winners identified
- [ ] **Ready to Scale**: Foundation in place to increase budget 3-5x in Month 4-6 ($300-500/day)

**If Quarter 1 Succeeds**:
- **Month 4-6 Goal**: Scale to $5,000-10,000/month ($165-333/day) using 20% Rule
- **Platform Allocation**: Shift toward M11 target (50% Meta / 35% YouTube / 15% TikTok)
- **Team Expansion**: Consider hiring media buyer or creative producer (workload increases with scale)

**If Quarter 1 Fails** (ROAS <break-even, <$50/day spend):
- **Diagnose**: Product-market fit? Creative quality? Offer strength? Market size?
- **Pivot**: Adjust weakest element (potentially major pivot like offer/price/positioning)
- **Timeline**: Give 1-2 more months of testing before considering paid acquisition not viable for this product

## Creative Production Pipeline for First 100 Ads [Confidence: B | Source: Creative production frameworks | Date: 2026-02]

### Creative Volume Targets

**Month 1**: 20-30 ads tested
**Month 2**: 30-40 ads tested (10-15 new/week)
**Month 3**: 40-50 ads tested (10-15 new/week)
**Total Q1**: 90-120 ads tested

**Win Rate Expectation**: 10-20% (9-24 scalable winners from 90-120 ads tested)

### Creative Production Methods

**Method 1: Founder/Team Self-Production** (Lowest Cost):
- **Tools**: iPhone/smartphone, natural lighting, basic editing (CapCut, iMovie)
- **Formats**: Talking head UGC, product demos, b-roll + text overlay
- **Cost**: $0-50 per ad (time investment only)
- **Production Time**: 1-2 hours per ad
- **Best For**: Month 1-2, budget <$2,000/month

**Method 2: UGC Creator Partnerships** (Moderate Cost):
- **Platforms**: Fiverr, Upwork, Billo, Insense
- **Cost**: $50-200 per video (creator fee)
- **Production Time**: 3-7 days (brief → creator films → deliver)
- **Best For**: Month 2-3, need diverse talent/perspectives

**Method 3: Professional Production** (High Cost):
- **Partners**: Creative agencies, video production companies
- **Cost**: $500-2,000 per video (high production value)
- **Production Time**: 1-2 weeks (concept → shoot → edit → deliver)
- **Best For**: Month 3+, hero assets for top-of-funnel brand campaigns

**Recommended Mix for First 100 Ads**:
- **70% Self-Production**: Founder/team creating majority of ads (fast, cheap, authentic)
- **20% UGC Creators**: 5-10 UGC videos from diverse creators (representation, voice variety)
- **10% Professional**: 2-5 high-production videos (brand credibility, evergreen assets)

### Creative Brief Template (UGC Creators)

**Product**: [Product name, description, key benefits]

**Target Audience**: [Demographics, psychographics, pain points]

**Hook**: [Specific hook to test, e.g., "Tired of acne that won't go away?"]

**Body/Script** (15-30 seconds):
- Introduce problem (5 seconds)
- Show product as solution (10 seconds)
- Share result/benefit (5 seconds)
- CTA (5 seconds): "Try it risk-free for 30 days at [URL]"

**Style/Tone**: [Natural, conversational, authentic — NOT overly salesy]

**Format**: Vertical video (9:16), 15-30 seconds, well-lit, clear audio

**Deliverables**: 3 takes (allow A/B testing of performance variations)

**Timeline**: Deliver within 5 days

**Compensation**: $100 per video

## Intelligence Gaps & Upgrade Paths

### Current Gaps [Confidence: D | Upgrade Path: Launch phase case studies | Date: 2026-02]
1. **Win Rate by Vertical**: Do skincare products have higher ad win rates (20%+) vs software (10%)? (currently generalized 10-20%)
2. **Platform Sequencing Validation**: Is Meta → YouTube → TikTok optimal for all verticals, or do some perform better with TikTok earlier? (M11 assumes Meta-first, but limited testing)
3. **Minimum Viable Budget**: Can launch phase succeed at <$50/day, or is $50-100/day truly minimum? (current recommendation $50-100/day)

### Upgrade Opportunities
- **Source**: 10+ launch phase case studies across verticals (track first 90 days, budget, ads tested, winners, ROAS)
- **Source**: Platform sequencing A/B test (cohort 1: Meta → YouTube → TikTok vs cohort 2: Meta → TikTok → YouTube, compare outcomes)
- **Source**: Budget threshold testing (test $25/day, $50/day, $100/day launch budgets, measure success rate and time to first winner)

## Cross-References
- **M11 (Paid Acquisition Budget Allocation)**: Platform sequencing (Meta → YouTube → TikTok), budget percentages
- **M14 (Creative Testing Protocol)**: Kill criteria (10 purchases OR 14 days) applied throughout launch phase
- **account_structure.md**: Campaign structure for testing, scaling, retargeting campaigns
- **scaling_playbook.md**: Phase 1 (Testing) methodology applied in Month 1-2
- **hook_testing_matrix.md**: Creative testing framework for first 100 ads
- **daily_checklist.md**: Daily operational workflow for launch phase media buyer

---

**Version**: 1.0
**Last Updated**: 2026-02-10
**Primary Sources**: M11 Paid Acquisition Budget Allocation, M14 Creative Testing Protocol, performance marketing launch frameworks, Danilo V-M13 research
