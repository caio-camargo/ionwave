# Relationships & Compensation Architecture

**TUP**: M1 — Labor Chain & Deployment
**Sources**: Tabs 156 (Commission Stacking), 157 (Relationship Map / Company as CRM), 158 (Contact Registry)
**Cross-TUP**: M19 (Customer Lifecycle — customer CRM), M18 (Email — customer pipeline), M15 (Ads — creator pipeline)

---

## 1. Company as CRM — The Concept

Most companies have an ops model AND a CRM. Studio 4 doesn't need both. The ops model already contains every relationship the business manages: customers, creators, suppliers, partners, hires, investors.

The CRM isn't a tool. It's a lens on the ops model. Every tab that touches a relationship is a CRM function. Every pipeline is a CRM pipeline. Every lifecycle is a CRM lifecycle.

**The advantage**: Zero data fragmentation. The customer pipeline, the creator pipeline, and the hiring pipeline all live in the same system. A change in one (e.g., customer feedback) can immediately inform another (e.g., VSL angle selection, product development, hiring priorities).

---

## 2. Relationship Types & Pipelines

| Type | Who | Pipeline | Lifecycle | Managed In |
|------|-----|---------|-----------|-----------|
| **Customer** | People who buy the product | Awareness → Interest → Purchase → Retention → Advocacy | Prospect → First Purchase → Repeat → VIP → Champion → Churned | Customer Lifecycle (M19) + Klaviyo |
| **Creator** | UGC/content creators | Discovery → Outreach → Test → Contract → Scaling → Alumni | Prospect → One-off → Retained → Exclusive → Ambassador | Creator Pipeline (M15) |
| **Supplier** | Manufacturers, fulfillment, ingredients | Research → Sample → Negotiate → Contract → Monitor → Renew/Replace | Prospect → Trial → Active → Strategic → Exit | Supply Chain tabs |
| **Hire** | Operators, CoS, recruiters, VAs | Source → Screen → Interview → Offer → Onboard → Perform → Exit | Candidate → Onboarding → Probation → Performing → Promoted → Exited | Hiring Pipeline + Assessment Workbooks |
| **Investor/Partner** | Studio partners, advisors | Identify → Approach → Align → Commit → Active → Exit | Prospect → Active → Strategic → Alumni | Partnership tabs |
| **Vendor** | Tools, services, freelancers | Evaluate → Test → Contract → Monitor → Renew/Replace | Prospect → Trial → Active → Preferred → Exit | Vendor Management (M9) |

### Unified Pipeline View

| Relationship | Stage 1 | Stage 2 | Stage 3 | Stage 4 | Stage 5 |
|-------------|---------|---------|---------|---------|---------|
| Customer | Cold Traffic | Engaged | Cart/Checkout | Purchased | Retained |
| Creator | Identified | Outreach Sent | Responded | Test Content | Contracted |
| Supplier | Researched | Sampled | Negotiating | Contracted | Active |
| Hire | Sourced | Screened | Interviewed | Offered | Onboarded |
| Vendor | Evaluated | Testing | Contracted | Active | Preferred |

---

## 3. Commission & Incentive Architecture

### 3.1 Internal Compensation Stack (Labor Chain)

Per Overdetermined Coordination principles — every role has multiple aligned incentive layers:

| Role | Cash | Equity | Bonuses | Reputation | Process | Backstop |
|------|------|--------|---------|-----------|---------|----------|
| **VA** | $500-800/mo | — | $100 completion | — | Daily updates | Nilo oversight |
| **CoS** | $3-5K/mo | 1-3% Studio | $1K/placement, $2.5K at $100K MRR | Studio track record | Weekly sync | Nilo oversight |
| **Recruiter** | $2K retainer | — | $3K success fee | Reference-ability | Weekly updates | CoS oversight |
| **Operator** | $4K→$8K/mo | 15% IonWave | $5K/$10K/$25K at milestones | Public dashboard | Daily standups | CM oversight |
| **CM** | $500/mo/operator | — (maintains independence) | — | Professional reputation | Compliance log | Trustee oversight |

### 3.2 External Commission Programs

**Note:** Tab 156 (Commission Stacking) was labeled under M1 but contains external marketing commission programs. These properly belong in M15 (Ads) and M16 (Influencer Strategy) territory. Included here for completeness but tagged for cross-reference.

| Program | Rate | Structure | Belongs In |
|---------|------|-----------|-----------|
| Influencer affiliate | 15-20% | Per sale via unique code | M15/M16 |
| Customer referral | $10 credit | Give $10, get $10 | M19 (Customer Lifecycle) |
| Ambassador program | 25% | Top performers, exclusive | M16 (Influencer Strategy) |

### 3.3 Total Compensation Budget (Monthly)

Phase 1 — Pre-Operator (Weeks 1-8):

| Role | Monthly Cost |
|------|-------------|
| VA | $500-800 |
| CoS | $3,000-5,000 |
| Recruiter | ~$1,250/mo amortized (4 weeks) |
| **Total** | **$4,750-7,050/mo** |

Phase 2 — Operator Sprint (Weeks 8-20):

| Role | Monthly Cost |
|------|-------------|
| Operator | $4,000 |
| CM | $500 |
| CoS (reduced) | $2,000-3,000 |
| **Total** | **$6,500-7,500/mo** |

Phase 3 — Post-Winner Found (Month 3+):

| Role | Monthly Cost |
|------|-------------|
| Operator | $6,000 (increased) |
| CM | $500 |
| CoS (maintenance) | $1,000-2,000 |
| **Total** | **$7,500-8,500/mo** |

Phase 4 — At $100K MRR (Month 12):

| Role | Monthly Cost |
|------|-------------|
| Operator | $8,000 |
| CM | $500 |
| Specialists (as needed) | $2,000-5,000 |
| **Total** | **$10,500-13,500/mo** |

> At $100K MRR, total labor cost of $10.5-13.5K represents 10.5-13.5% of revenue. Healthy for a D2C brand at this stage. Per M25 COGS structure, labor sits in OpEx, not COGS.

### All-In Deployment Cost (U12)

The labor budget above covers ONLY cash compensation. The true all-in cost to deploy an operator includes:

| Category | Estimate | Notes |
|----------|---------|-------|
| Labor (per tables above) | $4,750-13,500/mo | Varies by phase |
| Tools & SaaS | $2,000-5,000/mo | Shopify ($79+), Klaviyo ($45+), Triple Whale ($199), ad accounts, etc. |
| Legal (initial) | $5,000-10,000 one-time | Operator contract review, entity setup, equity docs, 409A valuation |
| Insurance | $200-500/mo | D&O, E&O, general liability |
| Ad spend (ramp) | $3,000-10,000/mo | Per M15 budget model |
| Product/inventory | $5,000-15,000 initial | Per M24 first PO framework |

**Total pre-launch investment**: $25-50K before first customer. See M25 for complete financial model and cash runway projections.

---

## 4. Contact Registry Template

Master contact list for every person the business interacts with. Operator maintains this from Day 1.

| Name | Type | Company/Role | Email | Phone | Relationship Stage | Last Contact | Next Action | Owner | Notes |
|------|------|-------------|-------|-------|-------------------|-------------|-------------|-------|-------|
| [Name] | Supplier/Creator/Hire/Vendor/Partner | [Company] | [Email] | [Phone] | [Stage from §2] | [Date] | [Next step] | [Who owns this relationship] | [Context] |

**Rules:**
- Every external contact gets an entry within 24 hours of first interaction
- Relationship Stage must match the pipeline stages in §2
- "Next Action" is never blank — there's always a next step or "Dormant"
- Owner is always a specific person, never "team"
- Review cadence: Weekly (active relationships), Monthly (all relationships)

---

## 5. Cross-TUP Alignment

| TUP | Relationship & Compensation Alignment |
|-----|--------------------------------------|
| M15 | Creator pipeline maps to §2 Creator relationship type |
| M16 | Influencer strategy — affiliate/ambassador programs from §3.2 |
| M18 | Email flows — customer lifecycle pipeline from §2 |
| M19 | Customer lifecycle CRM — customer relationship management |
| M24 | Fulfillment — supplier relationship management |
| M25 | Finance — total labor budget per §3.3 maps to M25 OpEx categories |
| M9 | Ecommerce Infra — vendor management for tools/services |
