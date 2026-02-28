# Influencer & Creator Performance Database
**Version**: 1.0.0
**TUP**: M23 — Influencer & Creator
**Cluster**: BCL-5 (Growth & Market)
**Source Tabs**: 512 (Influencer Database)
**Author**: Caio, Claude (collaborative)
**Date Created**: 2026-02-08
**AI Model**: claude-opus-4-6
**Status**: Scaffold (VOID — requires real partnership data)

---

## Purpose

Live performance database tracking every influencer and creator partnership. This is a **VOID scaffold** — it has the structure but no data. Data populates when partnerships begin.

**Recommended tool**: Google Sheets or Airtable (Phase 1-2). Migrate to dedicated platform (Grin, AspireIQ) at Phase 3+ if managing >10 partnerships.

---

## Database Schema

### Table 1: Partner Directory

| Field | Type | Example |
|-------|------|---------|
| Partner ID | Auto-increment | INF-001, CRE-001 |
| Name | Text | |
| Type | Select | Influencer / Creator |
| Platform | Multi-select | Instagram, TikTok, YouTube, Podcast |
| Handle(s) | Text | @handle |
| Followers | Number | |
| Engagement Rate | % | |
| Niche | Select | Keto / CrossFit / Biohacking / Nutrition / Fasting |
| Tier | Select | Nano / Micro / Mid-Tier / Macro |
| Vetting Score | Number (1-5) | |
| Deal Type | Select | Gifted / Flat / Affiliate / Hybrid / UGC Fee |
| Rate | Currency | |
| Affiliate Code | Text | IONWAVE_[NAME]15 |
| Status | Select | Active / Paused / Alumni |
| Onboarded Date | Date | |
| Notes | Text | |

### Table 2: Campaign Performance Log

| Field | Type | Example |
|-------|------|---------|
| Campaign ID | Auto-increment | CAM-001 |
| Partner ID | Relation | INF-001 |
| Campaign Name | Text | "January Product Launch" |
| Start Date | Date | |
| End Date | Date | |
| Cost (Cash) | Currency | |
| Cost (Product) | Currency | |
| Total Cost | Formula | Cash + Product |
| Impressions | Number | |
| Clicks | Number | |
| Orders | Number | |
| Revenue | Currency | |
| ROAS | Formula | Revenue / Total Cost |
| CPA | Formula | Total Cost / Orders |
| Engagement Rate | % | |
| New Followers Gained | Number | |
| Notes | Text | |

### Table 3: UGC Content Library

| Field | Type | Example |
|-------|------|---------|
| Content ID | Auto-increment | UGC-001 |
| Creator ID | Relation | CRE-001 |
| Hook Type | Select | Problem / Curiosity / Social Proof / Contrast |
| Angle | Select | Keto / Energy / Science / Daily Routine |
| Length | Number (seconds) | 60 |
| Delivery Date | Date | |
| Approval Status | Select | In Review / Approved / Rejected |
| Deployed As Ad | Boolean | Yes/No |
| Ad Spend | Currency | |
| Ad ROAS | Number | |
| Performance Tier | Select | Winner / Maybe / Loser |
| Creative Fatigue Date | Date | |
| File Location | URL/Path | |
| Repurposed To | Multi-select | Static Ad / Email / Website / Social |

---

## [VOID — No Data Yet]

This database populates when:
- [ ] First product seeding batch sent (Month 2-3)
- [ ] First UGC creator contracted (Month 1)
- [ ] First affiliate code redeemed (post-launch)

**Setup**: Create in Google Sheets from schema above. ~30 min to build. Add data as partnerships begin.

[Confidence: B | Source: Schema from Danilo tab 512 headers + pipeline_operations.md tracker fields | Date: 2026-02-08]
