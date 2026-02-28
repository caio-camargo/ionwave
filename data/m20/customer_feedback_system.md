# M20: Customer Feedback System

**TUP**: M20 — Customer Support
**Scope**: Measurement layer — NPS, CSAT, win/loss analysis
**Source Tabs**: 473 (NPS Tracking), 474 (NPS CSAT Implementation), 475 (Win/Loss Analysis)
**Version**: 1.0.0 (initial workshop)
**Last Updated**: 2026-02-07

---

## 1. Feedback System Overview

IonWave runs three feedback loops:

| Loop | What It Measures | When | Tool | Cadence |
|------|-----------------|------|------|---------|
| **NPS** | Customer loyalty / advocacy likelihood | Post-purchase Day 30 | Delighted or Retently | Every order cycle |
| **CSAT** | Support interaction satisfaction | After ticket resolution | Gorgias (built-in) | Every resolved ticket |
| **Win/Loss** | Why people bought or didn't | Post-purchase survey + cart abandonment | Fairing (post-purchase), Klaviyo (abandoned cart) | Continuous |

**Purpose**: These three loops create a closed feedback system — NPS identifies promoters and detractors, CSAT measures operational quality, and Win/Loss reveals the decision drivers behind conversion and loss.

---

## 2. NPS (Net Promoter Score)

### What NPS Measures

**The question**: "On a scale of 0-10, how likely are you to recommend IonWave to a friend?"

| Score | Category | Meaning |
|-------|----------|---------|
| 9-10 | **Promoters** | Loyal enthusiasts who will refer others |
| 7-8 | **Passives** | Satisfied but vulnerable to competitors |
| 0-6 | **Detractors** | Unhappy, may damage brand through negative WOM |

**NPS = % Promoters - % Detractors**
Range: -100 to +100

### NPS Benchmarks

| Benchmark | Score | Source |
|-----------|-------|--------|
| E-commerce average | 59 | `[Confidence: B | Source: Delighted/Sobot 2025 data]` |
| Healthcare average | 53 | `[Confidence: B | Source: industry reports]` |
| "Good" threshold | 50+ | `[Confidence: B]` |
| "World-class" | 70+ | `[Confidence: B]` |
| **IonWave Year 1 target** | 50+ | `[Confidence: D | recommendation]` |
| **IonWave Year 2 target** | 60+ | `[Confidence: D | recommendation]` |

> **⚠️ INTELLIGENCE GAP**: No published NPS benchmark exists specifically for DTC supplement brands. Wellness industry holds highest digital experience score among DTC verticals, suggesting above-average satisfaction. `[Priority: LOW | Validation: establish own baseline after first 50 NPS responses]`

### NPS Collection Setup

**Timing**: Post-purchase Day 30 (after customer has used product for ~3 weeks)
- Day 14-21 is too early for supplements — customers haven't had time to notice effects `[Confidence: C]`
- Day 30 is the sweet spot for efficacy-dependent products `[Confidence: C]`
- For subscription renewals: survey around 2nd or 3rd order (established usage pattern)

**Tool Recommendation**: **Delighted** or **Retently**

| Tool | Strengths | Shopify Integration | Price |
|------|-----------|--------------------:|-------|
| **Delighted** | Post-delivery NPS/CSAT, real-time dashboards, customizable branding | Yes (Shopify trigger) | Free tier → $224/mo+ |
| **Retently** | Shopify order-triggered surveys, in-platform analysis | Yes (native) | $25/mo+ |
| Fairing | Post-purchase attribution + NPS in checkout | Yes | $49/mo+ |

`[Confidence: B | Source: tool documentation review | Date: 2026]`

**Alternative (Budget)**: Klaviyo flow with embedded NPS question at Day 30 + Google Form for detailed follow-up. Free but less sophisticated analytics. `[Confidence: D | recommendation for pre-revenue stage]`

### NPS Follow-Up Question

**Always ask**: "What's the primary reason for your score?"

This open-ended follow-up is as valuable as the score itself. It provides:
- Specific product feedback (efficacy, taste, packaging)
- Service feedback (shipping, support experience)
- Competitive intelligence (what alternatives they've considered)
- Language for marketing copy (customer's own words)

### NPS Action Playbook

| Segment | Score | Action | Timing | Owner |
|---------|-------|--------|--------|-------|
| **Promoters** | 9-10 | Thank-you message → Referral invite → Review request → UGC ask | Within 24h | Automated (Klaviyo) |
| **Passives** | 7-8 | Ask: "What would make it a 10?" → Targeted offer/education | Within 48h | Automated + manual review |
| **Detractors** | 0-6 | Alert support team → Personal outreach → AAAA+F recovery | Within 4h | Founder/support lead |

`[Confidence: B | Source: NPS best practice synthesis | Date: 2026]`

**Detractor Recovery Targets**:
- Response within 4 hours of NPS submission `[Confidence: C]`
- 20% detractor-to-promoter conversion within 90 days `[Confidence: C]`
- Detractors are up to 50% more likely to churn within 3 months without intervention `[Confidence: C]`

### NPS Tracker Template

Track monthly:

| Period | Responses | % Promoters | % Passives | % Detractors | NPS Score | vs. Prior |
|--------|-----------|-------------|------------|-------------|-----------|-----------|
| Month 1 | [VOID] | [VOID] | [VOID] | [VOID] | [VOID] | — |
| Month 2 | [VOID] | [VOID] | [VOID] | [VOID] | [VOID] | [VOID] |
| Month 3 | [VOID] | [VOID] | [VOID] | [VOID] | [VOID] | [VOID] |

**Minimum sample size**: 30+ responses before treating NPS as directionally reliable. Below 30, individual scores have high variance. `[Confidence: B | Source: survey methodology standards]`

---

## 3. CSAT (Customer Satisfaction Score)

### Two Types of CSAT

| CSAT Type | Measures | Timing | Tool |
|-----------|----------|--------|------|
| **Support CSAT** | Satisfaction with support interaction | Immediately after ticket resolution | Gorgias (built-in survey) |
| **Product CSAT** | Satisfaction with product experience | Day 7-14 after delivery | Delighted / Retently / Klaviyo |

**Keep these separate**. Support CSAT measures operational quality. Product CSAT measures product-market fit. Mixing them masks both signals.

### Support CSAT Setup

Gorgias includes a built-in satisfaction survey. After every resolved ticket:
1. Customer receives "How would you rate your support experience?" (1-5 stars or thumbs up/down)
2. Optional text field for feedback
3. Results appear in Gorgias dashboard

**Benchmarks**:
- E-commerce average CSAT: 80/100 (3.8/5) `[Confidence: B]`
- Best-in-class: 88%+ (4.4+/5) `[Confidence: B]`
- **IonWave target**: 88%+ (aspire to best-in-class from Day 1 while volume is low)

### Product CSAT Setup

Via Klaviyo flow or Delighted/Retently:
- Trigger: Day 7-14 after first delivery
- Question: "How satisfied are you with IonWave so far?" (1-5 stars)
- Follow-up: "What could we improve?"

**Why Day 7-14** (not Day 30 like NPS):
- Product CSAT captures early experience (taste, packaging, ease of use)
- NPS at Day 30 captures loyalty intent (would you recommend)
- Two different signals at two different moments

---

## 4. Win/Loss Analysis

### What Win/Loss Tracks

Win/loss analysis reveals **why people bought or didn't**. This feeds directly into:
- Marketing messaging (amplify win reasons)
- Product development (address loss reasons)
- Competitive positioning (who else they considered)
- Sales objection handling (pre-answer the loss reasons)

### Win Analysis (Why They Bought)

**Collection Method**: Post-purchase survey (Fairing or Klaviyo Day-1 flow)

#### Survey Methodology — Open-Ended First

> **⚠️ IMPORTANT**: Always ask the **open-ended question first**, THEN offer categories. Leading with categories confirms your own messaging rather than revealing real purchase drivers. Customers often rationalize post-purchase — open-ended captures the authentic reason.

**Question 1** (open-ended): "In your own words, what was the #1 reason you decided to try IonWave?"
**Question 2** (multiple choice): "Which of these best describes your main reason?" [categories below]

| Win Reason | Expected Rank | Hypothesis Link |
|------------|---------------|-----------------|
| 78 minerals vs 3 (differentiation) | #1 | — |
| Price/value perception | #2 | HYP-004 (Gross Margin) |
| Ocean-sourced / natural positioning | #3 | — |
| Recommendation / review | #4 | HYP-006 (Organic Growth) |
| Subscription convenience | #5 | HYP-002 (Subscription Conversion) |

**Minimum sample sizes**: N=50 for directional reads, N=200 for confident decision-making. Do not restructure marketing based on <50 responses. `[Confidence: B | Source: survey methodology standards]`

`[Confidence: C | Source: Danilo's framework — percentages TBD from real data | Date: 2026]`

### Win Tracker Template

| Date | Customer | Source (channel) | Primary Win Reason | Secondary Reasons | Competitor Considered | Quote |
|------|----------|-----------------|-------------------|-------------------|----------------------|-------|
| [VOID] | [VOID] | [VOID] | [VOID] | [VOID] | [VOID] | [VOID] |

### Loss Analysis (Why They Didn't Buy)

**Collection Methods**:
- Cart abandonment survey (Klaviyo / Shopify flow)
- Exit-intent popup (optional)
- Post-cancellation survey (Loop Subscriptions)

| Loss Reason | Expected Rank | Decision Trigger | Action |
|-------------|---------------|-----------------|--------|
| Price too high | #1 | **>25% cite price** → trigger M10 pricing review | Test pricing / offer structure (→ M10) |
| Prefer known brand (LMNT) | #2 | **>20% cite LMNT** → create comparison page | Competitive content / comparison pages (→ M16) |
| Skeptical of claims | #3 | **>20% cite skepticism** → invest in social proof | Third-party validation / reviews / UGC |
| Didn't need / didn't want | #4 | **>15% cite no need** → review targeting | Targeting accuracy — may be reaching wrong audience |
| Found cheaper alternative | #5 | **>15% cite alternative** → competitive audit | Value messaging — emphasize 78 minerals vs. 3 |

**Decision triggers activate at N=50+ loss responses.** Below that threshold, treat as qualitative signal only.

`[Confidence: C | Source: Danilo's framework — percentages TBD from real data. Decision triggers are recommendations. | Date: 2026]`

### Loss Tracker Template

| Date | Source (channel) | Got To (stage) | Primary Objection | Secondary Objections | Went With (competitor) | Quote |
|------|-----------------|----------------|-------------------|---------------------|----------------------|-------|
| [VOID] | [VOID] | [VOID] | [VOID] | [VOID] | [VOID] | [VOID] |

**"Got To" column** is critical — it tells you WHERE in the funnel people drop:
- Saw ad → clicked → left (awareness problem)
- Landing page → PDP → left (messaging/trust problem)
- Add to cart → checkout → abandoned (price/friction problem)
- Purchased → cancelled (product/retention problem)

### Win/Loss Summary Dashboard

Track quarterly:

| Metric | Q1 | Q2 | Q3 | Q4 |
|--------|----|----|----|----|
| Top win reason | [VOID] | [VOID] | [VOID] | [VOID] |
| Top loss reason | [VOID] | [VOID] | [VOID] | [VOID] |
| Most-mentioned competitor | [VOID] | [VOID] | [VOID] | [VOID] |
| Win:Loss ratio (surveyed) | [VOID] | [VOID] | [VOID] | [VOID] |
| New themes emerged | [VOID] | [VOID] | [VOID] | [VOID] |

### Cross-Reference: M27 (Customer Research VOC)

Win/Loss Analysis in M20 covers **structured decision tracking** (why bought/didn't buy, tracked over time). M27 (Customer Research VOC) covers **deep qualitative research** (customer interviews, review mining, segment-level insights). They're complementary:

- **M20 Win/Loss** = ongoing operational metric (every purchase, automated survey)
- **M27 VOC** = periodic deep dive (quarterly interviews, review analysis batches)

When M27 is workshopped, it should pull from M20's win/loss data as input.

---

## 5. Feedback Loop Integration

### How the Three Loops Feed Each Other

```
NPS → Detractors → Support (AAAA+F recovery)
NPS → Promoters → Referral Program (M22)
NPS → Follow-up text → Win/Loss themes
CSAT (support) → Low scores → Agent coaching + process improvement
CSAT (product) → Low scores → Product development + messaging adjustment
Win/Loss (wins) → Marketing copy fuel + positioning validation
Win/Loss (losses) → Pricing (M10) + Competitive (M26) + Content (M16) action
```

### Monthly Feedback Review (Add to MBR from M25)

At each Monthly Business Review, add a feedback section:

1. **NPS trend** — score, movement, top verbatim themes
2. **CSAT trend** — support CSAT, product CSAT, any outlier tickets
3. **Win/Loss shift** — any new win/loss reasons emerging? Competitor landscape changing?
4. **Issue type distribution** — are shipping issues decreasing? Are efficacy complaints increasing?
5. **Refund rate trend** — rate, top reason code, exchange ratio

This section feeds directly into the MBR decision framework established in M25.

---

## 6. Implementation Timeline

| Phase | When | What | Tool |
|-------|------|------|------|
| **Pre-launch** | Month -1 | Set up Gorgias (CSAT auto-survey enabled) | Gorgias |
| **Pre-launch** | Month -1 | Build NPS Klaviyo flow (Day 30 trigger) | Klaviyo |
| **Pre-launch** | Month -1 | Build post-purchase survey (Fairing or Klaviyo Day 1) | Fairing / Klaviyo |
| **Launch** | Month 0 | Start collecting support CSAT on every ticket | Gorgias |
| **Launch** | Month 0 | Start collecting post-purchase "why did you buy" | Fairing / Klaviyo |
| **Month 1** | 30 days post-launch | First NPS survey batch sends | Delighted / Klaviyo |
| **Month 2** | | First cart abandonment survey analysis | Klaviyo |
| **Month 3** | | First quarterly win/loss summary | Manual review |
| **Month 6** | | Evaluate upgrading to Delighted or Retently for NPS | Budget review |

---

## Intelligence Gaps

| Gap | Priority | Validation Path |
|-----|----------|----------------|
| DTC supplement-specific NPS benchmark | LOW | Establish own baseline after 50+ responses |
| Fairing vs Klaviyo for post-purchase surveys | MEDIUM | Test both during first 2 months, compare response rates |
| Optimal NPS survey timing for supplements | MEDIUM | A/B test Day 21 vs Day 30 vs Day 45 after 100+ data points |
| Win/loss reason percentages | HIGH | Populate from real survey data after 100 orders |
| Cart abandonment survey response rate | LOW | Measure after launch |
