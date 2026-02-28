# M9 — Tracking & Attribution

> You can't optimize what you can't measure. But measuring the wrong thing is worse than measuring nothing.

## Source

Danilo tab: 287 (Tracking Setup)

## Cross-TUP Alignment

- **M30** (Analytics & Dashboards): MER is the primary efficiency metric, NOT ROAS (see M30 U2)
- **M14** (Testing & CRO): A/B test tracking requires consistent event taxonomy
- **M17** (Email): Klaviyo attribution vs UTM attribution — understand both

---

## North Star Metric: MER (Marketing Efficiency Ratio)

```
MER = Total Revenue / Total Marketing Spend
```

**Why MER, not ROAS?**

| Metric | Formula | Post-iOS 14.5 Accuracy | Use For |
|--------|---------|----------------------|---------|
| **MER** (primary) | Total Revenue / Total Ad Spend | ~95% (uses actual revenue) | Business-level efficiency. The metric that matters |
| **Platform ROAS** (context only) | Platform-Reported Revenue / Platform Spend | 60-80% (over-reports 20-40%) | Relative campaign comparison WITHIN a platform. Never trust absolute values |
| **Blended ROAS** | Same as MER but branded differently | ~95% | If you see "blended ROAS" anywhere, it means MER. Use MER for clarity |
| **GA4 ROAS** | GA4-Attributed Revenue / Spend | 70-85% (under-reports) | Under-counts due to cookie blocking, consent, ad blockers |

**Decision rule**: When platform ROAS and MER disagree, MER wins. Period. Platform ROAS is useful only for comparing Campaign A vs Campaign B on the SAME platform.

---

## Tracking Architecture

### Pixel + Server-Side (Hybrid Approach)

Post-iOS 14.5, browser-only tracking captures 40-70% of conversions. Server-side tracking recovers this to 85-98%.

```
┌──────────────┐         ┌──────────────┐
│   Browser     │         │   Server     │
│   (Pixel)     │         │   (CAPI)     │
│               │         │              │
│ Meta Pixel    │         │ Meta CAPI    │
│ GA4 gtag      │         │ GA4 MP       │
│ TikTok Pixel  │         │ TikTok EAPI  │
└──────┬───────┘         └──────┬───────┘
       │                        │
       │   Deduplication        │
       │   (event_id match)     │
       └────────┬───────────────┘
                │
         ┌──────▼──────┐
         │  Platform   │
         │  (receives  │
         │  both, de-  │
         │  duplicates)│
         └─────────────┘
```

**Critical**: Both browser pixel AND server-side MUST fire. They use matching `event_id` parameters so platforms deduplicate automatically. If one path is blocked (ad blocker, iOS), the other recovers the event.

---

## Meta Pixel + Conversions API Setup

### Browser Pixel Setup

| # | Task | Status |
|---|------|--------|
| 1 | Create Meta Pixel in Events Manager | ☐ |
| 2 | Install pixel on Shopify (Settings → Customer Events → Meta) | ☐ |
| 3 | Verify pixel fires on all pages (use Meta Pixel Helper extension) | ☐ |
| 4 | Configure standard events: ViewContent, AddToCart, InitiateCheckout, Purchase | ☐ |
| 5 | Set up custom event: SubscriptionCreated (for subscription tracking) | ☐ |
| 6 | Verify Aggregated Event Measurement (AEM) priority: Purchase > InitiateCheckout > AddToCart > ViewContent | ☐ |
| 7 | Verify domain in Meta Business Settings | ☐ |

### Conversions API (Server-Side) Setup

| # | Task | Status |
|---|------|--------|
| 1 | Enable Shopify's native Meta CAPI integration (Settings → Customer Events) | ☐ |
| 2 | Verify Event Match Quality (EMQ) score ≥ 6.0 (target ≥ 8.0) | ☐ |
| 3 | Match parameters: email, phone, fbp, fbc, external_id | ☐ |
| 4 | Verify deduplication: event_id matches between pixel and CAPI | ☐ |
| 5 | Test with Meta Events Manager → Test Events tool | ☐ |
| 6 | Monitor EMQ weekly for first month, then monthly | ☐ |

**EMQ targets**: 6.0 = minimum acceptable. 8.0 = good. 9.0+ = excellent. Below 6.0 = ad optimization severely degraded.

### Implementation Options

| Method | Cost | Complexity | Best For |
|--------|------|-----------|----------|
| **Shopify native Meta integration** | Free | Low | Launch. Start here |
| **Shopify app (Conversios, Tracklution)** | $30-100/mo | Low | If native integration EMQ is < 6.0 |
| **Google Server-side Tag Manager (sGTM)** | $50-150/mo (GCP) | High | $5K+ ad spend/mo, need full control |

**IonWave recommendation**: Start with Shopify's native Meta integration. It handles CAPI automatically. Only upgrade to sGTM when ad spend exceeds $5K/mo and attribution accuracy becomes critical.

---

## GA4 Setup

| # | Task | Status |
|---|------|--------|
| 1 | Create GA4 property (Analytics → Admin → Create Property) | ☐ |
| 2 | Install GA4 on Shopify (Settings → Customer Events → Google) | ☐ |
| 3 | Enable Enhanced Ecommerce events | ☐ |
| 4 | Configure key events: purchase, add_to_cart, begin_checkout, view_item | ☐ |
| 5 | Set up custom dimensions: subscription_status, order_type, customer_type | ☐ |
| 6 | Link Google Ads account (if running Google Ads) | ☐ |
| 7 | Verify data in GA4 Realtime report | ☐ |
| 8 | Set up data retention: 14 months (max free tier) | ☐ |

### GA4 Known Limitations

- Under-reports conversions by 10-25% (ad blockers, consent, cookie expiry)
- Last-click attribution by default (misses top-of-funnel impact)
- Data processing delay: 24-48 hours for some reports
- Consent Mode v2 required for EU traffic (impacts data completeness)
- Free tier: 14-month data retention only

**Use GA4 for**: User behavior analysis, site search, content performance, organic channel analysis.
**Don't use GA4 for**: Absolute revenue numbers (use Shopify) or ad efficiency (use MER).

---

## TikTok Pixel + Events API Setup

| # | Task | Status |
|---|------|--------|
| 1 | Create TikTok Pixel in TikTok Ads Manager | ☐ |
| 2 | Install via Shopify integration (Shopify App Store → TikTok) | ☐ |
| 3 | Configure events: ViewContent, AddToCart, CompletePayment | ☐ |
| 4 | Enable Events API (server-side) through Shopify integration | ☐ |

**Note**: TikTok tracking is lower priority than Meta/GA4. Install if running TikTok ads, otherwise defer.

---

## UTM Parameter Structure

### Standard UTM Taxonomy

| Parameter | Format | Example |
|-----------|--------|---------|
| `utm_source` | Platform name (lowercase) | `meta`, `google`, `tiktok`, `klaviyo`, `organic` |
| `utm_medium` | Channel type | `paid_social`, `paid_search`, `email`, `sms`, `organic_social` |
| `utm_campaign` | Campaign name | `launch_promo`, `retargeting_30d`, `welcome_flow` |
| `utm_content` | Creative/variant identifier | `hook1_lifestyle`, `ugc_testimonial_v2`, `email_hero_a` |
| `utm_term` | Keyword or audience | `interest_fitness`, `lookalike_1pct`, `brand_search` |

### UTM Rules

1. **Always lowercase** — `Meta` ≠ `meta` in analytics. Pick one (lowercase)
2. **No spaces** — Use underscores: `welcome_flow` not `welcome flow`
3. **Be specific but consistent** — Same campaign = same UTM everywhere
4. **Document in a UTM log** — Spreadsheet tracking all active UTMs prevents duplicates
5. **Never UTM internal links** — UTMs on your own site pages break attribution

### Example URLs

```
# Meta prospecting ad
https://ionwave.com?utm_source=meta&utm_medium=paid_social&utm_campaign=launch_prospecting&utm_content=hook3_minerals_static_v2&utm_term=interest_health

# Klaviyo welcome email
https://ionwave.com?utm_source=klaviyo&utm_medium=email&utm_campaign=welcome_flow&utm_content=email_02_benefits

# TikTok ad
https://ionwave.com?utm_source=tiktok&utm_medium=paid_social&utm_campaign=launch_ugc&utm_content=creator_jessica_60s_v1
```

---

## Attribution Model Comparison

| Source | Method | Accuracy (Post-iOS 14.5) | Over/Under Reports | Use For |
|--------|--------|--------------------------|--------------------|---------|
| **Shopify** | Last-click | Medium | Under-reports paid (credits direct/organic) | Order of record. Revenue source of truth |
| **Meta Ads** | 7-day click / 1-day view | Low-Medium | Over-reports 20-40% (view-through inflation) | Relative campaign comparison only |
| **GA4** | Last-click (default) | Medium | Under-reports 10-25% (ad blockers, consent) | User behavior, organic channels |
| **Triple Whale** | Multi-touch (pixel-based) | Medium-High | Most balanced but not perfect | Worth it at $3K+/mo ad spend |
| **MER** (calculated) | Total Revenue / Total Spend | Highest | N/A — it's actual numbers | THE metric. Always calculate |

### When Sources Disagree (They Always Will)

**Scenario**: Meta says ROAS = 4.0x. GA4 says ROAS = 1.8x. MER = 2.5x.

**What's happening**: Meta over-attributes (counts view-through), GA4 under-attributes (misses blocked users). MER is the actual business result.

**Decision framework**:
1. **Business health decisions** → Use MER
2. **Campaign optimization** (which ad is better?) → Use platform metrics for relative comparison
3. **Channel budget allocation** → Use MER + incrementality testing (turn off a channel for 7 days, measure MER impact)
4. **Reporting to stakeholders** → Use MER with platform context

### Awareness vs. Conversion Attribution

| Type | Answers | Measured By | Example |
|------|---------|------------|---------|
| **Awareness** | "How did you first hear about us?" | Post-purchase survey | "I saw a TikTok video" |
| **Conversion** | "What drove you to buy today?" | UTM / last-click | utm_source=meta (clicked a retargeting ad) |

**Why they disagree**: A customer discovers you on TikTok (awareness), browses your site 3 times over 2 weeks, then clicks a Meta retargeting ad and buys (conversion). TikTok gets awareness credit. Meta gets conversion credit. Both are correct — they measure different things.

**Decision rule for channel investment**: 60% weight awareness (survey), 40% weight conversion (UTM). Use this blended view for budget allocation. For campaign-level optimization within a channel, use UTM-only.

---

## Daily Metrics to Track

### Phase 1 (Months 1-3): MVD — 7 Metrics Only

Per M30, solo founders track ONLY these 7 metrics daily:

| Metric | Source | Target | Cadence |
|--------|--------|--------|---------|
| **Revenue** | Shopify | Growing weekly | Daily |
| **Orders** | Shopify | Growing weekly | Daily |
| **Ad Spend** | Meta/Google | Within budget | Daily |
| **CAC** | Calculated (Spend/New Customers) | < $45 (HYP-001) | Daily |
| **Subscription Rate** | Recharge/Skio | > 40% (HYP-003) | Daily |
| **Cash Balance** | Bank account | > 30 days runway | Daily |
| **MER** | Calculated (Revenue/Total Spend) | > 2.0x | Daily |

### Phase 2 (Months 3-6): Add

- AOV (Shopify)
- Email revenue % (Klaviyo)
- Churn rate (Recharge/Skio)
- LTV:CAC ratio (calculated)

See M30 (dashboards_and_reporting.md) for full phase-gated metric progression.

---

## Tracking Verification Checklist

Run this verification after initial setup AND after any tracking changes:

| # | Check | Tool | Pass Criteria |
|---|-------|------|---------------|
| 1 | Meta Pixel fires on all pages | Meta Pixel Helper (Chrome ext) | Green icon, no errors |
| 2 | Meta Purchase event fires on order confirmation | Place test order, check Events Manager | Event appears within 5 min |
| 3 | Meta CAPI events received | Events Manager → Test Events | Server events appear alongside browser events |
| 4 | EMQ score ≥ 6.0 | Events Manager → Data Sources | Score displayed per event |
| 5 | GA4 receives real-time data | GA4 → Realtime report | Events appear as you browse |
| 6 | GA4 purchase event fires | Place test order, check GA4 | purchase event with revenue |
| 7 | UTM parameters carry through | Click a UTM link, check GA4 source/medium | Correct attribution in Realtime |
| 8 | Klaviyo receives order data | Klaviyo → Analytics → Dashboard | Order appears within 15 min |
| 9 | Subscription events tracked | Create test subscription | Recharge/Skio event in Klaviyo |
| 10 | No duplicate events | Events Manager → Overview | Event count matches Shopify orders (±5%) |

**Monthly tracking health check**: Compare Shopify orders vs Meta reported conversions vs GA4 purchases. If any source deviates by > 20%, investigate immediately.

---

## Consent Management (U4)

### Why This Matters (Even for US-Only Brands)

- **Consent Mode v2** is required for any EU traffic (even incidental)
- **California CCPA** requires opt-out capability for California residents
- Implementing consent now future-proofs you as regulations expand
- GA4 uses consent signals for **behavioral modeling** — without consent signals, GA4 can't model missing data

### Implementation

| Regulation | Requirement | Implementation |
|-----------|-------------|----------------|
| **GDPR (EU)** | Opt-in required before any tracking | Cookie consent banner with granular choices. No cookies fire until consent given |
| **CCPA (California)** | Opt-out right. Can track by default but must offer "Do Not Sell" | "Do Not Sell My Personal Information" link in footer. Honor opt-out requests |
| **General best practice** | Decline cookies by default on banner | Shopify's built-in cookie banner or free app (Pandectes, Consentmo) |

### GA4 Consent Mode v2

GA4 supports two consent signals:
- `analytics_storage` — controls GA4 cookies
- `ad_storage` — controls advertising cookies (Meta, Google Ads)

When a user declines consent, GA4 still collects anonymized pings and uses **behavioral modeling** to estimate conversions. This recovers ~70% of lost data vs. no consent mode at all.

**Setup**: Configure in Google Tag Manager or Shopify's native Google integration. Set default state to `denied` for EU visitors, `granted` for US visitors.

### Impact on Tracking Accuracy

| Consent Status | Meta CAPI | GA4 | Shopify |
|---------------|-----------|-----|---------|
| Full consent | Full tracking | Full tracking | Always full (first-party) |
| Partial consent | Server-side still fires (CAPI) | Modeled data (~70% recovery) | Always full |
| No consent | Server-side only | Minimal (basic pageviews only) | Always full |

**This is why MER matters**: Shopify revenue is always 100% accurate regardless of consent. MER (Revenue / Spend) doesn't depend on pixel tracking.

---

## UTM Builder Template (U14)

Create a Google Sheet with these columns to prevent UTM inconsistency:

| Column | Auto-populated? | Example |
|--------|----------------|---------|
| Campaign Name | Manual | launch_prospecting |
| utm_source | Dropdown: `meta`, `google`, `tiktok`, `klaviyo`, `organic` | meta |
| utm_medium | Dropdown: `paid_social`, `paid_search`, `email`, `sms`, `organic_social` | paid_social |
| utm_campaign | Manual (match campaign name) | launch_prospecting |
| utm_content | Manual | hook3_minerals_static_v2 |
| utm_term | Manual (optional) | interest_health |
| **Generated URL** | Formula: `=CONCATENATE(base_url, "?utm_source=", B2, "&utm_medium=", C2, "&utm_campaign=", D2, "&utm_content=", E2, IF(F2="", "", CONCATENATE("&utm_term=", F2)))` | Full URL |

**Dropdown enforcement** prevents the #1 UTM mistake: `Meta` vs `meta` vs `facebook` vs `fb` becoming four different sources in your analytics.

Store this sheet in `03_Marketing/` in Drive.

---

## Ad Spend Safety (U12)

### Meta Daily Spend Cap

Set a **hard daily spend cap at 2x your normal daily budget** in Meta Ads Manager:

- Normal daily budget: $50 → Set cap at $100
- Normal daily budget: $100 → Set cap at $200
- This cap is a SAFETY NET against runaway spend or account hijacking

**Where to set**: Meta Ads Manager → Account Settings → Ad Account → Spending Limit

Also set:
- **Campaign-level daily budget** (your actual budget)
- **Account-level spending limit** (cumulative cap, e.g., $3,000/mo)
- **Payment threshold notifications** (alert at 80% of limit)

---

## Common Tracking Mistakes

1. **Trusting platform ROAS as absolute truth** — It's directional only. MER is truth
2. **Not setting up server-side tracking** — You're losing 30-60% of conversion data. Unacceptable for paid acquisition
3. **Inconsistent UTMs** — `Meta` vs `meta` vs `facebook` = three different sources in your analytics. Standardize
4. **UTMs on internal links** — Breaks session attribution. Only UTM external traffic sources
5. **Ignoring EMQ score** — Below 6.0, Meta can't optimize your ads properly. Fix immediately
6. **Over-tracking early** — 50 custom events with 100 monthly orders = noise. Start with standard events only
7. **Not testing after changes** — Every app install, theme change, or pixel update can break tracking. Always verify
