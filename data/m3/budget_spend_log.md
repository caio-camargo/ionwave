# Budget Spend Log — M3: Financial Model

**TUP**: M3 | **Tab**: 15 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Cross-Reference**: M25 (Financial Ops), M3 budget.md

---

## 1. Purpose

Transaction-level spend tracking to maintain financial discipline. Every dollar spent gets logged here. This is the raw data that feeds into the monthly P&L, the budget variance analysis, and the 13-week cash flow forecast.

**For a solo founder, this replaces an expense tracking app.** Just log every purchase here.

---

## 2. Spend Log Template

### 2.1 Transaction Log (Append-Only)

| Date | Category | Vendor | Description | Amount | Payment Method | Budget Line | Budgeted? | Receipt? |
|------|----------|--------|-------------|--------|---------------|------------|----------|---------|
| 2026-MM-DD | [Category] | [Who] | [What] | $X.XX | CC/ACH/Cash | [Budget category] | Y/N | Y/N |

### 2.2 Category Codes

| Code | Category | Budget Line |
|------|----------|------------|
| **INV** | Inventory / COGS | Product COGS |
| **FUL** | Fulfillment | Fulfillment |
| **SHP** | Shipping | Shipping |
| **ADS** | Advertising | Marketing |
| **SFT** | Software / Tools | Technology |
| **LEG** | Legal | Professional services |
| **ACC** | Accounting | Professional services |
| **INS** | Insurance | Insurance |
| **PAY** | Founder compensation | People |
| **CON** | Contractors | People |
| **OTH** | Other / Miscellaneous | Other |
| **TAX** | Tax payments | Tax reserves |
| **ENT** | Entity / Registration | Legal |

---

## 3. Pre-Launch Spend Log (Example Entries)

| Date | Category | Vendor | Description | Amount | Payment | Budget Line | Budgeted? | Receipt? |
|------|----------|--------|-------------|--------|---------|------------|----------|---------|
| 2026-XX-XX | ENT | Stripe Atlas / Clerky | Delaware C-Corp formation | $2,000 | CC | Legal | Y | Y |
| 2026-XX-XX | LEG | USPTO | Trademark filing (IonWave) | $1,500 | CC | Legal | Y | Y |
| 2026-XX-XX | INS | [Broker] | Product liability insurance (annual) | $1,800 | CC | Insurance | Y | Y |
| 2026-XX-XX | SFT | Shopify | Shopify Basic (first month) | $39 | CC | Technology | Y | Y |
| 2026-XX-XX | SFT | Klaviyo | Email/SMS setup | $20 | CC | Technology | Y | Y |
| 2026-XX-XX | INV | [CM] | First inventory order - 500 boxes (deposit) | $4,500 | ACH | COGS | Y | Y |
| 2026-XX-XX | INV | [CM] | First inventory order - 500 boxes (balance) | $4,500 | ACH | COGS | Y | Y |
| 2026-XX-XX | OTH | [Photographer] | Product photography | $750 | CC | Other | Y | Y |
| 2026-XX-XX | SFT | Recharge | Subscription management | $99 | CC | Technology | Y | Y |
| 2026-XX-XX | ADS | Meta | First week ad testing | $700 | CC | Marketing | Y | Auto |

---

## 4. Monthly Summary Roll-Up

At month end, sum the spend log by category and compare to budget:

| Category | Month Budget | Month Actual | Variance | Over/Under |
|----------|-------------|-------------|----------|------------|
| INV (Inventory) | $X | $X | $X | |
| FUL (Fulfillment) | $X | $X | $X | |
| SHP (Shipping) | $X | $X | $X | |
| ADS (Advertising) | $X | $X | $X | |
| SFT (Software) | $X | $X | $X | |
| LEG (Legal) | $X | $X | $X | |
| ACC (Accounting) | $X | $X | $X | |
| INS (Insurance) | $X | $X | $X | |
| PAY (Founder) | $X | $X | $X | |
| CON (Contractors) | $X | $X | $X | |
| OTH (Other) | $X | $X | $X | |
| TAX (Tax) | $X | $X | $X | |
| **TOTAL** | **$X** | **$X** | **$X** | |

---

## 5. Spend Discipline Rules

### 5.1 Approval Thresholds (Solo Founder)

| Amount | Rule |
|--------|------|
| < $100 | Log it, no approval needed |
| $100 - $500 | Log it, check against budget before purchasing |
| $500 - $2,000 | Log it, must be in budget OR requires deliberate exception |
| > $2,000 | Must be pre-approved in budget OR flagged as capital expenditure |

### 5.2 Non-Budgeted Spend Protocol

If a purchase is not in the budget:
1. **Is it urgent?** (Will delaying 48 hours cause harm?)
2. **What budget line does it replace?** (Zero-sum: something else gets cut)
3. **Log it as "UNBUDGETED"** in the Budgeted? column
4. **Review all UNBUDGETED items monthly** — if pattern emerges, add to budget

### 5.3 Receipt Management

| Method | Tool | Habit |
|--------|------|-------|
| Digital receipts | Forward all receipts to a dedicated email (receipts@ionwave.co) | Same day |
| Physical receipts | Photo + email to same address | Same day |
| Auto-generated (Stripe, Meta) | Download monthly from dashboards | Month-end |

---

## 6. Intelligence Gaps

| Gap | Impact | Validation Path | Priority |
|-----|--------|----------------|----------|
| No expenses yet to log | Template is empty | Begin logging at first purchase | LOW (template is ready) |
| Receipt management system not set up | Audit readiness risk | Set up email + folder before first purchase | MEDIUM |
| Credit card not yet opened | Can't use CC float strategy | Apply for business credit card at entity formation | HIGH |

---

## 7. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 4/5 | Complete tracking system with categories and roll-ups |
| Confidence Honesty | 4/5 | Acknowledges empty state |
| Upgrade Path Quality | 4/5 | Monthly roll-up feeds budget variance |
| Actionability | 5/5 | Ready to use on first purchase |
| Integration | 4/5 | Feeds into budget, 13-week forecast, audit readiness |

**Tab Score: 7.5/10**
