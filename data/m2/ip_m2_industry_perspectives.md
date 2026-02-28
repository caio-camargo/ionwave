# Industry Perspectives — M2: Entity & Legal

**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Claude (TWP-001 v2.0.0)
**Status**: AI Draft

---

## Research Questions Addressed

1. Wyoming DAOs? — Addressed in Tab 2 (DAO LLC vs. DUNA analysis)
2. Multi-brand holding structures (LVMH model)? — Addressed in Tab 2 (phased architecture)
3. Cap table best practices at pre-seed? — Addressed in Tab 3 (SAFE structure, dilution modeling)
4. Common entity formation mistakes? — Addressed in Tab 4 (8 common mistakes with prevention)

---

## CURRENT STATE

The entity formation and legal landscape for D2C supplement startups in 2026 is characterized by convergence on well-established patterns combined with emerging complexity from crypto/DAO legislation and an accelerating privacy regulatory environment.

**Entity Formation**: Delaware C-Corp remains the overwhelmingly dominant structure for VC-track startups. Over two-thirds of Fortune 500 companies and the vast majority of VC-backed startups are Delaware corporations. Formation services (Stripe Atlas, Clerky, Firstbase) have commoditized the process to $500-2,000 all-in. [Confidence: B | Source: Delaware Division of Corporations data, formation service analysis | Verified: 2026-02-11]

**Funding Instruments**: Post-money SAFEs (YC standard) are used in 92% of pre-seed rounds as of Q3 2025, effectively killing convertible notes at the earliest stage. Median pre-seed valuation cap is $7.7M. The SAFE has become so standardized that legal costs at pre-seed approach zero. [Confidence: B | Source: Carta data, Pitchbook-NVCA Q3 2025 | Verified: 2026-02-11]

**Supplement Regulation**: FDA and FTC share jurisdiction. DSHEA (1994) remains the foundational law. cGMP compliance is mandatory. The regulatory environment is tightening in 2026: growing patchwork of state-level age restrictions, FTC-FDA coordination on social media enforcement, stricter "Made in USA" standards, and continued hemp/CBD ambiguity. [Confidence: B | Source: Skadden 2026 regulatory outlook, Armstrong Teasdale 2026 consumer products guide, Cohen Healthcare Law | Verified: 2026-02-11]

**Privacy**: 24+ US states now have comprehensive privacy laws. CCPA/CPRA amendments effective January 2026 include mandatory opt-out confirmation and GPC signal recognition. GDPR reform underway (SME relief measures expanding). Dark pattern enforcement intensifying globally. [Confidence: B | Source: secureprivacy.ai 2026 guide, CPPA 2026 statute, Digital Commerce 360 | Verified: 2026-02-11]

**DAO Legal Frameworks**: Wyoming remains the only state with both a DAO LLC statute (2021) and a DUNA statute (2024). Vermont and Tennessee have limited DAO legislation. The DAO LLC costs $100 to form with $60/year ongoing. The DUNA targets nonprofit DAOs with 100+ members. Both frameworks are still novel with limited case law. [Confidence: B | Source: Wyoming SF0038, SF50, a16z crypto DUNA analysis, multiple formation guides | Verified: 2026-02-11]

---

## BEST IN CLASS

**Entity Structure — Allbirds / Warby Parker Pattern**: D2C brands that went from formation to IPO demonstrate the Delaware C-Corp → VC pathway working as intended. Clean cap tables, standard governance, predictable dilution. The lesson is not creativity — it is discipline in following established patterns.

**Supplement Legal — Athletic Greens (AG1)**: Exemplary in structuring claims as structure/function, maintaining robust substantiation files, and investing early in regulatory counsel. Their approach to FTC compliance — conservative claims backed by real studies — has kept them out of enforcement actions while competitors face scrutiny. [Confidence: C | Source: AG1 public marketing analysis, FTC enforcement record (no AG1 actions) | Verified: 2026-02-11]

**Privacy Compliance — Apple (standard-setter)**: While not a supplement company, Apple's App Tracking Transparency framework established the consumer expectation for privacy controls. D2C brands that proactively match this standard (transparent consent, easy opt-out) build consumer trust as a competitive advantage.

**Multi-Brand Holding — LVMH**: The gold standard for multi-brand portfolio management. Decentralized brand autonomy + centralized shared services. IP held at parent level, licensed to subsidiaries. Each brand maintains unique identity while benefiting from group-level procurement, legal, and financial infrastructure. [Confidence: B | Source: LVMH organizational structure analysis | Verified: 2026-02-11]

**DAO Governance — ENS Foundation + Uniswap DAO**: Early examples of hybrid structures where a traditional legal entity coexists with token-based governance. ENS uses a Cayman Foundation + DAO structure; Uniswap uses a Delaware LLC + governance token model. Both demonstrate the separation of fiduciary decisions (entity) from community decisions (DAO). [Confidence: C | Source: ENS and Uniswap governance documentation | Verified: 2026-02-11]

---

## WHERE THE INDUSTRY IS WRONG

**1. "You need an attorney to form a company"**: Formation itself is largely commoditized. The real value of legal counsel is in structural decisions (holding co vs. standalone, IP architecture, equity planning) — not in filing articles of incorporation. Most startups over-spend on formation and under-spend on strategic legal architecture.

**2. "Privacy compliance is a cost center"**: In 2026, proactive privacy compliance is a trust signal and competitive moat. Brands that implement transparent consent and easy opt-out see higher engagement from privacy-conscious consumers. The brands treating GDPR/CCPA as minimum-viable-checkbox are missing the strategic opportunity.

**3. "DAOs replace corporations"**: The DAO maximalist view — that DAOs can replace traditional corporate governance for all business functions — has been proven wrong by governance failures (The DAO hack, MakerDAO governance attacks). DAOs are excellent for community governance but terrible for fiduciary decisions requiring speed, accountability, and legal enforceability.

**4. "Equal equity splits are fair"**: The conventional wisdom that co-founders should split equity equally ignores asymmetric contributions. Up to 60% of founder disputes arise from equity distribution, and equal splits often mask deferred conflicts that explode at scale.

**5. "Convertible notes are standard"**: Despite some attorneys still recommending convertible notes, the data is clear — 92% of pre-seed rounds use SAFEs. Notes add unnecessary complexity (interest, maturity dates, default risk) that benefits neither founders nor investors at the earliest stage.

---

## OUR CONTRARIAN TAKE

**IonWave believes that the entity structure should be designed for DAO-compatibility from Day 1, not retrofitted later — but the DAO layer should never touch the first dollar of revenue.**

Most startups either (a) form a standard C-Corp and never think about DAO governance until it's architecturally painful to add, or (b) start with a DAO structure and create investor nightmares.

IonWave's approach: **Standard Delaware C-Corp for everything that touches money, investors, and regulation. Reserve DAO governance for community decisions that don't require fiduciary accountability.** The key architectural decision is IP ownership at the holding company level, which enables clean licensing to both traditional operating entities AND future DAO entities without restructuring.

This is contrarian because:
- DAO maximalists hate it (not decentralized enough)
- VC traditionalists are skeptical (why think about DAO at pre-seed?)
- Most founders don't plan for multi-entity architecture until Series B+

We believe the cost of planning for this at formation (~$0 incremental — it is just a structural decision) is dramatically lower than retrofitting later (~$50-100K+ in restructuring costs). [Confidence: D | Source: Original thesis; limited precedent for this specific hybrid approach | Upgrade: Validate with attorney experienced in both VC and crypto structures]

---

## IMPLICATIONS FOR IONWAVE

**What We Do Differently:**
1. **Phase-gated entity architecture**: C-Corp first, holding co second, DAO third — but plan all three at formation
2. **IP at parent level from the start**: Even if holding co isn't formed yet, document the IP ownership strategy so restructuring is clean
3. **SAFE-only pre-seed**: Zero tolerance for convertible note complexity at the earliest stage
4. **Privacy as brand value**: Implement GDPR-level privacy from day 1, even if only US customers — this becomes a trust signal and marketing asset
5. **Supplement compliance as moat**: While competitors cut corners on FTC/FDA compliance, IonWave builds a substantiation library from day 1 that protects against enforcement and enables bolder (but defensible) marketing claims over time

**What We Steal:**
- AG1's approach to substantiation-first marketing
- LVMH's IP-at-parent-level architecture (adapted for startup scale)
- Apple's privacy-as-brand-value positioning
- ENS/Uniswap's hybrid entity + DAO governance separation

**What We Avoid:**
- Over-engineering entity structure before revenue validates the multi-brand vision
- DAO governance for any fiduciary or financial decision
- Equal equity splits without contribution-based justification
- Convertible notes at pre-seed
- Dark patterns in privacy consent (even if technically legal in some jurisdictions)
