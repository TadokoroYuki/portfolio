// The same evidence IDs and status are used by both language versions.
export const skillMapUpdatedOn = '2026-11-25';
export const apiDesignRoadmapUrl = 'https://roadmap.sh/api-design';

type SkillMapEntry =
  | {
      id: string;
      status: 'publicWork';
      proof: { href: `https://github.com/${string}`; mergedOn: string };
    }
  | { id: string; status: 'nextCheck' | 'notAssessed'; proof?: never };

export const apiDesignSkills = [
  {
    id: 'documentingApis',
    status: 'publicWork',
    proof: {
      href: 'https://github.com/TadokoroYuki/konbini-navi/pull/135',
      mergedOn: '2026-03-21',
    },
  },
  { id: 'requestValidation', status: 'nextCheck' },
  { id: 'httpContracts', status: 'notAssessed' },
  { id: 'pagination', status: 'notAssessed' },
] as const satisfies readonly SkillMapEntry[];

export type ApiDesignSkill = (typeof apiDesignSkills)[number];
