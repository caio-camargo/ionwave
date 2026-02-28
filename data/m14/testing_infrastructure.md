# Testing Infrastructure — M14: Testing & Optimization

**TUP**: M14 | **Tab**: 6 of 6
**Version**: 1.0.0
**Date**: 2026-02-06
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Hypothesis Links**: HYP-001 (CAC), HYP-002 (Subscription Conversion), HYP-004 (Gross Margin)
**Danilo Source**: None (NEW tab — Danilo's original had no infrastructure guidance. Google Optimize was recommended in the A/B framework tabs but was shut down September 2023.)
**Cross-references**: data/m14/ab_testing_framework.md (tool recommendations by phase)

---

## 1. Purpose

This tab documents the complete testing technology stack for IonWave, phased by growth stage and budget. It replaces Danilo's Google Optimize recommendation with current alternatives and provides a decision framework for tool investment.

---

## 2. Phased Testing Stack

### Phase 0: $0/month — Qualitative + Manual (Pre-revenue, <100 visitors/day)

**This is where IonWave starts.** The goal is maximum learning at zero tool cost.

| Function | Tool | Cost | Setup Effort |
|----------|------|------|-------------|
| **Session recordings + heatmaps** | Microsoft Clarity | $0 (fully free, unlimited sessions) | 10 min — add tracking script to Shopify theme |
| **Web analytics** | Google Analytics 4 (Enhanced Ecommerce) | $0 | 30 min — Shopify GA4 integration |
| **Shopify analytics** | Shopify Analytics (built-in) | $0 | Already included |
| **Ad creative testing** | Meta Ads Manager A/B Test tool | $0 (beyond ad spend) | Part of Meta Business Suite |
| **Significance calculator** | ABTestGuide.com/calc | $0 | Bookmark — no setup |
| **Competitor ad research** | Meta Ad Library | $0 | Browse at ads.tiktok.com/business/creativecenter and facebook.com/ads/library |
| **On-site "testing"** | Manual sequential (change page, compare 2-week windows in GA4) | $0 | Discipline, not software |
| **User testing** | 5-user hallway tests + customer interviews | $0-75/study (Lyssna for remote) | Per study |
| **Email testing** | Klaviyo built-in A/B | $0 (included in Klaviyo plan) | Configure in Klaviyo |

**Setup priority (Day 1)**:
1. GA4 Enhanced Ecommerce tracking confirmed working
2. Microsoft Clarity installed and recording
3. Meta Business Suite configured with pixel + Conversions API
4. Creative test log template created (test_log.json)

### Tool Spend Discipline

*(Dialogue upgrade UPG-5)*: Never spend more than 5% of your monthly ad budget on testing tools. Spend on TRAFFIC (which generates data), not on tools (which analyze data you don't have enough of).

| Monthly Ad Spend | Max Tool Budget | What You Can Afford |
|-----------------|----------------|-------------------|
| $500 | $25 | Free tools only (Clarity, GA4, Meta A/B) |
| $1,000 | $50 | Neat A/B free plan or $29 tier |
| $2,000 | $100 | Intelligems ($99) OR Neat A/B paid tier — not both |
| $5,000 | $250 | Intelligems + Neat A/B or Shoplift paid tier |
| $10,000+ | $500 | Full Phase 2-3 stack |

### Phase 1: $0-50/month — First A/B Tests (100+ visitors/day, 3,000+/month)

**Add when**: Monthly visitors exceed 3,000 consistently.

| Function | Tool | Cost | Why This One |
|----------|------|------|-------------|
| **On-site A/B testing** | Neat A/B Testing (Shopify app) | $0 (free plan) or $29/month | Best value entry point. WYSIWYG editor. No coding. |
| **Landing page testing** | Shoplift (Shopify app) | $0 (free plan) or $49/month | Bayesian methodology (better for low traffic). AI suggestions. |
| **Post-purchase surveys** | KnoCommerce or Fairing | ~$50-100/month | Attribution: "How did you hear about us?" Critical for understanding channel mix. |

**Decision**: Choose Neat A/B OR Shoplift, not both. Neat for simplicity, Shoplift if you want Bayesian reporting and AI suggestions.

### Phase 2: $50-200/month — Price Testing + Serious Infrastructure (Revenue > $5K/month)

**Add when**: Revenue exceeds $5K/month and price testing queue (M10) becomes the priority.

| Function | Tool | Cost | Why This One |
|----------|------|------|-------------|
| **Price A/B testing** | Intelligems | ~$99/month | Only Shopify-native tool that shows real different prices through checkout. Required for M10 test queue (PT-002+). |
| **Upgraded on-site testing** | Neat A/B ($49-99 tier) or Shoplift ($49 tier) | $49-99/month | Higher traffic limits, more concurrent tests. |

**Total Phase 2 budget**: ~$150-200/month in testing tools.

### Phase 3: $200-500/month — Scaling Infrastructure (Revenue > $20K/month)

**Add when**: Ad spend exceeds $10K/month and testing velocity is a bottleneck.

| Function | Tool | Cost | Why This One |
|----------|------|------|-------------|
| **Attribution** | Triple Whale (Pixel plan) | $100-300/month | First-party pixel, multi-touch attribution. Worthwhile when multi-channel confusion costs real money. |
| **Creative analytics** | Motion | $99-199/month | Creative performance dashboard across Meta + TikTok. Worth it at 20+ creatives in rotation. |
| **Advanced on-site testing** | Convert.com | ~$199/month | Full CRO platform with sequential testing, multivariate. For dedicated CRO programs. |

---

## 3. Tool Integration Architecture

### 3.1 Data Flow

```
                    ┌──────────────────┐
                    │   Meta Ads        │
                    │   (Creative tests) │
                    └────────┬─────────┘
                             │
                             ▼
┌──────────────┐    ┌──────────────────┐    ┌──────────────┐
│ Shopify Store │◄───│  Visitor arrives   │───►│ GA4 tracking  │
│              │    │  (with UTM params) │    │              │
└──────┬───────┘    └──────────────────┘    └──────┬───────┘
       │                                           │
       ▼                                           ▼
┌──────────────┐    ┌──────────────────┐    ┌──────────────┐
│ A/B test app  │    │ Microsoft Clarity │    │ GA4 Reports   │
│ (Neat/Shoplift│    │ (session replay)  │    │ (funnels,     │
│  /Intelligems)│    │                  │    │  conversions)  │
└──────┬───────┘    └──────────────────┘    └──────────────┘
       │
       ▼
┌──────────────┐
│ test_log.json │ ← Manual: record hypothesis, results, learnings
│ (M14 system)  │
└──────────────┘
```

### 3.2 GA4 Custom Dimensions for Testing

Set up these custom dimensions in GA4 to track experiment variant assignments:

| Dimension | Scope | Purpose |
|-----------|-------|---------|
| `experiment_id` | Session | Which test is this visitor in (e.g., LP-001) |
| `experiment_variant` | Session | Which variant (A, B, C) |
| `creative_id` | Session | Which ad creative drove this visit (from UTM) |
| `audience_tier` | Session | Which audience tier (from UTM) |

**Note**: Most Shopify A/B testing apps push variant data to GA4 automatically or via Google Tag Manager. Verify integration during setup.

---

## 4. Shopify-Specific Limitations

| Limitation | Impact | Workaround |
|-----------|--------|-----------|
| No native A/B testing | Must use third-party apps | Neat A/B, Shoplift, or Intelligems |
| Checkout locked (non-Plus) | Cannot test checkout flow | Fix obvious checkout issues without testing. Upgrade to Plus ($2,300/month) if checkout optimization becomes critical. |
| No RPV in Shopify Analytics | Primary metric (M10) must be calculated manually | Export data to spreadsheet or use GA4 exploration |
| Theme duplication ≠ A/B test | Swapping themes introduces time-based confounding | Use app-based testing, not theme swaps |
| Limited custom reporting | Cannot segment by test variant natively | Use A/B testing app's built-in reporting + GA4 |

---

## 5. Free Tools Deep Dive

### 5.1 Microsoft Clarity

**Why it matters**: At low traffic, qualitative insights beat quantitative testing. Clarity provides:
- **Session recordings**: Watch real visitors navigate your site. See where they hesitate, scroll back, or leave.
- **Heatmaps**: Click maps, scroll maps, attention maps. Identify what visitors actually see and click.
- **Rage clicks**: Automatic detection of frustrated clicking (usually indicates UX problem).
- **Dead clicks**: Elements that look clickable but aren't.
- **Smart Events**: AI-categorized user behaviors.

**100% free with no usage caps.** No reason not to install this on Day 1.

**How to use for testing decisions**:
1. Watch 20-30 session recordings per week
2. Identify top 3 friction points (where users hesitate, abandon, or get confused)
3. Fix the worst friction point each week
4. Check heatmap monthly: is the CTA getting seen? Are visitors reading the social proof?

### 5.2 Meta Ad Library + TikTok Creative Center

**For competitive creative research (free)**:
- Browse all active ads from any advertiser on Meta
- Filter by category (Health & Wellness), region, platform
- See ad duration (longer-running ads = likely winners)
- TikTok Creative Center: top-performing ads by category, trending hooks, keyword insights

**Weekly habit**: Spend 15 minutes browsing competitor supplement ads. Save winning hooks to a swipe file. Note formats that appear repeatedly (= validated by performance).

---

## 6. What NOT to Buy

| Tool | Why Not (At This Stage) |
|------|------------------------|
| **Optimizely** | $36K+/year. Enterprise only. |
| **Northbeam** | $400+/month. Need $50K+ ad spend to justify. |
| **Hyros** | Better for info products/high-ticket, not DTC consumables |
| **Foreplay** | $49-99/month for ad swipe files. Use Meta Ad Library + screenshots (free). |
| **Pencil (AI creative)** | $99-400/month. Unproven performance prediction. UGC/founder video can't be AI-generated. |
| **Multiple A/B tools simultaneously** | Conflicting test populations. Use ONE tool per test domain. |

---

## 7. Setup Checklist (Day 1)

- [ ] GA4 Enhanced Ecommerce tracking installed and confirmed working
- [ ] Microsoft Clarity installed (tracking script in Shopify theme)
- [ ] Meta Pixel + Conversions API configured
- [ ] UTM parameter convention established (see creative_testing_protocol.md naming convention)
- [ ] test_log.json template reviewed and ready for first entry
- [ ] Creative test brief template saved (from creative_testing_protocol.md Section 6)
- [ ] ABTestGuide.com/calc bookmarked for significance checking
- [ ] Meta Ad Library bookmarked for weekly competitive review

---

## 8. Intelligence Gaps

| ID | Gap | Grade | Upgrade Path |
|----|-----|-------|-------------|
| GAP-1 | Shopify app pricing changes frequently | C | Verify all pricing in Shopify App Store before purchasing. Current prices from early 2025 research. |
| GAP-2 | Intelligems integration with Loop Subscriptions unverified | C | Intelligems claims subscription app compatibility. Verify with Intelligems support before committing. Cross-ref: M22 flagged Loop+Smile gap. |
| GAP-3 | GA4 Enhanced Ecommerce setup quality varies | B | Standard Shopify integration exists. Verify purchase events fire correctly with test orders. |
| GAP-4 | Meta Advantage+ changes may affect testing campaign structure | C | Check Meta Business Suite monthly. The ABO testing campaign may need adjustment as Meta forces Advantage+. |
