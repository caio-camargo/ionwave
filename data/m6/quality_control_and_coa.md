# Quality Control & Certificate of Analysis (COA)
**TUP**: M6 — Supply Chain
**Domain**: Quality Assurance, Batch Tracking, Compliance
**Status**: Pre-Launch (framework ready, requires supplier COA templates)
**Quality**: [See _meta.json]

---

## Overview

**Purpose**: Ensure every batch of marine plasma meets FDA dietary supplement standards, substantiates label claims, and protects customers from contamination.

**FDA Requirement**: Per 21 CFR Part 111 (cGMP for dietary supplements), manufacturers must:
- Test each batch for identity, purity, strength, and composition
- Maintain batch records for ≥3 years
- Have a written quality control procedure
- Use a qualified laboratory (in-house or third-party)

**IonWave Standard**: Stricter than FDA minimum:
- **Third-party lab testing** for every batch (not just supplier's in-house COA)
- **Heavy metals testing** below California Prop 65 limits (stricter than FDA)
- **Microplastics testing** (optional but differentiates from competitors)
- **Batch traceability** from ocean extraction → packaging → customer order

**Confidence on FDA requirements**: A | Source: 21 CFR Part 111, FDA Dietary Supplement cGMP guidance | Date: 2026-02-10

---

## Certificate of Analysis (COA) Requirements

### What is a COA?

A Certificate of Analysis is a document from the manufacturer or third-party lab certifying that a batch of product meets specifications. It includes:
- Batch/lot number
- Product name and description
- Test methods used
- Specification limits
- Actual test results
- Pass/Fail determination
- Date of testing
- Laboratory certification (name, address, analyst signature)

### IonWave COA Standard (Minimum Requirements)

**For every batch of marine plasma received from supplier:**

| Test Category | Test | Specification Limit | Test Method | Frequency |
|---------------|------|---------------------|-------------|-----------|
| **Identity** | Salinity (hypertonic) | 3.2-3.4% (target 3.3%) | Refractometer or titration | Every batch |
| **Identity** | pH | 7.5-8.5 (natural seawater range) | pH meter | Every batch |
| **Heavy Metals** | Lead (Pb) | <0.5 ppm (Prop 65 limit) | ICP-MS or AAS | Every batch |
| **Heavy Metals** | Mercury (Hg) | <0.1 ppm (FDA limit) | ICP-MS or AAS | Every batch |
| **Heavy Metals** | Cadmium (Cd) | <0.5 ppm (Prop 65 limit) | ICP-MS or AAS | Every batch |
| **Heavy Metals** | Arsenic (As) | <10 ppb (FDA limit for inorganic As) | ICP-MS | Every batch |
| **Microbial** | Total Plate Count (TPC) | <1,000 CFU/g | USP <2021> | Every batch |
| **Microbial** | Yeast & Mold | <100 CFU/g | USP <2021> | Every batch |
| **Microbial** | E. coli | Negative | USP <2022> | Every batch |
| **Microbial** | Salmonella | Negative in 25g | USP <2022> | Every batch |
| **Contaminants** | Microplastics | <1 particle per 100ml (if tested) | FTIR microscopy | Optional (quarterly) |
| **Mineral Profile** | 78-element analysis | Within ±10% of baseline | ICP-MS | Every 5th batch |

**Confidence on test specifications**: A (heavy metals, microbial) / B (microplastics — emerging standard) / C (mineral profile variance — derived from Quinton/Biocean public standards) | Date: 2026-02-10

**Pass/Fail Criteria**:
- **Pass**: All tests within specification limits → Batch approved for use
- **Conditional Pass**: 1-2 minor deviations (e.g., salinity 3.15% instead of 3.2%) → Escalate to PM co-founder for decision
- **Fail**: Any heavy metal exceeds limit OR microbial contamination → **Reject batch, do not use**, activate Supplier Quality Issue Protocol (see below)

---

## COA Tracker (Batch-by-Batch Record)

**Location**: Google Sheet or Airtable (linked to M24 Fulfillment & Inventory system)

**Purpose**: Track every batch received from supplier, COA pass/fail status, and traceability to customer orders.

### COA Tracker Template

| Batch # | Supplier | Received Date | COA Received? | COA Pass/Fail | Issues Found | Approved By | Lot # Used In | Notes |
|---------|----------|---------------|---------------|---------------|--------------|-------------|---------------|-------|
| BATCH-001 | Biocean | [TBD] | [ ] Yes / [ ] No | [ ] Pass / [ ] Fail | [If fail, list] | [PM name] | [IonWave SKU lot #] | |
| BATCH-002 | Biocean | [TBD] | [ ] Yes / [ ] No | [ ] Pass / [ ] Fail | [If fail, list] | [PM name] | [IonWave SKU lot #] | |
| BATCH-003 | Biocean | [TBD] | [ ] Yes / [ ] No | [ ] Pass / [ ] Fail | [If fail, list] | [PM name] | [IonWave SKU lot #] | |

**Field Definitions**:
- **Batch #**: Supplier's batch/lot number (appears on supplier's COA)
- **Supplier**: Biocean, Actimar, Quinton, or backup supplier
- **Received Date**: Date bulk marine plasma arrived at copacker or 3PL warehouse
- **COA Received?**: Did supplier provide COA with shipment? (Required before use)
- **COA Pass/Fail**: Based on IonWave standard (table above)
- **Issues Found**: If fail, list specific tests that failed (e.g., "Lead 0.7 ppm, exceeds 0.5 ppm limit")
- **Approved By**: PM co-founder or QA manager signature (human approval required)
- **Lot # Used In**: IonWave's internal lot number for finished product (links supplier batch to customer orders for traceability)
- **Notes**: Any special handling (e.g., "Batch arrived warm, cold chain broken — contacted supplier")

**Access Control**:
- **View**: All team members
- **Edit**: PM co-founder, QA manager only
- **Audit**: Retain for 3 years per FDA requirement

**[VOID — requires: Set up COA Tracker spreadsheet after supplier contract signed]**

---

## COA Template (for Supplier)

**If supplier does not provide FDA-compliant COA**, send them this template:

```
CERTIFICATE OF ANALYSIS

Product Name: Marine Plasma (Hypertonic, 3.3% Salinity)
Batch/Lot Number: [Supplier Batch #]
Manufacturing Date: [YYYY-MM-DD]
Expiration Date: [YYYY-MM-DD]
Quantity Manufactured: [Liters]

TESTS PERFORMED:

1. Identity
   - Salinity: [Result] % (Specification: 3.2-3.4%)
   - pH: [Result] (Specification: 7.5-8.5)

2. Heavy Metals (ICP-MS or AAS method)
   - Lead (Pb): [Result] ppm (Specification: <0.5 ppm)
   - Mercury (Hg): [Result] ppm (Specification: <0.1 ppm)
   - Cadmium (Cd): [Result] ppm (Specification: <0.5 ppm)
   - Arsenic (As): [Result] ppb (Specification: <10 ppb inorganic)

3. Microbial (USP <2021>, <2022>)
   - Total Plate Count: [Result] CFU/g (Specification: <1,000 CFU/g)
   - Yeast & Mold: [Result] CFU/g (Specification: <100 CFU/g)
   - E. coli: [Detected / Not Detected] (Specification: Negative)
   - Salmonella: [Detected / Not Detected] (Specification: Negative in 25g)

4. Conclusion: [PASS / FAIL]

Laboratory: [Lab Name, Address]
Analyst: [Name, Title]
Date of Analysis: [YYYY-MM-DD]
Signature: ___________________________
```

**Send to supplier with contract**: "Please provide COA matching this template for every batch. If your lab uses different test methods, provide method equivalency documentation."

---

## Contaminant Limits (Regulatory Reference)

**FDA Dietary Supplement Limits** (21 CFR Part 110, 111):

| Contaminant | FDA Limit | California Prop 65 Limit (stricter) | IonWave Standard | Source |
|-------------|-----------|--------------------------------------|------------------|--------|
| **Lead** | No explicit limit (ALARA principle) | 0.5 µg/day (0.5 ppm for 1g serving) | <0.5 ppm | Prop 65 |
| **Mercury** | 0.1 ppm (methylmercury in fish) | 0.3 µg/day | <0.1 ppm | FDA |
| **Cadmium** | No explicit limit | 4.1 µg/day (4.1 ppm for 1g serving) | <0.5 ppm | Prop 65 |
| **Arsenic** | 10 ppb (inorganic arsenic) | 10 ppb | <10 ppb | FDA |
| **Microbial TPC** | <10,000 CFU/g (general food) | N/A | <1,000 CFU/g | FDA cGMP |
| **Yeast & Mold** | <1,000 CFU/g | N/A | <100 CFU/g | FDA cGMP |
| **E. coli** | Negative | N/A | Negative | FDA cGMP |
| **Salmonella** | Negative in 25g | N/A | Negative | FDA cGMP |

**Why IonWave uses Prop 65 limits** (stricter than FDA):
- California Prop 65 requires warning labels if heavy metals exceed daily thresholds
- Even though IonWave may not sell primarily in CA, Prop 65 is a national quality benchmark
- Avoids customer complaints about "cancer warning" labels

**Serving Size Impact**:
- IonWave serving = 10ml sachet (marine plasma), estimated weight ~10g
- At 10g serving, Prop 65 lead limit = 5 µg per serving → 0.5 ppm max in product
- FDA guidance for supplements generally follows Prop 65 as practical limit

**Confidence on contaminant limits**: A | Source: 21 CFR Part 110, 111; California Prop 65 regulation; USP <2021>, <2022> | Date: 2026-02-10

---

## Batch & Lot Tracking System

**Purpose**: Traceability from supplier batch → IonWave lot → customer order (required for recalls per FDA 21 CFR 111.465).

### Lot Number Scheme

**IonWave Lot Format**: `IW-YYMMDD-XXX`

- **IW** = IonWave prefix
- **YYMMDD** = Production date (year-month-day)
- **XXX** = Sequential batch number for that day (001, 002, 003...)

**Example**: `IW-260215-001` = First lot produced on February 15, 2026

### Traceability Map

**For every IonWave lot, document:**

| IonWave Lot # | Production Date | Supplier | Supplier Batch # | Supplier COA # | Units Produced | Expiration Date | Sold To (Order #s) | Recall Status |
|---------------|-----------------|----------|------------------|----------------|----------------|-----------------|-------------------|---------------|
| IW-260215-001 | 2026-02-15 | Biocean | BATCH-001 | COA-001 | 5,000 boxes | 2027-02-15 | [Shopify order IDs] | ✅ OK |
| IW-260222-002 | 2026-02-22 | Biocean | BATCH-002 | COA-002 | 5,000 boxes | 2027-02-22 | [Shopify order IDs] | ✅ OK |

**How to use**:
1. **Pre-production**: Receive supplier Batch #001 with COA-001 → Log in COA Tracker (pass/fail)
2. **Production day**: Use Batch #001 to fill 5,000 boxes → Assign lot # IW-260215-001 → Print lot # on every box label
3. **Fulfillment**: As boxes ship, link Shopify order IDs to lot # IW-260215-001
4. **If recall needed**: Look up lot # → find all order IDs → contact customers via Shopify/email

**FDA Requirement**: Must trace forward (supplier batch → customer) AND backward (customer → supplier batch) within 24 hours.

**[VOID — requires: Set up Batch & Lot Tracking spreadsheet linked to Shopify; test recall lookup speed after first 100 orders]**

---

## Restock Decision & COA Integration

**Link to M24 Fulfillment & Inventory**: When inventory hits restock trigger (see `restock_framework.md`), confirm:

1. **COA for new batch approved** before placing supplier PO
2. **Supplier has batch ready to ship** (not waiting for COA approval → delays launch)
3. **Third-party lab testing scheduled** (if required) → add 5-7 days to lead time

**Restock Lead Time Calculation** (revised from M24):
- **Standard lead time**: 45 days (supplier production + shipping)
- **+ COA approval time**: 5-7 days (if waiting for third-party lab vs supplier in-house COA)
- **Total**: 50-52 days from PO to inventory available

**Safety Stock Implication** (from `restock_framework.md`):
- If COA adds 7 days to lead time → Safety Stock = 14 days sales + 7 days COA buffer = **21 days of sales**
- Example: 50 units/day × 21 days = 1,050 units safety stock (vs 700 in basic formula)

**[VOID — requires: Update M24 restock framework after confirming supplier COA approval timeline]**

---

## Supplier Quality Issue Protocol

**If a batch fails COA (heavy metals exceed limits, microbial contamination, etc.):**

### Immediate Actions (Within 24 Hours)
1. **Do not use batch** — Quarantine physically (separate from approved inventory)
2. **Notify supplier** — Email + phone call with COA test results
3. **Request corrective action plan** (CAP) from supplier:
   - Root cause analysis (why did batch fail?)
   - Corrective actions taken (e.g., improve filtration, source different ocean location)
   - Preventive actions (how to prevent future failures?)
4. **Escalate to Nilo** if:
   - Supplier refuses responsibility
   - Supplier has no CAP within 48 hours
   - This is the 2nd failed batch from same supplier

### Supplier Response Scenarios

**Scenario A: Supplier provides replacement batch + CAP**
- ✅ Test replacement batch with COA
- ✅ If pass → proceed, but monitor next 3 batches closely
- ✅ If fail again → trigger Backup Supplier Plan (see `supplier_research_and_landscape.md`)

**Scenario B: Supplier disputes COA results**
- 🔬 Request third-party re-test (split sample)
- 💰 Supplier pays for re-test if their result is wrong; IonWave pays if our lab made error
- ⚖️ If still disputed → legal review, activate Backup Supplier

**Scenario C: Supplier blames ocean conditions ("contamination event out of our control")**
- 📋 Request documentation (e.g., regulatory notice about ocean pollution in that region)
- 🔄 If legitimate one-time event → accept replacement batch
- 🚨 If recurring issue → this supplier's sourcing location is compromised → **switch suppliers immediately**

### Customer Impact (If Failed Batch Already Shipped)

**Worst-case scenario**: Batch shipped to customers before COA failure discovered.

1. **Recall protocol** (FDA guidance):
   - Look up lot # → find all affected customer orders
   - Email customers within 24 hours: "Voluntary recall due to quality concern. Please return unused product for full refund. No health risk identified, but out of abundance of caution..."
   - Offer 2x refund or free replacement (retain customer trust)
2. **FDA notification**: If contamination poses health risk, notify FDA within 24 hours per 21 CFR 111.467
3. **Insurance claim**: Product liability insurance should cover recall costs
4. **Public statement**: If recall is >100 customers, prepare press release (see M29 PR & Communications crisis playbook)

**Prevention**: Never ship before COA approved. Build 3-5 day COA approval buffer into fulfillment timeline.

**[VOID — requires: Finalize recall protocol with legal counsel before launch]**

---

## Intelligence Gaps

1. **Supplier COA format** — Don't know if Biocean, Actimar, Quinton use IonWave's preferred template
   - **Upgrade path**: Request COA sample during supplier negotiation; if non-compliant, provide template
   - **Blocking**: QA approval process (can't approve batches without proper COA)

2. **Third-party lab cost** — Unknown if suppliers charge extra for third-party COA vs in-house
   - **Upgrade path**: Ask in supplier quotes; budget $200-500 per batch for third-party testing (Eurofins, SGS, NSF)
   - **Blocking**: M3 COGS calculation (adds $0.04-0.10 per unit if 5,000 unit batches)

3. **Microplastics testing availability** — Not all labs offer this test (emerging standard)
   - **Upgrade path**: Research labs offering microplastics testing (e.g., Orb Media, 5 Gyres Institute partnerships)
   - **Blocking**: Optional marketing claim; not blocking launch

4. **Recall insurance** — Unknown if product liability insurance covers recall costs
   - **Upgrade path**: M2 Entity & Legal should confirm insurance coverage
   - **Blocking**: Financial risk mitigation (could be $10K-50K+ recall cost)

**Recommended Action**: Prioritize Gap #1 (COA format) and Gap #2 (third-party lab cost) in supplier negotiation. Gaps #3, #4 are secondary.

---

## Sources

- FDA 21 CFR Part 111 (cGMP for Dietary Supplements)
- FDA Guidance for Industry: Dietary Supplements – Good Manufacturing Practices
- USP <2021> Microbial Enumeration Tests
- USP <2022> Microbiological Examination of Nonsterile Products
- California Proposition 65 Heavy Metal Limits
- FDA Recall Policy and Procedures (CPG Sec. 7132a.01)

