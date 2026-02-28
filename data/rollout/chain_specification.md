# Recruiting Cascade: Chain Specification

**Version**: 1.0.0
**Date Created**: 2026-02-26
**Author**: Caio, Claude
**AI Model**: claude-sonnet-4-6
**Purpose**: Canonical definition of the IonWave rollout recruiting cascade
**Status**: Draft
**Source**: Danilo WhatsApp directives (2026-02-20), IonWave Rollout Narrative v0.5, M1 Labor Chain & Sequencing
**Related**: M1 (Labor Chain), M4 (Fundraising), M35 (Execution Plans), Contract Engineering framework

---

## 1. The Model

Danilo's rollout model is a **recruiting cascade** — each person's sole job is to find the next person in the chain. The chain unfolds from a single handoff. Nobody executes the business until the Operator is in place.

```
Danilo (Founder) ──handoff──> VA ──finds──> MBA Intern ──finds──> VP ──finds──> Operator
       L0                      L1             L2                    L3             L4
```

### Design Principles

1. **One-shot handoff**: Danilo hands the VA Package to a VA and steps out. He does not find the Producer, and does not find the person who finds the Producer.
2. **Each node has one job**: Find the next person. Not execute, not strategize, not fundraise. Find.
3. **The Trade is the pitch**: Each node passes the Trade (or a derivative) to the next. The Trade must be compelling enough to attract people at each level without founder involvement.
4. **Compliance via Claude**: A Claude agent actively monitors deliverables from each node, prompts when they're due, escalates when they're late.
5. **Minimal tooling**: The system runs on documents (TUP briefs + bilateral contracts) and a lightweight contract management tool.

### Relationship to M1 Labor Chain

M1 describes a similar but different chain: `Founder → VA → CoS → Recruiter → Operator → Specialists`. That chain is an **employment hierarchy** — each layer manages the next within the company. The recruiting cascade is different: each node's job is purely to **find** the next person, then hand off. The VA doesn't manage the MBA intern; the VA finds them and hands them the brief. The MBA intern doesn't manage the VP; they find them and hand them the Trade.

The two chains converge at the Operator level — M1's operator system (compensation, onboarding, certification, contract) applies once the Operator is found.

---

## 2. Chain Nodes

### L0: Danilo (Founder)

**Role**: Hand off the VA Package. Step out.

**What he gives the VA**:
- The VA Package (role brief, sourcing playbook, screening criteria, outreach templates, bilateral contract)
- The Trade Pitch One-Pager (1-page derivative of the Trade for sourcing conversations)
- Access to the compliance agent (Claude monitors VA deliverables)

**What he does NOT do**:
- Find the MBA intern
- Find the VP
- Find the Operator
- Recruit anyone into the chain through his personal network (explicitly: "I would rather NOT cheat with my network")

**Duration**: One-time handoff. Minutes to hours.

---

### L1: VA (Virtual Assistant)

**Job**: Find an MBA intern type.

**Profile**:
- VA-level capability: can follow instructions, do outreach, manage a pipeline
- No domain expertise required
- No understanding of marine plasma, D2C, or business operations needed
- Compensation: hourly or monthly retainer ($500-2000/mo range) [BUDGET TBD — requires Danilo decision]

**What they receive**:
- VA Package (see `va_package/`)
- Trade Pitch One-Pager
- Bilateral contract with deliverable schedule

**What they deliver**:
- Sourcing plan (Week 1)
- Weekly pipeline reports (every Friday)
- Candidate shortlist of 3+ MBA intern types (by Week 4, hard deadline Week 6)
- Final recommendation (1 week after shortlist)

**What they hand off to the MBA intern**:
- The MBA Brief (see `mba_brief/`)
- The Trade Pitch One-Pager
- Access to the full Trade (imagination passet) for context

**Duration**: 4-6 weeks to find the MBA intern.

**Failure mode**: Can't find a suitable MBA intern after 6 weeks. See fallback protocol (Section 4).

---

### L2: MBA Intern Type

**Job**: Find the VP.

**Profile**:
- More sophisticated than a VA — can evaluate people, understand a business model at a basic level, do structured outreach at a higher caliber
- MBA student, recent MBA grad, business development associate, or similar
- Can credibly pitch to a VP-level person
- Not a domain expert, but someone who can learn fast and sell well
- Compensation: [BUDGET TBD — stipend? equity? experience?] — **This is the weakest incentive link in the chain and must be defined before the VA can pitch the role.**

**What they receive**:
- MBA Brief (see `mba_brief/`)
- Full Trade access (imagination passet, data layer, Claude interface)
- Bilateral contract with deliverable schedule

**What they deliver**:
- VP sourcing plan (Week 1 after start)
- Weekly outreach reports (every Friday)
- VP candidate pipeline (minimum 5 qualified candidates screened)
- VP shortlist of 2-3 candidates (by Week 8, hard deadline Week 12)
- Final recommendation with evaluation evidence

**What they hand off to the VP**:
- The VP Brief (see `vp_brief/`)
- The full Trade
- The integration requirements document

**Duration**: 4-12 weeks to find the VP. This is the hardest and slowest link.

**Failure mode**: Can't find a VP-caliber person after 12 weeks. See fallback protocol (Section 4).

---

### L3: VP (Deals / Capital Formation)

**Job**: Two parallel tracks:
1. Capital Formation — fundraise, build advisor network, run the "20 calls → 500 calls" methodology
2. Find the Operator — recruit the person who will run the business

**Profile**:
- Actor function: credibility, deal-making, network
- Can pitch the Trade to investors, advisors, and operator candidates
- Has domain-relevant network (D2C, CPG, supplement industry, or startup ecosystem)
- Compensation: significant equity (5-10%?) + possible retainer [BUDGET TBD — requires careful design; this is the pitch that makes or breaks VP recruitment]

**What they receive**:
- VP Brief (see `vp_brief/`)
- Full Trade access
- M4 fundraising playbook
- Integration requirements (must demonstrate Trade knowledge before proceeding)
- Bilateral contract with deliverable schedule

**What they deliver**:
- Integration work artifact (condensed Trade narrative in their own words — forcing function)
- Capital Formation pipeline (investor/advisor outreach log)
- Operator sourcing plan
- Operator candidate shortlist (2-3 candidates)
- Operator recommendation with evaluation evidence

**What they hand off to the Operator**:
- The full Trade (imagination passet)
- M1 operator system docs (compensation, contract, onboarding plan)
- The implementation passet structure
- Access to Claude as daily co-pilot

**Duration**: 2-6 weeks to find the Operator (parallel with Capital Formation, which is ongoing).

**Failure mode**: VP can't find suitable Operator. See fallback protocol (Section 4).

---

### L4: Operator

**Job**: Execute the Trade. Run the business.

**Profile**: Per M1 operator_system.md — full operational ownership.

**Onboarding**: M1's 3-week reading plan + certification checklist + calibration session.

**Compensation**: $4K/mo base + 15% equity (4yr vest, 1yr cliff) + milestone bonuses. Full detail in M1.

**Duration**: Ongoing. 12-week initial sprint, then continuous operations.

---

## 3. Timeline

### Sequential Chain (Conservative Estimate)

| Phase | Duration | Cumulative | What happens |
|-------|----------|-----------|--------------|
| Danilo → VA handoff | 1 day | Day 1 | VA receives package |
| VA finds MBA intern | 4-6 weeks | Weeks 1-6 | Sourcing, screening, recommendation |
| MBA intern finds VP | 4-12 weeks | Weeks 5-18 | Outreach, screening, pitch, negotiation |
| VP finds Operator | 2-6 weeks | Weeks 7-24 | Sourcing, evaluation, offer, acceptance |
| Operator onboards | 3 weeks | Weeks 10-27 | M1 reading plan + certification |
| Execution to Day 90 | 12 weeks | Weeks 13-39 | ICL-0 through Day 90 Gate |

**Total: 6-9 months from handoff to Day 90 Gate.**

### Parallelization Opportunities

[DECISION TBD — Can links overlap? If so:]
- VA continues screening while first MBA intern starts (fallback candidate in pipeline)
- MBA intern could begin VP sourcing before formal start if eager
- VP could start Capital Formation while still searching for Operator

Parallelization could compress the 6-9 month timeline to 4-6 months but introduces coordination complexity.

---

## 4. Fallback Protocols

### If VA fails to find MBA intern (>6 weeks, no viable candidates)

| Option | Description | Tradeoff |
|--------|-------------|----------|
| Replace VA | New VA, same process | +4-6 weeks, same model |
| Expand search criteria | Loosen MBA requirement — look at business dev, project management, hustlers | Faster but lower caliber |
| Danilo direct | Danilo identifies MBA intern from network | Breaks one-shot model |

### If MBA intern fails to find VP (>12 weeks, no viable candidates)

| Option | Description | Tradeoff |
|--------|-------------|----------|
| Replace MBA intern | New intern, same process | +4-12 weeks |
| Pivot chain model | Skip VP, MBA intern finds Operator directly | Removes Capital Formation function |
| Danilo introduces VP | From his network (explicitly: "I know who the VP would be") | Breaks one-shot model — but Danilo acknowledged he has someone |
| Pause the chain | Reassess whether the recruiting cascade model works for IonWave | May conclude IonWave needs a different approach |

**Flag**: Danilo said "I know who the VP would be, but I would rather NOT cheat with my network." This is the emergency valve if the chain breaks at the hardest link.

### If VP fails to find Operator (>6 weeks, no viable candidates)

| Option | Description | Tradeoff |
|--------|-------------|----------|
| Expand search | VP broadens sourcing channels | +2-4 weeks |
| Danilo refers | Founder provides warm intro | Minimal model violation (VP still makes final call) |
| VP operates | VP takes on operator role temporarily while continuing search | VP becomes stretched across two functions |

---

## 5. Quality Checks at Each Handoff

Every handoff in the chain has a quality gate — the compliance agent verifies before the next node activates.

| Handoff | Quality Gate | Who evaluates | Pass criteria |
|---------|-------------|---------------|---------------|
| VA → MBA intern | MBA intern candidate meets screening criteria | Claude (format/completeness) + [DECISION TBD: human final approval?] | Scored on all rubric dimensions, minimum threshold met |
| MBA intern → VP | VP candidate meets profile + shows genuine interest | Claude (format) + MBA intern (judgment) + [DECISION TBD: does anyone else approve?] | Profile match, willingness confirmed, comp terms aligned |
| VP → Operator | Operator meets M1 certification checklist | VP (primary) + Claude (format) + calibration session with Danilo [if in scope] | Per M1 operator certification (Section 2) |

### The Approval Problem

[OPEN QUESTION]: Who makes the final call at each handoff?

**Option A: Fully autonomous chain** — each node decides autonomously. VA picks the MBA intern. MBA intern picks the VP. VP picks the Operator. No external approval.
- Pro: True one-shot. Danilo is completely out.
- Con: Quality degradation risk. The VA picking an MBA intern is a judgment call about business sophistication — can a VA make that call well?

**Option B: Claude-assisted autonomy** — Claude evaluates deliverables against spec, flags concerns, but each node has decision authority.
- Pro: Quality backstop without human bottleneck.
- Con: Claude can check format but not judgment quality (see compliance agent spec).

**Option C: Caio as backstop** — Caio reviews finalists at each handoff (light touch: 30 min review, approve/reject).
- Pro: Maintains quality. Caio has context.
- Con: Adds a dependency. Caio becomes a bottleneck if unavailable.

**Option D: Binary gate at VP level only** — VA and MBA intern handoffs are autonomous. VP-to-Operator handoff has a calibration session (per Rollout Narrative).
- Pro: Lightweight intervention where it matters most.
- Con: Lower-quality nodes may pass undetected.

[DECISION TBD — surface to Danilo]

---

## 6. Incentive Architecture

| Node | Cash | Equity | Other | Compelling? |
|------|------|--------|-------|-------------|
| VA | $500-2000/mo | None | Standard contractor work | Yes — this is a normal VA job |
| MBA intern | [TBD] | [TBD] | Resume line, network access, potential equity | **Weakest link** — needs definition |
| VP | [TBD] retainer | 5-10% [TBD] | Deal flow, advisor network, upside | Depends on Trade quality and equity offer |
| Operator | $4K/mo | 15% (4yr/1yr) | Bonuses at milestones | Per M1 — designed for conviction |

### MBA Intern Incentive Gap

This is the most important unsolved problem in the chain. The MBA intern needs enough motivation to spend 4-12 weeks doing high-quality VP recruiting. Options:

1. **Paid stipend** ($1-3K/mo) — straightforward but costs money pre-revenue
2. **Equity** (0.5-2%) — meaningful but complex pre-revenue (valuation unclear, legal costs)
3. **Experience + credit** — MBA capstone project, resume builder, Danilo's network as value
4. **Success bonus** ($3-5K upon VP signing) — performance-aligned but deferred
5. **Hybrid** — small stipend + success bonus

[BUDGET DECISION REQUIRED before VA can pitch the MBA role]

---

## 7. The Trade as Pitch Mechanism

Danilo's thesis: the Trade itself must be the mechanism by which people enter the chain. The pitch at each level:

| Level | What they see | Why they say yes |
|-------|--------------|-----------------|
| VA | VA Package + Trade Pitch One-Pager | It's a normal VA job with clear deliverables. Money. |
| MBA intern | MBA Brief + Trade Pitch One-Pager + Trade overview | Compelling business opportunity + resume/network value + compensation |
| VP | Full Trade + M4 pitch deck + Capital Formation methodology | Equity upside in a well-structured business with clear execution path |
| Operator | Full Trade + M1 operator system + implementation passet | 15% equity in a de-risked venture with complete operating manual |

The pitch strengthens at each level: VA gets a simple job, MBA intern gets an opportunity, VP gets a real stake, Operator gets a business.

---

## 8. Risk Analysis: Signal Degradation Through the Chain

### The Franchise Manual Analogy

Danilo compares the Trade to a franchise manual — a document comprehensive enough that operators implement it faithfully without founder involvement. The analogy is instructive but requires honest examination.

**Where the analogy holds:**
- The Trade *is* comprehensive. 41 TUPs covering every operational domain, quality-scored, confidence-graded, with kill criteria and phase gates. This is not a pitch deck or a napkin sketch.
- Franchise manuals do work. McDonald's, Subway, and thousands of franchise systems demonstrate that people can execute a system they didn't design, with high fidelity, when the manual is good enough.
- The compliance agent adds a structural layer that franchise systems also have — ongoing monitoring of whether the franchisee is following the playbook.

**Where the analogy breaks:**
1. **Franchise manuals are proven.** They encode a system that has already worked, usually hundreds of times. The IonWave Trade is a first edition — comprehensive in analysis but untested in execution. The manual may be wrong in ways that only execution reveals.
2. **Franchisees self-select with skin in the game.** A McDonald's franchisee invests $1-2M and chooses to buy in. The recruiting cascade asks people to *be found* by someone less qualified than them, then commit based on documents they haven't validated through their own experience.
3. **Franchise systems have brand pull.** People join McDonald's because of the brand. IonWave has no brand yet — the Trade itself must do all the persuading. This is a higher bar.
4. **The chain inverts normal selection hierarchy.** In a franchise system, the franchisor (the expert) selects the franchisee. In this cascade, each node selects the next node *above* their level of expertise: a VA selects an MBA intern, an MBA intern selects a VP. This is the most structurally unusual aspect of the model.

### The Recruitment Selection Problem

This is Caio's primary concern. The cascade requires people to identify and evaluate candidates who are more sophisticated than themselves.

| Handoff | Selector capability | Candidate capability | Gap |
|---------|-------------------|---------------------|-----|
| VA → MBA intern | Process execution, outreach, pipeline management | Business judgment, pitch quality, strategic thinking | **Moderate** — VA can assess responsiveness, professionalism, follow-through, but not business acumen |
| MBA intern → VP | Business comprehension, structured outreach, basic evaluation | Deal-making, network, credibility, industry expertise | **Large** — MBA intern can assess presentation and process, but evaluating VP-caliber judgment is hard |
| VP → Operator | Deal sense, network, business evaluation | Full operational capability, execution discipline, domain expertise | **Moderate** — VP has enough context to evaluate operational capability |

**Mitigations built into the system:**
- **Claude-as-workspace** provides a structural quality floor. Even if the selector can't evaluate judgment quality, Claude can verify process compliance, flag missing rubric dimensions, and detect patterns (e.g., all candidates rejected at next stage → selector may be screening poorly).
- **Screening rubrics** externalize evaluation criteria, reducing dependence on the selector's raw judgment. A VA following a rubric screens better than a VA relying on instinct.
- **Quality gates at handoffs** (Section 5) — the approval authority question (DEC-CHAIN-003) determines whether there's a human backstop at each transition.

**Mitigations that don't exist yet:**
- No mechanism to verify that a selector is *applying* the rubric honestly vs. checking boxes. Claude can verify format compliance but not intellectual honesty.
- No calibration step where Caio or Danilo validates the selector's judgment before they make final choices (unless DEC-CHAIN-003 resolves in favor of a backstop).
- No feedback loop from downstream nodes back to upstream selectors — if the VP turns out to be wrong for the role, the MBA intern has no mechanism to learn from this.

### Signal Loss at Each Handoff

Each handoff in the chain involves a compression of the Trade. The full imagination passet is 41 TUPs. At each level, a derivative is created:

| Level | What they receive | Trade compression |
|-------|------------------|-------------------|
| VA | Trade Pitch One-Pager + VA Package | ~5% of the Trade (enough to pitch, not to evaluate) |
| MBA intern | One-Pager + MBA Brief + full Trade access | ~100% available, but realistically absorbs 20-40% |
| VP | Full Trade + M4 + integration requirements | ~100% — but integration work artifact (DEL-VP-001) is the forcing function to verify absorption |
| Operator | Full Trade + M1 system + implementation passet | ~100% — 3-week onboarding + certification verifies absorption |

The VP integration requirement (writing a condensed Trade narrative in their own words) is the strongest anti-degradation mechanism in the chain. It forces the VP to prove they've absorbed the Trade before they can proceed.

The MBA intern has no equivalent forcing function. They receive full Trade access but their deliverables are about *finding* the VP, not *understanding* the Trade. This means the MBA intern may pitch the VP without deep Trade comprehension — relying on the One-Pager and their own interpretation.

### Honest Assessment

The cascade model is structurally elegant and operationally efficient. It minimizes founder involvement, creates clear accountability at each node, and embeds compliance into the work surface (Claude). These are genuine strengths.

The risks are:
1. **First-edition fragility.** The manual hasn't been tested. Errors compound through the chain.
2. **Inverted selection.** Less-capable people selecting more-capable people is unusual and introduces a quality risk that the rubrics and Claude mitigate but do not eliminate.
3. **MBA intern as the weakest structural link.** Least skin in the game (equity amount TBD, no cash at stake), tasked with the hardest sell (convincing a VP-caliber person), with the least structural verification of their Trade comprehension.
4. **Danilo's emergency valve is real.** He acknowledged he knows who the VP would be. If the MBA→VP link breaks, this valve exists — but using it means the one-shot model didn't hold for the hardest link.

These risks don't kill the model. They mean the model should be deployed with eyes open, with the compliance agent tuned to detect early signs of degradation (especially at the MBA→VP handoff), and with DEC-CHAIN-003 (approval authority) resolved before launch.

---

## 9. Cross-References

| Document | Relationship |
|----------|-------------|
| `data/m1/labor_chain_and_sequencing.md` | Original L0-L5 chain — reconcile with cascade model |
| `data/m1/operator_system.md` | Operator onboarding, compensation, certification — applies at L4 |
| `data/m4/` | Fundraising playbook — VP uses for Capital Formation |
| `data/m35/` | Execution plans — timeline context for the chain |
| `IonWave/IonWave_Rollout_Narrative.md` | Strategic framing for the handoff |
| `project_specs/CONTRACT_ENGINEERING.md` | Bilateral contract framework for all node contracts |
| `data/rollout/compliance/agent_specification.md` | How Claude monitors the chain |

---

## 10. Open Decisions

| ID | Decision | Options | Impact | Owner | Status |
|----|----------|---------|--------|-------|--------|
| DEC-CHAIN-001 | MBA intern compensation | ~~Stipend / equity / experience / hybrid~~ → **Equity** | Determines whether VA can pitch the role | Danilo | **RESOLVED** — Danilo: equity for everyone except VA. Amount TBD. |
| DEC-CHAIN-002 | VP equity + authority structure | 5%? 10%? Retainer? Board seat? → **Equity, amount TBD** | Determines whether MBA intern can pitch the VP | Danilo | **PARTIALLY RESOLVED** — equity confirmed, specific terms not yet defined |
| DEC-CHAIN-003 | Approval authority at handoffs | Fully autonomous / Claude-assisted / Caio backstop / VP-only gate | Determines quality control model. **Most critical open decision** — see Section 8 risk analysis. | Danilo + Caio | **OPEN** |
| DEC-CHAIN-004 | Chain parallelization | Sequential only / overlapping allowed | Affects timeline (4-6 vs 6-9 months) | Danilo | **OPEN** |
| DEC-CHAIN-005 | VA budget | Hourly vs retainer, amount | Immediate cost decision. VA is the only cash-out-of-pocket role. | Danilo | **OPEN** — confirmed cash compensation, amount TBD |
| DEC-CHAIN-006 | Fallback at MBA→VP link | Replace / pivot / Danilo introduces / pause | Determines what happens at hardest link | Danilo | **OPEN** |
| DEC-CHAIN-007 | Pre-entity equity instruments | SAFE / convertible note / promise letter / deferred grant | How to commit equity to MBA intern and VP before entity formation (no legal entity exists yet) | Danilo + legal | **NEW — OPEN** |

---

## Version History

**v1.0.0 (2026-02-26)**: Initial chain specification. Canonical cascade defined. 6 open decisions flagged. Reconciled with M1 labor chain. Fallback protocols for each link. Timeline estimated at 6-9 months (4-6 with parallelization).

**v1.1.0 (2026-02-27)**: Added Section 8 (Risk Analysis: Signal Degradation). Franchise manual analogy examined. Recruitment selection problem documented. Signal loss at each handoff analyzed. Updated DEC-CHAIN-001 (RESOLVED: equity), DEC-CHAIN-002 (PARTIALLY RESOLVED: equity, amount TBD), DEC-CHAIN-005 (confirmed cash). Added DEC-CHAIN-007 (pre-entity equity instruments). Renumbered Sections 8→9, 9→10.
