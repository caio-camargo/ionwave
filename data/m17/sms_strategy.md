# M17: SMS Strategy & Compliance

**TUP**: M17 — Email & SMS
**Version**: 1.0.0
**Date**: 2026-02-07
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 427, 428; TCPA regulations; Klaviyo SMS benchmarks

---

## 1. SMS at IonWave's Scale: Worth It?

**Short answer: Not yet. Defer to Month 3+.**

| Factor | Assessment |
|--------|-----------|
| Subscriber volume needed | Minimum 500 SMS opt-ins for meaningful impact [Confidence: C \| Source: DTC SMS heuristic] |
| Expected opt-in rate | 30-40% of email subscribers also opt into SMS [Confidence: B \| Source: Klaviyo SMS benchmark] |
| Cost per SMS | $0.01-0.03/message (US, Klaviyo pricing) [Confidence: B \| Source: Klaviyo pricing 2025] |
| IonWave timeline | Won't reach 500 SMS subscribers until Month 3-4 at earliest |
| **Recommendation** | **Collect SMS opt-ins from Day 1, but don't send SMS until 500+ subscribers** |

**Why collect early but send later:** Building the SMS list costs nothing (add checkbox to popup/checkout). But sending SMS to 50 people has negligible revenue impact and high per-message cost relative to email. Wait until volume justifies the channel.

---

## 2. SMS vs. Email: Channel Selection

| Use Case | Channel | Why |
|----------|---------|-----|
| **Shipping notification** | SMS | Time-sensitive, brief, high open value |
| **Flash sale (24hr or less)** | SMS | Urgency requires immediate attention |
| **Abandoned cart (last resort)** | SMS | After 2 emails, SMS is the pattern interrupt |
| **Back in stock alert** | SMS | Time-sensitive, brief |
| **VIP exclusive offer** | SMS | Feels personal, exclusive |
| **Weekly newsletter** | Email | Long-form, SMS not appropriate |
| **Educational content** | Email | Too long for SMS |
| **Post-purchase onboarding** | Email | Multi-step, needs space |
| **Review request** | Email (primary), SMS (follow-up) | Email gives context, SMS is the nudge |
| **Win-back** | Email (primary) | SMS for win-back can feel intrusive at this scale |

**Rule of thumb**: SMS for urgency and brevity. Email for everything else. [Confidence: B | Source: DTC channel strategy best practices]

---

## 3. TCPA Compliance — Non-Negotiable

The Telephone Consumer Protection Act (TCPA) governs SMS marketing. Violations carry fines of **$500-$1,500 per message**. This is not optional.

### Compliance Checklist

| Requirement | Implementation | Status |
|-------------|---------------|--------|
| **Explicit opt-in required** | Separate SMS consent checkbox (cannot be bundled with email consent) | [VOID — requires: Shopify popup/checkout implementation] |
| **Clear opt-in language** | "By checking this box, you consent to receive marketing text messages from IonWave. Msg & data rates apply. Reply STOP to unsubscribe." | Required at every collection point |
| **Easy opt-out** | Every SMS must include opt-out instructions OR honor STOP replies instantly | Klaviyo handles STOP automatically |
| **Quiet hours** | Only send between 8am-9pm **recipient's local time** | Configure in Klaviyo flow settings |
| **Never buy SMS lists** | All SMS subscribers must be organic opt-ins | Policy: hard rule, no exceptions |
| **Message frequency disclosure** | Tell subscribers how often you'll text at opt-in | "Up to 4 msgs/month" |
| **Proper sender registration** | Register toll-free number or short code with carrier | Klaviyo handles during onboarding |

[Confidence: A | Source: TCPA statute + FCC enforcement guidance]

**Founder Mode warning**: If you're unsure about SMS compliance, just don't send SMS until you've verified your setup. The fines are real and disproportionate to the revenue from early-stage SMS marketing.

---

## 4. SMS Templates

### Abandoned Cart SMS (48 hours, after Email 2)

```
Hey {{first_name}}! You left IonWave in your cart.
Complete your order: {{cart_link}}

Reply STOP to opt out
```

**Timing**: 48 hours after cart abandonment, only if Email 1 and 2 haven't converted
**Character count**: ~120 (under 160 limit)

### Shipping Notification

```
Your IonWave is on the way! 📦
Track: {{tracking_link}}
```

**Timing**: When shipping label created
**Character count**: ~65

### Flash Sale

```
24 HOURS ONLY: 25% off everything
Code: FLASH25
{{shop_link}}

Reply STOP to opt out
```

**Timing**: Sale start time (morning, 8-10am)
**Character count**: ~100

### Replenishment Reminder

```
Hey {{first_name}}! Running low on IonWave?
Reorder now: {{reorder_link}}

Or subscribe & save: {{subscribe_link}}

Reply STOP to opt out
```

**Timing**: 3 days before projected depletion
**Character count**: ~140

### Back in Stock

```
{{first_name}}, {{product_name}} is back in stock!
Get it before it sells out: {{product_link}}

Reply STOP to opt out
```

**Timing**: Immediately when back in stock
**Character count**: ~120

---

## 5. SMS Flow Integration

SMS doesn't replace email — it supplements specific flows:

| Flow | SMS Role | Trigger |
|------|----------|---------|
| Abandoned Cart | Last-resort recovery (after 2 emails) | 48hr, if no purchase and no Email 2 click |
| Replenishment | Urgency nudge | 3 days before projected depletion |
| Flash Sale (campaigns) | Primary channel for time-limited offers | Campaign send |
| Shipping | Transactional notification | Shipping label created |
| Review Request | Follow-up nudge (after email) | Day 21 post-purchase, if no review submitted |

### SMS Frequency Rules

| Rule | Setting |
|------|---------|
| Max SMS per subscriber per month | 4 messages |
| Quiet hours | 8am-9pm recipient local time |
| Flow SMS | Max 1 SMS per flow |
| Campaign SMS | Max 2 per month |
| Transactional SMS (shipping) | Always send (doesn't count toward limit) |

---

## 6. SMS Metrics & Benchmarks

| Metric | Target | Source |
|--------|--------|--------|
| SMS opt-in rate (of email subscribers) | 30-40% | [Confidence: B \| Source: Klaviyo SMS benchmarks] |
| SMS open rate | 95%+ | [Confidence: A \| Source: SMS industry data — virtually all SMS are opened] |
| SMS click rate | 15-25% | [Confidence: B \| Source: Klaviyo DTC SMS avg] |
| SMS revenue per recipient | $0.10-0.50 | [Confidence: C \| Source: DTC SMS avg — varies wildly by segment] |
| SMS unsubscribe rate | <2% per campaign | [Confidence: B \| Source: if higher, you're sending too often] |
| Cart recovery via SMS | 2-5% incremental (on top of email) | [Confidence: C \| Source: Klaviyo SMS cart recovery data] |

---

## 7. Implementation Timeline

| Phase | Action | When |
|-------|--------|------|
| **Pre-Launch** | Add SMS opt-in checkbox to popup and checkout | Before launch |
| **Pre-Launch** | Register sender number in Klaviyo | Before launch |
| **Month 1-2** | Collect SMS opt-ins passively. **Do not send any SMS.** | Ongoing |
| **Month 3** | If 500+ SMS subscribers: Launch shipping notification SMS (transactional, low risk) | Month 3 |
| **Month 3** | Add SMS to abandoned cart flow (48hr, after Email 2) | After shipping SMS is working |
| **Month 4+** | Add replenishment SMS and flash sale SMS | When comfortable with SMS channel |
| **Month 6+** | Full SMS strategy with campaign sends | When list size justifies |

---

## 8. Intelligence Gaps

| Gap | Grade | Upgrade Path |
|-----|-------|-------------|
| IonWave SMS opt-in rate | D | Measure after 60 days of popup with SMS checkbox |
| SMS cart recovery incrementality | C | A/B test: cart flow with vs. without SMS after 200+ entries |
| Optimal SMS frequency for IonWave audience | C | Start conservative (2/month), increase if unsubscribe <1% |
| SMS ROI at IonWave scale | D | Calculate after 90 days of SMS sending |
| Carrier registration requirements | B | Verify with Klaviyo during onboarding — may need A2P 10DLC registration |

---

*SMS is a high-impact channel — but only at sufficient scale. Collect opt-ins from Day 1, send from Month 3+. See `email_flow_architecture.md` for how SMS integrates with email flows.*
