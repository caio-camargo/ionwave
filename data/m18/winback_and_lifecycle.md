# M18: Win-Back & Lifecycle Automation

**TUP**: M18 — Email Lifecycle Flows
**Version**: 1.0.0
**Date**: 2026-02-09
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 444, 445, 446; Klaviyo win-back benchmarks 2026; M17 email_flow_architecture.md

---

## 1. Win-Back Flow Strategy

### When to Trigger Win-Back

For a supplement brand with a 30-day product cycle:

| Inactivity | Status | Action |
|------------|--------|--------|
| 0-30 days | Normal purchase cycle | No action needed |
| 30-60 days | Missed one reorder | Replenishment flow handles this (see post_purchase_and_retention.md) |
| **60 days** | **Win-back trigger** | **Start win-back flow — they've missed 2 reorders** |
| 90 days | At risk of permanent churn | Final win-back attempt |
| 120 days | Lapsed | Sunset evaluation |

**IonWave recommendation**: Trigger win-back at **60 days** of no purchase (not 90). For a 30-day consumable, 60 days = 2 missed reorder windows. The customer is actively disengaging. [Confidence: B | Source: Klaviyo DTC supplement heuristic + Danilo tabs 444/445]

### Win-Back Performance Benchmarks

| Metric | Average | IonWave Target |
|--------|---------|----------------|
| Win-back open rate | Up to 57% | >40% |
| Win-back click rate | Up to 11% | >8% |
| Win-back conversion rate | 2-5% | >5% |
| Re-acquisition cost vs. new | 5x cheaper | Track via MER |

[Confidence: B | Source: Klaviyo + Omnisend win-back benchmarks]

---

## 2. Win-Back Sequence (4 Emails)

### Flow Structure

| Email | Timing | Subject | Strategy | Incentive |
|-------|--------|---------|----------|-----------|
| WB1 | Day 60 | We miss you, {{first_name}} 💙 | Emotional, remind of value | None |
| WB2 | Day 75 | A lot has changed... | What's new, social proof | 15% off |
| WB3 | Day 90 | {{first_name}}, here's 25% off | Significant discount, strong CTA | 25% off |
| WB4 | Day 105 | Should we say goodbye? | Final attempt, sunset warning | 25% (last chance) |

**Discount escalation is intentional**: Start with emotion (no discount), graduate to highest offer. Segment by LTV for efficiency — high-value customers get the bigger discount earlier. [Confidence: B | Source: DTC win-back best practice]

---

### Email WB1: We Miss You (Day 60)

**Subject**: We miss you, {{first_name}} 💙
**Preview**: It's been a while

---

Hey {{first_name}},

It's been a while since we've seen you.

Everything okay?

Just wanted to check in and remind you that sustained energy and real hydration is just one sachet away.

Come back and try it again:

**[SHOP IONWAVE →]**

Miss having you in the community.

— Nilo

---

### Email WB2: What's New (Day 75)

**Subject**: A lot has changed...
**Preview**: New products, new results, same mission

---

Hey {{first_name}},

Since you've been away, here's what's been happening at IonWave:

**WHAT'S NEW:**
→ [New product/feature 1 — dynamic content block]
→ [Customer milestone — e.g., "10,000 customers" — dynamic content block]
→ [New review/testimonial — dynamic content block]

We've missed having you as part of this.

Here's 15% off to make it easy to come back:

**Code: MISSYOU15**

**[CLAIM 15% OFF →]**

Valid for 14 days.

— Nilo

---

### Email WB3: Big Offer (Day 90)

**Subject**: {{first_name}}, here's 25% off to come back
**Preview**: Our biggest discount — just for you

---

Hey {{first_name}},

I really want you to experience IonWave again.

So here's our biggest discount: **25% off.**

**Code: COMEBACK25**

**[CLAIM 25% OFF →]**

Valid for 7 days only.

— Nilo

P.S. If something wasn't right last time, reply and let me know. I'd love to make it right.

---

### Email WB4: Sunset Warning (Day 105)

**Subject**: Should we say goodbye?
**Preview**: Last chance before we stop emailing

---

Hey {{first_name}},

It's been over 3 months since your last order.

I don't want to keep emailing you if you're not interested anymore. That's not fair to either of us.

**TWO OPTIONS:**

1. **Stay on the list** — click here and I'll keep sending you updates, offers, and health tips: **[YES, KEEP ME →]**

2. **Say goodbye** — no hard feelings. Just don't click anything and we'll quietly remove you from our email list in 7 days.

If you want one more round of IonWave, your **25% off code (COMEBACK25)** is still active for 7 more days.

Either way — thanks for being part of this, even briefly.

— Nilo

---

## 3. Pre-Churn Intervention (U7)

**The gap**: Between replenishment flow (Day 23-30) and win-back (Day 60), there's a full month of silence. If a subscriber cancels or their payment fails, you need an IMMEDIATE response — not a 30-day wait.

### Subscription Cancel / Payment Failure Triggers

| Event | Trigger Source | Response Time | Email |
|-------|---------------|---------------|-------|
| **Payment failure** | Shopify subscription webhook → Klaviyo | Within 1 hour | "Your subscription payment didn't go through" — helpful, not alarming |
| **Subscription cancelled** | Shopify subscription webhook → Klaviyo | Within 2 hours | "We're sorry to see you go" + reason-specific offer |
| **Subscription paused** | Shopify subscription webhook → Klaviyo | Within 24 hours | "Your subscription is paused" + "ready when you are" |

### Cancel Reason Segmentation

When a subscriber cancels, Shopify captures a reason. Use it to personalize the retention email:

| Cancel Reason | Email Response | Offer |
|---------------|---------------|-------|
| "Too expensive" | Downgrade option (smaller quantity, less frequent) | Switch to 60-day cadence or smaller pack |
| "Not seeing results" | Extended timeline education (some bodies take 4-6 weeks) | Free extra 2-week supply |
| "Switching to competitor" | Competitive comparison, unique differentiator (78 minerals vs. 3-4) | 25% off next 2 shipments |
| "Don't need it anymore" | Seasonal offer, gift option | Referral code for friends |
| No reason given | Generic "we miss you" + founder personal note | 15% off to reactivate |

**Klaviyo setup**: Create a flow triggered by `Subscription Cancelled` event. Use conditional split on `cancel_reason` property. Requires Shopify subscription app (Recharge, Skio, or Loop) integration with Klaviyo.

[Confidence: B | Source: DTC subscription churn intervention best practices]

---

## 4. Sunset / List Hygiene Flow

### Why Sunsetting Matters

Only 24% of email marketers have a sunset policy. Having one is a competitive advantage for deliverability. [Confidence: A | Source: Mailjet 2025 report]

| Problem | Impact |
|---------|--------|
| Sending to unengaged subscribers | Lowers domain reputation → emails land in spam for EVERYONE |
| Gmail/Yahoo engagement signals | ISPs use engagement to determine inbox vs. spam placement |
| ESP cost | Klaviyo charges by list size. Dead subscribers = wasted money |
| Apple MPP inflation | Open rates are unreliable. Must use clicks + purchases as engagement signals |

### Engagement Tiers

| Tier | Definition | Action |
|------|-----------|--------|
| **Champion** | Opened/clicked in last 30 days OR purchased in last 60 days | Full email cadence |
| **Active** | Opened/clicked in last 60 days | Full email cadence |
| **Waning** | No opens/clicks in 60-90 days, but has purchased before | Reduce to 1 email/month (best content only) |
| **Dormant** | No opens/clicks in 90-120 days | Enter win-back flow (if not already completed) |
| **Lapsed** | No engagement in 120+ days AND win-back completed with no response | Suppress from all marketing. Keep for transactional only |

[Confidence: B | Source: ESP deliverability best practices + Mailgun sunset policy guides]

### Sunset Process

```
1. IDENTIFY: Segment subscribers with no clicks in 90+ days
                ↓
2. RE-ENGAGE: Send 2-email "Do you still want to hear from us?" series
                ↓
3. EVALUATE: Did they click "Yes, keep me"?
   YES → Move to Active tier, full cadence
   NO  → Continue to Step 4
                ↓
4. SUPPRESS: Move to suppression list (pause all marketing, 30 days)
                ↓
5. FINAL CHECK: Any website visit or purchase in 30-day suppression?
   YES → Reactivate to Waning tier
   NO  → Remove from active marketing list
                ↓
6. RETAIN: Keep in system for transactional emails and compliance records
```

**Frequency**: Run sunset evaluation **monthly**. Build as automated Klaviyo segment + flow. [Confidence: B | Source: ESP best practice]

**Legal note**: Suppress rather than delete. GDPR data minimization + CAN-SPAM compliance records require retaining the relationship record even after marketing suppression.

---

## 5. Master Lifecycle Automation Map

Every automated touchpoint in the customer journey. This is the orchestration layer that connects all M18 flows:

| Automation | Trigger | Stage Transition | Channel | Timing | Goal Metric |
|-----------|---------|-----------------|---------|--------|-------------|
| **Welcome Series** | Email opt-in (no purchase) | Visitor → Subscriber | Email (5-7) | Day 0-14 | First purchase CVR >8% |
| **Abandoned Cart** | Cart created, no purchase 1hr | Subscriber → Buyer intent | Email (3) + SMS (1, Month 3+) | 1hr, 24hr, 72hr | Recovery rate >5% |
| **Browse Abandonment** | Product page view, no cart 24hr | Visitor → Subscriber | Email (2) | 24hr, 72hr | Cart creation rate >5% |
| **Post-Purchase** | First purchase completed | Buyer → Loyal customer | Email (7) | Day 0-60 | NPS >8, Review rate >15% |
| **Replenishment** | Projected product depletion | Buyer → Repeat buyer | Email (3) + SMS (1, Month 3+) | Day 23, 28, 30 | Repeat rate >35% |
| **Subscription Offer** | 2nd purchase completed | Repeat → Subscriber | Email (2) | Day 1, 5 after 2nd order | Sub conversion >12% |
| **VIP Recognition** | 3rd purchase OR $150+ LTV | Subscriber → Advocate | Email (1) + surprise | After qualifying event | Referral opt-in >20% |
| **Referral Activation** | VIP recognized | Advocate → Advocate | Email (2) + in-package card | With VIP email + next shipment | Referral share rate >15% |
| **Review Solicitation** | 14 days post-delivery | Buyer → Advocate | Email (2) + SMS (1, Month 3+) | Day 14, 21, 28 | Review rate >20% |
| **Win-back** | No purchase 60 days | At-Risk → Buyer or Churned | Email (4) + ad retarget | Day 60, 75, 90, 105 | Win-back rate >5% |
| **Sunset** | No email engagement 120 days | Churned → Suppressed | Email (2) | Day 120, 127 | Re-engage >3% or clean |
| **Churn Intervention** | Churn risk score >70 | Subscriber → At-Risk | Email (1) + CS outreach | Within 24hr of trigger | Save rate >15% |

[Confidence: B | Source: Danilo tab 446 + M17 email_flow_architecture.md lifecycle stages]

---

## 6. Flow Priority & Build Schedule

Aligned with M17's Founder Mode principle: build in revenue-impact order.

| Priority | Flow | Build When | Effort |
|----------|------|-----------|--------|
| **P1** | Abandoned Cart | Pre-launch (Week -2) | 3 emails, 2 hours |
| **P1** | Welcome Series (Track A + B) | Pre-launch (Week -2) | 12 emails, 4 hours |
| **P1** | Post-Purchase (basic: PP1-PP3) | Pre-launch (Week -1) | 3 emails, 1 hour |
| **P2** | Post-Purchase (full: PP4-PP7) | Month 1-2 | 4 emails, 2 hours |
| **P2** | Replenishment | Month 2 | 3 emails, 1 hour |
| **P2** | Browse Abandonment | Month 2 (when traffic >500/mo) | 2 emails, 1 hour |
| **P3** | Subscription Offer | Month 2-3 (when repeat buyers exist) | 2 emails, 1 hour |
| **P3** | Win-back | Month 3 (when 60-day cohort exists) | 4 emails, 2 hours |
| **P3** | VIP Recognition | Month 3+ (when VIPs exist) | 1 email + insert, 1 hour |
| **P3** | Referral Activation | Month 3+ (after VIP flow) | 2 emails, 1 hour |
| **P4** | Sunset / List Hygiene | Month 4 (when list >2,000) | 2 emails + automation, 1 hour |
| **P4** | Churn Intervention | Month 6+ (when churn data exists) | 1 email + CS process, 2 hours |
| **P4** | Review Solicitation (dedicated) | Month 2 (supplement PP4) | 3 emails, 1 hour |

**Total**: 42 emails across 13 automated flows. Build P1 in Week -2 to -1. P2 in Month 1-2. P3 in Month 3. P4 in Month 4-6.

---

## 7. Flow Conflict Resolution

When a customer is eligible for multiple flows simultaneously, use these priority rules:

| Conflict | Resolution |
|----------|-----------|
| Welcome + Cart Abandoned | Delay cart AC1 by 4 hours to avoid Smart Sending suppression |
| Post-Purchase + Welcome Track A | EXIT Track A immediately, start Post-Purchase |
| Win-back + Replenishment | Win-back takes priority (60+ day gap means replenishment already failed) |
| Win-back + Sunset | Complete win-back first. If no response → enter sunset |
| Post-Purchase + Review Solicitation | Post-Purchase PP4 IS the review request. Skip dedicated review flow for first-time buyers |
| Any flow + Flash Sale campaign | Campaign sends regardless. Flow emails delay by 24 hours via Smart Sending |

[Confidence: B | Source: Klaviyo Smart Sending documentation + DTC flow architecture best practices]

---

## 8. Engagement Segments for Campaign Targeting (U11)

**Critical deliverability protection**: Flow emails send to everyone (they're triggered by actions). But CAMPAIGN emails (newsletters, promotions, announcements) must ONLY target engaged subscribers.

### Required Klaviyo Segments

| Segment Name | Definition | Use For |
|-------------|-----------|---------|
| **Engaged 30d** | Opened OR clicked in last 30 days, OR purchased in last 30 days | Primary campaign audience. All regular sends target this segment |
| **Engaged 90d** | Opened OR clicked in last 90 days, OR purchased in last 60 days | Extended audience for major announcements, product launches |
| **Unengaged 90d+** | No opens, clicks, OR purchases in 90+ days | NEVER send campaigns. Flow emails only (win-back, sunset) |
| **VIP** | 3+ purchases OR $150+ LTV | Premium offers, early access, referral invitations |
| **Subscribers (Active)** | Active subscription status in Shopify | Subscription-specific communications (PP6, PP7 campaigns) |

### Campaign Targeting Rules

1. **Default campaign audience**: Engaged 30d segment
2. **Product launch / major announcement**: Engaged 90d segment (one-time exception)
3. **Flash sale**: Engaged 30d only (protect deliverability)
4. **Monthly newsletter**: Engaged 90d segment
5. **NEVER**: Send campaigns to full list including unengaged subscribers

**Apple MPP caveat**: Do not rely solely on open rates for engagement. Apple Mail Privacy Protection inflates opens. Weight clicks and purchases higher in segment definitions. [Confidence: A | Source: Klaviyo deliverability best practices + Apple MPP data]

---

## 9. Klaviyo-Specific Technical Notes

### New Klaviyo Features to Leverage (2025-2026)

| Feature | How to Use | Impact |
|---------|-----------|--------|
| **Personalized Send Time** | Enable on all flows — AI optimizes per-recipient timing | +10-15% open rate improvement |
| **Channel Affinity** | AI determines if customer prefers email vs. SMS | Reduces channel fatigue |
| **Exit Conditions** | Auto-stop flow when customer converts | Prevents "buy now" emails after purchase |
| **Multi-Touch Attribution** | Real-time revenue attribution beyond last-click | More accurate flow ROI measurement |
| **AI Image Remix** | Auto-generate email creative variations | Faster A/B testing |

[Confidence: B | Source: Klaviyo product announcements 2025-2026]

### Smart Sending Configuration

| Setting | Value | Why |
|---------|-------|-----|
| Minimum gap between emails | 16 hours | Prevents email fatigue from flow overlaps |
| Campaign override | ON for campaigns, OFF for transactional | Campaigns always send; transactional never suppressed |
| Smart Sending scope | Within flows only | Don't let flow-to-campaign conflicts suppress critical messages |

---

## 10. Cross-TUP References

- **M17 email_flow_architecture.md**: Master lifecycle stages and flow priority framework. M18 provides the email content within M17's architecture.
- **M17 sms_strategy.md**: SMS channel deferred to Month 3+. Win-back is email-only. Cart recovery gets 1 SMS at 48hr (Month 3+).
- **M17 email_winback.md**: M17 has win-back framework. M18 provides the actual IonWave win-back email copy.
- **M9 operations_governance.md**: List hygiene and sunset processes feed into M9's operational cadence (monthly governance).
- **M30** (Analytics): All flow metrics (recovery rate, conversion, RPR) feed MVD dashboard.
- **M19** (Subscription): Subscription offer flow and churn intervention align with M19 subscription model.

---

*Win-back and lifecycle automation complete the email flow ecosystem. Build P1 flows before launch, expand through P4 by Month 6. Total: 42 emails across 13 automated flows.*
