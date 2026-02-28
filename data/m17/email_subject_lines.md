# M17: Subject Line Formula Library

**TUP**: M17 — Email & SMS
**Version**: 1.0.0
**Date**: 2026-02-07
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 425, 426; email marketing best practices

---

## 1. Subject Line Principles

| Principle | Why | Evidence |
|-----------|-----|---------|
| Keep under 50 characters | Mobile preview truncates at ~40-50 chars. 70%+ of opens are mobile. | [Confidence: A \| Source: Litmus/Klaviyo data] |
| Create curiosity OR be ultra-specific | Mid-range performs worst ("kind of interesting"). Go all the way in one direction. | [Confidence: B \| Source: email marketing consensus] |
| Personalization increases opens 20%+ | `[First Name]` in subject line signals "this is for me" | [Confidence: B \| Source: Klaviyo personalization data] |
| Preview text is equally important | Subject + preview = your pitch in the inbox. Treat as a unit. | [Confidence: B \| Source: Litmus eye-tracking] |
| Test emojis cautiously | Work for some audiences (younger, wellness). Can feel spammy for others. | [Confidence: C \| Source: mixed evidence] |
| Front-load important words | First 3-4 words determine open — the rest may be truncated | [Confidence: B \| Source: mobile UX data] |
| Match subject to email content | Bait-and-switch kills trust and deliverability (spam complaints) | [Confidence: A \| Source: ESP policy + best practice] |

---

## 2. Subject Line Formulas

11 proven formula types with IonWave-specific examples:

| # | Formula | Mechanism | Example | Best For |
|---|---------|-----------|---------|----------|
| 1 | **Personal + Specific** | Name + clear value | `{{first_name}}, your energy awaits` | Welcome, cart recovery |
| 2 | **Question** | Engages curiosity, invites self-reflection | `Still tired by 2pm?` | Awareness, re-engagement |
| 3 | **Curiosity Gap** | Creates information gap reader needs to close | `The mineral you're missing` | Education, nurture |
| 4 | **Number + Benefit** | Specificity signals substance | `78 reasons you're dehydrated` | Education |
| 5 | **How-To** | Promises actionable value | `How to beat the afternoon crash` | Education |
| 6 | **Urgency + Offer** | Scarcity drives action | `24 hours left: 20% off` | Sales, cart recovery |
| 7 | **Social Proof** | Others validate the choice | `Why 10,000 people switched` | Conversion |
| 8 | **Story Tease** | Narrative hook creates curiosity | `Why I almost gave up` | Founder story, brand |
| 9 | **Direct Offer** | Straight to the value | `25% off - today only` | Sales |
| 10 | **FOMO** | Fear of missing out | `Everyone's talking about this` | Launch, trending |
| 11 | **Emoji + Short** | Pattern interrupt in inbox | `You forgot something` | Cart recovery |

---

## 3. Subject Lines by Flow

### Welcome Series

| Email | Subject Line A | Subject Line B (A/B test) | Preview Text |
|-------|---------------|--------------------------|--------------|
| W1 (Immediate) | `Welcome to IonWave — here's your [X]% off` | `You're in! Here's what happens next` | `Plus: why 78 minerals changes everything` |
| W2 (Day 1) | `{{first_name}}, here's your getting started ritual` | `Quick tip: empty stomach, before coffee` | `Most people feel the difference by Day 3` |
| W3 (Day 3) | `Why we started IonWave (it's personal)` | `The 120-year-old science behind this` | `It started with a French biologist named René Quinton...` |
| W4 (Day 5) | `See what others are saying` | `"I finally stopped crashing at 2pm"` | `Real customers, real results` |
| W5 (Day 7) | `How's it going? (quick check-in)` | `{{first_name}}, quick question` | `Hit reply — I read every one` |

### Abandoned Cart

| Email | Subject Line A | Subject Line B | Preview Text |
|-------|---------------|---------------|--------------|
| AC1 (1 hour) | `You left something behind...` | `Did you forget something?` | `Your IonWave is waiting` |
| AC2 (24 hours) | `Still thinking about it?` | `Is something holding you back?` | `Let me answer the question you're probably asking` |
| AC3 (72 hours) | `Last chance: your cart expires tonight` | `Your cart is about to expire (+ free shipping)` | `Plus: free shipping on us` |

### Post-Purchase

| Email | Subject Line A | Subject Line B | Preview Text |
|-------|---------------|---------------|--------------|
| PP1 (Day 0) | `Your order is confirmed!` | `Order #{{order_number}} confirmed` | `Here's your first-use tip` |
| PP2 (Day 7) | `How's your first week going?` | `One week in — here's what to expect` | `What most people feel by now` |
| PP3 (Day 14) | `The changes happening inside you` | `What 2 weeks of minerals actually does` | `Science, not hype` |
| PP4 (Day 21) | `Heads up: box #2 ships in 9 days` | `Your next shipment is almost here` | `Plus: a way to save` |
| PP5 (Day 25) | `Quick favor? Takes 30 seconds.` | `How are you liking IonWave?` | `Your feedback helps more than you know` |
| PP6 (Day 30) | `One month in. Here's what we've learned.` | `30 days of IonWave — congratulations` | `Plus a special offer` |
| PP7 (Day 60) | `Your 60-day check-in` | `{{first_name}}, quick survey` | `Quick survey + chance to win` |

### Win-Back

| Email | Subject Line A | Subject Line B | Preview Text |
|-------|---------------|---------------|--------------|
| WB1 (60 days) | `We miss you, {{first_name}}` | `It's been a while...` | `Is everything okay?` |
| WB2 (75 days) | `A lot has changed...` | `Here's what's new at IonWave` | `Updates you might have missed` |
| WB3 (90 days) | `{{first_name}}, here's 25% off` | `Here's 25% off to come back` | `Our biggest discount` |
| WB4 (105 days) | `Should we say goodbye?` | `Last email from us (unless...)` | `We don't want to bother you` |

---

## 4. A/B Testing Framework

### Founder Mode Testing Cadence

| Volume | Testing Approach | Why |
|--------|-----------------|-----|
| <1,000 subscribers | **Don't A/B test campaigns** — sample too small for significance | Need 1,000+ sends per variant for reliable results [Confidence: B \| Source: statistical significance calculators] |
| <1,000 subscribers | **DO A/B test flow subject lines** — flows accumulate volume over time | Welcome + Cart flows will get enough sends after 2-3 months |
| 1,000-5,000 | Test 1 thing per campaign send (subject line only, or send time only) | Keep variables isolated |
| 5,000+ | Full A/B testing: subject lines, preview text, send time, content | Enough volume for statistical significance per test |

### What to Test (Priority Order)

1. **Subject line** — Highest impact, easiest to test. Test 2 variants.
2. **Send time** — Morning vs. evening. Test after subject line winner is found.
3. **Preview text** — Often overlooked. Test once subject line is optimized.
4. **CTA button text** — "Shop Now" vs. "Get Started" vs. "Claim Your Discount"
5. **Email length** — Long-form story vs. short-form direct. Test on campaigns only.

### A/B Test Protocol

1. Set variant split to 50/50
2. Wait minimum 4 hours before declaring winner (Klaviyo default)
3. Record results in a simple spreadsheet (date, flow, subject A, subject B, winner, open rate difference)
4. After 3 months, review patterns — which formula types win consistently?
5. Don't test during launches, sales, or holidays (confounding variables)

---

## 5. Subject Line Do's and Don'ts

### Do

- [ ] Front-load the benefit or hook in first 4-5 words
- [ ] Use `{{first_name}}` on 1 in 3 emails (not every one — it loses power)
- [ ] Write preview text intentionally (don't let it default to "View in browser")
- [ ] Use lowercase naturally (sentence case, not Title Case)
- [ ] Reference specific numbers when possible (78 minerals, 30-day guarantee)

### Don't

- [ ] ALL CAPS (looks spammy, triggers filters)
- [ ] More than 1 emoji per subject line
- [ ] Misleading subjects ("RE:" or "FWD:" when it's not a reply)
- [ ] Exclamation marks!!! (1 max, and sparingly)
- [ ] Spam trigger words: "FREE!!!", "Act now!", "Limited time only!!!", "Click here"
- [ ] Over-promising: "This will change your life" → tone down to "This might change your mornings"

---

## 6. Intelligence Gaps

| Gap | Current Grade | Upgrade Path |
|-----|--------------|-------------|
| IonWave-specific open rates by subject formula | D (no data) | Track after 60 days of sends |
| Emoji impact on IonWave audience | C (mixed evidence) | A/B test emoji vs. no emoji on welcome email |
| Optimal personalization frequency | C (heuristic: 1 in 3) | Track unsubscribe rates when personalization is used vs. not |
| Preview text impact on opens | C (industry data) | A/B test after subject line optimization is stable |

---

*See `email_welcome_series.md`, `email_abandoned_cart.md`, `email_post_purchase.md`, `email_winback.md` for the full sequences these subject lines belong to.*
