# Upsell Page Copy — M10: Pricing & Offer

**TUP**: M10 | **Tab**: 6 of 6
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-005 (Blended LTV), HYP-002 (Subscription Conversion)

---

## 1. Upsell Architecture Overview

IonWave has four upsell touchpoints in the customer journey. Each has a different goal and requires different copy:

| Touchpoint | When | Goal | Expected Lift |
|-----------|------|------|---------------|
| **Cart Upsell** | Customer adds 1 box to cart | Increase AOV via bundle | +$47 AOV (→ 2-box) |
| **Checkout Upsell** | Checkout page, before payment | Convert one-time → subscription | +LTV (6x multiplier) |
| **Post-Purchase Upsell** | Thank-you page, after payment | Add-on product or gift | +$20-25 |
| **Subscription Portal Upsell** | Logged-in subscriber portal | Add SKU to subscription | +$50/month |

---

## 2. Cart Upsell (Bundle Offer)

### 2.1 Trigger

Customer has 1 box (IW-MP-30-UF) in cart.

### 2.2 Copy Framework

**Headline**: "Add a second box and save 10%"

**Supporting copy**: "Most customers go through a box in 30 days. Grab two and you're set for the next 2 months — at $53/box instead of $59."

**CTA button**: "Add Second Box — Save $12"

**Design notes**:
- Show the per-box price clearly ($53 vs $59)
- Show total savings prominently ($12 off)
- Do NOT show the upsell as a separate product — show it as the same product at a better price
- Dismiss option: small "No thanks" text link

### 2.3 Alternate for 3-Box

If customer already has 2 boxes:

**Headline**: "Make it a 3-pack and save 17%"
**CTA**: "Upgrade to 3-Pack — Save $30"

### 2.4 Expected Performance

| Metric | Target | Basis |
|--------|--------|-------|
| Upsell acceptance rate | 15-25% | [C] DTC benchmark for cart bundle upsells |
| AOV lift (accepted) | +$47 (2-box) or +$88 (3-box) | Mathematical |
| Blended AOV impact | +$7-12 | At 15-25% acceptance |

[Confidence: C | Source: DTC upsell benchmarks. No IonWave-specific data.]

---

## 3. Checkout Upsell (Subscription Conversion)

### 3.1 Implementation: Subscription-First Default

Per Offer Strategy (Tab 1), the checkout already defaults to subscription. This section covers the copy for customers who have selected one-time purchase and need re-convincing.

### 3.2 Copy Framework (For One-Time Buyers)

**Placement**: Inline on checkout page, near the order summary.

**Headline**: "Switch to Subscribe & Save — $50/month"

**Supporting copy**: "Save 15% every month. Skip or cancel anytime. Most customers subscribe because they never want to run out of their daily minerals."

**Value props** (bullet points):
- ✓ Save $8.85 every month (15% off)
- ✓ Free shipping on every order
- ✓ Skip, pause, or cancel anytime — no commitment
- ✓ Change frequency to match your pace

**CTA**: "Switch to Subscribe & Save"

**Social proof line**: "Join [X] subscribers who get their minerals delivered monthly" *(populate X when data available, minimum 50 to display)*

### 3.3 Psychology Notes

- **"Cancel anytime"** is the #1 objection-remover for subscription hesitators [B-grade, Recharge data]
- **"Skip or pause"** reduces perceived commitment (from M21 subscription psychology)
- **Don't lead with savings** — lead with convenience, then savings. Savings-first attracts deal-seekers who churn faster [C-grade, ProfitWell]
- **Free shipping** as subscription perk increases perceived value without margin hit if built into subscription pricing

---

## 4. Post-Purchase Upsell (Thank-You Page)

### 4.1 Trigger

Customer has completed purchase. Shown on the order confirmation/thank-you page.

### 4.2 Copy Framework — Option A: Gift Offer

**Headline**: "Know someone who'd love this?"

**Supporting copy**: "Send a Starter Kit to a friend for $19.99 (normally $24.99). We'll include a note from you."

**CTA**: "Send a Gift — $19.99"

**Why this works**: Post-purchase is a moment of high satisfaction (they just bought something for their health). Gifting extends that positive feeling. Plus it's a referral mechanism — the friend gets a trial, potentially converts to full subscription.

### 4.3 Copy Framework — Option B: Add to Next Order (Subscription Buyers Only)

**Headline**: "Your first box ships soon. Want to add anything?"

**Supporting copy**: "Add an extra box for someone in your household — same 15% subscriber discount."

**CTA**: "Add Another Box — $50.15"

### 4.4 Copy Framework — Option C: Content Offer (No Additional Sale)

If the customer just spent $59+ and hasn't subscribed, aggressive upselling may backfire. Alternative:

**Headline**: "Welcome to IonWave"

**Supporting copy**: "Your marine plasma is on its way. Here's what to expect in your first 30 days →"

**CTA**: "Read the 30-Day Guide"

**Why this works**: Education → trust → future subscription conversion. Aligns with M21 research on education-led retention.

### 4.5 Post-Purchase Testing Plan

| Test | Variants | Metric | When |
|------|----------|--------|------|
| PP-001 | A: Gift offer \| B: Extra box \| C: Content | Post-purchase revenue + 30-day subscription conversion | Month 2+ |

---

## 5. Subscription Portal Upsell (Wave 2+)

### 5.1 Trigger

Active subscriber visits their subscription management portal.

### 5.2 Copy Framework (When Flavored SKUs Available)

**Banner in portal**:

"**New flavor: Citrus Burst** — Add it to your next box or swap your current flavor."

**CTA**: "Try Citrus Burst" / "Swap My Flavor"

### 5.3 Copy Framework (Premium Tier, Wave 3+)

"**Upgrade to Marine Plasma+** — Same 78 minerals, plus magnesium glycinate for deeper recovery. Just $10/month more."

**CTA**: "Upgrade Now"

---

## 6. Copy Principles Across All Upsells

### 6.1 Voice & Tone

| Principle | Do | Don't |
|-----------|-----|-------|
| **Informative, not pushy** | "Most customers subscribe for convenience" | "Don't miss out! Limited time!" |
| **Science-grounded** | "78 minerals from the ocean" | "Miracle supplement!" |
| **Respectful of choice** | "No thanks" always visible | Hidden dismiss buttons |
| **Honest about savings** | "Save $8.85/month" (exact number) | "Save BIG!" (vague) |
| **Premium tone** | Clean, minimal, confident | Discount-heavy, coupon-code feeling |

### 6.2 Pricing Display Rules

1. **Always show per-serving price** alongside total: "$50.15/month ($1.67/day)"
2. **Always show savings in absolute dollars**, not just percentages: "Save $8.85" not just "15% off"
3. **Never show crossed-out prices** (e.g., ~~$59~~ $50.15) — this looks cheap for a premium brand
4. **Show subscription price as the primary**, one-time as the alternative
5. **Round subscription price down** in headlines: "~$50/month" not "$50.15/month"

### 6.3 Compliance Notes

- All pricing claims must be accurate and current
- "Cancel anytime" must be true — no dark patterns in the cancel flow
- FTC "Click-to-Cancel" rule compliance: cancellation must be as easy as sign-up
- No "negative option" practices (auto-enrolling non-subscribers)
- Subscription terms visible before purchase (not buried in T&C)

[Confidence: A | Source: FTC Click-to-Cancel rule (2024), Shopify/Loop compliance requirements]

---

## 7. Measurement Framework

| Upsell | Primary Metric | Secondary Metric | Target |
|--------|---------------|-----------------|--------|
| Cart bundle | Acceptance rate | AOV lift | 15-25% acceptance |
| Checkout subscription | One-time → subscription switch rate | Subscription % of all orders | >5% switch rate |
| Post-purchase | Post-purchase revenue | 30-day subscription conversion | >8% acceptance |
| Portal (Wave 2+) | SKU additions per subscriber | Revenue per subscriber | >5% add rate |

---

## 8. Intelligence Gaps

| Gap | Impact | Upgrade Path |
|-----|--------|-------------|
| No IonWave-specific upsell conversion data | HIGH — all targets are benchmarks | Track from Day 1. First reliable data at 200+ orders. |
| Post-purchase page design not finalized | MEDIUM — affects all post-purchase upsells | Design with Shopify theme or dedicated post-purchase app |
| Gift feature feasibility on Shopify | LOW — standard feature in most Shopify apps | Confirm with Shopify theme/app selection |
| Optimal upsell timing unknown | MEDIUM — too aggressive too early may hurt NPS | A/B test aggressive vs subtle upsells (PP-001) |

---

## 9. Hypothesis Cross-Reference

| Hypothesis | How Upsell Copy Affects It |
|-----------|---------------------------|
| **HYP-005** (Blended LTV) | Every accepted upsell directly increases LTV. Cart bundle lifts immediate AOV. Checkout subscription conversion is the single highest-leverage upsell (6x LTV difference). |
| **HYP-002** (Subscription Conversion 50-60%) | Checkout upsell is the last chance to convert a one-time buyer to subscriber before purchase completes. Post-purchase content offer is the first step in email nurture to convert later. |

---

*This completes all 6 content tabs for M10: Pricing & Offer.*
