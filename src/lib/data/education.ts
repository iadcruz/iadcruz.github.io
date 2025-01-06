import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
    {
        degree: 'Bachelor of Science in Engineering: Computer Science and Mathematics',
        description: '',
        location: 'Philadelphia, PA',
        logo: Assets.Unknown,
        name: 'Undergraduate Education',
        organization: 'University of Pennsylvania School of Engineering and Applied Science',
        period: { from: new Date(2024, 8), to: new Date(2028, 5) },
        shortDescription: '',
        slug: 'undergrad',
        subjects: ['Discrete mathematics', 'OCaml', 'Multivariable Calculus', 'Data Structures and Algorithms', 'Automata, Complexity, and Computability', 'Linear Algebra and Differential Equations']
    },
   {
       degree: 'High School Diploma',
       description: '',
       location: 'Greenwich, CT',
       logo: Assets.Unknown,
       name: 'High School Education',
       organization: 'Greenwich High School',
       period: { from: new Date(2020, 8), to: new Date(2024, 6) },
       shortDescription: '5.0 GPA, 16 APs, High Honor Roll, AP Scholar with Distinction, National Science Honor Society',
       slug: 'highschool',
       subjects: ['Multivariable Calculus', 'Linear Algebra', 'Differential Equations', 'Mechanics', 'Electricity and Magnetism', 'JavaScript', 'CSS', 'HTML', 'Java', 'Statistics', 'Microeconomics', 'Macroeconomics']
   }
   
];

export const title = 'Education';