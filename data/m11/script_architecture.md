# VSL Script Architecture

**Version**: 1.0.0
**TUP**: M11 — VSL Production
**Cluster**: BCL-3 (DR & Creative)
**Purpose**: Structural blueprint for every VSL script with kill criteria per section
**Status**: Production

---

## Script Structure Framework

The 8-section architecture with time allocations, purpose, and kill criteria for each.

### Section 1: Hook (0:00-0:05)

**Purpose**: Stop the scroll. Pattern interrupt.

**What It Contains**:
- Bold claim, question, or visual disruption
- Must match the ad hook that drove the click
- First frame must be visually arresting (motion, contrast, text overlay)

**Examples**:
- "Your supplements are lying to you." [visual: black screen → ocean waves]
- "Why do you feel worse AFTER drinking electrolytes?"
- "I was an athlete who couldn't recover until I discovered..."

**Kill Criterion**: View-through rate < 25% at 3 seconds.

If people don't stop scrolling in 3 seconds, the hook failed. Kill immediately.

[Confidence: A | Source: Meta/TikTok VSL benchmarks (25-35% hook rate) | Date: 2026-02-09]

---

### Section 2: Problem (0:05-0:30)

**Purpose**: Make them feel the pain.

**What It Contains**:
- Describe the problem they live with every day
- Use their language (not clinical jargon)
- Be specific (tired → "You crash every afternoon at 2pm")

**Script Pattern**:
1. Name the pain point (brain fog, low energy, slow recovery)
2. Show them you understand it ("Think about it. You're tired...")
3. Make it relatable (90% of people experience this, even supplement users)

**Example** (IonWave):
> "Here's what the supplement industry doesn't want you to know: Most minerals in supplements are synthetic compounds. Made in factories. Isolated from their natural form. And your body? It doesn't know what to do with them. That's why 90% of Americans are deficient in at least one essential mineral—even the ones taking supplements every day."

**Kill Criterion**: Drop-off > 50% before 30 seconds.

If half your audience leaves before hearing the problem, they don't identify with it. Wrong avatar or wrong pain point.

---

### Section 3: Agitation (0:30-1:00)

**Purpose**: Make the pain urgent.

**What It Contains**:
- What happens if they do nothing
- Future-pace the negative outcome
- Stack the frustration (you've tried X, Y, Z and still feel off)

**Script Pattern**:
1. "You've probably tried to fix this..." (acknowledge past failures)
2. List failed solutions with emotional weight ("Counting pills every morning. Spending $100, $200 a month.")
3. End with the core frustration ("And still feeling... off.")

**Example** (IonWave):
> "You've probably tried to fix this. Magnesium supplements. Zinc. Potassium. The whole stack. Counting pills every morning. Spending $100, $200 a month. And still feeling... off. Because here's the thing: taking isolated synthetic minerals is like trying to run software on incompatible hardware."

**Kill Criterion**: Audience doesn't identify (low engagement, comments show confusion).

If people aren't nodding along or commenting "this is me," agitation missed.

---

### Section 4: Mechanism (1:00-2:00)

**Purpose**: Explain WHY your solution works.

**What It Contains**:
- The unique mechanism (not features — the underlying reason)
- Origin story or discovery moment
- Scientific credibility WITHOUT jargon

**Structure**:
1. Introduce the mechanism (marine plasma, René Quinton's discovery)
2. Explain why it's different ("98% identical to blood plasma, not similar—identical")
3. Show the historical or scientific proof (French hospitals, Olympic athletes)

**Example** (IonWave):
> "In 1897, a French scientist named René Quinton discovered something that changed everything. He found that human blood plasma is 98% identical to seawater. Not similar. Nearly identical. Same minerals. Same ratios. Same ionic form. He spent his life proving that marine plasma—minerals harvested from deep ocean water—could restore balance to the human body."

**Kill Criterion**: Confusion (high drop-off, low completion rate).

If people don't understand the mechanism by 2:00, they won't buy. Simplify or kill.

---

### Section 5: Proof (2:00-3:00)

**Purpose**: Make them believe.

**What It Contains**:
- Testimonials (specific names, specific results, specific timeframes)
- Data (HRV +15 points, recovery time cut in half)
- Credentials (sports nutritionist, biohacker, etc.)
- Before/after (energy graphs, sleep scores, performance metrics)

**FTC Compliance Rules**:
- **NO fictional testimonials** (Marcus T., Jennifer R., David K. in existing script are fictional — CANNOT GO LIVE)
- **Substantiate all claims** (HRV +15 points requires RCT or individual test data)
- **Typical results disclosure** (if showing atypical results, must disclose "results not typical")

[Confidence: A | Source: FTC Consumer Review Rule ($53,088+ per fake review violation) | Date: 2026-02-09]

**Example** (Compliant):
> "In our beta testing, users reported improved energy, better recovery, and clearer thinking within 2-3 weeks. Individual results vary. One beta tester, a software engineer in Austin, saw his HRV increase 12 points over 4 weeks—tracked via Oura Ring." [Include disclaimer: Results not typical. Individual outcomes depend on baseline health, diet, and activity level.]

**Kill Criterion**: Trust signals don't move needle (CPA doesn't improve after adding proof).

If proof section doesn't lower CPA, either the proof isn't credible or the mechanism didn't land.

---

### Section 6: Offer (3:00-3:30)

**Purpose**: Make it a no-brainer.

**What It Contains**:
- What they get (product + format)
- Price anchoring (compare to alternatives or show value breakdown)
- Bonuses (if applicable)
- Guarantee (30-day money-back, specific refund terms)
- Urgency/scarcity (subscription discount, limited-time offer)

**Script Pattern**:
1. Product reveal ("Introducing IonWave. Pure marine plasma...")
2. What's inside ("78 ionic minerals—not 4, not 10, seventy-eight")
3. How easy it is ("Just tear, pour, drink. 30 seconds.")
4. Price comparison ("LMNT gives you 3 minerals for $45/mo. IonWave gives you 78 for $47/mo.")
5. Guarantee ("Try it for 30 days. If you don't feel the difference, we'll refund every penny.")

**Kill Criterion**: Offer doesn't convert despite interest (high watch rate but low CTR).

If people watch the whole video but don't click, offer isn't compelling enough. Test pricing, bonuses, or guarantee terms.

---

### Section 7: CTA (3:30-4:00)

**Purpose**: Tell them exactly what to do.

**What It Contains**:
- Clear instruction ("Click the button below")
- Button/link placement (visual on-screen)
- Urgency reinforcement ("Your body has been waiting for this")
- Final objection handle ("Subscribe and save 20%—or just try one box, no commitment")

**Example** (IonWave):
> "So here's what I want you to do. Click the button below. Get your first box of IonWave. Subscribe and save 20%—or just try one box, no commitment. Either way, you've got 30 days to feel the difference. Your body has been waiting for this. 78 minerals. 30 seconds. Zero BS. Click below and try IonWave risk-free today."

**Kill Criterion**: Click-through < 1% (people watched but didn't act).

If CTR is below 1%, the CTA is either unclear or the urgency isn't strong enough.

---

### Section 8: Objection Loop (4:00-5:00, Optional)

**Purpose**: Handle remaining doubt.

**What It Contains**:
- Top 3 objections addressed directly
- FAQ-style or narrative format
- Can loop back to proof or offer

**Common Objections for Supplement VSLs**:
1. "How is this different from [competitor]?"
2. "Why haven't I heard of this before?"
3. "Is this safe / Are there side effects?"

**Note**: This section is optional. Only include if data shows significant drop-off after CTA without conversion. Many winning VSLs end at 4:00.

**Kill Criterion**: N/A — this is a catch net, not a conversion driver.

---

## Hook Formulas (10 Proven Frameworks)

Use these as starting templates. Adapt for IonWave—don't copy verbatim.

| Formula | Example (IonWave) | Best For | Expected Hook Rate |
|---------|-------------------|----------|-------------------|
| **Bold Claim** | "Your sports drink is dehydrating you." | Contrarian takes, myth-busting | 25-35% |
| **Question** | "Why do you feel worse AFTER drinking electrolytes?" | Problem-aware audiences | 20-30% |
| **Story** | "I was an athlete who couldn't recover until I discovered..." | Cold audiences, emotional connection | 25-35% |
| **Visual Demo** | Side-by-side absorption test | Visual products, science-backed | 20-30% |
| **Authority** | "As a sports nutritionist with 10 years..." | Expert-led brands | 20-35% |
| **Social Proof** | "237,000 athletes switched to this last month" | Scaled brands with data | 30-45% |
| **Urgency** | "They're trying to remove this ingredient from shelves" | Scarcity plays, trending topics | 20-30% |
| **Curiosity Gap** | "I found the one ingredient most electrolyte brands leave out" | Cold audiences, top of funnel | 25-35% |
| **Result Lead** | "I stopped cramping during workouts in 3 days" | Solution-aware audiences | 25-40% |
| **Us vs Them** | "There are two types of electrolyte drinks: ones with 30g of sugar and ones that actually work" | Competitive positioning | 25-35% |

[Confidence: A | Source: VSL hook benchmarks (Jasper AI, ClickBank) | Date: 2026-02-09]

See `hook_library.md` for full hook testing protocol.

---

## IonWave Angle Library

Pre-tested angles for IonWave VSLs. Start here for first 5-angle test.

| Angle ID | Hook | Mechanism | Target Avatar | Status | CPA |
|----------|------|-----------|---------------|--------|-----|
| **ANG-01** | Your electrolytes are missing the one mineral that matters | Trace mineral complex absorption | Health-conscious 25-40 | To Test | — |
| **ANG-02** | Why athletes are quitting Gatorade | Sugar-free full spectrum vs sugar+sodium only | Athletes 18-35 | To Test | — |
| **ANG-03** | The dehydration lie: why drinking more water isn't helping | Cellular hydration vs fluid volume | Biohackers 28-45 | To Test | — |
| **ANG-04** | I tested every electrolyte brand. Here's what I found. | Ingredient comparison/transparency | Research-driven buyers | To Test | — |
| **ANG-05** | The morning routine ingredient nobody talks about | Electrolytes as daily foundation | Wellness/morning routine crowd | To Test | — |

**Post-launch**: Update this table with actual CPA data. Kill angles > 3x target CPA. Double down on winners.

---

## Length Calibration

VSL length should match product complexity and price point.

| Product Type | Price Point | Recommended Length | Example |
|--------------|-------------|-------------------|---------|
| Low-ticket supplement | $20-50 | 3-5 minutes | IonWave (current 4-min script) |
| Mid-ticket supplement | $50-100 | 5-8 minutes | Premium supplement bundles |
| High-ticket info product | $100-500 | 10-20 minutes | Agora financial newsletters |
| Complex mechanism | Any | Add 2-3 min | If mechanism requires education |

**IonWave calibration**: Current 4-min script is appropriate for $47 subscription price point.

**Comparison**: Emma Relief ($184 AOV) uses 30-min VSL. That's over-indexed for their price—likely compensating for weak mechanism. IonWave's marine plasma story is stronger; 3-5 min is optimal.

[Confidence: B | Source: Derived from Emma Relief analysis (M15) + industry benchmarks | Date: 2026-02-09]

---

## Intelligence Gaps & Upgrade Paths

| Gap | Current Grade | Why C/D | Upgrade Path | Target Grade |
|-----|--------------|---------|--------------|--------------|
| **Winning script structure for marine plasma** | D | Pre-launch — no tested scripts yet | Test 3 script variants (mechanism-first vs problem-first vs story-first) | A |
| **Optimal VSL length for IonWave** | C | Using industry benchmarks (3-5 min for $47 product); actual completion rates unknown | Post-launch: test 3-min vs 5-min variants | A |
| **Section-level retention curves** | D | Don't know where people drop off in script | Use Vidalytics or Wistia heatmaps on first VSL | A |
| **Platform-specific script adaptations** | D | Don't know if Meta/TikTok/YouTube audiences need different hooks or lengths | Test same script across 3 platforms, analyze retention | A |

---

## Related Documents

- `vsl_as_trade_framework.md` — Why VSLs are Trades, not creative tasks
- `hook_library.md` — 10 proven hook frameworks with testing protocol
- `testing_protocol.md` — Statistical testing hierarchy and kill criteria
- `production_spec.md` — Shot list, B-roll, FTC compliance checklist
- `ionwave_vsl_script_graded.md` — Existing 4-min script with compliance flags

---

## Sources

- [Video Sales Letter Best Practices](https://levitatemedia.com/learn/what-is-vsl-how-to-create-a-perfect-video-sales-letter)
- [VSL Structure Guide 2026](https://www.jasper.ai/blog/video-sales-letter)
- [FTC Consumer Review Rule](https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance)
- M15 Landing Pages & Conversion — Emma Relief VSL analysis
