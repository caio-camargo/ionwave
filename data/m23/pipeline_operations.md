# Influencer & Creator Pipeline Operations
**Version**: 1.0.0
**TUP**: M23 — Influencer & Creator
**Cluster**: BCL-5 (Growth & Market)
**Source Tabs**: 505 (Influencer Pipeline Tracker), 506 (Creator Pipeline Tracker), 514 (Creator Pipeline)
**Author**: Caio, Claude (collaborative)
**Date Created**: 2026-02-08
**AI Model**: claude-opus-4-6
**Status**: Active

---

## 1. Influencer Pipeline Stages

**8-stage pipeline from identification to measurement:**

| Stage | Definition | Action | SLA | Move to Next When |
|-------|-----------|--------|-----|-------------------|
| **1. RESEARCHED** | Identified via hashtag search, competitor tags, platform search | Add to tracking sheet with profile data | — | Passes pre-scorecard checklist |
| **2. VETTED** | Passed vetting scorecard (≥3.5/5.0) | Complete full vetting scorecard (see vetting_scorecard.md) | Score within 48hrs of identification | Score ≥3.5 |
| **3. OUTREACH** | Initial contact made (DM, email, or platform message) | Send personalized outreach (see influencer_map.md templates) | Outreach within 48hrs of vetting | Influencer responds |
| **4. NEGOTIATING** | Discussing terms, sharing brief, agreeing on deal structure | Negotiate fee, deliverables, usage rights, exclusivity | Respond to all messages within 24hrs | Terms agreed |
| **5. CONTRACTED** | Deal signed, contract executed | Send contract, receive signed copy, ship product | Contract within 48hrs of agreement | Contract signed + product shipped |
| **6. CONTENT REVIEW** | Waiting for or reviewing content drafts | Review draft against brief and brand guidelines | Provide feedback within 48hrs | Content approved |
| **7. LIVE** | Content posted on their channels | Monitor engagement, track affiliate code usage | — | Campaign period ends |
| **8. COMPLETE** | Campaign done, measured, relationship assessed | Calculate ROI, decide on renewal, update database | Final report within 7 days of campaign end | Report filed |

[Confidence: B | Source: Danilo tab 505 pipeline stages; SLAs added based on operational best practices | Date: 2026-02-08]

---

## 2. Creator (UGC) Pipeline Stages

**8-stage pipeline from sourcing to scaling:**

| Stage | Definition | Action | SLA | Move to Next When |
|-------|-----------|--------|-----|-------------------|
| **1. IDENTIFIED** | Found via hashtags, competitor tags, creator marketplaces, customer base | Add to tracking sheet, review portfolio | — | Matches brand aesthetic + engagement >2% |
| **2. OUTREACH SENT** | DM or email with brief + offer | Send using outreach template | Within 48hrs of identification | Creator responds |
| **3. RESPONDED** | In conversation, negotiating terms | Share brief, discuss rate, agree on deliverables | Respond within 24hrs | Terms agreed + rate within budget |
| **4. TEST CONTENT** | First piece of content delivered and reviewed | Review against brief: authentic feel, usable quality, follows talking points | Delivery within 7 days of agreement | Content approved |
| **5. CONTRACTED** | Ongoing agreement signed based on successful test | Send contract, set up regular cadence | Contract within 48hrs of test approval | Signed + first batch briefed |
| **6. IN PRODUCTION** | Creator is actively producing content per ongoing schedule | Manage brief delivery, answer questions | — | Content delivered per schedule |
| **7. REVIEW & APPROVE** | Content submitted, brand reviewing | Check against brief, request revisions if needed (max 2 rounds) | Feedback within 48hrs | Content approved → deployed to ads |
| **8. SCALING** | Proven creator producing at higher volume | Increase video count, test new content types, offer rate increase for top performers | — | Ongoing performance review |

**Alumni stage**: Creator exits gracefully (rate increase request, availability change, creative fatigue). Maintain positive relationship for potential reactivation.

[Confidence: B | Source: Danilo tabs 506, 514 pipeline stages; merged into single canonical pipeline | Date: 2026-02-08]

---

## 3. Influencer Tracker Template

**Track every influencer partnership in a single spreadsheet/database:**

| Field | Type | Purpose |
|-------|------|---------|
| Name | Text | Influencer name |
| Platform | Select | Instagram / TikTok / YouTube / Podcast / Blog |
| Handle | Text | @handle or channel URL |
| Followers | Number | Current follower count |
| Engagement % | Number | Calculated engagement rate |
| Niche | Select | Keto / CrossFit / Biohacking / Nutrition / Fasting / Endurance |
| Tier | Select | Nano / Micro / Mid-Tier / Macro |
| Vetting Score | Number | From vetting scorecard (1-5) |
| Pipeline Stage | Select | Researched → Complete |
| Deal Type | Select | Gifted / Flat / Affiliate / Hybrid |
| Deal Value | Currency | Total cash outlay |
| Affiliate Code | Text | Unique promo code |
| Product Shipped | Date | When product was sent |
| Content Live Date | Date | When content posted |
| Impressions | Number | Post impressions |
| Clicks | Number | Link/code clicks |
| Orders | Number | Sales attributed |
| Revenue | Currency | Revenue attributed |
| ROAS | Number | Revenue / cost |
| CPA | Currency | Cost per acquisition |
| Notes | Text | Relationship notes |

**Key metrics to track (aggregate):**

| Metric | Formula | Target | Why It Matters |
|--------|---------|--------|---------------|
| Response rate | Outreach → Reply | >15% (nano), >10% (micro) | Measures outreach quality |
| Conversion rate | Outreach → Deal | >5% | Measures pipeline efficiency |
| Cost per post | Total spend / posts live | <$500 (micro tier) | Measures cost efficiency |
| Revenue per partnership | Affiliate revenue / partnership | >$200 first month | Measures revenue impact |
| ROAS | Total influencer revenue / total cost | >2x | Measures program profitability |
| CPO (Cost Per Order) | Total cost / total orders | <$18 (below CAC target) | Measures acquisition efficiency |
| Branded search lift | Google Search Console branded queries, 7 days post-campaign vs prior 7 days | >10% lift | Measures indirect influence |
| Direct traffic spike | GA4 direct traffic, 7 days post-campaign vs prior 7 days | Detectable spike | Measures unattributed influence |

[Confidence: B | Source: Danilo tab 505 tracker fields and metrics; CPO target from M0 CAC hypothesis | Date: 2026-02-08]

### Attribution Framework (U1 — Dialogue Upgrade)

**Critical**: Influencer ROAS based solely on affiliate code redemptions **systematically undercounts** influencer value. Many customers see the influencer post, then Google the brand directly instead of using the code.

**Track both attribution types:**

| Attribution Type | How to Measure | Weight in ROI Calc |
|-----------------|----------------|-------------------|
| **Direct (code/link)** | Unique promo code redemptions, UTM-tagged link clicks | Primary — directly attributable |
| **Indirect (influence)** | Branded search lift (GSC), direct traffic spike (GA4), social mentions spike within 7 days of campaign | Supplementary — correlated, not proven |

**Decision rule**: If code-tracked ROAS is 1.0-1.5x BUT branded search lifted >15% during campaign period, the partnership is likely profitable. Don't kill it based on code ROAS alone. Run for 2 more campaigns before final judgment.

[Confidence: B | Source: Persona dialogue Round 1; attribution gap is a well-documented problem in influencer marketing | Date: 2026-02-08]

---

## 4. Creator Roster & Content Tracker Template

### Creator Roster

| Field | Type | Purpose |
|-------|------|---------|
| Name | Text | Creator name |
| Source | Select | Billo / Insense / Collabstr / Instagram DM / Customer / Referral |
| Cost/Video | Currency | Agreed rate per video |
| Quality Rating | 1-5 | Based on test content and ongoing work |
| Turnaround | Days | Average delivery time |
| Total Videos Made | Number | Cumulative count |
| Winners | Number | Videos that became winning ads (>2x ROAS target) |
| Win Rate | % | Winners / Total |
| Status | Select | Identified / Test / Contracted / Scaling / Alumni |
| Notes | Text | Style notes, strengths, areas for improvement |

### Content Tracker

| Field | Type | Purpose |
|-------|------|---------|
| Video ID | Text | Unique identifier (e.g., UGC-001) |
| Creator | Text | Who made it |
| Hook Type | Select | Problem / Curiosity / Social Proof / Contrast |
| Angle | Select | Keto / Energy / Science / Daily Routine |
| Date Delivered | Date | When content was received |
| Status | Select | In Review / Approved / Deployed / Winner / Retired |
| Ad Spend | Currency | Total spent promoting this video |
| Impressions | Number | Ad impressions |
| Clicks | Number | Ad clicks |
| CTR | % | Click-through rate |
| Purchases | Number | Attributed purchases |
| ROAS | Number | Revenue / ad spend |
| CPA | Currency | Cost per acquisition |
| Creative Fatigue Date | Date | When performance dropped below threshold |
| Notes | Text | What worked, what to iterate |

[Confidence: B | Source: Danilo tabs 506, 514 tracker fields; enhanced with M14 testing framework fields | Date: 2026-02-08]

---

## 5. Operational Cadence (Founder Mode)

### Weekly Rhythm

| Day | Influencer Tasks | Creator Tasks | Time |
|-----|-----------------|---------------|------|
| **Monday** | Review weekend performance data | Brief new creator batch for the week | 1 hr |
| **Wednesday** | Respond to outreach replies, negotiate deals | Review incoming UGC, provide feedback | 1 hr |
| **Friday** | Ship product to new partners, update tracker | Approve final content, queue for ad deployment | 1 hr |

**Total time**: ~3 hrs/week in Phase 1-2. Grows to 5-8 hrs/week in Phase 3 as both programs scale.

### Monthly Review

| Review Item | What to Check | Decision |
|-------------|---------------|----------|
| Pipeline conversion rates | Outreach → deal conversion, is it improving? | Adjust outreach approach if <5% conversion |
| Top performers | Which influencers/creators are driving best ROAS? | Increase investment in top 3, propose renewals |
| Underperformers | Who hasn't delivered or underperformed? | Exit gracefully or adjust brief/terms |
| Budget vs results | Is the program profitable overall? | Scale if ROAS >2x, pause if <1x for 2 months |
| Creative fatigue | Are winning UGC videos losing performance? | Commission fresh variations from different creators |
| Competitive moves | Any competitor poaching our influencers? | Strengthen top relationships with exclusivity/rate increases |
| **UGC content audit** | Semi-annual: any content featuring problematic creators? Outdated claims? | Retire problematic content, archive inactive (>12mo) content. Rights retained. |

**Scale trigger**: When managing >10 influencer partnerships + >5 creators simultaneously, consider:
- Dedicated content coordinator ($15-20/hr, 10-15 hrs/week)
- Influencer platform (Grin, AspireIQ) for workflow management ($500-2,000/mo)
- Only at sustained $50K+/mo revenue — premature scaling burns cash

[Confidence: C | Source: Operational cadence estimates; time allocations are D-grade projections needing validation | Date: 2026-02-08]

---

## 6. Integration Points

| System | How It Connects | Cross-Reference |
|--------|----------------|----------------|
| **M14 Testing Framework** | Every UGC video is a creative test. Hook type + angle combinations feed testing matrix. | Tag content with hook type and angle. |
| **M17 Email & SMS** | Influencer content repurposed in welcome series (E4 social proof), post-purchase (testimonials). | Share winning UGC with email team monthly. |
| **M22 Referral & Community** | Top influencers can become brand ambassadors. UGC from customers feeds community content. | Ambassador pipeline bridges M23 → M22. |
| **M12 Ad Creative** (when workshopped) | UGC videos ARE the ad creative pipeline. Creator pipeline feeds M12's creative volume. | UGC content library = M12's raw material. |
| **Shopify/Analytics** | Affiliate codes tracked in Shopify. Attribution = promo code redemptions. | Set up unique discount codes per influencer. |

---

## 7. Intelligence Gaps

| Gap | Impact | Upgrade Path | Priority |
|-----|--------|-------------|----------|
| Influencer management platform evaluation | Medium — manual tracking works for <10 partnerships | Evaluate Grin, AspireIQ, Upfluence at Month 6 if scaling | LOW |
| Shopify affiliate code setup | High — needed for tracking | Set up during store build (M9 Ecommerce Infra) | HIGH (pre-launch) |
| Actual time allocation validation | Medium — hours/week estimates are projections | Track actual time for first 4 weeks, adjust cadence | MEDIUM |
