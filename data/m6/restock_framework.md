# Restock Decision Framework
**TUP**: M6 — Supply Chain
**Domain**: Inventory Planning & Replenishment
**Status**: Pre-Launch (formula ready, requires real sales data)
**Quality**: [See _meta.json]

---

## Overview

**Purpose**: Systematic formula for **when** to reorder inventory and **how much** to order, preventing both stockouts (lost sales) and overstocking (cash flow strain).

**Context**: Marine plasma supplements have longer lead times than commodity supplements:
- **Commodity supplements** (whey protein, multivitamins): 2-4 weeks lead time from US-based contract manufacturers
- **Marine plasma** (ocean-sourced, international suppliers): 6-8 weeks lead time (45-60 days typical per supplier research)

**Implication**: Must reorder ~2 months before stock runs out, requiring accurate demand forecasting and cash flow planning.

**Confidence on lead times**: B | Source: Supplier research (Biocean/Quinton/Actimar), general supplement MOQ/lead time benchmarks per web research | Date: 2026-02-10

---

## The Restock Formula

### Reorder Point

**Reorder Point** = (Daily Sales Rate × Lead Time Days) + Safety Stock

**When inventory hits this number → place next PO immediately.**

### Variables

| Variable | Definition | How to Calculate | IonWave Baseline (Pre-Launch Estimate) |
|----------|-----------|------------------|----------------------------------------|
| **Daily Sales Rate** | Average units sold per day | Last 14 days total sales ÷ 14 | **50 units/day** [Confidence: D — pre-launch estimate from M3 financial model Month 1-3 targets] |
| **Lead Time** | Days from PO to inventory available | Manufacturing + shipping + COA approval + receiving | **50 days** (45 supplier + 5 COA approval per `quality_control_and_coa.md`) |
| **Safety Stock** | Buffer for demand variability & lead time delays | 14-21 days of sales (14 days = low risk, 21 days = high risk) | **14 days** (conservative for launch; adjust after 3 months real data) |

### Example Calculation (Month 1-3)

**Inputs**:
- Daily sales: 50 units/day
- Lead time: 50 days
- Safety stock: 14 days × 50 = 700 units

**Reorder Point**:
`(50 × 50) + 700 = 2,500 + 700 = **3,200 units**`

**Interpretation**: When inventory drops to 3,200 units → place PO for next batch. At 50 units/day burn rate, this gives us:
- 50 days of inventory (covers lead time)
- + 14 days safety buffer
- = 64 days total runway

**Confidence on baseline calculations**: D | Source: Pre-launch estimates from M3 financial model; will upgrade to B/A after Month 1-3 real sales data | Date: 2026-02-10

---

## Order Quantity

**Order Quantity** = (Daily Sales × Days Until Next Order) + Safety Stock - Current Inventory

**Constrained by**:
1. **Cash available** (per M25 Financial Operations 13-week cash forecast)
2. **Supplier MOQ** (minimum order quantity — typically 5,000-10,000 units for first order per supplier research)
3. **Storage capacity** (3PL warehouse limits — per M24 Fulfillment & Inventory)

### Example Calculation (Month 1 Reorder)

**Scenario**: Inventory hits 3,200 units (reorder point). How much to order?

**Inputs**:
- Daily sales: 50 units/day
- Days until next order: 50 days (assume we order every lead time period)
- Safety stock: 700 units
- Current inventory: 3,200 units

**Order Quantity**:
`(50 × 50) + 700 - 3,200 = 2,500 + 700 - 3,200 = 0 units`

**Wait, this says order 0 units?**

Yes — this formula is for **continuous replenishment** (reorder when inventory = lead time demand + safety stock). At reorder point, you already have enough inventory to cover lead time. This formula works if you're reordering frequently.

**For IonWave's long lead time (50 days), better approach:**

**Adjusted Order Quantity** = (Daily Sales × [Lead Time + Days of Stock Desired]) - Current Inventory

**Example**:
- Want 90 days of stock post-reorder (covers 50-day lead time + 40 days extra runway)
- Current inventory: 3,200 units
- Order Quantity: `(50 × 90) - 3,200 = 4,500 - 3,200 = **1,300 units**`

**But MOQ is 5,000 units** (per supplier research) → Must order 5,000 units even if formula says 1,300.

**Implication**: First few orders will build up excess inventory (cash flow strain). After Month 6+, may negotiate lower MOQ for reorders (suppliers often allow 50% of initial MOQ for repeat orders).

**Confidence on MOQ flexibility**: C | Source: General supplement industry practice (matsunnutrition.com mentions reorder MOQs are often lower); must confirm with IonWave supplier | Date: 2026-02-10

---

## Restock Trigger Decision Tree

**Use this decision tree every week (Monday morning inventory check):**

```
┌─ Current Inventory < Reorder Point (3,200 units)?
│
├─ YES → Check cash available
│   │
│   ├─ Cash available ≥ (Order Qty × Unit Cost)?
│   │   │
│   │   ├─ YES → Place PO immediately (email supplier)
│   │   │
│   │   └─ NO → Escalate to PM co-founder
│   │           Options:
│   │           1. Reduce order qty (if below MOQ, negotiate payment terms)
│   │           2. Delay non-essential expenses (reallocate cash)
│   │           3. Accept stockout risk (if cash flow crisis)
│   │
│   └─ Check supplier lead time
│       │
│       ├─ Lead time increased (e.g., supplier says 60 days instead of 50)?
│       │   → Recalculate reorder point with new lead time
│       │   → May need to reorder earlier next time
│       │
│       └─ Lead time stable → Proceed with order
│
└─ NO → No action needed (but re-check next week)
```

**Weekly Inventory Check Protocol**:
1. **Monday 9 AM**: PM co-founder checks Shopify inventory count or 3PL dashboard
2. **Compare to reorder point**: If below 3,200 units → trigger decision tree above
3. **If PO placed**: Log in Restock Tracker (see below) with PO #, order qty, expected delivery date
4. **If inventory rising faster than expected** (e.g., sales slow down): Adjust daily sales rate in formula, recalculate reorder point for next cycle

**[VOID — requires: PM co-founder to execute weekly inventory check after launch]**

---

## Restock Tracker (Order History Log)

**Purpose**: Track every PO placed, delivery dates, and compare forecast vs actual.

### Tracker Template

| PO # | Order Date | Supplier | Ordered Qty | Unit Cost | Total Cost | Expected Delivery | Actual Delivery | Days Early/Late | Inventory at Order | Notes |
|------|-----------|----------|-------------|-----------|------------|-------------------|-----------------|-----------------|-------------------|-------|
| PO-001 | 2026-02-15 | Biocean | 5,000 | $1.50 | $7,500 | 2026-04-06 | [TBD] | [TBD] | 4,500 | First production run |
| PO-002 | 2026-04-01 | Biocean | 5,000 | $1.50 | $7,500 | 2026-05-21 | [TBD] | [TBD] | 3,200 | Reorder at trigger point |
| PO-003 | [TBD] | [Supplier] | [Qty] | [Cost] | [Total] | [Expected] | [Actual] | [+/- days] | [Inventory] | |

**Field Definitions**:
- **PO #**: Sequential purchase order number (IonWave internal)
- **Order Date**: Date PO sent to supplier
- **Ordered Qty**: Units ordered (boxes in IonWave case, or bulk liters if ordering raw material)
- **Unit Cost**: COGS per unit (updates if supplier changes pricing)
- **Expected Delivery**: Order Date + Lead Time (50 days baseline)
- **Actual Delivery**: Date inventory arrived at 3PL warehouse (log when received)
- **Days Early/Late**: Actual - Expected (positive = late, negative = early)
  - If consistently late → increase lead time assumption in formula
  - If consistently early → reduce lead time assumption (but keep safety stock)
- **Inventory at Order**: Inventory level when PO was placed (should be near reorder point)
- **Notes**: Any issues (e.g., "Supplier delayed due to ocean conditions", "COA took 10 days instead of 5")

**Monthly Review**: Compare forecast vs actual:
- **If actual delivery consistently late** → Increase lead time in formula by 5-7 days
- **If sales rate increasing** → Recalculate daily sales rate, adjust reorder point upward
- **If sales rate decreasing** → Lower reorder point to avoid overstocking

**[VOID — requires: Set up Restock Tracker spreadsheet after first PO placed]**

---

## Demand Forecasting (Upgrade Path)

**Current State**: Using 14-day average daily sales (simple moving average).

**Problem**: This lags if demand is growing fast (e.g., successful ad campaign) or seasonal (summer hydration spike).

**Upgrade Path After Month 3-6 Real Data**:

### Option 1: Weighted Moving Average (Simple Upgrade)

Give more weight to recent sales vs older sales.

**Formula**:
`Daily Sales Rate = (Last 7 days sales × 0.6) + (Days 8-14 sales × 0.4)`

**Pro**: Responds faster to trends
**Con**: Still lags if sudden spike

### Option 2: Exponential Moving Average (EMA)

Industry standard for demand forecasting.

**Formula**:
`EMA_today = (Sales_today × α) + (EMA_yesterday × (1 - α))`

Where α = smoothing factor (0.2-0.3 typical for supplements)

**Pro**: Responds quickly to trends, smooths out noise
**Con**: Requires daily calculation (spreadsheet or automated tool)

### Option 3: Seasonal Adjustment

If sales show seasonality (e.g., 20% higher in summer):

**Formula**:
`Adjusted Daily Sales = Base Rate × Seasonal Factor`

**Seasonal Factors** (example for hydration products):
- Jan-Feb: 0.8 (low — post-holiday crash)
- Mar-May: 1.0 (baseline)
- Jun-Aug: 1.2 (high — summer heat)
- Sep-Nov: 1.0 (baseline)
- Dec: 0.9 (holiday slowdown)

**Pro**: Prevents stockouts in high season, reduces overstock in low season
**Con**: Requires 12+ months of data to establish pattern

### Option 4: Machine Learning / Shopify Apps

**Tools**: Sumtracker, Easy Repl enish, Inventory Planner (Shopify apps)

**Pro**: Automated forecasting, integrates with Shopify sales data, adjusts for trends/seasonality/promotions
**Con**: $50-200/month cost, overkill for <$500K/year revenue

**Recommended Timing**:
- **Month 1-3**: Use simple 14-day average (current formula)
- **Month 4-6**: Upgrade to weighted moving average (Option 1)
- **Month 7-12**: If seasonal pattern emerges, apply seasonal adjustment (Option 3)
- **Year 2+**: If revenue >$500K, consider Shopify app (Option 4)

**Confidence on forecasting methods**: B | Source: Demand forecasting best practices per easyreplenish.com, nul.global demand planning articles | Date: 2026-02-10

---

## Cash Flow Integration (Link to M25 Financial Operations)

**Problem**: Restock formula says "order 5,000 units" but cash account has only $5,000 and PO costs $7,500.

**Solution**: Integrate restock planning with M25 13-week cash forecast.

### Pre-Order Cash Check

Before placing PO, verify:

1. **Current cash balance** ≥ (Order Qty × Unit Cost) + $5,000 buffer
   - $5,000 buffer = emergency fund for ad spend, payroll, etc.
   - If cash < threshold → delay order OR reduce order qty

2. **Expected cash inflow** in next 14 days
   - Shopify revenue (subscriptions + one-time orders)
   - Accounts receivable (if B2B/wholesale in future)
   - If cash inflow + current balance ≥ PO cost → proceed

3. **Payment terms with supplier**
   - Net 30: Pay 30 days after delivery → eases cash flow (order now, pay later)
   - 50% deposit: Pay half upfront, half on delivery → moderate strain
   - 100% upfront: Pay full amount when ordering → high strain (avoid if possible)

**Example**:
- PO cost: $7,500 (5,000 units × $1.50)
- Current cash: $10,000
- Expected revenue (next 14 days): $8,000
- Payment terms: Net 30

**Decision**: **Proceed**
- Cash available: $10,000 (sufficient for deposit if required)
- In 30 days, cash = $10,000 - $0 (no upfront payment) + $8,000 (revenue) × 4 weeks = $42,000
- When payment due (day 30 post-delivery), cash is healthy

**If payment terms were 100% upfront**:
- Cash after order: $10,000 - $7,500 = $2,500 (too low, below $5K buffer)
- **Decision**: Delay order 1 week to collect more revenue OR negotiate payment terms

**[VOID — requires: Link Restock Tracker to M25 13-week cash forecast spreadsheet; add automated cash check before PO approval]**

---

## Supplier Constraints & Negotiation

**Restock formula assumes flexible order quantities**, but suppliers have constraints:

### Minimum Order Quantity (MOQ)

**First Order MOQ** (typical): 5,000-10,000 units
- Supplier needs to recoup setup costs (filtration, packaging, QA)

**Reorder MOQ** (typical): 50-75% of first order (2,500-7,500 units)
- Supplier already has IonWave specs on file, lower setup cost

**IonWave Negotiation Strategy**:
1. **Ask for reorder MOQ in initial contract** (don't wait until second order to negotiate)
2. **Tie reorder MOQ to volume commitment** (e.g., "If we order every 60 days for 12 months, can you reduce reorder MOQ to 2,500 units?")
3. **Cash flow argument** ("We're a startup; 5,000-unit reorders strain cash flow; competitors offer 2,500-unit reorders")
4. **Accept higher unit cost for lower MOQ** (e.g., $1.60/unit for 2,500 units vs $1.50/unit for 5,000 units)
   - If margin difference is <5%, worth it for cash flow flexibility

**[VOID — requires: Negotiate reorder MOQ during supplier contract phase]**

### Lead Time Variability

**Supplier quote says "45-50 days lead time"** → Use 50 days in formula (pessimistic assumption).

**But lead time can spike due to**:
- Ocean conditions (storms delay extraction)
- COA delays (contamination found, need re-batch)
- Shipping delays (customs, port congestion)
- Supplier capacity (if they prioritize larger customers)

**Risk Mitigation**:
1. **Safety Stock** = 14 days (already in formula) → Absorbs up to 14-day lead time increase
2. **Escalation Protocol**: If supplier says lead time >60 days → escalate to PM co-founder, consider backup supplier
3. **Quarterly Lead Time Review**: Compare actual delivery (Restock Tracker) vs quoted lead time
   - If consistently >10% late → renegotiate lead time expectation OR increase safety stock to 21 days

**[VOID — requires: Monitor lead time variance after 3+ POs; adjust formula if needed]**

---

## Restock Scenarios (Stress Tests)

### Scenario A: Sales Spike (Viral Marketing Campaign)

**Situation**: Daily sales jump from 50 units/day → 150 units/day due to successful TikTok campaign.

**Current inventory**: 3,500 units (above reorder point, so no PO placed yet)

**Problem**: At 150 units/day, inventory lasts 23 days. Lead time is 50 days. **Stockout in 23 days**.

**Solution**:
1. **Place emergency PO immediately** (don't wait for reorder point)
2. **Order higher quantity** (e.g., 10,000 units instead of 5,000) to cover 66 days at 150/day rate
3. **Negotiate expedited production** with supplier (ask for 30-35 day lead time; may cost +10-20% premium)
4. **Slow down ad spend** if stockout risk is imminent (better to under-deliver on ads than stockout)

**Prevention**:
- **Ad spend governance** (M13 Media Buying): Never scale ads >30%/week unless inventory confirmed for next 90 days
- **Weekly inventory pulse** (not just Monday check — check daily during growth spurts)

### Scenario B: Sales Collapse (Product-Market Fit Failure)

**Situation**: Daily sales drop from 50 units/day → 10 units/day after Month 3.

**Current inventory**: 5,000 units (just received new PO)

**Problem**: At 10 units/day, inventory lasts 500 days (16 months). **Massive overstock, cash tied up**.

**Solution**:
1. **Cancel or delay next PO** (if not yet placed)
2. **Negotiate payment terms** with supplier if PO already committed (delay payment, reduce qty)
3. **Liquidation options**:
   - Discount pricing (e.g., $39 instead of $49) to move inventory faster
   - Wholesale/B2B sales (per M28 Market Expansion) at lower margin to recoup cash
   - Write off excess inventory (tax deduction) if expiration date approaching
4. **Kill criteria check** (per M0 Trade Thesis and M30 Analytics): If sales <20 units/day for 3 consecutive months → **Trade #84 may be dead**

**Prevention**:
- **Conservative first orders** (don't order 10,000 units on Day 1; start with 5,000)
- **Product-market fit validation** (per M14 Testing) before scaling inventory

### Scenario C: Supplier Stockout

**Situation**: Supplier (Biocean) says "Ocean contamination event; can't produce for 60 days".

**Current inventory**: 2,000 units (below reorder point, need resupply now)

**Problem**: At 50 units/day, stockout in 40 days. Backup supplier (Actimar) has 50-day lead time. **Stockout guaranteed**.

**Solution**:
1. **Activate Backup Supplier Plan** (see `supplier_research_and_landscape.md`)
2. **Emergency air freight** (vs ocean freight) from backup supplier → reduces 50-day lead time to 30 days
   - Cost: +$2-3 per unit (worth it to avoid stockout)
3. **Slow sales temporarily** (reduce ad spend, pause new customer acquisition, focus on subscriptions only)
4. **Product substitution** (if desperate): Offer customers similar product (e.g., LMNT electrolytes) with discount code while waiting for IonWave restock
   - Preserves customer relationship vs hard stockout

**Prevention**:
- **Dual-source strategy** (M28 Market Expansion): Once revenue >$1M/year, contract with 2 suppliers (primary + backup) to de-risk single-source dependency
- **Higher safety stock** (21 days instead of 14 days) if single-source supplier

---

## Intelligence Gaps

1. **Real daily sales rate** — Currently using $30K MRR ÷ 30 days ÷ $49 = ~20 orders/day = ~20 units/day (if everyone buys 1 box), but this is pre-launch estimate
   - **Upgrade path**: Replace with actual Shopify sales data after Month 1
   - **Blocking**: Reorder point accuracy (could stockout or overstock if estimate is off by 50%+)

2. **Supplier reorder MOQ** — Unknown if Biocean/Actimar/Quinton allow <5,000 unit reorders
   - **Upgrade path**: Negotiate in supplier contract
   - **Blocking**: Cash flow planning (if stuck at 5,000-unit MOQ, need $7,500 every reorder)

3. **Lead time variance** — Assumed 50 days, but no real data yet
   - **Upgrade path**: Track actual delivery dates in Restock Tracker; adjust formula after 3 POs
   - **Blocking**: Safety stock adequacy (if lead time is actually 65 days, 14-day safety stock is insufficient)

4. **Seasonal demand pattern** — Unknown if marine plasma sales are seasonal (likely higher in summer for hydration, lower in winter)
   - **Upgrade path**: After 12 months of sales data, apply seasonal factors to forecasting
   - **Blocking**: Not blocking launch; improves accuracy in Year 2

**Recommended Action**: Prioritize Gap #1 (real sales data) after Month 1 launch. Gaps #2, #3 must be validated by Month 3 before second PO. Gap #4 is Year 2+ optimization.

---

## Sources

- [Inventory Replenishment Formula: How to Forecast & Restock Efficiently](https://www.easyreplenish.com/blog/inventory-replenishment-formula-how-to-forecast-and-restock)
- [12 Demand Planning and Forecasting Best Practices in 2026](https://nul.global/blog/demand-forecasting-best-practices)
- [Reorder Level: Reorder Rationale: Inventory Tags That Signal When It's Time to Restock - FasterCapital](https://fastercapital.com/content/Reorder-Level--Reorder-Rationale--Inventory-Tags-That-Signal-When-It-s-Time-to-Restock.html)
- [Reorder Point: When to Restock: Determining the Reorder Point Through EOQ - FasterCapital](https://fastercapital.com/content/Reorder-Point--When-to-Restock--Determining-the-Reorder-Point-Through-EOQ.html)
- M24 Fulfillment & Inventory (IonWave internal)
- M25 Financial Operations (IonWave internal)
- M13 Media Buying scaling governance (IonWave internal)

