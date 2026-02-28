# M30 Red Flags & Validation
**TUP**: M30 Analytics & Dashboards
**Source Tabs**: 632 (Red Flag Dashboard), 633 (Cross-Tab Validation Rules)
**Version**: 1.0.0
**Quality**: 8.0/10
**Status**: Workshop Draft
**Confidence Baseline**: B (kill criteria validated against hypothesis registry and financial model)

---

## Purpose
Two complementary systems:
1. **Red Flag Dashboard** — Monitor kill criteria in real-time. Catch existential threats before they become fatal.
2. **Cross-TUP Validation** — Ensure internal consistency. When one document says X, all related documents must agree.

Together they answer: "Are we dying?" and "Are we lying to ourselves?"

---

## 1. Red Flag Dashboard — Kill Criteria Monitor

### Existential vs Monitoring Classification (Dialogue Upgrade U3)

Not all red flags are equal. Three metrics can kill the business immediately. The rest are slow bleeds.

**EXISTENTIAL (sudden death — these 3 can end the company):**

| # | Metric | Kill Threshold | Warning Threshold | Source | Response Time | Why Existential |
|---|--------|---------------|-------------------|--------|--------------|-----------------|
| RF-1 | **CAC** | >$60 for 14 days | >$50 | HYP-001 | 48 hrs | Can't profitably acquire customers = no business |
| RF-5 | **Cash Runway** | <30 days | <60 days | HYP-008, M25 | Immediate | No cash = can't operate, period |
| RF-6 | **Contribution Margin** | Negative for 30 days | <5% | HYP-004, M25 | 2 weeks | Every sale loses money = faster you grow, faster you die |

**MONITORING (slow bleed — serious but not immediately fatal):**

| # | Metric | Kill Threshold | Warning Threshold | Source | Response Time | Escalation |
|---|--------|---------------|-------------------|--------|--------------|------------|
| RF-2 | **LTV:CAC Ratio** | <1.5x | <2x | HYP-005/001 | 1 week | Re-examine pricing, retention, or CAC |
| RF-3 | **Monthly Churn** | >15% for 2 months | >12% | HYP-003 | 2 weeks | Customer research, product/offer audit |
| RF-4 | **Gross Margin** | <50% | <60% | HYP-004 | 1 month | Renegotiate COGS, review pricing |
| RF-7 | **Supplier Lead Time** | >90 days | >60 days | M24 | 1 month | Activate backup supplier, adjust reorder point |
| RF-8 | **Ad Account Status** | Banned | Restricted | M11-M15 | Immediate | Backup account, appeal, diversify channels |
| RF-9 | **Stockout Risk** | <7 days inventory | <14 days | M24 | 1 week | Emergency reorder, manage demand |
| RF-10 | **Chargeback Rate** | >0.75% | >0.5% | M20 | 2 weeks | Fraud review, fulfillment audit, refund policy |
| RF-11 | **Subscription Conversion** | <10% for 60 days | <20% | HYP-002, M28 | 2 weeks | See diagnostic tree below (U10) |
| RF-12 | **MRR Growth** | Negative 3 months | Flat 2 months | HYP-007 | 1 month | Full strategy review, potential pivot |

[Confidence: B | Source: M0 Thesis kill criteria, IonWave financial model, hypothesis registry, M25 Survival Five | Verified: 2026-02-08]

---

## 2. Escalation Protocol

### Severity Levels

| Level | Condition | Who Acts | Response | Timeline |
|-------|-----------|----------|----------|----------|
| **GREEN** | All metrics above warning thresholds | Founder (routine monitoring) | Continue normal operations | Ongoing |
| **YELLOW** | 1+ metric in warning zone | Founder | Increase monitoring frequency to daily for affected metrics. Identify root cause. Develop action plan. | Action plan within 48 hrs |
| **RED (Single)** | 1 metric at or past kill threshold | Founder + Advisor | Daily updates on affected metric. Written action plan with 7-day milestones. | Action plan within 48 hrs, review at 7 days |
| **RED (Multiple)** | 2+ metrics at kill threshold simultaneously | Founder + Advisor + Co-founders | Emergency review. Consider pausing growth spend. All-hands on recovery. | Emergency call within 24 hrs |
| **RED (Sustained)** | Any kill metric RED for 30 days despite intervention | Full stakeholder group | Kill trade decision required. Formal review of pivot vs wind-down. | Decision within 7 days |

### Decision Tree

```
Metric hits WARNING →
  ├── Root cause identified within 48 hrs?
  │   ├── YES → Implement fix → Monitor for 7 days
  │   │         ├── Improving → Return to GREEN
  │   │         └── Not improving → Escalate to RED
  │   └── NO → Escalate to RED
  │
Metric hits KILL THRESHOLD →
  ├── Is this a data quality issue? (wrong formula, tracking error)
  │   ├── YES → Fix data, re-evaluate
  │   └── NO → Genuine business problem
  │         ├── 1 metric RED → Single RED protocol
  │         └── 2+ metrics RED → Multiple RED protocol
  │
RED for 30 days →
  └── Kill Trade Decision
      ├── Can we pivot to fix? (new channel, new offer, new ICP)
      │   ├── YES → Define pivot, reset timelines
      │   └── NO → Wind down gracefully
```

### Kill Trade Decision Framework

When a kill decision is triggered:

1. **Data check**: Is the data reliable? Could there be measurement errors?
2. **Root cause**: Why is the metric failing? Is it fixable or structural?
3. **Dependency check**: Is this metric failing because an upstream metric failed? (e.g., LTV:CAC <1.5x because churn >15%)
4. **Effort/probability**: What would it take to fix? What's the probability of success?
5. **Runway**: How much time/money do we have left to attempt a fix?
6. **Decision**: Continue (with specific fix plan) | Pivot (different ICP/channel/product) | Wind down

### Subscription Conversion Diagnostic Tree (Dialogue Upgrade U10)

When RF-11 (Subscription Conversion <20%) triggers, don't just "audit the offer." Diagnose WHY:

```
Subscription Conversion Dropping →
  ├── Do customers SEE the subscription option?
  │   ├── NO → Offer Visibility Problem
  │   │       Fix: Move subscription above the fold, test default-to-subscribe
  │   └── YES → They see it but don't choose it
  │         ├── Is subscription price compelling vs one-time?
  │         │   ├── Discount <15% → Pricing Problem
  │         │   │       Fix: Test 20% discount, free shipping, bonus item
  │         │   └── Discount ≥15% → Price is fine, it's something else
  │         │         ├── Do customers trust they'll want it again?
  │         │         │   ├── NO → Product Confidence Problem
  │         │         │   │       Fix: "Try once, subscribe later" flow,
  │         │         │   │       satisfaction guarantee, first-order review
  │         │         │   └── YES → Trust issue with subscriptions
  │         │         │         ├── Can they cancel easily?
  │         │         │         │   ├── Unclear → Friction Problem
  │         │         │         │   │       Fix: "Cancel anytime" messaging,
  │         │         │         │   │       show cancellation in 1 click
  │         │         │         │   └── Clear → Unknown barrier
  │         │         │         │       Action: Customer interviews needed
```

**Key Insight**: Most subscription conversion drops are visibility or pricing problems, not product problems. Check the simple things first.

[Confidence: B | Source: M0 Thesis kill criteria framework, Y Combinator shutdown guidance, IonWave financial model, M28 subscription sensitivity (U12) | Verified: 2026-02-08]

---

## 3. Cross-TUP Validation Rules

### The Principle
The model is only useful if it's internally consistent. When Unit Economics says COGS = $16.50, every other TUP that references COGS must use the same number. These rules catch contradictions before they cause bad decisions.

### Validation Rules

**RULE ZERO — Master Consistency Check (Dialogue Upgrade U8)**
Check this FIRST, EVERY month, before any other validation:

| Rule ID | If This TUP Says... | Then This TUP Must Match... | Check Frequency | Priority |
|---------|---------------------|----------------------------|-----------------|----------|
| **V0** | M0 (Thesis): Kill criteria thresholds | M30 (Red Flag Dashboard): EXACT same thresholds | **Monthly (FIRST check)** | **CRITICAL — MASTER** |

If V0 fails, ALL monitoring is unreliable. Fix immediately.

**Standard Validation Rules:**

| Rule ID | If This TUP Says... | Then This TUP Must Match... | Check Frequency | Priority |
|---------|---------------------|----------------------------|-----------------|----------|
| **V1** | M25 (Financial Ops): COGS = $X | M28 (Amazon margin), M28 (B2B pricing), M28 (retail economics): Same COGS | Monthly | CRITICAL |
| **V2** | M0 (Thesis): CAC target = $X | M28 (channel strategy), M14 (testing): Same CAC target | Monthly | CRITICAL |
| **V3** | M10 (Pricing): Price = $X | All revenue projections (M25, M28): Same price | Monthly | CRITICAL |
| **V4** | M24 (Fulfillment): Lead time = X days | M30 (Red Flag): Same lead time thresholds | Monthly | HIGH |
| **V5** | M0 (Thesis): Win criteria = $X MRR | M25 (Financial Ops), M28 (constraint scenarios): Same target | Quarterly | HIGH |
| **V6** | M0 (Thesis): Kill criteria thresholds | M30 (Red Flag Dashboard): Same thresholds | Quarterly | CRITICAL |
| **V7** | M27 (Customer Research): ICP definition | M17 (Email), M23 (Influencer), M11-M15 (Creative): Aligned targeting | Quarterly | HIGH |
| **V8** | M28 (B2B): MAP price = $44.10 | M10 (Pricing): Same MAP floor | Monthly | HIGH |
| **V9** | HYP registry: Current hypothesis values | M30 (Data Dictionary): Same targets/thresholds | Monthly | CRITICAL |
| **V10** | M17 (Email): Subscription discount = X% | M28 (Amazon): D2C sub > Amazon S&S pricing | Monthly | HIGH |

### When Mismatches Are Found

| Mismatch Type | Resolution | Owner |
|--------------|------------|-------|
| One TUP outdated (older value) | Update to current correct value | Most recent TUP author |
| Genuine disagreement (two TUPs have different but valid numbers) | Escalate to founder for decision, document reasoning | Founder |
| Formula error | Fix formula, validate all downstream calculations | Analyst |
| Structural issue (TUP architecture conflict) | May require TUP revision, flag for next workshop | Session lead |

### Validation Procedure

**Monthly Validation Checklist** (15 min):
1. Open data dictionary alongside financial model parameters
2. Spot-check 3-5 rules from the table above
3. If mismatch found: document in validation log, fix immediately
4. Log validation completion date

**Quarterly Full Audit** (1-2 hrs):
1. Check all 10 rules systematically
2. Cross-reference hypothesis registry values with all TUP content
3. Document any changes made
4. Update data dictionary if definitions have evolved

[Confidence: B | Source: Model consistency requirements from Danilo's ops model design, IonWave TUP cross-references | Verified: 2026-02-08]

---

## 4. Red Flag Integration Map

How the Red Flag Dashboard connects to other TUPs:

```
M0 (Thesis) ─── Kill Criteria Definitions ──→ M30 Red Flag Dashboard
M25 (Financial Ops) ─── Cash/Runway Monitoring ──→ RF-5, RF-6
M24 (Fulfillment) ─── Supply Chain Alerts ──→ RF-7, RF-9
M11-M15 (Creative/DR) ─── Ad Account Status ──→ RF-8
M20 (Support) ─── Chargeback Monitoring ──→ RF-10
M28 (Expansion) ─── Subscription Sensitivity ──→ RF-11
M17 (Email) ─── Email Revenue Share ──→ Retention metrics
M19 (CRM) ─── Churn Signals ──→ RF-3
HYP Registry ─── All Hypothesis Thresholds ──→ RF-1 through RF-12
```

**Key Insight**: M30 doesn't own the data — it MONITORS data owned by other TUPs. The Red Flag Dashboard is a viewer, not a data store. Every metric points back to a source TUP where the actual data lives.

---

## 5. Intelligence Gaps

| Gap | Impact | Upgrade Path | Priority |
|-----|--------|-------------|----------|
| G1: No real-time alerting system yet | Manual checking means delayed response | Implement Slack alerts at Phase 2 ($10K+ MRR) via Triple Whale or custom webhook | MEDIUM |
| G2: Kill thresholds are theoretical | May be too tight or too loose for IonWave specifically | Review and calibrate at Month 3 checkpoint with real data | HIGH |
| G3: Cross-TUP validation is manual | Labor-intensive, easy to skip | Build automated consistency checker if model grows beyond 20 TUPs | LOW |
| G4: No root cause analysis framework | Red flag fires but "why?" requires investigation | Build diagnostic decision trees for top 5 failure modes | MEDIUM |
