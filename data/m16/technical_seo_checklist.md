# Technical SEO Checklist — M16: Content & SEO

**TUP**: M16
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-006 (Organic Growth Lift), HYP-001 (CAC — organic reduces blended CAC)
**Danilo Source**: ops_model_v10_dump/412_technical_seo_checklist.json (34 rows)

---

## Purpose

Pre-launch and ongoing technical SEO checklist for IonWave's Shopify store. Technical SEO is the foundation — if Google can't crawl and index your site properly, no amount of content will help.

**Priority**: Complete before any content publishing. Most items are one-time setup.

---

## 1. Shopify Built-In SEO (What You Get for Free)

Shopify handles several technical SEO fundamentals automatically:

| Feature | Status | Notes |
|---------|--------|-------|
| **SSL/HTTPS** | Included | All Shopify stores get free SSL |
| **CDN** | Included | Cloudflare CDN for all stores |
| **XML Sitemap** | Auto-generated | At /sitemap.xml — auto-updates |
| **Canonical tags** | Auto-generated | Handles product-in-collection duplicates |
| **Robots.txt** | Auto-generated | Customizable via Shopify admin since 2023 |
| **Mobile responsive** | Theme-dependent | Dawn and most 2.0 themes are responsive |
| **Structured data (basic)** | Theme-dependent | Most themes include basic Product schema |

**What Shopify does NOT do well** (and you must handle manually or via apps):
- Blog categorization (tags only, no categories)
- Redirect management at scale
- Custom structured data / rich snippets
- Image alt text (must add manually)
- Meta description optimization (defaults to page content excerpt)
- Internal linking strategy
- Core Web Vitals optimization beyond basics

---

## 2. Pre-Launch Technical Checklist

### 2.1 Site Speed & Core Web Vitals

Core Web Vitals are a confirmed ranking factor. Shopify stores typically score 50-70 on PageSpeed Insights (mobile). Target: 70+ mobile.

| # | Task | Tool | Priority | Status |
|---|------|------|----------|--------|
| 1 | Run PageSpeed Insights audit | [Google PageSpeed Insights](https://pagespeed.web.dev/) | P0 | ☐ |
| 2 | Achieve LCP (Largest Contentful Paint) < 2.5s | Theme optimization | P0 | ☐ |
| 3 | Achieve CLS (Cumulative Layout Shift) < 0.1 | Theme optimization | P0 | ☐ |
| 4 | Achieve INP (Interaction to Next Paint) < 200ms | Minimize JS | P1 | ☐ |
| 5 | Compress all images (WebP format where possible) | Shopify auto-compresses, but upload optimized originals | P0 | ☐ |
| 6 | Enable lazy loading for below-fold images | Most Shopify 2.0 themes have this built-in | P0 | ☐ |
| 7 | Minimize third-party scripts (tracking pixels, chat widgets) | Audit all apps — each adds JS | P1 | ☐ |
| 8 | Use system fonts or limit custom font files | Reduce font load time | P2 | ☐ |

**Shopify-specific speed tips**:
- Every Shopify app you install adds JavaScript. Audit apps quarterly — uninstall unused ones and check that uninstalled apps actually removed their code.
- Hero images are the biggest LCP offender. Use compressed WebP, specify width/height attributes.
- Shopify's Dawn theme is optimized for speed. If using a paid theme, check its PageSpeed score before purchase.
- Avoid excessive Liquid snippets in the theme. Each one adds render time.

### 2.2 Crawlability & Indexation

| # | Task | Tool | Priority | Status |
|---|------|------|----------|--------|
| 1 | Submit sitemap to Google Search Console | GSC → Sitemaps → Add /sitemap.xml | P0 | ☐ |
| 2 | Submit sitemap to Bing Webmaster Tools | Bing Webmaster Tools | P1 | ☐ |
| 3 | Verify robots.txt isn't blocking important pages | Visit /robots.txt directly | P0 | ☐ |
| 4 | Check for noindex tags on important pages | GSC → Coverage or Screaming Frog | P0 | ☐ |
| 5 | Ensure clean URL structure | /products/ionwave-electrolytes not /products?id=123 | P0 | ☐ |
| 6 | Fix Shopify duplicate URL issue | /collections/all/products/X duplicates /products/X — canonical tags handle this, but avoid internal linking to /collections/ URLs | P1 | ☐ |
| 7 | Set up 301 redirects for any changed URLs | Shopify Admin → Navigation → URL Redirects | P1 | ☐ |
| 8 | Eliminate orphan pages (pages with no internal links) | Manual audit or Screaming Frog | P1 | ☐ |

**Known Shopify SEO issues**:
- **Duplicate content from collections**: Shopify creates URLs like `/collections/all/products/product-name` AND `/products/product-name`. Canonical tags handle this for Google, but always use the `/products/` URL in internal links and sitemaps.
- **Paginated collection pages**: `/collections/all?page=2` etc. can create thin content pages. Shopify handles pagination with rel=next/prev.
- **Tag pages**: `/collections/tag-name` creates additional URLs. These can be useful for SEO (e.g., `/collections/keto-electrolytes`) or harmful (thin content). Be intentional about which tags you create.

### 2.3 On-Page Fundamentals

| # | Task | Tool | Priority | Status |
|---|------|------|----------|--------|
| 1 | Write unique title tags for all pages | < 60 characters, include primary keyword | P0 | ☐ |
| 2 | Write unique meta descriptions | < 160 characters, include CTA | P0 | ☐ |
| 3 | One H1 tag per page (product name or article title) | Theme should handle this automatically | P0 | ☐ |
| 4 | Use H2-H3 heading hierarchy in content | Structure for scanability and SEO | P0 | ☐ |
| 5 | Add descriptive alt text to ALL images | Keyword-relevant, not keyword-stuffed | P0 | ☐ |
| 6 | Implement internal linking structure | Blog ↔ product pages, related products | P1 | ☐ |
| 7 | Optimize product descriptions for target keywords | Natural language, not keyword stuffing | P1 | ☐ |

**Title tag formula for IonWave**:
- Homepage: `IonWave — Marine Plasma Electrolytes | 78 Ocean Minerals`
- Product page: `IonWave Electrolyte Powder — 78 Ocean Minerals | [Benefit]`
- Blog post: `[Primary Keyword] — [Benefit or Hook] | IonWave`
- Comparison: `IonWave vs [Competitor] — [Key Difference] | Honest Comparison`

### 2.4 Structured Data / Schema Markup

Structured data helps Google display rich snippets (star ratings, prices, FAQ dropdowns).

| Schema Type | Where | Priority | Status |
|-------------|-------|----------|--------|
| **Product** | Product pages | P0 | ☐ — Most Shopify themes include basic Product schema. Verify with Rich Results Test. |
| **Organization** | Site-wide (JSON-LD in theme head) | P1 | ☐ — Brand name, logo, social profiles |
| **Article / BlogPosting** | Blog posts | P1 | ☐ — Author, date, publisher. Critical for E-E-A-T. |
| **FAQ** | Product pages, key landing pages | P1 | ☐ — Generates FAQ rich snippets in search results |
| **Review** | Product pages | P1 | ☐ — Star ratings in search results. Requires a review app (Judge.me, Loox) |
| **BreadcrumbList** | All pages | P2 | ☐ — Helps Google understand site structure |
| **HowTo** | How-to blog posts | P2 | ☐ — Step-by-step rich snippets |

**Tools for schema on Shopify**:
- **Built-in**: Most 2.0 themes include Product and basic Organization schema
- **Free**: JSON-LD for SEO (Shopify app) — auto-generates schema for products, articles, organization
- **Manual**: Add custom JSON-LD via theme.liquid for Organization and FAQ schema

**Test with**: [Google Rich Results Test](https://search.google.com/test/rich-results)

### 2.5 Security & Trust Signals

| # | Task | Priority | Status |
|---|------|----------|--------|
| 1 | HTTPS active on all pages | P0 — Shopify includes this | ☐ |
| 2 | No mixed content warnings (all resources via HTTPS) | P0 | ☐ |
| 3 | Privacy Policy page published | P0 — Required by law and Google | ☐ |
| 4 | Terms of Service page published | P0 | ☐ |
| 5 | Shipping & Returns policy page published | P0 — Trust signal for ecommerce | ☐ |
| 6 | Contact page with real information | P1 — Phone, email, physical address | ☐ |
| 7 | About page with founder story and credentials | P1 — E-E-A-T signal | ☐ |

---

## 3. Ongoing Technical Maintenance

### Monthly Audit

| Task | Frequency | Tool |
|------|-----------|------|
| Check GSC for crawl errors | Monthly | Google Search Console → Pages |
| Fix broken links (404s) | Monthly | GSC or Screaming Frog free |
| Monitor Core Web Vitals | Monthly | GSC → Core Web Vitals report |
| Review page speed for new pages | Per new page | PageSpeed Insights |
| Update XML sitemap (automatic on Shopify) | Automatic | Verify monthly |
| Check for manual actions | Monthly | GSC → Security & Manual Actions |

### Post-Launch (One-Time)

| Task | When | Tool |
|------|------|------|
| Set up Google Merchant Center + free product listings | Within 2 weeks of launch | Google Merchant Center (free) |
| Connect Shopify product feed to Merchant Center | Same time | Shopify's built-in Google & YouTube channel app |
| Verify product data (images, descriptions, pricing) passes Merchant Center review | After feed submission | Merchant Center Diagnostics |

**Google Merchant Center note**: Even without running paid Shopping ads (which belongs in M12), Merchant Center enables free product listings in Google Shopping search results and the Shopping tab. This is zero-cost organic product visibility. Shopify's Google & YouTube app handles the product feed automatically.

### Quarterly Audit

| Task | Frequency | Tool |
|------|-----------|------|
| Full technical SEO audit | Quarterly | Screaming Frog free (up to 500 URLs) |
| App audit (remove unused apps, check for leftover code) | Quarterly | Manual |
| Schema validation on key pages | Quarterly | Rich Results Test |
| Mobile usability check | Quarterly | GSC → Mobile Usability |

---

## 4. SEO Tool Stack (Bootstrapped)

### Phase 0: Free ($0/month)
- **Google Search Console** — crawl data, keyword performance, index coverage
- **Google Analytics 4** — traffic, user behavior, conversion tracking
- **Google PageSpeed Insights** — Core Web Vitals
- **Google Rich Results Test** — schema validation
- **Bing Webmaster Tools** — Bing-specific crawl data + free Bing SEO recommendations
- **Screaming Frog** (free up to 500 URLs) — technical audit

### Phase 1: Basic ($0-50/month)
- Add: **Ubersuggest** ($29/month) or **Google Keyword Planner** (free with Google Ads account) — keyword research
- Add: **JSON-LD for SEO** (Shopify app, free) — structured data
- Add: **Yoast SEO** or **SEO Manager** (Shopify app, ~$20/month) — meta tag management, redirects

### Phase 2: Growth ($50-150/month)
- Add: **Ahrefs Lite** ($99/month) or **SEMrush Pro** ($130/month) — competitive analysis, backlink monitoring, rank tracking
- Note: Only subscribe when you have enough content (20+ pages) to justify the investment. Don't pay for tools before you have content to optimize.

**Tool spend discipline** (same principle as M14): Don't spend more on SEO tools than you're investing in content creation. $100/month on Ahrefs is wasted if you're publishing 0 blog posts.
