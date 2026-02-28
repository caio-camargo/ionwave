# Role Engineering & Overdetermined Coordination

**TUP**: M1 — Labor Chain & Deployment
**Sources**: Tabs 143 (Role Engineering Framework), 144 (Role Engineering — 7 Dimensions), 148 (Overdetermined Coordination)
**Cross-TUP**: M0 (Trade Thesis — initial conditions), M35 (Execution Plans), M36 (Operational Infra)

---

## 1. Role Engineering — The Core Concept

Most hiring failures are misdiagnosed. The problem is almost never "we hired the wrong person" — it's "we never defined the role."

**Role Engineering** is the practice of fully specifying a role BEFORE searching for the person who fills it. A role is not a job description. A job description is marketing. A role is architecture.

When a role is properly engineered, two failure modes become separable:
- **Role Failure**: The role was designed wrong (bad scope, wrong authority, missing tools)
- **Talent Failure**: The person couldn't execute (wrong skills, wrong mindset)

Without role engineering, every failure looks like talent failure. With it, you can diagnose and fix the actual problem.

### Role Engineering Process

Before hiring ANYONE, complete these steps:

1. **What coordination pattern do you need?** — Information flows, decisions, outputs
2. **What role archetype fits?** — See Role Archetype Matrix (§1.1)
3. **What are the role boundaries?** — In scope, out of scope, interfaces
4. **What does success look like?** — Outputs, verification, failure modes

Then specify all 7 dimensions (§2) before writing a single job description.

> The JD is output of role engineering, not input. The rubric is output. The contract is output.

### 1.1 Role Archetype Matrix

| Role | Core Function | Coordination Pattern | Decision Authority | Success Metric |
|------|--------------|---------------------|-------------------|---------------|
| **Operator** | Execute playbook | Info flows IN, results flow OUT | Tactical only | KPIs hit |
| **CEO (Deal Maker)** | Create opportunities | External relationships | Strategic + deals | Pipeline, closes |
| **CEO (Operator)** | Run the machine | Internal execution | All operational | Company metrics |
| **COO** | Build/run systems | Internal processes | Process design | Efficiency, scale |
| **Chief of Staff** | Extend executive | Info to/from CEO | Delegated only | CEO leverage |
| **Program Manager** | Deliver outcomes | Cross-team coordination | Project scope | Deliverable shipped |
| **Fractional COO** | Part-time systems | Periodic process work | Advisory | Systems built |
| **Trustee** | Protect interests | Oversight + reporting | Fiduciary | Compliance, returns |

### 1.2 Common Role Confusions

| You Say | You Actually Need | The Confusion | Cost of Mistake |
|---------|------------------|---------------|----------------|
| Chief of Staff | Program Manager | CoS extends CEO; PM delivers projects | Wrong skills, wrong focus |
| COO | Operator | COO builds systems; Operator runs playbook | Overpay, over-scope |
| CEO | Operator | CEO does deals; Operator executes | Entrepreneur in executor role |
| Advisor | Fractional Exec | Advisor gives opinions; Frac does work | Advice without execution |
| Co-founder | Early Employee | Co-founder shares risk; Employee wants salary | Equity wasted, misalignment |

### 1.3 Role Interface Design

Every role has INTERFACES — how it connects to other roles. For each role, define:

- **INPUTS**: What information/decisions does this role receive?
- **OUTPUTS**: What does this role produce for others?
- **ESCALATIONS**: When does this role hand off to another?
- **DEPENDENCIES**: What does this role need to function?

> Clear interfaces = clear accountability = less coordination debt.

---

## 2. The Seven Dimensions of a Role

Every role must be specified across seven dimensions before it is ready to fill.

| # | Dimension | What It Specifies | If Missing... |
|---|-----------|------------------|---------------|
| 1 | **Delegation Depth** | Where in the judgment propagation chain | Bottleneck OR overhead |
| 2 | **Decision Authority** | What can be decided alone, needs approval, is forbidden | Constant escalation OR rogue decisions |
| 3 | **Performance Surface** | Milestones, metrics, success criteria | No accountability, no way to distinguish good from bad |
| 4 | **Compensation Architecture** | Base, equity, bonuses — each aligned to a behavior | Misaligned incentives |
| 5 | **Interface Map** | Who, how often, what channels, about what | Communication gaps, duplicated work |
| 6 | **Fidelity Mechanisms** | Documents, rubrics, templates that encode judgment | Tribal knowledge — breaks when person leaves |
| 7 | **Escalation Architecture** | Triggers, paths, SLAs, thresholds | Problems fester OR everything escalates |

> If you can't specify all seven dimensions, the role isn't ready to fill.

### 2.1 Delegation Depth

Delegation Depth is the number of abstraction layers between the principal and the terminal executor. The recursive insight: at Depth 2+, you are not delegating work — you are delegating the act of delegation itself.

Your judgment propagates through documents, not conversations. This distinguishes Delegation Depth from an org chart. An org chart describes reporting relationships. Delegation Depth describes **judgment propagation**.

#### IonWave Depth Map

| Depth | Role | Delegates To | Judgment Encoded In | Cost | Leverage |
|-------|------|-------------|---------------------|------|---------|
| D0 | Nilo | VA | VA Hiring Kit, Screening Checklist, Test Task | 90 min | Sets all initial conditions |
| D1 | VA | CoS candidates | CoS JD, Email Templates, Pipeline Tracker | $500-800/mo | Frees scheduling + admin |
| D2 | Chief of Staff | Recruiter | Recruiter JD, Assessment Rubrics, Project Plan | $3-5K/mo | Frees process management |
| D3 | Recruiter | Operator candidates | Operator JD, Evaluation Matrix, Screening Guide | $5K project | Frees sourcing + screening |
| D4 | Operator | The Business | Complete ODD, Milestones, Escalation Paths | $4K/mo + 15% | Frees execution entirely |

#### Depth Tradeoffs

| Depth | Leverage | Latency | Fidelity | Prerequisite |
|-------|---------|---------|----------|-------------|
| D0 | None — you are the bottleneck | Zero | Perfect | Nothing |
| D1 | Low — frees time | 1-2 weeks | High | Task documentation |
| D2 | Medium — frees time + judgment | 3-4 weeks | Good | Process documentation + rubrics |
| D3 | High — multiplicative | 6-8 weeks | Acceptable | Full hiring system documented |
| D4 | Maximum — self-sustaining | 10-12 weeks | Variable | Complete ODD |

#### Rules

- Never add depth without documentation for that layer
- Never stack untested layers (validate D1 before building D2)
- Delegation without documentation is abdication
- Each layer requires: JD, rubric, templates, authority matrix, escalation path
- First hire at each depth: founder stays in loop to calibrate the system

### 2.2 Decision Authority Matrix

| Role | Autonomous (Green) | Needs Approval (Yellow) | Forbidden (Red) |
|------|-------------------|----------------------|-----------------|
| **VA** | Reject obvious misfits, schedule calls, send templates, update tracker | Advance borderline candidates, modify templates | Make offers, change JD, set comp |
| **Chief of Staff** | Hire/fire recruiter, set process timelines, reject below-threshold candidates | Final Operator selection, budget changes, scope changes | Change equity terms, rebrand, strategic pivots |
| **Recruiter** | Source channels, outreach messaging, reject below-7 candidates | Advance borderline (7-8) candidates, change sourcing strategy | Make offers, change comp, represent company externally |
| **Operator** | Spend up to $500, daily ad optimization, email sequences, vendor selection | Spend $500+, pricing changes, major partnerships | Equity decisions, brand positioning changes, hiring beyond budget |

### 2.3 Performance Surface

| Role | Win Condition | Milestones | Kill Criteria |
|------|-------------|------------|--------------|
| **VA** | CoS hired within 4 weeks | W1: Job posted. W2: 5 screens. W3: 3 interviews. W4: Offer out | Zero qualified candidates after 2 weeks |
| **Chief of Staff** | Operator hired + onboarded | W2: Recruiter hired. W5: 3 finalists. W6: Operator signed | No Recruiter after 2 weeks. No pipeline after 4 weeks |
| **Recruiter** | 3 qualified → 1 hire | W1: 20 sourced. W2: 8 screened. W3: 5 interviewed. W4: 3 finalists | Zero qualified (7+) after 3 weeks |
| **Operator** | $100K MRR in 12 months | W4: Table Set. W8: First Blood. W12: Winner Found. M12: $100K MRR | No Table Set by W6. No First Blood by W12. Negative unit econ at W12 |

### 2.4 Compensation Architecture

Every comp component aligns a specific behavior:
- **Base cash** → Shows up and does the work (retention)
- **Equity** → Cares about long-term outcome (alignment)
- **Milestone bonus** → Hits specific targets (execution)
- **Success fee** → Delivers specific output (completion)
- **Retainer** → Commits bandwidth (availability)

> Bad comp architecture: all base (no alignment) or all equity (no retention). Good comp architecture: each component pulls a different lever.

| Role | Base | Equity | Bonuses | Alignment Logic |
|------|------|--------|---------|----------------|
| **VA** | $500-800/mo | None | $100 completion | Short project, just execution |
| **Chief of Staff** | $3-5K/mo | 1-3% Studio (3yr vest) | $1K per placement, $2.5K at $100K MRR | Medium-term, cares about Studio success |
| **Recruiter** | $2K retainer | None | $3K success fee | Project-based, output-driven |
| **Operator** | $4K/mo → $8K | 15% IonWave (4yr vest) | $5K/$10K/$25K at milestones | Deep alignment — below-market cash forces equity mindset |

**Market Reality Check (2026):**
- Operator at $4K/mo is well below market ($8-12K/mo typical for studio-assigned operators). This is intentional — the 15% equity is the real compensation. Operator must believe in the equity upside.
- CoS at $3-5K/mo is viable for junior/part-time (10-15 hrs/week). Experienced fractional CoS commands $6-12K/mo. Adding 1-3% Studio equity makes $3-5K competitive.
- Recruiter at $5K total is at the floor of market pricing. Fine for a freelance recruiter with a defined operator profile. Not sufficient for retained executive search.
- CM at $500/mo per operator is only viable as tech-enabled light-touch (SaaS dashboard + 2-3 hours/month human review). Genuine portfolio monitoring with coaching requires $2-5K/mo.

**Recommended Enhancement: Hybrid Vesting**
Best practice for operator-entrepreneurs (2026): 50% time-based (4yr/1yr cliff) + 50% milestone-based (vests upon hitting MRR targets). Double-trigger acceleration for acquisition + termination scenarios.

### 2.5 Interface Map

| Role | Reports To | Manages | Channel | Cadence |
|------|-----------|---------|---------|---------|
| VA | Nilo | Nobody | Slack DM | Daily 2-3 sentence update |
| Chief of Staff | Nilo | VA (handoff), Recruiter | Slack channel + weekly call | Daily async + weekly 30-min sync |
| Recruiter | Chief of Staff | Nobody | Slack + email | Weekly pipeline update |
| Operator | Studio (via CoS/CM) | Vendors, creators, CS | Slack + weekly report | Daily metrics + weekly report + monthly review |
| CM | **Trustee or Studio directly** (U18) | Nobody (monitors Operators) | Slack + compliance log | Daily review + monthly grade |

> **U18 — CRITICAL**: CM must never report through CoS. CoS has equity/bonus incentives that compromise CM independence. CM reports directly to Trustee (if appointed) or Studio (Nilo).

### 2.6 Fidelity Mechanisms

| Role | Documents That Encode Judgment | What These Replace |
|------|-------------------------------|-------------------|
| **VA** | Screening Checklist, Test Task, Email Templates, Pipeline Tracker, Decision Authority Matrix | Personally reviewing every app, writing every email |
| **CoS** | Assessment Rubrics, Project Plan, Onboarding Packets, Escalation & SLAs | Personally managing the recruiter and hiring process |
| **Recruiter** | Evaluation Matrix, Screening Guide, Outreach Scripts, Score Thresholds | Personally sourcing, cold emailing, screening 50+ candidates |
| **Operator** | Complete ODD, Onboarding Checklist, Start Here Complete, Milestone Framework | Personally running ads, managing Shopify, emailing customers |

### 2.7 Escalation Architecture

| Role | Trigger | Escalates To | SLA |
|------|---------|-------------|-----|
| VA | Borderline candidate (unclear if qualified) | Nilo | 24 hrs |
| VA | Zero qualified candidates after 1 week | Nilo | Same day |
| VA | Candidate asks about comp/equity details | Nilo | Same day |
| CoS | No recruiter hired after 2 weeks | Nilo | Same day |
| CoS | Recruiter underperforming | Nilo | 48 hrs |
| CoS | Operator finalist ready for approval | Nilo | Same day |
| Recruiter | Borderline candidate (score 7-8) | CoS | 24 hrs |
| Recruiter | Exceptional candidate (score 9+) | CoS | Same day |
| Recruiter | Competing offer on finalist | CoS → Nilo | 4 hrs |
| Operator | Spend over $500 | Studio | 24 hrs |
| Operator | Strategic/brand decision | Studio | 48 hrs |
| Operator | Urgent (supplier issue, PR, legal) | Studio | 4 hrs |
| CM | Operator grade drops to CCC or below | Studio | Same day |
| CM | Suspected fraud or misrepresentation | Studio | Immediate |

---

## 3. Overdetermined Coordination

Most coordination fails because it relies on ONE mechanism (just money, just culture, just process, just authority). Single mechanisms fail under pressure.

**Overdetermined Coordination** = Stack multiple mechanisms so coordination happens even when some mechanisms fail. Like redundant systems in engineering — if the primary fails, the backup kicks in.

### 3.1 Coordination Mechanisms

| Mechanism | How It Works | When It Fails | Strength |
|-----------|-------------|---------------|----------|
| Financial Incentive | Pay for outcomes | Money stops motivating | Strong short-term |
| Equity/Ownership | Skin in the game | Exit seems unlikely | Strong long-term |
| Reputation | Public accountability | No one watching | Social contexts |
| Relationship | Personal loyalty | Relationship breaks | High trust contexts |
| Process/System | Forced workflow | People route around | Routine tasks |
| Authority | Command structure | Authority loses legitimacy | Clear hierarchy |
| Culture | Shared values | Culture dilutes | Stable teams |
| Mission | Belief in cause | Mission feels hollow | True believers |
| Learning | Growth opportunity | Learning plateaus | Growth-oriented |
| Transparency | Everything visible | Gaming metrics | Trust environments |

### 3.2 Overdetermination Formula

For critical coordination, stack 3+ mechanisms:

**Example — Operator Coordination:**
1. Layer 1: **Equity** (long-term skin in game)
2. Layer 2: **Milestone bonuses** (short-term incentive)
3. Layer 3: **Public reporting** (reputation)
4. Layer 4: **Daily standups** (process)
5. Layer 5: **CM oversight** (authority)

If equity doesn't motivate → bonuses do. If bonuses don't motivate → reputation does. If reputation doesn't motivate → process catches it. If process misses it → CM catches it. **Result: Coordination happens no matter what.**

### 3.3 Overdetermination by Role

| Role | Primary | Secondary | Tertiary | Backstop |
|------|---------|-----------|----------|----------|
| **Operator** | Equity | Milestone bonus | Public dashboard | CM oversight |
| **CM** | Fee | Reputation | Process | Trustee oversight |
| **Studio** | Carry | Reputation | LP reporting | Trustee authority |
| **Supplier** | Contract | Relationship | Escrow | Legal recourse |
| **Chief of Staff** (U27) | Cash + equity | Milestone bonuses | Nilo weekly sync | Performance review |
| **Recruiter** (U27) | Retainer | Success fee | Weekly pipeline updates | CoS oversight + replacement clause |
| **Creator (UGC)** | Payment | Portfolio building | Relationship | Contract |

### 3.4 Anti-Pattern: Underdetermined Coordination

Signs you're underdetermined:
- "We trust them" (relationship only)
- "The contract is clear" (legal only)
- "They're incentivized" (money only)
- "It's in the process" (system only)

> Red flag: If you can describe coordination in one sentence, it's probably underdetermined.

When the one mechanism fails, coordination collapses. For each critical coordination point: list all mechanisms, ask "What if this fails?" for each, add backups until 3+ mechanisms cover each failure mode.

Where to overdetermine:
- High-stakes decisions
- Long time horizons
- Hard-to-monitor activities
- Key person dependencies

---

## 4. Cross-TUP Alignment

| TUP | Alignment Point |
|-----|----------------|
| M0 (Trade Thesis) | Initial conditions engineering — M1 implements M0's vision of "build the machine before hiring the operator" |
| M24 (Fulfillment) | Operator's daily execution includes 3PL management, fulfillment monitoring (per M24 phase-gated model) |
| M25 (COGS & Finance) | Operator spend authority ($500 green line) must align with M25 budget categories |
| M30 (KPI Framework) | Operator performance surface links to M30 MER/CAC monitoring system |
| M9 (Ecommerce Infra) | Operator toolkit (§150) references Shopify, Klaviyo, Meta — per M9 tech stack |
| M35 (Execution Plans) | 12-week sprint milestones (Table Set → First Blood → Winner Found) map to M35 execution sequences |
| M31 (Hiring) | Recruiter and CoS onboarding checklists feed into M31's broader hiring framework |
