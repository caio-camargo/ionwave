# Business Review Cadence — M25: Financial Operations

**TUP**: M25
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-007 (Timeline to $30K MRR), HYP-008 (Capital Sufficiency)
**Danilo Source**: ops_model_v10_dump/536_monthly_business_review.json (2 rows), 537_quarterly_planning.json (31 rows), 538_annual_planning_process.json (29 rows)
**Cross-Reference**: M35 (Execution Plans), M30 (Analytics), M3 (Financial Model)

---

## Purpose

Define IonWave's business review rhythm: what gets reviewed when, by whom, and what decisions follow. Three Danilo tabs merged here (MBR, QBR, Annual) into a single cadence system. The MBR (2 rows in Danilo) was actually the most detailed — a full 10-section, 80-minute meeting agenda packed into raw text. QBR (31 rows) provided an OKR framework. Annual (29 rows) provided a planning timeline.

**Core principle**: Reviews are not bureaucracy — they're the feedback loop. Without a cadence, founders either never look at numbers (fly blind) or look at the wrong numbers at the wrong time. The goal is the minimum review structure that catches problems before they become crises.

**Scope boundary**: This file covers the *financial and strategic* review cadence. Operational reviews (inventory, fulfilment, customer service) live in M35 (Execution Plans). Analytics dashboards and KPI definitions live in M30 (Analytics). This file is the *meeting structure and decision framework*.

---

## 1. Review Cadence Overview

| Cadence | Duration | Participants | Purpose | First Instance |
|---------|----------|-------------|---------|---------------|
| **Weekly Cash Check** | 15 min | Founder (solo) | Cash flow pulse, ad spend check | Week 1 |
| **Monthly Business Review (MBR)** | 60-80 min | Founder + Advisor/Partner | Performance vs plan, course corrections | Month 2 |
| **Quarterly Business Review (QBR)** | 2-3 hours | Founder + Key Stakeholders | Strategic review, OKR reset, resource allocation | Quarter 2 |
| **Annual Planning** | 2-3 days (over 8 weeks) | Founder + Studio/Investors | Vision, goals, budget, milestones | Year 2 |

### Phase-Gating

**Pre-revenue (Month 0-1)**: Weekly Cash Check only. Nothing to review yet — focus on launch.

**Early revenue (Month 2-6)**: Weekly Cash Check + Monthly MBR. This is the survival phase — every month matters. MBR is the most important meeting.

**Growth (Month 6-12)**: Add Quarterly QBR. Enough data for quarterly strategic decisions.

**Scale (Month 12+)**: Full cadence including Annual Planning. Business is mature enough for long-horizon planning.

---

## 2. Weekly Cash Check (15 min, Every Friday)

[Confidence: B | Source: DTC cash management best practices. 82% of small business failures are cash flow related.]

### Agenda

| # | Check | Source | What You're Looking For |
|---|-------|--------|------------------------|
| 1 | Current bank balance | QBO / Bank app | Enough to cover next 2 weeks of obligations? |
| 2 | Pending Stripe payouts | Stripe dashboard | Any holds or delays? |
| 3 | This week's ad spend vs budget | Meta/Google Ads Manager | Overspend? Underspend? |
| 4 | This week's revenue vs last week | Shopify dashboard | Trend direction |
| 5 | Upcoming obligations (next 2 weeks) | QBO A/P | CM invoice due? 3PL bill? Tax payment? |

### 13-Week Cash Flow Forecast

Maintain a rolling 13-week (one quarter) cash forecast in Google Sheets:

```
Columns: Week 1, Week 2, ... Week 13
Rows:
  Starting Cash Balance
  + Revenue (collected, not earned)
  − Ad Spend
  − CM/Inventory Payments
  − 3PL/Fulfilment
  − Software Subscriptions
  − Payroll/Contractor
  − Tax Payments
  − Other
  = Ending Cash Balance
```

**Example (Month 3, base case)** *(Dialogue upgrade U5)*:

| Row | Week 1 | Week 2 | Week 3 | Week 4 |
|-----|--------|--------|--------|--------|
| Starting Cash | $18,000 | $16,850 | $15,700 | $15,250 |
| + Revenue (Stripe payouts) | $1,500 | $1,600 | $1,700 | $1,800 |
| − Ad Spend | $1,250 | $1,250 | $750 | $1,250 |
| − CM/Inventory | $0 | $0 | $0 | $0 |
| − 3PL/Fulfilment | $400 | $400 | $400 | $400 |
| − Software (QBO, ReCharge, Klaviyo, Shopify) | $0 | $0 | $1,000 | $0 |
| − Contractors | $0 | $0 | $0 | $0 |
| − Tax payments | $0 | $0 | $0 | $0 |
| − Other | $0 | $0 | $0 | $100 |
| **Ending Cash** | **$16,850** | **$15,700** | **$15,250** | **$15,300** |

*Note: CM invoice ($5K-10K) hits quarterly — model those weeks explicitly. Revenue ramps weekly as subscriber base grows.*

**[TRACK B — requires human]**: Build this as a Google Sheets template with formulas (rolling 13 weeks, auto-calculates ending balances, conditional formatting for <$5K threshold).

**Update**: Every Friday during Weekly Cash Check
**Alert threshold**: If any week in the forecast shows <$5K cash balance, flag immediately

[Confidence: B | Source: Standard startup cash management tool. 13-week is standard because it covers one fiscal quarter of visibility.]

---

## 3. Monthly Business Review — MBR (60-80 min)

[Confidence: B | Source: Danilo tab 536 (detailed 10-section agenda), expanded with hypothesis system integration]

### Pre-Meeting Prep (30 min before MBR)

The MBR is only useful if the data is ready. Before the meeting:

| # | Task | Owner | Source |
|---|------|-------|--------|
| 1 | Close books for prior month | Bookkeeper/Founder | QBO (see bookkeeping_setup.md checklist) |
| 2 | Generate P&L, Balance Sheet, Cash Flow Statement | QBO | Standard financial statements |
| 3 | Calculate unit economics by channel | Founder | See unit_economics_tracking.md |
| 4 | Pull ad performance summary | Founder | Meta/Google Ads Manager |
| 5 | Pull subscription metrics | Founder | ReCharge dashboard |
| 6 | Pull customer feedback highlights | Founder | Shopify reviews, email replies, support tickets |

### MBR Agenda (10 Sections)

#### Section 1: Executive Summary (5 min)

One-paragraph state of the business. Written before the meeting by the founder.

Template:
> "In [Month], we generated $[X] revenue ([+/-]% vs prior month, [+/-]% vs plan). We acquired [N] new customers at $[X] blended CAC. MRR is $[X] ([+/-]% vs target). The key win was [X]. The key concern is [Y]. Cash runway is [N] months."

#### Section 2: Scorecard vs Targets (15 min)

The heart of the MBR. Compare actuals to targets for every key metric.

**Survival Five (Month 2-6)** *(Dialogue upgrade U3)*: For a solo founder, track only these 5 metrics in early MBRs. Everything else is either derived from these or doesn't change month-to-month at early stage.

| # | Metric | Target | Why It's Survival-Critical |
|---|--------|--------|---------------------------|
| 1 | **Cash Runway** | ≥6 months | You die without cash. Check first. |
| 2 | **Blended CAC** | ≤$38 | Determines if acquisition works at all. |
| 3 | **MRR** | Growing m/m | Progress toward $30K target (HYP-007). |
| 4 | **Monthly Churn** | ≤12% | The silent killer — catches product problems. |
| 5 | **Subscription Attach** | ≥45% | Determines LTV profile of customer base. |

**Full Scorecard (Month 6+)**: Expand to full 10-metric view when data is mature enough for trend analysis.

| Metric | Target | Actual | Delta | Status | Hypothesis |
|--------|--------|--------|-------|--------|------------|
| **Revenue** | $[X] | $[X] | [+/-]% | 🟢/🟡/🔴 | HYP-007 |
| **Orders** | [N] | [N] | [+/-]% | 🟢/🟡/🔴 | — |
| **New Customers** | [N] | [N] | [+/-]% | 🟢/🟡/🔴 | — |
| **Blended CAC** | $35 | $[X] | [+/-]$ | 🟢/🟡/🔴 | HYP-001 |
| **Subscription Attach Rate** | 50% | [X]% | [+/-]% | 🟢/🟡/🔴 | HYP-002 |
| **Monthly Churn** | ≤12% | [X]% | [+/-]% | 🟢/🟡/🔴 | HYP-003 |
| **Gross Margin** | 67% | [X]% | [+/-]% | 🟢/🟡/🔴 | HYP-004 |
| **LTV:CAC** | ≥3.0x | [X]x | [+/-] | 🟢/🟡/🔴 | HYP-005 |
| **MRR** | $[X] | $[X] | [+/-]% | 🟢/🟡/🔴 | HYP-007 |
| **Cash Runway** | ≥6 months | [N] months | — | 🟢/🟡/🔴 | HYP-008 |

**Status key**:
- 🟢 On track (within 10% of target)
- 🟡 Watch (10-25% off target)
- 🔴 Off track (>25% off target or past kill criteria)

#### Section 3: What Worked (5 min)

List 2-3 wins from the month. Be specific:
- "Meta Prospecting creative angle #3 (problem-aware hook) delivered $28 CAC vs $42 average"
- "Subscription attach rate hit 56% after subscription-first checkout redesign"

#### Section 4: What Didn't Work (5 min)

List 2-3 things that underperformed. Be honest:
- "Google Non-Brand campaigns burned $1,200 at $65 CAC — paused"
- "Email welcome flow had 2% click rate (industry avg is 8-12%)"

#### Section 5: Key Learnings (5 min)

What did we learn that changes our approach going forward?
- Not just "what happened" but "what this means for next month"
- Link to hypothesis updates if a learning affects a hypothesis

#### Section 6: Customer Insights (10 min)

| Source | Insight | Action |
|--------|---------|--------|
| Reviews | [Quote or summary] | [What to do about it] |
| Support tickets | [Pattern or theme] | [What to do about it] |
| Survey responses | [Data point] | [What to do about it] |
| Churn reasons | [Top 3 cancellation reasons] | [Retention intervention] |

**Why this section matters**: Unit economics are lagging indicators. Customer feedback is a leading indicator. If customers are unhappy, churn will increase next month — you want to catch it here, not in next month's scorecard.

#### Section 7: Competitive Landscape (5 min)

Quick scan: Any competitor moves worth noting? New products, pricing changes, ad creative shifts?
- Cross-reference: M26 (Competitive Intel) monitoring system
- Skip this section if nothing notable happened

#### Section 8: Next Month Priorities (10 min)

| Priority | Owner | Target | Completion Criteria |
|----------|-------|--------|-------------------|
| 1. [Top priority] | [Name] | [Measurable target] | [How we know it's done] |
| 2. [Second priority] | [Name] | [Measurable target] | [How we know it's done] |
| 3. [Third priority] | [Name] | [Measurable target] | [How we know it's done] |

**Rule**: Maximum 3 priorities. More than 3 = no priorities.

#### Section 9: Resource Needs (5 min)

| Resource | Why Needed | Cost | Decision |
|----------|-----------|------|----------|
| [Tool/person/budget] | [Why] | [$X] | Approved / Deferred / Declined |

#### Section 10: Open Discussion (10 min)

Unstructured time for questions, concerns, ideas that don't fit elsewhere.

### MBR Output

After every MBR, create a brief written record (5 min to write):
1. **3-sentence summary** of business state
2. **Scorecard** (Section 2 table — copy/paste)
3. **Top 3 priorities** for next month (Section 8)
4. **Decisions made** (approvals, kills, pivots)
5. **Hypothesis updates** (if any metric triggered a hypothesis revision)

Store in: `tracking/MBR_Log.md` or equivalent

---

## 4. Quarterly Business Review — QBR (2-3 hours)

[Confidence: B | Source: Danilo tab 537 (OKR framework + resource allocation), adapted for early-stage DTC]

### Pre-QBR Prep

| # | Task | Time | Source |
|---|------|------|--------|
| 1 | Aggregate 3 months of MBR scorecards | 30 min | MBR logs |
| 2 | Calculate quarterly trends (are metrics improving?) | 30 min | QBO + spreadsheet |
| 3 | Review hypothesis registry for changes | 15 min | data/hypotheses/registry.json |
| 4 | Draft OKR proposals for next quarter | 45 min | Founder reflection |

### QBR Agenda

#### Part 1: Quarter in Review (45 min)

**Quarterly Scorecard** (aggregate of 3 MBRs):

| Metric | Q Target | Q Actual | Trend (improving/flat/declining) | Notes |
|--------|----------|----------|--------------------------------|-------|
| Revenue | $[X] | $[X] | [↑/→/↓] | |
| New Customers | [N] | [N] | [↑/→/↓] | |
| Blended CAC | $35 | $[X] | [↑/→/↓] | Lower is better |
| Subscription Attach | 50% | [X]% | [↑/→/↓] | |
| Monthly Churn | ≤12% | [X]% | [↑/→/↓] | Lower is better |
| MRR | $[X] | $[X] | [↑/→/↓] | |
| Cash Balance | $[X] | $[X] | — | |

**Hypothesis Status Review**: Which hypotheses moved from ASSUMED to TESTING? Any grade upgrades? Any kill criteria triggered?

#### Part 2: OKRs — Objectives & Key Results (45 min)

**Framework** (from Danilo tab 537):

Set 2-3 Objectives for next quarter, each with 2-3 Key Results.

**Template:**

> **Objective 1**: [Qualitative goal — what we want to achieve]
> - KR 1.1: [Quantitative measure] — Current: [X], Target: [Y]
> - KR 1.2: [Quantitative measure] — Current: [X], Target: [Y]
> - KR 1.3: [Quantitative measure] — Current: [X], Target: [Y]

**Example (Quarter 2):**

> **Objective 1**: Validate unit economics and achieve sustainable CAC
> - KR 1.1: Blended CAC ≤$38 (from current $[X])
> - KR 1.2: LTV:CAC ≥2.8x sustained for 30 days
> - KR 1.3: 3+ creative angles tested with ≥100 conversions each
>
> **Objective 2**: Build subscription retention foundation
> - KR 2.1: Month 1 churn ≤15% across all cohorts
> - KR 2.2: Save flow live in Shopify, recovering ≥15% of cancellation attempts
> - KR 2.3: Welcome email flow achieving ≥30% open rate and ≥8% click rate

**OKR rules:**
- Maximum 3 Objectives
- Maximum 3 Key Results per Objective
- Key Results must be quantitative and measurable
- 70% achievement = good (OKRs should be stretchy)
- Review and score previous quarter's OKRs before setting new ones

#### Part 3: Resource Allocation (30 min)

**Resource buckets** (from Danilo tab 537):

| Resource | This Quarter | Next Quarter | Change | Rationale |
|----------|-------------|-------------|--------|-----------|
| **Ad Budget** | $[X]/mo | $[X]/mo | [+/-]% | [Why changing] |
| **Founder Time** | [X] hrs/week on [area] | [X] hrs/week on [area] | — | [Where to shift focus] |
| **Tools/Software** | $[X]/mo total | $[X]/mo total | [+/-] | [New tools added/removed] |
| **Outsourcing** | $[X]/mo | $[X]/mo | [+/-] | [Freelancers, agencies] |

#### Part 4: Strategic Bets (15 min)

From Danilo tab 537 — each quarter, identify 1-2 "strategic bets" to test:

| Bet | Description | Investment | Success Criteria | Kill Criteria | Timeline |
|-----|------------|-----------|-----------------|---------------|----------|
| Bet 1 | [What we're trying] | [$X + time] | [How we know it worked] | [How we know to stop] | [Weeks/months] |
| Bet 2 | [What we're trying] | [$X + time] | [How we know it worked] | [How we know to stop] | [Weeks/months] |

**Examples:**
- "Test TikTok organic for 60 days — post 5x/week, measure follower growth and site traffic"
- "Run Reddit engagement experiment in r/keto — 30 days genuine contribution, then measure referral traffic"

#### Part 5: Risks to Monitor (15 min)

| Risk | Likelihood | Impact | Mitigation | Owner |
|------|-----------|--------|-----------|-------|
| [Risk description] | H/M/L | H/M/L | [What we do if it happens] | [Who monitors] |

**Standing risks for IonWave:**
- CAC drift above $45 → reduce ad spend, test new channels
- Churn above 15% → product investigation, retention sprint
- Cash runway below 3 months → pause growth spending, initiate fundraise
- Supplier disruption → identify backup supplier per M6
- Regulatory action → FDA compliance review per M7

### QBR Output

1. **Previous quarter OKR scorecard** (scored 0-1.0 per KR)
2. **Next quarter OKRs** (approved)
3. **Resource allocation changes** (approved)
4. **Strategic bets** (committed)
5. **Risk register** (updated)
6. **Hypothesis updates** (if any)

---

## 5. Annual Planning Process (2-3 days over 8 weeks)

[Confidence: B | Source: Danilo tab 538 (8-week timeline + 7 plan components), adapted for early-stage DTC]

### When to Start Annual Planning

**Note**: For Year 1, annual planning is premature — focus on MBRs and QBRs. This section becomes relevant for Year 2 planning (starting ~November of Year 1).

### 8-Week Planning Timeline (from Danilo)

| Week | What | Who | Output |
|------|------|-----|--------|
| **Nov Week 1** | Year in review — what happened | Founder | Review document |
| **Nov Week 2** | Market/competitive analysis | Founder | Market update |
| **Nov Week 3** | Draft goals and priorities | Founder | Draft plan |
| **Nov Week 4** | Budget planning | Founder + Studio/Advisor | Draft budget |
| **Dec Week 1** | Strategy session | Founder + Studio/Advisor | Aligned plan |
| **Dec Week 2** | Finalize plan and budget | Founder + Studio/Advisor | Final plan |
| **Dec Week 3** | Communicate to team/stakeholders | Founder | Shared plan |
| **Jan Week 1** | Execute | Founder | Action |

### 7 Plan Components (from Danilo)

| # | Component | Question It Answers | Example |
|---|-----------|-------------------|---------|
| 1 | **Vision** | Where are we going? (North star) | "IonWave is the trusted marine plasma brand for health-conscious adults" |
| 2 | **Goals** | What will we achieve this year? (3-5 big goals) | "$500K ARR, 2,000 active subscribers, 3 SKUs" |
| 3 | **Priorities** | What matters most? (Ranked) | "1. Retention 2. Channel diversification 3. Product line expansion" |
| 4 | **Initiatives** | How will we achieve goals? (Key projects) | "Launch email nurture revamp, test Google Ads, develop keto-specific SKU" |
| 5 | **Budget** | What resources do we need? | "Marketing $X/mo, Operations $X/mo, Product dev $X" |
| 6 | **Milestones** | How will we track progress? (Quarterly) | "Q1: $100K ARR, Q2: $200K ARR, Q3: $350K ARR, Q4: $500K ARR" |
| 7 | **Risks** | What could go wrong? (And mitigation) | "Supply chain disruption → backup supplier by Q2" |

### Strategic Questions (Start/Stop/Continue)

From Danilo's Annual Planning tab — answer these during Nov Week 1:

- What did we learn this year?
- What's changed in the market?
- What's our biggest opportunity?
- What's our biggest risk?
- What should we **START** doing?
- What should we **STOP** doing?
- What should we **CONTINUE** doing?
- What resources do we need?
- What does success look like Dec 31?

---

## 6. Hypothesis Integration

### How Reviews Connect to the Hypothesis System

The business review cadence is the primary mechanism for hypothesis validation. Every MBR scorecard tests multiple hypotheses simultaneously:

| Hypothesis | MBR Metric | Kill Criteria (from registry) | When to Escalate |
|-----------|-----------|------------------------------|-------------------|
| HYP-001 (CAC) | Blended CAC | >$50 after $3K spend | Immediately — affects all downstream |
| HYP-002 (Sub Rate) | Subscription Attach | <35% after 100 orders | MBR discussion, funnel redesign |
| HYP-003 (Churn) | Monthly Churn | >15% in first 2 cohorts | MBR discussion, product investigation |
| HYP-004 (Margin) | Gross Margin | COGS >$25 | QBR — supplier negotiation |
| HYP-005 (LTV) | LTV:CAC Ratio | <2.5x after 6 months | QBR — strategic review |
| HYP-007 (Timeline) | MRR | <$5K by Month 6 | QBR — strategy pivot |
| HYP-008 (Capital) | Cash Runway | <3 months | Immediately — fundraise trigger |

### Escalation Protocol

When a kill criterion is triggered:

1. **MBR-level** (CAC, churn, sub rate): Discuss in next MBR. Set 30-day action plan.
2. **QBR-level** (LTV:CAC, timeline): Discuss in next QBR. Consider strategy pivot.
3. **Immediate** (cash runway <3 months, CAC >$50 with no improvement): Emergency session. Don't wait for next review.

---

## Intelligence Gaps

| Gap | Priority | Validation Path | Current Grade |
|-----|----------|----------------|---------------|
| Optimal MBR format for solo founder (60 min may be too long for one person) | MEDIUM | Run first 3 MBRs, assess which sections add value | C |
| OKR scoring methodology (how strict?) | LOW | Adopt Google's 70% = good standard, adjust after first quarter | C |
| Annual planning relevance for Year 1 (likely premature) | LOW | Skip annual planning in Year 1, revisit at Month 10 | B |
| Integration between MBR log and hypothesis validation_log.json | MEDIUM | Define automated or manual sync process | D |
