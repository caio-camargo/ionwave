# VA Workspace — Test Script

**Version**: 1.0.0
**Date Created**: 2026-03-02
**Purpose**: Role-play scenarios to verify the Claude.ai Project works correctly before handing it to a real VA

---

## How to Test

1. Set up the Claude.ai Project per `upload_manifest.md`
2. Start a new conversation in the project
3. Run each scenario below, one per conversation (start a new conversation for each)
4. Check Claude's responses against the "Expected Behavior" section
5. Note any issues in the "Results" section at the bottom

**You (Caio) play the role of the VA.** Act as a reasonably competent but not perfect VA would — sometimes on track, sometimes behind.

---

## Scenario 1: First Contact — Day 0

**Purpose**: Verify Claude orients the VA correctly on first session.

### Your Messages (send in order)

**Message 1:**
> Hi, I just received the VA package for the IonWave project. I'm [your name]. This is my first time opening this workspace.

**Expected**: Claude should welcome you, confirm it knows about the project, and guide you toward reading the materials and submitting the Brief Acknowledgment (DEL-VA-001, due in 48 hours). It should ask what week/day you're in.

**Message 2:**
> This is Day 0 — I just got the package today. I've skimmed the role brief but haven't read everything yet.

**Expected**: Claude should tell you what to read (all 6 documents), prioritize the role brief and sourcing playbook, and remind you that the Brief Acknowledgment is due in 48 hours. It should offer to help you work through the materials.

**Message 3:**
> OK I've read through everything. Here's my acknowledgment: I understand my job is to find an MBA intern. My questions are: 1) How do I get paid? 2) When do I start? 3) What tools do I use?

**Expected**: Claude should flag that these questions are too generic — they don't demonstrate comprehension of the role brief or sourcing approach. It should ask for questions that show understanding, like questions about the screening rubric, sourcing channels, or the candidate profile. It should NOT just accept this submission.

**Message 4:**
> OK fair point. Let me try again. 1) The rubric weighs Communication at 25% — should I weight the writing sample test more heavily than the interview for this dimension? 2) The sourcing playbook suggests MBA career services as Tier 1 — but what if the programs I contact don't have project boards, just full-time job boards? 3) The pipeline funnel assumes a 15-20% response rate on LinkedIn — is that realistic for equity-only compensation?

**Expected**: Claude should accept this as a valid Brief Acknowledgment — these questions show genuine comprehension. It should answer the questions helpfully and confirm the deliverable is submitted.

### What You're Checking
- [ ] Claude knows about the deliverable schedule
- [ ] Claude guides the VA without being pushy
- [ ] Claude can distinguish between shallow and substantive questions
- [ ] Claude references the uploaded documents correctly

---

## Scenario 2: Week 2 — Outreach Help + Pipeline Report

**Purpose**: Verify Claude helps with outreach and formats reports correctly.

### Your Messages

**Message 1:**
> Hey, I'm in Week 2. I need help personalizing an outreach message for a LinkedIn candidate.

**Expected**: Claude should ask about the candidate's background and the message context, then help personalize a template from outreach_templates.md.

**Message 2:**
> Her name is Sarah Chen. She's a second-year MBA at Kellogg, was a management consultant at Bain for 2 years before that, and she's president of the entrepreneurship club. She posts a lot about AI tools on LinkedIn.

**Expected**: Claude should draft a personalized LinkedIn connection request and follow-up message, referencing her consulting background, MBA program, entrepreneurship club, and AI interest. It should use the pitch from outreach_templates.md but personalize it to Sarah.

**Message 3:**
> Nice, I'll send that. Also, it's Friday — I need to do my pipeline report. This week I contacted 8 people. Got 2 responses. One declined, one wants to see the one-pager. I also had a screening call with that guy Marcus from last week.

**Expected**: Claude should note that 8 contacts is below the 15/week minimum but help format the report anyway. It should ask for the required fields for each candidate (name, source, status, notes) and format it into the pipeline report table template. If this is the first week below volume, it should note it but not alarm.

**Message 4:**
> Here's what I have:
> - Sarah Chen, LinkedIn, contacted today, no response yet
> - James Park, LinkedIn, contacted Monday, responded interested, sent one-pager
> - Amanda Liu, AngelList, contacted Tuesday, no response
> - Marcus Johnson, MBA career services (Booth), screened last week, passed initial screen
> - Raj Patel, LinkedIn, contacted Wednesday, declined
> - Tyler Brooks, Upwork, applied to our posting, reviewing
> - Nina Torres, LinkedIn, contacted Thursday, no response
> - Kevin Walsh, warm referral, contacted Friday, pending

**Expected**: Claude should format this into a proper pipeline report table, note the total (8 contacts, 2 responses, 1 screening done), and flag that volume is below the 15/week target. It should ask about Marcus's screening details (rubric scores).

### What You're Checking
- [ ] Claude personalizes outreach using candidate details + templates
- [ ] Claude formats pipeline reports correctly
- [ ] Claude flags below-target volume without being aggressive
- [ ] Claude asks for missing information (screening details)

---

## Scenario 3: Week 4 — Candidate Evaluation + Shortlist Pressure

**Purpose**: Verify Claude helps apply the rubric and tracks the shortlist deadline.

### Your Messages

**Message 1:**
> I'm in Week 4. I've screened 4 candidates total. I need help evaluating them against the rubric.

**Expected**: Claude should remind you that the shortlist (3+ candidates at 3.5+) is due this week (Week 4 soft deadline). It should offer to walk through each candidate's rubric evaluation.

**Message 2:**
> OK let me start with Marcus Johnson. In our screening call, he was very articulate — wrote a great 3-paragraph pitch when I asked. He managed a consulting project for 6 months at McKinsey, so project management is strong. He read the one-pager and explained the opportunity back to me pretty accurately, though he confused the electrolyte sourcing with regular supplements. He's done cold outreach before in consulting but mostly to mid-level managers, not VPs. He showed up on time and followed up the same day. He said he's excited about the AI angle but I'm not sure if he fully gets the equity-only compensation.

**Expected**: Claude should walk through each of the 6 dimensions, mapping Marcus's behaviors to specific scores with reasoning. Something like: Communication 4-5 (wrote a great pitch), Project Management 4-5 (6 months at McKinsey), Business Comprehension 3-4 (mostly accurate but confused sourcing), Outreach Sophistication 3 (experience but not with senior executives), Reliability 5 (on time, followed up same day), Motivation 3-4 (excited but uncertain about equity). It should calculate the weighted score.

**Message 3:**
> What about Sarah Chen? She was great at writing — her LinkedIn posts are crisp and she drafted an excellent outreach message during our call. She runs the entrepreneurship club so she's organized. She understood the business model really well — even asked about the kill criteria. She's pitched VCs for case competitions so she's comfortable with senior audiences. She was 5 minutes late to our call but apologized. She's very motivated — said this is exactly the kind of real-world project she's been looking for.

**Expected**: Claude should score Sarah similarly — likely scoring higher than Marcus on most dimensions (especially outreach sophistication and business comprehension). It should note the lateness as minor but observable for reliability.

**Message 4:**
> I have 2 other candidates but they're weaker — one scored about 2.8 and the other about 3.1. So I only have 2 above 3.5. The shortlist requires 3. What do I do?

**Expected**: Claude should acknowledge the shortfall, explain that the 3.0-3.4 candidate (3.1) is "borderline — keep in pipeline but do not shortlist unless no better options." It should suggest: continue sourcing for 1-2 more weeks to find a third 3.5+ candidate, or use the Week 6 hard deadline extension. It should NOT tell the VA to lower the bar.

### What You're Checking
- [ ] Claude maps behavioral observations to specific rubric dimensions and scores
- [ ] Claude calculates weighted scores correctly
- [ ] Claude maintains the 3.5+ threshold without lowering it
- [ ] Claude suggests practical solutions (more sourcing, deadline extension)
- [ ] Claude formats the shortlist report template correctly

---

## Scenario 4: Stress Test — Missed Deadlines + Edge Cases

**Purpose**: Verify Claude handles missed deadlines and edge cases appropriately.

### Your Messages

**Message 1:**
> Hey, sorry I haven't been in touch. It's Week 3 and I missed last Friday's pipeline report.

**Expected**: Claude should note the missed deliverable clearly but not aggressively. Something like: "Your Week 2 pipeline report was due last Friday and wasn't submitted. Let's get it done now — what happened last week? Also, your Week 3 report will be due this Friday." It should suggest the VA flag the delay to Caio.

**Message 2:**
> Yeah I was busy with other work. I only contacted 3 people last week and 2 this week. I'm not sure I can hit the shortlist by Week 4.

**Expected**: Claude should flag this seriously — 3 and 2 contacts are well below the 15/week minimum, two consecutive low-volume weeks. It should recommend: (1) submit the overdue pipeline report now, (2) significantly increase outreach volume this week, (3) contact Caio to discuss the timeline, (4) acknowledge that the Week 4 shortlist is unlikely but the Week 6 hard deadline is still possible if volume picks up. It should be direct but constructive.

**Message 3:**
> Can you just tell me what the business does? Like the full business plan? I want to understand it better before I source more people.

**Expected**: Claude should redirect — the VA doesn't need the full business plan. The Trade Pitch One-Pager has everything they need to pitch candidates. Claude should offer to walk through the one-pager again or help the VA explain the opportunity more confidently. It should NOT make up business details beyond what's in the uploaded documents.

**Message 4:**
> One of my candidates asked if they could get cash instead of equity. What do I tell them?

**Expected**: Claude should reference the screening criteria — "Demands cash compensation and won't consider equity" is an automatic disqualifier. Claude should help the VA respond to the candidate honestly: the MBA role is equity-compensated, and if that's a dealbreaker, they're not the right fit. It should note this as a rejection reason if the candidate insists.

### What You're Checking
- [ ] Claude handles missed deadlines directly but constructively
- [ ] Claude recognizes consecutive low-volume weeks as a serious pattern
- [ ] Claude redirects scope-creep questions (full business plan)
- [ ] Claude correctly identifies automatic disqualifiers
- [ ] Claude suggests escalation to Caio when appropriate

---

## Results Log

Run each scenario and record results here:

### Scenario 1: First Contact
- **Date tested**: ___
- **Pass / Partial / Fail**: ___
- **Notes**: ___

### Scenario 2: Week 2 Outreach + Reports
- **Date tested**: ___
- **Pass / Partial / Fail**: ___
- **Notes**: ___

### Scenario 3: Week 4 Evaluation + Shortlist
- **Date tested**: ___
- **Pass / Partial / Fail**: ___
- **Notes**: ___

### Scenario 4: Stress Test
- **Date tested**: ___
- **Pass / Partial / Fail**: ___
- **Notes**: ___

### Overall Assessment
- **Ready for deployment?**: Yes / No / Needs revision
- **Custom Instructions changes needed?**: ___
- **Upload changes needed?**: ___

---

## Version History

**v1.0.0 (2026-03-02)**: Initial test script. 4 scenarios covering: first contact, outreach + reports, candidate evaluation + shortlist pressure, stress test (missed deadlines + edge cases). Results log.
