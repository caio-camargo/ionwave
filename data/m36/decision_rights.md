# M36 Operational Infrastructure — Decision Rights

**Version**: 1.0.0
**TUP**: M36 — Operational Infrastructure
**Cluster**: BCL-6 Operations & Infra
**Author**: Claude (TWP-001 v2.0.0 workshop)
**Date**: 2026-02-17
**Status**: Production
**Source Tabs**: 814 (decision_authority), 819 (delegation_framework), 821+822 (raci_matrix), 812+813 (decision_request_form + decision_documentation)

---

## DESIGN FLAG: DECISION TBD — CM Authority Model

**This section contains a structural design decision that has NOT been resolved.**

Danilo's framework specifies a three-tier authority model: Operator → CM → Studio. This works when a CM is in place. IonWave pre-CM is a solo founder with no CM. The two variants are documented below and flagged explicitly:

- **Solo Founder Mode** (pre-CM): Authority collapses to Operator + Studio (Danilo). No intermediate approval layer.
- **CM Model** (post-CM hire): Full three-tier authority as Danilo designed.

Do NOT choose one and collapse the other. Both variants are presented. The decision to hire a CM (and thus activate the CM Model) is a strategic inflection point, not an operational default.

**Unresolved question**: At what MRR, revenue level, or operational complexity does a CM become necessary? Danilo's system assumes CM is present. IonWave's current trajectory is solo founder through PMF.

[DECISION TBD: CM Authority Model — flagged as design choice, not data gap]

---

## Part 1: Decision Authority Matrix

### CM Model (Post-CM Hire — Per Danilo's Design)

[Confidence: A | Source: Danilo tab 814 exact content | Date: 2026-02-17]

| Decision | Operator | CM | Studio |
|---------|----------|----|--------|
| Daily ad spend <$200 | **Decide** | Informed | — |
| Ad spend $200-500 | Recommend | **Approve** | Informed |
| Supplier change | Recommend | **Approve** | Approve |
| Pricing change | Recommend | Recommend | **Approve** |
| New product launch | Research | Recommend | **Approve** |

**Reading the matrix:**
- **Decide** = sole authority, no approval required, inform only
- **Approve** = must say yes before action proceeds
- **Recommend** = provides input but does not have final authority
- **Informed** = notified after the fact

### Solo Founder Mode (Pre-CM — Current IonWave State)

[Confidence: B | Source: Extrapolated from Danilo's design intent applied to pre-CM reality | Date: 2026-02-17]

With no CM in place, the middle tier collapses. Authority redistributes:

| Decision | Operator | Studio (Danilo) |
|---------|----------|-----------------|
| Daily ad spend <$200 | **Decide** | Informed |
| Ad spend $200-500 | **Decide** | Informed |
| Ad spend $500-2K | **Decide** | Informed (no approval gate) |
| Ad spend >$2K | **Recommend** | **Approve** |
| Supplier change | **Recommend** | **Approve** |
| Pricing change | **Recommend** | **Approve** |
| Strategy change | **Input** | **Approve** |
| New product launch | **Research + Recommend** | **Approve** |

**Key change in Solo Founder Mode**: The Operator has significantly more autonomy (all spend under $2K is self-authorized). This is appropriate for a trusted solo operator but means Studio approval gates are less frequent. The trade-off: less oversight, faster execution.

**Trigger for CM Model activation**: When CM is hired (or contracted), revert to the CM Model matrix immediately. The CM model should be the operational default; Solo Founder Mode is the transitional state.

---

## Part 2: Delegation Framework

### CM Model Delegation Framework

[Confidence: A | Source: Danilo tab 819 exact content | Date: 2026-02-17]

"Who can decide what without asking."

| Decision Type | Operator | CM | Studio |
|--------------|----------|----|--------|
| Daily operations | **Alone** | Informed | — |
| Spend <$500 | **Alone** | Informed | — |
| Spend $500-2K | Request | **Approve** | Informed |
| Spend >$2K | Request | Review | **Approve** |
| Strategy change | Input | Review | **Approve** |

### Solo Founder Mode Delegation Framework

| Decision Type | Operator | Studio |
|--------------|----------|--------|
| Daily operations | **Alone** | — |
| Spend <$500 | **Alone** | — |
| Spend $500-2K | **Alone** | Informed (async) |
| Spend >$2K | Request | **Approve** |
| Strategy change | Input | **Approve** |

### Delegation Readiness Criteria

Before delegating a decision to the Operator (either model):

1. **Documented process**: The decision type has a runbook or SOP
2. **Clear kill criteria**: Operator knows when to escalate (parameter thresholds from operational_system.md)
3. **Reporting in place**: Outcomes visible to Studio/CM within 24-48 hours
4. **Operator track record**: At least 2 weeks of decision-making at lower spend levels before unlocking higher tiers

[Confidence: B | Source: Danilo tab 820 (delegation_readiness) + management delegation best practices | Date: 2026-02-17]

---

## Part 3: RACI Matrix

### Core Responsibilities

[Confidence: A | Source: Danilo tabs 821+822 (dual RACI matrix tabs) | Date: 2026-02-17]

**RACI Key**: R = Responsible (does the work), A = Accountable (owns outcome), C = Consulted (input before decision), I = Informed (told after)

#### CM Model RACI

| Task / Decision | Operator | CM | Studio |
|----------------|----------|----|--------|
| Daily ad management | R | I | — |
| Inventory ordering | A | R | I |
| Strategic pivots | C | C | A |
| Budget changes >$1K | R | A | I |
| Supplier contracts | I | R | A |
| Customer support (daily) | R | I | — |
| Weekly financial review | R | I | I |
| Monthly business review | R | C | A |
| Creative production | R | I | — |
| Email marketing | R | I | — |
| 3PL coordination | R | I | — |
| Regulatory compliance (ongoing) | R | C | A |
| Vendor relationship management | R | I | A |
| Risk escalation (R001-R005) | R | C | A |
| Operator onboarding | I | R | A |

#### Solo Founder Mode RACI

| Task / Decision | Operator | Studio |
|----------------|----------|--------|
| Daily ad management | R | I |
| Inventory ordering | R/A | I |
| Strategic pivots | C | A |
| Budget changes >$2K | R | A |
| Supplier contracts | R | A |
| Customer support (daily) | R | — |
| Weekly financial review | R | I |
| Monthly business review | R | A |
| Risk escalation (R001-R005) | R | C/A |

### Extended RACI: Supplement D2C Specific

[Confidence: B | Source: M7 regulatory framework, M5 supplier management, M13 media buying — cross-TUP synthesis | Date: 2026-02-17]

| Task | Operator | CM | Studio | External |
|------|----------|----|--------|----------|
| FDA adverse event reporting | R | C | A | [Attorney if complex] |
| FTC compliance audit | C | R | A | [Attorney — annual] |
| CoA (Certificate of Analysis) review | R | C | A | [Lab if disputed] |
| Meta policy compliance review | R | I | — | — |
| Prop 65 compliance | C | R | A | [Toxicologist] |
| Trademark monitoring | I | R | A | [Attorney] |
| Press / media response | C | C | A | — |
| Customer chargeback response | R | I | — | — |

---

## Part 4: Decision Documentation Process

### When to Document a Decision

Not every operational decision needs documentation. Document when:
- Spend exceeds $500 (any model)
- A new vendor or supplier is selected
- A creative campaign is killed or scaled significantly (>50% budget change)
- A strategic direction changes
- An incident leads to a process change

[Confidence: B | Source: Danilo tabs 812+813 intent + management best practices for lean teams | Date: 2026-02-17]

### Decision Request Form

For decisions requiring CM/Studio approval:

```
DECISION REQUEST
Date: [YYYY-MM-DD]
Requestor: [Operator name]
Decision Type: [Spend / Vendor / Strategy / Process]
Urgency: [Standard (48hr) / Urgent (4hr) / Emergency (1hr)]

THE DECISION
What are we deciding? [1-2 sentences]
What are the options? [2-3 options with brief rationale]
What is the recommended option? [With rationale]

THE NUMBERS
Spend involved: $[X]
Expected return: $[X] or [metric improvement]
Risk if wrong: [Brief description]

WHAT WE NEED
Approve by: [Date/time]
If no response by: [Default action — note what happens if no approval received]
```

**Response time SLA for approvers:**
- Standard: 48 hours
- Urgent: 4 hours
- Emergency: 1 hour (phone call acceptable)

### Decision Documentation Log

After each approved decision, document:

```
DECISION LOG ENTRY
Date: [YYYY-MM-DD]
Decision ID: [DEC-YYYY-NNN]
Type: [Spend / Vendor / Strategy / Process]
Decision Made: [What was decided — 1-2 sentences]
Decided By: [Who had final authority]
Rationale: [Why this option]
Outcome Tracking: [How and when we'll know if this was right]
Result (filled later): [Actual outcome after 30/60/90 days]
```

**Log location**: Google Sheets > 04_Operations > Decision_Log.gsheet

---

## Part 5: Authority Model at Scale

### When Does the CM Model Activate?

[Confidence: C | Source: Extrapolated from M1 labor chain (hiring triggers), M31 hiring (operator thresholds), and general D2C operator scaling patterns | Date: 2026-02-17]

The CM hire is the most impactful governance decision in IonWave's early life. Suggested triggers:

| Signal | Implication |
|--------|-------------|
| Operator bandwidth is consistently the bottleneck (every week, everything is waiting on Operator) | CM reduces coordination overhead |
| Monthly revenue >$30K MRR | Business complexity warrants oversight layer |
| Operator making >10 decisions/week that exceed Solo Founder Mode thresholds | Decision backlog growing |
| >3 active vendors requiring weekly management | Relationship management alone fills 10+ hrs/week |
| Regulatory / compliance events requiring specialist attention | CM as escalation layer for external engagement |

**CM Model transition checklist:**
1. CM hired and onboarded
2. Full RACI matrix communicated and confirmed with all parties
3. Approval workflows set up (communication channels, response SLAs confirmed)
4. First 30 days: Operator shadows CM approval process before full activation
5. Studio confirms CM Model is live

[Confidence: C — specific thresholds are pre-launch estimates | Upgrade path: Validate triggers with actual operational experience | Date: 2026-02-17]

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path | Grade |
|-----|--------|-------------|-------|
| CM Authority Model TBD — not resolved | HIGH — governance ambiguity creates decision paralysis or unauthorized actions | Explicit decision by Danilo before CM hire: at what point does CM Model activate? | [TBD — not a data gap, a design decision] |
| CM hire timing unclear | HIGH — Solo Founder Mode is finite; CM transition needs planning | Set explicit triggers above. Review at $15K MRR. | C |
| RACI for extended team (future PMs, freelancers) | MEDIUM — as team grows, RACI needs expansion | Extend RACI at each new hire per M31 hiring framework | D |
| Decision log process not yet running | LOW — expected pre-launch | Start decision log on Day 1 (first Google Ads or Meta spend decision) | D |

---

## Section 3: Scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| Evidence Coverage | 5/5 | All 5 decision/delegation tabs fully incorporated; CM TBD clearly flagged |
| Confidence Honesty | 5/5 | TBD model flagged as design choice; all estimates graded C/D appropriately |
| Upgrade Path Quality | 4/5 | CM activation triggers are specific; CM Model transition checklist actionable |
| Actionability | 5/5 | Both models are directly executable; decision request form is ready to use |
| OpKit Reusability | 5/5 | Three-tier authority model applies to any small D2C brand |

**Section Score: 4.8/5 → 9.6/10**
