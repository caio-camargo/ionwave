# OpKit: D2C Financial Model (OK-M3-001)

**OpKit ID**: OK-M3-001
**TUP**: M3 (Financial Model)
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: Active
**First Graded Example**: IonWave Trade #84 (8.2/10)

---

## 1. Instruction Document — How to Build a D2C Financial Model

### 1.1 Overview

This OpKit provides a step-by-step guide for building a comprehensive financial model for a pre-seed direct-to-consumer (D2C) business with subscription and one-time revenue. The methodology includes novel contributions: bifurcation-linked scenario planning, kill criteria integration, and confidence-graded assumptions.

### 1.2 Prerequisites

Before starting:
- Product COGS defined (even estimates)
- Pricing strategy established
- Customer acquisition channel identified
- Entity structure decided
- Fundraising strategy outlined

### 1.3 Step-by-Step Process

**Step 1: Define Your Cost Structure (2-3 hours)**
1. Build a landed cost breakdown for your product
2. Calculate product COGS per unit (raw materials + packaging + manufacturing)
3. Calculate fully-loaded per-order costs (product + fulfillment + shipping + payment processing + returns)
4. **CRITICAL**: Calculate BOTH product gross margin AND fully-loaded gross margin. They will differ by 15-30 percentage points. Use fully-loaded for all cash planning.

**Step 2: Model Revenue Bottom-Up (2-3 hours)**
1. Start with customer acquisition: how many new customers per month at what CAC?
2. Apply subscription conversion rate: what % become subscribers?
3. Model retention: what's monthly churn for each cohort?
4. Build revenue = (new customer revenue) + (subscriber recurring revenue) + (one-time repeat revenue)
5. Project 12 months monthly, Years 2-3 quarterly

**Step 3: Build the Cash Flow Model (3-4 hours)**
1. Revenue (from Step 2)
2. Minus COGS (from Step 1, fully-loaded)
3. Minus fixed costs (rent, software, insurance, legal, accounting, founder comp)
4. Minus ad spend (the largest variable cost)
5. Equals net cash flow per month
6. Track cumulative cash position

**Step 4: Run Sensitivity Analysis (2-3 hours)**
1. Identify top 5 variables by impact (usually: margin, CAC, subscription rate, churn, price)
2. Run each variable independently: low/base/high
3. Create tornado chart showing impact ranking
4. Run two-variable interaction matrices for top 2 variables
5. **Novel**: Map each variable to kill criteria thresholds

**Step 5: Build Scenarios (2-3 hours)**
1. Create Base / Upside / Downside / Worst Case scenarios
2. Assign explicit assumptions to each scenario (not just "optimistic")
3. **Novel**: Identify bifurcation points — specific measurable thresholds that determine which scenario you're in
4. Build decision tree connecting bifurcation points to scenarios
5. Write response playbooks for each scenario

**Step 6: Create Operational Tools (2-3 hours)**
1. 13-week cash flow forecast template
2. Monthly budget template with variance tracking
3. Break-even analysis at different margin/CAC assumptions
4. Budget spend log for transaction-level tracking
5. Cash flow monitoring protocol (daily/weekly/monthly checks)

**Step 7: Prepare for Audit/Fundraise (1-2 hours)**
1. Chart of accounts
2. Document checklist for due diligence
3. Monthly close checklist
4. Investor update template

**Total estimated time: 15-20 hours for first build**

---

## 2. Grading Rubric

### 2.1 A-Grade Financial Model (9-10/10)

| Criterion | A-Grade Standard |
|-----------|-----------------|
| **Data Quality** | >70% of inputs are A/B-grade (actual data or strong benchmarks) |
| **Scenario Coverage** | 3+ scenarios with explicit bifurcation points and response playbooks |
| **Sensitivity Rigor** | Tornado chart with 8+ variables, two-variable interaction matrices, kill criteria linkage |
| **Kill Criteria** | Every existential metric has a defined threshold, monitoring frequency, and response protocol |
| **Cash Discipline** | 13-week forecast updated weekly, budget vs actual tracked monthly |
| **Transparency** | Every assumption has a confidence grade and upgrade path |
| **Integration** | Model connects to unit economics, marketing, supply chain, and analytics |

### 2.2 B-Grade Financial Model (7-8.5/10)

| Criterion | B-Grade Standard |
|-----------|-----------------|
| **Data Quality** | 30-70% A/B-grade; rest are documented estimates |
| **Scenario Coverage** | 3 scenarios with assumptions documented (may lack bifurcation framework) |
| **Sensitivity Rigor** | Tornado chart with 5+ variables; may lack interaction analysis |
| **Kill Criteria** | Key metrics identified but thresholds may not be fully calibrated |
| **Cash Discipline** | 13-week forecast exists, updated bi-weekly |
| **Transparency** | Most assumptions have grades; some gaps in upgrade paths |
| **Integration** | Connects to 3+ other business functions |

### 2.3 C-Grade Financial Model (5-6.5/10)

| Criterion | C-Grade Standard |
|-----------|-----------------|
| **Data Quality** | Mostly C/D-grade estimates |
| **Scenario Coverage** | Base case only, or 3 scenarios without clear assumptions |
| **Sensitivity Rigor** | Some sensitivity analysis but not systematic |
| **Kill Criteria** | Not integrated with financial model |
| **Cash Discipline** | Cash tracking exists but not formalized |
| **Transparency** | Limited confidence grading |
| **Integration** | Mostly standalone |

### 2.4 D/F-Grade Financial Model (<5/10)

- Single scenario with no sensitivity analysis
- No confidence grading on assumptions
- No kill criteria integration
- No cash flow monitoring system
- Gross margin uses product-only definition without disclosure

---

## 3. Scaffold — Reusable Templates

### 3.1 Files to Copy and Adapt

The following files from IonWave M3 serve as templates for any D2C business:

| File | Purpose | What to Change |
|------|---------|---------------|
| `budget_template.md` | Monthly budget with all D2C categories | Fill in your numbers |
| `13_week_cash_flow.md` | Weekly cash forecast template | Populate with your data |
| `sensitivity_analysis.md` | Tornado chart methodology | Replace variables with yours |
| `scenario_modeling.md` | Bifurcation point methodology | Identify your bifurcation points |
| `cash_flow_monitoring.md` | Daily/weekly/monthly monitoring protocol | Adjust thresholds to your scale |
| `budget_spend_log.md` | Transaction tracking template | Use as-is |
| `financial_reporting_cadence.md` | Phase-gated reporting rhythm | Adjust phases to your timeline |
| `audit_readiness.md` | Fundraise prep checklist | Adjust for your entity type |

### 3.2 Formulas Reference

```
Gross Margin %     = (Net Revenue - COGS) / Net Revenue
Contribution Margin = Gross Profit - CAC (allocated per order)
CAC                = Total Marketing Spend / New Customers
LTV                = (AOV x Gross Margin) / Monthly Churn Rate
LTV:CAC            = LTV / CAC
MER                = Total Revenue / Total Marketing Spend
Burn Rate          = Monthly Net Loss
Runway (months)    = Cash Balance / Monthly Burn Rate
Break-Even Revenue = Fixed Costs / Gross Margin %
Cash Conversion    = DIO + DSO - DPO
Payback Period     = CAC / Monthly Contribution Margin per Customer
```

---

## 4. Graded Example — IonWave (8.2/10, B-Grade)

### 4.1 What IonWave Did Well

- **REC-001 transparency**: Handled a 27-percentage-point margin dispute by showing three scenarios, explaining the gap, and flagging it as a blocker
- **Bifurcation framework**: Novel contribution linking scenarios to measurable decision points
- **Kill criteria integration**: Connected M30 existential metrics to sensitivity analysis
- **15 tabs with no placeholders**: Complete coverage despite being pre-launch
- **7 dialogue upgrades**: Persona exercise found real gaps

### 4.2 What Would Make IonWave A-Grade

- Actual post-launch data replacing estimates
- Spreadsheet version for operational use
- Monte Carlo simulation for top variables
- External CFO review
- Second Trade applying this framework (validates OpKit reusability)

### 4.3 Honest Limitations

- 100% estimated inputs (pre-launch)
- Scenario probabilities are subjective
- Y2-Y3 projections are directional only
- No macro risk modeling
