# Industry Perspectives — M3: Financial Model

**TUP**: M3 | **Tab**: IP
**Version**: 1.0.0
**Date**: 2026-02-11
**Author**: Caio, Claude (collaborative)
**AI Model**: claude-opus-4-6
**Status**: AI Draft
**Danilo Source**: ops_model_v10_dump/181_ip_m3.json

---

## Research Questions (from Danilo IP-M3)

1. What are standard D2C financial models?
2. What are top electrolyte brand margins?
3. What are the best seed-stage models?
4. How do VCs evaluate D2C unit economics?

---

## 1. Current State — D2C Financial Modeling in 2026

The D2C financial modeling landscape in 2026 is characterized by **template proliferation without scenario rigor**. Hundreds of financial model templates exist (Visible.vc, Financial Models Hub, Finmark, etc.), but most share common weaknesses:

**What's standard:**
- 3-5 year projections with monthly Year 1, quarterly/annual thereafter
- Revenue built bottom-up from customer acquisition, conversion, AOV, retention
- COGS calculated from product cost, often excluding fulfillment and shipping
- Simple 3-scenario modeling (base/upside/downside) with manually adjusted inputs
- Cap table tracking and SAFE/convertible note modeling

**What's missing in most models:**
- **Kill criteria integration**: No models connect financial variables to explicit go/no-go thresholds
- **Bifurcation points**: Standard scenario planning is static — it doesn't tell you which scenario you're in as data arrives
- **Fully-loaded gross margin**: Most D2C models report product-only GM (60-70%), masking the true contribution margin (30-45%) — this is exactly the REC-001 dispute
- **Working capital timing**: Few models capture the cash conversion cycle dynamics specific to D2C (inventory prepayment vs immediate revenue collection)
- **Sensitivity-to-kill linkage**: Tornado charts exist but don't connect to existential thresholds

**Industry benchmarks (D2C supplements):**
- Product gross margin: 60-70% [Confidence: B | Source: Saras Analytics, Drivepoint, Opensend industry reports | Date: 2026-02-11]
- Fully-loaded contribution margin: 30-48% [Confidence: B | Source: Same]
- Health & wellness average contribution margin: ~47.66% [Confidence: C | Source: StoreHero ecommerce profitability tracking 2026 | Date: 2026-02-11]
- D2C ad spend as % of revenue: 30-60% in Year 1 [Confidence: C | Source: Industry benchmarks | Date: 2026-02-11]

---

## 2. Best in Class — Who Models Well?

**Stripe-acquired Runway**: The gold standard for dynamic financial planning. Runway (acquired by Stripe in 2023) pioneered the concept of models that update from live accounting data. Their approach — connecting plan to actuals in real-time — is exactly the P-M3 vision. However, Runway targets $5M+ ARR companies, not pre-seed startups.

**Causal**: Scenario planning tool that excels at what-if analysis. Allows building models where changing one assumption cascades through the entire plan. Strong on collaboration but requires technical setup.

**Finmark (now acquired)**: Built specifically for startups. Good scenario modeling, investor-ready outputs. Was the closest to a pre-seed-appropriate tool before acquisition.

**What makes them best-in-class:**
1. **Live data connections**: Model updates from Stripe, QuickBooks, bank feeds automatically
2. **Scenario branching**: Change one variable, see cascading effects
3. **Collaboration**: Multiple stakeholders can view/edit with version history
4. **Investor-ready outputs**: Auto-generate the charts and tables investors expect

**What they still lack:**
1. No kill criteria integration
2. No bifurcation point methodology
3. No explicit uncertainty quantification (no confidence grades on assumptions)
4. Too expensive/complex for a solo pre-seed founder

[Confidence: C | Source: Product knowledge of Runway, Causal, Finmark. Runway-Stripe acquisition confirmed. | Date: 2026-02-11]

---

## 3. Where the Industry Is Wrong

### 3.1 Static Models Break on First Contact with Reality

**The conventional wisdom**: Build a beautiful financial model, present it to investors, update it quarterly.

**Why it's wrong**: A financial model built pre-launch with 100% estimated inputs will be 30-80% wrong within 90 days. The model's VALUE is not in its predictions — it's in the decision architecture it embeds. What kill criteria are integrated? What bifurcation points are monitored? What response playbooks are pre-written?

Most D2C financial models are **prediction machines**. They should be **decision machines**.

### 3.2 Gross Margin Misleads

**The conventional wisdom**: Report 65%+ gross margin to investors. It sounds great.

**Why it's wrong**: Product-only gross margin (the REC-001 "67% number") is meaningless for cash planning. When fulfillment costs $4-6/order, shipping costs $3.50-5.00, payment processing takes 3%, and returns run 5-10%, the actual cash margin is 35-50%. Founders who plan on 67% margins run out of cash. This is the central finding of REC-001.

### 3.3 Scenario Planning Without Decision Architecture Is Theater

**The conventional wisdom**: Create Base / Upside / Downside scenarios.

**Why it's wrong**: Three scenarios with no bifurcation point methodology are just three versions of fiction. Without knowing WHICH scenario you're in (and WHEN you'll know), scenario planning is a presentation trick, not a management tool.

---

## 4. Our Contrarian Take

**"The financial model should auto-update from live business data."** (from P-M3 vision)

This means:
1. **Not a spreadsheet**: A model that lives in a tool (or code) that connects to Stripe, Shopify, and the ad platforms
2. **Not a prediction**: A decision system that monitors bifurcation points and tells you which scenario you're in
3. **Not annual**: Continuous — updated daily by data feeds, reviewed weekly by the founder
4. **Not separate from operations**: Integrated with the M30 analytics dashboard, the M25 bookkeeping system, and the M13 ad management workflow

**Why we believe this**: Because IonWave's hypothesis-driven architecture (8 hypotheses with confidence grades and validation plans) naturally maps to a financial model that validates assumptions in real-time. When HYP-001 (CAC) gets its first real data point, the model should automatically update its projections and recalculate which bifurcation path the business is on.

**Why most would disagree**: "You're a pre-seed supplement company. Just use a spreadsheet." And they're partly right — building this system is premature at 0 revenue. But DESIGNING for it isn't. The markdown files in M3 are structured to migrate to a connected system when the time comes. The bifurcation framework, kill criteria linkages, and confidence grading are all building blocks for the auto-updating model.

---

## 5. Implications for IonWave

### 5.1 What We Do Differently

1. **Integrated model, not separate spreadsheet**: M3 financial model connects directly to M30 kill criteria, M25 bookkeeping, M13 ad metrics. Not three disconnected spreadsheets.

2. **Confidence-graded assumptions**: Every number in the model has an A/B/C/D grade. When investors ask "how confident are you in this projection?" we can say exactly which inputs are strong and which are guesses.

3. **Bifurcation-linked scenarios**: Our scenarios aren't static stories — they're decision trees with measurable thresholds and pre-written responses.

4. **REC-001 transparency**: We show the margin dispute openly. Most founders would pick the number that looks better. We show three numbers and explain why they diverge.

### 5.2 What We Steal

- **From Runway (Stripe)**: The vision of live-data-connected models. Aspire to this at scale.
- **From Causal**: The cascading what-if analysis. Our bifurcation tree is a manual version.
- **From traditional D2C models**: The bottom-up customer cohort methodology. It works.

### 5.3 What We Avoid

- **Vanity gross margins**: Always report fully-loaded GM for cash planning
- **Static models**: Update weekly/monthly, not quarterly
- **Prediction theater**: Focus on decision architecture, not forecast accuracy
- **Premature complexity**: Start with markdown → migrate to code/tool when revenue justifies it

### 5.4 Migration Path: Markdown to Auto-Updating Model

| Phase | Revenue | Model Format | Data Connection |
|-------|---------|-------------|----------------|
| Pre-launch | $0 | Markdown (this M3) | Manual |
| Month 1-6 | $0-$30K/mo | Spreadsheet (Google Sheets) | Manual weekly |
| Month 7-12 | $30K-$70K/mo | Spreadsheet + simple dashboards | Semi-automated (Shopify export) |
| Month 13+ | $70K+/mo | Dedicated tool (Runway, custom) | Automated (API connections) |

[Confidence: B for methodology, D for IonWave-specific outcomes | Source: P-M3 vision, D2C modeling best practices research | Date: 2026-02-11]
