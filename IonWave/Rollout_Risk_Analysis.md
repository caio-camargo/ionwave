# IonWave Rollout Risk Analysis

**Version**: 1.0.0
**Author**: Caio, Claude (collaborative)
**Date Created**: 2026-03-01
**AI Model**: claude-opus-4-6
**Purpose**: Surface, categorize, and assess risks associated with the IonWave rollout as described in the Rollout Narrative v0.6.0
**Status**: Active
**Source Documents**: IonWave_Rollout_Narrative.md (v0.6.0), Hypotheses Registry (HYP-001 through HYP-016), chain_specification.md, Open_Questions.md

---

## Overview

This document analyzes risks that threaten the IonWave rollout. It is structured around the rollout phases described in the Rollout Narrative and organized by risk category. Each risk is linked to the relevant hypothesis (HYP-xxx) where applicable.

The rollout hypotheses (HYP-010 through HYP-016) were created alongside this analysis. They surface testable claims from the Rollout Narrative — primarily about whether the system, people, process, and infrastructure can work — as distinct from the unit economics hypotheses (HYP-001 through HYP-009) already in the registry.

**Risk severity scale:**
- **FATAL**: Could kill the Trade entirely. Requires immediate mitigation or pre-validation.
- **CRITICAL**: Could derail the rollout for months. Requires active management and contingency planning.
- **HIGH**: Could significantly delay or degrade execution. Requires monitoring and defined response.
- **MEDIUM**: Could cause inefficiency or suboptimal outcomes. Manageable with awareness.
- **LOW**: Background concern. Monitor but don't allocate significant attention.

---

## Risk Category 1: Single Points of Failure (SPOF)

### RISK-001: Danilo as SPOF for Strategic Functions
**Severity**: CRITICAL
**Phase**: All phases
**Hypotheses**: HYP-011, HYP-012, HYP-014

Danilo currently performs Producer, Casting, Strategic Direction, Calibration, and Capital Formation functions. His stated position is that the system should not require him — but for IonWave, he is the de facto Producer. If Danilo becomes unavailable (illness, competing priorities, loss of interest), multiple critical functions have no backup.

**Specific dependencies:**
- Calibration session: only Danilo can evaluate whether the operator truly understands the Trade (HYP-012)
- Capital Formation: Danilo's network and credibility currently drive deal conversations (HYP-014)
- Cascade approval: DEC-CHAIN-003 (approval authority at handoffs) likely requires Danilo
- Strategic direction: high-level decisions that aren't encoded in TUPs

**Mitigation:**
- Define calibration rubric explicitly so someone else could evaluate against it
- Document the implicit strategic reasoning that lives in Danilo's head but not in TUPs
- Identify whether Caio could backstop any of these functions (he's already noted for calibration)
- Accept that for IonWave, Danilo is a SPOF — design the system to learn enough from IonWave that Trade #2 is less dependent

**Residual risk**: HIGH. The system is designed to eliminate this dependency, but IonWave is the first Trade and the design is unproven.

---

### RISK-002: Caio as SPOF for Systems Engineering
**Severity**: HIGH
**Phase**: Pre-handoff and ongoing
**Hypotheses**: HYP-013

Caio is building the data infrastructure: APIs, dashboards, data pipelines, Claude agent deployments. The Rollout Narrative states the goal is that infrastructure *exists* at handoff, not that Caio remains available. But: the infrastructure is in early development, the readiness checklist doesn't exist, and unforeseen requirements will surface during execution.

**Specific dependencies:**
- API integrations (Shopify, Meta) — Caio is building these
- Dashboard data pipelines — Caio built and maintains the current dashboard
- Claude agent deployment — specialized knowledge
- OpenClaw evaluation — Caio is the evaluator

**Mitigation:**
- Write documentation to the standard that a competent technical person (not Caio specifically) could maintain the system
- Define minimum viable infrastructure vs. nice-to-have — don't try to build everything before handoff
- Build a process for handling unforeseen requirements (not just the initial infrastructure)
- Consider whether the operator needs a technical co-pilot or if the infrastructure can truly run unattended

**Residual risk**: MEDIUM. Documentation and pre-build can reduce this significantly, but some on-call may be necessary for IonWave.

---

## Risk Category 2: Cascade Recruitment

### RISK-003: Signal Degradation Through the Chain
**Severity**: CRITICAL
**Phase**: THE CASCADE
**Hypotheses**: HYP-010

The cascade asks less-capable people to select more-capable people at every node: VA → MBA intern → VP → Operator. Screening rubrics and Claude-as-workspace mitigate, but signal degradation is structural. The MBA intern is identified as the weakest structural link (equity-compensated, no domain expertise).

**Failure modes:**
1. VA selects wrong MBA intern → entire downstream chain compromised
2. MBA intern can't evaluate VP candidates → VP is underqualified
3. VP can't evaluate Operator candidates → Operator fails at calibration
4. Cumulative degradation: each node's errors compound

**Quantification attempt**: If each node has 70% probability of selecting correctly, the cascade's end-to-end probability is 0.7^3 ≈ 34%. At 80% per node: 0.8^3 ≈ 51%. At 90% per node: 0.9^3 ≈ 73%. The franchise-manual analogy (comprehensive materials compensate for selector capability) needs to push each node well above 80% for the cascade to be reliable.

**Mitigation:**
- Claude compliance agent monitors deliverables at each node
- Bilateral contracts with event-based accountability (TRIGGER → MONITORING → DEADLINE → FULFILLMENT → BREACH → CONSEQUENCE)
- DEC-CHAIN-003 (approval authority) provides a human quality gate at each transition
- Could add a "shadow evaluation" — Danilo or Caio reviews the selected candidate independently before the node completes

**Residual risk**: HIGH. Novel model, untested, multiplicative failure probability. First cascade will be a learning experience.

---

### RISK-004: Pre-Entity Equity Commitment
**Severity**: MEDIUM
**Phase**: THE CASCADE
**Hypotheses**: HYP-010
**Decision**: DEC-CHAIN-007

The cascade requires equity commitments to the MBA intern, VP (5-10%), and Operator (15%). But no entity exists yet — the C-Corp is formed during THE FOUNDATION phase, after the cascade is well underway. How to legally commit equity before entity formation is an unresolved legal question.

**Failure modes:**
1. Candidates refuse to start without legally binding equity commitment → cascade stalls
2. Informal equity promise creates legal liability or disputes later
3. Equity allocation exceeds what's available when entity is formed

**Mitigation:**
- Research pre-entity equity instruments (SAFEs, promise letters, vesting agreements)
- Consult with startup attorney before initiating cascade
- Define total equity budget across all cascade nodes before making any commitments
- Use vesting with cliffs to protect against non-performing nodes

**Residual risk**: MEDIUM. Legal mechanisms exist (SAFEs, restricted stock promises) but need to be selected and implemented.

---

### RISK-005: Cascade Timeline Extension
**Severity**: HIGH
**Phase**: THE CASCADE
**Hypotheses**: HYP-010, HYP-015

Each cascade node has a specified timeline: VA (4-6 weeks), MBA intern (8-14 weeks), VP (8-12 weeks). Total: 20-32 weeks (5-8 months). But timelines are estimates, not commitments. If any node takes 2x the specified time, the cascade extends by months.

**Compounding factors:**
- Recruiting in a niche market (marine plasma / DTC supplements) narrows candidate pools
- Each node must find someone willing to work for equity (except VA)
- Seasonal factors (holidays, summer) could affect availability
- Candidate evaluation takes time — rushing produces false positives

**Mitigation:**
- Define hard deadlines with consequences (built into bilateral contracts)
- Start parallel recruiting tracks if primary node is underperforming
- Danilo can intervene directly as backstop (violates one-shot but preserves timeline)
- Consider whether some cascade stages can overlap

**Residual risk**: MEDIUM-HIGH. Bilateral contracts provide accountability, but you can't force candidates to appear.

---

## Risk Category 3: Handoff and Integration

### RISK-006: Implicit Knowledge Gap
**Severity**: HIGH
**Phase**: THE HANDOFF
**Hypotheses**: HYP-011

The imagination passet is comprehensive but cannot capture everything in Danilo's head. Strategic reasoning, market intuitions, relationship context, lessons from failed approaches — some of this inevitably lives in the founder's tacit knowledge rather than in structured TUP data.

**Specific concerns:**
- The passet says *what* but may not always explain *why at sufficient depth*
- Market positioning nuances that informed pricing, naming, and creative direction
- Competitor intelligence that was observed but not formally documented
- Relationship context with potential advisors/investors/suppliers

**Mitigation:**
- Forcing functions in the integration process: the operator must rewrite the Trade narrative in their own words (reveals gaps), identify the three weakest assumptions (forces critical engagement), explain the Trade to an outsider (surfaces what's unclear)
- Record a "strategic reasoning" appendix — Danilo narrates the key decisions and why
- Accept that some implicit knowledge will surface only during execution — the operator will ask questions the passet doesn't answer
- Track every such moment for system learning

**Residual risk**: MEDIUM. Forcing functions and calibration together should catch major gaps. Minor gaps will surface and can be addressed in real-time for IonWave (less acceptable for future Trades).

---

### RISK-007: Calibration Session Quality
**Severity**: HIGH
**Phase**: THE HANDOFF
**Hypotheses**: HYP-012

The binary gate is the primary quality control mechanism, but the Rollout Narrative explicitly flags it as needing specification (Q14). Without a defined rubric, the calibration becomes a subjective judgment call — which may be fine when Danilo does it (he holds the whole context) but is not transferable to future Trades.

**Failure modes:**
- False positive: operator passes calibration but can't execute → months wasted, capital burned
- False negative: good operator rejected → cascade timeline extends, candidate pool shrinks
- Calibration becomes a formality rather than a genuine test → gate loses discriminative power

**Mitigation:**
- Danilo defines the rubric BEFORE the first candidate arrives (not during)
- Use VP's Three Models integration artifact as a lower-stakes rehearsal
- Record the first calibration session for system learning
- Define what "partial pass" means — can the operator start execution with additional calibration checkpoints?

**Residual risk**: MEDIUM. If Danilo defines the rubric clearly, the first calibration should work. It won't be optimal, but it will be better than undefined.

---

## Risk Category 4: Execution Phase

### RISK-008: Supplier Kill Scenario
**Severity**: FATAL
**Phase**: THE FOUNDATION
**Hypotheses**: HYP-016, HYP-004

The Rollout Narrative identifies supplier data as the most important data point in the entire rollout. Two fatal failure modes:

1. **CoA failure**: Heavy metals or contaminants above M7 Regulatory thresholds. Hard stop — cannot sell the product. Not a quality problem that can be iterated on; it's a compliance blocker.

2. **COGS kill**: If landed COGS exceeds $25-30/box, the conservative margin scenario (42% GM) materializes and the Trade may not be viable at $47-59 pricing. ISS-001 (margin dispute) makes this worse — even the target GM is contested.

**Why this is especially dangerous:** This data only arrives AFTER execution begins (supplier outreach in Week 1). If the cascade takes 6-9 months and then the supplier data kills the Trade, substantial time and equity have been invested with zero return.

**Mitigation:**
- **Pre-validate**: Contact suppliers BEFORE the cascade completes. Danilo, the MBA intern, or even the VA could do initial supplier outreach for indicative quotes and CoA samples. This doesn't require an entity.
- Define explicit kill criteria: CoA fails → hard stop. COGS >$30 → kill-or-pivot conversation. COGS $25-30 → proceed with revised pricing.
- Identify backup suppliers beyond the three named in the passet
- Consider whether a white-label or private-label approach changes the COGS equation

**Residual risk**: HIGH. Pre-validation can reduce timing risk but not the underlying supplier market risk.

---

### RISK-009: Capital Timing Mismatch
**Severity**: HIGH
**Phase**: THE CALLS + THE FOUNDATION overlap
**Hypotheses**: HYP-008, HYP-014

Capital Formation and execution are parallel tracks but deeply interdependent. The capital structure affects budget for inventory, ad spend runway, and equity implications for the executor. The Rollout Narrative surfaces this as Q13: "Is there a gate that says 'don't start execution until capital structure is decided'?"

**Failure modes:**
1. Executor starts before capital is secured → runs out of money at Month 3
2. Capital structure changes after executor is committed → equity/compensation renegotiation
3. Capital Formation takes longer than execution → executor is operating without clear budget

**Mitigation:**
- Define minimum capital threshold for execution start (e.g., $30K committed before operator begins)
- Staged capital approach (already in HYP-008): $30K initial, follow-on conditional on metrics
- Make capital structure a prerequisite for THE HANDOFF, not an open question during execution
- If bootstrapping is the path, make it explicit — don't pretend there's a raise coming if there isn't

**Residual risk**: MEDIUM. Staged approach mitigates the worst case, but ambiguity about capital structure can demoralize the executor and create decision paralysis.

---

### RISK-010: System Maintenance Void
**Severity**: MEDIUM
**Phase**: THE GRIND (ongoing)
**Hypotheses**: HYP-011

No one is clearly responsible for updating the Trade during execution. The Rollout Narrative's Q5 asks "How does System Maintenance work?" and identifies three possible layers: Caio (system infrastructure), someone (compliance monitoring), executor (operational learnings). How these layers interact is undefined.

Without system maintenance, the passet drifts from reality. Assumptions that were wrong aren't corrected. Learnings aren't logged. The data layer becomes stale. The Trade loses coherence.

**Mitigation:**
- Define system maintenance as an explicit function in the operator's responsibilities
- Create a lightweight protocol: what triggers an update, who approves it, how it's logged
- Claude agents can automate parts of this (flagging metrics that diverge from assumptions)
- Accept that for IonWave, system maintenance may be ad hoc — log the experience for future Trades

**Residual risk**: LOW-MEDIUM. This is important for system learning but unlikely to kill the Trade. The worst case is that the Trade remains static while reality evolves — suboptimal but not fatal.

---

## Risk Category 5: Systemic / Meta-Risks

### RISK-011: Claude Platform Dependency
**Severity**: MEDIUM
**Phase**: All phases
**Hypotheses**: HYP-013

The system relies heavily on Claude: as compliance monitor (cascade), as workspace (each node works in Claude), as executor's daily co-pilot, and as infrastructure component (Claude agents for automated monitoring). Model capability regression, API changes, pricing changes, or platform unavailability could disrupt operations.

**Specific dependencies:**
- Claude-as-workspace for cascade compliance
- Claude Code for executor's ongoing Trade interface
- Claude agents for daily data validation and parameter monitoring
- LLM legibility — structured data must remain legible across model versions

**Mitigation:**
- Design for LLM-agnostic operation where possible (already an architectural principle per CLAUDE_AS_OS_SYSTEM.md)
- Maintain structured data in formats (JSON, Markdown) that are model-independent
- Don't build critical paths that require a specific Claude capability — degrade gracefully
- Monitor Claude platform for changes that affect the system

**Residual risk**: LOW-MEDIUM. Claude is a tool, not a single point of failure. The structured data is model-independent. But cascade compliance monitoring is tightly coupled to Claude-as-workspace.

---

### RISK-012: First-Edition System Risk
**Severity**: MEDIUM (for IonWave); LOW (for the system long-term)
**Phase**: All phases
**Hypotheses**: All HYP-010 through HYP-016

IonWave is the first Trade deployed through this system. Every process, protocol, and assumption is being tested for the first time simultaneously. The system is designed to learn from this — "WHAT IONWAVE TEACHES THE SYSTEM" is an explicit section of the Rollout Narrative — but IonWave bears the full cost of being first.

**What this means practically:**
- Every timeline estimate is a guess, not a benchmark
- Every protocol will need revision after first use
- Some things that look good on paper will fail in execution
- The team will spend time debugging the system, not just executing the Trade

**Mitigation:**
- Set expectations: IonWave is a learning investment, not a pure execution play
- Budget time and capital for system debugging (don't assume everything works first try)
- Log EVERYTHING — the system's long-term value depends on what IonWave teaches it
- Don't optimize for IonWave's success at the expense of system learning (tempting but counterproductive)

**Residual risk**: MEDIUM. Inherent to first editions. Cannot be eliminated, only managed through expectations and logging.

---

## Risk Dependency Map

```
RISK-008 (Supplier Kill)
  └── Can kill Trade before it launches
  └── Pre-validation is the only mitigation
  └── Links to: HYP-016, HYP-004

RISK-003 (Signal Degradation) → RISK-007 (Calibration Quality)
  └── Bad cascade selection → bad operator reaches calibration
  └── If calibration is also weak → false positive = months wasted
  └── Links to: HYP-010, HYP-012

RISK-001 (Danilo SPOF) → RISK-006 (Implicit Knowledge)
  └── Danilo's unavailability means implicit knowledge is permanently lost
  └── System cannot recover what was never documented
  └── Links to: HYP-011, HYP-012, HYP-014

RISK-009 (Capital Timing) → RISK-005 (Cascade Timeline)
  └── Extended cascade = extended uncertainty about capital structure
  └── Executor may start without clear budget
  └── Links to: HYP-008, HYP-010, HYP-014

RISK-010 (Maintenance Void) → RISK-012 (First Edition)
  └── First edition will generate many learnings
  └── Without maintenance, learnings are lost
  └── System doesn't improve for Trade #2
  └── Links to: HYP-011
```

---

## Risk Priority Matrix

| Risk | Severity | Probability | Detectability | Priority | Pre-Mitigatable? |
|------|----------|-------------|---------------|----------|-------------------|
| RISK-008 (Supplier Kill) | FATAL | Medium | HIGH (data arrives early) | **1** | YES — contact suppliers now |
| RISK-003 (Signal Degradation) | CRITICAL | High | LOW (failure emerges late) | **2** | PARTIALLY — shadow evaluation |
| RISK-001 (Danilo SPOF) | CRITICAL | Medium | MEDIUM | **3** | PARTIALLY — document reasoning |
| RISK-009 (Capital Timing) | HIGH | High | MEDIUM | **4** | YES — define gate before execution |
| RISK-007 (Calibration Quality) | HIGH | Medium | LOW (first use = unknown) | **5** | YES — define rubric before candidate |
| RISK-005 (Cascade Timeline) | HIGH | Medium-High | HIGH (timeline is observable) | **6** | PARTIALLY — bilateral contracts |
| RISK-006 (Implicit Knowledge) | HIGH | High | LOW (gaps surface late) | **7** | YES — record strategic reasoning |
| RISK-002 (Caio SPOF) | HIGH | Low-Medium | MEDIUM | **8** | YES — build infrastructure now |
| RISK-004 (Equity Commitment) | MEDIUM | Medium | HIGH | **9** | YES — consult attorney |
| RISK-010 (Maintenance Void) | MEDIUM | High | MEDIUM | **10** | YES — define protocol |
| RISK-011 (Claude Dependency) | MEDIUM | Low | MEDIUM | **11** | PARTIALLY — design for LLM-agnostic |
| RISK-012 (First Edition) | MEDIUM | Certain | HIGH | **12** | NO — inherent, manage expectations |

---

## Recommended Immediate Actions

1. **Contact suppliers NOW** (RISK-008): Don't wait for the cascade to complete. Indicative quotes and CoA samples don't require an entity. This is the single highest-value de-risking action.

2. **Define calibration rubric** (RISK-007): Danilo specifies what the operator must prepare, what he evaluates, what pass/fail looks like. Do this before any candidate reaches calibration.

3. **Record strategic reasoning** (RISK-006): Danilo narrates the key decisions and why — positioning, pricing philosophy, competitive response, candidate evaluation. This is insurance against RISK-001 (Danilo SPOF).

4. **Resolve DEC-CHAIN-003 and DEC-CHAIN-007** (RISK-003, RISK-004): Approval authority at handoffs and pre-entity equity instruments. These are blocking decisions for the cascade.

5. **Define capital gate for execution** (RISK-009): What minimum capital must be committed before the operator begins? Make this explicit in the handoff requirements.

6. **Create systems engineering readiness checklist** (RISK-002): Caio lists what needs to be ready at handoff vs. what can be built during execution.

---

## Version History

**v1.0.0 (2026-03-01):**
- Initial risk analysis created from Rollout Narrative v0.6.0 analysis
- 12 risks identified across 5 categories
- 7 new rollout hypotheses (HYP-010 through HYP-016) created alongside this analysis
- Risk priority matrix with pre-mitigatable assessment
- 6 recommended immediate actions
