# OpKit OK-M30-001: Analytics & Measurement Kit
**Version**: 1.0.0
**Created**: 2026-02-08
**Source TUP**: M30 Analytics & Dashboards
**Quality Grade**: 8.2/10
**Reusability**: HIGH — any D2C brand, any stage

---

## What This Kit Does
Builds a complete measurement system for a D2C brand from zero. Includes metric definitions, dashboard architecture, red flag monitoring, and data governance — all phase-gated so you only track what matters at your current stage.

---

## Instructions (14 Steps)

### Step 1: Define Your Growth Phases
Map your revenue milestones to 4 phases:
- Phase 0: Pre-launch ($0)
- Phase 1: Launch → [X] MRR
- Phase 2: [X] → [Y] MRR
- Phase 3: [Y]+ MRR

*IonWave used: Phase 1 = $0-10K MRR, Phase 2 = $10-50K, Phase 3 = $50K+*

### Step 2: Build Your Minimum Viable Dashboard (MVD)
Select 5-7 metrics that are the ONLY ones you'll track in Phase 1. Template:

| # | Metric | Target | Source | Cadence |
|---|--------|--------|--------|---------|
| 1 | Revenue (net) | Growing MoM | [e-commerce platform] | Daily |
| 2 | Orders | Growing MoM | [e-commerce platform] | Daily |
| 3 | Ad Spend | Within budget | [ads platform] | Daily |
| 4 | CAC (blended) | <$[X] | Calculated | Weekly |
| 5 | [Key conversion metric] | >[X]% | [platform] | Weekly |
| 6 | Cash Balance | >[X] days runway | Bank | Daily |
| 7 | MER | >[X]x | Calculated | Weekly |

**Rule**: If it's not in this table, don't track it in Phase 1.

### Step 3: Create a Google Sheets MVD Dashboard (Dialogue Upgrade U6)
Build a single Google Sheet with:
- **Row per metric** (7 rows)
- **Columns**: Metric | Today | Yesterday | Change | WTD | MTD | Target | Status
- **Conditional formatting**: Green (above target), Yellow (warning), Red (below kill)
- **Formulas**: Auto-calculate Change %, auto-color Status
- **One tab only** — resist the urge to add tabs

### Step 4: Define Your Existential Kill Criteria
Identify the 3 metrics that would kill the business immediately (not slowly):

| Metric | Kill Threshold | Why Existential |
|--------|---------------|-----------------|
| [Metric 1] | [threshold] | [Why this kills you immediately] |
| [Metric 2] | [threshold] | [Why] |
| [Metric 3] | [threshold] | [Why] |

Everything else is "monitoring" — serious but not immediately fatal.

### Step 5: Build Your Data Dictionary
For EVERY metric in your MVD + kill criteria, define:
- Precise formula
- Data source
- Update cadence
- Known limitations of that source

**Rule**: Two people looking at the same metric must get the same number. If they don't, your definitions aren't precise enough.

### Step 6: Set Up Your Daily Pulse Routine
Design a 5-minute morning check-in:
- What 4 numbers do you look at?
- Where do you find them? (apps, dashboards)
- What does "RED" look like for each?
- What's your one-line Slack format for team updates?

### Step 7: Design Your Reporting Cadence
Map cadences to your capacity:

| Cadence | Time Budget | What's Included |
|---------|------------|-----------------|
| Daily | [X] min | [2-4 items] |
| Weekly | [X] min | [3-5 items] |
| Monthly | [X] hrs | [Simplified MBR] |

### Step 8: Build Your Simplified MBR (Months 1-3)
Design a 1-hour MBR answering exactly 4 questions:
1. Are we acquiring customers at viable economics?
2. Are they staying?
3. How much cash do we have?
4. What are we doing differently next month?

Plus the hypothesis prompt: one sentence per critical hypothesis.

### Step 9: Define Your Attribution Model
Choose your approach:
- **Awareness attribution**: How they found you (survey-based)
- **Conversion attribution**: What drove the purchase (UTM/last-click)
- **Reconciliation rule**: When they disagree, how do you weigh them?

### Step 10: Build Your Data Source Hierarchy
Rank your data sources by trust level. For each, document known limitations.

### Step 11: Set Up Red Flag Monitoring
Create a simple table with your existential + monitoring metrics, current values, and status indicators. Check existential metrics daily, monitoring metrics weekly.

### Step 12: Define Cross-Document Validation Rules
List 5-10 consistency checks: "If document X says [value], document Y must match."
V0 (Master Consistency): Kill criteria source of truth matches monitoring thresholds.

### Step 13: Establish Graceful Degradation Policy
Define what to do when you can't follow the full process:
- Minimum viable: [1 thing that's non-negotiable]
- Recovery protocol: How to get back on track after skipping

### Step 14: Plan Your Tool Progression
Map when to upgrade from basic tools (Sheets) to specialized tools:
- What revenue threshold triggers an upgrade?
- What tool category to add?
- What's the cost/setup time?

---

## Grading Rubric

| Grade | Criteria |
|-------|---------|
| **A (9-10)** | MVD operational with real data. Kill criteria monitored with automated alerts. Attribution model validated with 3+ months data. Full MBR cadence running. |
| **B (7-8)** | MVD built with clear metrics. Kill criteria defined with thresholds. Attribution planned. Reporting cadence documented. Phase-gating clear. |
| **C (5-6)** | Metrics defined but not phase-gated. Some kill criteria. Basic reporting. No attribution model. |
| **D (3-4)** | Generic metric list without specificity. No kill criteria. No reporting cadence. |
| **F (<3)** | No measurement system defined. "We'll figure it out later." |

---

## Scaffold (4 files to copy/customize)

1. `data_dictionary.md` — Complete metric definitions with formulas, sources, cadences, limitations
2. `dashboards_and_reporting.md` — MVD, daily pulse, weekly report, MBR templates, tool progression
3. `red_flags_and_validation.md` — Existential/monitoring kill criteria, escalation protocol, validation rules, diagnostic trees
4. `data_governance.md` — Data freshness requirements, quality standards, evidence logging, source hierarchy, graceful degradation

---

## IonWave Graded Example

**Grade: B+ (8.2/10)**

Strengths:
- MVD clearly defined (7 metrics) with phase-gating to prevent overload
- Existential vs monitoring classification prevents panic-driven decisions
- Attribution model distinguishes awareness vs conversion attribution
- Data source hierarchy with known limitations column
- Graceful degradation policy is practical and honest
- 13 dialogue upgrades made content significantly more actionable

Weaknesses:
- Pre-launch: all metrics are targets, no actuals yet (-1)
- Diagnostic trees could be deeper for more failure modes (-0.5)
- Google Sheets MVD template exists as concept but not as actual downloadable file (-0.3)

---

## Adaptation Guide

### For Supplement Brands (Similar to IonWave)
- Use the 7-metric MVD as-is
- Subscription conversion is your #1 retention metric
- Add supplement-specific: refund rate (product quality signal), review velocity

### For Non-Subscription D2C
- Replace Subscription Rate with Repeat Purchase Rate in MVD
- Adjust churn metric to "90-day repurchase rate"
- Email Revenue % becomes more important (primary retention mechanism)

### For B2B-First Brands
- Replace CAC with Customer Payback Period
- Replace Subscription Rate with Net Revenue Retention (NRR)
- Monthly churn → Annual churn
- Add: pipeline velocity, deal cycle length, expansion revenue

### For Marketplace-Only Brands (Amazon-first)
- Replace MER with TACoS (Total Advertising Cost of Sales)
- Add BSR (Best Seller Rank) to MVD
- Replace Cash Runway with Inventory Coverage Days
- Attribution is simpler (Amazon search → purchase) but organic rank matters

---

## Universal Principles (from M30 workshop)

1. **Track less, know more** — 7 metrics done daily beats 50 metrics done never
2. **MER over ROAS** — blended efficiency is always more honest than platform-reported ROAS
3. **Existential ≠ Monitoring** — separate sudden death (cash, CAC, contribution margin) from slow bleeds (churn, LTV:CAC)
4. **Attribution is two questions, not one** — awareness (how they found you) and conversion (what drove the purchase) are different answers
5. **Phase-gate everything** — don't build a Series B analytics stack for a pre-launch startup
6. **Graceful degradation** — design for reality (founders skip weeks), not perfection
7. **Your kill criteria ARE your strategy** — if the monitoring thresholds don't match the source of truth, you're flying blind
