# Hook Library — M12: Ad Creative

**Version**: 1.0.0
**TUP**: M12 — Ad Creative
**Cluster**: BCL-3 (DR & Creative)
**Purpose**: Comprehensive hook library for all ad formats (extends M11 VSL-specific hooks to full ad ecosystem)
**Status**: AI Draft
**Danilo Tabs Covered**: Hook Library (x2 — consolidated)
**Cross-references**: M11 hook_library.md (VSL-specific hooks), M13 hook_testing_matrix.md (testing methodology), M14 creative_testing_protocol.md (kill criteria)

---

## 1. Hook Framework: The Science of the First 3 Seconds

### 1.1 Why Hooks Dominate Ad Performance

The hook (first 3 seconds of video, first headline of static, first line of copy) determines whether anyone ever sees the rest of your ad. Industry data:

- **80% of ad performance** is determined by the hook (body/CTA contribute ~20%)
- **3-second decision window**: users decide to engage or scroll within 3 seconds on Meta, 1-2 seconds on TikTok
- **Hook rate benchmark**: >40% 3-second view rate is strong, <25% signals hook failure

[Confidence: A | Source: M13 hook_testing_matrix.md, VidMob creative analytics 2024, Meta Creative Best Practices | Date: 2026-02]

### 1.2 Hook Anatomy

Every effective hook has three components:

1. **Pattern Interrupt** — Something that stops the scroll (visual, audio, or text disruption)
2. **Relevance Signal** — Within 1 second, the viewer must think "this is for ME"
3. **Curiosity Gap** — An open loop that demands resolution (making them stay to learn more)

The best hooks deliver all three simultaneously. Mediocre hooks hit 1-2. Bad hooks hit zero.

---

## 2. Hook Categories

### 2.1 Master Category Framework

7 hook categories, each with psychological mechanism, IonWave examples, platform affinity, and expected performance.

| # | Category | Psychological Mechanism | Platform Affinity | Expected 3s View Rate |
|---|----------|------------------------|-------------------|----------------------|
| 1 | **Pattern Interrupt** | Novelty bias — brain flags unexpected stimuli | TikTok (highest), Meta (high) | 30-45% |
| 2 | **Problem/Pain Callout** | Loss aversion — pain of problem > gain of solution | Meta (highest), YouTube | 25-35% |
| 3 | **Result/Transformation** | Social proof + outcome bias — seeing result creates desire | Meta (high), TikTok | 25-40% |
| 4 | **Curiosity/Question** | Information gap theory — humans compulsively close open loops | All platforms (universal) | 25-35% |
| 5 | **Relatable Scenario** | Mirror neurons — "that's exactly me" identification | TikTok (highest), Meta | 20-30% |
| 6 | **Social Proof/Authority** | Authority bias + bandwagon effect — credibility shortcuts | YouTube (highest), Meta | 20-35% |
| 7 | **How-To/Educational** | Curiosity + reciprocity — value-first earns attention | YouTube (highest), Meta | 20-30% |

[Confidence: B | Source: M13 hook_testing_matrix.md categories, creative psychology research, platform-specific benchmarks from VidMob/Motion | Date: 2026-02]

### 2.2 Category Details with IonWave Examples

#### Category 1: Pattern Interrupt

**Mechanism**: Unexpected visual, audio, or verbal element breaks the autopilot scroll.

**IonWave Examples**:
1. "STOP. Check the label on your electrolyte drink right now." (command + specific action)
2. [Visual: pouring ocean-blue liquid from glass bottle, extreme close-up, ASMR sound] (visual + audio)
3. "I just threw away $500 worth of supplements." (shocking statement)
4. [Split screen: clear water vs mineral-rich ocean water side by side] (visual contrast)

**Platform Notes**:
- TikTok: Most effective — platform rewards novelty, algorithm favors pattern-break content
- Meta: Strong in Feed, less effective in Stories (already fast-scrolling context)
- YouTube: Less needed — user already committed to watching

**Risk**: Can feel clickbaity if body doesn't deliver on hook's implied promise.

#### Category 2: Problem/Pain Callout

**Mechanism**: Name the specific problem the target audience experiences. Creates instant relevance through recognition.

**IonWave Examples**:
1. "Tired by 2pm even though you slept 8 hours?"
2. "You're drinking electrolytes that are 90% sugar and 3 minerals."
3. "Your muscles cramp mid-workout because you're mineral-depleted, not dehydrated."
4. "Bloated after every supplement? There's a reason."

**Platform Notes**:
- Meta: Strongest performer for direct response — leads with pain, offers solution
- YouTube: Effective in first 5 seconds before skip button
- TikTok: Can work but needs to feel conversational, not "ad-like"

**Risk**: Overused in supplement market. Must be specific (not generic "tired of feeling tired?").

#### Category 3: Result/Transformation

**Mechanism**: Lead with the end state. Show what life looks like after the product.

**IonWave Examples**:
1. "I stopped cramping during workouts in 3 days. No sugar. No garbage." [Disclaimer required]
2. [Before: sluggish morning] → [After: energized morning routine with IonWave]
3. "My recovery time cut in half when I switched to marine plasma electrolytes" [Disclaimer required]
4. "3 months of IonWave — here's what changed" (transformation timeline)

**Platform Notes**:
- Meta: High performer for warm/retargeting audiences
- TikTok: Strong as UGC testimonial format
- YouTube: Best for longer-form transformation stories

**FTC Warning**: All result/testimonial claims require "Individual results may vary" disclaimer. Cannot imply typical outcomes unless substantiated. See M11 hook_library.md Section 4.

#### Category 4: Curiosity/Question

**Mechanism**: Open an information gap. Humans compulsively seek closure.

**IonWave Examples**:
1. "What if everything you know about hydration is wrong?"
2. "Why do Olympic athletes refuse to drink Gatorade?" [Must be substantiable]
3. "The one mineral complex your body is desperate for (it's not magnesium)"
4. "What happens when you drink water from 2,000 feet deep in the Pacific?"

**Platform Notes**:
- Universal effectiveness — works across all platforms
- Best for cold audiences (no prior brand awareness)
- Highest risk of "curiosity bait" perception — payoff must be strong

#### Category 5: Relatable Scenario

**Mechanism**: Depict a specific situation the target audience recognizes immediately.

**IonWave Examples**:
1. "It's 6am, you're about to work out, and you're already reaching for that sugar-packed sports drink..."
2. "POV: You just spent $80 on supplements that taste like chalk"
3. "When your trainer asks what electrolytes you use and you show them Gatorade..."
4. "That feeling when you're the only one at the gym NOT cramping"

**Platform Notes**:
- TikTok: Highest performer — "POV" and scenario format is native to platform
- Meta: Works as UGC testimonial setup
- YouTube: Less effective (longer attention commitment reduces scenario impact)

#### Category 6: Social Proof/Authority

**Mechanism**: Leverage credibility signals to shortcut trust.

**IonWave Examples**:
1. "As a sports nutritionist, I stopped recommending synthetic electrolytes. Here's why."
2. "10,000+ 5-star reviews can't be wrong" [Only when true — post-launch only]
3. "Why my functional medicine doctor put me on marine plasma minerals"
4. "The supplement Andrew Huberman would approve of" [Only if defensible — use carefully]

**Platform Notes**:
- YouTube: Strongest — authority content thrives on long-form platform
- Meta: Strong for retargeting (trust reinforcement)
- TikTok: Works only if delivered in native, casual style (not polished/corporate)

**Risk**: Authority claims must be truthful. Cannot fabricate credentials or endorsements.

#### Category 7: How-To/Educational

**Mechanism**: Lead with value. Teach something useful, then introduce product as solution.

**IonWave Examples**:
1. "3 signs you're mineral-depleted (not just dehydrated)"
2. "How to read your electrolyte label in 10 seconds"
3. "The difference between synthetic and marine-sourced minerals (most brands won't tell you)"
4. "Why drinking more water doesn't fix dehydration"

**Platform Notes**:
- YouTube: Highest performer — educational content is native to platform
- Meta: Works for cold audiences in carousel or video format
- TikTok: Strong as "things I learned" or "did you know" format

---

## 3. IonWave Pre-Built Hooks (Integration with M11)

M11 hook_library.md contains 15 VSL-specific hooks across 5 angles. This section extends those to ad-format hooks (shorter, punchier, platform-optimized).

### 3.1 Angle 1: Marine Plasma Mechanism (ANG-01)

**VSL Hooks (from M11)**: "Your electrolytes are missing the one mineral that actually matters" | "I found the ingredient LMNT, Liquid IV, and Gatorade all leave out" | "The trace mineral complex nobody tells you about"

**Ad-Format Extensions**:

| Hook ID | Hook Text | Format | Platform | Category |
|---------|-----------|--------|----------|----------|
| AD-H001 | "78 minerals. Zero sugar. From the deep ocean." | Text overlay on product shot | Meta, TikTok | Pattern Interrupt |
| AD-H002 | "Your electrolytes have 3 minerals. Yours should have 78." | UGC talking head | Meta, TikTok | Problem Callout |
| AD-H003 | "POV: You discover your electrolytes are missing 75 essential minerals" | POV-style UGC | TikTok | Relatable Scenario |
| AD-H004 | "What's actually in your electrolyte drink?" [holds up competitor label] | Product comparison | Meta, YouTube | Curiosity |
| AD-H005 | "I switched from LMNT to this. Here's what happened." | Testimonial UGC | Meta, TikTok | Result/Transformation |

### 3.2 Angle 2: Anti-Synthetic / Contrarian (ANG-02)

**Ad-Format Extensions**:

| Hook ID | Hook Text | Format | Platform | Category |
|---------|-----------|--------|----------|----------|
| AD-H006 | "Your sports drink is dehydrating you." | Bold text on screen | Meta, TikTok | Pattern Interrupt |
| AD-H007 | "I'm a nutritionist. Here's why I tell athletes to quit Gatorade." | Authority UGC | YouTube, Meta | Authority |
| AD-H008 | "30 grams of sugar in your 'healthy' drink. Let that sink in." | Stat reveal | Meta | Problem Callout |
| AD-H009 | "The electrolyte industry doesn't want you to see this label." | Product reveal | TikTok | Curiosity |
| AD-H010 | "When my coach told me to stop drinking sports drinks, I thought he was crazy..." | Story open | Meta, TikTok | Relatable Scenario |

### 3.3 Angle 3: Electrolyte Deficiency (ANG-03)

**Ad-Format Extensions**:

| Hook ID | Hook Text | Format | Platform | Category |
|---------|-----------|--------|----------|----------|
| AD-H011 | "75% of Americans are chronically dehydrated. Drinking more water won't fix it." | Stat + contrarian | Meta, YouTube | Problem Callout |
| AD-H012 | "You're not tired. You're mineral-depleted." | Bold claim | TikTok, Meta | Pattern Interrupt |
| AD-H013 | "3 signs your body is screaming for minerals (most people ignore #2)" | Listicle hook | Meta, TikTok | Educational |
| AD-H014 | "I was drinking 8 glasses of water a day and STILL dehydrated." | Personal story | TikTok | Relatable Scenario |
| AD-H015 | "Did you know water alone doesn't hydrate you?" | Question | Meta | Curiosity |

### 3.4 Angle 4: Bioavailability / Transparency (ANG-04)

**Ad-Format Extensions**:

| Hook ID | Hook Text | Format | Platform | Category |
|---------|-----------|--------|----------|----------|
| AD-H016 | "I tested 10 electrolyte brands. Only one had 78 minerals." | Test/comparison | Meta, YouTube | Authority |
| AD-H017 | "3 minerals vs 78 minerals. Which would you choose?" | Side-by-side visual | Meta, TikTok | Curiosity |
| AD-H018 | "$500 on electrolytes later, here's the only one worth buying." | Spending reveal | TikTok, Meta | Result |
| AD-H019 | "Read the ingredients on your electrolyte. If it's just sodium, potassium, magnesium — you're missing 75." | Label check | Meta | Educational |
| AD-H020 | "The difference between lab-made and ocean-sourced minerals in 15 seconds" | Quick explainer | TikTok, YouTube | Educational |

### 3.5 Angle 5: Ancestral Nutrition / Ocean Sourcing (ANG-05)

**Ad-Format Extensions**:

| Hook ID | Hook Text | Format | Platform | Category |
|---------|-----------|--------|----------|----------|
| AD-H021 | "The one supplement every biohacker takes before anything else" | Authority claim | YouTube, Meta | Authority |
| AD-H022 | "From 2,000 feet deep in the Pacific — this is what real hydration looks like" | Origin story visual | Meta, YouTube | Pattern Interrupt |
| AD-H023 | "Your ancestors got their minerals from the ocean. Now you can too." | Ancestral framing | Meta | Curiosity |
| AD-H024 | "Morning routine upgrade: skip the pills, drink the ocean." | Lifestyle | TikTok, Meta | Relatable Scenario |
| AD-H025 | "Why is ocean water the closest match to human blood plasma?" | Scientific curiosity | YouTube | Educational |

---

## 4. Hook Testing Protocol (Ad-Specific)

### 4.1 Testing Cadence

Per M13 hook_testing_matrix.md and M14 creative_testing_protocol.md:

1. **Test 5 hooks per round** within a single angle
2. **Spend $20-30 per hook variant** for 2-3 days
3. **Same body/CTA** across all variants — only hook changes (isolate variable)
4. **Kill threshold**: 3-second view rate < 25% after $50 spend
5. **Winner criterion**: Highest 3-second view rate + acceptable CPA (< 1.5x target)
6. **Lock winner** — move to next test variable (body content or CTA)
7. **Repeat every 2-3 weeks** to refresh against fatigue

### 4.2 Hook Rotation Strategy

| Week | Action | Hooks in Market |
|------|--------|----------------|
| 1-2 | Launch initial 5 hooks (1 per category) | 5 active |
| 3 | Kill <25% view rate hooks, add 2-3 new variants | 5-7 active |
| 4-5 | Identify top 2 performers, create 5 derivatives each | 10-12 active |
| 6 | Refresh fatigued hooks (frequency >3), maintain winners | 8-10 active |
| 7-8 | New angle rotation — test 5 hooks from next angle | 10-15 active |

---

## 5. Hook Performance Tracking

| Hook ID | Hook Text | Angle | Category | Platform | 3s View Rate | CTR | CPA | Status | Notes |
|---------|-----------|-------|----------|----------|-------------|-----|-----|--------|-------|
| AD-H001 | "78 minerals. Zero sugar..." | ANG-01 | Pattern Interrupt | Meta | — | — | — | To Test | Priority 1 |
| AD-H002 | "Your electrolytes have 3..." | ANG-01 | Problem Callout | Meta | — | — | — | To Test | Priority 1 |
| AD-H006 | "Your sports drink is..." | ANG-02 | Pattern Interrupt | TikTok | — | — | — | To Test | Priority 1 |
| AD-H011 | "75% of Americans..." | ANG-03 | Problem Callout | Meta | — | — | — | To Test | Priority 2 |
| AD-H021 | "The one supplement..." | ANG-05 | Authority | YouTube | — | — | — | To Test | Priority 2 |

**Post-launch**: Fill actual data. Archive hooks with <25% view rate. Iterate winners via creative_replenishment.md cadence.

---

## Intelligence Gaps & Upgrade Paths

| Gap | Current Grade | Upgrade Path | Target Grade |
|-----|--------------|--------------|--------------|
| **Best hook category for marine plasma** | D | Test 5 categories (1 hook each) in Month 1, measure 3s view rate | A |
| **Platform-specific hook performance** | D | Same hook, test on Meta vs TikTok vs YouTube — compare view rates | A |
| **Hook fatigue rate by category** | C | Track frequency and CTR decay per hook over 6-week window | B |
| **Competitor hook analysis** | D | Analyze top 20 Seaonic/LMNT ads via Meta Ad Library for hook patterns | B |

---

## Sources

- M11 hook_library.md — VSL hook frameworks and pre-built hooks
- M13 hook_testing_matrix.md — Hook testing methodology
- M14 creative_testing_protocol.md — Kill criteria and testing hierarchy
- VidMob Creative Analytics 2024 — Hook performance benchmarks
- Meta Creative Best Practices Guide 2025
- TikTok Creative Center 2025
