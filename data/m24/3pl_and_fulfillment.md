# M24: 3PL Selection & Fulfillment Operations

**TUP**: M24 — Fulfillment & Inventory
**Version**: 1.0.0
**Date**: 2026-02-09
**Protocol**: TWP-001 v2.0.0
**Sources**: Danilo tabs 519, 520, 521; M9 store_setup_and_launch.md; M25 bookkeeping_setup.md; 3PL industry benchmarks 2026

---

## 1. Fulfillment Phase Strategy

IonWave's fulfillment evolves in three distinct phases. The key insight: self-fulfillment isn't a compromise — it's a learning phase. You learn more about your product, packaging, and customer expectations in 30 days of packing boxes than in 6 months of 3PL reports.

| Phase | Trigger | Duration | Method | Focus |
|-------|---------|----------|--------|-------|
| **Phase 0: Self-Fulfill** | Pre-launch through ~50 orders/month | Month 1-2 | Home/office, Shopify Shipping | Learn packaging, unboxing, carrier performance |
| **Phase 1: 3PL Onboard** | >50 orders/month OR founder time >10 hrs/week on fulfillment | Month 2-4 | ShipBob or ShipMonk | Transition, parallel running, SLA establishment |
| **Phase 2: 3PL Optimized** | >200 orders/month, stable SLAs | Month 4+ | Primary 3PL, rate optimization | Cost reduction, multi-SKU, subscription optimization |
| **Phase 3: Multi-Node** | >1,000 orders/month OR 2-day becomes competitive requirement | Month 12+ | Multi-warehouse 3PL or regional split | Zone optimization, faster delivery |

[Confidence: B | Source: D2C fulfillment scaling benchmarks]

### Phase 0: Why Self-Fulfill First

Self-fulfillment at launch provides:

1. **Product learning** — You discover packaging issues, damage patterns, and sizing problems before a 3PL does (and charges you for it)
2. **Customer closeness** — You read every order note, handle every inquiry, feel the pulse of demand
3. **Cost baseline** — You know exactly what fulfillment costs per order before comparing 3PL quotes
4. **Flexibility** — You can include handwritten notes, adjust packaging, test inserts with zero lead time
5. **Speed** — No onboarding delay. Ship Day 1.

**Switch signal**: When you spend >10 hours/week on fulfillment AND order volume is >50/month, it's time. Don't switch earlier — the learning is too valuable. Don't wait longer — the founder's time is worth more than $15/hour.

[Confidence: C | Source: D2C founder consensus]

---

## 2. Self-Fulfillment Setup (Phase 0)

### Minimum Viable Fulfillment Station

| Item | Cost | Where to Buy |
|------|------|-------------|
| Shipping scale (digital, lb/oz) | $25-40 | Amazon |
| Label printer (thermal, 4x6) | $150-200 | Rollo or DYMO 4XL |
| Poly mailers OR boxes (sized for sachet box) | $0.30-0.80/unit | Uline, EcoEnclose |
| Branded sticker (2" circle) | $0.05-0.10/unit | Sticker Mule |
| Insert card (thank-you + QR to portal) | $0.08-0.15/unit | Vistaprint, Moo |
| Packing tape (branded optional) | $3-8/roll | Uline |
| Bubble wrap or kraft paper | $0.05-0.15/order | Uline |

**Total setup**: ~$200-300 one-time + $0.50-1.20/order in materials

### Self-Fulfillment SOP

1. **Order received** → Shopify notification (check 3x daily: 8am, 12pm, 5pm)
2. **Pick product** → Check lot number, expiration date, quantity
3. **Pack** → Product + insert card + branded sticker on exterior. Kraft paper fill for protection.
4. **Weigh** → Record weight. Compare to shipping label weight class.
5. **Label** → Print shipping label from Shopify Shipping. Apply to package.
6. **Ship** → Schedule pickup or drop at carrier location.
7. **Update** → Verify tracking number synced to Shopify. Customer receives tracking email automatically.
8. **Log** → Record lot number shipped per order (for recall traceability)

**Same-day cutoff**: Orders placed by 2:00 PM ET ship same day. After 2:00 PM → next business day.

[Confidence: C | Source: D2C self-fulfillment best practices]

### Carrier Selection for Phase 0

| Carrier | Best For | Cost (1 lb, Zone 3-5) | Speed | Notes |
|---------|----------|----------------------|-------|-------|
| **USPS First Class** | Under 16 oz | $4.50-6.00 | 3-5 days | Best for single sachet boxes |
| **USPS Priority** | 1-5 lbs | $8.00-12.00 | 2-3 days | Includes $50 insurance, free boxes |
| **UPS Ground** | >5 lbs or multi-box | $9.00-14.00 | 3-6 days | Negotiable at volume |
| **FedEx Ground** | >5 lbs or multi-box | $9.00-14.00 | 3-6 days | Negotiable at volume |

**IonWave recommendation**: USPS First Class for single-box orders (majority at launch). USPS Priority for multi-box or time-sensitive. Use Shopify Shipping for discounted rates (up to 77% off retail).

**Dimensional weight warning**: 2026 carriers all use DIM weight pricing. IonWave sachets in a box should be well under DIM thresholds, but verify: DIM weight = (L × W × H) / 139 for FedEx/UPS, /166 for USPS. If DIM weight > actual weight, you pay DIM.

[Confidence: B | Source: Carrier rate cards 2026, Shopify shipping discounts]

---

## 3. 3PL Selection (Phase 1)

### 3PL Comparison — Updated 2026

| 3PL | Best For | Pick/Pack | Storage | Min Monthly | Shopify Integration | Supplement Capable | IonWave Fit |
|-----|----------|-----------|---------|-------------|--------------------|--------------------|-------------|
| **ShipBob** | Growing D2C, 2-day shipping | $5.25-6.50/order | $40/pallet/mo | ~$275/mo | Excellent (native) | Yes (temp-controlled available) | **Recommended — Phase 1** |
| **ShipMonk** | Startups, lower volume | $3.00-4.50/order | $25/pallet/mo | Low (volume-tiered) | Good (native) | Yes | Good alternative |
| **ShipHero** | Tech-forward brands | $5.00-6.00/order | $35/pallet/mo | ~$500/mo | Good | Yes | Good for tech needs |
| **Flexport** | Scale brands (ex-Deliverr) | $4.00-5.50/order | Included in fee | ~$5,000/mo | Good | Yes | **Too expensive at launch** |
| **Amazon FBA** | Amazon channel ONLY | $3.00-5.00/order | $0.87/cu ft/mo (standard) | None | Manual (MCF for non-Amazon) | Limited temp control | **Amazon channel only — NOT for D2C** |
| **Local/Regional 3PL** | Personal service | $2.50-4.00/order | Negotiable | Varies | Custom integration | Varies | Evaluate if supplement-specialized |

**Correction from Danilo**: Deliverr was acquired by Flexport in 2022. They are now one entity. Flexport's $5,000/month minimum prices out early-stage IonWave. Remove from consideration until >500 orders/month.

**Correction from Danilo**: Amazon FBA is NOT a 3PL alternative for D2C orders. Per M28, FBA is for the Amazon sales channel only. Multi-Channel Fulfillment (MCF) from Amazon is technically possible but comes with Amazon-branded packaging — which destroys brand experience. Do not use FBA for Shopify orders.

[Confidence: B | Source: 3PL pricing research 2026, updated from Danilo tab 519]

### IonWave 3PL Recommendation

**Primary: ShipBob**
- Native Shopify integration (real-time inventory sync)
- 2-day shipping network (35+ fulfillment centers)
- Supplement-friendly (temperature monitoring available)
- $275/month minimum is accessible at 50+ orders/month
- Dedicated account manager for growing brands

**Backup: ShipMonk**
- Lower per-order cost ($3-4 vs $5-6)
- Good for brands that want to optimize cost over speed
- Less fulfillment center coverage (fewer 2-day zones)

### 3PL Evaluation Scorecard

Before signing with any 3PL, score them on these 8 dimensions:

| Dimension | Weight | Questions to Ask | Min Score |
|-----------|--------|-----------------|-----------|
| **Supplement compliance** | 25% | FDA-registered warehouse? cGMP procedures? Temperature monitoring? Lot tracking? Expiration management? | 4/5 |
| **Shopify integration** | 20% | Native app? Real-time inventory sync? Subscription order handling (Recharge/Skio)? | 3/5 |
| **Shipping speed** | 15% | What % of US reaches in 2 days? Processing time SLA? Cutoff time? | 3/5 |
| **Accuracy** | 15% | What is their reported accuracy rate? Error resolution process? | 4/5 |
| **Pricing** | 10% | All-in cost per order (pick/pack + storage + shipping)? Hidden fees? | 3/5 |
| **Scalability** | 5% | Can they handle 10x volume? Multi-warehouse? International? | 2/5 |
| **Service** | 5% | Dedicated account manager? Response time? Hours of support? | 3/5 |
| **References** | 5% | Similar brand references? Supplement brand experience? | 2/5 |

**Minimum qualifying score**: 3.5/5.0 weighted average. Below that, look elsewhere.

[Confidence: C | Source: 3PL evaluation frameworks, supplement industry requirements]

### Supplement-Specific 3PL Requirements

This is non-negotiable for IonWave. Your 3PL MUST have:

| Requirement | Why | Verification |
|-------------|-----|-------------|
| **FDA-registered facility** | Required for storing dietary supplements (21 CFR Part 111) | Ask for FDA registration number |
| **Temperature monitoring** | Supplements degrade in heat. IonWave sachets need 59-86°F (15-30°C) | Ask for temp monitoring logs |
| **Humidity control** | Moisture damages packaging and product integrity. Target <60% RH | Ask for facility specs |
| **Lot tracking (FEFO)** | First Expired, First Out — not just FIFO. Prevents shipping near-expiration product | Ask for WMS lot management demo |
| **Expiration date management** | Alerts when inventory approaches expiration. Quarantine expired stock | Ask for expiration alert workflow |
| **Recall capability** | Must be able to identify and quarantine all units from a specific lot within 24 hours | Ask for recall drill history |
| **Pest control program** | Regular pest monitoring and treatment. Required for food/supplement facilities | Ask for pest control records |
| **Inventory count reconciliation** | Regular cycle counts. Must match Shopify within ±1% | Ask for count frequency and accuracy history |

**FEFO vs FIFO**: For supplements with expiration dates, FEFO (First Expired, First Out) is critical. Standard FIFO can result in newer stock being shipped while older stock sits and expires. FEFO reduces waste from 10-18% to under 3% for supplement brands.

[Confidence: A | Source: FDA 21 CFR Part 111, USP <1079> storage guidelines]

---

## 4. 3PL Contract, Insurance & Compliance (U1, U2, U3)

### Contract Negotiation Checklist (U1)

Before signing any 3PL contract, negotiate these terms:

| Term | What to Negotiate | Red Flag |
|------|-------------------|----------|
| **Initial commitment** | 3-month trial period, not 12 months | Auto-renewal without 30-day out clause |
| **SLA breach exit** | 30-day termination right if SLAs missed for 2+ consecutive weeks | No SLA-based exit clause |
| **Peak season surcharges** | Cap at 15% above standard rates. Written in contract. | "Market rate" language with no cap |
| **Storage fee increases** | Cap annual increase at 5% or CPI, whichever is lower | Unlimited increase provision |
| **Supplement compliance** | Temperature monitoring, lot tracking, FEFO as SLA-level commitments | Listed as "best effort" or not in contract |
| **Minimum fees** | Understand monthly minimum. Ensure achievable at your volume. | Minimum fee >2x your expected monthly cost |
| **Data ownership** | You own all order, inventory, and customer data | 3PL retains data rights or charges for export |
| **Transition assistance** | 3PL provides 30-day transition support if you leave | No data export provision or inventory return timeline |

[Confidence: A | Source: 3PL contract negotiation best practices]

### Insurance Requirements (U3)

Your 3PL must carry (verify certificates before signing):

| Insurance Type | Minimum Coverage | What It Covers |
|---------------|-----------------|----------------|
| **General liability** | $1M per occurrence | Premises injuries, general business liability |
| **Product liability** | $1M (name IonWave as additional insured) | Damage from products stored/shipped |
| **Bailee's coverage** | Value of your inventory | Loss/damage to inventory while in 3PL custody |
| **Workers' compensation** | Per state requirements | Employee injuries during fulfillment operations |

**IonWave's own coverage**: Verify product liability insurance covers inventory stored at a third-party facility. Consult insurance broker before signing.

[Confidence: B | Source: 3PL insurance frameworks]

### Temperature Excursion Protocol (U2)

For supplements, temperature excursions can compromise product integrity:

| Condition | Protocol |
|-----------|----------|
| **Excursion >86°F for <2 hours** | Log incident. No action needed. |
| **Excursion >86°F for 2-4 hours** | Log. 3PL must notify brand within 2 hours. Monitor product. |
| **Excursion >86°F for >4 hours** | Quarantine affected inventory. Request COA re-test. Do NOT ship until cleared. |
| **Excursion >100°F any duration** | Quarantine immediately. Product likely compromised. Write off (M25 account 5040). |
| **HVAC failure** | 3PL must have backup climate control or move inventory to controlled area within 4 hours |

3PL must provide temperature monitoring logs on request. Monthly summary recommended.

[Confidence: B | Source: USP <1079> Good Storage Practice, supplement stability guidelines]

---

## 5. 3PL Onboarding Protocol

### Pre-Onboarding (Week -2 to -1)

| Step | Task | Owner | Duration |
|------|------|-------|----------|
| 1 | Contract signed with SLA terms | Founder | 1-3 days |
| 2 | Shopify app/integration installed and connected | Ops | 1 hour |
| 3 | Products created in 3PL system (SKU mapping) | Ops | 1-2 hours |
| 4 | Shipping rates configured (carrier preferences, zones) | Ops | 1-2 hours |
| 5 | Branded packing slip designed and uploaded | Ops | 1-2 hours |
| 6 | Insert card/materials sent to 3PL | Ops | Ship time |
| 7 | Inbound shipment of inventory arranged (from manufacturer or self-storage) | Ops | 3-7 days |

### Onboarding (Week 0)

| Step | Task | Verification |
|------|------|-------------|
| 8 | Inventory received and counted at 3PL | Count matches shipment manifest ±0 |
| 9 | Lot numbers and expiration dates entered in WMS | Spot-check 3 random SKU/lots |
| 10 | Test order #1: Place from Shopify, verify it routes to 3PL | Order appears in 3PL dashboard |
| 11 | Test order #2: Verify pick, pack, label, ship | Receive package, check contents + packing slip |
| 12 | Test order #3: Verify tracking syncs back to Shopify | Customer-facing tracking updates correctly |
| 13 | Returns process configured and tested | Return label generated, RMA workflow works |
| 14 | Subscription order test (Recharge/Skio → Shopify → 3PL) | Recurring order creates and ships correctly |
| 15 | **Go live**: Route all new orders to 3PL | Monitor first 10 orders closely |

### Parallel Running Period

**Do NOT cut over instantly.** Run parallel for 3-7 days:

1. Self-fulfill any orders that were in-progress
2. Route all NEW orders to 3PL
3. Monitor 3PL orders for accuracy, speed, tracking sync
4. Compare self-fulfillment quality to 3PL quality
5. After 10+ successful 3PL orders with zero issues → full cutover

**Inventory transfer strategy**: Don't ship existing inventory to 3PL. Instead:
- Sell through self-fulfillment stock (continue packing at home)
- Send NEW production run directly from manufacturer → 3PL warehouse
- This avoids transfer costs and prevents inventory confusion

[Confidence: C | Source: D2C 3PL transition best practices]

---

## 6. 3PL SLA Monitoring

### Weekly SLA Scorecard

Track these metrics weekly. Review with 3PL account manager monthly.

| Metric | Target | Yellow Flag | Red Flag | Action on Red |
|--------|--------|-------------|----------|---------------|
| **Ship within 48hr** | >95% | 90-95% | <90% | Escalate to account manager. Written warning. |
| **Order accuracy** | >99% | 97-99% | <97% | Root cause analysis within 48hr. Corrective action plan. |
| **Damage rate** | <1% | 1-2% | >2% | Packaging review. Possible carrier or packing change. |
| **Inventory accuracy** | >99% | 97-99% | <97% | Demand cycle count. Review receiving process. |
| **Tracking sync** | >99% | 95-99% | <95% | Integration audit. May need support ticket with 3PL. |
| **Return processing** | <72hr | 72-120hr | >120hr | Review returns SOP with 3PL. |

### Monthly SLA Review

| Review Item | What to Check |
|-------------|---------------|
| All-in cost per order | Total 3PL invoice ÷ total orders. Trending up or down? |
| Average ship time | Actual transit days (label to delivery). Compare to carrier SLA. |
| Customer complaints (fulfillment-related) | Categorize: late, damaged, wrong item, missing item |
| Carrier performance by zone | Which zones are slow? Consider zone-based carrier switching |
| Subscription order reliability | Are renewal orders shipping on time? Any processing delays? |
| Inventory shrinkage | Missing units not explained by orders or returns? |

### 3PL Escalation Protocol

| Level | Trigger | Action | Timeline |
|-------|---------|--------|----------|
| **Level 1: Notice** | Single metric yellow for 2+ weeks | Email account manager with data | 24hr response expected |
| **Level 2: Warning** | Any metric red, or 3+ metrics yellow | Formal meeting. Written corrective action plan. | 1 week to resolve |
| **Level 3: Review** | Red metric persists >2 weeks after warning | Contract review. Begin evaluating alternatives. | 30-day improvement window |
| **Level 4: Transition** | Persistent failure or critical error (wrong product shipped, data breach) | Begin 3PL transition process. Do NOT wait. | Immediate parallel evaluation |

[Confidence: B | Source: 3PL SLA management frameworks]

---

## 7. Damaged & Lost Shipment Protocol

### Customer Reports Damage

**Principle**: Replace first, investigate later. The customer's experience is more important than the $20 product cost.

| Step | Action | Timeline | Owner |
|------|--------|----------|-------|
| 1 | Customer reports damage (email, chat, or phone) | — | Customer |
| 2 | Request photo of damage (not required — trust the customer) | Within 4 hours of report | Support |
| 3 | Ship replacement immediately | Same business day | Ops |
| 4 | Send tracking for replacement + apology | Immediately after shipping | Support |
| 5 | Do NOT request return of damaged product (not worth the cost) | — | — |
| 6 | File carrier claim (if carrier damage, not product defect) | Within 48 hours | Ops |
| 7 | Log incident: product, lot number, carrier, damage type | Same day | Ops |
| 8 | If 3+ reports from same lot → escalate to quality review | Immediately | Founder |

### Customer Reports Lost Shipment

| Step | Action | Timeline | Owner |
|------|--------|----------|-------|
| 1 | Customer reports non-delivery | — | Customer |
| 2 | Check tracking status in carrier system | Within 4 hours | Support |
| 3 | If "Delivered" but customer says no → ask to check with neighbors, building office, porch | Within 4 hours | Support |
| 4 | If still missing after 48 hours → ship replacement | Same business day | Ops |
| 5 | File carrier claim for lost package | Within 48 hours | Ops |
| 6 | Log incident: carrier, zone, date, tracking number | Same day | Ops |

### Damage/Loss Budget

Budget 1-2% of orders for damage/loss replacement at launch. This is a cost of doing business:

| Volume | Monthly Orders | Expected Replacements | Cost (product + shipping) |
|--------|---------------|----------------------|--------------------------|
| Early (Month 1-3) | 100 | 1-2 | $40-80 |
| Growing (Month 4-6) | 500 | 5-10 | $200-400 |
| Scaling (Month 7-12) | 1,000+ | 10-20 | $400-800 |

**Fraud monitoring**: If a single customer reports 3+ damage/loss incidents, flag for review. Pattern abuse is rare but real. Handle diplomatically — call rather than accuse.

[Confidence: C | Source: D2C customer experience practices, carrier claim procedures]

---

## 8. Unboxing Experience

### IonWave Packaging Strategy

The unboxing experience is where IonWave's brand comes alive. For a marine plasma product, the packaging should feel clean, premium, and intentional.

| Component | Phase 0 (Self-Fulfill) | Phase 1 (3PL) | Phase 2 (Optimized) |
|-----------|----------------------|---------------|---------------------|
| **Outer packaging** | White poly mailer or kraft box | Branded mailer (logo on exterior) | Custom printed box |
| **Product protection** | Kraft paper fill | Same | Same (sachets are durable) |
| **Insert card** | Thank-you card with QR to portal + founder note | Same design, printed at scale | Seasonal/rotating inserts |
| **Branded sticker** | 2" circle on exterior | Same | May upgrade to branded tape |
| **Sachet presentation** | Neat arrangement | Same | Custom inner tray (at volume) |
| **Surprise element** | Handwritten note (first 100 orders) | None — not scalable | Free sample of new product |

**Cost per package**:
- Phase 0: $0.50-1.00 (mailer + insert + sticker + fill)
- Phase 1: $1.00-2.00 (branded mailer + insert + sticker)
- Phase 2: $2.00-4.00 (custom box + insert + branded fill)

**IonWave insert card must include**:
1. Founder thank-you (2-3 sentences, first person — "I started IonWave because...")
2. QR code → customer portal / subscription management
3. Usage reminder: "One sachet. Every morning. Tear, pour, drink."
4. Social handle + branded hashtag
5. Referral code (FRIEND15 — per M18 referral program)

[Confidence: C | Source: D2C packaging benchmarks, M22 referral integration]

---

## 9. Kitting & Packaging Compliance (U10, U19)

### Standard Kit Configuration

IonWave standard fulfillment kit:
- 1x product box (30 sachets)
- 1x insert card (thank-you + QR + referral code)
- 1x branded sticker (2" circle, applied to exterior)

### Kit Change Orders (U10)

Any changes to the kit (new insert, seasonal card, added sample) require:
1. Submit "Kit Change Order" to 3PL **5+ business days** before next subscription billing cycle
2. Include: new item specifications, placement instructions, quantity needed
3. Kitting fee: typically $0.25-0.75 per additional item per order
4. Track kitting accuracy separately from pick/pack accuracy

### Packaging Compliance Audit (U19)

3PL packaging quality degrades over time without verification:
- **Monthly mystery order**: Place 1-2 test orders per month, shipped to your address
- **Verify**: Correct insert, branded sticker applied, product orientation, no damage
- **Photo audit**: Ask 3PL to photograph first 5 orders of each kit change
- **Escalation**: 2+ packaging failures → formal SLA discussion (brand damage, not just ops error)

### Inbound Shipment Receiving SOP (U20)

For each new inventory shipment to the 3PL:
1. Send ASN (Advance Shipping Notice) 48 hours before arrival: PO number, lot numbers, quantities, expiration dates
2. 3PL counts and confirms within 24 hours of receipt
3. Any discrepancy >1% triggers investigation with carrier and manufacturer
4. COA must be on file before 3PL makes inventory "available for sale"
5. Lot numbers and expiration dates entered in WMS — spot-check 3 random items

---

## 10. Carrier Strategy (U11)

### Dual-Carrier Configuration

Never rely on a single carrier. Configure your 3PL with at least 2 active carriers:

| Primary | Secondary | When to Use Secondary |
|---------|-----------|----------------------|
| USPS First Class/Priority | UPS Ground | USPS transit >5 days, peak season congestion |
| UPS Ground | FedEx Ground | UPS service disruption, zone-specific delays |

### Rate Shopping

Enable per-order rate shopping at the 3PL:
- System selects cheapest carrier meeting delivery SLA for each order
- During peak season (Nov-Jan), pre-approve UPS/FedEx as fallback if USPS transit times degrade
- Monitor carrier performance weekly: % on-time by carrier → shift volume to best performer

[Confidence: B | Source: Multi-carrier fulfillment best practices]

---

## 11. Cross-TUP References

- **M9 store_setup_and_launch.md**: Shopify 3PL integration (task 6.6), inventory tracking setup (task 3.4), shipping rates (task 4.5). M9 references M24 for fulfillment specifics.
- **M25 bookkeeping_setup.md**: COGS structure — Product COGS ($20 landed), 3PL fees (account 6110), Outbound Shipping (6120), Return Shipping (6130), COGS-Freight In (5030). Shipping is OpEx, not COGS.
- **M28 expansion_paths.md**: International shipping gated to $100K+ MRR. Amazon FBA for Amazon channel only. Multi-Channel Fulfillment NOT recommended for D2C.
- **M20 support_operations.md**: Customer support handles damaged/lost shipment tickets. 4-hour response time SLA. Escalation protocol for chargebacks.
- **M18 cart_recovery.md**: Free shipping as cart recovery incentive (AC3). Auto-apply, no code friction.
- **M22 referral.md**: FRIEND15 referral code on insert cards.

---

*3PL selection is a critical operational decision. Start with self-fulfillment to learn, transition at 50+ orders/month, and optimize from there. See `launch_operations.md` for the launch day protocol and `inventory_management.md` for forecasting.*
