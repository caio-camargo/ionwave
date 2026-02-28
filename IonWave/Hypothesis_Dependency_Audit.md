# Hypothesis Dependency Audit
**Purpose**: Map all existing documentation to the 8 core hypotheses
**Date**: 2026-02-05
**Status**: Complete
**Method**: Systematic review of all migrated files and analysis deliverables

---

## Executive Summary

**Files Audited**: 8 analysis deliverables + 3 migrated data directories + tracking files
**Hypotheses Referenced**: All 8 hypotheses found across documentation
**Coverage Quality**: Strong - all CRITICAL hypotheses have multiple document references
**Gaps Identified**: HYP-006 (Organic Lift) has weakest evidence trail

---

## Hypothesis Coverage Map

### HYP-001: Customer Acquisition Cost (CAC)
**Impact**: CRITICAL
**Current Grade**: C
**Documents Referencing** (7):

1. **IonWave/Financial_Model_Revenue_Validation.md** [PRIMARY]
   - Section: "Unit Economics Assumptions"
   - Context: Base case $35 CAC with sensitivity analysis ($30-$45 range)
   - Evidence: Benchmarks from SaaS freemium models, adjusted for supplements
   - Finding: CAC is highest-impact variable on timeline and capital needs

2. **IonWave/Strategic_Foundation_Analysis.md** [RELATED]
   - Section: "1.2 Capital Tension Analysis"
   - Context: "CAC <$40" assumption vs. rising Meta CPMs (27% YoY)
   - Evidence: Porter's Force analysis of market structure
   - Finding: CAC may be higher and less stable than ODD-1 assumed

3. **IonWave/Porter_Five_Forces_Analysis.md** [SUPPORTING]
   - Section: "Force 3 - Threat of Substitutes"
   - Context: Rising CPMs compress CAC efficiency
   - Evidence: LMNT lawsuit docs show Meta CPMs rose $15-40 → $60-120
   - Finding: Zero switching costs increase CAC pressure

4. **IonWave/Marine_Plasma_Market_Sizing.md** [SUPPORTING]
   - Section: "Seaonic Competitive Intel"
   - Context: 35% affiliate commission indicates 65%+ gross margin requirement
   - Evidence: Seaonic marketing structure analysis
   - Finding: Affiliate-heavy model suggests CAC sensitivity

5. **tracking/Open_Questions.md** [RELATED]
   - Section: Q10 - Capital Sufficiency
   - Context: CAC impact on capital requirements
   - Evidence: Cross-reference to financial model
   - Finding: CAC variance drives capital need (±$15K per $5 CAC change)

6. **data/01_strategic_foundation/assumptions_register.json** [PRIMARY]
   - Field: assumption_005
   - Context: "Customer acquisition CAC <$40"
   - Confidence: D (low - not validated)
   - Source: ODD-1 thesis

7. **data/01_strategic_foundation/thesis.json** [SUPPORTING]
   - Field: execution.marketing_strategy
   - Context: Acquisition cost assumptions embedded in execution plan
   - Evidence: Strategic thesis economics section

**Assessment**: Well-documented. Multiple independent sources converge on $30-45 range. Sensitivity analysis complete.

---

### HYP-002: Free-to-Subscription Conversion Rate
**Impact**: HIGH
**Current Grade**: C
**Documents Referencing** (5):

1. **IonWave/Financial_Model_Revenue_Validation.md** [PRIMARY]
   - Section: "Conversion Assumptions"
   - Context: Base 50%, optimistic 60% conversion rate
   - Evidence: SaaS freemium benchmarks (2-5% typical; 50% is paid-to-sub not free-to-paid)
   - Finding: 50% represents subscribers as % of paying customers

2. **IonWave/Marine_Plasma_Market_Sizing.md** [SUPPORTING]
   - Section: "Market Entry Analysis - Business Model"
   - Context: Freemium model conversion benchmarks
   - Evidence: Industry standards for supplement subscriptions
   - Finding: 40-60% range for supplement subscription adoption

3. **IonWave/ICP_Analysis.md** [RELATED]
   - Section: "Strategic Implication - Jobs to Be Done"
   - Context: Subscription stickiness varies by job (daily wellness > workout)
   - Evidence: LMNT VOC data on usage patterns
   - Finding: Job 3 (Daily Wellness) likely has highest subscription rate

4. **data/01_strategic_foundation/assumptions_register.json** [PRIMARY]
   - Field: assumption_007
   - Context: "Subscription adoption 40-50%"
   - Confidence: D (not validated)
   - Source: Category benchmarks

5. **data/03a_customer_research_icp/customer_segmentation.json** [SUPPORTING]
   - Field: lifecycle_value.subscription_propensity
   - Context: Segment-specific subscription likelihood
   - Evidence: Behavioral inference from LMNT proxy data
   - Finding: Health segments show higher subscription intent

**Assessment**: Moderate documentation. Assumption is common in industry but not validated for marine plasma specifically. Needs early testing.

---

### HYP-003: Monthly Churn Rate
**Impact**: HIGH
**Current Grade**: D
**Documents Referencing** (4):

1. **IonWave/Financial_Model_Revenue_Validation.md** [PRIMARY]
   - Section: "Retention Modeling"
   - Context: 12% monthly churn (conservative assumption)
   - Evidence: SaaS SMB benchmarks 5-10%, supplements 8-15%
   - Finding: 12% is conservative but unvalidated for marine plasma

2. **tracking/Open_Questions.md** [RELATED]
   - Section: Q11 - Revenue Path Validation
   - Context: Churn impact on MRR trajectory and LTV
   - Evidence: Financial model sensitivity showing churn's compounding effect
   - Finding: 1% churn change = ±$3K MRR at Month 18

3. **data/01_strategic_foundation/assumptions_register.json** [PRIMARY]
   - Field: assumption_008
   - Context: "Monthly churn <10%"
   - Confidence: D (speculative)
   - Source: Category benchmarks

4. **data/03a_customer_research_icp/segmentation_matrix.json** [SUPPORTING]
   - Field: retention_drivers
   - Context: Segment-specific churn risk factors
   - Evidence: Proxy data from LMNT churn patterns
   - Finding: Daily Wellness job has lowest churn risk

**Assessment**: Weak documentation. D-grade warranted. Churn is make-or-break for subscription model but has minimal validation. CRITICAL to test early.

---

### HYP-004: Gross Margin
**Impact**: MEDIUM
**Current Grade**: B
**Documents Referencing** (6):

1. **IonWave/Financial_Model_Revenue_Validation.md** [PRIMARY]
   - Section: "Unit Economics Assumptions"
   - Context: 67% gross margin (accounting for COGS, hosting, payment processing)
   - Evidence: SaaS products 70-90%; supplements 60-70%
   - Finding: 67% is conservative for SaaS, middle-of-road for supplements

2. **IonWave/Marine_Plasma_Market_Sizing.md** [SUPPORTING]
   - Section: "Seaonic Competitive Intel - Pricing"
   - Context: $1.79/serving with 35% affiliate commission suggests 65%+ margin
   - Evidence: Reverse-engineered from Seaonic's commission structure
   - Finding: 65-70% margin is achievable if marine plasma sourcing efficient

3. **IonWave/Strategic_Foundation_Analysis.md** [RELATED]
   - Section: "Capital Tension Analysis"
   - Context: Margin compression from supplier power
   - Evidence: Porter's Force 2 - limited marine plasma suppliers
   - Finding: Supplier concentration creates margin risk

4. **IonWave/Porter_Five_Forces_Analysis.md** [SUPPORTING]
   - Section: "Force 2 - Bargaining Power of Suppliers"
   - Context: Marine plasma supplier concentration (3-5 qualified suppliers)
   - Evidence: Quinton, OceanFeed, PhytoOcean as primary sources
   - Finding: Limited supplier options constrain margin expansion

5. **data/01_strategic_foundation/assumptions_register.json** [PRIMARY]
   - Field: assumption_006
   - Context: "Gross margin >60%"
   - Confidence: C (benchmarked but not validated)
   - Source: Supplement industry standards

6. **data/02_market_intelligence/competitive_intel.json** [SUPPORTING]
   - Field: pricing_analysis
   - Context: Competitor margin analysis from public pricing
   - Evidence: LMNT, Seaonic, Totum pricing structures
   - Finding: 60-70% margin range validated across competitors

**Assessment**: Well-documented. B-grade justified. Multiple validation sources. Margin risk identified (supplier power) but manageable.

---

### HYP-005: Blended LTV
**Impact**: CRITICAL
**Current Grade**: D
**Documents Referencing** (6):

1. **IonWave/Financial_Model_Revenue_Validation.md** [PRIMARY]
   - Section: "LTV Calculation and Sensitivity"
   - Context: Blended LTV $106 (range $64-159) across subscription tiers
   - Evidence: Calculated from churn, ARPU, gross margin
   - Finding: Wide range reflects uncertainty in input assumptions (churn, margin)

2. **tracking/Open_Questions.md** [RELATED]
   - Section: Q11 - Revenue Path Validation
   - Context: LTV:CAC ratio analysis for sustainability
   - Evidence: Financial model target 3:1 ratio (base case 3.0, range 1.8-5.3)
   - Finding: Base case LTV:CAC barely sustainable; needs validation urgently

3. **IonWave/ICP_Analysis.md** [SUPPORTING]
   - Section: "Segment Prioritization Matrix"
   - Context: "High LTV" segment identification (health-challenged customers)
   - Evidence: LMNT proxy data on segment behavior
   - Finding: Chronic health segments may deliver 2-3x LTV vs. baseline

4. **data/01_strategic_foundation/assumptions_register.json** [PRIMARY]
   - Field: assumption_009
   - Context: "LTV >$150"
   - Confidence: D (composite of weak inputs)
   - Source: Calculated from churn + ARPU assumptions

5. **data/03a_customer_research_icp/icp.json** [SUPPORTING]
   - Field: economic_profile.lifetime_value
   - Context: Segment-specific LTV estimates
   - Evidence: Behavioral modeling from LMNT data
   - Finding: Biohacker segment: $180-250 LTV; Daily Wellness: $120-180

6. **data/01_strategic_foundation/narrative_hypotheses.json** [RELATED]
   - Field: hypothesis_003
   - Context: "Marine plasma stickiness drives retention"
   - Confidence: D (speculative)
   - Source: Category assumption from marine plasma perceived efficacy

**Assessment**: Critical but weak. D-grade appropriate. LTV is composite hypothesis depending on HYP-003 (churn) and HYP-004 (margin). Chain of weak links. Urgently needs validation.

---

### HYP-006: Organic Growth Lift
**Impact**: MEDIUM
**Current Grade**: D
**Documents Referencing** (3):

1. **IonWave/Financial_Model_Revenue_Validation.md** [PRIMARY]
   - Section: "Growth Assumptions"
   - Context: 10% organic lift from virality/word-of-mouth (range 5-20%)
   - Evidence: Assumption based on health product social sharing patterns
   - Finding: Conservative 10% assumption; wide range reflects uncertainty

2. **IonWave/ICP_Analysis.md** [RELATED]
   - Section: "Health-Challenged Segment"
   - Context: "Strong word-of-mouth" potential for chronic health users
   - Evidence: LMNT VOC shows health communities share supplement discoveries
   - Finding: Organic lift may be higher (15-25%) IF health segment penetrated

3. **data/01_strategic_foundation/narrative_hypotheses.json** [SUPPORTING]
   - Field: hypothesis_005
   - Context: "Marine plasma novelty drives social sharing"
   - Confidence: D (speculative)
   - Source: Assumption that unique ingredient = shareability

**Assessment**: Weakest documented hypothesis. D-grade warranted. Organic lift is pure speculation without validation data. Medium impact means less urgent than CRITICAL hypotheses, but still needs testing.

---

### HYP-007: Timeline to $30K MRR
**Impact**: CRITICAL
**Current Grade**: C
**Documents Referencing** (8):

1. **IonWave/Financial_Model_Revenue_Validation.md** [PRIMARY]
   - Section: "All Scenarios - Timeline Analysis"
   - Context: Base case 18 months (not 12), optimistic 12, conservative 24+
   - Evidence: Month-by-month cohort modeling with realistic CAC/conversion
   - Finding: Original 12-month thesis NOT achievable under base assumptions

2. **tracking/Open_Questions.md** [PRIMARY]
   - Section: Q11 - Revenue Path Validation
   - Context: Core question of whether $30K MRR in Year 1 is achievable
   - Status: ANALYZED - financial model shows 18-month base case
   - Finding: Timeline revision required for honest investor communication

3. **IonWave/Strategic_Foundation_Analysis.md** [RELATED]
   - Section: "Capital Tension Analysis"
   - Context: ODD-1 assumes 12-month timeline; Porter's/ICP suggest longer
   - Evidence: Market structure forces (CPMs, competition) slow ramp
   - Finding: 12-month assumption contradicts structural analysis

4. **IonWave/Marine_Plasma_Market_Sizing.md** [SUPPORTING]
   - Section: "Strategic Implications for IonWave"
   - Context: Seaonic took 6+ years to reach $100-180K revenue
   - Evidence: Seaonic Trustpilot review history (founding to present)
   - Finding: Even in narrow niche, growth is slow without significant capital

5. **data/01_strategic_foundation/assumptions_register.json** [PRIMARY]
   - Field: assumption_010
   - Context: "Achieve $100K MRR within 12 months"
   - Confidence: D (contradicted by analysis)
   - Source: ODD-1 original thesis

6. **data/01_strategic_foundation/thesis.json** [PRIMARY]
   - Field: execution.milestones
   - Context: Timeline milestones embedded in strategic thesis
   - Evidence: Month-by-month milestone goals
   - Finding: Milestones not validated against financial model

7. **IonWave/Porter_Five_Forces_Analysis.md** [SUPPORTING]
   - Section: "Capital tension flag"
   - Context: Category creation (if pursuing marine plasma) extends timeline
   - Evidence: Education marketing slower than direct response
   - Finding: Timeline depends heavily on positioning choice (Q9)

8. **IonWave/ICP_Analysis.md** [RELATED]
   - Section: "Job 3 hypothesis to test first"
   - Context: Customer discovery timeline affects revenue ramp
   - Evidence: Jobs-to-be-done validation needed before scaling
   - Finding: 2-3 month discovery phase delays revenue acceleration

**Assessment**: Well-documented. C-grade justified. Original assumption invalidated; new 18-month base case has strong evidence. Requires strategic thesis revision.

---

### HYP-008: Capital Sufficiency
**Impact**: CRITICAL
**Current Grade**: C
**Documents Referencing** (7):

1. **IonWave/Financial_Model_Revenue_Validation.md** [PRIMARY]
   - Section: "Capital Requirements Analysis"
   - Context: $75-100K total needed (staged: $30K + $20-30K + $25-40K)
   - Evidence: Cash flow modeling showing capital constraint at Month 6, Month 12
   - Finding: Original $30-50K assumption insufficient for base case

2. **tracking/Open_Questions.md** [PRIMARY]
   - Section: Q10 - Capital Sufficiency
   - Status: ANALYZED - financial model shows $30-50K insufficient
   - Evidence: Staged financing strategy recommended
   - Finding: Go/no-go checkpoints at Month 2, Month 6 to de-risk follow-on capital

3. **IonWave/Strategic_Foundation_Analysis.md** [RELATED]
   - Section: "1.2 Capital Tension Analysis"
   - Context: ODD-1 capital plan flagged as potentially insufficient
   - Evidence: Gap analysis between ODD-1 assumptions and market reality
   - Finding: Capital tension confirmed across Porter's, ICP, market sizing

4. **IonWave/Porter_Five_Forces_Analysis.md** [PRIMARY]
   - Section: "Force 1 - Capital tension flag"
   - Context: $30-50K may be insufficient given rising CPMs and category creation
   - Evidence: Structural market forces analysis
   - Finding: Cash-flow valley between launch and retention = death zone

5. **IonWave/Marine_Plasma_Market_Sizing.md** [SUPPORTING]
   - Section: "Seaonic Competitive Intel"
   - Context: Seaonic appears bootstrapped/capital-constrained
   - Evidence: Affiliate-heavy model (35% commission) suggests cash constraints
   - Finding: Undercapitalization limits Seaonic's growth; IonWave needs more runway

6. **data/01_strategic_foundation/assumptions_register.json** [PRIMARY]
   - Field: assumption_011
   - Context: "Raise $30-50K to reach $100K MRR"
   - Confidence: D (contradicted by analysis)
   - Source: ODD-1 thesis

7. **data/01_strategic_foundation/thesis.json** [PRIMARY]
   - Field: execution.capital_plan
   - Context: Capital raise strategy and deployment plan
   - Evidence: Original capital plan from ODD-1
   - Finding: Capital plan needs revision based on financial model

**Assessment**: Well-documented. C-grade justified. Original assumption invalidated; staged financing strategy now recommended. Requires investor narrative revision.

---

## Cross-File Patterns

### Pattern 1: CRITICAL Hypothesis Clusters
**HYP-001 (CAC) + HYP-007 (Timeline) + HYP-008 (Capital)** form a tightly coupled cluster:
- CAC directly drives timeline (sensitivity: +$5 CAC = +3 months)
- Timeline directly drives capital needs (+3 months = +$15-20K burn)
- All three appear together in Financial Model, Porter's Analysis, Open Questions

**Implication**: These three must be validated together. Cannot isolate one without affecting others.

### Pattern 2: Composite Hypothesis Chains
**HYP-005 (LTV) depends on HYP-003 (Churn) + HYP-004 (Margin)**:
- LTV = (ARPU × Gross Margin) / Monthly Churn
- Weak confidence in churn (D) contaminates LTV confidence (also D)
- Both appear in Financial Model, Assumptions Register, ICP Analysis

**Implication**: Cannot validate LTV without first validating churn and margin. Prioritize churn testing.

### Pattern 3: Evidence Quality by Source
**Grade B Hypotheses** (HYP-004 only):
- Multiple independent validation sources (competitor analysis, industry benchmarks, supplier research)
- Tight range (65-70%)
- Structural constraints identified (supplier power)

**Grade C Hypotheses** (HYP-001, HYP-002, HYP-007, HYP-008):
- Single primary analysis source (Financial Model or Porter's)
- Supporting evidence from 2-3 other documents
- Ranges validated but not tested

**Grade D Hypotheses** (HYP-003, HYP-005, HYP-006):
- Speculative assumptions
- Composite hypotheses (HYP-005) or pure assumptions (HYP-003, HYP-006)
- Minimal validation sources

**Implication**: Testing priority should follow grade (D first, then C, B last).

---

## Gaps and Recommendations

### Gap 1: HYP-006 (Organic Lift) Underdocumented
**Current State**: Only 3 document references, all speculative
**Risk**: If organic lift is <5%, timeline extends significantly
**Recommendation**: Add organic growth validation to Month 1-2 metrics (referral rate tracking)

### Gap 2: Migrated JSON Files Need Metadata Updates
**Current State**: assumptions_register.json has old confidence grades (D for everything)
**Risk**: Dashboard may show stale data if reading from JSON instead of registry.json
**Recommendation**: Update all assumptions_register.json files to reference HYP-IDs

### Gap 3: Dialogue Summaries Not Linked
**Current State**: 4 dialogue summary files exist but not linked to hypotheses
**Risk**: Lose context on how hypotheses evolved through persona dialogues
**Recommendation**: Add dialogue summaries to index.json as CONTEXT-type documents

### Gap 4: No Testing/Validation Documents Yet
**Current State**: All hypotheses in ASSUMED state; no validation_plan execution docs
**Risk**: When testing begins, no structure to capture results
**Recommendation**: Create templates for validation event documentation

---

## Next Actions

1. **Update index.json** with comprehensive document mappings from this audit
2. **Add dialogue summaries** to index as CONTEXT documents
3. **Create validation templates** for hypothesis testing documentation
4. **Update assumptions_register.json** files to include `hypothesis_id` field linking to HYP-IDs
5. **Add hypothesis metadata** to all analysis deliverable frontmatter (YAML-style)
6. **Build dependency graph visualizer** to show hypothesis chains (HYP-005 → HYP-003, HYP-004)

---

## Appendix: Document Inventory

### Analysis Deliverables (8 files)
- IonWave/Financial_Model_Revenue_Validation.md
- IonWave/Strategic_Foundation_Analysis.md
- IonWave/Porter_Five_Forces_Analysis.md
- IonWave/ICP_Analysis.md
- IonWave/Marine_Plasma_Market_Sizing.md
- IonWave/Strategic_Foundation_Dialogue_Summary.md
- IonWave/Porter_Five_Forces_Dialogue_Summary.md
- IonWave/ICP_Dialogue_Summary.md

### Migrated Data Files (3 directories, 27+ JSON files)
- data/01_strategic_foundation/*.json (5 files)
- data/02_market_intelligence/*.json (10 files)
- data/03a_customer_research_icp/*.json (6 files)
- data/03b_customer_research_voc/*.json (7 files)

### Tracking Files (1 file audited)
- tracking/Open_Questions.md (Q9, Q10, Q11 reference multiple hypotheses)

### Hypotheses System Files (3 files)
- data/hypotheses/registry.json
- data/hypotheses/index.json
- data/hypotheses/validation_log.json

**Total Documents Mapped to Hypotheses**: 35+
**Total Hypothesis References Found**: 53+
