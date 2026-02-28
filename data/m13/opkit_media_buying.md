# OpKit: Media Buying (OK-M13-001)

**Version**: 1.0.0
**TUP**: M13 — Media Buying
**Created**: 2026-02-10
**Protocol**: TWP-001 v2.0.0
**Status**: Production-Ready

---

## Purpose

This OpKit enables any D2C brand to build a disciplined, profitable paid acquisition system from $1,500/month to $100K+/month spend. It covers account setup, scaling frameworks, attribution infrastructure, creative systems, and P&L-aware channel management.

**Who this is for:**
- Solo founders launching first paid campaigns
- Brands scaling from $5K to $50K+/month
- Media buyers inheriting undocumented ad accounts
- CFOs auditing media buying profitability

**What you'll produce:**
- Platform-specific account structures (Meta, TikTok, Google)
- Scaling playbook with decision gates
- Attribution stack (Pixel + CAPI + MTA)
- Daily operational checklist
- Channel profitability P&L model

---

## Instructions

### Step 1: Choose Your Entry Point

**Scenario A: Pre-Launch (No ad account yet)**
→ Start with `account_structure.md` + `first_100_ads.md`
Build account architecture before spending $1.

**Scenario B: Scaling Existing Campaigns ($5K-20K/month)**
→ Start with `scaling_framework.md` + `attribution_model.md`
Audit current setup, fix tracking, apply tiered scaling.

**Scenario C: Multi-Channel Expansion ($20K+/month)**
→ Start with `channel_diversification.md` + `channel_profitability_matrix.md`
De-risk platform dependency, build contribution margin model.

**Scenario D: Hiring/Onboarding Media Buyer**
→ Start with `daily_checklist.md` + `scaling_playbook.md`
Give them operational protocols and decision frameworks.

---

### Step 2: Build Your Core Documents (2-4 hours)

#### 2A: Account Structure
**Read:** `account_structure.md`
**Produce:** Platform-specific campaign architecture doc

**For each platform you'll use (Meta, TikTok, Google):**
1. Campaign naming convention (include date, objective, audience type)
2. Budget tier (determines CBO vs ABO, Advantage+ adoption)
3. Conversion events (what you're optimizing for)
4. Initial budget allocation (50% Meta / 35% YouTube / 15% TikTok as baseline)

**Output format:**
```
PLATFORM: Meta
CAMPAIGN STRUCTURE: CBO (if >$3K/mo) or ABO (if <$3K/mo)
NAMING: Meta | US | Conversions | [Audience] | [Creative] | YYYY-MM
OPTIMIZATION EVENT: Purchase (if >50 conversions/7 days) OR Add to Cart (if <50)
INITIAL BUDGET: $2,000/month ($67/day)
```

Repeat for TikTok, Google.

#### 2B: Attribution Stack
**Read:** `attribution_model.md`
**Produce:** Tracking implementation checklist

**Minimum viable stack:**
- [ ] Platform Pixel installed (Meta Pixel, TikTok Pixel, Google Tag)
- [ ] Conversions API configured (Meta CAPI, TikTok Events API)
- [ ] Event deduplication enabled (same event_id across Pixel + CAPI)
- [ ] Event Match Quality (EMQ) >7.0 (send hashed email, phone, IP, user agent)
- [ ] Test purchase completed to verify tracking

**Advanced stack (if >$10K/month):**
- [ ] Server-side tracking tool selected (Elevar, Triple Whale, Northbeam, or Cometly)
- [ ] MER dashboard built (blended ROAS across all channels)
- [ ] Attribution gap framework applied (20-60% divergence = unclear signal, >60% = investigate)

**Output:** Tracking validation checklist with completion dates.

#### 2C: Scaling Playbook
**Read:** `scaling_playbook.md` + `scaling_framework.md`
**Produce:** 3-phase scaling protocol

**Phase 1: Testing (Days 0-7)**
- Goal: Generate 50+ conversions to exit learning phase
- Budget: $500-1,500 total test budget
- Structure: ABO (3-5 ad sets, equal budget)
- Kill criteria: <1 conversion after $150 spend + 10 days

**Phase 2: Validation (Days 8-14)**
- Goal: Confirm ROAS stability at current spend
- Benchmark: ROAS ≥ target (1.5x for survival, 2.5x+ for growth)
- Action: Hold budget flat, watch for 3 consecutive days of stable performance

**Phase 3: Scaling (Days 15+)**
- Tiered scaling rates (from dialogue U1):
  - Tier 1 (<30 conversions/7d): +20% every 3-5 days
  - Tier 2 (30-100 conversions/7d): +30% every 3 days
  - Tier 3 (100+ conversions/7d): +40-50% every 2 days
- Tracking validation: Check attribution Day 1-2 after each major increase
- Revert protocol: If ROAS drops >20%, revert to previous budget within 24 hours

**Output:** Phase-gated scaling calendar with budget targets.

#### 2D: Daily Checklist
**Read:** `daily_checklist.md`
**Produce:** Personalized daily routine

**Morning (9-10 AM):**
- [ ] Check MER (blended ROAS across all channels)
- [ ] Review platform ROAS by campaign
- [ ] Check for attribution gaps (>40% divergence = investigate)
- [ ] Identify campaigns needing action (below target ROAS + spend >$100)

**Midday (12-1 PM):**
- [ ] Approve/reject new creative from production
- [ ] Launch new ad variations (if creative pipeline active)
- [ ] Check frequency (>3.0 on winning campaigns = fatigue risk)

**Afternoon (3-4 PM):**
- [ ] Review scaling opportunities (ROAS >target + learning phase exited)
- [ ] Execute budget changes (if scaling criteria met)
- [ ] Check for broken tracking (zero conversions on high-spend campaigns)

**End of Day (5-6 PM):**
- [ ] Log daily performance snapshot (Revenue, Orders, Ad Spend, MER)
- [ ] Update scaling calendar (note any budget changes made)
- [ ] Flag issues for next-day investigation

**Output:** Checklist with time blocks and completion tracking.

---

### Step 3: Build Channel Economics Model (1-2 hours)

**Read:** `channel_profitability_matrix.md` + `acquisition_source_deep_dive.md`
**Produce:** Contribution margin calculator for each channel

**Template structure:**
```
CHANNEL: Meta Prospecting

REVENUE: $X
COGS (landed): $Y (use actual product cost + shipping)
GROSS PROFIT: $X - $Y

AD SPEND: $Z
PLATFORM FEES: 2.9% + $0.30 per transaction (Shopify Payments)
OTHER COSTS: $A (shipping, packaging, customer service allocation)

CONTRIBUTION MARGIN: Gross Profit - Ad Spend - Platform Fees - Other Costs
CONTRIBUTION MARGIN %: (Contribution Margin / Revenue) × 100

QUALITY SCORE: (Sub Rate × 2) + (30-Day Retention × 3) + (Refund Rate × -5)
```

**For each channel:**
1. Calculate contribution margin (not just CAC vs AOV)
2. Compute quality score (retention matters more than CAC)
3. Rank channels by contribution margin % (this is priority order)
4. Flag negative-CM channels (STOP scaling these until fixed)

**Critical check (from dialogue U5):**
If contribution margin is negative, scaling = cash flow crisis.
Formula: `Working Capital Required = (Negative CM per order) × (Monthly order volume) × (Payback period in months)`

**Output:** Spreadsheet or dashboard with per-channel profitability.

---

### Step 4: Establish Creative Systems (1-3 hours)

**Read:** `hook_testing_matrix.md` + `winning_ad_iterations.md` + `roas_decay_model.md`
**Produce:** Creative testing + iteration pipeline

#### 4A: Hook Testing Matrix
**Categories:** Problem-Agitation, Ingredient Mechanism, Social Proof, Contrarian/Myth-Busting, Urgency/Scarcity, How-To/Educational, Founder Story

**For each category:**
- Write 2-3 hook variants
- Budget: $150-300 per hook test
- Kill criteria: <1 conversion + <0.5% CTR after $150 spend

**Output:** Hook library spreadsheet with test results.

#### 4B: Creative Refresh Calendar
**Cadence (from research):**
- Winning ads fatigue after 2-4 weeks
- Brands refreshing every 7 days see 40% lower CAC
- Need 2-3 new ad variations per week to maintain ROAS at scale

**Refresh protocol:**
- Monitor frequency (>3.0 = fatigue risk)
- Check CTR decay (>20% drop from peak = refresh)
- Create derivatives: 15-sec / 30-sec / 60-sec cut-downs, hook variations, format swaps

**Output:** Creative production calendar with refresh triggers.

---

### Step 5: Set Up Risk Management (30 min - 1 hour)

**Read:** `channel_diversification.md` + `ad_system_engineering.md`
**Produce:** Platform risk mitigation plan

**4-Phase Rollout:**
1. **Phase 1 (Months 1-3):** Single platform (Meta or TikTok) at 100% budget
2. **Phase 2 (Months 4-6):** Add second platform, 70/30 split
3. **Phase 3 (Months 7-9):** Add third platform, 50/30/20 split
4. **Phase 4 (Months 10-12):** Balanced portfolio, no single channel >50%

**CPM Shock Preparedness:**
- Maintain 2x monthly ad spend in cash reserves
- Have alternate platform ready to scale (pre-built campaigns)
- Set spend cap limits (e.g., 2x daily budget max)

**Automated Rules (from dialogue U6):**
- Turn off ad sets if Spend >$30 AND Conversions <1 (Today)
- Increase budget 20% if ROAS >3.0 AND Spend >$50 by 12 PM (Surf Scaling)
- Alert if attribution gap >60% (platform vs MER divergence)

**Output:** Risk checklist with automated rules configured.

---

## Grading Rubric

Use this to assess your media buying system quality:

| Dimension | Score 5 | Score 3 | Score 1 |
|-----------|---------|---------|---------|
| **Account Structure** | Platform-specific campaigns with clear naming, budget tiers documented, conversion events validated | Generic campaigns, inconsistent naming, unclear optimization events | No structure, placeholder names, optimization events not set |
| **Attribution Stack** | Dual tracking (Pixel + CAPI), EMQ >7.0, MER dashboard built, tracking validated with test purchase | Pixel-only OR CAPI without deduplication, EMQ unknown, no MER dashboard | Broken tracking, no CAPI, attribution unknown |
| **Scaling Protocol** | Tiered scaling rates by conversion volume, tracking validation checkpoints, revert protocol documented | Fixed 20% rule applied without volume consideration, no tracking checks, unclear revert criteria | No scaling framework, budget changes arbitrary, tracking never validated |
| **Daily Operations** | Checklist with time blocks, MER monitoring, frequency checks, daily log maintained | Sporadic checks, no structured routine, infrequent logging | No daily routine, reactive firefighting only |
| **Channel Economics** | Contribution margin calculated for all channels, quality score methodology applied, negative-CM channels flagged | CAC vs AOV tracked but platform fees/other costs omitted, no quality score, profitability unclear | Only tracking ROAS, no cost breakdown, cash flow risk unknown |

**Quality Score = Average of 5 dimensions, mapped to X/10**

---

## Scaffold

### Media Buying System Blueprint

```markdown
# [Brand Name] Media Buying System
**Version**: 1.0.0
**Last Updated**: [Date]
**Owner**: [Name]

---

## Platform Accounts

### Meta
- **Account ID**: [ID]
- **Campaign Structure**: [CBO/ABO]
- **Naming Convention**: [Format]
- **Optimization Event**: [Event]
- **Current Budget**: [$/day]

### TikTok
- **Account ID**: [ID]
- **Campaign Structure**: [Format]
- **Naming Convention**: [Format]
- **Optimization Event**: [Event]
- **Current Budget**: [$/day]

### Google
- **Account ID**: [ID]
- **Campaign Types**: [Shopping, Search, Display, YouTube]
- **Naming Convention**: [Format]
- **Optimization Event**: [Event]
- **Current Budget**: [$/day]

---

## Attribution Stack

**Tracking Tools:**
- [ ] Meta Pixel + CAPI (EMQ: [Score])
- [ ] TikTok Pixel + Events API (EMQ: [Score])
- [ ] Google Tag Manager
- [ ] Server-Side Tool: [Tool Name] (if applicable)

**Validation Status:**
- [ ] Test purchase completed ([Date])
- [ ] Attribution gap <40% ([Platform ROAS] vs [MER])
- [ ] Event deduplication confirmed

---

## Scaling Targets

| Phase | Timeline | Budget | Goal |
|-------|----------|--------|------|
| Testing | Days 0-7 | $[X] | Generate 50+ conversions |
| Validation | Days 8-14 | $[Y] (hold flat) | Confirm ROAS ≥[Target] for 3 days |
| Scaling | Days 15+ | +[%] every [X] days | Reach $[Target]/month |

**Current Phase**: [Phase]
**Next Gate**: [Milestone]
**Gate Criteria**: [Criteria]

---

## Channel Economics

| Channel | Revenue | Ad Spend | Contribution Margin | CM % | Quality Score | Priority |
|---------|---------|----------|-------------------|------|--------------|---------|
| Meta Prospecting | $[X] | $[Y] | $[Z] | [%] | [Score] | [Rank] |
| Meta Retargeting | $[X] | $[Y] | $[Z] | [%] | [Score] | [Rank] |
| TikTok | $[X] | $[Y] | $[Z] | [%] | [Score] | [Rank] |
| Google Brand | $[X] | $[Y] | $[Z] | [%] | [Score] | [Rank] |
| Email (to existing) | $[X] | $[Y] | $[Z] | [%] | [Score] | [Rank] |

**Action Items:**
- [ ] Scale: [Channels with positive CM + ROAS >target]
- [ ] Fix: [Channels with negative CM]
- [ ] Test: [New channels to diversify]

---

## Creative Pipeline

**Hook Library:** [Link to spreadsheet]
**Current Winners:** [List top 3 performing ads]
**Refresh Schedule:** [Frequency — weekly recommended]

**Testing Queue:**
- [ ] Hook Test 1: [Category] — [Budget: $150]
- [ ] Hook Test 2: [Category] — [Budget: $150]
- [ ] Derivative: [Winning ad] → [Format variation]

---

## Risk Management

**Platform Dependency:**
- Current: [%] Meta / [%] TikTok / [%] Google
- Target (Month 12): <50% any single platform

**Cash Reserves:** $[X] (2x monthly ad spend)

**Automated Rules:**
- [ ] Kill underperformers (Spend >$30, Conv <1)
- [ ] Surf scaling (ROAS >3.0 + high spend)
- [ ] Attribution gap alerts (>60% divergence)

---

## Daily Checklist

**Morning (9-10 AM):**
- [ ] Check MER: [Value]
- [ ] Review platform ROAS: Meta [X], TikTok [Y], Google [Z]
- [ ] Flag campaigns needing action: [List]

**Midday (12-1 PM):**
- [ ] Approve/reject new creative: [Count]
- [ ] Launch new ads: [Count]

**Afternoon (3-4 PM):**
- [ ] Execute budget changes: [List]
- [ ] Check for broken tracking: [Status]

**End of Day (5-6 PM):**
- [ ] Log performance: Revenue $[X], Orders [Y], Ad Spend $[Z], MER [A]
- [ ] Update scaling calendar: [Notes]

---

## Open Issues

- [Issue 1]
- [Issue 2]
- [Issue 3]

---

## Next 7 Days

| Day | Action | Owner | Status |
|-----|--------|-------|--------|
| Mon | [Action] | [Name] | [ ] |
| Tue | [Action] | [Name] | [ ] |
| Wed | [Action] | [Name] | [ ] |
| Thu | [Action] | [Name] | [ ] |
| Fri | [Action] | [Name] | [ ] |
```

---

## Graded Example: IonWave (8.5/10)

**IonWave Media Buying System v1.0**

### Platform Accounts
- **Meta**: CBO structure (budget >$3K/mo), Advantage+ Budget enabled, Purchase optimization, $100/day
- **TikTok**: ABO structure (testing phase), Add to Cart optimization, $30/day
- **YouTube**: Skippable In-Stream ads, View-through conversions, $50/day

### Attribution Stack
- Meta Pixel + CAPI configured (EMQ: 7.8)
- TikTok Pixel installed (CAPI pending)
- Triple Whale for MER dashboard
- Attribution gap: 28% (Meta 2.8 ROAS vs MER 2.2) — within "unclear signal" range

### Scaling Status
- Phase: Validation (Day 10)
- Budget: $180/day (holding flat)
- Goal: 3 consecutive days ROAS ≥2.5 before scaling
- Next gate: Day 13 (if validation passes, scale to $216/day = +20%)

### Channel Economics
| Channel | Revenue | Ad Spend | CM | CM % | Quality | Priority |
|---------|---------|----------|-----|------|---------|---------|
| Meta Prospecting | $8,200 | $3,000 | $1,840 | 22.4% | 8.2 | 1 |
| Meta Retargeting | $2,400 | $600 | $960 | 40.0% | 9.1 | 2 |
| Email | $1,800 | $0 | $1,260 | 70.0% | 9.5 | 1 (scale) |

**Action:** Scale Meta Prospecting (+20% to $3,600/week), launch TikTok test ($210/week), build referral program (email quality score = 9.5).

### Creative Pipeline
- Hook Test 1: Ingredient Mechanism (Marine Plasma isotonicity) — $150 budget
- Hook Test 2: Problem-Agitation (Electrolyte deficiency symptoms) — $150 budget
- Winning Ad: 30-sec founder video (2.8 ROAS, 1.2% CTR, frequency 2.1) — create 15-sec / 60-sec derivatives

### Risk Management
- Platform dependency: 94% Meta (HIGH RISK — diversify by Month 3)
- Cash reserves: $12,000 (2.2x monthly ad spend — adequate)
- Automated rules: Configured in Meta Ads Manager + Triple Whale alerts

**Grade: 8.5/10**
- Evidence Coverage: 5/5 (all channels tracked, attribution validated)
- Attribution Stack: 5/5 (Pixel + CAPI + MER dashboard)
- Scaling Protocol: 4/5 (validation phase correctly applied, but TikTok test should wait until Meta scales)
- Channel Economics: 5/5 (CM % calculated, quality scores applied, priority ranking clear)
- Risk Management: 3.5/5 (94% Meta dependency = existential risk; needs faster diversification)

**Upgrade Path:**
- Launch YouTube ads by Month 2 (reduce Meta dependency to <70%)
- Add TikTok CAPI (EMQ parity with Meta)
- Build Amazon channel (Month 4+) to diversify beyond social ads

---

## Adaptation Guide

### For Different Business Models

**High-AOV ($150+):**
- Use Add to Cart as optimization event (lower volume, longer consideration)
- Target ROAS: 1.5-2.0x (lower margins acceptable at higher AOV)
- Channel priority: YouTube (long-form content for education), Google Search (high-intent)

**Low-AOV (<$30):**
- Optimize for Purchase immediately (need volume)
- Target ROAS: 3.0x+ (need high margins to cover low AOV)
- Channel priority: TikTok (impulse purchases), Meta (broad reach)

**Subscription-First:**
- Optimize for "Subscribe" event (not one-time purchase)
- Calculate LTV in contribution margin (3.7x difference per M15)
- Channel priority: Meta (Lookalike audiences), Google Brand (retention signal)

**B2B/Wholesale:**
- Optimize for Lead (not Purchase)
- Target CPL: $50-200 depending on deal size
- Channel priority: LinkedIn (B2B targeting), Google Search (high-intent)

### For Different Spend Levels

**<$3K/month:**
- Use ABO structure (CBO needs volume)
- Single platform only (Meta recommended)
- Daily checklist: Morning + EOD only (midday optional)

**$3K-$10K/month:**
- Transition to CBO structure
- Add second platform (TikTok or YouTube)
- Full daily checklist (4 check-ins)

**$10K-$50K/month:**
- Hybrid CBO/ABO (test with ABO, scale with CBO)
- 3+ platforms (diversification critical)
- Hire freelance media buyer (10-20% of spend)

**$50K+/month:**
- Advanced: Advantage+ campaigns, Performance Max
- Full server-side tracking stack (Northbeam or SegmentStream)
- Hire in-house media buyer ($66K-96K salary)

---

## Related TUPs

- **M11 (VSL Production)**: Creative supply for media buying
- **M12 (Ad Creative)**: Hook library and creative frameworks
- **M14 (Testing & Optimization)**: Creative testing protocols
- **M15 (Landing Pages)**: Funnel architecture for paid traffic
- **M23 (Influencer & Creator)**: UGC sourcing for ad creative
- **M30 (Analytics & Dashboards)**: MER dashboard and MVD metrics

---

## Change Log

| Date | Version | Change |
|------|---------|--------|
| 2026-02-10 | 1.0.0 | Initial OpKit created from M13 workshop (14 content files, 12-round dialogue, 9 upgrades applied) |

---

**This OpKit is production-ready.** Follow the instructions, fill the scaffold, and you'll have a complete media buying system in 4-8 hours of focused work.
