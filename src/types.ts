export type MatchLevel = 'high' | 'medium' | 'low';

export interface GrantMatchProject {
  id: string;
  title: string;
  smeProfile: string;
  description: string;
  matchedGrant: string;
  grantShort: string;
  matchPercentage: number;
  matchLevel: MatchLevel;
  grantCoverage: string;
  keyDeliverable: string;
}

export interface SGGrant {
  fullName: string;
  shortCode: string;
  agency: string;
  scopeSummary: string;
  typicalSupport: string;
}

export type ActiveScreen = 'matcher' | 'directory';
