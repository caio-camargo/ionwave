# OpKit: Email Lifecycle Flows

**ID**: OK-M18-001
**Source TUP**: M18 — Email Lifecycle Flows
**Version**: 1.0.0
**Date**: 2026-02-09
**Quality**: 8.7/10

---

## Purpose

Build a complete email lifecycle automation system for a D2C subscription brand using Klaviyo. Covers welcome flows, cart recovery, post-purchase retention, win-back, and list hygiene — from pre-launch setup through Month 6 maturity.

---

## Instructions (14 Steps)

### Pre-Launch (Week -4 to -1)

1. **Set up email authentication** — SPF, DKIM, DMARC. Separate marketing and transactional sending domains. Verify in Google Postmaster Tools and Yahoo Sender Hub.

2. **Configure Klaviyo tracking** — Install tracking snippet on all pages. Verify "Viewed Product", "Added to Cart", "Started Checkout", and "Placed Order" events fire correctly.

3. **Build Welcome Flow (Track A — Subscribers)** — 5-7 email sequence for non-purchasers. Immediate → Day 1 → Day 3 → Day 5 → Day 7 → Day 10 → Day 14. Educate → social proof → offer → urgency. Use founder voice.

4. **Build Welcome Flow (Track B — Purchasers)** — 5 email sequence for first-time buyers. Immediate → Day 1 → Day 3 → Day 5 → Day 7. Confirm → ritual guide → brand story → social proof → check-in. Use founder voice.

5. **Build Cart Abandonment Flow** — 3 emails. 1hr (reminder) → 24hr (objection handling) → 72hr (incentive). No discount in Email 1. Auto-apply free shipping in Email 3 (no code friction).

6. **Build Checkout Abandonment Flow** — 3 emails. 15min (fast reminder) → 4hr (trust) → 24hr (incentive). Separate from cart flow — higher intent, faster cadence.

7. **Build Basic Post-Purchase Flow** — 4 emails. Day 7 (check-in) → Day 14 (science) → Day 21 (subscription reminder) → Day 25 (review request). Expand to full 5-email flow + campaigns in Month 2.

### Launch Week

8. **Execute domain warm-up** — Start with 200-500 emails/day to most recent opt-ins. Increase by 50% every 2-3 days. Only send flow emails in Week 1. Hold campaigns until Week 2+.

### Month 2-3

9. **Build Browse Abandonment Flow** — 2 emails. 24hr → 72hr. Requires Viewed Product tracking (set up in Step 2) and >500 monthly product page visitors.

10. **Build Replenishment Flow** — 3 emails for non-subscribers. Day 23 → Day 28 → Day 30 from purchase. Subscription pitch at each touchpoint.

11. **Build Win-Back Flow** — 4 emails. Day 60 → Day 75 → Day 90 → Day 105. Discount escalation: none → 15% → 25% → 25% (final). Include sunset warning in Email 4.

### Month 4-6

12. **Build Pre-Churn Intervention** — Triggered by subscription cancel or payment failure events. Within 1-2 hours. Segment by cancel reason for personalized retention offers.

13. **Implement Sunset/List Hygiene** — Define engagement tiers (Champion → Active → Waning → Dormant → Lapsed). Automate re-engagement and suppression. Run monthly.

14. **Create Engagement Segments** — Engaged 30d, Engaged 90d, VIP, Unengaged 90d+. Target all campaign sends to Engaged 30d minimum. Never send campaigns to unengaged subscribers.

---

## Grading Rubric

| Grade | Criteria |
|-------|----------|
| **A (9-10)** | All 13 flows built. Engagement segments active. Domain reputation >90%. Flow revenue >30% of total email revenue. Recovery rate >5%. Subscription conversion >12%. |
| **B (7-8)** | P1 and P2 flows built. Engagement segments active. Authentication complete. Flow revenue >20% of total email revenue. Recovery rate >3%. |
| **C (5-6)** | P1 flows built (welcome, cart, basic post-purchase). Authentication complete. Some performance tracking but no optimization. |
| **D (3-4)** | 1-2 flows built. Authentication incomplete. No engagement segments. No domain warm-up. |
| **F (0-2)** | No automated flows. Sending campaigns to full list. Authentication not configured. |

---

## Scaffold (4 Files)

| File | Contents |
|------|----------|
| `welcome_and_nurture.md` | Track A (subscriber) + Track B (purchaser) welcome flows, email copy, deliverability requirements, domain warm-up protocol |
| `cart_recovery.md` | Cart abandonment + checkout abandonment flows, email copy, browse abandonment plan, discount escalation rules |
| `post_purchase_and_retention.md` | Post-purchase onboarding (7 emails), replenishment flow, review solicitation, subscription conversion decision tree |
| `winback_and_lifecycle.md` | Win-back sequence, pre-churn intervention, sunset/list hygiene, master lifecycle automation map, engagement segments |

---

## IonWave Graded Example: 8.7/10

**What IonWave did well**:
- Two distinct welcome tracks (subscriber vs. purchaser) with clear segmentation
- Fully written IonWave-specific email copy (not just templates) with founder voice
- Subscription Conversion Decision Tree orchestrating all touchpoints
- Domain warm-up protocol for new sending domain
- Pre-churn intervention for subscription cancel/payment failure
- Engagement segments (30d/90d) for campaign targeting

**What could be improved**:
- PP5 statistics are aspirational (Confidence: D) — need validation from actual customer data
- No email design/layout specifications (text-only content, no visual hierarchy guidance)
- Browse abandonment deferred — could lose early traffic

---

## Adaptation Guide

### For Non-Subscription D2C
- Remove replenishment flow and subscription conversion decision tree
- Replace PP3 (subscription reminder) with cross-sell/upsell
- Win-back trigger stays at 60-90 days but without subscription-specific offers
- Add post-purchase cross-sell flow (complementary products)

### For Multi-SKU Brands
- Add product-specific welcome content (conditional on which product was purchased)
- Browse abandonment becomes more valuable (multiple products to recommend)
- Post-purchase cross-sell flow is critical (Day 7-14 after purchase)
- Replenishment timing varies by product — use product-level supply duration

### For High-AOV / Considered Purchase
- Extend welcome series to 10-14 days (longer consideration period)
- Add abandoned cart Email 4 (Day 5-6, different format: founder note or FAQ)
- Review request timing: Day 21-30 (more time to evaluate)
- Win-back discount escalation can be more aggressive (higher margins allow it)

### For International Brands
- Add Consent Mode v2 for EU traffic (GDPR opt-in requirements)
- Quiet hours vary by timezone — Klaviyo handles per-recipient local time
- TCPA applies to US only. Other countries have different SMS regulations
- Consider language-specific flows if serving multiple markets

---

## Universal Principles

1. **Two welcome tracks**: Subscriber and purchaser are fundamentally different audiences. Never merge them.
2. **No discount in cart Email 1**: Simple reminder converts 20-25% of recoveries. Discounts in Email 1 train abandonment behavior.
3. **Auto-apply, never require codes**: Pre-applied incentives convert 15-20% better than discount codes.
4. **Founder voice always**: First-person ("I" not "we") for all marketing flows. "The Team" is for transactional only.
5. **Domain warm-up is not optional**: New domain + full blast = spam folder for months.
6. **Engagement segments protect everything**: Never send campaigns to unengaged subscribers. Deliverability is a shared resource.
7. **Pre-churn > win-back**: Catching a cancel within 2 hours is 10x more effective than waiting 60 days.
