# Operator System

**TUP**: M1 — Labor Chain & Deployment
**Sources**: Tabs 149 (Operator Certification), 150 (Operator Toolkit), 151 (Operator Contract Template), 152 (Operator Onboarding Checklist)
**Cross-TUP**: M9 (Ecommerce Infra — tech stack), M24 (Fulfillment — 3PL management), M30 (KPIs), M35 (Execution Plans)
**Cross-Package**: `data/rollout/` — Recruiting cascade that leads to this operator role. VP brief references this document for operator recruitment. Chain specification (L4 node = this operator system).

---

## 1. Operator Role Summary

**Position**: IonWave Operator
**Reports to**: Studio 4 (Nilo Vicioso) via CoS/CM
**Location**: Remote (US timezone overlap required)
**Type**: Full-time contractor with equity
**Mission**: Execute the ODD. Take IonWave from Table Set ($0) to $100K MRR in 12 months.

### Compensation

| Component | Amount | Trigger | Behavior Aligned |
|-----------|--------|---------|-----------------|
| Base cash | $4,000/mo → $6K → $8K | Start → Winner Found → $100K MRR | Retention (shows up) |
| Equity | 15% IonWave (4yr vest, 1yr cliff) | On contract signing | Long-term alignment |
| Bonus: First Blood | $5,000 | 100 customers, CAC < 2x target | Execution speed |
| Bonus: Winner Found | $10,000 | CAC at target, 3+ winning ads, positive unit econ | Quality execution |
| Bonus: $100K MRR | $25,000 | Sustainable profitable revenue | Scale achievement |
| Health stipend | $500/mo | At Winner Found | Retention |
| Payment | Bi-weekly (1st and 15th) | — | — |

**Market Context (2026):** $4K/mo base is well below market for studio-assigned operators ($8-12K/mo typical). This is intentional — the 15% equity is the real compensation. Operator must genuinely believe in the equity upside. If equity value is unclear, this structure will fail to attract top talent.

**Recommended Vesting Enhancement:** Consider hybrid vesting: 50% time-based (standard 4yr/1yr cliff) + 50% milestone-based (vests upon hitting MRR targets). Aligns incentive with actual value creation rather than just time served.

### Performance Milestones

| Milestone | Timeline | Definition | Bonus |
|-----------|----------|-----------|-------|
| **Table Set** | Week 4 | Site live, product ready, ads ready to run | — |
| **First Blood** | Week 8 | 100 customers acquired, CAC < 2x target | $5K |
| **Winner Found** | Week 12 | CAC at target, 3+ winning ads, positive unit econ | $10K + salary bump to $6K/mo |
| **$100K MRR** | Month 12 | Sustainable profitable revenue | $25K + salary to $8K/mo |

### Equity Value Scenario Table (U1)

Operators must be able to evaluate the equity offer. Present this during recruitment:

| Scenario | Annual Revenue | Valuation Multiple | Company Value | 15% Equity Value |
|----------|---------------|-------------------|--------------|-----------------|
| Conservative | $500K ARR | 2x | $1M | $150K |
| Base case | $1.2M ARR | 3x | $3.6M | $540K |
| Optimistic | $3M ARR | 4x | $12M | $1.8M |
| Home run | $10M ARR | 5x | $50M | $7.5M |

> The $4K/mo cash is the survival wage. The equity is the wealth creation vehicle. If you cannot sell the equity story with conviction, increase the cash.

### Kill Criteria

- No Table Set by Week 6 → performance review
- No First Blood by Week 12 → termination discussion
- Negative unit economics at Week 12 → immediate review
- Grade drops to D (per CM grading) → termination process

### Root-Cause Attribution Protocol (U2)

Before any kill criteria triggers a termination discussion, conduct root-cause attribution:

| Category | Definition | Example | Action |
|----------|-----------|---------|--------|
| **Operator Execution** | Operator had tools, access, and guidance but failed to execute | Ads not launched despite training, site errors not fixed | Performance discussion → remediation plan (1 week) → escalate if no improvement |
| **System Failure** | The ODD, tools, or processes failed the operator | 3PL delayed shipments, Shopify outage, supplier quality issue | Fix the system, extend timeline, no penalty to operator |
| **Force Majeure** | External event beyond anyone's control | Platform policy change, regulatory action, pandemic | Pause clock, adjust milestones, document exception |

> Never trigger termination without root-cause attribution. In franchise systems, this is called "exception reporting" — field consultants document cause before any adverse action.

---

## 2. Operator Certification

Before receiving access to live ad accounts, customer data, and operational systems, the Operator must demonstrate baseline competency.

### Certification Checklist

| # | Certification Item | Assessment Method | Pass Threshold | Timeline |
|---|-------------------|------------------|---------------|----------|
| 1 | IonWave ops model review | Written summary of key sections | Covers thesis, ICP, unit econ, competitive landscape | Week 1 |
| 2 | Media buying assessment | Test campaign in sandbox account | Can set up campaign structure, targeting, creative upload | Week 2 |
| 3 | Klaviyo proficiency | Set up test email flow | Can build 3-email sequence with triggers, segments, A/B test | Week 2 |
| 4 | Shopify store setup test | Complete setup checklist in dev store | All M9 Week 1 setup items completed correctly | Week 2 |
| 5 | Inventory management quiz | Written assessment | Understands reorder points, FEFO, lot tracking (per M24) | Week 3 |
| 6 | Week 1 simulation | Execute simulated first week tasks | Completes daily standup, submits report, escalates correctly | Week 3 |

**Note:** Certification is formative, not gatekeeping. The goal is to identify knowledge gaps BEFORE live execution, not to eliminate candidates. A below-threshold score on any item triggers focused training, not disqualification.

---

## 3. Operator Toolkit

Everything the Operator needs to execute, organized by category:

### 3.1 Platform Access (Request from Studio)

| Tool | Access Level | Purpose | Setup Timeline |
|------|-------------|---------|---------------|
| Shopify | Admin | Store management, orders, products | Day 1 |
| Klaviyo | Admin | Email flows, segments, campaigns | Day 1 |
| Meta Business Manager | Ad account access | Facebook/Instagram ads | Day 1 |
| TikTok Ads Manager | Ad account access | TikTok ads | Day 1 |
| Google Analytics (GA4) | View access | Site analytics | Day 1 |
| Triple Whale | Dashboard access | Attribution, MER tracking | Day 1 |
| 1Password | Shared vault | Credential management | Day 1 |
| Slack | #ionwave channel | Daily communication | Day 1 |
| Google Drive | IonWave folder | Docs, reports, assets | Day 1 |
| Banking | View access only | Operating account visibility | Week 2 |

### 3.2 Templates & SOPs

- Ad templates (per M15 creative framework)
- Email templates (per M18 lifecycle flows)
- Weekly report template
- Daily standup format
- Escalation request form

### 3.3 Contacts

- Supplier (CM contact)
- 3PL (per M24 selected provider)
- Designer (freelance)
- Customer support (initial: Operator handles directly)

### 3.4 Bookmarked Dashboards

- Shopify admin
- Meta Ads Manager
- Klaviyo dashboard
- Triple Whale main dashboard
- Google Analytics real-time

---

## 4. Operator Onboarding — 3-Week Reading Plan

### Week 1 — Foundation (understand the business)

| # | Required Tab/Document | Purpose |
|---|----------------------|---------|
| 1 | 0. Start Here | Orientation to the ops model |
| 2 | Thesis (M0) | Why IonWave exists, trade hypothesis |
| 3 | Unit Economics (M25) | Margin structure, COGS, break-even |
| 4 | ICP (M27) | Who the customer is |
| 5 | Formulation Master | Product details |
| 6 | Competitive Intel (M26) | Landscape, positioning |
| 7 | PM Competence Framework | Self-assessment tool |
| 8 | Decision Authority Matrix | What you can/can't decide |

### Week 2 — Customer (understand the buyer)

| # | Required Tab/Document | Purpose |
|---|----------------------|---------|
| 9 | Customer Archetypes (M27) | Buyer personas |
| 10 | Day in the Life | Customer daily routine |
| 11 | Purchase Journey Map | Awareness → Purchase path |
| 12 | Objection Encyclopedia | Every objection + response |
| 13 | Language Dictionary | Words customers use |
| 14 | Watering Holes | Where customers congregate |

### Week 3 — Execution (understand the playbook)

| # | Required Tab/Document | Purpose |
|---|----------------------|---------|
| 15 | ODD Completion Sequencer | What to do in what order |
| 16 | 30-Day Plan (M35) | First month execution plan |
| 17 | Hook Library (M15) | Ad hooks |
| 18 | Angle Library (M15) | Ad angles |
| 19 | Channel Landscape | Where to advertise |
| 20 | Email Flow Architecture (M18) | Email automation map |

### Weekly Assessment Gates (U3)

Each week's reading plan has a mandatory assessment before progressing:

| Week | Assessment | Format | Pass Threshold | Administered By |
|------|-----------|--------|---------------|----------------|
| Week 1 | Foundation Quiz | 15-question written quiz covering thesis, unit econ, ICP, decision authority | 80% (12/15) correct | CoS or Nilo |
| Week 2 | Customer Persona Presentation | 10-minute verbal presentation of ICP, objections, purchase journey | Covers all 3 customer archetypes with specific language examples | CoS or Nilo |
| Week 3 | Execution Simulation | Build 1 ad campaign structure + 1 email flow in sandbox accounts | Correct targeting, budget allocation, and email triggers | CoS or Nilo |

**Remediation**: Below-threshold scores trigger focused re-reading + 1:1 walkthrough. Maximum 2 attempts per gate. If Week 1 gate fails twice, review whether this is a talent fit issue.

### Onboarding Complete When

- [ ] All workspace accounts active and tested
- [ ] All Week 1-3 tabs read (confirm in Slack)
- [ ] All 3 weekly assessment gates passed (§4 above)
- [ ] PM Competence self-assessment completed (score 60+)
- [ ] First weekly report submitted
- [ ] 30-day execution plan reviewed and approved
- [ ] Onboarding packet signed and returned
- [ ] Certification checklist passed (§2)

---

## 5. Operator Contract Template

**DISCLAIMER: This is a structural guide, not legal advice. Consult an attorney before use.**

### Key Sections

| # | Section | Key Terms |
|---|---------|----------|
| 1 | **Parties** | Studio 4 entity ↔ Operator (individual contractor) |
| 2 | **Role & Scope** | Full operational ownership of IonWave. Defined by ODD + Decision Authority Matrix |
| 3 | **Term** | Initial 12-week sprint, renewable by mutual agreement |
| 4 | **Compensation** | Per §1 compensation table above |
| 5 | **Equity Terms** | 15% vesting over 4 years, 1-year cliff. Hybrid: 50% time + 50% milestone. **Double-trigger acceleration only** (U5) |
| 6 | **Performance Standards** | Link to Performance Surface (role_engineering §2.3). Monthly CM grading. Kill criteria defined |
| 7 | **Intellectual Property** | All work product belongs to Studio. Operator retains portfolio reference rights |
| 8 | **Confidentiality** | NDA covering: ODD content, customer data, financial data, proprietary frameworks. Duration: 2 years post-termination |
| 9 | **Termination** | For cause: grade D sustained 2 months, fraud, abandonment. Without cause: 30 days notice + vested equity retained |
| 10 | **Dispute Resolution** | Mediation first, then binding arbitration. No litigation except injunctive relief |
| 11 | **Governing Law** | [State] law, [venue] jurisdiction |

### Equity Detail

- **Grant**: 15% of IonWave equity
- **Instrument (U23)**: Must specify one of: common stock, restricted stock, stock options (ISO or NSO), or profits interest (LLC). Each has different tax implications:
  - **Common stock at low 409A**: Minimal tax at grant. Best if entity has low valuation at operator start.
  - **Stock options (ISO)**: No tax at grant, tax at exercise. Requires formal option plan and board approval.
  - **Profits interest (LLC)**: No tax at grant if structured correctly. Only applies to LLCs. Most tax-efficient for early-stage.
  - **Restricted stock**: Tax at grant unless 83(b) election filed within 30 days. Operator must understand this.
- **409A Valuation (U24)**: Required before any equity grant. If C-corp, formal 409A. If LLC, fair market value determination. Budget $2-5K for initial valuation.
- **Vesting**: 4 years, 1-year cliff, monthly thereafter. **Recommended hybrid (U5)**: 50% time-based + 50% milestone-based (vests at First Blood, Winner Found, $100K MRR).
- **Acceleration**: **Double-trigger ONLY** (U5) — requires BOTH acquisition AND involuntary termination without cause. Single-trigger (100% on acquisition alone) was standard pre-2020 but creates governance risk — operator who has hit zero milestones would get full payout on acquisition.
- **Buyback**: Company has right of first refusal on any transfer. Buyback at FMV if Operator departs after cliff.
- **Anti-dilution**: None (standard for operator equity).
- **Drag-along / Tag-along (U26)**: Operator subject to drag-along (if majority sells, operator must sell). Operator has tag-along rights (if majority sells, operator can join on same terms).
- **Pivot/Merger/Dissolution (U25)**: If IonWave pivots, merges into another TUP, or Trade dissolves — vested equity converts to equivalent value in successor entity. Unvested equity continues vesting in successor on same schedule. If dissolution with no successor, vested equity receives pro-rata liquidation proceeds.
- **Governing Law for Equity (U31)**: Equity terms governed by state of entity incorporation (likely Delaware), regardless of contractor agreement's governing law.

### Relationship Classification & Misclassification Risk (U4 — CRITICAL)

> **WARNING**: The current operator structure — full-time, exclusive, using company tools, following company ODD, monitored daily — likely fails the IRS 20-factor test and the ABC test (California and many other states) for independent contractor classification. This is the single highest legal risk in the M1 system.

**Mitigation Options:**

| Option | Description | Pros | Cons |
|--------|-----------|------|------|
| **A. Reclassify as Employee** | W-2 employment with payroll taxes, benefits obligation | Eliminates misclassification risk entirely | Increases cost ~25-30% (payroll taxes, workers comp, etc.) |
| **B. Restructure for ABC Compliance** | Operator maintains independent business, serves multiple clients, uses own methods | Preserves contractor classification | May conflict with "full operational ownership" model — operator split attention |
| **C. Use PEO/EOR** | Professional Employer Organization handles employment, Studio maintains operational relationship | Legal compliance outsourced, reasonable cost ($100-200/mo) | Adds administrative layer |
| **D. Accept Risk with Legal Counsel** | Keep contractor classification, strengthen agreement language, consult employment attorney | Simplest to implement | Risk of reclassification, back taxes, penalties if audited |

**Recommendation**: Option C (PEO/EOR) or Option A (employee classification) for the Operator role. The operator's level of integration, control, and exclusivity makes contractor classification difficult to defend. Budget $3-5K for employment attorney review before first operator contract.

### Non-Compete / Non-Solicitation (U9)

- **Non-solicitation**: Operator shall not solicit IonWave customers, suppliers, or employees for 12 months post-termination. Enforceable in most states.
- **Non-compete**: Operator shall not operate a competing supplement brand for 12 months post-termination. **Note**: Enforceability varies by state. FTC's 2024 non-compete rule (if upheld) may limit this for employees but not equity holders. Consult attorney for current status.
- **Pre-existing IP Schedule (U10)**: Operator must declare any pre-existing IP they bring to the engagement. All other work product created during engagement is assigned to Company.

### Data Protection (U34)

- Operator acknowledges handling customer PII (names, emails, payment data) and agrees to:
  - Use data only for IonWave business purposes
  - Not transfer data to personal accounts or devices
  - Delete/return all data within 7 days of termination
  - Report any data breach within 24 hours
- If California residents are involved (CCPA): operator acknowledges service provider obligations

---

## 6. Operator Offboarding / Transition Protocol (U32 — CRITICAL)

Messy operator exits destroy 3-6 months of progress. This protocol applies to ALL exit types.

### 6.1 Exit Types

| Type | Trigger | Notice Period | Equity Treatment |
|------|---------|-------------|-----------------|
| **Voluntary resignation** | Operator decision | 30 days | Vested equity retained. Unvested forfeited. |
| **Termination for cause** | Grade D sustained 2 months, fraud, abandonment | Immediate | Vested equity retained (unless fraud — then clawback per agreement). Unvested forfeited. |
| **Termination without cause** | Studio decision | 30 days + severance (1 month) | Vested equity retained + accelerated vesting of next milestone tranche. |
| **Acquisition** | Company sold | Per deal terms | Double-trigger: if terminated within 12 months of acquisition, 100% accelerates. |
| **Mutual agreement** | Both parties | Negotiated | Per separation agreement. |

### 6.2 Access Revocation Checklist (Complete within 24 hours of last day)

- [ ] Shopify — Remove admin access
- [ ] Klaviyo — Remove admin access
- [ ] Meta Business Manager — Remove from ad account
- [ ] TikTok Ads — Remove from ad account
- [ ] Google Analytics — Remove access
- [ ] Triple Whale — Remove access
- [ ] 1Password — Remove from shared vault, rotate all shared passwords
- [ ] Slack — Remove from all channels
- [ ] Google Drive — Remove access, transfer ownership of operator-created docs
- [ ] Banking — Remove view access

### 6.3 Knowledge Transfer Requirements (Complete before last day)

| Item | Deliverable | Timeline |
|------|------------|---------|
| Active campaigns | Document all running ads: budget, targeting, creative, performance | 5 days before exit |
| Email flows | Document all active Klaviyo flows: status, performance, pending changes | 5 days before exit |
| Vendor/supplier contacts | Transfer all active relationships with context notes | 5 days before exit |
| Pending decisions | Document all open decisions awaiting resolution | 3 days before exit |
| Weekly report (final) | Complete final weekly report with transition recommendations | Last day |
| 30-minute debrief | Recorded call covering: what's working, what's broken, what the next person needs to know | Last day |

### 6.4 Relationship Handoff

- Customer relationships: Transfer to CoS or interim operator
- Supplier relationships: Warm introduction to replacement
- Creator relationships: Notify creators of contact change
- Update Contact Registry (§4 in relationships_and_compensation.md) with new owners

---

## 7. Cross-TUP Alignment

| TUP | Operator System Alignment |
|-----|--------------------------|
| M9 | Tech stack (Shopify, Klaviyo, Meta) defines Operator's daily tools |
| M15 | Ad creative framework — Operator executes hook/angle testing |
| M18 | Email flows — Operator manages Klaviyo automation |
| M24 | Fulfillment — Operator manages 3PL relationship, inventory |
| M25 | Finance — Operator spend authority maps to budget categories |
| M30 | KPI Framework — Operator performance measured by MER, CAC, churn |
| M35 | Execution Plans — 12-week sprint structure Operator follows |
