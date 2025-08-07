import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
    {
        degree: 'Bachelor of Science',
        description: 'Computer Science and Mathematics',
        location: 'Philadelphia, PA',
        logo: Assets.UPenn,
        name: 'Undergraduate Education',
        organization: 'University of Pennsylvania',
        period: { from: new Date(2024, 8), to: new Date(2028, 5) },
        shortDescription: 'Computer Science and Mathematics',
        slug: 'undergrad',
        subjects: ['Discrete mathematics', 'OCaml', 'Multivariable Calculus', 'Data Structures and Algorithms', 'Automata, Complexity, and Computability', 'Linear Algebra and Differential Equations']
    }
];

export const title = 'Education';