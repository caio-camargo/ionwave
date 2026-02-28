# Ad Account Structure

## Overview
Strategic account architecture for Meta, TikTok, and Google Ads optimized for 2026 algorithm behavior, testing velocity, and scale readiness.

## Meta Account Structure (50% Budget Allocation)

### Campaign Architecture [Confidence: A | Source: Meta Business Help Center 2024-2025, Danilo V-M13 | Date: 2026-02]

**Primary Structure: Consolidated Campaign Budget Optimization (CBO)**
- **2026 Standard**: CBO strongly preferred over ABO for accounts spending $500+/day
- **Learning Phase**: Requires 50 conversion events per week per ad set minimum
- **Algorithm Efficiency**: CBO allows Meta's delivery system to optimize budget allocation across ad sets in real-time

**Campaign Tiers**:

1. **Testing Campaign** (CBO)
   - Budget: 20-30% of total Meta spend
   - Objective: Conversions (Purchase)
   - Ad Sets: 3-5 active (audience/creative variations)
   - Daily Budget: $50-150/day minimum per ad set for proper learning
   - Purpose: Validate new creative, audiences, or messaging angles

2. **Scaling Campaign** (CBO)
   - Budget: 50-60% of total Meta spend
   - Objective: Conversions (Purchase)
   - Ad Sets: 2-4 winning segments (proven performers from testing)
   - Daily Budget: $200-1,000+/day per ad set
   - Purpose: Maximize volume from validated winners

3. **Retargeting Campaign** (Separate Campaign)
   - Budget: 10-20% of total Meta spend
   - Objective: Conversions (Purchase)
   - Ad Sets: 2-3 (engagement windows: 7-day, 30-day, 90-day)
   - Daily Budget: $30-100/day per ad set
   - Purpose: Convert warm traffic, abandoned cart recovery

**When to Use ABO** [Confidence: A | Source: Meta Ads Manager best practices 2025 | Date: 2026-02]:
- Accounts spending <$300/day (insufficient volume for CBO optimization)
- Extreme budget control needed for specific audience tests
- New account launch (<30 days old, building pixel data)

### Advantage+ Shopping Campaigns [Confidence: A | Source: Meta Advantage+ guidelines 2025-2026, TWP expert dialogue | Date: 2026-02]

**What is Advantage+ Shopping**: Meta's AI-powered campaign type (launched 2023) that automates audience, placement, and creative optimization. Uses machine learning to find best-performing combinations without manual targeting.

**Advantage+ vs Manual CBO**:
- **Advantage+**: Black box (no audience/creative control), algorithm chooses everything
- **Manual CBO**: Full control (choose audiences, placements, test systematically)
- **Trade-off**: Advantage+ may find better performance at scale, but obscures attribution and creative learnings

**Budget-Tiered Adoption Framework**:

**$500-2,000/day: Manual CBO Primary (Learning Phase)**
- **Recommendation**: Use manual CBO for 90%+ of budget
- **Rationale**: Need attribution clarity (which audiences, creatives work) and testing control (systematic iteration)
- **Advantage+ Use**: 0-10% of budget (optional exploratory test)
- **Why Not Advantage+**: At this scale, learning which audiences/creatives work is more valuable than marginal efficiency gains from automation

**$2,000-5,000/day: Test Advantage+ (Transition Phase)**
- **Recommendation**: Manual CBO 70-80%, Advantage+ 10-20% of budget
- **Rationale**: Sufficient scale to benefit from Advantage+ automation, but maintain manual campaigns for attribution and learning
- **Testing Protocol**: Launch Advantage+ Shopping campaign at 15% of budget, compare 30-day performance vs manual CBO
  - If Advantage+ ROAS ≥90% of manual CBO: Increase to 30%
  - If Advantage+ ROAS <80% of manual CBO: Reduce to 5-10% or pause
- **Why Test Now**: High enough spend for Advantage+ algorithm to optimize effectively

**>$5,000/day: Advantage+ Can Be Majority (Scale Phase)**
- **Recommendation**: Advantage+ 30-50%, Manual CBO 50-70%
- **Rationale**: At scale, Advantage+ efficiency gains outweigh attribution visibility loss for portion of budget
- **Portfolio Approach**: Maintain manual CBO for learning/testing, use Advantage+ for scaling proven offers
- **Attribution Trade-Off**: Accept reduced granular data in exchange for higher ROAS/scale efficiency

**Advantage+ Best Practices**:
- **Creative Diversity**: Provide 10-15 creative variations (Advantage+ tests combinations)
- **Broad Product Catalog**: Works best with 20+ SKUs (algorithm optimizes product-audience matching)
- **Conversion Optimization**: Ensure 50+ weekly conversions for algorithm learning
- **Monitor CPM/CPA**: Advantage+ can inflate CPMs if not monitored (algorithm aggressively bids for perceived-best users)

**When NOT to Use Advantage+**:
- **New accounts** (<30 days, insufficient pixel data)
- **Low budgets** (<$2,000/day, algorithm needs volume)
- **Attribution-critical** (need to know exactly which creatives/audiences work for future planning)
- **Limited creative** (<5 variations, Advantage+ needs variety to test)

### Ad Set Configuration

**Audience Strategy** [Confidence: A | Source: Meta post-iOS 14.5 guidelines, Danilo research | Date: 2026-02]:
- **Broad Targeting Primary**: Advantage+ audience expansion enabled
- **Minimum Audience Size**: 2M+ potential reach (allows algorithm flexibility)
- **Lookalike Audiences**: 1-3% LTV-based seed lists (>1,000 high-value customers)
- **Interest Targeting**: Use sparingly, primarily for initial testing validation

**Placement Strategy**:
- **Advantage+ Placements**: Default (Facebook Feed, Instagram Feed/Stories/Reels, Audience Network)
- **Manual Placement Exceptions**: Disable Audience Network if brand safety critical or performance consistently underperforms

**Delivery Optimization**:
- **Primary**: Purchase conversions
- **Attribution Window**: 7-day click, 1-day view (post-iOS 14.5 standard)
- **Cost Control**: Avoid hard bid caps during scaling (use Campaign Budget Optimization)

### Naming Convention [Confidence: B | Source: Industry standard practice, Danilo framework | Date: 2026-02]

**Campaign Level**:
```
[Platform]_[Objective]_[Stage]_[Month]
Examples:
- FB_CONV_Testing_Feb26
- FB_CONV_Scaling_Feb26
- FB_CONV_Retarget_Feb26
```

**Ad Set Level**:
```
[Audience]_[Creative Theme]_[Budget]
Examples:
- Broad_ProblemAware_$50
- LAL_1-3_SolutionFocus_$100
- Retarget_7d_OfferDriven_$30
```

**Ad Level**:
```
[Hook]_[Format]_[IterationVersion]
Examples:
- "Are you tired"_Video_v1
- "3 reasons why"_Carousel_v2
- Testimonial_UGC_v3
```

## TikTok Account Structure (15% Budget Allocation)

### Campaign Architecture [Confidence: A | Source: TikTok for Business 2025, Danilo V-M13 | Date: 2026-02]

**Primary Structure: Campaign Budget Optimization (CBO)**
- **2026 Standard**: CBO preferred for accounts spending $200+/day
- **Learning Phase**: 50 conversions per ad group within 7 days (stricter than Meta)
- **Creative Velocity**: TikTok requires higher creative refresh rate (2-4 weeks vs Meta 4-6 weeks)

**Campaign Tiers**:

1. **Testing Campaign** (CBO)
   - Budget: 30-40% of total TikTok spend
   - Objective: Conversions (Complete Payment)
   - Ad Groups: 3-5 active
   - Daily Budget: $20-50/day minimum per ad group
   - Purpose: High-velocity creative testing (TikTok creative fatigue faster than Meta)

2. **Scaling Campaign** (CBO)
   - Budget: 50-60% of total TikTok spend
   - Objective: Conversions (Complete Payment)
   - Ad Groups: 2-3 winning segments
   - Daily Budget: $100-500+/day per ad group
   - Purpose: Scale winners before creative fatigue

3. **Retargeting Campaign**
   - Budget: 10% of total TikTok spend
   - Objective: Conversions
   - Ad Groups: 2 (15-day, 30-day engagement)
   - Purpose: Limited retargeting (smaller audience pool than Meta)

### Ad Group Configuration [Confidence: A | Source: TikTok Ads Manager guidelines 2025 | Date: 2026-02]

**Audience Strategy**:
- **Automatic Targeting**: Primary (TikTok algorithm optimization)
- **Minimum Audience Size**: 1M+ potential reach
- **Custom Audiences**: Website visitors (15/30-day windows), engagement-based
- **Interest/Behavioral**: Use for initial validation, transition to automatic

**Placement Strategy**:
- **TikTok Feed Only**: Disable partner placements for brand control and performance clarity
- **Exception**: Enable Pangle Network only if data shows comparable performance

**Creative Requirements**:
- **Vertical Video**: 9:16 aspect ratio mandatory
- **Duration**: 15-30 seconds optimal (60 seconds max)
- **Native Feel**: User-generated content (UGC) style outperforms polished ads 3:1

### Naming Convention [Confidence: B | Source: Industry practice, Danilo framework | Date: 2026-02]

**Campaign Level**:
```
TT_[Objective]_[Stage]_[Month]
Examples:
- TT_CONV_Testing_Feb26
- TT_CONV_Scaling_Feb26
```

**Ad Group Level**:
```
[Audience]_[Hook Theme]_[Budget]
Examples:
- Auto_Native_$30
- Retarget_15d_Offer_$20
```

## YouTube/Google Ads Account Structure (35% Budget Allocation)

### Campaign Architecture [Confidence: A | Source: Google Ads Help Center 2025, M11 platform allocation | Date: 2026-02]

**Primary Formats**:

1. **YouTube In-Stream Ads (Skippable)** — 60% of YouTube budget
   - Objective: Conversions (Website Traffic → Purchase)
   - Bidding: Target CPA or Maximize Conversions
   - Ad Groups: 3-5 (audience/creative variations)
   - Daily Budget: $50-200/day per campaign
   - Creative: 15-30 second pre-roll, strong hook in first 3 seconds

2. **YouTube Discovery Ads** — 25% of YouTube budget
   - Objective: Consideration (Video Views)
   - Bidding: Maximum CPV
   - Ad Groups: 2-3 (intent-based audiences)
   - Daily Budget: $30-100/day per campaign
   - Creative: Thumbnail + headline optimization critical

3. **Google Search (Intent-Based)** — 15% of YouTube budget
   - Objective: Conversions (Purchase)
   - Bidding: Target ROAS
   - Ad Groups: Tight keyword themes (5-10 keywords per group)
   - Daily Budget: $50-150/day per campaign
   - Purpose: Capture high-intent demand

### YouTube Campaign Configuration [Confidence: A | Source: Google Ads video campaign guidelines 2025 | Date: 2026-02]

**Audience Targeting**:
- **Custom Intent Audiences**: Based on search behavior + website visitors
- **In-Market Audiences**: Product category aligned
- **Affinity Audiences**: Use for top-of-funnel awareness only
- **Remarketing**: Website visitors (7/30/90-day windows)

**Placement Strategy**:
- **YouTube Search Results**: High-intent placements
- **YouTube Videos**: Contextually relevant channels
- **Exclude**: YouTube Kids, sensitive content categories

**Creative Specs**:
- **In-Stream**: 15-30 seconds (strong hook in first 5 seconds before skip option)
- **Discovery**: Thumbnail design drives 70% of CTR
- **Companion Banner**: Always include with In-Stream ads

### Google Search Campaign Configuration [Confidence: A | Source: Google Ads Search best practices 2025 | Date: 2026-02]

**Campaign Structure**:
- **Brand Campaign**: Separate (protect brand traffic, typically 5-10x ROAS)
- **Competitor Campaign**: Separate (test cautiously, often lower conversion rates)
- **Product/Category Campaigns**: Tight ad groups (Single Keyword Ad Groups for high-volume terms)

**Keyword Strategy**:
- **Match Types**: Phrase + Broad Match (with smart bidding) — Exact match less critical in 2026
- **Negative Keywords**: Aggressive negative list (updated weekly)
- **Keyword Intent**: Transactional > Informational for direct response

**Ad Copy**:
- **Responsive Search Ads (RSA)**: 8-10 headlines, 3-4 descriptions
- **Extensions**: Sitelinks, callouts, structured snippets (all available extensions enabled)

### Naming Convention [Confidence: B | Source: Industry practice | Date: 2026-02]

**YouTube Campaign**:
```
YT_[Format]_[Objective]_[Audience]_[Month]
Examples:
- YT_InStream_CONV_CustomIntent_Feb26
- YT_Discovery_Consideration_InMarket_Feb26
```

**Google Search Campaign**:
```
GS_[Type]_[Category]_[Month]
Examples:
- GS_Brand_ProductName_Feb26
- GS_Competitor_AlternativeTo_Feb26
- GS_Category_ProblemSolution_Feb26
```

## Multi-Platform Account Hierarchy [Confidence: B | Source: IonWave operational framework, Danilo guidance | Date: 2026-02]

### Business Manager Structure

**Meta**:
- **Business Manager**: One per company (avoid multiple for same business)
- **Ad Accounts**: 1-2 maximum (testing account + main account for agencies)
- **Pixels**: One pixel per website (use Events Manager for multi-domain)
- **Payment Methods**: Backup payment method required (avoid service disruption)

**TikTok**:
- **Business Center**: One per company
- **Ad Accounts**: 1 primary (multiple accounts rarely needed)
- **TikTok Pixel**: One per website
- **Payment Methods**: Backup required + higher spending thresholds need credit verification

**Google**:
- **Manager Account (MCC)**: Use for multi-account management (agencies, brands with multiple products)
- **Sub-Accounts**: By product line or business unit if needed
- **Conversion Tracking**: Google Analytics 4 + Google Ads conversion tags (dual tracking for accuracy)

### Access & Permissions [Confidence: B | Source: Platform security best practices | Date: 2026-02]

**Role Hierarchy**:
1. **Admin**: Founder/CMO only (full access, payment changes)
2. **Advertiser**: Media buyer (campaign management, no payment access)
3. **Analyst**: Reporting only (read-only access)
4. **Creative Partner**: Ad creative management (no budget/targeting access)

**Security Protocol**:
- **Two-Factor Authentication (2FA)**: Required for all admin accounts
- **Session Timeout**: 30-day maximum
- **Audit Trail**: Monthly access review (remove inactive users)

## Account Setup Checklist [Confidence: A | Source: Operational best practices compilation | Date: 2026-02]

### Meta
- [ ] Business Manager created with primary business email
- [ ] Ad Account created and linked to Business Manager
- [ ] Facebook Pixel installed + base code + event tracking verified
- [ ] Conversions API (CAPI) configured via server-side integration
- [ ] Domain verification completed (improves ad delivery)
- [ ] Payment method added + backup payment method
- [ ] Aggregated Event Measurement (AEM) configured (iOS 14.5+ requirement)
- [ ] Custom conversions created (Purchase, Add to Cart, Initiate Checkout)
- [ ] Test purchase tracked successfully end-to-end

### TikTok
- [ ] Business Center account created
- [ ] Ad Account created and linked
- [ ] TikTok Pixel installed + base code + event tracking verified
- [ ] Event tracking tested (Page View, Add to Cart, Complete Payment)
- [ ] Payment method added with sufficient credit limit
- [ ] Domain verification completed
- [ ] Conversion optimization enabled
- [ ] Test purchase tracked successfully

### YouTube/Google Ads
- [ ] Google Ads account created
- [ ] Google Analytics 4 (GA4) property created + linked to Google Ads
- [ ] Conversion actions defined (Purchase, Add to Cart, Begin Checkout)
- [ ] Google Ads conversion tag installed on website
- [ ] Enhanced conversions enabled (first-party data matching)
- [ ] YouTube channel linked to Google Ads account
- [ ] Payment method added
- [ ] Test conversion tracked successfully

## Intelligence Gaps & Upgrade Paths

### Current Gaps [Confidence: D | Upgrade Path: Platform partner consultation | Date: 2026-02]
1. **TikTok Shop Integration**: Native commerce features for TikTok campaigns (emerging Q1 2026)
2. **AI-Powered Campaign Types**: Meta Advantage+ Shopping, Google Performance Max full integration strategies
3. **Privacy Sandbox Updates**: Google's cookie replacement impact on YouTube campaign tracking (2026 rollout)

### Upgrade Opportunities
- **Source**: Direct consultation with Meta/TikTok/Google partner managers for account-level optimization recommendations
- **Source**: A/B test documentation of CBO vs ABO performance by account size/vertical
- **Source**: Account structure case studies for 8-figure annual ad spend brands

## Cross-References
- **M11 (Paid Acquisition Budget Allocation)**: Platform allocation percentages → 50% Meta, 35% YouTube, 15% TikTok
- **M14 (Creative Testing Protocol)**: Kill criteria integration → testing campaign structure must support minimum viable data requirements
- **M30 (Performance Metrics Framework)**: MER-first measurement → account structure must support blended tracking across platforms
- **attribution_model.md**: Dual tracking requirements (Pixel + CAPI) for each platform
- **scaling_framework.md**: Campaign architecture tiers align with 20% Rule scaling methodology

---

**Version**: 1.0
**Last Updated**: 2026-02-10
**Primary Sources**: Meta Business Help Center (2024-2025), TikTok for Business (2025), Google Ads Help Center (2025), Danilo V-M13 research compilation
