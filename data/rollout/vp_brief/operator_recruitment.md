# Operator Recruitment Guide for VP

**Version**: 1.0.0
**Date Created**: 2026-02-27
**Author**: Caio, Claude
**AI Model**: claude-opus-4-6
**Purpose**: Condensed operator recruitment guide for the VP
**Status**: Draft
**Source**: M1 operator_system.md (canonical reference)
**Related**: role_brief.md, bilateral_contract.md

---

## Overview

You're recruiting the person who will run IonWave day-to-day. This is the most consequential hire in the chain — the Operator's quality determines whether the Trade produces a business or remains a document.

The full Operator system is in `data/m1/operator_system.md`. This guide condenses what you need for recruiting. Read the full document for complete detail.

---

## 1. The Operator Role

**Mission**: Execute the Trade. Take IonWave from $0 to $100K MRR in 12 months.

**What they do**:
- Entity formation, supplier onboarding, storefront build (Weeks 1-4)
- First ad campaigns, first orders, first data (Weeks 5-8)
- Iterate on ads, optimize conversion, scale winners (Weeks 9-12)
- Ongoing operations: customer service, inventory, marketing, financial management

**What they don't do**:
- Design the system (the Trade does that)
- Fundraise (you do that)
- Hire executives (specialists come later, as needed)

**How they work**: Daily co-pilot relationship with Claude. The entire Trade is in Claude's context. The Operator asks Claude about any operational question and gets answers backed by the 41 TUPs.

---

## 2. Compensation Structure

Present this during recruitment. Transparency is essential — the Operator must evaluate whether the equity offer works for them.

| Component | Amount | Trigger |
|-----------|--------|---------|
| **Base cash** | $4,000/mo → $6K → $8K | Start → Winner Found → $100K MRR |
| **Equity** | 15% (4yr vest, 1yr cliff) | On contract signing |
| **Bonus: First Blood** | $5,000 | 100 customers, CAC < 2x target |
| **Bonus: Winner Found** | $10,000 | CAC at target, 3+ winning ads, positive unit economics |
| **Bonus: $100K MRR** | $25,000 | Sustainable profitable revenue |
| **Health stipend** | $500/mo | At Winner Found |

**Equity Value Scenarios** (share with candidates):

| Scenario | Annual Revenue | Valuation | 15% Equity Value |
|----------|---------------|-----------|-----------------|
| Conservative | $500K ARR | $1M | $150K |
| Base case | $1.2M ARR | $3.6M | $540K |
| Optimistic | $3M ARR | $12M | $1.8M |

**The pitch**: $4K/mo is below market intentionally. The real compensation is 15% equity in a venture with a complete operating manual and de-risked validation path. If the Operator doesn't believe in the equity, this structure won't attract them.

---

## 3. Operator Profile

### Must-Have

| Characteristic | Why | Evidence |
|---------------|-----|----------|
| **Execution discipline** | They're running a business from a playbook. Must execute consistently. | Previous operational role with measurable output. Track record of shipping. |
| **D2C / ecommerce familiarity** | Core business is online D2C. They need to know the basics. | Has run or managed a Shopify store, managed ad campaigns, handled customer service, or equivalent. |
| **Self-directed** | No manager. Claude assists, but the Operator makes daily decisions. | Previous entrepreneurial experience or autonomous roles. |
| **Data comfort** | Must read dashboards, interpret CAC/LTV/ROAS, make data-driven decisions. | Can explain metrics from their previous work. |
| **Communication clarity** | Daily standups, weekly reports, investor updates. Must communicate clearly. | Writing sample. Standup format during interview process. |

### Nice-to-Have

- Supplement/health/CPG industry experience
- Facebook/Meta ads experience
- Supply chain / 3PL management experience
- Previous startup founding or early-stage experience
- Comfort with AI tools (Claude, ChatGPT, etc.)

### Red Flags

- "I have ideas about how to change the strategy" — The Operator executes the Trade, not redesigns it. Creative input is welcome within the system, but someone who wants to throw out the playbook is wrong for this role.
- Cannot explain metrics from their previous work — Data illiteracy will stall execution.
- Focused entirely on equity value without understanding the work — Wants the upside without the grind.
- No previous autonomous work experience — This role has no manager.

---

## 4. Sourcing Channels

| Channel | Who You'll Find | Approach |
|---------|----------------|----------|
| **D2C founder communities** | Former brand operators, people between ventures | Twitter/X, EcomCrew, D2C Slack/Discord, Indie Hackers |
| **Upwork** | Experienced ecommerce operators/managers | Search "D2C operator", "ecommerce manager", "Shopify brand manager" |
| **Referrals** | Warm candidates via your network | Ask 5 D2C people: "Who's the best operator you've worked with?" |
| **AngelList/Wellfound** | Startup operators seeking equity roles | Post role or search profiles |
| **LinkedIn** | Broader pool, more variable quality | Targeted search with personalized outreach |

---

## 5. Evaluation Framework

### Stage 1: Initial Screen (30 min)

1. "Walk me through the last business or project you operated. What were you responsible for?"
2. "What metrics did you track daily? Walk me through your dashboard."
3. "If I gave you a Shopify store, a product, and $5K in ad budget, what would you do in the first week?"
4. "What's your understanding of IonWave?" (They should have read the One-Pager at minimum)

**Pass to Stage 2 if**: Concrete operational experience, data fluency, self-directed work style, genuine interest.

### Stage 2: Deep Evaluation (60 min + Trade review)

After giving them time to review Trade materials (M0, M1, M35):

1. **Trade Comprehension**: "Explain IonWave's go-to-market strategy in your own words."
2. **Operational Planning**: "Walk me through your first 30 days as IonWave Operator. What do you prioritize?"
3. **Problem-Solving**: "COGS comes in at $0.65 instead of $0.60. What do you do?" (Kill criteria scenario)
4. **Metrics**: "What CAC would make you worried at Week 4? At Week 8? Why?"
5. **Communication**: "Write a mock daily standup report for a day where one thing went wrong."

### Stage 3: Reference Check (2 references)

1. "How did they handle unexpected problems?"
2. "Were they self-directed or did they need frequent direction?"
3. "How was their communication — daily updates, weekly reports?"
4. "Would you work with them again?"

---

## 6. M1 Certification

The selected Operator must complete the M1 certification before receiving live system access:

**3-Week Reading Plan:**
- Week 1: Business Context (M0, M2, M5 — the what and why)
- Week 2: Operational Systems (M9, M24, M30 — the how)
- Week 3: Execution Plans (M35, M36 — the when)

Weekly assessment gates at end of each week.

**Certification Checklist** (6 items — full detail in M1):
1. Can articulate IonWave's value proposition and competitive positioning
2. Can explain the unit economics and kill criteria
3. Can navigate Shopify admin and describe the tech stack
4. Can outline the first 30 days of execution
5. Can explain the KPI dashboard and what each metric means
6. Passes a calibration session [with whom — TBD]

---

## 7. Handoff

When Operator is confirmed:

1. Submit Operator Confirmation deliverable (DEL-VP-005): confirmed candidate, compensation agreement, onboarding plan
2. Facilitate introduction between Operator and Caio (or designated contact)
3. Operator begins 3-week M1 reading plan
4. Your Operator recruiting function is complete; Capital Formation continues

---

## Version History

**v1.0.0 (2026-02-27)**: Initial operator recruitment guide. Condensed from M1 operator_system.md. Compensation, profile, sourcing, evaluation, certification, handoff.
