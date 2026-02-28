# M9 — Tech Stack & Tools

> Every tool must earn its place. If it doesn't directly drive revenue, reduce cost, or save time — kill it.

## Source

Danilo tabs: 285 (Tech Stack), 288 (Tool Stack Architecture), 292 (Tool Login Credentials)

## Tool Selection Criteria

Before adding ANY tool, answer:

1. **Does it solve a problem I have TODAY?** (Not "might need someday")
2. **Can I measure its ROI within 30 days?**
3. **Does it integrate natively with Shopify?** (API > manual export)
4. **What's the exit cost?** (Data portability, contract lock-in)
5. **Will I actually use it?** (Better to master 5 tools than half-use 15)

**Rule**: No tool gets added during Month 1 unless it's in Core Stack. Growth Stack unlocks at Month 2+. Scale Stack unlocks at $10K+ MRR.

### Theme Performance Budget (U1)

Before installing any app or script, check against these hard limits:

| Budget Item | Limit | Why |
|-------------|-------|-----|
| Total installed apps | **8 max at launch** | Each app injects JS. 10+ apps = 2-3s added load time |
| Total JavaScript payload | **500KB max** (compressed) | Above this, mobile users on 3G suffer. Check in Chrome DevTools → Network → JS |
| External scripts | **3 max** (non-Shopify domains) | Each external script = DNS lookup + connection = 100-300ms |
| Custom fonts | **2 max** | Each font file = 50-100KB. System font stack is fastest |

**Enforcement rule**: If a new app would push you over ANY budget limit, something existing must be removed first. No exceptions. Dawn 2.0+ has built-in sections everywhere — this eliminates the need for most page builder apps.

---

## Phase 0: Core Stack (Launch — $50-100/mo)

These are non-negotiable. You cannot launch without them.

| Tool | Purpose | Cost | Why This One |
|------|---------|------|-------------|
| **Shopify Basic** | Storefront + checkout | $29/mo (annual) | Industry standard for D2C. 2.9% + $0.30 per transaction with Shopify Payments. Eliminates 3rd-party gateway fee |
| **Recharge** or **Skio** | Subscription management | $99/mo + 1.25% | Recharge = market leader, more integrations. Skio = better UX, passwordless login. Either works — pick one and commit |
| **Klaviyo** | Email marketing | Free <250 contacts | Best-in-class Shopify integration. Predictive analytics included. Grows with you — don't switch later |
| **Judge.me** | Reviews/UGC | Free (basic) | Lightweight, fast. Free tier covers launch. Auto-request emails. SEO-friendly structured data |
| **GA4** | Web analytics | Free | Non-negotiable. Server-side tracking setup recommended (see tracking_and_attribution.md) |
| **Meta Ads Manager** | Paid acquisition | Free (ad spend separate) | Primary paid channel for D2C supplement. Pixel + CAPI required |
| **Shopify Payments** | Payment processing | 2.9% + $0.30 | Eliminates extra transaction fees. Includes Shop Pay (highest-converting accelerated checkout) |

**Total Core Stack**: ~$130/mo + transaction fees
**What you DON'T need yet**: SMS, helpdesk, loyalty, A/B testing, advanced analytics

---

## Phase 1: Growth Stack (Month 2+ / First 100 Orders)

Add these one at a time. Each must prove ROI before the next gets added.

| Tool | Purpose | Cost | Unlock Trigger |
|------|---------|------|---------------|
| **Postscript** or **Attentive** | SMS marketing | $25+/mo | Email list > 500 AND email revenue > 20% of total |
| **Microsoft Clarity** | Heatmaps + session replay | Free | First 1,000 sessions. Replaces Hotjar for free |
| **Shopify A/B testing app** | Conversion optimization | $74+/mo (Shoplift/Intelligems) | Only after 500+ monthly sessions. Statistical significance requires traffic |
| **Triple Whale** or **Northbeam** | Multi-touch attribution | $100-300/mo | Ad spend > $3K/mo. Below this, MER + UTMs is sufficient |
| **Gorgias** | Customer support helpdesk | $50/mo | Support volume > 20 tickets/week. Before this, shared inbox works |
| **Canva Pro** | Creative design | $15/mo | When free tier limits hit. Usually Month 2-3 |

**Total Growth Stack**: +$150-300/mo on top of Core
**Decision rule**: Don't add a Growth tool until the unlock trigger is met

---

## Phase 2: Scale Stack ($10K+ MRR)

| Tool | Purpose | Cost | Unlock Trigger |
|------|---------|------|---------------|
| **Smile.io** or **Yotpo** | Loyalty program | $49+/mo | Repeat purchase rate > 25% AND 1,000+ customers |
| **Privy** or **Justuno** | Pop-ups + on-site conversion | Free-$30/mo | Traffic > 5,000/mo AND conversion rate plateauing |
| **Rebuy** or **Also Bought** | Product recommendations | $99+/mo | AOV optimization becomes priority, 3+ SKUs |
| **Richpanel** or **Gorgias Pro** | Advanced support + self-service | $100+/mo | Support team > 1 person |
| **Server-side GTM** | Enhanced tracking | $50-150/mo (GCP hosting) | When ad spend > $5K/mo and attribution accuracy is critical |

**Total Scale Stack**: +$300-600/mo
**Note**: Shopify plan upgrade to "Shopify" ($79/mo) makes sense at ~$10K MRR for lower transaction fees (2.7% vs 2.9%)

---

## Cost Summary by Phase

| Phase | Monthly Cost | Revenue Target |
|-------|-------------|----------------|
| Launch (Month 0-1) | $50-130/mo | Pre-revenue → first sales |
| Growth (Month 2-6) | $200-400/mo | $1K-10K MRR |
| Scale (Month 6-12) | $500-1,000/mo | $10K-50K MRR |
| Mature (Year 2+) | $1,000-2,500/mo | $50K+ MRR |

**Critical rule**: Tech spend should NEVER exceed 5% of revenue. If it does, you're over-tooled.

### Monthly Tool ROI Review (U5)

Starting **Month 2**, review every paid tool monthly:

| Tool | Monthly Cost | What It Produced This Month | One-Sentence ROI |
|------|-------------|----------------------------|-----------------|
| [tool] | $[cost] | [specific output] | [justify or cancel] |

**The one-sentence test**: If you can't articulate the ROI of a paid tool in one sentence, cancel it today. Zombie subscriptions are the #1 silent budget killer for solo founders.

---

## Shopify Plan Comparison (2026)

| Feature | Basic ($29/mo) | Shopify ($79/mo) | Advanced ($299/mo) |
|---------|---------------|-------------------|---------------------|
| Online credit card rate | 2.9% + $0.30 | 2.7% + $0.30 | 2.5% + $0.30 |
| 3rd-party gateway fee | 2.0% | 1.0% | 0.6% |
| Staff accounts | 2 | 5 | 15 |
| Reports | Basic | Standard | Advanced + custom |
| Shipping discount | Up to 77% | Up to 88% | Up to 88% |
| Annual billing discount | ~25% | ~25% | ~25% |

**IonWave recommendation**: Start Basic. Upgrade to Shopify at ~$10K MRR (the 0.2% transaction fee savings pays for the plan at ~$25K/mo GMV).

---

## Deprecated / Avoid

| Tool | Status | Replacement |
|------|--------|-------------|
| Google Optimize | **Shut down Sep 2023** | Shoplift ($74/mo) or Intelligems ($74/mo) for Shopify-native A/B testing |
| Hotjar (paid) | Unnecessary cost | Microsoft Clarity (free, same features) |
| Mailchimp | Poor Shopify integration | Klaviyo (purpose-built for ecommerce) |
| WordPress/WooCommerce | Wrong platform | Shopify (operational simplicity for solo founder) |
| Custom-built solutions | Premature optimization | Use SaaS until $100K+ MRR |

### "Do Not Install" List (U10)

These apps are popular but either redundant with Shopify-native features or not worth the speed cost:

| App Category | Why NOT to Install | What to Use Instead |
|-------------|-------------------|-------------------|
| **SEO apps** (Yoast, SEO Manager) | Shopify handles meta titles, descriptions, sitemaps, canonical URLs natively. These apps add JS for marginal benefit | Shopify's built-in SEO fields. Manual sitemap submission in Google Search Console |
| **Currency converters** | Shopify Markets handles multi-currency natively (on Shopify plan and above) | Shopify Markets (included in plan) |
| **Social proof pop-ups** ("X just bought...") | Annoying UX, minimal conversion lift (<0.5% in most tests), adds 100-200ms load time | Product reviews (Judge.me) provide authentic social proof |
| **Page builder apps** | Dawn 2.0+ has sections everywhere. Page builders add massive JS overhead | Use Dawn's native section editor |
| **Image sliders/carousels** | Users don't interact with them. They slow pages and push content below fold | Static hero image with clear CTA |
| **"Speed optimization" apps** | Ironic — most add their own JS. Shopify's built-in CDN/compression is sufficient | Follow the Speed Optimization Checklist in store_setup_and_launch.md |

---

## Tool Credential Management

### Credential Register Template

| Tool | URL | Email | Password Location | 2FA Enabled | Owner | Recovery Method |
|------|-----|-------|-------------------|-------------|-------|----------------|
| Shopify | admin.shopify.com | [email] | 1Password | Yes | Operator | Recovery codes in vault |
| Klaviyo | klaviyo.com | [email] | 1Password | Yes | Operator | |
| Meta Business | business.facebook.com | [email] | 1Password | Yes | Operator | Business Manager admin |
| GA4 | analytics.google.com | [email] | 1Password | Yes | Operator | Google account recovery |
| Stripe | dashboard.stripe.com | [email] | 1Password | Yes | Studio | |
| Recharge/Skio | [url] | [email] | 1Password | Yes | Operator | |
| 3PL Portal | [url] | [email] | 1Password | No → Fix | Operator | |
| Domain Registrar | [url] | [email] | 1Password | Yes | Studio | |
| Canva | canva.com | [email] | 1Password | No | Operator | |

### Credential Security Rules

1. **Password manager is mandatory** — 1Password, Bitwarden, or equivalent. No exceptions
2. **Unique password per account** — Never reuse passwords across tools
3. **2FA on ALL critical accounts** — Shopify, email, bank, ads, domain. Non-negotiable
4. **Quarterly access review** — Remove unused accounts, rotate passwords for shared accounts
5. **Separate admin from daily-use** — Use a dedicated admin email for business-critical accounts
6. **Document who has access to what** — Update credential register when team changes
7. **Recovery codes stored offline** — Print or store in separate secure location from passwords

### If Someone Leaves the Team

1. Revoke access to ALL tools within 24 hours
2. Change shared passwords
3. Review and update credential register
4. Check for any personal accounts linked to business tools
5. Transfer ownership of any assets they created

---

## Integration Architecture

```
                    ┌──────────────┐
                    │   SHOPIFY    │ ← Source of truth for orders, products, customers
                    │   (Store)    │
                    └──────┬───────┘
                           │
            ┌──────────────┼──────────────┐
            │              │              │
     ┌──────▼──────┐ ┌────▼─────┐ ┌──────▼──────┐
     │  Recharge/  │ │ Shopify  │ │   Klaviyo   │
     │    Skio     │ │ Payments │ │   (Email)   │
     │(Subscript.) │ │ ($$)     │ │             │
     └─────────────┘ └──────────┘ └─────────────┘
                           │
            ┌──────────────┼──────────────┐
            │              │              │
     ┌──────▼──────┐ ┌────▼─────┐ ┌──────▼──────┐
     │  Meta Ads   │ │   GA4    │ │   3PL       │
     │  (Acquire)  │ │(Measure) │ │  (Fulfill)  │
     └─────────────┘ └──────────┘ └─────────────┘
```

**Data flow principle**: Shopify is the hub. Every tool connects TO Shopify, not to each other. This prevents data sync nightmares and makes tool swaps painless.

---

## Decision Log

| Decision | Rationale | Date |
|----------|-----------|------|
| Shopify over WooCommerce | Operational simplicity, native payments, ecosystem | Workshop |
| Klaviyo over Mailchimp | Purpose-built ecommerce, predictive analytics, Shopify-native | Workshop |
| Microsoft Clarity over Hotjar | Free, same core features, no reason to pay | Workshop |
| Recharge/Skio over custom | Subscription is core to IonWave model — needs dedicated tool | Workshop |
| Start Basic, upgrade later | 0.2% fee difference doesn't justify $50/mo until ~$25K GMV | Workshop |
