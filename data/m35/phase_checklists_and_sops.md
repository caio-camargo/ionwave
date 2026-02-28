# IonWave Phase Checklists & SOPs

**Version**: 1.0.0
**Date**: 2026-02-15
**Author**: Caio, Claude (collaborative)
**Purpose**: Gated checklists for LAUNCH → PMF → SCALE transitions + core SOPs for repeatable processes
**Quality**: C+ (phase gates researched from First Round PMF levels, SOPs are IonWave-specific pre-execution)

---

## Phase Gate Philosophy

**Why gates matter**: Scaling too early kills startups. Scaling too late wastes opportunity. Gates are objective criteria that say "you're ready for the next phase."

**Three phases**:
1. **LAUNCH** (Day 1-90): Zero → First Dollar → Learning Machine
2. **PMF** (Day 91-180): Validated unit economics + retention signal
3. **SCALE** (Day 181-365+): Systematic growth with team + infrastructure

**Gate = Go/No-Go decision**. If you don't pass, you iterate or pivot. You don't push through.

**Sources**: First Round Levels of PMF [Confidence: A | Source: firstround.com/levels], YC PMF criteria, D2C benchmarks.

---

## Phase 1: LAUNCH Checklist (Pre-Revenue → First Orders)

**Entry Criteria**: Trade thesis locked (M0), product sourced (M5, M6), compliance validated (M7)
**Exit Criteria**: 10-100 orders, CAC <$60, subscription >15%, zero critical failures
**Duration**: Day 1-90 (3 months)
**Kill Trigger**: <3 orders by Week 4, CAC >$100 sustained, major compliance violation

---

### Pre-Launch Checklist (Week -1 to Day 0)

**Legal & Entity** *(M2)*
- [ ] Entity formed (Delaware C-Corp or equivalent)
- [ ] EIN obtained
- [ ] Bank account opened (Mercury/Relay/Brex)
- [ ] QBO set up with Day 1 Essentials chart of accounts (M25)
- [ ] Trademark filed (or application in progress)
- [ ] Privacy Policy, Terms of Service, Cookie Policy live on site (GDPR/CCPA compliant)

**Product & Supply** *(M5, M6)*
- [ ] Supplier selected + CoA received (heavy metals compliant)
- [ ] First batch ordered (500-1000 sachets minimum)
- [ ] Packaging designed with FDA Supplement Facts Panel
- [ ] Prop 65 strategy locked (CA warning or testing to prove <threshold)
- [ ] Fulfillment strategy decided (self-fulfill Phase 1 with 3PL quotes ready for Month 3)

**Regulatory & Compliance** *(M7)*
- [ ] DSHEA disclaimer on all marketing ("These statements have not been evaluated...")
- [ ] FTC Negative Option Rule compliance (subscription terms clear, easy cancel)
- [ ] No disease claims in copy (structure/function only)
- [ ] Adverse event protocol documented (FDA MedWatch reporting)

**Technical Setup** *(M9)*
- [ ] Shopify store live ($79/month plan minimum)
- [ ] Theme installed with performance budget (<500KB JS, <8 apps)
- [ ] Subscription app integrated (Recharge/Skio/Stay)
- [ ] Payment processor (Shopify Payments + backup like Stripe)
- [ ] Fraud rules set (Shopify Fraud Analysis, 2x daily budget spend caps)
- [ ] GA4 + Meta Pixel + CAPI configured (server-side tracking)
- [ ] Consent Mode v2 enabled (GDPR/CCPA from Day 1)
- [ ] Checkout tested (test order placed, payment processed, confirmation email sent)

**Brand & Creative** *(M8, M11, M12)*
- [ ] Logo finalized (or placeholder with timeline to replace)
- [ ] Product photography complete (min 3-5 images: product, lifestyle, detail shots)
- [ ] Landing page v1 live (hero, benefits, FAQ, compliance disclaimers)
- [ ] 3-5 ad creatives produced (1 VSL, 2-4 static/UGC-style)
- [ ] Brand voice guide documented (Informed Guide archetype — M8)

**Marketing Infrastructure** *(M13, M15, M17, M18)*
- [ ] Ad accounts set up (Meta Business Manager, TikTok Ads Manager, Google Ads)
- [ ] Email platform configured (Klaviyo/Mailchimp + 3 flows: Welcome, Cart Abandonment, Post-Purchase)
- [ ] Referral app installed (Loop/Smile)
- [ ] Tracking validated (test purchase shows in GA4, Meta, email platform)

**Operational** *(M20, M24, M25)*
- [ ] CX tool selected (Gorgias/Richpanel or Gmail Phase 1)
- [ ] Shipping materials sourced (mailers, tape, labels)
- [ ] Inventory tracking system (Shopify inventory or Google Sheet)
- [ ] Bookkeeping automated (Synder or A2X syncing Shopify → QBO)

**GATE**: All critical items checked → LAUNCH. If major gaps (no CoA, no compliance, tracking broken) → DELAY.

---

### Launch Phase Execution (Day 1-90)

**Week 1-2: Soft Launch**
- [ ] Soft launch to warm network (friends, family, founder social media)
- [ ] $100-300 test ad spend to validate tracking + checkout
- [ ] First 3-10 orders received and fulfilled
- [ ] Customer feedback collected (taste, packaging, delivery)
- [ ] Analytics validated (revenue matches, attribution <40% divergence)

**Week 3-4: Iteration**
- [ ] Creative refresh (kill ads <1 conv/$30 spend)
- [ ] LP adjustments if conversion <1.5%
- [ ] Product adjustments if quality issues flagged
- [ ] Scale to $500-1000/week ad spend if CAC <$50

**Month 2-3: Ramp**
- [ ] Ad spend $1500-5000/month (tiered scaling per M13)
- [ ] Email flows optimized (cart recovery 3-email sequence)
- [ ] Subscription retention tracked (cohort decay, churn drivers)
- [ ] First repeat purchase rate measured (target >5% by Month 2)
- [ ] Financial dashboards live (Survival Five MBR — M25, M30)

**Day 90 Checkpoint**: Pass if:
- [ ] 50-150 orders placed
- [ ] CAC <$60 (preferably <$50)
- [ ] Subscription attach >15% (target 20-25%)
- [ ] First repeat purchase >5%
- [ ] Zero critical compliance violations (no FDA/FTC warnings)
- [ ] Gross Margin >55% (CoA-validated, not estimate)
- [ ] Cash runway >3 months

**If FAIL**: Iterate 30-60 more days OR reassess thesis (HYP-006 Differentiation, HYP-003 Churn).

---

## Phase 2: PMF Validation Checklist (Revenue → Product-Market Fit)

**Entry Criteria**: Passed Launch phase (Day 90 checkpoint)
**Exit Criteria**: Strong PMF signal (NPS >40%, LTV:CAC >3.0, retention >60% Month 3)
**Duration**: Day 91-180 (Months 4-6)
**Kill Trigger**: LTV:CAC <2.0 sustained, churn >20%, runway <2 months

---

### PMF Criteria (Levels of PMF Framework)

**Source**: First Round Capital "Levels of PMF" [Confidence: A | firstround.com/levels | Date: 2026]

**Nascent PMF** (barely there):
- A few "hair on fire" customers who love you, but they're outliers
- Growth is slow, sales feel like pushing a boulder uphill
- Churn is high (>20% Month 1)

**Developing PMF** (getting there):
- Clear persona emerging, some organic growth
- Sales still feel like a slog but less painful
- LTV:CAC approaching 3.0
- 40% rule: 30-39% of users would be "very disappointed" without product

**Strong PMF** (you're ready):
- Growth is predictable
- LTV:CAC is healthy (>3.0)
- 40% rule satisfied: **40%+ of users would be "very disappointed" without your product**
- Retention stabilizing (Month 3 cohort >60% active)

**Extreme PMF** (demand outpaces supply):
- Can't fulfill fast enough
- Organic growth dominates paid
- Churn <10%, retention >80%

**IonWave Target**: Strong PMF by Day 180. Developing PMF acceptable, but needs clear path to Strong within 60 days.

---

### PMF Validation Checklist (Day 91-180)

**Quantitative Signals**:
- [ ] $30K-60K revenue (Months 4-6 combined)
- [ ] 300-600 orders
- [ ] CAC $30-50 (blended)
- [ ] LTV:CAC >3.0 (12-month LTV projection)
- [ ] Subscription attach >25% (up from 15-20% in Launch)
- [ ] Churn <15% Month 1 (down from 18-20% in Launch)
- [ ] Repeat purchase >10% by Month 2 (organic reorder, not just subscription)
- [ ] MER (Merchandising Efficiency Ratio) >2.0 (revenue / ad spend)

**Qualitative Signals**:
- [ ] NPS survey: >40% say "very disappointed" without IonWave
- [ ] Customer interviews (5-10): Clear, consistent reason they buy (jobs-to-be-done emerging)
- [ ] Organic word-of-mouth: 3+ unsolicited testimonials or referrals
- [ ] Product feedback: Complaints shift from "doesn't work" to "wish it had X feature"

**Operational Signals**:
- [ ] Fulfillment process repeatable (not breaking at 50-100 orders/week)
- [ ] CX process documented (response <24hr, escalation protocol clear)
- [ ] Financial model updated with actuals (M3 scenario validation — revenue, CAC, margin all within 20% of forecast)
- [ ] Team capacity OK (founder not working 80-hour weeks, or hire plan in place)

**Channel Signals**:
- [ ] At least 1 channel scales profitably (Meta, TikTok, Google, or influencer with ROAS >2.0)
- [ ] Platform concentration <50% (not 100% dependent on Meta)
- [ ] Creative library rotation working (2-4 week fatigue cycle managed)

**GATE**: Pass 6+ quantitative + 3+ qualitative + 3+ operational → PROCEED TO SCALE.

**If PARTIAL PASS (4-5 quant, 2 qual)**: Iterate 30-60 days, address gaps, re-check.

**If FAIL (<4 quant, <2 qual)**: Reassess strategy. Options:
1. Pivot positioning (ICP shift, messaging update)
2. Product iteration (flavor SKU, reformulation)
3. Channel pivot (kill underperforming, double down on working)
4. Graceful wind-down (if M0 kill criteria triggered)

---

## Phase 3: SCALE Checklist (PMF → Growth)

**Entry Criteria**: Passed PMF phase (Day 180 checkpoint with Strong PMF signal)
**Exit Criteria**: $100K-200K revenue Year 1, 500-1000 active subscriptions, team of 3-5, EBITDA breakeven path visible
**Duration**: Day 181-365+ (Months 7-12 and beyond)
**Kill Trigger**: Contribution margin negative 2 consecutive months, churn >20%, cash out <1 month, major product recall

---

### Scale Readiness Checklist (Pre-Scale Audit)

**Before scaling ad spend 3-5x**, validate:

**Unit Economics Locked**:
- [ ] LTV:CAC >4.0 (up from 3.0 — margin to absorb scale inefficiencies)
- [ ] Contribution margin >30% (after fulfillment, shipping, payment fees, returns)
- [ ] Payback period <6 months (preferably <4 months for cash flow)
- [ ] Gross margin >60% (CoA-validated with supplier consistency)

**Retention Stable**:
- [ ] Churn <15% Month 1 (ideally <12%)
- [ ] Month 3 retention >60% (preferably >70%)
- [ ] Subscription revenue >30% of total revenue (recurring base growing)
- [ ] Cohort curves plateauing (Month 6+ cohorts show predictable decay, not cliff)

**Operations Ready**:
- [ ] 3PL transition complete (if volume >200 orders/month) OR self-fulfillment capacity confirmed to 500+/month
- [ ] Inventory model validated (21-day safety stock, restock formula working — M6)
- [ ] CX team hired or contracted (response <24hr sustainable at 500+ orders/month)
- [ ] Financial ops automated (Synder/A2X, monthly P&L, 13-week cash forecast)

**Creative Machine Built** *(M11, M12)*:
- [ ] 3-tier replenishment: derivatives weekly, new concepts biweekly, high-production monthly
- [ ] Winner rate 10-20% (testing discipline in place)
- [ ] Quarterly library audit scheduled (retire fatigued, preserve winners)

**Team in Place** *(M1, M31)*:
- [ ] Ads Lead hired (full-time or part-time managing $10K+/month spend)
- [ ] CX Lead hired (part-time or full-time if >100 tickets/month)
- [ ] Founder capacity for strategy (not drowning in ops)

**Financial Runway**:
- [ ] 6+ months cash runway (scaling burns cash before it returns — need buffer)
- [ ] Fundraising secured OR profitable enough to self-fund (M4)

**GATE**: All critical items checked → SCALE. If major gaps (retention unstable, ops breaking, no cash runway) → FIX FIRST.

---

### Scale Phase Execution (Day 181-365)

**Month 7-9: Infrastructure Scaling**
- [ ] Ad spend $10K-25K/month (40-50% increases per M13 tiered scaling)
- [ ] Platform diversification: Meta <50%, TikTok/Google/YouTube scaled
- [ ] Creative refresh 2x/month (fatigue management)
- [ ] Retention flows optimized (pause nudges, win-back campaigns — M19, M21)
- [ ] Influencer partnerships (2-3 paid deals if seeding showed >1.5x ROAS — M23)

**Month 10-12: Operational Excellence**
- [ ] SKU expansion (2-3 flavors live if demand validated)
- [ ] Subscription box variant (30-day supply, premium unboxing)
- [ ] Monthly P&L review (actual vs. forecast <15% variance)
- [ ] Team expansion (3-5 people: founder, ads, CX, ops/fulfillment)
- [ ] Market expansion evaluation (Amazon, B2B, international — M28)

**Year 1 Closeout (Day 365)**:
- [ ] Annual revenue $100K-200K (target range)
- [ ] 1000-2000 orders total
- [ ] 500-1000 active subscriptions
- [ ] LTV:CAC >4.0 sustained
- [ ] EBITDA breakeven path visible (or achieved)
- [ ] Year 2 plan locked (scaling budget, hiring roadmap, product roadmap)

**If PASS**: Proceed to Year 2 (Scale continues, consider Series A if venture-track).

**If PARTIAL**: Revenue $50K-100K, unit economics OK but not dominant → continue optimizing, slower scale.

**If FAIL**: <$50K revenue, LTV:CAC <2.0, churn >20% → reassess viability. Options: pivot, acquihire, wind down.

---

## Core SOPs (Standard Operating Procedures)

### SOP-001: Order Fulfillment (Self-Fulfill Phase)

**Trigger**: Order placed in Shopify
**Owner**: Founder (Phase 1) → Ops Lead (Phase 2+)
**Frequency**: Daily (batch process once/day if <10 orders, 2x/day if >10)
**Duration**: 5-10 min per order

**Steps**:
1. **Export orders**: Shopify → Orders → Export unfulfilled orders to CSV
2. **Print packing slips**: Shopify auto-generates, print batch
3. **Pack orders**:
   - Verify sachet count (30-day supply = 30 sachets)
   - Add box insert (QR code to referral program, usage instructions)
   - Seal mailer (branded or plain depending on budget)
   - Affix shipping label (Shopify Shipping or Stamps.com)
4. **Mark fulfilled**: Shopify → Orders → Mark as fulfilled, add tracking number
5. **Ship**: Drop at USPS/UPS (same-day if before 3 PM, next-day if after)

**Quality Check**:
- Correct product + quantity
- No damaged sachets
- Box insert included
- Tracking uploaded to Shopify (customer gets auto-email)

**Handoff to 3PL**: When volume >200 orders/month OR founder time >10 hrs/week on fulfillment, transition to 3PL (M24 process).

---

### SOP-002: Customer Support Response

**Trigger**: Support ticket submitted (email, chat, social DM)
**Owner**: Founder (Phase 1) → CX Lead (Phase 2+)
**SLA**: <24 hours first response, <48 hours simple resolution
**Tool**: Gorgias/Richpanel (Phase 2+) or Gmail (Phase 1)

**Steps**:
1. **Triage**: Urgent (order issue, adverse reaction) vs. Normal (general question) vs. Low (feedback)
2. **Respond**:
   - **Urgent**: Immediate (within 2 hours) — order fix, adverse reaction protocol (M20 FDA MedWatch)
   - **Normal**: Within 24 hours — shipping questions, product questions, return requests
   - **Low**: Within 48 hours — feedback thank-you, feature requests logged
3. **Resolve**:
   - Refund: Shopify → Orders → Refund (full or partial)
   - Replacement: Create manual order, mark as fulfilled, ship
   - Tracking: Provide tracking link or reship if lost
4. **Log**: Tag ticket type (shipping, product quality, adverse reaction, etc.) for trend analysis
5. **Escalate**: If adverse reaction (nausea, allergic reaction, etc.) → FDA MedWatch report within 15 days (M7, M20)

**Macros** (saved responses):
- Shipping delay
- Taste feedback ("too salty" → educate on mineral content, offer flavor SKU when available)
- Subscription pause/cancel
- Return policy (30-day money-back guarantee)

---

### SOP-003: Weekly Ad Account Review

**Trigger**: Every Monday AM (review prior week performance)
**Owner**: Founder (Phase 1) → Ads Lead (Phase 2+)
**Duration**: 30-45 min
**Tool**: Meta Ads Manager, TikTok Ads Manager, Google Ads

**Steps**:
1. **Review metrics**:
   - Spend vs. budget
   - ROAS (target >2.0)
   - CAC (target <$50)
   - CTR, CPM, CPC (benchmarks: CTR >1%, CPM <$15, CPC <$2)
2. **Kill underperformers**: Any ad with <1 conversion after $30 spend → pause
3. **Scale winners**: Ads with ROAS >3.0 and >5 conversions → increase budget 20-30%
4. **Creative refresh**: If best-performing ad is >3 weeks old, flag for derivative or new concept (M12)
5. **Budget reallocation**: Shift spend from low-ROAS platform to high-ROAS platform (e.g., TikTok 1.5 ROAS → Meta 2.5 ROAS, move $200 from TikTok to Meta)
6. **Log decisions**: Document in #decisions Slack or Weekly WBR notes

**Alerts** (set up in Ads Manager):
- Daily spend >2x target (fraud or runaway campaign)
- ROAS <1.0 for 3 consecutive days (losing money)
- Account flagged for review (compliance issue)

---

### SOP-004: Monthly Financial Close

**Trigger**: First business day of new month
**Owner**: Founder (Phase 1) → Bookkeeper/CFO (Phase 3+)
**Duration**: 2-4 hours (Month 1-3), 1-2 hours (Month 4+ with automation)
**Tool**: QBO + Synder/A2X + Google Sheets

**Steps**:
1. **Sync transactions**: Synder/A2X auto-syncs Shopify/Stripe → QBO (verify no errors)
2. **Reconcile bank**: QBO → Banking → Reconcile (match all transactions)
3. **Categorize uncategorized**: Any "uncategorized" transactions → assign to COA account
4. **Review P&L**: QBO → Reports → Profit & Loss (compare to forecast)
5. **Update cash forecast**: 13-week rolling cash forecast (Google Sheet or QBO Budget)
6. **Calculate Survival Five** (M25):
   - Revenue (from P&L)
   - Gross Margin (COGS / Revenue)
   - Cash Balance (from bank reconciliation)
   - Burn Rate (total expenses from P&L)
   - Runway (Cash / Burn Rate)
7. **Monthly MBR prep**: Populate MBR template with Survival Five + cohort data + 4 Questions

**Output**: Monthly P&L, Balance Sheet, Cash Forecast saved to `/financials/YYYY-MM/` folder.

**Audit**: Quarterly (Q1, Q2, Q3, Q4) → CPA review if fundraising active or revenue >$100K.

---

### SOP-005: Creative Production & Testing (M12)

**Trigger**: Every 2 weeks (biweekly creative refresh)
**Owner**: Founder (Phase 1) → Ads Lead + UGC Creators (Phase 2+)
**Duration**: 2-4 hours production, 1 week testing
**Tool**: Canva/Figma for design, CapCut for video, Meta Ads Manager for testing

**Steps**:
1. **Identify need**: Creative fatigue (ROAS declining, frequency >5, CTR dropping) or new angle to test
2. **Produce**:
   - **Derivatives** (quick wins): Take winning ad, change hook or CTA (30 min)
   - **New concepts** (moderate effort): New angle (e.g., "fasting hydration" vs. "athletic performance"), new format (static vs. video) (2-4 hours)
   - **High-production** (big bets): Professional shoot, influencer collab, testimonial video (days to weeks, $500-2000 budget)
3. **Test**:
   - Upload to Meta Ads Manager (or TikTok/Google)
   - Set budget: $30-50 per creative for initial test
   - Run 3-7 days
4. **Kill or scale**:
   - <1 conversion after $30 → KILL
   - 1-3 conversions, ROAS 1.5-2.5 → MONITOR (may scale later)
   - >3 conversions, ROAS >2.5 → SCALE (increase budget 20-50%)
5. **Archive**: Winners saved to `/creative_library/winners/`, losers to `/creative_library/killed/` (learn from failures)

**Cadence**:
- **Week 1-2**: Derivatives (quick refresh)
- **Week 3-4**: New concepts (if derivatives aren't working)
- **Monthly**: High-production (if budget allows and winners plateauing)

---

## Intelligence Gaps & Validation Paths

| Gap | Current Grade | Upgrade Path |
|-----|--------------|--------------|
| PMF 40% rule threshold for IonWave | C (First Round framework A-grade, IonWave application untested) | A: Month 3 NPS survey actuals |
| LTV:CAC >3.0 for supplements | B (industry benchmark) | A: Month 6 cohort data with 12-month LTV projection |
| 3PL transition at 200 orders/month | C (industry heuristic) | B: Month 3-4 founder time tracking shows actual breakpoint |
| Creative fatigue 2-4 weeks | B (M12 research) | A: Month 4+ ad account data shows IonWave-specific fatigue cycle |
| Churn <15% for strong PMF | C (D2C subscription benchmarks) | A: Month 6+ cohort actuals |

---

## Cross-References

**Depends on**:
- M0 (Trade Thesis) — kill criteria cascade to phase gates
- M3 (Financial Model) — LTV:CAC thresholds, revenue targets
- All operational TUPs (M5-M30) — each gate references specific TUP execution

**Feeds into**:
- M35 (30/90/365 Plans) — phase gates are decision points in the timeline
- M40 (Navigation) — phase gates inform command center alerts
- Session retrospectives — gate pass/fail triggers strategic pivots

---

**Sources**:
- [First Round Levels of PMF](https://www.firstround.com/levels)
- [PMF metrics & timeline](https://ideaproof.io/questions/time-to-achieve-pmf)
- [D2C scaling best practices](https://www.shopify.com/blog/shopify-store-launch-checklist)
- [Startup phase criteria](https://wearepresta.com/how-to-find-product-market-fit-in-2026/)
