# IonWave Execution Plans: 30/90/365-Day Roadmap

**Version**: 1.0.0
**Date**: 2026-02-15
**Author**: Caio, Claude (collaborative)
**Purpose**: Phase-gated execution plans for IonWave's first year — 30/90/365-day milestones with accountability and kill criteria
**Quality**: C+ (benchmarks researched, IonWave-specific but pre-launch assumptions)

---

## Planning Philosophy

**30/60/90 Framework (2026 Best Practice):**
- **Next 30 days**: Absolute clarity — every task assigned, every deliverable dated, every milestone owned [Confidence: A | Source: medium.com/@dcirl/building-your-2026-strategy | Date: 2025-12]
- **Days 31-90**: Reasonable visibility — directional goals with flex
- **Days 91-365**: Strategic horizon — quarterly themes, major milestones only

**Key principle**: In 2026's AI era, velocity (speed + direction) beats perfection. Lock the next 30 days, stay flexible beyond. [Confidence: B | Source: Medium D2C strategy article | Date: 2025-12]

---

## Day 1-30: LAUNCH SPRINT (Pre-Revenue → First Dollar)

### Theme: "Zero to Live"
**Goal**: Ship v1 product, execute soft launch, achieve first 10 orders
**Owner**: Caio (Founder)
**Success Criteria**: Shopify live, 10 orders placed, $0 ad spend → revenue conversion, zero critical failures
**Kill Criteria**: Week 4 with <3 orders (demand signal failure), critical compliance violation (FDA/FTC), product quality issue requiring recall

---

### Week 1: Foundation (ODD-5 Execution)

**Days 1-2: Entity & Compliance** *(M2 execution)*
- [ ] Entity formation complete (Delaware C-Corp or equivalent)
- [ ] EIN obtained, bank account opened (Mercury/Relay/Brex)
- [ ] QBO set up with Day 1 Essentials chart of accounts (M25)
- [ ] Shopify store provisioned ($79/month plan)
- **Blocker gate**: No entity = pause all spending

**Days 3-5: Product & Supply** *(M5, M6 execution)*
- [ ] Supplier selected + CoA received (heavy metals <10ppb As, <5ppb Pb, <3ppb Hg)
- [ ] First batch ordered (500-1000 sachets, $240-480 COGS)
- [ ] Packaging designed with FDA compliance (Supplement Facts Panel, Prop 65 if CA)
- [ ] Fulfillment strategy locked (self-fulfill Phase 1, 3PL quotes for Month 3)
- **Blocker gate**: No CoA with compliant limits = do not launch

**Days 6-7: Technical Setup** *(M9 execution)*
- [ ] Theme installed with performance budget enforced (<500KB JS, <8 apps)
- [ ] Subscription app integrated (Recharge/Skio)
- [ ] Payment processor (Shopify Payments), fraud rules set (2x daily budget spend caps)
- [ ] GA4 + Meta Pixel + CAPI configured (server-side tracking via Elevar/Triple Whale)
- [ ] Consent Mode v2 enabled (GDPR/CCPA compliance from Day 1)
- [ ] Week 1 Setup Sequence complete (M9 checklist — prevents 3-week launch delays)

**Week 1 Checkpoint**: Entity live, product sourced with CoA, store technically ready. If any blocker unresolved, delay launch — do NOT ship without compliance or product validation.

---

### Week 2: Pre-Launch Assets (M8, M11, M15)

**Days 8-10: Brand & Creative**
- [ ] Logo finalized (or placeholder if design pending — flag as CRITICAL blocker)
- [ ] Packaging production files to printer ($0.50-0.70/sachet target)
- [ ] Product photography complete (or stock + lifestyle combo)
- [ ] Brand voice locked (Informed Guide archetype — M8)

**Days 11-14: Marketing Foundation**
- [ ] Landing page v1 live with compliance (FTC negative option rule, Prop 65, DSHEA disclaimer)
- [ ] 3-5 ad creatives produced (1 VSL hook test, 2-4 static/UGC-style ads — M11, M12)
- [ ] Email flows built (Welcome, Cart Abandonment, Post-Purchase — M17, M18)
- [ ] Referral mechanics installed (Loop/Smile integration — M22)
- [ ] Ad account set up (Meta Business Manager, TikTok Ads Manager, Google Ads)

**Week 2 Checkpoint**: Creative assets ready, marketing infrastructure live. If major gaps (no logo, no photography, no LP), assess if soft launch is viable with placeholders or if hard launch should wait.

---

### Week 3-4: Soft Launch + Iteration

**Week 3: Controlled Traffic (Friends, Family, Warm Network)**
- [ ] Soft launch email to warm list (if any) / founder network
- [ ] $100-300 test ad spend (Meta/TikTok) to validate tracking + checkout
- [ ] First 3-10 orders received
- [ ] Fulfillment process executed (self-pack, ship, tracking uploaded)
- [ ] Customer feedback collected (taste, packaging, delivery speed)
- [ ] Analytics validated (GA4 revenue matches Shopify, Meta attribution <40% divergence)

**Week 4: First Optimizations**
- [ ] Creative iteration based on Week 3 data (kill underperforming ads <1 conv/$30 spend)
- [ ] LP adjustments if conversion <1.5% (friction analysis — M15)
- [ ] Product adjustments if taste/quality issues flagged
- [ ] Scale to $500-1000 weekly ad spend if CAC <$50 and attribution stable

**Day 30 Assessment**:
- **Success**: 10+ orders, CAC <$60, zero compliance violations, product quality validated → PROCEED to Month 2 (paid acquisition ramp)
- **Caution**: 3-9 orders, CAC $60-100, minor quality issues → iterate 2 more weeks before scaling
- **Kill**: <3 orders, CAC >$100, major compliance/quality issues → pause, re-evaluate thesis (HYP-006 Differentiation failure?)

---

## Day 31-90: ACQUISITION RAMP (Revenue → PMF Signals)

### Theme: "Learning Machine"
**Goal**: $5K-15K revenue, 50-150 orders, validated unit economics, early retention data
**Owner**: Caio (Founder) + part-time support (ads, CX) if hired
**Success Criteria**: CAC <$50, ROAS >2.0, MER >1.5, subscription attach >20%, Month 2 repeat purchase >5%
**Kill Criteria**: CAC >$100 sustained, ROAS <1.0, churn >20% Month 1, cash runway <3 months

---

### Month 2 (Days 31-60): Scale Testing

**Weeks 5-6: Channel Validation**
- [ ] Meta ad spend $1500-3000/month (tiered scaling: 20% if <30 conversions, 30% if 30-100 — M13)
- [ ] TikTok test $300-500 (youth-skewing creative)
- [ ] Google Search brand + competitor terms $200-500
- [ ] Creative refresh (2-4 new hooks, UGC-style content — M12)
- [ ] Landing page A/B test (headline, CTA, trust signals — M14, M15)
- [ ] Email flows optimized (cart recovery 3-email sequence, welcome nurture — M17, M18)

**Weeks 7-8: Retention Focus**
- [ ] Subscription retention analyzed (cohort decay, churn drivers — M19, M21)
- [ ] Post-purchase flow activated (Day 7, Day 14, Day 21 touchpoints — M18)
- [ ] Customer support SOP documented (FDA adverse event protocol, chargeback monitoring — M20)
- [ ] Referral program activated (10% off for referrer + referee — M22)
- [ ] First repeat purchase rate tracked (target >5% by Month 2)

**Day 60 Checkpoint**:
- Revenue: $3K-8K
- Orders: 30-100
- CAC: $40-60
- Subscription attach: 15-25%
- If metrics in range → proceed. If CAC >$80 or revenue <$2K → re-evaluate channel mix, creative fatigue, or product-market fit assumptions (HYP-003 Churn, HYP-006 Differentiation).

---

### Month 3 (Days 61-90): Operational Maturity

**Weeks 9-10: Efficiency Gains**
- [ ] 3PL quotes finalized if self-fulfillment >50 orders/week (M24)
- [ ] Financial dashboards live (Survival Five MBR — M25, M30)
- [ ] Creative library rotation (2-4 week fatigue cycle, derivatives + new concepts — M12)
- [ ] Attribution model validated (survey "How did you hear about us?" vs. UTM last-click — M30)
- [ ] SEO foundation (blog pillar content, product pages optimized — M16)

**Weeks 11-12: PMF Hypothesis Testing**
- [ ] NPS/retention survey sent to Month 1 cohort (40% "very disappointed" threshold — PMF signal)
- [ ] Cohort analysis: Month 1 → Month 2 → Month 3 retention (target >60% retain through Month 3)
- [ ] Product iteration based on feedback (flavor SKU test, packaging improvements — M5, M8)
- [ ] Influencer seeding (5-10 micro-influencers, product-only, FTC compliance package — M23)
- [ ] Financial model updated with actuals (M3 scenario validation)

**Day 90 Assessment**:
- **Strong PMF Signal**: $10K+ revenue, 100+ orders, CAC $30-50, ROAS >2.5, subscription >25%, NPS >40% "very disappointed", Month 2 repeat >10% → PROCEED to Scale Phase (Month 4-6)
- **Developing PMF**: $5K-10K revenue, CAC $50-70, subscription 15-25%, repeat 5-10% → continue optimizing, delay scale phase 30-60 days
- **Weak/No PMF**: <$5K revenue, CAC >$80, subscription <15%, repeat <5%, NPS <30% → reassess product/market/positioning (potential pivot or kill)

---

## Day 91-180: PMF VALIDATION (Scale Prep)

### Theme: "Prove It Twice"
**Goal**: $30K-60K revenue (Months 4-6 combined), 300-600 orders, reproducible unit economics, platform diversification
**Owner**: Caio + 1-2 hires (Ads Specialist, CX Lead)
**Success Criteria**: LTV:CAC >3.0, Channel Concentration <50% Meta, MER >2.0, Subscription >30%, Churn <15%
**Kill Criteria**: LTV:CAC <2.0 sustained, Cash Runway <2 months, Gross Margin <55% (CoA-validated), Regulatory violation (FDA/FTC warning letter)

---

### Month 4-5: Diversification + Team

**Hiring** *(M1, M31)*
- [ ] Part-time Ads Specialist hired ($2K-4K/month) if ad spend >$5K/month
- [ ] CX tool selected (Gorgias/Richpanel, $60-300/month — M20)
- [ ] Bookkeeping automated (Synder or A2X, monthly reconciliation — M25)

**Channel Expansion** *(M13, M28)*
- [ ] YouTube Shorts/TikTok scaling if CAC competitive ($500-1500/month)
- [ ] Google Shopping free listings + PMax campaign ($500-1000/month)
- [ ] Influencer partnerships (2-3 paid deals if seeding showed >1.5x ROAS — M23)
- [ ] Content SEO (2 posts/month, marine plasma education — M16)

**Product Iteration** *(M5, M8)*
- [ ] Flavor variant test (lemon-lime SKU if unflavored feedback is "too salty")
- [ ] Packaging v2 if unboxing issues flagged
- [ ] CoA-validated mineral profile locked (no more "TBD — requires supplier data")

**Financial Ops** *(M3, M25, M30)*
- [ ] 13-week cash forecast updated weekly
- [ ] Unit economics dashboard (LTV, CAC, contribution margin by channel)
- [ ] Monthly Business Review (Survival Five scorecard — 1 hour max)

---

### Month 6: Pre-Scale Readiness

**Operational Gates** *(M24, M36)*
- [ ] 3PL transition if volume >200 orders/month (cost vs. founder time trade-off)
- [ ] Inventory model validated (21-day safety stock + restock lead time formula — M6)
- [ ] SOPs documented for all repeatable processes (fulfillment, CX, ad ops — M35)

**Phase Gate Checklist: LAUNCH → PMF** *(see Phase Checklists section)*
- [ ] 6-month revenue >$30K (validates demand)
- [ ] LTV:CAC >3.0 (validates profitability path)
- [ ] Subscription attach >25% (validates retention model)
- [ ] NPS >40% "very disappointed" (validates product-market fit)
- [ ] Churn <15% Month 1 (validates retention quality)
- [ ] Gross Margin >60% (CoA-validated, not estimate)
- [ ] Cash Runway >3 months (safety buffer for scale phase)

**Day 180 Decision**:
- **PASS → SCALE PHASE**: All gates met, proceed to Month 7-12 (Scale execution)
- **PARTIAL PASS**: 5-6 gates met, address gaps in Month 7 before heavy spend
- **FAIL**: <4 gates met, reassess strategy or consider graceful wind-down (M0 kill criteria review)

---

## Day 181-365: SCALE PHASE (PMF → Growth)

### Theme: "Systematic Growth"
**Goal**: $100K-200K revenue (Year 1 total), 1000-2000 orders, 500-1000 active subscriptions, team of 3-5
**Owner**: Caio + Ads Lead + CX Lead + (optional) Ops Coordinator
**Success Criteria**: MER >2.5, LTV:CAC >4.0, Subscription Revenue >40% of total, EBITDA breakeven or path visible
**Kill Criteria**: Contribution Margin negative 2 consecutive months, Churn >20%, Cash out in <1 month, Major product recall

---

### Month 7-9: Scaling Infrastructure

**Team Expansion** *(M1, M31)*
- [ ] Full-time Ads Lead ($50K-70K/year or 15-20% equity)
- [ ] CX Lead (part-time → full-time if support tickets >100/month)
- [ ] Contractor pool (UGC creators, graphic designers — M12, M23)

**Ad Spend Scaling** *(M13)*
- [ ] $10K-25K/month across Meta, TikTok, Google, YouTube
- [ ] Tiered scaling by conversion volume (40-50% increases if >100 conversions/week)
- [ ] Platform diversification <50% Meta dependency (resilience against account bans)
- [ ] Retargeting optimization (DPA for cart abandoners, email-synced audiences)

**Creative Machine** *(M11, M12)*
- [ ] 3-tier creative replenishment: derivatives (weekly), new concepts (biweekly), high-production (monthly)
- [ ] Winner rate 10-20% (most ads fail, few winners scale — this is normal)
- [ ] Quarterly library audit (retire fatigued creative, preserve top performers)

**Retention Engineering** *(M19, M21, M22)*
- [ ] Churn mitigation flows (pause subscription nudges, win-back campaigns)
- [ ] Referral program gamification (tiered rewards for 3+ referrals)
- [ ] Community pilot (private Facebook group or Discord for power users)

---

### Month 10-12: Operational Excellence

**Financial Rigor** *(M3, M25, M30)*
- [ ] Monthly P&L review (actual vs. forecast variance <15%)
- [ ] Cash flow management (30-day AR/AP aging, prepay inventory)
- [ ] Fundraising prep if needed (M4 pitch deck, investor outreach for $30-50K SAFE)

**Product & Brand Evolution** *(M5, M8)*
- [ ] SKU expansion (2-3 flavors live if demand validated)
- [ ] Subscription box variant (30-day supply, premium unboxing)
- [ ] Brand maturation (Challenger → Category Ownership positioning — M8 Phase 2)

**Market Expansion Evaluation** *(M28)*
- [ ] Amazon feasibility (S&S vs. D2C price parity, long-tail PPC strategy)
- [ ] B2B pilot (2-3 gym/wellness center accounts, auto-reorder model)
- [ ] International feasibility (Canada easy, Europe requires regulatory review)

**Year 1 Closeout (Day 365)**:
- [ ] Annual review: revenue, cohort retention, team performance, strategic pivots
- [ ] Year 2 planning: scaling budget, hiring roadmap, product roadmap
- [ ] Investor update (if fundraising active — M4 quarterly cadence)
- [ ] Archive Year 1 data, lock OpKits for reuse in other Trades

---

## Quarterly Themes Summary

| Quarter | Theme | Revenue Target | Key Milestone | Exit Criteria |
|---------|-------|---------------|---------------|---------------|
| **Q1 (Day 1-90)** | Launch → Learning | $5K-15K | First 100 orders, validated CAC | CAC <$50, Subscription >20% |
| **Q2 (Day 91-180)** | PMF Validation | $30K-60K | LTV:CAC >3.0, NPS >40% | Pass 6-gate PMF checklist |
| **Q3 (Day 181-270)** | Scale Prep | $50K-100K | $10K+ MRR, team of 3-5 | MER >2.5, Churn <15% |
| **Q4 (Day 271-365)** | Growth + Expansion | $50K-100K | 500+ active subs, SKU expansion | EBITDA breakeven path visible |

---

## Rolling 30-Day Lock Protocol

**Every Monday (Week Start)**:
- [ ] Review prior week actuals vs. plan (revenue, orders, CAC, MER)
- [ ] Lock next 7 days with task-level granularity (who/what/when)
- [ ] Update days 8-30 with any new information (budget shifts, blockers, pivots)
- [ ] Flag kills or escalations (if any metric violates kill criteria)

**Every Month Start**:
- [ ] Lock next 30 days completely (every task assigned, dated, owned)
- [ ] Update days 31-90 directionally (themes, major milestones, budget)
- [ ] Refresh days 91-365 strategically (quarterly goals, hiring, product roadmap)
- [ ] Conduct Survival Five MBR (5 metrics, 4 questions, <1 hour — M25, M30)

---

## Intelligence Gaps & Validation Paths

| Gap | Current Grade | Upgrade Path |
|-----|--------------|--------------|
| Actual CAC vs. benchmarks | C (industry benchmarks $30-60 for supplements) | A: Launch actuals by Week 4 |
| IonWave-specific retention curve | D (generic cohort decay assumptions) | B: Month 3 actuals, A: Month 6+ data |
| Supplier lead times | C (21-day assumption from M6) | A: Week 1 CoA receipt validates |
| 3PL cost vs. self-fulfill breakpoint | C (industry heuristic 200 orders/month) | B: Month 3 3PL quotes |
| Founder time vs. hire timing | D (guess) | B: Month 2-3 actuals show bottleneck |
| Market expansion readiness | D (speculative) | C: Month 6 if PMF gates pass |

**Upgrade trigger**: All gaps upgrade to A/B by Month 6 actuals. If any gap remains D at Month 6, it's a strategic blind spot requiring research or expert consultation.

---

## Cross-References

**Depends on**:
- M0 (Trade Thesis) — strategic direction, market positioning, kill criteria
- M3 (Financial Model) — revenue targets, unit economics assumptions, cash runway
- M5-M24 (All operational TUPs) — execution plans pull from every TUP's Day 1 readiness gates

**Feeds into**:
- M30 (Analytics & Dashboards) — MVD metrics tracked weekly against these plans
- M35 (this doc) feeds M40 (Navigation) — execution plans inform command center design
- Session logs + retrospectives — actual vs. plan variance informs OpKit refinement

---

**Sources**:
- [30/60/90 framework for 2026](https://medium.com/@dcirl/building-your-2026-strategy-why-the-next-30-days-matter-more-than-the-next-12-months-845cf5ce53c7)
- [Startup PMF levels & scaling criteria](https://www.firstround.com/levels)
- [PMF timeline expectations 2026](https://ideaproof.io/questions/time-to-achieve-pmf)
- [D2C launch checklist 2026](https://www.shopify.com/blog/shopify-store-launch-checklist)
