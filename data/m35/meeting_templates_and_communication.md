# IonWave Meeting Templates & Communication Protocol

**Version**: 1.0.0
**Date**: 2026-02-15
**Author**: Caio, Claude (collaborative)
**Purpose**: Standard templates for recurring meetings + communication norms to minimize overhead and maximize clarity
**Quality**: C+ (templates are universal best practice, IonWave customization is pre-execution)

---

## Communication Philosophy

**Default to Async, Reserve Sync for High-Bandwidth**

- **Async-first**: Status updates, decisions that can wait 24 hours, non-urgent questions → Slack, email, Loom
- **Sync required**: Brainstorming, conflict resolution, complex problems, urgent blockers → Zoom, phone, in-person

**Response Time SLAs**:
- **Urgent** (customer crisis, site down, ad account banned): <2 hours, any time
- **High** (decision needed for tomorrow's work): Same business day
- **Normal** (general questions, updates): <24 hours
- **Low** (FYI, reading material): No SLA, read when convenient

**Over-Communication Principle**: For a team of 1-5 people, bias toward over-sharing context. Better to say "already knew that" than "I didn't know that was happening."

---

## Daily Standup Template

### Solo Founder Version (Months 1-3)

**Format**: Self-reflection note (1-2 sentences per question, <5 min)
**Tool**: Notion daily note or paper journal

**Template**:
```
Date: [YYYY-MM-DD]

✅ Shipped Yesterday:
[1-2 items max]

🎯 Critical Task Today:
[ONE thing — what MUST happen today?]

🚧 Blockers:
[None / or list with severity: LOW/MED/HIGH]

📊 Pulse:
Revenue yesterday: $X | Orders: Y | Ad spend: $Z

🗣️ Customer Voice:
[Any urgent CX issue or standout feedback]

---
Notes:
[Free-form — anything else on mind]
```

**Output**: If blocker is HIGH, address before other work. If pulse shows anomaly (e.g., zero orders when expecting 3-5), investigate root cause.

---

### Team Version (Months 4-12+)

**Format**: Synchronous Zoom (15 min) OR Async Slack thread (posted by 9 AM)
**Tool**: Zoom for sync, Slack #daily-standup channel for async

**Template** (each person posts/says):
```
Name: [Your Name]

Yesterday: [One win or key task completed]
Today: [One priority task]
Blockers: [None / or specific blocker with ask]

Example:
Name: Caio
Yesterday: Shipped 3 new ad creatives to Meta, fulfilled 8 orders
Today: Finalize Week 1 Day-by-Day plan, call supplier for CoA
Blockers: None

Name: Sarah (Ads Lead)
Yesterday: Scaled Meta budget to $150/day, paused 2 underperforming ads
Today: Test TikTok creative variation, analyze Friday's CAC spike
Blockers: Need access to TikTok Ads Manager (waiting on Caio to add me)
```

**Facilitator (Caio) adds**:
```
Metrics Snapshot:
- Revenue yesterday: $X (vs. $Y target)
- Orders: Z (vs. target)
- CAC: $A (vs. $B target)

Any red flags? [Yes/No — if yes, flag for WBR or ad-hoc deep dive]
```

**Rules**:
- Each person talks/posts <2 minutes
- No problem-solving (flag for later)
- If blocker requires >5 min discussion, add to "Parking Lot" (handle after standup with relevant people only)
- If async, facilitator responds with "Acknowledged" or action on blockers by 10 AM

---

## Weekly Business Review (WBR) Template

**Duration**: 30-45 minutes
**Frequency**: Every Friday, 4:00 PM
**Owner**: Caio
**Attendees**: Full team (or solo if Month 1-3)
**Tool**: Google Doc (shared, edit access for all attendees)

**Template**:
```
# Weekly Business Review — Week of [Start Date] to [End Date]

---

## 1. METRICS REVIEW (15 min)

| Metric | This Week | Last Week | Target | Trend | Notes |
|--------|-----------|-----------|--------|-------|-------|
| Revenue | $X | $Y | $Z | ↑/↓/→ | [% change, any anomalies] |
| Orders | X | Y | Z | ↑/↓/→ | [Order count variance] |
| Ad Spend | $X | $Y | $Z | ↑/↓/→ | [Breakdown by platform if useful] |
| CAC | $X | $Y | <$50 | ↑/↓/→ | [Blended, note if one channel spiked] |
| Subscription Rate | X% | Y% | >25% | ↑/↓/→ | [% of orders] |
| Cash | $X | $Y | >$10K | ↑/↓/→ | [Runway in weeks: X weeks] |
| MER | X.X | Y.Y | >2.0 | ↑/↓/→ | [Revenue / Ad Spend] |

**Decision**: Any metric miss target by >30% for 2 consecutive weeks? [Yes/No]
→ If YES: Escalate to ROTC section below

---

## 2. COHORT/RETENTION SNAPSHOT (5 min) — Starting Month 2

**Last Week's Cohort**:
- Orders: X
- Subscriptions: Y (Z%)
- Repeat purchase: N/A (too early) or [if Month 2+ and enough time: A%]

**Older Cohorts**:
- Week [X] cohort (now Week Y): Z% still active subscribers
- Month 1 cohort: Currently A% retained (B customers remaining of C initial)

**Churn Red Flags**:
[List any cancellations with "product didn't work" or quality complaints]

---

## 3. CUSTOMER VOICE (5 min)

**Highlight (Best Feedback)**:
> "[Customer quote]"
— [Customer name or anonymized], [Source: email/review/DM], [Date]

**Context**: [Why this is notable — e.g., "First unsolicited testimonial mentioning 'best hydration product ever'"]

**Lowlight (Worst Issue)**:
> "[Customer complaint quote]"
— [Customer name or anonymized], [Source], [Date]

**Resolution Status**: [Fixed / In Progress / Escalated]

**Pattern**:
[Any recurring theme across 3+ customers? E.g., "3 customers mentioned sachet is hard to tear open"]

---

## 4. RISKS, OBSERVATIONS, TRENDS, CHALLENGES (ROTC) (10 min)

**Risk** (could derail next week/month):
- [Example: "Supplier said lead time may extend to 30 days due to holiday — could run out of stock Week 3"]
- [Example: "Meta ad account flagged for review — spending paused, resolution pending"]

**Observation** (non-obvious pattern):
- [Example: "TikTok CAC spiked Friday — CPM went $8 → $18, investigating if platform-wide or our account"]
- [Example: "Saturday orders 2x weekday average — consider weekend-specific creative"]

**Trend** (3+ weeks directional):
- [Example: "CAC creeping up 5% weekly for 4 weeks — creative fatigue likely, need refresh"]
- [Example: "Subscription attach declining (Week 1: 30%, Week 2: 28%, Week 3: 25%, Week 4: 22%) — pricing perception issue?"]

**Challenge** (decision needed):
- [Example: "Hire ads specialist now ($3K/month) or wait until Month 4? Ad spend hitting $5K/month, founder capacity strained."]
- [Example: "Customer requesting wholesale — accept or defer until PMF validated?"]

---

## 5. DECISIONS & ACTION ITEMS (5 min)

**Decisions Made This Week**:
1. [Decision]: [Rationale]
   - Example: "Killed lemon-lime SKU test — only 2 orders in Week 2, inventory risk not justified"
2. [Decision]: [Rationale]

**Action Items for Next Week**:
| Action | Owner | Due | Status |
|--------|-------|-----|--------|
| [Task 1] | [Name] | [Date] | [Not Started / In Progress / Done] |
| [Task 2] | [Name] | [Date] | [Status] |

**Max 3-5 action items** — focus beats sprawl.

---

## 6. NEXT WEEK PREVIEW (5 min)

**Major Milestones Next Week**:
- [Example: "Launch Instagram Reels campaign (3 creatives, $500 budget)"]
- [Example: "Email blast to Month 1 cohort with retention offer"]

**Capacity Check**:
[Any PTO, travel, or availability gaps?]

**One Big Bet**:
[What's the single highest-leverage experiment next week?]
- Example: "Test subscription-first checkout (toggle vs. radio button) — hypothesis: +5% attach rate"

---

## NOTES / PARKING LOT

[Free-form space for items that came up but didn't fit sections above]

---

**Next WBR**: [Date], 4:00 PM
**Facilitator**: [Name]
```

**Output**: Save to `/weekly_reports/WBR_YYYY-MM-DD.md` or Notion database. Link in Slack for team visibility.

---

## Monthly Business Review (MBR) Template

**Duration**: 60 minutes
**Frequency**: First Friday of every month
**Owner**: Caio
**Attendees**: Full team + advisor (optional)
**Tool**: Google Doc or Notion

**Template**:
```
# Monthly Business Review — [Month Year]

---

## SURVIVAL FIVE SCORECARD (from M25)

| Metric | This Month | Last Month | Target | Trend |
|--------|------------|------------|--------|-------|
| **Revenue** | $X | $Y | $Z | ↑/↓/→ |
| **Gross Margin** | X% | Y% | >60% | ↑/↓/→ |
| **Cash Balance** | $X | $Y | >$10K | ↑/↓/→ |
| **Burn Rate** | $X/month | $Y/month | <$Z | ↑/↓/→ |
| **Runway** | X months | Y months | >3 months | ↑/↓/→ |

**Health Check**: All green? [Yes / No — if No, escalate which metric and why]

---

## FOUR QUESTIONS (from M25)

### 1. What worked this month?
[Wins, experiments that paid off, positive surprises]
- Example: "Subscription attach hit 28% (target was 25%) — toggle UI change from Week 2 is working"
- Example: "First repeat purchase: 8% of Month 1 cohort reordered in Month 2"

### 2. What didn't work?
[Failures, kills, pivots]
- Example: "TikTok ads bombed — $800 spend, CAC $120, paused indefinitely"
- Example: "Influencer seeding: 10 sent, zero posted — need better vetting (M23 criteria)"

### 3. What did we learn?
[Customer insights, operational lessons, market signals]
- Example: "Customers buying for fasting (not athletics) — ICP shift from 'biohackers' to 'wellness fasters'"
- Example: "Self-fulfillment breaks at 50 orders/week — need 3PL by Month 4"

### 4. What's the plan for next month?
[3-5 priorities, no more]
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

---

## COHORT RETENTION (Month 3+)

| Cohort | Initial Size | Month 1 Retention | Month 2 Retention | Month 3 Retention |
|--------|--------------|-------------------|-------------------|-------------------|
| Month 1 | X customers | Y% (Z customers) | A% (B customers) | C% (D customers) |
| Month 2 | X customers | Y% (Z customers) | A% (B customers) | N/A |
| Month 3 | X customers | Y% (Z customers) | N/A | N/A |

**Churn Analysis**:
[Why are customers churning? Product, price, attention? See M19 segmentation.]

---

## LTV:CAC & PAYBACK (Month 6+)

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| LTV (12-month projection) | $X | $Y | ✅/⚠️/❌ |
| CAC (blended) | $A | <$50 | ✅/⚠️/❌ |
| LTV:CAC Ratio | X.X | >3.0 | ✅/⚠️/❌ |
| Payback Period | X months | <6 months | ✅/⚠️/❌ |

---

## STRATEGIC NOTES

**Market Signals**:
[Competitor moves, industry trends, customer requests that hint at market direction]

**Operational Gaps**:
[What's breaking? What needs to be built?]

**Team/Hiring**:
[Capacity issues, skill gaps, hiring plan]

---

**Next MBR**: [Date]
**Facilitator**: [Name]
```

**Output**: Monthly report (2-3 pages) saved for investor updates (M4 monthly email) and historical reference.

---

## Quarterly Business Review (QBR) Template

**Duration**: Half-day (3-4 hours)
**Frequency**: End of each quarter (Day 90, 180, 270, 365)
**Owner**: Caio
**Attendees**: Full team + advisor/board member (if applicable)
**Location**: Offsite (coffee shop, park, not usual workspace)
**Tool**: Google Doc + whiteboard/Miro for brainstorming

**Template**:
```
# Quarterly Business Review — Q[N] [Year]

---

## PART 1: QUARTER IN REVIEW (60 min)

### Metrics vs. Targets

| Metric | Q[N] Actual | Q[N] Target | Variance | Grade |
|--------|-------------|-------------|----------|-------|
| Revenue | $X | $Y | +/- Z% | A/B/C/D/F |
| Orders | X | Y | +/- Z% | A/B/C/D/F |
| CAC | $X | $Y | +/- Z% | A/B/C/D/F |
| LTV:CAC | X.X | Y.Y | +/- Z | A/B/C/D/F |
| Subscription Attach | X% | Y% | +/- Z% | A/B/C/D/F |
| Churn Rate | X% | <Y% | +/- Z% | A/B/C/D/F |
| Runway | X months | >3 months | +/- Z | A/B/C/D/F |

**Overall Quarter Grade**: [A/B/C/D/F]

---

### Hypotheses Validated/Invalidated

| Hypothesis | Status | Evidence |
|------------|--------|----------|
| HYP-003 (Churn) | [Validated / Invalidated / Uncertain] | [Data: X% churn, Y% at-risk, Z interventions tested] |
| HYP-006 (Differentiation) | [Status] | [Customer feedback: "marine plasma" mentioned in A% of surveys] |
| [Other HYPs touched this quarter] | [Status] | [Evidence] |

---

### Kill Criteria Check

| Kill Criterion | Threshold | Actual | Status |
|----------------|-----------|--------|--------|
| CAC >$100 sustained | >$100 for 2 months | $X average | ✅ Safe / ⚠️ Watch / ❌ Triggered |
| Cash runway <2 months | <2 months | X months | ✅/⚠️/❌ |
| Churn >20% | >20% Month 1 | X% | ✅/⚠️/❌ |
| [Other M0 kill criteria] | [Threshold] | [Actual] | [Status] |

**Decision**: If any kill criterion triggered, do we pivot or proceed with mitigation plan?

---

### Team Health

**Capacity**: [Overloaded / Balanced / Underutilized]
**Morale**: [High / Medium / Low — based on 1-on-1s or team survey]
**Skill Gaps**: [What expertise is missing?]

---

## PART 2: STRATEGIC QUESTIONS (60 min)

### Market
1. Is the ICP still correct? Any emerging segments?
   - [Answer + supporting data]
2. Competitive landscape shifts?
   - [New entrants, pricing changes, positioning moves]

### Product
1. SKU expansion ready? (Based on feedback, demand signals)
   - [Yes / No / Needs more data]
2. Quality issues resolved? (CoA validated, taste feedback, packaging)
   - [Status]

### Growth
1. Which channels scale? Which plateau?
   - Meta: [Status]
   - TikTok: [Status]
   - Google: [Status]
   - Influencer: [Status]
2. Creative fatigue cycle? (How often refresh needed?)
   - [2-4 weeks / Other]

### Operations
1. What's breaking at current scale?
   - [Fulfillment, CX response time, ad ops bandwidth, etc.]
2. What needs to be built next quarter?
   - [3PL transition, hiring, tool upgrades, process docs]

### Financial
1. Runway OK? Fundraising needed?
   - [Runway: X months. Need to raise: Yes/No. Timeline: When?]
2. Path to profitability visible?
   - [Yes, at X MRR / No, need Y change / Uncertain]

---

## PART 3: NEXT QUARTER OKRs (60 min)

**Format**: 3-5 Objectives, each with 2-4 Key Results

### Objective 1: [Qualitative goal]
**Key Results**:
1. [Quantitative metric, target]
2. [Quantitative metric, target]
3. [Quantitative metric, target]

Example:
**Objective 1**: Achieve strong PMF signal
**Key Results**:
1. NPS >40% "very disappointed" (surveyed Month 1-3 cohorts)
2. LTV:CAC >3.0 (12-month LTV projection)
3. Subscription attach >30% (up from 25% Q1)
4. Churn <15% Month 1 (down from 18% Q1)

[Repeat for Objectives 2-5]

---

## PART 4: DECISIONS & COMMITMENTS (30 min)

### Major Pivots (if any)
- **Product**: [Any reformulation, SKU kills, packaging changes]
- **Positioning**: [ICP shift, messaging update, brand evolution]
- **Channel Mix**: [Kill/scale/test decisions]
- **Team Structure**: [Hires, fires, role changes]

### Commitments for Next Quarter
- **Hires**: [Who, when, budget]
- **Tool Investments**: [New software, 3PL, etc.]
- **Experiments**: [Top 3 bets for next quarter]

### Archive & Learnings
- **What gets locked into OpKits**: [Processes now proven, ready to templatize]
- **What gets killed**: [Stop doing list]

---

**Next QBR**: [Date — end of next quarter]
**Facilitator**: [Name]
```

**Output**: Quarterly strategy memo (5-10 pages) + OKRs + updated 30/90/365 execution plan.

---

## Communication Protocol

### Slack Channels (Team Phase, Months 4+)

| Channel | Purpose | Who Posts | SLA |
|---------|---------|-----------|-----|
| **#general** | General team chat, water cooler | Everyone | No SLA |
| **#daily-standup** | Daily pulse (if async) | Everyone by 9 AM | Read by 10 AM |
| **#metrics** | Automated dashboard alerts (Zapier/Geckoboard) | System + Caio | Check daily |
| **#customer-voice** | Customer feedback, reviews, support escalations | CX Lead | Review daily |
| **#wins** | Celebrate wins (first sale, milestone hit, great review) | Everyone | No SLA, just vibes |
| **#decisions** | Log all decisions (async decision-making) | Anyone making a decision | Permanent archive |
| **#random** | Memes, off-topic, team bonding | Everyone | No SLA |

**Rule**: Urgent = DM or phone call, NOT Slack channel post.

---

### Email Norms

**Internal**:
- Subject lines must be actionable: `[DECISION NEEDED] Hire ads person now or wait?` vs. `Question`
- If no response needed: Subject starts with `[FYI]`
- If response needed by deadline: Subject includes `[BY DATE]`

**External (Customers)**:
- CX email SLA: <24 hours first response, <48 hours resolution (simple issues)
- Founder emails (first 50 customers): <48 hours personal touch
- Investor updates: First Friday of month, sent by EOD

**External (Suppliers/Partners)**:
- Response SLA: <48 hours (business hours)
- Critical issues (stock-outs, quality): <4 hours

---

### Asynchronous Decision-Making

**When sync not needed**:
1. Post decision prompt in #decisions or email: `[DECISION NEEDED BY FRIDAY] Should we...? Context: ... Options: A/B/C`
2. Tag relevant people
3. Set deadline (e.g., "If no objections by Friday 5 PM, we proceed with Option B")
4. Allow 24-48 hours for input
5. Decide and log: `[DECIDED] We're doing Option B. Rationale: ... Effective: [Date]`

**When sync required**:
- Conflict between team members
- Brainstorming (async brainstorming is slow)
- Urgent and complex (can't wait 24-48 hours)

---

## Meeting Notes Template

**For any meeting not covered above** (e.g., ad-hoc deep dive, 1-on-1, partner call):

```
# [Meeting Name] — [Date]

**Attendees**: [Names]
**Duration**: [Start] - [End]
**Owner/Facilitator**: [Name]

---

## Agenda
1. [Topic 1]
2. [Topic 2]
3. [Topic 3]

---

## Notes

### [Topic 1]
[Key points discussed]

### [Topic 2]
[Key points discussed]

---

## Decisions Made
1. [Decision]: [Rationale]
2. [Decision]: [Rationale]

---

## Action Items

| Action | Owner | Due | Status |
|--------|-------|-----|--------|
| [Task] | [Name] | [Date] | [Not Started / In Progress / Done] |

---

## Parking Lot (for next time)
[Items that came up but weren't resolved]

---

**Next Meeting**: [Date/Time] or [N/A if one-off]
```

**Storage**: Save to `/meeting_notes/[YYYY-MM-DD]_[meeting-name].md` or Notion database.

---

## Intelligence Gaps & Validation Paths

| Gap | Current Grade | Upgrade Path |
|-----|--------------|--------------|
| Solo founder standup efficacy | D (untested) | B: Month 3 reflection — did 5-min pulse help or feel like overhead? |
| Team WBR vs. solo WBR time delta | C (industry heuristic +15 min) | B: Month 6 team WBR vs. Month 2 solo WBR comparison |
| Async standup adoption rate | D (depends on team culture) | B: Month 4 experiment — track if team prefers sync or async |
| QBR offsite ROI | C (Mutiny case study) | B: Post-Q1 QBR assessment — did offsite yield better strategy than office meeting would have? |
| Communication channel sprawl | C (Slack best practice) | B: Month 6 audit — are all channels active or some dead? |

---

## Cross-References

**Depends on**:
- M30 (Analytics & Dashboards) — metrics populate WBR/MBR templates
- M25 (Financial Ops) — Survival Five MBR structure
- M35 (Operating Rhythms) — these templates execute the rhythms

**Feeds into**:
- Session logs, retrospectives — templates capture decisions for future reference
- M40 (Navigation) — communication norms inform command center UX

---

**Sources**:
- Amazon WBR structure (adapted for small team)
- Startup standup best practices (YC, First Round)
- Async decision-making norms (Basecamp, GitLab remote playbooks)
