# Systems Engineering Readiness Checklist

**Version**: 1.0.0
**Author**: Caio, Claude (collaborative)
**Date Created**: 2026-03-01
**AI Model**: claude-opus-4-6
**Purpose**: Define what infrastructure must be ready before operator handoff, what can be built in parallel during the cascade, and what can wait until post-handoff
**Status**: Active
**Addresses**: HYP-013 (Systems Engineering Pre-Handoff Readiness), RISK-002 (Caio as SPOF), Rollout Narrative Q6/Q15
**Source Documents**: CLAUDE_AS_OS_SYSTEM.md, PASSET_FOLDER_STRUCTURE.md, INTEGRATION_DESIGN_PRINCIPLES.md, M30/M19 TUPs, Rollout Narrative v0.6.0

---

## Assessment Summary

The infrastructure is **~70% specified but only ~15% operational**. The gap is significant but the timeline is workable: the cascade takes 6-9 months, and most infrastructure can be built in parallel. The critical question is not "can we build everything?" but "what is minimum viable for the operator's Day 1?"

**Principle**: The operator should arrive to a system where data infrastructure exists, not one where it needs to be built under time pressure. (Rollout Narrative, THE HANDOFF)

---

## Tier 1: BEFORE CASCADE STARTS (Now — Week 1)

These are decisions and actions that unblock everything downstream. Effort: ~8-12 hours.

### Design Decisions (Unblock All Downstream Work)

- [ ] **DEC-SE-001: API Automation Approach**
  Choose: Google Apps Script / GitHub Actions / Zapier / Custom Python
  - Recommendation: **GitHub Actions** for data sync (already used for Pages deploy, free for public repos, scheduled runs, writes to Git) + **Google Apps Script** as fallback for Sheets-based MVD
  - This unblocks: M36 workshop, all API integration work
  - Owner: Caio
  - Time: 1-2 hours

- [ ] **DEC-SE-002: Operator Interface**
  Choose: Claude Code CLI / Web app / Slack bot
  - Recommendation: **Claude Code CLI** (already proven in production — Caio uses it daily for passet production; operator can query the Trade, get answers, surface dependencies)
  - This unblocks: M35 workshop (UX for daily task system), documentation approach
  - Owner: Caio + Danilo
  - Time: 1 hour

- [ ] **DEC-SE-003: IP Protection Approach**
  Choose from 4 options in CLAUDE_AS_OS_SYSTEM.md (Accept Risk / Folder Partition / Custom App / Hybrid Evolution)
  - Recommendation: **Option D: Hybrid Evolution** (start with Claude Code, evolve if needed; acceptable for IonWave validation phase)
  - This unblocks: M40 workshop (folder access patterns), Claude agent deployment architecture
  - Owner: Danilo (strategic decision)
  - Time: 1 hour

- [ ] **DEC-SE-004: Phase 1 Dashboard Tool**
  Choose: Google Sheets MVD / Triple Whale / Polar Analytics / Custom dashboard (existing ionwave/dashboard/)
  - Recommendation: **Google Sheets MVD** for Months 1-3 (per M30 spec — 7 core metrics, simplest to set up, no cost). Existing ionwave/dashboard/ for hypotheses tracking and TUP navigation. Upgrade to Triple Whale at $10K+ MRR.
  - This unblocks: Dashboard data binding, scorecard automation
  - Owner: Caio
  - Time: 30 minutes

### Immediate Actions

- [ ] **Create Google Sheets MVD template**
  7 core metrics from M30: Revenue, Orders, Spend, CAC, Subscription rate, Cash balance, MER
  Daily/weekly/monthly tabs. Color-coded thresholds (green/yellow/red per M30 kill criteria).
  - Why now: Takes 2-3 hours, operator gets a usable tool from Day 1 even if automation isn't ready
  - Owner: Caio
  - Time: 2-3 hours

- [ ] **Verify existing dashboard deploys with submodules**
  Confirm ionwave/dashboard/ renders correctly at caio-camargo.github.io/ionwave-bootstrap/
  Test: TUP navigator, hypotheses tracker, financial forecast views
  - Why now: Dashboard is partially built — verify it works before building more
  - Owner: Caio
  - Time: 1 hour

---

## Tier 2: DURING CASCADE — Phase A (Months 1-3)

Build core infrastructure while VA and MBA intern stages are active. These are the big lifts. Effort: ~80-120 hours.

### API Integration Infrastructure

- [ ] **Shopify API sync script**
  - What: Script that pulls orders/revenue/AOV/returns daily, writes to `passets/metrics/shopify_daily.json`
  - Spec: CLAUDE_AS_OS_SYSTEM.md defines schema (daily at 2am)
  - Prerequisite: Shopify store must exist (entity + storefront — happens during execution, not pre-handoff)
  - **Workaround**: Build the script now using Shopify's sandbox/development store. Test with mock data. When real store exists, swap API credentials.
  - Owner: Caio
  - Time: 15-20 hours (including testing)

- [ ] **Meta Ads API sync script**
  - What: Script that pulls spend/impressions/clicks/CTR/CPC/purchases/CAC daily, writes to `passets/metrics/meta_ads_daily.json`
  - Spec: CLAUDE_AS_OS_SYSTEM.md defines schema (daily at 3am)
  - Prerequisite: Meta Ads account must exist (happens during execution)
  - **Workaround**: Build against Meta Marketing API sandbox. Test with sample data.
  - Owner: Caio
  - Time: 15-20 hours (including testing)

- [ ] **GitHub Actions scheduled workflow**
  - What: `.github/workflows/data-sync.yml` — runs API sync scripts on schedule, commits updated JSON to repo
  - Why GitHub Actions: Already using it for Pages deploy. Free for public repos. Cron scheduling. Git-native.
  - Schedule: Daily at 2am (Shopify), 3am (Meta), 4am (GA4 weekly on Mondays)
  - Owner: Caio
  - Time: 5-8 hours

- [ ] **GA4 API sync script** (lower priority)
  - What: Weekly sessions/bounce/conversion/traffic, writes to `passets/metrics/ga_weekly.json`
  - Lower priority because: GA4 data supplements but doesn't drive kill criteria
  - Owner: Caio
  - Time: 8-12 hours

### Scorecard & Red Flag Automation

- [ ] **Automated scorecard generation script**
  - What: Reads from `passets/metrics/*.json`, calculates weekly metrics, checks against M30 thresholds, generates `passets/scorecards/week_NN.json`
  - Kill criteria checking: CAC > $50, churn > 15%, GM < 55%, subscription < 35%
  - Red flag detection: Any metric trending toward kill threshold for 2+ consecutive weeks
  - Owner: Caio
  - Time: 10-15 hours

- [ ] **Scorecard → Google Sheets MVD bridge**
  - What: Script or Apps Script that pushes scorecard data into the Google Sheets MVD
  - Why: Operator sees one clean spreadsheet, not JSON files
  - Owner: Caio
  - Time: 5-8 hours

### M35/M36 Workshop Content (Parallel to Scripts)

- [ ] **M35 Execution Plans workshop**
  - What: Detail Week 1-12 choreography with specific task lists, dependencies, owners
  - Output: Week-by-week breakdown of what happens, what data to expect, what decisions to make
  - This is the "operating manual" — without it, operator has 41 TUPs but no sequence
  - Owner: Caio + Claude (workshop protocol)
  - Time: 20-30 hours

- [ ] **M36 Operational Infrastructure workshop**
  - What: API integration specs, data maintenance protocols, monitoring architecture
  - Output: Formal spec for everything being built in the API integration work above
  - Owner: Caio + Claude (workshop protocol)
  - Time: 15-20 hours

---

## Tier 2: DURING CASCADE — Phase B (Months 3-6)

Refine and test while VP stage is active. Effort: ~40-60 hours.

### Implementation Passet Structure

- [ ] **Create Implementation Passet folder structure**
  - What: Time-based folders (ICL-0 through ICL-6) per PASSET_FOLDER_STRUCTURE.md
  - Contains: Extracted task files from M35, weekly summaries, status tracking
  - Owner: Caio
  - Time: 8-12 hours

- [ ] **Extract M35 tasks into Implementation Passet**
  - What: Convert M35 choreography into individual task files with template fields (Task ID, Source TUP, Owner, Due Date, Dependencies, Status)
  - Owner: Caio + Claude
  - Time: 15-20 hours

### Dashboard Enhancement

- [ ] **Bind ionwave/dashboard/ to live data**
  - What: Update data-loader.js to read from `passets/metrics/` (currently reads from `ionwave/data/`)
  - The dashboard code is production-ready — it just needs data sources
  - Owner: Caio
  - Time: 5-8 hours

- [ ] **Hypothesis validation workflow**
  - What: Script that reads scorecard metrics, compares to HYP-001 through HYP-009 validation plans, suggests state changes (ASSUMED → TESTING when data arrives, TESTING → VALIDATED/INVALIDATED when criteria met)
  - Owner: Caio
  - Time: 8-12 hours

### Documentation for Non-Caio Maintenance

- [ ] **Infrastructure maintenance guide**
  - What: Document covering: how to add a new API integration, how to modify scorecard thresholds, how to debug a failed sync, how to update dashboard views
  - Standard: A competent technical person (not Caio specifically) can maintain the system using this guide
  - This directly addresses HYP-013 and RISK-002
  - Owner: Caio
  - Time: 8-12 hours

---

## Tier 3: BEFORE HANDOFF (Must Be Complete)

These are the hard requirements. The operator should not receive the Trade until all Tier 3 items are done. Effort: ~15-25 hours.

### Testing & Verification

- [ ] **End-to-end data pipeline test**
  - Run full cycle: API sync → JSON files → scorecard generation → Google Sheets MVD → dashboard
  - Use sandbox/mock data if real stores don't exist yet
  - Document any manual steps required
  - Owner: Caio
  - Time: 4-6 hours

- [ ] **Documentation review by non-Caio person**
  - Someone other than Caio reads the infrastructure maintenance guide and confirms they could maintain the system
  - This is the test for HYP-013 — if the reviewer can't follow the guide, Caio is still a SPOF
  - Owner: Danilo or MBA intern (if available through cascade)
  - Time: 2-4 hours (reviewer's time)

- [ ] **Operator onboarding dry run**
  - Walk through the Implementation Passet structure, MVD, dashboard, and Claude Code interface as if you were the operator
  - Identify friction points, missing context, unclear instructions
  - Owner: Caio (or proxy)
  - Time: 4-6 hours

### Final Preparation

- [ ] **Pre-populate Week 1 tasks**
  - What: ICL-0 task files filled with specific Day 1-5 actions, links to relevant TUPs, expected outcomes
  - Why: Operator starts with a concrete to-do list, not a 41-TUP reference library
  - Owner: Caio + Claude
  - Time: 3-5 hours

- [ ] **API credential placeholder documentation**
  - What: Document listing every API credential needed, where to get it, how to configure it
  - Operator fills in real credentials during entity/storefront setup
  - Includes: Shopify API key, Meta Ads access token, GA4 property ID, Stripe keys
  - Owner: Caio
  - Time: 2-3 hours

---

## Tier 4: POST-HANDOFF ACCEPTABLE

These can be built reactively during early execution without harming the operator. They're nice-to-have before handoff but not blocking.

- [ ] **M37 AI & Automation workshop** — Claude agent patterns for automated monitoring. Can be refined as execution reveals what monitoring is actually needed.
- [ ] **Advanced red flag detection** — Predictive alerts (trending toward kill criteria). Basic threshold alerts are sufficient for Months 1-3.
- [ ] **CRM dashboard** (M19) — Not needed until Month 2+ when customer base exists.
- [ ] **RFM segmentation tooling** — Not needed until Month 3-6 per M30 phase-gated measurement stack.
- [ ] **Multi-Trade scalability** — Irrelevant for IonWave. System learning, not pre-build.

---

## Timeline Summary

```
NOW          Month 1        Month 3        Month 6        Month 8-9
 |              |              |              |              |
 Tier 1         |              |              |              |
 (decisions +   |              |              |              |
  MVD template) |              |              |              |
                |              |              |              |
            Tier 2A            |              |              |
            (API scripts,      |              |              |
             M35/M36,          |              |              |
             scorecard)        |              |              |
                               |              |              |
                           Tier 2B            |              |
                           (Implementation    |              |
                            Passet, dashboard |              |
                            binding, docs)    |              |
                                              |              |
                                          Tier 3             |
                                          (testing,          |
                                           dry run,       HANDOFF
                                           Week 1 tasks)     |
                                                             |
                                                         Tier 4
                                                         (reactive)
```

**Cascade timeline overlay:**
- Months 0-1: VA stage (Tier 1 + Tier 2A start)
- Months 1-4: MBA intern stage (Tier 2A complete, Tier 2B start)
- Months 4-6: VP stage (Tier 2B complete, Tier 3 start)
- Months 6-9: Operator identified (Tier 3 complete → HANDOFF)

---

## Effort Budget

| Tier | Effort (hours) | Timeline | Owner |
|------|----------------|----------|-------|
| Tier 1 | 8-12 | Week 1 | Caio + Danilo |
| Tier 2A | 80-120 | Months 1-3 | Caio |
| Tier 2B | 40-60 | Months 3-6 | Caio + Claude |
| Tier 3 | 15-25 | Month 6-8 | Caio + reviewer |
| **Total** | **143-217** | **8-9 months** | |

This is ~3-5 hours/week of sustained effort over the cascade period. Achievable alongside other work, but requires discipline to maintain pace.

---

## Success Criteria for HYP-013

When all Tier 1-3 items are checked:
1. Data pipeline runs end-to-end with no manual intervention (except credential setup)
2. A non-Caio person has reviewed and confirmed they can maintain the infrastructure
3. Operator has a concrete Week 1 task list, a working MVD, and Claude Code access to the full Trade
4. Caio is not required for day-to-day operations (available for break-fix only)

If these are met, HYP-013 upgrades from D to C (infrastructure exists and has been reviewed, but not tested under real execution conditions). Upgrade to B requires 30 days of execution with Caio not intervening.

---

## Open Questions for This Checklist

1. **Can API scripts be built against sandboxes before real accounts exist?** (Almost certainly yes for Shopify; Meta Marketing API sandbox access may require a business account.)

2. **Who reviews the documentation?** Danilo is the obvious choice but may not be technical enough. MBA intern (if one exists at that point in the cascade) could be ideal — they're a proxy for "competent person who isn't Caio."

3. **What's the minimum viable automation?** If API scripts aren't ready at handoff, can the operator manually enter data into Google Sheets MVD? Yes — this is the fallback. The MVD is designed to work with manual input. Automation is efficiency, not a hard requirement.

4. **Should the dashboard (ionwave/dashboard/) be the primary operator interface or just a reference?** Current recommendation: Google Sheets MVD is the primary daily tool (simpler, editable, mobile-friendly). Dashboard is for deeper analysis, hypotheses tracking, and TUP navigation.

---

## Version History

**v1.0.0 (2026-03-01):**
- Initial checklist created from comprehensive infrastructure assessment
- 4 tiers defined (Before Cascade, During Cascade A/B, Before Handoff, Post-Handoff)
- 25 checklist items with effort estimates, owners, and dependencies
- Total effort: 143-217 hours over 8-9 months (~3-5 hrs/week)
- Success criteria for HYP-013 defined
