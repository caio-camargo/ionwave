# M17: Win-Back Email Sequence

**TUP**: M17 — Email & SMS
**Version**: 1.0.0
**Date**: 2026-02-07
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 444, 445 — merged
**Build Priority**: #7 (Month 3+)

---

## Overview

**Trigger**: No purchase in 60 days (for past customers only — not for never-purchased subscribers)
**Emails**: 4
**Timeline**: Day 60 → Day 105
**Goal**: Re-engage lapsed customers (target: >5% win-back rate)
**Discount escalation**: No discount → What's new → 25% off → Sunset warning

**When to build this flow:** Month 3+ only. You need 60+ days of customer data before any customer even qualifies for this flow. Don't build it at launch — there's literally no one to send it to yet.

---

## Sequence Architecture

```
Day 60 ──── Email 1: "We miss you" (emotional, no discount)
                └── Purchased? YES → Exit to Post-Purchase
                └── NO ↓
Day 75 ──── Email 2: "What's new" (updates, improvements)
                └── Purchased? YES → Exit
                └── NO ↓
Day 90 ──── Email 3: Big Offer (25% off)
                └── Purchased? YES → Exit
                └── NO ↓
Day 105 ─── Email 4: "Should we say goodbye?" (sunset warning)
                └── Engaged? YES → Keep on list, reduce cadence
                └── NO → Move to sunset/suppression
```

---

## Email 1 — Day 60: We Miss You

**Subject**: `We miss you, {{first_name}}`
**Preview**: `Is everything okay?`
**Send**: 60 days since last purchase
**Discount**: None

### Body

> Hey {{first_name}},
>
> It's been a while since we've seen you.
>
> Everything okay?
>
> Maybe you:
> - Got busy and forgot to reorder
> - Tried something else
> - Had an issue we can help with
>
> Whatever it is, we'd love to have you back.
>
> If something wasn't right with your last order, reply to this email and we'll make it right.
>
> **[CTA: Shop IonWave →]**
>
> Miss you,
>
> — [Founder Name]

**Design**: Personal, short. Plain-text style. Founder name (not "The IonWave Team"). This should feel like a real person reaching out.

---

## Email 2 — Day 75: What's New

**Subject**: `A lot has changed...`
**Preview**: `Updates you might have missed`
**Send**: 75 days since last purchase
**Discount**: None (yet)

### Body

> Hey {{first_name}},
>
> Since you last ordered, we've been busy:
>
> [DYNAMIC CONTENT — update quarterly with real news:]
>
> **NEW:** [New product / flavor / format announcement]
> **IMPROVED:** [Any product improvements, packaging updates]
> **COMMUNITY:** [Customer count milestone, review highlights]
> **CONTENT:** [Link to best recent blog post or video]
>
> We're not the same IonWave you left. We're better.
>
> Come see what's new:
>
> **[CTA: See What's New →]**
>
> — [Founder Name]

**Implementation note**: This email needs quarterly content updates. Set a calendar reminder to refresh the "What's New" content every 90 days so lapsed customers always see something fresh. [VOID — requires: quarterly content refresh process]

---

## Email 3 — Day 90: Big Offer

**Subject**: `{{first_name}}, here's 25% off to come back`
**Preview**: `Our biggest discount`
**Send**: 90 days since last purchase
**Discount**: YES — 25% off

### Body

> Hey {{first_name}},
>
> I really want you to experience IonWave again.
>
> So here's our biggest discount: **25% off.**
>
> Use code: **COMEBACK25**
>
> **[CTA: Claim 25% Off →]**
>
> Valid for 7 days only.
>
> — [Founder Name]
>
> P.S. If something wasn't right last time, reply and let me know. I'd love to make it right.

**Design**: Short, direct. Discount code prominent. No long copy — at 90 days, they know the product. Either the discount moves them or it doesn't.

**Discount rationale**: 25% is the largest discount in the IonWave email ecosystem. It's justified because: (1) the customer hasn't purchased in 90 days, (2) acquiring a new customer costs $25-40 (CAC), (3) re-activating a lapsed customer at 25% off is cheaper than acquiring a new one. [Confidence: B | Source: CAC vs. win-back economics]

---

## Email 4 — Day 105: Sunset Warning

**Subject**: `Should we say goodbye?`
**Preview**: `We don't want to bother you`
**Send**: 105 days since last purchase
**Discount**: No (the 25% offer already expired)

### Body

> Hey {{first_name}},
>
> We've been reaching out, and we haven't heard back.
>
> We don't want to clog your inbox if you're not interested anymore.
>
> **If you still want to hear from us:** Click below and we'll keep you on the list.
>
> **[CTA: Yes, Keep Me →]**
>
> **If not:** No hard feelings. You'll be removed from our email list automatically.
>
> Either way, thank you for giving IonWave a try. We're grateful you were part of this.
>
> — [Founder Name]
>
> P.S. If you ever want to come back, you can re-subscribe anytime at ionwave.com.

**Design**: Minimal, respectful. Two options: stay or leave. The "Yes, Keep Me" click re-engages them and resets their engagement score.

**Post-Email 4 logic:**
- If clicked "Keep Me" → Move back to regular nurture (reduce campaign frequency to 1x/month)
- If no engagement within 7 days → Suppress from all campaigns. Keep profile for transactional emails only.
- After 30 more days of no engagement → Consider full suppression

---

## Flow-Level Metrics & Benchmarks

| Metric | Target | Source |
|--------|--------|--------|
| Overall win-back rate (any purchase across 4 emails) | 5-10% | [Confidence: B \| Source: Klaviyo DTC avg ~5-8%] |
| Email 1 win-back rate | 2-3% | [Confidence: C \| Source: emotional appeal alone recovers ~2%] |
| Email 3 win-back rate (with 25% off) | 3-5% | [Confidence: C \| Source: discount-driven win-back rates] |
| Email 4 "Keep Me" click rate | 5-10% | [Confidence: C] |
| Sunset suppression rate | 30-50% of flow entrants | [Confidence: C \| Source: deliverability best practice] |

---

## Intelligence Gaps

| Gap | Grade | Upgrade Path |
|-----|-------|-------------|
| IonWave-specific churn reasons | D | Add exit survey to cancellation flow; mine support tickets |
| Optimal win-back offer | C | A/B test 20% vs 25% vs free shipping after 50+ flow entries |
| Re-engagement durability | D | Track: of customers won back, what % purchase again within 90 days? |
| "What's New" content refresh cadence | C | Set quarterly review; measure Email 2 open/click trends |

---

*Build this flow in Month 3+ when you have enough lapsed customers to populate it. See `email_flow_architecture.md` for build order.*
