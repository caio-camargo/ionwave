# OpKit: Email & Lifecycle Automation Kit

**OpKit ID**: OK-M17-001
**TUP Source**: M17 — Email & SMS
**Version**: 1.0.0
**Date**: 2026-02-07
**Reusability**: Any DTC brand using Klaviyo (or similar ESP) with subscription model

---

## Purpose

This OpKit enables any DTC brand to build a complete email lifecycle automation system — from first subscriber to loyal advocate. It provides the strategy, sequence scaffolds, and implementation guidance to go from zero email infrastructure to a full 12-flow lifecycle engine.

---

## Components

### 1. Instruction Doc — How to Build a DTC Email Lifecycle

**Step-by-step process:**

1. **Choose your ESP** (Klaviyo recommended for DTC/Shopify). Connect to e-commerce platform.
2. **Import brand assets** — logo, colors, fonts into email template builder.
3. **Create a master template** — header/footer consistent across all flows.
4. **Build 4 core segments** — All Subscribers, Customers, Non-Customers, VIPs.
5. **Build Priority 1 flows** (pre-launch):
   - Abandoned Cart (3 emails) — highest revenue per email
   - Welcome Series (5 emails) — sets brand tone, drives first purchase
   - Post-Purchase Basic (3 emails) — reduces refunds, drives reviews
6. **Set up signup form/popup** with email + SMS opt-in.
7. **Test all flows** with test profiles before launch.
8. **Launch**. Monitor for 30 days.
9. **Expand in Month 2**: Post-Purchase to full 7 emails, add Abandoned Checkout, Replenishment.
10. **Expand in Month 3+**: Win-Back, Browse Abandonment, Subscription Upsell, VIP.
11. **Add SMS at 500+ subscribers**: Start with shipping notifications, add cart recovery SMS.
12. **Monthly maintenance**: 1.5-4 hours/month depending on flow count. Check analytics, fix worst performer.

### 2. Grading Rubric

| Grade | Criteria |
|-------|---------|
| **A (Excellent)** | All 12 flows live. Segmentation by lifecycle + engagement. A/B testing active. Email drives 30%+ of revenue. Compliance reviewed. |
| **B (Good)** | Priority 1-2 flows live (6+ flows). Basic segmentation. Email drives 20-30% of revenue. |
| **C (Adequate)** | Priority 1 flows live (3 flows). No segmentation. Email drives 10-20% of revenue. |
| **D (Minimal)** | Only welcome popup + 1 flow. No automation. Email drives <10% of revenue. |
| **F (Absent)** | No email flows. Klaviyo connected but unused. |

**IonWave graded example**: Currently D (pre-launch, no flows live). Target: B by Month 3, A by Month 6.

### 3. Scaffold — Email Flow Templates

**For each core flow, the scaffold includes:**

- **Trigger definition** (what event starts the flow)
- **Email count and timing** (how many emails, days between)
- **Subject line formulas** (2 variants per email for A/B testing)
- **Body structure** (sections, CTAs, tone)
- **Exit conditions** (when to stop sending)
- **KPI targets** (open rate, click rate, conversion rate)

**Available scaffolds in this OpKit:**
1. Welcome Series (5 emails, Day 0-7)
2. Abandoned Cart (3 emails + SMS, 1hr-72hr)
3. Post-Purchase (7 emails, Day 0-60)
4. Win-Back (4 emails, Day 60-105)
5. Subject Line Formula Library (11 types)
6. Segmentation Framework (lifecycle + engagement + source)
7. SMS Strategy + TCPA Compliance Checklist
8. Physical Touchpoints (box inserts + direct mail)

### 4. IonWave Graded Example

IonWave's M17 content serves as the first graded example:
- **Quality**: 8.4/10
- **Strengths**: Full email sequences with actual copy, clear build order, compliance awareness, discount defense policy
- **Weaknesses**: All benchmarks are industry averages (no brand-specific data yet), health claims need legal review, testimonials are placeholders
- **Files**: 9 content files + dialogue summary + this OpKit in `data/m17/`

---

## Adaptation Guide

**To use this OpKit for a different Trade:**

1. Replace all brand-specific copy (IonWave, marine plasma, 78 minerals) with your brand's product/value prop
2. Adjust discount percentages to match your margin structure
3. Review and adapt the FTC compliance checklist for your product category
4. Keep the flow architecture, timing, and segmentation framework — these are universal DTC patterns
5. Adjust the subject line examples but keep the formula types — they work across categories
6. If not subscription-based, remove replenishment + subscription-related flows
7. If not physical product, remove box insert strategy

---

## Key Principles (Universal)

1. **Build in revenue-impact order.** Don't build 12 flows before proving the product sells.
2. **Never offer a bigger discount in a faster flow.** Time-gate your escalation.
3. **Segment when data tells you to, not because you can.** One good flow > 4 mediocre flows.
4. **Klaviyo is the source of truth once live.** Strategy docs are blueprints, not living documents.
5. **Compliance before creativity.** FTC/FD&C review before any health claim goes live.
6. **Monthly maintenance ritual.** 15 minutes to check analytics and fix the worst performer. Don't let flows rot.
