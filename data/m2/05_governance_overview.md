# M2 Tab 5: ODD-6 Governance Overview — IonWave

**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Claude (TWP-001 v2.0.0)
**Confidence Floor**: C (standard corporate governance + IonWave-specific DAO considerations)
**Status**: AI Draft
**ODD Reference**: ODD-6 (Operational Deep Dive — Governance)

---

## Governance Architecture

### Phase-Gated Governance Model

IonWave's governance evolves through three phases, matching organizational complexity to business maturity.

**Phase 1: Founder Mode (Pre-Revenue to $50K MRR)**
- Minimal formal governance — founder makes operational decisions
- Board = founders only (1-3 person board)
- Quarterly board meetings (even if solo founder — creates decision trail)
- Annual shareholder meeting
- Key decisions documented via board consent resolutions
- Governance overhead: ~2 hours/quarter [Confidence: C | Source: Standard early-stage startup practice | Verified: 2026-02-11]

**Phase 2: Structured Governance (Seed to Series A, $50K-$250K MRR)**
- Board expands to 3-5 members (founders + investor seat(s) + independent)
- Monthly board meetings with standard reporting package
- Formal committees not yet needed
- Advisory board activated (see Tab 7)
- Governance overhead: ~4-8 hours/month [Confidence: C | Source: Standard Series A governance requirements | Verified: 2026-02-11]

**Phase 3: Full Governance + DAO Layer (Post-Series A)**
- 5-7 person board with audit committee
- DAO governance layer for community decisions
- Dual governance: corporate board for business decisions, DAO for community governance
- Formal risk management and compliance oversight
- Governance overhead: ~15-20 hours/month [Confidence: D | Source: Projected based on Phase 3 complexity | Upgrade: Actual governance load data from comparable companies]

---

## Corporate Governance Structure (Delaware C-Corp)

### Board of Directors

**Duties:**
- **Duty of Care**: Make informed, deliberate decisions based on available information [Confidence: A | Source: Delaware General Corporation Law | Verified: 2026-02-11]
- **Duty of Loyalty**: Act in the best interest of the company, not personal interest
- **Duty of Good Faith**: Act honestly and with genuine concern for the company's welfare
- **Business Judgment Rule**: Protects directors from liability when decisions are made in good faith, with due care, and without conflicts of interest

**Board Size Recommendations by Phase:**

| Phase | Board Size | Composition |
|-------|-----------|-------------|
| Phase 1 (Pre-seed) | 1-3 | Founders only |
| Phase 2 (Seed) | 3 | 2 founders + 1 investor/independent |
| Phase 3 (Series A) | 5 | 2 founders + 1-2 investors + 1 independent |
| Phase 4 (Growth) | 5-7 | 2 founders + 2 investors + 1-3 independents |

**Critical Rule**: Maintain founder control of the board through Series A. Negotiate board composition in every term sheet. [Confidence: B | Source: Standard VC negotiation guidance, Y Combinator | Verified: 2026-02-11]

### Officers

**Required Officers (Delaware law):**
- President/CEO
- Secretary
- Treasurer/CFO

**Recommended Early-Stage Officer Structure:**

| Officer | Person | Responsibilities |
|---------|--------|------------------|
| CEO/President | Nilo | Business strategy, fundraising, external relationships |
| Secretary | Nilo (or designee) | Corporate records, board minutes, stock ledger |
| Treasurer/CFO | Nilo (or fractional CFO) | Financial oversight, banking, tax compliance |

**Note**: Same person can hold multiple officer positions in Delaware. Solo founder commonly holds all three initially. [Confidence: A | Source: DGCL Section 142 | Verified: 2026-02-11]

### Shareholder Rights

**Standard C-Corp shareholder rights:**
- Vote on director elections (annual meeting)
- Vote on fundamental changes (mergers, charter amendments, dissolution)
- Right to inspect corporate records
- Preemptive rights (if provided in charter — typically NOT included for startups)
- Information rights (typically granted contractually to investors, not by default)

---

## Decision-Making Framework

### What Requires Board Approval

| Decision Type | Board Vote Required | Threshold |
|---------------|-------------------|-----------|
| Issue new equity (stock, options, SAFEs) | Yes | Majority |
| Take on debt >$50K | Yes | Majority |
| Enter material contracts | Yes | Majority |
| Hire/fire C-suite officers | Yes | Majority |
| Approve annual budget | Yes | Majority |
| Set officer compensation | Yes | Majority (conflicted directors abstain) |
| Related-party transactions | Yes | Majority of disinterested directors |
| Change corporate structure | Yes + Shareholders | Per DGCL |

### What Requires Shareholder Approval

| Decision Type | Shareholder Vote Required | Threshold |
|---------------|--------------------------|-----------|
| Amend Certificate of Incorporation | Yes | Majority of outstanding shares |
| Merge or sell substantially all assets | Yes | Majority of outstanding shares |
| Dissolve the company | Yes | Majority of outstanding shares |
| Increase authorized shares | Yes | Majority of outstanding shares |

### What CEO Can Decide Alone (Phase 1)

| Decision Type | CEO Authority |
|---------------|--------------|
| Hire employees below C-suite | Yes |
| Enter contracts <$50K | Yes (or per board-set threshold) |
| Marketing and product decisions | Yes |
| Day-to-day operations | Yes |
| Vendor selection | Yes (within budget) |

---

## DAO Governance Integration (Future State)

### Dual Governance Model

When IonWave launches its DAO layer, governance bifurcates:

**Corporate Board Retains:**
- Entity-level decisions (fundraising, M&A, IP licensing)
- Financial commitments
- Regulatory compliance
- C-suite hiring/firing

**DAO Governs:**
- Community program funding allocation
- Product flavor/format voting
- Ambassador program rules
- Community content curation
- Brand partnership approval (community-facing)

**Firewall Principle**: DAO governance cannot override corporate board decisions on fiduciary matters. The board retains veto power on any DAO proposal that would violate law, expose the company to material liability, or conflict with investor rights. [Confidence: C | Source: Emerging best practice from a16z crypto, Wyoming DAO LLC framework | Verified: 2026-02-11]

### Token Governance Considerations
- Governance tokens must avoid Howey test classification as securities
- Utility token design: voting rights + community access (not profit-sharing)
- Token distribution: community rewards, not investment returns
- Legal review required before any token issuance
[Confidence: D | Source: SEC Howey test framework, DAO governance emerging practice | Upgrade: Crypto/securities attorney consultation required]

---

## Governance Documents Checklist

| Document | Status | Priority | Notes |
|----------|--------|----------|-------|
| Certificate of Incorporation | Pending formation | P0 | Filed with Delaware SOS |
| Bylaws | Pending formation | P0 | Adopted at organizational meeting |
| Organizational Board Consent | Pending formation | P0 | First board action |
| Restricted Stock Purchase Agreements | Pending formation | P0 | For founder stock |
| Stock Option Plan (ESOP) | Pending | P1 | Before first hire |
| Board Consent Template Library | Pending | P1 | Standard resolutions for common actions |
| Investor Rights Agreement | Pre-seed | P2 | Negotiated with first investor |
| Voting Agreement | Pre-seed | P2 | Board composition control |
| Right of First Refusal (ROFR) | Pre-seed | P2 | Share transfer restrictions |
| Indemnification Agreements | Seed | P2 | For directors and officers |
| DAO Operating Agreement | Phase 3 | P3 | Wyoming DAO LLC formation |

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path |
|-----|--------|-------------|
| Board composition pre-seed not finalized | LOW | Solo founder = single-person board until first investment |
| Protective provisions for investors unknown | HIGH | Negotiated during term sheet; typically include veto rights on certain actions |
| DAO governance token design undefined | MEDIUM | Requires crypto counsel + community strategy development |
| Director compensation policy absent | LOW | Not needed until independent board members join |
| Board meeting cadence not formalized | LOW | Start quarterly; increase to monthly at seed |
