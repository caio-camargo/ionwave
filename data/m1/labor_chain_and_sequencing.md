# Labor Chain & Sequencing

**TUP**: M1 — Labor Chain & Deployment
**Sources**: Tabs 145 (Labor Sequencing Framework), 146 (Studio 4 Taxonomy)
**Cross-TUP**: M0 (Trade Thesis), M35 (Execution Plans), M36 (Operational Infra)
**Cross-Package**: `data/rollout/chain_specification.md` — Recruiting cascade (VA → MBA → VP → Operator). Related but different from M1 employment chain: M1 describes post-hire employment hierarchy (L0-L5), rollout describes pre-hire recruiting cascade that converges at the Operator (L4).

---

## 1. Labor Sequencing — The Core Concept

Labor sequencing is the deliberate insertion of abstraction layers between the principal (founder) and the executing agent (operator). Each layer multiplies leverage and embeds judgment into systems.

**Traditional**: Founder → Operator → Business
**Sequenced**: Founder → VA → Chief of Staff → Recruiter → Operator → Business

Why this works:
- Founder's judgment is encoded once, applied consistently across all candidate interactions
- Each layer specializes: CoS manages process, Recruiter sources/screens, Operator executes
- Failure at any layer is contained — CoS can replace Recruiter, Recruiter finds another Operator
- Founder's time stays on highest-leverage activity: designing initial conditions

### The Sequence

| Layer | Role | Responsibility | Comp Model | Time to Hire |
|-------|------|---------------|-----------|-------------|
| L0 | **Founder** | Set initial conditions, design systems, capital | Majority equity | — |
| L1 | **VA** | Screen CoS candidates, schedule, admin | $500-800/mo cash | Immediate (outsource) |
| L2 | **Chief of Staff** | Manage hiring process, operational oversight | $3-5K/mo + 1-3% equity | 1-2 weeks |
| L3 | **Recruiter** | Source, screen, present Operator candidates | $2K retainer + $3K success | 1-2 weeks |
| L4 | **Operator** | Execute the ODD, run the business | $4K/mo + 15% equity | 3-4 weeks |
| L5 | **Specialists** | Media buyer, retention, creative (if unbundled) | Market rate | As needed |

### Total Time: Founder to Operator Executing = 8-12 Weeks

- Weeks 1-2: VA screens and hires CoS
- Weeks 2-4: CoS onboards, hires Recruiter
- Weeks 4-8: Recruiter sources and screens Operator candidates
- Weeks 8-10: Operator finalist selection, offer, acceptance
- Weeks 10-12: Operator onboarding (3-week reading plan per §152)

### When to Use Full Sequence (L0-L4)

- The role is critical (operator, first hires)
- Founder's time is constrained
- You have documented systems to hand off
- The cost of a bad hire is high

### When to Skip Layers

- Role is low-stakes (can easily replace)
- Founder has bandwidth
- No documented process exists yet (would just be delegating chaos)

### Anti-Patterns

- **Sequencing without documentation** — you're just adding overhead
- **Sequencing for ego** — "I have a CoS" as status symbol
- **Too many layers** — each layer adds latency and potential miscommunication
- **Wrong layer for wrong task** — don't have CoS do Recruiter's job
- **Skipping calibration** — first few hires, founder should be in the loop to tune the system

---

## 2. Studio 4 Taxonomy

Proprietary vocabulary — shared definitions for how the Studio operates. Every person in the chain must share this language.

### 2.1 Core Concepts

| Term | Definition | Example |
|------|-----------|---------|
| **ODD** (Operational Definition of Done) | A complete operational blueprint that makes a business runnable by anyone. Not a plan — a system. | The 630+ tab IonWave ops model |
| **Proprietary Tab** | A unit of operational knowledge that didn't exist before, codified in reusable format. IP in spreadsheet form. | The Labor Sequencing Framework |
| **Initial Conditions Engineering** | Deliberate design of starting parameters to maximize probability of downstream success. Most leverage is here. | Building the ODD before hiring the Operator |
| **Labor Sequencing** | Hiring people to hire people. Adding abstraction layers to multiply founder leverage. | Founder → CoS → Recruiter → Operator |
| **Overdetermined Coordination** | Stacking 3+ alignment mechanisms so coordination survives single-point failures. | Equity + bonuses + CM monitoring + escalation triggers |
| **Computational PMF** | Measuring product-market fit with data signals, not intuition. PMF as information integration. | Scoring 10 PMF signals, threshold = 65/100 |
| **Role Engineering** | Designing the role before finding the person. Separating role failure from talent failure. | Operator Scorecard defines the role; then we find who fits |
| **Trustee Framework** | Fiduciary-grade oversight for portfolio ventures. Higher than advisor, different than board. | CM reports to Trustee on compliance grades |
| **Coordination Debt** | Accumulated misalignment that compounds over time. Like tech debt, but for people/process. | Unclear decision authority causing repeated conflicts |
| **TUP** (Trade Unit Portfolio) | A single venture within the Trade holding structure. One business, one P&L, one operator. | IonWave is a TUP within Studio 4 |

### 2.2 Operational Terms

| Term | Definition | Example |
|------|-----------|---------|
| **Table Set** | Launch readiness. Site live, product ready, ads ready to run. | Week 4 milestone |
| **First Blood** | First real traction. 100 customers, CAC under control. | Week 8 milestone, triggers $5K bonus |
| **Winner Found** | PMF signals confirmed. Repeatable acquisition, positive unit economics. | Week 12 milestone, triggers salary increase |
| **Sprint** | Initial 12-week execution phase. High intensity, daily accountability. | Operator Sprint phase |
| **CM** (Compliance Manager) | Daily standards enforcement across operators. | Reviews daily reports, grades monthly |
| **Escalation Trigger** | Predefined condition that automatically escalates to next authority level. | Grade drops to CCC → escalate to Studio |
| **Decision Authority Matrix** | Document specifying who can decide what, at what thresholds. | Operator can spend up to $500 without approval |
| **Beauty Score** | Qualitative grade for brand/creative quality. Separate from performance metrics. | A+ = exceptional, B = acceptable, C = needs work |

### 2.3 Organizational Framework Terms

| Term | Definition | Example |
|------|-----------|---------|
| **School Model** | Company runs as a school: 6 programs, 12-week semesters, curricula of TUPs, grades. | Dean = Operator, Registrar = CoS, Accreditation = CM |
| **Program** | One of 6 functional areas (Acquisition, Conversion, Retention, Product, Operations, Finance). Each has dean, curriculum, grades. | Acquisition Program: VSL TUP, Hook Testing, Ad Scaling |
| **Semester** | 12-week time-boxed execution period. Enrollment → Execution → Midterm → Finals → Grades. | Semester 1 = Genesis: Table Set → First Blood |
| **Graduation** | When a business can run independently. Trade Grade A sustained 2 semesters. | $100K MRR, positive margin, Operator independent |

**Correction (2026 research):** Danilo's Tab 151 references a "7-week sprint." The industry standard for venture studio sprints is 12 weeks (90 days). The 7-week reference likely refers to the initial setup sprint before paid traffic, not the full execution sprint. All M1 content standardized to 12-week sprint model.

---

## 3. Franchise Parallel — The ODD as Operations Manual

Research into franchise delegation systems (McDonald's, Chick-fil-A) reveals direct parallels to the ODD concept:

| Franchise Element | Studio 4 Equivalent |
|------------------|-------------------|
| Operations Manual ("the bible") | Operational Definition of Done (ODD) — 630+ tabs |
| Franchisee Training (12-18 months at McDonald's) | Operator Onboarding (3-week reading plan + 12-week sprint) |
| Station-by-Station SOPs | Tab-by-tab TUP content |
| Mystery Shopper / Field Audits | CM daily review + monthly grading |
| Franchise Scorecard | Operator Performance Surface (§2.3 in role_engineering) |

Key insight: Franchises with well-designed operations manuals have ~10% failure rate vs ~60% for independent businesses. The ODD is our operations manual.

**Military parallel** — Mission Command doctrine:
- 5-paragraph order: Situation, Mission, Execution, Sustainment, Command & Control
- Commander's Intent defines "what" and "why"; subordinates devise "how"
- Confirmation briefs ensure alignment before autonomous execution
- Studio 4 equivalent: Operator gets the ODD (intent) + Decision Authority Matrix (boundaries) + Performance Surface (success criteria) → executes autonomously within constraints

---

## 4. Cross-TUP References

| TUP | Alignment |
|-----|-----------|
| M0 | Trade Thesis — the initial conditions that the entire labor chain is designed to execute |
| M9 | Ecommerce Infra — defines the tech stack the Operator will manage (Shopify, Klaviyo, Meta) |
| M25 | COGS & Finance — Operator spend authority thresholds must map to M25 budget lines |
| M30 | KPI Framework — Operator performance metrics (MER, CAC, churn) from M30 system |
| M31 | Hiring — broader hiring framework that M1 labor chain feeds into |
| M35 | Execution Plans — 12-week sprint sequences that Operator follows |
| M36 | Operational Infra — the systems architecture the Operator operates within |
