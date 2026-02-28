# Ad Specs — M12: Ad Creative

**Version**: 1.0.0
**TUP**: M12 — Ad Creative
**Cluster**: BCL-3 (DR & Creative)
**Purpose**: Platform-specific ad specifications, dimensions, file sizes, and duration requirements
**Status**: AI Draft
**Danilo Tabs Covered**: Ad Specs, Platform Creative Specs (consolidated — duplicates in V-M12)
**Cross-references**: M13 (account_structure.md for platform setup), M15 (landing page dimensions)

---

## 1. Meta (Facebook + Instagram)

### 1.1 Video Ad Specs

| Spec | Feed (FB/IG) | Stories/Reels | In-Stream |
|------|-------------|---------------|-----------|
| **Aspect Ratio** | 1:1 (square) or 4:5 | 9:16 (vertical) | 16:9 (horizontal) |
| **Resolution** | 1080x1080 or 1080x1350 | 1080x1920 | 1920x1080 |
| **Duration** | 1s-240s (15-30s recommended) | Up to 60s (15s optimal) | 5s-15s (pre-roll) |
| **File Size** | Max 4GB | Max 4GB | Max 4GB |
| **File Type** | MP4, MOV | MP4, MOV | MP4, MOV |
| **Captions** | Required (85% watch muted) | Optional (sound-on by default) | Required |
| **Safe Zone** | Full frame | Top/bottom 250px reserved for UI | Full frame |
| **Thumbnail** | Auto or custom (1:1 or 4:5) | N/A (auto-play) | Custom recommended |

[Confidence: A | Source: Meta Ads Manager specifications, Meta Business Help Center 2025 | Date: 2026-02]

### 1.2 Image Ad Specs

| Spec | Feed | Stories | Carousel |
|------|------|---------|----------|
| **Aspect Ratio** | 1:1 or 4:5 | 9:16 | 1:1 |
| **Resolution** | 1080x1080 or 1080x1350 | 1080x1920 | 1080x1080 |
| **File Size** | Max 30MB | Max 30MB | Max 30MB per card |
| **File Type** | JPG, PNG | JPG, PNG | JPG, PNG |
| **Text Overlay** | <20% of image (recommendation, not rule) | Minimal text | Brief per card |
| **Cards** | N/A | N/A | 2-10 cards |

[Confidence: A | Source: Meta Ads Manager specifications | Date: 2026-02]

### 1.3 Meta Text Specs

| Field | Character Limit | Best Practice |
|-------|----------------|---------------|
| **Primary Text** | 125 chars (before "see more") | Front-load value prop, keep under 125 |
| **Headline** | 40 chars recommended | Clear benefit statement or CTA |
| **Description** | 30 chars recommended | Supporting detail (often truncated) |
| **CTA Button** | Pre-set options | Shop Now, Learn More, Get Offer |

---

## 2. TikTok

### 2.1 Video Ad Specs

| Spec | In-Feed | TopView | Spark Ads |
|------|---------|---------|-----------|
| **Aspect Ratio** | 9:16 (vertical required) | 9:16 | 9:16 |
| **Resolution** | 1080x1920 (min 540x960) | 1080x1920 | Creator's original |
| **Duration** | 5-60s (15-30s optimal) | Up to 60s | Creator's original length |
| **File Size** | Max 500MB | Max 500MB | N/A (organic post) |
| **File Type** | MP4, MOV, MPEG, AVI | MP4, MOV | Organic post |
| **Sound** | Required (sound-on platform) | Required | Original sound |
| **Captions** | Recommended (adds accessibility) | Recommended | Optional |
| **Safe Zone** | Left 44px, bottom 140px for UI | Same | Same |

[Confidence: A | Source: TikTok Ads Manager specifications, TikTok Creative Center 2025 | Date: 2026-02]

### 2.2 TikTok Text Specs

| Field | Character Limit | Best Practice |
|-------|----------------|---------------|
| **Ad Description** | 100 chars (before truncation) | Hook + CTA in first line |
| **Display Name** | 30 chars | Brand name |
| **CTA Button** | Pre-set options | Shop Now, Learn More, Download |

### 2.3 TikTok Creative Best Practices

- **Native feel**: Ads that look like organic TikTok content perform 2-3x better than polished ads
- **First 1-2 seconds**: TikTok scroll is faster than Meta — hook must land in 1 second
- **Trending sounds**: Using trending audio increases delivery 20-40%
- **Text overlays**: Bold, large text overlays increase retention (TikTok is visual-text hybrid)
- **Lo-fi production**: iPhone quality > studio quality for this platform

[Confidence: B | Source: TikTok Creative Center best practices 2024-2025, DTC brand case studies | Date: 2026-02]

---

## 3. YouTube

### 3.1 Video Ad Specs

| Spec | Skippable In-Stream | Non-Skippable | Shorts | Discovery |
|------|---------------------|---------------|--------|-----------|
| **Aspect Ratio** | 16:9 | 16:9 | 9:16 | 16:9 |
| **Resolution** | 1920x1080 (min 640x360) | 1920x1080 | 1080x1920 | 1920x1080 |
| **Duration** | 12s-3min (30-90s recommended) | 6-15s (15s typical) | Up to 60s | Any length |
| **File Size** | Max 256GB | Max 256GB | Max 256GB | Max 256GB |
| **File Type** | MP4, MOV, AVI, WMV | Same | Same | Same |
| **Skip Button** | After 5 seconds | No skip | No skip | User-initiated |
| **Sound** | Required | Required | Recommended | Optional |
| **Companion Banner** | 300x60 (desktop) | 300x60 | N/A | N/A |

[Confidence: A | Source: Google Ads Help Center, YouTube advertising specifications 2025 | Date: 2026-02]

### 3.2 YouTube Text Specs

| Field | Character Limit | Best Practice |
|-------|----------------|---------------|
| **Headline** | 15 chars (in-stream), 100 chars (discovery) | Clear value statement |
| **Description** | 2 lines visible | Benefit + CTA |
| **Final URL** | N/A | Landing page (fast-loading) |
| **CTA Overlay** | Auto-generated from final URL | Shop Now, Learn More |

---

## 4. Cross-Platform Production Checklist

### 4.1 Minimum Viable Asset Kit (Per Ad Concept)

To launch one concept across all three platforms:

| Asset | Resolution | Aspect Ratio | Duration | Platform |
|-------|-----------|-------------|----------|----------|
| Vertical video | 1080x1920 | 9:16 | 15-30s | TikTok, IG Stories/Reels |
| Square video | 1080x1080 | 1:1 | 15-30s | Meta Feed |
| Tall video | 1080x1350 | 4:5 | 15-30s | Meta Feed (preferred) |
| Horizontal video | 1920x1080 | 16:9 | 30-60s | YouTube In-Stream |
| Static image | 1080x1080 | 1:1 | N/A | Meta Feed (quick test) |
| Thumbnail | 1280x720 | 16:9 | N/A | YouTube |

**Production shortcut**: Shoot in 9:16 vertical, then crop/reframe for other ratios. Most editing tools (CapCut, Premiere, Canva) support auto-reframe.

### 4.2 File Naming Convention

See `creative_naming_convention.md` for the full naming system. Quick reference:

```
{PLATFORM}_{FORMAT}_{ANGLE}_{HOOK}_{VERSION}_{DATE}
META_UGC_ANG01_H003_V1_20260215
```

---

## 5. Platform-Specific Compliance Notes

| Platform | Key Restrictions for Supplements |
|----------|--------------------------------|
| **Meta** | No before/after that implies medical results; structure/function claims only; disclaimers required on testimonials; Special Ad Category may apply |
| **TikTok** | Stricter on health claims than Meta; no "cure/treat/prevent" language; influencer disclosure required (#ad, #sponsored) |
| **YouTube** | Health claims reviewed manually; longer approval times; companion banners must comply separately |

**FTC Overlay** (all platforms): Testimonial disclaimers ("Individual results may vary"), no unsubstantiated health claims, influencer disclosure per FTC Endorsement Guides 2024.

[Confidence: A | Source: FTC Endorsement Guides 2024, M11 hook_library.md FTC compliance section | Date: 2026-02]

---

## Intelligence Gaps & Upgrade Paths

| Gap | Current Grade | Upgrade Path | Target Grade |
|-----|--------------|--------------|--------------|
| **2026 Meta spec changes** | B | Verify specs in Meta Ads Manager before launch (specs update quarterly) | A |
| **TikTok Shops ad specs** | C | Monitor TikTok Shop integration specs (expanding in 2025-2026) | B |
| **YouTube Shorts ad specs** | B | Verify Shorts monetization and ad placement specs pre-launch | A |
| **AI-generated creative policies** | C | Check platform policies on AI-generated content disclosure (evolving) | B |

---

## Sources

- Meta Business Help Center — Ad Specifications (2025)
- TikTok Ads Manager — Creative Specifications (2025)
- Google Ads Help Center — YouTube Ad Specifications (2025)
- FTC Endorsement Guides (2024 update)
- M11 hook_library.md — FTC compliance section
- M13 account_structure.md — Platform setup requirements
