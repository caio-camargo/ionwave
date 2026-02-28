# M2 Tab 4: ODD-5 Entity Formation Guide — IonWave

**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Claude (TWP-001 v2.0.0)
**Confidence Floor**: B (well-documented formation process; IonWave-specific decisions at C-D)
**Status**: AI Draft
**ODD Reference**: ODD-5 (Operational Deep Dive — Entity Formation)

---

## Entity Formation: Step-by-Step Execution Guide

### Week 1: Formation

#### Day 1-2: Pre-Formation Decisions

**Decision 1: Entity Name**
- Primary: IonWave, Inc. (if available in Delaware)
- Backup: IonWave Labs, Inc. or IonWave Health, Inc.
- Check availability: Delaware Division of Corporations entity search [Confidence: A | Source: Delaware SOS online search tool | Verified: 2026-02-11]
- Also check: USPTO trademark database, domain availability, state-level business name databases

**Decision 2: Authorized Share Structure**
- Recommended: 10,000,000 shares of Common Stock, $0.0001 par value
- This allows for founder grants, ESOP, and multiple SAFE conversions without needing to amend the charter
- Delaware franchise tax under Authorized Shares Method: $175/year for up to 5,000 shares; use Assumed Par Value Capital Method if over 5,000 authorized shares to minimize tax [Confidence: B | Source: Delaware franchise tax calculation methods | Verified: 2026-02-11]

**Decision 3: Incorporator**
- Can be a founder, attorney, or formation service
- Incorporator's only role is to file Articles and hold organizational meeting
- Resigns after organizational meeting when board is seated

#### Day 2-3: File Formation Documents

**Step 1: File Certificate of Incorporation with Delaware**
- File online at Delaware Division of Corporations (icis.corp.delaware.gov)
- Include: Company name, authorized shares, par value, registered agent address, incorporator name
- Cost: $89 (standard 2-3 day) or $189 (24-hour) or $279 (same-day)
- Receive: Filed Certificate of Incorporation with state-assigned file number

**Step 2: Obtain EIN**
- Apply online at IRS.gov (Form SS-4)
- Immediate issuance (within minutes)
- Required for: Bank accounts, tax filings, hiring
- Cost: $0 [Confidence: A | Source: IRS.gov | Verified: 2026-02-11]

**Step 3: Appoint Registered Agent**
- Required in Delaware
- Options: Northwest Registered Agent ($125/yr), ZenBusiness ($199/yr), or legal counsel
- Agent receives legal service of process and state correspondence
- Must have physical Delaware address (no P.O. boxes)

**Step 4: File BOI Report with FinCEN**
- Corporate Transparency Act requires beneficial ownership reporting
- File within 90 days of formation (for companies formed in 2024+)
- Report beneficial owners (>25% ownership or substantial control)
- Cost: $0
- Penalty for non-filing: Up to $500/day [Confidence: B | Source: FinCEN BOI reporting rules, 31 CFR Part 1010 | Verified: 2026-02-11]

#### Day 3-5: Organizational Actions

**Step 5: Hold Organizational Board Meeting**
Adopt board resolutions for:
- [ ] Adopt Bylaws
- [ ] Elect officers (President/CEO, Secretary, Treasurer)
- [ ] Authorize initial stock issuance
- [ ] Adopt ESOP (stock option plan)
- [ ] Select fiscal year (calendar year recommended for simplicity)
- [ ] Authorize bank account opening
- [ ] Adopt form of Stock Certificate (or uncertificated shares)
- [ ] Ratify pre-incorporation actions
- [ ] Approve Restricted Stock Purchase Agreements for founders

**Step 6: Issue Founder Stock**
- Execute Restricted Stock Purchase Agreements (RSPAs) for each founder
- Purchase price: $0.0001/share (par value) — founders pay nominal amount (e.g., $850 for 8.5M shares)
- Vesting: 4-year monthly vesting, 1-year cliff (standard)
- Include: IP assignment provision, repurchase right on unvested shares
- CRITICAL: Each founder must file IRS 83(b) election within 30 days of stock purchase [Confidence: A | Source: IRC Section 83(b), universal VC counsel guidance | Verified: 2026-02-11]

**Step 7: File 83(b) Elections**
- Send via USPS Certified Mail to IRS within 30 days of stock grant date
- Keep proof of mailing (certified mail receipt)
- Give copy to company for corporate records
- THIS DEADLINE CANNOT BE EXTENDED — missing it is the single most expensive founder tax mistake [Confidence: A | Source: IRC Section 83(b), IRS guidance | Verified: 2026-02-11]

### Week 2: Operational Setup

**Step 8: Open Business Bank Account**
- See Tab 13 for bank comparison
- Mercury recommended for VC-track startups
- Requires: EIN, Certificate of Incorporation, organizational resolution

**Step 9: Execute IP Assignment Agreements**
- Every founder signs Technology Assignment Agreement assigning all prior and future IP to the company
- Includes: Inventions, code, designs, trade secrets, content
- Standard VC requirement — investors will check for this in due diligence
- Also execute for any pre-incorporation contractors

**Step 10: Set Up Accounting**
- See M25 Financial Operations for full setup
- Minimum: QuickBooks or Xero, connected to bank account
- Cash basis acceptable at pre-seed; switch to accrual when investors require

### Week 3-4: Protection & Compliance

**Step 11: File Trademark Application**
- USPTO filing for "IonWave" in relevant classes
- Class 5: Dietary supplements (primary)
- Class 35: Retail store services / online retail (D2C)
- Cost: $250-350 per class (TEAS Plus filing)
- Timeline: 8-12 months for registration [Confidence: B | Source: USPTO fee schedule, typical processing times | Verified: 2026-02-11]

**Step 12: Insurance Setup**
- See Tab 12 for full insurance checklist
- Priority: General liability + Product liability
- Engage supplement-specialist broker

**Step 13: E-Commerce Legal Documents**
- See Tabs 9-11 for TOS, Privacy Policy, Cookie Policy
- Must be live before first transaction
- Review subscription auto-renewal compliance (FTC Negative Option Rule)

---

## Foreign Qualification Requirements

If IonWave operates in a state other than Delaware, foreign qualification is required. [Confidence: B | Source: State SOS requirements, Wolters Kluwer | Verified: 2026-02-11]

**Triggers for foreign qualification:**
- Physical office in a state
- Employees in a state
- Significant, regular business activities in a state

**Common states for D2C supplement companies:**
| State | Foreign Qualification Fee | Annual Fee | Notes |
|-------|--------------------------|------------|-------|
| California | $100 | $800 franchise tax minimum | If any CA operations |
| New York | $225 | $9-25 (biennial filing) | If NY operations |
| Texas | $750 | $0 (no franchise tax for small cos) | No income tax state |
| Florida | $70 | $138.75/yr | No income tax state |

---

## Common Entity Formation Mistakes

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Missing 83(b) election deadline | Tax liability on vesting at FMV (potentially hundreds of thousands) | Calendar the 30-day deadline; file day of stock grant |
| No vesting on founder stock | Departing founder retains full equity | Always implement 4yr/1yr cliff vesting |
| No IP assignment | Company doesn't own its own IP; blocks acquisition | Execute IP assignment before first SAFE |
| Wrong entity type (LLC for VC track) | Must convert before fundraising; delays + costs $5-20K | Start as C-Corp if VC is on the roadmap |
| Handshake equity promises | Unenforceable; creates disputes | Board-approved grants with signed agreements only |
| No board minutes | Governance gaps; investor red flag | Template-based consent resolutions for every action |
| Ignoring BOI filing | $500/day penalty | File within 90 days of formation |
| Over-authorizing shares | Higher Delaware franchise tax | Use Assumed Par Value Capital Method or limit authorized shares |

[Confidence: B | Source: Common startup formation mistakes documented by Clerky, Stripe Atlas, YC Startup School, Cohen Healthcare Law Group | Verified: 2026-02-11]

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path |
|-----|--------|-------------|
| Operating state not confirmed | HIGH | Founder confirms physical location → determines foreign qualification needs |
| Attorney not engaged | HIGH | Formation can be DIY but attorney review recommended ($2-5K package) |
| 409A valuation timing | MEDIUM | Needed before first option grant; order 2-3 weeks before planned grants |
| State-specific supplement requirements | MEDIUM | Some states require supplement seller registration beyond FDA |
