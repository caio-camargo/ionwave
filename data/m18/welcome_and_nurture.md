# M18: Welcome & Nurture Email Flows

**TUP**: M18 — Email Lifecycle Flows
**Version**: 1.0.0
**Date**: 2026-02-09
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 435, 438, 439; Klaviyo flow best practices 2026; M17 email_flow_architecture.md

---

## 1. Two Welcome Tracks (Critical Distinction)

IonWave has TWO distinct welcome audiences that must NEVER receive the same flow:

| Track | Trigger | Goal | Sequence |
|-------|---------|------|----------|
| **Track A: Subscriber Welcome** | Email opt-in (popup/lead magnet), NO purchase | Convert to first purchase | 5-7 emails over 10-14 days — educate → social proof → offer → urgency |
| **Track B: Purchaser Welcome** | First purchase completed | Onboard, reduce buyer's remorse, build habit | 5 emails over 7 days — usage ritual → brand story → community → check-in |

**Klaviyo Implementation**: Use conditional split at flow entry. "Has placed order = YES" → Track B. "Has placed order = NO" → Track A. [Confidence: A | Source: Klaviyo flow architecture]

**Rule**: If a Track A subscriber makes a purchase during the welcome flow, EXIT them from Track A and enter them into Track B (post-purchase). Never send "still thinking about it?" to someone who already bought. [Confidence: A | Source: DTC email best practice]

### Klaviyo Profile Properties (U4)

At flow entry, set these profile properties for flow conflict resolution:

| Property | Value | Purpose |
|----------|-------|---------|
| `flow_status` | `welcome_a_active` or `welcome_b_active` | Other flows check this to delay/skip |
| `consent_status` | Must = `subscribed` | 2026 Klaviyo requirement — verify at every flow entry |
| `welcome_completed_date` | Date of last email in flow | Used by campaign targeting to avoid over-sending to new subscribers |

Clear `flow_status` at flow exit (purchase or completion). [Confidence: A | Source: Klaviyo consent requirements 2026]

---

## 2. Track A: Subscriber Welcome Series (Non-Purchasers)

**Purpose**: Convert email subscribers who haven't bought yet.
**Source**: Danilo tabs 438, 439 (generic templates — adapted for IonWave)

### Flow Structure

| Email | Timing | Subject | Purpose | CTA | Discount? |
|-------|--------|---------|---------|-----|-----------|
| W1 | Immediate | Welcome to IonWave — here's your [X]% off | Deliver promise, set expectations | Shop Now | Yes (popup offer) |
| W2 | Day 1 | Why 78 minerals beats 3 | Education, differentiation | Learn More | No |
| W3 | Day 3 | {{first_name}}, real results from real people | Social proof, soft sell | Shop Now | No |
| W4 | Day 5 | What [customer_name] said about IonWave | Deeper social proof, testimonials | Shop Now | No |
| W5 | Day 7 | Your exclusive offer expires soon | Conversion push | Buy Now | Yes (original offer) |
| W6 | Day 10 | Still thinking about it? (let me answer that) | Objection handling | Buy Now | Optional 5% bump |
| W7 | Day 14 | Last chance: your [X]% off expires tonight | Final conversion | Buy Now | Yes (final) |

[Confidence: B | Source: Danilo tabs 438/439 + Klaviyo DTC welcome benchmarks]

### Email W1: Welcome (Template)

**Subject**: Welcome to IonWave — here's your {{discount_code_value}}% off
**Preview**: Your journey to real hydration starts now

---

Hey {{first_name}},

Welcome! You just joined {{subscriber_count}} people who are done feeling tired, foggy, and dehydrated.

As promised, here's your exclusive code: **{{discount_code}}**

Quick intro — IonWave is different because:

- 78 ocean-sourced minerals (not 3-4 synthetic ones)
- Zero sugar, zero junk
- Actually hydrates your cells (98% bioavailable vs ~10% for pills)

Over the next few days, I'll share:
- Why most electrolytes don't actually work
- Real stories from customers who finally feel energized
- The science behind ocean-sourced minerals

For now, use code **{{discount_code}}** for {{discount_code_value}}% off your first order.

**[CTA: Shop Now]**

Talk soon,
{{founder_name}}

P.S. This code expires in 7 days. Don't miss out.

---

### Key Rules for Track A

1. **Exit condition**: If subscriber places an order at ANY point → exit flow, enter Post-Purchase (Track B)
2. **Smart Sending**: Set to 16 hours minimum between emails to prevent overlap with other flows
3. **Suppression**: Exclude anyone who has already purchased (profile filter at flow entry)
4. **A/B test priority**: Subject lines on W1 (highest volume), then CTA placement on W5 (highest conversion intent)

---

## 3. Track B: Purchaser Welcome Series (First-Time Buyers)

**Purpose**: Onboard new customer, establish daily ritual, reduce buyer's remorse, build brand connection.
**Source**: Danilo tab 435 (IonWave-specific, fully written copy)

### Flow Structure

| Email | Timing | Subject | Purpose | Key Content |
|-------|--------|---------|---------|-------------|
| B1 | Immediate (order confirm) | Your minerals are on the way 🌊 | Confirm, set expectations | Order details + morning ritual instruction |
| B2 | Day 1 (getting started) | How to get the most from your first sachet | Usage guide, what to expect | The IonWave Ritual (30-second ritual), day-by-day timeline |
| B3 | Day 3 (brand story) | Why we started IonWave (the real reason) | Build connection, credibility | René Quinton discovery, 78 minerals, anti-synthetic positioning |
| B4 | Day 5 (social proof) | What our community is saying | Validate purchase decision | 4 customer testimonials with names + cities |
| B5 | Day 7 (check-in) | Quick check-in: how's it going? | Gather feedback, support | Expected results at 1 week, reply request for engagement |

[Confidence: A | Source: Danilo tab 435 — fully written IonWave copy]

### Email B1: Order Confirmation / Welcome

**Subject**: Your minerals are on the way 🌊
**Preview**: Here's what to expect (and what to do first)

---

Hey {{first_name}},

Your IonWave is officially on its way.

**Order #{{order_number}}**
{{product_name}} — {{quantity}}

You should receive tracking info within 24 hours, and your box will arrive in 3-5 business days.

**WHILE YOU WAIT:**

Before your first sachet arrives, here's the one thing that makes the biggest difference:

> Take it first thing in the morning. Empty stomach. Before coffee.

This gives your body the best window for absorption. Most customers who feel the difference fastest follow this ritual.

That's it. Tear, pour, drink. 30 seconds.

We're excited to have you. Welcome to IonWave.

— Nilo

P.S. Questions before your box arrives? Just reply to this email. We read everything.

---

### Email B2: Getting Started Guide

**Subject**: How to get the most from your first sachet
**Preview**: The 30-second ritual that changes everything

---

Hey {{first_name}},

Your box should be arriving soon (or maybe it's already there).

Here's how to make the most of it:

**THE IONWAVE RITUAL:**
- ☀️ Morning, empty stomach
- 💧 8oz water (room temp or cold)
- 📦 Tear one sachet
- ⏱️ Drink immediately

That's the whole thing. 30 seconds.

**WHAT TO EXPECT:**

| Timeline | What You'll Notice |
|----------|-------------------|
| **Day 1-3** | Subtle shifts — slightly more stable energy, less afternoon fog |
| **Day 4-14** | Real changes — more consistent energy, better recovery, clearer thinking |
| **Day 15-30** | Full system integration — this is what proper mineralization feels like |

The key is consistency. One sachet, every day. Don't skip.

Your body has been running on depleted minerals for years. Give it 30 days to remember what balanced feels like.

Talk soon,
Nilo

---

### Email B3: Brand Story

**Subject**: Why we started IonWave (the real reason)
**Preview**: It started with a 125-year-old discovery...

---

Hey {{first_name}},

Quick story about why IonWave exists.

In 1897, a French scientist named René Quinton discovered something extraordinary: human blood plasma is 98% identical to seawater. Same minerals. Same ratios. Same ionic structure.

He spent the rest of his life proving that marine plasma could restore mineral balance in the human body. French hospitals used it for decades. The research is solid.

So why hasn't everyone heard of this?

Because the supplement industry makes more money selling synthetic pills. Isolated compounds that cost pennies to produce, marked up 10x.

Marine plasma doesn't fit that model. It's harder to source. Harder to standardize. Can't be patented.

But it's what your body actually recognizes.

That's why we started IonWave. Not to create another supplement brand. To make Quinton's discovery accessible to anyone who wants to feel the difference.

78 minerals. Harvested from 30 meters below the ocean surface. The same form your body has used for millions of years.

No synthetic shortcuts. No factory compounds. Just pure ocean minerals.

We're glad you're here.

— Nilo

P.S. Want to go deeper? Here's the research: [LINK TO SCIENCE PAGE]

---

### Email B4: Social Proof

**Subject**: What our community is saying
**Preview**: Real results from real people

---

Hey {{first_name}},

You've been using IonWave for a few days now. Curious how others describe the experience?

---

> "I've tried every electrolyte brand. LMNT, Drip Drop, all of them. IonWave is the first one where I actually FELT different. My HRV is up, my energy is stable, and I cancelled three other supplements."
> — Marcus T., Austin

> "As a trainer, I recommend this to all my clients now. The difference in their recovery is visible."
> — Jennifer R., Los Angeles

> "I was skeptical. But three weeks in, my afternoon fatigue is gone. Just gone."
> — David K., New York

> "My sleep score went up 12 points in two weeks. Only thing I changed was adding IonWave in the morning."
> — Sarah M., Denver

---

Everyone's body is different. But if you're consistent — one sachet, every morning — you'll likely start noticing your own version of these results.

Keep going.

— Nilo

---

### Email B5: One-Week Check-In

**Subject**: Quick check-in: how's it going?
**Preview**: We want to hear from you

---

Hey {{first_name}},

One week in. How are you feeling?

**BY NOW, MOST PEOPLE NOTICE:**

✓ More stable energy (fewer crashes)
✓ Less brain fog, especially afternoon
✓ Better hydration that actually lasts
✓ Subtle but real improvement in recovery

If you're feeling these things — amazing. It means your body is responding to proper mineralization.

If you're not feeling much yet — that's okay too.

Some bodies take 2-3 weeks to fully respond, especially if you've been mineral-depleted for a long time. Stick with it. The changes are cumulative.

**ONE REQUEST:**

Hit reply and tell me one thing you've noticed. Good, bad, or just different.

I read every response. And your feedback helps us make IonWave better for everyone.

Here's to week two.

— Nilo

P.S. Running low? Your subscription automatically renews, so you'll never miss a day. Need to adjust your delivery schedule? [Manage Subscription]

---

## 4. Deliverability Requirements (2026)

Before ANY flow goes live, complete this authentication checklist:

| Requirement | Status | Notes |
|-------------|--------|-------|
| SPF record published | [ ] | List all authorized sending IPs in DNS |
| DKIM enabled | [ ] | Required by Gmail for all bulk senders (2024+) |
| DMARC policy set | [ ] | Minimum p=none. Align both SPF and DKIM |
| One-click unsubscribe header | [ ] | RFC 8058 List-Unsubscribe required for 5,000+ daily sends |
| Separate sending domains | [ ] | marketing@ionwave vs. orders@ionwave (transactional isolation) |
| Spam rate monitoring | [ ] | Google Postmaster Tools. Target: <0.1%. Hard limit: <0.3% |

[Confidence: A | Source: Google/Yahoo sender guidelines 2024-2026, enforced Nov 2025+]

**Microsoft enforcement**: As of May 2025, Outlook.com, Hotmail, and Live.com also enforce DKIM/DMARC. Triple-threat compliance is now table stakes. [Confidence: A | Source: Microsoft sender requirements 2025]

### Domain Warm-Up Protocol (U13)

**Do NOT blast your full list from a new sending domain on Day 1.** New Klaviyo accounts on a new domain need a 2-4 week gradual volume increase:

| Day | Daily Send Volume | Target Audience |
|-----|------------------|-----------------|
| Day 1-3 | 200-500 | Most recent opt-ins only (highest engagement probability) |
| Day 4-6 | 500-1,000 | Expand to all opt-ins from last 7 days |
| Day 7-10 | 1,000-2,500 | All engaged subscribers |
| Day 11-14 | 2,500-5,000 | Full list (if you have that many) |
| Day 15+ | Full volume | Normal sending cadence |

**Increase by ~50% every 2-3 days.** If bounce rate exceeds 5% or spam complaints exceed 0.1% at any step, pause for 48 hours and reduce volume.

**At launch**: Only send flow emails (welcome, cart, post-purchase) during Week 1. These are triggered by high-intent actions and have the best engagement rates, which builds domain reputation. Hold campaign sends until Week 2+. [Confidence: A | Source: ESP domain warm-up best practices]

---

## 5. Performance Targets

| Metric | Welcome Track A | Welcome Track B | Source |
|--------|----------------|----------------|--------|
| Open Rate | >45% | >55% | [Confidence: B | Klaviyo DTC health/wellness avg] |
| Click Rate | >3% | >5% | [Confidence: B | Klaviyo flow benchmarks] |
| First Purchase CVR (Track A) | >8% | N/A | [Confidence: B | Klaviyo DTC avg] |
| Unsubscribe Rate | <1% | <0.5% | [Confidence: B | Industry benchmark] |
| Reply Rate (B5 check-in) | >3% | >3% | [Confidence: C | DTC supplement heuristic] |

**Note on open rates**: Apple Mail Privacy Protection (46% of email clients) inflates open rates by ~18 points. Use click rate and conversion rate as primary performance indicators. [Confidence: A | Source: Apple MPP data]

---

## 6. Cross-TUP References

- **M17 email_flow_architecture.md**: Master lifecycle stages, flow build order, priority framework. M18 provides the actual email content within M17's architecture.
- **M17 sms_strategy.md**: SMS is a separate channel (defer to Month 3+). No SMS in welcome flows.
- **M19** (Subscription): Track B, Email B5 references subscription management. Subscription UX per M9 store_setup_and_launch.md.
- **M16** (Customer Acquisition): Subscriber welcome (Track A) is the bridge between acquisition and first purchase.

---

*Welcome flows are the highest-leverage email investment at launch. Build Track A and Track B before anything else. See `cart_recovery.md` for the next priority flow.*
