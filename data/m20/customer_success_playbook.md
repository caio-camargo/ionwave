# M20: Customer Success Playbook

**TUP**: M20 — Customer Support
**Scope**: Proactive success — journey touchpoints, activation, at-risk signals, 11-star experience vision
**Source Tabs**: 468 (Customer Success Playbook), 476 (11-Star Experience)
**Version**: 1.0.0 (initial workshop)
**Last Updated**: 2026-02-07

---

## 1. Support vs. Success

| Dimension | Customer Support | Customer Success |
|-----------|-----------------|------------------|
| **Trigger** | Customer contacts us (reactive) | We contact them (proactive) |
| **Goal** | Resolve the issue | Prevent the issue |
| **Metric** | CSAT, resolution time | Activation rate, retention rate |
| **Mindset** | Cost center | Revenue driver |
| **When** | After something breaks | Before something breaks |

IonWave blends both. At pre-revenue scale, the same person (founder) handles both. The distinction matters for mindset, not org chart.

---

## 2. Customer Journey Touchpoints

### Day 0-90 Touchpoint Map

This maps the **support-relevant** touchpoints in the first 90 days. For full lifecycle email flows, see M17 (Email Marketing). For subscription retention mechanics, see M21 (Subscription & Retention).

| Day | Touchpoint | Channel | Goal | Owner |
|-----|-----------|---------|------|-------|
| **Day 0** | Order confirmation | Email (Shopify) | Set expectations, reduce buyer's remorse | Automated |
| **Day 1** | Welcome + what to expect | Email (Klaviyo) | Educate on product, set timeline for results | Automated |
| **Day 2-3** | Shipping confirmation + tracking | Email (Shopify/fulfillment) | Reduce WISMO tickets | Automated |
| **Day 5-7** | Delivery + first use prompt | Email (Klaviyo) | Encourage immediate use, dosage guidance | Automated |
| **Day 7** | Product CSAT check | Email (Klaviyo / Delighted) | Catch early issues, taste/texture feedback | Automated → manual if negative |
| **Day 14** | "How's it going?" check-in | Email (Klaviyo) | Encourage consistency, link to education content | Automated |
| **Day 21** | Review request | Email (Judge.me / Okendo) | Collect social proof from happy customers | Automated |
| **Day 28** | Subscription renewal heads-up | Email (Loop / Klaviyo) | Reduce "I didn't know" subscription complaints | Automated |
| **Day 30** | NPS survey | Email (Delighted / Klaviyo) | Measure loyalty, trigger Promoter/Detractor flows | Automated → manual for Detractors |
| **Day 45** | "Milestone" content | Email (Klaviyo) | Reinforce results narrative, testimonials | Automated |
| **Day 60** | Mid-journey check | Email (Klaviyo) or SMS | Re-engage if inactive, celebrate if active | Automated |
| **Day 90** | "You've been with us 3 months" | Email (Klaviyo) | Thank subscriber, ask for referral, offer community access | Automated |

`[Confidence: B-C | Source: Danilo's journey framework + DTC supplement lifecycle research | Date: 2026]`

### Touchpoint-to-Ticket Relationship

Each touchpoint is designed to **prevent** specific ticket types:

| Touchpoint | Prevents | Ticket Type Avoided |
|-----------|----------|-------------------|
| Order confirmation | "Did my order go through?" | Billing |
| Shipping confirmation | "Where is my order?" | Shipping/Delivery |
| First use prompt | "How do I use this?" | Product Education |
| Day 7 CSAT | Unvoiced dissatisfaction | Product Quality (silent churn) |
| Renewal heads-up | "I didn't authorize this charge" | Subscription Management |

---

## 3. What "Working" Looks Like — Setting Expectations

Marine plasma is novel enough that customers won't have a reference frame for what "working" means. Proactive education prevents premature "it's not working" tickets and churn.

### Expected Outcomes Timeline

| Timeframe | What Customers May Notice | Why |
|-----------|--------------------------|-----|
| **Week 1** | Improved hydration, possible taste adjustment period | Electrolyte balance responds quickly; ocean mineral taste is unfamiliar |
| **Week 2-3** | Sustained energy, reduced afternoon crashes | Mineral cofactors support cellular energy production |
| **Month 1-2** | Improved recovery, sleep quality, or general well-being | Deeper mineral repletion takes time — this is the "stick with it" window |
| **Month 3+** | Systemic benefits (nail/hair/skin, exercise recovery, cognitive clarity) | Long-term mineral balance — varies significantly by individual |

`[Confidence: D | Source: general mineral supplementation timelines — IonWave-specific outcomes unvalidated | Date: 2026]`

> **⚠️ IMPORTANT**: These are general mineral supplementation expectations, NOT medical claims. All customer-facing communications must include appropriate disclaimers. FTC and FDA rules apply. See adverse event protocol in `support_operations.md`.

> **⚠️ INTELLIGENCE GAP**: Expected outcomes timeline needs validation from product testing and early customer feedback. Track actual customer-reported timelines starting Month 1. `[Priority: HIGH | Validation: first 50 customer check-in responses]`

### Where This Timeline Gets Used

- **Day 1 welcome email**: "Here's what to expect in your first month"
- **Day 7 CSAT check-in**: Anchor expectations against Week 1 outcomes
- **Day 14 check-in**: "You're in Week 2-3 territory — here's what's happening"
- **Support Macro 3** (product not working): Reference this timeline in response
- **Cancellation save flow**: "Most customers notice the biggest difference in Month 2"

---

## 4. Customer Activation

### Definition: When Is a Customer "Activated"?

A customer is activated when they've completed **all 4 core criteria** (behavioral, measurable):

| # | Criterion | How to Measure | Timeline |
|---|-----------|---------------|----------|
| 1 | **Received product** | Delivery confirmed via tracking | Day 3-7 |
| 2 | **Engaged with 3+ emails** | Klaviyo opens + clicks on welcome, education, or check-in emails | Day 1-14 |
| 3 | **Reached Day 14 without a complaint ticket** | No negative-sentiment Gorgias tickets | Day 0-14 |
| 4 | **Confirmed or received 2nd order** | Subscription renewal shipped OR repeat purchase | Day 28-60 |

**Bonus signal** (not gating): Customer self-reports noticing a difference (Day 14 check-in response or NPS follow-up text). Valuable data but not measurable at scale.

`[Confidence: C | Source: Danilo's activation checklist adapted to behavioral metrics per persona dialogue | Date: 2026]`

### Why Activation Matters

- Activated customers are **3-5x more likely to retain** through the first renewal `[Confidence: B | Source: SaaS/DTC retention research]`
- The activation window for supplements is **Day 7-21** — if a customer hasn't established a daily habit by Day 21, retention probability drops sharply `[Confidence: C]`
- Activation is the single best early predictor of subscription retention, better than NPS or CSAT `[Confidence: C]`

### Activation Rate Tracking

| Metric | Target | Red Flag |
|--------|--------|----------|
| Overall activation rate (all 4 criteria) | >50% | <30% |
| Email engagement rate (3+ emails, criterion 2) | >40% | <20% |
| Complaint-free Day 14 rate (criterion 3) | >85% | <70% |
| 2nd order rate within 60 days (criterion 4) | >45% | <25% |

> **Add to Weekly Support Scorecard** (see `support_operations.md` Section 7): Activation rate should appear alongside CSAT, NPS, and refund rate as a core support metric. It is the single best early predictor of retention.

> **⚠️ INTELLIGENCE GAP**: These activation rate targets are estimates. IonWave has no baseline data yet. Track from Day 1 and calibrate after 100 customers. `[Priority: HIGH | Validation: first 100 customers]`

---

## 4. At-Risk Signals & Intervention Playbook

### Early Warning Signals

| Signal | Data Source | Risk Level | Window to Intervene |
|--------|-----------|-----------|-------------------|
| No email engagement (0 opens in 14 days) | Klaviyo | 🟡 Medium | Day 14-21 |
| Subscription paused | Loop Subscriptions | 🟠 High | Within 48h |
| Negative review posted | Judge.me / Okendo / Google | 🔴 Critical | Within 4h |
| No reorder after 45 days (one-time buyer) | Shopify | 🟡 Medium | Day 45-60 |
| NPS Detractor score (0-6) | Delighted / NPS tool | 🔴 Critical | Within 4h |
| Support ticket unresolved >48h | Gorgias | 🟠 High | Immediately |
| Failed payment (dunning) | Loop Subscriptions | 🟠 High | Within 24h (automated) |
| Multiple contacts on same issue | Gorgias | 🟠 High | Tier 3 escalation |

### Intervention Playbook

| Signal | Intervention | Channel | Owner |
|--------|-------------|---------|-------|
| **No email engagement** | SMS nudge: "Hey [Name], just checking in — how's your IonWave experience?" | SMS | Automated (Klaviyo) |
| **Subscription paused** | Personal email from founder: "I noticed you paused — can I help with anything?" Include option to swap frequency/product | Email (manual) | Founder |
| **Negative review** | "Make it right" outreach: personal apology + resolution offer (refund + free product) + ask to update review after resolution | Email/DM (manual) | Founder |
| **No reorder (Day 45)** | Win-back offer: 20% off next order + education content on benefits of continued use | Email (Klaviyo) | Automated |
| **NPS Detractor** | Immediate Tier 3 escalation → AAAA+F recovery (see support_operations.md) | Phone/email (manual) | Founder |
| **Unresolved ticket >48h** | Internal alert + priority reassignment | Gorgias/Slack | Support lead |
| **Failed payment** | Dunning sequence: 3 retry attempts over 7 days + "update your card" email | Automated (Loop) | Automated → manual after 3 failures |
| **Multiple contacts** | Escalate to Tier 3 + proactive outreach with comprehensive resolution | Email/phone | Founder |

`[Confidence: B-C | Source: Danilo's intervention playbook + M21 retention playbook + DTC best practices | Date: 2026]`

### Cross-Reference: M21 Retention Playbook

M21 contains the comprehensive retention playbook (15 tactics in 3 tiers). The interventions above are the **support-triggered** subset. For full retention infrastructure including:
- Pre-cancellation save flow → see `data/m21/retention_playbook.md`
- Win-back offer ladder → see `data/m21/win_back_offer_ladder.md`
- Churn prediction signals → see `data/m21/churn_prediction.json`
- Subscription psychology → see `data/m21/subscription_psychology.md`

M20's intervention playbook is the **first responder** layer. M21 is the **strategic retention** layer. They connect at the handoff point: when a support intervention doesn't resolve the at-risk signal, it feeds into M21's deeper retention machinery.

---

## 5. The 11-Star Experience Framework

### Airbnb's Framework Applied to IonWave

The 11-Star framework starts with your current experience (5-star) and asks "what would make this even better?" all the way to absurd (11-star). Then work backwards to find the sweet spot between aspirational and feasible.

### The Spectrum

#### ⭐⭐⭐⭐⭐ 5-Star (Baseline — What We Deliver at Launch)

- Product arrives in 3-5 days
- Clean, functional packaging
- Product works as described
- Basic email support (<4 hour response)
- Standard subscription option

#### ⭐⭐⭐⭐⭐⭐ 6-Star (Better Than Expected)

- Arrives in 2 days with proactive tracking updates
- Beautiful unboxing experience
- Personalized note in first order
- Quick-start guide included in package
- Easy subscription management (pause/skip/swap)

#### ⭐⭐⭐⭐⭐⭐⭐ 7-Star (Memorable)

- Free sample of new flavor/variant with order
- Hand-written thank you card (founder)
- Access to private community (Skool/Circle)
- Live chat support with real humans
- Referral rewards program ($10 give / $10 get)

#### ⭐⭐⭐⭐⭐⭐⭐⭐ 8-Star (Remarkable)

- Mineral education course included (email series)
- Video from founder explaining their specific order
- Quarterly surprise gift for long-term subscribers
- Direct text line to support (SMS)
- Annual subscriber appreciation event (virtual)

#### ⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9-Star (Life-Changing)

- Free mineral blood/hair test with subscription
- Personalized mineral blend based on test results
- 1:1 consultation with nutritionist
- Dedicated health concierge
- Personal results tracking dashboard

#### ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10-Star (Unbelievable)

- Install a mineral water system in your home
- Monthly check-in call with personal health coach
- Trip to see the ocean source in Portugal
- Lifetime supply for your family
- Custom product line with your name on it

#### ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 11-Star (Absurd / Impossible)

- Private island retreat focused on mineral wellness
- Celebrity personally delivers your order
- We cure all your health problems forever
- Your own ocean to harvest minerals from
- Time travel back to drink primordial ocean water

### The Sweet Spot: Feasible in Next 6 Months

From the 6-9 star ideas, what can IonWave actually implement?

| Initiative | Star Level | Feasibility | Cost | Impact | Priority |
|-----------|-----------|-------------|------|--------|----------|
| ☐ Personalized note in first order | 6★ | Easy — print template, hand-write name | ~$0.50/order | Medium (memorable first impression) | P1 |
| ☐ Quick-start guide in package | 6★ | Easy — design once, print in bulk | ~$0.30/order | High (reduces education tickets) | P1 |
| ☐ Access to private community | 7★ | Medium — set up Skool or email community first | $0-99/month | Medium (loyalty + retention) | P2 |
| ☐ Referral rewards program | 7★ | Medium — implement via Smile.io or manual | $0-49/month + reward cost | High (organic growth) | P1 (see M22) |
| ☐ Quarterly surprise for long-term subscribers | 8★ | Medium — plan quarterly, budget per subscriber | $3-5/subscriber/quarter | High (retention + delight) | P2 |
| ☐ Results tracking via simple survey | 9★ lite | Easy — Typeform or Klaviyo flow | Free-$25/month | Medium (engagement + data) | P2 |
| ☐ Mineral education email course | 8★ | Easy — write 5-7 email sequence in Klaviyo | Time only | High (engagement + trust) | P1 |

`[Confidence: C-D | Source: Danilo's sweet spot framework + cost estimates | Date: 2026]`

### How 11-Star Connects to Daily Operations

The 11-Star framework is a **thinking tool**, not an operations checklist. Use it:
- **Quarterly**: In QBR (M25), review the sweet spot list. What have we implemented? What's next?
- **Monthly**: In MBR, check if any 6-7 star initiatives are slipping below 5-star baseline
- **When stuck**: If retention is flat, look at the 7-9 star column for ideas to test

---

## 6. Support-Driven Product Intelligence

### Turning Tickets Into Product Insights

Support tickets are the richest source of unfiltered customer feedback. Systematically mine them:

| Ticket Pattern | Insight Category | Feeds Into |
|---------------|-----------------|-----------|
| Recurring taste complaints | Product development | M10 (Pricing/Offer) — flavor options |
| "Didn't know it was a subscription" | UX/checkout design | M14 (Testing) — subscription clarity test |
| "How much should I take?" | Packaging/labeling | Product packaging redesign |
| "Can I give this to my kids?" | Market expansion signal | M27 (Customer Research) — family segment |
| "I mixed it with [X] and loved it" | Content/recipe ideas | M16 (Content) — usage content |
| "Compared to LMNT, this is..." | Competitive intelligence | M26 (Competitive Intel) — positioning data |

### Monthly Support Intelligence Report

Add to the MBR feedback section (see `customer_feedback_system.md`):

1. **Top 3 new themes** from support tickets this month
2. **Issue type shift** — what's growing vs. declining?
3. **Product feedback gems** — direct customer quotes worth sharing
4. **Competitive mentions** — who are customers comparing us to?
5. **Feature requests** — what do customers wish we had?

---

## 7. Founder Mode: Support at Scale of 1

### Month 1-6 Reality

At IonWave's stage, the "support team" is the founder (Danilo/operator). This is optimal for learning but unsustainable past ~100 orders/month.

### Founder Support Playbook

| Month | Orders | Tickets (est.) | Setup |
|-------|--------|----------------|-------|
| 0-1 | 0-50 | 0-40 | Founder handles all. Gorgias on phone. 30 min/day. |
| 1-3 | 50-200 | 35-140 | Founder handles all. Macros save 50% time. 1 hr/day. |
| 3-6 | 200-500 | 120-300 | Hire part-time VA for Tier 1. Founder handles Tier 2-3. VA: 2-3 hrs/day. |
| 6-12 | 500-2,000 | 300-1,200 | Full Tier 1 VA. Consider Gorgias Pro. Founder: Tier 3 only. |

### When to Hire First Support VA

**Trigger**: When support takes >2 hours/day consistently for 2+ weeks AND founder is pulled from growth work.

**Profile**:
- E-commerce support experience (Gorgias/Zendesk preferred)
- Supplement/health product familiarity (bonus)
- US timezone (for <1 hour response target)
- Start part-time (10-15 hrs/week), expand as needed

**Cost estimate**: $15-20/hr US-based VA, $8-12/hr international VA `[Confidence: C | Source: DTC VA market rates | Date: 2026]`

### What the Founder Should NEVER Delegate (Until VP of CX)

- Tier 4 escalations (adverse events, legal threats)
- NPS Detractor recovery outreach
- Monthly support intelligence review
- Policy exceptions >$50
- Negative review responses

---

## Intelligence Gaps

| Gap | Priority | Validation Path |
|-----|----------|----------------|
| Activation rate baseline (all 5 criteria) | HIGH | Track from first 100 customers |
| Actual at-risk signal accuracy | MEDIUM | Validate signals against actual churn data after 6 months |
| 11-Star sweet spot ROI | LOW | Track implementation cost vs. retention impact per initiative |
| Founder support time per day at each scale | LOW | Log actual time starting Month 1 |
| VA hiring trigger point (exact order volume) | MEDIUM | Monitor founder time allocation weekly |
| Sachet-specific packaging insert cost | LOW | Get print quote pre-launch |
