# Capital Formation Guide for VP

**Version**: 1.0.0
**Date Created**: 2026-02-27
**Author**: Caio, Claude
**AI Model**: claude-opus-4-6
**Purpose**: Quick-start guide for the VP's fundraising function
**Status**: Draft
**Source**: M4 (Fundraising — canonical reference for full detail)
**Related**: role_brief.md, integration_requirements.md, bilateral_contract.md

---

## Overview

Capital Formation is one of your two parallel functions. IonWave needs seed capital to execute the Trade — product development, initial inventory, marketing spend, and operational costs for the first 90 days.

The full fundraising methodology is in `data/m4/`. This guide covers the essentials to get started.

---

## 1. How Much Capital and Why

### Target Raise

| Metric | Range | Notes |
|--------|-------|-------|
| **Raise amount** | $30-50K | Seed round — enough to validate, not enough to burn |
| **Instrument** | SAFE (Simple Agreement for Future Equity) | Standard for pre-revenue. $250-500K valuation cap. |
| **Use of funds** | Product + inventory + marketing + ops | First 90 days of execution |

### Use of Funds Breakdown

| Category | Allocation | What It Covers |
|----------|-----------|---------------|
| **Product & Inventory** | 30-40% | Initial production run, packaging, raw materials |
| **Marketing** | 30-40% | Paid ads budget for validation sprint ($50-100/day) |
| **Operations** | 15-20% | Shopify, tools, 3PL setup, legal |
| **Reserve** | 5-10% | Buffer for unexpected costs |

**Why this amount**: $30-50K is enough to run the 7-week validation sprint (M35 Phase 1). If the sprint validates — landing page converts, CAC is within target, unit economics work — then a larger raise follows. If it doesn't validate, the kill criteria trigger and capital loss is bounded.

---

## 2. Investor Targeting

### Who to Target (Priority Order)

**Tier 1: Angel Investors with D2C Experience**
- People who've operated, invested in, or advised D2C brands
- Check sizes: $5-100K
- Why they're ideal: They understand the market, can evaluate the Trade's quality, and often add operational value
- Where to find them: AngelList, D2C founder communities, supplement industry networks

**Tier 2: Health/Wellness-Focused Angels**
- People who invest in health, nutrition, longevity, biohacking
- Check sizes: $5-50K
- Why: Thesis alignment — they believe in the market even if they don't know D2C
- Where: Health/wellness investor groups, biohacking communities, LinkedIn

**Tier 3: Micro-VCs (Consumer/CPG Focus)**
- Small funds ($5-50M AUM) that invest in consumer brands at seed stage
- Check sizes: $25-250K
- Why: Institutional capital, often have portfolio company networks
- Where: Crunchbase, VC databases, warm intros through angels

**Not Now: Institutional VCs**
- Too early for institutional VC. IonWave needs proof of concept first.
- After the validation sprint succeeds → revisit for Series Seed / A.

### Investor Pipeline Math

```
Research & target list:  50+ potential investors identified
Outreach:                30-40 warm/cold approaches
Meetings:                10-15 conversations
Interested:              5-8 who want to go deeper
Term sheets/commits:     2-4 who commit capital
Closed:                  1-3 checks totaling $30-50K
```

This pipeline takes **6-10 weeks** of sustained effort.

---

## 3. The Pitch

### What Makes IonWave Different as an Investment

Your core pitch is: **"This is the most de-risked pre-revenue D2C investment you'll see."**

Why:
1. **Complete operating manual.** 41 TUPs. Not a pitch deck — a full system designed for execution.
2. **Defined kill criteria.** If it doesn't work, it stops. No sunk-cost spiral.
3. **AI-augmented execution.** Claude as daily co-pilot reduces execution risk.
4. **Operator economics aligned.** 15% equity + milestone bonuses = operator has skin in the game.
5. **Validated market.** LMNT at $66M+ proves the category. Premium/taste gap is the opportunity.

### Investor Objection Handling

| Objection | Response |
|-----------|---------|
| "It's pre-revenue" | "Yes, and that's why the terms are favorable. The validation sprint is 7 weeks. If it doesn't work, capital loss is bounded by kill criteria." |
| "Where's the founder?" | "The founder designed the system. The model is founder-independent by design — execution is by an operator with a complete playbook and AI co-pilot. The founder stays involved through the compliance system." |
| "41 TUPs sounds over-engineered" | "It's comprehensive, not complicated. Each TUP is a standalone module the operator can reference. It means the operator doesn't have to figure things out from scratch — every function has a playbook." |
| "What if the operator doesn't work out?" | "Kill criteria at Week 6 and Week 12. Root-cause attribution before any termination — we distinguish operator failure from system failure. Replacement protocol is defined." |
| "What's my exit?" | "Standard SAFE conversion at Series A or qualified financing. If no follow-on, custom exit mechanism (buyback, revenue-based distributions). Bootstrap liquidity path is documented in M4." |

---

## 4. Your Capital Formation Pipeline

### Tracking

Maintain an investor pipeline tracker:

| Field | Required |
|-------|----------|
| Investor name | Yes |
| Type (angel / micro-VC / other) | Yes |
| Source (warm intro / cold / community) | Yes |
| Stage (Research / Outreach / Meeting / Diligence / Committed / Passed) | Yes |
| Check size range | Yes |
| Next action | Yes |
| Notes | Yes |

### Rhythm

| Week | Focus |
|------|-------|
| **Week 3** (after integration) | Build target list. Begin warm intro mapping. First outreach. |
| **Weeks 4-6** | Active outreach. First meetings. Share materials. |
| **Weeks 7-10** | Follow-up meetings. Due diligence. Term discussions. |
| **Weeks 10+** | Close commitments. Paper SAFEs. |

### Monthly Investor Updates

Once you have investor conversations in progress, send monthly updates to all engaged investors (including those who passed — they may come back or refer others):

```markdown
## IonWave Monthly Update — [Month Year]

**Key Metrics**: [What happened this month]
**Capital**: [Raised / committed / pipeline]
**Team**: [Operator status, key hires]
**Product**: [Development status]
**Next Month**: [What's coming]
**Ask**: [What you need — intros, feedback, etc.]
```

---

## 5. Deliverable: Capital Formation Pipeline

Your biweekly pipeline update (DEL-VP-002) should include:

1. **Pipeline summary**: How many investors at each stage
2. **Outreach metrics**: New contacts, response rate, meetings scheduled
3. **Key conversations**: Summary of top 3-5 investor interactions
4. **Strategy updates**: Any changes to targeting, pitch, or approach
5. **Blockers**: What's slowing progress and what you need

Claude will prompt you for this on the biweekly schedule.

---

## Version History

**v1.0.0 (2026-02-27)**: Initial Capital Formation guide. Condensed from M4. Target raise, investor targeting tiers, pitch framework, objection handling, pipeline management.
