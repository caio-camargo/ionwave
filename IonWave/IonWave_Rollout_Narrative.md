# IonWave Rollout Narrative

**Version**: 0.6.0
**Author**: Caio, Claude (collaborative)
**Date Created**: 2026-02-19
**Last Updated**: 2026-02-27
**AI Model**: claude-opus-4-6
**Purpose**: Tell the story of how IonWave goes from its current state to first revenue — and surface what's unresolved
**Status**: Draft
**Time Horizon**: Current state through first revenue (~Month 4-5 post-handoff)
**Source Documents**: v10 Launch Narrative, Three Models Implementation Guide, M35 Execution Planning, M3 Financial Model, Hypotheses Registry, Open Questions, Role Engineering essay, CEO as Casted Actor essay

---

## Preamble

IonWave is in the final stretch of the imagination phase. The imagination passet — 41 TUPs across 7 clusters describing every aspect of how a premium marine plasma electrolyte brand should operate — is nearly complete. Caio and Claude have been producing it; Danilo has been providing high-level direction.

To be precise about terms: the Trade is not just the imagination passet. The Trade is all the passets together — imagination, implementation, fundraising — the business as it exists to the Studio, the interface between the people involved in executing it. The imagination passet is the first layer. What follows (implementation passet, live operations, data flowing back into the system) builds the Trade into something larger. But right now, the imagination passet is what exists, and it's nearly done.

No entity has been formed. No supplier has been contacted. No store has been built. Everything below is planning, not history.

**The core question: How does what we've built become a running business that takes its first order?**

This narrative tells that story. It is also, inevitably, a story about the system being tested for the first time. IonWave is the first Trade deployed through this system, and the system is designed to be **modular**: the TUPs define what work needs to be done, but who does each piece is a configuration variable. One person might execute the entire Trade. A small team might split it. The system accommodates different configurations — and what we learn from IonWave will inform how future Trades are staffed.

**The north star: one-shot handoff.** The orienting vision is that a completed Trade can be handed off in a single act. Someone receives it, does the integration work, and the Trade unfolds. The founder doesn't stay around to fundraise, recruit, or calibrate — ideally, there is *no communication* after the handoff. The Trade itself is the instruction set for all of that. This is not realistic immediately, but it should orient our work. Every function Danilo currently performs by hand is a function the system needs to learn to encode.

---

## Functions (What Needs to Be Done)

Each function below is a distinct category of work. For IonWave, some are assigned to named people. Others are open. In future Trades, the assignments will vary — but the functions remain.

| Function                    | What It Covers                                                                                                                      | IonWave (Current)                                                                                                                          | One-Shot Status                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **System Production**       | Building the imagination passet — TUP workshops, data layer, quality scoring, documentation                                         | Caio + Claude                                                                                                                              | **Approaching one-shot.** Methodology proven. With good protocols and highest Claude tier, a passet can be done in ~2 days. Bottleneck has been manual permission grants, not production.                                                                                                                                                                                                                                                                                                                                 |
| **Strategic Direction**     | High-level decisions — positioning, pricing philosophy, capital structure, partnership selection                                    | Danilo (as de facto Producer)                                                                                                              | **Interim — founder-as-Producer.** In the mature system, the Trade's thesis and decision frameworks should encode enough direction that this function is minimal. A Producer who has done the integration work could handle strategic direction within encoded guardrails.                                                                                                                                                                                                                                                |
| **Casting**                 | Finding and evaluating the people who will execute the Trade — operators, VPs, specialists                                          | Danilo (as de facto Producer; active conversations) — but founder should not be in the recruitment chain long-term                          | **Must be encoded.** This is a Producer function. Danilo does it now because he's the de facto Producer. The system must encode casting well enough that neither Danilo nor someone Danilo personally recruits is required. The Trade itself should be the mechanism (see Role Engineering, CEO as Casted Actor).                                                                                                                                                                                                          |
| **Capital Formation**       | VP outreach, identifying advisors and investors, managing the raise                                                                 | **[UNASSIGNED]** — a Producer function. Danilo is de facto Producer now but does not want to do Trade-level fundraising or recruit the person who does | **Must be encoded.** The methodology: start with ~20 calls, recruit more "deals people" to the cause, propagate to ~500 calls, identify a handful of advisors/investors. The Trade must encode this well enough that the Producer (once in place) can execute it. Danilo should not be in the recruitment chain — not for the VP, and not for the person who finds the VP.                                                                                                                                               |
| **System Specification**    | Receiving the passet and reconciling it against the executor's context — the integration work                                       | The executor (once identified)                                                                                                             | **Core to the one-shot model.** Three Models methodology: line-by-line, binary gate, calibration.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Entity & Legal**          | C-Corp formation, banking, contracts, equity, compliance                                                                            | The executor (post-handoff)                                                                                                                | **Encodable.** TUPs M2/M4 contain the playbook.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Supplier & Product**      | Sourcing, CoA verification, pricing, inventory ordering, quality control                                                            | The executor (post-handoff)                                                                                                                | **Encodable.** TUPs M5/M6 contain the playbook.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Storefront & Creative**   | Shopify, landing pages, ad creatives, email flows, brand assets                                                                     | The executor + Claude (post-handoff)                                                                                                       | **Encodable.** TUPs M8/M9/M11/M15/M17 contain the playbook.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Paid Acquisition**        | Ad testing, creative iteration, ROAS optimization, scaling                                                                          | The executor initially, specialist later                                                                                                   | **Partially encodable.** Strategy in TUPs M13/M14. Platform execution requires human hands.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Fulfillment & CX**        | Packing/shipping, customer support, returns                                                                                         | The executor (post-handoff)                                                                                                                | **Encodable.** TUPs M20/M24 contain the playbook. No separate CX hire assumed — the system should handle this or the executor absorbs it.                                                                                                                                                                                                                                                                                                                                                                                 |
| **Systems Engineering**     | Operational integrations — API setup, data ingestion, dashboards, periodic Claude agent deployments, automated monitoring           | **[MUST BE ENCODED]** — Caio building the infrastructure now, but the system should not depend on Caio being on-call                       | **Must be encoded.** Includes: setting up Shopify/Meta APIs, building dashboards, deploying Claude agents for periodic checks (daily data validation, parameter comparison). Caio is building this infrastructure now — the goal is that the infrastructure *exists* at handoff, not that Caio remains available to build it on demand. More requirements will surface during execution. Advance planning needed.                                                                                                            |
| **Quality & Compliance**    | Checking that things are done and done to spec — defined requirements verified against actual output. Flagging drift, grading work. | **[UNDEFINED]** — was the Compliance Manager role (probably she)                                                                           | **Partially automatable.** Much of the checklist verification (was this done? does it match spec?) can be automated via Claude or scripts. But taste and ultimately quality cannot be automated — a human must judge whether the output is *good*, not just *compliant*. A layer between systems engineering (Caio) and the executor(s). How it works in this system specifically has not been deeply explored.                                                                                                           |
| **System Maintenance**      | Updating the Trade as execution reveals new information — correcting assumptions, logging learnings, keeping the system coherent    | **[MUST BE STRUCTURED]** — Caio could do this but lacks ecommerce domain experience; ideally the Producer or someone with domain knowledge | **Critical for system learning.** Without it, the Trade drifts from reality. Must be defined as a process; who performs it is a variable. Open question: domain expertise may be required to know *what* needs updating.                                                                                                                                                                                                                                                                                                  |
| **Calibration & Oversight** | Gate decisions, strategic adjustment, pattern recognition                                                                           | Danilo (as de facto Producer; light touch post-handoff)                                                                                    | **Interim — founder-as-Producer.** In the mature system, gate criteria should be encoded. A Producer who has done the integration work could run calibration. Founder involvement should decrease toward zero.                                                                                                                                                                                                                                                                                                            |

**The modularity principle:** Any of these functions can be combined or split. The system cares that every function is covered, not how many people cover them.

**The Actor/Director split.** Danilo's CEO as Casted Actor essay clarifies something important about how these functions group. Some functions are **Actor functions** — external-facing, performance-oriented, requiring credibility with audiences who can't evaluate operational competence directly: Capital Formation, Casting, some aspects of Strategic Direction. Others are **Director functions** — execution, operations, shipping: Entity & Legal, Supplier, Storefront, Paid Acquisition, Fulfillment. These are fundamentally different skill sets. The system needs to cast the right kind of person for each group — and resist the temptation to assume one person does both well.

**The Producer.** The Actor/Director metaphor completes with a third role: the **Producer**. In the essay, the Producer manages capital allocation, legal structure, fiduciary responsibility, and the framework within which Actor and Director operate. In the Trade context, the Producer is the person who holds the whole picture — who integrates everything, ensures the parts cohere, and makes the structural decisions about resource allocation. This is the integration role.

**Right now, Danilo is the de facto Producer for IonWave.** He holds the whole picture, makes the casting decisions, sets strategic direction, runs calibration. But this is not fixed with him. The Producer function is handoffable — and in fact, handing it off is one of the most important steps toward one-shot. If a Producer is in place, that person could also recruit the VPs and deals people (Capital Formation recruitment), evaluate and cast the operators (Casting), and own the insight feedback loop from advisors. Many of the functions currently marked "Danilo" in the table above are really "Producer, currently performed by Danilo."

**Danilo's position: he should not find the Producer, and he should not find the person who finds the Producer.** This is a deeper version of the one-shot vision than previously stated. If the founder has to recruit the key person, then the system hasn't achieved independence — it's just added an intermediary. The Trade itself must be the mechanism by which the Producer emerges. This could mean: the Trade is published or circulated and the right person recognizes it and steps forward. Or: the system has a casting methodology encoded well enough that a process — not Danilo personally — identifies Producer candidates. Or: the Producer role crystallizes from someone already in the network through the natural gravity of a well-constructed Trade. However it happens, the founder is not in the recruitment chain. This is aspirational for IonWave but must orient the design.

If work is modular and split across Actors (deals, fundraising) and Directors (operations, execution), someone still needs to know the Trade through-and-through. Every prior version of this process assumed this — v10's Librarian, Three Models' Operator. With modularity, the Producer may be the dedicated integrator: someone who understands every TUP even if they don't execute every function. This could be the PM-as-caster from the role engineering essay, or it could be a distinct role. **Flag for Danilo.**

**Forcing functions for integration.** Knowing the Trade isn't just reading it — it requires slow, deliberate processing that catches what skimming misses. Danilo's instinct is to print things out and read them aloud. The full imagination passet is too large for that literally (hundreds of pages of structured data), but the principle adapts: the system needs mechanisms that force the integrator to process the Trade at depth, not speed. The calibration session is one forcing function — the integrator must defend their understanding under questioning. Others could include: requiring the integrator to write a condensed narrative of the Trade in their own words (the act of rewriting forces comprehension), requiring them to identify the three weakest assumptions and propose alternatives, or requiring them to explain the Trade to someone unfamiliar and field their questions. The forcing function must produce an artifact — something that can be evaluated — not just a claim of having read everything.

---

## The Narrative

### THE MACHINE (Now — nearly complete)

The imagination passet is nearly done. Caio has been building it with Claude — one person orchestrating an AI that can produce TUP-quality output across all 41 business models. What Danilo's v10 narrative envisioned as 40-60 people over 12 weeks has been compressed into weeks by a single person and an AI co-pilot.

Caio runs each TUP through the Workshop Protocol: load source material, research gaps, generate content, run expert-persona dialogues to saturation, self-grade, produce OpKits. Each takes a few hours. The product, strategy, and marketing TUPs are substantially complete. What remains are the operational and rollout TUPs — the ones being refined in this very process, bridging imagination and execution. These need extra attention now. In future Trades, the operational patterns will be more established and faster.

What Caio is producing is not a rough draft. It's structured JSON, quality-scored, with confidence grades on every claim and intelligence gaps documented. Whoever receives it gets a completed textbook, not a sketch.

This is the first proof point for the system. An imagination passet that would have taken months with human teams can be produced by one person with AI in weeks — and with better orchestration and the highest Claude usage tier, in about two days. There have been moments when the bottleneck was literally giving Claude manual permission to search the internet, not the production itself. The economics of Trade production change permanently once this is demonstrated.

Danilo, meanwhile, is not in the production loop. He's giving Caio high-level direction when strategic decisions are needed, and he's talking to people — potential operators, potential collaborators, potential advisors.

---

### THE CALLS (Parallel workstream — now, ongoing)

While the passet is being finished, someone needs to be making calls. Potential advisors, potential investors, potential VPs — building the network that will fund and support IonWave's execution.

This is the VP function: domain expertise, introductions, capital. It's fundamentally an Actor function — it requires the kind of person who can credibly perform the role of "this Trade is worth your time and money" to people who don't have the operational context to evaluate the claim directly. This is not Caio's strength (he's said as much — he's a systems builder, not a deals guy), and Danilo emphatically does not want to do Trade-level fundraising. It needs to be someone else, or several someone-elses.

Recruiting the VP/deals person is a Producer function — and Danilo's position is that he should not be the one doing it, and should not be the one recruiting the person who does it. The Trade itself must be the mechanism. This is the hardest encoding problem in the entire system: Capital Formation requires someone with Actor skills (credibility, deal-making, network) and the Trade must either attract that person or contain enough methodology that the Producer can find them without founder involvement. Right now, for IonWave, Danilo is doing this as de facto Producer. But the system should be designed so that he doesn't have to.

The methodology, as far as it's been sketched: start with a list of about 20 people to call. Recruit more "deals people" to the cause. Propagate to about 500 calls. Out of those, identify a handful of people who are some mixture of advisors and investors. Some of those take on further outreach themselves. The advisors' insights help orient the business plans — and someone needs to own the feedback loop. The Producer is the natural candidate: the person who holds the whole Trade is the person who can receive an advisor's insight and know where it changes a TUP, a financial assumption, or a strategic direction. Without this ownership, advisor insights become noise.

This workstream doesn't need to wait for the passet to be finished or for the executor to be identified. It can start now and run continuously. The extent to which it succeeds will shape the path the Trade takes: strong early network means capital options, better terms, faster execution. Weak network means bootstrapping, slower scaling, more pressure on the executor's personal runway.

For the one-shot handoff vision, this is the critical test. The Trade must contain the fundraising playbook, pitch materials, VP outreach methodology, and investor narrative — complete enough that Capital Formation doesn't default back to Danilo by gravity. M4 and the v10 investor narrative are early versions. They need to be good enough that someone who's never met Danilo can pick them up and run.

---

### THE SEARCH (Overlapping — now through whenever it resolves)

Someone needs to be found who will execute. Candidates exist. Conversations are happening. Nobody is locked in.

For IonWave, Danilo is doing this search as de facto Producer. But his stated position is that the system should not require this — not from him, and not from anyone he personally recruits. The Trade should be the mechanism by which the right people emerge. For IonWave, that's aspirational. For future Trades, it must be real.

What the search is looking for is shaped by two frameworks. The **modularity principle** says it's not necessarily one person who does everything — it could be a solo operator, a small team, or a phased approach. The **role engineering** framework says the ontological frame of the role matters as much as the person: what someone IS determines what information they can integrate. Casting an "operator who receives a complete system" is a different frame than hiring a "startup employee." The frame shapes behavior.

The Producer framing clarifies who the one-shot recipient actually is: **the Producer.** The Producer receives the Trade, does the integration work, and from that integration can make all downstream casting decisions — operators, VPs, specialists. The Producer *is* the one-shot recipient. The system's ultimate challenge is not "find an operator" but "construct a Trade compelling and complete enough that a Producer-type person recognizes it, steps into the role, and unfolds the rest."

What's not variable: whoever executes must do the integration work. The system specification methodology applies regardless of team configuration. Each person reconciles the TUPs in their domain against their own context. The binary gate applies. If the integration work is thin, the partnership doesn't activate.

Executor evaluation criteria are work in progress. Self-assessment is unreliable — people are poor judges of their own capabilities for work they haven't done before. The binary gate at calibration is the backstop, but a failed calibration costs 2-4 weeks. Encoding reliable evaluation into the Trade is one of the hardest unsolved problems for the one-shot vision.

---

### THE CASCADE (Feb 2026 — the concrete instantiation of THE SEARCH)

Danilo has resolved the abstraction. THE SEARCH is no longer "someone needs to be found." It's a concrete recruiting cascade: **VA → MBA intern → VP → Operator.** Each node's job is to find the next person. Each node works in/with Claude. Each node has a defined brief, deliverables, screening rubric, and bilateral contract.

The cascade model is fully specified in `data/rollout/` (22 files). Key elements:

- **VA (L1)**: Hired for cash. No expertise required — process execution and outreach. Job: find an MBA intern type. Timeline: 4-6 weeks. Package: role brief, sourcing playbook, screening criteria, outreach templates, bilateral contract.
- **MBA intern (L2)**: Compensated with equity. Business comprehension + structured outreach. Job: find a VP-level deals person. Timeline: 8-14 weeks. Package: role brief, VP candidate profile, sourcing methodology, screening criteria, pitch materials, bilateral contract.
- **VP (L3)**: Compensated with equity (5-10%). Deal-closing ability + network. Two parallel jobs: Capital Formation (raise seed funding) + find the Operator. Timeline: 8-12 weeks for Operator; Capital Formation ongoing. Must pass an integration work artifact (condensed Trade narrative in own words) before proceeding — quality gate. Package: role brief, integration requirements, operator recruitment guide, capital formation guide, bilateral contract.
- **Operator (L4)**: 15% equity + milestone bonuses + $4K/mo base. Full M1 certification. Executes the Trade.

The compliance system is Claude-as-workspace: each node works *in* Claude, which simultaneously helps them, monitors deliverables, and holds context. Deliverables follow an event-based contract model (TRIGGER → MONITORING → DEADLINE → FULFILLMENT → BREACH → CONSEQUENCE). 15 deliverables across 3 active nodes, machine-readable in the deliverable registry.

**What this resolves from previous versions**: The Producer question (Q8) partially dissolves — the cascade distributes Producer functions across nodes. The VP does casting (operator search) and Capital Formation. The integration forcing function (Q14) is now defined: the VP's Three Models integration artifact. Capital Formation encoding (Q9) is now specified in the VP brief. Compliance Manager function (Q10) is now the Claude agent.

**What it doesn't resolve**: The recruitment selection problem — the cascade asks less-capable people to select more-capable people (VA selects MBA intern, MBA intern selects VP). Rubrics and Claude-as-workspace mitigate but don't eliminate this. The franchise manual analogy (the Trade is comprehensive enough that people implement faithfully) is instructive but unproven for a first-edition system. Full risk analysis in `data/rollout/chain_specification.md` Section 8.

**Open decisions**: 7 decisions (DEC-CHAIN-001 through 007) in chain_specification.md. Most critical: DEC-CHAIN-003 (approval authority at handoffs — who backstops the recruitment selection?) and DEC-CHAIN-007 (pre-entity equity instruments — how to commit equity before entity formation?).

---

### THE HANDOFF (After executor identified — ~2-4 weeks)

The executor receives the Trade — the imagination passet, the dashboard, the data layer, all documentation. This follows the Three Models pattern. No Librarian preps folders. No MC does an entrance conversation. The executor gets the system and does the integration work themselves.

**Integration comes first. Execution comes after.** This is worth being explicit about: the integration work is a distinct phase, not something that happens alongside execution. The executor should not be filing a C-Corp while also trying to reconcile the financial model. Integration is serious cognitive work that requires undivided attention.

The integration work: go through the TUPs relevant to the functions being taken on. Reconcile every claim, every assumption, every timeline against the executor's own context. Where the passet says "supplier lead time: 21 days" — is that true for the suppliers this executor will actually contact? Where it says "CAC target: $30-40" — does that match what they've seen? Where it says "entity: Delaware C-Corp" — is that right for their tax situation?

The calibration session with Danilo is where this gets tested. The executor presents their integration work. Danilo confirms or corrects. This is not a teaching session — it's the executor demonstrating they can defend every word of their adapted plan. **The calibration session itself needs further definition** — what the executor must prepare, what Danilo evaluates, what "pass" and "fail" look like concretely, how long it takes. Danilo has the most insight into this; it should be specified before the first handoff. The binary gate is the primary quality control mechanism for the entire rollout, and it cannot be a black box.

Claude is the executor's primary ongoing interface with the Trade. Claude Code reads from the passet, answers questions about any TUP, surfaces dependencies, explains reasoning. But Claude is a tool, not a substitute for the executor's own understanding. The integration must happen in the executor's head.

The systems engineering infrastructure needs to be ready *before* the handoff, not built on demand after. Caio is currently working on this: evaluating OpenClaw as a platform-agnostic orchestration layer, and if that doesn't fit, building a solution (likely Google Apps Script) to automatically import data via API from various sources (Shopify, Meta Ads, etc.) and orchestrate integration into dashboards. The executor should arrive to a system where the data infrastructure exists, not one where it needs to be built under time pressure.

For IonWave, Caio will be available if something breaks or needs adjustment — but the system should not be *designed* around Caio being on-call. The goal is that systems engineering is encoded: the infrastructure exists, the documentation covers it, and the executor (or a competent technical person) can maintain it. Caio building the infrastructure now is investment in the system, not a permanent staffing commitment.

---

### THE FOUNDATION (~Weeks 1-2 of execution)

Execution begins. Entity formation fires first — C-Corp filing, EIN, bank account, QuickBooks. This is the hard blocker: nothing downstream works without a legal entity. Day 1-2.

Supplier outreach runs simultaneously. The passet identifies marine plasma suppliers (Biocean, Actimar, Quinton) but all supplier data is void — no quotes, no CoA, no confirmed pricing. The executor contacts them, requests certificates of analysis, gets pricing for a 500-1000 unit initial order.

This is the most important data point in the entire rollout. The financial model has three scenarios — optimistic (67% gross margin), realistic (60%), conservative (42%). Which one is real depends on what suppliers quote. If landed COGS comes in under $25/box, the model works at $47-59. If COGS is above $25, the economics may not close. If the conservative scenario is real, this Trade may not be viable at this price point — and that's a kill-or-pivot conversation.

Week 2 is storefront and creative: Shopify setup, brand finalization, landing page v1, 3-5 ad creatives, email flows. Claude assists with copy and strategy. Many visual assets can now be produced with AI, but not necessarily everything — some creative work may require a contractor. Where that money comes from is an open question. Danilo's default answer is to punt creative costs to the operator, but this needs to be explicit in the budget, not a surprise.

By end of Week 2: entity live, supplier CoA in hand with confirmed pricing, Shopify functional, creative ready for soft launch.

What can break: non-compliant CoA (heavy metals above thresholds per M7 Regulatory). Hard stop — don't launch. Or: conservative margin scenario materializes and the pricing strategy needs to change.

---

### THE TEST (~Weeks 3-4 of execution)

Soft launch. The goal is signal, not revenue.

Warm-network email (50-100 contacts, 20% discount), test ads at $100/day across 3 creative angles. First 3-10 orders. First fulfillment test.

Data that matters: tracking works, ads convert at all, early CAC is measurable, customers don't complain about quality.

Week 4: kill underperformers, iterate landing page, collect product feedback.

**Day 30 Gate:**

- **PASS** (10+ orders, CAC <$60, subscription attach >15%, zero compliance violations, GM >55%): Scale.
- **PARTIAL** (3-9 orders, CAC $60-100): Iterate 2 more weeks.
- **FAIL** (<3 orders from $150+ spend, or CAC >$100, or compliance issue): Pause. Reassess.

The most common failure mode is ambiguous signal — not enough data to decide. This is where the executor's judgment matters, and where having done the integration work pays off.

---

### THE GRIND (Months 2-3 of execution)

If Day 30 passes, scale begins. More ad spend, more creative testing, email flows generating repeat revenue. Day-to-day D2C operations. The least glamorous phase and the most important one.

Claude is the daily co-pilot. The imagination passet in context means the executor has access to the full strategic reasoning behind every decision — not just what to do, but why.

Calibration stays light. Weekly check-in, pattern recognition, strategic adjustment. Not management. Danilo's goal is to reduce this toward zero — the mature system should not require founder involvement in live operations. For IonWave, some calibration is realistic; for future Trades, less. Caio can step in on calibration if needed.

**Day 90 Gate:**

- **STRONG PMF**: $10K+ cumulative revenue, 100+ orders, CAC $30-50, ROAS >2.5x, subscription >25%, month-2 repeat >10%.
- **DEVELOPING PMF**: $5-10K, CAC $50-70, subscription 15-25%. Keep iterating.
- **WEAK/NO PMF**: <$5K, CAC >$80, subscription <15%. Reassess or kill.

This narrative ends here. First revenue generated. Day 90 Gate reached. The business either has signal or it doesn't. What happens after — scaling, hiring, raising — is a story written by real data, not plans.

---

### WHAT IONWAVE TEACHES THE SYSTEM

IonWave is the first Trade deployed through this system. When it's done — whether it succeeds, pivots, or kills — the system learns:

- **Team configuration.** Did one person suffice? Were there functions that needed a specialist? Do consistent patterns emerge across D2C Trades, or does it vary too much?
- **The handoff.** Did system specification produce genuine integration? Did the binary gate correctly filter? Did calibration add value?
- **Claude's range.** Where was AI sufficient? Where did it need a human? How does the ratio shift as Claude improves?
- **The passet's accuracy.** Which TUPs were useful in execution? Which were unused? Which had wrong assumptions?
- **System Maintenance.** Who updated the Trade during execution? Was it useful? Did it drift?
- **The Actor/Director split.** Did the VP/deals function work when separated from operations? Were the right people cast in the right frames?
- **One-shot distance.** Which of Danilo's interim functions could have been encoded? Which required his personal judgment? What would the next Trade need to require less founder involvement?
- **Capital Formation encoding.** Did the fundraising playbook work when someone other than Danilo executed it?
- **Casting encoding.** Did the evaluation criteria predict who would succeed?
- **The Producer role.** When work was split, did anyone actually hold the whole picture? Did the forcing functions (calibration, rewriting, assumption challenge) produce genuine integration? Could the Producer take over casting and VP recruitment from Danilo? Was the Producer the one-shot recipient? What would the Producer role need to look like for the next Trade?
- **LLM legibility.** Did the structured data remain legible across model versions and providers? Did the system work when moved from Claude to OpenClaw or other models? Where did legibility break down? (This is now an architectural principle — see CLAUDE_AS_OS_SYSTEM.md.)
- **External failure response.** When things broke for reasons outside the Trade's control (supplier issues, platform changes, market shifts), was there a protocol? Did the executor know what to do? What would a generalized failure-response protocol look like for future Trades?

---

## Open Questions

1. **Who executes — and in what configuration?** Candidates exist, no one confirmed. Could be solo operator, small team, or phased approach. An intermediate option from the role engineering essay: hand the Trade to a competent PM type who then casts the operators and VPs.

2. **What is the capital structure?** Undecided. Depends on the Capital Formation workstream's success. Bootstrap, angel raise, SAFE — the executor's own financial situation is a variable.

3. **What are the actual unit economics?** Margin dispute (REC-001) unresolved. GM 42% or 67%. Resolves with real supplier quotes.

4. **Who is the Producer — and how do they emerge without Danilo finding them?** The Producer is the one-shot recipient: the person who holds the whole Trade, does the integration, and makes all downstream casting decisions. Danilo is de facto Producer now, but his position is that he should not find this person, and should not find the person who finds this person. The Trade itself must be the mechanism. This is the deepest unsolved problem for the one-shot vision. How does a Trade attract or produce its own Producer? Is this a PM-as-caster? A particular kind of advisor? Someone already in the network who recognizes the Trade? What forcing functions ensure they actually know the Trade at depth? 

5. **How does System Maintenance work?** Must be structured. There may be layers: Caio maintains the system infrastructure (APIs, dashboards, Claude agents); someone else monitors that execution matches the passet's standards (the old Compliance Manager function); the executor logs operational learnings. How these layers interact is undefined.

6. **What does Caio's on-call systems engineering look like in practice?** API setup, data ingestion pipelines, automated dashboards, periodic Claude agent deployments (daily data checks, parameter monitoring). Advance planning needed — unforeseen requirements will surface even with preparation. This is pending design work.

7. **How should people be evaluated for roles?** Self-assessment is unreliable. The binary gate at calibration is the backstop. The role engineering framework suggests the ontological frame matters as much as the person — but how do you evaluate frame-fit before the relationship begins? Unresolved design problem.

8. **What is the profile of the Producer — and what does the Trade need to contain so they can do it without the founder?** The Producer absorbs the passet, makes casting decisions, recruits deals people, runs calibration, owns the insight feedback loop. Danilo does this now. The profile question: what kind of person can do this without being the founder? And the harder question: how does the Trade *attract* this person without Danilo recruiting them? What must the Trade contain, and how must it be presented, so that a Producer-type person encounters it and recognizes the opportunity?

9. **How does Capital Formation get encoded?** The methodology is sketched (20 calls → recruit deals people → 500 calls → handful of advisors/investors → some take on outreach). Missing: how advisor insights feed back into business plans, what the pitch materials need to contain, how to evaluate VP candidates. M4 and the investor narrative are a start.

10. **Where is the Compliance Manager function?** Quality monitoring, drift detection, grading execution against passet standards. This was a defined role in earlier versions of the system. Whether it's a distinct role, a function absorbed by the executor, something Claude automates, or a layer between Caio and the executor — unclear. Needs definition.

11. **What are the kill criteria before execution starts?** Non-compliant CoA, conservative margin scenario, failed binary gate — what's the explicit decision at each? These exit ramps should be defined.

12. **What happens when things go off the rails — not for noncompliance, but because of facts on the ground?** Suppliers don't respond to a brand-new entity. A marketing channel underperforms expectations across all creatives. An unforeseen regulatory issue surfaces. The system needs a protocol for external failures — events the Trade didn't cause and can't control, but must respond to. This is broader than the kill criteria in Q11; it's about what to do when reality diverges from the plan for reasons outside the Trade's control.

13. **When does Capital Formation need to converge with execution?** THE CALLS and THE FOUNDATION are described as parallel tracks, but capital structure affects everything downstream — budget for inventory, ad spend runway, equity implications for the executor. Is there a gate that says "don't start execution until capital structure is decided"? Or does the executor start regardless and adapt?

14. **What does the calibration session actually look like?** What must the executor prepare? What does Danilo evaluate? How long does it take? What does "pass" look like concretely? What does "fail" look like beyond "the partnership doesn't activate"? This is the primary quality control mechanism for the entire rollout — it should be specified before the first handoff. Danilo has the most insight here.

15. **What is the advance systems engineering checklist?** What needs to be ready *before* the executor starts? API connections, dashboards, data pipelines, monitoring agents — what's the minimum viable infrastructure for Day 1 of execution? Caio is working on this now (evaluating OpenClaw, prototyping data integrations) but the checklist doesn't exist yet.

16. **Who are the Tools Specialist and Labor Coordination Specialist?** Two studio-level functions surfaced during this exercise: someone who stays on top of what tools can do (deployment platforms, AI capabilities, integrations) and someone who understands what kind of person is best at what kind of work. May or may not be the same person. Neither is assigned.

---

## Source Documents

| Document                                                 | Relationship                                                                                              |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `ops_model_v10_dump/04_launch_narrative.json`            | Danilo's original vision — structurally influential, superseded by AI-augmented production and modularity |
| `Studio 3/Doc Dump/three_models_implementation_guide.md` | Handoff model: system specification, binary gate, calibration                                             |
| Danilo, "Role Engineering" (Substack)                    | Framework for designing roles as ontological frames; PM-as-caster possibility                             |
| Danilo, "CEO as Casted Actor" (Substack)                 | Actor/Director/Producer split; VP function as fundamentally different from operational function           |
| `data/m35/` (Execution Planning TUP)                     | Execution timelines, phase gates, operating rhythms                                                       |
| `data/m3/` (Financial Model TUP)                         | Capital requirements, unit economics, scenario modeling                                                   |
| `data/hypotheses/registry.json`                          | HYP-001 (CAC), HYP-003 (Churn), HYP-004 (Margin)                                                          |
| `tracking/Open_Questions.md`                             | Q9, Q10, Q11                                                                                              |
| `project_specs/CLAUDE_AS_OS_SYSTEM.md`                   | Claude's role in execution workflow                                                                       |
| `project_specs/CONTRACT_ENGINEERING.md`                  | Bilateral TUP framework — bilateral contracts at each chain node                                          |
| `data/rollout/` (22 files)                               | **NEW v0.6** — Full cascade specification, VA/MBA/VP packages, compliance agent, deliverable registry     |
| `data/m1/operator_system.md`                             | Operator role, compensation, onboarding, certification — L4 of the cascade                                |
| `processes/Narrative_Protocol.md`                        | Protocol used to produce this document                                                                    |

---

## Self-Grade (Provisional)

| Dimension        | Score     | Notes                                                                                                                                                                                  |
| ---------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Concreteness** | 3.5/5     | Functions defined with clearer ownership. Integration/execution separation explicit. Systems engineering advance work described. Many assignments still open because reality is open.  |
| **Completeness** | 4/5       | Full arc from current state through first revenue. Meta-learning section. 16 open questions (up from 11). Post-Day-90 deliberately sketched.                                           |
| **Honesty**      | 5/5       | 16 open questions. Stress test incorporated. SPOF risks for both cofounders acknowledged. External failure protocols flagged as needed. Capital timing dependency surfaced.            |
| **Readability**  | 4/5       | Narrative sections prosaic. Functions table provides structure. Some jargon requires the Glossary.                                                                                     |
| **Alignment**    | 4/5       | Reconciles v10, Three Models, M35, Role Engineering, CEO as Casted Actor, and stress-test findings into current reality.                                                               |
| **Average**      | **4.1/5** | Upgrade path: confirm executor(s), resolve capital structure and timing, get supplier data, define calibration session, complete systems engineering readiness, resolve Producer role. |

---

## Version History

**v0.6.0 (2026-02-27):**

- **THE CASCADE section added**: Concrete instantiation of THE SEARCH — VA → MBA intern → VP → Operator recruiting cascade, fully specified
- **Rollout package built**: 22 files in `data/rollout/` — chain specification, VA package (5 files), MBA brief (6 files), VP brief (5 files), compliance system (3 files), metadata
- **Cascade resolves several open questions**: Q8 (Producer profile) partially dissolved — Producer functions distributed across cascade nodes. Q9 (Capital Formation encoding) specified in VP brief. Q10 (Compliance Manager) resolved as Claude compliance agent. Q14 (calibration session) partially defined via VP integration artifact (Three Models test).
- **Recruitment selection risk documented**: chain_specification.md Section 8 — honest analysis of franchise manual analogy, where it holds, where it breaks. Signal degradation through the chain. MBA intern identified as weakest structural link.
- **Contract Engineering applied**: Bilateral contracts at each node with event-based model (TRIGGER → MONITORING → DEADLINE → FULFILLMENT → BREACH → CONSEQUENCE). 15 deliverables, machine-readable.
- **Claude-as-workspace model**: Claude is the work surface, not an external monitor. Cowork researched and found not viable for multi-node orchestration; Hybrid (Code + Projects) recommended.
- **7 open decisions** (DEC-CHAIN-001 through 007) added to chain_specification.md. DEC-CHAIN-001 (MBA comp = equity) resolved. DEC-CHAIN-002 (VP comp = equity, amount TBD) partially resolved.
- Source Documents updated with Contract Engineering, rollout package, and M1 operator system references

**v0.5.0 (2026-02-20):**

- **Stress test incorporated**: Systematic pressure-test of the narrative surfaced 5 categories of issues
- **Capital Formation ownership explicit**: Danilo responsible for finding the VP/deals person. Risk of defaulting back to him acknowledged
- **Integration before execution**: THE HANDOFF now separates integration work (comes first, undivided attention) from execution (comes after)
- **Calibration session flagged for specification**: Binary gate is the primary QC mechanism; cannot remain a black box. Danilo needs to define it
- **Systems engineering advance work**: Caio's current work on OpenClaw/data integrations incorporated as part of the narrative, not just "on-call"
- **Producer owns insight feedback loop**: Advisor insights from Capital Formation need a home; Producer is the natural owner
- **Quality & Compliance refined**: Checks done-and-done-to-spec; partially automatable but taste/quality require human judgment
- **SPOF acknowledged for both cofounders**: Danilo as founder, Caio as systems engineer. Highly documented system mitigates risk
- **Danilo's goal: zero post-handoff communication**: Made explicit as the north star for calibration and oversight
- **External failure protocol**: New open question for when facts on the ground derail plans (not noncompliance)
- **Capital timing dependency**: New open question — when must capital structure be decided relative to execution start?
- **New studio roles surfaced**: Tools Specialist, Labor Coordination Specialist (added to Glossary)
- Open questions expanded to 16

**v0.4.0 (2026-02-20):**

- **Ontological correction**: Trade ≠ imagination passet. Trade is all passets together — the business as interface.
- **Removed** outreach-for-the-system from narrative (this is about IonWave's rollout, not the Studio)
- **Integrated** Role Engineering essay: roles as ontological frames, PM-as-caster possibility
- **Integrated** CEO as Casted Actor essay: Actor/Director/Producer split, VP function as fundamentally Actor-type
- **Capital Formation methodology** sketched: 20 calls → deals people → 500 calls → advisors/investors → feedback loop
- **Added Systems Engineering** function (Caio on-call): API setup, dashboards, Claude agents, data ingestion — flagged as pending design
- **Added Quality & Compliance** function: the old CM role, unclear how it fits now
- **Flagged the integration problem**: if work is modular, who holds the whole picture? Flag for Danilo
- **Narrative sections** made more prosaic, less structural
- **Timeline** for passet production updated: ~2 days at peak orchestration, bottleneck is manual permissions not production
- Open questions expanded to 11

**v0.3.0 (2026-02-20):**

- Added one-shot handoff as orienting vision
- Functions table gains One-Shot Status column
- THE CALLS split into system vs Trade outreach
- Open questions: 10

**v0.2.0 (2026-02-20):**

- Cast of Characters → Functions table
- Modularity principle
- Open questions: 9

**v0.1.0 (2026-02-19):**

- Initial draft. 8 open questions.
