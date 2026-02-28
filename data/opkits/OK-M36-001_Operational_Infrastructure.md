# OpKit: D2C Operational Infrastructure (OK-M36-001)

**OpKit ID**: OK-M36-001
**Name**: D2C Operational Infrastructure Framework
**Source TUP**: M36 — Operational Infrastructure (IonWave Trade #84)
**Maturity**: Production
**Reusability**: High — applicable to any bootstrapped D2C brand
**Created**: 2026-02-17
**Author**: Claude (TWP-001 v2.0.0)

---

## Purpose

This OpKit provides the foundational operational infrastructure for any D2C brand building from zero to launch. It is designed for solo founders and lean teams who need a complete operational system without the overhead of enterprise-scale process documentation.

It is explicitly NOT a compliance checklist or an academic framework. It is a working system that tells you what to decide, who decides it, how to monitor it, and what to do when things go wrong.

**Who this is for:**
- Solo founders building a D2C brand (digital or physical products)
- Small teams (1-3 people) with a channel manager or early hires
- Any brand that operates with lean capital and high ad-dependency
- Studio 3 operators workshopping a new Trade

---

## Component 1: The Company-as-a-System Model

### The Core Idea

A D2C brand is not a collection of tasks. It is a system of seven interdependent subsystems, each with inputs, outputs, internal logic, and failure modes. Managing a D2C brand well means managing the system, not optimizing individual parts in isolation.

**Why this matters**: Optimizing one subsystem at the expense of others creates local maxima. A great creative subsystem that generates demand the fulfillment subsystem cannot handle is a net negative. The 7-subsystem model forces you to think in flows.

### The 7 Subsystems

| # | Subsystem | Core Function | Primary Metric |
|---|-----------|--------------|----------------|
| 1 | **Market Intelligence** | Translate market signals into decisions | Hypothesis validation rate |
| 2 | **Acquisition Engine** | Convert ad spend into new customers | CAC, ROAS |
| 3 | **Retention Engine** | Convert first purchases into lifetime customers | LTV, churn rate |
| 4 | **Product + Formulation** | Produce a product worth buying repeatedly | NPS, repeat purchase rate |
| 5 | **Supply Chain + Fulfillment** | Deliver product reliably and profitably | On-time delivery, COGS |
| 6 | **Financial Engine** | Convert revenue into sustainable economics | Gross margin, CAC payback |
| 7 | **Operating System** | Coordinate all subsystems; prevent decay | Ops maturity score |

### System Interaction Map

The subsystems interact in a flow. Problems cascade downstream:



**The Operating System subsystem is not one subsystem among seven. It is the governance layer that keeps all seven aligned.** Without it, the system gradually decoheres as each subsystem optimizes locally.

### How to Use This Model

1. **Map your subsystems**: For your specific brand, name the owner, primary metric, and top 3 failure modes for each subsystem
2. **Identify your weakest subsystem**: The system performs at the level of its weakest link, not its average
3. **Sequence your improvement efforts**: Fix the weakest subsystem first, not the most visible one
4. **In every ops review**: Ask which subsystem is creating the most drag on system performance

### Subsystem Worksheet (fill in for your Trade)

| Subsystem | Your Owner | Primary KPI | Your Top Failure Mode | Current Maturity (1-4) |
|-----------|-----------|------------|----------------------|------------------------|
| Market Intelligence | | | | |
| Acquisition Engine | | | | |
| Retention Engine | | | | |
| Product + Formulation | | | | |
| Supply Chain + Fulfillment | | | | |
| Financial Engine | | | | |
| Operating System | | | | |

---

## Component 2: Operating Parameters (Generic Thresholds for Any D2C Brand)

These are the five instruments every D2C brand should monitor. The specific thresholds vary by unit economics, but the structure is universal.

### Generic Operating Parameters Template

| Parameter | IonWave Threshold | Generic Range | Notes |
|-----------|------------------|---------------|-------|
| CAC | <0 | <LTV/3 | Ensure payback within 12 months at your margin |
| ROAS | >2.0x | >1/(1-gross_margin) | Break-even ROAS = 1 divided by (1 minus gross margin) |
| Safety Stock | 14 days | 1.5x supplier lead time | Buffer = lead time x 1.5 minimum |
| Support SLA | <4 hours | <8 hours | First response, not resolution |
| Ad Test Budget | 00/creative | 2-3x expected CPA | Enough to observe 2-3 conversions if working |

### Setting Your Break-Even ROAS

Break-even ROAS = 1 / (1 - gross margin)

Examples:
- 60% gross margin: Break-even ROAS = 1 / 0.40 = 2.5x
- 70% gross margin: Break-even ROAS = 1 / 0.30 = 3.3x
- 50% gross margin: Break-even ROAS = 1 / 0.50 = 2.0x

Your minimum ROAS target should equal your break-even ROAS. Your stretch target should be 1.5x the break-even.

### Setting Your CAC Target

CAC Target = LTV x (1 - minimum margin) x payback_period_fraction

Simple version: CAC should not exceed 1/3 of estimated 12-month LTV for a healthy business.

Pre-launch: Use proxy data (industry benchmarks, competitor research) to estimate LTV before you have real data. Grade it C or D. Update to real data within 90 days of launch.

---

## Component 3: Decision Authority Matrix

Every D2C brand needs a clear decision authority model. Decisions without owners get made too slowly, inconsistently, or not at all. This component provides two variant templates: Solo Founder (pre-CM) and CM Model (post-hire).

### Decision Tiers

| Tier | Type | Description | Frequency |
|------|------|-------------|----------|
| T1 | **Strategic** | Direction-setting decisions that are hard to reverse | Quarterly or less |
| T2 | **Operational** | Tactical decisions within established strategy | Weekly/Monthly |
| T3 | **Execution** | Day-to-day decisions within defined parameters | Daily |

### Variant A: Solo Founder Model

| Tier | Decision Type | Examples | Owner | Consultation |
|------|--------------|----------|-------|-------------|
| T1 | Strategic | Pricing, positioning, major product changes | Founder | Studio 3 / advisor |
| T1 | Capital | Budget allocation, hiring, major investment | Founder | Studio 3 / advisor |
| T2 | Campaign | New channel launch, major creative direction | Founder | None required |
| T2 | Product | Formulation tweaks, packaging changes | Founder | Manufacturer input |
| T2 | Supplier | Reorder decisions, supplier qualification | Founder | None required |
| T3 | Ad ops | Creative kills, bid adjustments, budget pacing | Founder | None required |
| T3 | Customer | Support responses, refund decisions, escalations | Founder | None required |

### Variant B: CM Model (after Channel Manager hire)

| Tier | Decision Type | Examples | Owner | Consultation |
|------|--------------|----------|-------|-------------|
| T1 | Strategic | Direction, positioning, major pivots | Founder | Studio 3 / advisor |
| T1 | Capital | Hiring, major budget changes (> threshold) | Founder | CM input |
| T2 | Campaign | New channel launch, creative direction | CM | Founder awareness |
| T2 | Budget | Ad spend allocation within approved envelope | CM | Founder approval if >X% change |
| T2 | Product | Minor formulation tweaks, copy changes | CM | Founder awareness |
| T3 | Ad ops | Creative kills, bid adjustments, pacing | CM | Autonomous |
| T3 | Customer | Support responses, refunds under  | CM | Autonomous |

**Note**: The CM budget authority envelope and approval thresholds (X) are DECISION TBDs for every Trade. Fill in the specific numbers based on your financial model before activating the CM Model.

### RACI Template

| Decision Area | Founder (Responsible) | CM (if hired) | Studio 3 | Legal/Finance |
|--------------|----------------------|---------------|----------|---------------|
| Pricing | R | C | C | I |
| Ad spend | R (Solo) / C (CM model) | A (CM model) | I | I |
| Creative direction | R (Solo) / C (CM model) | R (CM model) | I | — |
| Product formulation | R | I | I | I |
| Supplier selection | R | I | I | — |
| Legal notices | I | I | C | R |
| Hiring | R | C | C | I |

R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## Component 4: Risk Register Template

Every D2C brand faces a predictable set of existential risks. The specifics vary, but the categories are universal. Use this template to build your risk register.

### Risk Scoring Guide

**Likelihood (L)**: 1=Rare (<5%), 2=Low (<25%), 3=Moderate (<50%), 4=High (<75%), 5=Near-certain (>75%)
**Impact (I)**: 1=Minor, 2=Moderate, 3=Significant, 4=Major, 5=Business-ending
**Score = L x I**: 15-25=CRITICAL, 8-14=HIGH, 4-7=MEDIUM, 1-3=LOW

### Universal D2C Risk Register Template

| Risk ID | Risk Category | Event | L | I | Score | Tier | Owner | Mitigation | Trigger |
|---------|--------------|-------|---|---|-------|------|-------|-----------|--------|
| R001 | Supply Chain | Supplier cannot deliver | 3 | 5 | 15 | CRITICAL | Founder | 2 qualified suppliers + safety stock | Delay >lead time |
| R002 | Paid Acquisition | Ad account banned | 2 | 5 | 10 | HIGH | Founder | Backup accounts + email list | Suspension notice |
| R003 | Financial | Cash crisis (runway <90d) | 2 | 5 | 10 | HIGH | Founder | 13-week model + credit line | Runway drops <90d |
| R004 | Product | Defect or serious complaint | 2 | 4 | 8 | HIGH | Founder | CoA protocol + SLA | Illness complaint |
| R005 | Key Person | Founder incapacitation | 1 | 5 | 5 | MEDIUM | Founder + Contact | Password vault + succession contacts | 48hr unreachable |
| R006 | Legal/Regulatory | FTC/FDA action or lawsuit | 2 | 4 | 8 | HIGH | Founder + Legal | Legal retainer + claim compliance | Demand letter |

### Adaptation Notes by Product Category

**Supplements/Consumables (like IonWave):**
- R004 (product defect) severity is elevated due to FDA regulatory environment
- R006 (legal/regulatory) is elevated due to FTC claims scrutiny on health products
- Add: R007 — Bad batch / CoA failure (separate from customer complaint)

**Apparel/Physical goods:**
- R001 (supplier) impact may be lower if design-forward (not formulation-dependent)
- Add: R007 — Returns surge (>15% return rate triggers margin crisis)

**Digital products:**
- R001 (supplier) is irrelevant
- R004 (product defect) becomes: R004 — Platform bug or data breach
- R006 is still relevant for claim compliance in ads

---

## Component 5: Performance Monitoring System

### The Minimum Viable Monitoring Stack (Phase 1)

Before you have automated dashboards, you need a manual system that catches problems before they compound. This is the minimum viable version.

**Weekly KPI log** (15 minutes to fill in every Friday):
1. Revenue this week
2. Ad spend this week
3. MER (Revenue / Ad Spend)
4. Platform-reported ROAS (by major channel)
5. New customers this week
6. CAC (Ad Spend / New Customers)
7. Inventory days on hand
8. Support tickets: volume + avg first response time
9. Cash on hand (approximate runway in days)
10. Notable events (anomalies, decisions, risks triggered)

### Review Cadence Template

| Cadence | Duration | Focus | Output |
|---------|----------|-------|--------|
| Daily (15 min) | 15 min | Ad metrics only: ROAS, spend, policy flags | Observe + flag only; 3 actions max |
| Weekly (Fri) | 60-90 min | Cash, ads, inventory, support, next week plan | Written update: 5 bullet points |
| Monthly | 2-3 hrs | Full KPI scorecard, risk register, capabilities | Monthly KPI summary document |
| Quarterly | 4 hrs | Strategy, hypothesis validation, decision TBDs | Strategic memo + adjusted plan |

### Escalation Triggers

| Trigger | Threshold | Response |
|---------|-----------|----------|
| ROAS crashes | <1.0x for 48 hrs | Pause all ad spend immediately |
| Cash runway | <30 days | Cash crisis protocol |
| Account suspended | Any notice | Ad account protocol |
| Serious complaint | Any illness/injury claim | Product defect protocol |
| Legal notice | Any demand letter | Legal protocol |

---

## Component 6: Knowledge Management Protocol

### The Core Problem

A solo founder accumulates knowledge that lives only in their head. When they are incapacitated, when they hire someone, or when they return after a break, that knowledge is unavailable. Knowledge management is not a bureaucratic exercise — it is survival infrastructure.

### The Runbook System

A runbook is a document that lets someone else (or a future version of you) execute a process without needing to ask questions. Runbooks have three qualities: they are specific, they are current, and they are accessible.

**Runbook Index Template** (maintain this as your master reference):

| Process | Runbook File | Last Updated | Owner | Frequency |
|---------|-------------|-------------|-------|----------|
| Weekly KPI review | runbooks/weekly_kpi_review.md | | Founder | Weekly |
| Inventory reorder | runbooks/inventory_reorder.md | | Founder | Monthly |
| Ad account setup | runbooks/ad_account_setup.md | | Founder | One-time |
| Customer refund process | runbooks/customer_refund.md | | Founder | As needed |
| Product defect response | runbooks/product_defect_response.md | | Founder | As needed |
| Monthly financial close | runbooks/monthly_financial_close.md | | Founder | Monthly |

### The Never-Go-Cold Protocol

The Never-Go-Cold protocol is the minimum viable week that prevents operational decay during periods of low activity (travel, illness, off-season).

**Minimum viable ops week** (can be compressed to 3-4 hours if needed):
1. Review daily ad metrics (15 min x 5 = 75 min)
2. Check support inbox: respond to any urgent tickets (30 min)
3. Update weekly KPI log (15 min)
4. Check inventory days on hand (5 min)
5. Check cash position (5 min)

**Total**: approximately 2.5 hours per week minimum. If you cannot do even this, the business is in a suspended state and risks are accumulating.

### Knowledge Transfer Protocol (for CM hire)

When hiring a Channel Manager or first employee, run this protocol before they are autonomous:

| Week | Focus | Handoff |
|------|-------|--------|
| Week 1 | Shadow everything | CM observes, no autonomy |
| Week 2 | Execute with review | CM executes routine tasks; founder reviews before publishing |
| Week 3 | Supervised autonomy | CM has autonomy within T3 decisions; check-in daily |
| Week 4+ | Full T3 autonomy | Transition T2 decisions per authority matrix |

**Minimum knowledge transfer checklist before Week 4:**
- [ ] CM has access to all runbooks and can navigate the documentation system
- [ ] CM has tested access to all platforms (Meta, Google, Shopify, email platform, support tool)
- [ ] CM has reviewed the decision authority matrix and knows what they can and cannot decide
- [ ] CM has reviewed the risk register and knows the escalation triggers
- [ ] CM has seen at least one full weekly KPI review with the founder
- [ ] Founder has shadowed CM for at least 3 ad operations sessions before granting autonomy

---

## Component 7: Capability Maturity Assessment Framework

### The Maturity Scale

Use this 4-level scale to score your operational capability across 11 domains. Honest scoring reveals where your operational debt is highest and where investment will have the most leverage.

| Level | Name | Description | Typical Signs |
|-------|------|-------------|---------------|
| 1 | **Initial / Ad hoc** | No documented process; dependent on individual memory; inconsistent results | No runbooks, founder does everything from memory |
| 2 | **Documented / Repeatable** | Core processes documented; can be executed by someone else; consistent results on simple tasks | Runbooks exist, CM could execute with guidance |
| 3 | **Managed / Measured** | Process is measured; performance tracked; variance understood and managed | KPIs tracked weekly, anomalies caught before crisis |
| 4 | **Optimized / Automated** | Process is continuously improved; automation reduces manual burden; best-in-class performance | A/B testing culture, automated alerts, documented improvements |

### The 11 Capability Domains

| # | Domain | What Level 1 Looks Like | What Level 3 Looks Like |
|---|--------|------------------------|------------------------|
| 1 | Paid Ads | Running ads from instinct, no structured creative testing | Weekly creative testing cadence, kill rules documented, ROAS tracked by creative |
| 2 | Creative Production | Ad hoc; no brief process; inconsistent quality | Creative brief template, 3-2-1 creative batching, performance grading |
| 3 | Landing Pages | Single page, not tested | A/B test cadence, CRO checklist, tracked by source |
| 4 | Email/SMS | Manual sends, no automation | Welcome flow, abandon flow, win-back flow, weekly broadcast |
| 5 | Product Development | Single product, no improvement process | CoA protocol, customer feedback loop, annual formulation review |
| 6 | Supply Chain | Single supplier, no safety stock | 2 qualified suppliers, 14d safety stock, reorder triggers |
| 7 | Customer Support | Reactive, no SLA | <4hr first response, ticket tagging, recurring theme tracking |
| 8 | Analytics | No dashboard; checking platform natively | MER tracked weekly, cohort analysis monthly, attribution model defined |
| 9 | Financial Management | No cash flow model; checking bank balance | 13-week model updated weekly, monthly P&L, reserve policy |
| 10 | HR / Hiring | No process; hire by instinct | Job scorecard, structured interview, 90-day onboarding plan |
| 11 | Legal / Compliance | No review process | Annual ad copy audit, legal retainer, document retention policy |

### How to Use This Assessment

1. Score each domain honestly (1-4) before launch and every quarter
2. Identify your lowest-scoring domains: these are your highest operational risk
3. Prioritize improving the lowest scores in domains directly tied to your primary acquisition channel
4. Set targets: What score should each domain reach by Month 6? Month 18?
5. Track progress quarterly: Stagnation in a domain is a flag worth investigating

**Important**: Moving from 1 to 2 is the most valuable maturity transition. It converts from founder-dependent to documented-and-delegatable. Do not chase Level 4 perfection before reaching Level 2 across all domains.

---

## Component 8: Business Continuity Checklist

This is the minimum continuity infrastructure every D2C brand must have in place before launch. If these are not done, you are operationally fragile.

### Pre-Launch Continuity Checklist

**Access Infrastructure**
- [ ] Password manager set up (1Password or Bitwarden recommended) with ALL credentials stored
- [ ] Password vault emergency access granted to trusted contact
- [ ] Two-factor authentication enabled on all critical platforms (Shopify, Meta, Google, bank)
- [ ] Recovery codes stored in password vault for all 2FA accounts

**Backup Systems**
- [ ] Backup ad account created on Meta Business Manager
- [ ] Backup Google Ads account created under separate MCC
- [ ] Second supplier qualified and on file (for physical product brands)
- [ ] Email list capture tool live from Day 1 (not after you have 1,000 customers)

**Succession Infrastructure**
- [ ] Trusted contact named and briefed on their role
- [ ] Succession contacts document written: supplier contact, Shopify support, Studio 3/advisor, legal
- [ ] Key person insurance policy reviewed (amount TBD per your financial model)
- [ ] Business continuity document designating entity control in case of incapacitation

**Risk Playbooks**
- [ ] R001 (supplier fails) playbook written and accessible
- [ ] R002 (ad account banned) playbook written and accessible
- [ ] R003 (cash crisis) playbook written and accessible
- [ ] R004 (product defect) playbook written and accessible
- [ ] R005 (founder incapacitation) playbook written and accessible
- [ ] R006 (legal attack) playbook written and accessible

### Owned Channel Insurance

Build these from Day 1 — they are your lifeboat if paid channels fail:

| Channel | Target at Launch | Why |
|---------|-----------------|-----|
| Email list | 1,000+ subscribers | Primary fallback if ads go down |
| SMS list | 200+ subscribers | High-open rate for urgent comms |
| Product reviews | 10+ verified reviews | Social proof that survives platform bans |
| SEO content | 1+ optimized pages | Passive traffic independent of paid |

---

## IonWave Graded Example

**Trade**: IonWave Trade #84 (Marine Plasma Supplement, D2C)
**Grade**: 8.1/10
**Workshop Date**: 2026-02-17

### What IonWave Did Well

1. **Company-as-a-system model**: The 7-subsystem framework is the conceptual spine of all M36 content. It forces thinking about flows and interdependencies rather than isolated tasks. Best systems-thinking framework in the whole ops cluster.

2. **Risk register completeness**: Six risks scored, tiered, owned, and playbooking done. Most pre-launch brands do not have this. R001 (supplier) correctly elevated to CRITICAL based on L×I math.

3. **Two-variant decision matrix**: CM authority model documented as two explicit variants (Solo Founder vs CM Model) rather than collapsing them. This prevents ambiguity at the moment of hire.

4. **Phase 1/Phase 2 monitoring architecture**: Correctly distinguishes between what is available now (manual, repo-based) and what requires a decision (Phase 2 automation). Does not promise what is not yet decided.

5. **Never-go-cold protocol**: Minimum viable ops week (2.5 hours) prevents neglect decay during low-activity periods. Simple but often skipped by solo founders.

### Where IonWave Fell Short

1. **Industry perspectives (IP-M36)**: Tab was empty. No external benchmarking data incorporated. Capability maturity targets (M6: 2-3, M18: 3-4) are informed estimates, not validated against industry data.

2. **CM threshold undefined**: At what MRR or complexity does CM become necessary? This is a Decision TBD. The authority matrix is built, but the activation trigger is not yet decided.

3. **Key person insurance gap**: Coverage amount and provider not yet specified. Exists as a checkbox, not a completed item.

### How Another Trade Should Adapt This

- **Fill in your operating parameters**: The generic thresholds in Component 2 need to be calculated from your specific unit economics (margin, LTV, CAC targets)
- **Run your own risk scoring**: The L×I scores are IonWave-specific. A high-inventory brand has higher R001 impact. A content brand has lower R001 relevance.
- **Set your CM authority envelope before hiring**: Do not hire a CM before defining what they can and cannot decide. The template in Component 3 needs your specific dollar thresholds.
- **Build runbooks before you need them**: Every process that would break if you were unavailable for a week needs a runbook. Write the first version before launch, update quarterly.

---

## Key Principles

These principles distill the most important lessons from the M36 workshop. Apply them to any D2C brand operational infrastructure build.

1. **Optimize the system, not the parts.** A brand is not a collection of tasks. It is a system of seven subsystems. Local maxima — winning in one subsystem while neglecting others — creates global failure.

2. **A decision without an owner is not a decision.** Every significant decision must have a single named owner. Not a committee. Not whoever has time. A named person.

3. **The email list is insurance.** Build owned channels from Day 1. Not as a nice-to-have. As a hedge against the day your primary paid channel fails.

4. **Risk management is about pre-building the response, not predicting the event.** You cannot predict when your supplier will fail. You can pre-build the playbook so that when it does, you execute rather than improvise.

5. **Move from 1 to 2 before chasing 4.** The most valuable maturity transition is from Ad hoc (1) to Documented (2). It converts the business from founder-dependent to delegatable. Do not skip it in pursuit of optimization.

6. **Never-go-cold is a commitment, not a suggestion.** The minimum viable ops week must be sacrosanct. Operational neglect compounds silently until it becomes a crisis.

7. **Phase 1 is sufficient to launch.** Do not let the perfect monitoring system block you from launching. Manual + Claude is enough to catch problems in the first 6-12 months. Phase 2 when the data volume justifies it.

---

*OpKit OK-M36-001 is part of the Studio 3 Imagination Generation System. For IonWave-specific implementation, see data/m36/. For adaptation to a new Trade, start with Component 2 (operating parameters) and work outward.*
