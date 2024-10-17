import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Isaac';
export const lastName = 'Dcruz';

export const description =
  'A CS + Math major at UPenn looking to gain experience in software development';

export const links: Array<{ platform: Platform; link: string }> = [
  { platform: Platform.GitHub, link: 'https://github.com/iadcruz' },
  {
      platform: Platform.Linkedin,
      link: 'https://www.linkedin.com/in/isaac-dcruz'
  },
  {
      platform: Platform.Email,
      link: 'iadcruzsa21@gmail.com'
  },
];

export const skills = getSkills('js', 'css', 'html', 'nodejs', 'python', 'java', 'mongodb', 'expressjs', 'pandas', 'numpy');