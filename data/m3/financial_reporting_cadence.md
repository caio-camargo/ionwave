# Financial Reporting Cadence — M3: Financial Model

**TUP**: M3 | **Tab**: 10 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Cross-Reference**: M25 (Financial Ops), M30 (Analytics/Kill Criteria)

---

## 1. Phase-Gated Reporting Rhythm

### 1.1 Founder Mode (Month 1-12, Solo Operator)

| Frequency | Report | Time Required | What It Answers |
|-----------|--------|-------------|----------------|
| **Daily** | Cash pulse check | 5 min | "Am I about to run out of money?" |
| **Daily** | Ad spend + ROAS check | 5 min | "Are my ads profitable today?" |
| **Weekly** | 13-week cash flow update | 30 min | "When do I run out of money?" |
| **Weekly** | Unit economics snapshot | 15 min | "Is each order profitable?" |
| **Monthly** | Full P&L | 1-2 hrs | "How did the month go overall?" |
| **Monthly** | Cohort analysis update | 30 min | "Are subscribers staying?" |
| **Monthly** | Budget vs actual variance | 30 min | "Am I spending as planned?" |
| **Quarterly** | Model recalibration | 2-3 hrs | "Are my assumptions still valid?" |
| **Quarterly** | Hypothesis update | 1 hr | "Which hypotheses have new evidence?" |

### 1.2 Team Mode (Month 13+, With Hires/Investors)

| Frequency | Report | Audience | Additional vs Founder Mode |
|-----------|--------|----------|---------------------------|
| **Daily** | Dashboard check | Founder | Same — don't add complexity |
| **Weekly** | Team KPI scorecard | Team + Founder | Add team-level metrics |
| **Monthly** | Investor update | SAFE holders | Revenue, burn, runway, key milestones |
| **Monthly** | Full P&L + Balance Sheet | Bookkeeper + Founder | Formal accounting |
| **Quarterly** | Board/Investor deck | Investors | Formal quarterly review |
| **Quarterly** | Model recalibration | Founder + CFO (if any) | Deeper analysis with more data |
| **Annual** | Tax preparation package | CPA | Year-end close, 1120S prep |

[Confidence: B | Source: M25 Business Review Cadence, standard D2C founder practices | Date: 2026-02-11]

---

## 2. Daily Pulse Check (5 Minutes)

### 2.1 The Five Numbers to Check Every Morning

| # | Metric | Where to Find It | Warning Signal |
|---|--------|-----------------|---------------|
| 1 | **Bank balance** | Bank app | < $5,000 = danger |
| 2 | **Yesterday's revenue** | Shopify dashboard | 50%+ below daily average |
| 3 | **Yesterday's ad spend** | Meta/Google Ads | Over daily budget by 20%+ |
| 4 | **Yesterday's ROAS** | Meta/Google Ads | Below 1.5x |
| 5 | **Pending Stripe payout** | Stripe dashboard | Unexpected hold or delay |

### 2.2 Daily Action Triggers

| Signal | Response |
|--------|----------|
| Bank balance < 2 weeks of spend | YELLOW — review 13-week forecast |
| ROAS < 1.0x for 3 consecutive days | PAUSE lowest-performing ad sets |
| Revenue $0 for a day | Check: website down? Stripe issue? |
| Ad spend exceeds cap by 20% | Reduce bids or pause campaigns |

---

## 3. Weekly Reports

### 3.1 13-Week Cash Flow Update (see `13_week_cash_flow.md`)
- Update actuals for completed week
- Reforecast next 12 weeks
- Calculate runway

### 3.2 Weekly Unit Economics Snapshot

| Metric | This Week | Last Week | 4-Week Avg | Target | Status |
|--------|----------|----------|-----------|--------|--------|
| Revenue | | | | | |
| Orders | | | | | |
| AOV | | | | $53.68 | |
| CAC (blended) | | | | <$40 | |
| ROAS (Meta) | | | | >2.0x | |
| Subscription conversion | | | | >55% | |
| Gross margin (product) | | | | >60% | |
| Fully-loaded margin | | | | >50% | |

---

## 4. Monthly Reports

### 4.1 Monthly P&L Template

```
REVENUE
  Subscription revenue:     $____
  One-time revenue:         $____
  Bundle revenue:           $____
  Refunds/returns:         ($____)
  NET REVENUE:              $____

COST OF GOODS SOLD
  Product COGS:            ($____)
  Fulfillment:             ($____)
  Shipping:                ($____)
  Payment processing:      ($____)
  GROSS PROFIT:             $____
  GROSS MARGIN:              ____%   ← REC-001 KEY METRIC

OPERATING EXPENSES
  Advertising:             ($____)
  Software/tools:          ($____)
  Insurance:               ($____)
  Legal:                   ($____)
  Accounting:              ($____)
  Contractor payments:     ($____)
  Founder draw:            ($____)
  Miscellaneous:           ($____)
  TOTAL OPEX:              ($____)

NET INCOME (LOSS):          $____
CASH POSITION (EOM):        $____
MONTHS OF RUNWAY:            ____
```

### 4.2 Monthly Investor Update (Email Template)

For SAFE holders, send a brief monthly update:

```
Subject: IonWave — Month [N] Update

Hi [Name],

Key metrics this month:
- Revenue: $[X] ([+/-]% MoM)
- MRR: $[X] ([+/-]% MoM)
- Active subscribers: [X]
- CAC: $[X]
- Gross margin: [X]%
- Cash runway: [X] months

Highlights: [1-2 bullets]
Challenges: [1-2 bullets]
Next month priorities: [1-2 bullets]

Questions? Happy to chat.

[Founder name]
```

[Confidence: B | Source: Standard investor relations practices for pre-seed | Date: 2026-02-11]

---

## 5. Quarterly Model Recalibration

### 5.1 What Gets Updated Quarterly

| Element | Action | Source |
|---------|--------|--------|
| Sensitivity analysis tornado | Rerun with actual data | M3 sensitivity_analysis.md |
| Scenario probabilities | Update Bayesian probabilities based on actuals | M3 scenario_planning.md |
| 3-year projections | Reforecast based on latest quarterly trends | M3 cash_flow_model.md |
| Hypothesis grades | Update confidence grades with new evidence | data/hypotheses/registry.json |
| Kill criteria thresholds | Recalibrate if industry benchmarks shift | M30 red_flags_and_validation.md |
| Budget vs actual | Full variance analysis | M3 budget.md |

### 5.2 Quarterly Review Checklist

- [ ] All hypothesis grades updated with Q data
- [ ] Sensitivity tornado rerun with actuals
- [ ] Scenario probabilities recalculated
- [ ] 13-week forecast re-baselined
- [ ] Budget re-forecast for remaining quarters
- [ ] Kill criteria reviewed (any thresholds need adjustment?)
- [ ] Investor update sent

---

## 6. Intelligence Gaps

| Gap | Impact | Validation Path | Priority |
|-----|--------|----------------|----------|
| No actual reporting data yet | Templates are empty | Populate at launch | CRITICAL |
| Bookkeeping system not set up | Can't generate accurate P&L | M25: Set up Mercury + Bench.co | HIGH |
| No investor to send updates to | Investor update template unused | M4: Close SAFE | MEDIUM |

---

## 7. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 4/5 | Cadence is well-defined, templates are complete |
| Confidence Honesty | 4/5 | Acknowledges empty templates |
| Upgrade Path Quality | 5/5 | Phase-gated: grows with the business |
| Actionability | 5/5 | Day-1 usable cadence |
| Integration | 5/5 | Ties M25, M30, hypothesis system |

**Tab Score: 8.5/10**
