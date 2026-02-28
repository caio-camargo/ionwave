# CRM Architecture & Customer Data Model

**TUP**: M19 — Customer Lifecycle & CRM
**Version**: 1.0.0
**Last Updated**: 2026-02-07
**Source Tabs**: 451 (CRM Architecture), 452 (Customer Data Model), 455 (CRM Tab Map)

---

## 1. The Model IS the CRM

### Philosophy

Most companies treat CRM as a tool — Salesforce, HubSpot, a database you bolt on.

IonWave treats CRM as **architecture**. The entire ops model is the CRM. Every tab that touches a customer — ads, landing pages, email sequences, product experience, support, retention, referral — is a node in a single system that manages the complete customer relationship from first impression to lifetime advocacy.

The CRM is not a tool you add. The CRM is the business itself, viewed from the customer's perspective.

### Why This Matters for a Pre-Revenue Brand

This architectural view prevents the most common DTC mistake: building disconnected tools that create data silos. When you treat CRM as architecture from Day 1:

- Every customer touchpoint has a defined owner (which TUP governs it)
- Data flows are designed before tools are purchased
- Stage transitions trigger specific actions across multiple systems
- No customer falls through cracks between departments

### IonWave's CRM Stack (Phase-Gated)

| Phase | Trigger | Stack | Monthly Cost |
|-------|---------|-------|-------------|
| **Phase 1: Foundation** | Day 1 (pre-revenue) | Shopify + Klaviyo + Recharge | $50-150/mo |
| **Phase 2: Support** | First support ticket | + Gorgias Basic | $110-210/mo |
| **Phase 3: Intelligence** | 500+ customers with 6+ months of orders | + Lifetimely (cohort/LTV) | $200-400/mo |
| **Phase 4: Segmentation** | 500+ customers with 180+ days history | + Tresl Segments (RFM) | $300-500/mo |
| **Phase 5: Scale** | 5,000+ customers | + Peel Analytics OR Triple Whale | $1,000-2,000/mo |

**Principle**: No tool is purchased until the data it requires exists. Tool triggers are based on **customer count and data maturity**, not revenue. Revenue milestones are unreliable proxies — a brand at $100K revenue with 200 customers needs different tools than one at $100K with 2,000 customers. *(U4: Tool triggers by customer count, not revenue.)*

**What Shopify + Klaviyo Handle Without Additional Tools**:
- Unified customer profiles (created automatically on email/phone share)
- Basic segmentation (custom properties, tags, purchase history)
- Email/SMS automation triggers
- SSL encryption + data encryption at rest
- GDPR/CCPA deletion APIs
- Basic cohort analytics (Shopify Reports)

---

## 2. Customer Lifecycle Stages

IonWave uses a **10-stage lifecycle model** that maps the complete customer relationship. Each stage has a clear definition, transition triggers, goals, key metrics, and governing TUPs.

| Stage | Customer State | Goal | Key Metrics | Governing TUPs |
|-------|---------------|------|-------------|-----------------|
| **0. Unknown** | Has never heard of us | Create awareness | Impressions, reach, CPM | M7 (Ads), M12 (Content), M14 (UGC), M13 (Influencer) |
| **1. Aware** | Seen an ad or content, hasn't clicked | Earn attention | Hook rate, video views, engagement | M8 (VSL), M12 (Content), M7 (Ads Creative Testing) |
| **2. Interested** | Clicked through, on site, browsing | Capture intent | CTR, time on site, pages viewed, email capture rate | M6 (Landing Page), M5 (Shopify), M17 (Lead Capture) |
| **3. Considering** | Added to cart or entered email, hasn't purchased | Remove objections | Cart abandonment rate, email open rate, return visits | M17 (Abandoned Cart), M7 (Retargeting) |
| **4. First Purchase** | Just bought for the first time | Deliver exceptional first experience | CVR, AOV, CPA, time to ship | M4 (Fulfillment), M17 (Post-Purchase), M11 (Unboxing) |
| **5. Experiencing** | Has product, using it | Exceed expectations | NPS, product satisfaction, support tickets | M3 (Product Quality), M20 (CS Playbook), M17 (Check-in) |
| **6. Retained** | Bought 2+ times | Build habit | Repeat purchase rate, LTV, subscription rate | M21 (Retention), M17 (Replenishment), M10 (Subscription Offers) |
| **7. Advocate** | Actively recommends us | Amplify their voice | Referral rate, UGC submissions, review count | M26 (Referral), M14 (UGC), M27 (Reviews) |
| **8. Lapsed** | Was a customer, hasn't purchased in 60+ days | Win back | Win-back conversion rate, reactivation cost | M17 (Winback), M21 (Reactivation) |
| **9. Churned** | Gone, unlikely to return | Learn from loss | Churn rate, churn reasons, exit survey data | M20 (Churn Analysis), M17 (Sunset) |

### Stage Transition Triggers

| Transition | Trigger | Data Source | Automation |
|------------|---------|-------------|------------|
| Unknown → Aware | Ad impression or content view | Meta Pixel, Google Analytics | Automatic |
| Aware → Interested | Click-through to site | UTM tracking, Shopify | Automatic |
| Interested → Considering | Email captured OR add-to-cart | Klaviyo, Shopify | Automatic |
| Considering → First Purchase | Order placed | Shopify | Automatic |
| First Purchase → Experiencing | Order delivered | Fulfillment tracking | Automatic (3-5 day delay post-shipment) |
| Experiencing → Retained | 2nd order placed within 60 days | Shopify | Automatic |
| Retained → Advocate | Referral generated OR UGC submitted OR NPS 9-10 | Referral program, UGC platform, Survey | Automatic |
| Any Active → Lapsed | 60+ days since last purchase (one-time) OR subscription cancelled 45+ days | Computed daily | Klaviyo scheduled segment |
| Lapsed → Churned | Win-back flow completed, no response (90+ days total) | Klaviyo flow completion | Automatic |
| Churned → Re-activated | New purchase after churn | Shopify | Automatic (resets to Retained) |

### Supplement-Specific Timing

Standard lifecycle timing doesn't apply to supplements. The 30-day consumption cycle creates unique stage boundaries:

- **First Purchase → Retained**: Must happen within 45-60 days (1.5× consumption cycle), not the typical 90 days for fashion/CPG
- **At-Risk trigger**: 45+ days for one-time buyers (product should be depleted by Day 30)
- **Lapsed definition**: 60+ days (2× consumption cycle)
- **NPS timing**: Day 30 (not Day 14 like typical e-commerce — supplements need time to show results)
- **Replenishment flow**: Starts Day 20 (5 days before expected depletion)

### Non-Linear Customer Paths *(U3)*

The 10-stage model is a **measurement framework**, not a prediction that every customer follows the sequence. Real customers take shortcuts, skip stages, and oscillate:

**Common Shortcut Paths**:
- **Influencer impulse**: Unknown → First Purchase (skips Aware, Interested, Considering entirely)
- **Instant advocate**: First Purchase → Advocate (loves product immediately, tells friends before repeat buying)
- **Subscription direct**: First Purchase → VIP (converts to subscription on first order)

**Oscillation Patterns**:
- **At-Risk ↔ Retained**: Customer pauses subscription, restarts a month later, pauses again. May oscillate 3-4 times before either stabilizing or churning.
- **Lapsed → Active → Lapsed**: Seasonal buyers (e.g., summer hydration) who purchase cyclically.

**Implication**: Don't optimize exclusively for forward linear movement. Track lateral and reverse transitions too. A customer who oscillates between Retained and At-Risk 3 times is fundamentally different from one who goes At-Risk once and churns.

---

## 3. CRM Function Mapping

The ops model's TUPs map to 7 CRM functions that span the lifecycle:

| CRM Function | Lifecycle Stages | Key TUPs | Purpose |
|-------------|-----------------|----------|---------|
| **ACQUISITION** | 0-1 | M7 (Ads), M8 (VSL), M12 (Content), M14 (UGC), M13 (Influencer) | Get strangers to become aware and interested |
| **CONVERSION** | 2-4 | M6 (Landing Page), M5 (Shopify), M17 (Abandoned Cart), M10 (Pricing) | Turn interest into first purchase |
| **ONBOARDING** | 4-5 | M4 (Fulfillment), M17 (Post-Purchase), M11 (Unboxing), M3 (Product Quality) | Deliver exceptional first experience |
| **RETENTION** | 5-6 | M17 (Klaviyo Sequences), M21 (Retention), M10 (Subscription), M19 (Segmentation) | Build habit, increase frequency |
| **ADVOCACY** | 6-7 | M26 (Referral), M14 (UGC), M27 (Reviews/VOC) | Turn customers into growth engine |
| **RECOVERY** | 8-9 | M17 (Winback), M21 (Reactivation), M20 (Churn Analysis) | Win back or gracefully release |
| **INTELLIGENCE** | All | M19 (Customer Data Model, Metrics, Segmentation), M25 (Analytics), M20 (Support Data) | Understand the whole system |

### Cross-TUP Data Flows

```
M7 (Ads) → UTM/Pixel data → M19 (Acquisition Source Attribution)
M5 (Shopify) → Order data → M19 (LTV Calculation, Cohort Analysis)
M17 (Email) → Engagement data → M19 (Email Engagement Score, Lifecycle Stage)
M20 (Support) → Ticket data → M19 (Support Satisfaction, Churn Risk Score)
M21 (Retention) → Subscription data → M19 (Subscription Status, Retention Cohorts)
M19 (Segments) → Targeting → M7 (Lookalike Audiences), M17 (Segment-specific Flows)
```

---

## 4. Customer Data Model

### Customer Record Fields

Every customer record in the IonWave system contains these fields, sourced and updated by specific systems:

| Field | Source | Updated When | Used By | Privacy Level |
|-------|--------|-------------|---------|---------------|
| **Email** | Opt-in / Purchase | Once | Klaviyo, Support, Fulfillment | PII — encrypted at rest |
| **Name** | Purchase | Once | Fulfillment, Support, Personalization | PII — encrypted at rest |
| **Phone** | Opt-in / Purchase | Once | SMS (Klaviyo), Support | PII — encrypted at rest |
| **Shipping Address** | Purchase | Each order | Fulfillment | PII — encrypted at rest |
| **Lifecycle Stage** | Computed | Every interaction | All marketing automation, reporting | Internal |
| **First Touch Source** | UTM / Meta pixel | Once (at acquisition) | Attribution, CAC by channel | Internal |
| **Total Orders** | Shopify | Every purchase | Segmentation, VIP tiers | Internal |
| **Total LTV** | Shopify | Every purchase | Retention targeting, ROI analysis | Internal |
| **Days Since Last Purchase** | Computed | Daily | Winback triggers, churn prediction | Internal |
| **Subscription Status** | Shopify / Recharge | On change | Retention, forecasting | Internal |
| **NPS Score** | Survey | Post-purchase + quarterly | Product quality, advocate identification | Internal |
| **Support Tickets** | Gorgias | On ticket | Quality monitoring, experience flags | Internal |
| **Product Feedback** | Survey / Review | On submission | Product development, testimonials | Internal |
| **Referral Count** | Referral program | On referral | Advocate tier, rewards | Internal |
| **Email Engagement** | Klaviyo | Every send | Deliverability, segmentation, sunset | Internal |
| **Ad Engagement** | Meta pixel | Every interaction | Retargeting, lookalike seeds | Internal |
| **Churn Risk Score** | Computed | Weekly | Retention intervention triggers | Internal |
| **RFM Score** | Computed | Monthly | Segmentation, targeting priority | Internal |
| **Activation Status** | Computed (from M20) | Per M20 criteria | Lifecycle stage validation | Internal |

### Data Governance Rules

1. **PII fields** (Email, Name, Phone, Address): Encrypted at rest by Shopify and Klaviyo automatically. No additional encryption configuration needed.
2. **Computed fields** (Lifecycle Stage, Days Since Purchase, Churn Risk, RFM): Recalculated on schedule by Klaviyo or analytics tool.
3. **Data retention**: Follow platform defaults (Shopify retains indefinitely, Klaviyo profiles persist until suppressed).
4. **Deletion requests**: Honor within 30 days via Klaviyo's GDPR deletion tools.
5. **Consent tracking**: Opt-in/opt-out status tracked per channel (email, SMS) in Klaviyo.

### Data Privacy Compliance

**What Shopify + Klaviyo Handle Automatically**:
- SSL encryption in transit
- Data encryption at rest (commercial-grade)
- Data Processing Agreements with Standard Contractual Clauses
- GDPR/CCPA deletion APIs
- Privacy Framework self-certification

**What IonWave Must Configure** (pre-launch):
- Cookie consent banner: Install Consentmo or Pandectes ($9/month on Shopify)
- Privacy policy: Generate from Shopify template, customize for supplement business
- CCPA opt-out page: Enable in Shopify settings
- Klaviyo consent collection: Configure opt-in checkboxes on all forms
- SMS consent: Separate explicit opt-in per TCPA requirements

**Estimated Setup**: 4-8 hours initial, <1 hour/month maintenance.
**Monthly Cost**: $9-29/month (cookie consent app only).

---

## 5. Intelligence Gaps

| Gap | Priority | Validation Path |
|-----|----------|----------------|
| Actual lifecycle stage transition rates | HIGH | Track from first 100 customers |
| Real churn risk score accuracy | HIGH | Validate model after 6 months of data |
| Optimal lifecycle stage count (10 vs. simpler 6-stage) | MEDIUM | Simplify if data shows stages 0-1 and 8-9 are not actionable |
| Customer data model completeness | MEDIUM | Audit after first 500 customers — which fields are actually used for decisions? |
| CRM tab mapping accuracy | LOW | Validate as TUPs are workshopped — some tab assignments may shift |
