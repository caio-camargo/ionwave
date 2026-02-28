# M24: Inventory Management — Forecasting, Reorder Points, Seasonal Planning

**TUP**: M24 — Fulfillment & Inventory
**Version**: 1.0.0
**Date**: 2026-02-09
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 526, 527, 528; M10 pricing_and_offers.md; M25 bookkeeping_setup.md; M19 customer_lifecycle.md

---

## 1. Inventory Forecasting Framework

### The Core Formula

```
Reorder Point = (Daily Sales Rate × Lead Time in Days) + Safety Stock
```

This formula drives everything. Get the inputs right, and you'll never stock out or overstock.

| Variable | How to Calculate | Early-Stage Source | Mature Source |
|----------|-----------------|-------------------|---------------|
| **Daily Sales Rate** | Total units sold ÷ days in period | First 14 days of sales data | 30-day rolling average |
| **Lead Time** | Days from PO to inventory available at fulfillment location | Manufacturer quote + freight time + receiving | Tracked historical average |
| **Safety Stock** | Buffer for demand variability and supply variability | Fixed 14-day buffer | Calculated: Z × σ × √(lead time) |

### IonWave-Specific Variables

| Variable | Launch Estimate | Notes |
|----------|----------------|-------|
| Daily sales (conservative) | 5 units/day | ~150/month |
| Daily sales (moderate) | 15 units/day | ~450/month |
| Daily sales (optimistic) | 30 units/day | ~900/month |
| Manufacturing lead time | 21-28 days | Biocean or equivalent CM lead time |
| Freight to 3PL | 5-7 days | Domestic ground from CM to warehouse |
| 3PL receiving | 2-3 days | Inbound processing at warehouse |
| **Total lead time** | **28-38 days** | Manufacture + ship + receive |
| Safety stock | 14 days of sales | Conservative buffer for a new brand |

[Confidence: B for lead time estimates | Source: Supplement CM industry averages]

### Reorder Scenario Calculator

| Scenario | Daily Sales | Lead Time | Safety Stock (14 days) | Reorder Point |
|----------|-------------|-----------|----------------------|---------------|
| **Conservative** | 5/day | 35 days | 70 units | **245 units** |
| **Growing** | 15/day | 35 days | 210 units | **735 units** |
| **Scaling** | 30/day | 35 days | 420 units | **1,470 units** |
| **Hyper-Growth** | 50/day | 35 days | 700 units | **2,450 units** |

**Order quantity**: When you hit the reorder point, how much do you order?

```
Order Quantity = (Daily Sales Rate × Days Until Next Order) + Safety Stock Top-Up
```

For early-stage IonWave, order in 30-day supply batches at minimum. This keeps per-unit cost down (manufacturer MOQs) and provides buffer.

### Manufacturing MOQ Analysis (U4)

Contract manufacturers have minimum order quantities (MOQs) that create a cash trap for early-stage brands:

| CM MOQ | At 5 units/day (150/mo) | Cash Commitment ($20/unit) | Months of Stock |
|--------|------------------------|---------------------------|-----------------|
| 500 units | 3.3 months supply | $10,000 | 3.3 |
| 1,000 units | 6.7 months supply | $20,000 | 6.7 |
| 2,000 units | 13.3 months supply | $40,000 | 13.3 |

**Solution**: Negotiate lower MOQ for first 2-3 POs. Many CMs will do 500-unit runs for new brands at a 10-15% per-unit premium. Worth it to preserve cash.

**Cash rule**: First PO should not exceed 25% of available cash reserves. [Confidence: A | Source: Supplement CM industry practices]

### First Purchase Order Decision Framework (U13)

The first PO (before any sales data) is the hardest inventory decision:

```
First PO = (Conservative Monthly Forecast × 3 months) + Safety Stock
         = (150 × 3) + 70 = 520 units (conservative)
```

But check against CM MOQ:
- If MOQ = 500 → order 520 (just above MOQ) ✓
- If MOQ = 1,000 → order 1,000 but plan for 6+ months of stock (cash trap risk)
- If MOQ = 2,000 → negotiate down or find different CM

| Decision Factor | Consideration |
|----------------|---------------|
| Cash available | First PO ≤ 25% of cash reserves |
| CM MOQ | Negotiate for lowest possible first order |
| Shelf life | Verify ≥18 months expiration on first batch (U15) |
| Storage cost | 1,000+ units at 3PL = $40+/month in storage before revenue |

**Expiration risk (U15)**: Track months-of-stock vs months-to-expiration for each lot. If months-of-stock > (months-to-expiration − 6), reduce next PO. Never accept inventory with <12 months remaining shelf life.

[Confidence: A | Source: Pre-revenue inventory planning frameworks]

### Statistical Safety Stock (U5)

Evolve from flat buffer to data-driven safety stock:

| Phase | Method | Formula |
|-------|--------|---------|
| **Days 0-60** | Flat 14-day buffer | SS = Daily Rate × 14 |
| **Days 60+** | Statistical | SS = Z × σ_demand × √(lead_time_days) |

Where:
- Z = 1.65 for 95% service level (recommended for IonWave)
- σ_demand = standard deviation of daily sales (trailing 30 days)
- This prevents over-stocking (if demand stabilizes) and under-stocking (if volatile)

[Confidence: B | Source: Inventory management statistical methods]

---

## 2. Subscription vs One-Time Inventory Forecasting

This is the critical gap in Danilo's source material. IonWave is a subscription-first brand, which means inventory forecasting must account for two distinct demand streams.

### Two-Stream Demand Model

```
Total Daily Demand = Subscription Demand + One-Time Demand + Growth Buffer

Subscription Demand = Active Subscribers × (1 - Churn Rate) × Units Per Order
One-Time Demand = (New One-Time Orders Per Day) × Units Per Order
Growth Buffer = Total × Growth Rate Multiplier
```

### Subscription Forecasting (Predictable Demand)

Subscription orders are the easiest to forecast because they repeat on a fixed schedule:

| Input | Source | Calculation |
|-------|--------|-------------|
| Active subscribers | Recharge/Skio dashboard | Count of active subscriptions |
| Billing cycle | Shopify/Recharge settings | 30 days for IonWave (monthly supply) |
| Units per subscription | Product config | 1 box per subscription (30 sachets) |
| Churn rate (monthly) | M19 lifecycle analytics | Start at 15% estimate, refine with data |
| Skip/pause rate | Recharge analytics | Budget 5-10% per cycle |

**Monthly subscription inventory need**:
```
Subscription Units = Active Subscribers × (1 - Monthly Churn) × (1 - Skip Rate) × Units Per Order
```

Example at Month 3:
- 200 active subscribers
- 12% monthly churn (M19 estimate)
- 7% skip rate
- 1 box per order

```
= 200 × 0.88 × 0.93 × 1 = 164 units for subscription renewals
```

### One-Time Forecasting (Variable Demand)

One-time orders are harder to predict. They depend on ad spend, seasonality, and conversion rate:

| Input | Source | Variability |
|-------|--------|------------|
| Daily ad spend | Media buying budget (M13) | Can change daily |
| Conversion rate | GA4 / Shopify | 1-3% typical for supplement |
| Average units per order | Shopify analytics | Usually 1.0-1.3 for single-SKU |
| Organic/email orders | Attribution model (M30) | Grows over time |

**Monthly one-time inventory need**:
```
One-Time Units = (Ad Spend / CPA) × Avg Units Per Order × (1 + Organic Multiplier)
```

### Ad Spend → Inventory Demand Linkage (U22)

Marketing and inventory are NOT independent domains:
- When marketing increases ad spend by 50%+, inventory team must be notified **2 weeks in advance**
- Demand multiplier: if ad spend increases X%, expect unit demand increase of **0.6-0.8X%** (not 1:1 due to diminishing returns)
- **Inventory gate**: If inventory is in CAUTION or REORDER zone, marketing should NOT scale ad spend until replenished
- Add this as a standing item in weekly ops sync

### Subscription Cohort Decay Model (U6)

> **Flat churn rates are misleading.** Subscription churn is NOT uniform — Month 2 churn is highest (20-30%), then drops to 8-12% by Month 6+.

Apply cohort-based decay to each month's new subscriber cohort:

| Month Since Signup | Retention Rate | Cumulative Retention |
|-------------------|---------------|---------------------|
| Month 1 → 2 | 80% | 80% |
| Month 2 → 3 | 85% | 68% |
| Month 3 → 4 | 88% | 60% |
| Month 4 → 5 | 90% | 54% |
| Month 5 → 6 | 92% | 50% |
| Month 6+ | 93%+ | Stabilizing |

This produces a more accurate (and usually lower) inventory forecast than a flat 12% churn rate. [Confidence: B | Source: DTC subscription cohort benchmarks, M19 lifecycle data]

### Subscription Renewal Clustering Warning (U14)

At launch, most subscribers sign up within the same week, so they all renew within the same 5-day window:

- **Months 1-3**: Expect 70%+ of subscription renewals clustered in a 5-day window
- **Plan inventory**: Ensure enough stock is available for the renewal cluster, not spread evenly across the month
- **After Month 6**: Renewals naturally distribute more evenly as acquisition spreads out
- **If Recharge/Skio supports billing date spreading**: Consider enabling it after Month 3 to smooth demand

### Combined Forecast Template

| Month | Sub Renewals | New Subs | One-Time | **Total Units** | On Hand | Gap |
|-------|-------------|----------|----------|-----------------|---------|-----|
| Month 1 | 0 | 80 | 70 | **150** | [X] | [ ] |
| Month 2 | 64 | 100 | 80 | **244** | [X] | [ ] |
| Month 3 | 131 | 120 | 90 | **341** | [X] | [ ] |
| Month 4 | 204 | 100 | 85 | **389** | [X] | [ ] |
| Month 5 | 260 | 100 | 85 | **445** | [X] | [ ] |
| Month 6 | 310 | 100 | 85 | **495** | [X] | [ ] |

*Assumptions: 40% subscription rate, 12% monthly churn, 7% skip rate, moderate growth*

[Confidence: C | Source: Subscription demand modeling frameworks + M19 churn estimates]

---

## 3. Real-Time Inventory Dashboard

### Inventory Position (Check Daily)

| Metric | Value | Where to Find |
|--------|-------|--------------|
| **On Hand (at 3PL)** | [X] units | 3PL dashboard / Shopify inventory |
| **In Transit (to 3PL)** | [X] units, ETA: [Date] | Shipping tracking |
| **On Order (manufacturing)** | [X] units, ETA: [Date] | CM purchase order |
| **Committed (open orders)** | [X] units | Shopify unfulfilled orders |
| **Available to Sell** | = On Hand - Committed | Calculated |
| **Daily Sell Rate (14-day avg)** | [X] units/day | Shopify analytics |
| **Days of Stock Remaining** | = Available / Daily Rate | Calculated |
| **Reorder Point** | [X] units | From scenario calculator |
| **Status** | SAFE / CAUTION / REORDER NOW | Calculated |

### Stock Status Thresholds

| Status | Condition | Action |
|--------|-----------|--------|
| **🟢 SAFE** | Days of stock > Reorder Point + 14 | No action needed |
| **🟡 CAUTION** | Days of stock ≤ Reorder Point + 14 | Begin preparing PO with manufacturer |
| **🔴 REORDER NOW** | Days of stock ≤ Reorder Point | Place PO immediately |
| **⚫ STOCKOUT RISK** | Days of stock ≤ Lead Time | Emergency: expedite shipping, reduce ad spend, notify customers |

### Stockout Prevention Protocol

If you enter ⚫ STOCKOUT RISK:

1. **Immediately**: Reduce ad spend by 50% to slow new customer acquisition
2. **Same day**: Contact manufacturer about expedited production (expect premium pricing)
3. **Same day**: Contact 3PL about expedited inbound receiving
4. **If stockout is imminent**: Turn off ads completely. Switch site to "pre-order" mode. Email existing subscribers with transparency: "Your next box may arrive 3-5 days late. We're scaling production to meet demand."
5. **Never**: Silently charge and not ship. This creates chargebacks (M20 existential risk: Stripe 0.75% threshold).

### Overstock Warning

Overstock is as dangerous as stockout for a cash-constrained startup:

| Warning Sign | Threshold | Action |
|-------------|-----------|--------|
| Days of stock >90 | With stable/declining sales | Reduce next PO by 30% |
| Expiration approaching | <90 days to expiration on any lot | Run flash sale, bundle, or donate |
| Cash tied in inventory | >40% of cash reserves in inventory | Reduce PO frequency |

**Cash impact**: At $20 landed cost, 1,000 excess units = $20,000 tied up in inventory. For a pre-revenue startup, this can be a cash flow crisis.

[Confidence: B | Source: Inventory management frameworks + M25 cash flow alignment]

---

## 4. Lot Tracking & Expiration Management

### Why Lot Tracking Matters for Supplements

FDA requires supplement brands to be able to trace any unit back to its production batch. This isn't optional — it's a legal requirement that protects you from liability in a recall scenario.

### Lot Tracking Protocol

| Data Point | What to Record | Where to Record |
|------------|---------------|----------------|
| **Lot number** | Manufacturer-assigned batch ID | 3PL WMS, internal spreadsheet |
| **Production date** | Date lot was manufactured | COA from manufacturer |
| **Expiration date** | Date lot expires (typically 24-36 months from production) | 3PL WMS, Shopify metafield |
| **Quantity received** | Units received in this lot | 3PL receiving report |
| **COA** (Certificate of Analysis) | Lab testing results for this lot | Filed in Ops folder |
| **Storage location** | Which warehouse / shelf position | 3PL WMS |
| **Units shipped** | Running total of units shipped from this lot | 3PL ship log |
| **Units remaining** | Current inventory for this lot | 3PL WMS |

### FEFO (First Expired, First Out) Protocol

**Critical**: Supplements MUST use FEFO, not FIFO. This means the lot closest to expiration ships first, regardless of when it was received.

| Situation | FIFO Result | FEFO Result |
|-----------|-------------|-------------|
| Lot A: 500 units, expires Dec 2027, received Jan 2026 | Ship Lot A first (received first) | Ship Lot A first (expires first) ✓ |
| Lot B: 300 units, expires Sep 2027, received Mar 2026 | Ship Lot A first (received first) ❌ | Ship Lot B first (expires first) ✓ |

FEFO reduces waste from 10-18% to under 3% for supplement brands. Configure this in your 3PL's WMS from Day 1.

### Expiration Alert System

| Alert | Trigger | Action |
|-------|---------|--------|
| **Yellow** | Lot has <6 months to expiration | Monitor. No action needed. |
| **Orange** | Lot has <3 months to expiration | Do NOT accept new inventory of this lot. Prioritize shipping. |
| **Red** | Lot has <30 days to expiration | Quarantine remaining units. Do NOT ship to customers. |
| **Black** | Lot has expired | Destroy or donate (per local regulations). Log write-off in accounting (M25 account 5040). |

### Recall Procedure

If a quality issue is discovered with a specific lot:

| Step | Action | Timeline | Owner |
|------|--------|----------|-------|
| 1 | Identify affected lot number(s) | Immediately | Quality |
| 2 | Quarantine all remaining units of affected lot(s) at 3PL | Within 2 hours | Ops |
| 3 | Pull shipping records: which customers received affected lot? | Within 4 hours | Ops |
| 4 | Determine severity: voluntary recall or mandatory (FDA classification) | Within 24 hours | Founder + Legal |
| 5 | Notify affected customers (email + phone for Class I) | Within 48 hours | Support |
| 6 | Arrange returns or safe disposal instructions | Within 72 hours | Ops |
| 7 | Notify FDA if required (mandatory for Class I, voluntary for Class II/III) | Per FDA timeline | Legal |
| 8 | Root cause analysis with manufacturer | Within 1 week | Quality |
| 9 | Corrective action documented | Within 2 weeks | Quality |

**FDA recall classifications**:
- **Class I**: Serious health risk. Mandatory recall. Requires FDA notification.
- **Class II**: Temporary or reversible health risk. Voluntary recall recommended.
- **Class III**: No health risk, but product doesn't meet specs. Voluntary.

[Confidence: A | Source: FDA 21 CFR Part 111, FDA recall guidance]

---

## 5. Seasonal Planning Calendar

### 2026 Supplement Seasonal Calendar

IonWave's demand is driven by health/wellness seasonality. Key: inventory prep must START 6-8 weeks before the demand peak (manufacturing lead time + safety stock).

| Date | Event | Relevance | Marketing Angle | Inventory Prep | Prep Start |
|------|-------|-----------|----------------|---------------|------------|
| **Jan 1** | New Year | ★★★★★ | Resolution/health campaign. Biggest supplement month. | +50% inventory | Nov 15 |
| Feb 14 | Valentine's Day | ★★ | Gift angle (health for loved one) | Normal | Jan 15 |
| **Apr** | Tax Refund Season | ★★★ | "Invest in yourself" | Normal | Mar 15 |
| **May (2nd Sun)** | Mother's Day | ★★★ | Gift for wellness-focused moms | +20% | Apr 1 |
| **May (last Mon)** | Memorial Day | ★★★ | Summer kickoff sale | +30% | Apr 15 |
| **Jul 4** | Independence Day | ★★★ | Summer hydration push | +30% | Jun 1 |
| **Sep (1st Mon)** | Labor Day | ★★★ | Back-to-routine, end of summer | Normal | Aug 1 |
| **Nov (4th Thu+)** | BFCM Week | ★★★★★ | Biggest sale of year | +100% | Sep 1 |
| **Dec 25** | Christmas | ★★★ | Gift sets, last ship dates | +50% | Oct 1 |
| **Dec 31** | NYE | ★★★★ | Resolution pre-launch | +50% | Nov 1 |

### Quarterly Planning Guide

| Quarter | Demand Trend | Inventory Strategy | Marketing Theme |
|---------|-------------|-------------------|-----------------|
| **Q1 (Jan-Mar)** | HIGHEST — New Year resolutions | Stock heavy. January is peak. Order extra in November. | Health reset, new habits, fresh start |
| **Q2 (Apr-Jun)** | MODERATE — Summer prep | Stable. Build for Memorial Day and July 4. | Outdoor/active, summer body, hydration |
| **Q3 (Jul-Sep)** | MODERATE — Summer + back to school | Stable. Manage summer lull (August). | Routine, hydration, performance |
| **Q4 (Oct-Dec)** | HIGH — BFCM + holidays | Stock HEAVY. BFCM is make-or-break. Order in September. | Gifting, deals, year-end health |

### BFCM Inventory Planning (Critical)

BFCM (Black Friday / Cyber Monday) is the single biggest inventory challenge:

| Timeline | Action |
|----------|--------|
| **Sep 1** | Place PO for BFCM inventory. Target 2x normal monthly volume. |
| **Oct 1** | Inventory received and confirmed at 3PL. Verify lot numbers and expiration dates. |
| **Oct 15** | BFCM promotional plan finalized (M17/M18 alignment). Know exact offers. |
| **Nov 1** | Pre-BFCM campaign begins (email warm-up, early access for subscribers) |
| **Nov 15** | Final inventory audit. If short, expedite from manufacturer. |
| **BFCM Week** | Monitor inventory daily. If approaching stockout, cap orders or end sale early. |
| **Dec 1** | Post-BFCM audit. Reorder for holiday + January surge. |

**BFCM shipping cutoffs**:
- Standard shipping (USPS First Class): Order by Dec 14 for Christmas delivery
- Priority shipping (USPS Priority): Order by Dec 18
- Express shipping (USPS Express): Order by Dec 22
- Communicate cutoffs clearly on site, in emails, and in ads starting Dec 1.

[Confidence: B | Source: Supplement seasonal data, shipping carrier 2026 cutoff projections]

---

## 6. Inventory Financial Integration

### How Inventory Hits the Books (M25 Alignment)

| Event | Accounting Treatment | Account |
|-------|---------------------|---------|
| Purchase inventory from CM | Asset: Inventory (Balance Sheet) | 1300 Inventory |
| Freight from CM to 3PL | Capitalize into inventory cost (COGS-Freight In) | 5030 COGS — Freight In |
| Customer order ships | COGS recognized (matches revenue) | 5000/5010 COGS — Product |
| 3PL fees charged | Operating expense | 6110 3PL/Fulfillment Fees |
| Outbound shipping cost | Operating expense | 6120 Outbound Shipping |
| Inventory expires/destroyed | Write-off (COGS loss) | 5040 Loss on Expired Inventory |
| Inventory count discrepancy | Shrinkage (COGS or expense) | 5040 or 6900 |

**Key principle**: Inventory is an ASSET until sold. COGS is recognized when the product ships to a customer, not when you buy it from the manufacturer. This matters for cash flow planning — you pay cash up front but don't see the expense until later.

### Landed Cost Calculation (Per Unit)

| Component | Cost | Source |
|-----------|------|--------|
| Product cost (from CM) | $14-16 | Biocean/CM quote |
| Third-party testing (COA) | $0.50-1.50 | Per batch, amortized per unit |
| Freight to 3PL | $1.00-2.00 | Ground shipping, per unit |
| Packaging (box, insert, sachet wrapping) | $2.00-3.00 | Packaging supplier |
| **Total Landed Cost** | **$17.50-22.50** | **M25 uses $20 as baseline** |

[Confidence: B | Source: M25 bookkeeping_setup.md, HYP-004 unit economics]

---

## 7. Performance Targets

| Metric | Phase 0 (Month 1-2) | Phase 1 (Month 3-6) | Phase 2 (Month 7+) |
|--------|---------------------|---------------------|---------------------|
| Ship within 48hr | >90% (self-fulfill) | >95% (3PL) | >98% |
| Order accuracy | >99% | >99% | >99.5% |
| Damage rate | <2% | <1% | <0.5% |
| Inventory accuracy | >95% | >99% | >99.5% |
| Stockout incidents | 0 | 0 | 0 |
| Days of stock remaining | >30 | >45 | >60 |
| Fulfillment cost per order | <$8 (self) | <$12 (3PL all-in) | <$10 (optimized) |
| **Inventory turnover (U26)** | N/A (too early) | 6-8x/year | 6-8x/year |

### Inventory Turnover Ratio (U26)

```
Inventory Turnover = Annual COGS / Average Inventory Value
```

| Turnover Rate | Interpretation | Action |
|--------------|---------------|--------|
| <4x/year | Too much cash tied in inventory | Investigate overordering. Reduce next PO. |
| **6-8x/year** | **Healthy for supplement brand** | **Target range** |
| >12x/year | Running too lean | Stockout risk increasing. Increase safety stock. |

Track monthly starting Month 3 (need at least 90 days of data for meaningful ratio).

---

## 8. Dead Stock Liquidation Protocol (U21)

If any lot has >120 days of stock remaining AND is approaching the 6-month expiration window:

| Priority | Option | When to Use |
|----------|--------|-------------|
| 1 | **Flash sale** (20-30% off, email blast to non-subscribers) | Lot value >$500, >90 days to expiration |
| 2 | **Bundle** (buy 2 get 1 free) | Accelerate sell-through of slow lot |
| 3 | **Subscription upgrade** (gift free box to subscribers who refer) | Aligns with M22 referral program |
| 4 | **Donate** to health-focused charity | Tax deduction + brand goodwill |
| 5 | **Destroy and write off** | Last resort. M25 account 5040. |

**Decision rule**: If lot value <$500, choose fastest option. If >$500, prioritize margin recovery.

---

*Inventory management is the bridge between marketing and customer experience. Forecast accurately, reorder early, and never stock out. See `3pl_and_fulfillment.md` for provider details and `international_and_scaling.md` for growth milestones.*
