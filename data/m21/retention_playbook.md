# Retention Playbook — M21

**TUP**: M21 (Subscription & Retention)
**Version**: 1.0.0
**Date**: 2026-02-06
**Confidence**: Overall C (industry evidence, best-in-class case studies, no IonWave-specific data)

---

## Retention Priority Matrix

Ranked by (impact on churn) x (ease of implementation) x (evidence quality).

### Tier 1: Implement Before Launch (Highest ROI)

| # | Tactic | Expected Churn Impact | Difficulty | Evidence | Notes |
|---|--------|----------------------|------------|----------|-------|
| 1 | **Full dunning stack** (smart retries + card updater via Shopify Payments + 4-email Klaviyo sequence + SMS via Postscript) | -1.5 to -3 pp on total churn | LOW (configuration, no custom dev) | B | Single highest-ROI retention activity. Reduces involuntary churn by 50-70%. At 12% base churn, this alone drops to ~10%, extending avg lifetime from 8.3→10 months = 20% LTV increase. |
| 2 | **Cancellation save flow** with pause as primary option | Saves 20-30% of voluntary cancellation attempts | LOW-MED (subscription platform feature) | B | Design: survey → frequency adjust / skip / pause → let go gracefully. See `win_back_offer_ladder.md` for full flow. |
| 3 | **Flexible subscription frequency** (monthly, 5-week, 6-week, 2-month) | -20-40% of "too much product" churn | LOW (platform config) | C | "Too much product" is #1 supplement cancellation reason (20-30%). Flexible frequency directly solves it. Do NOT default to monthly-only. |
| 4 | **Pre-charge notification** (email 3-5 days before renewal) | -10-20% involuntary churn + reduces "surprise charge" cancellations | LOW (Klaviyo automation) | C | Counterintuitive: charge reminders reduce churn, not increase it. Customers feel respected. |
| 5 | **30-day onboarding email sequence** with results timeline | -15-25% of Month 1 churn | MED (content creation) | C | Design: Day 1 (welcome + what to expect), Day 3 (how to use + routine anchor), Day 7 (what you might notice), Day 14 (midpoint), Day 21 (results timeline), Day 28 (renewal preview + reinforcement). Use Seaonic proxy data for timeline expectations. |

**Tier 1 combined impact estimate**: Reduces monthly churn from 15-20% (no infrastructure) to 10-12% (basic infrastructure). This is a 2-4x LTV improvement. [Confidence: C — derived from individual tactic estimates. Compounding effects unknown.]

### Tier 2: Implement in First 90 Days

| # | Tactic | Expected Churn Impact | Difficulty | Evidence | Notes |
|---|--------|----------------------|------------|----------|-------|
| 6 | **Win-back email sequence** (education-first, see `win_back_offer_ladder.md`) | Reactivates 5-15% of churned within 90 days | MED (content creation + Klaviyo flow) | B | Education-led, not discount-led. Day 1→90 sequence with depletion messaging. |
| 7 | **Churn prediction signals** in analytics | Enables targeted intervention for high-risk subscribers | MED (Klaviyo + subscription platform integration) | B | Track: skip rate, email engagement drop, frequency changes, discount-acquired flag, support complaints. See `churn_prediction.json` for full model. |
| 8 | **SMS subscription management** | -10-20% passive churn | LOW-MED (Postscript setup) | C | "Reply SKIP to skip this month." 98% open rate vs. 20-30% for email. Reduces friction for all subscription actions. |
| 9 | **Subscription discount: 15%** | Motivates subscription without attracting deal-seekers | LOW (pricing decision) | B | ProfitWell: 15-20% is optimal range. Below 10% doesn't motivate. Above 25% attracts price-sensitive customers who churn 20-40% faster. Danilo's 15% figure is correct. |
| 10 | **Cancellation survey** | Data collection for future optimization | LOW (platform feature) | B | 4 options: too much product / not seeing results / too expensive / switching. Enables segmented save flow and win-back. |

### Tier 3: Implement Post-Month 6 (Once You Have Data)

| # | Tactic | Expected Churn Impact | Difficulty | Evidence | Notes |
|---|--------|----------------------|------------|----------|-------|
| 11 | **Loyalty program with time-based escalation** | -5-10% for Month 6+ subscribers | MED (program design + platform) | C | Month 3: 2% store credit. Month 6: 5%. Month 12: 10%. Creates sunk-cost switching cost. |
| 12 | **VIP program** (early access, exclusive content) | -5-10% for high-LTV subscribers | MED | C | Segment top 20% by LTV. Exclusive access to new products, founder calls, content. |
| 13 | **Community** (Slack/Discord/Facebook Group) | -5-15% for active members | MED-HIGH (ongoing management) | C | Most effective for identity-driven ICP segments (keto/carnivore). Build after 100+ subscribers. |
| 14 | **Product line expansion** (flavors, formats) | -15-25% of product fatigue churn | HIGH (product development) | B | LMNT's 10+ flavors is gold standard. Single-SKU at launch means this lever is unavailable initially. Plan for it. |
| 15 | **Referral program** | Indirect retention (referrers have 20-30% lower churn) | MED | C | "Give $10, get $10" per Danilo. The retention benefit is for the REFERRER, not the referee — people who refer feel more invested. |

### Anti-Patterns: What NOT To Do

| Tactic | Why It Fails | Evidence |
|--------|-------------|----------|
| **Aggressive cancellation friction** (hide cancel button, require phone call) | FTC "Click-to-Cancel" rule prohibits this. Destroys trust. Eliminates reactivation potential. Generates negative reviews. | B |
| **Escalating discount ladder** (Danilo's original: 10%→30%) | Trains discount-seeking behavior. Destroys margins. Only addresses 15-20% of churn reasons. See `win_back_offer_ladder.md` for full analysis. | B |
| **Contract/commitment locks** (12-month required) | Catastrophic for consumable supplements. Chargebacks, 1-star reviews, never return. FTC scrutiny increasing. | B |
| **Generic "We miss you!" emails** | Near-zero measurable impact. Personalized outperforms generic by 3-5x. | C |
| **Deep discounts to prevent cancellation** (40-50%+) | Attracts and retains only price-sensitive customers with negative LTV after discount. | B |
| **Ignoring involuntary churn** | Most common mistake. 30-40% of churn is fixable payment mechanics. Brands spend all effort on psychology while hemorrhaging subscribers to expired cards. | B |

---

## Scenario Modeling: Infrastructure Impact on LTV

**Critical caveat** (from persona dialogue): These estimates assume product efficacy meets baseline expectations (HYP-003.1 currently at C-grade, Seaonic proxy). If product-market fit is weaker than the proxy suggests, all churn estimates shift upward by 2-5pp. The individual tactic estimates do NOT stack linearly for voluntary churn tactics that target the same population (Month 1-3 subscribers). Dunning and save flows ARE orthogonal (different churn populations).

| Scenario | Expected Monthly Churn | Avg Lifetime | LTV at $40 GP/order | Evidence |
|----------|----------------------|--------------|---------------------|----------|
| **No infrastructure** (launch without save flows, dunning, onboarding) | 15-20% | 5-6.7 months | $200-$267 | C |
| **Tier 1 implemented** (dunning + save flow + pause + frequency + onboarding) | 10-12% | 8.3-10 months | $333-$400 | C |
| **Tier 1+2 implemented** (+ win-back + churn prediction + SMS) | 8-10% | 10-12.5 months | $400-$500 | D |
| **Full stack + strong product efficacy** | 7-9% | 11-14 months | $440-$571 | D |
| **Best-in-class** (AG1-level brand + product + infrastructure) | 4-6% | 17-25 months | $667-$1,000 | D |

**The gap between "no infrastructure" and "Tier 1" is the highest-leverage gap in the entire business.** It represents a potential 2x LTV improvement for relatively low implementation cost. This is the difference between HYP-003 (≤12% churn target) being achievable or not.

---

## Relationship to HYP-003 (Churn Hypothesis)

This playbook directly addresses the HYP-003 sub-hypothesis chain:

| Sub-Hypothesis | Grade | This Playbook's Contribution |
|---------------|-------|------------------------------|
| HYP-003.1 (Product Efficacy) | C | Onboarding sequence sets expectations. Depletion messaging reinforces perceived efficacy. |
| HYP-003.2 (Early-Life Churn M1-3) | D | Tier 1 tactics #4 and #5 directly target the Month 1-3 cliff. |
| HYP-003.3 (Retention Infrastructure) | D | This entire playbook IS the retention infrastructure. Tier 1 implementation upgrades this from D to C. |
| HYP-003.4 (Consumption-Cadence Match) | D | Tactic #3 (flexible frequency) directly addresses this. |

---

## Implementation Timeline

| Week | Actions |
|------|---------|
| **Pre-launch** | Select subscription platform (Loop rec). Configure dunning. Set up flexible frequency. Design save flow. Write onboarding emails. |
| **Launch** | Tier 1 active. Begin collecting cancellation survey data. |
| **Week 4** | Review first month data. Adjust onboarding based on actual customer feedback. |
| **Week 8** | Implement Tier 2 (win-back sequence, churn signals, SMS management). |
| **Month 3** | First meaningful cohort data. Recalibrate churn model with actual IonWave data. |
| **Month 6** | Evaluate Tier 3 (loyalty, VIP, community). Decide on Stay AI vs. manual. |

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path | Priority |
|-----|--------|-------------|----------|
| All predictions industry-benchmark based (no IonWave data) | HIGH | Collect 90 days actual data. Recalibrate everything. | EXPECTED |
| Marine plasma time-to-value unknown | CRITICAL | Seaonic review mining (CSP-002 #1 priority) | CRITICAL |
| Optimal subscription discount untested | MEDIUM | A/B test 10% vs 15% vs 20% post-launch | MEDIUM |
| Depletion messaging not validated for compliance | HIGH | Legal/regulatory review before publishing | HIGH |
| Loop Subscriptions pricing and integration depth not independently verified | HIGH | Check official site before committing | HIGH |
