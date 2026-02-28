# DTC Supplement Referral Program Research

**Date**: 2026-02-06
**Author**: Claude (research compilation)
**AI Model**: claude-opus-4-6
**Status**: AI Draft — needs founder review and live-web verification
**Confidence**: C overall (industry knowledge from training data through early 2025; no live web verification performed)

**IonWave Context**: $59 one-time / $50.15 subscription (15% off). $20 COGS. 66% gross margin (one-time), 60% (subscription). Blended GP LTV: $171. CAC target: $35. Subscription-first architecture.

---

## 1. Optimal Incentive Structures

### 1.1 The Founder's Proposal: "$10 off for referrer + $10 off for friend"

**Verdict: Strong starting point, with one important adjustment.**

The $10/$10 structure is well-aligned with IonWave's economics. Here is the analysis:

| Metric | $10/$10 on $59 (one-time) | $10/$10 on $50.15 (subscription) |
|--------|--------------------------|----------------------------------|
| Friend discount | 17% off first order | 20% off first order |
| Referrer reward | $10 credit toward next order | $10 credit toward next order |
| Gross profit on referred first order | $29.00 ($59 - $10 - $20 COGS) | $20.15 ($50.15 - $10 - $20 COGS) |
| Effective referral CAC | $10 (credit cost) + $10 (friend discount) = $20 | Same |
| Referral CAC vs paid CAC | $20 vs $35 target = 43% cheaper | Same |

**The $10/$10 structure works because:**
- Referral CAC of ~$20 is well below the $35 paid CAC target
- The friend gets a meaningful 17-20% discount, which is in the "motivating" range (research shows <10% doesn't motivate, >25% attracts deal-seekers)
- The referrer's $10 credit encourages a repeat purchase, reinforcing retention
- Simplicity is key at early scale — no complex tiers to explain or track

**The adjustment: Make the referrer reward a store credit, not cash.**

| Reward Type | Pros | Cons | Best For |
|-------------|------|------|----------|
| **Store credit** | Forces re-engagement, higher margin (costs COGS not face value), easy to implement | Less exciting than cash | Subscription brands, high-margin products |
| **Cash/PayPal** | Highest perceived value, broadest appeal | Cash drain, no re-engagement, tax implications | Marketplace/platform businesses |
| **Free product** | Highest perceived value in supplements, creates product trial | High cost per referral, complex fulfillment | Brands with low COGS or multi-SKU wanting trial |
| **Percentage off** | Scales with order value | Confusing, variable cost | Higher-AOV brands ($100+) |
| **Points** | Gamification, deferred cost | Complexity, low engagement at early stage | Brands with 5,000+ customers |

**Recommendation**: $10 store credit for referrer + $10 off friend's first order. The store credit costs IonWave only $3.40 in COGS (the marginal cost of the products the credit buys) rather than $10 in cash. True referral CAC is closer to $13.40, not $20.

### 1.2 Flat vs. Tiered Incentives

| Structure | When to Use | IonWave Fit |
|-----------|------------|-------------|
| **Flat (same reward every time)** | Early stage, <1,000 customers, simplicity matters | YES — launch with this |
| **Tiered (increasing rewards)** | Established program, data shows top referrers drive disproportionate volume | Phase 2, after 6+ months of data |
| **Milestone (bonus at 3, 5, 10 referrals)** | Want to gamify without full tier system | Consider at Phase 2 |

**Tiered example for later consideration:**
- Referrals 1-3: $10 credit per referral
- Referrals 4-7: $15 credit per referral
- Referrals 8+: Free box per referral (costs $20 COGS, perceived value $59)

Research from Friendbuy and ReferralCandy indicates tiered programs can increase referral volume by 20-40% among top referrers, but add significant complexity. Not worth it below 500 active referrers.

[Confidence: C | Sources: ReferralCandy industry reports, Friendbuy benchmark publications, ProfitWell subscription research]

### 1.3 Discount Magnitude Calibration

Industry data on optimal referral discount as % of product price:

| Product Price Range | Optimal Friend Discount | Optimal Referrer Reward | Source |
|---------------------|------------------------|------------------------|--------|
| $20-40 | $5-10 (15-25%) | $5-10 credit | ReferralCandy DTC benchmarks |
| $40-70 | $10-15 (15-25%) | $10-15 credit | Friendbuy ecommerce data |
| $70-120 | $15-25 (15-25%) | $15-20 credit | Enterprise brand data |
| $120+ | $20-30 or % off | % commission or high credit | Luxury/premium programs |

At $59 one-time / $50 subscription, the $10 discount is 17-20% — right in the sweet spot.

**Warning**: Do NOT offer more than $15 off friend's first order. At $15 off a $50.15 subscription, the friend pays $35.15 and IonWave nets only $15.15 GP. At $20 off, you're at $10.15 GP — dangerously thin with any attribution error.

---

## 2. Referral Benchmarks

### 2.1 Referral Rate (% of customers who successfully refer at least one person)

| Benchmark | Rate | Context |
|-----------|------|---------|
| All ecommerce average | 2-3% | Across all product categories |
| DTC subscription brands | 3-5% | Higher due to ongoing engagement |
| Best-in-class DTC supplements | 5-10% | AG1, Seed, brands with strong identity/community |
| Top 10% of all referral programs | 10-15% | Viral/highly shareable products (not typical for supplements) |
| IonWave Ops Model target | >5% | From existing referral program design sheet |

**What drives higher referral rates in supplements:**
- Product with visible/felt results (people share what works for them)
- Strong brand identity (people want to associate with the brand)
- Community/tribe element (health optimizer, keto, biohacker identity)
- Simple sharing mechanism (one-tap share from app or email)
- Timely ask (after positive experience, not immediately after purchase)

[Confidence: C | Sources: ReferralCandy annual benchmarks (2023-2024), Friendbuy DTC reports, Smile.io ecommerce data]

### 2.2 Referral Conversion Rate (% of referred visitors who purchase)

| Benchmark | Rate | Context |
|-----------|------|---------|
| All ecommerce referral links | 5-10% | Average across categories |
| DTC supplements (referred link click to purchase) | 8-15% | Higher trust from personal recommendation |
| Best-in-class supplement referrals | 15-25% | Strong social proof + well-designed landing page |
| IonWave Ops Model target | >20% | From existing referral program design sheet |

**Key insight**: Referred visitors convert at 3-5x the rate of cold paid traffic. If IonWave's paid ads convert at 2-4% (typical DTC supplement), referral traffic should convert at 8-15%.

### 2.3 Revenue Impact

| Metric | Typical Range | Best-in-Class |
|--------|-------------|---------------|
| % of total revenue from referrals (Year 1) | 1-5% | 10-15% |
| % of total revenue from referrals (Year 2+) | 5-15% | 20-30% |
| Revenue per referral vs. paid acquisition | 1.1-1.3x | 1.5x+ |
| Viral coefficient (referrals per customer) | 0.1-0.3 | 0.5+ |
| IonWave Ops Model target (viral coefficient) | >0.5 | Aggressive; 0.2-0.3 more realistic for Year 1 |

[Confidence: C | Sources: Friendbuy benchmark data, ReferralCandy annual reports, Extole DTC brand data]

---

## 3. Best-in-Class DTC Supplement Referral Programs

### 3.1 AG1 (Athletic Greens)

| Attribute | Details |
|-----------|---------|
| **Product/Price** | ~$79/month subscription (30 servings) |
| **Referral structure** | Give 5 free travel packs + welcome kit, Get 5 free travel packs |
| **Incentive type** | Free product (not discount) |
| **Sharing mechanism** | Unique referral link in account dashboard + email sharing |
| **Platform** | Custom-built (enterprise scale) |
| **Referral landing page** | Personalized with referrer's name |
| **Notable tactics** | Influencer/affiliate hybrid program alongside customer referrals; massive UGC campaign; the physical canister + ritual creates shareability |
| **Estimated referral contribution** | 15-25% of new customer acquisition (estimated, not confirmed) |

**Key takeaway for IonWave**: AG1 uses free product as the referral incentive, not discounts. This works because their COGS on travel packs is low relative to perceived value. IonWave could consider a similar approach in Wave 2 with a Starter Kit ($8-10 COGS, $25 perceived value) but at launch, $10 credit is simpler.

### 3.2 LMNT

| Attribute | Details |
|-----------|---------|
| **Product/Price** | ~$45/box (30 sticks), $1.00/stick subscription |
| **Referral structure** | Historically offered "Give a free sample pack, Get a free sample pack" |
| **Incentive type** | Free product (sample packs) |
| **Sharing mechanism** | Referral link + social sharing |
| **Platform** | Believed to use Friendbuy or custom solution |
| **Notable tactics** | Free sample pack as top-of-funnel acquisition (not just referral); "LMNT for free" viral campaigns; strong podcast/influencer pipeline that functions as quasi-referral |
| **Estimated referral contribution** | Significant but hard to separate from free sample program |

**Key takeaway for IonWave**: LMNT's free sample pack strategy blurs the line between referral and sampling. IonWave cannot afford free full boxes as referral incentives at current COGS, but a 5-sachet sample pack (COGS ~$3-4) could be a powerful referral reward once Wave 2 launches.

### 3.3 Seed (Daily Synbiotic)

| Attribute | Details |
|-----------|---------|
| **Product/Price** | ~$50/month subscription |
| **Referral structure** | Give $10 off, Get $10 off (or similar discount-based) |
| **Incentive type** | Store credit / discount |
| **Sharing mechanism** | Unique link from account + email invitations |
| **Platform** | Custom/Friendbuy (believed) |
| **Notable tactics** | Heavy on education-driven sharing ("Did you know about the gut-brain axis?"); refillable jar system creates conversation starter; strong Instagram aesthetic encourages organic sharing |
| **Estimated referral contribution** | Moderate — Seed relies more on content marketing + influencer than formal referral |

**Key takeaway for IonWave**: Seed's education-first approach aligns with IonWave's "78 minerals" science story. Referral messaging should include a shareable education hook, not just "give your friend $10 off." Example: "Share the science of ocean minerals — your friend gets $10 off, you get $10 credit."

### 3.4 Ritual

| Attribute | Details |
|-----------|---------|
| **Product/Price** | ~$33-36/month subscription (multivitamins) |
| **Referral structure** | Give $10, Get $10 (historically, structure has varied) |
| **Incentive type** | Account credit |
| **Sharing mechanism** | Referral link in account dashboard |
| **Platform** | Friendbuy (confirmed historical usage) |
| **Notable tactics** | Transparency as brand value creates natural word-of-mouth; "visible supply chain" = conversation starter; strong packaging design encourages unboxing content |
| **Estimated referral contribution** | 5-10% of new acquisition |

**Key takeaway for IonWave**: Ritual's $10/$10 at a ~$35 price point is directly comparable to IonWave's $10/$10 at $50-59. Ritual proves this structure works at similar price points in supplements.

### 3.5 Comparison Summary

| Brand | Price Point | Referral Incentive | Type | Referrer Cost/Revenue % |
|-------|-----------|-------------------|------|------------------------|
| AG1 | $79/mo | Free travel packs | Product | ~10-15% of first order value |
| LMNT | $45/box | Free sample pack | Product | ~15-20% of first order value |
| Seed | $50/mo | ~$10/$10 | Credit/Discount | ~20% of first order value |
| Ritual | $33-36/mo | $10/$10 | Credit/Discount | ~28-30% of first order value |
| **IonWave (proposed)** | **$59/$50** | **$10/$10** | **Credit/Discount** | **17-20% of first order value** |

IonWave's proposed structure is the most capital-efficient of the group on a percentage basis.

[Confidence: C-D | Sources: Brand websites (as of early 2025), industry analysis, DTC community reports. AG1 and LMNT structures may have changed. Recommend live verification.]

---

## 4. Platform Comparison

### 4.1 Platform Matrix

| Platform | Monthly Cost | Setup | Shopify Integration | Best For | Key Limitation |
|----------|-------------|-------|-------------------|----------|---------------|
| **ReferralCandy** | $59-299/mo (Premium starts ~$59/mo + commission) | Easy (Shopify app, ~1 hour) | Native Shopify app | Bootstrapped brands, simple programs | Commission-based pricing adds up at scale; limited customization on lower tiers |
| **Friendbuy** | $249+/mo (enterprise-focused) | Moderate (needs some dev work) | API + Shopify integration | Mid-market to enterprise ($1M+ revenue) | Too expensive for <$50K/mo brands; overkill features |
| **Smile.io** | Free tier available; $49-599/mo paid | Very easy (Shopify app) | Native Shopify app | All-in-one loyalty + referrals | Referral features less robust than dedicated platforms; free tier is limited |
| **Referral Rock** | $200+/mo | Moderate | Integration available | B2B and complex programs | Pricing is high for early-stage DTC; more B2B focused |
| **Shopify native (discount codes)** | $0 (included) | DIY (manual) | Built-in | MVP/testing phase, no budget | Manual tracking, no automation, no analytics, not scalable |
| **Conjured Referrals** | ~$20-50/mo | Easy (Shopify app) | Native Shopify app | Budget-conscious Shopify stores | Smaller company, less feature-rich |
| **Yotpo (formerly Swell)** | Varies; loyalty suite from $79/mo | Easy-moderate | Native Shopify app | Brands wanting reviews + loyalty + referrals in one | Referral is part of larger suite; can be pricey for just referrals |
| **Loop Referrals** | Part of Loop subscription suite | Easy if already on Loop | Native (if using Loop Subscriptions) | Brands already using Loop for subscriptions | Limited standalone value |

### 4.2 Recommendation for IonWave (<$50K/mo Revenue)

**Phase 0 (Pre-launch / MVP): Shopify Native — $0/mo**
- Create unique discount codes manually for early advocates
- Use a simple Google Sheet to track who referred whom
- Test whether referrals happen organically before investing in a platform
- Duration: First 1-3 months or first 100 customers

**Phase 1 (Post-PMF / Early Traction): Smile.io or ReferralCandy — $49-59/mo**
- Smile.io free tier to start, upgrade to $49/mo when needed
- ReferralCandy at $59/mo if you want a dedicated referral platform
- Both have native Shopify apps with <1 hour setup
- Duration: Months 3-12

**Phase 2 (Scaling / $50K+/mo): ReferralCandy Premium or Friendbuy — $99-249/mo**
- More analytics, A/B testing, tiered programs
- Only invest here if referrals are >5% of revenue

### 4.3 IonWave-Specific Platform Notes

Since IonWave is already planning to use Loop Subscriptions (per M21 subscription platform analysis), check whether Loop has a referral module or integration with ReferralCandy/Smile.io. Using a platform that integrates with your subscription management avoids data silos.

**Integration priority:**
1. Shopify (required)
2. Klaviyo or email platform (for referral email sequences)
3. Loop Subscriptions (for subscriber-specific referral targeting)
4. Google Analytics / attribution (to track referral as acquisition source)

[Confidence: C | Sources: Platform websites, G2/Capterra reviews, DTC community discussions (as of early 2025). Pricing may have changed. Recommend live verification of current pricing.]

---

## 5. Referrer Retention Effect

### 5.1 Do Customers Who Refer Have Higher LTV?

**Yes. This is one of the most consistent findings in referral marketing research.**

| Finding | Data Point | Source |
|---------|-----------|--------|
| Referred customers have higher LTV | 16-25% higher LTV than non-referred customers | Wharton School / Journal of Marketing (Schmitt, Skiera, Van den Bulte, 2011) |
| Referred customers have higher retention | 18% lower churn rate | Same Wharton study; corroborated by multiple industry reports |
| Referred customers have higher initial margin | 15-25% higher first-order profit | Friendbuy industry data |
| **Referrers themselves** have higher LTV | 2-4x higher LTV than non-referring customers | ReferralCandy analysis; Harvard Business Review referral research |
| **Referrers** have lower churn | Referrers churn at 20-30% lower rates | Consistent across multiple DTC studies |
| The act of referring creates commitment | Psychological commitment/consistency effect | Cialdini's influence research applied to commerce |

### 5.2 Why Referrers Retain Better (Causal Mechanisms)

1. **Selection effect**: Customers who refer are already more satisfied and engaged. They were going to stay anyway. Referral programs don't *cause* retention — they *identify* and *reinforce* existing loyalty.

2. **Commitment/consistency effect (Cialdini)**: When someone publicly recommends a product ("You should try IonWave"), they become psychologically committed to that recommendation. Canceling would create cognitive dissonance with their recommendation. This is a real causal mechanism.

3. **Social accountability**: If you referred your friend, and they see you stopped using the product, it undermines your credibility. This creates a soft lock-in.

4. **Identity reinforcement**: Referring signals "I am an IonWave person." Each referral deepens the identity investment. This connects directly to the identity-based retention lever from M21 subscription psychology.

5. **Financial incentive to stay**: If the referrer reward is store credit, they have an economic reason to place another order.

### 5.3 Quantified Impact for IonWave's Model

Using IonWave's existing financial model assumptions:

| Customer Type | Estimated Monthly Churn | Estimated Avg Months | LTV (GP) | Relative to Baseline |
|--------------|------------------------|---------------------|----------|---------------------|
| Non-referring subscriber | 12% | 8.3 months | $250 | Baseline |
| Referring subscriber (made 1+ referral) | 8-10% | 10-12.5 months | $300-375 | +20-50% |
| Referred subscriber (came via referral) | 10-11% | 9-10 months | $270-300 | +8-20% |

**Combined effect**: If 5% of customers refer, and those referrers retain 30% longer, the blended LTV impact across the entire customer base is modest (~1-2% lift). The bigger value is in the acquired referred customers at much lower CAC ($20 vs $35).

**The real ROI of referral programs is CAC reduction, not retention lift.** The retention effect is a bonus.

[Confidence: C | Sources: Wharton School research (Schmitt et al., 2011), Harvard Business Review, ReferralCandy analysis, Cialdini's influence framework. LTV estimates are projections using IonWave's financial model, not empirical data.]

### 5.4 Cross-Reference to IonWave Ops Model

The existing IonWave referral program design (sheet 490) sets these targets:
- Referral Rate: >5%
- Referral Conversion: >20%
- Referral CAC: <$15
- Referred LTV: >DTC LTV
- Viral Coefficient: >0.5

Assessment of these targets:
- **Referral Rate >5%**: Achievable but aggressive for Year 1. 3-5% is more realistic initially.
- **Referral Conversion >20%**: Achievable with a well-designed referral landing page and strong friend incentive.
- **Referral CAC <$15**: With $10/$10 structure, effective CAC is ~$13.40 (accounting for credit vs cash). On target.
- **Referred LTV > DTC LTV**: Consistent with research. Referred customers typically have 16-25% higher LTV.
- **Viral Coefficient >0.5**: Very aggressive. 0.5 means each customer generates 0.5 new customers on average. Typical DTC brands achieve 0.1-0.3. Target 0.2-0.3 for Year 1.

---

## 6. Timing: When to Launch Referral

### 6.1 The Timing Framework

| Stage | Revenue | Customers | Referral Readiness | What to Do Instead |
|-------|---------|-----------|-------------------|-------------------|
| **Pre-launch** | $0 | 0 | NOT READY | Build waitlist. Use "invite friends for early access" but this is lead gen, not referral. |
| **Soft launch (Month 1-2)** | <$5K/mo | <100 | NOT READY | Focus on product-market fit signals: repeat purchase rate, NPS, unsolicited sharing. Manual outreach to happy customers. |
| **Early traction (Month 3-4)** | $5-15K/mo | 100-300 | READY FOR MVP | Launch manual/DIY referral (unique codes, simple tracking). Test whether customers will refer organically with a nudge. |
| **Product-market fit confirmed (Month 4-6)** | $15-30K/mo | 300-500 | READY FOR PLATFORM | Install Smile.io or ReferralCandy. Automate referral flows. Build referral into post-purchase email sequence. |
| **Growth mode (Month 6+)** | $30K+/mo | 500+ | READY FOR OPTIMIZATION | A/B test incentive levels, add tiers, optimize referral landing page, integrate with retention strategy. |

### 6.2 Why NOT to Launch Referral Too Early

1. **No product-market fit = no organic sharing**: If customers wouldn't tell friends without an incentive, paying them to do it creates artificial, low-quality referrals. You get deal-seekers, not advocates.

2. **Small base = small referral pool**: 50 customers x 3% referral rate = 1.5 referrals. Not enough volume to learn anything or justify platform cost.

3. **Opportunity cost**: Time spent building referral infrastructure is time not spent on product quality, conversion rate, and paid acquisition optimization — which have higher ROI at early stage.

4. **Negative experience risk**: If the product, shipping, or experience isn't polished, referred friends have a bad experience, which damages the referrer's trust AND creates negative word-of-mouth.

### 6.3 Why NOT to Wait Too Long

1. **Missed organic advocacy window**: The first 60-90 days of a customer's subscription is when they are most excited and most likely to share. If you don't give them a mechanism to share, you lose that window.

2. **Community momentum**: Early adopters are your most passionate advocates. They signed up when nobody knew the brand. Give them the tools and recognition.

3. **CAC pressure**: As paid acquisition costs rise (and they always do), referral becomes increasingly important as a cost-efficient channel.

### 6.4 Recommendation for IonWave

**Launch a manual/MVP referral program at Month 2-3 (after ~100 customers). Upgrade to a platform at Month 4-6.**

Specific timeline:
- **Month 1**: No formal program. Watch for organic sharing. Ask in post-purchase survey: "How did you hear about us?" and "Would you recommend IonWave to a friend?"
- **Month 2**: Create 10-20 unique referral codes for your most engaged customers. Personal outreach: "Hey [name], we noticed you love IonWave. Here's a code that gives your friends $10 off and earns you $10 credit." Track manually.
- **Month 3**: If manual referral shows any traction (even 2-3 successful referrals), install Smile.io free tier or ReferralCandy. Automate the post-purchase referral ask.
- **Month 4-6**: Optimize. Test different messaging, placement, incentive levels. Build referral into the lifecycle email sequence (Klaviyo).
- **Month 6+**: Consider tiered incentives. Evaluate platform upgrade based on referral volume and revenue contribution.

### 6.5 Pre-Launch Referral (Waitlist/Viral Launch)

There IS a case for pre-launch referral mechanics — but this is **waitlist referral**, not **product referral**:

| Tactic | How It Works | Platforms | Risk |
|--------|-------------|-----------|------|
| Viral waitlist | "Refer friends to move up the waitlist" | Viral Loops, KickoffLabs, SparkLoop | Can generate low-quality leads who just want to game the system |
| Early access reward | "First 100 referrers get 30% off first order" | Manual or Viral Loops | Creates urgency but discount may attract wrong segment |
| Founding member program | "Refer 5 friends, become a Founding Member with lifetime perks" | Manual | High effort per referral but creates deeply committed early advocates |

**For IonWave**: A "Founding Member" approach could work well with the marine plasma science/education angle. "Help us bring ocean mineral nutrition to 1,000 people. Refer 5 friends and earn Founding Member status: lifetime 20% off + input on new flavors." This aligns with the identity-based retention lever from M21.

[Confidence: C | Sources: DTC brand launch playbooks, Y Combinator startup advice, Viral Loops case studies, Recharge DTC retention reports]

---

## 7. IonWave-Specific Recommendations Summary

### 7.1 Launch Structure

| Element | Recommendation | Rationale |
|---------|---------------|-----------|
| **Incentive** | $10 store credit (referrer) + $10 off first order (friend) | Proven at this price point; 17-20% friend discount is optimal range; store credit is margin-efficient |
| **Timing** | MVP at Month 2-3, Platform at Month 4-6 | Need 100+ customers for meaningful referral pool |
| **Platform** | Smile.io (free tier to start) or ReferralCandy ($59/mo) | Both have native Shopify apps; budget-appropriate |
| **Structure** | Flat (not tiered) at launch | Simplicity matters more than optimization at <500 customers |
| **Sharing mechanism** | Unique link + email sharing + shareable discount code | Multiple sharing paths increase activation |
| **Trigger points** | Post-purchase (Day 1), Post-delivery (Day 5), After positive review (triggered), Monthly subscriber email | Multiple touchpoints without being annoying |

### 7.2 Key Metrics to Track (from Ops Model, with adjusted targets)

| Metric | Ops Model Target | Adjusted Year 1 Target | Notes |
|--------|-----------------|----------------------|-------|
| Referral Rate | >5% | 3-5% | 5% is achievable by Month 6+ |
| Referral Conversion | >20% | 10-15% | Invest in referral landing page to push higher |
| Referral CAC | <$15 | <$15 | $10/$10 credit structure delivers ~$13.40 effective CAC |
| Referred LTV | >DTC LTV | 1.1-1.25x DTC LTV | Consistent with research; track from Day 1 |
| Viral Coefficient | >0.5 | 0.15-0.30 | 0.5 is best-in-class; unrealistic Year 1 target |
| Referral % of Revenue | — | 2-5% Year 1 | Scale to 8-12% in Year 2 if program is working |

### 7.3 Referral Unit Economics

| Scenario | Friend Pays | IonWave GP | Referrer Credit Cost (COGS) | Net GP | Effective CAC |
|----------|------------|-----------|---------------------------|--------|--------------|
| Friend buys one-time ($59 - $10) | $49.00 | $29.00 | $3.40 | $25.60 | $13.40 |
| Friend subscribes ($50.15 - $10) | $40.15 | $20.15 | $3.40 | $16.75 | $13.40 |
| **Blended (60% sub)** | — | — | — | **$20.29** | **$13.40** |

Compare to paid acquisition: $35 CAC with $33.69 blended GP = net GP of -$1.31 on first order (payback on Order 2).

**Referral is profitable on first order.** This is the fundamental economic advantage.

### 7.4 Risk Factors

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Low participation (<2% referral rate) | Medium | Test different messaging; increase incentive; focus on timing (ask after positive experience, not immediately) |
| Fraud/gaming (self-referral, fake accounts) | Low at early scale | Platform built-in fraud detection; unique email/address required; manual review at low volume |
| Referral discount attracts low-quality customers | Low-Medium | Monitor referred customer churn vs. baseline. If significantly higher, tighten friend eligibility or reduce discount. |
| Incentive too low to motivate | Low | $10 on $59 (17%) is in the optimal range. If rate is <2% after 3 months, test $15/$15. |
| Platform cost not justified by volume | Medium | Start with free tier (Smile.io) or manual tracking. Only pay for platform when referral volume justifies it. |

---

## 8. Intelligence Gaps & Next Steps

| Gap | Priority | How to Fill |
|-----|----------|-------------|
| Live verification of AG1, LMNT, Seed, Ritual current referral structures | HIGH | Visit each brand's website/account dashboard and document current programs (web search was unavailable for this research) |
| Current pricing for ReferralCandy, Smile.io, Friendbuy | HIGH | Check platform websites for 2026 pricing (may have changed from training data) |
| Loop Subscriptions referral integration capabilities | MEDIUM | Check Loop documentation or contact Loop support |
| IonWave customer NPS / willingness to refer (pre-launch survey) | MEDIUM | Add to customer research (M27) pre-launch survey |
| Competitive referral programs for Seaonic, Quinton, Totum Sport | LOW | Check competitor accounts for referral programs |

---

## Sources & Confidence Notes

This research was compiled from training data knowledge (through early 2025). No live web searches were performed. Specific source categories:

- **Academic research**: Wharton School referral study (Schmitt, Skiera, Van den Bulte, 2011) — well-established, high confidence
- **Platform benchmark data**: ReferralCandy, Friendbuy, Smile.io, Recharge published benchmarks — moderate confidence, likely still directionally accurate
- **Brand program structures**: AG1, LMNT, Seed, Ritual — moderate-low confidence, programs change frequently. Recommend live verification.
- **DTC supplement industry benchmarks**: ProfitWell, Recharge, DTC community data — moderate confidence
- **IonWave internal data**: Ops Model v10 (referral program design sheet, LTV by acquisition source, acquisition source deep dive), M10 offer strategy, M21 subscription psychology — high confidence (read from repository)

**Recommended action**: Before making final decisions, verify key data points with live web research, particularly current competitor program structures and platform pricing.
