# M17: Email Segmentation Strategy

**TUP**: M17 — Email & SMS
**Version**: 1.0.0
**Date**: 2026-02-07
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 420, 423, 424; Klaviyo segmentation best practices

---

## 1. When Segmentation Matters

**Founder Mode reality check**: Segmentation is powerful but premature at low volume.

| Subscriber Count | Segmentation Level | Rationale |
|-----------------|-------------------|-----------|
| 0-500 | **None** — Send to all | Sample too small. Focus on building flows and list. [Confidence: B \| Source: Klaviyo small-brand guidance] |
| 500-2,000 | **Basic** — Customers vs. Non-Customers | Enough data to separate buyers from browsers. Two send lists. |
| 2,000-5,000 | **Intermediate** — Add engagement + purchase frequency | Can meaningfully split engaged vs. unengaged, one-time vs. repeat |
| 5,000+ | **Advanced** — Full lifecycle + behavioral + interest-based | Enough volume to see statistically meaningful differences in segment performance |

**Do NOT over-segment before you have volume.** A perfectly segmented email to 50 people loses to a good email to 500 people.

---

## 2. Core Segments (Lifecycle-Based)

These are the primary segments based on purchase behavior. Build these first.

| Segment | Definition | Size Estimate (Year 1) | Email Strategy | Klaviyo Logic |
|---------|-----------|----------------------|----------------|---------------|
| **Never Purchased** | Subscribed, $0 spent | 60-70% of list | Welcome flow → education → first purchase incentive | `Has placed order: 0 times` |
| **One-Time Buyers** | Exactly 1 purchase | 15-20% of list | Post-purchase nurture → subscription push → replenishment | `Has placed order: exactly 1 time` |
| **Repeat Buyers** | 2+ purchases, not subscribed | 5-10% of list | Loyalty → subscription push → referral | `Has placed order: at least 2 times AND Active subscription: false` |
| **Subscribers** | Active subscription | 5-15% of list | Retention → upsell → VIP treatment → reduce churn | `Active subscription: true` |
| **Churned Subscribers** | Cancelled subscription | 2-5% of list | Win-back → feedback survey → re-subscription offer | `Cancelled subscription: true AND Active subscription: false` |
| **At-Risk** | No engagement in 30+ days | Variable | Re-engagement campaign → sunset if no response | `Last opened email: more than 30 days ago` |
| **VIPs** | Top 10% by LTV | ~3-5% of list | Exclusive access → early launches → personal founder touch | `Total revenue: top 10%` OR `Has placed order: at least 3 times` |

[Confidence: B | Source: Danilo tabs 420+423+424 merged, validated against Klaviyo DTC patterns | Date: 2026]

---

## 3. Engagement-Based Segments

Layered ON TOP of lifecycle segments. Critical for deliverability health.

| Segment | Definition | Email Strategy | Action |
|---------|-----------|----------------|--------|
| **Highly Engaged** | Opened 3+ of last 5 emails | Full communication — send more, they want it | Send all campaigns + flows |
| **Engaged** | Opened 1-2 of last 5 emails | Normal cadence — standard campaign sends | Send weekly campaigns + all flows |
| **Disengaged** | 0 opens in last 5 emails | Reduce cadence → re-engagement attempt | Send only high-value campaigns (sales, new product) |
| **Unengaged** | No open in 60+ days | Sunset sequence → suppress or remove | 2-email sunset series, then suppress from campaigns |

[Confidence: B | Source: Danilo tab 424 + deliverability best practices]

**Why this matters:** Sending to unengaged subscribers kills deliverability. Gmail, Yahoo, and Outlook use engagement signals to determine inbox vs. spam. Suppressing unengaged subscribers protects the health of your ENTIRE list.

**Sunset policy:**
1. 60 days no open → Move to "Unengaged" segment
2. Send 2-email sunset series ("Want to stay?" + "Final goodbye")
3. If no engagement → Suppress from campaigns (keep in flows only)
4. 90 days no engagement → Remove from list entirely

---

## 4. Acquisition Source Segments

Track where subscribers came from to tailor the welcome experience:

| Source | Expected Behavior | Welcome Flow Adjustment |
|--------|------------------|------------------------|
| **Meta/Facebook Ads** | Need more education, lower purchase intent | Longer welcome series, more social proof, bigger discount needed [Confidence: C \| Source: DTC heuristic] |
| **Organic/SEO** | Already researching, higher intent | Shorter education arc, faster path to purchase [Confidence: C \| Source: DTC heuristic] |
| **Referral** | High trust, fastest to convert | Lean into social proof, referrer's story, smaller discount needed [Confidence: C \| Source: DTC heuristic] |
| **Influencer (specific)** | Came for that influencer's recommendation | Reference the specific influencer in welcome, match tone [Confidence: C \| Source: DTC heuristic] |
| **Popup (on-site)** | Browsing, may be price-shopping | Standard welcome flow, emphasize differentiation from competitors [Confidence: C \| Source: DTC heuristic] |

**Implementation note:** In Klaviyo, track UTM source on signup. Use `$source` property or custom properties to tag acquisition channel. Build conditional welcome flow splits by Month 3+ when you have enough volume per source.

---

## 5. Interest-Based Segments (Phase 2+)

These require either self-declared data (quiz, preference center) or behavioral inference:

| Segment | Signal | Content Strategy |
|---------|--------|-----------------|
| **Keto-Focused** | Indicated keto interest in quiz/browsing | Keto-specific content: electrolyte needs on keto, "keto flu" prevention, low-carb recipes |
| **Athletes / Fitness** | Indicated fitness interest | Performance content: recovery optimization, workout hydration, endurance |
| **Wellness / General Health** | Default / general interest | Broad wellness: energy, sleep, stress, daily vitality |
| **Biohackers** | Browsed science pages, engaged with mechanism-of-action content | Deep science: bioavailability data, mineral ratios, research citations |

[Confidence: C | Source: Danilo tab 424 + IonWave persona research]

**When to build:** After Month 4, when quiz/preference center data or behavioral signals provide enough segmentation signal. Do NOT guess interest from demographics alone.

---

## 5.5. Segmentation Trigger Thresholds (Dialogue Upgrade U4)

**Don't segment because you can — segment when the data tells you to.**

Specific triggers that signal when to build source-specific welcome flow splits:

| Trigger | Threshold | Action |
|---------|-----------|--------|
| Any single acquisition source = 30%+ of subscribers AND total list >500 | e.g., "Meta Ads = 35% of 600 subscribers" | Build a Meta-specific welcome flow variant |
| Open rate variance between sources >15 percentage points | e.g., "Organic opens at 55%, Meta opens at 35%" | Source-specific subject lines and content arcs |
| Welcome-to-purchase CVR varies >50% between sources | e.g., "Referral converts at 15%, Meta converts at 6%" | Adjust discount strategy and education depth by source |
| Total subscribers >2,000 | Enough volume for statistically meaningful splits | Enable engagement-based segmentation tiers |

**Until these triggers fire:** Run a single welcome flow for all sources. A good general flow beats 4 mediocre source-specific flows.

---

## 6. Segment Priority Matrix

What to build and when:

| Phase | Segments to Build | Prerequisite |
|-------|------------------|-------------|
| **Pre-Launch** | Customers vs. Non-Customers (just 2 lists) | Klaviyo connected to Shopify |
| **Month 1-2** | Add: VIPs, One-Time vs. Repeat | Need 50+ customers |
| **Month 3-4** | Add: Engagement tiers (Highly Engaged / Engaged / Disengaged) | Need 60+ days of email data |
| **Month 4-6** | Add: Acquisition source segments | Need enough volume per source (50+ per channel) |
| **Month 6+** | Add: Interest-based segments | Need quiz/preference center OR 1,000+ behavioral data points |

---

## 7. Klaviyo Implementation Notes

### Segment vs. List

| Use | When |
|-----|------|
| **Lists** | Signup sources only (Main List, Popup List, Checkout Opt-in) |
| **Segments** | Everything else — dynamic, auto-updating based on conditions |

**Rule:** Never manually add people to segments. Segments should be condition-based and auto-update. Lists are for opt-in sources only.

### Key Segments to Create in Klaviyo (Day 1)

```
1. "All Subscribers" — Everyone on any list
2. "Customers" — Has placed order at least 1 time
3. "Non-Customers" — Has placed order 0 times
4. "Engaged 30d" — Opened or clicked email in last 30 days
5. "VIP" — Has placed order at least 3 times OR Total revenue > $150
```

### Campaign Send Rules by Segment

| Campaign Type | Send To | Exclude |
|--------------|---------|---------|
| Weekly newsletter | Engaged 30d | Unengaged |
| Product launch | All Subscribers | Suppressed |
| Flash sale | Engaged 30d + Customers | Non-customers (unless very compelling) |
| Re-engagement | Disengaged (30-60 days) | Unengaged (60+) |
| VIP exclusive | VIP segment only | Everyone else |

---

## 8. Intelligence Gaps

| Gap | Current Grade | Upgrade Path |
|-----|--------------|-------------|
| Actual segment sizes for IonWave | D (estimates only) | Measure after 90 days of list building |
| Conversion rates by acquisition source | D (no data) | Tag UTM sources, measure after 60 days |
| Optimal engagement threshold definitions | C (industry standard) | Calibrate with IonWave-specific open/click data after 60 days |
| Interest segment effectiveness | D (no data) | Requires quiz/preference center implementation |

---

*Next: See `email_welcome_series.md` for the canonical welcome sequence that drives Stage 2→3 conversion.*
