# Content Repurposing System — M16: Content & SEO

**TUP**: M16
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-006 (Organic Growth Lift), HYP-001 (CAC)
**Danilo Source**: ops_model_v10_dump/507_content_repurposing_system.json (45 rows)
**Cross-Reference**: M22 UGC Creator Program (content input), M14 Creative Testing Protocol (ad creative testing)

---

## Purpose

Maximize ROI from every piece of content by systematically repurposing it across channels. The goal is a **content waterfall**: one pillar asset becomes 10-15 derivative pieces, each optimized for its channel.

**Core principle**: Create once, distribute many. Content creation is expensive (time or money). Distribution is cheap. Most brands create too much original content and distribute too little.

---

## 1. The Content Waterfall Model

### One Pillar Blog Post Becomes:

```
PILLAR CONTENT (1 x 2,000-word blog post)
│
├── SOCIAL (5-8 pieces)
│   ├── Instagram carousel (key takeaways as slides)
│   ├── Instagram Reel (30-60s summary or hook)
│   ├── TikTok video (educational clip, different hook than IG)
│   ├── Twitter/X thread (5-10 tweet breakdown)
│   ├── LinkedIn post (if B2B angle exists)
│   └── Pinterest infographic (data or process visualization)
│
├── EMAIL (2-3 pieces)
│   ├── Newsletter feature (summary + link to full post)
│   ├── Drip sequence addition (if evergreen topic)
│   └── Post-purchase education (if product-relevant)
│
├── PAID (2-4 pieces)
│   ├── Meta ad (educational angle from the content)
│   ├── Native ad headline + advertorial excerpt
│   └── Retargeting creative (for blog visitors who didn't convert)
│
└── SEO (1-3 pieces)
    ├── FAQ section → FAQ schema for rich snippets
    ├── Internal links to/from related posts
    └── Answer box optimization (featured snippet targeting)
```

### One UGC Video Becomes:

```
UGC VIDEO (1 x 60-second creator video)
│
├── AD VARIATIONS (4-6 pieces)
│   ├── Full 60s version
│   ├── 30s cut (hook + key benefit + CTA)
│   ├── 15s cut (hook only — awareness)
│   ├── 3-5 different hooks spliced onto same body
│   └── Static screenshots → image ads
│
├── ORGANIC SOCIAL (3-4 pieces)
│   ├── TikTok post (with brand overlay)
│   ├── Instagram Reel (with CTA in caption)
│   ├── Instagram Story (with link sticker)
│   └── UGC repost on brand feed
│
├── WEBSITE (2-3 pieces)
│   ├── Testimonial quote on product page
│   ├── Video embed on landing page
│   └── Social proof section
│
└── EMAIL (1-2 pieces)
    ├── Testimonial in welcome flow
    └── Social proof in cart abandonment
```

---

## 2. Repurposing Checklists

### For Every Blog Post Published:

| # | Derivative | Channel | Timing | Status |
|---|-----------|---------|--------|--------|
| 1 | Extract 3-5 key takeaways for carousel | Instagram | Same week | ☐ |
| 2 | Record 30-60s summary video | TikTok + Reels | Same week | ☐ |
| 3 | Write thread version | Twitter/X | Same week | ☐ |
| 4 | Include in next newsletter | Email | Next send | ☐ |
| 5 | Add internal links from 2-3 existing posts | Blog (SEO) | Same day | ☐ |
| 6 | Create FAQ schema if post answers questions | Blog (SEO) | Same day | ☐ |
| 7 | Consider for email drip sequence | Email flows | Monthly review | ☐ |
| 8 | Extract ad angle if high-performing | Meta Ads | When proven (30+ day performance) | ☐ |

### For Every UGC/Creator Video:

| # | Derivative | Channel | Timing | Status |
|---|-----------|---------|--------|--------|
| 1 | Create 60s, 30s, 15s cuts | Ads | Within 48 hours of delivery | ☐ |
| 2 | Test 3-5 different hooks on winning body | Ads | During creative testing cycle | ☐ |
| 3 | Extract 2-3 still frames for image ads | Ads | Within 48 hours | ☐ |
| 4 | Pull best quotes for social proof | Website + Email | Within 1 week | ☐ |
| 5 | Post on brand social (credited to creator) | Instagram/TikTok | Coordinated with creator | ☐ |
| 6 | Add to testimonial library | Website | Within 1 week | ☐ |
| 7 | Consider for email welcome flow | Email | Monthly review | ☐ |
| 8 | Consider for retargeting | Ads | When proven (7+ day performance) | ☐ |

### For Winners (Content That Performs):

| # | Action | Why |
|---|--------|-----|
| 1 | Brief new creators with same hook/angle | Proven angles should be iterated, not abandoned |
| 2 | Create variations (different person, same script) | Format × person interactions matter |
| 3 | Test winning angle on different platforms | What works on Meta may work on TikTok (or not) |
| 4 | Expand blog post into ultimate guide or series | Google rewards depth on topics with engagement |
| 5 | Turn blog post into downloadable lead magnet | Email list growth from proven content |
| 6 | Use as reference for future content briefs | Build a "what works" playbook |

---

## 3. Content Library Organization

### Folder Structure

```
/content-library/
│
├── /blog/
│   ├── /published/           ← Live blog posts (by date or pillar)
│   ├── /drafts/              ← In-progress content
│   └── /retired/             ← Content that's been superseded or removed
│
├── /video/
│   ├── /raw/                 ← Original creator deliverables
│   │   └── /{creator-name}/  ← Organized by creator
│   ├── /edited/              ← Cut versions (60s, 30s, 15s)
│   │   └── /{format}/        ← By length/format
│   └── /stills/              ← Screenshot extractions
│
├── /social/
│   ├── /carousels/           ← Instagram carousel graphics
│   ├── /reels/               ← Short-form video for Reels/TikTok
│   └── /threads/             ← Twitter/X thread drafts
│
├── /email/
│   ├── /newsletters/         ← Campaign email content
│   └── /flow-content/        ← Content for automated flows
│
└── /ads/
    ├── /creative/            ← Ad creative assets (see M14 test_log.json)
    └── /advertorial/         ← Native ad landing pages / advertorials
```

### Tagging System

Every piece of content should be tagged with:

| Tag Dimension | Examples | Purpose |
|---------------|----------|---------|
| **Pillar** | hydration-science, keto, performance, natural-health, comparison | Which content pillar it belongs to |
| **Hook type** | problem, curiosity, social-proof, ingredient, transformation | What angle drives engagement |
| **Audience** | biohacker, athlete, keto-dieter, wellness-parent, health-curious | Who it's for |
| **Format** | blog, video-60s, video-30s, carousel, thread, email | What shape it takes |
| **Performance** | winner, promising, average, underperformer | How it performed |
| **Stage** | awareness, consideration, conversion, retention | Where in the funnel |

---

## 4. Content Production Workflow

### Weekly Content Cycle (Bootstrapped)

For a 2-person team spending 5-8 hours/week on content:

| Day | Activity | Time | Output |
|-----|----------|------|--------|
| Monday | Write/finalize 1 blog post | 2-3 hrs | 1 published post |
| Monday | Add internal links + FAQ schema | 15 min | SEO optimization |
| Tuesday | Create social derivatives (carousel, thread) | 1 hr | 2-3 social posts |
| Wednesday | Record/edit 1 short-form video | 1 hr | 1 TikTok/Reel |
| Thursday | Schedule social posts for the week | 30 min | 4-5 scheduled posts |
| Friday | Draft next week's blog post (research + outline) | 1-2 hrs | Outline ready |
| Weekend | Schedule email newsletter (if weekly) | 30 min | 1 email send |

**Month 1-3 target**: 1 blog post/week + 3-5 social posts/week + 1 newsletter/week = ~20 total assets/week from 1 pillar piece

### AI-Assisted Content Production

AI tools can accelerate content creation but require human oversight, especially for health/supplement content (YMYL):

| Task | AI Role | Human Role |
|------|---------|------------|
| Blog post first draft | Generate outline + draft | Fact-check, add experience/expertise, verify claims |
| Meta descriptions | Generate options | Select and refine |
| Social captions | Generate variations | Choose tone, add personality |
| Email subject lines | Generate 10 options | A/B test winners |
| Keyword research | Surface opportunities | Validate with search tools |
| Content repurposing | Reformat content for channels | Review for platform fit |

**Critical rule for YMYL content**: Every health claim in AI-generated content must be verified against published research. Google penalizes unsubstantiated health claims. Add citations to studies. Have content reviewed by someone with relevant credentials where possible.

---

## 5. Content Performance Measurement

### Key Metrics by Channel

| Channel | Primary Metric | Secondary Metrics | Measurement Tool |
|---------|---------------|-------------------|-----------------|
| **Blog/SEO** | Organic sessions | Avg position, CTR, time on page, bounce rate | GA4 + GSC |
| **Social (organic)** | Engagement rate | Reach, saves, shares, profile visits | Platform analytics |
| **Email** | Click rate | Open rate, unsubscribe rate, revenue attributed | Klaviyo |
| **Ads (from content)** | ROAS | CTR, CPC, CPA | Meta Ads Manager |
| **Native ads** | CVR (advertorial → product) | CPC, time on advertorial, scroll depth | GA4 + platform |

### Content ROI Framework

Content ROI is notoriously hard to measure because organic content assists conversions without getting last-click credit. Use this framework:

1. **Direct attribution**: Organic traffic → same-session purchase (GA4 conversion paths)
2. **Assisted attribution**: Content touchpoint → later purchase within 30 days (GA4 attribution models)
3. **CAC reduction**: Track blended CAC monthly. As organic grows, blended CAC should decrease.
4. **Proxy metrics**: If you can't measure revenue directly, track leading indicators:
   - Organic traffic growth rate (target: 10-20% month-over-month)
   - Email list growth from content (target: 50-100 new subscribers/month from organic)
   - Keyword rankings improving (target: 5-10 keywords on page 1 within 6 months)

### Monthly Content Review

| Question | Data Source | Action if Red |
|----------|-----------|---------------|
| Is organic traffic growing? | GA4 | Review keyword strategy, increase publishing cadence |
| Are blog posts converting? | GA4 conversion paths | Add stronger CTAs, improve product integration |
| Which content pillars perform best? | GA4 by blog category tag | Double down on winners, deprioritize losers |
| Is social driving traffic to site? | GA4 traffic sources | Optimize link-in-bio, add CTAs to posts |
| Are repurposed pieces performing? | Platform analytics | Adjust repurposing format/timing |
