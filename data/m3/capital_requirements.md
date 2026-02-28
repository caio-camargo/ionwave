# Capital Requirements — M3: Financial Model

**TUP**: M3 | **Tab**: 4 of 15
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-004 (Gross Margin), HYP-008 (Cash Runway)
**Cross-Reference**: M2 (Entity/Legal), M4 (Fundraising), M5 (COGS), M6 (Supply Chain), M13 (Media Buying)

---

## REC-001 MARGIN DISPUTE — HANDLING

> Capital requirements vary dramatically by gross margin scenario. A 40% GM business needs 2-3x more capital than a 67% GM business to reach the same milestones.

---

## 1. Pre-Launch Capital Requirements

### 1.1 Minimum Viable Launch Capital

| Category | Amount | Timing | Source | Grade |
|----------|--------|--------|--------|-------|
| Entity formation (C-Corp) | $1,500-2,500 | Month -3 | M2 | B |
| Trademark filing | $1,000-2,000 | Month -3 | M2 | B |
| Product liability insurance | $1,500-3,000/yr | Month -2 | M2 | C |
| First inventory order (500 units) | $8,700-12,300 | Month -2 | M5: $17.40-24.60/box x 500 | C |
| Packaging design + first run | $2,000-4,000 | Month -2 | M5/M8 | C |
| Website development (Shopify) | $500-2,000 | Month -2 | Theme + apps | B |
| Product photography | $500-1,500 | Month -1 | Freelancer | C |
| First month ad budget | $3,000-5,000 | Month 1 | M13: $100-500/day x 20 days testing | C |
| Working capital buffer | $3,000-5,000 | Month 0 | 1-month operating reserve | D |
| **Total pre-launch minimum** | **$21,700-37,300** | | | |

### 1.2 Pre-Launch by Priority Tier

| Tier | Items | Amount | Must Have? |
|------|-------|--------|-----------|
| **Tier 1: Non-negotiable** | Entity + Insurance + Inventory + Website | $12,200-19,800 | YES |
| **Tier 2: Strongly recommended** | Trademark + Photography + Ad budget | $4,500-8,500 | YES for growth |
| **Tier 3: Ideal** | Working capital + Extra inventory + Design polish | $5,000-9,000 | Reduces risk |

[Confidence: C | Source: M2, M5, M8, M13 estimates | Date: 2026-02-11]

---

## 2. Runway Analysis by Margin Scenario

### 2.1 Runway with $40K SAFE (Target from M4)

| Scenario | GM | Monthly Burn (Avg M1-6) | Months of Runway | Enough to Validate? |
|----------|-----|------------------------|-----------------|-------------------|
| **Optimistic** (67% GM) | 67% | $3,500 | 11.4 months | YES |
| **Realistic** (60% GM) | 60% | $5,200 | 7.7 months | Tight — 6 months needed |
| **Conservative** (42% GM) | 42% | $8,500 | 4.7 months | NO — insufficient |
| **Worst case** (40% GM + high CAC) | 40% | $12,000 | 3.3 months | NO — critical |

### 2.2 Capital Required for 12-Month Runway by Scenario

| Scenario | GM | 12-Month Cash Need | SAFE Covers? | Gap |
|----------|-----|-------------------|-------------|-----|
| **Optimistic** | 67% | $25K | YES ($40K) | +$15K surplus |
| **Realistic** | 60% | $59K | PARTIAL ($40K) | -$19K gap |
| **Conservative** | 42% | $147K | NO ($40K) | -$107K gap |
| **Worst case** | 40% | $186K | NO ($40K) | -$146K gap |

**Key finding**: The $30-50K SAFE from M4 is sufficient ONLY in the Optimistic and Realistic scenarios. In the Conservative scenario, the business runs out of cash by Month 5 unless additional capital is raised or spending is drastically cut.

[Confidence: C | Source: Cash flow model scenarios | Date: 2026-02-11]

---

## 3. Milestone-Based Capital Deployment

### 3.1 Capital Allocation Plan ($40K SAFE)

| Milestone | Amount | Trigger | What It Proves |
|-----------|--------|---------|---------------|
| **M0: Entity + Legal** | $5,000 | SAFE closed | Business can legally operate |
| **M1: First Inventory** | $10,000 | Entity formed | Product exists, can sell |
| **M2: Ad Testing** | $8,000 | Inventory received | CAC is viable (HYP-001 validation) |
| **M3: Scale Test** | $10,000 | CAC < $50 confirmed | Unit economics work at small scale |
| **M4: Working Capital** | $7,000 | Revenue > $10K/mo | Reorder inventory, maintain operations |
| **Total** | **$40,000** | | |

### 3.2 Gate-Based Release (Don't Spend It All at Once)

```
Gate 0: Close SAFE → Release $5K (legal/entity)
Gate 1: Entity formed → Release $10K (inventory)
Gate 2: Inventory received → Release $8K (ad testing)
Gate 3: CAC < $50 for 14 days → Release $10K (scale)
Gate 4: Revenue > $10K/mo → Release $7K (working capital)

KILL GATE: If CAC > $60 for 14 days after Gate 2 → STOP. Do not release Gates 3-4.
Preserve remaining capital for pivot or wind-down.
```

[Confidence: B | Source: M4 fundraising strategy + M30 kill criteria | Date: 2026-02-11]

---

## 4. Inventory Capital Requirements

### 4.1 Inventory Investment by Phase

| Phase | Monthly Orders | Safety Stock (21 days) | Reorder Point | Inventory $ (at target COGS) |
|-------|---------------|----------------------|--------------|----------------------------|
| Launch (M1-3) | 100-400 | 250 units | 350 units | $4,350-6,090 |
| Growth (M4-6) | 400-800 | 600 units | 850 units | $10,440-14,790 |
| Scale (M7-12) | 800-1,200 | 900 units | 1,250 units | $15,660-21,750 |
| Mature (M13+) | 1,200+ | 1,400+ units | 1,950+ units | $24,360+ |

### 4.2 Inventory Financing Strategy

| Method | When | Cost | Dilution? |
|--------|------|------|----------|
| SAFE funds | M1-6 | 0% interest (equity dilution later) | Yes (SAFE conversion) |
| Revenue reinvestment | M4+ | $0 | No |
| Revenue-based financing | M6+ (if $10K+ MRR) | 6-12% flat fee | No |
| Inventory financing (Kickfurther, etc.) | M9+ | 8-15% | No |
| Credit card float (30-day) | Ongoing | 0% if paid in cycle | No |

[Confidence: C | Source: M6 supply chain, M4 fundraising, D2C financing research | Date: 2026-02-11]

---

## 5. Additional Capital Scenarios

### 5.1 Bridge Round (If Conservative Scenario Materializes)

If actual GM is 40-50% and the SAFE burns faster than planned:

| Parameter | Value |
|-----------|-------|
| Amount needed | $50-100K additional |
| Timing | Month 4-6 |
| Instrument | Convertible note or second SAFE |
| Valuation cap | $500K-$1M (higher than first SAFE) |
| Use of funds | Extend runway 6 months, fund inventory scaling |

### 5.2 Seed Round (If Metrics Validate)

If HYP-001, HYP-002, HYP-003, and HYP-004 all validate positively:

| Parameter | Value |
|-----------|-------|
| Amount | $250K-$500K |
| Timing | Month 9-12 |
| Instrument | Priced seed round or SAFE |
| Valuation | $2-5M (based on traction) |
| Use of funds | Aggressive scaling: $2-5K/day ad spend, 3PL transition, team hiring |

[Confidence: D | Source: M4 exit scenarios, 2026 funding landscape research | Date: 2026-02-11]

---

## 6. Capital Efficiency Metrics

| Metric | Target | Calculation | Source |
|--------|--------|-------------|--------|
| Burn multiple | < 2.0x | Net burn / Net new ARR | Industry benchmark |
| Revenue per dollar raised | > $5 in Y1 | Total revenue / Total capital raised | Target |
| Months to revenue | < 2 | Time from SAFE to first sale | M13 timeline |
| Months to $10K MRR | < 8 | Time from first sale to $10K MRR | Cash flow model |
| Capital efficiency ratio | > 0.5 | Gross profit / Total capital deployed | Target |

[Confidence: D | Source: Pre-launch targets | Date: 2026-02-11]

---

## 7. Intelligence Gaps

| Gap | Impact | Validation Path | Priority |
|-----|--------|----------------|----------|
| SAFE terms not finalized | Could be $30K or $50K — 67% variance | M4 investor negotiations | CRITICAL |
| Actual burn rate unknown | Runway estimates +-50% | Month 1-3 actuals | CRITICAL |
| REC-001 unresolved | Capital need ranges from $25K to $186K for Y1 | Resolve margin dispute | CRITICAL |
| No backup funding plan if SAFE insufficient | Conservative scenario = cash crisis in Month 5 | Identify bridge funding sources now | HIGH |
| Inventory cost volatility | Marine plasma pricing may vary +-30% | Lock supplier pricing | HIGH |

---

## 8. Scorecard

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Evidence Coverage | 3/5 | Good structure, but SAFE/pricing not finalized |
| Confidence Honesty | 5/5 | Explicit about scenario-dependent capital needs |
| Upgrade Path Quality | 4/5 | Gate-based deployment plan is actionable |
| Actionability | 5/5 | Decision-forcing: resolve REC-001 or risk cash crisis |
| Integration | 5/5 | Ties M2, M4, M5, M6, M13, M30 |

**Tab Score: 8.0/10**
