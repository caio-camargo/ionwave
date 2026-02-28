# Media Buyer Daily Checklist

## Overview
Daily operational workflow for performance media buyers managing Meta, TikTok, and YouTube/Google campaigns. Ensures systematic monitoring, timely decision-making, and continuous optimization.

## Morning Routine (9:00-10:00 AM) [Confidence: A | Source: Media buying operational best practices, Danilo research | Date: 2026-02]

### 1. Performance Snapshot (15 minutes)

**Review Yesterday's Performance**:

**Meta Ads Manager**:
- [ ] **Spend vs Budget**: Check if campaigns spent 90-110% of daily budget (underspend or overspend flags)
- [ ] **ROAS by Campaign**: Compare yesterday's ROAS to 7-day average (identify major swings)
- [ ] **CPA by Campaign**: Check if CPA within ±20% of target (outliers need investigation)
- [ ] **Conversion Volume**: Verify conversion tracking working (match against backend data within 10-20%)

**TikTok Ads Manager**:
- [ ] **Spend vs Budget**: Check budget pacing (TikTok can overspend more aggressively than Meta)
- [ ] **ROAS by Campaign**: Compare to 7-day average
- [ ] **Creative Performance**: Check CTR (TikTok creative fatigues faster, CTR decline >30% = refresh needed)
- [ ] **Conversion Tracking**: Verify pixel events firing correctly

**YouTube/Google Ads**:
- [ ] **Spend vs Budget**: Check campaign budget utilization
- [ ] **CPA by Campaign**: Compare to target CPA (Google typically longer attribution window)
- [ ] **Search Impression Share**: For search campaigns, check if <80% impression share (opportunity to scale)
- [ ] **Video Views**: For YouTube, check view rate (>15% good, <10% poor)

**Blended Metrics** (from M30):
- [ ] **Total Ad Spend**: Sum across all platforms
- [ ] **Total Revenue** (from Shopify/backend): Last 24 hours
- [ ] **Blended ROAS**: Total revenue / Total ad spend (yesterday)
- [ ] **MER (Marketing Efficiency Ratio)**: Total revenue / Total marketing spend (7-day rolling)

**Documentation**:
- Log key metrics in daily tracker (spreadsheet or dashboard)
- Flag any anomalies for deeper investigation later

### 2. Critical Issues Check (5 minutes)

**Immediate Action Required If**:

**Payment/Billing Issues**:
- [ ] Campaign paused due to payment failure → update payment method immediately
- [ ] Spending limit reached → increase account spending limit or adjust budgets

**Tracking Issues**:
- [ ] Zero conversions reported but backend shows sales → investigate pixel/CAPI/GA4 tracking
- [ ] Conversion spike >200% vs baseline with no business explanation → check for duplicate tracking

**Ad Disapprovals**:
- [ ] Ads disapproved overnight → review policy violation, edit and resubmit
- [ ] Account flagged for review → contact support, provide documentation

**Performance Crashes**:
- [ ] ROAS drop >50% vs 7-day average on major campaign → investigate immediately (audience saturation, creative fatigue, tracking issue, or external factor)

**Platform Issues**:
- [ ] Check platform status pages (Meta Status, TikTok Status, Google Ads Status) for reported outages

### 3. Scaling Decisions (15 minutes)

**Apply 20% Rule Scaling** (from scaling_framework.md):

**For Each Scaling Campaign**:
- [ ] **Check Last Budget Change Date**: Has it been 3-4 days since last increase? (Meta/TikTok) or 4-5 days (Google)?
- [ ] **Check 3-Day Rolling ROAS**: Is ROAS within 10% of target?
- [ ] **Check Learning Phase Status**: Is campaign out of learning phase? (Meta/TikTok)

**If All YES → Scale**:
- [ ] Increase budget by 20% (Meta/TikTok) or 30% (Google)
- [ ] Document: Campaign name, old budget, new budget, date, baseline ROAS
- [ ] Set calendar reminder to review in 3-4 days

**Example**:
```
Campaign: FB_CONV_Scaling_Feb26
Last Change: Feb 7 (3 days ago)
3-Day ROAS: 3.2x (Target: 3.0x) ✓
Learning Phase: Active (out of learning) ✓
Decision: Increase $200/day → $240/day
```

**Downward Scaling (Budget Reductions)**:
- [ ] **If ROAS down 20-30%** vs 7-day average → reduce budget 20%
- [ ] **If ROAS down >30%** vs 7-day average → reduce budget 50% or pause, investigate

### 4. Testing Campaign Review (10 minutes)

**For Each Testing Campaign**:

**Check Test Progress**:
- [ ] **Days in Test**: How many days has test been running?
- [ ] **Conversions to Date**: Has test reached minimum viable data? (10 purchases from M14)
- [ ] **Current ROAS/CPA**: Is it trending toward target or away?

**Apply Kill Criteria** (from M14):
- [ ] **Kill if**: ≥14 days AND <10 purchases (insufficient data rate)
- [ ] **Kill if**: ≥10 purchases AND ROAS <50% of target (statistically unlikely to improve)
- [ ] **Continue if**: <14 days AND trending toward target (give more time)
- [ ] **Graduate if**: ≥10 purchases AND ROAS ≥target AND 3+ days consistency (move to validation phase)

**Example Decisions**:
```
Test A: Day 8, 4 purchases, 2.8x ROAS (target 3.0x) → CONTINUE (give until Day 10)
Test B: Day 12, 2 purchases, 3.5x ROAS → KILL (insufficient data rate)
Test C: Day 10, 12 purchases, 3.3x ROAS → GRADUATE (move to validation scaling)
Test D: Day 15, 11 purchases, 1.5x ROAS (target 3.0x) → KILL (failed target)
```

**Budget Reallocation**:
- [ ] Pause killed campaigns/ad sets
- [ ] Redirect budget to winning tests or scaling campaigns (using 20% Rule increments)

### 5. Creative Fatigue Check (5 minutes)

**For Each Active Ad**:
- [ ] **Check Frequency**: >4 per week = audience saturation warning
- [ ] **Check CTR Trend**: Decline >30% from peak = creative fatigue
- [ ] **Check CPM Trend**: Increase >25% from baseline = competitive pressure or saturation
- [ ] **Days Since Launch**: Meta ads typically fatigue at 4-6 weeks, TikTok at 2-3 weeks

**If Fatigue Detected**:
- [ ] **Short-term**: Reduce budget 20-30% to extend ad lifespan
- [ ] **Medium-term**: Deploy creative derivative (cut-down, new hook, talent swap)
- [ ] **Long-term**: Flag need for fresh creative production

## Midday Check (12:00-12:15 PM) [Confidence: B | Source: Real-time optimization practices | Date: 2026-02]

### Quick Performance Pulse

**Today's Performance vs Yesterday**:
- [ ] Check current day spend (is pacing on track?)
- [ ] Check current day ROAS (major variance vs yesterday?)
- [ ] Check conversion volume (tracking still working?)

**High-Spend Campaign Monitoring**:
- [ ] For campaigns spending >$500/day, check real-time performance
- [ ] If ROAS significantly lower than yesterday, investigate (creative fatigue, audience saturation, external event)

**Opportunity Check**:
- [ ] Any campaigns significantly over-performing? (ROAS >150% of target) → consider increasing budget same-day if surf scaling approach

## Afternoon Routine (3:00-4:00 PM) [Confidence: A | Source: Media buying operational workflow | Date: 2026-02]

### 1. Deep Dive Analysis (30 minutes)

**Campaign Performance Ranking**:
- [ ] Export last 7 days data for all campaigns
- [ ] Rank by ROAS (descending)
- [ ] Rank by Spend (descending)
- [ ] Identify: Top 3 performers, Bottom 3 performers

**Top Performers Analysis**:
- [ ] What's working? (audience, creative, platform, offer)
- [ ] Can we scale more? (budget increase capacity, audience saturation check)
- [ ] Can we replicate? (horizontal expansion opportunities)

**Bottom Performers Analysis**:
- [ ] Why underperforming? (audience mismatch, creative weak, platform wrong, tracking issue)
- [ ] Can we fix? (audience expansion, creative refresh, budget adjustment)
- [ ] Should we kill? (apply M14 kill criteria)

### 2. Horizontal Expansion Planning (15 minutes)

**Review Expansion Opportunities**:
- [ ] **Creative Derivatives**: Do top performers have derivative variations ready to test?
- [ ] **Audience Expansion**: Can winning audiences be expanded (LAL 1% → 3%, geo expansion, demo variations)?
- [ ] **Platform Expansion**: Can winning creative be tested on secondary platform (Meta → TikTok, Meta → YouTube)?

**Launch New Tests**:
- [ ] Set up 1-2 new horizontal expansion tests based on winning campaigns
- [ ] Allocate 50% of original campaign budget to new test
- [ ] Document test hypothesis and success criteria

### 3. Creative Production Coordination (15 minutes)

**Review Creative Pipeline**:
- [ ] **In Testing**: Which new creatives launched this week?
- [ ] **In Production**: Which creatives are being produced (expected delivery date)?
- [ ] **Needed**: Based on fatigue analysis, which new creatives needed next?

**Creative Requests**:
- [ ] Submit creative briefs for needed assets (based on morning fatigue check)
- [ ] Prioritize: Derivatives of winners (fastest ROI) → New concepts (exploration)

**Creative Performance Feedback**:
- [ ] Share top-performing creative examples with creative team
- [ ] Share bottom-performing creative examples with analysis (why it failed)

## End-of-Day Routine (5:00-5:30 PM) [Confidence: B | Source: Documentation and planning best practices | Date: 2026-02]

### 1. Final Performance Check (10 minutes)

**Today's Final Numbers**:
- [ ] Total spend across all platforms (vs planned budget)
- [ ] Total conversions (vs yesterday)
- [ ] Blended ROAS (vs 7-day average)
- [ ] Any campaigns overspent significantly? (>20% over budget = reduce tomorrow)

### 2. Tomorrow's Action Plan (10 minutes)

**Scheduled Actions for Tomorrow**:
- [ ] Budget increases scheduled (list campaigns to scale tomorrow)
- [ ] Tests launching tomorrow (new campaigns/ad sets)
- [ ] Tests reaching decision point tomorrow (Day 10, Day 14 kill criteria checks)

**Calendar Reminders**:
- [ ] Set reminders for campaigns reaching scaling decision points (3-4 days post-increase)
- [ ] Set reminders for tests reaching kill criteria evaluation (Day 10, Day 14)

### 3. Documentation (10 minutes)

**Daily Log Entry**:
- [ ] Total spend (by platform and blended)
- [ ] Blended ROAS
- [ ] Key decisions made (campaigns scaled, killed, launched)
- [ ] Issues encountered and resolution
- [ ] Notes for tomorrow

**Weekly Rolling Tasks** (if applicable today):
- [ ] **Monday**: Week-over-week performance comparison (last 7 days vs prior 7 days)
- [ ] **Wednesday**: Creative fatigue audit (flag all ads with CTR decline >30% or Frequency >4)
- [ ] **Wednesday**: Event Match Quality (EMQ) check (Meta Events Manager → CAPI → EMQ >70% target)
- [ ] **Friday**: Weekly performance report (summary for stakeholders)

## Weekly Deep Dive (Friday 4:00-6:00 PM) [Confidence: A | Source: Strategic review frameworks | Date: 2026-02]

### 1. Weekly Performance Review (45 minutes)

**Platform Performance**:
- [ ] **Meta**: Total spend, ROAS, top 3 campaigns, bottom 3 campaigns
- [ ] **TikTok**: Total spend, ROAS, creative fatigue rate (how many creatives fatigued this week?)
- [ ] **YouTube/Google**: Total spend, CPA, impression share trends

**Week-over-Week Trends**:
- [ ] Spend change (this week vs last week)
- [ ] ROAS change (improving or declining?)
- [ ] Conversion volume change (scaling up or plateauing?)

**MER Analysis** (from M30):
- [ ] 7-day MER (total revenue / total marketing spend)
- [ ] MER trend (last 4 weeks)
- [ ] Channel contribution (which platform driving most efficient revenue?)

### 2. Strategic Planning (45 minutes)

**Next Week Goals**:
- [ ] Target spend by platform
- [ ] Target blended ROAS
- [ ] Key tests to launch
- [ ] Scaling campaigns to prioritize

**Budget Reallocation**:
- [ ] Should we shift budget between platforms? (based on MER performance)
- [ ] Should we increase/decrease total spend? (based on efficiency and cash flow)

**Creative Production Needs**:
- [ ] How many new creatives needed next week? (based on fatigue rate)
- [ ] Which creative concepts to prioritize? (derivatives vs new concepts)

**Horizontal Expansion Priorities**:
- [ ] Which winning campaigns have expansion opportunities? (audience, geo, platform)
- [ ] Resource allocation (testing budget for next week)

### 3. Learning Documentation (30 minutes)

**Wins This Week**:
- [ ] Which campaigns/creatives significantly outperformed? (document for replication)
- [ ] Which audiences/platforms showed strong efficiency? (expand further)

**Losses This Week**:
- [ ] Which tests failed? (document why to avoid repeating mistakes)
- [ ] Which campaigns degraded? (what caused decline?)

**Insights Captured**:
- [ ] Platform-specific learnings (e.g., "TikTok UGC with testimonials outperformed product demos 2:1")
- [ ] Audience insights (e.g., "25-34 age group has 40% lower CPA than 35-44")
- [ ] Creative insights (e.g., "15-second cut-downs outperform 30-second originals")

## Monthly Review (Last Friday of Month, 3:00-5:00 PM) [Confidence: B | Source: Strategic planning frameworks | Date: 2026-02]

### 1. Month Performance Summary (30 minutes)

**Metrics**:
- [ ] Total spend (by platform and blended)
- [ ] Total revenue (from backend)
- [ ] Blended ROAS
- [ ] MER (total revenue / total marketing spend)
- [ ] New customer acquisition (number of customers)
- [ ] CAC (customer acquisition cost)

**Month-over-Month Comparison**:
- [ ] Spend change
- [ ] ROAS change
- [ ] Conversion volume change
- [ ] New creative tested (count)
- [ ] Creative win rate (% of new creatives that scaled)

### 2. Strategic Review (60 minutes)

**What Worked**:
- [ ] Top 5 performing campaigns (ROAS, scale, consistency)
- [ ] Top 5 performing creatives (CTR, conversion rate, longevity)
- [ ] Platform performance ranking (Meta vs TikTok vs YouTube)

**What Didn't Work**:
- [ ] Bottom performing campaigns (killed or paused)
- [ ] Failed tests (audience, creative, platform)
- [ ] Bottlenecks (creative production delays, testing capacity limits, decision-making delays)

**Next Month Strategy**:
- [ ] Spend target (increase, maintain, or decrease)
- [ ] Platform allocation (adjust based on performance)
- [ ] Testing priorities (new audiences, platforms, creatives, offers)
- [ ] Operational improvements (process changes, tool adoption, team capacity)

### 3. Cross-Functional Alignment (30 minutes)

**Creative Team**:
- [ ] Share top/bottom performing creative examples
- [ ] Request specific creative concepts for next month
- [ ] Discuss creative production capacity and timeline

**Analytics/Finance**:
- [ ] Share MER trends and channel profitability
- [ ] Discuss cash flow constraints or opportunities
- [ ] Validate attribution model accuracy

**Product/Operations**:
- [ ] Discuss inventory levels (can we handle more volume?)
- [ ] Discuss customer feedback (any ad messaging misalignment?)
- [ ] Discuss fulfillment capacity (can we scale further?)

## Red Flags Requiring Immediate Investigation [Confidence: A | Source: Risk management frameworks | Date: 2026-02]

### Critical Red Flags (Stop and Investigate Immediately)

**Tracking Issues**:
- **Zero conversions for >6 hours** during business hours (pixel/CAPI/GA4 issue)
- **Conversion spike >200%** with no business explanation (duplicate tracking)
- **20%+ discrepancy** between platform-reported conversions and backend (attribution drift)

**Performance Crashes**:
- **ROAS drop >50%** on high-spend campaign (>$500/day) within 24 hours
- **CPA spike >100%** on established campaign (2x overnight)
- **CPM increase >50%** within 24 hours (auction issue or targeting error)

**Account Issues**:
- **Ad account disabled** (policy violation, payment issue, suspicious activity)
- **Ads disapproved** en masse (policy change, flagged content)
- **Spending limit reached** (campaigns paused mid-day)

**External Factors**:
- **Platform outage** (check status pages)
- **Competitive attack** (CPM spike across all campaigns = new competitor entered market)
- **PR crisis** (negative press about product/brand affecting ad performance)

### Warning Flags (Monitor Closely, Investigate Within 24 Hours)

**Performance Degradation**:
- **ROAS decline 20-30%** sustained for 2+ days
- **CTR decline 30%+** on previously strong creative
- **Frequency >4** on scaling campaign (audience saturation)
- **CPM increase 25-40%** sustained for 3+ days

**Volume Issues**:
- **Underspending 20%+** of daily budget consistently (audience too narrow, bid too low)
- **Conversion volume drop 30%+** week-over-week with no spend change

**Learning Phase Issues**:
- **Stuck in learning phase 14+ days** (insufficient budget or too many ad sets)
- **Re-entered learning phase** without making significant edits (investigate why)

## Intelligence Gaps & Upgrade Paths

### Current Gaps [Confidence: D | Upgrade Path: Time-tracking study | Date: 2026-02]
1. **Time Allocation Optimization**: Exact time allocation for each task (estimates provided, but may vary by account complexity)
2. **Decision Velocity Benchmarks**: How quickly top-performing media buyers make scale/kill decisions vs average
3. **Tool Efficiency**: Time saved using automation tools (Automated Rules, dashboards) vs manual checks

### Upgrade Opportunities
- **Source**: Time-tracking study of media buyers (log actual time spent per task for 30 days)
- **Source**: Decision-making analysis (track time from data availability to action taken, correlate with performance outcomes)
- **Source**: Tool ROI analysis (compare manual workflow time vs automated workflow time + tool cost)

## Cross-References
- **scaling_framework.md**: 20% Rule application in daily scaling decisions
- **scaling_playbook.md**: Phase transitions (testing → validation → scaling) inform daily workflow
- **M14 (Creative Testing Protocol)**: Kill criteria (10 purchases OR 14 days) applied in morning routine
- **M30 (Performance Metrics)**: MER calculation and monitoring integrated into daily/weekly reviews
- **attribution_model.md**: Platform vs backend tracking reconciliation procedures

---

**Version**: 1.0
**Last Updated**: 2026-02-10
**Primary Sources**: Media buying operational best practices, Danilo V-M13 research, M14/M30 alignment
