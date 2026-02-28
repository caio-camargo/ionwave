# M20: Support Operations

**TUP**: M20 — Customer Support
**Scope**: Reactive support operations — escalation, issue tracking, refund/return policy
**Source Tabs**: 469 (Complaint Escalation), 470 (Customer Issue Log), 471 (Refund Return Tracker), 472 (Returns & Exchanges)
**Version**: 1.0.0 (initial workshop)
**Last Updated**: 2026-02-07

---

## 1. Support Philosophy

**Vision**: Every complaint is a signal and every resolution increases LTV.

IonWave runs a **support-as-retention** model, not a cost center. At pre-revenue scale, the founder handles Tier 2-3 personally. This is a feature, not a bug — it builds product intuition and customer empathy that can't be delegated.

**The service recovery paradox**: Customers who experience a well-managed complaint resolution often become more loyal than those who never had a problem. `[Confidence: B | Source: Zendesk research, HBR | Date: 2026]`

---

## 2. Tool Stack

### Recommended Stack

| Tool | Role | Plan | Cost | Phase |
|------|------|------|------|-------|
| **Gorgias** | Helpdesk | Basic | $60/month (300 tickets) | Day 0 |
| **Loop Subscriptions** | Subscription management in sidebar | Pro (for Gorgias integration) | Per Loop plan | Day 0 |
| **Klaviyo** | Customer data in sidebar + NPS flows | Standard | Per Klaviyo plan | Day 0 |
| **Shopify** | Order management in ticket view | Standard | Per Shopify plan | Day 0 |

`[Confidence: A | Source: Gorgias, Loop Subscriptions, Klaviyo official documentation | Date: 2026]`

### Why Gorgias Over Alternatives

| Factor | Gorgias | Zendesk | Freshdesk | Richpanel |
|--------|---------|---------|-----------|-----------|
| Shopify integration depth | ★★★★★ (native) | ★★★ (bolt-on) | ★★★ (solid) | ★★★★ (good) |
| Pricing model | Per-ticket | Per-agent | Per-agent | Per-user |
| E-commerce AI tuning | Yes | Generic | Generic | Self-service focus |
| Starting cost | $60/mo | $19/agent/mo | $15/agent/mo | $85/user/mo |
| Unlimited seats | Yes (Basic+) | No | No | No |

50% of the top 1,500 Shopify stores use Gorgias. `[Confidence: C | Source: Gorgias marketing claim | Date: 2026]`

### Gorgias Upgrade Path

| Plan | Tickets/mo | Cost/mo | When to Upgrade |
|------|-----------|---------|-----------------|
| Starter | 50 | $10 | Testing only (limited to 3 seats) |
| **Basic** | 300 | $60 | **Launch tier** — IonWave starts here |
| Pro | 2,000 | $360 | >400 tickets/month consistently, need AI + advanced reporting |
| Advanced | 5,000 | $900 | Scaling brand, complex workflows |

Overages: $0.36-$0.40 per ticket beyond plan limit. AI Agent add-on: $1 per AI-resolved ticket. `[Confidence: B | Source: Gorgias pricing page | Date: 2026]`

### Integration Verification Status

| Integration | Status | Notes |
|-------------|--------|-------|
| Gorgias + Shopify | ✅ Verified (A-grade) | Order history, shipping status, refund/return actions in ticket view |
| Gorgias + Klaviyo | ✅ Verified (A-grade) | Campaign/list membership visible, SMS routes to agents |
| Gorgias + Loop | ✅ Verified (A-grade) | Requires Loop Pro plan. Subscription data in Gorgias sidebar. |

> **⚠️ INTELLIGENCE GAP**: Gorgias AI Agent ($1/resolved ticket) — no first-hand testing data. Need to evaluate accuracy on supplement-specific queries before enabling. `[Priority: MEDIUM | Validation: test with 50 sample tickets post-launch]`

### Minimum Viable Support Stack (Month 0-3)

For a bootstrapped founder, don't over-invest in tools before revenue justifies it. Phase-gate spending:

| Phase | Tools | Monthly Cost | When to Activate |
|-------|-------|-------------|-----------------|
| **Month 0-3** | Gorgias Basic + Klaviyo flows (NPS via embedded form) + Google Form (win/loss) | **~$60/month** | Launch |
| **Month 3-6** | + Fairing (post-purchase attribution) | **~$109/month** | When you need attribution data for ad spend decisions |
| **Month 6-12** | + Delighted or Retently (NPS-specific) | **~$134-284/month** | When NPS volume justifies dedicated tool (50+ responses/month) |
| **Month 12+** | + Gorgias Pro (AI + advanced reporting) | **~$360+/month** | When ticket volume >400/month consistently |

**Rule**: No tool gets added until revenue from the previous month covers the tool cost 10x. A $49/month tool needs $490/month in revenue to justify. `[Confidence: D | Source: recommendation based on bootstrapped DTC economics]`

---

## 3. Escalation Framework

### 4-Tier Escalation System

> **⚠️ PHASE-GATING**: This tier system has two modes. Read the correct one for your current stage.

#### Founder Mode (Month 0-6, <500 orders/month)

In Founder Mode, **all tiers are you**. The founder handles Tier 1-4 personally. This is optimal for learning but the tier structure still matters — it determines your **response time and resolution authority** per issue type.

| Tier | Name | Response Time | Handler (Founder Mode) | Scope |
|------|------|--------------|----------------------|-------|
| **Tier 1** | Standard | <4 hours (email), <2 min (chat) | Founder (use macros) | Order status, shipping, basic FAQ, subscription skip/pause |
| **Tier 2** | Issue | <2 hours | Founder (manual) | Product complaints, billing disputes, policy exceptions, ingredient questions |
| **Tier 3** | Angry | <1 hour | Founder (personal touch) | Repeated contacts, social media threats, negative reviews, complex complaints |
| **Tier 4** | Crisis | <30 minutes | Founder + Legal (if needed) | Health issues, lawyer mentions, safety concerns, FDA-reportable events |

**Founder Mode daily time budget**: 30-60 min/day at <100 orders/month, 1-2 hrs/day at 100-500 orders/month.

#### Team Mode (Month 6+, >500 orders/month)

When support takes >2 hours/day for 2+ consecutive weeks, transition to Team Mode. The tier table becomes the **VA training document**.

| Tier | Name | Response Time | Handler (Team Mode) | Scope |
|------|------|--------------|-------------------|-------|
| **Tier 1** | Standard | <4 hours (email), <2 min (chat) | Support VA / Gorgias AI | Order status, shipping, basic FAQ, subscription skip/pause |
| **Tier 2** | Issue | <2 hours | Trained support agent | Product complaints, billing disputes, policy exceptions, ingredient questions |
| **Tier 3** | Angry | <1 hour | Founder/Operator | Repeated contacts, social media threats, negative reviews, complex complaints |
| **Tier 4** | Crisis | <30 minutes | Founder + Legal (if needed) | Health issues, lawyer mentions, safety concerns, FDA-reportable events |

#### Transition Checklist (Founder Mode → Team Mode)

- [ ] Support consistently takes >2 hrs/day for 2+ weeks
- [ ] Founder is being pulled from growth work
- [ ] At least 100 historical tickets exist (for VA training examples)
- [ ] Macro library covers 80%+ of Tier 1 scenarios
- [ ] VA hired and trained on escalation triggers
- [ ] Gorgias rules configured for auto-assignment

`[Confidence: B | Source: DTC industry standard adapted from Danilo's 4-tier model + research benchmarks | Date: 2026]`

### Response Time Benchmarks

| Channel | IonWave Target | Industry Average | Best-in-Class |
|---------|---------------|------------------|---------------|
| Email first response | <1 hour | 4-6 hours | 30-60 minutes |
| Live chat | <30 seconds | <2 minutes | <30 seconds |
| Social media | <30 minutes | 1-2 hours | <30 minutes |

64% of shoppers expect a response within one hour. `[Confidence: B | Source: multiple industry reports | Date: 2026]`

### Escalation Triggers (Automatic Tier Upgrade)

Any of these immediately escalate to Tier 3 or 4:

| Trigger | Escalate To | Rationale |
|---------|-------------|-----------|
| Customer mentions lawyer/legal action | Tier 4 | Legal exposure |
| Customer reports health issue or adverse reaction | Tier 4 | FDA reporting requirement |
| Customer threatens social media post or review | Tier 3 | Brand reputation |
| Profanity or abusive language | Tier 3 | Agent safety + complex resolution |
| 3+ contacts on same issue | Tier 3 | Systemic failure signal |
| Product safety concern (contamination, foreign object) | Tier 4 | Regulatory + liability |
| Chargeback dispute filed | Tier 3 | Revenue + payment processor relationship |

### Tier 3-4 Response Playbook: AAAA+F

For escalated complaints, use the **AAAA+F framework**:

1. **Acknowledge** — "I hear you, and I understand this is frustrating."
2. **Apologize** — "I'm sorry this happened. This isn't the experience we want for you."
3. **Act** — Take concrete action immediately (refund, replacement, credit). Don't ask the customer to do more work.
4. **Add** — Add unexpected value beyond the fix (extra product, extended subscription, personal note from founder).
5. **Follow Up** — Check back in 48-72 hours. "I wanted to make sure everything is resolved."

**Agent Authority Table** (what agents can do without escalation):

| Action | Tier 1 | Tier 2 | Tier 3+ |
|--------|--------|--------|---------|
| Issue store credit | Up to $10 | Up to $25 | Unlimited |
| Process refund | First-order guarantee only | Up to $50 | Unlimited |
| Send free replacement | No | Yes (1 unit) | Yes (any amount) |
| Extend subscription trial | No | +7 days | +30 days |
| Offer discount on next order | 10% | 15-20% | Custom |

`[Confidence: C | Source: Danilo's AAAA+F framework + industry best practice synthesis | Date: 2026]`

---

## 4. Adverse Event Reporting Protocol

### ⚠️ REGULATORY REQUIREMENT — NOT OPTIONAL

FDA requires supplement brand owners to report Serious Adverse Events (SAEs) within **15 business days**. Failure to comply = product is legally "misbranded." `[Confidence: A | Source: Dietary Supplement and Nonprescription Drug Consumer Protection Act, FDA.gov | Date: 2026]`

### What Qualifies as a Serious Adverse Event (SAE)

ANY of these outcomes from product use:
- Death
- Life-threatening experience
- Hospitalization (inpatient)
- Persistent or significant disability/incapacity
- Birth defect or congenital anomaly
- Medical intervention required to prevent one of the above

### Adverse Event Response Procedure

**Step 1: Immediate Response** (within 1 hour of report)
- Tell customer to **stop using the product immediately**
- Advise them to **contact their healthcare provider**
- Express concern and document the interaction

**Step 2: Documentation** (within 24 hours)
- Complete controlled complaint form:
  - Customer name, contact info
  - Product name, lot number, purchase date
  - Symptoms reported (customer's exact words)
  - Timeline (when started using, when symptoms appeared)
  - Medical history relevant to complaint (only what customer volunteers)
  - Whether customer sought medical attention

**Step 3: Assessment** (within 48 hours)
- Classify as SAE or non-serious
- If SAE → proceed to Step 4
- If non-serious → document fully, voluntary FDA submission recommended

**Step 4: FDA Reporting** (within 15 business days of receiving report)
- Submit via FDA MedWatch Form 3500A
- Include all documentation from Step 2
- Retain all records for **6 years**

**Step 5: Internal Review**
- Pull the lot number — check for other reports
- Review manufacturing/fulfillment for that lot
- If pattern emerges → consider voluntary recall consultation with FDA

### IonWave Label Requirements

Product label MUST include a domestic US address or phone number for adverse event reporting. This is a legal requirement, not a customer service choice. `[Confidence: A | Source: 21 CFR, FDA regulations | Date: 2026]`

> **CRITICAL**: Consult with a supplement industry attorney before launch to review adverse event procedures. This protocol is a starting framework, not legal advice. `[Priority: CRITICAL | Track: B — requires legal review]`

---

## 5. Issue Tracking System

### Issue Log Structure

Every support ticket that reveals a product, process, or systemic issue should be logged:

| Field | Description | Example |
|-------|-------------|---------|
| Date | When reported | 2026-03-15 |
| Order # | Shopify order reference | #1042 |
| Customer | Name/email | jane@example.com |
| Issue Type | Category (see below) | Shipping Damage |
| Description | Customer's words | "Package arrived crushed, sachets leaking" |
| Root Cause | What went wrong | Insufficient packaging for sachet format |
| Resolution | What we did | Full refund + free replacement + packaging upgrade |
| Cost | Resolution cost to IonWave | $38 (product) + $8 (shipping) = $46 |
| Resolved? | Yes/No | Yes |
| Systemic? | Pattern or one-off? | Yes — 3rd damage report this month |

### Issue Type Categories

| Category | Description | Expected % of Tickets |
|----------|-------------|----------------------|
| **Shipping/Delivery** | Delays, damage, lost packages, tracking issues | 25-35% |
| **Subscription Management** | Skip, pause, cancel, swap, billing questions | 20-30% |
| **Product Quality** | Taste, texture, efficacy, appearance issues | 10-15% |
| **Wrong Item/Missing** | Wrong product sent, items missing from order | 5-10% |
| **Billing/Payment** | Overcharges, failed payments, refund status | 10-15% |
| **Product Education** | Dosage, usage instructions, ingredient questions | 10-15% |
| **Other** | Catch-all | 5% |

`[Confidence: C | Source: synthesis of DTC supplement ticket distribution research | Date: 2026]`

### Systemic Issue Detection

When any issue type hits **3+ occurrences in 30 days**, it triggers a root cause investigation:

| Occurrences (30-day) | Action |
|----------------------|--------|
| 3 | Flag in weekly review |
| 5 | Root cause analysis required |
| 10 | Process change required — escalate to founder |
| 15+ | Emergency review — potential product/fulfillment issue |

### Support Macro Library

Pre-written templates for Gorgias (customize per-ticket):

**Macro 1: WISMO (Where Is My Order?)**
> Hi [Name]! Thanks for reaching out. I just checked your order #[number] and it's [currently in transit / out for delivery / delivered on [date]]. You can track it here: [tracking link]. If you don't see any updates in the next [24/48] hours, reply to this email and I'll dig deeper for you. — [Agent Name], IonWave

**Macro 2: Subscription Cancel Request**
> Hi [Name], I understand you'd like to cancel your subscription. Before I process that, I wanted to let you know about a couple of options: [1] **Pause** your subscription for 1-3 months (no charge until you resume), or [2] **Skip** your next delivery and adjust your schedule. If you'd still like to cancel, I completely understand — just reply "cancel" and I'll take care of it right away. No hard feelings! — [Agent Name], IonWave

**Macro 3: Product Not Working / Efficacy Complaint**
> Hi [Name], thank you for letting me know. I want to make sure you're getting the most from IonWave. A few questions: [1] How long have you been using it? [2] Are you taking it daily? [3] When do you take it (morning, with meals, etc.)? Most customers notice a difference after 2-3 weeks of consistent daily use. If you've been using it consistently and aren't seeing results after 30 days, we offer a full money-back guarantee on first orders. I'd love to help you get the best experience — let me know! — [Agent Name], IonWave

**Macro 4: Taste/Texture Complaint**
> Hi [Name], I appreciate you sharing that feedback — taste experience matters to us. A few things that often help: [1] **Mix with juice or sparkling water** instead of plain water, [2] **Adjust the amount of water** (more water = more diluted), [3] **Try it cold** — temperature makes a big difference. If you've tried these and still aren't happy, we stand behind our 30-day satisfaction guarantee. Just say the word and I'll process a refund. — [Agent Name], IonWave

**Macro 5: Shipping Damage**
> Hi [Name], I'm really sorry your order arrived damaged. That's not the experience we want for you. I've already queued a free replacement to ship out [today/tomorrow], and you don't need to return the damaged product. You should receive tracking info within [24 hours]. I've also flagged this with our fulfillment team so we can improve packaging. Thanks for your patience! — [Agent Name], IonWave

**Macro 6: Adverse Reaction / Health Concern**
> Hi [Name], thank you for letting me know. Your health is our top priority. I strongly recommend: [1] **Please stop using the product immediately**, [2] **Contact your healthcare provider** if symptoms persist. I'm escalating this to our team lead right now. Someone will reach out to you personally within [1 hour] to get more details and make sure you're taken care of. Is there a phone number where we can reach you? — [Agent Name], IonWave

> **Note**: Macro 6 triggers an immediate Tier 4 escalation. It is NOT a resolution — it's a handoff to the adverse event procedure (Section 4).

---

## 6. Refund & Return Policy

### Policy Summary

| Scenario | Action | Who Pays Return | Keep Product? |
|----------|--------|----------------|---------------|
| First order, within 30 days, any reason | Full refund | N/A — keep the product | Yes |
| First order, opened/used | Full refund | N/A — keep the product | Yes |
| First order, unopened | Full refund | IonWave pays return | Return |
| Repeat order, within 30 days, product issue | Refund or exchange | Case-by-case | Usually yes |
| Repeat order, changed mind | Store credit or exchange | Customer pays return | Return |
| International order, any reason | Full refund | N/A — keep the product | Yes (return shipping uneconomical) |
| Subscription auto-ship, unwanted | Refund current shipment + pause/cancel sub | N/A — keep | Yes |

`[Confidence: B | Source: Synthesis of industry best practices (Onnit, Care/of, 1st Phorm models) | Date: 2026]`

### Why "Keep the Product" for First Orders

1. Used supplements cannot be resold (hygiene/safety regulations) `[Confidence: B]`
2. Return shipping costs often exceed product COGS for sachets `[Confidence: C]`
3. Friction-free refunds build trust and reduce chargeback disputes `[Confidence: B]`
4. 81% of shoppers review return policies before purchasing `[Confidence: B]`

### Refund Processing Workflow

**Step 1**: Verify order (order number, customer email, purchase date)
**Step 2**: Ask reason for refund (select from categories below)
**Step 3**: Process in Shopify (Gorgias has refund action in ticket view)
**Step 4**: Log in refund tracker (see below)
**Step 5**: Tag in Gorgias for reporting

### Refund Reason Categories

| Reason Code | Category | Description | Expected % |
|-------------|----------|-------------|------------|
| RF-001 | Taste/Texture | Didn't like the taste or texture | 15-20% |
| RF-002 | No Results | Didn't feel a difference | 20-25% |
| RF-003 | Shipping Damage | Product arrived damaged | 10-15% |
| RF-004 | Ordered by Mistake | Accidental purchase or wrong item | 5-10% |
| RF-005 | Found Alternative | Switched to competitor or doesn't need | 10-15% |
| RF-006 | Subscription Unwanted | Didn't realize it was a subscription | 15-20% |
| RF-007 | Price/Value | Too expensive for perceived value | 5-10% |
| RF-008 | Adverse Reaction | Health concern (triggers Tier 4) | 1-3% |
| RF-009 | Other | Catch-all | 5% |

`[Confidence: C | Source: Danilo's 7-category framework expanded with research findings | Date: 2026]`

### Refund Rate Health Benchmarks

| Rate | Status | Action |
|------|--------|--------|
| <5% | Excellent | Maintain course |
| 5-8% | Healthy | Monitor monthly |
| 8-12% | Watch | Investigate top reason codes |
| 12-15% | Concerning | Root cause analysis, process changes required |
| >15% | Alarming | Product/positioning problem — escalate to business review |

General e-commerce return rate: 20-30%. Supplement-specific refund target: <12% for healthy business. `[Confidence: C | Source: industry benchmarks + Capital and Growth research | Date: 2026]`

### Refund Tracker Summary (Monthly)

| Metric | How to Calculate | Target |
|--------|-----------------|--------|
| Refund count (MTD) | Count of refund transactions | Track trend |
| Refund rate | Refunds / Total orders × 100 | <8% |
| Average refund amount | Total $ refunded / Refund count | Track trend |
| Top reason code | Most frequent RF-XXX | Monitor for patterns |
| Exchange rate | Exchanges / (Exchanges + Refunds) × 100 | >30% (higher = healthier) |
| Cost of refunds | Total $ refunded + shipping costs | Track as % of revenue |

---

## 7. Chargeback Monitoring & Prevention

### Why This Is Critical for Supplements

Supplements are classified as **high-risk** by payment processors. Stripe's dispute (chargeback) rate threshold is **0.75%** — exceeding it can result in:
- Account under review
- Reserve fund requirements (10-20% of processing volume held)
- Account termination (losing the ability to process payments)
- Forced migration to high-risk processor (higher fees)

`[Confidence: A | Source: Stripe Terms of Service, payment processor industry standards | Date: 2026]`

### Chargeback vs. Refund: Different Metrics, Different Consequences

| Metric | What It Is | Threshold | Consequence of Exceeding |
|--------|-----------|-----------|------------------------|
| **Refund rate** | Refunds you initiate / Total orders | <8% healthy, >15% alarming | Margin erosion, product/positioning signal |
| **Chargeback rate** | Customer disputes with bank / Total transactions | **<0.75%** (Stripe), <1% (general) | Payment processor flags, account at risk |

**Chargebacks are 10x more expensive than refunds**: Each chargeback costs the product amount + $15-25 dispute fee + potential fines + processor relationship damage.

### Proactive Refund Strategy (Prevent Chargebacks)

1. **Refund before they dispute**: If a customer is unhappy and seems likely to dispute, proactively offer a refund. A $30 refund is better than a $30 chargeback + $25 fee.
2. **Clear billing descriptor**: Make sure the credit card statement shows "IONWAVE" (not "SHOPIFY*123"). Unfamiliar descriptors cause "I don't recognize this charge" disputes.
3. **Pre-shipment subscription reminder**: Email before each subscription charge. "Your order ships in 3 days — manage or skip here." Prevents "I didn't authorize this" disputes.
4. **Easy cancellation**: Per FTC Click-to-Cancel guidance, cancellation must be as easy as signup. Making it hard to cancel INCREASES chargebacks. `[Confidence: A | Source: FTC proposed rule]`

### Chargeback Response Protocol

| Rate | Status | Action |
|------|--------|--------|
| <0.25% | Healthy | Monitor monthly |
| 0.25-0.50% | Watch | Review all disputes, identify patterns |
| 0.50-0.75% | Warning | Emergency review — implement all prevention measures |
| >0.75% | Critical | Contact payment processor proactively, consider chargeback management service (Chargeflow, Chargeback.io) |

### Chargeback Tracker (Monthly)

| Metric | How to Calculate | Target |
|--------|-----------------|--------|
| Total chargebacks | Count of disputes filed | Track trend |
| Chargeback rate | Chargebacks / Total transactions × 100 | <0.50% |
| Win rate (disputes won) | Disputes won / Total disputes × 100 | >60% |
| Top chargeback reason | Most frequent reason code | Monitor |
| Chargeback cost | (Product + fees) per chargeback | Minimize |

`[Confidence: B | Source: Payment processor industry standards + Stripe documentation | Date: 2026]`

---

## 8. Support Performance Metrics

### Weekly Support Scorecard

| Metric | Target | Red Flag |
|--------|--------|----------|
| First response time (email) | <1 hour | >4 hours |
| First response time (chat) | <30 seconds | >2 minutes |
| First contact resolution rate | >80% | <60% |
| CSAT (support interactions) | >88% | <75% |
| **Activation rate** (4-criteria behavioral) | >50% | <30% |
| Refund rate | <8% | >15% |
| **Chargeback rate** | <0.50% | >0.75% (CRITICAL) |
| Tickets per 1,000 orders | <700 | >900 |
| Escalation rate (Tier 1 → Tier 2+) | <15% | >25% |
| Cost per ticket | <$5 | >$10 |

> **Activation rate** measures 4 behavioral criteria (see `customer_success_playbook.md` Section 4). It is the single best early predictor of subscription retention — if activation drops below 30%, the problem is upstream of support (onboarding, product, or targeting).

`[Confidence: B-C | Source: Gorgias, industry benchmark synthesis | Date: 2026]`

### Ticket Volume Expectations

| Stage | Orders/Month | Expected Tickets | Ticket:Order Ratio |
|-------|-------------|------------------|-------------------|
| Pre-launch (Month 0-1) | 50-100 | 40-80 | 0.8:1 |
| Early traction (Month 2-6) | 100-500 | 70-350 | 0.7:1 |
| Growth (Month 6-12) | 500-2,000 | 300-1,200 | 0.6:1 |
| Scale (Month 12+) | 2,000+ | 1,000+ | 0.5:1 |

Ratio decreases over time as self-service, FAQ, and automation improve. `[Confidence: C | Source: e-commerce support volume research | Date: 2026]`

---

## 8. Social Media Complaint Handling

### The Public-DM-Public Close Pattern

**Step 1: Acknowledge Publicly** (within 60 minutes)
> "Hi [Name], thanks for flagging this. I'm looking into it right now. Going to send you a DM so we can sort this out quickly."

**Step 2: Move to DM**
> Handle details, order info, and any health-related data privately. Never share order numbers, personal info, or health details in public replies.

**Step 3: Resolve Privately**
> Follow standard resolution procedures (AAAA+F for escalated cases).

**Step 4: Close Publicly**
> "Happy to report this is all sorted, [Name]! Thanks for giving us the chance to make it right." (Only if customer consents to public acknowledgment.)

`[Confidence: B | Source: B Squared Media, DTC social support best practices | Date: 2026]`

### Why This Pattern Matters for Supplements

- Public complaints may involve sensitive health information → privacy requirement
- Other potential customers are watching → demonstrate responsiveness
- 42% of consumers expect social media complaint response within 60 minutes `[Confidence: B]`
- **Never delete public complaints** — signals unwillingness to engage and amplifies negative sentiment

---

## Intelligence Gaps

| Gap | Priority | Validation Path |
|-----|----------|----------------|
| Gorgias AI Agent accuracy on supplement queries | MEDIUM | Test with 50 sample tickets post-launch |
| Actual ticket volume per 1,000 orders (IonWave-specific) | LOW | Measure after first 100 orders |
| Optimal agent authority dollar thresholds | LOW | Calibrate after 3 months of ticket data |
| Adverse event procedure legal review | CRITICAL | Supplement industry attorney review pre-launch |
| Sachet-specific shipping damage rate | MEDIUM | Track after first 500 shipments |
