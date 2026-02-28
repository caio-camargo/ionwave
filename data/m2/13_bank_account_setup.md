# M2 Tab 13: Bank Account Setup — IonWave

**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Claude (TWP-001 v2.0.0)
**Confidence Floor**: B (well-documented banking options; specific comparison current as of 2026)
**Status**: AI Draft

---

## Banking Platform Comparison (2026)

### Recommended: Mercury (for VC-Track Startups)

| Feature | Mercury | Relay | Brex |
|---------|---------|-------|------|
| **Best for** | VC-backed startups | Bootstrapped / small business | Scaling companies (10+ employees) |
| **Monthly fee** | $0 | $0 (basic) / $30 (Pro) | $0 (but minimum requirements) |
| **Minimum balance** | $0 | $0 | Effectively $0 (but see eligibility) |
| **Domestic wires** | Free | $5-8 (outgoing) | Free |
| **International wires** | Free | $5 (outgoing, local rails) | Free |
| **ACH transfers** | Free | Free | Free |
| **Interest on deposits** | Treasury account ($250K+ min) | Savings accounts (Relay Pro) | Business account yields |
| **Sub-accounts** | Multiple accounts | Up to 20 free accounts | Multiple accounts |
| **Corporate cards** | Yes (credit + debit) | Yes (debit only) | Yes (corporate credit, best-in-class) |
| **API access** | Yes (developer-friendly) | Limited | Yes |
| **Integrations** | QuickBooks, Xero, many | QuickBooks, Gusto, Xero | QuickBooks, Xero, Netsuite, many |
| **FDIC insured** | Yes (via partner banks) | Yes (via Thread Bank N.A.) | Yes (via partner banks) |
| **Eligibility** | US-based startups | Any US business | VC-backed or $400K+/mo revenue |
| **Partner bank risk** | Choice Bank (FDIC consent order noted) | Thread Bank N.A. (FDIC consent order 2024) | Multiple partners |

[Confidence: B | Source: wearefounders.uk 2026 bank comparison, relayfi.com Brex vs Mercury comparison, ramp.com Mercury alternatives, efficient.app comparison | Verified: 2026-02-11]

### IonWave Recommendation: Mercury

**Why Mercury for IonWave:**

1. **VC-track alignment**: Mercury is the default banking platform for VC-backed startups, integrating naturally with the fundraising ecosystem [Confidence: B | Source: Industry consensus from multiple startup banking comparisons | Verified: 2026-02-11]
2. **Free wires**: Both domestic and international wire transfers are free, important for supplier payments (see M6 Supply Chain — international marine plasma suppliers)
3. **Treasury management**: When cash reserves grow (post-fundraising), Mercury Treasury provides yield without moving to a separate platform
4. **Developer API**: Enables future automation of financial reporting and reconciliation
5. **Startup-specific features**: Integrated cap table viewer, investor update templates, and fundraising tools
6. **Design/UX**: Consistently rated as best-in-class for banking interface

**Mercury Limitations to Know:**
- No interest on standard checking (need $250K+ for Treasury)
- Stricter country restrictions post-2024 compliance changes
- Tech-focused approval process (supplement brand may need additional documentation)
- FDIC coverage via partner banks (not direct FDIC member)

### Alternative: Relay (If Bootstrapping)

If IonWave takes the bootstrap path (no immediate VC fundraising):
- Relay's 20 free sub-accounts enable Profit First budgeting methodology (aligns with M25 Financial Operations)
- $0 cost, $0 minimum
- Strong QuickBooks + Gusto integration
- Cash deposit support (irrelevant for D2C but useful for events/pop-ups)
- Wire fees are low ($5-8 vs. free at Mercury)

---

## Account Structure (Recommended)

### Minimum Viable Account Setup (Day 1)

| Account | Purpose | Platform |
|---------|---------|----------|
| **Operating Account** | Day-to-day expenses, payroll, vendor payments | Mercury (primary checking) |
| **Revenue Account** | Shopify payouts deposited here | Mercury (separate checking) |
| **Tax Reserve** | Set aside estimated taxes monthly | Mercury (separate checking) |

### Phase 2 Account Setup (Post-Seed)

| Account | Purpose | Platform |
|---------|---------|----------|
| Operating Account | Day-to-day expenses | Mercury |
| Revenue Account | Shopify payouts | Mercury |
| Tax Reserve | Quarterly tax payments | Mercury |
| Payroll Account | Employee payroll funding | Mercury (or Gusto funding account) |
| Emergency Reserve | 3-6 months operating expenses | Mercury Treasury (if >$250K balance) |

[Confidence: C | Source: M25 Financial Operations bookkeeping setup; standard startup account structure | Verified: 2026-02-11]

---

## Setup Checklist

### Pre-Requirements (Before Opening Account)

- [ ] Delaware Certificate of Incorporation (filed and returned)
- [ ] EIN letter from IRS
- [ ] Organizational board resolution authorizing bank account opening
- [ ] Photo ID of authorized signers
- [ ] Company address (can be registered agent address initially, but operating address preferred)

### Account Opening Process

**Mercury:**
1. Apply online at mercury.com (~10 minutes)
2. Upload: Certificate of Incorporation, EIN letter, personal ID
3. Approval timeline: 1-3 business days (can take longer for non-tech companies)
4. Fund account: Initial deposit (no minimum required)
5. Order debit card (physical + virtual)
6. Set up Shopify payout connection
7. Connect to QuickBooks/Xero

**Backup Plan**: If Mercury declines the application (possible for non-tech supplement company), apply at:
- Relay (immediate backup, no restrictions)
- Novo (startup-friendly, free)
- Traditional bank (Chase, SVB successor) as last resort

### Post-Account-Opening Tasks

- [ ] Connect Shopify payout to Revenue Account [Confidence: A | Source: Shopify payout settings | Verified: 2026-02-11]
- [ ] Connect accounting software (QuickBooks or Xero) [Confidence: A | Source: M25 Financial Operations | Verified: 2026-02-11]
- [ ] Set up automatic tax reserve transfer (% of revenue → Tax Reserve account)
- [ ] Order corporate cards for authorized spenders
- [ ] Set up account alerts (low balance, large transactions, international transfers)
- [ ] Add co-founder/authorized signer if applicable
- [ ] Enable two-factor authentication on all banking accounts
- [ ] Document banking credentials in secure password manager (1Password, Bitwarden)

---

## Payment Processing Integration

| Payment Flow | Service | Connection |
|-------------|---------|------------|
| Customer payments → IonWave | Shopify Payments (Stripe) | Automatic — built into Shopify |
| Shopify payouts → Bank | Mercury Revenue Account | Configure in Shopify Admin > Payments |
| Supplier payments | Mercury ACH/Wire | Manual or scheduled transfers |
| Payroll | Gusto → Mercury Payroll Account | Gusto pulls from linked account |
| Tax payments | Mercury Tax Reserve → IRS/State | Manual quarterly estimated payments |
| Ad spend | Mercury Corporate Card | Connect to Meta/Google ad accounts |

### Payout Schedule Recommendation

- Shopify default: 2-business-day payouts
- Recommendation: Keep 2-day payout schedule for healthy cash flow
- Monitor: Shopify may hold funds if dispute rate exceeds thresholds

---

## Banking Security Checklist

| Security Measure | Status | Notes |
|-----------------|--------|-------|
| Two-factor authentication (2FA) | Required | Enable on all banking accounts |
| Unique, strong password | Required | Generated by password manager |
| Authorized signer controls | Required | Only named signers can transfer funds |
| Transaction alerts | Recommended | Set for >$1,000, international transfers, new payees |
| IP allowlisting (if available) | Optional | Restrict access to known networks |
| Regular account reconciliation | Required | Weekly at minimum (see M25) |
| Separate credentials from personal accounts | Required | Corporate email for banking access |

---

## Cost Summary

| Item | Cost | Frequency |
|------|------|-----------|
| Mercury account | $0 | Monthly |
| Mercury corporate cards | $0 | Monthly |
| Wire transfers (Mercury) | $0 | Per transaction |
| ACH transfers | $0 | Per transaction |
| Shopify Payments processing | 2.9% + $0.30 per transaction | Per transaction |
| QuickBooks connection | $0 (included in QBO subscription) | Monthly |
| **Total banking cost** | **$0/month** | Ongoing |

**Note**: Actual cost of banking is $0 at Mercury. The real costs are in payment processing (Shopify Payments at 2.9% + $0.30) which is a Shopify/Stripe cost, not a banking cost. [Confidence: B | Source: Mercury pricing, Shopify Payments pricing | Verified: 2026-02-11]

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path |
|-----|--------|-------------|
| Mercury approval for supplement company unconfirmed | MEDIUM | Apply early; have Relay as backup |
| International payment needs for marine plasma suppliers | MEDIUM | Confirm Mercury international wire capabilities for supplier countries |
| Sales tax filing tool integration not confirmed | LOW | Confirm compatibility with TaxJar/Avalara/Shopify Tax |
| High-yield savings options not evaluated | LOW | Not relevant until significant cash reserves ($100K+) |
