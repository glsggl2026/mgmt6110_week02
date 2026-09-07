import { GrantMatchProject, SGGrant } from '../types';

/**
 * All government grants as specified strictly in the requirements.
 * Suggestions on the screen can only come from this list and not an invented name.
 */
export const OFFICIAL_SG_GRANTS: SGGrant[] = [
  {
    fullName: 'Productivity Solutions Grant (PSG)',
    shortCode: 'PSG',
    agency: 'Enterprise Singapore & IMDA',
    scopeSummary: 'Supports companies keen on adopting pre-scoped IT solutions and equipment to enhance business productivity and operational automation.',
    typicalSupport: 'Up to 50% funding support for pre-approved sector-specific solutions.'
  },
  {
    fullName: 'Market Readiness Assistance (MRA)',
    shortCode: 'MRA',
    agency: 'Enterprise Singapore',
    scopeSummary: 'Helps Singapore SMEs take their business international through overseas market promotion, overseas business development, and market setup.',
    typicalSupport: 'Up to 50% of eligible costs, capped at S$100,000 per new overseas market.'
  },
  {
    fullName: 'Global Innovation Alliance (GIA) Programmes',
    shortCode: 'GIA',
    agency: 'Enterprise Singapore',
    scopeSummary: 'Connects Singapore enterprises and startups to major global innovation hubs for market access, mentorship, and co-innovation partners.',
    typicalSupport: 'Subsidised participation in international acceleration and co-innovation programmes.'
  },
  {
    fullName: 'Startup SG Founder Grant',
    shortCode: 'Startup SG Founder Grant',
    agency: 'Enterprise Singapore & Accredited Mentor Partners',
    scopeSummary: 'Provides mentorship and startup capital grant to first-time entrepreneurs with innovative business ideas.',
    typicalSupport: 'Up to S$50,000 startup capital grant with matching founder co-investment.'
  },
  {
    fullName: 'Startup SG Tech',
    shortCode: 'Startup SG Tech',
    agency: 'Enterprise Singapore',
    scopeSummary: 'Fast-tracks the development and commercialisation of proprietary, cutting-edge technology innovations through Proof-of-Concept and Proof-of-Value grants.',
    typicalSupport: 'Up to S$250,000 (POC) or S$500,000 (POV) competitive grant based on milestones.'
  },
  {
    fullName: 'Advanced Digital Solutions (ADS)',
    shortCode: 'ADS',
    agency: 'Infocomm Media Development Authority (IMDA)',
    scopeSummary: 'Assists enterprises in deepening digital capabilities through advanced, integrated solutions such as artificial intelligence, robotics, and cloud ERP.',
    typicalSupport: 'Up to 70% funding support for advanced digital capabilities implementation.'
  },
  {
    fullName: 'SkillsFuture Enterprise Credit (SFEC)',
    shortCode: 'SFEC',
    agency: 'SkillsFuture Singapore & Enterprise Singapore',
    scopeSummary: 'Encourages employers to invest in enterprise transformation and capabilities of their local workforce alongside supported programmes.',
    typicalSupport: 'One-off S$10,000 credit covering up to 90% of out-of-pocket expenses.'
  },
  {
    fullName: 'Energy Efficiency Grant (EEG)',
    shortCode: 'EEG',
    agency: 'Enterprise Singapore, NEA & PUB',
    scopeSummary: 'Supports businesses in manufacturing, food services, and retail sectors to invest in pre-approved energy-efficient industrial equipment.',
    typicalSupport: 'Up to 70% support for pre-approved energy-efficient machinery.'
  },
  {
    fullName: 'Resource Efficiency Grant for Emissions (REG(E))',
    shortCode: 'REG(E)',
    agency: 'Economic Development Board (EDB)',
    scopeSummary: 'Supports manufacturing facilities and data centres keen on implementing carbon emissions reduction and energy efficiency improvement projects.',
    typicalSupport: 'Grant support tiered according to carbon abatement achieved.'
  }
];

/**
 * 3 Invented SME Project Descriptions (kept in this single data file)
 * Each row includes:
 * - Invented project description
 * - Matched grant strictly from the official list
 * - Match percentage
 * - Color shade: green = high, amber = medium, red = low
 */
export const INVENTED_PROJECTS: GrantMatchProject[] = [
  {
    id: 'proj-psg-01',
    title: 'Cloud POS & Automated Inventory Replenishment',
    smeProfile: 'Bistro Group (4 Central F&B Outlets)',
    description: 'Adoption of pre-scoped cloud POS hardware terminals, kitchen display monitors, and automated central inventory sync to eliminate paper order chits and curb daily ingredient wastage across branches.',
    matchedGrant: 'Productivity Solutions Grant (PSG)',
    grantShort: 'PSG',
    matchPercentage: 92,
    matchLevel: 'high',
    grantCoverage: 'Up to 50% funding support for adoption of pre-scoped commercial IT solutions and automation equipment.',
    keyDeliverable: 'Turnkey POS deployment with vendor invoice digitisation and real-time stock deductions.'
  },
  {
    id: 'proj-mra-02',
    title: 'Regional Market Distributor Network & Overseas IP Filing',
    smeProfile: 'Heritage Foodcraft (Local FMCG Manufacturer)',
    description: 'Overseas market expansion into Jakarta and Bangkok, engaging licensed local trade advisory consultants for distributor scouting, conducting in-store product samplings, and registering regional trademarks.',
    matchedGrant: 'Market Readiness Assistance (MRA)',
    grantShort: 'MRA',
    matchPercentage: 74,
    matchLevel: 'medium',
    grantCoverage: 'Up to 50% support of eligible overseas expansion expenses, capped at S$100,000 per target market.',
    keyDeliverable: 'Signed agreements with two verified in-market distributors and successful overseas trademark filings.'
  },
  {
    id: 'proj-tech-03',
    title: 'Proprietary Industrial IoT Optical Sensor Validation',
    smeProfile: 'Apex MicroSensors (Hardware Prototyping Lab)',
    description: 'In-house laboratory engineering of custom optical micro-sensors for high-heat manufacturing lines, conducting pilot stress testing, and pursuing formal commercial proof-of-concept certification.',
    matchedGrant: 'Startup SG Tech',
    grantShort: 'Startup SG Tech',
    matchPercentage: 46,
    matchLevel: 'low',
    grantCoverage: 'Competitive proof-of-concept milestone grant for novel deep-tech intellectual property development.',
    keyDeliverable: 'Calibrated laboratory sensor bench and third-party engineering stress-test validation dossier.'
  }
];
