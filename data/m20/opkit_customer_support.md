# OpKit: Customer Support Operations (OK-M20-001)

**Type**: Production OpKit
**Domain**: Customer Support Operations
**Applicable To**: Any DTC brand (supplement-specific sections flagged)
**Source TUP**: M20 — Customer Support
**Version**: 1.0.0
**Date Created**: 2026-02-07

---

## 1. Instruction Doc — How to Build a DTC Support Operation

### Step-by-Step (8 Steps)

**Step 1: Choose Your Helpdesk**
- For Shopify brands: Gorgias (best native integration)
- For non-Shopify: Zendesk or Freshdesk
- Start with the cheapest plan that includes ticket tracking, customer order visibility, and CSAT surveys
- Do NOT start with free email — you need ticket tracking for patterns and compliance

**Step 2: Design Your Escalation Framework**
- Define 3-4 tiers with response time targets per tier
- Map which issue types go to which tier
- Set agent authority levels (what each tier can offer without approval)
- If solo founder: document the tier system anyway — it's your future hiring spec

**Step 3: Write Your Support Macros**
- Create templates for your top 5-6 ticket types
- Each macro should: acknowledge the issue, show empathy, take action, set next-step expectation
- Include one macro for health/safety escalation (if applicable to your product category)
- Review and update macros monthly based on actual ticket patterns

**Step 4: Design Your Refund & Return Policy**
- Choose your guarantee window (30/60/90 days)
- Decide "keep the product" vs. return for each scenario
- Document refund reason categories (6-8 standard categories)
- Set refund rate health benchmarks and monitoring cadence
- For consumables: "keep the product" is almost always more economical than return shipping

**Step 5: Set Up Feedback Loops**
- NPS: post-purchase Day 14-30 (adjust for your product's value-delivery timeline)
- CSAT: after every support ticket resolution (built into most helpdesks)
- Win/Loss: post-purchase attribution survey + cart abandonment survey
- Design action playbooks for each: Promoter → referral, Detractor → recovery, Loss reasons → specific fixes

**Step 6: Build Your At-Risk Signal System**
- Identify 5-8 behavioral signals that predict churn (no email opens, subscription paused, negative review, etc.)
- Map each signal to a specific intervention (SMS, personal email, founder outreach, win-back offer)
- Cross-reference with your retention playbook if you have one

**Step 7: Define Customer Activation**
- Choose 3-5 behavioral criteria that define "activated" (NOT self-reported satisfaction)
- Track activation rate alongside NPS/CSAT
- Set target activation rates and red flags
- Activation is typically the #1 predictor of retention

**Step 8: Build Your Scorecard**
- Weekly: response times, CSAT, activation rate, refund rate, ticket volume
- Monthly: NPS trend, win/loss analysis, chargeback rate, issue type distribution
- Quarterly: support cost as % of revenue, team scaling needs, tool stack review

### For Supplement/Health Brands — Additional Requirements
- Build an adverse event reporting protocol that complies with FDA requirements (15-day SAE reporting, 6-year record retention)
- Include health/safety escalation triggers in your tier system
- Monitor chargeback rate carefully — supplements are high-risk category for payment processors
- Product labels must include domestic contact info for adverse event reporting

---

## 2. Grading Rubric

| Dimension | A (Excellent) | B (Good) | C (Adequate) | D (Weak) | F (Failing) |
|-----------|--------------|----------|--------------|----------|-------------|
| **Escalation Design** | 3-4 tiers with response times, agent authority, triggers, phase-gating | 3+ tiers with response times | Tiers defined but no response times | Ad-hoc escalation | No escalation system |
| **Macro Library** | 6+ macros covering top ticket types, updated monthly | 4-5 macros for common issues | 2-3 basic macros | 1 generic template | No macros |
| **Refund Policy** | Documented policy, reason tracking, health benchmarks, chargeback monitoring | Policy documented with basic tracking | Policy exists but inconsistently applied | Verbal policy only | No policy |
| **Feedback System** | NPS + CSAT + Win/Loss all active with action playbooks | 2 of 3 active | 1 feedback mechanism | Occasional surveys | No feedback collection |
| **Activation Tracking** | Behavioral criteria defined, tracked weekly, linked to retention | Criteria defined, tracked monthly | Criteria defined but not tracked | Vague definition | No activation concept |
| **Compliance** | Full adverse event protocol, chargeback monitoring, billing descriptors | Most compliance items covered | Some compliance awareness | Reactive compliance only | No compliance system |

---

## 3. Graded Example — IonWave (Trade #84)

| Dimension | Grade | Rationale |
|-----------|-------|-----------|
| Escalation Design | **B+** | 4 tiers with response times, agent authority, and phase-gating (Founder Mode / Team Mode). Not yet tested in production. |
| Macro Library | **B** | 6 macros covering top ticket types including adverse reaction escalation. Taste advice needs product-specific ingredient safety review. |
| Refund Policy | **A-** | Documented policy with reason codes, health benchmarks, chargeback monitoring section. "Keep the product" first-order guarantee is industry-appropriate. |
| Feedback System | **B** | NPS, CSAT, and Win/Loss all designed with action playbooks. Minimum viable stack phase-gates tool spending. Survey methodology upgraded (open-ended first). |
| Activation Tracking | **B** | 4 behavioral criteria defined with targets. Activation rate on weekly scorecard. Expected outcomes timeline supports activation. All targets are pre-revenue estimates. |
| Compliance | **A-** | FDA adverse event protocol with 15-day reporting, 6-year retention, MedWatch form. Chargeback monitoring with Stripe thresholds. Legal review flagged as CRITICAL pre-launch gap. |

**Overall: 8.6/10**

---

## 4. Scaffolds

### Scaffold A: Support Operations Setup

```
## [Brand] Support Operations

### Tool Stack
- Helpdesk: [Platform] ([Plan], $[X]/month)
- Subscription: [Platform] (for sidebar integration)
- Email: [Platform] (for customer data in tickets)

### Escalation Tiers
| Tier | Name | Response Time | Handler | Scope |
|------|------|--------------|---------|-------|
| 1 | Standard | [X hours] | [Who] | [What] |
| 2 | Issue | [X hours] | [Who] | [What] |
| 3 | Escalated | [X hours] | [Who] | [What] |
| 4 | Crisis | [X minutes] | [Who] | [What] |

### Agent Authority
| Action | Tier 1 | Tier 2 | Tier 3+ |
|--------|--------|--------|---------|
| Store credit | Up to $[X] | Up to $[X] | Unlimited |
| Refund | [Scope] | Up to $[X] | Unlimited |
| Replacement | [Y/N] | [Y/N] | [Y/N] |

### Refund Policy
| Scenario | Action | Keep Product? |
|----------|--------|---------------|
| First order, [X] days | [Action] | [Y/N] |
| Repeat order | [Action] | [Y/N] |
| International | [Action] | [Y/N] |

### Refund Reason Codes
| Code | Category | Description |
|------|----------|-------------|
| RF-001 | [Category] | [Description] |
| RF-002 | [Category] | [Description] |
...

### Weekly Scorecard
| Metric | Target | Red Flag |
|--------|--------|----------|
| First response time | [Target] | [Red flag] |
| CSAT | [Target] | [Red flag] |
| Refund rate | [Target] | [Red flag] |
| Chargeback rate | [Target] | [Red flag] |
| Activation rate | [Target] | [Red flag] |
```

### Scaffold B: Customer Feedback System

```
## [Brand] Feedback System

### NPS
- Tool: [Tool]
- Timing: Day [X] post-delivery
- Question: "How likely are you to recommend [Brand] to a friend?" (0-10)
- Follow-up: "What's the primary reason for your score?"

### NPS Action Playbook
| Segment | Score | Action | Timing |
|---------|-------|--------|--------|
| Promoters | 9-10 | [Actions] | Within [X]h |
| Passives | 7-8 | [Actions] | Within [X]h |
| Detractors | 0-6 | [Actions] | Within [X]h |

### Win/Loss Tracking
- Win survey question (open-ended): "[Question]"
- Win survey question (categories): [List categories]
- Loss collection method: [Method]
- Decision triggers:
  - If >[X]% cite [reason] → [Action]
  - Minimum N for decisions: [N]

### Monthly Feedback Review
1. NPS trend + top verbatim themes
2. CSAT trend + outlier tickets
3. Win/Loss shift + new reasons
4. Issue type distribution
5. Refund rate + reason codes
```

### Scaffold C: Customer Success Playbook

```
## [Brand] Customer Success Playbook

### Customer Journey (Day 0-90)
| Day | Touchpoint | Channel | Goal |
|-----|-----------|---------|------|
| 0 | [Touchpoint] | [Channel] | [Goal] |
| 1 | [Touchpoint] | [Channel] | [Goal] |
...

### What "[Product] Working" Looks Like
| Timeframe | Expected Outcome |
|-----------|-----------------|
| Week 1 | [Outcome] |
| Week 2-3 | [Outcome] |
| Month 1-2 | [Outcome] |
| Month 3+ | [Outcome] |

### Activation Criteria (Behavioral)
| # | Criterion | How to Measure | Target Rate |
|---|-----------|---------------|-------------|
| 1 | [Criterion] | [Measurement] | [Target] |
| 2 | [Criterion] | [Measurement] | [Target] |
...

### At-Risk Signals
| Signal | Risk Level | Intervention |
|--------|-----------|-------------|
| [Signal] | [Level] | [Action] |
...
```
