import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
   {
       slug: 'open',
       company: 'Self-employed',
       description: 'Creating awesome tools for developers.',
       contract: ContractType.SelfEmployed,
       type: 'Software Development',
       location: 'Home',
       period: { from: new Date() },
       skills: getSkills(),
       name: 'Open Source Developer',
       color: 'red',
       links: [],
       logo: Assets.Unknown,
       shortDescription: 'Creating awesome tools for developers.'
   }
];

export const title = 'Experience';