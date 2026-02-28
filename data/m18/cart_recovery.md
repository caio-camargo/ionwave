# M18: Cart Recovery Email Flows

**TUP**: M18 — Email Lifecycle Flows
**Version**: 1.0.0
**Date**: 2026-02-09
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 436, 440, 441; Klaviyo abandoned cart benchmarks 2026; M17 email_flow_architecture.md

---

## 1. Cart Recovery Strategy

### Why This Flow Matters Most

Abandoned cart is the **highest-revenue automated flow** in email marketing:

| Metric | Industry Average | Top 10% | IonWave Target |
|--------|-----------------|---------|----------------|
| Cart abandonment rate | 70-75% | — | Expect 70%+ at launch |
| Recovery/conversion rate | 3.33% | 7.69% | >5% by Month 3 |
| Revenue per recipient | $3.65 | $28.89 | >$5.00 |
| Open rate | 43-50% | 55%+ | >50% |
| Click rate | 5-10% | 15%+ | >8% |

[Confidence: A | Source: Klaviyo abandoned cart benchmarks + Omnisend + Baymard Institute]

**Key insight**: 3-email series generates **69% more orders** than a single email (24.94 vs. 14.76 orders per campaign, Omnisend data). 3 emails is the sweet spot — 4th email shows diminishing returns for most brands. [Confidence: A | Source: Omnisend cart recovery data]

---

## 2. Flow Architecture

### Sequence Overview

| Email | Timing | Strategy | Discount? | Conversion Share |
|-------|--------|----------|-----------|-----------------|
| AC1 | 1 hour | Simple reminder — helpful, not pushy | **No** | 20-25% of total recoveries |
| AC2 | 24 hours | Objection handling — FAQ format | **No** (or optional 5%) | 15-20% of total recoveries |
| AC3 | 72 hours | Urgency + incentive — last chance | **Yes** (free shipping) | 8-12% of total recoveries |

[Confidence: B | Source: Danilo tabs 436/440/441 merged + Klaviyo timing recommendations]

### Discount Escalation Rules

**Do NOT lead with a discount.** Email 1 should never offer a discount — this trains customers to abandon carts intentionally.

| Email | Incentive | Rationale |
|-------|-----------|-----------|
| AC1 (1hr) | None | Most 1-hour recoveries happen from simple reminder |
| AC2 (24hr) | None or 5% max | Handle objections first. Discount only if conversion data supports it |
| AC3 (72hr) | Free shipping (code: FIRSTBOX) | Free shipping > percentage discount for first-time buyers. Less margin erosion |

**Quarterly review**: If AC1+AC2 recovery rate exceeds 4%, keep AC3 discount-free. Only add discount if recovery rate < 3% after first 200 entries. [Confidence: C | Source: DTC cart recovery optimization heuristic]

**Never offer more than free shipping in cart recovery.** Reserve 10-15% discounts for win-back flows (higher intent deficit). 25% only for win-back Email 3+. This prevents discount expectation creep. [Confidence: B | Source: DTC margin management best practice]

---

## 3. IonWave Cart Recovery Emails

### Email AC1: Simple Reminder (1 Hour)

**Subject**: You left something behind...
**Preview**: Your IonWave is waiting

---

Hey {{first_name}},

Looks like you got interrupted.

Your IonWave is still in your cart:

**{{product_name}} — {{quantity}}**
{{price}}

**[COMPLETE YOUR ORDER →]**

Quick reminder of what you're getting:

✓ 78 ionic minerals (not 3-4 like synthetic brands)
✓ 98% bioavailable (vs ~10% for pills)
✓ 30-day feel-the-difference guarantee
✓ Free shipping on subscriptions

Your cart will stay saved for 72 hours.

— Nilo

P.S. Questions holding you back? Just reply. We're here.

---

### Email AC2: Objection Handling (24 Hours)

**Subject**: Still thinking about it?
**Preview**: Let me answer the question you're probably asking...

---

Hey {{first_name}},

Still on the fence? Totally fair.

Here are the questions most people have before they try IonWave:

**"DOES IT ACTUALLY TASTE OKAY?"**
Mildly mineral, like high-quality spring water. Most people drink it straight, some add it to juice. Either works.

**"HOW LONG UNTIL I FEEL SOMETHING?"**
Most customers notice more stable energy within 3-7 days. Full benefits typically show up over 2-4 weeks.

**"IS THIS JUST EXPENSIVE SEAWATER?"**
Fair question. Here's the difference: most customers feel noticeably more stable energy within 3-7 days. If tap water or cheap electrolytes did that, you wouldn't be here. 78 minerals in the exact ratios your body recognizes — that's why it works.

**"WHAT IF IT DOESN'T WORK FOR ME?"**
30-day guarantee. Feel the difference or get every penny back. No questions, no hassle. We've had less than 3% of customers ask for a refund.

Still have questions? Hit reply. I'll answer personally.

Or if you're ready:

**[COMPLETE YOUR ORDER →]**

— Nilo

---

### Email AC3: Last Chance + Incentive (72 Hours)

**Subject**: Last chance: your cart expires tonight
**Preview**: Plus: free shipping on us

---

Hey {{first_name}},

Your IonWave cart expires in 24 hours.

After that, you'll need to start over.

Before it clears, I wanted to make this easy:

**I've added FREE SHIPPING to your cart.**

No code needed. It's already applied. Just click through and complete your order.

Here's what's waiting for you:

**{{product_name}} — {{quantity}}**
{{price}}

**[CLAIM FREE SHIPPING →]**

78 minerals. 30 seconds. 30-day guarantee.

Your body will thank you.

— Nilo

P.S. This is the last email about your cart. If now's not the right time, no worries. We'll be here when you're ready.

---

## 4. Flow Logic & Technical Configuration

### Klaviyo Flow Setup

```
TRIGGER: Added to Cart
  ↓
FILTER: Has NOT placed order since starting flow
FILTER: Has NOT been in this flow in last 7 days
  ↓
CONDITIONAL SPLIT: Is in Welcome Series (Track A)?
  YES → Delay 4 hours (avoid Smart Sending conflict with welcome flow)
  NO  → Continue immediately
  ↓
⏱️ Wait 1 hour
  ↓
📧 Send AC1 (Reminder)
  ↓
CONDITIONAL SPLIT: Has placed order?
  YES → EXIT FLOW
  NO  → Continue
  ↓
⏱️ Wait 23 hours (total: 24 hours from cart)
  ↓
📧 Send AC2 (Objection Handling)
  ↓
CONDITIONAL SPLIT: Has placed order?
  YES → EXIT FLOW
  NO  → Continue
  ↓
⏱️ Wait 48 hours (total: 72 hours from cart)
  ↓
📧 Send AC3 (Last Chance + Free Shipping)
  ↓
END FLOW
```

### Critical Filters

| Filter | Why |
|--------|-----|
| Placed Order → EXIT | Never send cart reminder to someone who already bought |
| Not in flow within 7 days | Prevent repeat abandoners from getting the same sequence back-to-back |
| Welcome flow check | Avoid Smart Sending suppression by delaying AC1 if welcome email was sent recently |
| Subscription status check | If customer is already a subscriber, skip free shipping offer (they already get it) |

[Confidence: A | Source: Klaviyo flow configuration best practices]

---

## 5. Abandoned Checkout Flow (U1 — Separate from Cart)

**Critical distinction**: Shopify fires TWO different events:
- **Added to Cart** → triggers the Cart Abandonment flow above
- **Checkout Started** → triggers the Abandoned Checkout flow below

Checkout abandoners have **HIGHER purchase intent** (they entered payment/shipping info). They need a faster, more direct sequence:

| Email | Timing | Strategy | Discount? |
|-------|--------|----------|-----------|
| CO1 | **15 minutes** | Direct reminder — you're almost done | No |
| CO2 | 4 hours | Trust reinforcement — guarantee, security badges | No |
| CO3 | 24 hours | Final push — auto-applied free shipping | Yes (auto-applied) |

**Why 15 minutes, not 1 hour**: Checkout abandoners are mid-purchase. The #1 reason for checkout abandonment is distraction, not indecision. A 15-minute reminder catches them while intent is still hot. [Confidence: B | Source: Klaviyo checkout flow recommendations]

### Klaviyo Setup

```
TRIGGER: Started Checkout
  ↓
FILTER: Has NOT placed order since starting flow
FILTER: Has NOT been in Cart Abandonment flow in last 24 hours
  ↓
⏱️ Wait 15 minutes
  ↓
📧 Send CO1 (Almost Done)
  ↓
CONDITIONAL SPLIT: Has placed order?
  YES → EXIT
  NO  → Wait 3.75 hours (total: 4 hours)
  ↓
📧 Send CO2 (Trust)
  ↓
CONDITIONAL SPLIT: Has placed order?
  YES → EXIT
  NO  → Wait 20 hours (total: 24 hours)
  ↓
📧 Send CO3 (Final + Free Shipping)
  ↓
END FLOW
```

**Conflict rule**: If a customer triggers BOTH Cart Abandonment AND Checkout Abandonment, Checkout takes priority. Suppress Cart Abandonment flow for that session. [Confidence: A | Source: Klaviyo flow priority logic]

---

## 6. Browse Abandonment (Phase 2 — Defer to Month 2)

**Do NOT build at launch.** Browse abandonment captures visitors who viewed a product page but didn't add to cart. It's the 3rd highest-performing flow after cart and welcome, but:

- Lower intent than cart abandonment → lower conversion (~1% vs 3.33%)
- Requires sufficient traffic volume to generate meaningful flow entries
- At launch, focus on the 3 core flows (welcome, cart, post-purchase)

### When to Build

**Build browse abandonment in Month 2** when:
1. Core 3 flows are live and generating data
2. Product page traffic exceeds 500 unique visitors/month
3. You have Klaviyo tracking pixel properly configured

### Browse Abandonment Structure (for future reference)

| Email | Timing | Content |
|-------|--------|---------|
| BA1 | 24 hours after product page view, no cart | Product highlight + key benefit + social proof snippet |
| BA2 | 72 hours | Testimonial-led, different angle, soft CTA |

**Target metrics**: Cart creation rate >5%, RPR >$1.00 [Confidence: B | Source: Klaviyo browse abandonment benchmarks]

### Set Up Tracking Now (U8)

Even though browse abandonment flow is deferred to Month 2, **configure the Klaviyo "Viewed Product" event tracking at launch**. This means:
- Install Klaviyo tracking snippet on all product pages (Day 1)
- Verify "Viewed Product" events fire in Klaviyo Activity Feed
- When you build the flow in Month 2, you'll have 4+ weeks of behavioral data to optimize against

[Confidence: A | Source: Klaviyo tracking setup best practice]

---

## 8. Performance Benchmarks & Optimization

### Monthly Review Checklist

| Metric | Check | Action If Below Target |
|--------|-------|----------------------|
| Recovery rate | >5% (of flow recipients) | Test subject lines, add/adjust discount |
| Open rate | >50% | Test subject lines, check deliverability |
| Click rate | >8% | Test CTA placement, button copy, email length |
| Revenue per recipient | >$5.00 | Test product recommendations, pricing display |
| Unsubscribe rate | <0.5% per email | Reduce frequency, check tone |

### A/B Testing Priority Order

1. **AC1 subject line** (highest volume, most impact) — test "You left something behind" vs. "Still want this?"
2. **AC3 incentive type** — free shipping vs. 10% off vs. no discount
3. **AC2 objection order** — test which FAQ question appears first
4. **Timing** — 30 min vs. 1 hr for AC1 (Klaviyo data suggests 30-60 min optimal)

---

## 9. Cross-TUP References

- **M17 email_flow_architecture.md**: Cart recovery is Priority 1 flow. Build before launch.
- **M17 sms_strategy.md**: SMS cart recovery (1 SMS at 48hr after Email 2) deferred to Month 3+ when 500+ SMS subscribers.
- **M9 tracking_and_attribution.md**: Cart recovery revenue tracked via MER, not platform ROAS.
- **M30 Analytics**: Cart recovery rate is one of MVD 7 daily metrics (flow performance).

---

*Cart recovery is the highest-revenue email flow. Build it before launch alongside welcome series. See `post_purchase_and_retention.md` for the next flow priority.*
