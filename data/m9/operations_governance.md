# M9 — Operations Governance

> A disorganized business looks unprofessional, wastes time, and creates risk. Structure is free — use it.

## Source

Danilo tabs: 291 (Security Checklist), 293 (Folder Structure Map), 294 (Asset Naming Convention)

---

## Security Checklist

### Account Security (Non-Negotiable)

| # | Task | Priority | Status |
|---|------|----------|--------|
| 1 | Install password manager (1Password or Bitwarden) | P0 | ☐ |
| 2 | Unique password for EVERY account — no exceptions | P0 | ☐ |
| 3 | Enable 2FA on all critical accounts (see list below) | P0 | ☐ |
| 4 | Store recovery codes in separate secure location | P0 | ☐ |
| 5 | Review and remove unused account access quarterly | P1 | ☐ |

### 2FA Required Accounts

These accounts MUST have 2FA enabled before launch:

| Account | Why It's Critical | 2FA Method |
|---------|------------------|------------|
| **Business email (Google Workspace)** | Gateway to ALL account resets | Authenticator app (NOT SMS) |
| **Shopify** | Store access, customer data, revenue | Authenticator app |
| **Bank accounts** | Money | Bank's native 2FA |
| **Meta Business Manager** | Ad spend, pixel data | Authenticator app |
| **Google Ads** (if applicable) | Ad spend | Google's native 2FA |
| **Domain registrar** | Domain = business identity | Authenticator app |
| **Stripe** (if separate from Shopify) | Payment processing | Authenticator app |
| **Recharge/Skio** | Subscription customer data | If available |

**2FA hierarchy**: Hardware key (YubiKey) > Authenticator app (Google Authenticator, Authy) > SMS. Never use SMS for critical accounts — SIM swapping is real.

### Data Security

| # | Rule | Rationale |
|---|------|-----------|
| 1 | Customer data stored ONLY in secure systems (Shopify, Klaviyo, Recharge) | These have SOC 2 compliance. Spreadsheets don't |
| 2 | NO customer data in spreadsheets or local files | One laptop theft = data breach |
| 3 | Credit card data NEVER stored — Shopify Payments/Stripe handles this | PCI compliance is their problem, not yours |
| 4 | Regular backups of critical data (weekly export from Shopify) | Shopify isn't going down, but export your customer/order data monthly |
| 5 | Encryption enabled where possible (FileVault on Mac, BitLocker on Windows) | Full-disk encryption on all devices with business data |

### Access Control

| # | Rule | Implementation |
|---|------|---------------|
| 1 | Principle of least privilege | Contractors get access ONLY to tools they need. Nothing more |
| 2 | Separate admin accounts from daily-use | Admin email for business-critical, personal email for daily tools |
| 3 | Remove access IMMEDIATELY when someone leaves | Within 24 hours. No exceptions. Change shared passwords |
| 4 | Document who has access to what | Use credential register in tech_stack_and_tools.md |
| 5 | Review access list quarterly | Calendar reminder: Jan 1, Apr 1, Jul 1, Oct 1 |

### Incident Response Protocol

If you suspect a breach or unauthorized access:

| Step | Action | Timeline |
|------|--------|----------|
| **1. CONTAIN** | Change passwords on ALL affected accounts. Revoke all third-party access. Enable lockdown mode | Immediately (within 1 hour) |
| **2. ASSESS** | What was accessed? Customer data? Financial data? Payment info? How did they get in? | Within 24 hours |
| **3. NOTIFY** | Legal counsel first. Then affected customers if PII was exposed (required by CCPA/GDPR). Contact Shopify support | Within 72 hours (GDPR requirement) |
| **4. FIX** | Close the vulnerability. Update all passwords. Add 2FA where missing. Review all access | Within 1 week |
| **5. DOCUMENT** | Record what happened, how you responded, what changed. Add to security audit trail | Within 2 weeks |

**Reality for solo founders**: You probably won't have a sophisticated breach. The most likely scenarios are: (1) reused password gets compromised in a data breach, (2) phishing email tricks you into giving up credentials, (3) a contractor you gave access to goes rogue. 2FA + unique passwords prevents 90% of these.

### Ad Account Hijacking Prevention (U3)

The **#1 actual threat for D2C brands** is Meta Business Manager hijacking. Attackers send phishing emails that look identical to "Your ad was rejected" or "Account verification required." If your ad account gets hijacked, they drain your credit card running crypto/scam ads — often thousands of dollars in hours.

**Prevention rules**:
1. **NEVER click links in Meta support emails** — Always navigate directly to business.facebook.com
2. **Set a daily ad spend cap** at 2x your normal budget (see tracking_and_attribution.md U12) — limits damage if hijacked
3. **Set an account-level spending limit** — hard cap that requires manual reset
4. **Enable login alerts** for Meta Business Manager — you get notified of any new login
5. **Use a separate browser profile** for ad accounts — prevents cookie/session theft from casual browsing
6. **Never grant admin access** to Meta BM unless absolutely necessary — use partial permissions

**If hijacked**:
1. Immediately pause ALL campaigns from Ads Manager (if you still have access)
2. Contact Meta Business Support (priority: "My account was compromised")
3. Change password and revoke all sessions
4. Contact your bank to dispute unauthorized charges
5. Review and remove any unknown admin users

### Theme Backup Protocol (U6)

**Before installing ANY new Shopify app**, export your current theme:

1. Go to Shopify Admin → Online Store → Themes
2. Click "..." on your live theme → "Download theme file"
3. Save as: `Theme_[ThemeName]_v[#]_[YYYYMMDD].zip` in `04_Operations/` on Drive
4. THEN install the app
5. If the app breaks your theme or kills speed, you can restore the backup instantly

**Why this matters**: Apps can corrupt themes. A clean backup saves days of debugging. Takes 30 seconds. No excuse not to do it.

### Collaborator Account Audit (U9)

Developers and agencies often get added as **Collaborator accounts** (separate from Staff accounts) and these persist indefinitely — even years after a project ends.

**Quarterly audit**:
1. Go to Shopify Admin → Settings → Users and Permissions
2. Check **Staff** section — remove anyone who shouldn't have access
3. Check **Collaborator** section — this is where forgotten access hides
4. Remove any collaborator who is not actively working on your store
5. Document any remaining collaborators in the credential register with their access level and review date

---

## Folder Structure Map

### Google Drive Organization

```
IonWave/
├── 00_Strategy/
│   ├── Ops Model (master spreadsheet/IonWave Bootstrap)
│   ├── Business Plan
│   └── Investor Materials
│
├── 01_Brand/
│   ├── Brand_Book_v[#].pdf
│   ├── Logo_Files/
│   │   ├── Img_Logo_Primary_v1.svg
│   │   ├── Img_Logo_White_v1.svg
│   │   └── Img_Logo_Icon_v1.svg
│   ├── Color_Palette/
│   └── Typography/
│
├── 02_Creative/
│   ├── Ads/
│   │   ├── Static/        (Ad_Static_Hook[#]_[Angle]_v[#].png)
│   │   ├── Video/         (Vid_[Type]_[Length]_v[#].mp4)
│   │   └── Archive/       (Dated subfolders: YYYY-MM/)
│   ├── Landing_Pages/     (LP_[Name]_[Section]_v[#].fig)
│   ├── Email/             (Email_[Flow]_[#]_v[#].html)
│   └── Photography/       (Img_[Type]_[Descriptor]_v[#].jpg)
│
├── 03_Marketing/
│   ├── Campaign_Reports/  (Doc_CampaignReport_YYYYMMDD.pdf)
│   ├── Competitor_Research/
│   └── Swipe_File/        (Inspiration, competitor screenshots)
│
├── 04_Operations/
│   ├── Suppliers/         (Doc_SupplierQuote_YYYYMMDD.pdf)
│   ├── 3PL/               (Contracts, SOPs, SLAs)
│   ├── Inventory/         (Inventory counts, reorder triggers)
│   └── Support/           (Templates, macros, escalation docs)
│
├── 05_Finance/
│   ├── Invoices/          (Doc_Invoice_[Vendor]_YYYYMMDD.pdf)
│   ├── Reports/           (Monthly P&L, cash flow)
│   └── Projections/       (Financial models, scenarios)
│
├── 06_Legal/
│   ├── Contracts/         (Doc_Contract_[Party]_YYYYMMDD.pdf)
│   ├── Compliance/        (FDA, FTC, supplement regulations)
│   └── IP/                (Trademarks, patents if applicable)
│
├── 07_Evidence/
│   ├── Screenshots/       (SS_[What]_YYYYMMDD.png)
│   ├── Screen_Recordings/ (SR_[What]_YYYYMMDD.mp4)
│   └── Audit_Trail/       (Decision logs, change records)
│
└── 08_Archive/
    └── Old_Versions/      (Dated subfolders: YYYY-MM/)
```

### Folder Rules

1. **9 top-level folders maximum** — If you need a new category, it probably fits in an existing one
2. **No files in root** — Everything goes in a subfolder
3. **Archive, don't delete** — Move old versions to 08_Archive with date
4. **Consistent naming** — Follow Asset Naming Convention below
5. **Weekly cleanup** — 5 minutes every Friday: file anything in Downloads or Desktop

---

## Asset Naming Convention

### General Format

```
[Type]_[Category]_[Descriptor]_[Version]_[Date]
```

### By Asset Type

| Type | Format | Example |
|------|--------|---------|
| **Ads** | `Ad_[Format]_[Hook#]_[Angle]_v[#]` | `Ad_Static_Hook3_Minerals_v2` |
| **Videos** | `Vid_[Type]_[Length]_v[#]` | `Vid_VSL_60s_v1` |
| **Emails** | `Email_[Flow]_[#]_v[#]` | `Email_Welcome_01_v3` |
| **Landing Pages** | `LP_[Name]_[Section]_v[#]` | `LP_Main_Hero_v2` |
| **Images** | `Img_[Type]_[Descriptor]_v[#]` | `Img_Product_Lifestyle_v1` |
| **Documents** | `Doc_[Type]_[Date]` | `Doc_SupplierQuote_20260115` |
| **Screenshots** | `SS_[What]_[Date]` | `SS_AdPerformance_20260115` |
| **Screen Recordings** | `SR_[What]_[Date]` | `SR_CheckoutFlow_20260208` |

### Naming Rules

1. **No spaces** — Use underscores: `Ad_Static_Hook3` not `Ad Static Hook3`
2. **No special characters** except underscore `_` and hyphen `-`
3. **Always include version number** — `v1`, `v2`, etc. Even first version is `v1`
4. **Date format: YYYYMMDD** — `20260115` not `01-15-26` or `Jan 15`
5. **Keep names under 50 characters** — Long enough to be descriptive, short enough to read
6. **Be descriptive but concise** — `Ad_Static_Hook3_Minerals_v2` tells you everything
7. **Lowercase for consistency** — Exception: proper nouns in descriptors

### Version Control Rules

- **v1, v2, v3** — Sequential, never skip numbers
- **Old versions**: Move to 08_Archive or subfolder `_Archive/`
- **Working files**: Prefix with `WIP_` (e.g., `WIP_Ad_Static_Hook4_v1`)
- **Final/approved files**: No prefix (clean name = approved)
- **Never use "final"** — `Ad_Hero_FINAL_v2_FINAL_REAL.png` is a meme for a reason. Use version numbers

### Campaign Naming Convention (Ads)

For ad platform campaigns, maintain consistent naming:

```
[Platform]_[Objective]_[Audience]_[Creative]_[Date]

Meta_Prospecting_Interest-Health_Hook3-Static_202602
Meta_Retargeting_ViewContent-7d_UGC-Testimonial_202602
Google_Brand_Branded-Terms_Text_202602
TikTok_Prospecting_Lookalike-1pct_Creator-Jessica_202602
```

This naming convention ensures:
- You can filter by platform, objective, or audience in analytics
- UTM parameters stay consistent (utm_campaign matches campaign name)
- Reporting is clear without needing to open the ad platform

---

## Phase-Gated Governance (U11)

Not everything in this document applies from Day 1. Over-organizing before launch is a form of procrastination.

### Month 0-1 (Pre-Launch + Launch): Essentials ONLY

- ✅ Password manager installed + 2FA on all critical accounts
- ✅ Folder structure created in Drive
- ✅ Naming convention understood and applied
- ✅ Theme backup taken before app installs
- ✅ Ad spend caps set

### Month 2-3: Add Operational Cadence

- ✅ Monthly Tool ROI Review starts (tech_stack_and_tools.md)
- ✅ Weekly operational hygiene routine
- ✅ Monthly security/tracking checks
- ✅ Credential register fully populated

### Month 3+: Unlock Full Governance

- ✅ Quarterly security audits
- ✅ Contractor onboarding/offboarding checklists
- ✅ Full operational hygiene calendar
- ✅ Collaborator account audits

**The rule**: If you don't have revenue yet, you don't need quarterly security audits. Launch first, organize second. But password manager + 2FA + ad spend caps are NON-NEGOTIABLE from Day 0.

---

## Operational Hygiene Calendar

> **Note**: Daily routine starts at launch. Weekly starts Month 1. Monthly starts Month 2. Quarterly starts Month 3.

### Daily (5 min)

- [ ] Check MVD metrics (see M30 Daily Pulse)
- [ ] Monitor customer support inbox
- [ ] Review any ad platform alerts/flags

### Weekly (30 min — Friday)

- [ ] File any loose documents using naming convention
- [ ] Review and respond to all customer reviews
- [ ] Check page speed on homepage and PDP
- [ ] Clear browser cache and downloads folder
- [ ] Back up any critical local files to Drive

### Monthly (1 hour — First Monday) — *Starts Month 2*

- [ ] Export Shopify customer and order data backup
- [ ] Review installed apps — uninstall unused
- [ ] Check all tracking pixels are firing correctly
- [ ] Review access permissions (who has access to what)
- [ ] Archive old creative assets to 08_Archive
- [ ] Update credential register if any passwords changed
- [ ] Tool ROI Review — justify every paid tool in one sentence (U5)

### Quarterly (2 hours) — *Starts Month 3*

- [ ] Full security audit: all accounts have 2FA, passwords rotated for shared accounts
- [ ] Access review: remove anyone who shouldn't have access
- [ ] Collaborator account audit: check Shopify Settings → Users → Collaborator section (U9)
- [ ] App audit: justify every installed Shopify app
- [ ] Folder cleanup: archive old projects, rename inconsistent files
- [ ] Review folder structure — add new subfolders if needed (but try not to)
- [ ] Speed audit: full PageSpeed Insights on all key pages

---

## Contractor/Team Onboarding Checklist

When bringing someone new onto the project:

| # | Task | Notes |
|---|------|-------|
| 1 | Create their access list (which tools, what permission level) | Document in credential register |
| 2 | Grant access to approved tools ONLY | Least privilege — they can request more |
| 3 | Share folder structure map | They need to know where things go |
| 4 | Share asset naming convention | Non-negotiable. Renamed files = wasted time |
| 5 | Share UTM convention (if marketing) | Inconsistent UTMs break attribution |
| 6 | Set up their 2FA on all granted accounts | Verify before they start working |
| 7 | Brief on security policies | Especially: no customer data in spreadsheets |
| 8 | Calendar their access review date | 90-day review or end of contract, whichever is sooner |

### Offboarding Checklist

| # | Task | Timeline |
|---|------|----------|
| 1 | Revoke access to ALL tools | Within 24 hours |
| 2 | Change shared passwords they had access to | Within 24 hours |
| 3 | Transfer ownership of assets they created | Before access revoked |
| 4 | Update credential register | Same day |
| 5 | Verify no personal accounts linked to business tools | Within 48 hours |
| 6 | Archive their work folder | Within 1 week |

---

## Recovery Protocol

If operational governance lapses (you missed weeks of filing, naming is inconsistent, etc.):

### Priority 1: Security (Do This First)
1. Verify 2FA on all critical accounts (15 min)
2. Check for any unauthorized access (15 min)
3. Update any passwords that are > 6 months old (30 min)

### Priority 2: Tracking (Do This Second)
1. Verify all pixels are firing (15 min)
2. Run Meta Pixel Helper on key pages (10 min)
3. Compare Shopify orders vs platform-reported conversions (10 min)

### Priority 3: Organization (Do This When Possible)
1. File unfiled documents using naming convention (30 min)
2. Rename any incorrectly named files (30 min)
3. Archive old versions (15 min)
4. Update credential register (15 min)

**Graceful degradation** (per M30): Security and tracking are NON-NEGOTIABLE. Organization can always be recovered. A messy folder structure doesn't kill a business — a security breach does.
