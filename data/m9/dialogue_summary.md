# M9 Ecommerce Infrastructure — Dialogue Summary

## Metadata
- **TUP**: M9 (Ecommerce Infra)
- **Cluster**: BCL-6 (Operations & Infrastructure)
- **Date**: 2026-02-09
- **Rounds**: 6 (saturation at Round 6)
- **Personas**: 3

## Personas

| Persona | Expertise | Bias/Lens |
|---------|-----------|-----------|
| Technical Shopify Architect | 8 years building D2C stores, performance obsessed | Speed, code quality, technical debt avoidance |
| Bootstrapped D2C Founder | Launched 3 supplement brands, budget-constrained | Pragmatism, speed to launch, ROI focus |
| Ecommerce Security Consultant | Former CISO, advises startups | Practical security, realistic threat model |

## Upgrades Applied (14)

| # | Upgrade | Target File |
|---|---------|-------------|
| U1 | Theme performance budget (8 apps, 500KB JS, 3 external scripts) | tech_stack_and_tools.md |
| U2 | Week 1 Setup Sequence (Day 1-7 strict order) | store_setup_and_launch.md |
| U3 | Ad account hijacking prevention | operations_governance.md |
| U4 | Consent management (Consent Mode v2, CCPA) | tracking_and_attribution.md |
| U5 | Monthly Tool ROI Review | tech_stack_and_tools.md |
| U6 | Theme backup protocol (before every app install) | operations_governance.md |
| U7 | Shopify-specific speed killers (Liquid render, app residue) | store_setup_and_launch.md |
| U8 | Subscription UX pattern (toggle > dropdown, 15-20% lift) | store_setup_and_launch.md |
| U9 | Collaborator account audit | operations_governance.md |
| U10 | "Do Not Install" app list | tech_stack_and_tools.md |
| U11 | Phase-gated governance (essentials only pre-launch) | operations_governance.md |
| U12 | Meta daily spend cap at 2x normal budget | tracking_and_attribution.md |
| U13 | Checkout extensibility note (Extensions > checkout.liquid) | store_setup_and_launch.md |
| U14 | UTM builder template (Google Sheet) | tracking_and_attribution.md |

## Unresolved Debates
None — all personas reached consensus.

## Key Themes
1. **Phase-gate everything**: Don't build enterprise infrastructure for pre-launch startup
2. **Performance has a budget**: Hard limits on apps, JS, external scripts
3. **Security is practical**: Focus on actual D2C threats (phishing, ad hijacking), not theoretical
4. **Launch speed > perfection**: Week 1 setup sequence forces action over preparation
5. **Subscription UX is revenue**: Toggle pattern directly impacts HYP-003 (40% subscription rate)
