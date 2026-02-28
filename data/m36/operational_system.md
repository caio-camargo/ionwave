# M36 Operational Infrastructure — Operational System Model

**Version**: 1.0.0
**TUP**: M36 — Operational Infrastructure
**Cluster**: BCL-6 Operations & Infra
**Author**: Claude (TWP-001 v2.0.0 workshop)
**Date**: 2026-02-17
**Status**: Production
**Source Tabs**: 841 (company_as_a_system), 843 (operating_parameters), 832 (capabilities), 833 (capabilities_map), 831 (never_go_cold)

---

## Overview

This document is the conceptual spine of M36. Before any process, decision matrix, or risk register, IonWave must understand itself as a system — a set of interconnected subsystems with inputs, outputs, feedback loops, and failure modes.

The insight from Danilo's design: **you don't optimize the parts, you optimize the system.** A locally optimal subsystem can degrade the whole. The CEO who maximizes creative output while starving cash flow is making the business worse.

[Confidence: A | Source: Danilo's company_as_a_system tab 841, validated by systems engineering / Theory of Constraints literature | Date: 2026-02-17]

---

## Part 1: Company as a System

### The Systems View

A business is a system: inputs → process → outputs. Systems thinking asks:

- What are the subsystems? How do they connect?
- Where are the feedback loops?
- Where are the bottlenecks?
- What's the constraint?

**The goal: optimize the SYSTEM, not individual parts.**

A locally optimal subsystem can hurt the whole system. (Example: scaling ads past the point where fulfillment can keep up creates a return crisis that damages the brand loop.)

### Subsystems Map

[Confidence: A | Source: Danilo tab 841, systems engineering canonical structure | Date: 2026-02-17]

| # | Subsystem | Purpose | Key Inputs | Key Outputs | Key Metrics | Owner |
|---|-----------|---------|------------|-------------|-------------|-------|
| 1 | ACQUISITION | Get customers | Creative, Budget, Targeting | Customers, Data | CAC, ROAS, Volume | Operator |
| 2 | CONVERSION | Turn visitors into buyers | Traffic, Landing Page, Offer | Orders, Revenue | CVR, AOV | Operator |
| 3 | PRODUCT | Deliver value | Formulation, Supplier, Packaging | Physical product | Quality, COGS, Lead time | Operator |
| 4 | FULFILLMENT | Get product to customer | Orders, Inventory, 3PL | Delivered packages | Ship time, Cost, Accuracy | Operator |
| 5 | RETENTION | Keep customers | Email, Product experience, Support | Repeat purchases, LTV | Churn, Subscription %, LTV | Operator |
| 6 | FINANCE | Manage money | Revenue, Costs, Capital | Cash, Runway, Profit | Margin, Burn, Runway | Studio |
| 7 | LEARNING | Get smarter | Data, Experiments, Feedback | Insights, Improvements | Experiments/week, Win rate | Operator |

**Pre-CM note**: Pre-CM hire, the Operator owns all subsystems. Finance oversight rests with Studio (Danilo). Post-CM hire, some Operator ownership transitions to CM for administrative subsystems. See `decision_rights.md` for the authority model.

### System Flows

**MONEY FLOW:**
```
Capital → Ads → Customers → Revenue → (Profit) → Capital
```
*Health check: Is the loop positive? Is profit funding more ads or being consumed by operational drag?*

**CUSTOMER FLOW:**
```
Stranger → Visitor → Lead → Customer → Repeat Customer → Advocate
```
*Health check: Where is the biggest drop-off? That's the constraint.*

**PRODUCT FLOW:**
```
Supplier → Inventory → 3PL → Customer → (Returns)
```
*Health check: What is the lead time? Where does delay accumulate?*

**DATA FLOW:**
```
Customer behavior → Analytics → Insights → Decisions → Actions → Customer behavior
```
*Health check: Is the loop closing? Are we actually changing behavior based on data?*

**INFORMATION FLOW:**
```
Market → Research → Strategy → Execution → Results → Market
```
*Health check: Are learnings getting encoded into the system, or lost after each campaign?*

### Feedback Loops

[Confidence: A | Source: Danilo tab 841 + systems dynamics literature | Date: 2026-02-17]

| Loop | Type | Mechanism | Health Check |
|------|------|-----------|--------------|
| Creative → Performance → Creative | Reinforcing (good) | Winners inform new creative briefs | Are we using learnings? |
| Revenue → Ads → Revenue | Reinforcing (good) | Profit funds more ads | Is this loop positive? |
| Experience → Reviews → Trust → Sales | Reinforcing (good) | Good experience drives growth | Review trajectory? |
| Churn → Less Revenue → Less Budget → Worse Product | Reinforcing (bad) | Death spiral | Churn trending up? |
| Quality Issues → Support Load → Slower Response → More Issues | Reinforcing (bad) | Service death spiral | Support metrics trending? |

**Key insight for IonWave**: The subscription model changes the feedback loop topology. Without subscription, every sale is linear. With subscription, the retention loop becomes load-bearing: each subscriber either amplifies or drains the system. This is why HYP-003 (churn) is existential, not just a KPI.

### Bottleneck Analysis

Theory of Constraints (Goldratt): the system is limited by its bottleneck. Fix the bottleneck first — optimizing anything else is waste.

[Confidence: A | Source: Theory of Constraints (Goldratt, 1984) — canonical operations management | Date: 2026-02-17]

**Potential Bottlenecks for IonWave (Phase 1):**

| Bottleneck | Detection Signal | Current Status | Action |
|-----------|-----------------|----------------|--------|
| Creative production | Can't test fast enough; ads fatigue without fresh creative | Pre-launch: not yet measurable | Build creative SOP (M12) |
| Operator bandwidth | Everything waiting on one person; decisions backed up | HIGH RISK — solo founder | Delegation framework (this TUP) |
| Cash | Profitable but can't fund growth; negative working capital cycle | Pre-launch: runway finite | 13-week cash forecast (M25) |
| Customer acquisition | Can't find customers profitably at target CAC | Unknown pre-launch | Kill criteria: CAC >$40 |
| Inventory/Supply | Stockouts, long lead times | Unknown pre-launch | 14-day safety stock buffer |
| Retention | Getting customers but they don't stay | Unknown pre-launch | Month 3 retention >60% target |

**Priority rule**: In Phase 1, operator bandwidth is almost certainly the binding constraint. Design everything to free operator attention for the highest-leverage activities (creative testing, customer acquisition).

### System Health Dashboard

[Confidence: A | Source: Danilo tab 841 (exact targets), aligned with M30/M25/M35 | Date: 2026-02-17]

| Metric | What It Measures | Target | Review Cadence |
|--------|-----------------|--------|----------------|
| System Throughput | Revenue / month | $100K MRR (Year 1 exit) | Weekly |
| System Efficiency | Profit margin | >20% (contribution) | Monthly |
| System Velocity | Idea → result cycle time | <2 weeks | Monthly |
| System Reliability | Fire-free uptime | >95% | Weekly |
| System Learning Rate | Experiments / week | >3 | Weekly |

---

## Part 2: Capabilities Maturity Model

### Framework

IonWave tracks capability maturity across 11 areas on a 1-4 scale:

- **1** = Not doing
- **2** = Doing, not hitting targets
- **3** = Hitting targets
- **4** = Exceeding targets

[Confidence: A | Source: Danilo tab 832 exact structure | Date: 2026-02-17]

### Capability Inventory

| # | Capability | Artifact Target | Performance Target | Pre-Launch Maturity | Owner |
|---|-----------|-----------------|-------------------|---------------------|-------|
| 1 | Supplier & Product | Supplier locked, samples approved, MOQ agreed | COGS <$0.60/sachet, lead time <4 weeks | 1 | Operator |
| 2 | Meta Creative | 100+ ads tested, 20 new/week | CAC <$40, CTR >1.5%, 3%+ win rate | 1 | Operator |
| 3 | Landing Page | 2+ variants live, A/B testing active | CVR >2.5%, ATC >8%, <3s load | 1 | Operator |
| 4 | Funnel & Checkout | Upsells live, subscription default, bump offer | AOV >$60, sub rate >40%, bump take >15% | 1 | Operator |
| 5 | Email Flows | Welcome, cart, post-purchase sequences live | Open >40%, click >3%, flow revenue >15% | 1 | Operator |
| 6 | Influencer Program | 10+ micro-influencers, 3+ posts/week | CPM <$10, 5%+ of revenue from organic | 1 | Operator |
| 7 | Customer Service | Response templates, <4hr response time | CSAT >4.5, refund rate <5% | 1 | Operator |
| 8 | Fulfillment | 3PL live, tracking automated, <48hr ship | Ship <48hr, damage <1%, cost <$4/order | 1 | Operator |
| 9 | Analytics & Reporting | Daily dashboard, weekly report, attribution | CAC/LTV visible daily, decisions data-driven | 1 | Operator |
| 10 | Investor Relations | Pipeline warm, materials ready, updates flowing | Raise closed in <3 weeks when triggered | 1 | Operator |
| 11 | New Product Launch | Launch process documented, 1 successful expansion | New SKU profitable within 60 days, <30% hero cannibalization | 1 | Operator |

**All capabilities at Maturity 1 pre-launch** — this is expected. The system is designed. Execution upgrades maturity.

### Capabilities Map (Backup Coverage)

[Confidence: A | Source: Danilo tab 833 | Date: 2026-02-17]

| Capability | Primary Owner | Backup | Documentation |
|-----------|---------------|--------|---------------|
| Media buying | Operator | CM (basic) | Ad SOPs |
| Creative production | Operator | External agency | Brand guide |
| Email marketing | Operator | CM | Email playbook |
| Inventory management | CM | Operator | Inventory SOP |
| Customer support | CM | Operator | Support scripts |

**Pre-CM note**: Before CM hire, all backup responsibilities fall to Danilo/Studio. This is the primary single-point-of-failure risk in Phase 1. Documented in risk_and_continuity.md as R004 (Operator leaves, Impact 4/5).

### Capability Upgrade Sequence

Suggested maturity upgrade order (Priority = highest leverage for survival first):

1. **Analytics & Reporting** (Capability 9) — must be Maturity 2+ before spending real ad budget
2. **Supplier & Product** (Capability 1) — CoA required before any product claims
3. **Meta Creative** (Capability 2) + **Landing Page** (Capability 3) — core acquisition engine
4. **Email Flows** (Capability 5) — retention multiplier, Day 1 setup pays dividends forever
5. **Customer Service** (Capability 7) — SLA prevents chargeback cascade
6. **Fulfillment** (Capability 8) — 3PL live before first paid ad run
7. All remaining capabilities in parallel as resources allow

---

## Part 3: Operating Parameters (Hard Thresholds)

These are the numeric guardrails that govern when to act, scale, or stop.

[Confidence: A | Source: Danilo tab 843 — canonical thresholds from project plan | Date: 2026-02-17]

| Parameter | Value | Rule | Rationale |
|-----------|-------|------|-----------|
| **Max CAC** | $40 | Kill ads above this | At $40 CAC with 40% GM, break-even requires LTV >$100 — achievable only with subscription. Above $40, even good retention can't save unit economics. |
| **Min ROAS** | 2.0x | Scale above this | 2x ROAS covers ad spend with margin buffer. Below 2x = paying to acquire customers at a loss. |
| **Safety Stock** | 14 days | Buffer inventory always | 14 days protects against supplier delay and demand spike. Below 14 days = existential stockout risk. |
| **Support SLA** | 4 hours | First response time | 4-hour response prevents escalation to chargeback. Chargeback rate >0.75% = Stripe account risk (M25). |
| **Ad Test Budget** | $100/ad | Before kill decision | $100 gives enough impressions for a signal at typical CPMs ($7-15 Meta). Killing below $100 = noise, not signal. |

### Extended Parameters (Cross-TUP Integration)

[Confidence: B | Source: Cross-reference with M3, M13, M24, M25, M30 workshop outputs | Date: 2026-02-17]

| Parameter | Value | Source TUP |
|-----------|-------|-----------|
| Min gross margin | 40% (conservative) / 67% (product-only) | M3 — dual-margin REC-001 |
| Contribution margin for scaling | >0% per channel | M13 |
| LTV:CAC minimum | 3.0x | M3 |
| Month 3 retention target | >60% | M35 |
| Chargeback rate kill threshold | 0.75% | M25 |
| Cash runway minimum | 90 days | M25 |
| 3PL trigger | 150 orders/month OR >10 hrs/week packing | M24 |
| Ad spend diversification | <50% single platform by Month 12 | M13 |
| Subscription rate target | >40% of first-time buyers | M21 |

**Rule**: If any hard threshold is breached, the Operator must escalate immediately — no discretion. Thresholds exist precisely because the Operator should not make judgment calls at the boundary.

---

## Part 4: Never Go Cold Network

The "never go cold" principle: maintain active relationships with all critical partners so that when something breaks, you're calling a contact, not a stranger.

[Confidence: A | Source: Danilo tab 831 | Date: 2026-02-17]

| Relationship Category | Target | Why It Can't Go Cold |
|----------------------|--------|---------------------|
| Suppliers | Know 3+ backup suppliers personally | Supplier failure = inventory zero = business zero |
| 3PLs | Active relationships with 2-3 fulfillment partners | 3PL disaster without backup = immediate shipping crisis |
| UGC Creators | Active network of 20+ creators | Creative fatigue without replenishment = ad performance collapse |
| Advisors | Industry experts who take your calls | Regulatory, legal, or strategy emergencies require trusted voices |
| Operators | Other D2C founders for benchmarking | Isolation = no peer intelligence; community = faster calibration |
| Ad platform reps | Named contacts at Meta, Google | Platform ban or policy change — informal channel matters |
| Regulatory counsel | Attorney familiar with DSHEA/FTC | Adverse event or regulatory contact = need immediate expert access |

**The solo founder trap**: As a pre-CM solo founder, relationship maintenance competes with execution. The minimum viable version: one supplier backup (identified pre-launch), one 3PL backup (quoted pre-launch), and five operator connections (D2C community or Slack groups). Everything else builds over time.

[Confidence: D — pre-launch, network is speculative | Upgrade path: After 3 months operational, audit which relationships have been activated and build from there | Date: 2026-02-17]

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path | Grade |
|-----|--------|-------------|-------|
| All capability maturities are 1 (not yet measured) | HIGH — no baseline for tracking improvement | Upgrade after 30 days operational: score each capability on 1-4 scale | D |
| Operating parameters not validated against IonWave actuals | HIGH — $40 CAC may be wrong for our market/channel | Validate with first 100 ad tests (M13 cold start protocol) | D |
| Bottleneck analysis is speculative | MEDIUM — actual bottleneck may be different | Run weekly retrospective for first 90 days to identify real constraint | D |
| Never-go-cold network is aspirational | MEDIUM — most relationships don't exist yet | Start supplier backup outreach in Week 1 (M6 supplier vetting) | D |

---

## Section 3: Scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| Evidence Coverage | 4/5 | All Danilo source tabs fully incorporated; operating parameters canonical |
| Confidence Honesty | 5/5 | All pre-launch gaps marked D with upgrade paths |
| Upgrade Path Quality | 4/5 | Clear validation paths for all D-grade items |
| Actionability | 5/5 | Parameters are directly executable; subsystem map is operational reference |
| OpKit Reusability | 5/5 | Company-as-a-system model applies to any D2C brand |

**Section Score: 4.6/5 → 9.2/10**
