# M28 — Channel Strategy & PPC Structure

> Sources: tabs 595 (Channel Landscape), 610 (PPC Campaign Structure)
> Confidence: B (standard DTC channel playbook, IonWave-specific sequencing is C)
> Status: MIGRATED

---

## 1. Channel Landscape — Complete Map

### Acquisition Channel Matrix

| Channel | Stage to Use | Min Budget/mo | CAC Range | Creative Type | Learning Curve | Best For | IonWave Priority |
|---------|-------------|---------------|-----------|---------------|----------------|----------|------------------|
| Meta (FB/IG) | Day 1 | $3K | $25-50 | UGC, static, video | Medium | Broad testing, scale | **P1 — Launch** |
| TikTok | Day 1 | $3K | $20-45 | Native/organic feel | Medium | Younger demo, viral | **P1 — Launch** |
| Influencer Seeding | Day 1 | $500-5K/post | $30-60 | Creator content | Medium | Social proof, content | **P1 — Launch** (see M23) |
| Google Search | After PMF | $2K | $30-60 | Text ads | Low | Intent capture | P2 — After PMF |
| Podcast | After PMF | $5K+/episode | $40-80 | Host read script | Low | Trust, niche audiences | P2 — After PMF |
| YouTube | After PMF | $5K | $35-70 | Long-form video | High | Education, brand | P3 — Scale |
| Affiliate | After PMF | Rev share | $25-45 | Their content | Low | Incremental, low risk | P3 — Scale |
| Taboola/Outbrain | Testing | $2K | $20-40 | Advertorial/listicle | High | Arbitrage, scale | P3 — Testing only |
| Amazon Ads | If on Amazon | $2K | $20-35 | Product ads | Medium | Amazon customers | P4 — Expansion (see amazon_playbook) |
| Email (acquisition) | Testing | $1-3/lead | $35-60 | Lead magnet | Medium | Owned audience | P2 — After PMF |
| Connected TV | Scale | $10K+ | $50-100 | TV spot | High | Brand awareness | P4+ — Much later |
| Retail Media | If retail | $5K+ | Varies | Product ads | Medium | In-store conversion | P4+ — Much later |

### Channel Sequencing — The IonWave Phased Plan

```
PHASE 1: LAUNCH (Month 1-3)
├── Meta (FB/IG) ——— primary paid channel
├── TikTok ————————— second paid channel
├── Influencer seeding — UGC + awareness (see M23)
└── Goal: Find winning creative, prove CAC <$40

PHASE 2: PMF CONFIRMATION (Month 3-6)
├── Google Search ——— capture branded + category intent
├── Podcast testing — 2-3 test episodes, measure
├── Email acquisition — lead magnet funnel
└── Goal: Capture intent, build brand, prove LTV

PHASE 3: DIVERSIFICATION (Month 6-12)
├── YouTube ————————— long-form education content
├── Affiliate program — partner network
├── Native ads ———— test at small scale
└── Goal: Reduce platform concentration risk (<60% from any one channel)

PHASE 4: EXPANSION (Month 12+)
├── Amazon Ads ———— if Amazon channel open
├── Retail Media ———— if retail distribution
├── Connected TV ——— brand scale play
└── Goal: New customer pools, brand building
```

### Platform Concentration Risk Rule

| Metric | GREEN | YELLOW | RED |
|--------|-------|--------|-----|
| Revenue from single channel | <40% | 40-60% | >60% |
| Revenue from top 2 channels | <65% | 65-80% | >80% |
| Channels generating >$5K/mo revenue | 3+ | 2 | 1 |

**Action at RED**: Immediately allocate 20% of marketing budget to testing next-priority channel.

### Planned vs Unplanned Concentration *(Dialogue Upgrade U10)*

| Timeframe | Status | Concentration Rule |
|-----------|--------|-------------------|
| Month 1-3 | **Planned Concentration** | 100% from 1-2 channels is EXPECTED. No alerts. Focus on finding winning creative |
| Month 3-6 | **Diversification Phase** | Begin adding channels. Target: no single channel >70%. Alerts at >80% |
| Month 6+ | **Standard Rules Apply** | GREEN/YELLOW/RED thresholds above are active. RED triggers immediate action |

The concentration risk metric only generates operational alerts starting in Month 6. Before that, concentration is strategy, not risk.

---

## 2. PPC Campaign Architecture

### Campaign Hierarchy

```
Level 1: CAMPAIGN ——— Budget container + objective
  └── Level 2: AD SET ——— Audience, placement, schedule
        └── Level 3: AD ——— Creative, copy, CTA
```

### IonWave Testing Structure

| Campaign | What's Tested | Budget | Duration | Success Metric |
|----------|---------------|--------|----------|----------------|
| C1: Hook Testing | 5 different hooks × 1 format | $50/day | 5-7 days | CTR >1.5% |
| C2: Angle Testing | Top 2 hooks × 5 angles | $50/day | 5-7 days | CPA <$40 |
| C3: Format Testing | Winners × static/video/carousel | $50/day | 5-7 days | ROAS >2x |
| C4: Scale | Proven winners only | Scale 20%/week | Ongoing | Maintain ROAS >2x |

### Decision Triggers

| Signal | Action | Condition |
|--------|--------|-----------|
| **KILL** | Turn off immediately | ROAS <1x after $100 spend |
| **WATCH** | Keep running, monitor | ROAS 1-2x, need more data (wait for $200 spend) |
| **SCALE** | Increase budget 20%/week | ROAS >2x after $200 spend |
| **PAUSE** | Rest the creative | Frequency >3 AND performance declining |
| **REFRESH** | New creative iteration | Performance declining >20% from peak over 7 days |

### Weekly PPC Rhythm

| Day | Task | Time |
|-----|------|------|
| Monday | Review weekend performance, adjust bids | 30 min |
| Wednesday | Kill losers, launch new tests | 45 min |
| Friday | Weekly performance snapshot, report to stakeholders | 30 min |
| Monthly | Full creative audit, budget reallocation, channel mix review | 2 hrs |

### Creative Velocity Target

| Phase | New Creatives/Week | Why |
|-------|-------------------|-----|
| Launch (Month 1-3) | 5-10 | Finding winners, high experimentation |
| Growth (Month 3-6) | 3-5 | Iterating on winners, replacing fatigued |
| Scale (Month 6+) | 2-3 | Maintaining freshness, seasonal angles |

---

## 3. Channel Economics Summary

### Cost-to-Acquire by Channel (Expected IonWave Ranges)

| Channel | Optimistic CAC | Realistic CAC | Pessimistic CAC | Break-even CAC |
|---------|---------------|---------------|-----------------|----------------|
| Meta | $25 | $35 | $50 | $49 (first order) |
| TikTok | $20 | $30 | $45 | $49 |
| Google Search | $30 | $45 | $60 | $49 |
| Influencer | $20 (w/ seeding) | $40 | $60 | $49 |
| Podcast | $35 | $55 | $80 | $49 |
| Amazon | $20 | $30 | $45 | $35 (lower margin) |

**Note**: Break-even CAC assumes first-order contribution margin. With subscription LTV (est. 4-6 orders), acceptable first-order CAC is higher — up to $49 (breaking even on first order) if retention proves out. See `constraint_scenarios.md` for sensitivity analysis.

---

## 4. Multi-Touch Attribution Model *(Dialogue Upgrade U2)*

### The Problem
When running Meta + TikTok + Influencer + Google simultaneously, how do you know which channel drives the sale? Supplement purchase cycles are 2-4 weeks — the touch that gets the click isn't always the touch that caused the decision.

### Day 1 Attribution Stack (Simple, Sufficient)

| Method | What It Captures | Trust Level |
|--------|-----------------|-------------|
| Post-purchase survey: "How did you hear about us?" | Self-reported first touch | HIGH for strategic decisions |
| UTM tagging on all links | Last-click digital attribution | HIGH for tactical optimization |
| Unique discount codes per channel | Channel-specific conversion | HIGH for influencer/podcast |
| Branded search volume trend | Brand awareness proxy | MEDIUM — directional only |

### Decision Rules

| Scenario | Which to Trust | Why |
|----------|---------------|-----|
| Self-reported and UTM agree | Both — high confidence | Signals align |
| Self-reported says "podcast" but UTM says "Google" | Trust self-reported for STRATEGY | They heard about you on podcast, then Googled you to buy. Podcast gets strategic credit |
| UTM says "Meta" but no self-reported signal | Trust UTM for TACTICS | Use for ad optimization, bid adjustments |

### When to Upgrade Attribution
Do NOT build sophisticated attribution (MTA, MMM, Rockerbox, Northbeam) until >$50K/mo total ad spend. Below that threshold, simple methods above are sufficient and more reliable for small sample sizes.
