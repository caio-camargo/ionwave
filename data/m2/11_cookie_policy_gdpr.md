# M2 Tab 11: Cookie Policy & GDPR Compliance — IonWave

**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Claude (TWP-001 v2.0.0)
**Confidence Floor**: B (well-documented GDPR/ePrivacy requirements; implementation specifics at C)
**Status**: AI Draft — NOT FOR USE WITHOUT LEGAL REVIEW

---

## Cookie Policy Framework

### Cookie Categories

IonWave's Shopify D2C store will use cookies in these categories:

| Category | Consent Required (GDPR) | Consent Required (CCPA) | Examples |
|----------|------------------------|------------------------|----------|
| **Strictly Necessary** | No | No | Cart session, authentication, security, load balancing |
| **Functional** | Yes (GDPR) | No | Language preferences, recently viewed products |
| **Analytics** | Yes (GDPR) | Opt-out right (CCPA) | GA4, Shopify analytics, heatmaps |
| **Marketing/Advertising** | Yes (GDPR) | Opt-out right (CCPA) | Meta Pixel, Google Ads, TikTok Pixel, Klaviyo tracking |

[Confidence: B | Source: GDPR Art. 5-7, ePrivacy Directive Art. 5(3), CCPA 2026 amendments | Verified: 2026-02-11]

### IonWave Cookie Inventory (Projected)

| Cookie | Category | Provider | Duration | Purpose |
|--------|----------|----------|----------|---------|
| `_shopify_s` | Necessary | Shopify | Session | Cart session management |
| `_shopify_y` | Necessary | Shopify | 1 year | Site persistence |
| `cart_token` | Necessary | Shopify | 14 days | Shopping cart |
| `_tracking_consent` | Necessary | Shopify | 1 year | Consent preferences |
| `_ga` | Analytics | Google Analytics 4 | 2 years | Visitor identification |
| `_gid` | Analytics | Google Analytics 4 | 24 hours | Session identification |
| `_fbp` | Marketing | Meta Pixel | 90 days | Facebook ad targeting |
| `_fbc` | Marketing | Meta Pixel | 90 days | Click attribution |
| `_gcl_au` | Marketing | Google Ads | 90 days | Conversion tracking |
| `_kla_id` | Marketing | Klaviyo | 2 years | Email attribution |
| `_tt_enable_cookie` | Marketing | TikTok Pixel | 13 months | TikTok ad tracking |

[Confidence: C | Source: Standard Shopify D2C cookie inventory; actual cookies depend on installed apps | Verified: 2026-02-11]

---

## Consent Management Implementation

### GDPR Consent Requirements

**Principles:**
1. **Prior consent**: Marketing/analytics cookies must not fire until user gives affirmative consent [Confidence: A | Source: GDPR Art. 6-7, CJEU Planet49 ruling | Verified: 2026-02-11]
2. **Granular choice**: Users must be able to accept/reject each category independently
3. **Easy rejection**: Rejecting cookies must be as easy as accepting them (no dark patterns). CNIL fined Google EUR 100M for making rejection harder than acceptance. [Confidence: A | Source: CNIL Google decision 2021, CPPA Honda enforcement 2025 | Verified: 2026-02-11]
4. **No pre-checked boxes**: Consent checkboxes must be unchecked by default
5. **Withdrawal as easy as giving**: One-click preference withdrawal
6. **Documentation**: Store proof of consent for each user

### Cookie Banner Design Requirements

**Compliant Banner Structure:**

```
Layer 1 (Banner):
┌─────────────────────────────────────────────┐
│ We use cookies to improve your experience.  │
│ [Accept All]  [Reject All]  [Preferences]   │
│ Learn more: Cookie Policy link               │
└─────────────────────────────────────────────┘

Layer 2 (Preferences panel — opened by "Preferences"):
┌─────────────────────────────────────────────┐
│ Cookie Preferences                           │
│                                              │
│ ☑ Strictly Necessary (always on)             │
│ ☐ Functional Cookies                         │
│ ☐ Analytics Cookies                          │
│ ☐ Marketing Cookies                          │
│                                              │
│ [Save Preferences]  [Accept All]             │
└─────────────────────────────────────────────┘
```

**Critical Design Rules:**
- "Reject All" button must have equal visual prominence to "Accept All" (same size, color contrast, position)
- No "cookie wall" (do not block site access for refusing cookies)
- No nudging (do not use red/green color coding to encourage acceptance)
- Mobile-responsive design
- Re-consent after 12 months (GDPR best practice)

### US State Law Consent Requirements (2026)

**Global Privacy Control (GPC):**
- 12+ states now require honoring GPC signals as opt-out of sale/sharing [Confidence: B | Source: secureprivacy.ai, CPPA regulations | Verified: 2026-02-11]
- Implementation: CMP must detect `Sec-GPC: 1` header and automatically suppress marketing cookies for those users
- California requires visible confirmation that opt-out was processed [Confidence: B | Source: CPPA 2026 mandatory confirmation requirement | Verified: 2026-02-11]

**"Do Not Sell" Link:**
- Required in website footer (CCPA) [Confidence: A | Source: CCPA Section 1798.135 | Verified: 2026-02-11]
- Some states require combined "Do Not Sell or Share My Personal Information" language
- Link should open consent preference center or dedicated opt-out page

---

## Google Consent Mode v2

**Required for Google Ads and GA4 in EU/EEA from March 2024:**

| Signal | Default (No Consent) | After Consent |
|--------|---------------------|---------------|
| `analytics_storage` | denied | granted |
| `ad_storage` | denied | granted |
| `ad_user_data` | denied | granted |
| `ad_personalization` | denied | granted |

**Implementation**: CMP must send these signals to Google Tag Manager. Without Consent Mode v2, Google will not process EU user data for ads or analytics. [Confidence: A | Source: Google Consent Mode v2 documentation | Verified: 2026-02-11]

**IonWave Impact**: Server-side tracking (CAPI for Meta, server-side GTM) helps recover some measurement lost from consent denial, but cannot bypass consent requirements. Server-side tracking still requires legal basis. [Confidence: B | Source: M9 Ecommerce Infra tracking architecture | Verified: 2026-02-11]

---

## Cookie Policy Document Structure

### Required Sections

1. **What are cookies**: Plain-language explanation
2. **Why we use cookies**: Purpose for each category
3. **Cookie inventory table**: Full list with name, provider, purpose, duration, category
4. **How to manage cookies**: Browser settings, CMP preferences, GPC
5. **Third-party cookies**: Who sets them and why
6. **Updates to this policy**: How changes are communicated
7. **Contact information**: Who to contact about cookie-related questions

### Placement Requirements

- Cookie banner: Every page, every visit (until consent given)
- Cookie policy link: Banner + website footer + privacy policy
- "Do Not Sell" link: Website footer (always visible)
- Consent preferences link: Website footer (allow re-opening CMP at any time)

---

## Implementation Checklist

| Task | Status | Priority | Notes |
|------|--------|----------|-------|
| Select CMP (Termly, Cookiebot, or similar) | Pending | P0 | See Tab 10 comparison |
| Install CMP on Shopify store | Pending | P0 | Before any marketing pixels are active |
| Configure cookie categories in CMP | Pending | P0 | Match categories above |
| Implement Consent Mode v2 (Google) | Pending | P0 | Required for EU Google Ads/GA4 |
| Configure GPC signal detection | Pending | P0 | 12+ states require honoring |
| Run automated cookie scan | Pending | P1 | CMP auto-detects cookies on site |
| Draft cookie policy document | Pending | P1 | Use framework above |
| Attorney review of cookie policy | Pending | P1 | Part of broader privacy review |
| Add "Do Not Sell" footer link | Pending | P0 | CCPA requirement |
| Add "Manage Cookie Preferences" footer link | Pending | P0 | GDPR best practice |
| Test banner across devices (desktop, mobile, tablet) | Pending | P1 | Ensure mobile-responsive design |
| Set up consent logging | Pending | P1 | Store proof of consent per user |

---

## Dark Patterns to Avoid

| Dark Pattern | Why It's Problematic | Fine Risk |
|-------------|---------------------|-----------|
| Pre-checked consent boxes | Violates GDPR Art. 7 (consent must be freely given) | Up to 4% turnover |
| "Accept" large button, "Reject" small text link | Unequal prominence = dark pattern | CNIL EUR 100M+ precedent |
| Cookie wall (no access without consent) | EDPB guidance says this is generally non-compliant | Regulatory action |
| Confusing double negatives | "Uncheck to not opt out" = deceptive | Regulatory action |
| Hidden reject option (multiple clicks) | CPPA fined Honda for 2-step reject vs. 1-step accept | $632,500+ precedent |
| Auto-accept timer | "Consent deemed after 10 seconds" = invalid | Regulatory action |
| Misleading category names | "Essential for experience" for marketing cookies | Regulatory action |

[Confidence: B | Source: CNIL Google/Amazon decisions, CPPA Honda enforcement, EDPB guidelines | Verified: 2026-02-11]

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path |
|-----|--------|-------------|
| Actual cookie inventory not scanned | HIGH | Run CMP auto-scan after Shopify store setup |
| EU market entry timeline unknown | MEDIUM | Determines urgency of full GDPR implementation |
| Consent rate benchmarks not established | LOW | Monitor after launch; typical opt-in rate is 40-60% |
| Server-side tracking consent implications | MEDIUM | Legal review of CAPI/server-side tracking under GDPR |
| ePrivacy Regulation (replacing Directive) still pending | LOW | Monitor EU legislative progress; ePrivacy Directive remains current law |
