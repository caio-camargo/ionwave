# Checkout Optimization & AOV Growth

**TUP**: M15 — Landing Pages & Conversion
**Sources**: Tabs 396 (Checkout Optimization), 397 (Checkout Optimization1), 398 (Checkout Optimization2)
**Cross-TUP**: M9 (Ecommerce Infrastructure — Shopify checkout), M10 (Pricing & Offer — subscription default), M17 (Email — abandoned cart flows), M24 (Fulfillment — shipping cost display)

---

## 1. Cart Abandonment Analysis

Average cart abandonment rate: **70.2%** (mobile: 80.2%). For every 10 people who add to cart, only 3 complete the purchase.

### Abandonment Causes & Fixes

| Reason | % of Abandons | Fix | IonWave Application |
|--------|:------------:|-----|-------------------|
| Extra costs too high (shipping, tax) | 48% | Show all costs upfront; free shipping threshold | Free shipping on subscriptions; $75 threshold for one-time |
| Required to create account | 24% | Guest checkout option | Shopify native guest checkout — enabled |
| Delivery too slow | 22% | Clear delivery estimates, expedited options | "Ships within 24 hours" + estimated delivery date |
| Checkout too long/complicated | 18% | Fewer fields, one-page checkout, progress indicator | Shopify one-page checkout (7.5% better than multi-page) |
| Didn't trust site with card info | 17% | Trust badges, SSL, known payment options | Norton/secure checkout badge + payment logos |
| Website errors | 13% | Test regularly, fast page load | Pre-launch testing protocol (per M24) |
| Returns policy unclear | 12% | Clear, generous return policy visible | 30-day guarantee linked from checkout |
| Not enough payment options | 9% | Apple Pay, PayPal, Shop Pay, Afterpay | Shop Pay (50% conversion lift) + Apple Pay + PayPal |

> **Single highest-impact fix**: Show shipping costs BEFORE checkout. Half of all abandonment is surprise costs. IonWave's free-shipping-on-subscription eliminates this for the primary purchase path.

---

## 2. Checkout Optimization Checklist

### Reduce Friction
- ☐ Guest checkout available (no forced account creation)
- ☐ One-page checkout (Shopify default — 7.5% lift vs multi-page)
- ☐ Express checkout enabled (Shop Pay, Apple Pay, Google Pay, PayPal)
- ☐ Minimal form fields (only what's needed for shipping + payment)
- ☐ Auto-fill enabled (browser autocomplete attributes on all fields)
- ☐ Mobile-optimized (thumb-friendly buttons, large input fields)
- ☐ Progress indicator visible (Step 1 of 3 — or single page)
- ☐ Error messages are clear and specific (not generic "Error occurred")
- ☐ No surprise fees at end

### Build Trust
- ☐ SSL certificate visible (lock icon in address bar)
- ☐ Trust badges visible (secure checkout, payment processor logos)
- ☐ Money-back guarantee visible (30-day guarantee badge near CTA)
- ☐ Known payment options displayed (Visa, MC, AmEx, PayPal logos)
- ☐ Contact info visible (email, phone — real support channels)
- ☐ Return policy link visible
- ☐ Order summary always visible (no hidden total)

### Shop Pay Priority

**Shop Pay is the single most impactful checkout optimization.** Impact data:
- Up to **50% conversion lift** over standard guest checkout
- **91% mobile conversion lift**
- **56% desktop conversion lift**
- Even its **mere presence** lifts lower-funnel conversion by 5%
- ~150M users globally (2026)

**IonWave action**: Enable Shop Pay as the primary express checkout option. Display prominently above standard checkout fields.

---

## 3. Recovery System (Abandoned Cart)

### Multi-Channel Recovery Sequence

| Timing | Channel | Content | Expected Performance |
|--------|---------|---------|---------------------|
| **15 min** | SMS | "You left something in your cart..." (no discount) | 98% open rate, 19-30% CTR |
| **1 hour** | Email #1 | Reminder + product image + single CTA | 50% open rate, 6% CTR |
| **24 hours** | Email #2 | Social proof (reviews) + FAQ objection handling | 45% open rate, 5% CTR |
| **48 hours** | SMS #2 | Urgency + 10% discount code (if no conversion) | 15-20% conversion |
| **72 hours** | Email #3 | Final reminder + 15% discount + guarantee emphasis | 40% open rate, 4% CTR |

**Benchmark**: A 3-email abandoned cart sequence produces **6.5x more revenue** than a single email ($24.9M vs $3.8M in Klaviyo analysis across their customer base).

**Good recovery rate**: 18-30% of abandoned carts recovered.

### Recovery Rules
- SMS requires explicit opt-in (TCPA compliance — do NOT send unsolicited)
- First touchpoint should NOT include a discount (recover full-price first)
- Discount only appears in email #3 or SMS #2 (48-72 hour delay)
- Use dynamic product images (show what's in THEIR cart)
- Include "secure checkout" language in all recovery messages
- Cross-reference M17 (Email) for flow architecture and Klaviyo setup

---

## 4. AOV Boosters

Average Order Value is the hidden lever. Small AOV increases compound significantly because they don't increase CAC.

### Pre-Purchase (Cart Page)

| Tactic | Expected AOV Lift | IonWave Application |
|--------|:-----------------:|-------------------|
| Free shipping threshold | 10-15% | "Add $[X] more for free shipping" progress bar |
| Bundle offers | 15-25% | 3-month bundle ($127, save 28%) |
| Quantity discounts | 10-20% | "Buy 2+, save 15%" — visible on PDP and cart |
| Subscribe & Save default | 20-30% | Subscription pre-selected, one-time as secondary option |

### Checkout (Order Bump)

An order bump is a one-click add-on displayed on the checkout page.

- **Typical take rate**: 10-20% of customers accept
- **IonWave bump ideas**: "Add a second box and save 10%" / "Add mineral drops for $19"
- **Key**: Must be complementary, not distracting. One checkbox, one sentence.

### Post-Purchase Upsell

After payment is complete, offer a one-click upsell (no re-entering payment info):

- **Typical conversion**: 20-30% of buyers accept post-purchase offers
- **IonWave upsell ideas**:
  - "Upgrade to 3-month subscription commitment (save 25%)"
  - "Add [complementary product] — ships with your order"
- **Tools**: Zipify OneClickUpsell (revenue-based pricing — pay only on successful upsells), AfterSell, ReConvert
- **Caution**: Aggressive upsell sequences damage brand trust (see Emma Relief BBB complaints). Limit to 1-2 tasteful offers.

### AOV Impact Model

| Scenario | Base AOV | With Bundle | With Bump | With Post-Purchase | Total |
|----------|:--------:|:-----------:|:---------:|:-----------------:|:-----:|
| Pessimistic | $47 | +$0 | +$3 (10% take × $30) | +$5 | $55 |
| Base | $47 | +$8 (15% bundles) | +$5 (15% take × $30) | +$8 | $68 |
| Optimistic | $47 | +$12 (20% bundles) | +$6 (20% take × $30) | +$10 | $75 |

> **Cross-reference M10**: Pricing and offer architecture determines bundle structure, discount depths, and subscription pricing. All AOV tactics must be consistent with M10 offer strategy.

---

## 5. Subscription-First Checkout Design

Per M9 store setup (subscription UX pattern — toggle > dropdown, subscription price shown first):

### Checkout Display Priority
1. **SUBSCRIBE & SAVE** — $47/month (save 20%) ← PRE-SELECTED
   - 30 sachets delivered monthly
   - Free shipping always
   - Cancel anytime, pause whenever
   - "Most popular" badge
2. **ONE-TIME PURCHASE** — $59
   - 30 sachets (1 month supply)
   - Free shipping over $75
   - No commitment

### Subscription Presentation Rules
- Subscription option is **always displayed first** and **pre-selected** (toggle > dropdown format)
- Savings percentage (20%) is prominently shown
- "Cancel anytime" is visible near the subscription option (reduces anxiety)
- Price comparison ($47 vs $59) is immediately obvious
- Toggle converts 15-20% better than dropdown (per M9 research)

> **FTC NOTE**: Pre-selecting subscription is legal IF: (1) it's clearly labeled as subscription, (2) the one-time option is equally visible, (3) subscription terms are clearly stated, (4) cancellation is genuinely easy. Negative option rule (FTC 2023) requires clear disclosure of material terms before obtaining billing information.

### Subscription UX Requirements (U8)

Per M1 principle ("design for exits, not just onboarding"), the subscription experience must be designed to RETAIN customers through value, not friction:

- ☐ "Manage Subscription" link in every post-purchase email
- ☐ One-click pause/cancel in account dashboard (no phone calls, no chat-only — per FTC click-to-cancel rule U16)
- ☐ Skip-a-month option clearly available
- ☐ Automatic notification 3 days before each charge ("Your next order ships in 3 days — manage your subscription")
- ☐ Cancellation confirmation page offers alternatives (pause, skip, downgrade) before final cancel

> **Emma Relief cautionary tale (U8)**: BBB F rating driven primarily by subscription billing complaints and difficult cancellation. IonWave must be the anti-Emma in subscription UX — trustworthy, transparent, easy to manage.

### Subscription Rate as Tier-1 CRO Metric (U7)

The subscription-to-one-time ratio is the most valuable CRO metric, often more impactful than overall CVR:

| Customer Type | Average Order | Avg Lifetime Orders | Estimated LTV |
|--------------|:------------:|:------------------:|:------------:|
| One-time buyer | $59 | 1.4 | **$83** |
| Subscriber | $47/mo | 6.5 months | **$305** |
| **LTV ratio** | | | **3.7x** |

**Implication**: Every 1% increase in subscription rate is worth more than a 5% increase in AOV. The CRO roadmap should prioritize subscription conversion as a top-tier metric.

### Shop Pay Installments (U6)

For orders over $35 (IonWave qualifies at $47+):
- Shop Pay Installments: 4 payments × $11.75 (0% interest)
- Lifts CVR 10-15% on qualifying orders
- Must be enabled in Shopify Payments settings
- Display "or 4 interest-free payments of $11.75 with Shop Pay" on PDP AND checkout
- Shop Pay button should appear as FIRST express checkout option (left-most or top position)
- Add "Buy with Shop Pay" CTA on PDP (not just at checkout)

---

## 6. Post-Purchase Page Optimization (U23)

The thank-you page is the highest-intent real estate in the entire funnel — the customer just gave you money and is maximally trusting. Don't waste it.

### Thank You Page Elements (Priority Order)

1. **Order confirmation** — What they bought, when it ships, tracking info
2. **Unboxing expectations** — "Your order ships within 24 hours. Here's what to expect when it arrives."
3. **Post-purchase upsell** — "Add a 3-month subscription commitment and save 25%" (one-click, no re-entering payment)
4. **Referral program prompt** — "Give $10, Get $10" — share link immediately
5. **NPS question** — "How likely are you to recommend IonWave? [1-10]" — pre-seeds positive sentiment
6. **Community/social** — "Follow us @ionwave for hydration tips" — extends relationship beyond purchase

> **Tool**: Zipify OneClickUpsell or AfterSell for post-purchase offers. ReConvert for thank-you page customization.

---

## 7. Cross-TUP Alignment

| TUP | Checkout Optimization Alignment |
|-----|-------------------------------|
| M9 | Shopify checkout setup, Shop Pay, theme performance, subscription UX pattern |
| M10 | Pricing, bundle structure, discount percentages, subscription terms |
| M14 | Testing protocol for checkout elements (CTA copy, layout, trust badges) |
| M17 | Abandoned cart email flows (3-email sequence, timing, content) |
| M20 | Customer support — checkout issues escalation, chargeback monitoring |
| M24 | Shipping costs display, delivery time estimates, free shipping threshold |
| M25 | Revenue recognition for subscription vs one-time, AOV tracking |
| M30 | Checkout CVR tracking, abandoned cart rate monitoring, AOV metrics |
