# M17: Email Flow Architecture

**TUP**: M17 — Email & SMS
**Version**: 1.0.0
**Date**: 2026-02-07
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 421, 422, 446; Klaviyo DTC benchmarks

---

## 1. Customer Lifecycle Stages

Every customer moves through a lifecycle. Email flows are triggered by transitions between stages.

```
VISITOR → SUBSCRIBER → FIRST-TIME BUYER → REPEAT BUYER → SUBSCRIBER (subscription) → ADVOCATE
   ↓           ↓              ↓                  ↓               ↓                    ↓
 Browse    Welcome        Post-Purchase      Replenish      Retention            Referral
 Abandon   Series         + Review           + Upsell       + VIP                + Community
           Cart Recovery  Onboarding         Sub Offer      Churn Prevent
```

**Stage Definitions:**

| Stage | Definition | Primary Email Goal | Key Metric |
|-------|-----------|-------------------|------------|
| 1. Visitor | Browsed site, no email | Capture email (pop-up, lead magnet) | Email capture rate >3% [Confidence: B \| Source: Klaviyo benchmarks \| Date: 2025] |
| 2. Subscriber | Opted in, $0 spent | Convert to first purchase | Welcome→purchase CVR >8% [Confidence: B \| Source: Klaviyo DTC avg \| Date: 2025] |
| 3. First-Time Buyer | 1 purchase completed | Onboard, reduce buyer's remorse, drive review | NPS >8, review rate >15% [Confidence: C \| Source: industry avg \| Date: 2025] |
| 4. Repeat Buyer | 2+ purchases, not subscribed | Convert to subscription | Sub conversion >12% [Confidence: C \| Source: DTC supplement avg \| Date: 2025] |
| 5. Subscriber | Active subscription | Retain, reduce churn, upsell | Monthly churn <8% [Confidence: B \| Source: subscription DTC benchmarks \| Date: 2025] |
| 6. Advocate | 3+ purchases OR $150+ LTV | Referral, UGC, community | Referral opt-in >20% [Confidence: C \| Source: best-in-class DTC \| Date: 2025] |
| 7. At-Risk | No purchase 60+ days | Win-back | Win-back rate >5% [Confidence: B \| Source: Klaviyo benchmarks \| Date: 2025] |
| 8. Churned | No engagement 90+ days | Sunset or re-engage | Re-engage >3% or clean list [Confidence: C \| Source: deliverability best practice \| Date: 2025] |

---

## 2. Core Email Flows — Build Order

**Founder Mode principle**: Build flows in revenue-impact order. A solo founder should NOT build all flows before launch. Build the top 3, launch, then add the rest in Month 2-3.

### Priority 1 — Build Before Launch (Week -2 to Launch)

| # | Flow | Trigger | Emails | Revenue Impact | Why First |
|---|------|---------|--------|---------------|-----------|
| 1 | **Abandoned Cart** | Cart created, no purchase in 1hr | 3 + 1 SMS | 5-15% of total email revenue [Confidence: B \| Source: Klaviyo DTC avg] | Highest $ per email. Captures purchase intent that's already demonstrated. |
| 2 | **Welcome Series** | Email opt-in (no purchase) | 5 | Drives first purchase from subscribers | Sets brand tone. Delivers on popup/lead magnet promise. |
| 3 | **Post-Purchase (basic)** | First purchase completed | 3 (confirm + ship + check-in) | Reduces refunds, drives reviews | Without this, customers feel abandoned after buying. |

**Minimum Viable Email Infrastructure at launch = these 3 flows.**

### Priority 2 — Build in Month 2 (Weeks 5-8)

| # | Flow | Trigger | Emails | Revenue Impact |
|---|------|---------|--------|---------------|
| 4 | **Post-Purchase (extended)** | Expand basic to full 7-email | 7 | Review collection, subscription upsell |
| 5 | **Abandoned Checkout** | Checkout started, no completion | 3 | 3-8% of email revenue [Confidence: C \| Source: Klaviyo] |
| 6 | **Replenishment** | Projected product depletion (~Day 25) | 2 + 1 SMS | 10-20% repeat rate lift [Confidence: C \| Source: subscription DTC avg] |

### Priority 3 — Build in Month 3+ (Weeks 9-12)

| # | Flow | Trigger | Emails |
|---|------|---------|--------|
| 7 | **Win-Back** | No purchase in 60 days | 4 |
| 8 | **Browse Abandonment** | Product page view, no cart in 24hr | 2 |
| 9 | **Subscription Upsell** | 2nd purchase completed | 2 |
| 10 | **VIP Recognition** | 3rd purchase OR $150+ LTV | 1 + surprise |
| 11 | **Review Solicitation** | 14 days post-delivery | 2 + 1 SMS |
| 12 | **Referral Activation** | VIP recognized | 2 + in-package |

### Priority 4 — Build When Data Supports (Month 4+)

| # | Flow | Trigger | Emails |
|---|------|---------|--------|
| 13 | **Sunset** | No email engagement in 90 days | 2 |
| 14 | **Churn Intervention** | Churn risk score >70 | 1 + CS outreach |
| 15 | **Birthday/Anniversary** | Date-based | 1 |

---

## 3. Master Automation Map

All 12 production automations with triggers, channels, timing, and goal metrics:

| Automation | Trigger | Stage Transition | Channel | Timing | Content Arc | Goal Metric |
|-----------|---------|-----------------|---------|--------|------------|-------------|
| Welcome Series | Email opt-in (no purchase) | 2→3 | Email (5) | Day 0, 1, 3, 5, 7 | Brand story → Education → Social proof → Offer → Check-in | First purchase CVR >8% |
| Abandoned Cart | Cart created, no purchase 1hr | 3→4 | Email (3) + SMS (1) | 1hr, 24hr, 72hr | Reminder → Objection handling → Urgency + discount | Recovery rate >10% |
| Browse Abandonment | Product page view, no cart 24hr | 2→3 | Email (2) | 24hr, 72hr | Product highlight → Social proof | Cart creation rate >5% |
| Post-Purchase | First purchase completed | 4→5 | Email (7) | Day 0, 1, 7, 14, 21, 25, 30 | Confirm → Onboard → Science → Remind → Review → Milestone | NPS >8, Review rate >15% |
| Replenishment | Projected depletion (~Day 25) | 5→6 | Email (2) + SMS (1) | 5 days before, 2 days before, day of | Reminder → Subscription offer → Last chance | Repeat rate >35% |
| Subscription Offer | 2nd purchase completed | 6→6 | Email (2) | Day 1, 5 after 2nd order | Subscribe & save pitch → Value comparison | Sub conversion >12% |
| VIP Recognition | 3rd purchase OR $150+ LTV | 6→7 | Email (1) + surprise | After qualifying event | Thank you + exclusive offer + referral invite | Referral opt-in >20% |
| Referral Activation | VIP recognized | 7→7 | Email (2) + in-package | With VIP email + next shipment | How it works → Share link → Reward reminder | Referral share rate >15% |
| Review Solicitation | 14 days post-delivery | 5→7 | Email (2) + SMS (1) | Day 14, 21, 28 | Review request → Photo request → Incentive | Review rate >20% |
| Win-Back | No purchase 60 days | 8→4 | Email (4) | Day 60, 75, 90, 105 | Miss you → What's new → Big offer → Sunset | Win-back rate >5% |
| Sunset | No email engagement 90 days | 8→9 | Email (2) | Day 90, 97 | Want to stay? → Final goodbye | Re-engage >3% or clean list |
| Churn Intervention | Churn risk score >70 | 6→8 | Email (1) + CS outreach | Within 24hr of trigger | Personal check-in, retention offer | Save rate >15% |

---

## 4. Klaviyo Setup Guide — Founder Mode

### Pre-Launch Checklist (Do these first)

- [ ] Set up Klaviyo account, connect Shopify
- [ ] Import brand assets (logo, colors, fonts) into template builder
- [ ] Create master email template (header + footer consistent across all flows)
- [ ] Set up core segments: All Subscribers, Customers, Non-Customers, VIPs
- [ ] Build Flow #1: Abandoned Cart (3 emails)
- [ ] Build Flow #2: Welcome Series (5 emails)
- [ ] Build Flow #3: Post-Purchase Basic (3 emails: confirm, ship, check-in)
- [ ] Test all 3 flows with a test profile
- [ ] Set up signup form / popup (10% off first order, or lead magnet)
- [ ] Enable Shopify integration for order events

### Month 2 Additions

- [ ] Expand Post-Purchase to full 7-email sequence
- [ ] Add Abandoned Checkout flow
- [ ] Add Replenishment reminder flow
- [ ] Begin weekly campaign sends (education content, 1x/week)
- [ ] Set up A/B testing on welcome series subject lines

### Month 3+ Additions

- [ ] Add Win-Back flow
- [ ] Add Browse Abandonment flow
- [ ] Add Subscription Upsell flow
- [ ] Set up engagement-based segmentation
- [ ] Begin bi-weekly campaign cadence if list >1,000

---

## 5. Email Cadence Rules

**Flow emails take priority over campaigns.** Klaviyo handles this with Smart Sending, but set these rules explicitly:

| Rule | Setting |
|------|---------|
| Smart Sending window | 16 hours (no contact within 16hr of last email) |
| Max emails per person per week | 5 (flows + campaigns combined) |
| Flow emails | Always send (override campaign suppression) |
| Campaign frequency | 1x/week (Month 1-2), 2x/week (Month 3+ if list >1K) |
| SMS frequency | Max 4 SMS/month per subscriber |
| Quiet hours | No SMS between 9pm-8am recipient time |

---

## 6. Benchmarks — DTC Supplement Vertical

**Realistic benchmarks for a new brand (Month 1-6, <5,000 subscribers):**

| Metric | Flow Emails | Campaign Emails |
|--------|------------|-----------------|
| Open Rate | 40-60% [Confidence: B] | 25-35% [Confidence: B] |
| Click Rate | 3-8% [Confidence: B] | 1.5-3% [Confidence: B] |
| Revenue per Recipient | $0.50-2.00 [Confidence: C] | $0.05-0.15 [Confidence: C] |
| Unsubscribe Rate | <0.3% per send [Confidence: B] | <0.5% per send [Confidence: B] |
| Spam Complaint Rate | <0.01% [Confidence: A \| Source: Klaviyo/ESP policy] | <0.01% |

**Revenue attribution targets:**

| Timeframe | Email % of Total Revenue | Source |
|-----------|------------------------|--------|
| Month 1-3 | 15-25% | [Confidence: C \| Source: Klaviyo DTC avg for new brands] |
| Month 4-6 | 25-35% | [Confidence: C \| Source: Klaviyo DTC avg] |
| Month 7-12 | 30-40% | [Confidence: B \| Source: Klaviyo mature DTC brands] |
| Mature (Year 2+) | 35-50% | [Confidence: B \| Source: Klaviyo top-quartile DTC] |

**Note:** These are realistic for a solo founder who builds the 3 priority flows before launch and adds flows monthly. Brands that launch with only a welcome popup and no flows typically see email at <10% of revenue for months.

---

## 7. Maintenance Time Budget (Dialogue Upgrade U1)

**Building a flow is not the end — maintaining it is the ongoing cost.**

| Flow | Build Time (one-time) | Monthly Maintenance | What Maintenance Includes |
|------|----------------------|--------------------|--------------------------|
| Abandoned Cart (3 emails) | 3-4 hours | 30 min/month | Check recovery rate, update discount codes, refresh copy if stale |
| Welcome Series (5 emails) | 4-6 hours | 30 min/month | Update testimonials, check conversion rate, A/B test subjects |
| Post-Purchase Basic (3 emails) | 2-3 hours | 15 min/month | Verify shipping triggers work, update tracking links |
| Post-Purchase Extended (7 emails) | 4-5 hours | 30 min/month | Update data claims, refresh review links, check upsell performance |
| Win-Back (4 emails) | 2-3 hours | 15 min/month | Update "What's New" content quarterly, check discount code validity |
| All other flows (each) | 1-2 hours | 15 min/month | Basic health checks |

**Total ongoing maintenance for 12 flows: ~3-4 hours/month.**
At Founder Mode scale (3 flows at launch), ongoing maintenance is ~1.5 hours/month. This is manageable alongside other duties.

**Monthly maintenance ritual (15 min):**
1. Check Klaviyo flow analytics dashboard
2. Note any flow with <5% open rate (deliverability issue) or <1% click rate (content issue)
3. Fix the worst-performing email in the worst-performing flow
4. Move on. Don't optimize everything at once.

---

## 8. Source of Truth Policy (Dialogue Upgrade U6)

**These markdown files are the v1.0 BUILD BLUEPRINT — not a living document.**

| Layer | Source of Truth | Purpose |
|-------|----------------|---------|
| **Strategy** (why we built it this way) | These markdown files (`data/m17/*.md`) | Reference for "why this flow exists, what it's supposed to do, what benchmarks we targeted" |
| **Execution** (what's actually live) | Klaviyo flows | The live emails, actual copy, current subject lines, real performance data |

**Once flows are built in Klaviyo:**
- Klaviyo is the source of truth for copy, timing, and structure
- These markdown files are the historical blueprint + strategic rationale
- If you change copy in Klaviyo, you do NOT need to update the markdown file
- If you fundamentally restructure a flow (add/remove emails, change strategy), update the markdown for documentation

---

## 9. Intelligence Gaps

| Gap | Current Grade | Upgrade Path | Priority |
|-----|--------------|-------------|----------|
| IonWave-specific conversion rates | D (no data) | Measure after 30 days of live data | HIGH |
| Optimal replenishment timing | C (assumes 30-day supply) | Validate with actual consumption data from first 100 customers | MEDIUM |
| Churn risk scoring model | D (placeholder) | Requires 3-6 months of subscription data to build | LOW (Month 4+) |
| SMS ROI at IonWave's scale | C (industry benchmarks) | Test with first 500 SMS subscribers | MEDIUM |
| Optimal discount escalation ladder | C (Danilo's proposed) | A/B test over 90 days: discount vs. no-discount in Cart Email 3 | HIGH |

---

*Next: See `email_segmentation.md` for segment definitions, `email_welcome_series.md` for the canonical welcome sequence.*
