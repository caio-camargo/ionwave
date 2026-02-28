# M36 Operational Infrastructure — Knowledge Management

**Version**: 1.0.0
**TUP**: M36 — Operational Infrastructure
**Cluster**: BCL-6 Operations & Infra
**Author**: Claude (TWP-001 v2.0.0 workshop)
**Date**: 2026-02-17
**Status**: Production
**Source Tabs**: 801 (knowledge_management), 825 (information_architecture), 829 (knowledge_transfer_protocol), 817 (lessons_learned_repository), 764-767 (glossary/dictionary tabs)

---

## Overview

Knowledge management for a solo-founder D2C company is not about software — it's about capture discipline. The question is: when this person leaves (or this Operator moves on), can someone else run the business starting Day 1?

Danilo's vision for M36: "So robust the business survives losing any single person including the founder."

That vision lives here. Every runbook, every process, every credential is written down somewhere accessible. The system does not live in one person's head.

---

## Part 1: Information Architecture

### Folder Structure

[Confidence: A | Source: Danilo tab 825 | Date: 2026-02-17]

All operational documents live in a structured folder hierarchy. IonWave's primary tool is Google Drive (integrated with Studio 3 workflow). The structure maps to business domains:

```
IonWave/
├── 01_Strategy/
│   ├── Trade_Thesis/
│   ├── Financial_Model/
│   └── Investor_Materials/
├── 02_Product/
│   ├── Formulation/
│   ├── Supplier_Management/
│   └── Regulatory/
├── 03_Marketing/
│   ├── Creative_Library/
│   ├── Ad_Account_SOPs/
│   ├── Email_Sequences/
│   └── Influencer_Program/
├── 04_Operations/
│   ├── Runbooks/
│   ├── Vendor_Contacts/
│   ├── Risk_Register/
│   └── Handoff_Packets/
├── 05_Finance/
│   ├── Chart_of_Accounts/
│   ├── P&L_Reports/
│   └── Cash_Forecasts/
└── 06_Legal/
    ├── Entity_Documents/
    ├── Contracts/
    └── Insurance/
```

**Naming convention**: `[Date_YYYY-MM-DD]_[Document_Name]_[Version]` for versioned docs. Runbooks use `RB-[Domain]-[Function]` prefix.

**Golden rule**: Every document must have a home. If you don't know where it goes, put it in `04_Operations/` and file a cleanup ticket.

[Confidence: B | Source: Danilo tab 825 (structure), naming convention is IonWave-specific recommendation | Date: 2026-02-17]

### Tool Stack for Knowledge Management

[Confidence: B | Source: D2C operational best practices, multiple operator interviews synthesized | Date: 2026-02-17]

For a lean pre-PMF D2C company, the minimum viable knowledge stack is:

| Tool | Purpose | Cost | When to Add |
|------|---------|------|-------------|
| Google Drive | Primary document storage, version control, folder structure | Free / included | Day 1 |
| Notion | Runbooks, SOPs, internal wiki (searchable, linkable) | $8-16/month | Week 1 |
| 1Password / Bitwarden | Credential management (shared vault) | $3-5/month | Day 1 — non-negotiable |
| Loom | Async video documentation for complex processes | $8-15/month | When onboarding first person |
| Google Sheets | Tracking logs, vendor contacts, decision logs | Free | Day 1 |

**Tool selection rationale**: Notion wins for runbooks over alternatives (Confluence = overkill, Obsidian = too personal, Linear = task-tracking not documentation). The critical constraint: the tool must be shareable with Studio/CM without configuration overhead.

**Do NOT use**: Slack as a document repository (search degrades, history disappears), personal email for operational decisions (not transferable), local desktop files (invisible to successors).

---

## Part 2: Runbook Index

A runbook is a step-by-step guide for a repeatable operational process. The goal: any qualified person can execute the runbook without tribal knowledge.

[Confidence: A | Source: Danilo tab 801 (structure), runbook content is IonWave-specific synthesis | Date: 2026-02-17]

### Priority Runbooks (Build First — Pre-Launch)

| Runbook ID | Process | Owner | Location | Priority |
|-----------|---------|-------|----------|----------|
| RB-ADS-001 | Daily Ad Check (spend, ROAS, creative fatigue) | Operator | Notion/04_Operations | CRITICAL — Day 1 |
| RB-ADS-002 | Ad Scaling Decision (when/how to scale) | Operator | Notion/04_Operations | CRITICAL — Day 1 |
| RB-ADS-003 | New Ad Launch Protocol | Operator | Notion/04_Operations | HIGH — Week 1 |
| RB-FIN-001 | Weekly Financial Review (Survival Five) | Operator | Notion/04_Operations | CRITICAL — Day 1 |
| RB-FIN-002 | Invoice Processing and Bill Payment | Operator | Notion/04_Operations | HIGH — Week 1 |
| RB-SUP-001 | Customer Refund Processing | Operator | Notion/04_Operations | HIGH — Week 1 |
| RB-SUP-002 | Adverse Event Response (FDA protocol) | Operator | Notion/04_Operations | CRITICAL — Day 1 |
| RB-INV-001 | Inventory Reorder Process (restock formula) | Operator | Notion/04_Operations | HIGH — Week 2 |
| RB-VND-001 | Supplier Communication Protocol | Operator | Notion/04_Operations | HIGH — Week 2 |
| RB-CMP-001 | Klaviyo Segment Audit | Operator | Notion/04_Operations | MEDIUM — Month 1 |

### Secondary Runbooks (Build by Month 2)

| Runbook ID | Process | Owner | Location |
|-----------|---------|-------|----------|
| RB-ADS-004 | Ad Account Compliance Check (pre-flight) | Operator | Notion/04_Operations |
| RB-INV-002 | 3PL Dispute Resolution | Operator | Notion/04_Operations |
| RB-SUP-003 | Subscription Cancellation Win-Back | Operator | Notion/04_Operations |
| RB-RPT-001 | Monthly Business Review (MBR) | Operator | Notion/04_Operations |
| RB-VND-002 | Vendor Quarterly Review | Operator | Notion/04_Operations |
| RB-SEC-001 | Password Audit and Rotation | Operator | Notion/04_Operations |

### Runbook Template

Every runbook must include:

```
RUNBOOK: [Name]
ID: [RB-XXX-000]
Version: 1.0.0
Last Updated: [Date]
Owner: [Role]
Trigger: [What causes this process to run?]
Frequency: [Daily / Weekly / As-needed]
Time Required: [N minutes]
---
PREREQUISITES
- [ ] [What must be true before starting?]

STEPS
1. [Step 1 with exact navigation path]
2. [Step 2]
...

DECISION POINTS
If [condition]: → [action]
If [condition]: → [action]

ESCALATION
If [condition]: contact [person] via [method]

COMMON ERRORS
[Error]: [Fix]
```

---

## Part 3: Knowledge Capture System

### How We Capture Learnings

[Confidence: B | Source: Danilo tab 801 intent + D2C operational best practices | Date: 2026-02-17]

**The four capture moments:**

1. **After every ad test** — Record winner/loser + WHY in the Creative Library. The "why" is the learning; the result is just the signal. (See M12 creative testing playbook.)

2. **After every incident** — Complete a post-mortem within 48 hours. One page max. Root cause + fix + prevention. (Post-mortem template in risk_and_continuity.md.)

3. **After every vendor interaction** — Update the vendor contact sheet with any new info: rate changes, capacity signals, relationship notes.

4. **Weekly retrospective** — 15 minutes every Friday (or equivalent). Three questions: What worked? What didn't? What changes next week? Log in Notion.

**The anti-pattern to avoid**: Capturing learnings in Slack threads, ad platform comments, or mental notes. Institutional knowledge that exists only in the founder's head is a single point of failure — the thing M36 exists to prevent.

### Lessons Learned Repository

[Confidence: A | Source: Danilo tab 817 intent | Date: 2026-02-17]

The lessons learned repository is a running log in Notion. Structure:

```
| Date | Domain | What Happened | Root Cause | What We Changed | Impact |
```

**Capture rules:**
- Only log learnings with a decision impact (changed behavior, updated runbook, or changed parameter)
- Tag each entry with relevant domain (Ads, Product, Finance, Operations, Support)
- Review quarterly — archive lessons that are now "just how we do things" (i.e., built into runbooks)

**Review cadence**: Monthly MBR includes a 5-minute "what did we learn?" scan of the lessons log.

---

## Part 4: Knowledge Transfer Protocol

This is the handoff checklist. When the Operator transitions (for any reason), nothing gets lost.

[Confidence: A | Source: Danilo tab 829 (exact checklist and timeline) | Date: 2026-02-17]

### Transfer Checklist

**Credentials & Access:**
- [ ] All credentials documented in shared password manager (master vault accessible to Studio)
- [ ] 2FA backup codes stored securely and shared
- [ ] Business email access confirmed for successor
- [ ] Domain registrar access confirmed
- [ ] Shopify admin access transferred or collaborator access granted
- [ ] All ad accounts (Meta, Google, TikTok) — successor added as admin
- [ ] Legal documents location shared (operating agreement, contracts)
- [ ] Cap table / equity records location confirmed
- [ ] Insurance policies location and contact confirmed
- [ ] Bank account — co-signer or authorized user confirmed

**Operational Context:**
- [ ] Active campaigns documented: what's running, performance, next planned actions
- [ ] Pending decisions documented: what's waiting, context, options, who needs to decide
- [ ] Supplier relationships briefed: who, contact info, current status, any open issues
- [ ] In-flight orders tracked: what's pending, expected delivery dates
- [ ] Active customer issues in support queue flagged and handed off
- [ ] Scheduled commitments listed: calls, renewals, deadlines in next 30 days
- [ ] Subscription cohort status shared: how many active, at-risk, recent churns

### Transfer Timeline

| Day | Activity |
|-----|---------|
| Day 1-3 | Documentation review: verify all runbooks are current, all credentials documented, all active work written down |
| Day 4-5 | Handoff meetings: 1:1 with successor covering each operational domain (minimum 2 hours total) |
| Day 6-7 | Shadow period: successor observes and executes with outgoing operator available for questions |
| Day 8-14 | Q&A availability: outgoing operator available for questions (async preferred); successor operates independently |

**Emergency handoff (unplanned)**: If transfer is unplanned (illness, emergency), the Day 1-3 documentation review becomes the most important 3 days of any operator's tenure. This is why runbooks must be maintained continuously, not only when a handoff is pending.

### What-If Founder Dies (Succession Protocol)

[Confidence: A | Source: Danilo tab 807 — "What If Founder Dies / Incapacitated" | Date: 2026-02-17]

This is the business's most sensitive contingency. Nobody wants to plan for it. But businesses have failed because the founder had all the passwords.

**Why plan for this:**
- Investors and partners deserve to know there's a plan
- It is a fiduciary responsibility
- Planning for it does not make it happen

**Immediate Access Requirements (before anything else):**
The following must be accessible to at least one other named person at all times:

| System | Access Method | Named Secondary |
|--------|--------------|-----------------|
| Password manager | Master password with trusted person | [TBD — name a person] |
| Bank accounts | Co-signer or authorized user | [TBD — Studio / Danilo] |
| Business email | Recovery email or delegated access | [TBD] |
| Domain registrar | Co-owner or recovery contacts | [TBD] |
| Shopify | Staff account or collaborator | [TBD] |
| Meta ad account | Business manager admin | [TBD] |
| Legal documents | Shared cloud folder, attorney copy | [TBD] |
| Cap table / equity records | Shared with Studio / attorney | [TBD] |
| Insurance policies | Copy with Studio | [TBD] |

**Who has access**: [TBD — must be completed before first dollar spent]
**Backup**: [TBD]

**Succession Plan:**

*IMMEDIATE (Day 1-7):*
- Who takes over day-to-day operations: [TBD — default: Danilo/Studio assess options]
- Who communicates with team/freelancers: [TBD]
- Who communicates with investors/partners: [TBD — Danilo]

*SHORT-TERM (Week 2-4):*
- Who makes key decisions: [TBD — Danilo as Studio lead until succession decision]
- What decisions are on hold: [All non-critical spending decisions >$500 on hold pending succession]

*LONG-TERM:*
- Who decides future of company: [TBD — per operating agreement]
- What happens to equity: [Per operating agreement — see M2 entity structure]

**Key Person Insurance:**
- Consider life insurance on founder: pays out if key person dies, providing runway for replacement
- Cost: $500-$2,000/year depending on coverage amount
- Recommendation: Purchase once business reaches $10K MRR. Before that, document-heavy continuity plan is primary mitigation.

[Confidence: D — TBD fields require human completion | Upgrade path: Complete all [TBD] fields in Week 1 of operations | Date: 2026-02-17]

---

## Part 5: Glossary & Terminology Standards

The IonWave system uses a defined vocabulary. Using the same words for the same things is operational infrastructure — ambiguity creates errors.

[Confidence: A | Source: Danilo tabs 764-767 (glossary, grand_unifying_dictionary, glossary_term_usage, master_term_index) + cross-TUP consistency | Date: 2026-02-17]

### Core Operational Terms

| Term | Definition | Do NOT confuse with |
|------|-----------|---------------------|
| **Operator** | The person executing IonWave operations day-to-day. Has P&L responsibility for execution. | CM (who provides oversight), Studio (who owns the system) |
| **CM** | Case Manager / Conductor. Studio 3's oversight role above the Operator. Approves spend $500-2K. [See DECISION TBD in decision_rights.md] | Operator (execution role) |
| **Studio** | Studio 3 — Danilo's parent organization. Approves spend >$2K and strategy changes. | Operator / CM |
| **TUP** | Trade Unit Project. The fundamental unit of knowledge about one subject in the Studio 3 system. | File, document, or spreadsheet |
| **OpKit** | Operational support bundle. Instruction + rubric + scaffold + graded example. | SOP (which is just one component of an OpKit) |
| **CAC** | Customer Acquisition Cost. Total ad spend / number of new customers. Do NOT include organic. | ROAS (which is revenue/spend) |
| **ROAS** | Return on Ad Spend. Revenue attributed to ads / ad spend. Platform ROAS (overstated by 20-40% post-iOS 14.5) vs. MER (blended truth). | MER (which is total revenue / total ad spend, more accurate) |
| **MER** | Media Efficiency Ratio. Total revenue / total ad spend. The true blended efficiency metric. | ROAS (platform-reported, directional only) |
| **LTV** | Lifetime Value of a customer. Cumulative revenue over their entire relationship. | AOV (which is per-order, not per-lifetime) |
| **AOV** | Average Order Value. Average revenue per order. | LTV |
| **Contribution Margin** | Revenue minus variable costs (COGS + fulfillment + shipping + returns + payment processing). What's left to cover fixed costs and CAC. | Gross Margin (which excludes operational variable costs) |
| **Gross Margin** | Revenue minus COGS only. Product margin before operational costs. At IonWave: ~67% product-only, ~40-45% fully-loaded. | Contribution Margin |
| **3PL** | Third-Party Logistics. Outsourced fulfillment partner. | Carrier (e.g., UPS/FedEx — the last-mile shipper, not the warehouse) |
| **PMF** | Product-Market Fit. Qualitative and quantitative signal that product meets market need at scale. Not a binary state. | Launch readiness |
| **SLA** | Service Level Agreement. A committed performance threshold. At IonWave: 4-hour first response for support. | Goal or aspiration |
| **R, A, C, I** | Responsible, Accountable, Consulted, Informed. The four RACI roles for decision clarity. | See decision_rights.md |

### Naming Conventions

| Document Type | Convention | Example |
|--------------|-----------|---------|
| Runbook | `RB-[DOMAIN]-[NNN]` | `RB-ADS-001_Daily_Ad_Check.md` |
| SOP | `SOP-[FUNCTION]_v[N.N.N]` | `SOP-Refund_Processing_v1.0.0.md` |
| Risk Register entry | `R[NNN]` | `R001 — Supplier failure` |
| OpKit | `OK-M[N]-[NNN]` | `OK-M36-001` |
| Vendor contact | `VND-[NAME]` | `VND-Biocean` |

---

## Intelligence Gaps

| Gap | Impact | Upgrade Path | Grade |
|-----|--------|-------------|-------|
| Runbooks are indexes, not actual runbooks (content TBD) | HIGH — knowledge system is scaffolded, not operational | Build each runbook during Week 1-4 of operations as the process is executed for the first time | D |
| Specific tools not yet selected (Notion confirmed, others TBD) | MEDIUM — tool uncertainty slows adoption | Confirm tool stack by Week 1 per M9 ecommerce infrastructure setup | C |
| Succession plan has 7 [TBD] fields | HIGH — business continuity plan incomplete | Complete all [TBD] fields before first paid ad launch | D |
| Lessons learned repository is empty | LOW — expected pre-launch | Capture first 3 learnings within first 30 days operational | D |

---

## Section 3: Scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| Evidence Coverage | 4/5 | All Danilo tabs incorporated; runbook content is scaffold-level (expected for pre-launch) |
| Confidence Honesty | 5/5 | All [TBD] fields explicitly flagged D-grade with upgrade paths |
| Upgrade Path Quality | 4/5 | Clear paths for all gaps; succession plan completion requires human decision |
| Actionability | 4/5 | Folder structure and runbook templates are directly executable Day 1 |
| OpKit Reusability | 5/5 | Information architecture and transfer protocol apply to any D2C brand |

**Section Score: 4.4/5 → 8.8/10**
