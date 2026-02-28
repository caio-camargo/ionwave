# Attribution Model

## Overview
Modern attribution framework for post-iOS 14.5 environment, integrating platform-native tracking (Meta Pixel, TikTok Pixel, Google Ads), server-side tracking (CAPI, Enhanced Conversions), and blended measurement (MER from M30).

## Post-iOS 14.5 Attribution Landscape [Confidence: A | Source: Platform documentation 2024-2025, industry research | Date: 2026-02]

### What Changed

**Pre-iOS 14.5** (Before April 2021):
- **Identifier for Advertisers (IDFA)**: Automatically available for all iOS users
- **28-Day Click Attribution**: Platforms could track conversions up to 28 days after ad click
- **Full User-Level Tracking**: Platforms could track individual user behavior across apps/websites
- **Result**: High attribution accuracy, detailed user journey tracking

**Post-iOS 14.5** (April 2021+):
- **App Tracking Transparency (ATT)**: Users must opt-in to tracking (only 15-25% opt-in rate)
- **7-Day Click / 1-Day View Attribution**: Reduced attribution windows (Meta standard)
- **Aggregated Event Measurement (AEM)**: Limited to 8 conversion events per domain (Meta)
- **Modeled Conversions**: Platforms use statistical modeling to estimate true conversions
- **Result**: 20-30% reported conversion loss, increased reliance on server-side tracking

### Impact on Attribution Accuracy [Confidence: A | Source: Meta ATT research 2022-2024, industry benchmarks | Date: 2026-02]

**Conversion Undercounting**:
- **iOS Web Conversions**: 20-30% underreported (users who opted out of tracking)
- **iOS App Conversions**: 30-50% underreported (IDFA unavailable for majority)
- **Cross-Device Conversions**: Significantly harder to track (user sees ad on phone, converts on desktop)

**Attribution Window Compression**:
- **Longer Sales Cycles**: Products with >7-day consideration (B2B, high-ticket) most impacted
- **Brand/Awareness Campaigns**: Upper-funnel impact harder to measure (1-day view window insufficient)

**Platform Response**:
- **Modeled Conversions**: Meta/TikTok/Google use machine learning to estimate true conversions
- **Aggregated Reporting**: Shift from user-level to aggregated cohort reporting
- **Server-Side Tracking**: CAPI (Meta), Events API (TikTok), Enhanced Conversions (Google) to bypass browser limitations

## Dual Tracking Architecture [Confidence: A | Source: Meta CAPI documentation 2024, TikTok Events API 2024, Google Enhanced Conversions 2025 | Date: 2026-02]

### Why Dual Tracking?

**Browser-Based Tracking Alone = Incomplete Data**:
- Subject to browser restrictions (cookie blocking, ITP, ATT opt-outs)
- JavaScript can be blocked by ad blockers or privacy extensions
- Limited visibility into iOS web conversions

**Server-Side Tracking = Privacy-Compliant Enhancement**:
- Sends conversion data directly from your server to platform (bypasses browser)
- Not impacted by browser restrictions or user opt-outs
- Improves match rates (more data points for user matching: email, phone, address)

**Dual Tracking = Best of Both Worlds**:
- Browser tracking captures immediate click/view data (fast attribution)
- Server-side tracking fills gaps (iOS users, cross-device, delayed conversions)
- Platforms deduplicate events automatically (same conversion not counted twice)

### Meta: Pixel + Conversions API (CAPI) [Confidence: A | Source: Meta CAPI setup guide 2024-2025 | Date: 2026-02]

**Implementation**:

**1. Meta Pixel (Browser-Side)**:
```javascript
<!-- Meta Pixel Base Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>

<!-- Standard Events -->
<script>
  fbq('track', 'ViewContent');  // Product page view
  fbq('track', 'AddToCart');     // Add to cart
  fbq('track', 'InitiateCheckout'); // Begin checkout
  fbq('track', 'Purchase', {value: 49.99, currency: 'USD'}); // Purchase
</script>
```

**2. Conversions API (Server-Side)**:
- **Integration Methods**:
  - **E-commerce Platform Integrations**: Shopify app, WooCommerce plugin (easiest, 30-min setup)
  - **Direct API Integration**: Custom server code (requires developer, highest control)
  - **Partner Integrations**: Google Tag Manager server-side, Segment, Zapier

**Setup via Shopify** (Most Common):
1. Install "Facebook & Instagram" Shopify app
2. Connect Meta Business Manager
3. Enable "Maximum Data Sharing" (sends server events for all conversions)
4. Verify: Events Manager shows both "Browser" and "Server" event sources

**Required Data for CAPI**:
- **Event Name**: Purchase, AddToCart, ViewContent, etc.
- **Event Time**: Unix timestamp of conversion
- **User Data**: Email (hashed), phone (hashed), first name, last name, city, state, zip, country (for matching)
- **Custom Data**: value, currency, content_ids (for dynamic ads)

**Match Rate**:
- **Goal**: >70% match rate (percentage of server events matched to users)
- **Improving Match Rate**: Send more user data (email + phone + address better than email alone)
- **Check**: Events Manager → Data Sources → Conversions API → Event Match Quality

**iOS 17 Link Tracking Protection (LTP) Impact** [Confidence: A | Source: iOS 17 tracking changes 2024-2025 | Date: 2026-02]:
- **What Changed**: iOS 17+ introduced Link Tracking Protection (LTP), which strips tracking parameters from links in Messages, Mail, and Safari Private Browsing
- **Impact on CAPI**: Even with perfect CAPI implementation, match rates declined 10-20% for some accounts post-iOS 17 (2024-2025)
- **Expected Match Rates Post-LTP**:
  - **Excellent**: >65% (was >75% pre-LTP)
  - **Good**: 55-65% (was 65-75% pre-LTP)
  - **Needs Improvement**: <55% (was <65% pre-LTP)
- **Mitigation**: No perfect solution (LTP is privacy feature, can't be bypassed). Focus on improving data quality (collect email + phone + address at checkout, not just email).
- **Realistic Expectation**: CAPI improves tracking vs Pixel-only, but doesn't solve all iOS 14.5+ / iOS 17+ degradation. Accept 15-25% conversion undercounting as new normal.

**Deduplication**:
- Meta automatically deduplicates events sent via both Pixel and CAPI
- **Requirement**: Include `event_id` parameter (same ID for browser + server event)
- **Example**: User clicks ad → sees Pixel-tracked Purchase (event_id: 12345) → Server sends CAPI Purchase (event_id: 12345) → Meta counts as 1 conversion

### TikTok: Pixel + Events API [Confidence: A | Source: TikTok Events API documentation 2024-2025 | Date: 2026-02]

**Implementation**:

**1. TikTok Pixel (Browser-Side)**:
```javascript
<!-- TikTok Pixel Base Code -->
<script>
  !function (w, d, t) {
    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
    ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
    ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
    for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
    ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
    ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";
    ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
    var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;
    var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
    ttq.load('YOUR_PIXEL_ID');
    ttq.page();
  }(window, document, 'ttq');
</script>

<!-- Standard Events -->
<script>
  ttq.track('ViewContent'); // Product view
  ttq.track('AddToCart');   // Add to cart
  ttq.track('InitiateCheckout'); // Begin checkout
  ttq.track('CompletePayment', {value: 49.99, currency: 'USD'}); // Purchase
</script>
```

**2. Events API (Server-Side)**:
- **Integration Methods**:
  - **TikTok Events Manager**: Generate access token, send events via HTTP POST
  - **E-commerce Integrations**: Shopify TikTok app (includes server-side events)
  - **Partner Integrations**: Segment, Google Tag Manager server-side

**Setup via TikTok Events Manager**:
1. Go to TikTok Events Manager → Select Pixel
2. Navigate to "Settings" → "Generate Access Token"
3. Use access token to send events via API (requires developer or use Shopify app)

**Required Data**:
- **Event**: CompletePayment, AddToCart, ViewContent
- **Event Time**: Unix timestamp
- **User Data**: Email (SHA256 hashed), phone (SHA256 hashed), external_id (user ID from your system)
- **Properties**: value, currency, contents (product details)

**Match Rate**:
- **Goal**: >60% match rate (TikTok has smaller user base than Meta, match rates lower)
- **Improving**: Send email + phone hashed (improves matching)

### Google: Google Ads Tag + Enhanced Conversions [Confidence: A | Source: Google Enhanced Conversions guide 2025 | Date: 2026-02]

**Implementation**:

**1. Google Ads Conversion Tag (Browser-Side)**:
```javascript
<!-- Global Site Tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-CONVERSION_ID');
</script>

<!-- Conversion Event -->
<script>
  gtag('event', 'conversion', {
    'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
    'value': 49.99,
    'currency': 'USD',
    'transaction_id': 'ORDER_123456'
  });
</script>
```

**2. Enhanced Conversions (Server-Side Enrichment)**:
- **What It Does**: Sends hashed first-party data (email, phone, address) with conversion to improve match rates
- **Integration Methods**:
  - **Google Tag Manager**: Enhanced Conversions tag (easiest, 15-min setup)
  - **Global Site Tag**: Manual gtag.js implementation
  - **Google Ads API**: Server-side integration (advanced)

**Setup via Google Tag Manager**:
1. Create "Google Ads Conversion Tracking" tag
2. Enable "Enhanced Conversions" checkbox
3. Map user data variables (email, phone, address) from data layer
4. GTM automatically hashes and sends data with conversion event

**Required Data**:
- **Email**: User's email address (GTM hashes automatically)
- **Phone**: User's phone number (E.164 format recommended)
- **Address**: First name, last name, street, city, state, zip, country

**Match Rate**:
- **Goal**: >70% match rate (similar to Meta CAPI)
- **Check**: Google Ads → Tools → Conversions → Enhanced Conversions column

### Google Analytics 4 (GA4) Integration [Confidence: A | Source: GA4 + Google Ads integration guide 2025 | Date: 2026-02]

**Why GA4 + Google Ads**:
- **Cross-Platform View**: GA4 tracks all traffic sources (organic, paid, direct), Google Ads only sees paid
- **Attribution Modeling**: GA4 offers multiple attribution models (data-driven, last-click, time-decay)
- **Audience Building**: GA4 audiences can be used for Google Ads remarketing

**Setup**:
1. **Link GA4 to Google Ads**: GA4 Admin → Product Links → Google Ads → Link accounts
2. **Import Conversions**: Google Ads → Tools → Conversions → Import from GA4
3. **Recommended Conversions**: Purchase, begin_checkout, add_to_cart (import to Google Ads as conversion actions)

**Best Practice**:
- Use **both** Google Ads conversion tag AND GA4 tracking (complementary, not redundant)
- Google Ads tag = campaign-specific attribution (for bid optimization)
- GA4 = cross-channel attribution (for holistic view)

## Attribution Models Compared [Confidence: A | Source: Platform documentation, M30 MER framework | Date: 2026-02]

### Platform-Native Attribution (Meta, TikTok, Google)

**Definition**: Attribution as reported within each platform's ads manager.

**Strengths**:
- **Campaign Optimization**: Platforms use this data for bid optimization and delivery
- **Granular**: Breaks down by campaign, ad set, ad, creative, audience
- **Real-Time**: Updates throughout the day (near-real-time performance)

**Weaknesses**:
- **Underreporting**: Post-iOS 14.5, platforms undercount conversions by 20-30%
- **Overattribution**: Some conversions attributed to ads that didn't cause them (assisted vs direct)
- **Platform Bias**: Each platform attributes conversions to itself (cross-platform overlap not visible)
- **View-Through Issues**: View-through conversions (saw ad, didn't click, later converted) can inflate numbers

**Use Cases**:
- **Daily Optimization**: Campaign-level scaling/killing decisions (which campaigns to increase budget)
- **Creative Testing**: Which ads/creatives driving best ROAS
- **Audience Analysis**: Which audiences most efficient

**Limitations**:
- **Do NOT Use for Budget Allocation** across platforms (platforms double-count)
- **Do NOT Use for Overall Business Performance** (underreports true conversions)

### Blended/MER Attribution (Marketing Efficiency Ratio) [Confidence: A | Source: M30 Performance Metrics Framework | Date: 2026-02]

**Definition** (from M30):
```
MER = Total Revenue / Total Marketing Spend
```

**Example**:
```
Total Revenue (last 7 days): $35,000
Total Ad Spend (Meta + TikTok + Google): $10,000
MER = $35,000 / $10,000 = 3.5x
```

**Strengths**:
- **Source of Truth**: Uses backend revenue data (Shopify, Stripe, etc.) — no undercounting
- **Platform-Agnostic**: Doesn't rely on any platform's attribution (avoids double-counting)
- **Business Outcome Focus**: Measures what actually matters (revenue generated per dollar spent)
- **Simple**: Easy to calculate, explain to stakeholders, track over time

**Weaknesses**:
- **No Granularity**: Can't break down by campaign, ad set, ad (aggregate only)
- **Time Lag**: Revenue today may be from ads run 1-7 days ago (delayed signal)
- **Organic Noise**: Includes baseline organic revenue (brand searches, word-of-mouth, repeat customers)
- **Can't Optimize Campaigns**: Doesn't tell you which campaigns to scale/kill

**Use Cases**:
- **Budget Allocation**: Deciding how much to spend across all platforms (total budget setting)
- **Platform Performance**: Evaluating Meta vs TikTok vs Google (with incrementality tests)
- **Business Health**: Monitoring overall marketing efficiency week-over-week
- **Executive Reporting**: Simple, trustworthy metric for leadership

**Best Practice** (from M30):
- **Track BOTH**: Platform ROAS (for daily optimization) AND MER (for strategic decisions)
- **Validate Scaling**: Before scaling a campaign based on platform ROAS, check that overall MER not declining
- **Accept Variance**: Platform-reported ROAS may be 4.0x while MER is 3.0x (this is normal)

### Attribution Gap Decision Framework [Confidence: A | Source: Field benchmarks, diagnostic frameworks | Date: 2026-02]

**The Gap**: Platform ROAS and MER will always diverge. The question is: when is the gap normal vs concerning?

**Attribution Inflation Rate Formula**:
```
Attribution Inflation Rate = (Platform ROAS / MER) - 1

Example:
Platform ROAS: 4.0x
MER: 3.0x
Inflation Rate = (4.0 / 3.0) - 1 = 0.33 = 33%
```

**Decision Thresholds**:

**20-40% Inflation: NORMAL (Proceed)**
- **Interpretation**: Expected divergence from view-through conversions, platform overlap, organic attribution
- **Action**: Continue using platform ROAS for campaign optimization, MER for budget allocation
- **Example**: Platform 4.0x, MER 2.8x = 43% inflation → Borderline, but acceptable

**40-60% Inflation: INVESTIGATE (Potential Issues)**
- **Interpretation**: Excessive view-through attribution, multi-platform overlap, or deduplication failure
- **Diagnostic Steps**:
  1. Switch platform reporting to **click-only attribution** (exclude view-through) → does gap narrow?
  2. Check **event deduplication** in Meta Events Manager → are Pixel + CAPI events properly deduplicated?
  3. Review **multi-platform overlap** → are Meta + TikTok + Google all claiming same conversions?
- **Action**: Use click-only ROAS for decisions until diagnosed
- **Example**: Platform 4.5x, MER 2.5x = 80% inflation → Investigate immediately

**>60% Inflation: TRACKING ISSUE (Fix Required)**
- **Interpretation**: Duplicate tracking, broken CAPI deduplication, or platform reporting bug
- **Diagnostic Steps**:
  1. Test purchase end-to-end → verify Events Manager shows ONE event (not 2-3 duplicates)
  2. Check CAPI event_id parameter → must match Pixel event_id for deduplication
  3. Compare backend revenue to platform revenue → should match within 10-20%
- **Action**: Pause scaling decisions until tracking fixed; current attribution data unreliable
- **Example**: Platform 5.0x, MER 2.0x = 150% inflation → Tracking broken, fix immediately

**Common Causes of High Inflation**:
- **View-Through Conversions**: Platforms count users who SAW ad but didn't click, then converted later (inflates ROAS)
- **Multi-Touch Attribution**: Multiple platforms claim credit for same conversion (e.g., user saw Meta ad, clicked TikTok ad, Google retargeted)
- **Duplicate Events**: Pixel and CAPI both firing without deduplication (counts 1 purchase as 2)
- **Organic Attribution**: Platform claims conversions from brand searches, direct traffic, word-of-mouth

### Multi-Touch Attribution (MTA) Models [Confidence: B | Source: Attribution modeling frameworks, GA4 capabilities | Date: 2026-02]

**Definition**: Assigns credit to multiple touchpoints in customer journey (not just last click).

**Common Models**:

**1. Last-Click Attribution**:
- **Credit**: 100% to last touchpoint before conversion
- **Use**: Default for most platforms (Google Ads, Meta Ads)
- **Strength**: Simple, clear (which ad directly drove sale)
- **Weakness**: Ignores awareness/consideration ads that assisted

**2. First-Click Attribution**:
- **Credit**: 100% to first touchpoint in customer journey
- **Use**: Understanding top-of-funnel effectiveness (awareness campaigns)
- **Strength**: Highlights which channels introduce new customers
- **Weakness**: Ignores nurturing and closing touchpoints

**3. Linear Attribution**:
- **Credit**: Equal credit to all touchpoints (e.g., 4 touchpoints = 25% each)
- **Use**: Full-funnel campaigns with multiple touchpoints
- **Strength**: Acknowledges every touchpoint contributes
- **Weakness**: Oversimplifies (not all touchpoints equal impact)

**4. Time-Decay Attribution**:
- **Credit**: More credit to touchpoints closer to conversion (exponential decay)
- **Use**: Longer sales cycles (B2B, high-ticket e-commerce)
- **Strength**: Realistic (recent touchpoints more influential)
- **Weakness**: Still somewhat arbitrary (decay rate is assumption)

**5. Data-Driven Attribution** (GA4, Google Ads):
- **Credit**: Machine learning model assigns credit based on actual conversion patterns
- **Use**: Accounts with sufficient data (1,000+ conversions/month minimum)
- **Strength**: Most accurate (based on your actual data, not assumptions)
- **Weakness**: Requires high volume, opaque (can't explain how it works)

**Recommendation**:
- **For Most E-commerce**: Use Last-Click + MER (platform last-click for optimization, MER for validation)
- **For High-Volume Accounts**: Experiment with Data-Driven Attribution in GA4 (requires 1,000+ conversions/month)
- **For Full-Funnel Campaigns**: Use Linear or Time-Decay to understand awareness/consideration value

### Incrementality Testing [Confidence: B | Source: Incrementality testing frameworks, geo-holdout studies | Date: 2026-02]

**Definition**: Testing whether ads actually cause incremental sales (vs sales that would have happened anyway).

**Why It Matters**:
- **Attribution ≠ Causation**: Platform saying "this ad drove 100 sales" doesn't mean 100 sales wouldn't have happened without ad
- **Baseline Revenue**: Brand searches, repeat customers, word-of-mouth happen without ads
- **True Incrementality**: Did ad spend generate MORE revenue than would have occurred without it?

**Testing Methods**:

**1. Geo-Holdout Test**:
- **Method**: Run ads in Region A (test), pause ads in Region B (control), compare revenue
- **Example**: Run Meta ads in California only, pause in Texas, compare sales per capita
- **Timeline**: 30-60 days (enough time to detect meaningful difference)
- **Calculation**:
  ```
  Incremental Revenue = (Test Region Revenue - Control Region Revenue * Population Adjustment)
  Incremental ROAS = Incremental Revenue / Ad Spend
  ```
- **Strength**: Gold standard for measuring true incrementality
- **Weakness**: Requires scale (multi-region presence), external validity questions (is Texas same as California?)

**2. Time-Based Holdout (Pulse Test)**:
- **Method**: Pause all ads for 7-14 days, measure revenue drop
- **Example**: Run ads for 4 weeks ($10K/week), pause for 1 week, measure revenue decline
- **Calculation**:
  ```
  Baseline Revenue (week without ads): $25,000
  Average Revenue (weeks with ads): $35,000
  Incremental Revenue per Week: $10,000
  Incremental ROAS: $10,000 / $10,000 = 1.0x (if spent $10K/week)
  ```
- **Strength**: Simple, fast, no complex setup
- **Weakness**: Risky (lose revenue during pause), carryover effects (previous ads still influencing during pause)

**3. Platform-Provided Tests**:
- **Meta Conversion Lift Test**: Meta-run A/B test (test group sees ads, control group doesn't)
- **Google Ads Experiments**: Campaign Drafts & Experiments (test budget increase in one region vs control)
- **Strength**: Integrated, automated by platform
- **Weakness**: Platform-biased (platforms design tests to show positive results)

**Recommendation**:
- **For Brands >$50K/month ad spend**: Run geo-holdout or pulse test 1-2x per year (validate true incrementality)
- **For Brands <$50K/month ad spend**: Rely on MER + platform ROAS (incrementality testing requires scale)

## Recommended Attribution Stack [Confidence: A | Source: Best practices synthesis, M30 alignment | Date: 2026-02]

### Tier 1: Essential (All Budgets)

**1. Platform-Native Tracking + Server-Side**:
- **Meta**: Pixel + CAPI
- **TikTok**: Pixel + Events API
- **Google**: Google Ads Tag + Enhanced Conversions

**2. Backend Revenue Tracking**:
- **E-commerce Platform**: Shopify, WooCommerce, BigCommerce (source of truth for revenue)
- **Daily Export**: Total revenue, order count, new vs returning customers

**3. MER Tracking** (from M30):
- **Daily Calculation**: Total revenue / Total ad spend
- **7-Day Rolling MER**: Average MER over last 7 days (smooths daily volatility)
- **Dashboard**: Simple spreadsheet or tool (Google Sheets, Airtable) tracking daily MER

**Weekly Workflow**:
- **Platform ROAS**: Used for campaign-level decisions (scale/kill)
- **MER**: Used for overall budget allocation and strategic decisions
- **Reconciliation**: Accept 10-20% variance between platform ROAS and MER (this is normal)

### Tier 2: Recommended (>$10K/month spend)

**4. Google Analytics 4**:
- **Setup**: GA4 property, link to Google Ads
- **Use**: Cross-channel view (organic + paid), attribution modeling, audience analysis
- **Reports**: Acquisition report (channel breakdown), conversion paths (multi-touch journeys)

**5. Attribution Dashboards**:
- **Tools**: Google Looker Studio (free), Supermetrics, Northbeam (paid)
- **Purpose**: Unified view of Meta + TikTok + Google + GA4 data
- **Metrics**: Spend by platform, ROAS by platform, MER, platform contribution

### Tier 3: Advanced (>$50K/month spend)

**6. Multi-Touch Attribution Tool**:
- **Tools**: Northbeam, Triple Whale, Rockerbox, Hyros
- **Purpose**: Model customer journey across touchpoints, assign partial credit
- **Use Case**: Understanding awareness/consideration/closing channel roles

**7. Incrementality Testing**:
- **Frequency**: 1-2x per year
- **Method**: Geo-holdout or pulse test
- **Purpose**: Validate true incrementality (ads causing incremental sales vs baseline)

**8. Custom Data Warehouse**:
- **Tools**: Snowflake, BigQuery, Redshift
- **Purpose**: Centralize all data (ad platforms, backend, CRM, analytics) for custom analysis
- **Use Case**: Advanced modeling, cohort analysis, LTV prediction

## Common Attribution Issues & Solutions [Confidence: A | Source: Troubleshooting frameworks, common error patterns | Date: 2026-02]

### Problem 1: Platform Reports 50 Conversions, Backend Shows 30

**Diagnosis**:
- **Duplicate Tracking**: Pixel firing multiple times per conversion (check Events Manager for duplicate events)
- **View-Through Overattribution**: Platform counting view-through conversions (saw ad, didn't click, converted later)
- **Cross-Device Attribution**: Platform attributing cross-device conversions backend doesn't track

**Solution**:
1. **Check for Duplicates**: Events Manager → Data Sources → Event Match Quality → Dedupe rate (should be >95%)
2. **Filter View-Through**: Report platform ROAS excluding VTC (click-only attribution)
3. **Use MER as Truth**: Accept platform overreporting, optimize campaigns using platform ROAS, but budget using MER

### Problem 2: Backend Shows 50 Conversions, Platform Reports 30

**Diagnosis**:
- **iOS 14.5 Undercounting**: Users opted out of tracking (20-30% of conversions not tracked)
- **CAPI Not Configured**: Missing server-side tracking (only using browser-based pixel)
- **Conversion Window Too Short**: Sales happening >7 days after click (outside attribution window)

**Solution**:
1. **Implement CAPI/Events API**: Set up server-side tracking to capture iOS users
2. **Check Match Rates**: CAPI Events Manager → Event Match Quality (should be >70%)
3. **Accept Underreporting**: Platform will underreport post-iOS 14.5 (use for optimization, not business truth)

### Problem 3: Meta Says 4.0x ROAS, TikTok Says 3.5x, Google Says 3.0x, But MER Only 2.5x

**Diagnosis**:
- **Platform Overlap**: Same customers seeing ads on multiple platforms (each platform claims credit)
- **Organic Attribution**: Platforms attributing some organic revenue to ads (brand searches after seeing ad)
- **Baseline Revenue**: Business has baseline revenue without ads (repeat customers, word-of-mouth)

**Solution**:
1. **Use MER as Source of Truth**: 2.5x is the real blended performance
2. **Platform ROAS for Optimization**: Use each platform's ROAS to decide which campaigns to scale within that platform
3. **Incrementality Test**: Run geo-holdout to determine true incremental contribution (may reveal true ROAS 2.0-2.5x)

### Problem 4: ROAS Great on Platform, But Business Not Profitable

**Diagnosis**:
- **COGS Not Included**: Platform ROAS doesn't account for product cost, shipping, fees
- **Contribution Margin Issue**: Revenue high, but margin low (expensive product, high shipping costs)
- **Repeat Customer Misattribution**: Platform attributing repeat purchases to ads (would have happened anyway)

**Solution**:
1. **Calculate P&L-Aware ROAS** (from channel_profitability_matrix.md):
   ```
   Contribution Margin ROAS = (Revenue - COGS - Shipping - Fees) / Ad Spend
   ```
2. **Set Target Based on Contribution**: If 40% margin product, need 2.5x ROAS to break even (1 / 0.40)
3. **Use MER + Contribution Margin**: MER shows blended efficiency, contribution margin shows profitability

## Intelligence Gaps & Upgrade Paths

### Current Gaps [Confidence: D | Upgrade Path: Platform testing, case studies | Date: 2026-02]
1. **Exact CAPI Lift**: Quantified conversion lift from adding CAPI to Pixel-only tracking (estimated 15-25%, but varies by vertical)
2. **View-Through Contribution**: True incremental value of view-through conversions (platforms count, but unclear if incremental)
3. **Data-Driven Attribution Requirements**: Exact conversion volume threshold for reliable data-driven attribution (Meta says 400/month, Google says 1,000/month, but quality varies)

### Upgrade Opportunities
- **Source**: Before/after case study of CAPI implementation (track conversion volume change pre/post)
- **Source**: Incrementality test isolating view-through conversions (test group with VTC, control without)
- **Source**: Data-driven attribution accuracy testing (compare DDA predictions to holdout test results)

## Cross-References
- **M30 (Performance Metrics Framework)**: MER as primary blended attribution metric
- **account_structure.md**: Pixel/CAPI setup checklist for each platform
- **daily_checklist.md**: Daily reconciliation workflow (platform vs backend conversions)
- **channel_profitability_matrix.md**: P&L-aware attribution (contribution margin ROAS)

---

**Version**: 1.0
**Last Updated**: 2026-02-10
**Primary Sources**: Meta CAPI Documentation (2024-2025), TikTok Events API (2024-2025), Google Enhanced Conversions (2025), M30 MER Framework
