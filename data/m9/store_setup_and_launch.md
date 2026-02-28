# M9 — Store Setup & Launch

> Launch fast, iterate faster. A live store generating data beats a perfect store generating nothing.

## Source

Danilo tabs: 286 (Store Setup Checklist), 289 (Page Speed Checklist), 290 (Page Speed Checklist1)

---

## Week 1 Setup Sequence (U2)

Don't spend 3 weeks "getting ready." Follow this strict priority order:

| Day | Focus | Key Tasks | Gate |
|-----|-------|-----------|------|
| **Day 1** | Account + Domain | Create Shopify, buy domain, set up business email, connect DNS | Domain resolving + SSL active |
| **Day 2** | Products | Upload product listings, images, descriptions, SKUs, variants | At least 1 product live in admin |
| **Day 3** | Payments + Subscription | Shopify Payments, Shop Pay, PayPal, Recharge/Skio setup | Test transaction successful |
| **Day 4** | Tracking | Meta Pixel + CAPI, GA4, Klaviyo integration | All pixels verified firing |
| **Day 5** | Theme + Polish | Dawn theme customization, brand colors, logo, navigation, legal pages | Store looks professional |
| **Day 6** | Testing | Full test orders (desktop + mobile), email flows, subscription, speed check | All P0 tests pass |
| **Day 7** | Launch | Remove password, verify, go live. NO ADS Day 1 — verify organic checkout | Store is live |

**The rule**: A live store generating data beats a perfect store generating nothing. You can polish AFTER launch. Do not let typography choices delay your launch by 2 weeks.

---

## Store Setup Master Checklist

### 1. Account & Domain Setup

| # | Task | Priority | Notes |
|---|------|----------|-------|
| 1.1 | Create Shopify account (Basic plan, annual billing) | P0 | $29/mo. Use business email, not personal |
| 1.2 | Purchase custom domain | P0 | Buy through Shopify OR transfer existing. .com preferred |
| 1.3 | Connect domain to Shopify | P0 | Update DNS, verify SSL auto-provisions (48hr) |
| 1.4 | Set up business email (Google Workspace) | P0 | hello@, support@, team@ minimum |
| 1.5 | Configure store timezone and currency | P1 | Match your primary market |
| 1.6 | Set up Google Workspace / business email | P1 | Required before any tool signups |

**Gate**: Do not proceed to Theme until domain is resolving and SSL is active.

### 2. Theme & Design

| # | Task | Priority | Notes |
|---|------|----------|-------|
| 2.1 | Install Dawn theme (free) or approved premium theme | P0 | Dawn is optimized for speed. Premium themes: Prestige, Impact, Sense |
| 2.2 | Upload logo (SVG preferred, PNG fallback) | P0 | Follow asset naming: Img_Logo_Primary_v1.svg |
| 2.3 | Configure brand colors in theme settings | P0 | Match brand book (M11). Primary, secondary, accent, background, text |
| 2.4 | Set up typography (max 2 fonts) | P1 | Each font = ~50-100KB load time. System fonts are fastest |
| 2.5 | Configure header/footer navigation | P1 | Keep nav simple: Shop, About, FAQ, Contact. No mega-menus at launch |
| 2.6 | Set up favicon (32x32 PNG) | P1 | Small detail, big professionalism signal |

**Speed consideration**: Every custom font and image adds load time. Dawn's default is already optimized — customize minimally at launch.

### 3. Product Setup

| # | Task | Priority | Notes |
|---|------|----------|-------|
| 3.1 | Create product listings with full descriptions | P0 | Title, description, images, price, compare-at price, SKU |
| 3.2 | Upload product images (min 4 per product) | P0 | Hero, ingredients, lifestyle, size reference. WebP format, <200KB each |
| 3.3 | Set up product variants if applicable | P0 | Size, flavor, quantity. Use Shopify's native variant system |
| 3.4 | Configure inventory tracking | P0 | Track quantity, set low-stock alerts (M24 alignment) |
| 3.5 | Set up collections (manual + automated) | P1 | "All Products", "Best Sellers", "Subscriptions" at minimum |
| 3.6 | Add product tags for filtering | P1 | Standardize: type_supplement, flavor_unflavored, size_30day |
| 3.7 | Set up product reviews (Judge.me) | P1 | Install app, configure auto-request email (7 days post-delivery) |
| 3.8 | Create bundle/multi-pack products if applicable | P2 | Only if pricing strategy includes bundles (see M25) |

**IonWave-specific**: Supplement products MUST include supplement facts image, ingredient list in description, and any required disclaimers. Check FDA/FTC compliance (M22).

### 4. Checkout & Payments

| # | Task | Priority | Notes |
|---|------|----------|-------|
| 4.1 | Activate Shopify Payments | P0 | Eliminates extra transaction fees. Requires EIN/SSN verification |
| 4.2 | Enable Shop Pay | P0 | Highest-converting accelerated checkout. 1.91x higher conversion vs guest |
| 4.3 | Enable PayPal | P0 | ~10-15% of customers prefer it. Free to activate |
| 4.4 | Configure checkout settings | P0 | Guest checkout ON, email marketing opt-in, order notes OFF |
| 4.5 | Set up shipping rates | P0 | Free shipping threshold recommended (e.g., $49+). Flat rate below threshold |
| 4.6 | Configure tax settings | P0 | Auto-calculate US tax. Verify nexus states. Consider Avalara if complex |
| 4.7 | Set up abandoned checkout recovery | P1 | Shopify native (1 email) + Klaviyo flows (3-email sequence, see M17) |
| 4.8 | Test checkout flow end-to-end | P0 | Place a real test order. Verify email confirmations. Test on mobile |

**Critical**: Test the FULL checkout on mobile before launch. 70%+ of D2C traffic is mobile.

### 5. Subscription Setup

| # | Task | Priority | Notes |
|---|------|----------|-------|
| 5.1 | Install Recharge or Skio | P0 | This is core to the IonWave model — not optional |
| 5.2 | Configure subscription plans (frequency options) | P0 | 30-day default, 45-day and 60-day options. 30-day as pre-selected |
| 5.3 | Set subscription discount (10-15% off one-time) | P0 | Industry standard. Test 10% vs 15% once traffic allows (M14) |
| 5.4 | Configure customer portal (manage/pause/skip) | P0 | Self-service reduces support load. Allow pause but make cancel require reason |
| 5.5 | Set up dunning management (failed payments) | P1 | 3 retry attempts over 7 days. SMS + email notification on failure |
| 5.6 | Make subscription the DEFAULT purchase option | P0 | One-time should be available but subscription pre-selected on PDP |
| 5.7 | Implement subscription-first UX pattern (see below) | P0 | Toggle > dropdown. Subscription price shown first |

**IonWave target**: 40% subscription rate (HYP-003). The entire product page should be designed around subscription as the primary action.

#### Subscription UX Pattern (U8)

The product page purchase widget should follow this exact pattern:

```
┌─────────────────────────────────────┐
│  ● Subscribe & Save 15%    $41.65   │  ← PRE-SELECTED, prominent
│    Delivered every 30 days           │
│    [Toggle: 30 / 45 / 60 days]      │
│                                      │
│  ○ One-time purchase       $49.00   │  ← Secondary, less prominent
└─────────────────────────────────────┘
        [ ADD TO CART ]
```

**Key UX rules**:
1. **Subscription price shown FIRST** — the savings are the first thing they see
2. **Toggle, NOT dropdown** — toggles convert 15-20% better than dropdowns for binary choices
3. **Show savings as both % and $** — "$41.65 (Save $7.35)" is more concrete than "Save 15%"
4. **One-time shown as strikethrough or secondary** — visually communicate it's not the recommended option
5. **Subscription pre-selected** — buyer has to actively choose NOT to subscribe

### 6. Apps & Integrations

| # | Task | Priority | Notes |
|---|------|----------|-------|
| 6.1 | Install Klaviyo (email) | P0 | Connect Shopify integration immediately. Sync customers + orders |
| 6.2 | Install Judge.me (reviews) | P0 | Free tier. Auto-request review emails |
| 6.3 | Install Meta Pixel + CAPI | P0 | See tracking_and_attribution.md for full setup |
| 6.4 | Install GA4 | P0 | Enhanced ecommerce tracking. Server-side recommended |
| 6.5 | Install Recharge/Skio (subscription) | P0 | If not done in Step 5 |
| 6.6 | Connect 3PL integration | P1 | ShipBob, ShipStation, or similar. Order auto-sync (M24) |

**App discipline**: Maximum 8-10 apps at launch. Every app adds JavaScript, slows the store, and increases complexity. Audit quarterly — if you haven't used it in 30 days, uninstall.

### 7. Legal & Policies

| # | Task | Priority | Notes |
|---|------|----------|-------|
| 7.1 | Create Privacy Policy | P0 | Shopify generates a template. Customize for your data practices |
| 7.2 | Create Terms of Service | P0 | Include subscription terms, auto-renewal disclosure |
| 7.3 | Create Refund/Return Policy | P0 | 30-day money-back guarantee recommended for supplements |
| 7.4 | Create Shipping Policy | P0 | Processing time, shipping methods, delivery estimates by region |
| 7.5 | Add FDA disclaimer | P0 | "These statements have not been evaluated by the FDA..." — required for supplements |
| 7.6 | Configure cookie consent banner | P1 | Required for GDPR/CCPA. Use Shopify's built-in or free app. Decline cookies by default |

**Supplement-specific**: Consult legal counsel for supplement claims compliance. FTC guidelines apply to all marketing materials, ads, and product descriptions. See M22 (Legal/Compliance) for full framework.

### 8. Pre-Launch Testing Protocol

| # | Test | Pass Criteria | Notes |
|---|------|---------------|-------|
| 8.1 | Place test order (full checkout) | Order completes, confirmation email received | Use Shopify's Bogus Gateway or real card with immediate refund |
| 8.2 | Place test subscription order | Subscription created, portal accessible | Verify customer can manage/pause/cancel |
| 8.3 | Mobile checkout test | Full flow works on iPhone + Android | Test on actual devices, not just browser resize |
| 8.4 | Email flow test | Welcome, order confirm, shipping confirm all fire | Trigger each Klaviyo flow. Check formatting |
| 8.5 | Page speed test | All pages score ≥ 70 on PageSpeed Insights | See Page Speed section below |
| 8.6 | Broken link check | Zero 404 errors | Click every link on every page |
| 8.7 | Cross-browser test | Works on Chrome, Safari, Firefox | Safari matters most (iPhone) |
| 8.8 | Payment test | Shopify Payments + PayPal both process | Test both payment methods |
| 8.9 | Tracking verification | Meta Pixel, GA4, Klaviyo all firing events | Use Meta Pixel Helper, GA4 DebugView |

**Launch rule**: ALL P0 tests must pass before going live. No exceptions.

---

## Page Speed Targets & Optimization

### Core Web Vitals Targets (2026 Standards)

| Metric | Target (Good) | Needs Improvement | Poor |
|--------|--------------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | 2.5s - 4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | ≤ 200ms | 200ms - 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | 0.1 - 0.25 | > 0.25 |

> **Note**: INP replaced FID (First Input Delay) in March 2024. INP measures responsiveness across ALL interactions, not just the first one. It's a harder standard — expect lower scores initially.

### Additional Speed Targets

| Metric | Target |
|--------|--------|
| Time to First Byte (TTFB) | < 200ms |
| First Contentful Paint (FCP) | < 1.8s |
| Total page load time | < 3s |
| PageSpeed Insights score | ≥ 70 (mobile) |

### Why Speed Matters for D2C

- 1-second delay = ~7% fewer conversions
- 40% of visitors abandon sites that take > 3 seconds
- Google uses Core Web Vitals as a ranking factor
- Mobile users (70%+ of D2C traffic) expect < 3 second loads
- Every 100ms improvement in LCP = ~0.4% more conversions

### Speed Testing Tools

| Tool | URL | Use For |
|------|-----|---------|
| **PageSpeed Insights** | pagespeed.web.dev | Primary test tool (Google's own) |
| **GTmetrix** | gtmetrix.com | Detailed waterfall analysis |
| **WebPageTest** | webpagetest.org | Advanced testing, multiple locations |
| **Chrome DevTools** | Built into Chrome | Real-time debugging, network tab |

**Testing cadence**: Test after every theme change, app install, or content update. Monthly baseline check minimum.

### Speed Optimization Checklist

#### Images (Biggest Impact)

- [ ] Compress ALL images before upload (TinyPNG, ShortPixel, or Squoosh)
- [ ] Use WebP format (30-50% smaller than JPEG/PNG) — Shopify auto-converts if supported
- [ ] Lazy load images below the fold (Shopify themes handle this natively)
- [ ] Specify image dimensions in HTML (prevents CLS)
- [ ] Hero images: max 200KB. Product images: max 150KB each
- [ ] Use responsive images (srcset) — Dawn theme does this automatically

#### Code & Scripts

- [ ] Minify CSS and JavaScript (theme-level, usually automatic)
- [ ] Remove unused CSS/JS from uninstalled apps (apps often leave residual code)
- [ ] Defer non-critical JavaScript (analytics, chat widgets, etc.)
- [ ] Reduce redirects (each redirect = 100-300ms added)
- [ ] Limit custom fonts to 2 max (consider system font stack)

#### Hosting & Infrastructure

- [ ] Use Shopify's built-in CDN (automatic, no action needed)
- [ ] Enable browser caching (Shopify handles this)
- [ ] GZIP compression (automatic on Shopify)

#### Third-Party Scripts & Apps

- [ ] Audit ALL installed apps — remove unused ones immediately
- [ ] Limit third-party scripts to essential only (each script = 50-200ms)
- [ ] Load chat widgets lazily (only on pages where needed)
- [ ] Load review widgets asynchronously
- [ ] Test speed BEFORE and AFTER every new app install

**The #1 speed killer on Shopify**: Too many apps. Each app injects JavaScript. 10 apps can add 2-3 seconds of load time. Ruthlessly uninstall anything you're not actively using.

#### Shopify-Specific Speed Killers (U7)

Generic advice like "minify CSS" doesn't help on Shopify (it's automatic). These are the ACTUAL Shopify speed killers:

| Killer | Impact | Fix |
|--------|--------|-----|
| **Too many Liquid render loops** | 200-500ms added per nested loop | Limit collection pages to 12-16 products per page. Use pagination, not "load more" |
| **Apps injecting into theme.liquid** | Each injection = synchronous blocking script | Check theme.liquid for `{% render 'app-...' %}` lines. Remove any from uninstalled apps |
| **Unoptimized collection pages** | Loading 50+ product images at once | Paginate at 16. Use lazy loading. Don't load all variants' images |
| **Third-party chat widgets (Intercom, Drift)** | 200-400ms, loads on every page | Load lazily, only on pages where needed (support page, checkout) |
| **Residual app code** | Uninstalled apps leave CSS/JS behind | After uninstalling ANY app: check theme.liquid, check assets/, check snippets/ for remnants |
| **Custom fonts from external CDNs** | DNS lookup + download per font | Use fonts from Shopify's built-in font library (preloaded) or system font stack |

**Post-app-install protocol**: ALWAYS run PageSpeed Insights BEFORE and AFTER installing a new app. If the score drops by more than 5 points, that app is too expensive for its benefit.

### Monthly Speed Audit Protocol

1. Run PageSpeed Insights on: Homepage, PDP, Collection page, Cart, Checkout
2. Record scores in M30 dashboard (monthly tracking)
3. If any page drops below 70: identify cause (usually a new app or unoptimized image)
4. Fix within 7 days
5. Re-test to confirm fix

---

## Launch Sequence

### T-7 Days: Final Prep

- [ ] All P0 checklist items complete
- [ ] Product listings finalized with images
- [ ] Subscription configured and tested
- [ ] Email flows active (Welcome, Abandoned Cart, Order Confirmation)
- [ ] Tracking pixels verified (Meta, GA4, TikTok)
- [ ] Legal pages published

### T-1 Day: Go/No-Go

- [ ] Full test order placed and confirmed
- [ ] Mobile checkout verified on real devices
- [ ] Page speed ≥ 70 on all key pages
- [ ] Klaviyo flows tested and active
- [ ] Inventory confirmed with 3PL (M24)
- [ ] Customer support email monitored

### Launch Day

- [ ] Remove password protection from store
- [ ] Verify all pages load correctly
- [ ] Place first real order yourself (confirms everything works)
- [ ] Monitor Meta Pixel Helper for event firing
- [ ] Monitor GA4 Realtime for traffic
- [ ] Have support email open all day
- [ ] Do NOT run ads on Day 1 — verify organic checkout works first

### T+1 Day: Post-Launch Verification

- [ ] Review all orders processed
- [ ] Verify email flows triggered correctly
- [ ] Check subscription orders created properly
- [ ] Review page speed under real traffic
- [ ] Fix any issues found
- [ ] THEN turn on paid traffic (Day 2-3)

---

## Common Launch Mistakes (Avoid These)

1. **Launching without mobile testing** — 70%+ traffic is mobile. If mobile checkout is broken, you lose most of your revenue
2. **Too many apps at launch** — Kills speed. Start with 6-8, add more only when needed
3. **No abandoned cart recovery** — You WILL lose 70% of carts. Recovery emails recapture 5-15%
4. **Subscription not pre-selected** — If one-time is default, most buyers won't switch to subscription
5. **Running ads before checkout is verified** — Burning money. Verify organic checkout first
6. **Skipping page speed check** — A slow store silently kills conversion. You won't see it in analytics
7. **No test order on mobile** — Desktop checkout working ≠ mobile checkout working
8. **Launching Friday/weekend** — Launch Tuesday-Wednesday. You need weekday support available for issues
9. **Building on checkout.liquid** — Shopify is deprecating checkout.liquid in favor of Checkout Extensions (powered by Shopify Functions). Any checkout customization (post-purchase upsells, custom fields) should use Extensions, not legacy scripts. This doesn't affect basic launches, but avoid installing apps that modify checkout.liquid (U13)
