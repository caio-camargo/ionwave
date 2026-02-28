# M36 Operational Infrastructure — Risk & Continuity

**Version**: 1.0.0
**TUP**: M36 — Operational Infrastructure
**Cluster**: BCL-6 Operations & Infra
**Author**: Claude (TWP-001 v2.0.0 workshop)
**Date**: 2026-02-17
**Status**: Production
**Source Tabs**: 803-810 (what_if series), 823 (risk_management_framework), 807 (what_if_founder_dies), 808 (what_if_ad_account_banned)

---

## Overview

Risk management for a pre-launch D2C brand is not about building bureaucratic control systems. It is about identifying the handful of events that could kill the business and ensuring each one has a named owner, a pre-built response, and a trigger that forces action before the damage becomes fatal.

IonWave has six material risks. This document names them, scores them, and gives each one a contingency playbook. The goal is that if any of these events occur, Danilo does not have to think — he executes the playbook.

[Confidence: B | Source: Danilo’s risk_management_framework tabs 803-823 | Date: 2026-02-17]

---

## 1. Risk Management Framework

### 1.1 Scoring Methodology

IonWave uses a 2-axis risk matrix: **Likelihood (L)** × **Impact (I)** = Risk Score.

| Axis | Scale | Description |
|------|-------|-------------|
| **Likelihood** | 1-5 | 1 = rare (<5% in next 12 months), 5 = near-certain (>75%) |
| **Impact** | 1-5 | 1 = minor inconvenience, 5 = business-ending |
| **Risk Score** | L × I | Raw priority number |

**Risk Tiers:**

| Score Range | Tier | Response Protocol |
|-------------|------|------------------|
| 15-25 | **CRITICAL** | Immediate mitigation + pre-built playbook + 48hr review |
| 8-14 | **HIGH** | Mitigation in place + playbook + weekly monitoring |
| 4-7 | **MEDIUM** | Mitigation plan + monthly monitoring |
| 1-3 | **LOW** | Accept or monitor quarterly |

[Confidence: B | Source: tabs 803, 823 risk_management_framework | Date: 2026-02-17]

### 1.2 Four-Tier Response Protocol

**Tier 1 — CRITICAL (Score 15-25)**
- Activate playbook within 24 hours of trigger
- Danilo personally owns response
- Daily update to Studio 3 until resolved
- Do not continue scaling until resolved

**Tier 2 — HIGH (Score 8-14)**
- Activate playbook within 72 hours of trigger
- Named owner (may delegate to CM if hired)
- Weekly update in ops review
- Flag in monthly KPI review

**Tier 3 — MEDIUM (Score 4-7)**
- Review playbook and update mitigation plan
- Owner: Danilo or CM
- Monthly monitoring in KPI dashboard
- Document lessons if triggered

**Tier 4 — LOW (Score 1-3)**
- Accept the risk OR add to watch list
- No dedicated playbook required
- Annual review sufficient

---

## 2. Risk Register

### R001 — Supplier Failure

| Field | Detail |
|-------|--------|
| **Risk ID** | R001 |
| **Category** | Supply Chain |
| **Event** | Primary supplement manufacturer cannot deliver: production halt, closure, quality failure, or capacity allocation to a larger customer |
| **Likelihood** | 3 (moderate — single-source risk is real for small brands) |
| **Impact** | 5 (business-ending if no inventory and no alternative source) |
| **Risk Score** | 15 — CRITICAL |
| **Owner** | Danilo |
| **Current Mitigation** | See playbook R001-P below |
| **Trigger** | Manufacturer confirms delay >14 days OR fails CoA inspection |
| **Review Cadence** | Monthly (supplier relationship check) |

**Current Status**: Pre-launch. Single supplier identified. 14-day safety stock target set. Second qualified supplier needed before launch.

[Confidence: B | Source: tab 803 what_if_supplier_fails | Date: 2026-02-17]

---

### R002 — Ad Account Banned

| Field | Detail |
|-------|--------|
| **Risk ID** | R002 |
| **Category** | Paid Acquisition |
| **Event** | Meta/Google/TikTok bans IonWave ad account — all paid traffic stops immediately |
| **Likelihood** | 2 (low-moderate — possible with health supplements if claims are borderline) |
| **Impact** | 5 (catastrophic if email list is small and paid is primary channel) |
| **Risk Score** | 10 — HIGH |
| **Owner** | Danilo |
| **Current Mitigation** | See playbook R002-P below |
| **Trigger** | Any platform sends account suspension notice OR ROAS drops to zero unexpectedly |
| **Review Cadence** | Weekly (ad policy compliance check) |

**Current Status**: Pre-launch. No accounts banned. Policy compliance review should happen before first ad launch.

[Confidence: B | Source: tab 808 what_if_ad_account_banned | Date: 2026-02-17]

---

### R003 — Cash Crisis

| Field | Detail |
|-------|--------|
| **Risk ID** | R003 |
| **Category** | Financial |
| **Event** | Cash falls below 3-month operating reserve. Unable to fund inventory purchase, payroll, or ad spend |
| **Likelihood** | 2 (low-moderate pre-launch; higher post-launch if ROAS underperforms) |
| **Impact** | 5 (business-ending if cash runs to zero with no credit line) |
| **Risk Score** | 10 — HIGH |
| **Owner** | Danilo |
| **Current Mitigation** | See playbook R003-P below |
| **Trigger** | 13-week cash flow model shows runway drops below 90 days |
| **Review Cadence** | Weekly (cash flow model update) |

**Current Status**: Pre-launch. 13-week cash flow model should be live before first inventory order.

[Confidence: B | Source: tab 803, M3 financial model | Date: 2026-02-17]

---

### R004 — Product Defect or Customer Complaint

| Field | Detail |
|-------|--------|
| **Risk ID** | R004 |
| **Category** | Product / Customer |
| **Event** | Product defect discovered post-shipment, OR serious customer complaint (illness, adverse reaction, foreign matter) |
| **Likelihood** | 2 (low — CoA process reduces risk; small batch sizes help) |
| **Impact** | 4 (high — regulatory action, recall cost, brand damage; severe but rarely business-ending for first event) |
| **Risk Score** | 8 — HIGH |
| **Owner** | Danilo |
| **Current Mitigation** | See playbook R004-P below |
| **Trigger** | Any complaint mentioning illness, adverse reaction, or foreign material. OR 3+ complaints about same issue within 30 days |
| **Review Cadence** | Ongoing (customer support triage) |

**Current Status**: Pre-launch. CoA protocol should be defined before first batch shipped.

[Confidence: B | Source: tab 804, operating_parameters SLA <4hr | Date: 2026-02-17]

---

### R005 — Founder Incapacitation

| Field | Detail |
|-------|--------|
| **Risk ID** | R005 |
| **Category** | Key Person |
| **Event** | Danilo is incapacitated (illness, accident, emergency) and cannot manage operations for 2+ weeks |
| **Likelihood** | 1 (low probability in any given year; but impact is total if it happens) |
| **Impact** | 5 (business-ending for a solo operator with no documented handoff) |
| **Risk Score** | 5 — MEDIUM |
| **Owner** | Danilo + Trusted Contact (to be named) |
| **Current Mitigation** | See playbook R005-P below |
| **Trigger** | Danilo is unreachable for >48 hours during business hours without prior notice |
| **Review Cadence** | Quarterly (password vault audit, succession contacts review) |

**Current Status**: Pre-launch. Password vault and succession contacts should be set up before launch.

[Confidence: B | Source: tab 807 what_if_founder_dies | Date: 2026-02-17]

---

### R006 — Legal or Regulatory Attack

| Field | Detail |
|-------|--------|
| **Risk ID** | R006 |
| **Category** | Legal / Regulatory |
| **Event** | FTC or FDA enforcement action, competitor cease-and-desist, class action lawsuit, or IP infringement claim |
| **Likelihood** | 2 (low if claims are clean; higher if any disease claims slip through) |
| **Impact** | 4 (high — legal fees, injunctions, product recall orders; rarely business-ending if insurance in place) |
| **Risk Score** | 8 — HIGH |
| **Owner** | Danilo + Legal Retainer |
| **Current Mitigation** | See playbook R006-P below |
| **Trigger** | Receipt of any demand letter, FTC inquiry, FDA warning letter, or lawsuit |
| **Review Cadence** | Quarterly (ad copy compliance review, disclaimer audit) |

**Current Status**: Pre-launch. Legal retainer relationship should be established before first ad runs.

[Confidence: B | Source: tab 805, regulatory guidance | Date: 2026-02-17]

---

## 3. Risk Register Summary

| ID | Risk | L | I | Score | Tier | Owner |
|----|------|---|---|-------|------|-------|
| R001 | Supplier fails | 3 | 5 | 15 | CRITICAL | Danilo |
| R002 | Ad account banned | 2 | 5 | 10 | HIGH | Danilo |
| R003 | Cash crisis | 2 | 5 | 10 | HIGH | Danilo |
| R004 | Product defect | 2 | 4 | 8 | HIGH | Danilo |
| R006 | Legal/regulatory attack | 2 | 4 | 8 | HIGH | Danilo + Legal |
| R005 | Founder incapacitation | 1 | 5 | 5 | MEDIUM | Danilo + Contact |

---

## 4. Contingency Playbooks

### R001-P: Supplier Fails

**Trigger**: Supplier confirms delay >14 days OR batch fails CoA inspection.

**Pre-conditions (must be in place before launch):**
- [ ] Minimum 2 qualified suppliers on file (not just 1)
- [ ] 14 days safety stock maintained at all times post-launch
- [ ] CoA protocol: every batch reviewed before shipping to customers

**Playbook — Day 1 (First 24 hours):**
1. Confirm the failure scope: Is this a delay, a defect, or a termination?
2. Pull current inventory count: How many days of stock remain?
3. Contact backup supplier #2: Confirm they can produce your formulation, get lead time quote
4. If inventory < 14 days AND backup lead time > 10 days: Pause ad spend immediately (do not acquire customers you cannot fulfill)
5. Email current subscriber list: High demand — brief delay expected (do not mention supplier; keep it customer-side)

**Playbook — Week 1:**
6. Get backup supplier contract signed and deposit paid
7. Adjust 13-week cash flow model for delay impact on revenue
8. Review if 3-month reserve is sufficient to bridge gap
9. If gap exceeds 30 days: Consider pausing subscriptions and offering refunds proactively

**Playbook — Resolution:**
10. When inventory restored: Resume ads, notify customers of resolution
11. Post-mortem: Document what failed, update supplier qualification criteria
12. Goal: Never operate below 2 qualified suppliers again

**Mitigation (ongoing):**
- Maintain 14-day safety stock buffer post-launch
- Qualify second supplier by M3 of operations (before first inventory reorder)
- Annual supplier audit: Visit or request facility inspection reports

[Confidence: B | Source: tab 803, M24 fulfillment ops | Date: 2026-02-17]

---

### R002-P: Ad Account Banned

**Trigger**: Platform sends suspension notice OR ROAS drops to zero unexpectedly.

**Pre-conditions (must be in place before launch):**
- [ ] Backup ad accounts created on Meta, Google, TikTok (separate BM/entity if possible)
- [ ] Email list built in parallel with paid ads from Day 1
- [ ] All ad copy reviewed against platform policies before launch: no disease claims, no cure/treat/prevent language

**Playbook — Day 1 (First 24 hours):**
1. Log into platform: Read suspension reason carefully
2. Do not appeal blindly — understand the violation first
3. If unclear violation: Pull all active ads; cross-reference against platform supplement policies
4. Switch traffic to backup account if violation was limited to one creative set
5. If entire Business Manager is banned: Activate owned channel emergency protocol (email list only)

**Playbook — Week 1:**
6. File appeal with documentation: Policy compliance evidence, ad examples, business legitimacy
7. Engage paid ads attorney if account value is >0K/month
8. While appealing: Shift budget to un-banned platforms (Google if Meta banned, Meta if Google banned)
9. Accelerate email/SMS capture: This is your reminder that owned channels are insurance

**Playbook — If Appeal Fails:**
10. Register new Business Manager under different entity (legal review required)
11. Clean-room restart: New account, new creatives, new pixel — no cross-contamination
12. Build policy compliance checklist to prevent recurrence

**Owned Channel Emergency Protocol:**
- Email list is your lifeboat. If all paid channels go down:
  - Send broadcast to full list: New offer or content to maintain engagement
  - Referral activation: Incentivize existing customers to share
  - PR/organic push: Submit to supplement review sites, Reddit communities (ICP-adjacent)
  - Timeline: Most brands can survive 2-4 weeks on owned channels; longer requires aggressive organic

[Confidence: B | Source: tab 808 what_if_ad_account_banned | Date: 2026-02-17]

---

### R003-P: Cash Crisis

**Trigger**: 13-week cash flow model shows runway drops below 90 days (3-month reserve target breached).

**Pre-conditions (must be in place before launch):**
- [ ] 13-week cash flow model updated weekly
- [ ] 3-month operating reserve as minimum target (in separate account, not operating)
- [ ] Credit line pre-arranged (even if unused — having it costs less than needing it in a crisis)

**Playbook — Yellow Flag (60-90 day runway):**
1. Freeze all discretionary spend: No new tools, no new hires, no events
2. Review all recurring subscriptions: Cut anything not actively contributing to revenue
3. Accelerate receivables: Any delayed payments, subscriptions past due — collect now
4. Lengthen payables: Negotiate extended terms with suppliers if possible
5. Update Studio 3: Flag the situation; this is a checkpoint moment

**Playbook — Red Flag (<60 day runway):**
6. Revenue emergency: Launch a flash sale or bundle offer to generate immediate cash
7. Credit line: Draw on pre-arranged credit if available
8. Pause inventory reorder: Sell through existing stock; do not compound cash problem with new inventory
9. Pause or reduce ad spend to only high-ROAS campaigns
10. Subscription offer: If not already on subscriptions, offer a compelling subscription deal to lock in recurring revenue

**Playbook — Critical (<30 day runway):**
11. All-hands financial review: Every cost scrutinized
12. Revenue-only focus: Stop all non-revenue activity
13. Capital raise consideration: Is bridge financing available from Studio 3 or external investors?
14. Controlled wind-down plan: If capital cannot be raised and revenue cannot be accelerated, plan an orderly exit

**Prevention (ongoing):**
- Review 13-week model weekly (owner: Danilo, time: 30 minutes Friday)
- Maintain 3-month reserve in separate savings account
- ROAS floor: If ROAS drops below 1.5x for 2 consecutive weeks, review ad spend before it compounds cash drain

[Confidence: B | Source: tab 803, M3 financial model | Date: 2026-02-17]

---

### R004-P: Product Defect or Serious Customer Complaint

**Trigger**: Any complaint mentioning illness, adverse reaction, or foreign material. OR 3+ complaints about same issue within 30 days.

**Pre-conditions (must be in place before launch):**
- [ ] CoA (Certificate of Analysis) on file for every batch before shipping
- [ ] Customer support SLA: First response <4 hours during business hours
- [ ] Pull-and-test protocol defined (who, how, where)
- [ ] Product liability insurance in place

**Playbook — Day 1 (First 24 hours):**
1. Take the complaint seriously: Assume real until proven otherwise
2. Respond to affected customer within 4 hours: Empathy first, no defensive language
3. Pull batch record: Match customer order to production batch, pull CoA
4. If CoA passes and complaint is isolated: Continue with enhanced monitoring; document fully
5. If CoA has anomalies OR multiple complaints same batch: Move to full pull-and-test protocol

**Playbook — Pull-and-Test Protocol (if triggered):**
6. Identify all orders from suspect batch: Export list from Shopify
7. Pause fulfillment for suspect batch: Do not ship additional units
8. Proactive outreach to affected customers: Offer refund + replacement from next batch
9. Send remaining batch to independent lab for re-testing
10. Notify manufacturer: Preserve batch records on their end

**Playbook — If Defect Confirmed:**
11. Voluntary recall of suspect batch: Contact all customers, offer full refund
12. Notify insurance carrier: Product liability claim process
13. Legal review: FDA recall requirements for dietary supplements
14. Post-mortem with manufacturer: Root cause + corrective action

**Playbook — Regulatory Inquiry (if FDA contacts):**
15. Contact legal retainer immediately
16. Do not respond to FDA without legal review
17. Preserve all records: Do not delete anything

**SLA Commitment**: First customer response within 4 hours during business hours (9am-6pm local time). Acknowledgment only is acceptable at the 4-hour mark; resolution can follow.

[Confidence: B | Source: tab 804, operating_parameters SLA <4hr | Date: 2026-02-17]

---

### R005-P: Founder Incapacitation

**Trigger**: Danilo is unreachable for >48 hours during business hours without prior notice.

**Pre-conditions (must be in place before launch):**
- [ ] Password manager (1Password or Bitwarden) with all credentials stored
- [ ] Emergency access granted to trusted contact (not an employee — a person with legal authority)
- [ ] Succession contacts document: Who to call for what (supplier, Shopify, Studio 3, legal)
- [ ] Key person insurance policy in place (amount TBD — open intelligence gap)
- [ ] Will or business continuity document designating who controls the entity

**The Trusted Contact Protocol:**
- **Trusted Contact**: Named individual who has emergency access to password vault
- **Not**: An employee, a contractor, or a platform. A human with legal authority to act.
- **Access**: Password vault emergency access + contact list for all critical vendors
- **Activation condition**: Danilo unreachable for 48 hours without notice

**What the Trusted Contact Can Do (and Cannot Do):**
- CAN: Access systems, pause ad spend, pause subscriptions, contact suppliers
- CAN: Contact Studio 3 to brief them on situation
- CANNOT: Make equity decisions, sign contracts, change business structure
- CANNOT: Access bank accounts without separate legal authority (power of attorney)

**Minimum Viable Continuity:**

If Danilo is out for 1-4 weeks (recoverable):
1. Trusted contact pauses ad spend (prevent cash bleed)
2. Trusted contact fulfills existing orders using existing inventory + SOP runbooks
3. Customer support: automated responses + escalation to Studio 3 if needed
4. Subscriptions: Pause new charges if fulfillment is uncertain

If Danilo is out indefinitely (succession scenario):
1. Studio 3 notified immediately
2. Legal counsel engaged for entity succession
3. Key person insurance claim filed
4. Business either transferred to successor or wound down per documented plan

**Intelligence Gap**: Key person insurance coverage amount and provider not yet specified. This needs to be defined pre-launch.

[Confidence: B | Source: tab 807 what_if_founder_dies | Date: 2026-02-17]

---

### R006-P: Legal or Regulatory Attack

**Trigger**: Receipt of any demand letter, FTC inquiry, FDA warning letter, or lawsuit filing.

**Pre-conditions (must be in place before launch):**
- [ ] Legal retainer relationship established (supplement industry experience required)
- [ ] All ad copy reviewed for disease claims: No cure, treat, prevent, diagnose language
- [ ] All product labels reviewed against FDA dietary supplement labeling requirements
- [ ] Proper disclaimers on all marketing: These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
- [ ] Document retention policy: Keep all batch records, ad creative versions, customer communications

**Playbook — Day 1 (Receipt of Any Legal Notice):**
1. Do not respond without legal review
2. Forward to legal retainer within 4 hours of receipt
3. Preserve all related documents: Do not delete, modify, or discard
4. Brief Studio 3 on the nature of the claim

**Playbook — FTC Inquiry:**
5. Substantiation defense: Pull all evidence supporting any claims made in ads
6. Legal review of all active ad copy: Pause anything borderline immediately
7. Response crafted by attorney, not Danilo personally

**Playbook — FDA Warning Letter:**
8. 15-business-day response window (typical — attorney will confirm)
9. Cease the violating activity immediately
10. Corrective action plan prepared by attorney + Danilo
11. If label issue: Pull affected inventory, rework labeling

**Playbook — Competitor C&D:**
12. IP analysis: Did we infringe? If borderline, negotiate; if clean, defend
13. Evaluate the cost of response vs. the cost of capitulating on minor claims
14. Do not capitulate publicly without legal sign-off

**Prevention (ongoing):**
- Ad copy audit every 6 months: Review all active claims against FTC/FDA guidelines
- Disclaimer checklist: Every new landing page reviewed before launch
- Industry monitoring: Subscribe to supplement industry legal newsletters

[Confidence: B | Source: tab 805, regulatory guidance | Date: 2026-02-17]

---

## 5. Business Continuity Baseline

This is the minimum that must be true at all times for IonWave to survive any of the above crises.

### 5.1 Access Inventory

**The Non-Negotiable**: If Danilo cannot log in, the business cannot run.

| System | Credential Location | Backup Access |
|--------|-------------------|---------------|
| Shopify | Password vault | Trusted contact |
| Meta Business Manager | Password vault | Backup BM account |
| Google Ads | Password vault | Backup account |
| Email platform (Klaviyo) | Password vault | Trusted contact |
| Bank accounts | Password vault + 2FA | Power of attorney (legal) |
| Manufacturer portal | Password vault | Contact list |
| Domain registrar | Password vault | Trusted contact |

**Action required**: Set up password vault and grant emergency access before launch.

### 5.2 Owned Channels as Insurance

The owned channel stack is IonWave’s minimum viable continuity plan:

| Channel | Role in Continuity |
|---------|-------------------|
| **Email list** | Primary fallback if all paid channels go down |
| **SMS list** | High-open backup for urgent customer communications |
| **Product reviews** | Social proof that survives platform bans |
| **SEO content** | Passive traffic that does not depend on paid |

**Build owned channels from Day 1** — not as an afterthought. The email list is insurance.

**Target at launch**: 1,000+ email subscribers before first paid campaign scales above 00/day.

[Confidence: B | Source: tab 808, M9 ecommerce infra | Date: 2026-02-17]

### 5.3 Backup Systems

| Primary System | Backup | Switchover Time |
|---------------|--------|-----------------|
| Meta ads | Google ads | 24 hours |
| Google ads | Meta ads | 24 hours |
| Primary supplier | Backup supplier (to be qualified) | 10-21 days (lead time dependent) |
| Shopify (primary store) | Backup email + direct fulfillment | 48 hours |
| Klaviyo email | Mailchimp (free tier always available) | 48 hours |

### 5.4 Communication Protocol During a Crisis

**Internal**: Danilo notifies Studio 3 within 24 hours of any HIGH or CRITICAL risk event triggering.
**Customer-facing**: Standard communication templates for each playbook (delay notice, recall notice, service disruption notice) should be written before launch and stored in the runbook.
**Regulatory**: All external regulatory communications go through legal retainer. No exceptions.

[Confidence: B | Source: synthesized from M36 tabs 803-823 | Date: 2026-02-17]

---

## 6. Pre-Launch Risk Readiness Checklist

Before IonWave’s first paid ad runs, the following must be true:

**Supply Chain (R001)**
- [ ] Second qualified supplier identified and quoted
- [ ] 14-day safety stock policy documented in M24 ops
- [ ] CoA protocol defined for every batch

**Paid Acquisition (R002)**
- [ ] Backup ad accounts created on Meta and Google
- [ ] Email list capture in place from Day 1
- [ ] All ad copy reviewed for policy compliance

**Financial (R003)**
- [ ] 13-week cash flow model live and updated
- [ ] 3-month reserve target set and funded
- [ ] Credit line application submitted (even if unused)

**Product (R004)**
- [ ] Customer support SLA <4hr documented
- [ ] Pull-and-test protocol written
- [ ] Product liability insurance in place

**Key Person (R005)**
- [ ] Password vault set up with all credentials
- [ ] Trusted contact named and granted emergency access
- [ ] Succession contacts list written
- [ ] Key person insurance — provider and amount TBD (open gap)

**Legal (R006)**
- [ ] Legal retainer relationship established
- [ ] All marketing materials reviewed for disease claims
- [ ] FDA disclaimer on all product pages and ads

---

*This document feeds into: M24 (fulfillment ops — supplier risk), M3 (financial model — cash crisis), M9 (ecommerce — backup systems), M25 (financial ops — reserve management)*
