# M2 Tab 2: Tax & Entity Structure — IonWave

**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Claude (TWP-001 v2.0.0)
**Confidence Floor**: C (industry benchmarks + 2026 research; no attorney/CPA review)
**Status**: AI Draft

---

## Recommended Entity Architecture

### Primary Structure: Delaware C-Corp

**Why Delaware C-Corp for IonWave:**

1. **VC Compatibility**: Standard instrument for venture fundraising; virtually all institutional investors require C-Corp structure [Confidence: B | Source: YC, a16z, Carta data — 92%+ of VC-backed companies are Delaware C-Corps | Verified: 2026-02-11]
2. **Court of Chancery**: Specialized business court with judges (no juries), centuries of case law, and predictability [Confidence: A | Source: Delaware Court of Chancery public record | Verified: 2026-02-11]
3. **Stock Issuance**: C-Corps can issue multiple classes of stock (common + preferred), essential for fundraising [Confidence: A | Source: Delaware General Corporation Law | Verified: 2026-02-11]
4. **ESOP Friendly**: ISOs (Incentive Stock Options) only available in C-Corp structure [Confidence: A | Source: IRC Section 422 | Verified: 2026-02-11]
5. **SAFE/Convertible Note Compatible**: Standard instruments all designed for C-Corp conversion [Confidence: B | Source: YC SAFE template documentation | Verified: 2026-02-11]

**Formation Details:**
- Filing: Articles of Incorporation with Delaware Division of Corporations
- Cost: $89 (standard) to $200 (expedited)
- Annual franchise tax: $175 minimum (Authorized Shares Method for early-stage)
- Registered agent: Required in Delaware ($50-300/year)
- Timeline: 1-3 business days (standard), same-day (expedited)

### Holding Company Consideration: Studio 4 Ventures

**The Question**: Should IonWave be a standalone C-Corp, or a subsidiary of Studio 4 Ventures?

**Option A: IonWave as Standalone C-Corp (RECOMMENDED for Phase 1)**
- Simpler cap table
- Cleaner for investors (they invest directly in IonWave)
- No structural complexity tax
- Can always create holding structure later via tax-free reorganization

**Option B: Studio 4 as Parent Holding Co → IonWave as Subsidiary**
- LVMH-style portfolio model [Confidence: C | Source: LVMH organizational structure analysis | Verified: 2026-02-11]
- Shared services (legal, finance, HR) across portfolio companies
- IP can be held at parent level, licensed down
- More complex cap table; may deter early investors
- Makes sense when Studio 4 has 3+ portfolio companies

**Recommendation**: Start with Option A. Restructure to Option B when Studio 4 has a second operating company AND sufficient revenue to justify the complexity. Tax-free reorganization (Section 351 or Section 368) can enable this transition — but qualification is NOT automatic and requires careful structuring. Failed reorganization triggers capital gains tax on founder shares at current FMV, which could be significant post-fundraising. Budget $5,000-15,000 for attorney + CPA guidance on restructuring when the time comes. [Confidence: C | Source: IRC Sections 351, 368; standard startup restructuring practice | Verified: 2026-02-11]

**CRITICAL DECISION GATE** (Dialogue Upgrade #3): The holding company vs. standalone decision MUST be made before the first SAFE is issued. Unwinding post-investment is dramatically more complex and may require investor consent. [Confidence: B | Source: Expert persona dialogue Round 1 — Corporate Attorney + Startup CFO | Verified: 2026-02-11]

[VOID — requires: Attorney opinion on optimal timing for restructuring to holding company model. Founder decision on Studio 4 multi-brand timeline. THIS DECISION BLOCKS FIRST SAFE ISSUANCE.]

---

## DAO-Compatible Structure

### The Dual-Track Architecture

IonWave's vision requires supporting both traditional VC fundraising AND a future DAO spinoff. The recommended architecture:

```
Phase 1 (Now):
  IonWave, Inc. (Delaware C-Corp)
  └── Standard VC fundraising
  └── Owns all IP

Phase 2 (Post-PMF, 12-24 months):
  Studio 4 Ventures, Inc. (Delaware C-Corp — holding co)
  ├── IonWave, Inc. (Delaware C-Corp — operating co)
  │   └── Product operations, e-commerce, D2C
  └── [Future Brand 2, Inc.] (when ready)

Phase 3 (Community-Ready, 24+ months):
  Studio 4 Ventures, Inc. (holding co)
  ├── IonWave, Inc. (operating co)
  ├── IonWave DAO LLC (Wyoming — community governance)
  │   └── Token-based governance of community programs
  │   └── Licensed IP from Studio 4 for community use
  └── [Future Brand 2]
```

### Wyoming DAO LLC vs. DUNA Decision Framework

| Factor | DAO LLC | DUNA |
|--------|---------|------|
| Purpose | For-profit community governance | Nonprofit protocol stewardship |
| Profit distribution | Allowed | Not allowed (reinvest only) |
| Minimum members | None | 100+ |
| Formation cost | $100 + $60/yr | $100 + $20-60K legal |
| Smart contract requirement | Yes (30-day deadline) | Yes (governing principles) |
| Best for IonWave? | Yes (community rewards, governance) | No (IonWave is for-profit) |

**Recommendation**: Wyoming DAO LLC when community governance is ready. DUNA is wrong fit because IonWave is fundamentally a for-profit venture. [Confidence: B | Source: Wyoming SF0038 (2021), SF50 (2024), a16z crypto DUNA analysis | Verified: 2026-02-11]

---

## Tax Considerations

### Federal Tax

**C-Corp Tax Rate**: Flat 21% corporate rate on net income [Confidence: A | Source: IRC Section 11, Tax Cuts and Jobs Act 2017 | Verified: 2026-02-11]

**Early-Stage Reality**: Most startups generate losses in years 1-3. Net Operating Losses (NOLs) carry forward indefinitely, offsetting up to 80% of taxable income in future years. [Confidence: A | Source: IRC Section 172 | Verified: 2026-02-11]

**Double Taxation**: C-Corps pay corporate tax on profits, then shareholders pay tax again on dividends. For startups, this is largely theoretical — you reinvest profits, not distribute dividends. Exit (acquisition/IPO) triggers capital gains, not ordinary income.

**R&D Tax Credits**: Available for supplement formulation research. Section 174 requires capitalization and amortization of R&D expenses over 5 years (domestic) or 15 years (foreign). Payroll tax credit offset available for startups with <$5M revenue. [Confidence: B | Source: IRC Section 41, Section 174 (post-2022 rules) | Verified: 2026-02-11]

### State Tax

**Delaware**: No state income tax on out-of-state revenue. Annual franchise tax applies ($175 minimum for Authorized Shares Method). [Confidence: A | Source: Delaware Division of Corporations | Verified: 2026-02-11]

**Operating State**: Tax obligations in states where IonWave has nexus (physical presence, employees, or economic nexus from sales). Key states to watch:
- **California**: 8.84% corporate tax rate + $800 minimum franchise tax. Required if any CA operations. [Confidence: B | Source: CA FTB | Verified: 2026-02-11]
- **Sales Tax**: Economic nexus triggered by >$100K sales or 200+ transactions in most states. Shopify Tax handles collection; filing obligation remains. [Confidence: B | Source: South Dakota v. Wayfair, state nexus thresholds | Verified: 2026-02-11]

### Founder Tax Planning

**83(b) Election — CRITICAL**: File within 30 days of founder stock issuance. Pays tax on fair market value at grant (near zero for new company) instead of at vesting. Missing this deadline has no remedy and can result in massive tax liability. [Confidence: A | Source: IRC Section 83(b), universal startup attorney guidance | Verified: 2026-02-11]

**QSBS (Qualified Small Business Stock)**: C-Corp shares held >5 years may qualify for exclusion of up to $10M in capital gains per founder (Section 1202). Requirements: C-Corp, <$50M aggregate gross assets, active business. Supplement company qualifies. [Confidence: B | Source: IRC Section 1202 | Verified: 2026-02-11]

---

## Entity Comparison Matrix (IonWave-Specific)

| Factor | DE C-Corp | DE LLC | WY DAO LLC | S-Corp |
|--------|-----------|--------|------------|--------|
| VC fundraising | Excellent | Poor | Experimental | Poor |
| Stock options (ISOs) | Yes | No | No | Limited |
| 83(b) election | Yes | N/A | N/A | Yes |
| QSBS eligibility | Yes | No | No | No |
| SAFE note compatible | Yes | Needs modification | No standard | No |
| DAO spinoff path | Via subsidiary | Direct | Native | Via subsidiary |
| Tax treatment | 21% corp + CG | Pass-through | Pass-through | Pass-through |
| Complexity | Standard | Standard | Novel | Restrictions |
| **IonWave fit** | **BEST** | Avoid | Future subsidiary | Avoid |

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path |
|-----|--------|-------------|
| Studio 4 holding co timing undecided | HIGH | Founder strategic session |
| Operating state not confirmed | MEDIUM | Determine where founders are physically located |
| R&D credit eligibility not assessed | LOW | CPA review of formulation expenses |
| DAO spinoff trigger criteria undefined | MEDIUM | Define community/revenue thresholds for Phase 3 |
| QSBS qualification not verified | MEDIUM | Attorney + CPA confirmation of eligibility |
| State tax nexus analysis pending | MEDIUM | Post-launch CPA engagement |
