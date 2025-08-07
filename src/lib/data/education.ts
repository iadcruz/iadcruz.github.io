import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
    {
        degree: 'B.S. Computer Science and Mathematics',
        description: '',
        location: 'Philadelphia, PA',
        logo: Assets.UPenn,
        name: 'Undergraduate Education',
        organization: 'University of Pennsylvania',
        period: { from: new Date(2024, 8), to: new Date(2028, 5) },
        shortDescription: '',
        slug: 'undergrad',
        subjects: ['Discrete mathematics', 'OCaml', 'Multivariable Calculus', 'Data Structures and Algorithms', 'Theory of Computability', 'Linear Algebra', 'Differential Equations', 'Advanced Algorithms']
    }
];

export const title = 'Education';