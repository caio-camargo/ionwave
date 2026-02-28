# OpKit OK-M14-001: Testing & Optimization Kit

**OpKit ID**: OK-M14-001
**Type**: Production
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Source TUP**: M14 (Testing & Optimization)
**Graded Example**: IonWave Trade #84 (Quality: 7.5/10)

---

## Purpose

Complete experimentation system for DTC consumable brands on Shopify. Covers creative testing on Meta/TikTok, on-site A/B testing, audience strategy, testing infrastructure selection, and the learning system that compounds knowledge over time.

Designed specifically for bootstrapped DTC brands at <5,000 monthly visitors where traditional A/B testing is underpowered.

---

## When to Use This OpKit

Use this when a Trade needs to:
- Set up a testing program from zero
- Choose A/B testing tools for Shopify
- Design creative testing protocols for Meta/TikTok
- Build an audience testing strategy
- Decide between Bayesian and frequentist methodology at their traffic level

---

## Kit Contents

### 1. Experimentation Framework (`experimentation_framework.json`)
**What**: The philosophical backbone — testing principles, experiment card schema, priority matrix, traffic-based methodology, statistical decision rules, learning system.
**Key concepts**: Learning over winning, big swings before small tweaks, match method to traffic, document everything.
**Reusable for any Trade**: Yes — the framework is brand-agnostic. Adjust the priority matrix elements for the specific product category.

### 2. Creative Testing Protocol (`creative_testing_protocol.md`)
**What**: Ad creative testing for Meta/TikTok — testing hierarchy (concept → format → hook), campaign structure (ABO testing → CBO scaling), two-stage kill/scale criteria, creative fatigue management, scaling protocol.
**Key concepts**: Sequential batches at low budget, two-stage kill (leading indicators Day 3, conversion Day 5-7 with 50+ click minimum), sunk cost discipline.
**Reusable for any Trade**: Yes — adjust CPA targets, benchmark thresholds, and creative concepts for the specific product. Campaign structure and kill protocol are universal.

### 3. Audience Testing Strategy (`audience_testing_strategy.md`)
**What**: Phased audience rollout — passive audience learning (Phase 0), formal audience tests (Phase 1+), retargeting (when ready).
**Key concepts**: Test creative FIRST, audiences LAST. Use Meta breakdowns for free audience data. Only run formal audience tests after winning creative exists.
**Reusable for any Trade**: Yes — replace audience tiers with product-specific segments. Protocol and phasing are universal.

### 4. A/B Testing Framework (`ab_testing_framework.md`)
**What**: On-site testing — when to use Bayesian vs frequentist vs pre/post, sample size requirements, tool comparison (post-Google Optimize), landing page test queue.
**Key concepts**: Low-conversion Bayesian warning (<30 conversions = directional only), "just ship it" threshold, explicit error rates at each confidence level.
**Reusable for any Trade**: Yes — sample size tables and methodology selection are universal. Update tool recommendations as landscape changes.

### 5. Test Log (`test_log.json`)
**What**: Operational test log — completed tests, active tests, planned queue, velocity tracking, knowledge library.
**Reusable for any Trade**: Yes — use the schema directly. Clear existing IonWave entries and start fresh.

### 6. Testing Infrastructure (`testing_infrastructure.md`)
**What**: Phased tool stack ($0 → $200/month), Shopify limitations, integration architecture, setup checklist.
**Key concepts**: Tool spend ≤ 5% of ad budget. Free tools first (Clarity, GA4, Meta A/B). Neat A/B or Shoplift for on-site. Intelligems for price testing.
**Reusable for any Trade**: Yes — tool recommendations are Shopify-specific. Update pricing periodically.

---

## How to Use (Step-by-Step for Any Trade)

### Step 1: Assess Traffic Level
Read `experimentation_framework.json` → `traffic_based_methodology`. Identify which tier your Trade falls into (<30/day, 30-100/day, 100-500/day, 500+). This determines which testing methods are viable.

### Step 2: Set Up Infrastructure
Follow `testing_infrastructure.md` → Phase 0 setup checklist. Install GA4, Clarity, configure Meta pixel. Budget $0 in tools until ad spend exceeds $1K/month.

### Step 3: Launch Creative Testing
Follow `creative_testing_protocol.md`:
1. Produce 3-4 creatives testing different concepts
2. Run sequential batches (2 at a time at low budget)
3. Follow two-stage kill protocol (Day 3 leading indicators, Day 5-7 conversions)
4. Graduate winners to scaling campaign

### Step 4: Build the Learning System
File experiment cards in `test_log.json` BEFORE launching. Record results + learnings WITHIN 48 hours of completion. Review knowledge library monthly.

### Step 5: Expand Testing
Once winning creative exists and traffic grows:
- Add on-site A/B testing (AB testing framework)
- Add audience testing (Audience testing strategy)
- Add price testing (M10 protocol, separate OpKit)

---

## Key Findings from IonWave Graded Example

1. **Low-traffic reality**: At <100 visitors/day, formal on-site A/B testing is mostly theater. Creative testing on Meta (where impression volume is 10-100x site traffic) is the real testing engine.
2. **Two-stage kill**: Never kill a creative based on CPA until 50+ link clicks. At $59 AOV and 3% CVR, you need ~33 clicks for your first conversion. Early CPA kills destroy potentially viable creatives.
3. **Bayesian at low conversions**: With <30 conversions per variant, Bayesian results are directional, not definitive. Useful for creative screening, not for pricing decisions.
4. **Tool spend discipline**: 5% of ad budget max on testing tools. At $1K/month ad spend, that's $50 — free tools plus maybe Neat A/B at $29.
5. **Passive audience learning**: Meta's algorithm tests audiences for you via broad targeting. Read the breakdown reports weekly instead of running dedicated audience tests at low spend.
6. **Document everything**: The only failed test is one with no learning recorded. A killed creative teaches you what doesn't resonate — same value as a winner if documented.

---

## Quality Checklist for Future Trades

- [ ] Traffic tier identified and methodology matched
- [ ] Testing infrastructure set up (GA4, Clarity, Meta pixel at minimum)
- [ ] Experiment card schema adopted or adapted
- [ ] Creative testing protocol adapted for product category
- [ ] Kill/scale thresholds calibrated for product economics (CPA target, AOV, CVR)
- [ ] Test log template initialized
- [ ] First 3-4 creative concepts produced and queued
- [ ] Tool spend budget set at ≤5% of ad spend
- [ ] Learning system cadence established (per-test logging, monthly review)
