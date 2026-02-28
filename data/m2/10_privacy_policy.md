# M2 Tab 10: Privacy Policy Template — IonWave D2C E-Commerce

**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Claude (TWP-001 v2.0.0)
**Confidence Floor**: B (well-documented regulatory requirements; specific implementation at C)
**Status**: AI Draft — NOT FOR USE WITHOUT LEGAL REVIEW

---

## Regulatory Landscape (2026)

### Laws IonWave Must Comply With

| Regulation | Applicability | Key Trigger | Penalty |
|-----------|---------------|-------------|---------|
| **CCPA/CPRA** (California) | If >$26.6M revenue OR 100K+ CA consumers OR 50%+ revenue from data sales | Any CA customer = potential applicability | Up to $7,500/intentional violation |
| **GDPR** (EU/EEA) | If offering goods to EU residents or monitoring EU behavior | Any EU website visitor = potential applicability | Up to 4% global turnover or EUR 20M |
| **State Privacy Laws (24+ states by 2026)** | Varies by state — Indiana, Kentucky, Rhode Island effective Jan 1, 2026 | State-specific thresholds | Varies |
| **CAN-SPAM** | All commercial emails | Any marketing email | Up to $51,744/violation |
| **TCPA** | SMS/text marketing | Any SMS marketing (see M17) | $500-$1,500/violation |
| **COPPA** | Children under 13 | If collecting data from minors | Up to $50,120/violation |

[Confidence: B | Source: secureprivacy.ai 2026 compliance guides, CPPA statute effective 2026-01-01, Digital Commerce 360 2026 analysis | Verified: 2026-02-11]

**Practical Recommendation**: Implement the strictest standard (GDPR) as baseline. This covers most other regulations by default. [Confidence: B | Source: Privacy compliance best practice — uniform standards exceed toughest requirement | Verified: 2026-02-11]

---

## Privacy Policy Framework

### Section 1: Identity and Contact Information

**Required elements:**
- Legal company name and registered address
- Data protection contact (email, physical address)
- GDPR: Name a Data Protection Officer if required (typically not required for small D2C businesses, but good practice to name a contact)

### Section 2: Data Collection

**Categories of data IonWave collects:**

| Data Category | Examples | Collection Method | Legal Basis (GDPR) |
|---------------|----------|-------------------|---------------------|
| Identity data | Name, email, shipping address | Account creation, checkout | Contract performance |
| Payment data | Credit card (processed by Stripe/Shopify Payments) | Checkout | Contract performance |
| Transaction data | Order history, subscription status | Purchases | Contract performance |
| Health data (sensitive) | Supplement preferences, health goals | Quizzes, surveys | Explicit consent |
| Device/Technical data | IP address, browser type, device | Automatic collection | Legitimate interest |
| Usage data | Pages visited, time on site | Analytics cookies | Consent (GDPR) |
| Marketing data | Email engagement, ad interactions | Email/ad platforms | Consent |
| Communication data | Customer support messages | Support interactions | Contract performance |

**Supplement-Specific Consideration — DIALOGUE UPGRADE**: If IonWave collects health-related data through product recommendation quizzes or health goal surveys, this constitutes "sensitive personal information" under CCPA and "special category data" under GDPR. This triggers:
1. **Explicit opt-in consent** required (not just legitimate interest) [Confidence: A | Source: GDPR Art. 9 | Verified: 2026-02-11]
2. **Data Protection Impact Assessment (DPIA)** mandatory under CPPA 2026 rules for sensitive data processing [Confidence: B | Source: CPPA 2026 regulatory amendments | Verified: 2026-02-11]
3. **Cross-reference M19 CRM**: Health data requires special handling in CRM architecture — segregated storage, access controls, retention limits
4. **BIPA WARNING**: If IonWave ever processes biometric data (e.g., health tracking integration), Illinois Biometric Information Privacy Act creates strict liability of $1,000-$5,000 per violation. Avoid biometric data collection unless specifically counseled. [Confidence: B | Source: 740 ILCS 14, BIPA | Verified: 2026-02-11]
5. **Budget**: Health data DPIA + compliance setup estimated at $3,000-5,000 with counsel

### Section 3: Purposes of Processing

**Be specific — avoid vague "business purposes" language:**
- Fulfill and deliver orders
- Process payments
- Manage subscriptions
- Send transactional communications (order confirmations, shipping updates)
- Send marketing communications (with consent)
- Improve website and products (analytics)
- Prevent fraud
- Comply with legal obligations
- Customer support

### Section 4: Data Sharing

**Who IonWave shares data with:**

| Recipient Category | Purpose | Data Shared | Safeguards |
|-------------------|---------|-------------|------------|
| Payment processors (Stripe/Shopify Payments) | Process payments | Payment data | PCI DSS compliant |
| Shipping carriers (USPS, UPS, FedEx) | Deliver orders | Name, address | Standard carrier DPA |
| Email platform (Klaviyo) | Marketing emails | Email, name, purchase history | DPA in place |
| Analytics (GA4, server-side) | Website analytics | Usage data (anonymized where possible) | Consent required (GDPR) |
| Ad platforms (Meta, Google) | Advertising | Hashed data via CAPI | Consent required |
| 3PL (fulfillment partner) | Fulfill orders | Name, address, order details | DPA in place |
| Customer support (Gorgias/Zendesk) | Support tickets | Communication data | DPA in place |

**Never share or sell:** IonWave does not sell personal data. [Confirm this is accurate for business model.] [Confidence: C | Source: IonWave business model is product sales, not data monetization | Verified: 2026-02-11]

### Section 5: Consumer Rights

**Rights that must be supported (superset of GDPR + CCPA + state laws):**

| Right | GDPR | CCPA | State Laws | IonWave Implementation |
|-------|------|------|------------|----------------------|
| Access (know what data you have) | Yes | Yes | Most | Self-service dashboard + DSAR email |
| Deletion | Yes | Yes | Most | Automated deletion workflow |
| Correction | Yes | Yes | Some | Self-service + email |
| Portability | Yes | Yes | Some | Export to common format |
| Opt-out of sale/sharing | N/A | Yes | Most | "Do Not Sell" link + GPC |
| Opt-out of targeted advertising | N/A | Yes | Some | Cookie consent banner |
| Restrict processing | Yes | No | Some | Email request |
| Object to processing | Yes | No | No | Email request |
| Withdraw consent | Yes | Yes | Most | One-click in preferences |
| Non-discrimination | N/A | Yes | Most | Cannot penalize for exercising rights |

**Global Privacy Control (GPC)**: 12+ US states now require honoring GPC signals. IonWave must detect and honor GPC browser signals as opt-out of sale/sharing. [Confidence: B | Source: secureprivacy.ai 2026 guide, CCPA 2026 amendments | Verified: 2026-02-11]

### Section 6: Data Retention

| Data Category | Retention Period | Rationale |
|--------------|-----------------|-----------|
| Account data | Active account + 3 years | Business need + regulatory |
| Transaction data | 7 years | Tax and accounting requirements |
| Marketing data | Until consent withdrawn | Consent-based |
| Analytics data | 26 months | GA4 default maximum |
| Support tickets | 3 years | Pattern analysis, legal defense |
| Health/sensitive data | Until purpose fulfilled or consent withdrawn | Minimization principle |

### Section 7: Data Security

- Encryption in transit (TLS 1.2+) and at rest
- PCI DSS compliance for payment data (via Shopify/Stripe)
- Access controls and role-based permissions
- Regular security audits
- Breach notification procedures (72 hours under GDPR; varies by state)
- Employee/contractor security training

### Section 8: International Transfers (GDPR)

- If data transferred outside EEA, state legal mechanism (Standard Contractual Clauses, adequacy decision)
- US lacks EU adequacy decision (Privacy Shield invalidated; EU-US Data Privacy Framework status should be monitored)
- Shopify and major processors have SCCs in place [Confidence: B | Source: GDPR Chapter V, EU-US DPF status | Verified: 2026-02-11]

### Section 9: Children's Privacy

- IonWave does not knowingly collect data from children under 13 (COPPA)
- Supplement sales restricted to 18+ (IonWave policy)
- Age verification at checkout (simple age gate)
- Some states now restricting supplement sales to minors [Confidence: B | Source: Skadden 2026 regulatory outlook | Verified: 2026-02-11]

### Section 10: Contact and Complaints

- Data protection contact email
- Right to lodge complaint with supervisory authority (GDPR: relevant EU DPA)
- CCPA: Right to contact California Attorney General
- Response timeline: 30 days (GDPR) / 45 days (CCPA)

---

## Implementation Checklist

| Task | Status | Priority | Cost Estimate |
|------|--------|----------|---------------|
| Draft privacy policy using framework above | Pending | P0 | Internal + attorney review |
| Attorney review (privacy-specific) | Pending | P0 | $1,000-3,000 |
| Implement cookie consent banner (CMP) | Pending | P0 | $0-50/mo (OneTrust, Cookiebot, Termly) |
| Implement GPC signal detection | Pending | P0 | Built into most CMPs |
| Create DSAR (Data Subject Access Request) workflow | Pending | P1 | Internal process |
| Add "Do Not Sell My Personal Information" link | Pending | P0 | Footer link (CCPA requirement) |
| Configure data retention policies in tools | Pending | P1 | Platform settings |
| Data Processing Agreements with all vendors | Pending | P1 | Request from each vendor |
| Consent Mode v2 (Google) | Pending | P1 | Required for Google ads/analytics in EU |

---

## Consent Management Platform (CMP) Comparison

| CMP | Cost | Best For | Key Features |
|-----|------|----------|-------------|
| Termly | Free-$25/mo | Small D2C | Simple, Shopify plugin |
| Cookiebot (Usercentrics) | $14-44/mo | GDPR compliance | Auto-scanning, IAB TCF 2.2 |
| OneTrust | $100+/mo | Enterprise | Comprehensive, costly |
| Shopify Native | $0 (built-in) | Basic compliance | Limited customization |

**Recommendation**: Start with Termly or Cookiebot for comprehensive GDPR + CCPA compliance at low cost. Move to OneTrust if international expansion requires it. [Confidence: C | Source: CMP comparison research | Verified: 2026-02-11]

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path |
|-----|--------|-------------|
| Attorney review not completed | CRITICAL | Privacy attorney review before launch ($1-3K) |
| Health data classification uncertain | HIGH | Determine if product quizzes create "sensitive data" processing |
| EU-US Data Privacy Framework status evolving | MEDIUM | Monitor for changes; SCCs as backup |
| State-by-state requirements not fully mapped | MEDIUM | Attorney provides state compliance matrix |
| Vendor DPA audit not completed | MEDIUM | Request DPAs from all data processors (Shopify, Klaviyo, Meta, etc.) |
