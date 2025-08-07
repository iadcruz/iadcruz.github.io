import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
   {
       slug: 'rgncm',
       company: 'Hedge Fund',
       description: 'Developed scalable Python tools to compile, process, and analyze futures trading volume data for quantitative analysis \n• Leveraged Refinitiv/LSEG API to access and model real-time futures market data, supporting intraday pattern analysis \n• Optimized data retrieval by >90% via persistent DuckDB integration, reducing query latency for real-time analytics \n• Developed custom pattern analysis functions using C++ to analyze price positioning relative to intraday ranges and autocorrelation using the Hurst exponent',
       contract: ContractType.Internship,
       type: 'Software Development',
       location: 'New York, New York',
       period: { from: new Date(2025, 5), to: new Date(2025, 8) },
       skills: getSkills('python', 'pandas'),
       name: 'Software Engineering Intern',
       color: 'red',
       links: [],
       logo: Assets.RGNCM,
       shortDescription: 'Developed scalable Python tools to compile, process, and analyze futures trading volume data for quantitative analysis \n• Leveraged Refinitiv/LSEG API to access and model real-time futures market data, supporting intraday pattern analysis \n• Optimized data retrieval by >90% via persistent DuckDB integration, reducing query latency for real-time analytics \n• Developed custom pattern analysis functions using C++ to analyze price positioning relative to intraday ranges and autocorrelation using the Hurst exponent'
   },
   {
       slug: 'research',
       company: 'UPenn Perelman School of Medicine',
       description: 'Analyzing longitudinal fracture data from the MrOS cohort to develop clinical risk prediction models \n• Cleaning demographic, clinical, and fracture history features from 5000+ patient records with Pandas \n• Training Gradient Boosted Decision Tree models in Python to estimate individualized fracture risk for potential integration into a digital health tool',
       contract: ContractType.Internship,
       type: 'Software Development',
       location: 'Philadelphia, Pennsylvania',
       period: { from: new Date(2025, 3) },
       skills: getSkills('python', 'pandas'),
       name: 'Undergraduate Research Intern',
       color: 'red',
       links: [],
       logo: Assets.UPenn,
       shortDescription: 'Analyzing longitudinal fracture data from the MrOS cohort to develop clinical risk prediction models \n• Cleaning demographic, clinical, and fracture history features from 5000+ patient records with Pandas \n• Training Gradient Boosted Decision Tree models in Python to estimate individualized fracture risk for potential integration into a digital health tool'
   },
   {
       slug: 'universitycityacademy',
       company: 'UPenn Perelman School of Medicine',
       description: 'Building a full-stack app for MCAT preparation and study materials using Next.js \n• Implementing secure user authentication using NextAuth.js and PostgreSQL for database storage \n• Developing a responsive UI using TypeScript and React to ensure accessibility across devices',
       contract: ContractType.Internship,
       type: 'Software Development',
       location: 'Philadelphia, Pennsylvania',
       period: { from: new Date(2025, 6) },
       skills: getSkills('js', 'ts', 'nextjs', 'postgresql', 'tailwind', 'react', 'css', 'html', 'nodejs', 'prisma'),
       name: 'Software Developer Intern',
       color: 'red',
       links: [],
       logo: Assets.UPenn,
       shortDescription: 'Building a full-stack app for MCAT preparation and study materials using Next.js \n• Implementing secure user authentication using NextAuth.js and PostgreSQL for database storage \n• Developing a responsive UI using TypeScript and React to ensure accessibility across devices'
   },
   {
       slug: 'ta',
       company: 'Penn Engineering',
       description: 'Support 150+ students in a rigorous proof and Java programming based course covering data structures and algorithms \n• Hold weekly office hours to assist students with debugging, algorithm design, and code comprehension \n• Lead weekly recitation of 20+ students and complete weekly grading of written and programming assignments \n• Contribute to curriculum development through committee work to improve course content and logistics',
       contract: ContractType.PartTime,
       type: 'Software Development',
       location: 'Home',
       period: { from: new Date(2025, 5) },
       skills: getSkills('java'),
       name: 'Undergraduate Teaching Assistant',
       color: 'red',
       links: [],
       logo: Assets.UPenn,
       shortDescription: 'Support 150+ students in a rigorous proof and Java programming based course covering data structures and algorithms \n• Hold weekly office hours to assist students with debugging, algorithm design, and code comprehension \n• Lead weekly recitation of 20+ students and complete weekly grading of written and programming assignments \n• Contribute to curriculum development through committee work to improve course content and logistics'
   }
];

export const title = 'Experience';