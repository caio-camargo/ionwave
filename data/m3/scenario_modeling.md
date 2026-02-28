# Scenario Modeling — M3: Financial Model

**TUP**: M3 | **Tab**: 14 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Novel Concept**: How to model bifurcation points (from P-M3 vision)
**Cross-Reference**: M30 (Kill Criteria), M3 scenario_planning.md

---

## 1. Purpose

This document teaches **how to model bifurcation points** — the specific, measurable moments where a single variable's value determines which future scenario path the business takes. This is the methodological companion to `scenario_planning.md`, which applies the framework to IonWave.

**Why this matters**: Traditional scenario planning creates 3 scenarios (base/upside/downside) and hopes you end up in the right one. Bifurcation-linked scenario modeling tells you **which scenario you're in** as early as possible and gives you **pre-planned responses**.

---

## 2. The Bifurcation Framework

### 2.1 What Is a Bifurcation Point?

A **bifurcation point** is a measurable threshold where the business dynamics change qualitatively, not just quantitatively. It is a point where the system's behavior shifts from one regime to another.

**Example**: At CAC $44, each order generates $0.21 profit. At CAC $45, each order generates -$0.79 loss. The $1 difference flips the entire business model from viable to non-viable. That is a bifurcation.

**Characteristics of a true bifurcation point:**
1. **Measurable**: Expressed as a specific number, not a feeling
2. **Threshold-based**: There is a clear before/after
3. **Consequential**: Crossing it changes the response playbook
4. **Time-bounded**: You know WHEN you will have the data to evaluate it

### 2.2 How to Identify Bifurcation Points

**Step 1**: List all key assumptions (from hypothesis registry)
**Step 2**: For each assumption, calculate the break-even value (where P&L flips sign)
**Step 3**: Determine when you will have data to test the assumption
**Step 4**: Define the response playbook for each outcome (above/below threshold)

### 2.3 Template for Documenting a Bifurcation Point

```
BIFURCATION POINT: BP-[###]
  Variable:        [What you're measuring]
  Threshold:       [The specific number that changes everything]
  Above threshold: [What scenario you're in, what to do]
  Below threshold: [What scenario you're in, what to do]
  Data source:     [Where the measurement comes from]
  Measurement date:[When you'll have enough data]
  Confidence:      [How reliable is the threshold calculation?]
  Kill criteria:   [Does this trigger M30 kill criteria? Which one?]
```

---

## 3. Building a Bifurcation Decision Tree

### 3.1 Methodology

1. **Identify the 3-5 most impactful bifurcation points** (from sensitivity analysis)
2. **Sequence them chronologically** (which data arrives first?)
3. **Map the tree**: Each bifurcation creates two branches
4. **Assign scenarios to terminal nodes**: Where does each path combination lead?
5. **Pre-plan responses**: What do you DO at each node?

### 3.2 Example Tree Structure

```
Start (Launch)
│
├── BP-1: CAC Test (Month 2-3)
│   ├── CAC < $45 → VIABLE path
│   │   ├── BP-4: Margin Reality (Month 3)
│   │   │   ├── GM > 55% → BASE or UPSIDE
│   │   │   │   └── BP-3: Churn Test (Month 4)
│   │   │   │       ├── Churn < 28% → UPSIDE
│   │   │   │       └── Churn ≥ 28% → BASE
│   │   │   └── GM ≤ 55% → DOWNSIDE (cost audit)
│   │   │       └── Costs reducible?
│   │   │           ├── YES → Shift to BASE
│   │   │           └── NO → KILL GATE
│   └── CAC ≥ $45 → CHALLENGED path
│       └── BP-5: Runway Check (Month 6)
│           ├── Runway > 6 months → Continue testing
│           └── Runway ≤ 6 months → KILL GATE
```

### 3.3 Rules for Tree Design

1. **No more than 5 levels deep**: Beyond that, the tree is too speculative
2. **Each node must have a data source and timeline**: No vague branching
3. **Terminal nodes must map to named scenarios**: Base, Upside, Downside, Kill
4. **Every branch must have a pre-written playbook**: Not "figure it out later"
5. **Update the tree monthly**: Prune resolved branches, add new ones

---

## 4. Connecting to Kill Criteria (from M30)

### 4.1 How Bifurcation Points Map to Kill Criteria

| Bifurcation Point | Kill Criterion | Relationship |
|-------------------|---------------|-------------|
| CAC > $60 for 14 days | RF-1 (CAC) | Direct trigger |
| GM < 35% | RF-6 (Contribution Margin) | Downstream effect |
| Cash runway < 30 days | RF-5 (Cash Runway) | Direct trigger |
| Churn > 15% for 2 months | RF-3 (Monthly Churn) | Threshold may differ |
| LTV:CAC < 1.5x | RF-2 (LTV:CAC Ratio) | Calculated from CAC + GM + churn |

### 4.2 The Kill Gate Protocol

When a bifurcation leads to a kill gate:

1. **Confirm the data** (is this a measurement error or genuine?)
2. **Attempt remediation** (give 2-4 weeks to fix the root cause)
3. **If not remediated**: Formal kill decision meeting
4. **Kill decision options**: Pivot (change offer/market), Pause (preserve capital, wait), Wind down (return remaining capital to investors)

---

## 5. Advanced: Monte Carlo Integration

### 5.1 Beyond Single-Point Bifurcations

When enough data is available (typically Month 6+), upgrade from binary bifurcation to probability distributions:

- Instead of "CAC is above or below $45," model "CAC has a distribution with mean $38 and standard deviation $8"
- Run 1,000+ simulations sampling from each variable's distribution
- Output: Probability distribution of outcomes rather than 3 named scenarios

### 5.2 When to Upgrade

| Condition | Scenario Modeling Level |
|-----------|----------------------|
| Pre-launch (no data) | Named scenarios + bifurcation tree |
| Month 1-3 (sparse data) | Bifurcation tree with updated thresholds |
| Month 4-6 (moderate data) | Distributions for top 3 variables + bifurcation for rest |
| Month 7+ (solid data) | Full Monte Carlo if model moves to code/spreadsheet |

[Confidence: B | Source: Financial modeling methodology, scenario planning literature | Date: 2026-02-11]

---

## 6. IonWave Application

See `scenario_planning.md` for the full IonWave-specific implementation of this framework, including:
- 6 named bifurcation points (BP-1 through BP-6)
- Full decision tree with M30 kill criteria integration
- Response playbooks for each scenario
- Scenario probability assessments

---

## 7. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 4/5 | Methodology is well-grounded |
| Confidence Honesty | 4/5 | Honest about when to upgrade methodology |
| Upgrade Path Quality | 5/5 | Clear progression from simple to Monte Carlo |
| Actionability | 4/5 | Template-based, applicable to any D2C business |
| Integration | 5/5 | Connects kill criteria, hypothesis system, financial model |

**Tab Score: 8.0/10** — Strong methodological contribution. Directly implements P-M3 vision of bifurcation-linked scenario planning.
