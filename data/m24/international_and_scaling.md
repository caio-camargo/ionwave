# M24: International Shipping & Fulfillment Scaling

**TUP**: M24 — Fulfillment & Inventory
**Version**: 1.0.0
**Date**: 2026-02-09
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tab 522; M28 expansion_paths.md; M9 operations_governance.md

---

## 1. International Strategy: US First, Then Expand

### The Rule

**US only at launch. Full stop.**

International shipping adds customs, duties, VAT, regulatory compliance, longer transit, and more customer service complexity. None of this is worth it until US operations are proven and profitable.

| Phase | Geography | Trigger | Estimated Timeline |
|-------|-----------|---------|-------------------|
| **Phase 1** | US only (contiguous 48 states) | Launch | Month 1-9 |
| **Phase 1.5** | US + Alaska/Hawaii (USPS Priority) | Customer demand | Month 3+ |
| **Phase 2** | US + Canada | US MRR >$50K, proven unit economics | Month 9-12 |
| **Phase 3** | US + Canada + UK | US MRR >$100K, international demand signal | Month 12-18 |
| **Phase 4** | Additional markets (EU, Australia) | US MRR >$250K, dedicated ops capacity | Month 18+ |

[Confidence: B | Source: M28 expansion_paths.md, D2C international expansion benchmarks]

### Why Not International at Launch

| Reason | Detail |
|--------|--------|
| **Customs/duties complexity** | DDP (Delivered Duty Paid) vs DDU (Delivered Duty Unpaid) — choose wrong and customers refuse delivery |
| **Regulatory** | Health Canada requires NPN (Natural Product Number) for supplements. UK requires MHRA notification. |
| **Shipping cost** | $15-35 per order international vs $5-12 domestic |
| **Returns** | International returns are expensive and slow |
| **Customer service** | Time zone differences, currency conversion, local expectations |
| **Focus** | Every hour on international ops is an hour not spent proving the US model |

---

## 2. Phase 2: Canada Expansion

### When to Enter Canada

**Trigger**: US MRR >$50K with stable unit economics (contribution margin >30%)

### Canada Fulfillment Options

| Option | Pros | Cons | Best For |
|--------|------|------|----------|
| **Cross-border from US 3PL** | No Canadian warehouse needed. Simple. | Higher shipping cost ($15-20). Duties at border. 7-14 day transit. | Low volume (<50 Canadian orders/month) |
| **Canadian 3PL** (ShipBob Toronto, ShipMonk Canada) | Fast delivery (2-4 days). No border issues. | Requires Canadian inventory. Higher ops complexity. | High volume (>50 Canadian orders/month) |
| **Hybrid** | Cross-border initially, Canadian 3PL when volume justifies | Transition overhead | Growing Canadian demand |

### Canada Compliance Checklist

| Requirement | Details | Cost |
|-------------|---------|------|
| **Health Canada NPN** | Natural Product Number required for supplement sales in Canada | $2,000-5,000 + 6-12 months processing |
| **Bilingual labeling** | All labels must be in English AND French (Consumer Packaging and Labelling Act) | Packaging redesign cost |
| **GST/HST** | 5-15% depending on province. Must collect and remit if selling from Canadian entity or meeting revenue threshold. | Accounting setup |
| **Customs classification** | HS Code for dietary supplements: 2106.90 (typical) | One-time classification |
| **De minimis threshold** | Canada: CAD $20 (below this, no duties). IonWave products exceed this. | Duties apply |

### Canada Shipping Costs

| Method | Cost | Transit | Notes |
|--------|------|---------|-------|
| USPS First Class International | $15-18 | 7-14 days | No tracking end-to-end |
| USPS Priority International | $25-35 | 6-10 days | Includes tracking |
| UPS/FedEx International Ground | $18-25 | 5-8 days | Best tracking, most reliable |
| Canada Post (from Canadian 3PL) | $8-12 | 2-5 days | Cheapest if using Canadian warehouse |

**IonWave recommendation**: Start with cross-border USPS Priority International. Absorb into product pricing (increase Canadian price by $5-10). Switch to Canadian 3PL when Canadian orders exceed 50/month.

[Confidence: C | Source: Cross-border D2C benchmarks, Canada supplement regulation summary]

---

## 3. Phase 3: UK Expansion

### When to Enter UK

**Trigger**: US MRR >$100K AND Canadian expansion stable

### UK Compliance Checklist

| Requirement | Details | Cost |
|-------------|---------|------|
| **MHRA notification** | Supplements must be notified to the Medicines and Healthcare products Regulatory Agency | Free to submit, but formulation review needed |
| **UK-specific labeling** | Different nutrition information format than US/Canada. SI units. UK-specific allergen warnings. | Packaging redesign |
| **VAT registration** | 20% VAT. Required if selling >£85,000/year from UK entity (or immediately if storing in UK). | £0 to register, ongoing compliance cost |
| **IOSS or UK VAT scheme** | For direct shipments under £135, seller must collect VAT at checkout | Shopify supports this natively |
| **Customs** | Post-Brexit, UK is a separate customs territory from EU. HS code + commercial invoice required. | Per-shipment documentation |

### UK Shipping Costs

| Method | Cost | Transit | Notes |
|--------|------|---------|-------|
| USPS Priority International (from US) | $25-35 | 7-12 days | Reliable but slow |
| UPS/FedEx International Express | $35-55 | 3-5 days | Expensive but fast |
| UK 3PL (ShipBob London, local) | $5-8 per order | 1-3 days | Requires UK inventory |
| Fulfillment by Amazon UK (for Amazon UK channel) | $3-5 per order | 1-2 days | Amazon channel only |

**IonWave recommendation**: Only enter UK with a local 3PL. Cross-border shipping from US is too expensive ($25-55) and too slow (7-12 days) for a competitive customer experience. This means UK entry requires dedicated inventory allocation — a significant commitment.

[Confidence: C | Source: UK supplement regulations, post-Brexit D2C considerations]

---

## 4. Fulfillment Scaling Milestones

### Growth Stage Matrix

| Stage | Orders/Month | Revenue/Month | Fulfillment Model | Key Focus |
|-------|-------------|---------------|-------------------|-----------|
| **Startup** | 0-100 | $0-5K | Self-fulfill | Learn, iterate, personal touch |
| **Traction** | 100-500 | $5-25K | Single 3PL | Reliability, SLA establishment |
| **Growth** | 500-2,000 | $25-100K | Single 3PL, optimized | Cost optimization, carrier negotiation |
| **Scale** | 2,000-5,000 | $100-250K | Multi-node 3PL or 2 warehouses | Zone optimization, 2-day coverage |
| **Enterprise** | 5,000+ | $250K+ | Multi-warehouse + international nodes | Full US + international coverage |

### When to Add a Second Warehouse

**Trigger**: >2,000 orders/month AND significant volume in multiple shipping zones

**Why**: A single warehouse in, say, California means East Coast orders take 5-6 days via ground. A second node in the East (NJ, PA, or GA) gets most of the US within 2-3 days.

| Warehouse Pair | US Coverage (2-day) | Typical Choice |
|---------------|-------------------|----------------|
| CA + NJ | ~85% of US | Best for balanced East/West demand |
| TX + NJ | ~80% of US | Good if Midwest is strong |
| CA + GA | ~75% of US | Good if Southeast is strong |

**ShipBob advantage**: They operate 35+ fulfillment centers and can auto-route inventory to optimize zone coverage. This is why they're the recommended Phase 1 3PL — built-in multi-node when you're ready.

### Cost Optimization Opportunities by Stage

| Stage | Optimization | Expected Savings |
|-------|-------------|-----------------|
| **Traction** | Negotiate shipping rates based on volume | 5-15% on carrier costs |
| **Traction** | Optimize box size to avoid DIM weight surcharges | $0.50-1.00/order |
| **Growth** | Zone-based carrier selection (USPS for zones 1-4, UPS for zones 5-8) | 10-20% on shipping |
| **Growth** | Batch processing (3PL picks multiple orders in one pass) | Reduced pick/pack fees |
| **Scale** | Multi-warehouse inventory split | Reduced avg shipping distance and cost |
| **Scale** | Carrier contract negotiation (volume discounts) | 15-25% on shipping |
| **Enterprise** | Rate shopping per order (auto-select cheapest carrier/service) | 10-15% on shipping |

[Confidence: C | Source: D2C fulfillment scaling frameworks]

---

## 5. Free Shipping Economics

### The Free Shipping Threshold

Free shipping is the #1 conversion driver for D2C ecommerce. But it must be economically viable.

| Scenario | Threshold | Margin Impact | Conversion Lift |
|----------|-----------|---------------|-----------------|
| **No free shipping** | N/A | Full margin | Baseline |
| **Free shipping over $49** | $49 | -$5-8 per qualifying order | +15-25% conversion |
| **Free shipping over $75** | $75 | -$5-8 per qualifying order | +10-15% conversion (less impactful) |
| **Free shipping on all orders** | $0 | -$5-8 on EVERY order | +25-35% conversion but margin risk |
| **Free shipping for subscribers** | Subscription | -$5-8 per subscription order | Strong subscription conversion driver |

### IonWave Recommendation

| Customer Type | Shipping Policy | Rationale |
|---------------|----------------|-----------|
| **Subscribers** | Free shipping always | Subscription incentive. Absorb $5-8 into margin. |
| **One-time, 1 box** | $5.99 flat rate | Covers most of carrier cost |
| **One-time, 2+ boxes (>$75)** | Free shipping | Encourages multi-unit purchase. AOV increase offsets shipping cost. |
| **Cart recovery (M18 AC3)** | Free shipping auto-applied | Per M18: no code, auto-apply. Converts 15-20% better than discount codes. |

**Break-even analysis**:
- IonWave one-time price: ~$49
- Gross margin at $49: ~$29 (60% after $20 COGS)
- Shipping cost: ~$6 average
- Gross margin after free shipping: ~$23 (47%)
- Still viable, but narrows. Only offer free shipping where the conversion lift justifies it.

[Confidence: B | Source: D2C free shipping economics, M10 pricing, M25 COGS]

---

## 6. Returns & Exchanges

### Return Policy

For supplement brands, returns are tricky because opened product can't be resold. IonWave's policy:

| Scenario | Policy | Action |
|----------|--------|--------|
| **Unopened, within 30 days** | Full refund. Customer pays return shipping. | Inspect and restock at 3PL. |
| **Opened, within 30 days** | Full refund. No return required. | Destroy. Customer goodwill > product cost. |
| **Opened, after 30 days** | No refund. Offer discount on next order. | Support handles diplomatically. |
| **Damaged in transit** | Full replacement. No return required. | See Damaged Protocol in 3pl_and_fulfillment.md. |
| **Wrong product shipped** | Full replacement + apology. Return label provided. | 3PL error → escalate to SLA review. |
| **Subscription cancellation** | Refund if product hasn't shipped. No refund after shipment. | Per M21 subscription terms. |

### Return Processing SOP

1. Customer contacts support (email/chat)
2. Support determines reason and applies policy above
3. If return needed: generate return label in Shopify → email to customer
4. Product returned to 3PL → inspect → restock (if sealed) or destroy (if opened)
5. Refund processed within 3-5 business days of receipt
6. Log return reason in tracking sheet

### Return Rate Benchmark

| Category | Industry Average | IonWave Target |
|----------|-----------------|----------------|
| D2C Supplement | 3-5% | <5% |
| Subscription (cancel + return) | 5-8% | <5% |
| Amazon (for comparison) | 8-12% | N/A |

**High return rate warning**: If return rate exceeds 5%, investigate: product quality issue? Expectation mismatch (packaging vs reality)? Buyer's remorse (pricing too high)? Address root cause, not symptoms.

### Returns Processing Cost at 3PL (U12)

Returns at a 3PL incur processing fees:

| Fee | Typical Cost |
|-----|-------------|
| Return receiving | $2-5 per return |
| Inspection/restock | $1-3 per return |
| Destruction (if opened) | $0.50-1.00 per unit |
| **Total per return** | **$3.50-9.00** |

**Monthly cost projection**:
| Volume | Return Rate (5%) | Monthly Returns | Monthly Cost |
|--------|-----------------|----------------|-------------|
| 200 orders/mo | 10 | 10 | $35-90 |
| 500 orders/mo | 25 | 25 | $88-225 |
| 1,000 orders/mo | 50 | 50 | $175-450 |

Factor return processing fees into all-in fulfillment cost calculations. [Confidence: C | Source: 3PL return processing fee ranges]

[Confidence: C | Source: D2C supplement return benchmarks]

---

## 7. Free Shipping Cost at Scale (U18)

Free shipping is a conversion driver but becomes a significant cost as you scale:

| Monthly Orders | Sub Rate | Free Ship Orders | Monthly Cost (@$6/order) | Annual Cost | % of Revenue |
|---------------|----------|-----------------|------------------------|-------------|-------------|
| 200 | 40% | ~120 | $720 | $8,640 | ~4% |
| 500 | 40% | ~300 | $1,800 | $21,600 | ~5% |
| 1,000 | 40% | ~600 | $3,600 | $43,200 | ~5.5% |
| 2,000 | 40% | ~1,200 | $7,200 | $86,400 | ~6% |

*Assumes: subscribers = free shipping, one-time over threshold = free shipping (~50% of one-time orders qualify)*

**Trigger**: If free shipping cost exceeds **8% of revenue**, take action:
1. Renegotiate carrier rates (volume leverage)
2. Adjust free shipping threshold upward ($49 → $59)
3. Optimize packaging to reduce DIM weight
4. Evaluate subscription-only free shipping (remove from one-time)

---

## 8. Cross-TUP References

- **M28 expansion_paths.md**: International expansion triggers ($50K MRR for Canada, $100K for UK, $250K for other). Expansion sequence: D2C → Amazon → B2B → International.
- **M9 operations_governance.md**: File structure includes 3PL/ folder for contracts, SOPs, SLAs and Inventory/ folder for counts and reorder triggers.
- **M10 pricing_and_offers.md**: Free shipping threshold economics. Subscription pricing must absorb shipping cost.
- **M18 cart_recovery.md**: AC3 free shipping auto-applied for cart recovery.
- **M21 subscriptions.md**: Subscription terms, cancellation policy, refund policy alignment.
- **M25 bookkeeping_setup.md**: Shipping revenue (4020) vs outbound shipping expense (6120) accounting treatment.

---

*International expansion is a later-stage play. Master US fulfillment first. When the time comes, enter Canada cross-border, then UK with a local 3PL. See `inventory_management.md` for forecasting and `3pl_and_fulfillment.md` for provider details.*
