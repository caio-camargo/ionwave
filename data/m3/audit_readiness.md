# Audit Readiness — M3: Financial Model

**TUP**: M3 | **Tab**: 11 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Cross-Reference**: M2 (Entity/Legal), M4 (Fundraising), M25 (Financial Ops)

---

## 1. Purpose

Pre-fundraise diligence preparation. When IonWave raises a seed round (M4: Month 9-12 target), investors will request financial documentation. Having clean records from Day 1 prevents a scramble later and demonstrates operational maturity.

**The goal**: Any investor can review IonWave's financials in 48 hours and not find surprises.

---

## 2. Pre-Fundraise Document Checklist

### 2.1 Financial Documents (Required)

| Document | Status | Owner | Where It Lives | Notes |
|----------|--------|-------|----------------|-------|
| Monthly P&L (inception to date) | [VOID — requires: Bookkeeping setup (M25)] | Founder + Bookkeeper | Accounting system | Use accrual basis |
| Balance sheet (current) | [VOID — requires: Bookkeeping setup] | Bookkeeper | Accounting system | Simple at pre-seed |
| 13-week cash flow forecast | Template ready | Founder | data/m3/13_week_cash_flow.md | Update weekly |
| Bank statements (all months) | [VOID — requires: Business bank account] | Founder | Mercury / bank portal | Download monthly |
| SAFE/convertible note ledger | [VOID — requires: First SAFE] | Founder | Cap table tool (Carta/Pulley) | Track all outstanding SAFEs |
| Cap table (current) | [VOID — requires: Entity + SAFEs] | Founder | Carta / Pulley | Include option pool |
| Tax returns (if filed) | [VOID — requires: First tax year close] | CPA | CPA files | 1120 for C-Corp |
| Revenue breakdown by channel | Template ready | Founder | Shopify + GA4 | Monthly channel attribution |

### 2.2 Legal Documents (Required for Seed)

| Document | Status | Owner | Source |
|----------|--------|-------|--------|
| Certificate of Incorporation | [VOID — requires: M2 entity formation] | Founder | Delaware SOS |
| Bylaws | [VOID] | Founder | M2 legal counsel |
| SAFE agreements (executed) | [VOID] | Founder | M4 investor docs |
| IP assignment agreements | [VOID] | Founder | M2 legal counsel |
| Trademark registrations | [VOID] | Founder | USPTO |
| Insurance certificates | [VOID] | Founder | Insurance broker |
| Major contracts (supplier, 3PL) | [VOID] | Founder | Procurement files |

### 2.3 Operating Documents (Nice to Have)

| Document | Purpose | Status |
|----------|---------|--------|
| Unit economics dashboard | Shows CAC, LTV, churn, margins | Template in M25 |
| Cohort analysis | Retention proof | [VOID — requires launch data] |
| Financial model (this TUP) | Forward projections | data/m3/ (in progress) |
| Customer acquisition funnel | Proves growth engine | M13 framework ready |

[Confidence: B | Source: Standard seed-round diligence requirements, M4 fundraising context | Date: 2026-02-11]

---

## 3. Bookkeeping Foundation (from M25)

### 3.1 Chart of Accounts (Minimum Viable)

| Account # | Account Name | Type | Notes |
|-----------|-------------|------|-------|
| 1000 | Cash — Operating | Asset | Mercury business checking |
| 1010 | Cash — Stripe Pending | Asset | Stripe balance not yet settled |
| 1200 | Inventory | Asset | Product on hand |
| 1300 | Prepaid expenses | Asset | Insurance, annual subscriptions |
| 2000 | Accounts payable | Liability | Supplier invoices |
| 2100 | Accrued expenses | Liability | Incurred but not yet paid |
| 2200 | SAFE notes payable | Liability | Outstanding SAFE obligations |
| 3000 | Common stock | Equity | Founder shares |
| 3100 | Additional paid-in capital | Equity | SAFE conversion |
| 4000 | Product revenue — subscription | Revenue | Recurring |
| 4010 | Product revenue — one-time | Revenue | Non-recurring |
| 4020 | Product revenue — bundles | Revenue | Bundle sales |
| 4100 | Returns & refunds | Contra-revenue | Reduces gross revenue |
| 5000 | Product COGS | COGS | Raw materials + manufacturing |
| 5010 | Fulfillment costs | COGS | Pick/pack/ship |
| 5020 | Shipping costs | COGS | Outbound shipping |
| 5030 | Payment processing | COGS | Stripe fees |
| 6000 | Advertising — Meta | OpEx | Facebook/Instagram ads |
| 6010 | Advertising — Google | OpEx | Google/YouTube ads |
| 6020 | Advertising — Other | OpEx | Influencer, affiliate |
| 6100 | Software & subscriptions | OpEx | Shopify, Klaviyo, etc. |
| 6200 | Insurance | OpEx | Product liability, general |
| 6300 | Legal & professional | OpEx | Attorney, CPA fees |
| 6400 | Accounting & bookkeeping | OpEx | Bench.co or similar |
| 6500 | Contractor payments | OpEx | CS, design, etc. |
| 6600 | Founder compensation | OpEx | Draw/salary |
| 6900 | Miscellaneous | OpEx | Catch-all (keep small) |

### 3.2 Monthly Close Checklist

- [ ] Reconcile bank accounts (Mercury vs bookkeeping)
- [ ] Reconcile Stripe payouts to Shopify orders
- [ ] Record inventory received and COGS
- [ ] Accrue known expenses not yet paid
- [ ] Review and categorize all transactions
- [ ] Generate P&L and compare to budget
- [ ] Update 13-week cash flow forecast
- [ ] File away bank statements and receipts

[Confidence: B | Source: M25 Bookkeeping Setup, standard small business accounting | Date: 2026-02-11]

---

## 4. Audit Red Flags to Avoid

| Red Flag | Why Investors Care | Prevention |
|----------|-------------------|-----------|
| **Commingled personal/business funds** | Shows lack of discipline, legal risk | Separate business bank account from Day 1 |
| **Missing receipts** | Can't verify expenses | Expense tracking app (Expensify/Mercury) |
| **Inconsistent revenue recognition** | Questions integrity of financials | Accrual basis, consistent methodology |
| **Unrecorded SAFE obligations** | Hidden dilution, cap table mess | Track all SAFEs in cap table tool |
| **No inventory tracking** | COGS unverifiable | Shopify inventory or simple spreadsheet |
| **Tax non-compliance** | Potential penalties, legal liability | File on time, estimated quarterly if needed |
| **Undocumented related-party transactions** | Conflict of interest concerns | Disclose and document all founder transactions |

---

## 5. Timeline: When to Get Audit-Ready

| Milestone | Actions | Timing |
|-----------|---------|--------|
| **Entity Formation** | Open business bank account, set up bookkeeping | Month -2 to -1 |
| **First Revenue** | Begin monthly close process | Month 1 |
| **$5K MRR** | Formalize chart of accounts, hire bookkeeper | Month 3-5 |
| **Pre-Seed/SAFE Close** | Cap table tool, SAFE ledger, IP assignments | When SAFE closes |
| **Pre-Seed Due Diligence** | Organize all documents, generate financial package | 2-4 weeks before raise |
| **$10K MRR** | Consider formal accounting review (not audit) | Month 7-10 |

---

## 6. Intelligence Gaps

| Gap | Impact | Validation Path | Priority |
|-----|--------|----------------|----------|
| Bookkeeping system not yet selected | Can't begin financial tracking | M25: Evaluate Mercury + Bench.co vs DIY | HIGH |
| CPA not engaged | Tax planning not started | M2: Engage CPA for C-Corp tax strategy | HIGH |
| Cap table tool not set up | SAFE tracking manual | Set up Carta or Pulley at entity formation | MEDIUM |

---

## 7. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 4/5 | Comprehensive checklist, well-sourced |
| Confidence Honesty | 4/5 | Clearly marks VOIDs where items don't exist yet |
| Upgrade Path Quality | 5/5 | Timeline from Day 0 to seed-ready |
| Actionability | 5/5 | Checklists are immediately usable |
| Integration | 4/5 | Ties M2, M4, M25 |

**Tab Score: 8.0/10**
