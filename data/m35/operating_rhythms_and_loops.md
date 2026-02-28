# IonWave Operating Rhythms & Loops

**Version**: 1.0.0
**Date**: 2026-02-15
**Author**: Caio, Claude (collaborative)
**Purpose**: Repeatable operating cadences that drive execution discipline — daily/weekly/monthly/quarterly loops for IonWave
**Quality**: B (Amazon WBR research A-grade, IonWave adaptation C-grade pre-execution)

---

## Operating Philosophy

**Rhythm = Predictable Execution**

Operating rhythm is the heartbeat that keeps a company aligned, ensuring decisions happen at the right moment and information flows without scrambling. [Confidence: A | Source: cascade.app/blog/operating-cadence-and-rhythm | Date: 2026]

High-performing organizations don't rely on quarterly reviews to track progress—they integrate a structured operating rhythm that keeps teams aligned every day. Weekly meetings, monthly reviews, and real-time reporting ensure information is always available and decision-making happens at the right time. [Confidence: A | Source: Cascade Strategy Blog | Date: 2026]

**IonWave Adaptation**: Solo founder Phase 1 (Months 1-3) → Small team Phase 2 (Months 4-9) → Scaling team Phase 3 (Months 10-12+). Rhythms scale with team size.

---

## Daily Loop: Founder Pulse

### Phase 1 (Solo Founder, Months 1-3)

**Duration**: 5-10 minutes, first thing AM
**Owner**: Caio
**Cadence**: Every business day (Mon-Fri)
**Format**: Solo review (mental checklist or 1-page note)

**5-Minute Daily Standup (Solo Founder Version)**:
1. **What shipped yesterday?** (orders fulfilled, ads launched, content published)
2. **What's the one critical task today?** (singular focus — what MUST happen today)
3. **Any blockers?** (supplier delays, cash issues, customer escalations)
4. **Pulse check**: Revenue yesterday, orders yesterday, ad spend yesterday (30-second Shopify + Meta check)
5. **Customer voice**: Any support tickets, reviews, or DMs that need immediate response?

**Output**: If all green, proceed. If blocker flagged, address before other work.

**Upgrade Path**: At 1-2 hires (Month 4+), convert to async Slack/Discord standup. At 3+ team (Month 7+), convert to synchronous 15-minute Zoom standup.

---

### Phase 2-3 (Team, Months 4-12+)

**Duration**: 15 minutes max
**Owner**: Caio (facilitates)
**Attendees**: Full team (Ads Lead, CX Lead, Ops if hired)
**Cadence**: Every business day (Mon-Fri), 9:00 AM
**Format**: Synchronous (Zoom) or async (Slack thread by 9 AM)

**Daily Standup Template** (see `meeting_templates.md` for full version):
- **Each person**: Yesterday's win, today's priority, blockers (1 minute each)
- **Caio**: Yesterday's metrics (revenue, orders, CAC if significant variance)
- **Escalations**: Any blockers requiring >5 min discussion move to "parking lot" for separate sync

**Rules**:
- No problem-solving in standup (flag, don't fix)
- No status updates on non-critical work
- If someone talks >2 min, timekeeper interrupts
- Async acceptable if team <5 people and timezone-distributed

---

## Weekly Loop: Business Review (WBR-Inspired)

### The Amazon WBR Model (Reference)

Amazon's executive team meets every Wednesday for 60-90 minutes to review 400-500 metrics. The meeting is rooted in Six Sigma DMAIC (Define, Measure, Analyze, Improve, Control) and uses a 2x2 matrix to synthesize data. [Confidence: A | Source: commoncog.com/the-amazon-weekly-business-review | Date: 2026]

Key components:
- Business Update (key performance trends)
- Risks, Observations, Trends, Challenges (ROTC)
- Metrics (current, target, trend)
- Customer Highlights/Lowlights

**IonWave Adaptation**: Solo founder can't review 400 metrics. We use **7-metric MVD** (Minimum Viable Dashboard from M30) and compress to 30-45 minutes.

---

### IonWave Weekly Business Review (WBR-Lite)

**Duration**: 30-45 minutes
**Owner**: Caio
**Attendees**: Solo (Phase 1) → Full team (Phase 2+)
**Cadence**: Every Friday, 4:00 PM (end-of-week reflection before weekend)
**Format**: Structured review + decision log

**Agenda**:

**1. Metrics Review (15 min)** — MVD 7 Metrics (from M30)
| Metric | This Week | Last Week | Target | Trend | Notes |
|--------|-----------|-----------|--------|-------|-------|
| Revenue | $X | $Y | $Z | ↑/↓/→ | Week-over-week % change |
| Orders | X | Y | Z | ↑/↓/→ | Order count |
| Ad Spend | $X | $Y | $Z | ↑/↓/→ | Total across platforms |
| CAC | $X | $Y | <$50 | ↑/↓/→ | Blended all channels |
| Subscription Rate | X% | Y% | >25% | ↑/↓/→ | % of orders that are subs |
| Cash | $X | $Y | >$10K | ↑/↓/→ | Bank balance |
| MER (Merch. Efficiency Ratio) | X.X | Y.Y | >2.0 | ↑/↓/→ | Revenue / Ad Spend |

**Decision rule**: If any metric misses target by >30% for 2 consecutive weeks, escalate to "Problem Solving" section.

**2. Cohort/Retention Snapshot (5 min)** — Starting Month 2
- Last week's cohort: X orders, Y% subscriptions, Z% repeat purchase (if enough time elapsed)
- Month 1 cohort: Current retention rate (e.g., "Week 8, 65% still active")
- Churn red flags: Any customer cancellations with "product didn't work" reason? (feed to M19 churn analysis)

**3. Customer Voice (5 min)**
- **Highlight**: Best customer feedback this week (quote + source)
- **Lowlight**: Worst customer complaint/issue (quote + resolution status)
- **Pattern**: Any recurring theme? (taste, shipping speed, packaging damage, etc.)

**4. Risks, Observations, Trends, Challenges (ROTC) (10 min)**
- **Risk**: Anything that could derail next week/month? (supplier delay, cash crunch, ad account flag)
- **Observation**: Non-obvious pattern in data (e.g., "TikTok CAC spiked Friday, CPM went from $8 to $18")
- **Trend**: 3-week+ directional movement (e.g., "CAC creeping up 5% weekly for 4 weeks — creative fatigue?")
- **Challenge**: Blockers needing decision (e.g., "Hire ads person now or wait until Month 4?")

**5. Decisions & Action Items (5 min)**
- **Decisions made this week**: Log with rationale (e.g., "Killed lemon-lime SKU test — only 2 orders in Week 2, not worth inventory risk")
- **Action items for next week**: Owner + due date (max 3-5 items — focus beats sprawl)

**6. Next Week Preview (5 min)**
- **Major milestones next week**: Product launch, email campaign, ad creative refresh, etc.
- **Capacity check**: Any vacation, travel, or availability gaps?
- **One Big Bet**: What's the single highest-leverage experiment next week?

**Output**: WBR summary note (1-page, saved in `weekly_reports/` folder or Notion) + Decisions logged

**Upgrade Path**:
- **Month 1-3 (Solo)**: 20-30 min, lightweight
- **Month 4-9 (Team of 2-3)**: 30-45 min, all team present
- **Month 10+ (Team of 4+)**: 45-60 min, add "Deep Dive" rotation (one TUP per week — e.g., Week 1 = M13 Ads Deep Dive, Week 2 = M19 Retention Deep Dive)

---

## Monthly Loop: Business Review (MBR)

### Survival Five Scorecard (from M25)

**Duration**: 60 minutes max
**Owner**: Caio
**Attendees**: Founder + key hires (if any)
**Cadence**: First Friday of every month (or last Friday of prior month)
**Format**: Structured review of 5 metrics + 4 questions

**5 Metrics** (Months 2-6, per M25):
1. **Revenue** (monthly total)
2. **Gross Margin** (product GM, not fully-loaded — track both)
3. **Cash Balance** (end of month)
4. **Burn Rate** (monthly spend)
5. **Runway** (months remaining at current burn)

**4 Questions**:
1. **What worked this month?** (wins, experiments that paid off)
2. **What didn't work?** (failures, kills, pivots)
3. **What did we learn?** (customer insights, operational lessons, market signals)
4. **What's the plan for next month?** (3-5 priorities, no more)

**Phase-Gated Additions**:
- **Month 3+**: Add cohort retention table (Month 1/2/3 cohorts, % still active)
- **Month 6+**: Add LTV:CAC ratio, payback period
- **Month 9+**: Add hiring plan, team capacity analysis

**Output**: Monthly report (2-page max) saved for investor updates (M4) and strategic reviews

---

## Quarterly Loop: Strategic Review (QBR)

**Duration**: 2-4 hours (half-day offsite recommended)
**Owner**: Caio + co-founder (if applicable) or key advisor
**Attendees**: Core team (if team exists)
**Cadence**: End of Q1 (Day 90), Q2 (Day 180), Q3 (Day 270), Q4 (Day 365)
**Format**: Offsite (coffee shop, park, anywhere NOT the usual workspace)

**Agenda**:

**1. Quarter in Review (60 min)**
- Revenue, orders, cohort retention vs. targets (from 30/90/365 plans)
- What hypotheses were validated? (HYP-003 Churn, HYP-006 Differentiation, etc.)
- What kill criteria were triggered? (if any — log decision to continue or pivot)
- Team health: Capacity, morale, skill gaps

**2. Strategic Questions (60 min)** — Inspired by Mutiny's quarterly offsite model [Confidence: B | Source: cascade.app blog | Date: 2026]
- **Market**: Is the ICP still correct? Any emerging segments?
- **Product**: SKU expansion ready? Quality issues resolved?
- **Growth**: Which channels scale? Which plateau?
- **Operations**: What's breaking at current scale? What needs to be built?
- **Financial**: Runway OK? Fundraising needed? Path to profitability visible?

**3. Next Quarter OKRs (30-60 min)**
- Set 3-5 **Objectives** (qualitative goals, e.g., "Achieve strong PMF signal")
- Each Objective has 2-4 **Key Results** (quantitative, measurable, e.g., "NPS >40%, LTV:CAC >3.0")
- Translate OKRs into next quarter's 30/90-day plan updates

**4. Decisions & Commitments (30 min)**
- Major pivots (if any): product, positioning, channel mix, team structure
- Commitments for next quarter: hires, tool investments, experiments
- Archive last quarter's data, lock learnings into OpKits

**Output**: Quarterly strategy memo (3-5 pages) + updated OKRs + next quarter execution plan

**Phase Gate Integration**:
- **Q1 Review (Day 90)**: Decide LAUNCH → PMF or iterate
- **Q2 Review (Day 180)**: Decide PMF → SCALE or delay
- **Q3 Review (Day 270)**: Validate scale metrics, plan Q4 expansion
- **Q4 Review (Day 365)**: Year 1 retrospective, Year 2 planning

---

## Operating Loops Summary Table

| Loop | Frequency | Duration | Owner | Purpose | Phase |
|------|-----------|----------|-------|---------|-------|
| **Daily Pulse** | Every business day | 5-15 min | Caio | Tactical execution check | All |
| **Weekly WBR** | Every Friday | 30-45 min | Caio | Metrics + customer voice + ROTC | All |
| **Monthly MBR** | First Friday of month | 60 min | Caio + team | Financial + strategic health | Month 2+ |
| **Quarterly QBR** | End of quarter | 2-4 hours | Caio + advisor/team | Strategic review + OKRs | All |
| **Ad-Hoc Deep Dive** | As needed | 30-90 min | Domain owner | Problem-solving (e.g., CAC spike, churn surge) | Month 3+ |

---

## Choreography: The Meta-Loop

**Definition**: Choreography is the sequencing of loops so they feed each other without collisions or gaps.

**IonWave Choreography**:
- **Monday AM**: Start week with Friday WBR insights fresh (any action items from WBR are Monday priorities)
- **Daily 9 AM**: Standup pulse (15 min max, no deep dives)
- **Mid-week (Wed)**: Ad-hoc deep dives if WBR flagged issues (e.g., "CAC spiked, need creative postmortem")
- **Friday 4 PM**: WBR (end week with data review, set next week priorities)
- **First Friday of Month**: MBR (WBR + extended financial/strategic review)
- **Last Friday of Quarter**: QBR prep (gather data for offsite the following week)

**Key principle**: Loops never conflict. Daily feeds weekly. Weekly feeds monthly. Monthly feeds quarterly. No loop duplicates another's purpose.

**Visual (Conceptual)**:
```
Daily Pulse (5 min)
    ↓ (feeds)
Weekly WBR (45 min) ← Customer voice, metrics, ROTC
    ↓ (feeds)
Monthly MBR (60 min) ← Survival Five, cohort analysis
    ↓ (feeds)
Quarterly QBR (half-day) ← Strategic pivots, OKRs, phase gates
```

---

## Month 1 Loops (Special Case)

**Why special?** Month 1 is pre-revenue or barely-revenue. Most loops don't make sense yet (no cohorts, minimal customers, limited data).

**Month 1 Simplified Rhythms**:
- **Daily**: Founder pulse (5 min solo check — "Is launch on track?")
- **Weekly**: Soft launch progress review (NOT full WBR — just "Did we ship? Any blockers?")
- **End of Month 1**: First real MBR (review Day 1-30 actuals vs. plan, decide to proceed or iterate)

**No QBR in Month 1** — Q1 review happens at Day 90, not Day 30.

**Upgrade trigger**: Month 2 is when full WBR starts (enough data to review metrics, early customer voice emerging).

---

## Meeting Cadence by Phase

### Phase 1: Solo Founder (Months 1-3)

| Meeting | Frequency | Attendees | Duration |
|---------|-----------|-----------|----------|
| Daily Pulse | Every business day | Solo | 5 min |
| Weekly WBR | Every Friday | Solo (or + advisor) | 20-30 min |
| Monthly MBR | First Friday | Solo (or + advisor) | 45-60 min |
| Quarterly QBR | End of quarter | Solo + advisor | 2 hours |

**Total meeting time**: ~3-4 hours/month (solo reflection, minimal overhead)

---

### Phase 2: Small Team (Months 4-9)

| Meeting | Frequency | Attendees | Duration |
|---------|-----------|-----------|----------|
| Daily Standup | Every business day | Full team (2-3 people) | 15 min |
| Weekly WBR | Every Friday | Full team | 30-45 min |
| Monthly MBR | First Friday | Full team | 60 min |
| Quarterly QBR | End of quarter | Full team + advisor | 3 hours |
| 1-on-1s | Biweekly | Caio + each hire | 30 min |

**Total meeting time**: ~8-10 hours/month (team of 3)

---

### Phase 3: Scaling Team (Months 10-12+)

| Meeting | Frequency | Attendees | Duration |
|---------|-----------|-----------|----------|
| Daily Standup | Every business day | Full team (4-6 people) | 15 min |
| Weekly WBR | Every Friday | Full team | 45-60 min |
| Weekly Deep Dive | Rotating | Domain owner + Caio | 30-45 min |
| Monthly MBR | First Friday | Full team | 60-90 min |
| Quarterly QBR | End of quarter | Full team + advisor/board | Half-day |
| 1-on-1s | Biweekly | Caio + each direct report | 30 min |

**Total meeting time**: ~12-15 hours/month (team of 5)

**Meeting Budget Rule**: If meetings exceed 20% of available work hours (40 hrs/week = 8 hrs max meetings), audit and cut.

---

## Anti-Patterns to Avoid

**Meeting Sprawl**:
- ❌ Status update meetings (use async Slack/email instead)
- ❌ Meetings without agendas (every meeting has structure)
- ❌ Meetings without decisions (if no decision needed, cancel)
- ❌ Recurring meetings that lost purpose ("We've always had this call")

**Data Debt**:
- ❌ Reviewing metrics manually assembled each week (automate with M30 dashboards)
- ❌ Scrambling to find data in Friday WBR (dashboards should be always-on)
- ❌ Arguing about data accuracy in meetings (validate data pipelines async)

**Coordination Overhead**:
- ❌ Scheduling 5+ people for 15-minute standup (use async)
- ❌ Cross-timezone standups that require 6 AM wake-ups (async is fine)
- ❌ Forcing synchronous when team is <3 people (solo/duo can be async-first)

**Rigidity**:
- ❌ Never skipping a meeting (if WBR has nothing to review in Week 1, skip it)
- ❌ Following cadence when crisis hits (pause loops, triage crisis, resume)
- ❌ Over-engineering for future scale (don't build 10-person meeting structure for 2-person team)

---

## Touchpoint Cadence (External)

### Customers (M17, M18, M19, M20)

| Touchpoint | Trigger | Channel | Owner |
|------------|---------|---------|-------|
| **Welcome Email** | Order placed | Email (automated) | System |
| **Shipping Notification** | Order shipped | Email (automated) | System |
| **Day 7 Check-In** | 7 days post-delivery | Email (automated) | System |
| **Day 14 Feedback** | 14 days post-delivery | Email (automated) + manual if high-value | CX Lead |
| **Subscription Pause Outreach** | Pause initiated | Email (automated) + SMS if <24hr to cancel | CX Lead |
| **Win-Back** | Churned 30 days ago | Email (automated) | System |
| **Support Response** | Ticket submitted | Email/chat | CX Lead (SLA: <24hr) |

**Founder Touch**:
- First 50 customers: Caio personally emails every customer within 48 hours of delivery ("How's it going?")
- High-value customers (>$200 LTV or 6+ months retained): Quarterly founder check-in email

---

### Investors (M4)

| Touchpoint | Frequency | Format | Owner |
|------------|-----------|--------|-------|
| **Monthly Update** | First week of month | Email (1-2 pages) | Caio |
| **Quarterly Deep Dive** | End of quarter | Video call (30-45 min) | Caio |
| **Ad-Hoc Ask** | As needed | Email/call | Caio |

**Content** (from M4):
- Revenue, orders, key metrics
- Major wins, major fails
- Learnings + pivots
- Next month priorities
- Asks (intros, expertise, capital if needed)

---

### Advisors/Experts

| Touchpoint | Frequency | Format | Owner |
|------------|-----------|--------|-------|
| **Strategic Advisor** | Monthly or quarterly | 30-60 min call | Caio |
| **Domain Expert** (e.g., FDA compliance, supply chain) | As needed | Email or call | Caio |
| **Peer Founders** (YC batchmates, D2C community) | Quarterly or ad-hoc | Coffee/Zoom | Caio |

---

## Intelligence Gaps & Validation Paths

| Gap | Current Grade | Upgrade Path |
|-----|--------------|--------------|
| Amazon WBR structure | A (research sourced) | N/A (reference model) |
| IonWave solo founder WBR efficacy | D (untested) | B: Month 3 actuals show if 30 min is enough |
| Meeting time budget for small team | C (industry heuristic 10-15 hrs/month) | B: Month 6 team survey |
| Async vs sync standup for 2-3 people | D (depends on timezone, work style) | B: Month 4 experiment |
| Quarterly QBR offsite ROI | C (Mutiny case study, not IonWave-specific) | B: Post-Q1 review assessment |

---

## Cross-References

**Depends on**:
- M30 (Analytics & Dashboards) — MVD 7-metric dashboard powers WBR
- M25 (Financial Ops) — Survival Five MBR structure
- M0 (Trade Thesis) — strategic priorities inform QBR focus

**Feeds into**:
- M35 (30/90/365 Plans) — rhythms ensure plans are reviewed and updated weekly/monthly
- M40 (Navigation & Command) — rhythms are the heartbeat of the command center
- All TUPs — operating loops surface issues in every domain (ads, CX, supply, etc.)

---

**Sources**:
- [Amazon WBR structure](https://commoncog.com/the-amazon-weekly-business-review/)
- [WBR best practices](https://www.paulmduvall.com/mastering-weekly-business-reviews-insights-from-amazons-iconic-wbr/)
- [Operating cadence framework](https://www.cascade.app/blog/operating-cadence-and-rhythm)
- [Mutiny quarterly rhythm](https://www.cascade.app/blog/operating-cadence-and-rhythm)
- [HashiCorp scorecard rhythms](https://practicahq.com/skill/operating-cadence)
