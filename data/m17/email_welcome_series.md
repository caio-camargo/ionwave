# M17: Welcome Email Series — Canonical Sequence

**TUP**: M17 — Email & SMS
**Version**: 1.0.0
**Date**: 2026-02-07
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 435 (detailed copy), 438, 439 (structural frameworks) — merged into single canonical version
**Build Priority**: #2 (build before launch)

---

## Overview

**Trigger**: Email opt-in without purchase (popup, lead magnet, footer form)
**Emails**: 5
**Timeline**: Day 0 → Day 7
**Goal**: Convert subscriber to first purchase (target: >8% CVR)
**Tone**: Personal, warm, founder-voice. Not corporate. Like a friend who discovered something amazing.

**Merge note**: Danilo provided 3 versions of the welcome series. Tab 435 had full production-quality copy for a 5-email buyer-welcome; tabs 438+439 had structural frameworks for subscriber-welcome (6-7 emails). This canonical version uses tab 435's copy quality applied to the subscriber-welcome use case, with structural guidance from 438+439.

---

## Sequence Architecture

```
Day 0 ─── Email 1: Welcome + Discount ───→ Purchased? ─── YES → Exit to Post-Purchase flow
   │                                                 └── NO ↓
Day 1 ─── Email 2: Getting Started Ritual / Why We're Different
   │
Day 3 ─── Email 3: Founder Story (René Quinton, marine plasma science)
   │
Day 5 ─── Email 4: Social Proof (customer testimonials)
   │
Day 7 ─── Email 5: Check-In + Subscription Reminder / Final Offer
```

**Exit condition**: If subscriber purchases at ANY point, remove from Welcome flow and enter Post-Purchase flow. In Klaviyo: add a conditional split checking "Has placed order since starting this flow."

---

## Email 1 — Immediate: Welcome + Deliver Promise

**Subject**: `Welcome to IonWave — here's your [X]% off`
**Preview**: `Plus: why 78 minerals changes everything`
**Send**: Immediately on signup

### Body

> Hey {{first_name}},
>
> Welcome! You just joined [X] people who are done feeling tired, foggy, and dehydrated.
>
> Here's your exclusive [X]% discount: **[CODE]**
>
> Quick intro — IonWave is different because:
> - **78 ocean-sourced minerals** (not 3-4 synthetic ones)
> - **Zero sugar, zero junk**
> - **Actually hydrates your cells** (98% bioavailable vs ~10% for pills)
>
> Over the next few days, I'll share:
> - Why most electrolytes don't work
> - The science behind ocean minerals
> - What to expect when you start
>
> For now, use code **[CODE]** for [X]% off your first order.
>
> **[CTA BUTTON: Shop Now]**
>
> Talk soon,
> [Founder Name]
>
> P.S. This code expires in 7 days. Don't miss out.

**Design notes**: Clean, minimal. Brand colors. Product hero image above the fold. CTA button prominent. No navigation bar (keep them focused).

**KPI targets**: Open rate 50-70%, Click rate 5-10% [Confidence: B | Source: Klaviyo welcome email avg for DTC]

---

## Email 2 — Day 1: Getting Started / Education

**Subject**: `{{first_name}}, here's how to get the most from IonWave`
**Preview**: `One simple ritual that changes everything`
**Send**: Day 1 after signup

### Body

> Hey {{first_name}},
>
> One quick tip that makes all the difference:
>
> **THE MORNING RITUAL**
> - Empty stomach, before coffee
> - One sachet in 8-12oz water
> - Drink it straight or add to juice — either works
>
> **WHAT TO EXPECT:**
> - **Days 1-3**: You might feel more alert, hydration that "hits different"
> - **Days 4-14**: Energy stabilizes, afternoon crashes fade
> - **Days 15-30**: Full benefits — clearer thinking, better recovery, deeper sleep
>
> The key is consistency. Your body has been running on depleted minerals for years. Give it time to recalibrate.
>
> **WHY 78 MINERALS MATTERS**
>
> Most electrolyte brands give you 3-4 minerals (sodium, potassium, maybe magnesium) plus a bunch of sugar.
>
> Your body uses 78+ minerals for over 300 enzymatic processes. IonWave delivers all of them in ionic form — the only form your cells can actually absorb.
>
> That's the difference between "drinking more water" and actual cellular hydration.
>
> Ready to feel the difference?
>
> **[CTA BUTTON: Shop Now — [X]% Off]**
>
> — [Founder Name]

**Design notes**: Simple, educational. Maybe an infographic showing "3 minerals vs 78 minerals." Keep CTA visible but don't hard-sell.

---

## Email 3 — Day 3: Founder Story / Brand

**Subject**: `Why we started IonWave (it's personal)`
**Preview**: `It started with a French biologist named René Quinton...`
**Send**: Day 3 after signup

### Body

> Hey {{first_name}},
>
> I want to tell you why IonWave exists.
>
> **THE DISCOVERY**
>
> In 1897, a French biologist named René Quinton made a discovery that changed medicine: the mineral composition of ocean water at specific depths almost perfectly mirrors human blood plasma.
>
> He called it "marine plasma" — and spent his career proving that these ocean-sourced minerals could restore health at the cellular level. His clinics treated thousands. His work was published in major journals.
>
> Then he was mostly forgotten.
>
> **WHY WE STARTED**
>
> We found Quinton's research and couldn't believe this science existed but wasn't available to everyday people. So we built IonWave:
>
> - Harvested from the same specific ocean depths Quinton identified
> - Filtered and concentrated using modern pharmaceutical-grade processes
> - 78 minerals in the exact ratios your body recognizes
>
> This isn't "electrolyte water." This is mineral restoration backed by 120+ years of science.
>
> **THE DIFFERENCE**
>
> - Seawater = 35g/L salt. Not this.
> - Synthetic electrolytes = 3-4 lab-made minerals + sugar. Not this.
> - Marine plasma = nature's full mineral spectrum, bioidentical to your blood plasma. This.
>
> Every batch we make honors that original science.
>
> Want to experience it yourself?
>
> **[CTA BUTTON: Try IonWave — [X]% Off]**
>
> — [Founder Name]
>
> P.S. If you're curious about the science, I'm happy to nerd out. Just reply.

**Design notes**: Story-driven. No product images — this is about mission and science. Founder headshot optional. Minimal design, lots of white space.

---

## Email 4 — Day 5: Social Proof

**Subject**: `"I finally stopped crashing at 2pm"`
**Preview**: `Real customers, real results`
**Send**: Day 5 after signup

### Body

> Hey {{first_name}},
>
> Don't just take our word for it. Here's what IonWave customers are saying:
>
> ---
>
> **"THE ENERGY IS DIFFERENT"**
> "I've tried every electrolyte brand. IonWave is the first one where I noticed a difference within days, not weeks. The afternoon crash is basically gone."
> — *Sarah M., Austin TX*
>
> **"FINALLY, HYDRATION THAT WORKS"**
> "I drink 3 liters of water a day and was STILL dehydrated. IonWave changed that. My skin is better, my workouts are better, everything."
> — *James K., Denver CO*
>
> **"SUBTLE BUT REAL"**
> "It's not like an energy drink that hits you and crashes. It's more like... your baseline just goes up. Steady all day."
> — *Maria L., Portland OR*
>
> **"SKEPTIC CONVERTED"**
> "My wife bought this. I thought it was woo-woo. Three weeks later I'm the one re-ordering."
> — *David R., Chicago IL*
>
> ---
>
> These are real people who were where you are now — curious but unsure.
>
> They took the chance. Their bodies did the rest.
>
> **30-day feel-the-difference guarantee.** If you don't notice a change, full refund. No questions.
>
> **[CTA BUTTON: Try Risk-Free — [X]% Off]**
>
> — [Founder Name]

**Design notes**: Testimonial-focused. Customer photos if available (even stock-style lifestyle photos work). Star ratings if you have them. Guarantee badge prominent.

**[VOID — requires: real customer testimonials]** These are placeholder testimonials from Danilo's framework. Replace with actual customer quotes once available. Until then, use only verifiable testimonials or remove this email from the flow.

---

## Email 5 — Day 7: Check-In + Final Push

**Subject**: `{{first_name}}, quick check-in`
**Preview**: `Hit reply — I read every one`
**Send**: Day 7 after signup

### Body

> Hey {{first_name}},
>
> It's been a week since you joined the IonWave community.
>
> I wanted to check in:
>
> **→ Have you tried IonWave yet?**
>
> If yes — how's it going? Reply and tell me. I read everything and respond personally.
>
> If not yet — no pressure. Here's a quick reminder of what's waiting:
>
> ✓ 78 ionic minerals (not 3-4 like synthetic brands)
> ✓ 98% bioavailable (vs ~10% for pills)
> ✓ 30-day feel-the-difference guarantee
> ✓ Free shipping on subscriptions
>
> Your code **[CODE]** is still active, but it expires in 48 hours.
>
> **[CTA BUTTON: Claim Your [X]% Off Before It Expires]**
>
> If now's not the right time, I understand. We'll keep sharing useful content — no spam, no pressure.
>
> Thanks for being here.
>
> — [Founder Name]
>
> P.S. Hit reply and tell me: what's the #1 thing holding you back? I personally respond to every email.

**Design notes**: Short, personal. No fancy design — plain text style (looks like a real email from a real person). The "reply" CTA is as important as the shop CTA — replies boost deliverability and provide qualitative insights.

---

## Flow-Level Metrics & Benchmarks

| Metric | Target (Month 1-3) | Target (Month 4+) | Source |
|--------|-------------------|--------------------|--------|
| Flow open rate (avg across 5 emails) | 45-60% | 50-65% | [Confidence: B \| Source: Klaviyo DTC welcome avg] |
| Flow click rate (avg) | 3-6% | 4-8% | [Confidence: B] |
| Welcome-to-purchase CVR | 5-8% | 8-12% | [Confidence: C \| Source: Klaviyo DTC] |
| Revenue per recipient (flow total) | $1-3 | $2-5 | [Confidence: C] |
| Unsubscribe rate per email | <0.5% | <0.3% | [Confidence: B] |

---

## Klaviyo Implementation Notes

1. **Trigger**: "Subscribed to list" → Main List (or specific signup source)
2. **Filter**: Exclude anyone who has already placed an order (they should go to buyer welcome / post-purchase)
3. **Exit condition**: If person places order → exit flow → enter Post-Purchase
4. **Smart Sending**: ON (16-hour window)
5. **Time delays**: Use "Wait X days" not specific times (adapts to subscriber timezone)
6. **Conditional split after Email 3**: If opened Email 1 OR Email 2 → continue. If 0 opens → skip to Email 5 (re-engagement/sunset approach).

---

## Intelligence Gaps

| Gap | Grade | Upgrade Path |
|-----|-------|-------------|
| Actual customer testimonials | D (placeholders used) | Collect from first 20 customers. Replace placeholders in Email 4. **HIGH PRIORITY.** |
| Optimal discount percentage | C (placeholder [X]%) | A/B test 10% vs 15% after 200+ flow entries |
| Day 7 reply rate | D (no data) | Track after 30 days. If <2% reply rate, consider changing CTA approach |
| Welcome-to-purchase CVR | D (no data) | Measure after 60 days of flow data |

---

*This is the canonical welcome series. See `email_subject_lines.md` for A/B test variants. See `email_flow_architecture.md` for how this flow fits in the lifecycle.*
