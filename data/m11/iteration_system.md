# VSL Iteration System

**Version**: 1.0.0
**TUP**: M11 — VSL Production
**Cluster**: BCL-3 (DR & Creative)
**Purpose**: Post-mortem framework and learnings transfer system for continuous VSL improvement
**Status**: Production

---

## Post-Mortem Template

Run this after EVERY VSL test cycle (winner or killed). Document learnings to improve next VSL.

### VSL Post-Mortem: [VSL-XXX]

**Date**: YYYY-MM-DD
**Angle**: [Angle ID + hook]
**Status**: Winner / Killed / In Progress
**Final CPA**: $XX
**Total Spend**: $XX
**Total Revenue**: $XX
**ROAS**: Xx

---

#### What Converted (Keep This)

**Hook performance**:
- Hook rate: XX%
- Which hook variant won: [text]
- Why it worked: [analysis]

**Body performance**:
- Retention curve: [where did people drop off?]
- Best-performing section: [mechanism / proof / offer]
- What kept them watching: [specific element]

**Offer performance**:
- Conversion rate: XX%
- Which guarantee/bonus/urgency element worked: [analysis]
- Price point feedback: [comments, objections]

**Platform performance**:
- Best platform: Meta / TikTok / YouTube
- CPA by platform: [data]
- Creative format that worked: [square, vertical, horizontal]

---

#### What Dropped Off (Fix This)

**Fall-off points in script**:
- XX% dropped off at 0:15 → [hypothesis: hook didn't land]
- XX% dropped off at 1:30 → [hypothesis: mechanism too complex]
- XX% dropped off at 3:00 → [hypothesis: offer unclear]

**Creative weaknesses**:
- B-roll issues: [specific footage that didn't work]
- Graphics issues: [confusing charts, poor quality]
- Audio issues: [VO pacing, music mismatch]

**Audience mismatch signals**:
- Comments showing confusion: [examples]
- Wrong avatar attracted: [data]
- Message-market mismatch: [analysis]

---

#### Qualitative Feedback

**Comments** (sample 10-20):
- [Positive comment 1]
- [Positive comment 2]
- [Objection 1]
- [Objection 2]
- [Confusion signal 1]

**DMs / Customer Support**:
- Common questions raised: [list]
- Objections that came up post-purchase: [list]

**Survey responses** (if collected):
- How did you hear about us? [source attribution]
- What almost stopped you from buying? [objection data]
- What convinced you? [conversion trigger]

---

#### Lessons for Next VSL

**What to replicate**:
1. [Specific element that worked]
2. [Another element that worked]
3. [Third element]

**What to avoid**:
1. [Specific element that failed]
2. [Another failure]
3. [Third failure]

**Hypotheses to test next**:
1. [New angle idea based on learnings]
2. [Hook variation to try]
3. [Offer tweak]

---

#### Data Archive

**Raw metrics**:
- Impressions: X
- ThruPlays (3-sec): X
- Completed views: X
- Link clicks: X
- Purchases: X
- Hook rate: XX%
- Hold rate: XX%
- CTR: XX%
- CPA: $XX
- ROAS: Xx

**Audience breakdown**:
- Age: [data]
- Gender: [data]
- Geography: [top 5 states/countries]
- Interests: [data]

**Platform breakdown**:
- Meta: $XX CPA, XX hook rate
- TikTok: $XX CPA, XX hook rate
- YouTube: $XX CPA, XX hook rate

---

## Iteration Log Template

Track all VSL versions in a central log. This shows evolution over time.

| VSL ID | Date | Angle | Hook | CPA | Status | Key Learnings | Next Action |
|--------|------|-------|------|-----|--------|---------------|-------------|
| VSL-001 | 2026-XX-XX | ANG-01: Missing mineral | "Your electrolytes are missing..." | $45 | Killed | Hook rate too low (18%) | Test new hook on same angle |
| VSL-002 | 2026-XX-XX | ANG-01: Missing mineral | "I found the ingredient LMNT leaves out..." | $32 | Winner | Hook rate 28%, held CPA at $32 for 4 weeks | Scale to $500/day, prepare refresh hooks |
| VSL-003 | 2026-XX-XX | ANG-02: Athletes quitting Gatorade | "Why Olympic athletes stopped..." | $38 | Soft kill | Hook rate OK (24%) but CPA above target | May retry with different proof section |

**Post-launch**: Update this log after every test cycle. Use it to identify winning patterns (e.g., "curiosity gap hooks always outperform questions for IonWave").

---

## Learnings Transfer Framework

**Goal**: Every VSL should be smarter than the last. Learnings from VSL-001 inform VSL-002, and so on.

### Transfer Checklist

After completing a post-mortem, answer these questions:

**1. Angle Library Update**
- [ ] Add new angle to `script_architecture.md` angle library if it worked
- [ ] Mark angle as "Killed" if CPA > 3x target
- [ ] Update CPA column with actual data

**2. Hook Library Update**
- [ ] Add winning hook to `hook_library.md` with actual hook rate
- [ ] Retire hooks with < 20% hook rate
- [ ] Note which hook TYPE worked (curiosity gap vs contrarian vs result lead)

**3. Script Structure Refinement**
- [ ] Update retention benchmarks (where do people drop off on average?)
- [ ] Flag sections that consistently underperform (e.g., "mechanism always loses 30% of audience")
- [ ] Note which proof types work (testimonial vs data vs credentials)

**4. Production Spec Improvements**
- [ ] Update B-roll library with "known winners" (e.g., "ocean waves = 28% hook rate, stock gym footage = 18%")
- [ ] Retire graphics that confused audiences
- [ ] Note which VO style worked (casual vs authoritative)

**5. Testing Protocol Calibration**
- [ ] Update kill thresholds if data shows different patterns (e.g., "marine plasma hooks take longer to warm up — extend test to 7 days not 5")
- [ ] Adjust budget minimums based on actual costs

**6. Financial Model Refinement**
- [ ] Update CPA benchmarks with real data
- [ ] Adjust VSL cost estimates (did we overspend on graphics? Underspend on VO?)
- [ ] Recalculate portfolio ROI based on actual winner rate

---

## Continuous Improvement Metrics

Track these over time to see if VSL production is getting better:

| Metric | Baseline (Month 1) | Month 2 | Month 3 | Target (Month 6) |
|--------|-------------------|---------|---------|------------------|
| **Winner rate** (% of angles that win) | 20% (1/5) | — | — | 40% (2/5) |
| **Average CPA of winners** | $35 | — | — | $25 |
| **Average hook rate** | 24% | — | — | 32% |
| **Time to winner** (days from script lock to validated VSL) | 21 days | — | — | 14 days |
| **Production cost per VSL** | $1,500 | — | — | $1,000 |
| **VSL lifespan** (weeks at peak performance) | 4 weeks | — | — | 6 weeks |

**Goal**: By Month 6, you should be winning more angles (better intuition), at lower CPA (better creative), faster (better process), and cheaper (refined production).

---

## Intelligence Gaps & Upgrade Paths

| Gap | Current Grade | Why D | Upgrade Path | Target Grade |
|-----|--------------|-------|--------------|--------------|
| **Post-mortem discipline** | D | Pre-launch — no VSLs tested yet | Complete post-mortem for first 5 VSLs (even killed ones) | A |
| **Learnings transfer rate** | D | Don't know if learnings from VSL-001 actually improve VSL-002 | Track winner rate over time (should improve if learnings transfer) | A |
| **Retention curve benchmarks** | D | Don't know where people typically drop off in marine plasma VSLs | Collect retention data from first 10 VSLs, identify patterns | A |

---

## Related Documents

- `vsl_as_trade_framework.md` — Post-mortem as part of VSL Trade lifecycle
- `testing_protocol.md` — When to run post-mortems (after every test cycle)
- `script_architecture.md` — Angle library to update with learnings
- `hook_library.md` — Hook library to update with performance data
- `production_spec.md` — Production refinements based on learnings
- `financial_model.md` — Cost and ROI updates based on actuals

---

## Example Post-Mortem (Filled)

### VSL Post-Mortem: VSL-002

**Date**: 2026-03-15
**Angle**: ANG-01 — Missing Mineral (Curiosity Gap)
**Status**: **Winner** ✅
**Final CPA**: $32
**Total Spend**: $3,200
**Total Revenue**: $15,040 (over 4 weeks at scale)
**ROAS**: 4.7x

---

#### What Converted

**Hook**: "I found the ingredient LMNT, Liquid IV, and Gatorade all leave out" — 28% hook rate (vs 18% on prior hook "Your electrolytes are missing the one mineral")

**Why it worked**: Named competitors directly = instant credibility. Curiosity gap ("what ingredient?") + social proof (LMNT is trusted brand).

**Body**: Mechanism section (1:00-2:00) had lowest drop-off (only 12% lost vs 25% on VSL-001). René Quinton story resonated — comments mentioned "never heard of this, fascinating."

**Offer**: 30-day guarantee drove conversions. 15% of comments mentioned "risk-free so why not."

**Platform**: Meta outperformed TikTok (CPA $32 vs $48). YouTube untested due to budget constraints.

---

#### What Dropped Off

**Fall-off at 0:15** (22% dropped): Hook landed but transition to problem section was abrupt. Need smoother bridge.

**Fall-off at 2:45** (18% dropped): Proof section testimonials felt generic (used placeholder text). Need real customer quotes for next version.

**Creative weaknesses**: Stock ocean footage looked low-res on mobile. Upgrade to 4K for next VSL.

---

#### Qualitative Feedback

**Comments** (sample):
- ✅ "Wait, is this the same stuff French hospitals used? Wild."
- ✅ "LMNT is $45/mo for 3 minerals? This is 78 for $47? Sold."
- ❌ "Sounds too good to be true tbh" → Need more proof to overcome skepticism
- ❌ "Is this FDA approved?" → Add FDA disclaimer (supplements not evaluated by FDA)

---

#### Lessons for Next VSL

**Replicate**:
1. Name competitors in hook (instant credibility)
2. René Quinton story (mechanism that resonates)
3. 30-day guarantee (lowers perceived risk)

**Avoid**:
1. Placeholder testimonials (use real customers)
2. Low-res stock footage (upgrade to premium)
3. Abrupt section transitions (smoother scripting)

**Hypotheses for next**:
1. Test "Why athletes are quitting Gatorade" hook (ANG-02) — might outperform ANG-01
2. Add FDA disclaimer proactively in proof section
3. Test 5-min version with deeper mechanism explanation

---

## Archive Location

Store all post-mortems in `data/m11/post_mortems/VSL-XXX_YYYY-MM-DD.md`.

Create a summary doc `data/m11/post_mortems/INDEX.md` linking all post-mortems for quick reference.

