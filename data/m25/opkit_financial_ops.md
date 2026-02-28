# OpKit OK-M25-001: Financial Operations Playbook

**OpKit ID**: OK-M25-001
**TUP Origin**: M25 (Financial Operations)
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Purpose**: Reusable production bundle for setting up bookkeeping, tracking unit economics, and running business reviews for any DTC brand.
**Applicability**: Any DTC subscription brand (Shopify-based) in Year 0-2. Supplement-specific details are marked and can be swapped for any product category.

---

## Instructions

### How to Use This OpKit for Any Trade

**Step 1: Assess the brand's stage**
- Pre-revenue? → Focus on bookkeeping setup (Day 1 Essentials) and Weekly Cash Check only
- Early revenue (<$50K/mo)? → Add monthly checklist and MBR
- Growth ($50K-200K/mo)? → Add QBR, full chart of accounts, unit economics dashboard

**Step 2: Customize the chart of accounts**
- Start with the 18 Day 1 Essentials accounts
- Replace IonWave-specific COGS accounts with your product's cost structure
- Add marketing expense accounts per your channel mix (Meta, Google, TikTok, etc.)
- Add product-line sub-accounts when you have 2+ SKUs

**Step 3: Set up the software stack**
- Accounting: QuickBooks Online (or Xero if non-US)
- Connector: Test both Synder and A2X with 10 sample transactions before committing
- Sales tax: Start with Shopify Tax built-in, upgrade to TaxJar at 5+ state nexus
- Subscription: Use whatever subscription platform the brand uses (ReCharge, Bold, Loop)

**Step 4: Establish the review cadence**
- Week 1: Start Weekly Cash Check (15 min/Friday)
- Month 2: Start Monthly Business Review using Survival Five scorecard
- Month 6: Start Quarterly Business Review using OKR framework
- Year 2: Start Annual Planning using 8-week cycle

**Step 5: Build the unit economics dashboard**
- Define channels (paid, organic, referral, email, etc.)
- Calculate CAC, LTV, LTV:CAC, payback period per channel
- Set kill criteria per channel
- Review monthly — scale winners, kill losers

**Step 6: Run persona dialogue**
- Select 3 personas relevant to the brand's financial context
- Recommended: Skeptical Investor + Operations Expert + Growth Engineer
- Run 4-8 rounds per TWP-001 Phase 6 protocol
- Apply upgrades to content

**Step 7: Self-grade**
- Use rubric below
- Be honest — inflated grades undermine the system

**Step 8: Register**
- Create _meta.json
- Update manifest.json
- Update opkits/registry.json

---

## Grading Rubric

| Grade | Evidence Coverage | Actionability | Reusability |
|-------|------------------|---------------|-------------|
| **A (9-10)** | All financial areas covered with A/B-grade evidence. Real data from post-launch operations. Connector tested and validated. | Founder can execute from Day 0 with zero additional research. Templates are copy-paste ready. | Works for any DTC brand with minimal customization. |
| **B (7-8.9)** | Most areas at B-grade or better. Pre-launch assumptions clearly marked. Key intelligence gaps identified with validation paths. | Founder can execute from Day 0 with minor research on 2-3 items. Checklists and templates present. | Works for most DTC brands. Some product-specific details need swapping. |
| **C (5-6.9)** | Coverage adequate but gaps at D-grade. Some sections thin or generic. Confidence grades may be generous. | Founder needs significant additional research before executing. Templates are frameworks, not ready-to-use. | Requires substantial customization for different product categories. |
| **D (3-4.9)** | Major gaps. Multiple sections at D-grade or void. Danilo's shell not substantially improved. | Content informs but doesn't enable execution. No ready-to-use templates. | IonWave-specific with limited reuse potential. |
| **F (<3)** | Danilo shell unchanged or barely improved. No evidence, no sources, no confidence grades. | Not actionable. | Not reusable. |

---

## Graded Example: IonWave (Trade #84)

**Grade**: B+ (8.8/10)

**Strengths**:
- Highly actionable — Day 1 Essentials, monthly checklist, Survival Five scorecard are immediately executable
- Excellent confidence honesty — dual-margin treatment of REC-001 rather than picking sides
- Strong research grounding — web research on Shopify+QBO integration, sales tax, ASC 606, inventory accounting
- Dialogue produced 6 upgrades including critical connector testing priority elevation

**Weaknesses**:
- Pre-launch — all unit economics values are assumptions (will become A-grade post-launch)
- 3PL costs estimated, not quoted
- Connector recommendation (Synder) not yet validated with real transactions
- Annual planning section is thin (appropriately — premature for Year 1)

**What would upgrade to A**:
- Post-launch actual data replacing all D-grade assumptions
- Synder vs A2X validated with real ReCharge transactions
- 3PL costs from actual quotes
- First 3 MBRs completed and reviewed for format effectiveness

---

## Scaffold

### Bookkeeping Setup Scaffold

```markdown
# Bookkeeping & Accounting Setup — [TUP_ID]: [TUP_NAME]

## 1. Accounting Method
[Accrual / Cash — state choice and why]

## 2. Software Stack
### Primary Accounting Software
[QBO / Xero / Wave — state choice, plan, monthly cost]

### Connector
[Synder / A2X / other — test both before committing]

### Sales Tax
[Phase-gated: Shopify Tax → TaxJar → Avalara]

### Other Tools
[Table of tools with purpose, cost, and when to add]

## 3. Chart of Accounts
### Day 1 Essentials (15-20 accounts)
[Minimal set needed at launch]

### Full Chart (reference)
[Complete chart organized by: Assets, Liabilities, Equity, Revenue, COGS, OpEx]

## 4. Inventory Accounting
[FIFO/Weighted Average, landed cost calculation, journal entries, expiry handling]

## 5. Revenue Recognition
[ASC 606 treatment for subscription + one-time, journal entries, practical simplification]

## 6. Monthly Checklist
[Weekly tasks, monthly tasks, quarterly tasks, annual tasks]

## 7. Common Mistakes
[Top 10 + product-category-specific mistakes]

## 8. When to Hire
[Stage-gated: solo → bookkeeper → CPA → fractional CFO]
```

### Unit Economics Tracking Scaffold

```markdown
# Unit Economics Tracking — [TUP_ID]: [TUP_NAME]

## 1. Channel Economics Dashboard
[Table: Channel, Target CAC, Target LTV, LTV:CAC, Status]

## 2. Payback Period Analysis
[Formula, scenarios at different margin assumptions, sensitivity table]

## 3. Monthly Reporting
[What to calculate, attribution methodology, tools]

## 4. Scale/Hold/Kill Framework
[Decision rules per channel with time thresholds]
```

### Business Review Cadence Scaffold

```markdown
# Business Review Cadence — [TUP_ID]: [TUP_NAME]

## 1. Cadence Overview
[Table: Weekly/Monthly/Quarterly/Annual with duration, participants, purpose]

## 2. Weekly Cash Check (15 min)
[5-item checklist, 13-week forecast template]

## 3. Monthly Business Review (60-80 min)
[Survival Five (early stage) + Full Scorecard (growth stage), 10-section agenda, output template]

## 4. Quarterly Business Review (2-3 hours)
[Quarter review, OKR framework, resource allocation, strategic bets, risk register]

## 5. Annual Planning (8 weeks)
[Timeline, 7 plan components, Start/Stop/Continue questions]

## 6. Hypothesis Integration
[How reviews connect to hypothesis validation]
```
