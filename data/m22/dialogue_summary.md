# M22 Persona Dialogue Summary

**TUP:** M22 — Referral & Community
**TUP Version:** 1.0.0
**Protocol:** TWP-001 v2.0.0
**Date:** 2026-02-06
**Actor:** Caio + Claude (claude-opus-4-6)

---

## Personas

1. **Skeptical Investor** — Challenges ROI, premature spending, unit economics
2. **Growth Hacker (DTC Performance Marketer)** — Tests referral math, creative strategy, channel allocation
3. **Regulatory Counsel** — Probes FTC/FDA compliance, comparative advertising risk, creator liability

---

## Saturation Log

| Round | New Issues Raised | Upgrades Triggered | Status |
|-------|------------------|-------------------|--------|
| 1 | 3 | 3 | Active |
| 2 | 3 | 2 | Active |
| 3 | 3 | 1 | Active |
| 4 | 2 (adjacent-TUP concerns) | 0 | **Saturated** |

**Total Rounds:** 4
**Total Upgrades:** 6
**Unresolved Issues:** 0

---

## Round-by-Round Transcript

### Round 1

**Skeptical Investor:** Why build referral infrastructure before proving PMF? Referral programs amplify existing product love — they don't create it. If nobody recommends IonWave unprompted, a $10 coupon won't change that.

**Growth Hacker:** Referral economics look clean on paper ($13.40 CAC vs $35 paid), but you're projecting benchmarks for a product nobody has tried. At <500 customers, don't expect meaningful acquisition from referral. The real value of this TUP is the UGC program, not the referral program.

**Regulatory Counsel:** (1) "The most complete electrolyte profile on the market" is an unqualified superlative. Can you prove no other product exceeds 78 trace elements? If Quinton has a similar claim, this is false advertising. (2) The UGC Library's "Organic: implied consent" status is legally insufficient. A brand tag does NOT constitute consent for commercial ad use.

**Upgrades triggered:**
- **UPG-1:** Changed "most complete electrolyte profile on the market" to "78 trace elements — more than most electrolyte brands." Fixed "organic" rights status to require explicit written permission.
- **UPG-2:** Validated that referral is already phased to launch only at Month 2-3 with PMF signals. Noted UGC as higher-value component.
- **UPG-3:** Added core principle: "Referral programs AMPLIFY existing PMF — they do not create it."

### Round 2

**Skeptical Investor:** Circle at $89/month is 1% of $100K revenue, plus 5+ hrs/week founder time. At that stage, those hours should go to acquisition or product. When does community ROI turn positive?

**Growth Hacker:** UGC hit rate is 5-10% at launch. At $500/month (4-6 videos), you get 0-1 winners. That's not testing, it's a prayer. What's the minimum viable UGC budget for systematic testing?

**Regulatory Counsel:** "Your body is 70% ocean" is scientifically imprecise — body is ~60% water, fluid mineral composition is similar but not identical to seawater. Low FTC risk (it's brand narrative), but creates credibility risk for a science-forward brand.

**Upgrades triggered:**
- **UPG-4:** Added note to brand brief: "This is storytelling, not science. Accurate framing: human blood plasma has a mineral composition remarkably similar to seawater."
- **UPG-5:** Annotated $500/month tier as "SURVIVAL MODE — not systematic testing." Marked $1K/month as "MINIMUM VIABLE TESTING."

### Round 3

**Skeptical Investor:** Half the TUP is UGC content production workflow for a brand that doesn't exist yet. What's the first thing the founder should DO from this TUP on Day 1?

**Growth Hacker:** Loop Subscriptions (M21 recommendation) and Smile.io (M22 referral recommendation) — have you verified they integrate? Two separate customer databases is a real operational problem.

**Regulatory Counsel:** No further compliance issues. Suggested: creator compliance acknowledgment form — paper trail protection if creators go off-script.

**Upgrades triggered:**
- **UPG-6:** Added "Creator Compliance Acknowledgment" to creator vetting process. Elevated Loop/Smile integration gap to CRITICAL in intelligence gaps. Added M14 dependency note.

### Round 4

**Skeptical Investor:** Satisfied. Remaining concern is soft: M22 covers referral + community + UGC — three operational disciplines. Risk of scope dilution?

**Growth Hacker:** Brief template needs a "creative angle" field for systematic variation. Currently only varies hooks, not underlying angles. Need an angle taxonomy.

**Regulatory Counsel:** Satisfied with all upgrades. No further concerns.

**Assessment:** Both remaining concerns are adjacent-TUP issues (M22 scope was user-validated at checkpoint; angle taxonomy belongs in M14 Testing). No content upgrades needed. **Saturated.**

---

## Upgrades Applied

| ID | Source | Change | File(s) Affected |
|----|--------|--------|-----------------|
| UPG-1 | Regulatory Counsel | Changed unqualified superlative to qualified comparison; fixed "organic" rights consent language | ugc_brand_brief.md, ugc_library.json |
| UPG-2 | Growth Hacker | Validated phased approach; noted UGC as higher-value component | (confirmed in existing structure) |
| UPG-3 | Skeptical Investor | Added core principle: referrals amplify PMF, don't create it | referral_program.json |
| UPG-4 | Regulatory Counsel | Added science accuracy note to "body is 70% ocean" claim | ugc_brand_brief.md |
| UPG-5 | Growth Hacker | Annotated budget tiers with testing viability ($500 = survival, $1K = minimum viable) | ugc_creator_program.json |
| UPG-6 | Regulatory Counsel + Growth Hacker | Added Creator Compliance Acknowledgment; elevated Loop/Smile integration to CRITICAL gap; added M14 dependency | ugc_creator_program.json, referral_program.json |

---

## What Would Have Been Missed Without Dialogue

1. **Unqualified superlative claim** — "most complete on the market" is defensible as puffery but unnecessarily risky for a bootstrapped brand. The qualified version is equally effective with zero legal exposure.
2. **Organic UGC rights gap** — "implied consent" from a brand tag is a lawsuit waiting to happen. Commercial use requires explicit permission.
3. **Loop/Smile integration risk** — Two critical platforms (subscription + referral) that may not talk to each other. No one checks until it's too late.
4. **$500/month UGC budget illusion** — At 5-10% hit rate, $500/month produces 0-1 winners. Calling it a "testing program" sets false expectations. It's survival-mode creative.
5. **"Body is 70% ocean" credibility risk** — Not a legal problem, but a science-forward brand using imprecise science creates a trust gap with educated consumers (the exact ICP).
6. **Creator compliance paper trail** — Without a signed acknowledgment, IonWave has no defense if a creator makes prohibited claims.
