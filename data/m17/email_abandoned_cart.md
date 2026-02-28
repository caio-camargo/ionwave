# M17: Abandoned Cart Email Sequence — Canonical Version

**TUP**: M17 — Email & SMS
**Version**: 1.0.0
**Date**: 2026-02-07
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 436 (detailed copy), 440, 441 (structural frameworks) — merged
**Build Priority**: #1 (build before launch — highest revenue per email)

---

## Overview

**Trigger**: Cart created, no purchase within 1 hour
**Emails**: 3 emails + 1 optional SMS
**Timeline**: 1hr → 24hr → 72hr
**Goal**: Recover 10-15% of abandoned carts
**Expected revenue impact**: 5-15% of total email revenue [Confidence: B | Source: Klaviyo DTC benchmark]

**Discount escalation strategy**: No discount in Email 1 (many people just got distracted). Objection handling in Email 2 (address the "why not"). Discount + urgency in Email 3 (final push for the holdouts).

---

## Sequence Architecture

```
Hour 1 ─── Email 1: Simple Reminder (no discount) ──→ Purchased? ── YES → Exit
                                                              └── NO ↓
Hour 24 ── Email 2: Objection Handling (FAQ) ────────→ Purchased? ── YES → Exit
                                                              └── NO ↓
Hour 48 ── [Optional] SMS: "Your cart is waiting" ───→
                                                              ↓
Hour 72 ── Email 3: Urgency + Free Shipping ─────────→ Purchased? ── YES → Exit
                                                              └── NO → End (enter regular nurture)
```

**Exit condition**: Purchase at any point → exit flow, enter Post-Purchase flow.

---

## Email 1 — 1 Hour After Abandonment: Simple Reminder

**Subject**: `You left something behind...`
**Preview**: `Your IonWave is waiting`
**Strategy**: Helpful, not pushy. Many people just got distracted — a simple reminder converts 40-60% of total cart recovery. [Confidence: B | Source: Klaviyo cart recovery data]
**Discount**: NO

### Body

> Hey {{first_name}},
>
> Looks like you got interrupted.
>
> Your IonWave is still in your cart:
>
> **{{product_name}}** — {{quantity}}
> **{{price}}**
>
> **[CTA BUTTON: Complete Your Order →]**
>
> Quick reminder of what you're getting:
>
> ✓ 78 ionic minerals (not 3-4 like synthetic brands)
> ✓ 98% bioavailable (vs ~10% for pills)
> ✓ 30-day feel-the-difference guarantee
> ✓ Free shipping on subscriptions
>
> Your cart will stay saved for 72 hours.
>
> — The IonWave Team
>
> P.S. Questions holding you back? Just reply. We're here.

**Design**: Clean, product-focused. Dynamic product image from cart. Prominent CTA. Short — this is a reminder, not a sales pitch.

---

## Email 2 — 24 Hours: Objection Handling

**Subject**: `Still thinking about it?`
**Preview**: `Let me answer the question you're probably asking...`
**Strategy**: Address the 4 most common objections directly. Convert the "interested but hesitant."
**Discount**: Optional — 5-10% if needed, but try without first.

### Body

> Hey {{first_name}},
>
> Still on the fence? Totally fair.
>
> Here are the questions most people have before they try IonWave:
>
> ---
>
> **"DOES IT ACTUALLY TASTE OKAY?"**
> Mildly mineral, like high-quality spring water. Most people drink it straight, some add it to juice. Either works.
>
> **"HOW LONG UNTIL I FEEL SOMETHING?"**
> Most customers notice more stable energy within 3-7 days. Full benefits typically show up over 2-4 weeks.
>
> **"IS THIS JUST EXPENSIVE SEAWATER?"**
> No. Seawater is 35g/L salt. Marine plasma is harvested from a specific depth where mineral ratios match human biology, then filtered and concentrated. Very different.
>
> **"WHAT IF IT DOESN'T WORK FOR ME?"**
> 30-day guarantee. Feel the difference or get every penny back. No questions, no hassle.
>
> ---
>
> Still have questions? Hit reply. I'll answer personally.
>
> Or if you're ready:
>
> **[CTA BUTTON: Complete Your Order →]**
>
> — The IonWave Team

**Design**: Text-heavy, conversational. FAQ format with bold questions. No heavy imagery — this should feel like a personal message, not a marketing email.

---

## Email 3 — 72 Hours: Urgency + Incentive (Final)

**Subject**: `Last chance: your cart expires tonight`
**Preview**: `Plus: free shipping on us`
**Strategy**: Create genuine urgency (cart actually clears) + add a small incentive to tip the decision.
**Discount**: YES — free shipping (lower margin impact than % off)

### Body

> Hey {{first_name}},
>
> Your IonWave cart expires in 24 hours.
>
> After that, you'll need to start over.
>
> Before it clears, I wanted to offer something:
>
> **USE CODE: FIRSTBOX**
> **FREE SHIPPING ON YOUR FIRST ORDER**
>
> No minimum. Just enter the code at checkout.
>
> Here's what's waiting for you:
>
> **{{product_name}}** — {{quantity}}
> **{{price}}**
>
> **[CTA BUTTON: Claim Free Shipping →]**
>
> 78 minerals. 30 seconds. 30-day guarantee.
>
> Your body will thank you.
>
> — The IonWave Team
>
> P.S. This is the last email about your cart. If now's not the right time, no worries. We'll be here when you're ready.

**Design**: Slightly more designed than Email 2. Discount code prominent (maybe in a box/banner). Product image. Urgency indicators. But still not spammy — respectful tone.

---

## Optional SMS — 48 Hours

**Trigger**: Cart abandoned 48 hours ago AND opted into SMS AND has not purchased AND has not clicked Email 2
**Send between**: 8am-9pm recipient time only (TCPA compliance)

> Hey {{first_name}}! You left IonWave in your cart. Complete your order: {{cart_link}}
>
> Reply STOP to opt out

**Design notes**: Keep under 160 characters. No emojis. Include opt-out. Link to cart.

---

## Discount Escalation Analysis

**Founder Mode concern**: The cart flow offers free shipping; the welcome flow offers [X]% off; the win-back flow offers 25% off. This creates a potential "wait for the bigger discount" behavior.

**Mitigation strategy:**

| Flow | Discount | Rationale |
|------|----------|-----------|
| Welcome | 10% off first order | Small hook to drive first conversion |
| Cart Email 1-2 | No discount | Test if reminder + objection handling is enough |
| Cart Email 3 | Free shipping (not %) | Different incentive type — doesn't devalue product |
| Win-back (90 days) | 20-25% off | Large gap between purchase attempts justifies larger discount |

**Key principle**: Never offer a bigger discount in a faster email. Customers who wait should not be rewarded more than customers who buy quickly. If anything, the fastest buyers should get the best deal (welcome discount). [Confidence: B | Source: DTC pricing psychology best practices]

**A/B test plan (Month 3+)**: Test Email 3 with free shipping vs. 10% off vs. no discount to find optimal balance of recovery rate and margin preservation.

### Discount Defense Policy (Dialogue Upgrade U2)

**Explicit rules to prevent discount arbitrage:**

1. **Cart flow discount (free shipping) MUST be a different type than welcome discount (% off).** Customers shouldn't feel they "unlocked a better deal" by abandoning.
2. **Never offer a larger discount in a faster flow.** Welcome (10% off) → Cart (free shipping) → Win-back (25% off after 90 DAYS). The discount escalation requires TIME, not behavior manipulation.
3. **Cart Email 1-2: NEVER include a discount.** Many cart abandoners just got distracted — a reminder is enough. Don't train discount-seeking behavior.
4. **Coupon code exclusion rules in Shopify:** Set cart recovery code (FIRSTBOX) to NOT stack with welcome code or win-back code. One discount per order, max.
5. **Margin math at 25% off (worst case):** $59 × 0.75 = $44.25 revenue − $23.60 COGS − $6.50 shipping = $14.15 net. Still profitable, but thin. Monitor margin per flow quarterly.

---

## Flow-Level Metrics & Benchmarks

| Metric | Target (Month 1-3) | Target (Month 4+) | Source |
|--------|-------------------|--------------------|--------|
| Cart recovery rate (flow total) | 8-12% | 12-18% | [Confidence: B \| Source: Klaviyo DTC avg 10-15%] |
| Email 1 recovery rate | 5-8% | 7-10% | [Confidence: B \| Source: first email typically recovers 40-60% of total] |
| Revenue per recipient | $2-5 | $4-8 | [Confidence: C] |
| Open rate (avg) | 40-55% | 45-60% | [Confidence: B] |
| Click rate (avg) | 5-10% | 8-15% | [Confidence: B] |

---

## Klaviyo Implementation Notes

1. **Trigger**: "Checkout Started" (Shopify event) → wait 1 hour → check if "Placed Order" = false → send
2. **Filter**: Exclude anyone who placed order since flow trigger
3. **Conditional split**: After each email, check if order placed → yes = exit, no = continue
4. **Smart Sending**: ON but with shorter window (8 hours) — cart emails are time-sensitive
5. **SMS branch**: Add conditional split at 48hr — if SMS opted in AND has not clicked Email 2 → send SMS
6. **Suppress**: If subscriber is currently in Welcome flow Email 1-2, delay cart flow by 4 hours (don't flood)

---

## Intelligence Gaps

| Gap | Grade | Upgrade Path |
|-----|-------|-------------|
| IonWave cart abandonment rate | D | Measure after 30 days with Shopify analytics |
| Free shipping vs. % off effectiveness | C | A/B test after 100+ cart flow entries |
| Optimal SMS timing within cart flow | C | Test 24hr vs 48hr SMS after 200+ SMS subscribers |
| Cart value threshold for SMS inclusion | D | Analyze: does SMS recovery rate vary by cart value? (requires 3+ months data) |

---

*This is the #1 revenue flow. Build it before launch. See `email_flow_architecture.md` for build order context.*
