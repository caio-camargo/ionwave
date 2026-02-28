# M24: Launch Operations — War Room, 72-Hour Protocol, First 10 Orders

**TUP**: M24 — Fulfillment & Inventory
**Version**: 1.0.0
**Date**: 2026-02-09
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 523, 524, 525; M9 store_setup_and_launch.md; M30 analytics_dashboards.md

---

## 1. Launch Day War Room

### The Philosophy

Launch day is a controlled experiment, not a celebration. Every minute matters. The war room protocol ensures every system is monitored, every order is tracked, and every problem is caught before the customer notices.

**Who's in the war room**: At IonWave's scale, the "war room" is Nilo + any active collaborator monitoring a shared Slack/Discord channel. No physical room needed — just phones on, notifications on, response time <15 minutes.

### Pre-Launch Checklist (T-24 to T-0)

| Time | Task | Verification | Owner |
|------|------|-------------|-------|
| **T-48** | Pre-launch inventory audit | Physical count matches Shopify. Lot numbers logged. | Ops |
| **T-24** | Final inventory check (at 3PL or self-storage) | Units available = planned launch quantity | Ops |
| **T-24** | Test complete customer journey (browse → cart → checkout → order confirmation) | Order appears in Shopify + triggers fulfillment | Founder |
| **T-24** | Verify email flows armed and live (M18 alignment) | Welcome, order confirm, shipping confirm all trigger | Ops |
| **T-12** | Verify all tracking pixels firing (Meta, GA4, Klaviyo) | Use pixel helper extensions. Check Events Manager. | Ops |
| **T-12** | Confirm ad creatives approved in Meta/Google | All ads in "Active" status, not "In Review" | Founder |
| **T-6** | Confirm payment processing active (Shopify Payments + PayPal) | Test transaction $1 → refund | Ops |
| **T-6** | Confirm discount codes active (if applicable) | Test code → verify discount applies at checkout | Ops |
| **T-2** | Alert team: launch imminent. Everyone on phones. | Confirmation from all war room contacts | Founder |
| **T-1** | Final go/no-go decision | All T-24 through T-2 checks GREEN | Founder |

### Go/No-Go Decision Matrix

| Check | GREEN (Go) | RED (No-Go) |
|-------|-----------|-------------|
| Inventory | Available and confirmed | Inventory discrepancy >5% |
| Payment processing | Test transaction successful | Payment processor issue |
| Email flows | All flows tested and live | Welcome or order confirm not firing |
| Tracking pixels | All pixels verified | Meta pixel not firing (can't measure ROAS) |
| Ads | All approved and ready | Primary ads still in review |
| 3PL/Fulfillment | Ready to process orders | 3PL not onboarded or integration broken |
| Website | Load time <3s, checkout works | Checkout errors or site down |

**Rule**: If ANY check is RED, delay launch until fixed. There are no partial launches. A broken checkout or unfiring pixel on Day 1 wastes the most expensive traffic you'll ever buy.

### Launch Abort & Restart Protocol (U7)

If a go/no-go check is RED and launch is aborted:

1. **Communicate immediately**: Email/message any early-access or waitlist members: "We're putting the finishing touches on IonWave. Launch is coming soon — we want to make sure everything is perfect."
2. **Do NOT rush**: Minimum 48 hours between abort and next go/no-go attempt
3. **Reset all checks**: Re-verify ALL T-48 through T-1 checks, not just the failed one (cascading failures are common)
4. **Document**: Log what caused the abort, who caught it, and the fix applied
5. **Re-clear**: Fresh go/no-go decision with all checks GREEN before proceeding

[Confidence: A | Source: D2C launch protocols]

### Soft Launch Protocol — Friends & Family (U8)

**Do NOT go straight from checklist to paid traffic.** Run a soft launch first:

| Day | Action | Purpose |
|-----|--------|---------|
| **T-3** | Open store to a hand-picked list (10-20 people: friends, family, beta testers) | Smoke-test the system with friendly users |
| **T-3 to T-1** | They place real orders, go through real checkout, receive real product | Catch payment, fulfillment, email, and tracking issues before they cost money |
| **T-1** | Fix any issues discovered during soft launch | |
| **T-0** | Hard launch with ads (only after soft launch is clean) | |

**Who to include**: People who will honestly report problems, not just say "looks great." Ideal: 5 family/friends + 5 people who match the ICP (health-focused, willing to give candid feedback).

**What to verify from soft launch orders**:
- Payment processed correctly
- Order confirmation email received
- Fulfillment triggered (3PL or self-pack)
- Tracking email sent and updates correctly
- Product arrives in good condition with correct packaging
- Post-purchase email flow begins (M18 Welcome Track B)

[Confidence: B | Source: D2C launch best practices]

### Launch Sequence (T-0 Forward)

| Time | Action | What to Monitor | Escalation Trigger |
|------|--------|----------------|-------------------|
| **T+0** | Turn on ads (Meta first, Google second) | Ad status = "Active" | Ad rejected → review creative, resubmit |
| **T+5m** | Verify ads are serving impressions | Impressions >0 in Ads Manager | Zero impressions after 10 min → check targeting, budget |
| **T+15m** | Check first impressions and reach | CPM within expected range ($15-40 for supplement) | CPM >$60 → pause, review audience |
| **T+30m** | Monitor CTR on ads | CTR >0.8% | CTR <0.5% → creative problem. Swap creative. |
| **T+1hr** | Check first site visits | GA4 real-time shows traffic from ads | Zero site traffic → tracking issue or ad serving issue |
| **T+1hr** | Check add-to-cart events | Any ATC events in GA4/Meta? | Zero ATC after 100+ visits → landing page problem |
| **T+2hr** | Check for first orders | Any orders in Shopify? | Zero orders after 200+ visits → checkout problem or pricing |
| **T+4hr** | Verify fulfillment triggered | First orders showing in 3PL/packing queue | Orders stuck in Shopify → integration issue |
| **T+4hr** | Verify order confirmation emails sent | Klaviyo shows email delivered | Emails not sending → Klaviyo trigger check |
| **T+8hr** | Mid-day performance review | Revenue, orders, CAC, MER (M30 alignment) | CAC >$75 → concern. CAC >$100 → consider pausing. |
| **T+12hr** | End of Day 1 report | Full day metrics logged | — |

### War Room Contact Sheet

| Role | Name | Phone | Backup |
|------|------|-------|--------|
| Founder / Decision Maker | [Nilo] | [Phone] | — |
| Ops / Technical | [TBD] | [Phone] | [Email] |
| 3PL Emergency | [3PL account manager] | [Phone] | [Support email] |
| Shopify Support | — | — | support@shopify.com |
| Payment Processor | — | — | [Stripe/Shopify Payments support] |

**Communication cadence**: Update Slack/Discord channel at T+1hr, T+4hr, T+8hr, T+12hr minimum. More often if issues arise. All data goes in one channel — no DMs.

### Day 1 Ad Budget Cap (U9)

**Hard cap Day 1 spend: $100-200.** Enough to validate, not enough to bleed.

| Day | Max Spend | Condition to Increase |
|-----|-----------|----------------------|
| Day 1 | $100-200 | Do NOT increase regardless of results |
| Day 2 | 1.5x Day 1 ($150-300) | Only if Day 1 metrics are GREEN |
| Day 3 | 2x Day 1 ($200-400) | Only if Day 1+2 metrics are GREEN |

**Why cap Day 1**: "Everything looks great for 2 hours, spend $500, then discover tracking was broken" is the #1 launch day money-burning scenario. Cap prevents this. Verify data quality before scaling.

### Site Down Emergency Protocol (U16)

| Scenario | Diagnosis | Action | Timeline |
|----------|-----------|--------|----------|
| **Shopify platform down** | Check status.shopify.com | Wait. Pause all ads immediately. | <5 min to pause ads |
| **Your store specifically down** | Disable third-party apps one by one | Identify conflicting app. Contact Shopify support. | <15 min |
| **Checkout broken but site up** | Test checkout from guest browser | Switch to "password" page. Pause all ads. Fix before resuming. | <5 min to pause |
| **Payment processor down** | Test with alternate card/method | Switch to backup processor. If none, pause ads. | <10 min |

**Rule**: Every minute of paid traffic to a broken site is burned money. Speed of ad pausing is critical.

### Founder Energy Management (U27)

Launch week is a marathon, not a sprint:
- **Sleep**: Minimum 6 hours per night. Non-negotiable. Bad decisions from Day 2 fatigue cost more than missed monitoring.
- **Meals**: Pre-prepare or order. Don't skip meals to watch dashboards.
- **Offline window**: 1 hour completely offline per day. Delegate monitoring to a trusted person during this window.
- **DND with exceptions**: Phone on Do Not Disturb with exceptions only for war room contacts.

[Confidence: B | Source: D2C launch protocols, M9 launch checklist alignment]

---

## 2. Post-Launch 72-Hour Protocol

### The Three Phases

The first 72 hours determine whether your launch is a signal or a fluke. Monitor aggressively, but don't over-react. Give each ad and channel at least $50-100 of spend before making kill decisions.

### Phase 1: Survival Mode (Hour 0-24)

**Monitoring cadence**: Every 2 hours during waking hours

| Check | Target | Data Source |
|-------|--------|-------------|
| Ads serving | Impressions >0, no rejections | Meta Ads Manager, Google Ads |
| Orders processing | All orders in "Fulfilled" or "Unfulfilled" (not stuck) | Shopify Orders |
| No checkout errors | Error rate = 0% | Shopify Analytics → Live View |
| Payment processing | All payments captured | Shopify Payments dashboard |
| Email flows firing | Welcome + order confirm delivered | Klaviyo flow analytics |
| Site performance | Load time <3s | Google PageSpeed / Shopify Analytics |

**Critical Hour 0-24 metrics**:

| Metric | Target | Source | Note |
|--------|--------|--------|------|
| CTR (ads) | >1% | Meta/Google Ads | Below 0.5% = creative problem |
| CPC | <$2.00 | Meta/Google Ads | Supplement vertical avg $1.50-2.50 |
| Any purchases | >0 | Shopify | Even 1 purchase = system works |
| Fulfillment | 100% of orders processed | 3PL/Self-fulfill | Any stuck order = investigate immediately |

**Red flags requiring immediate action**:
- Ad rejected → Review and resubmit. Don't launch new creative — fix the flagged one.
- Checkout broken → Take site to "password" mode if necessary. Fix before any more traffic.
- Tracking not firing → Pause ads. Fix tracking. Do NOT burn money on unmeasured traffic.
- 3PL not processing → Switch to self-fulfill temporarily. Escalate to 3PL immediately.

### Phase 2: Stabilize (Hour 24-48)

**Monitoring cadence**: Every 4 hours

| Check | Target | Action |
|-------|--------|--------|
| Performance trends | Metrics improving or stable (not declining) | If declining, investigate before spending more |
| Ad kill decisions | Kill any ad set with MER <0.5x after $50 spend | Per M30: MER is the north star, not platform ROAS |
| First orders shipped | Verify first orders shipped from 3PL | Check tracking numbers sync to Shopify |
| Customer support | Respond to any tickets within 4 hours (M20 SLA) | Log all questions — they're product/site feedback |
| Subscription rate | Track what % of orders are subscription | Target: >40% subscription at launch (per M10) |

**Key decision at Hour 48**: Are we seeing signal?

| Signal | Interpretation | Action |
|--------|---------------|--------|
| Orders >10, CAC <$50, some subs | Strong signal | Increase budget 20% on winning ad sets |
| Orders 5-10, CAC $50-75 | Moderate signal | Hold budget. Optimize creatives and audiences. |
| Orders <5, CAC >$75 | Weak signal | Review: landing page, offer, audience, creative. Do NOT scale. |
| Zero orders | No signal | Pause ads. Full audit: checkout, tracking, offer, targeting. |

### Phase 3: Optimize (Hour 48-72)

**Monitoring cadence**: 3x daily (morning, midday, evening)

| Check | Target | Action |
|-------|--------|--------|
| Scale winners | MER >1.5x | Increase budget 20% per day (max) |
| Kill losers | MER <1.0x after $100 spend | Pause. Reallocate budget. |
| Fulfillment audit | All orders from Day 1-2 shipped and tracking | Any delays → escalate |
| Customer feedback | Read every email, DM, review | Log patterns. Feed back to product/site. |
| Document hypotheses | What's working? What's not? Why? | Write in SESSION_LOG or dedicated launch log |

### 72-Hour Launch Scorecard

| Metric | Green | Yellow | Red | Actual |
|--------|-------|--------|-----|--------|
| Total Orders | 15+ | 8-14 | <8 | [ ] |
| Revenue | $500+ | $250-499 | <$250 | [ ] |
| CAC | <$50 | $50-75 | >$75 | [ ] |
| MER | >1.0x | 0.5-1.0x | <0.5x | [ ] |
| Subscription Rate | >40% | 25-40% | <25% | [ ] |
| Fulfillment Rate | 100% | 95-100% | <95% | [ ] |
| Support Response | <4hr | 4-8hr | >8hr | [ ] |
| Pixel/Tracking | All firing | 1 minor issue | Major tracking gap | [ ] |

**Decision at 72 hours**:
- 6+ GREEN → Continue scaling. You have product-market fit signal.
- 4-5 GREEN → Continue but optimize. Focus on RED/YELLOW areas.
- <4 GREEN → Pause and regroup. Don't throw money at a broken funnel.

### Inventory Depletion Tracking (U24)

Add to the 72-hour scorecard:

| Metric | Value | Calculation |
|--------|-------|-------------|
| Units sold (72hr) | [ ] | Shopify orders |
| Sell rate (units/hour) | [ ] | Total units ÷ hours of active selling |
| Days of stock at current rate | [ ] | Available inventory ÷ daily sell rate |
| Stockout risk? | [ ] | If days-of-stock < 30, begin PO immediately |

**Early stockout warning**: If 72-hour sell rate extrapolates to stockout within 30 days, initiate PO with manufacturer immediately. Do not wait for the standard reorder point — ad-driven launch demand can deplete inventory faster than steady-state.

### Post-Launch Retrospective (U17)

Schedule a 1-hour retrospective at Hour 72 or Day 4:

| Question | Notes |
|----------|-------|
| What worked? | [ ] |
| What broke? | [ ] |
| What surprised us? | [ ] |
| What would we do differently? | [ ] |
| Specific action items | [ ] |

**Feed findings to**: M14 (testing hypotheses), M30 (analytics baseline), M20 (support refinements), M24 (fulfillment updates). This becomes the first entry in an ongoing Launch Log.

[Confidence: B | Source: D2C launch benchmarks, M30 MER framework]

---

## 3. First 10 Orders Playbook

### Why First 10 Matter

The first 10 orders are not just sales — they're data. Each order tells you something about who your customer is, how they found you, and whether your system works. Treat them with extreme attention.

### Per-Order Checklist

For each of the first 10 orders, personally verify:

| Check | What to Look For |
|-------|-----------------|
| ☐ Order processed correctly in Shopify | Payment captured, no errors, correct product/variant |
| ☐ Fulfillment triggered (3PL or self) | Order appears in fulfillment queue. Not stuck. |
| ☐ Correct product picked and packed | Right SKU, right quantity, lot number logged |
| ☐ Tracking email sent to customer | Klaviyo or Shopify transactional email delivered |
| ☐ Acquisition channel noted | UTM source → how did they find us? |
| ☐ Product/variant purchased | Which SKU? Any pattern? |
| ☐ Subscription or one-time? | Track ratio from Day 1 |
| ☐ AOV recorded | Higher or lower than projected $49? |
| ☐ Any support questions? | Log every question — they reveal friction |
| ☐ Personal thank-you email sent | Founder writes. Not automated. First 10 only. |
| ☐ Feedback request planted | Ask: "Would you be willing to share your experience after trying IonWave for a week?" |

### First 10 Orders Tracker

| # | Date | Channel | Product | Sub? | AOV | Ship? | Feedback? | Notes |
|---|------|---------|---------|------|-----|-------|-----------|-------|
| 1 | | | | | | | | |
| 2 | | | | | | | | |
| 3 | | | | | | | | |
| 4 | | | | | | | | |
| 5 | | | | | | | | |
| 6 | | | | | | | | |
| 7 | | | | | | | | |
| 8 | | | | | | | | |
| 9 | | | | | | | | |
| 10 | | | | | | | | |

### Founder Thank-You Email (Template)

> Subject: Thank you — personally
>
> Hey {{first_name}},
>
> This is Nilo. I'm the founder of IonWave.
>
> You're one of our very first customers, and I want you to know that means something.
>
> Your order is on its way. When it arrives, tear open a sachet and pour it into a glass of water. That's it. One sachet, every morning. Let the minerals do their work.
>
> If anything is off — the taste, the packaging, the experience — reply to this email. I read everything.
>
> Thank you for taking a chance on us.
>
> — Nilo
>
> P.S. After a week, I'd love to hear how you're feeling. I'll check in.

**Stop sending at**: Order #10. After that, the automated Welcome Track B (M18) takes over. But make notes on what questions people ask — those feed M14 (testing) and M20 (support).

### Learnings Template (Complete After Order #10)

| Question | Answer |
|----------|--------|
| Most common acquisition channel | [ ] |
| Subscription vs one-time ratio | [ ] / [ ] |
| Average order value | $[ ] |
| Most popular product/variant | [ ] |
| Any fulfillment issues? | [ ] |
| Common questions/concerns | [ ] |
| What surprised us? | [ ] |
| Immediate changes needed | [ ] |

**Feed learnings to**:
- M30 Analytics → Update baseline assumptions
- M14 Testing → First optimization hypotheses
- M19 CRM → Customer profile validation
- M13 Media Buying → Channel performance baseline

### First Negative Review Protocol (U23)

The first complaint is inevitable — and it's the most valuable feedback you'll receive:

1. **Founder responds personally within 4 hours.** Not a template. Not a support agent. Nilo.
2. **Do NOT be defensive.** Acknowledge → Apologize → Resolve.
3. **Determine type**:
   - **Systemic** (packaging damaged, product taste off, delivery issue): Escalate immediately. Fix the root cause.
   - **Subjective** (didn't like taste, didn't feel different): Offer full refund, no questions asked. Learn from it.
4. **Log in detail**: Product, lot number, complaint category, resolution, time to resolve
5. **Follow up**: Check back in 1 week. Did the resolution satisfy them?

**Applies to**: Email complaints, social media mentions, review platforms, DMs. Monitor all channels daily during first 30 days.

[Confidence: C | Source: D2C first-customer best practices, Danilo tab 525]

---

## 4. Cross-TUP Launch Alignment

Multiple TUPs have launch day dependencies. This is the integration map:

| TUP | Launch Day Dependency | Status Check |
|-----|----------------------|-------------|
| **M9** | Shopify store live, checkout works, payment processing active | T-24 verification |
| **M13** | Ads approved and ready to activate | T-6 verification |
| **M17/M18** | Email flows armed (welcome, order confirm, shipping confirm) | T-12 verification |
| **M30** | Analytics dashboard live (GA4, Shopify Analytics, ad platforms) | T-24 verification |
| **M20** | Support channels active (email, chat if applicable) | T-12 verification |
| **M24** | Inventory confirmed, fulfillment ready (3PL or self) | T-48 verification |
| **M14** | Pixel tracking verified for future optimization | T-12 verification |

**Critical path for launch**: M9 (store) → M24 (inventory) → M13 (ads) → Launch. If any of these three aren't ready, everything else is moot.

---

*Launch day is a system test, not a celebration. Monitor aggressively for 72 hours, treat every order as a learning opportunity, and don't scale until you see signal. See `3pl_and_fulfillment.md` for fulfillment details and `inventory_management.md` for ongoing inventory operations.*
