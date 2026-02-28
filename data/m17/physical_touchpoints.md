# M17: Physical Touchpoints — Box Inserts & Direct Mail

**TUP**: M17 — Email & SMS
**Version**: 1.0.0
**Date**: 2026-02-07
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 429 (box inserts), 430 (direct mail)
**Build Priority**: Box inserts = Pre-Launch (low cost, high ROI). Direct mail = Month 6+ (higher cost, requires data).

---

## 1. Why Physical Touchpoints Matter

In a digital-first brand, physical touchpoints are:
- **Pattern interrupts** — customers are numb to email, but a handwritten card gets attention
- **Brand-building moments** — unboxing is the highest-emotion touchpoint in the customer journey
- **Retention tools** — physical objects stay on desks, fridges, counters (emails disappear)

**Founder Mode**: Box inserts are low-cost and high-ROI. Do them from Day 1. Direct mail is powerful but requires scale and data — defer until Month 6+.

---

## 2. Box Insert Strategy (DO THIS FROM ORDER #1)

Every package should include a set of printed inserts. These are cheap ($0.50-1.00 per package) and have outsized impact on retention, referrals, and reviews.

### Standard Insert Kit

| Insert | Purpose | Include When | Est. Cost | ROI |
|--------|---------|-------------|-----------|-----|
| **Thank You Card** | Personal touch, brand warmth | Every order | $0.15-0.20 | High — sets tone for entire experience |
| **Quick Start Guide** | Usage instructions, what to expect | First order only | $0.20-0.30 | High — reduces "I don't know how to use this" churn |
| **Referral Card** | "Give $10, Get $10" with unique code/QR | Every order | $0.15-0.20 | High — physical referral cards outperform email referral links [Confidence: C \| Source: DTC anecdotal] |
| **Sample** | Cross-sell, try new product | Every 3rd order OR with subscription renewals | $1-3 | Medium — drives product exploration |

[Confidence: B | Source: Danilo tab 429 + DTC box insert best practices]

### Thank You Card Design

**Front**: IonWave logo, clean design, "Thank You" in brand font
**Back**:
> Thank you for choosing IonWave.
>
> You're now part of a community of people who take their health seriously.
>
> **YOUR FIRST-USE TIP**: Empty stomach, before coffee. One sachet. Feel the difference.
>
> Questions? Email us at hello@ionwave.com — we respond to every message.
>
> — [Founder signature]

**Design notes**: Matte cardstock, 4x6". Brand colors. Keep it warm and human, not corporate. A handwritten-style font for the signature adds authenticity.

### Quick Start Guide Design

**Format**: Tri-fold card or single 5x7" card
**Content**:
1. **How to take**: One sachet + 8-12oz water, empty stomach, before coffee
2. **What to expect**: Days 1-3, Days 4-14, Days 15-30 (same as Email 1 post-purchase)
3. **Pro tips**: Add to juice, use before workouts, double dose during keto flu
4. **QR code**: Links to "Getting Started" page or welcome video
5. **Support**: hello@ionwave.com, reply to any email

### Referral Card Design

**Front**: "Give $10. Get $10."
**Back**:
> Share IonWave with a friend.
>
> They get $10 off their first order.
> You get $10 credit on your next order.
>
> **How**: Give them this card OR use your link:
> ionwave.com/refer/{{customer_code}}
>
> [QR CODE linking to referral page]

**Production notes**: Unique codes can be pre-printed in batches (100 per run) or use a single universal referral URL that tracks via cookies. For early stage, a universal URL is simpler.

### Print Production

| Item | Quantity | Est. Cost | Recommended Vendor |
|------|----------|-----------|-------------------|
| Thank You Cards | 500 | $75-100 | Vistaprint, local printer |
| Quick Start Guides | 250 (first orders only) | $60-90 | Vistaprint, local printer |
| Referral Cards | 500 | $75-100 | Vistaprint, local printer |
| **Total per package** | — | **$0.50-0.70** | — |

[Confidence: B | Source: Vistaprint/local printer pricing for small batch]

**Founder Mode**: Order 250-500 of each. That covers your first 250-500 orders. Reorder when you run low. Don't over-invest in printing before validating demand.

---

## 3. Direct Mail Strategy (Month 6+)

Direct mail is powerful but expensive. It works best when targeted at specific segments with data to back the investment.

### When Direct Mail Makes Sense

| Use Case | What to Send | When to Send | Expected ROI | Min. Data Required |
|----------|-------------|-------------|-------------|-------------------|
| **Win-Back** | Postcard + offer (20-25% off) | 90+ days since last order | Medium — 3-5% conversion [Confidence: C] | Need 50+ lapsed customers |
| **VIP Thank You** | Handwritten note + free gift | Top 10% by LTV | High — retention value | Need LTV data (Month 4+) |
| **Birthday/Anniversary** | Card + small discount | On customer's birthday/purchase anniversary | Medium | Need birthdate data |
| **Subscription Save** | Personal letter before cancellation | When churn signals detected | High — cheaper than re-acquisition | Need churn prediction model (Month 6+) |
| **New Product Launch** | Announcement + sample | To best 50-100 customers | Medium | Need product ready to sample |

### Why Physical Mail Works for Win-Back

- Email addresses go stale (people stop checking that inbox). Physical addresses don't.
- A postcard has zero inbox competition — it's the only "marketing email" in your mailbox today.
- The perceived effort signals "we actually care" in a way email can't replicate.

[Confidence: B | Source: Danilo tab 430 + DTC direct mail case studies]

### Direct Mail Providers

| Provider | Best For | Shopify Integration | Cost per Piece |
|----------|---------|-------------------|----------------|
| **PostPilot** | DTC Shopify brands, easy setup | Yes (native) | $0.50-2.00 depending on format [Confidence: B] |
| **Lob** | API-driven, automated triggers | Via Zapier/custom | $0.75-3.00 |
| **Postable** | Handwritten notes | Manual/API | $3-5 per note |
| **Sendoso** | Gifts and swag | Enterprise | $10+ per piece |
| **Local printer** | Package inserts only | Manual | $0.15-0.30 per piece |

**Recommendation**: Start with PostPilot for automated postcard campaigns (win-back, VIP). Use Postable or handwrite yourself for VIP thank-you notes (first 20 VIPs, it's worth the personal touch).

### Direct Mail ROI Math

**Win-back postcard example:**
- Cost per postcard: $1.50 (printed + mailed via PostPilot)
- Send to 100 lapsed customers
- Total cost: $150
- Win-back rate: 5% = 5 recovered customers
- Average order value: $59
- Revenue recovered: $295
- **ROI: ~97%** (before margin)
- After margin (~60%): Net profit ~$27 on $150 spend = **18% net ROI**

[Confidence: C | Source: derived calculation using assumed conversion rates and IonWave pricing]

**Verdict**: Viable but not urgent. Direct mail ROI is positive but modest at small scale. The real value is in VIP retention (where the emotional impact drives long-term LTV, not just one order).

---

## 4. Implementation Timeline

| Phase | Action | When |
|-------|--------|------|
| **Pre-Launch** | Design + print Thank You Cards, Quick Start Guides, Referral Cards | 2 weeks before launch |
| **Launch** | Include full insert kit in every order | Day 1 |
| **Month 3** | Track referral card usage — are physical cards driving referrals? | Review referral data |
| **Month 4** | Evaluate: do first-order customers who received Quick Start Guide have higher retention? | Compare retention rates |
| **Month 6** | If 50+ lapsed customers: run first PostPilot win-back postcard test | Send 50 postcards, measure |
| **Month 6** | Send handwritten VIP notes to top 10-20 customers | Handwrite or use Postable |
| **Month 9+** | Evaluate direct mail ROI. Scale if positive. | Analyze PostPilot results |

---

## 5. Intelligence Gaps

| Gap | Grade | Upgrade Path |
|-----|-------|-------------|
| Referral card conversion rate (physical vs. email link) | D | Track referral codes from physical cards vs. email links after 90 days |
| Quick Start Guide impact on retention | D | A/B test: orders with vs. without guide (or compare retention before/after introduction) |
| PostPilot win-back conversion rate for IonWave | D | Run 50-postcard test after Month 6 |
| Handwritten note impact on VIP LTV | D | Track VIP LTV before/after handwritten note program |
| Optimal sample inclusion frequency | C | Test every 3rd order vs. every order for cross-sell impact |

---

*Box inserts are Day 1. Direct mail is Month 6+. Both are powerful physical touchpoints in an increasingly digital-only landscape. See `email_flow_architecture.md` for how these integrate with the email lifecycle.*
