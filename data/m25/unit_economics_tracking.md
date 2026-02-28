# Unit Economics Tracking — M25: Financial Operations

**TUP**: M25
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-001 (CAC), HYP-002 (Subscription Attach Rate), HYP-003 (Churn), HYP-004 (Gross Margin), HYP-005 (LTV)
**Danilo Source**: ops_model_v10_dump/534_unit_economics_by_channel.json (7 rows), 535_payback_period_analysis.json (8 rows)
**Cross-Reference**: M3 (Financial Model), M10 (Pricing & Offer), M13 (Media Buying), M30 (Analytics)

---

## Purpose

Define how IonWave tracks and reports unit economics by channel. This is the **measurement** system, not the **strategy** (M10 sets strategy, M3 models it, M25 tracks it). Two Danilo tabs merged here: Channel Economics (534, 7 rows — a thin CAC/LTV table) and Payback Period Analysis (535, 8 rows — a formula + example).

**Core principle**: Unit economics are the vital signs of the business. If you can't see them in real-time, you can't make real-time decisions. The goal is a dashboard that any operator can read in 5 minutes and know whether each channel is working.

---

## 1. Channel Economics Dashboard

### The Tracking Table

This table is a **reporting template**, updated monthly. The values below are **targets/assumptions** from the hypothesis system — they will be replaced with actuals post-launch.

[Confidence: D for all values — these are pre-launch assumptions. Will become A/B-grade once populated with actual data.]

| Channel | Target CAC | Target LTV | LTV:CAC | Status | Update Frequency |
|---------|-----------|-----------|---------|--------|-----------------|
| **Meta — Prospecting** | $40-45 | $106 (blended) | 2.4-2.7x | 🟡 Assumed | Weekly |
| **Meta — Retargeting** | $15-20 | $130+ | 6.5-8.7x | 🟡 Assumed | Weekly |
| **Google — Brand** | $10-15 | $130+ | 8.7-13x | 🟡 Assumed | Weekly |
| **Google — Non-Brand** | $30-40 | $106 (blended) | 2.7-3.5x | 🟡 Assumed | Monthly |
| **Influencer/Creator** | $25-35 | $120 | 3.4-4.8x | 🟡 Assumed | Monthly |
| **Organic/SEO** | $0 (time cost) | $130+ | ∞ (unpaid) | 🟡 Assumed | Monthly |
| **Referral** | $10-20 | $130+ | 6.5-13x | 🟡 Assumed | Monthly |
| **Email/SMS** | $0 (retention) | N/A (retention) | N/A | 🟡 Assumed | Weekly |

**Status key**: 🟢 Validated (actual data), 🟡 Assumed (hypothesis), 🔴 Kill zone (LTV:CAC <2.5x)

### Danilo's Original vs. What We Track

Danilo's tab 534 listed these values:

| Channel | Danilo CAC | Danilo LTV | Danilo LTV:CAC | Issue |
|---------|-----------|-----------|----------------|-------|
| Meta Prospecting | $45 | $130 | 2.9x | LTV assumes Danilo's margin, not HYP-004 |
| Meta Retargeting | $20 | $145 | 7.3x | Same |
| Google Brand | $15 | $150 | 10x | Same |
| Influencer | $30 | $140 | 4.7x | Same |
| Organic | $0 | $160 | ∞ | Same |

**Key difference**: Danilo's LTV calculations use an unexplained higher LTV. The Bootstrap hypothesis system (HYP-005) uses $106 blended LTV at 67% margin. We use the hypothesis-system values as the baseline and will validate with real data.

### How to Calculate Each Metric

**CAC (Customer Acquisition Cost):**
```
CAC = Total Channel Spend / New Customers Acquired from Channel
```
- Include: Ad spend, platform fees, influencer payments, referral credits
- Exclude: Organic content creation time (not a cash cost in early stage)
- **Source**: Meta Ads Manager, Google Ads, UTM attribution in GA4

**LTV (Customer Lifetime Value):**
```
Subscriber LTV = (AOV × Gross Margin) / Monthly Churn Rate
One-Time LTV = AOV × Gross Margin × Repeat Purchase Rate
Blended LTV = (Sub LTV × Sub %) + (One-Time LTV × One-Time %)
```
- **AOV**: Average Order Value from Shopify
- **Gross Margin**: From P&L (COGS ÷ Revenue). Target 67% one-time, 60% subscription per HYP-004/ISS-001
- **Churn**: From cohort analysis (target ≤12% per HYP-003)
- **Sub %**: From checkout data (target 50% per HYP-002)

**LTV:CAC Ratio:**
```
LTV:CAC = Blended LTV / Blended CAC
```
- **Target**: ≥3.0x (healthy)
- **Minimum viable**: 2.5x (break-even after OpEx)
- **Kill threshold**: <2.5x sustained for 60 days → investigate or kill channel

---

## 2. Payback Period Analysis

### The Formula

[Confidence: A | Source: Standard DTC unit economics formula]

```
Payback Period (months) = CAC / Monthly Gross Profit per Customer
```

Where:
```
Monthly Gross Profit = Monthly Revenue per Customer × Gross Margin
```

### Dual-Scenario Analysis

**REC-001 Margin Dispute Note**: Danilo's tab 535 uses 45% gross margin. The Bootstrap hypothesis system (HYP-004) uses 67%. The origin of Danilo's 45% is unexplained and may include fully-loaded costs beyond COGS. We present both scenarios.

#### Scenario A: Bootstrap Margin (67% — HYP-004)

[Confidence: B | Source: Biocean supplier quotes ($18-20 COGS at $59 price)]

| Customer Type | Monthly Revenue | Gross Margin | Monthly GP | CAC | Payback Period |
|--------------|----------------|-------------|------------|-----|---------------|
| **Subscriber** | $50.15 | 60% (after 15% discount) | $30.09 | $35 | **1.2 months** |
| **One-Time** | $59.00 | 67% | $39.53 | $35 | **0.9 months** (single purchase) |
| **Blended** (60/40 sub/OTP) | $53.69 | 63% | $33.82 | $35 | **1.0 months** |

#### Scenario B: Danilo Margin (45% — unexplained)

[Confidence: D | Source: Danilo tab 535. Origin of 45% is undocumented. May include fulfilment, platform fees, or other costs beyond COGS.]

| Customer Type | Monthly Revenue | Gross Margin | Monthly GP | CAC | Payback Period |
|--------------|----------------|-------------|------------|-----|---------------|
| **Subscriber** | $50.15 | 45% | $22.57 | $35 | **1.6 months** |
| **One-Time** | $59.00 | 45% | $26.55 | $35 | **1.3 months** (single purchase) |
| **Blended** (60/40 sub/OTP) | $53.69 | 45% | $24.16 | $35 | **1.4 months** |

#### Scenario C: Contribution Margin (including fulfillment + platform fees)

[Confidence: C | Source: Estimated contribution margin deducting 3PL fees (~$5/order) and payment processing (~3%)]

| Customer Type | Revenue | COGS | Fulfilment | Platform Fees | Contribution | CAC | Payback |
|--------------|---------|------|------------|--------------|-------------|-----|---------|
| **Subscriber** | $50.15 | $20.00 | $5.00 | $1.50 | $23.65 (47%) | $35 | **1.5 months** |
| **One-Time** | $59.00 | $20.00 | $5.00 | $1.77 | $32.23 (55%) | $35 | **1.1 months** |
| **Blended** | $53.69 | $20.00 | $5.00 | $1.61 | $27.08 (50%) | $35 | **1.3 months** |

**Insight**: Danilo's 45% margin may actually be closer to **contribution margin** (Scenario C at 47-50%) than gross margin. This would explain the discrepancy — Danilo included fulfilment and platform costs that Bootstrap treats as OpEx below the gross margin line.

**Resolution recommendation**: Use Scenario A (67% gross margin) for P&L reporting. Use Scenario C (contribution margin) for channel-level payback analysis. This resolves REC-001 for M25 without changing either assumption — they measure different things.

> **Which margin for which decision** *(Dialogue upgrade U1)*:
> - **Gross margin (67%)** → P&L reporting, investor reporting, HYP-004 validation
> - **Contribution margin (47-50%)** → Channel payback decisions, scale/hold/kill calls, media buying optimization
> - **Never mix them** — comparing gross margin payback from one channel to contribution margin payback from another produces nonsense

### Payback Sensitivity Table

[Confidence: B | Source: Mathematical sensitivity analysis using HYP-001 range ($30-45 CAC)]

| CAC | Contribution Margin 47% | Contribution Margin 50% | Contribution Margin 55% |
|-----|------------------------|------------------------|------------------------|
| $30 | 1.3 months | 1.1 months | 0.9 months |
| $35 | 1.5 months | 1.3 months | 1.1 months |
| $40 | 1.7 months | 1.5 months | 1.2 months |
| $45 | 1.9 months | 1.7 months | 1.4 months |

**Reading**: All scenarios show payback under 2 months — this is healthy for DTC supplement. The critical risk is not payback period but **churn**: if customers cancel before payback, the math breaks.

### Kill Criteria

| Metric | Healthy | Watch | Kill |
|--------|---------|-------|------|
| **Payback period** | <2 months | 2-3 months | >3 months |
| **LTV:CAC** | >3.0x | 2.5-3.0x | <2.5x |
| **Channel CAC** | <$40 | $40-50 | >$50 sustained |
| **Blended CAC** | <$35 | $35-42 | >$42 sustained |

---

## 3. Monthly Unit Economics Reporting

### What to Calculate Every Month

| Metric | Formula | Source | Hypothesis Link |
|--------|---------|--------|----------------|
| **Blended CAC** | Total marketing spend / new customers | Ads Manager + Shopify | HYP-001 |
| **CAC by channel** | Channel spend / channel-attributed customers | Ads Manager + UTM | HYP-001 |
| **AOV** | Total revenue / total orders | Shopify | — |
| **Subscription attach rate** | Sub orders / total orders | Shopify + ReCharge | HYP-002 |
| **Monthly churn** | Cancelled subs / active subs at month start | ReCharge | HYP-003 |
| **Gross margin** | (Revenue − COGS) / Revenue | QBO P&L | HYP-004 |
| **Contribution margin** | (Revenue − COGS − Fulfilment − Platform Fees) / Revenue | QBO + manual calc | — |
| **Blended LTV** | (Sub LTV × sub%) + (OTP LTV × otp%) | Calculated | HYP-005 |
| **LTV:CAC** | Blended LTV / Blended CAC | Calculated | HYP-005/HYP-001 |
| **Payback period** | Blended CAC / Monthly contribution | Calculated | — |
| **MRR** | Active subscribers × subscription price | ReCharge | HYP-007 |
| **Revenue per visitor** | Total revenue / unique visitors | GA4 + Shopify | — |

### Attribution Methodology

**Primary**: UTM-based last-click attribution (GA4)
- Every ad, email, and social link gets UTM parameters per M16 (Content & SEO) UTM discipline
- `utm_source` = platform, `utm_medium` = type, `utm_campaign` = campaign_id

**Secondary**: Post-purchase survey ("How did you hear about us?")
- Captures word-of-mouth and offline channels that UTM misses
- Required for HYP-006 (Organic/Referral Lift) validation

**Limitation**: Multi-touch attribution is aspirational for early stage. Start with last-click, add incrementality testing at $10K+/month ad spend.

**First-click vs last-click** *(Dialogue upgrade U6)*: Use last-click for tactical ad optimization (what Meta/Google report natively). Use post-purchase survey for strategic channel allocation — this captures first-touch awareness channels that last-click misses (e.g., someone discovers IonWave via TikTok but converts via Google brand search).

[Confidence: C | Source: Standard DTC attribution methodology. Last-click undercounts awareness channels but is the simplest starting point.]

---

## 4. When to Scale, Hold, or Kill a Channel

### Decision Framework

[Confidence: B | Source: Standard DTC channel optimization framework]

```
Monthly channel review:

IF LTV:CAC > 3.0x AND payback < 2 months:
  → SCALE: Increase budget 20-30% next month

IF LTV:CAC 2.5-3.0x AND payback < 3 months:
  → HOLD: Optimize creative/targeting before scaling

IF LTV:CAC < 2.5x for 30 days:
  → WATCH: Reduce to test budget, diagnose (creative fatigue? audience exhaustion? attribution error?)

IF LTV:CAC < 2.5x for 60 days:
  → KILL: Pause channel. Reallocate budget to performing channels.
```

**Exception**: Brand-new channels get a 30-day learning period before applying kill criteria. Meta algorithm needs ~50 conversions to optimize.

---

## Intelligence Gaps

| Gap | Priority | Validation Path | Current Grade |
|-----|----------|----------------|---------------|
| REC-001 margin dispute resolution (are Danilo's figures contribution margin?) | HIGH | Ask Danilo for the calculation behind 45% | D |
| Attribution accuracy with iOS privacy changes | MEDIUM | Test Meta Conversions API + server-side tracking setup | C |
| Actual fulfillment cost per order (3PL quotes needed) | HIGH | Get quotes from ShipBob, Fulfil, or other 3PLs | D |
| Multi-touch attribution tool (Triple Whale, Northbeam, etc.) | LOW | Evaluate at $10K+/mo ad spend | D |
