# Customer Lifecycle & Segmentation

**TUP**: M19 — Customer Lifecycle & CRM
**Version**: 1.0.0
**Last Updated**: 2026-02-07
**Source Tabs**: 454 (Customer Segmentation), 456 (Customer Lifecycle Map), 457 (Customer Lifecycle), 458 (Customer Segmentation Matrix)

---

## 1. Lifecycle Stage Definitions

### Detailed Stage Model

Each lifecycle stage has precise entry/exit triggers, a primary action, a KPI, and email flows mapped to it.

| Stage | Definition | Trigger In | Trigger Out | Primary Action | KPI |
|-------|-----------|-----------|-------------|---------------|-----|
| **Prospect** | Saw an ad, visited site, hasn't purchased | Ad impression or site visit | Add to cart OR 30 days inactive | Retarget, popup, email capture | Email capture rate |
| **Lead** | Gave email, hasn't purchased | Email captured | Purchase OR 60 days inactive | Welcome flow, educational content, first offer | Welcome flow conversion rate |
| **First Purchase** | Bought once | First order placed | Second order OR 60 days post-purchase | Post-purchase flow, review request, cross-sell | Second purchase rate |
| **Repeat** | Bought 2+ times | Second order placed | Subscription OR 90 days since last order | Subscription offer, loyalty program, VIP access | Subscription conversion |
| **VIP** | 3+ purchases OR subscriber | Third order or subscription start | Churn | Exclusive access, new product previews, referral incentives | LTV, referral rate |
| **Champion** | Actively refers, creates UGC, advocates | Referral generated OR UGC submitted | Inactivity | Ambassador program, co-creation, spotlight | Referrals generated |
| **At Risk** | Expected purchase window missed | 50% past expected repurchase date | Purchase OR win-back flow complete | Win-back flow, special offer, feedback request | Win-back rate |
| **Churned** | No purchase despite win-back | Win-back flow failed | Re-purchase | Sunset flow, survey, archive | Reactivation rate |

### Email Flows by Lifecycle Stage

| Stage | Flow | Emails | Timing | Goal |
|-------|------|--------|--------|------|
| **Lead** | Welcome Series | 5 | Day 0, 1, 3, 5, 7 | First purchase |
| **Lead** | Abandoned Cart | 3 | Hour 1, Day 1, Day 3 | Complete purchase |
| **Lead** | Browse Abandon | 2 | Day 1, Day 3 | Return to site |
| **First Purchase** | Post-Purchase | 4 | Day 0, 3, 7, 14 | Education + review |
| **First Purchase** | Cross-Sell | 2 | Day 14, 21 | Second product |
| **First Purchase** | Replenishment | 3 | Day 20, 25, 30 | Reorder before depletion |
| **Repeat** | Subscription Pitch | 3 | After 2nd order: Day 3, 7, 14 | Convert to subscription |
| **VIP** | VIP Exclusives | Ongoing | Monthly | Retention + referral |
| **At Risk** | Win-Back | 3 | Day 0, 7, 14 | Re-purchase |
| **Churned** | Sunset | 2 | Day 0, 30 | Survey + final offer |

**Boundary Note**: M19 defines WHICH flow triggers WHEN (the architecture). M17 (Email) defines WHAT goes in each email (the content, design, copy). See M17 for email content specifications.

### Lifecycle Automation Architecture (Klaviyo)

### Minimum Viable CRM — Day 1 Flows *(U2)*

**A solo founder cannot build 10 flows before first sale.** The absolute minimum for Day 1:

| Flow | Setup Time | Why It Can't Wait |
|------|-----------|-------------------|
| 1. Welcome Series (3 emails) | 3-4 hours | Captures email subscribers from Day 1; no second chance at first impression |
| 2. Post-Purchase (4 emails) | 3-4 hours | Sets expectations for product experience; prevents support tickets |
| 3. Abandoned Cart (3 emails + 1 SMS) | 2-3 hours | Recovers 15-25% of abandoned carts — immediate revenue |

**Total Day 1 setup**: 8-11 hours. Everything else waits.

### Full Flow Architecture (Build Progressively)

**Tier 1 — Pre-Launch** (build before first sale, 8-11 hours):
1. Welcome Series (Email + SMS) — trigger: email/SMS signup
2. Post-Purchase Series (Email) — trigger: first order placed
3. Abandoned Cart (Email + SMS) — trigger: cart created, no checkout

**Tier 2 — Month 1-2** (add when you have data, 6-8 hours total):
4. Replenishment Flow (Email + SMS) — trigger: one-time purchase, Day 20/25/30
5. Subscription Cancel Flow (Email) — trigger: cancellation initiated
6. Dunning Flow (Email + SMS) — trigger: payment failure

**Tier 3 — Month 3+** (add when retention data exists, 4-6 hours total):
7. Win-Back Flow (Email) — trigger: 60 days since last order
8. VIP/Loyalty Flow (Email) — trigger: 3+ orders OR 90+ days subscription
9. Referral Request Flow (Email) — trigger: 2nd order OR 60 days subscription
10. Sunset/Unengaged Flow (Email) — trigger: 180 days no open/click

### Expected Flow Performance Metrics

| Flow | Open Rate | Click Rate | Conversion Rate |
|------|-----------|------------|-----------------|
| Replenishment | 50-60% | 15-20% | 10-15% |
| Abandoned Cart | 40-50% | 10-15% | 15-25% recovery |
| Win-Back | 25-35% | 5-10% | 5-8% reactivation |
| Dunning | 60-70% | 20-30% | 14% payment recovery |
| Post-Purchase | 55-65% | 15-20% | 15-20% subscription conversion (Day 14) |
| Welcome Series | 40-50% | 10-15% | 5-10% first purchase |

---

## 2. Customer Segmentation

### Behavioral Segments (Primary)

These segments drive day-to-day marketing automation and are implemented in Klaviyo:

| Segment | Definition | Size Target | Strategy | Key Automation |
|---------|-----------|-------------|----------|----------------|
| **Prospects (Email Only)** | Opted in, never purchased | 30-40% of list | Nurture → First purchase | Welcome Series |
| **One-Timers** | 1 purchase, no repeat | 25-35% of customers | Convert to repeat buyer | Replenishment + Subscription Offer |
| **Repeat Buyers** | 2+ purchases, no subscription | 15-25% of customers | Convert to subscriber | Subscription pitch + VIP path |
| **Subscribers** | Active subscription | 10-20% of customers | Retain + upsell + activate as advocate | VIP Recognition + Referral |
| **VIPs** | 3+ purchases OR $200+ LTV OR active referrer | 5-10% of customers | White-glove treatment, ambassador program | Exclusive offers + early access |
| **At-Risk (Product)** | Negative feedback, support complaint, low NPS | 3-5% of active | Address product concern, offer alternative | Product-specific intervention |
| **At-Risk (Budget)** | Subscription paused citing cost, skipped orders | 3-5% of active | Downgrade offer, smaller pack, payment flexibility | Budget retention offer |
| **At-Risk (Attention)** | No engagement 45+ days, no negative signal | 4-5% of active | Reminder, re-engagement content, replenishment nudge | Replenishment + re-engagement |
| **Lapsed** | 60-90 days, no purchase | 10-20% of historical | Win back or sunset | Winback sequence |
| **Churned** | 90+ days, no engagement | 20-30% of historical | Clean from active list, suppress ads | Sunset + Suppression |

### RFM Segmentation (Advanced)

RFM (Recency, Frequency, Monetary) analysis provides a deeper, data-driven segmentation layer. **Implement after 500+ customers with order history.**

**RFM Scoring for Supplements (30-Day Consumption Cycle)**:

| Factor | Score 5 | Score 4 | Score 3 | Score 2 | Score 1 |
|--------|---------|---------|---------|---------|---------|
| **Recency** (days since last purchase) | 0-20 | 21-35 | 36-60 | 61-90 | 90+ |
| **Frequency** (number of purchases) | 5+ orders | 3-4 orders | 2 orders | 1 order (sub) | 1 order (one-time) |
| **Monetary** (total spend) | $250+ | $150-249 | $100-149 | $55-99 | <$55 |

**RFM Segments**:

| Segment | RFM Profile | Strategy |
|---------|------------|----------|
| **Champions** | R:4-5, F:4-5, M:4-5 | Loyalty program, early access, referral program |
| **Loyal** | R:3-5, F:3-5, M:3-5 | Upsell, cross-sell, request reviews |
| **Potential Loyalist** | R:4-5, F:2-3, M:2-4 | Nurture to loyalty, subscription push |
| **New Customers** | R:4-5, F:1, M:1-3 | Onboarding, education, quick win |
| **Promising** | R:4-5, F:1, M:1-2 | Engage before they forget |
| **Need Attention** | R:2-3, F:2-4, M:2-4 | Win-back campaign, special offer |
| **At Risk** | R:2-3, F:2-4, M:2-4 | Aggressive win-back, survey why |
| **Can't Lose** | R:1-2, F:4-5, M:4-5 | Personal outreach, whatever it takes |
| **Hibernating** | R:1-2, F:1-2, M:1-2 | Deep discount or let go |
| **Lost** | R:1, F:1, M:1 | Hail mary or remove from list |

**Segment Count by Company Stage**:
- <1,000 customers: **6-8 segments** (behavioral segments above are sufficient)
- 1,000-10,000 customers: **8-10 segments** (add RFM layer)
- 10,000+ customers: **11 segments** (full RFM + behavioral)

**Implementation Path**:
1. **Phase 1 (0-500 customers)**: Use Klaviyo's built-in segmentation with manual criteria. Free.
2. **Phase 2 (500-5,000 customers)**: Add Tresl Segments ($29-79/month) or Lifetimely ($75-149/month) for automated RFM.
3. **Phase 3 (5,000+)**: Peel Analytics ($499+/month) for full automation + Slack alerts.

**Klaviyo Requirements for RFM**: Minimum 500 customers with orders, 180 days order history, orders within last 30 days, some customers with 3+ orders.

### Segment Migration Tracking

Track monthly: how many customers moved up or down segments.

**Goal**: Move customers UP the ladder, prevent downward drift.

| Movement | What It Means | Action |
|----------|--------------|--------|
| New → Repeat ↑ | Second purchase happened | Celebrate, push subscription |
| Repeat → VIP ↑ | High-value customer forming | Unlock VIP perks |
| Active → At-Risk ↓ | Missing expected purchase | Trigger intervention |
| At-Risk → Churned ↓ | Win-back failed | Exit survey, suppress |
| Churned → Active ↑ | Reactivation success | Reset lifecycle, celebrate |

**Monthly Report** (add to MBR from M25):
- Net segment migration (positive = healthy business)
- Segment distribution vs. targets
- Segment-to-segment conversion rates
- Cohort-specific migration patterns

---

## 3. Customer Lifecycle Map (Simplified View)

For quick reference — the full journey from first touch to advocate:

| Stage | Timeframe | Goal | Key Touchpoints | Success Metric |
|-------|-----------|------|-----------------|----------------|
| **Awareness** | Day 0 | Capture attention | Ad (Meta, TikTok) | Hook rate >25% |
| **Interest** | Day 0-3 | Build desire | Landing page, retargeting | CTR >1.5% |
| **Consideration** | Day 1-14 | Remove objections | Email capture, abandoned cart flow | ATC >8% |
| **Purchase** | Day 1-14 | Confirm decision | Order confirmation, payment | CVR >3% |
| **Onboarding** | Day 3-10 | Great first use | How-to content, unboxing | Delivery satisfaction |
| **Retention** | Day 30-90 | Build habit | Replenishment, subscription offer | 2nd purchase >25% |
| **Advocacy** | Day 180+ | Amplify voice | Referral program, review request | Referral rate >10% |

---

## 4. Intelligence Gaps

| Gap | Priority | Validation Path |
|-----|----------|----------------|
| Actual segment size distribution | HIGH | Measure after first 200 customers |
| RFM threshold accuracy for supplements | HIGH | Calibrate after 6 months of cohort data |
| Optimal number of segments at launch | MEDIUM | Start with 6 behavioral, add RFM at 500 customers |
| Segment migration velocity | MEDIUM | Track monthly from Month 3 |
| Real at-risk trigger timing (45 days vs. product-specific) | HIGH | Validate Day 45 hypothesis against actual repurchase curves |
| Lifecycle stage transition rates | HIGH | Track from Day 1, publish after 100 customers |
