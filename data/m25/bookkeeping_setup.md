# Bookkeeping & Accounting Setup — M25: Financial Operations

**TUP**: M25
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-004 (Gross Margin), HYP-001 (CAC)
**Danilo Source**: ops_model_v10_dump/533_bookkeeping_accounting_setup.json (28 rows)
**Cross-Reference**: M3 (Financial Model), M10 (Pricing & Offer), M30 (Analytics)

---

## Purpose

Establish IonWave's bookkeeping and accounting foundation: what software to use, how accounts are structured, and what gets done every month. This file turns Danilo's 28-row tab (which listed tools and a checklist) into a fully grounded, IonWave-specific accounting setup guide.

**Core principle**: Financial clarity is a compounding asset. Clean books from Day 1 prevent the retroactive cleanup that costs 10x more. The goal is "books always current, reviews automatic, every number trustworthy" (Danilo's vision for M25).

---

## 1. Accounting Method

**Decision: Accrual Basis**

[Confidence: A | Source: IRS requirement for inventory businesses >$25M; best practice for all subscription DTC brands]

| Method | When Revenue Recognized | When Expenses Recognized | Best For |
|--------|------------------------|--------------------------|----------|
| **Cash** | When cash received | When cash paid | Service businesses, very small entities |
| **Accrual** | When earned (sale made) | When incurred (obligation created) | Inventory businesses, subscription models |

**Why accrual for IonWave:**
- Subscription revenue requires deferred revenue tracking (payment ≠ earned revenue)
- Inventory requires COGS matching (cost recognized when product sold, not when purchased)
- Investors/lenders require accrual-basis financials
- IRS requires accrual for inventory businesses exceeding $25M (set up correctly from start)

**Practical note**: Accrual P&L can show profit while cash is negative (common in growth phase). Always monitor cash flow separately — see business_review_cadence.md for the weekly cash review.

---

## 2. Software Stack

### Primary: QuickBooks Online (QBO)

[Confidence: B | Source: Most recommended accounting platform for DTC brands across multiple sources; Danilo's tab also lists QBO first]

| Plan | Monthly Cost | Key Features | Right For |
|------|-------------|-------------|-----------|
| **Simple Start** | $30/mo | 1 user, basic reports, invoicing | Solo founder, pre-revenue |
| **Essentials** | $60/mo | 3 users, bill management, multi-currency | **IonWave starting point** |
| **Plus** | $90/mo | 5 users, inventory tracking, project profitability | When inventory tracking matters |
| **Advanced** | $200/mo | 25 users, custom roles, batch invoicing, advanced reporting | Growth stage ($500K+ revenue) |

**Recommendation**: Start with **Essentials** ($60/mo). Upgrade to Plus when inventory tracking in QBO becomes necessary (likely after first 3PL integration stabilizes).

### Shopify-QBO Connector: Synder

[Confidence: B | Source: Best fit for subscription-first DTC model per research; handles recurring revenue recognition automatically]

**Why Synder over A2X:**

| Feature | Synder | A2X |
|---------|--------|-----|
| Sync mode | Real-time OR daily summary | Daily summary only |
| Individual order sync | Yes | No |
| Subscription revenue handling | Auto-recognizes recurring revenue | Manual tracking required |
| Deferred revenue | Native support | Requires manual journals |
| Multi-platform | Shopify + Amazon + Stripe + PayPal | Shopify + Amazon |
| Price | Volume-based | Volume-based |

**Key integration gotchas:**
1. **Payment processor fees**: Ensure Shopify Payments / Stripe fees post to correct expense accounts (not netted from revenue)
2. **Subscription timing**: ReCharge creates charges on billing date; Synder should match revenue recognition to delivery date, not billing date
3. **Refunds**: Must flow back correctly (reduce revenue, not create expense)
4. **Gift cards**: Liability when sold, revenue when redeemed — connector must handle this

### Sales Tax Automation

[Confidence: B | Source: Multi-source comparison of TaxJar, Avalara, Shopify Tax]

**Phase 1 (Launch — <$100K/state/year)**: Use **Shopify Tax** (built-in)
- No additional cost for tax calculation
- Rooftop accuracy across 11,000+ U.S. jurisdictions
- Nexus liability alerts (warns when approaching thresholds)
- Limitation: Shopify-only (no multi-channel support)

**Phase 2 (Growth — crossing nexus in 5+ states)**: Evaluate **TaxJar** ($19-99/mo)
- Multi-channel support (Shopify + Amazon + wholesale)
- AutoFile submits returns automatically ($30-35/state/return)
- Caveat: Mixed reviews post-Stripe acquisition (3.2/5 on Shopify App Store). Monitor quality.

**Phase 3 (Scale — >$1M revenue, international)**: Evaluate **Avalara**
- Enterprise-grade, no public pricing (requires sales call)
- Only justified at significant scale with multi-state/international complexity

**Economic nexus thresholds (2026):**
- Most states: $100,000 in gross annual sales (revenue threshold only — transaction count thresholds being phased out)
- Notable exceptions: California $500K, Texas $500K, New York $500K + 100 transactions
- **IonWave reality**: Likely hit nexus in home state + 3-5 high-volume states in Year 1

[Confidence: A | Source: South Dakota v. Wayfair (2018), 2026 state law updates, Sales Tax Institute state-by-state guide]

### Other Tools

| Tool | Purpose | Cost | When to Add |
|------|---------|------|-------------|
| **Shopify** | Sales platform, source of truth for orders | Included | Day 0 |
| **Stripe/Shopify Payments** | Payment processing | 2.9% + $0.30/txn | Day 0 |
| **ReCharge** | Subscription management | $99/mo + $0.19/txn | Day 0 |
| **Google Sheets** | Cash flow forecasting, 13-week model | $0 | Day 0 |
| **Inventory Planner** (or Cin7 Lite) | Demand forecasting, reorder alerts | $50-200/mo | Month 3-6 |

---

## 3. Chart of Accounts (IonWave-Specific)

[Confidence: B | Source: DTC ecommerce chart of accounts best practices, adapted for supplement brand with subscription model]

### Day 1 Essentials (Start Here) *(Dialogue upgrade U4)*

For launch day, set up only these 18 accounts. Add the rest when they become relevant.

| Account # | Account Name | Type |
|-----------|-------------|------|
| 1000 | Business Checking | Bank |
| 1010 | Stripe Balance | Bank |
| 1200 | Inventory — Finished Goods | Asset |
| 2000 | Accounts Payable | Liability |
| 2100 | Sales Tax Payable | Liability |
| 2200 | Deferred Revenue | Liability |
| 3000 | Owner's Equity | Equity |
| 3100 | Retained Earnings | Equity |
| 4000 | Product Revenue — Subscription | Revenue |
| 4010 | Product Revenue — One-Time | Revenue |
| 4100 | Discounts & Promos | Contra-Revenue |
| 4110 | Refunds Issued | Contra-Revenue |
| 5000 | COGS — Product | COGS |
| 6000 | Marketing — Meta Ads | Expense |
| 6100 | 3PL — Storage Fees | Expense |
| 6120 | Outbound Shipping | Expense |
| 6200 | Shopify Subscription | Expense |
| 6210 | Payment Processing Fees | Expense |

**Add later**: Separate COGS by line (when 2+ SKUs), marketing by channel (when running Google/TikTok), PayPal (when activated), inventory reserves (Month 3+), return reserve (when return data available).

### Full Chart of Accounts (Reference Architecture)

### Assets

| Account # | Account Name | Type | Notes |
|-----------|-------------|------|-------|
| 1000 | Business Checking | Bank | Primary operating account |
| 1010 | Stripe Balance | Bank | Pending payouts (clears in 2 business days) |
| 1020 | PayPal Balance | Bank | If used |
| 1100 | Accounts Receivable | A/R | B2B/wholesale only (minimal for DTC) |
| 1200 | Inventory — Finished Goods | Asset | Product at 3PL, valued at landed cost |
| 1210 | Inventory — In Transit | Asset | Product shipped from CM, not yet at 3PL |
| 1220 | Reserve for Expired Inventory | Contra-Asset | 3-5% of inventory value |
| 1300 | Prepaid Expenses | Asset | Annual software subscriptions paid upfront |

### Liabilities

| Account # | Account Name | Type | Notes |
|-----------|-------------|------|-------|
| 2000 | Accounts Payable | Liability | CM invoices, 3PL invoices, vendor bills |
| 2100 | Sales Tax Payable | Liability | Collected but not yet remitted |
| 2200 | Deferred Revenue | Liability | **Critical for subscriptions** — payment received, product not yet delivered |
| 2300 | Return Reserve | Liability | Estimated future returns (2-5% of revenue) |
| 2400 | Accrued Expenses | Liability | Expenses incurred but not yet billed |
| 2500 | Loans — Related Parties | Liability | Founder capital, if structured as loan |
| 2510 | Loans — External | Liability | RBF, SBA, bank line |

### Equity

| Account # | Account Name | Type | Notes |
|-----------|-------------|------|-------|
| 3000 | Owner's Equity | Equity | Initial capital contribution |
| 3100 | Retained Earnings | Equity | Accumulated profits/losses |

### Revenue

| Account # | Account Name | Type | Notes |
|-----------|-------------|------|-------|
| 4000 | Product Revenue — Subscription | Revenue | Recognized when product ships (not when billed) |
| 4010 | Product Revenue — One-Time | Revenue | Recognized when product ships |
| 4020 | Shipping Revenue | Revenue | Charged to customers at checkout |
| 4100 | Discounts & Promos | Contra-Revenue | Coupon codes, subscription discounts |
| 4110 | Refunds Issued | Contra-Revenue | Full and partial refunds |
| 4120 | Returns | Contra-Revenue | Product returns net impact |

**Why split subscription vs one-time revenue**: Different unit economics (HYP-002 tracks subscription attach rate), different LTV profiles, different retention dynamics. This split is essential for tracking HYP-005 (Blended LTV).

### Cost of Goods Sold

| Account # | Account Name | Type | Notes |
|-----------|-------------|------|-------|
| 5000 | COGS — Product (Subscription) | COGS | Landed cost: CM price + freight-in |
| 5010 | COGS — Product (One-Time) | COGS | Same calculation |
| 5020 | COGS — Packaging | COGS | Boxes, inserts, labels |
| 5030 | COGS — Freight In | COGS | Shipping from CM to 3PL (capitalized into inventory) |
| 5040 | Loss on Expired Inventory | COGS | Write-off when product expires (if immaterial) |
| 5050 | COGS — Third-Party Testing | COGS | COA testing, heavy metals, microbiology ($500-1500/batch) |

**Gross margin calculation**: (Revenue − COGS) / Revenue
- HYP-004 target: 67% at $59 one-time price, ~62-64% blended with subscription discount
- Danilo tab 534-535 used 45% — this is the **REC-001 margin dispute**. See unit_economics_tracking.md for dual-scenario treatment.

[Confidence: B | Source: HYP-004 revision history. 67% is based on Biocean supplier quotes ($18-20 COGS). 45% origin in Danilo files is unexplained.]

### Operating Expenses — Marketing

| Account # | Account Name | Type | Notes |
|-----------|-------------|------|-------|
| 6000 | Marketing — Meta Ads | Expense | Track ROAS per M13 (Media Buying) |
| 6010 | Marketing — Google Ads | Expense | Brand + search campaigns |
| 6020 | Marketing — TikTok Ads | Expense | If/when activated |
| 6030 | Marketing — Influencer/Creator | Expense | Product seeding + paid partnerships per M23 |
| 6040 | Marketing — Affiliate/Referral | Expense | Referral credits per M22 |
| 6050 | Marketing — Email/SMS Platform | Expense | Klaviyo subscription |
| 6060 | Marketing — Content Production | Expense | Freelance writers, graphic design per M16 |

**Why separate ad accounts by channel**: Required for CAC-by-channel tracking (see unit_economics_tracking.md). HYP-001 assumes $35 blended CAC — need channel-level data to validate.

### Operating Expenses — Fulfillment & Shipping

| Account # | Account Name | Type | Notes |
|-----------|-------------|------|-------|
| 6100 | 3PL — Storage Fees | Expense | Monthly warehouse cost |
| 6110 | 3PL — Pick/Pack/Ship Fees | Expense | Per-order handling |
| 6120 | Outbound Shipping | Expense | Carrier cost to customer (freight-out) |
| 6130 | Return Shipping | Expense | Inbound return labels |

**Note**: Outbound shipping is an operating expense, NOT COGS. Some brands net it against Shipping Revenue (4020). Either treatment is acceptable — just be consistent.

### Operating Expenses — Platform & Technology

| Account # | Account Name | Type | Notes |
|-----------|-------------|------|-------|
| 6200 | Shopify Subscription | Expense | Monthly platform fee |
| 6210 | Payment Processing Fees | Expense | Stripe 2.9% + $0.30 per transaction |
| 6220 | Software Subscriptions | Expense | QBO, ReCharge, Klaviyo, analytics tools |
| 6230 | Domain & Hosting | Expense | Annual domain, CDN if applicable |

### Operating Expenses — General & Administrative

| Account # | Account Name | Type | Notes |
|-----------|-------------|------|-------|
| 6300 | Insurance — Product Liability | Expense | Required for supplement brands |
| 6310 | Legal & Professional | Expense | CPA fees, legal review, label compliance |
| 6320 | Regulatory & Compliance | Expense | FDA compliance consulting, if not in COGS |
| 6330 | Bank Fees | Expense | Wire fees, account maintenance |
| 6340 | Office & Admin | Expense | Miscellaneous operating costs |

### QBO Class Tracking

In addition to the chart of accounts, use QBO **Classes** to tag transactions by dimension without creating sub-accounts:

| Class | Purpose |
|-------|---------|
| **By Product Line** | If multiple SKUs (e.g., Original, Keto Blend, Athletic) |
| **By Channel** | DTC vs Wholesale vs Amazon (if multi-channel later) |

---

## 4. Inventory Accounting

### Method: FIFO (First-In, First-Out)

[Confidence: A | Source: Standard for perishable goods; aligns with 3PL physical rotation (FEFO — First-Expired, First-Out)]

**Why FIFO for supplements:**
- Products have 2-year shelf life — FIFO prevents expired inventory sitting behind newer stock
- 3PLs physically rotate using FEFO (mirrors FIFO for single-product brands)
- Matches physical flow to accounting flow — no discrepancies

**Alternative (Weighted Average Cost)**: Simpler but masks cost trends and doesn't match physical flow. Not recommended for expiry-sensitive products.

### Landed Cost Calculation

| Cost Component | Example (per unit) | Treatment |
|----------------|-------------------|-----------|
| CM product cost | $15.00 | Inventory (capitalize) |
| CM markup/handling | $2.00 | Inventory (capitalize) |
| Freight-in (CM → 3PL) | $1.50 | Inventory (capitalize) |
| Packaging materials | $1.50 | Inventory (capitalize) |
| **Total Landed Cost** | **$20.00** | **COGS when sold** |

[Confidence: B | Source: HYP-004 uses $18-20 COGS from Biocean supplier quotes. Breakdown is estimated.]

### Inventory Journal Entries

**Receive inventory from CM:**
```
Debit:  1200 Inventory — Finished Goods    $10,000
Credit: 2000 Accounts Payable              $10,000
```

**Sell product to customer:**
```
Debit:  5000 COGS — Product                $20.00
Credit: 1200 Inventory — Finished Goods    $20.00
```

**Write off expired inventory:**
```
Debit:  5040 Loss on Expired Inventory     $500
Credit: 1200 Inventory — Finished Goods    $500
```

### Expiry & Spoilage

- Budget 3-5% spoilage into financial projections
- If loss is immaterial: debit COGS (5040), credit Inventory
- If loss is material: use separate P&L line item "Loss on Expired Inventory" below gross profit
- **Document**: Batch numbers, expiry dates, photos of disposal, quantity destroyed
- **Tax deduction**: Generally deductible with proper documentation — confirm with CPA

[Confidence: A | Source: GAAP inventory write-off standards, IRS deductibility rules for destroyed inventory]

---

## 5. Subscription Revenue Recognition

### The Problem

Customer pays $50.15 on January 1 for a monthly subscription. Product ships January 5. When is revenue recognized?

### The Answer (ASC 606)

Revenue is recognized when the **performance obligation is satisfied** — i.e., when the product is delivered to the customer (or shipped, depending on contract terms).

[Confidence: A | Source: ASC 606 five-step model; applies to all businesses regardless of size]

**For IonWave's subscription model:**

1. Customer billed on Day 1 → **Deferred Revenue** (liability)
2. Product ships on Day 5 → Revenue recognized, Deferred Revenue reduced

**Journal entries:**

**Customer billed (Day 1):**
```
Debit:  1010 Stripe Balance                $50.15
Credit: 2200 Deferred Revenue              $50.15
```

**Product ships (Day 5):**
```
Debit:  2200 Deferred Revenue              $50.15
Credit: 4000 Product Revenue — Subscription $50.15
```

### Practical Simplification

For a single-product monthly subscription where billing and shipping happen within 1-5 days:
- **Acceptable shortcut**: Recognize revenue at billing date (immaterial timing difference)
- **Better practice**: Recognize at shipment date (proper ASC 606 compliance)
- **Required for audit**: Recognize at delivery date with proper deferred revenue tracking

[Confidence: B | Source: ASC 606 practical expedients for immaterial timing differences]

**Synder handles this**: When configured correctly, Synder can recognize subscription revenue at the correct point (billing, shipment, or delivery) and automatically create deferred revenue entries.

---

## 6. Monthly Bookkeeping Checklist

[Confidence: B | Source: Danilo tab 533 (8-item checklist) expanded with DTC-specific items from research]

### Weekly Tasks (Every Friday — 30 min)

| # | Task | Tool | Why |
|---|------|------|-----|
| W1 | Review bank balance and pending payouts | QBO + Stripe dashboard | Cash visibility — catch anomalies early |
| W2 | Review 13-week cash flow forecast | Google Sheets | Anticipate shortfalls 4-6 weeks ahead |
| W3 | Spot-check Synder sync | QBO | Catch transaction errors before month-end |

### Monthly Tasks (First week of following month — 3-4 hours)

| # | Task | Tool | Owner | Why |
|---|------|------|-------|-----|
| M1 | Reconcile all bank accounts | QBO | Bookkeeper/Founder | Ensure every transaction categorized |
| M2 | Reconcile Stripe/PayPal payouts | QBO + Synder | Bookkeeper | Match payouts to orders |
| M3 | Reconcile inventory count | QBO + 3PL report | Bookkeeper | Verify book value matches physical count |
| M4 | Record COGS for month | QBO | Bookkeeper | Match product costs to revenue |
| M5 | Review deferred revenue balance | QBO | Bookkeeper | Ensure subscription revenue properly recognized |
| M6 | Accrue unpaid expenses | QBO | Bookkeeper | CM invoices, 3PL fees not yet billed |
| M7 | Update return reserve | QBO | Bookkeeper | Adjust based on actual return rate |
| M8 | Review and categorize uncategorized transactions | QBO | Bookkeeper | Zero uncategorized items |
| M9 | Record sales tax collected vs remitted | QBO + TaxJar/Shopify Tax | Bookkeeper | Reconcile liability |
| M10 | Generate financial statements (P&L, Balance Sheet, Cash Flow) | QBO | Bookkeeper | Ready for MBR (see business_review_cadence.md) |
| M11 | Calculate unit economics by channel | Spreadsheet | Founder | CAC, LTV, ROAS — see unit_economics_tracking.md |
| M12 | Set aside tax reserve (25-30% of net profit) | Bank transfer | Founder | Avoid quarterly estimated tax surprises |

### Quarterly Tasks

| # | Task | Tool | Why |
|---|------|------|-----|
| Q1 | File quarterly estimated tax payment | IRS EFTPS | Avoid underpayment penalties |
| Q2 | File sales tax returns (states where nexus crossed) | TaxJar/Shopify Tax | Compliance |
| Q3 | Review chart of accounts | QBO | Add/remove accounts as business evolves |
| Q4 | Physical inventory audit (or 3PL count reconciliation) | 3PL + QBO | Catch shrinkage, expiry, discrepancies |

### Annual Tasks

| # | Task | Tool | Why |
|---|------|------|-----|
| A1 | 1099 filing (contractors >$600) | QBO or CPA | IRS requirement |
| A2 | Annual tax return | CPA | File by March 15 (S-Corp) or April 15 (LLC) |
| A3 | Review insurance coverage | Broker | Product liability, general liability |
| A4 | Review software stack | — | Upgrade/downgrade based on needs |
| A5 | Annual planning process | See business_review_cadence.md | Strategic planning cycle |

---

## 7. Common Financial Mistakes to Avoid

[Confidence: B | Source: Aggregated from multiple DTC financial operations sources]

### The Top 10 for Year 1

| # | Mistake | IonWave Mitigation |
|---|---------|-------------------|
| 1 | **Poor bookkeeping / delayed financial reporting** — books closed weeks after month-end | Synder auto-sync + monthly checklist above. Target: books closed by 5th of following month. |
| 2 | **Ignoring cash flow** — 82% of small businesses fail from cash flow, not profitability | Weekly cash review (W2). 13-week rolling forecast. |
| 3 | **Not tracking CAC by channel** — can't optimize what you can't measure | Chart of accounts separates ad spend by channel (6000-6020). See unit_economics_tracking.md. |
| 4 | **Gross margin miscalculation** — forgetting payment fees, packaging, freight | Landed cost calculation (Section 4) includes ALL cost components. |
| 5 | **Confusing cash and accrual** — showing profit on P&L with no cash in bank | Accrual P&L + separate cash flow monitoring. Both reviewed in MBR. |
| 6 | **Overstocking inventory** — ties up cash, risk of expiry | Demand forecasting from Month 3. Safety stock = 2-4 weeks. |
| 7 | **Sales tax non-compliance** — collecting but not remitting, missing nexus thresholds | Shopify Tax from Day 0. TaxJar when crossing 5+ states. |
| 8 | **Not reviewing financial statements** — flying blind | Monthly Business Review — see business_review_cadence.md. |
| 9 | **No tax planning** — profitable on paper, no cash saved for taxes | 25-30% tax reserve set aside monthly (M12 in checklist). |
| 10 | **Using generalist accountant** — misses DTC/ecommerce nuances | Hire ecommerce-specialized bookkeeper/CPA by Month 6 or $100K revenue. |

### Supplement-Specific Mistakes

| # | Mistake | Mitigation |
|---|---------|-----------|
| 11 | Not budgeting for third-party testing ($500-1500/batch) | Include in COGS (5050) or operating expenses. Budget before first order. |
| 12 | Not accounting for expiry losses (3-5%) | Reserve for Expired Inventory (account 1220). Budget in projections. |
| 13 | Underestimating regulatory costs | Budget $2-5K/year for label reviews, FDA compliance consulting. |

---

## 8. When to Hire Financial Help

[Confidence: C | Source: DTC industry benchmarks, fractional CFO firm guidance]

| Stage | Revenue | Who to Hire | Cost | What They Do |
|-------|---------|-------------|------|-------------|
| **Pre-launch** | $0 | Founder does books (QBO + Synder) | $0 (time only) | Basic bookkeeping, reconciliation |
| **Early revenue** | $0-50K/mo | Part-time bookkeeper | $300-800/mo | Monthly close, reconciliation, reporting |
| **Growth** | $50-200K/mo | Ecommerce bookkeeper + CPA for tax | $800-2000/mo | Full monthly close, tax planning, compliance |
| **Scale** | $200K+/mo | Fractional CFO + bookkeeper | $2000-5000/mo | Strategic finance, forecasting, fundraising support |

**Key trigger**: When founder time on bookkeeping exceeds 4 hours/week, hire help. Financial time is better spent on strategy (reviewing numbers) than operations (entering numbers).

---

## Intelligence Gaps

| Gap | Priority | Validation Path | Current Grade |
|-----|----------|----------------|---------------|
| Synder vs A2X real-world performance with ReCharge subscriptions | **CRITICAL** | **Pre-launch**: Set up both in trial mode, test with 10 sample transactions before committing. The connector is the single point of failure for all financial reporting — getting it wrong means retroactive cleanup. | C |
| Optimal QBO plan at launch (Essentials vs Plus) | MEDIUM | Test inventory features in QBO Plus trial | C |
| DTC-specialized bookkeeper/CPA rates in IonWave's market | LOW | Get 3 quotes from ecommerce bookkeeping services (Bench, Finaloop, local) | D |
| Third-party testing: COGS vs operating expense (industry standard) | LOW | Check 10-K filings of public supplement companies (NBTY, GNC) | D |
