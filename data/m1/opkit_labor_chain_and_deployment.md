# OpKit: Labor Chain & Deployment (OK-M1-001)

**Version**: 1.0.0
**Source TUP**: M1 — Labor Chain & Deployment
**Quality Grade**: 8.6/10
**Protocol**: TWP-001 v2.0.0

---

## 1. Purpose

This OpKit provides a reusable framework for deploying labor chains in venture studio, franchise, or delegation-heavy business models. It covers: role engineering (designing roles before filling them), labor sequencing (hiring people to hire people), overdetermined coordination (stacking alignment mechanisms), operator onboarding/certification, compliance monitoring, and governance (Trustee framework).

## 2. Instructions (13 Steps)

### Phase 1: Foundation (Week 0)

**Step 1: Define your delegation depth map**
- List every role from founder (D0) to terminal executor (Dn)
- For each role: what judgment does it encode? What documents carry that judgment?
- Rule: never add depth without documentation for that layer

**Step 2: Engineer each role across 7 dimensions**
- Delegation Depth: where in the chain
- Decision Authority: green/yellow/red matrix
- Performance Surface: win condition, milestones, kill criteria
- Compensation Architecture: each component aligned to a behavior
- Interface Map: who, how, how often
- Fidelity Mechanisms: documents that encode judgment
- Escalation Architecture: triggers, paths, SLAs

**Step 3: Design overdetermined coordination for each role**
- Stack 3+ mechanisms per critical role (financial, equity, reputation, process, authority)
- Test: "if mechanism X fails, what catches it?"
- If the answer is "nothing," add a backup

### Phase 2: Hiring Infrastructure (Weeks 1-2)

**Step 4: Build role-specific onboarding packets**
- Each role gets: required reading list, workspace setup checklist, assessment gates
- Required reading should be minimal (11 tabs for Recruiter, not 630+)
- Each module ends with a skills check before the next unlocks

**Step 5: Build the contract template library**
- Operator agreement (equity, vesting, performance, termination, IP)
- Contractor agreement (scope, payment, IP assignment — NOT work-for-hire)
- Supplier, advisor, SAFE templates as needed
- CRITICAL: consult employment attorney for classification and equity structure

**Step 6: Establish compliance monitoring**
- Define CM role: daily review cadence, grading rubric (10 grades, AAA-D)
- Set CM capacity limit (8-10 operators max per CM)
- CM reports to Trustee/Studio directly — NEVER through operational chain

### Phase 3: Deployment (Weeks 2-8)

**Step 7: Execute the labor sequence**
- L0 (Founder) → L1 (VA/Admin) → L2 (CoS/PM) → L3 (Recruiter) → L4 (Operator)
- Each layer validates before the next is added
- Founder stays in loop for first hire at each depth

**Step 8: Onboard the operator**
- 3-week structured reading plan with weekly assessment gates
- Platform access provisioning (Day 1)
- Certification checklist with documented standards per item
- Onboarding complete = all gates passed + first weekly report submitted

### Phase 4: Execution (Weeks 8-20)

**Step 9: Launch the sprint**
- 12-week sprint: Table Set (W4) → First Blood (W8) → Winner Found (W12)
- Daily standups, weekly reports, monthly formal CM grade
- Root-cause attribution before any kill criteria trigger termination

**Step 10: Monitor via overdetermined coordination**
- Financial incentives (bonuses at milestones)
- Equity alignment (long-term skin in game)
- Process enforcement (daily standups, weekly reports)
- Authority backstop (CM grading, Trustee oversight)

### Phase 5: Governance (Ongoing)

**Step 11: Trustee oversight**
- Monthly: review CM grades, financial reports, risk register
- Quarterly: LP reporting
- Authority matrix: pause ad spend, pause operations, replace operator, wind down
- CRITICAL: Trustee authority must derive from operating/LP agreement, not just internal docs

**Step 12: Handle exits**
- Offboarding protocol: access revocation (24 hours), knowledge transfer (5 days), relationship handoff, equity determination
- Root-cause attribution: operator execution, system failure, or force majeure
- Contact registry ownership transfer

**Step 13: Iterate the system**
- Post-sprint retrospective: what worked, what broke, what's the system fix?
- Update role engineering dimensions based on actual performance data
- Strengthen weak coordination mechanisms identified during operations

## 3. Grading Rubric

| Grade | Criteria |
|-------|---------|
| **A (9-10)** | All 7 role dimensions specified. Overdetermined coordination (3+ mechanisms) for all critical roles. Attorney-reviewed contracts. CM grading active. Trustee appointed with legal authority. Offboarding protocol tested. |
| **B (7-8.9)** | Most dimensions specified. Contracts drafted but not fully attorney-reviewed. CM active. Trustee framework designed but not legally formalized. Onboarding has assessment gates. |
| **C (5-6.9)** | Core roles defined. Basic contracts in place. Comp structure designed. Missing: CM grading rubric, Trustee authority, overdetermined coordination for all roles, or offboarding protocol. |
| **D (3-4.9)** | Roles partially defined. Contracts are templates only. No CM system. No Trustee. Missing multiple dimensions per role. |
| **F (<3)** | "We'll figure it out as we go." No role engineering, no documentation, delegation without documentation (= abdication). |

## 4. Scaffold (5 Files)

1. `role_engineering_and_coordination.md` — 7 dimensions framework + overdetermined coordination
2. `labor_chain_and_sequencing.md` — Deployment sequence + taxonomy
3. `operator_system.md` — Operator comp, certification, onboarding, contract, offboarding
4. `hiring_and_onboarding.md` — Non-operator roles (Recruiter, CM, Trustee) + contract templates
5. `relationships_and_compensation.md` — CRM-as-ops-model + comp architecture + budget

## 5. IonWave Graded Example

**Grade: 8.6/10 (B+)**

Strengths:
- All 7 role dimensions specified for 5 roles (VA, CoS, Recruiter, Operator, CM)
- Overdetermined coordination designed for all critical roles (4+ mechanisms each)
- Comprehensive legal risk analysis (misclassification, equity instrument, IP assignment)
- Expert dialogue produced 34 upgrades, 24 applied (5 critical)
- Market reality checks on all compensation figures
- Offboarding protocol with access revocation, knowledge transfer, equity determination

Gaps (-1.4):
- Attorney review not yet completed (-0.5) — misclassification mitigation and equity docs need formal legal review
- CM grading rubric specified but not tested on live data (-0.3)
- Multi-operator scaling only noted, not fully architected (-0.3)
- Some Medium-priority dialogue upgrades (10/34) noted but not applied (-0.3)

## 6. Adaptation Guide

### For Non-Studio Businesses (Solo Founder + First Hire)

- Skip L1-L3 (VA, CoS, Recruiter) — founder hires directly
- Keep role engineering (7 dimensions) — it's even more important with fewer hires
- Simplify to 3 dimensions minimum: Decision Authority, Performance Surface, Compensation
- Skip Trustee framework (no investors to protect)
- Keep offboarding protocol — messy exits hurt small companies more

### For Franchise Systems

- Map 7 dimensions to franchise operations manual
- Replace "Operator" with "Franchisee"
- Replace "CM" with "Field Consultant"
- Overdetermined coordination maps directly to franchise compliance systems
- Add territory management (not covered in IonWave single-venture model)

### For Service Businesses (Agency / Consultancy)

- Replace Operator equity with profit-sharing or revenue share
- Replace ODD with client playbooks / SOPs
- CM equivalent: Client Success Manager reviewing project delivery
- Adjust milestones from MRR to client retention rate or revenue per client

### For High-Growth Startups (Funded, Building Team)

- Full role engineering for first 5-10 hires
- Overdetermined coordination for all equity holders
- Trustee framework maps to board of directors governance
- Attorney review of equity, IP, and classification is non-negotiable at this stage

## 7. Universal Principles

1. **Design the role before you find the person** — Role Engineering prevents the most common hiring mistake
2. **Delegation without documentation is abdication** — Every layer needs encoded judgment
3. **Stack 3+ coordination mechanisms** — Single mechanisms fail under pressure
4. **Separate role failure from talent failure** — Diagnose before you blame
5. **The JD is output, not input** — Seven dimensions first, job description last
6. **Below-market cash requires above-market equity** — The operator must believe in the equity story
7. **CM independence is structural, not cultural** — Never route compliance through incentivized roles
8. **Offboarding matters as much as onboarding** — Plan for exits before they happen
