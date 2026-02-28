# M2 Tab 3: Cap Table — IonWave Pre-Seed Structure

**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Claude (TWP-001 v2.0.0)
**Confidence Floor**: C (industry benchmarks from Carta, Eqvista, pre-seed data)
**Status**: AI Draft

---

## Cap Table Architecture Principles

### Key Rules for IonWave

1. **Founders retain >65% through pre-seed, >50% through seed** [Confidence: B | Source: Carta pre-seed data, allied.vc cap table analysis | Verified: 2026-02-11]
2. **Use post-money SAFEs** (YC standard, used in 92% of pre-seed rounds as of Q3 2025) [Confidence: B | Source: Carta data Q3 2025 | Verified: 2026-02-11]
3. **Set ESOP pool at 10-15%** at formation (creates "pre-money" dilution, shared by all shareholders) [Confidence: B | Source: Carta data, Eqvista guide | Verified: 2026-02-11]
4. **All founder stock subject to 4-year vesting, 1-year cliff** [Confidence: A | Source: Universal VC standard | Verified: 2026-02-11]
5. **83(b) elections filed within 30 days of stock grant** (see Tab 2)
6. **No dead weight** — all equity holders must be active contributors or on proper vesting schedules [Confidence: B | Source: Cake Equity clean cap table guide | Verified: 2026-02-11]

---

## Pre-Formation Cap Table (Day 0)

### Authorized Shares: 10,000,000 Common Stock

| Shareholder | Shares | % Ownership | Vesting | Notes |
|-------------|--------|-------------|---------|-------|
| Founder 1 (Nilo) | [TBD] | [TBD] | 4yr/1yr cliff | File 83(b) within 30 days |
| Founder 2 (if applicable) | [TBD] | [TBD] | 4yr/1yr cliff | File 83(b) within 30 days |
| ESOP Pool (unissued) | [TBD] | 10-15% | N/A | Reserved for employees/advisors |
| **Total** | **10,000,000** | **100%** | | |

[VOID — requires: Founder decision on equity split and co-founder structure. This is a blocking strategic decision.]

### Recommended Scenarios (Based on Team Structure)

**Scenario A: Solo Founder**
| Shareholder | Shares | % |
|-------------|--------|---|
| Nilo | 8,500,000 | 85% |
| ESOP Pool | 1,500,000 | 15% |
| **Total** | **10,000,000** | **100%** |

**Scenario B: Two Co-Founders (Unequal Split)**
| Shareholder | Shares | % | Rationale |
|-------------|--------|---|-----------|
| Nilo (CEO/Visionary) | 5,500,000 | 55% | Originator, vision, primary capital risk |
| Co-Founder 2 | 3,000,000 | 30% | Execution partner, domain expertise |
| ESOP Pool | 1,500,000 | 15% | Employee/advisor grants |
| **Total** | **10,000,000** | **100%** | |

**Scenario C: Two Co-Founders (Equal Split)**
| Shareholder | Shares | % |
|-------------|--------|---|
| Nilo | 4,250,000 | 42.5% |
| Co-Founder 2 | 4,250,000 | 42.5% |
| ESOP Pool | 1,500,000 | 15% |
| **Total** | **10,000,000** | **100%** | |

**Recommendation**: Unequal splits better reflect asymmetric contributions. 73% of first-time founders opt for equal splits, but this leads to disputes — up to 60% of legal disputes among founders stem from equity distribution. [Confidence: B | Source: Eqvista cap table guide, Harvard Business School research | Verified: 2026-02-11]

---

## Post-Pre-Seed Cap Table (After SAFE Round)

### Assumptions
- **Pre-seed raise**: $500K on post-money SAFEs [Confidence: D | Source: IonWave financial model assumptions | Upgrade: Actual fundraising terms]
- **Valuation cap**: $6-8M (conservative for consumer/supplement pre-seed) [Confidence: C | Source: Pitchbook-NVCA median pre-seed is $7.7M Q3 2025 | Verified: 2026-02-11]
- **Dilution**: ~6-8% at conversion (post-money SAFE mechanics) [Confidence: C | Source: smallgreat.co SAFE calculator, Carta data | Verified: 2026-02-11]

### Pro-Forma Cap Table (Solo Founder, $500K at $8M Cap)

| Shareholder | Shares | % Post-Conversion | Notes |
|-------------|--------|--------------------|-------|
| Nilo | 8,500,000 | ~79.7% | Pre-ESOP grants |
| ESOP Pool | 1,500,000 | ~14.1% | Unissued |
| SAFE Investors | ~666,667 | ~6.3% | $500K at $8M post-money cap |
| **Total** | **~10,666,667** | **100%** | |

### Modeling Future Dilution

| Round | Raise | Dilution | Founder % After |
|-------|-------|----------|-----------------|
| Formation | — | — | 85% |
| Pre-Seed (SAFE) | $500K | ~6% | ~80% |
| Seed (Priced) | $1.5-2M | ~15-20% | ~62-68% |
| Series A | $5-10M | ~20-25% | ~47-54% |

**Critical threshold**: Founders should retain >50% through seed to maintain control into Series A. [Confidence: B | Source: allied.vc, openvc.app cap table guides | Verified: 2026-02-11]

---

## ESOP (Employee Stock Option Plan) Design

### Pool Size: 15% of Authorized Shares (1,500,000 shares)

**Grant Guidelines by Role:**

| Role | Equity Range | Vesting | Notes |
|------|-------------|---------|-------|
| First hire (COO/CTO) | 1.0-2.0% | 4yr/1yr cliff | Highest grant — first hire premium |
| 2nd-5th employee | 0.3-1.0% | 4yr/1yr cliff | Role-dependent |
| 6th-20th employee | 0.1-0.5% | 4yr/1yr cliff | Decreasing as company de-risks |
| Advisors | 0.25-1.0% | 2yr/6mo cliff | Standard advisory vesting |
| Board members | 0.25-0.5% | 2-3yr cliff varies | If not already investors |

**Data Point**: The first hire's median grant is 1.50%, while the fifth hire's median is 0.33%. [Confidence: B | Source: Carta benchmarks for pre-seed/seed companies | Verified: 2026-02-11]

### Option Plan Mechanics

- **Option Type**: ISOs (Incentive Stock Options) for employees; NSOs (Non-Qualified) for contractors/advisors [Confidence: A | Source: IRC Section 422 | Verified: 2026-02-11]
- **Exercise Price**: Fair Market Value at grant date (409A valuation required before first grant)
- **409A Valuation**: Required before issuing any options. Cost: $1,000-5,000 from providers like Carta, Pulley, Eqvista. Valid for 12 months.
- **Acceleration**: Single-trigger on change of control for executives; double-trigger recommended per M1 analysis [Confidence: B | Source: M1 Labor Chain workshop findings | Verified: 2026-02-11]
- **Post-Termination Exercise**: 90 days standard; consider 10-year for early employees as retention tool

---

## Cap Table Hygiene Rules

1. **No handshake equity deals** — every grant documented with board consent and signed stock agreement
2. **Vesting on everyone** — including founders (protects against co-founder departure)
3. **IP assignment from day zero** — all equity holders sign IP assignment before receiving shares
4. **Regular cap table updates** — minimum quarterly, after every issuance event
5. **Use cap table software** from seed stage forward (Carta, Pulley, or AngelList Stack)
6. **Avoid dead weight** — buy-back provisions for departed unvested holders
7. **SAFEs tracked separately** until conversion — model dilution for every funding scenario

---

## Cap Table Management Tools

| Tool | Best For | Cost | Notes |
|------|----------|------|-------|
| Carta | VC-backed startups post-seed | $1,500+/yr | Industry standard, 409A built-in |
| Pulley | Pre-seed to seed | Free-$200/yr | Good alternative, YC-backed |
| AngelList Stack | SAFE management | Free | Best for managing SAFEs specifically |
| Spreadsheet | Pre-formation only | Free | Replace with software ASAP after first external investment |

**Recommendation**: Use a spreadsheet or Pulley (free tier) at formation. Move to Carta at seed when investors and 409A requirements demand it. [Confidence: C | Source: Founder community consensus | Verified: 2026-02-11]

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path |
|-----|--------|-------------|
| Founder equity split undecided | CRITICAL | Founder strategic session — blocking for all subsequent cap table work |
| Co-founder identification pending | HIGH | Nilo decision on team structure |
| Pre-seed terms not finalized | HIGH | Investor conversations determine actual dilution |
| 409A valuation not done | MEDIUM | Required before first option grant ($1-5K) |
| Studio 4 / IonWave relationship affects cap table structure | HIGH | If holding co structure, cap table exists at parent level |
