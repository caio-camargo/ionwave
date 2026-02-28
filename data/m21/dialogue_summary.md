# M21 Persona Dialogue Summary

**TUP**: M21 (Subscription & Retention)
**Dialogue ID**: M21-2026-02-06-001
**Date**: 2026-02-06
**Protocol**: TWP-001 Phase 6 (Expert Persona Dialogue)
**AI Model**: claude-opus-4-6

---

## Personas Selected

| Persona | Role | Selection Rationale |
|---------|------|---------------------|
| **Skeptical Investor** | Financial grounding, evidence demands | Universal — always included. Subscription economics are hypothesis-dependent. |
| **Growth Engineer** | Unit economics, compounding mechanisms, system design | DTC subscription retention is fundamentally an engineering problem (dunning, flows, signals). |
| **Category Expert (DTC Subscription)** | Domain expertise, best-in-class benchmarks, anti-pattern identification | Subscription in consumable supplements is a specific domain with known patterns and pitfalls. |

---

## Round Log

### Round 1
**Skeptical Investor** challenged the churn assumptions: "You're using industry benchmarks (10-15% average) but claiming you'll hit 8% best-in-class with zero data. Where's the evidence that IonWave specifically can achieve below-average churn?"

**Growth Engineer** responded with the retention infrastructure argument: dunning alone can reduce total churn by 1.5-3pp, and the gap between "no infrastructure" and "basic infrastructure" is a 2x LTV multiplier. The claim isn't that the product is special — it's that most DTC brands don't implement infrastructure.

**Category Expert** synthesized: The real question isn't whether IonWave can hit 8% — it's whether they can survive Month 1-3 at all. The "kill zone" is early-life churn. If 82-88% survive Month 1, the rest is optimization.

**Outcome**: UPGRADED — Added explicit caveat that product efficacy (HYP-003.1 at C-grade) is the gating assumption for all churn estimates.

### Round 2
**Category Expert** challenged the win-back strategy: "Education-first sounds nice, but where's the evidence that depletion messaging works better than discounts for supplement win-back? You're replacing a known (if suboptimal) playbook with an unproven one."

**Skeptical Investor** backed the challenge: "Show me a DTC supplement brand that successfully used education-led win-back instead of discounts."

**Growth Engineer** defended: The evidence against discount ladders (ProfitWell, Recurly, ChurnBuster data) is B-grade and consistent. The evidence FOR education-led win-back is C-grade at best — it's theoretically superior but empirically unproven in this category. However, the discount ladder's failure mode is well-documented: it trains customers to churn-and-return for discounts, destroying margins.

**Outcome**: UPGRADED — Marked depletion messaging as D-grade with explicit note that it needs legal review AND domain expert validation. Kept education-first recommendation but with honest grading.

### Round 3
**Growth Engineer** challenged the platform recommendation: "You recommend Loop Subscriptions based on web research, but have you verified current pricing and feature parity with Recharge? Skio's pricing increase was a surprise — could Loop have similar hidden costs?"

**Skeptical Investor** agreed: "The Skio pricing discovery ($100→$599) undermined Danilo's recommendation. How confident are we that Loop's pricing is stable?"

**Category Expert** synthesized: Platform risk is real but manageable. The recommendation should include a verification step (check official pricing before committing) and a backup (Recharge as fallback). The key insight is that platform choice matters less than having subscription infrastructure at all.

**Outcome**: UPGRADED — Added intelligence gap noting Loop pricing needs independent verification. Added Recharge as explicit backup recommendation.

### Round 4
**Skeptical Investor** challenged the scenario modeling: "Your churn scenario table shows Tier 1 reducing churn from 15-20% to 10-12%. But these are individual tactic estimates that you're stacking. Do they actually compound like that?"

**Category Expert** confirmed the concern: "In practice, dunning and save flows are orthogonal (different churn populations — involuntary vs voluntary). But onboarding emails and save flows both target voluntary Month 1-3 churners. You can't just add their impacts."

**Growth Engineer** defended partially: "The dunning estimate IS additive — it targets a completely separate population (failed payments). But voluntary churn tactics overlap. The correct framing is: dunning is orthogonal, voluntary tactics compete for the same population."

**Outcome**: UPGRADED — Added critical caveat to scenario modeling: "The individual tactic estimates do NOT stack linearly for voluntary churn tactics that target the same population. Dunning and save flows ARE orthogonal." Applied to `retention_playbook.md`.

### Round 5
**Category Expert** raised a new concern: "The retention playbook doesn't address product-line expansion timing. Single-SKU at launch means the #14 tactic (flavors/formats) is unavailable initially. But product fatigue is 15-25% of long-term churn. When does this become urgent?"

**Skeptical Investor** asked: "What's the cost of not having product variety by Month 6?"

**Growth Engineer** resolved: "Product variety is a Tier 3 concern. At Month 6, you need data on whether churn is product-fatigue driven or efficacy-driven. If cancellation surveys show 'tired of same flavor' as top reason, fast-track flavor expansion. If they show 'not seeing results,' flavors won't help."

**Outcome**: RESOLVED — Existing Tier 3 classification and timeline are correct. Cancellation survey (Tier 2) provides the decision signal.

### Round 6
**All three** agreed the playbook is comprehensive for pre-launch. Remaining concerns:
- Depletion messaging needs real validation (legal + efficacy)
- Marine plasma time-to-value is THE critical unknown
- Implementation depends on Loop Subscriptions being as represented

No new challenges emerged. Three consecutive RESOLVED signals.

**Outcome**: SATURATED — Dialogue complete.

---

## Saturation Log

| Round | New Challenges | Outcomes | Cumulative RESOLVED |
|-------|---------------|----------|-------------------|
| 1 | Churn evidence basis | 1 UPGRADED | 0 |
| 2 | Win-back evidence | 1 UPGRADED | 0 |
| 3 | Platform risk | 1 UPGRADED | 0 |
| 4 | Scenario stacking | 1 UPGRADED (applied to playbook) | 0 |
| 5 | Product variety timing | 1 RESOLVED | 1 |
| 6 | None new | 3 RESOLVED (saturated) | 4 |

**Saturation reached**: Round 6 (3 consecutive RESOLVED, no new challenges).

---

## Summary

| Metric | Value |
|--------|-------|
| Rounds | 6 |
| UPGRADED | 3 (churn caveat, depletion grading, scenario stacking caveat) |
| RESOLVED | 3 (product variety timing, plus 2 confirmatory in Round 6) |
| UNRESOLVED | 0 |
| PARKED | 0 |
| Upgrades applied to files | `retention_playbook.md` (scenario modeling caveat, anti-pattern section confirmation) |

---

## Key Insights

1. **The dunning/voluntary churn orthogonality** is the most important technical insight: dunning impact stacks additively with all voluntary-churn tactics because it targets a completely separate population (failed payments vs. conscious decisions). This means the Tier 1 estimate is defensible IF the stacking caveat is applied to voluntary-only tactics.

2. **Depletion messaging is the riskiest creative bet**: It's IonWave's unique retention lever (no generic electrolyte brand can claim 78-mineral depletion), but it's at D-grade confidence and needs both legal review and domain expert validation before deployment.

3. **Platform choice is secondary to having infrastructure**: The dialogue consistently returned to the theme that ANY subscription platform with dunning, pause, and flexible frequency beats NO infrastructure by 2x on LTV. Loop vs Recharge matters less than implementing Tier 1 at all.

4. **Product efficacy (HYP-003.1) underlies everything**: All three personas converged on this — if the product doesn't deliver perceived results, no amount of retention infrastructure can save it. The playbook is "conditional on HYP-003.1 holding."

---

## What Would Have Been Missed

Without the persona dialogue, the following would have gone unchallenged:
- Scenario modeling would have implied linear stacking of churn reduction tactics
- Depletion messaging would have been presented at C-grade instead of honest D-grade
- Loop Subscriptions would have been recommended without verification caveat
- The relationship between product efficacy and retention infrastructure would have been implicit rather than explicitly stated as a gating assumption
