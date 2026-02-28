# M2 Tab 14: Equity Strategy & Planning — IonWave

**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Claude (TWP-001 v2.0.0)
**Confidence Floor**: C (industry benchmarks; IonWave-specific decisions at D pending founder input)
**Status**: AI Draft

---

## Equity Strategy Overview

### IonWave's Dual-Track Equity Challenge

IonWave's vision requires supporting both traditional VC equity AND future DAO token-based community ownership. This creates a unique equity planning challenge:

**Traditional Track**: Standard C-Corp equity (common stock, preferred stock, options)
**Web3 Track**: Future governance tokens or community equity (DAO-compatible)

These tracks must coexist without conflict. The strategy below addresses both. [Confidence: C | Source: Emerging hybrid VC/DAO models; limited precedent | Verified: 2026-02-11]

---

## Funding Instrument Strategy

### Pre-Seed: SAFE Notes (Recommended)

**Why SAFEs over Convertible Notes:**

| Feature | SAFE (YC Post-Money) | Convertible Note |
|---------|---------------------|-----------------|
| Interest accrual | No | Yes (compounds, adds complexity) |
| Maturity date | No | Yes (creates pressure/default risk) |
| Complexity | Simple (4-page document) | Higher (negotiable terms) |
| Industry adoption | 92% of pre-seed rounds (Q3 2025) | Declining |
| Dilution predictability | Post-money = clear dilution calc | Pre-money = dilution varies |
| Legal cost | $0-500 (use YC template) | $2,000-5,000 |

[Confidence: B | Source: Carta data Q3 2025, YC SAFE documentation, smallgreat.co SAFE guide | Verified: 2026-02-11]

**Recommended SAFE Structure for IonWave:**
- **Type**: Post-money SAFE (YC standard)
- **Valuation cap**: $6-8M (conservative for consumer/supplement pre-seed)
- **Discount**: None (post-money SAFEs with cap only is standard; discounts add complexity)
- **Pro rata rights**: Include for investors writing $100K+ checks
- **MFN clause**: Most Favored Nation for early SAFEs (gets them the best terms of any subsequent SAFE)

**2026 Valuation Context**: Median pre-seed pre-money valuation is $7.7M (Pitchbook-NVCA Q3 2025). Supplement/consumer brands may be slightly lower ($5-8M) due to capital intensity vs. software. [Confidence: B | Source: Pitchbook-NVCA Venture Monitor, zeni.ai 2026 valuation analysis | Verified: 2026-02-11]

### SAFE Stacking Warning (Dialogue Upgrade)

**If raising on multiple SAFEs at different valuation caps**, understand the compounding dilution:

Post-money SAFEs calculate each investor's ownership independently. The dilution is ADDITIVE, not averaged. Example:

| SAFE | Amount | Cap | Implied Ownership |
|------|--------|-----|-------------------|
| SAFE 1 | $250K | $6M cap | 4.17% |
| SAFE 2 | $250K | $8M cap | 3.13% |
| **Total** | **$500K** | — | **7.30%** (not 6.25% average) |

**MFN Risk**: If SAFE 1 has an MFN clause and SAFE 2 has a lower (better) cap, SAFE 1 investor can convert at SAFE 2's terms, increasing total dilution further.

**Critical Rule**: Use cap table software (Pulley free tier or AngelList Stack) from the FIRST SAFE issuance, not at seed. Every SAFE issuance must be paired with an updated pro-forma cap table. Spreadsheets introduce calculation errors that compound. [Confidence: B | Source: Expert persona dialogue Round 3 — SAFE stacking scenario analysis | Verified: 2026-02-11]

### Seed: Priced Round (Recommended)

At seed, convert to a priced round with preferred stock:
- Series Seed Preferred Stock
- Liquidation preference: 1x non-participating (standard)
- Anti-dilution: Broad-based weighted average
- Board seat: One seat for lead investor
- Information rights: Monthly financials, annual audited statements
- Pro rata rights: Participation in future rounds

**Expected Terms (2026 Market):**
- Seed raise: $1.5-3M
- Pre-money valuation: $8-15M
- Dilution: 15-20%
- ESOP pool: Size up to 15% (or true-up from pre-seed pool)

[Confidence: C | Source: letts.group 2026 startup valuation guide, Carta seed data | Verified: 2026-02-11]

---

## Equity Allocation Philosophy

### The Equity Budget

IonWave should budget equity deliberately, knowing that every percentage point given away is permanent dilution:

| Category | Target Allocation | Notes |
|----------|-------------------|-------|
| **Founders** | 70-85% at formation | Subject to vesting; most valuable early allocation |
| **ESOP** | 10-15% at formation | Employee/advisor option pool |
| **Pre-Seed Investors** | 5-10% | Via SAFEs ($500K-1M raise) |
| **Seed Investors** | 15-20% (incremental) | Via priced round |
| **Future Rounds** | 20-25% (incremental) | Series A and beyond |

**Dilution Waterfall (Illustrative — Solo Founder):**

| Event | Founder % | ESOP % | Pre-Seed % | Seed % | Series A % |
|-------|-----------|--------|------------|--------|------------|
| Formation | 85% | 15% | — | — | — |
| Pre-Seed ($500K @ $8M cap) | 79.7% | 14.1% | 6.3% | — | — |
| Seed ($2M @ $12M pre) | 56.8% | 10.0% | 4.5% | 14.3% | — |
| ESOP true-up to 15% | 51.8% | 15.0% | 4.1% | 13.0% | — |
| Series A ($5M @ $25M pre) | 43.2% | 12.5% | 3.4% | 10.8% | 16.7% |

[Confidence: D | Source: Illustrative model based on typical dilution patterns; actual outcomes depend on negotiated terms | Upgrade: Real term sheet data]

### Equity Decision Framework

**For every equity decision, apply this test:**

1. **Does this person/investor add value beyond capital?** (Advisors, strategic investors)
2. **Is the amount proportional to contribution?** (No "friendship equity")
3. **Is there a vesting/clawback mechanism?** (Protect against departure)
4. **Have we modeled the dilution impact through Series A?** (Always run the waterfall)
5. **Is this documented with proper legal agreements?** (No handshake deals)

---

## Vesting Design

### Founder Vesting

**Standard**: 4-year vesting, 1-year cliff, monthly thereafter

| Month | Vested % | Unvested % | Rationale |
|-------|----------|------------|-----------|
| 0-11 | 0% | 100% | Cliff period — no vesting until month 12 |
| 12 | 25% | 75% | Cliff vests (full first year) |
| 13-48 | +2.08%/month | Decreasing | Monthly vesting post-cliff |
| 48 | 100% | 0% | Fully vested |

**Acceleration Provisions:**
- **Single-trigger** (on change of control): 25-50% acceleration (for CEO/founders)
- **Double-trigger** (on change of control + termination): 100% acceleration
- **Recommendation**: Double-trigger for all equity holders (per M1 Labor Chain analysis — prevents misaligned incentives on exit) [Confidence: B | Source: M1 workshop findings, standard VC practice | Verified: 2026-02-11]

### Employee/Advisor Vesting

| Role | Vesting Schedule | Cliff |
|------|-----------------|-------|
| Early employees (1-5) | 4yr, monthly | 1yr cliff |
| Later employees (6-20) | 4yr, monthly | 1yr cliff |
| Advisors | 2yr, monthly | 6mo cliff |
| Board members | 2-3yr, varies | 1yr cliff |

---

## DAO/Token Equity Integration (Future State)

### How DAO Tokens Relate to C-Corp Equity

**Key Principle**: DAO governance tokens are NOT equity securities. They must be designed as utility tokens providing governance rights, not financial returns. [Confidence: C | Source: SEC Howey test framework, emerging DAO governance practice | Verified: 2026-02-11]

**Separation Design:**

| Attribute | C-Corp Equity | DAO Governance Token |
|-----------|--------------|---------------------|
| Type | Security (stock) | Utility token |
| Financial rights | Dividends, liquidation preference | None (governance only) |
| Governance scope | Board elections, fundamental transactions | Community programs, product voting |
| Transferability | Restricted (ROFR, lock-up) | Defined by smart contract |
| Regulatory | SEC/state securities laws | Evolving (must avoid Howey test) |
| Issuance | Board resolution | Smart contract mint |

**Implementation Path:**
1. Phase 1: C-Corp equity only (standard fundraising)
2. Phase 2: Design token economics (engage crypto counsel)
3. Phase 3: Launch DAO LLC with governance tokens
4. Phase 4: Establish formal relationship between C-Corp equity and DAO governance

**Red Line**: Tokens must never promise or deliver financial returns tied to company profits. This would make them securities and require SEC registration. [Confidence: B | Source: SEC framework for digital assets, Howey test, DAO governance emerging practice | Verified: 2026-02-11]

---

## Tax-Efficient Equity Strategies

### For Founders

| Strategy | Benefit | Action |
|----------|---------|--------|
| **83(b) election** | Pay tax on near-zero FMV at grant instead of FMV at vesting | File within 30 days — NO EXCEPTIONS |
| **QSBS (Section 1202)** | Exclude up to $10M capital gains if shares held >5 years | Must be C-Corp, <$50M assets, active business |
| **Opportunity Zone** | Defer/reduce capital gains | If company HQ in Qualified Opportunity Zone |

### For Employees

| Strategy | Benefit | Action |
|----------|---------|--------|
| **ISOs** | No tax at exercise (if held); LTCG at sale | Must be employee, not contractor |
| **Early exercise** | Exercise options before vesting + file 83(b) | Requires plan to allow early exercise |
| **NSOs** (contractors) | Flexible but ordinary income at exercise | Standard for contractors/advisors |

[Confidence: B | Source: IRC Sections 83(b), 422, 1202; standard startup tax planning | Verified: 2026-02-11]

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path |
|-----|--------|-------------|
| Founder equity split undecided | CRITICAL | Blocking decision for entire equity strategy |
| Pre-seed valuation cap not set | HIGH | Depends on investor conversations and market conditions |
| DAO token economics undefined | MEDIUM | Requires crypto counsel + community strategy (Phase 2+) |
| 409A valuation needed before first option grant | MEDIUM | Order from Carta/Pulley 2-3 weeks before first hire |
| QSBS eligibility not confirmed | MEDIUM | CPA verification that IonWave qualifies as QSB |
| Opportunity Zone status not checked | LOW | Check if HQ location qualifies |
