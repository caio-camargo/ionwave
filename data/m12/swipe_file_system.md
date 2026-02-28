# Swipe File System — M12: Ad Creative

**Version**: 1.0.0
**TUP**: M12 — Ad Creative
**Purpose**: Organized repository of winning ads, competitor intel, and inspiration sources
**Cross-references**: M13 (Ad Swipe File), M26 (Competitive Intel)

---

## 1. What Is a Swipe File?

**Definition**: Curated collection of high-performing ads (your own + competitors) for reference and inspiration.

**Purpose**:
- **Learn what works**: Study patterns from winners
- **Accelerate production**: Adapt proven frameworks vs inventing from scratch
- **Combat creative block**: Jump-start ideation with real examples
- **Onboard team**: Show new creators/agencies what "good" looks like

[Confidence: A | Source: Copywriting best practices | Date: 2026-02]

---

## 2. Swipe File Structure

### 2.1 Organization System

**Primary Folder Structure**:
```
/Swipe_File/
  /IonWave_Winners/
    /Meta/
    /TikTok/
    /YouTube/
  /Competitor_Ads/
    /LMNT/
    /Liquid_IV/
    /Others/
  /Inspiration/
    /Other_Supplements/
    /Other_D2C/
```

**Why By Brand First?** Easy to reference your own winners vs competitor patterns.

---

### 2.2 Individual Ad File Structure

**For Each Ad**:
1. **Video/Image File** (original creative)
2. **Screenshot** (in-feed view, includes copy)
3. **Performance Data** (CPA, ROAS, hook rate)
4. **Analysis Notes** (why it worked, derivative ideas)

**Example**:
```
/IonWave_Winners/Meta/
  IW_Meta_MissingMineral_UGC_HookA_15s_v1.mp4
  IW_Meta_MissingMineral_UGC_HookA_15s_v1_screenshot.png
  IW_Meta_MissingMineral_UGC_HookA_15s_v1_notes.txt
```

---

## 3. IonWave Winners Log

### 3.1 Winner Criteria

**Definition of "Winner"**:
- CPA <$30 (HYP-001 target)
- ≥10 conversions (statistical significance)
- Sustained 7+ days (not a fluke)

**Logging Trigger**: When ad meets criteria, add to swipe file within 24 hours.

[Confidence: A | Source: M14 testing_protocol.md | Date: 2026-02]

---

### 3.2 Winner Template (Markdown)

**File**: `data/m13/ad_swipe_file.md` (integrated with M13)

**Format**:
```markdown
## Winner #[N]: [Ad Name]

**Performance**: CPA $[X], ROAS [Y]:1, Hook Rate [Z]%
**Date**: [Launch Date] to [Retirement Date] ([X] weeks)
**Spend**: $[Total]
**Platform**: Meta / TikTok / YouTube
**Angle**: [Angle Name]
**Format**: UGC / Founder / Static
**Hook**: "[First 3 seconds transcript]"
**Body**: "[Key claims/structure]"
**CTA**: "[Call to action]"
**Why It Worked**: [1-2 sentences analyzing success factors]
**Derivatives Tested**: [List with performance]
**Retirement Reason**: [Fatigue / replaced by better winner / seasonal]
**File Location**: [Path to video file]
```

---

### 3.3 Example Winner Entry

```markdown
## Winner #1: IW_Meta_MissingMineral_UGC_HookA_15s_v1

**Performance**: CPA $24, ROAS 4.2:1, Hook Rate 32%
**Date**: 2026-02-15 to 2026-03-10 (3.5 weeks)
**Spend**: $1,450
**Platform**: Meta (Feed + Reels)
**Angle**: Missing Mineral (Curiosity Gap)
**Format**: UGC (female creator, 30s, iPhone-shot)
**Hook**: "Your electrolytes are missing 75 minerals. I found the one brand that has all 78."
**Body**: Quick LMNT comparison (3 minerals vs 78), taste testimonial, cramp-free result claim
**CTA**: "Link in bio — try IonWave"
**Why It Worked**: Curiosity gap hook + specific number (75 missing) + UGC authenticity + fast pace (15s). Female creator resonated with Female Wellness ICP (M27).
**Derivatives Tested**:
  - v2 (new text overlay "78 vs 3"): CPA $26 (OK)
  - v3 (cut to 10s): Hook rate dropped to 24% (worse)
  - HookB ("I tested every electrolyte brand"): CPA $28 (acceptable)
**Retirement Reason**: Hook rate declined from 32% → 18% over 3 weeks (fatigue). CPM rose 42%.
**File Location**: `/IonWave_Creative/Edited_Ads/Meta/MissingMineral/IW_Meta_MissingMineral_UGC_HookA_15s_v1.mp4`
```

---

## 4. Competitor Swipe File

### 4.1 Target Competitors

**Primary** (direct competitors, marine electrolytes):
- LMNT
- Liquid IV
- Ultima Replenisher

**Secondary** (adjacent, for creative inspiration):
- AG1 (greens powder, D2C playbook)
- Seed (probiotics, science-forward positioning)
- Athletic Greens (founder-led, educational content)

[Confidence: A | Source: M26 competitive_landscape.md | Date: 2026-02]

---

### 4.2 How to Collect Competitor Ads

**Method 1: Meta Ad Library** (free, public)
1. Visit facebook.com/ads/library
2. Search "[Brand Name]" (e.g., "LMNT")
3. Filter: Active ads, All regions
4. Download videos/images
5. Screenshot ad copy

**Method 2: Foreplay.co** ($49-149/month)
- Searchable database of D2C ads
- Save ads to collections
- Performance estimates (though not actual data)

**Method 3: Manual Scrolling**
- Follow competitors on Meta/TikTok/YouTube
- Screenshot ads when they appear in feed
- Note: Biased toward your own targeting

**IonWave Recommendation**: Meta Ad Library (free, sufficient for Month 1-6). Add Foreplay if budget allows (Month 6+).

[Confidence: A | Source: Competitive research tools 2024 | Date: 2026-02]

---

### 4.3 Competitor Analysis Framework

**For Each Competitor Ad**:
1. **What angle?** (Problem, ingredient, comparison, testimonial?)
2. **What hook?** (First 3 seconds)
3. **What format?** (UGC, founder, static?)
4. **What claims?** (performance, taste, science?)
5. **What CTA?** (direct buy, quiz, lead magnet?)
6. **What can we adapt?** (not copy, but learn from)

**Example**:
```
## LMNT — "Hydration for Low-Carb Athletes" (Meta, Dec 2024)

**Angle**: Keto/Low-Carb Positioning (niche audience)
**Hook**: "If you're on keto and your workouts are suffering, it's not the diet — it's electrolytes."
**Format**: Founder-led (Robb Wolf), direct-to-camera
**Claims**: "1000mg sodium per packet vs 200mg in competitors", sugar-free, designed by biochemist
**CTA**: "Try LMNT risk-free — link below"
**IonWave Adaptation**: Test "low-carb athlete" angle with marine plasma positioning. Hook: "Keto athletes need 78 minerals, not 3."
**File**: `/Swipe_File/Competitor_Ads/LMNT/LMNT_Keto_Founder_2024.mp4`
```

---

## 5. Inspiration Sources (Non-Competitors)

### 5.1 Other Supplement Brands (Creative Inspiration)

**Brands to Study**:
- **Momentous**: Science-heavy, clinical studies, Andrew Huberman partnership
- **Onnit**: Joe Rogan affiliate, lifestyle branding
- **Four Sigmatic**: Mushroom coffee, quirky creative
- **BioSteel**: Athlete endorsements, sports focus

**Why?** Learn creative patterns from adjacent categories without direct feature overlap.

---

### 5.2 D2C Brands (Funnel/Format Inspiration)

**Brands to Study**:
- **Native Deodorant**: UGC-heavy, ingredient transparency
- **Hims**: Problem-solution framing, founder-led testimonials
- **Caraway**: Lifestyle aesthetics, founder story
- **Olipop**: Nostalgic branding, "better-for-you" positioning

**Why?** D2C creative patterns transfer across categories (UGC, founder-led, problem-solution structure).

---

### 5.3 Curated Inspiration Boards

**Tool**: Pinterest, Notion, or Google Slides

**Collections**:
1. **Hook Inspiration** (30+ curiosity-gap hooks from any category)
2. **UGC Styles** (authentic, relatable, fast-paced examples)
3. **Founder-Led Formats** (direct-to-camera, storytelling, authority-building)
4. **Comparison Graphics** (side-by-side ingredient tables, price comparisons)
5. **Landing Page Layouts** (from M15, visual inspiration for future updates)

**Update Cadence**: Add 5-10 new examples per month.

[Confidence: B | Source: Creative ideation workflows | Date: 2026-02]

---

## 6. Swipe File Usage Workflows

### 6.1 Pre-Production Planning

**Use Case**: Planning next week's creative production.

**Workflow**:
1. Review IonWave Winners folder (what worked before?)
2. Check competitor swipe file (what are LMNT/Liquid IV running now?)
3. Identify 2-3 angles to test (or iterate winning angle)
4. Draft scripts using winner patterns + competitor insights
5. Send briefs to UGC creators

**Time**: 30-60 minutes

---

### 6.2 Creative Block Buster

**Use Case**: Staring at blank page, can't come up with hook ideas.

**Workflow**:
1. Open IonWave Winners folder
2. Review top 3 performers (what hooks worked?)
3. Open Competitor folder
4. Review 5-10 LMNT/Liquid IV ads (what angles are they using?)
5. Draft 5 new hook variants (adapt patterns, don't copy)

**Time**: 15-30 minutes

---

### 6.3 Onboarding New Creators/Agencies

**Use Case**: New UGC creator or agency partner needs to understand IonWave creative style.

**Workflow**:
1. Share IonWave Winners folder (top 5 performers)
2. Send creative brief: "Study these winners. Notice: fast pace, curiosity hooks, UGC authenticity, specific claims."
3. Request: "Produce 3 concepts in this style, adapted for [New Angle]."
4. Review drafts, provide feedback

**Time**: 30 minutes (one-time per creator)

[Confidence: A | Source: Agency onboarding workflows | Date: 2026-02]

---

## 7. Swipe File Maintenance

### 7.1 Monthly Update Ritual

**Tasks** (30 minutes/month):
1. **Add New Winners**: Any ad that hit winner criteria this month → log in swipe file
2. **Refresh Competitor Ads**: Check Meta Ad Library for LMNT, Liquid IV, others → download new ads
3. **Prune Outdated Ads**: Remove competitor ads >6 months old (creative trends change)
4. **Update Notes**: Add any new insights from month's testing (e.g., "UGC outperformed founder 3:1 this month")

**Calendar Reminder**: First Monday of each month.

---

### 7.2 Quarterly Deep Dive

**Tasks** (60-90 minutes/quarter):
1. **Pattern Analysis**: Review all IonWave winners from last 3 months. What patterns emerge? (angles, formats, hooks)
2. **Competitor Trend Analysis**: What new angles are competitors testing?
3. **Inspiration Refresh**: Add 10-20 new examples to inspiration boards
4. **Swipe File Audit**: Reorganize folders if needed, ensure files are named correctly

**Calendar Reminder**: First week of Months 3, 6, 9, 12.

[Confidence: A | Source: Creative ops best practices | Date: 2026-02]

---

## 8. Legal & Ethical Guidelines

### 8.1 What You CAN Do

- **Study competitor ads**: Learn angles, hooks, formats
- **Adapt frameworks**: "LMNT uses curiosity hooks → we can test curiosity hooks with marine plasma angle"
- **Reference performance patterns**: "UGC outperforms founder-led for electrolytes"

### 8.2 What You CANNOT Do

- **Copy exact scripts**: Plagiarism, potential copyright violation
- **Copy visual style frame-by-frame**: Derivative work issues
- **Use competitor product footage**: Trademark/copyright violation
- **Make false competitive claims**: FTC deceptive advertising

**Golden Rule**: Swipe file is for INSPIRATION and LEARNING, not COPYING.

[Confidence: A | Source: FTC advertising guidelines, copyright law basics | Date: 2026-02]

---

## 9. Swipe File Tools & Resources

### 9.1 Free Tools

- **Meta Ad Library**: facebook.com/ads/library (essential)
- **TikTok Creative Center**: ads.tiktok.com/business/creativecenter (trending ads)
- **Google Drive / Dropbox**: File storage
- **Pinterest**: Inspiration boards
- **Notion**: Organized note-taking + embedded videos

### 9.2 Paid Tools (Optional, Month 6+)

- **Foreplay**: $49-149/month (D2C ad database, save/organize ads)
- **Motion**: $99/month (creative analytics + competitor tracking)
- **Minea**: $49/month (dropshipping/D2C ad spy tool)

**IonWave Recommendation**: Free tools sufficient Month 1-6. Add Foreplay if creative velocity requires faster competitor research (Month 6+).

[Confidence: A | Source: Creative research tool landscape 2024 | Date: 2026-02]

---

## Intelligence Gaps

| Gap | Impact | Validation Path |
|-----|--------|----------------|
| Optimal swipe file size (50 ads? 200 ads?) | Low | Start with 20-30, expand organically. Quality > quantity. |
| Competitor ad refresh frequency (weekly? monthly?) | Low | Test monthly cadence, adjust if competitor creative velocity is high |
| Best tool for swipe file organization (Notion vs Google Drive vs Foreplay) | Low | Start with Google Drive (familiar, free), migrate if needed |

---

## Next Steps

1. **Pre-Launch**: Set up folder structure (Google Drive)
2. **Week 1**: Collect 10-15 competitor ads from Meta Ad Library (LMNT, Liquid IV)
3. **Month 1**: Add first IonWave winner to swipe file
4. **Month 3**: Run first quarterly deep dive (pattern analysis)
5. **Month 6**: Evaluate paid tool upgrade (Foreplay) if budget allows

---

**Version History**:
- v1.0.0 (2026-02-10): Initial swipe file system with folder structure, winner logging, competitor collection, inspiration sources, usage workflows, maintenance rituals
