# M18: Post-Purchase & Retention Email Flows

**TUP**: M18 — Email Lifecycle Flows
**Version**: 1.0.0
**Date**: 2026-02-09
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 437, 442, 443; Klaviyo post-purchase benchmarks 2026; M17 email_flow_architecture.md

---

## 1. Post-Purchase Flow Strategy

### Why Post-Purchase Emails Matter

Post-purchase is where IonWave turns a buyer into a subscriber. The 60-day window after first purchase is the highest-leverage retention period:

| Reality | Data |
|---------|------|
| Flow RPR is 20x higher than campaigns | $1.94 avg vs. $0.10 avg [Confidence: B | Source: Klaviyo benchmarks] |
| Automated flows drive 37% of email revenue | From just 2% of send volume [Confidence: B | Source: Omnisend] |
| Review rate target | >15% of customers leave a review [Confidence: C | Source: DTC supplement avg] |
| 30-day retention target | 84% continue subscription past Month 3 [Confidence: C | Source: Danilo tab 437 claim — needs validation] |

### Two-Phase Approach

| Phase | Period | Emails | Focus |
|-------|--------|--------|-------|
| **Phase 1: Onboarding** | Day 0-14 | 4 emails | Confirm → educate → science → check-in |
| **Phase 2: Retention** | Day 15-60 | 3 emails | Subscription management → review → milestone → upsell |

**Product format**: IonWave is a **sachet** (tear, pour, drink — 30 seconds). Not a scoop, not a powder tub. All copy must reference sachet format consistently. [Confidence: A | Source: IonWave product spec, Danilo tab 435]

---

## 2. Phase 1: Onboarding (Day 0-14)

### Flow Structure

| Email | Timing | Subject | Purpose |
|-------|--------|---------|---------|
| PP1 | Day 7 | How's your first week going? | Early check-in, set expectations |
| PP2 | Day 14 | The changes happening inside you | Science-backed education, deepen commitment |
| PP3 | Day 21 | Heads up: box #2 ships in 9 days | Subscription logistics, reduce surprise charges |
| PP4 | Day 25 | Quick favor? Takes 30 seconds. | Review request at peak satisfaction |

**Note**: Order confirmation (immediate) and shipping notification (when shipped) are **transactional emails** handled by Shopify, not Klaviyo flows. Post-purchase flow starts AFTER delivery. [Confidence: A | Source: M17 email_flow_architecture.md]

### Email PP1: First Week Check-In (Day 7)

**Subject**: How's your first week going?
**Preview**: What most people feel by now

---

Hey {{first_name}},

One week of IonWave. Let's check in.

**BY NOW, YOU MIGHT NOTICE:**

→ More stable energy through the day
→ Less of that 3pm crash
→ Subtle improvement in mental clarity
→ Hydration that actually feels different

If you're feeling some of these — great. Your body is responding.

If not yet — that's normal too. Bodies that have been mineral-depleted for years sometimes need 2-3 weeks to fully calibrate.

The key: don't stop. Consistency is everything.

One sachet. Every morning. Let the minerals do their work.

**HOW CAN WE HELP?**

If something's not working, reply to this email. I read everything and respond personally.

You're not just a customer. You're part of this now.

— Nilo

---

### Email PP2: The Science (Day 14)

**Subject**: The changes happening inside you
**Preview**: What 2 weeks of proper mineralization actually does

---

Hey {{first_name}},

Two weeks in. Here's what's happening beneath the surface:

**CELLULAR HYDRATION**
Your cells are finally getting minerals in ionic form — the only form they can actually use. This is different from drinking more water. This is water that works.

**ENZYME ACTIVATION**
Over 300 enzymes in your body require minerals to function. They've been running on fumes. Now they have fuel.

**NERVOUS SYSTEM SUPPORT**
Magnesium, potassium, calcium — these aren't just electrolytes. They're how your neurons fire. Properly mineralized = calmer, clearer, faster.

**RECOVERY OPTIMIZATION**
Your muscles don't just need protein. They need the minerals that power repair at the cellular level.

This isn't hype. This is biochemistry.

And you're two weeks into it.

Keep going. The best changes are still ahead.

— Nilo

P.S. Tracking your health metrics? We'd love to see your before/after. Reply with screenshots if you've got them.

---

### Email PP3: Subscription Reminder (Day 21)

**Subject**: Heads up: box #2 ships in 9 days
**Preview**: Plus: a way to save on your next order

---

Hey {{first_name}},

Quick logistical note:

Your next box of IonWave ships in 9 days.

Same address. Same payment method. Nothing you need to do.

**WANT TO ADD ANYTHING?**

Some customers grab a second box for travel. Or switch to our 3-month bundle for better savings.

**[MANAGE YOUR SUBSCRIPTION →]**

**NEED TO PAUSE OR CHANGE TIMING?**

No problem. You can:
— Push back your next shipment
— Change delivery frequency
— Update your address

All from your account dashboard. No phone calls, no hassle.

**[UPDATE PREFERENCES →]**

Thanks for sticking with it. Three weeks of consistent minerals is when most people really start to feel the difference.

— Nilo

---

### Email PP4: Review Request (Day 25)

**Subject**: Quick favor? Takes 30 seconds.
**Preview**: Your feedback helps more than you know

---

Hey {{first_name}},

You've been with us almost a month now.

Can I ask a quick favor?

If IonWave has made a difference for you — more energy, better recovery, clearer thinking, anything — would you take 30 seconds to leave a review?

**[LEAVE A REVIEW →]**

**WHY IT MATTERS:**

We're a small team. We don't have celebrity endorsers or massive ad budgets.

What we have is customers who feel the difference and tell others about it.

Your review helps someone else take the chance you took a month ago.

Even just a sentence or two helps.

Thank you — seriously.

— Nilo

P.S. Had a problem? Don't leave a bad review — just reply to this email. We'll fix it.

---

## 3. Phase 2: Retention Milestones (Day 30-60)

> **U3 Note**: PP5 (30-day milestone) remains in the post-purchase FLOW because it has a clear trigger (Day 30 from purchase). PP6 (early access) and PP7 (survey) are moved to CAMPAIGN sends because they depend on product availability and business timing, not customer lifecycle timing. Once a subscriber reaches Day 30, they exit the post-purchase flow and enter the regular subscriber email cadence.

### Flow Structure

| Email | Timing | Type | Subject | Purpose |
|-------|--------|------|---------|---------|
| PP5 | Day 30 | **FLOW** | One month in. Here's what we've learned. | Celebrate milestone, upgrade offer |
| PP6 | Month 2+ | **CAMPAIGN** (subscriber segment) | Members-only: new product preview | Early access, VIP treatment |
| PP7 | Month 2+ | **CAMPAIGN** (subscriber segment) | One quick question | Survey, feedback loop |

### Email PP5: 30-Day Milestone

**Subject**: One month in. Here's what we've learned.
**Preview**: Congratulations — and a special offer

---

Hey {{first_name}},

30 days of IonWave.

This is the point where it stops being an experiment and becomes a habit. Your body has had a full cycle to integrate proper mineralization.

**WHAT OUR DATA SHOWS AT 30 DAYS:**

→ 73% of customers report sustained energy improvements
→ 68% report better recovery after workouts
→ 61% report improved sleep quality
→ 84% continue their subscription past month 3

> **⚠️ CONTENT NOTE (U9)**: These statistics are from Danilo tab 437 and are ASPIRATIONAL until validated by actual IonWave customer data. Do NOT use in marketing emails until confirmed by real survey data (target: Month 3 post-launch). Replace with "[X]% of customers report..." placeholders if launching before validation. [Confidence: D | Source: Danilo claim — unverified]

You're part of this now.

**AS A THANK YOU:**

For hitting the 30-day mark, here's an exclusive offer:

**UPGRADE TO 90-DAY SUPPLY**
Save 28% vs monthly
Code: **MONTH1**

**[CLAIM OFFER →]**

Locks in your current price. Ships every 3 months. Less to think about.

Or keep your monthly subscription — either way, we're glad you're here.

Here's to month two.

— Nilo

---

### Email PP6: Early Access / VIP (Day 45)

**Subject**: Members-only: new product preview
**Preview**: You get first access

---

Hey {{first_name}},

Because you're a subscriber, you get first access to this:

**[PRODUCT PREVIEW: IONWAVE MINERAL DROPS]**

Same marine plasma. Travel-size format.

Perfect for:
— Flights (TSA-friendly)
— Hotel stays
— Days you forget your sachet
— Adding to coffee, smoothies, whatever

Launches next month. But you can reserve yours now at founding-member pricing:

**$19 (retail will be $29)**

**[RESERVE NOW →]**

Only available to existing subscribers. Not on our main site.

This is our way of saying thanks for being early.

— Nilo

P.S. Not interested in drops? No worries. Just wanted you to have first shot.

---

### Email PP7: Single-Question Survey (Campaign — Month 2+)

> **U14**: Reduced from 3 questions to 1. Single-question surveys get 3-4x the response rate. Use replies as testimonial content (with permission). This creates a flywheel: survey → testimonial → welcome email social proof.

**Subject**: One quick question
**Preview**: Takes 10 seconds. Your answer shapes what we build.

---

Hey {{first_name}},

You've been using IonWave for a while now. I have one question:

**What's the #1 change you've noticed since starting IonWave?**

Just hit reply and tell me in one sentence. That's it.

Your answer helps us build something better — and helps the next person decide to try it.

— Nilo

P.S. Know someone who should try IonWave? Forward this email and they'll get 15% off their first box with code FRIEND15.

---

## 4. Flow Logic & Technical Configuration

### Klaviyo Flow Setup

```
TRIGGER: Placed Order (first time)
  ↓
FILTER: Order count = 1 (first purchase only)
FILTER: Has NOT been in this flow before
  ↓
CONDITIONAL SPLIT: Is in Welcome Track A?
  YES → EXIT Track A, continue here
  NO  → Continue
  ↓
⏱️ Wait 7 days (from order date)
  ↓
📧 Send PP1 (Week 1 Check-In)
  ↓
⏱️ Wait 7 days (Day 14)
  ↓
📧 Send PP2 (Science)
  ↓
⏱️ Wait 7 days (Day 21)
  ↓
CONDITIONAL SPLIT: Is subscriber?
  YES → 📧 Send PP3 (Subscription Reminder)
  NO  → 📧 Send PP3-ALT (Subscription Pitch)
  ↓
⏱️ Wait 4 days (Day 25)
  ↓
CONDITIONAL SPLIT: Has left a review?
  YES → SKIP review email
  NO  → 📧 Send PP4 (Review Request)
  ↓
⏱️ Wait 5 days (Day 30)
  ↓
📧 Send PP5 (Milestone + Upsell)
  ↓
END FLOW → Customer enters regular subscriber email cadence
  (PP6 and PP7 are CAMPAIGN sends, not flow emails — see U3 note above)
```

### Critical Conditional Splits

| Split | Logic | Why |
|-------|-------|-----|
| First purchase only | Order count = 1 | Repeat buyers get a different (shorter) post-purchase flow |
| Subscriber vs. non-subscriber | PP3 subscription reminder vs. subscription pitch | Different messaging for each |
| Has left review | Skip PP4 if review already submitted | Don't ask twice |
| VIP threshold | After PP7, check if LTV >$150 or orders ≥3 | Route VIPs to referral flow |

---

## 5. Repeat Purchase Post-Purchase (Abbreviated)

Repeat buyers (order count ≥2) get a shortened flow:

| Email | Timing | Content |
|-------|--------|---------|
| RP1 | Day 1 after delivery | Thank you + "have you tried [new product]?" cross-sell |
| RP2 | Day 7 | Review request (if not already reviewed) |
| RP3 | Day 14 | Referral invitation (FRIEND15 code) |

**No onboarding needed** — they already know the product. Focus on cross-sell, review, and referral. [Confidence: B | Source: DTC post-purchase best practice]

---

## 6. Performance Targets

| Metric | Target | How to Measure |
|--------|--------|---------------|
| PP1 reply rate | >5% | Klaviyo metric: replies |
| PP4 review completion | >15% of recipients | Review platform + Klaviyo conversion metric |
| PP5 upgrade rate | >3% of recipients | Subscription plan changes tracked in Shopify |
| PP6 early access conversion | >5% of recipients | Landing page conversion |
| PP7 survey completion | >10% of recipients | Survey tool (Typeform/Google Forms) completion |
| 60-day retention rate | >70% of subscribers | Shopify subscription analytics |

---

## 7. Replenishment Flow (Separate from Post-Purchase)

For customers who purchased a one-time order (NOT subscription):

| Email | Timing | Subject | Strategy |
|-------|--------|---------|----------|
| R1 | Day 23 (7 days before 30-day supply runs out) | Running low on IonWave? | Gentle reminder + subscription pitch |
| R2 | Day 28 (2 days before) | Your minerals are almost gone | Urgency + subscribe & save offer |
| R3 | Day 30 (day of depletion) | Last sachet? Here's 15% off your next box | Discount for reorder |

**Trigger**: Product depletion projection based on purchase date and product supply duration.
**Suppression**: Exclude subscribers (they auto-renew). Exclude anyone who already reordered.
**Click-to-open rate benchmark**: 53.6% (replenishment emails are among the highest-performing flow emails) [Confidence: B | Source: DTC replenishment flow data]

---

## 8. Subscription Conversion Decision Tree (U10)

Every touchpoint where subscription is mentioned must follow a consistent escalation logic. This is the single biggest revenue lever for a consumable supplement brand:

```
FIRST PURCHASE
  ↓
Is subscriber already? ─── YES → Skip to Retention track (PP1-PP5)
  │
  NO
  ↓
PP3 (Day 21): Soft subscription mention
  "Switch to 3-month bundle for better savings"
  ↓
Replenishment R1 (Day 23): Subscription pitch alongside reorder
  "Subscribe & save [X]%"
  ↓
PP5 (Day 30): 90-day upgrade offer
  "Save 28% vs monthly" + Code: MONTH1
  ↓
Replenishment R3 (Day 30): Discount for one-time reorder
  "15% off your next box"
  ↓
SECOND PURCHASE
  ↓
Subscription Offer flow (Day 1 after 2nd order):
  "You've reordered twice. Lock in your price with a subscription."
  ↓
Subscription Offer flow (Day 5 after 2nd order):
  Value comparison: Subscription vs. one-time (show total cost over 6 months)
  ↓
STILL NOT SUBSCRIBED after 2nd purchase?
  ↓
Continue one-time replenishment cycle. Do NOT hard-sell subscription.
Wait for natural 3rd purchase → VIP Recognition flow → Subscription is implied.
```

**Rules**:
1. Never mention subscription more than once per email
2. Always frame as saving money/convenience, never as commitment
3. One-time buyers are valid customers — don't make them feel lesser
4. After 3 failed subscription pitches across different flows, stop pitching for 60 days

[Confidence: B | Source: DTC subscription conversion best practices + Retention Strategist dialogue]

---

## 9. Cross-TUP References

- **M17 email_flow_architecture.md**: Post-purchase is Priority 1, Phase 2 flow. Build basic version (PP1-PP3) at launch, expand to PP4-PP7 in Month 2.
- **M19** (Subscription): PP3/PP5 subscription management and upsell must align with subscription pricing and portal UX.
- **M9 store_setup_and_launch.md**: Subscription toggle UX (per M9 U8) — toggle > dropdown, sub price first.
- **M21** (Customer Experience): PP1 check-in and PP7 survey feed CX feedback loop.
- **M30** (Analytics): Post-purchase flow revenue and retention metrics feed MVD reporting.

---

*Post-purchase flows turn buyers into subscribers. Build PP1-PP3 at launch, expand to full 7-email sequence by Month 2. See `winback_and_lifecycle.md` for the final flow set.*
