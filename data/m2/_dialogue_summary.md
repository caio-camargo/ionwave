# M2 Entity & Legal — Expert Persona Dialogue Summary

**TUP**: M2 Entity & Legal
**TUP Version**: 1.0.0
**Date**: 2026-02-11
**Protocol**: TWP-001 v2.0.0
**Personas**: Corporate Attorney, Startup CFO, E-commerce Compliance Counsel
**Rounds**: 6
**Saturated**: Yes (3 consecutive RESOLVED at rounds 4-6)
**Upgrades Applied**: 8
**Unresolved Gaps**: 2

---

## Persona Profiles

**Corporate Attorney (CA)**: Specializes in startup entity formation, corporate governance, M&A, and emerging DAO legal frameworks. 15+ years advising VC-backed companies. Skeptical of novel structures without case law backing.

**Startup CFO (SCFO)**: Former CFO of two supplement D2C brands (one acquired, one Series B). Expert in cap table management, fundraising mechanics, and financial structuring. Pragmatic about what investors actually look for.

**E-commerce Compliance Counsel (ECC)**: Specializes in FTC enforcement, privacy law (GDPR/CCPA), and consumer protection for D2C brands. Has represented supplement companies in FTC investigations. Focused on risk reduction.

---

## Dialogue Rounds

### ROUND 1:
**CHALLENGE** (CA): The phased entity architecture (C-Corp → Holding Co → DAO) assumes a clean restructuring path, but the document understates the Section 351 and Section 368 complexity — tax-free reorganization is not automatic and can fail if done wrong, triggering significant tax liability for founders.

**RESPONSE** (SCFO): Agreed — the restructuring risk is real but manageable. The bigger gap is that the cap table modeling in Tab 3 does not model the holding company scenario at all. If Studio 4 becomes the parent, the cap table exists at the Studio 4 level, not the IonWave level. Investors would hold Studio 4 shares, not IonWave shares, which fundamentally changes the fundraising conversation.

**SYNTHESIS** (ECC): Both valid. The content should explicitly flag the restructuring tax risk with a cost estimate for professional guidance, and the cap table should model both the standalone and holding company scenarios. This is a strategic decision gate — founder needs to decide before first SAFE issuance because unwinding is much harder post-investment.

**OUTCOME**: UPGRADED
**ACTION**:
- Added explicit warning about Section 351/368 restructuring complexity to Tab 2
- Added holding company cap table scenario to Tab 3
- Flagged as CRITICAL decision gate: holding co decision must precede first SAFE

### ROUND 2:
**CHALLENGE** (ECC): The privacy policy framework in Tab 10 does not address the health data classification issue deeply enough. If IonWave runs product recommendation quizzes that ask about health conditions, sleep quality, or energy levels, this is almost certainly "sensitive personal information" under CCPA and "special category data" under GDPR. This requires explicit opt-in consent (not just legitimate interest) and potentially a Data Protection Impact Assessment (DPIA). A DPIA is mandatory under CPPA 2026 rules for sensitive data processing.

**RESPONSE** (CA): This connects to a broader point — the TOS in Tab 9 should reference the supplement-specific health data collection practices and link them to the privacy framework. Also, if IonWave ever processes biometric data (e.g., a health tracking integration), Illinois BIPA creates strict liability with $1,000-$5,000 per violation penalties.

**SYNTHESIS** (SCFO): From a financial perspective, the DPIA and health data compliance costs should be budgeted. This is probably $3,000-5,000 if done with counsel. Not expensive, but needs to be in the legal budget table in Tab 15. The health data question also affects the M19 CRM architecture — if health data is collected, it needs special handling in the CRM.

**OUTCOME**: UPGRADED
**ACTION**:
- Upgraded Tab 10 health data section with explicit DPIA requirement
- Added BIPA warning for any future biometric data processing
- Added health data compliance to Tab 15 legal budget
- Cross-referenced M19 CRM health data handling requirement

### ROUND 3:
**CHALLENGE** (SCFO): The equity strategy in Tab 14 models SAFE dilution but completely ignores the "SAFE stacking" problem. If IonWave raises on multiple SAFEs at different caps (e.g., $6M cap for first investors, $8M cap for later investors), the conversion math becomes complex at the seed priced round. Founders often don't model this correctly and are surprised by their actual ownership post-conversion. Also, the post-money SAFE mechanics mean each SAFE holder's ownership is calculated independently, and the total dilution is additive — not averaged.

**RESPONSE** (CA): Correct. Additionally, the MFN (Most Favored Nation) clause recommended in Tab 14 can create awkward situations. If an early investor has MFN and a later SAFE has better terms, the early investor can convert at the better terms. This is well-understood but should be explicitly modeled.

**SYNTHESIS** (ECC): Not my primary domain, but from a compliance perspective, the cap table complexity increases the risk of errors in securities filings. Recommend that IonWave use cap table software (not spreadsheets) from the first SAFE issuance, and that every SAFE issuance be paired with an updated pro-forma cap table.

**OUTCOME**: UPGRADED
**ACTION**:
- Added SAFE stacking scenario to Tab 14 with example dilution math
- Added MFN conversion example
- Strengthened Tab 3 recommendation to use cap table software from first SAFE (not just seed)
- Added securities filing compliance note

### ROUND 4:
**CHALLENGE** (CA): The DAO governance section in Tab 5 mentions a "firewall principle" between corporate board and DAO governance, but doesn't address the practical question: what happens when a DAO vote conflicts with the board's fiduciary duty? For example, the DAO votes to fund a community program that the board considers wasteful or harmful to shareholder value. The document says the board has "veto power" but doesn't specify the legal mechanism for this veto or how it's communicated to the community.

**RESPONSE** (SCFO): This is largely theoretical at pre-seed stage. The DAO layer is Phase 3 (24+ months out). The content correctly identifies the separation principle. Operationalizing the veto mechanism is a Phase 3 engineering problem, not a Phase 1 legal problem. The document should note this as a future design requirement without over-engineering the solution now.

**SYNTHESIS** (ECC): Agree with CFO — the document appropriately identifies the issue and defers the mechanism design. The intelligence gap is correctly sized. This is resolved.

**OUTCOME**: RESOLVED
**ACTION**: No changes needed — existing content appropriately identifies the issue and defers implementation to Phase 3.

### ROUND 5:
**CHALLENGE** (ECC): The cookie policy in Tab 11 is comprehensive for GDPR, but the document doesn't address the intersection of consent management with server-side tracking (CAPI). Some brands implement server-side tracking to recover data lost from cookie consent denial. While CAPI is technically compliant if properly configured, it can create a false sense of security — the legal basis for processing still requires consent under GDPR, and server-side tracking without consent is just as illegal as client-side tracking without consent. M9 Ecommerce Infra recommends CAPI — this TUP should explicitly cross-reference the legal requirements.

**RESPONSE** (CA): Good catch but the document already addresses this in Tab 11: "Server-side tracking still requires legal basis." The cross-reference to M9 is noted in the cookie inventory. This is adequately covered.

**SYNTHESIS** (SCFO): Agree — the content is sound on this point. No upgrade needed.

**OUTCOME**: RESOLVED
**ACTION**: No changes needed — existing content already addresses the server-side tracking consent requirement.

### ROUND 6:
**CHALLENGE** (SCFO): The insurance cost estimates in Tab 12 range widely (e.g., product liability at $3,000-8,000/year). Is this based on actual supplement company data or generic small business data? Marine plasma is a relatively novel ingredient — carriers may price it higher or decline to cover it at all without safety data.

**RESPONSE** (ECC): The Tab 12 ranges are consistent with industry data I've seen for supplement companies at pre-revenue to $500K revenue. The marine plasma specificity is a valid concern but is adequately flagged in the intelligence gaps. The document recommends working with a supplement-specialist broker, which is the right approach.

**SYNTHESIS** (CA): The ranges are reasonable and the intelligence gaps are properly documented. This is resolved with existing content.

**OUTCOME**: RESOLVED
**ACTION**: No changes needed — Tab 12 appropriately flags marine plasma ingredient risk and recommends specialist broker.

---

## Saturation Log

| Round | Outcome | Rationale |
|-------|---------|-----------|
| 1 | UPGRADED | Restructuring tax risk + holding co cap table missing |
| 2 | UPGRADED | Health data DPIA + BIPA + budget implications |
| 3 | UPGRADED | SAFE stacking + MFN modeling + cap table software timing |
| 4 | RESOLVED | DAO veto mechanism correctly deferred to Phase 3 |
| 5 | RESOLVED | Server-side tracking consent already addressed |
| 6 | RESOLVED | Insurance ranges reasonable, marine plasma risk flagged |

**Saturation reached**: 3 consecutive RESOLVED (rounds 4-6).

---

## Upgrades Applied (8 Total)

| # | Upgrade | Tabs Affected | Severity |
|---|---------|---------------|----------|
| 1 | Added Section 351/368 restructuring tax risk warning | Tab 2 | HIGH |
| 2 | Added holding company cap table scenario | Tab 3 | HIGH |
| 3 | Flagged holding co decision as CRITICAL pre-SAFE gate | Tab 2, Tab 3 | CRITICAL |
| 4 | Added DPIA requirement for health data processing | Tab 10 | HIGH |
| 5 | Added BIPA warning for future biometric data | Tab 10 | MEDIUM |
| 6 | Added health data compliance to legal budget | Tab 15 | MEDIUM |
| 7 | Added SAFE stacking dilution scenario | Tab 14 | HIGH |
| 8 | Strengthened cap table software recommendation (from seed to first SAFE) | Tab 3 | MEDIUM |

---

## Unresolved Gaps (2)

| # | Gap | Why Unresolved | Impact | Resolution Path |
|---|-----|---------------|--------|-----------------|
| 1 | DAO veto mechanism design | Deferred to Phase 3 — requires token engineering + legal framework that doesn't exist yet | LOW (not needed for 24+ months) | Engage crypto counsel at Phase 2-3 transition |
| 2 | Marine plasma insurance pricing uncertainty | Requires actual broker quotes with ingredient data | MEDIUM | Obtain quotes from 2-3 supplement-specialist brokers with marine plasma CoA data |

---

## What Would Have Been Missed Without Dialogue

1. **Section 351/368 restructuring risk** — The holding company restructuring was presented as straightforward ("tax-free reorganization allows this transition without tax consequences") when it actually requires careful structuring to qualify for tax-free treatment. Failure can trigger significant capital gains.

2. **Health data as sensitive/special category** — Product recommendation quizzes collecting health information trigger heightened privacy obligations (DPIA, explicit consent, BIPA risk) that were under-addressed.

3. **SAFE stacking complexity** — Multiple SAFEs at different caps create compounding dilution that is not intuitive from a simple cap table model. The additive nature of post-money SAFE dilution is a common founder blind spot.

4. **Cap table software timing** — The original recommendation to wait until seed for cap table software is too late when SAFEs create real securities and dilution tracking requirements from the first external investment.
