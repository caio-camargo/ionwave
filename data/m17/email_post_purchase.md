# M17: Post-Purchase Email Sequence — Canonical Version

**TUP**: M17 — Email & SMS
**Version**: 1.0.0
**Date**: 2026-02-07
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 437 (detailed 7-email copy), 442, 443 (structural frameworks) — merged
**Build Priority**: #3 basic (3 emails at launch), expand to full 7 in Month 2

---

## Overview

**Trigger**: First purchase completed
**Emails**: 7 (launch with first 3, expand in Month 2)
**Timeline**: Day 0 → Day 60
**Goal**: Onboard, retain, get reviews, convert to subscription, create advocates
**Primary metrics**: NPS >8, review rate >15%, subscription conversion >12%

**This is the longest and most strategically important sequence.** It's where one-time buyers become subscribers and subscribers become advocates. Every email has a specific job in the retention engine.

---

## Sequence Architecture

```
LAUNCH (Priority 3A — Build before launch):
Day 0 ──── Email 1: Order Confirmation + First-Use Tip
Day 1 ──── [Auto: Shipping notification via Shopify — not custom email]
Day 7 ──── Email 2: First Week Check-In
Day 14 ─── Email 3: The Science (education + reinforcement)

MONTH 2 EXPANSION (Priority 3B):
Day 21 ─── Email 4: Subscription Reminder (next box ships in 9 days)
Day 25 ─── Email 5: Review Request
Day 30 ─── Email 6: 30-Day Milestone + Upsell
Day 60 ─── Email 7: 60-Day Survey + Referral
```

**Exit condition**: None — everyone who purchases goes through this full sequence. Subscribers and non-subscribers get slightly different versions of Emails 4 and 6 (conditional split).

---

## Email 1 — Day 0: Order Confirmation + First-Use Tip

**Subject**: `Your order is confirmed!`
**Preview**: `Here's your first-use tip`
**Send**: Immediately after purchase

### Body

> Hey {{first_name}},
>
> Your IonWave order is confirmed! 🎉
>
> **Order #{{order_number}}**
> {{product_name}} — {{quantity}}
>
> **YOUR FIRST-USE TIP:**
>
> For best results: **empty stomach, before coffee.**
>
> Mix one sachet in 8-12oz water. Drink it first thing in the morning.
>
> Why? Your body absorbs minerals most efficiently when your stomach is empty. The ionic form means near-instant absorption — no waiting, no digestion required.
>
> **WHAT TO EXPECT:**
> - **Days 1-3**: Subtle alertness, hydration that "hits different"
> - **Days 4-14**: Energy stabilizes, afternoon crashes fade
> - **Days 15-30**: Full benefits — mental clarity, better recovery, improved sleep
>
> Your IonWave ships within 24 hours. We'll send tracking info as soon as it's on the way.
>
> Welcome to the community.
>
> — The IonWave Team
>
> P.S. Questions about anything? Just reply. We're here.

**Design**: Transactional feel (order number, product details) but warmer than standard Shopify confirmation. The first-use tip turns a boring confirmation into an onboarding moment.

---

## Email 2 — Day 7: First Week Check-In

**Subject**: `How's your first week going?`
**Preview**: `What most people feel by now`
**Send**: Day 7 after purchase

### Body

> Hey {{first_name}},
>
> One week of IonWave. Let's check in.
>
> **BY NOW, YOU MIGHT NOTICE:**
> → More stable energy through the day
> → Less of that 3pm crash
> → Subtle improvement in mental clarity
> → Hydration that actually feels different
>
> If you're feeling some of these — great. Your body is responding.
>
> If not yet — that's normal too. Bodies that have been mineral-depleted for years sometimes need 2-3 weeks to fully calibrate.
>
> **The key: don't stop.** Consistency is everything.
>
> One sachet. Every morning. Let the minerals do their work.
>
> **HOW CAN WE HELP?**
>
> If something's not working, reply to this email. I read everything and respond personally.
>
> You're not just a customer. You're part of this now.
>
> — The IonWave Team

**Design**: Personal, plain-text style. No heavy imagery. This should feel like a founder checking in, not a marketing email.

---

## Email 3 — Day 14: The Science

**Subject**: `The changes happening inside you`
**Preview**: `What 2 weeks of proper mineralization actually does`
**Send**: Day 14 after purchase

### Body

> Hey {{first_name}},
>
> Two weeks in. Here's what's happening beneath the surface:
>
> **CELLULAR HYDRATION**
> Your cells are finally getting minerals in ionic form — the only form they can actually use. This is different from drinking more water. This is water that works.
>
> **ENZYME ACTIVATION**
> Over 300 enzymes in your body require minerals to function. They've been running on fumes. Now they have fuel.
> [Confidence: B | Source: peer-reviewed biochemistry — magnesium alone is a cofactor for 300+ enzymes]
>
> **NERVOUS SYSTEM SUPPORT**
> Magnesium, potassium, calcium — these aren't just electrolytes. They're how your neurons fire. Properly mineralized = calmer, clearer, faster.
>
> **RECOVERY OPTIMIZATION**
> Your muscles don't just need protein. They need the minerals that power repair at the cellular level.
>
> This isn't hype. This is biochemistry.
>
> And you're two weeks into it.
>
> Keep going. The best changes are still ahead.
>
> — The IonWave Team
>
> P.S. Tracking your health metrics? We'd love to see your before/after. Reply with screenshots if you've got them.

**Design**: Science-forward. Consider infographic showing the 4 mechanisms. Clean, authoritative. Different tone from the personal check-in — this builds intellectual confidence in the product.

**Compliance note**: All health claims should be reviewed for FTC/FD&C Act compliance. "Enzyme activation" and "nervous system support" are structure/function claims that may require disclaimers. [VOID — requires: legal review of email health claims]

### FTC Compliance Checklist (Dialogue Upgrade U3)

**Before launching ANY post-purchase email with health claims:**

- [ ] **Review all statistical claims** — "73% of customers report..." is ONLY acceptable with real survey data. Until then, replace with qualitative language ("many customers tell us...")
- [ ] **Structure/function claims** require "This statement has not been evaluated by the FDA" disclaimer if making any claims about body function
- [ ] **No disease claims** — never imply IonWave treats, cures, or prevents any disease
- [ ] **Testimonials must be representative** — FTC requires testimonials reflect typical results, not exceptional cases
- [ ] **"Typical results" disclaimer** — if using before/after data, include "Results may vary. These are individual experiences, not guaranteed outcomes."
- [ ] **Email 3 (The Science)** — "enzyme activation" and "nervous system support" are structure/function claims. Add FDA disclaimer or soften language to "may support..."
- [ ] **Email 6 (30-Day Milestone)** — ALL statistics (73%, 68%, 61%, 84%) are currently [VOID — Danilo projections]. DO NOT SEND until replaced with real data or removed entirely.

**Safe claims (no disclaimer needed):** Product ingredients, how to use, serving size, mineral count (78), sourcing information.
**Risky claims (need review):** Energy improvement, sleep quality, recovery optimization, mental clarity.
**Prohibited claims:** Disease treatment, disease prevention, "cures" anything.

---

## Email 4 — Day 21: Subscription Reminder

**Subject**: `Heads up: box #2 ships in 9 days`
**Preview**: `Plus: a way to save on your next order`
**Send**: Day 21 after purchase
**Conditional split**: Subscriber vs. Non-Subscriber

### Body (Subscriber version)

> Hey {{first_name}},
>
> Quick logistical note:
>
> Your next box of IonWave ships in 9 days.
>
> Same address. Same payment method. Nothing you need to do.
>
> **WANT TO ADD ANYTHING?**
> Some customers grab a second box for travel. Or switch to our 3-month bundle for better savings.
>
> **[CTA: Manage Your Subscription →]**
>
> **NEED TO PAUSE OR CHANGE TIMING?**
> No problem. You can:
> — Push back your next shipment
> — Change delivery frequency
> — Update your address
>
> All from your account dashboard. No phone calls, no hassle.
>
> **[CTA: Update Preferences →]**
>
> Thanks for sticking with it. Three weeks of consistent minerals is when most people really start to feel the difference.
>
> — The IonWave Team

### Body (Non-Subscriber version)

> Hey {{first_name}},
>
> Quick heads up: you're about 9 days from running low on IonWave.
>
> **THE EASY WAY TO NEVER RUN OUT:**
>
> Subscribe & Save — get IonWave delivered every 30 days.
> - **Save [X]%** vs. one-time purchase
> - **Free shipping** on every order
> - **Skip or cancel anytime** — no commitment
>
> **[CTA: Subscribe & Save →]**
>
> Or just reorder when you're ready:
>
> **[CTA: Reorder Now →]**
>
> — The IonWave Team

---

## Email 5 — Day 25: Review Request

**Subject**: `Quick favor? Takes 30 seconds.`
**Preview**: `Your feedback helps more than you know`
**Send**: Day 25 after purchase

### Body

> Hey {{first_name}},
>
> You've been with us almost a month now.
>
> Can I ask a quick favor?
>
> If IonWave has made a difference for you — more energy, better recovery, clearer thinking, anything — would you take 30 seconds to leave a review?
>
> **[CTA BUTTON: Leave a Review →]**
>
> **WHY IT MATTERS:**
>
> We're a small team. We don't have celebrity endorsers or massive ad budgets.
>
> What we have is customers who feel the difference and tell others about it.
>
> Your review helps someone else take the chance you took a month ago.
>
> Even just a sentence or two helps.
>
> Thank you — seriously.
>
> — The IonWave Team
>
> P.S. Had a problem? Don't leave a bad review — just reply to this email. We'll fix it.

**Design**: Simple, short. One prominent CTA button. The P.S. is critical — it redirects negative feedback to a private channel instead of a public review.

---

## Email 6 — Day 30: 30-Day Milestone + Upsell

**Subject**: `One month in. Here's what we've learned.`
**Preview**: `Congratulations — and a special offer`
**Send**: Day 30 after purchase

### Body

> Hey {{first_name}},
>
> 30 days of IonWave.
>
> This is the point where it stops being an experiment and becomes a habit.
>
> **WHAT OUR DATA SHOWS AT 30 DAYS:**
> → 73% of customers report sustained energy improvements
> → 68% report better recovery after workouts
> → 61% report improved sleep quality
> → 84% continue their subscription past month 3
>
> [Confidence: D | Source: Danilo projections — NOT verified data. Replace with actual customer survey data once available.]
> [VOID — requires: real customer data from first 100 subscribers to validate or replace these numbers]
>
> You're part of this now.
>
> **AS A THANK YOU:**
>
> For hitting the 30-day mark, here's an exclusive offer:
>
> **UPGRADE TO 90-DAY SUPPLY**
> Save 28% vs monthly
> Code: **MONTH1**
>
> **[CTA: Claim Offer →]**
>
> Locks in your current price. Ships every 3 months. Less to think about.
>
> Or keep your monthly subscription — either way, we're glad you're here.
>
> Here's to month two.
>
> — The IonWave Team

---

## Email 7 — Day 60: Two-Month Survey + Referral

**Subject**: `Your 60-day check-in`
**Preview**: `Quick survey + chance to win`
**Send**: Day 60 after purchase

### Body

> Hey {{first_name}},
>
> Two months of consistent mineralization.
>
> At this point, IonWave isn't a supplement you're trying — it's part of your daily system.
>
> **I'D LOVE YOUR FEEDBACK:**
>
> A quick 2-minute survey helps us make better decisions:
>
> **[CTA: Take 2-Min Survey →]**
>
> Everyone who completes it gets entered to win a FREE 3-month supply.
>
> **A FEW QUICK QUESTIONS:**
> 1. What's the #1 change you've noticed?
> 2. What would make IonWave better?
> 3. Would you recommend us? Why or why not?
>
> Your answers shape what we build next.
>
> ---
>
> **SHARE THE LOVE:**
>
> Know someone who should try IonWave? Forward this email and they'll get 15% off their first box with code **FRIEND15**.
>
> You'll get $10 credit for every friend who orders.
>
> **[CTA: Get Your Referral Link →]**
>
> Thanks for being part of this.
>
> — The IonWave Team

---

## Flow-Level Metrics & Benchmarks

| Metric | Target | Source |
|--------|--------|--------|
| Open rate (avg across 7 emails) | 45-60% | [Confidence: B \| Source: Klaviyo post-purchase avg for DTC] |
| Review request conversion (Email 5) | 10-20% click, 5-10% review submitted | [Confidence: C \| Source: DTC review collection benchmarks] |
| Subscription conversion (Email 4 non-sub version) | 8-15% | [Confidence: C] |
| 90-day upsell conversion (Email 6) | 5-10% | [Confidence: C] |
| Referral link share rate (Email 7) | 10-15% | [Confidence: C] |
| Survey completion rate (Email 7) | 15-25% | [Confidence: C] |

---

## Intelligence Gaps

| Gap | Grade | Upgrade Path |
|-----|-------|-------------|
| 30-day customer data (Email 6 stats) | D (Danilo projections) | Survey first 100 customers at Day 30. Replace placeholder data. **HIGH PRIORITY.** |
| Optimal review request timing | C (Day 25 assumed) | Test Day 14 vs Day 25 vs Day 30 after 200+ orders |
| Subscription conversion rate | D (no data) | Measure after 60 days of live Post-Purchase flow |
| Health claim compliance | D (not reviewed) | **Legal review required** before launching Emails 3 and 6 |
| Referral program mechanics | C (placeholder) | Finalize referral structure in M24 (Referral) TUP |

---

*Build the first 3 emails before launch. Expand to full 7 in Month 2. See `email_flow_architecture.md` for build order.*
