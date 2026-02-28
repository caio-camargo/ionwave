# Budget Template — M3: Financial Model

**TUP**: M3 | **Tab**: 13 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**OpKit Deliverable**: This template is a core scaffold for OK-M3-001

---

## 1. Purpose

Reusable monthly budget template for any pre-seed D2C business. This template is designed to be copied and filled in for each month. It captures all standard D2C cost categories with built-in formulas and margin tracking.

**Who uses this**: Solo founder or early-stage team managing a D2C e-commerce business with subscription and one-time revenue.

---

## 2. Monthly Budget Template

### 2.1 Revenue Section

```
=== REVENUE ===

Subscription orders:        ____ orders x $____ AOV = $________
One-time orders:            ____ orders x $____ AOV = $________
Bundle orders:              ____ orders x $____ AOV = $________
                                                     ----------
GROSS REVENUE:                                        $________

Less: Returns & refunds     (____ % x Gross Revenue)= ($______)
Less: Discounts given       (____ % x Gross Revenue)= ($______)
Less: Chargebacks           (____ % x Gross Revenue)= ($______)
                                                     ----------
NET REVENUE:                                          $________
```

### 2.2 Cost of Goods Sold Section

```
=== COST OF GOODS SOLD ===

Product COGS:
  Units sold:               ____ units x $____ /unit = $________
  (Includes: raw materials, packaging, manufacturing, QC)

Fulfillment:
  Orders shipped:           ____ orders x $____ /order = $________
  (Pick, pack, label. Self-fulfill: ~$2.50, 3PL: ~$4-6)

Outbound shipping:
  Orders shipped:           ____ orders x $____ /order = $________
  (USPS/UPS/FedEx. Average: $3.50-5.00)

Payment processing:
  Stripe fees:              ____ % of gross revenue + $0.30/txn = $________
  (Standard: 2.9% + $0.30)

                                                     ----------
TOTAL COGS:                                           $________

GROSS PROFIT:               Net Revenue - COGS =      $________
GROSS MARGIN:               Gross Profit / Net Rev =     ____%

>>> MARGIN CHECK: Is GM above 50%? YES / NO
>>> If NO: Review fulfillment, shipping, returns. See REC-001 analysis.
```

### 2.3 Operating Expenses Section

```
=== OPERATING EXPENSES ===

MARKETING & ACQUISITION
  Meta Ads:                                           $________
  Google Ads:                                         $________
  Influencer/Creator:                                 $________
  Content creation:                                   $________
  Other paid:                                         $________
                                                     ----------
  Total marketing:                                    $________
  Marketing as % of revenue:                             ____%

TECHNOLOGY & TOOLS
  Shopify:                                            $________
  Email/SMS (Klaviyo):                                $________
  Subscription mgmt (Recharge):                       $________
  Analytics:                                          $________
  Other SaaS:                                         $________
                                                     ----------
  Total technology:                                   $________

PROFESSIONAL SERVICES
  Legal:                                              $________
  Accounting/bookkeeping:                             $________
  Consulting:                                         $________
                                                     ----------
  Total professional:                                 $________

INSURANCE
  Product liability:                                  $________
  General liability:                                  $________
                                                     ----------
  Total insurance:                                    $________

PEOPLE
  Founder compensation:                               $________
  Contractors:                                        $________
  Benefits:                                           $________
                                                     ----------
  Total people:                                       $________

OTHER
  Storage/warehouse:                                  $________
  Office supplies:                                    $________
  Travel:                                             $________
  Miscellaneous:                                      $________
                                                     ----------
  Total other:                                        $________

                                                     ==========
TOTAL OPERATING EXPENSES:                             $________

=== NET INCOME (LOSS) ===
Gross Profit - Total OpEx =                           $________
Net Margin:                                              ____%
```

### 2.4 Cash Position Section

```
=== CASH POSITION ===

Opening cash (start of month):                        $________
+ Net income (loss):                                  $________
+ Capital injections:                                 $________
- Inventory prepayments (next month):                ($______)
- Tax reserves (25% of profit if profitable):        ($______)
                                                     ----------
CLOSING CASH (end of month):                          $________

Months of runway at current burn:                      ________
Weeks of runway at current burn:                       ________

>>> RUNWAY CHECK: Is runway > 3 months? YES / NO
>>> If NO: Activate cash conservation protocol. See cash_flow_monitoring.md.
```

---

## 3. Budget vs Actual Tracking

### 3.1 Monthly Variance Template

| Line Item | Budget | Actual | Variance ($) | Variance (%) | Explanation |
|-----------|--------|--------|-------------|-------------|-------------|
| Net Revenue | | | | | |
| Product COGS | | | | | |
| Fulfillment | | | | | |
| Shipping | | | | | |
| Payment processing | | | | | |
| **Gross Profit** | | | | | |
| **Gross Margin %** | | | | | |
| Marketing | | | | | |
| Technology | | | | | |
| Professional services | | | | | |
| Insurance | | | | | |
| People | | | | | |
| Other | | | | | |
| **Total OpEx** | | | | | |
| **Net Income** | | | | | |

### 3.2 Variance Escalation Rules

| Variance | Action |
|----------|--------|
| < 5% | Normal. No action needed. |
| 5-15% | Note in monthly review. Update next month's forecast. |
| 15-30% | Investigate root cause. Present at monthly review. |
| > 30% | Immediate investigation. Model assumptions may be wrong. |

---

## 4. Quick Formulas Reference

```
Gross Margin %     = (Net Revenue - COGS) / Net Revenue
Net Margin %       = Net Income / Net Revenue
CAC                = Total Marketing Spend / New Customers Acquired
LTV                = (AOV x Gross Margin) / Monthly Churn Rate
LTV:CAC            = LTV / CAC
MER                = Total Revenue / Total Marketing Spend
Payback Period     = CAC / Monthly Gross Profit per Customer
Burn Rate          = Monthly Net Loss (when negative)
Runway (months)    = Cash Balance / Monthly Burn Rate
Break-Even Rev     = Fixed Costs / Gross Margin %
```

---

## 5. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 5/5 | Complete template covering all D2C budget categories |
| Confidence Honesty | 4/5 | Built-in checks for margin and runway |
| Upgrade Path Quality | 4/5 | Variance tracking enables self-improvement |
| Actionability | 5/5 | Copy, fill, use immediately |
| Integration | 4/5 | Formulas reference M3 model variables |

**Tab Score: 8.5/10** — The template itself is the deliverable. High utility as an OpKit scaffold.
