# Ad Swipe File

## Overview
Structured reference library for storing, organizing, and learning from winning ad creative (yours and competitors'). Designed for rapid inspiration, creative briefing, and pattern recognition across campaigns.

## Swipe File Purpose [Confidence: A | Source: Creative operations frameworks, advertising best practices | Date: 2026-02]

### What is a Swipe File?

**Definition**: Curated collection of high-performing ads organized for easy reference and pattern analysis.

**Primary Use Cases**:
1. **Creative Inspiration**: Quick reference when briefing new ads ("make it like this winning ad")
2. **Pattern Recognition**: Identify trends across winning ads (hooks, formats, messaging)
3. **Competitive Intelligence**: Track competitor creative strategies, messaging, offers
4. **Onboarding**: Train new team members on what "good" looks like
5. **Client Presentations**: Show examples when explaining creative strategy

**What to Include**:
- **Your Winning Ads**: Top performers (ROAS, CTR, longevity)
- **Competitor Ads**: Strong performers from competitors (observed in feed or via spy tools)
- **Industry Benchmarks**: Award-winning or viral ads from your vertical
- **Cross-Industry Inspiration**: Breakthrough ads from other verticals (format/storytelling inspiration)

### Swipe File vs Creative Library

**Creative Library**: ALL ads ever created/tested (full archive, performance data)
**Swipe File**: CURATED selection of best performers and inspirational examples (actionable reference)

**Relationship**: Swipe file is subset of creative library (winners + external inspiration)

## Swipe File Structure [Confidence: A | Source: Information architecture best practices | Date: 2026-02]

### Organization Hierarchy

**Level 1: Platform**
- Meta (Facebook/Instagram)
- TikTok
- YouTube
- Google Search
- Other (Pinterest, Snapchat, Reddit, etc.)

**Level 2: Format**
- Video (UGC, Product Demo, Testimonial, Story-Based, etc.)
- Carousel (Image sequence)
- Static Image
- Text Ad (Search)

**Level 3: Hook Category** (from hook_testing_matrix.md)
- Pattern Interrupt
- Problem/Pain Callout
- Result/Transformation
- Curiosity/Question
- Relatable Scenario
- Social Proof/Authority
- How-To/Educational

**Level 4: Industry/Vertical**
- E-commerce (Skincare, Fashion, Supplements, etc.)
- Software/SaaS
- Info Products (Courses, eBooks)
- Lead Generation (Services, B2B)
- Local Business
- Other

### Example Folder Structure

```
Ad Swipe File/
├── Meta/
│   ├── Video/
│   │   ├── Problem_Callout/
│   │   │   ├── Skincare_Winners/
│   │   │   ├── Software_Winners/
│   │   │   └── Competitor_Examples/
│   │   ├── Result_Transformation/
│   │   └── Social_Proof/
│   ├── Carousel/
│   └── Static_Image/
├── TikTok/
│   ├── Video/
│   │   ├── Pattern_Interrupt/
│   │   ├── Relatable_Scenario/
│   │   └── Trend_Jacking/
│   └── Spark_Ads/
├── YouTube/
│   ├── In_Stream/
│   │   ├── Story_Based/
│   │   ├── Educational/
│   │   └── Testimonial/
│   └── Discovery/
└── Inspiration/
    ├── Cross_Industry_Winners/
    ├── Award_Winning/
    └── Viral_Organic/
```

## Entry Template [Confidence: A | Source: Creative documentation frameworks | Date: 2026-02]

### For Your Own Winning Ads

**File Name**: `[Date]_[Platform]_[HookCategory]_[ProductVertical]_[UniqueID]`
- Example: `2026-02-10_Meta_ProblemCallout_Skincare_001`

**Metadata**:
- **Platform**: Meta (Facebook Feed)
- **Format**: Video (UGC, Talking Head)
- **Duration**: 30 seconds
- **Hook Category**: Problem Callout
- **Target Audience**: Women 25-45, skincare interest
- **Offer**: $50 product, free shipping, 30-day money-back guarantee
- **Launch Date**: 2026-01-15
- **Performance Period**: 2026-01-15 to 2026-02-10 (27 days)

**Performance Metrics**:
- **Impressions**: 250,000
- **CTR**: 1.8%
- **CPC**: $0.75
- **Conversions**: 85
- **ROAS**: 3.5x
- **Frequency**: 2.3 (at end of period)
- **Spend**: $1,875
- **Revenue**: $6,563

**Creative Elements**:
- **Hook** (0-5 sec): "Tired of acne that won't go away no matter what you try?"
- **Body** (5-25 sec): Product demo (applying serum), ingredient callout (salicylic acid, niacinamide), before/after results
- **CTA** (25-30 sec): "Try it risk-free for 30 days. Link in bio."
- **Visuals**: Bathroom setting, natural lighting, close-up shots
- **Audio**: Voiceover (female, casual tone), soft background music
- **Text Overlay**: "10,000+ 5-star reviews" (5-sec mark), "30-day guarantee" (25-sec mark)

**Why It Worked** (Analysis):
- **Hook Resonance**: Problem callout directly addressed target pain (acne frustration)
- **Credibility**: Ingredient callout + social proof built trust
- **Risk Reversal**: 30-day guarantee reduced purchase hesitation
- **UGC Feel**: Authentic, not overly produced (matches Meta best practices)

**Derivative Variations Tested**:
- Hook 2: "Struggling with acne?" (CTR 1.6%, ROAS 3.2x) — slight underperformance
- Hook 3: "10,000+ people cleared their acne with this" (CTR 1.5%, ROAS 2.9x) — underperformed
- 15-sec cut-down: (CTR 2.1%, ROAS 3.1x) — higher CTR, lower ROAS
- Talent swap (Male, age 30): (CTR 1.3%, ROAS 2.5x) — underperformed (female demo preferred female talent)

**Files**:
- Video file: `2026-02-10_Meta_ProblemCallout_Skincare_001.mp4`
- Thumbnail: `2026-02-10_Meta_ProblemCallout_Skincare_001_thumb.jpg`
- Script: `2026-02-10_Meta_ProblemCallout_Skincare_001_script.txt`

### For Competitor/Inspiration Ads

**File Name**: `[Date]_[Brand]_[Platform]_[HookCategory]_[UniqueID]`
- Example: `2026-02-08_CompetitorX_Meta_ResultTransformation_001`

**Metadata**:
- **Brand**: Competitor X (skincare brand)
- **Platform**: Meta (Instagram Reels)
- **Format**: Video (UGC, Before/After)
- **Duration**: 20 seconds
- **Hook Category**: Result/Transformation
- **Observation Date**: 2026-02-08
- **Observation Method**: Seen in feed, captured via screenshot

**Creative Elements**:
- **Hook** (0-3 sec): Before/after split screen (immediate visual impact)
- **Body** (3-18 sec): "I used [Product] for 2 weeks, here's my result" → product application → close-up of clear skin
- **CTA** (18-20 sec): "Link in bio, 20% off today only"
- **Visuals**: Vertical video, natural lighting, bathroom setting
- **Audio**: Trending TikTok audio (upbeat, recognizable)
- **Text Overlay**: "2 WEEKS" (3-sec mark), "20% OFF" (18-sec mark)

**Why It Likely Works** (Hypothesis):
- **Immediate Proof**: Before/after hook grabs attention instantly (visual transformation compelling)
- **Trending Audio**: TikTok audio likely boosting distribution (algorithm favors)
- **Urgency**: "20% off today only" creates time pressure (scarcity tactic)
- **Authentic Feel**: UGC style (not overproduced, relatable)

**Adaptation Ideas**:
- **Test before/after hook** for our product (strong visual impact)
- **Leverage trending audio** on TikTok (rotate weekly based on trends)
- **Add urgency to CTA** (test "Limited time" vs "Try risk-free")

**Files**:
- Screenshot/Screen recording: `2026-02-08_CompetitorX_Meta_ResultTransformation_001.jpg`
- Notes: `2026-02-08_CompetitorX_Meta_ResultTransformation_001_notes.txt`

## Swipe File Collection Methods [Confidence: A | Source: Competitive intelligence frameworks | Date: 2026-02]

### Method 1: Manual Capture (Your Own Ads)

**When**: After ad reaches ≥10 purchases, ROAS ≥target, 7+ days consistency (M14 winner criteria)

**Process**:
1. Export ad from Ads Manager (video file + performance data)
2. Create swipe file entry (use template above)
3. Document creative elements, performance, analysis
4. Store in organized folder structure
5. Tag for easy searching (platform, format, hook, vertical)

**Cadence**: Weekly (add 1-3 new winners per week)

### Method 2: Competitor Monitoring (Manual)

**Tools**:
- **Your Own Feed**: Follow competitors, engage with their content (like/comment) to see more ads
- **Ad Library** (Meta): facebook.com/ads/library → search competitor brand → see all active ads
- **TikTok Creative Center**: ads.tiktok.com/business/creativecenter → Top Ads by category/region
- **YouTube Ads**: Browse YouTube while logged out (see more ads), search competitor brand

**Process**:
1. **Identify Competitor Ads**: See ad in feed or via Ad Library search
2. **Capture**: Screenshot (static/carousel), screen recording (video), save link
3. **Document**: Create competitor entry (metadata, creative elements, hypothesis)
4. **Store**: Add to Competitor_Examples folder in swipe file

**Cadence**: Weekly (15-30 minutes browsing competitor ads)

**Best Practices**:
- **Focus on Longevity**: Ads running 30+ days likely performing well (Meta Ad Library shows start date)
- **Multiple Sightings**: If you see same competitor ad repeatedly, probably a winner
- **Engagement Signals**: High comments, shares, likes (for organic posts) indicate strong resonance

### Method 3: Spy Tools (Paid)

**Tools**:
- **Meta**: AdSpy ($149/month), PowerAdSpy ($49/month), BigSpy (free/paid tiers)
- **TikTok**: Pipiads ($77/month), BigSpy (TikTok coverage)
- **Cross-Platform**: Foreplay ($39/month), Madgicx Spy ($29/month add-on)

**Features**:
- **Search by Keyword**: Find ads containing specific words (e.g., "acne," "lose weight")
- **Filter by Performance**: Sort by engagement, duration (longest-running = likely winners)
- **Filter by Platform/Vertical**: Narrow to your niche
- **Save to Collections**: Organize ads within tool (export later to swipe file)

**Process**:
1. **Search Parameters**: Set filters (vertical, platform, date range, performance signals)
2. **Review Ads**: Browse results, identify relevant high-performers
3. **Export**: Save video/image files, capture metadata
4. **Add to Swipe File**: Document in competitor entry format

**Cadence**: Monthly (2-3 hours deep dive into competitor landscape)

**ROI Consideration**: $50-150/month spy tool cost = justified if finding 2-3 winning concepts per month that save $500-1,000 in production trial-and-error

### Method 4: Organic/Viral Content

**Purpose**: Find breakout creative concepts before competitors (organic → paid adaptation).

**Sources**:
- **TikTok For You Page**: Viral videos (millions of views) often adapted to paid ads
- **Instagram Reels Explore**: Trending formats, sounds, styles
- **YouTube Trending**: Popular video formats, storytelling styles
- **Reddit**: r/advertising, r/PPC, r/ecommerce (community sharing winning ads)

**Process**:
1. **Identify Viral Content**: Video with >1M views, high engagement (saves, shares)
2. **Analyze Format**: What makes it work? (hook, pacing, music, format)
3. **Adaptation Hypothesis**: How could this format apply to our product?
4. **Document**: Save to Inspiration folder, note adaptation ideas

**Example**:
```
TikTok Viral Video: "Get Ready With Me" format (GRWM)
  - 5M views, makeup routine while storytelling
  - Adaptation Idea: "Get Ready With Me + why I use [Product]" (product integration into popular format)
```

## Tagging & Search System [Confidence: B | Source: Information retrieval frameworks | Date: 2026-02]

### Metadata Tags (For Easy Filtering)

**Platform Tags**: `Meta`, `TikTok`, `YouTube`, `Google`, `Pinterest`, `Snapchat`

**Format Tags**: `Video`, `Carousel`, `Static`, `Text`, `UGC`, `Professional`, `Animation`

**Hook Tags**: `PatternInterrupt`, `ProblemCallout`, `ResultTransformation`, `Curiosity`, `RelatableScenario`, `SocialProof`, `Educational`

**Performance Tags**: `HighROAS` (>4x), `HighCTR` (>2%), `LongRunning` (30+ days), `Viral` (>1M views)

**Vertical Tags**: `Skincare`, `Fashion`, `Supplements`, `Software`, `InfoProducts`, `B2B`, `Services`

**Emotion Tags**: `Fear`, `Desire`, `Trust`, `Urgency`, `Curiosity`, `Humor`, `Inspiration`

**Element Tags**: `Testimonial`, `BeforeAfter`, `ProductDemo`, `Unboxing`, `Comparison`, `Tutorial`, `BehindTheScenes`

### Tagging Tools

**Option 1: Folder Structure + File Naming**:
- Tags embedded in file name: `2026-02-10_Meta_Video_ProblemCallout_HighROAS_Skincare_001.mp4`
- Pros: No additional tool needed
- Cons: Limited search/filter capability

**Option 2: Airtable / Notion Database**:
- Each ad = row in database
- Columns = metadata tags + performance + files (embedded or linked)
- Pros: Powerful filtering, sorting, multi-tag search
- Cons: Requires setup, maintenance

**Option 3: Google Drive + Spreadsheet Index**:
- Files stored in Google Drive folders
- Spreadsheet index with metadata, file links
- Pros: Easy sharing, familiar tools
- Cons: Manual linking, less robust than Airtable

**Recommendation**: Start with folder structure (simple, fast), graduate to Airtable when library >100 ads (scale needs database).

## Swipe File Usage Workflows [Confidence: A | Source: Creative operations best practices | Date: 2026-02]

### Workflow 1: Creative Briefing (New Ad Concept)

**Scenario**: Briefing UGC creator to produce new ad.

**Process**:
1. **Search Swipe File**: Filter by platform (Meta), format (Video), hook (Problem Callout), vertical (Skincare)
2. **Select Reference Ads**: Choose 2-3 top performers as examples
3. **Brief Creator**:
   - "Style reference: Make it feel like [Reference Ad 1]"
   - "Hook structure: Similar to [Reference Ad 2]"
   - "CTA approach: Like [Reference Ad 3]"
4. **Attach Files**: Send reference ad videos + scripts to creator

**Outcome**: Creator has clear visual/style references (reduces back-and-forth, improves first-draft quality)

### Workflow 2: Hook Ideation (Testing New Hooks)

**Scenario**: Need 5-7 new hooks for winning ad body.

**Process**:
1. **Search Swipe File**: Filter by hook category (7 categories from hook_testing_matrix.md)
2. **Review Examples**: Look at top 3-5 ads in each hook category
3. **Adapt Hooks**: Rewrite hooks for your product (keeping structure, changing specifics)
4. **Script Variations**: Create 5-7 hook scripts based on swipe file inspiration

**Example**:
```
Swipe File Hook (Competitor, Skincare): "Tired of acne that won't go away?"
Your Hook Adaptation: "Tired of [your product problem] that won't go away?"

Swipe File Hook (Cross-Industry, Fitness): "I lost 30 pounds in 90 days"
Your Hook Adaptation: "I cleared my skin in 2 weeks" (result transformation structure)
```

### Workflow 3: Competitive Analysis (Monthly Review)

**Scenario**: Monthly review of competitor creative strategy.

**Process**:
1. **Filter Swipe File**: Show competitor ads from last 30 days
2. **Pattern Recognition**:
   - Which hooks are competitors using most? (trend identification)
   - Which formats/styles repeated? (successful patterns)
   - New offers or angles? (competitive positioning shifts)
3. **Strategic Response**:
   - **If competitors using same hooks**: Test differentiated hooks (stand out)
   - **If competitors found new angle**: Test similar angle (proven demand)
   - **If competitors stagnant**: Opportunity to gain edge (innovate)

**Outcome**: Informed creative strategy (differentiate where competitors saturated, follow where they've validated demand)

### Workflow 4: Onboarding New Team Member

**Scenario**: New media buyer or creative strategist joining team.

**Process**:
1. **Curated Starter Pack**: Select 10-15 best examples from swipe file (your top winners + competitor benchmarks)
2. **Walkthrough Session**: Review each ad, explain:
   - Why it worked (hook, format, messaging)
   - Performance results (ROAS, CTR, longevity)
   - Key learnings (what to replicate)
3. **Pattern Training**: Point out common themes across winners (e.g., "Notice all top performers use problem callout hooks")
4. **Assignment**: Have new team member analyze 5-10 more swipe file ads (build pattern recognition)

**Outcome**: Accelerated learning curve (new team member understands "good" faster)

## Swipe File Maintenance [Confidence: B | Source: Knowledge management frameworks | Date: 2026-02]

### Cadence

**Weekly** (30 minutes):
- Add 1-3 new winners from your campaigns (as they reach M14 criteria)
- Capture 3-5 competitor ads (manual browsing or Ad Library check)

**Monthly** (2 hours):
- Spy tool deep dive (if subscribed)
- Organize/tag recent additions (ensure metadata complete)
- Archive outdated ads (>6 months old, no longer relevant)

**Quarterly** (4 hours):
- Review entire swipe file (identify patterns, gaps)
- Update organization structure (add new categories if needed)
- Purge duplicates or low-value entries

### Quality Over Quantity

**Target Size**: 50-200 curated ads (not thousands)

**Inclusion Criteria**:
- **Your Ads**: Only winners (≥10 purchases, ROAS ≥target, 7+ days consistency)
- **Competitor Ads**: Only strong performers (longevity, engagement, repeated sightings)
- **Inspiration**: Only truly innovative or high-performing examples

**Exclusion Criteria**:
- **Mediocre Performers**: Don't clutter swipe file with "meh" ads (dilutes value)
- **Outdated**: Ads >1 year old with dated style/format (unless timeless)
- **Irrelevant**: Cross-industry ads with no clear adaptation path

**Guideline**: If you wouldn't show it as a reference to a creator, don't add it to swipe file.

## Intelligence Gaps & Upgrade Paths

### Current Gaps [Confidence: D | Upgrade Path: Pattern analysis tooling | Date: 2026-02]
1. **Automated Pattern Recognition**: Manual pattern analysis (could be augmented with AI tool analyzing swipe file for common themes)
2. **Performance Prediction**: Can swipe file patterns predict which new ads will perform well? (currently qualitative, could be quantified)
3. **Cross-Platform Creative Translation**: Which Meta ads translate well to TikTok/YouTube? (anecdotal, not systematically tracked)

### Upgrade Opportunities
- **Source**: AI-powered swipe file tool (auto-tag hooks, formats, elements; suggest patterns)
- **Source**: Performance correlation analysis (do ads with X elements outperform those without? require 200+ ad database)
- **Source**: Cross-platform translation tracker (same creative on Meta vs TikTok vs YouTube, compare performance)

## Cross-References
- **hook_testing_matrix.md**: 7 hook categories used for swipe file organization
- **winning_ad_iterations.md**: Swipe file entries document derivative variations tested
- **first_100_ads.md**: Swipe file grows during launch phase (document winners as found)
- **daily_checklist.md**: Weekly swipe file maintenance task in operational workflow

---

**Version**: 1.0
**Last Updated**: 2026-02-10
**Primary Sources**: Creative operations frameworks, competitive intelligence methodologies, knowledge management best practices, Danilo V-M13 research
