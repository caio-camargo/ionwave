# Product Customization — M10: Pricing & Offer

**TUP**: M10 | **Tab**: 3 of 6
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft — DEFERRED SCOPE
**Hypothesis Links**: HYP-003.4 (Consumption-Cadence), HYP-002 (Subscription Conversion)

---

## 1. Scope & Status

**Tab 3 in Danilo's original structure is "Product Customization."** This covers the ability for customers to customize their product experience: flavor selection, frequency adjustment, quantity changes, and personalization features.

**Current assessment**: Most of the customization decision surface is covered by other M10 tabs:
- **Flavor selection** → SKU Architecture (Tab 4), Product Roadmap (Tab 5)
- **Subscription frequency** → Offer Strategy (Tab 1), with deeper treatment in M21 (Subscription & Retention)
- **Bundle configuration** → Offer Strategy (Tab 1), SKU Architecture (Tab 4)

What remains for this tab is the **subscription customization experience** — what happens after a customer subscribes and wants to adjust.

---

## 2. Subscription Customization Options

### 2.1 Frequency Flexibility (Wave 1)

**Default cadence**: Every 30 days (1 sachet/day × 30 sachets = 30-day supply)

**Available options** (configurable via Loop Subscriptions portal):

| Frequency | Days | Use Case | Impact on Revenue |
|-----------|------|----------|------------------|
| Every 30 days | 30 | Standard: 1 sachet/day | Baseline |
| Every 5 weeks | 35 | Light user or smaller person | -14% per-customer revenue |
| Every 6 weeks | 42 | 2-person household sharing | -29% per-customer revenue |
| Every 2 months | 60 | Occasional use / maintenance dose | -50% per-customer revenue |

**Why offer frequency flexibility:**
- **#1 cancellation reason** for supplement subscriptions is "too much product" (20-30% of cancellations) [B-grade, Recharge data via M21]
- Offering frequency adjustment in the cancel flow saves 20-30% of these cancellers [B-grade, Recharge data]
- A customer paying $50/6 weeks is better than a customer who cancels entirely

**Revenue impact**: If 15% of subscribers use the 6-week option, monthly subscription revenue drops ~4%. This is an acceptable trade for the retention benefit.

**Cross-reference**: HYP-003.4 (Consumption-Cadence Match) directly tests whether 30 days is the right default.

### 2.2 Flavor Rotation (Wave 2+)

Not available at launch (single SKU). When flavors launch (Wave 2, Month 6+):

| Feature | Description | Implementation |
|---------|------------|----------------|
| **Choose your flavor** | Select flavor before each shipment | Loop portal dropdown |
| **Surprise me** | Random flavor each month | Automated rotation logic |
| **Swap flavor** | Change future shipments | Loop portal self-service |
| **Mix & match** | Combine flavors in one shipment | Requires Shopify bundle app |

**Note**: "Mix & match" within a single 30-sachet box (e.g., 15 Citrus + 15 Berry) requires custom packaging and is deferred to Wave 3+. In Wave 2, "rotation" means swapping the entire box flavor each month.

### 2.3 Quantity Adjustment (Wave 1)

| Option | Description | When |
|--------|------------|------|
| **Skip next shipment** | Delay one cycle | Any time via portal |
| **Pause subscription** | Pause for 1-3 months | Save offer in cancel flow |
| **Add extra box** | One-time addition to next shipment | Portal or email prompt |
| **Downgrade to 2-box/month** | Reduce quantity (if on multi-box) | Portal self-service |

---

## 3. Personalization Features (Long-Term)

### 3.1 What's Possible but NOT Recommended at Launch

| Feature | Why It's Tempting | Why Not Now |
|---------|------------------|-------------|
| **Quiz-based dosage recommendation** | "Personalized for you" converts well | No data on who needs what. False precision. |
| **Custom blend** | Pick your mineral profile | Manufacturing impossibility at current scale |
| **Usage-based auto-refill** | Track consumption, auto-ship when low | Requires IoT or app integration. Overkill. |
| **Subscription tier selector** | Basic/Pro/Elite bundles | Only 1 SKU at launch. Premature. |

### 3.2 What IS Recommended for Post-Launch (Month 6+)

| Feature | Implementation | Value |
|---------|---------------|-------|
| **Post-purchase quiz** | Email survey at Day 7: goals, usage, lifestyle | Segmentation for retention messaging |
| **Usage tips by segment** | Based on quiz: athlete vs wellness vs biohacker | Personalized education → retention |
| **Flexible billing date** | Choose your billing day of month | Reduces involuntary churn (card decline) |

---

## 4. Platform Implementation

### 4.1 Loop Subscriptions Feature Map

| Customization Feature | Loop Supports? | Notes |
|----------------------|---------------|-------|
| Frequency adjustment | ✅ Yes | Built-in |
| Skip/pause | ✅ Yes | Built-in |
| Swap SKU (flavor change) | ✅ Yes | Requires multiple SKUs |
| Add one-time product | ✅ Yes | Upsell in portal |
| Custom billing date | ✅ Yes | Customer portal feature |
| Mix & match within box | ❌ No | Requires custom solution |
| Personalized recommendations | ❌ No | Requires custom logic |

[Confidence: B | Source: Loop Subscriptions feature documentation via M21 subscription platform analysis]

---

## 5. Intelligence Gaps

| Gap | Impact | Upgrade Path |
|-----|--------|-------------|
| Optimal default frequency unknown | MEDIUM — may lose customers if 30 days is wrong | Track "too much product" complaints. Adjust default if >20% request frequency change. (HYP-003.4) |
| Customer interest in personalization unknown | LOW — don't invest until post-launch data exists | Post-launch survey at Month 3 |
| Mix & match demand unknown | LOW — Wave 3+ consideration | Survey data from Wave 2 flavor launch |

---

*Cross-reference: M21 (Subscription & Retention) covers the retention and win-back aspects of customization. This tab covers the product/offer customization experience.*
