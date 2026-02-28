# Creative Production Queue — M12: Ad Creative

**Version**: 1.0.0
**TUP**: M12 — Ad Creative
**Purpose**: Priority system and workflow for managing creative production pipeline
**Cross-references**: M12 (Creative Replenishment, Creative Performance Tracker), M13 (Daily Checklist)

---

## 1. What Is the Production Queue?

**Definition**: Prioritized list of creative assets to be produced, with status tracking and deadline management.

**Purpose**:
- **Prevent creative drought**: Always know what's next to produce
- **Resource allocation**: Focus effort on high-priority assets first
- **Team coordination**: Everyone sees what's in progress vs pending
- **Deadline adherence**: Track due dates, avoid last-minute rushes

[Confidence: A | Source: Creative production management best practices | Date: 2026-02]

---

## 2. Queue Structure (Google Sheets or Notion)

### 2.1 Columns

| Column | Description | Example |
|--------|-------------|---------|
| **Priority** | P1 (urgent), P2 (important), P3 (nice-to-have) | P1 |
| **Ad Name** | Naming convention (M12 creative_naming_convention.md) | IW_Meta_MissingMineral_UGC_HookB_15s_v1 |
| **Tier** | 1 (derivatives), 2 (new concepts), 3 (high-production) | Tier 1 |
| **Angle** | Missing Mineral, Contrarian, Comparison, etc. | Missing Mineral |
| **Format** | UGC, Founder, Static, Testimonial | UGC |
| **Status** | Backlog / In Progress / Review / Complete | In Progress |
| **Assigned To** | Creator name or internal | Sarah (UGC Creator) |
| **Date Added** | YYYY-MM-DD | 2026-02-10 |
| **Deadline** | YYYY-MM-DD | 2026-02-15 |
| **Est. Hours** | Time estimate | 2 hours |
| **Cost** | Budget estimate | $100 |
| **Notes** | Context, references, special instructions | Derivative of Winner #1, swap hook only |

---

### 2.2 Status Definitions

| Status | Meaning | Owner Action |
|--------|---------|--------------|
| **Backlog** | Planned but not started | No action yet |
| **In Progress** | Actively being produced | Check-in daily/weekly |
| **Review** | Draft submitted, awaiting approval | Review within 24 hours |
| **Revision** | Needs changes, sent back to creator | Implement feedback |
| **Complete** | Approved, ready to launch | Upload to ad platform |
| **Launched** | Live in ad account | Move to performance tracker |

---

## 3. Priority System

### 3.1 Priority Definitions

**P1 — Urgent** (produce within 24-48 hours):
- **Trigger**: Active winner is fatigued (CPA +30%, hook rate -20%) and NO backlog ready
- **Trigger**: Creative backlog <3 ads (emergency)
- **Trigger**: Major campaign launch (e.g., seasonal, promotional)
- **Action**: Drop everything, produce immediately

**P2 — Important** (produce within 3-7 days):
- **Trigger**: Active winner showing early fatigue signs (hook rate -15%, CPM +20%)
- **Trigger**: Weekly production cadence (2-3 Tier 1 derivatives per week)
- **Trigger**: Backlog 3-5 ads (watch zone)
- **Action**: Scheduled weekly production

**P3 — Nice-to-Have** (produce within 1-2 weeks):
- **Trigger**: Testing new angle (exploratory)
- **Trigger**: Backlog >10 ads (healthy)
- **Trigger**: Tier 3 high-production asset (VSL, influencer collab)
- **Action**: Fit into spare capacity

[Confidence: A | Source: Priority management frameworks | Date: 2026-02]

---

### 3.2 Priority Decision Tree

**Question 1**: Is an active winner fatigued AND backlog empty?
- **Yes** → P1 (urgent)
- **No** → Next question

**Question 2**: Is backlog <5 ads?
- **Yes** → P2 (important)
- **No** → Next question

**Question 3**: Is this a scheduled weekly production task?
- **Yes** → P2 (important)
- **No** → P3 (nice-to-have)

---

## 4. Weekly Production Workflow

### 4.1 Monday: Review & Prioritize

**Tasks** (30 minutes):
1. Review last week's ad performance (M13 daily_checklist.md)
2. Identify fatigued winners → Add P1/P2 derivatives to queue
3. Check backlog count → Add P2 net-new concepts if <5
4. Review queue: Confirm priorities, deadlines, assignments

**Output**: Updated queue with this week's priorities.

---

### 4.2 Tuesday-Thursday: Produce

**P1 Tasks** (Tuesday AM):
- Produce urgent Tier 1 derivatives (hook swaps, text overlays)
- Goal: Launch within 24 hours

**P2 Tasks** (Tuesday PM - Thursday):
- Produce scheduled Tier 1 derivatives (2-3 per week)
- Produce Tier 2 new concepts (1-2 per week)
- Coordinate UGC creator deliveries

**P3 Tasks** (Thursday PM, if time allows):
- Exploratory new angles
- Tier 3 production prep (scripting, coordination)

**Time Allocation**:
- P1: 2-4 hours (if triggered)
- P2: 4-8 hours
- P3: 0-4 hours (spare capacity)

---

### 4.3 Friday: Review & Launch

**Tasks** (1-2 hours):
1. Review all drafts from this week (In Review status)
2. Approve or request revisions
3. Upload approved ads to Meta/TikTok/YouTube
4. Update queue (move Complete → Launched)
5. Move launched ads to performance tracker (M12 creative_performance_tracker.md)

**Output**: 2-6 new ads launched this week.

---

## 5. Capacity Planning

### 5.1 Tier-Based Time Estimates

| Tier | Production Time | Cost | Weekly Capacity |
|------|----------------|------|-----------------|
| **Tier 1** (Derivatives) | 1-4 hours | $0-50 | 2-3 per week |
| **Tier 2** (New Concepts) | 4-12 hours | $50-300 | 1-2 per week |
| **Tier 3** (High-Production) | 20-40 hours | $500-2,000 | 1 per month |

**IonWave Solo Founder Capacity** (8-10 hours/week creative time):
- **Month 1-2**: 2 Tier 2 + 2 Tier 1 per week (4-6 ads/week)
- **Month 3-4**: 1 Tier 2 + 3 Tier 1 per week (4-7 ads/week)
- **Month 5+**: 2 Tier 2 + 5 Tier 1 per week (7-11 ads/week) — requires UGC batch production

[Confidence: B | Source: M12 creative_strategy.md velocity targets | Date: 2026-02]

---

### 5.2 Bottleneck Management

**Common Bottleneck**: Editing time.

**Solutions**:
1. **Batch Editing**: Edit 5-10 UGC videos in one session (4-6 hours)
2. **Template Reuse**: Save CapCut/Premiere templates for fast Tier 1 edits
3. **Outsource**: Hire freelance editor on Upwork ($15-30/hour) if bottleneck persists
4. **Tool Upgrade**: AI tools (OpusClip for auto cut-downs, Descript for fast edits)

**When to Outsource**: If queue backlog exceeds 10 ads AND operator has <5 hours/week editing time.

[Confidence: B | Source: Creative ops capacity planning | Date: 2026-02]

---

## 6. Queue Maintenance Rituals

### 6.1 Daily Glance (5 minutes)

**When**: Every morning (or before ad account check-in)

**Tasks**:
- Scan P1 row: Any urgent items?
- Check In Progress items: On track for deadline?
- Check Review items: Anything waiting >24 hours? (Approve or send feedback)

**Action**: Unblock any stuck items.

---

### 6.2 Weekly Deep Clean (30 minutes)

**When**: Monday morning (part of weekly review)

**Tasks**:
1. **Archive Launched Ads**: Move Complete/Launched ads to archive tab (keep queue current)
2. **Reprioritize**: Adjust P1/P2/P3 based on new performance data
3. **Add New Items**: Based on fatigue signals, backlog count, testing priorities
4. **Deadline Check**: Flag any items at risk of missing deadline
5. **Capacity Check**: Is this week's queue realistic given time/budget constraints?

**Output**: Clean, prioritized queue for the week.

---

### 6.3 Monthly Audit (60 minutes)

**When**: First Monday of each month

**Tasks**:
1. **Velocity Analysis**: Did we hit target velocity? (e.g., 4-6 ads/week Month 1-2)
2. **Bottleneck Identification**: What slowed us down? (editing? creator delays? approvals?)
3. **Hit Rate Check**: Of ads produced, what % became winners? (target: 10-20% Month 1-3)
4. **Queue Health**: Average time from Backlog → Launched? (target: <7 days for Tier 1, <14 days for Tier 2)
5. **Budget vs Actual**: Did we stay within creative production budget?

**Output**: Process improvements for next month.

[Confidence: A | Source: Queue management best practices | Date: 2026-02]

---

## 7. Cross-Functional Integration

### 7.1 Queue ← Performance Tracker

**Flow**: Performance data informs production priorities.

**Examples**:
- **Performance Tracker** flags: "Winner #1 fatigued (CPA +30%)"
- **Production Queue** adds: "P1: Produce 3 derivatives of Winner #1 (hook swaps)"

**Update Frequency**: Weekly (Monday review).

---

### 7.2 Queue ← Testing Protocol (M14)

**Flow**: Testing plan informs queue (what to test next).

**Examples**:
- **Testing Protocol** plan: "Month 1 Week 3: Test Contrarian angle (5 variants)"
- **Production Queue** adds: "P2: Produce 5 Contrarian UGC ads by Feb 20"

**Update Frequency**: Monthly (first week of month, plan month's testing agenda).

---

### 7.3 Queue → Creative Tracker

**Flow**: Once ad is launched, move from queue to tracker.

**Process**:
1. Ad approved → Status = Complete
2. Ad uploaded to Meta/TikTok → Status = Launched
3. Copy row from Production Queue → Paste into Creative Performance Tracker (M12 creative_performance_tracker.md)
4. Archive row in Production Queue (or move to Archive tab)

**Why Separate?** Queue = pre-launch workflow. Tracker = post-launch performance. Different purposes.

[Confidence: A | Source: Workflow separation logic | Date: 2026-02]

---

## 8. Team Collaboration (If Applicable)

### 8.1 Multi-Person Queue

**Use Case**: Operator + UGC creators + freelance editor.

**Assignments**:
- **Operator**: Owns queue, sets priorities, approves final ads
- **UGC Creators**: Assigned specific rows (e.g., "Sarah: IW_Meta_MissingMineral_UGC_HookB_15s_v1")
- **Freelance Editor**: Assigned batch editing rows (e.g., "Editor: Cut 10 UGC videos into 15s variants")

**Visibility**: Share Google Sheet with edit access (or Notion with comment permissions).

**Communication**:
- **Slack/Email**: Alert when new assignment added ("Sarah, new UGC brief in queue")
- **Comments**: Use Sheet comments for questions/clarifications
- **Status Updates**: Creators update status (Backlog → In Progress → Review)

[Confidence: B | Source: Team workflow collaboration | Date: 2026-02]

---

### 8.2 Async Workflow

**Challenge**: Operator works M-F 9-5, UGC creator works evenings/weekends.

**Solution**:
1. **Async Briefs**: Operator adds brief to queue Monday AM
2. **Creator Pulls**: Creator checks queue Monday PM, claims assignment, updates status (In Progress)
3. **Creator Delivers**: Uploads draft to shared folder by Wednesday PM
4. **Operator Reviews**: Reviews Thursday AM, approves or sends feedback via comments
5. **Creator Revises**: (if needed) Revises Thursday PM
6. **Operator Launches**: Friday AM

**Tools**: Google Sheets (queue) + Google Drive (file delivery) + Slack (notifications).

---

## 9. Queue Templates

### 9.1 Template: Weekly Production Plan

**Use Case**: Plan this week's creative production every Monday.

**Format** (markdown):
```
# Week of [Date]: Creative Production Plan

## P1 — Urgent (This Week)
- [ ] [Ad Name] — [Reason] — [Assigned To] — [Deadline]

## P2 — Important (This Week)
- [ ] [Ad Name] — [Reason] — [Assigned To] — [Deadline]
- [ ] [Ad Name] — [Reason] — [Assigned To] — [Deadline]

## P3 — Nice-to-Have (If Time Allows)
- [ ] [Ad Name] — [Reason] — [Assigned To] — [Deadline]

## Notes
- [Any context, blockers, dependencies]
```

**Example**:
```
# Week of Feb 10: Creative Production Plan

## P1 — Urgent (This Week)
- [ ] IW_Meta_MissingMineral_UGC_HookB_15s_v1 — Winner #1 fatigued, need derivative — Sarah — Feb 12

## P2 — Important (This Week)
- [ ] IW_Meta_Contrarian_UGC_HookA_30s_v1 — Test new angle — Sarah — Feb 14
- [ ] IW_Meta_MissingMineral_UGC_HookC_15s_v1 — Backlog <5, refill — Internal — Feb 15

## P3 — Nice-to-Have (If Time Allows)
- [ ] IW_YouTube_Authority_VSL_v1 — Exploratory, prep for Month 3 — TBD — Feb 20

## Notes
- Sarah's batch UGC delivery expected Feb 13 (10 raw videos)
- Plan VSL scripting for next week
```

---

### 9.2 Template: Monthly Production Roadmap

**Use Case**: Plan month's creative production at start of month.

**Format** (markdown):
```
# [Month Year]: Creative Production Roadmap

## Goals
- **Velocity**: [X] ads/week
- **Angles to Test**: [List]
- **Tier 3 Assets**: [e.g., 1 VSL]
- **Backlog Target**: 10+ ads by end of month

## Week 1
- [List priorities]

## Week 2
- [List priorities]

## Week 3
- [List priorities]

## Week 4
- [List priorities]

## Budget
- **UGC**: $[X]
- **Editing**: $[X]
- **Tier 3**: $[X]
- **Total**: $[X]
```

---

## 10. Queue Metrics

### 10.1 KPIs to Track

| KPI | Target | Measurement Frequency |
|-----|--------|----------------------|
| **Ads Produced/Week** | 4-6 (Month 1-2), 7-11 (Month 5+) | Weekly |
| **Backlog Count** | 10+ ready-to-test ads | Weekly |
| **Avg Time: Backlog → Launched** | <7 days (Tier 1), <14 days (Tier 2) | Monthly |
| **On-Time Delivery %** | >80% (ads launched by deadline) | Monthly |
| **Hit Rate** | 10-20% (ads that become winners) | Monthly |

---

### 10.2 Warning Signals

| Signal | Meaning | Action |
|--------|---------|--------|
| **Backlog <3 ads** | Creative drought imminent | Add P1 items, produce immediately |
| **>50% of queue is P1** | Reactive mode (bad) | Shift to proactive (add P2 backlog items) |
| **Avg time >14 days (Tier 1)** | Bottleneck in workflow | Identify bottleneck, outsource or streamline |
| **On-time delivery <60%** | Deadlines unrealistic or capacity insufficient | Adjust deadlines or reduce queue size |

[Confidence: B | Source: Production management KPIs | Date: 2026-02]

---

## Intelligence Gaps

| Gap | Impact | Validation Path |
|-----|--------|----------------|
| Optimal queue size (10 items? 20 items? 50 items?) | Low | Test: Does larger queue create paralysis or better planning? |
| Tool preference (Google Sheets vs Notion vs Trello) | Low | Start with Google Sheets (familiar, flexible), migrate if needed |
| Async workflow effectiveness (operator + creators across timezones) | Medium | Monitor: Does async work smoothly or create delays? |

---

## Next Steps

1. **Pre-Launch** (Week -1): Set up production queue (Google Sheets template)
2. **Day 1**: Add first 5-10 items to queue (Month 1 testing priorities)
3. **Week 1**: Establish weekly Monday review ritual (30 min)
4. **Month 3**: Run first monthly audit, refine workflow

---

**Version History**:
- v1.0.0 (2026-02-10): Initial production queue system with priority framework, weekly workflow, capacity planning, maintenance rituals, cross-functional integration, team collaboration
