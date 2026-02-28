# M39: Operational Protocols

**Version**: 1.0.0
**Last Updated**: 2026-02-11
**Status**: Experimental (requires validation)
**Evidence Grade**: C/D (logical but unvalidated)

## Purpose

Document operational protocols generated from theoretical foundations (M39 theoretical_foundations.md). Each protocol translates deep theory into executable practice.

**Core Principle**: Theory without practice is academic waste. Practice without theory is ad-hoc chaos. These protocols bridge theory and execution.

---

## 1. The 75 Questions Protocol

### 1.1 Purpose

Systematically transfer complete Trade context from Studio (Danilo/Nilo) to Operator (internal team, advisor, investor, Claude agent). Replaces ad-hoc knowledge transfer with structured interrogation.

**Problem Solved**: Operators join Trade with incomplete context → bad decisions, duplicated work, misaligned priorities.

**Theoretical Foundation**:
- **Tononi (IIT)**: Maximize mutual information I(Operator; Trade) by minimizing joint entropy H(Operator, Trade)
- **Method**: Operator asks questions (reduces H(Operator)), Studio answers (reveals H(Trade)), iteration drives mutual information toward maximum

### 1.2 The Protocol

**Phase 1: Immersion** (Operator)
- Operator reads ALL available materials (TUPs, SESSION_LOGs, trackers, _meta.json files)
- Duration: 2-4 hours for full Trade context
- Goal: Surface confusion, gaps, contradictions

**Phase 2: Question Generation** (Operator)
- Operator generates EXACTLY 75 questions organized into 6 categories (15 questions each):
  1. **Unit Economics** (15 questions): CAC, LTV, margins, break-even, cohort behavior
  2. **Operations** (15 questions): Supply chain, manufacturing, fulfillment, customer service
  3. **Marketing** (15 questions): Channels, messaging, content, conversion, retention
  4. **Product** (15 questions): Formulation, positioning, packaging, quality, roadmap
  5. **Team & Organization** (15 questions): Roles, hiring, advisors, culture, decision-making
  6. **Philosophy & Strategy** (15 questions): Thesis, why this Trade, long-term vision, exit scenarios, pivots

**Why 75?**
- Enough to force deep thinking (can't be superficial)
- Not so many that it becomes burdensome (could be 100+, but diminishing returns)
- 15 per category creates balanced coverage (prevents over-indexing on one dimension)

**Phase 3: Projected Answers** (Operator)
- Operator writes PROJECTED answers (what they THINK the answer is based on materials read)
- This reveals gaps (where operator has no guess) and misalignments (where operator guesses wrong)
- Format: Question → Projected Answer → Confidence (High/Medium/Low)

**Phase 4: Correction Round** (Studio)
- Studio reads questions + projected answers
- Studio corrects misalignments, fills gaps, adds context
- Format: Question → Projected Answer (strikethrough if wrong) → Correct Answer → Rationale

**Phase 5: Iteration**
- Operator reviews corrections, generates NEW questions based on answers (answers reveal new gaps)
- Continue until operator confidence = High on 90%+ of questions
- Typical iterations: 2-3 rounds (75 questions → 20 follow-ups → 5 final clarifications)

**Phase 6: Mutual Information Check**
- Test: Studio asks Operator 10 random hard questions (investor-level diligence questions)
- If Operator answers 9/10 correctly → mutual information is high → protocol complete
- If <7/10 → another iteration needed

### 1.3 Operational Example

**Sample Questions** (Unit Economics category):

1. What is current blended CAC across all channels? What is target CAC for scale?
2. What is LTV calculation methodology? (cohort-based, predicted, actual?)
3. At what monthly revenue does Trade reach cash-flow break-even?
4. What are gross margins on hero product? How do they compare to category benchmarks?
5. What percentage of revenue is repeat vs new customer? What is repeat purchase timeline?
6. What is the payback period for paid acquisition? (months to recover CAC)
7. How much working capital is required to scale to $1M ARR? $5M ARR?
8. What are the top 3 unit economic risks? (e.g., CAC inflation, margin compression, churn acceleration)
9. Have we validated unit economics with real cohort data or are these projections?
10. What assumptions in unit economics model are most fragile? (sensitivity analysis)
11. How do unit economics change with subscription vs one-time purchase mix?
12. What is inventory carrying cost as % of COGS? How does it impact margins?
13. At what scale do we achieve next margin expansion milestone? (supplier MOQ tiers, shipping discounts)
14. What is customer acquisition efficiency (CAC/LTV ratio)? What is target ratio for VC fundability?
15. How do unit economics inform pricing strategy? (cost-plus vs value-based pricing)

**Projected Answer Example** (by Operator):

**Q3: At what monthly revenue does Trade reach cash-flow break-even?**

*Projected Answer (Confidence: Low)*: Based on M29 financials, fixed costs are ~$25K/month (salaries, software, overhead). Gross margin is ~60%. So break-even = $25K / 0.6 = $42K MRR. But I don't see validation of this in actuals, so this might be wrong.

**Corrected Answer** (by Studio):

~~$42K MRR~~ → **$65K MRR**

*Rationale*: Your gross margin calculation (60%) is correct for product COGS, but you're missing fulfillment costs (shipping, packaging, returns ~15% of revenue) and payment processing (3%). True contribution margin is ~42%, not 60%. So break-even = $25K / 0.42 = $60K MRR. Plus, you underestimated fixed costs—need to include founder salaries ($15K/month) even if deferred, so real break-even is closer to $65K MRR. This is why M4 fundraising assumes $500K raise (to get to break-even + 6 months runway).

**Operator Learning**: Contribution margin ≠ gross margin (missed fulfillment + processing). Fixed costs include deferred salaries. Unit economics directly inform fundraising amount.

### 1.4 Virtual Twin Application

**Special Case**: When Operator = Claude Agent (AI assistant as virtual twin of Trade)

**Goal**: Claude agent can answer ANY question about Trade instantly, as if it IS the Trade.

**Implementation**:
1. Claude reads all TUPs, logs, trackers (full context)
2. Claude generates 75 questions (reveals what Claude doesn't know from docs)
3. Studio answers questions (fills Claude's gaps)
4. Claude updates internal context model
5. Test: Investor asks Claude 10 hard questions → Claude answers fluently → Virtual Twin is operational

**Use Case**: Investor diligence, advisor onboarding, team alignment (everyone can query Virtual Twin instead of bothering founders)

**Status**: [experimental — requires Claude agent with persistent memory and full Trade context loaded]

### 1.5 Evidence Grade: D

**Why D-grade**:
- Protocol is NEW (not battle-tested)
- No empirical validation (have not run full 75Q protocol with real operator yet)
- Inspired by pedagogy research (Socratic method, active recall) but not directly tested in Trade context

**Upgrade Path to C**:
- Run protocol with 1 real operator (internal hire, advisor, or investor)
- Measure: time to mutual information (hours to 90% confidence), retention (test again in 2 weeks), quality (can operator make good decisions?)
- Document outcomes, iterate on question categories

**Upgrade Path to B**:
- Run across 3+ Trades, 5+ operators
- Measure correlation between protocol completion and operator effectiveness (decisions made, mistakes avoided)
- Refine question templates, optimal iteration count

**Confidence**: Medium (logical, but untested)

---

## 2. The 5-6 Bullets Protocol

### 2.1 Purpose

Compress complex information without loss of critical content. Enforce cognitive discipline: say more with fewer words.

**Problem Solved**: Information overload, wall-of-text communication, decision paralysis from too much detail.

**Theoretical Foundation**:
- **Alexander (Property 14: Simplicity)**: Living systems have essential simplicity—reduced to essence, no waste
- **Information Theory**: High information density = low entropy per bit = efficient communication

### 2.2 The Protocol

**Rule**: All Trade communication (email, Slack, strategy docs, investor updates) MUST be compressible to 5-6 bullets.

**Exception**: Deep work documents (TUPs, protocols, research) are exempt (those ARE the long-form source material).

**Structure**:
```
Topic: [One-line summary]

• [Bullet 1: Core context or problem]
• [Bullet 2: Key finding or decision]
• [Bullet 3: Supporting evidence or rationale]
• [Bullet 4: Implication or next action]
• [Bullet 5: Risk or open question]
• [Optional Bullet 6: Secondary detail if essential]

[Link to long-form source if deeper detail needed]
```

**Constraints**:
- Each bullet: 1-2 sentences MAX (20-40 words)
- Total: 100-240 words (5-6 bullets × 20-40 words)
- No sub-bullets (forces prioritization—if you need sub-bullets, you're not compressing enough)
- If you can't fit in 5-6 bullets, you don't understand it well enough (Feynman principle)

### 2.3 Operational Example

**Bad** (wall of text):

> We've been analyzing the unit economics for the supplement Trade and there are some interesting findings. The CAC on Facebook is currently $45 which is higher than we expected based on industry benchmarks of $30-35 for supplement brands. However, the LTV is strong at $180 based on 3.2 repeat purchases over 18 months with an average order value of $56. The contribution margin after COGS, fulfillment, and payment processing is 42% which gives us a payback period of 2.4 months. This is actually quite good and suggests we should scale Facebook spend despite the high CAC. The risk is that CAC could inflate as we scale (common in FB ads) and the LTV calculation is based on early cohorts which might not be representative. We also need to consider that we're currently only spending $5K/month on Facebook so scaling to $50K/month might reveal efficiency losses. Recommendation is to scale cautiously to $15K/month and monitor cohort behavior closely.

**Good** (5-6 bullets):

> **Topic**: Unit Economics Support Cautious FB Scaling

> • CAC $45 (high vs $30-35 benchmark) but LTV $180 (3.2 repeat purchases) gives healthy 4:1 ratio
> • Contribution margin 42% → payback period 2.4 months (acceptable for VC-backed growth)
> • Early cohorts look strong but sample size small (only $5K/month spend to date)
> • **Decision**: Scale FB spend cautiously to $15K/month, monitor CAC inflation and cohort retention
> • **Risk**: CAC may inflate at scale; LTV may compress if early adopters aren't representative
> • [Full analysis in M4 Unit Economics tab]

**Why This Works**:
- Reader gets core decision (scale to $15K) in 30 seconds
- Key data points present (CAC, LTV, margin, payback)
- Risk clearly flagged (CAC inflation, LTV compression)
- Link to deep source for those who want detail

### 2.4 Copy Excellence Methodology

**Extension of 5-6 Bullets**: Copy quality = compression without loss.

**Principle**: Great writing is dense. Every word carries meaning. Zero filler.

**Test**: Can you delete 20% of words without losing information? If yes → copy is loose → compress more.

**Example Compression**:

**Loose** (45 words):
> Our supplement formulation uses high-quality magnesium glycinate which is a highly bioavailable form of magnesium that is absorbed better by the body compared to cheaper forms like magnesium oxide. This makes our product more effective and justifies the premium pricing we charge.

**Compressed** (22 words, 51% reduction, zero loss):
> We use magnesium glycinate (high bioavailability vs cheap magnesium oxide). Better absorption = more effective product = premium pricing justified.

**Operational Protocol**:
1. Write first draft (don't self-edit while writing)
2. Cut 20% (delete filler, combine sentences, use stronger verbs)
3. Cut another 10% (if you can't, copy is tight)
4. Read aloud (does it flow? is it clear?)
5. Ship

**Application**:
- Marketing copy (landing pages, ads, emails)
- Investor updates (force 5-6 bullets)
- Internal strategy docs (exec summary in bullets)
- SESSION_LOG entries (compress work into bullets)

### 2.5 Evidence Grade: C

**Why C-grade**:
- Protocol is widely used in writing pedagogy (Strunk & White, On Writing Well) → B-grade for general writing
- NOT specifically validated for Trade operations → C-grade for IonWave application
- Assumes shorter = better, but some contexts require detail (false compression can lose meaning)

**Upgrade Path**:
- A/B test marketing copy: loose vs compressed (measure CTR, conversion)
- A/B test investor updates: long-form vs bullets (measure response rate, meeting requests)
- Measure operator satisfaction (does bullet format improve decision speed?)

**Confidence**: Medium-High (writing principle is well-established, Trade application is extrapolation)

---

## 3. The 3-Gate Review Model

### 3.1 Purpose

Replace sequential stage-gate product development (Feasibility → Viability → Desirability) with parallel continuous evaluation.

**Problem Solved**: Traditional stage-gate assumes you can validate one dimension at a time (Tech first, then business model, then customer need). Reality: all three interact. Sequential testing is slow and misses emergent failures.

**Theoretical Foundation**:
- **Ashby (Requisite Variety)**: Market has multi-dimensional complexity → review system needs multi-dimensional sensing
- **Bohm (Implicate Order)**: Dimensions aren't separate—they're projections from unified Trade-as-system

### 3.2 The Three Gates

**Gate 1: Feasibility** (Can we build it?)
- Technical: formulation possible, manufacturing feasible, supply chain reliable
- Regulatory: FDA compliant, claims defensible, labeling legal
- Timeline: can we ship in target window?
- **Question**: Is this technically achievable with acceptable risk?

**Gate 2: Viability** (Should we build it?)
- Unit economics: CAC/LTV ratio acceptable, margins sufficient
- Market size: TAM/SAM/SOM support target revenue
- Competitive positioning: differentiated enough to win share
- **Question**: Can this be a profitable, scalable business?

**Gate 3: Desirability** (Will customers buy it?)
- Customer need: problem is real, painful, frequent
- Solution fit: our product solves problem better than alternatives
- Willingness to pay: price point acceptable for value delivered
- **Question**: Do customers actually want this enough to buy repeatedly?

### 3.3 The Protocol: Parallel, Not Sequential

**Traditional (Wrong)**:
```
Step 1: Prove Feasibility (3 months) → IF PASS →
Step 2: Prove Viability (3 months) → IF PASS →
Step 3: Prove Desirability (3 months) → Launch

Total time: 9 months (if everything passes first try)
```

**Risk**: Spend 6 months on feasibility + viability, then discover customers don't want it (desirability fails) → 6 months wasted.

**IonWave (Right)**:
```
Week 1-4: Test all three gates in parallel (cheap tests)
  - Feasibility: Talk to 3 formulators, get rough quotes
  - Viability: Build rough unit economics model with assumptions
  - Desirability: Run customer interviews (n=20), concept test

Week 5-8: Iterate on failures
  - IF Feasibility weak → adjust formulation or find new supplier
  - IF Viability weak → adjust pricing or reduce COGS
  - IF Desirability weak → pivot positioning or target segment

Week 9-12: Build MVP with all three gates passing (cheap validation)
  - Feasibility: Small batch manufacturing (100 units)
  - Viability: Sell at real price, measure true unit economics
  - Desirability: Measure repeat purchase rate (proof of retention)

Total time: 12 weeks (faster AND higher confidence)
```

**Key Insight**: Test all three gates EARLY and CHEAPLY. Don't build expensive solutions to validate feasibility before checking if customers care.

### 3.4 Operational Checklist

**Gate 1: Feasibility Assessment**
- [ ] Formulation technically possible? (consult formulator)
- [ ] Manufacturing feasible at target scale? (consult manufacturer)
- [ ] Supply chain reliable for key ingredients? (check supplier lead times)
- [ ] Regulatory path clear? (consult regulatory attorney)
- [ ] Timeline realistic? (work backwards from launch date)
- **Output**: Feasibility score 1-10, key risks, go/no-go

**Gate 2: Viability Assessment**
- [ ] Gross margin >40% achievable? (COGS estimate from suppliers)
- [ ] CAC <$50 achievable? (benchmark from comparable brands)
- [ ] LTV >$150 achievable? (assume 3+ repeat purchases)
- [ ] Market size >$100M TAM? (top-down + bottom-up market sizing)
- [ ] Competitive positioning defensible? (3 clear differentiation points)
- **Output**: Viability score 1-10, key assumptions, sensitivity analysis

**Gate 3: Desirability Assessment**
- [ ] Customer problem validated? (20+ interviews, problem frequency + pain level)
- [ ] Solution fit confirmed? (customers say "I would buy this" without prompting)
- [ ] Willingness to pay confirmed? (customers accept target price point)
- [ ] Retention signals present? (customers say "I would reorder" or "subscribe")
- [ ] Differentiation resonates? (customers can articulate why this vs alternatives)
- **Output**: Desirability score 1-10, customer quotes, concerns

**Decision Rule**:
- All three gates 7+ → Proceed to build
- Any gate <5 → Stop or pivot (fundamental flaw)
- Any gate 5-7 → Iterate (addressable concerns)

**Continuous Monitoring**: Re-evaluate all three gates monthly (assumptions decay, markets shift).

### 3.5 Evidence Grade: C

**Why C-grade**:
- Parallel validation is standard in Lean Startup, Design Thinking (B-grade for concept)
- NOT validated specifically for supplement D2C (C-grade for IonWave application)
- Inspired by Danilo's review process (real pattern) but formalized here (not battle-tested in this exact form)

**Upgrade Path**:
- Apply to 3 product concepts (run parallel 3-gate assessment)
- Measure: time-to-decision, false positives (passed gates but failed in market), false negatives (failed gates but might have worked)
- Compare to sequential validation (if possible via A/B test with two products)

**Confidence**: Medium (logical, inspired by real review process, but not validated)

---

## 4. Virtual Twin Specification

### 4.1 Purpose

Create AI agent (Claude) that operates as virtual twin of Trade—knows everything Trade knows, can answer questions as if it IS the Trade.

**Problem Solved**: Context transfer is bottleneck (founders are single point of failure for Trade knowledge). Virtual Twin scales context to infinite operators.

**Theoretical Foundation**:
- **Tononi (Mutual Information)**: Virtual Twin has I(Twin; Trade) ≈ 1.0 (maximal mutual information)
- **Bohm (Explicate Order)**: Trade's implicate order (hidden structure) is made explicit in documented TUPs → Virtual Twin can access explicate order

### 4.2 The Specification

**Input Requirements**:
1. **Full TUP Context** (all 41 TUPs, current state of completion)
2. **SESSION_LOG** (history of decisions, work done, reasoning)
3. **TUP_Workshop_Tracker** (progress, what's done, what's next)
4. **ACTIVE_WORK.md** (current concurrent work, who's doing what)
5. **manifest.json** (TUP metadata, quality scores, dependencies, blockers)
6. **_meta.json files** (intelligence gaps, confidence levels, next steps per TUP)

**Capabilities**:
- Answer investor diligence questions (unit economics, market size, competitive positioning, team, risks)
- Handle advisor onboarding (explain Trade thesis, strategy, execution plan)
- Support operator decisions (query context, get historical rationale, identify dependencies)
- Generate investor updates (compress Trade state into 5-6 bullets)
- Identify gaps (what's missing? what's blocking progress?)

**Test**: Virtual Twin passes if indistinguishable from founder in Q&A context (investor can't tell if talking to AI or human based on answer quality).

### 4.3 Operational Protocol

**Deployment**:
1. Load all context into Claude (via CLAUDE.md, file reads, session startup protocol)
2. Test with 20 hard questions (investor-level diligence)
3. Score: How many answers are founder-quality? (8+/10 → pass)
4. Iterate: Fill gaps revealed by wrong answers (missing TUPs, unclear context)
5. Deploy: Virtual Twin available 24/7 for queries (Slack bot, email interface, API)

**Use Cases**:
- **Investor Diligence**: Forward investor to Virtual Twin for initial Q&A (saves founder time)
- **Advisor Onboarding**: New advisor queries Virtual Twin to get context (async onboarding)
- **Team Alignment**: Team members query Virtual Twin instead of interrupting founders (scales context)
- **Scenario Planning**: Ask Virtual Twin "What if we 2x Facebook spend?" (it has full context to simulate outcomes)

**Limitations** (honesty required):
- Virtual Twin has ONLY documented knowledge (can't access founder's tacit knowledge, gut instincts, personal relationships)
- If TUPs incomplete (31/41), Virtual Twin has gaps (knows it doesn't know)
- If confidence is marked C/D-grade, Virtual Twin says "this is speculative" (no false confidence)

### 4.4 Current Status: Partial Twin

**Context Loaded** (this session):
- M39 structural files ✓
- 14 content tabs from ops model ✓
- BCL-0 Thesis & Meta cluster context ✓
- Theoretical foundations ✓
- Operational protocols ✓

**Gaps** (not yet loaded):
- M5-M37 execution TUPs (need to read to have full context)
- Historical SESSION_LOG entries (only current session)
- Financial models, customer data (not in TUPs yet)

**Current Capability**: Can answer M39-related questions, BCL-0 strategy questions, theoretical foundation questions. CANNOT answer detailed execution questions (unit economics, supply chain, marketing channels) without loading M5-M37.

**Upgrade Path**: Load remaining TUPs → test with 20 questions → iterate → full Virtual Twin operational.

### 4.5 Evidence Grade: D

**Why D-grade**:
- Concept is NEW (AI agent as virtual twin of Trade)
- Claude has capability (long context, reasoning) but no validation that it works for Trade operations
- Risk: Virtual Twin gives confident wrong answers (Dunning-Kruger AI)

**Upgrade Path to C**:
- Build full Virtual Twin (load all TUPs)
- Test with real investors (blind test: 10 questions to founder, 10 to Twin, investor scores both)
- Measure: accuracy (how many correct?), confidence calibration (does Twin say "I don't know" when it should?)

**Upgrade Path to B**:
- Deploy across 3+ Trades
- Measure: investor satisfaction, time saved for founders, decision quality when operators use Twin
- Iterate on context format (what docs structure works best for Claude?)

**Confidence**: Low-Medium (high potential, unproven execution)

---

## 5. Verification Strategy (Trust Procurement)

### 5.1 Purpose

Systematically acquire external validation for Trade decisions across four trust dimensions: Strategic, Domain, Execution, Vibes.

**Problem Solved**: Internal teams lack expertise in all dimensions → bad decisions. Need external experts to verify assumptions, challenge thinking, fill gaps.

**Theoretical Foundation**:
- **Ashby (Requisite Variety)**: Trade complexity > team variety → need external variety (advisors, experts) to match market complexity
- **Tononi (Integrated Information)**: External verification is information integration (expert knowledge + Trade knowledge → higher Φ)

### 5.2 The Four Trust Dimensions

**1. Strategic Trust** (Is the big picture right?)
- **Scope**: Thesis (M0), market opportunity (M1), business model (M2), exit scenarios (M38)
- **Verifier Profile**: Experienced founder, VC partner, PE operator
- **Questions**: Is thesis defensible? Is market timing right? Is TAM real? Can this be venture-scale?
- **IonWave Need**: 2-3 strategic advisors (1 founder who exited, 1 VC, 1 PE operator)

**2. Domain Trust** (Is the technical/regulatory execution right?)
- **Scope**: Formulation (M5), manufacturing (M6), supply chain (M8), regulatory (M9)
- **Verifier Profile**: Supplement formulator, FDA regulatory attorney, D2C supply chain expert
- **Questions**: Is formulation safe/effective? Are claims legally defensible? Is supply chain resilient?
- **IonWave Need**: 1 formulator, 1 regulatory attorney, 1 supply chain advisor

**3. Execution Trust** (Is the operational plan realistic?)
- **Scope**: Unit economics (M4), marketing (M15-M21), operations (M26-M28), team (M31-M37)
- **Verifier Profile**: D2C operator who scaled similar brand, growth marketer, ops leader
- **Questions**: Are unit economics realistic? Is CAC achievable? Is org structure right?
- **IonWave Need**: 1-2 D2C operators (scaled $0→$10M)

**4. Vibes Trust** (Does this feel right?)
- **Scope**: Team dynamics, founder-market fit, culture, decision-making velocity
- **Verifier Profile**: Operator with strong intuition, pattern-matching from 10+ Trades
- **Questions**: Does this team have "it"? Is there hidden dysfunction? Are they moving fast enough?
- **IonWave Need**: 1 vibes checker (Nilo currently fills this role)

### 5.3 Verification Protocol

**Step 1: Identify Verification Need**
- Which TUPs have low confidence (C/D-grade)?
- Which decisions are high-stakes (irreversible, expensive)?
- Which domains are outside team expertise?
- **Output**: List of 5-10 critical verification needs (prioritized)

**Step 2: Procure Verifiers**
- **Warm Intro Path**: Map social capital (who knows who?), ask for intros (higher trust)
- **Cold Outreach Path**: LinkedIn, Twitter, industry groups (lower trust, higher volume)
- **Advisor Hit List**: Target 10 profiles per verification need, reach out to 5, convert 1-2
- **Compensation**: Equity (0.1-0.5% for advisor), consulting fee ($200-500/hr for expert), free product (for influencers/testers)

**Step 3: Verification Engagement**
- **Format**: 60-90 min deep dive (share context beforehand, run through questions, get feedback)
- **Questions to Ask**:
  - "What are we missing?" (reveal blind spots)
  - "What would you do differently?" (get alternative perspective)
  - "What's the biggest risk?" (surface hidden dangers)
  - "On a scale 1-10, how confident are you in this plan?" (calibrate confidence)
- **Output**: Written notes, confidence score, action items, follow-up questions

**Step 4: Integrate Feedback**
- Update TUPs with verification insights (mark evidence grade upgrade: C → B with [verified by X])
- Adjust strategy/tactics based on verifier feedback
- Document dissent if verifier disagrees (include contrary opinion, don't suppress)

**Step 5: Ongoing Engagement**
- Convert verifiers to advisors (formal relationship, equity, quarterly check-ins)
- Build "Trust Network" (5-10 advisors covering all four trust dimensions)
- Re-verify annually (assumptions decay, markets shift, need fresh eyes)

### 5.4 Advisor Hit List (IonWave Specific)

**Strategic Trust Targets**:
- [ ] Founder who scaled D2C supplement brand $0→$50M+ (exits or large raise)
- [ ] VC partner at consumer-focused fund (Forerunner, Silas, Lerer Hippeau)
- [ ] PE operator at consumer rollup (Branded, Foundry, Monogram)

**Domain Trust Targets**:
- [ ] Supplement formulator with FDA experience (contract manufacturer or independent)
- [ ] Regulatory attorney specializing in supplement claims (structure/function vs disease claims)
- [ ] D2C supply chain expert (3PL, inventory management, freight)

**Execution Trust Targets**:
- [ ] D2C marketing leader (scaled Facebook/Instagram ads $10K→$500K/month)
- [ ] Retention/email marketing expert (Klaviyo, SMS, subscription optimization)
- [ ] Operations leader (CS, fulfillment, returns, fraud)

**Vibes Trust**:
- [x] Nilo (currently fulfilling this role—validates all four dimensions)

**Social Capital Mapping**:
- [VOID — requires network mapping: who in current network has warm intros to targets above?]
- Method: LinkedIn 2nd-degree connections, Twitter follows, ask portfolio companies for intros

### 5.5 Evidence Grade: C

**Why C-grade**:
- Verification strategy is standard practice in startups (advisors, experts) → B-grade for concept
- Four trust dimensions are NEW framing (not validated) → C-grade for IonWave model
- Procurement tactics are logical but not tested (cold outreach hit rate unknown, compensation models unproven)

**Upgrade Path**:
- Execute: Reach out to 20 targets, measure conversion (intros → meetings → advisory relationships)
- Measure: Does verification change decisions? (before/after comparison)
- Validate: Do verified TUPs perform better? (fewer mistakes, faster execution)

**Confidence**: Medium (logical, standard practice, but IonWave-specific framing is new)

---

## 6. Pattern Language Application Protocol

### 6.1 Purpose

Use Christopher Alexander's pattern language methodology to extract reusable patterns from Trade execution → create OpKits.

**Problem Solved**: Every Trade reinvents wheels (pricing strategy, marketing funnels, supply chain). Pattern language captures what works, makes it reusable.

**Theoretical Foundation**:
- **Alexander**: Pattern = recurring solution to recurring problem in specific context
- **Bohm**: Pattern extraction = making implicate order explicit (hidden structure → documented template)

### 6.2 Pattern Structure (Alexander Format)

**Pattern Name**: Short, memorable (e.g., "3-Gate Review", "75 Questions", "Copy Excellence")

**Context**: When does this pattern apply? (e.g., "When onboarding new operator to Trade")

**Problem**: What problem does this solve? (e.g., "Operator lacks complete Trade context → bad decisions")

**Forces**: What tensions exist? (e.g., "Need deep context vs limited time; need accuracy vs speed")

**Solution**: How do you solve it? (Step-by-step protocol, examples, checklists)

**Consequences**: What are results/side-effects? (Benefits, costs, trade-offs)

**Related Patterns**: What other patterns does this connect to? (Before/after patterns, alternatives)

### 6.3 Extraction Protocol

**Step 1: Identify Pattern Candidate**
- Look for recurring problems (appears in 3+ TUPs or 3+ Trades)
- Look for intuitive solutions (operators do this naturally but don't document)
- Look for successful tactics (measurably works better than alternatives)

**Step 2: Document Pattern** (use Alexander structure above)
- Name it (simple, memorable)
- Define context (when to use)
- Describe problem (what pain does it solve)
- Map forces (what tensions exist)
- Detail solution (step-by-step)
- Note consequences (benefits, costs)
- Link related patterns (what comes before/after)

**Step 3: Test Pattern** (reusability check)
- Try pattern in new context (different TUP, different Trade)
- Does it work without modification? (A-grade reusability)
- Does it need adaptation? (B-grade reusability, note required adaptations)
- Does it fail? (D-grade, revisit pattern definition)

**Step 4: Refine Pattern**
- Iterate based on test results (adjust context definition, clarify solution steps)
- Add examples (concrete applications from multiple contexts)
- Mark maturity (Experimental → Proven → Canonical)

**Step 5: Register as OpKit**
- Create OK-XXX-NNN format document (e.g., OK-M39-001)
- Add to opkits/registry.json
- Cross-reference in TUP that originated pattern (feeds_into in manifest.json)

### 6.4 Example: The "VOID Protocol" Pattern

**Pattern Name**: VOID Protocol (Explicit Gap Marking)

**Context**: When documenting Trade knowledge (TUPs, strategies, protocols) and encountering unknown information or unvalidated assumptions.

**Problem**: Documentation often pretends completeness (hides gaps). This creates false confidence → bad decisions based on missing data.

**Forces**:
- Tension 1: Want to appear competent vs need to be honest about gaps
- Tension 2: Want complete documentation vs realistic time constraints
- Tension 3: Gaps feel like failure vs gaps are normal part of learning

**Solution**:
1. When you encounter gap, mark it explicitly: `[VOID — requires X]` where X is what's needed to fill gap
2. Examples:
   - `[VOID — requires customer research: 20+ interviews to validate problem frequency]`
   - `[VOID — requires supplier quotes: actual COGS data to validate margins]`
   - `[VOID — requires advisor verification: regulatory attorney to confirm claims are legal]`
3. Document gap in _meta.json under `intelligence_gaps` (structured tracking)
4. Use gaps to guide next work (VOID markers are roadmap)

**Consequences**:
- **Benefit**: Honest transparency → better decisions (team knows what they don't know)
- **Benefit**: Gaps guide research priorities (clear what to work on next)
- **Cost**: Can feel uncomfortable (admitting ignorance)
- **Cost**: Requires discipline (easy to skip marking gaps)

**Related Patterns**:
- **Before**: Evidence Grading (use A/B/C/D to mark confidence level)
- **After**: Verification Strategy (fill VOIDs through expert consultation)
- **Alternative**: Probabilistic Estimates (instead of VOID, give range with confidence interval)

**Maturity**: Proven (used across 31 TUPs in IonWave, works well)

### 6.5 Evidence Grade: B

**Why B-grade**:
- Pattern language methodology is well-established (Alexander's work is seminal) → A-grade for concept
- Application to Trade operations is NEW (not standard practice) → B-grade for IonWave implementation
- Works well in practice (VOID protocol, TUP structure, TWP-001 are all pattern-based) → B-grade evidence

**Upgrade Path to A**:
- Extract 20+ patterns from IonWave execution
- Apply patterns across 3+ Trades
- Measure reusability success rate (what % of patterns work without modification?)

**Confidence**: High (pattern language is proven methodology, IonWave application shows early success)

---

## 7. Roadmap: Protocol Deployment Sequence

### 7.1 Immediate Deployment (Next 30 Days)

**Protocol 1: VOID Protocol** (already in use, formalize)
- [x] Document pattern (done in theoretical_foundations.md)
- [ ] Train operators to use consistently
- [ ] Audit existing TUPs for unmarked gaps

**Protocol 2: 5-6 Bullets** (start now)
- [ ] Apply to all SESSION_LOG entries (compress work into bullets)
- [ ] Apply to investor updates (force bullet format)
- [ ] Measure: operator satisfaction with format

**Protocol 3: 3-Gate Review** (apply to next product decision)
- [ ] Score current product on all three gates (parallel assessment)
- [ ] Document assumptions per gate
- [ ] Re-score monthly (track assumption decay)

### 7.2 Near-Term Deployment (30-90 Days)

**Protocol 4: 75 Questions** (next operator onboarding)
- [ ] Run full protocol with next hire/advisor/investor
- [ ] Measure: time to mutual information, operator effectiveness
- [ ] Iterate on question categories based on gaps revealed

**Protocol 5: Virtual Twin** (load full context)
- [ ] Load all 41 TUPs into Claude (systematic read)
- [ ] Test with 20 hard questions (founder scores answers)
- [ ] Deploy for investor diligence (next fundraise)

**Protocol 6: Verification Strategy** (build advisor network)
- [ ] Map social capital (who has warm intros to targets?)
- [ ] Reach out to 20 targets (5 per trust dimension)
- [ ] Convert 5-10 to advisory relationships
- [ ] Run verification sessions for low-confidence TUPs

### 7.3 Long-Term Deployment (90+ Days)

**Protocol 7: Pattern Language Extraction** (systematize OpKit creation)
- [ ] Extract 10 patterns from IonWave execution
- [ ] Test patterns in new Trade context
- [ ] Build pattern library (20+ patterns covering all BCLs)

**Protocol 8: Aliveness Scoring** (measure Trade quality)
- [ ] Build rubric for Alexander's 15 properties (objective criteria)
- [ ] Score IonWave Trade on all 15 properties
- [ ] Track aliveness over time (is Trade getting more alive?)

**Protocol 9: Mutual Information Measurement** (quantify integration)
- [ ] Define proxy metrics for I(Trade; Operator)
- [ ] Instrument with surveys (operator self-report: "I know everything I need to decide")
- [ ] Correlate mutual information with decision quality

### 7.4 Success Metrics

**Protocol Adoption**:
- % of operators using protocols (target: 80%+)
- % of TUPs using VOID markers (target: 100%)
- % of communication in 5-6 bullet format (target: 90%+)

**Protocol Effectiveness**:
- Operator time-to-productivity (target: <2 weeks from hire to effective)
- Decision quality (target: <10% decisions reversed due to missing context)
- Verification impact (target: 30%+ of verifications lead to strategy changes)

**Protocol Reusability**:
- % of OpKits reused across Trades (target: 70%+)
- % of patterns that work without modification (target: 50%+)
- Time saved via OpKit reuse (target: 30% reduction in TUP workshop time)

---

## 8. Evidence Summary & Confidence Calibration

### 8.1 Per-Protocol Evidence Grades

| **Protocol** | **Evidence Grade** | **Justification** | **Upgrade Path** |
|--------------|-------------------|-------------------|------------------|
| 75 Questions | D | New, untested, logical but unvalidated | Run with 1 operator → C; Run with 5+ operators → B |
| 5-6 Bullets | C | Writing principle established, Trade application new | A/B test effectiveness → B; Cross-Trade validation → A |
| 3-Gate Review | C | Lean Startup concept, IonWave formalization new | Apply to 3 products → B; Measure outcomes → A |
| Virtual Twin | D | Concept new, AI capability exists, no validation | Build + test with investors → C; Cross-Trade deploy → B |
| Verification Strategy | C | Standard practice, four trust dimensions new | Execute with 20 targets → B; Measure impact → A |
| Pattern Language | B | Alexander methodology proven, Trade application works | Extract 20+ patterns → A |
| VOID Protocol | B | Proven in IonWave (31 TUPs), needs cross-Trade test | Apply to 3 Trades → A |

### 8.2 Overall Evidence Grade: C

**Why C-grade**:
- Protocols are logical extensions of theory (not arbitrary)
- Some protocols proven in writing/pedagogy (bullets, pattern language)
- IonWave-specific applications are NEW (not battle-tested)
- No empirical validation of effectiveness (no A/B tests, no outcome data)

**Confidence**: Medium
- High confidence in underlying theory (Alexander, Bohm, Tononi, Ashby = A-grade sources)
- Medium confidence in operational translations (logical but unvalidated)
- Low confidence in specific parameter choices (75 questions vs 50? 5-6 bullets vs 3-5?)

**Upgrade Path to B-grade**:
1. Deploy all protocols systematically (next 90 days)
2. Measure outcomes (time saved, decision quality, operator satisfaction)
3. Iterate based on evidence (adjust parameters, refine steps)
4. Document validated versions separately from experimental ones

**Upgrade Path to A-grade**:
1. Apply protocols across 3+ Trades
2. Run controlled comparisons (with protocols vs without protocols)
3. Publish findings (case studies, blog posts, potentially academic paper)
4. Industry adoption (other operators use IonWave protocols)

### 8.3 Known Limitations

**Limitation 1**: Protocols assume high operator capability (critical thinking, writing skill, technical comfort). May not work with junior operators.

**Limitation 2**: Protocols are time-intensive upfront (75 questions takes hours, Virtual Twin requires full TUP load). Trade-off: upfront cost vs long-term efficiency.

**Limitation 3**: Protocols are theory-heavy (requires understanding Alexander, Bohm, Tononi to fully grasp rationale). Operators may apply mechanically without understanding (cargo cult risk).

**Limitation 4**: No validation that theory-practice translation is optimal (maybe different operational protocols would be better?). Current protocols are one interpretation of theory.

**Mitigation**: Treat all protocols as experimental, iterate based on evidence, maintain intellectual humility.

---

## 9. Intelligence Gaps

**Gap 1**: What is optimal question count for context transfer? (75 is educated guess, not derived from research)

**Gap 2**: Can Virtual Twin actually pass investor diligence? (untested hypothesis)

**Gap 3**: Do verified TUPs perform better than unverified TUPs? (no outcome data yet)

**Gap 4**: What is right balance of protocol rigor vs execution speed? (risk of over-process)

**Gap 5**: Are there better operational translations of theory? (current protocols are one interpretation, not exhaustive)

**Gap 6**: [VOID — requires cross-Trade testing: apply protocols to 3+ Trades to validate reusability]

**Gap 7**: [VOID — requires outcome measurement: track decision quality before/after protocol adoption]

**Gap 8**: [VOID — requires cost-benefit analysis: time invested in protocols vs efficiency gained]

---

## 10. Key Takeaways (Operator Summary)

**For operators who want quick reference**:

1. **75 Questions**: Transfer complete Trade context via structured interrogation (6 categories, 15 questions each, operator writes projected answers, Studio corrects).

2. **5-6 Bullets**: Compress all Trade communication to 5-6 bullets (forces clarity, prevents information overload, dense meaning).

3. **3-Gate Review**: Test Feasibility, Viability, Desirability in parallel (not sequential), iterate on failures, don't build expensive solutions before validating customer need.

4. **Virtual Twin**: Load all Trade context into Claude → AI agent can answer questions as if it IS the Trade (scales context to infinite operators).

5. **Verification Strategy**: Procure external validation across four trust dimensions (Strategic, Domain, Execution, Vibes), convert verifiers to advisors.

6. **Pattern Language**: Extract recurring solutions to recurring problems → create reusable OpKits (name, context, problem, solution, consequences, related patterns).

7. **Evidence Grade**: C (logical but unvalidated), treat as experimental, iterate based on outcomes.

**One-sentence summary**: Theory-derived protocols that systematically transfer context (75Q), compress complexity (5-6 bullets), validate decisions (3-gate review), scale knowledge (Virtual Twin), procure trust (verification), and extract patterns (OpKits).

---

**Document Status**: Workshop complete, protocols ready for deployment (experimental).

**Next Steps**: Deploy protocols sequentially (VOID → Bullets → 3-Gate → 75Q → Twin → Verification → Patterns), measure outcomes, iterate.

**Confidence**: Medium (logical translations from strong theory, requires empirical validation).
