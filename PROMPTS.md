# PROMPTS.md
**Student:** Zhengyan LU / Gillian · **Course:** MGMT 6110 · **Problem Set 1**
**User sentence:** A SME grant applicant opens this screen to figure out the priority of the grants she/he likes to apply for based on the 1) match score and 2) gaps to fill suggested on the screen, and knows it worked when they re-sort the priority by clicking the arrows Up and down and the green banner shows "Priority Saved". They don't write anything new.

**Live link:** [your Vercel production URL, the short one, tested in a private window]

---
## Prompt 1 - the master prompt 
**ROLE:** You are a senior front-end developer building a React web app.

**GOAL:** Build the front end of GrantMatch to be viewed on a phone app, a product for SG SME owners who have already general project ideas and want to know which government grant fits closest. 

A SME grant applicant opens this screen to figure out the priority of the grants she/he likes to apply for based on the 1) match score and 2) gaps to fill suggested on the screen, and knows it worked when they re-sort the priority by clicking the arrows Up and down in the mid of each card and the green banner shows "Priority Saved". They don't write anything new.

[screen]: On top of the screen there's a green banner with text "First sort by arrow up or down, then Click Save" . Below the banner shows 3 invented project descriptions as cards. In the Upper center of each card , there's large up and down arrows for SME applicants to sort priority. Each card shows a matched grant from a  list below, a match % badge, gaps to fill as suggested by AI, and a colour shade (green=high, amber=medium, red=low). After he resorts priority and clicks save, the green banner turns to "Priority Saved".

The list of government grants as follows in their full name  , in short by initials -- PSG , MRA, GIA, Startup SG founder grant, Startup SG Tech, ADS, SFEC, EEG, REG(E).  The suggestion on the screen can only come from this list and should not be an invented name. 

List of Grant (full name)

|                                                  |
| ------------------------------------------------ |
| Productivity Solutions Grant (PSG)               |
| Market Readiness Assistance (MRA)                |
| Global Innovation Alliance (GIA) Programmes      |
| Startup SG Founder Grant                         |
| Startup SG Tech                                  |
| Advanced Digital Solutions (ADS)                 |
|                                                  |
| SkillsFuture Enterprise Credit (SFEC)            |
| Energy Efficiency Grant (EEG)                    |
| Resource Efficiency Grant for Emissions (REG(E)) |


**OUTPUT:** A running app. Keep every invented value in ONE data file of its own, with at least 3 rows, so the screen looks real. One component per screen or section. Move between screens without reloading the page. Readable on a phone at arm's length. When you are done, list the files you created and what each one holds.

**GUARDRAILS:** Screens and invented data (except for that Grant list) only. Do NOT call the Gemini API or any other model. Do NOT call any outside service or fetch from any URL. No database,no login, no user accounts, no analytics. No features I did not list. No real company's name, logo, or trademark. Invented names and numbers only, nothin confidential.

**CONTEXT:** Individual Problem Set 1 for MGMT 6110 Human-AI Collaboration at SMU.Built in Google AI Studio, shared as a link, and opened on a phone by classmatesin Week 3. I am not a programmer: when you make a choice I did not specify, say so in one line rather than burying it.

**What came back:** A running app, 7 files, preview loaded. It also added a
settings page I never asked for.
**What I changed next and why:** Added "no settings page" to the Guardrails, because
a missing guardrail is why it appeared.

---

## Prompt 2 - fix the empty state
```
When the list has no rows, show "Nothing due today" instead of an empty table.
Change nothing else.
```
**What came back:** Correct, one file touched.
**What I changed next and why:** Nothing. Moved to the next item on the Goal list.

---

## Prompt 3 - [and so on, one entry per prompt, in order]
