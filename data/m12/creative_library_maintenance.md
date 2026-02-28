# Creative Library Maintenance Protocol — M12: Ad Creative

**Version**: 1.0.0
**Purpose**: Quarterly feedback loop from performance data back to creative libraries (angle/hook)
**Frequency**: Quarterly (Month 3, 6, 9, 12)
**Owner**: Operator
**Duration**: 60-90 minutes per quarter

---

## 1. Why Maintain Libraries?

**Problem**: Angle and hook libraries start as generic industry frameworks. Without updates, Month 12 briefs use Month 1 assumptions.

**Solution**: Quarterly maintenance incorporating IonWave-specific performance data.

**Outcome**: Libraries evolve into **performance-ranked, IonWave-validated creative playbooks**.

---

## 2. Quarterly Maintenance Workflow

### Step 1: Export Performance Data (15 min)

From M12 creative_performance_tracker.md:
1. Filter all ads tested this quarter
2. Group by Angle (Missing Mineral, Contrarian, Comparison, etc.)
3. Calculate per angle:
   - **Avg CPA**
   - **Winner Count** (CPA <$30, ≥10 conversions)
   - **Winner %** (winners / total tested)
   - **Avg Hook Rate** (for video ads)

**Example Output**:

| Angle | Ads Tested | Winners | Winner % | Avg CPA | Avg Hook Rate |
|-------|-----------|---------|----------|---------|---------------|
| Missing Mineral | 12 | 3 | 25% | $26 | 31% |
| Contrarian | 8 | 1 | 12.5% | $32 | 26% |
| Comparison | 10 | 2 | 20% | $29 | 28% |
| Problem Reframe | 5 | 0 | 0% | $38 | 22% |
| Authority | 6 | 1 | 16.7% | $35 | 24% |

---

### Step 2: Rank Angles (10 min)

**Tier Definitions**:
- **Tier 1**: Winner % >20% AND Avg CPA <$28
- **Tier 2**: Winner % 10-20% OR Avg CPA $28-$32
- **Tier 3**: Winner % <10% OR Avg CPA >$32

**Example Ranking** (Quarter 1):
- **Tier 1**: Missing Mineral (25% winner %, $26 CPA)
- **Tier 2**: Comparison (20%, $29), Contrarian (12.5%, $32), Authority (16.7%, $35)
- **Tier 3**: Problem Reframe (0%, $38)

---

### Step 3: Update Angle Library (20 min)

In `data/m12/angle_library.md`:

1. Add "Performance Rankings (Updated [Quarter])" section at top
2. List angles by Tier (1/2/3)
3. Include: Winner %, Avg CPA, Sample Size, Date Range

**Example Section**:
```markdown
## Performance Rankings (Updated Q1 2026)
**Data**: Month 1-3, 41 ads tested, 7 winners

### Tier 1 (Proven Winners)
- **Missing Mineral** — 25% winner rate, $26 avg CPA, 12 ads tested
  - **Why It Works**: Curiosity gap + specific number (75 missing) resonates with supplement-savvy audience
  - **Recommendation**: Default angle for cold acquisition Month 4+

### Tier 2 (Acceptable)
- **Comparison** — 20% winner rate, $29 avg CPA, 10 ads tested
- **Contrarian** — 12.5% winner rate, $32 avg CPA, 8 ads tested
- **Authority** — 16.7% winner rate, $35 avg CPA, 6 ads tested (NOTE: Tested only on Meta; YouTube pending)

### Tier 3 (Underperformers)
- **Problem Reframe** — 0% winner rate, $38 avg CPA, 5 ads tested
  - **Hypothesis**: "You're not dehydrated, you're mineral-depleted" too abstract for cold audience. Consider retiring or testing on warm audiences only.
```

---

### Step 4: Repeat for Hook Library (20 min)

Same process, but group by Hook Type (Curiosity, Contrarian, Question, Result Lead, etc.) within Tier 1 angles.

**Example**:
| Hook Type | Ads Tested | Avg Hook Rate | Winner Count |
|-----------|-----------|---------------|--------------|
| Curiosity Gap | 8 | 32% | 3 |
| Contrarian | 5 | 26% | 1 |
| Question | 4 | 28% | 1 |

Update `data/m12/hook_library.md` with performance-ranked hooks.

---

### Step 5: Update Script Templates (10 min)

In `data/m12/script_templates.md`:
- Flag Tier 1 templates with "⭐ Proven Winner (Q1 2026)"
- Add IonWave-specific examples from actual winners

---

### Step 6: Communicate to Team (10 min)

**Action**: Share updated libraries with:
- UGC creators: "Use Tier 1 angles for best results"
- Internal team: "Prioritize Tier 1 angles in production queue"
- Brief templates: Update creative_brief_template.md to reference Tier rankings

**Format**: 1-paragraph update in Slack/email + link to updated files.

---

## 3. Sample Maintenance Schedule

| Quarter | Months | Data Range | Maintenance Date | Expected Ads Tested | Expected Winners |
|---------|--------|------------|------------------|---------------------|------------------|
| Q1 | 1-3 | Feb 1 - Apr 30 | First week of May | 30-50 | 5-10 |
| Q2 | 4-6 | May 1 - Jul 31 | First week of Aug | 50-80 | 10-16 |
| Q3 | 7-9 | Aug 1 - Oct 31 | First week of Nov | 80-120 | 16-24 |
| Q4 | 10-12 | Nov 1 - Jan 31 | First week of Feb | 100-150 | 20-30 |

**Why Quarterly?** Monthly = too noisy (small sample size). Quarterly = sufficient data (30-50 ads) for pattern recognition.

---

## 4. What If No Clear Tier 1?

**Scenario**: After Q1, all angles have 10-15% winner rate, no standout.

**Diagnosis**: Testing too many variables simultaneously (angle + format + hook) OR product-market fit issue.

**Action**:
1. Review M14 testing_protocol.md — are we testing ONE variable at a time?
2. Review M27 customer_research — do ICPs resonate with ANY angle?
3. Consider testing NEW angles not in original library (brainstorm with team)
4. Escalate to operator/founder: "No Tier 1 angle after 50 tests — need strategic review"

---

## 5. Long-Term Evolution (Month 12+)

**Year 2 Goal**: Replace industry benchmarks with IonWave-specific benchmarks.

**Example**:
- **Industry**: "Curiosity hooks = 25-35% hook rate" (generic)
- **IonWave Year 1**: "Curiosity hooks (Missing Mineral angle, UGC format, Meta) = 32% avg hook rate" (specific)

**Use Case**: New team members onboarding in Year 2 learn from IonWave's validated playbook, not generic industry guides.

---

## 6. Integration with Other M12 Files

**Creative Brief Template** (M12):
- Add "Angle Performance Context" field: "Missing Mineral = Tier 1, 25% winner rate Q1 2026"

**Creative Replenishment** (M12):
- Prioritize Tier 1 angles in weekly production plan

**Testing Protocol** (M14):
- Focus 70% of tests on Tier 1 angles (iterate winners), 30% on Tier 2/3 (explore new)

---

## Intelligence Gaps

| Gap | Impact | Validation Path |
|-----|--------|----------------|
| Quarterly vs monthly update frequency | Low | Test both: Does monthly yield actionable insights or just noise? |
| Minimum sample size for tier promotion (12 ads sufficient?) | Medium | Industry standard: 10+ tests for pattern recognition; validate Q1-Q2 |
| Tier demotion criteria (when to move Tier 1 → Tier 2?) | Low | If Tier 1 angle's winner % drops below 15% in subsequent quarter, demote |

---

## Next Steps

1. **Month 3** (First Quarter Close): Run first maintenance cycle
2. **Month 6**: Refine tier definitions based on Q1-Q2 learnings
3. **Month 12**: Replace all industry benchmarks with IonWave-specific data

---

**Version History**:
- v1.0.0 (2026-02-10): Initial quarterly maintenance protocol post-dialogue (Round 4)
