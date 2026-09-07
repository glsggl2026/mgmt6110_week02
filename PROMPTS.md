**ROLE:** You are a senior front-end developer building a React web app.

**GOAL:**

Build the front end of GrantMatch, a web product for SG SME owners who have already general project ideas and want to know which government grant fits closest. Their job on this product is to figure out which 
grant(s) to apply for first, not to write anything new.

1) [screen] shows 3 invented project descriptions as cards, each showing a matched grant from a  list below, a match % badge, and a colour shade (green=high, amber=medium, red=low);

The list of government grants as follows in their full name  , in short by initials -- PSG , MRA, GIA, Startup SG founder grant, Startup SG Tech, ADS, SFEC, EEG, REG(E).  The suggestion on the screen can only come from this list and not an invented name. 

user drags cards into priority order; it worked when the final order is saved, each card shows its rank number (1, 2, 3), and the frame around all 3 cards flashes green exactly once for half a second then settles into a solid thin green border]

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


----------

**OUTPUT**: A running app. Keep every invented value in ONE data file of its own, with

at least 3 rows, so the screen looks real. One component per screen or section.

Move between screens without reloading the page. Readable on a phone at arm's

length. When you are done, list the files you created and what each one holds.

**GUARDRAILS**: Screens and invented data (except for that Grant list) only. Do NOT call the Gemini API or any

other model. Do NOT call any outside service or fetch from any URL. No database,

no login, no user accounts, no analytics. No features I did not list. No real

company's name, logo, or trademark. Invented names and numbers only, nothing

confidential.

**CONTEXT**: Individual Problem Set 1 for MGMT 6110 Human-AI Collaboration at SMU.

Built in Google AI Studio, shared as a link, and opened on a phone by classmates

in Week 3. I am not a programmer: when you make a choice I did not specify, say

so in one line rather than burying it.
