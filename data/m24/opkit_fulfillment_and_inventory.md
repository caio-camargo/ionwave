# OpKit: Fulfillment & Inventory

**ID**: OK-M24-001
**Source TUP**: M24 — Fulfillment & Inventory
**Version**: 1.0.0
**Date**: 2026-02-09
**Quality**: 8.4/10

---

## Purpose

Build a complete fulfillment and inventory management system for a D2C subscription brand. Covers self-fulfillment at launch, 3PL selection and transition, launch day operations, inventory forecasting (subscription + one-time), lot tracking, seasonal planning, and international scaling milestones.

---

## Instructions (12 Steps)

### Pre-Launch (Week -6 to -2)

1. **Set up self-fulfillment station** — Shipping scale, thermal label printer, packaging materials, branded inserts. Budget ~$200-300 setup. Establish same-day cutoff (e.g., 2 PM ET). Create lot tracking spreadsheet.

2. **Place first purchase order with manufacturer** — Size using conservative 3-month forecast + safety stock. Do NOT exceed 25% of cash reserves. Negotiate lower MOQ for first 2-3 POs if needed. Verify ≥18 months shelf life on batch.

3. **Configure Shopify shipping** — Set shipping rates (free for subscribers, flat rate for one-time, free above threshold). Enable Shopify Shipping discounts. Configure inventory tracking and low-stock alerts.

4. **Begin 3PL evaluation** — Score 3-5 providers on 8-dimension scorecard (supplement compliance, Shopify integration, speed, accuracy, pricing, scalability, service, references). Minimum score: 3.5/5.0 weighted. Verify FDA registration, temperature monitoring, FEFO capability.

### Pre-Launch (Week -1)

5. **Execute soft launch** — Open store to 10-20 hand-picked friends/family/beta testers for 2-3 days. Verify end-to-end: payment → fulfillment → tracking → email flows. Fix issues before hard launch.

6. **Prepare war room** — Complete T-48 through T-1 pre-launch checklist. Set up communication channel (Slack/Discord). Establish go/no-go matrix. Configure Day 1 ad budget cap ($100-200).

### Launch Week

7. **Execute launch day protocol** — Follow war room timeline (T+0 through T+12hr). Monitor ads, orders, fulfillment, email flows, support. Pause ads within 5 minutes of any system failure.

8. **Run 72-hour protocol** — Survival (0-24hr) → Stabilize (24-48hr) → Optimize (48-72hr). Track scorecard metrics. Execute post-launch retrospective at Hour 72.

9. **Run First 10 Orders playbook** — Personally verify each order. Send founder thank-you emails. Track channel, product, subscription rate, AOV. Complete learnings template after order #10.

### Month 2-4

10. **Transition to 3PL** — Sign contract (negotiate 3-month trial, SLA-based exit, surcharge caps). Onboard: product setup, inventory transfer, test orders. Run parallel for 3-7 days. Full cutover after 10+ clean orders.

11. **Establish SLA monitoring** — Weekly scorecard (ship time, accuracy, damage, inventory, tracking). Monthly review. Escalation protocol (notice → warning → review → transition). Monthly mystery order audit.

### Month 4+

12. **Optimize and scale** — Implement statistical safety stock (after 60 days of data). Build subscription cohort decay model. Negotiate carrier rates. Evaluate multi-warehouse when >2,000 orders/month. Plan BFCM inventory 8 weeks in advance.

---

## Grading Rubric

| Grade | Criteria |
|-------|----------|
| **A (9-10)** | All 12 steps complete. 3PL SLAs consistently met. Subscription demand model active. Inventory turnover 6-8x/year. Zero stockouts. International expansion underway. BFCM executed flawlessly. |
| **B (7-8)** | Self-fulfill → 3PL transition complete. SLA monitoring active. Basic inventory forecasting in place. Launch operations executed cleanly. Seasonal planning active. |
| **C (5-6)** | 3PL selected and onboarding in progress. Basic inventory tracking. Launch happened but with some operational issues. No subscription demand model. |
| **D (3-4)** | Self-fulfilling past the 50-order threshold. No 3PL evaluation started. Inventory managed reactively. No lot tracking. |
| **F (0-2)** | No fulfillment system. Shipping inconsistently. No inventory tracking. No lot management. Stockouts or overstocks. |

---

## Scaffold (4 Files)

| File | Contents |
|------|----------|
| `3pl_and_fulfillment.md` | Self-fulfillment setup, 3PL comparison, evaluation scorecard, supplement compliance, contract negotiation, insurance, temperature protocol, onboarding, SLA monitoring, damaged/lost protocol, unboxing, kitting, carrier strategy |
| `launch_operations.md` | War room protocol (T-48 to T+12hr), go/no-go matrix, soft launch protocol, budget caps, site-down emergency, 72-hour protocol (3 phases + scorecard), first 10 orders playbook, retrospective template, first negative review protocol |
| `inventory_management.md` | Forecasting framework (reorder points, safety stock), MOQ analysis, first PO framework, subscription demand modeling (two-stream, cohort decay, renewal clustering), real-time dashboard, lot tracking (FEFO), recall procedure, seasonal calendar, dead stock liquidation |
| `international_and_scaling.md` | US-first strategy, Canada/UK compliance + shipping, scaling milestones (5 stages), multi-warehouse triggers, free shipping economics, returns policy + cost modeling, cost at scale projections |

---

## IonWave Graded Example: 8.4/10

**What IonWave did well**:
- Phase-gated fulfillment strategy (self-fulfill → 3PL → optimized → multi-node) with clear triggers
- Supplement-specific 3PL requirements (FDA registration, temperature, FEFO, lot tracking, recall capability)
- Two-stream demand model (subscription with cohort decay + one-time with ad spend linkage)
- Complete launch operations (soft launch, war room, 72hr protocol, first 10 playbook)
- Contract negotiation guidance with red flags (3-month trial, SLA exit, surcharge caps)
- 27 dialogue upgrades applied (contract, insurance, temperature, MOQ, safety stock, cohort decay, soft launch, budget caps, site-down protocol, etc.)
- Strong cross-TUP integration (M9, M25, M28, M18, M20, M30)

**What could be improved**:
- No Bootstrap source available (green-field build) — some content is benchmark-based rather than primary-sourced
- 3PL pricing needs real-time verification (market changes quarterly)
- CM MOQ and IonWave product stability data are TBD (execution-stage data)
- International compliance (NPN, MHRA) at summary level — needs legal review before execution
- No visual packaging specifications (text-only content)

---

## Adaptation Guide

### For Non-Subscription D2C
- Remove subscription demand forecasting section (§2 subscription portions)
- Remove renewal clustering warning (U14)
- Free shipping threshold economics remain the same
- Replenishment timing reminders shift to email marketing (not inventory system)

### For Multi-SKU Brands
- Add per-SKU reorder point tracking (not just aggregate)
- Kitting becomes more complex — kit configurations multiply
- FEFO applies per SKU independently
- 3PL storage costs scale faster (more pallet positions)
- Seasonal planning varies by product (some SKUs peak summer, others winter)

### For Perishable Products (Shorter Shelf Life)
- Increase FEFO monitoring frequency (weekly → daily)
- Reduce safety stock to prevent expiration waste
- Tighten first PO sizing (90-day supply max, not 180)
- Add cold chain requirements to 3PL evaluation

### For High-Volume Brands (>5,000 orders/month)
- Multi-warehouse is mandatory (not optional)
- Zone-based carrier optimization drives major savings
- Negotiated carrier rates (enterprise contracts) become priority
- Automated reorder with EDI/API integration to manufacturer
- Dedicated inventory analyst role (not founder-managed)

---

## Universal Principles

1. **Self-fulfill first to learn**: You learn more in 30 days of packing boxes than in 6 months of 3PL reports. Switch at 50+ orders/month.
2. **FEFO, not FIFO**: For supplements with expiration dates, First Expired First Out reduces waste from 10-18% to under 3%.
3. **First PO ≤ 25% of cash**: The biggest inventory risk for a startup is overordering pre-revenue. Preserve cash.
4. **Soft launch before hard launch**: 10-20 friendly testers catch system failures before paid traffic.
5. **Day 1 ad budget cap**: $100-200 max. Verify data quality before scaling.
6. **Inventory gates marketing**: If stock is in CAUTION/REORDER zone, do not scale ad spend.
7. **Replace first, investigate later**: For damaged/lost shipments, the customer's experience > $20 product cost.
