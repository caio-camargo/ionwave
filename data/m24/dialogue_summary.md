# M24 Dialogue Summary — Fulfillment & Inventory

**Rounds**: 6 (to saturation)
**Personas**: 3 (3PL Operations Specialist, Inventory Planning Analyst, D2C Launch Strategist)
**Upgrades**: 27
**Unresolved**: 0 (5 deferred to execution — CM MOQ, ShipBob contract terms, product liability insurance, billing date spreading, temperature stability profile)

---

## Key Themes

1. **Contract and legal protections were absent** — Danilo focused on operational mechanics with zero guidance on contract negotiation, insurance, or legal protections when engaging a 3PL
2. **First purchase order is the hardest decision** — Forecasting assumes sales data exists, but the biggest cash commitment happens pre-revenue. Dedicated decision framework created.
3. **Subscription demand is non-linear and clusters** — Flat 12% churn distorts forecasts. Cohort decay model and renewal clustering warning added.
4. **Launch protocol needed failure-mode coverage** — Strong on "everything works" path, weak on abort, site-down, and first-complaint scenarios
5. **Soft launch before paid traffic is critical** — Going straight to ads risks burning money on undiscovered system failures
6. **Ad spend and inventory are not independent** — Explicit linkage needed: budget caps, demand correlation, inventory-gating on scaling
7. **Ongoing 3PL quality verification is essential** — Trust-but-verify: mystery orders, photo audits, inbound receiving SOP
8. **Dead stock is as dangerous as stockout for cash-constrained startups** — Liquidation protocol and inventory turnover tracking added

## Upgrade Registry

| # | Upgrade | Persona | Applied To |
|---|---------|---------|------------|
| U1 | Contract negotiation checklist and red-flag terms | 3PL Ops | 3pl_and_fulfillment.md |
| U2 | Temperature excursion protocol | 3PL Ops | 3pl_and_fulfillment.md |
| U3 | 3PL insurance requirements (liability, bailee's, additional insured) | 3PL Ops | 3pl_and_fulfillment.md |
| U4 | Manufacturing MOQ analysis and cash trap risk | Inventory | inventory_management.md |
| U5 | Statistical safety stock formula (replaces flat 14-day buffer after 60 days) | Inventory | inventory_management.md |
| U6 | Subscription cohort decay model (month-by-month vs flat rate) | Inventory | inventory_management.md |
| U7 | Launch abort and restart protocol | Launch | launch_operations.md |
| U8 | Soft launch / friends-and-family protocol before hard launch | Launch | launch_operations.md |
| U9 | Day 1 ad budget hard cap ($100-200) with daily ramp schedule | Launch | launch_operations.md |
| U10 | Kitting/assembly instructions and kit change order process | 3PL Ops | 3pl_and_fulfillment.md |
| U11 | Carrier diversification strategy (dual carrier, rate shopping) | 3PL Ops | 3pl_and_fulfillment.md |
| U12 | Returns processing cost analysis by phase | 3PL Ops | international_and_scaling.md |
| U13 | First PO decision framework (sizing, cash commitment, 25% rule) | Inventory | inventory_management.md |
| U14 | Subscription renewal clustering warning for Months 1-3 | Inventory | inventory_management.md |
| U15 | Expiration risk analysis for oversized first POs | Inventory | inventory_management.md |
| U16 | Site down emergency protocol for launch day | Launch | launch_operations.md |
| U17 | Post-launch retrospective template at Hour 72 | Launch | launch_operations.md |
| U18 | Free shipping cost modeling at scale (8% revenue trigger) | Launch | international_and_scaling.md |
| U19 | Branded packaging compliance audit (mystery orders) | 3PL Ops | 3pl_and_fulfillment.md |
| U20 | Inbound shipment receiving SOP (ASN, count, COA) | 3PL Ops | 3pl_and_fulfillment.md |
| U21 | Dead stock liquidation protocol (flash sale → donate → destroy) | Inventory | inventory_management.md |
| U22 | Ad spend → inventory demand correlation model (0.6-0.8x multiplier) | Inventory | inventory_management.md |
| U23 | First negative review protocol (founder response, systemic vs subjective) | Launch | launch_operations.md |
| U24 | Inventory depletion tracking in 72-hour scorecard | Launch | launch_operations.md |
| U25 | Batch/lot-level cost tracking for 3PL invoices | 3PL Ops | 3pl_and_fulfillment.md |
| U26 | Inventory turnover ratio target (6-8x/year) | Inventory | inventory_management.md |
| U27 | Founder energy management note for launch week | Launch | launch_operations.md |
