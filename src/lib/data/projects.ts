import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';


export const items: Array<Project> = [
   {
       slug: 'text-gen',
       color: '#5e95e3',
       description:
           'A machine learning model for next word text prediction trained on a political text dataset and converted into a text generator',
       shortDescription:
           'A machine learning model for next word text prediction trained on a political text dataset and converted into a text generator',
       links: [{ to: 'https://github.com/iadcruz', label: 'GitHub' }],
       logo: Assets.Unknown,
       name: 'Text Prediction and Generation',
       period: {
           from: new Date(2024, 8), to: new Date(2024, 8)
       },
       skills: getSkills('python', 'numpy'),
       type: 'Machine Learning'
   },
   {
       slug: 'kleanzy',
       color: '#ff3e00',
       description:
           'Developed front and back end for a community clean up app using Node.js, MongoDB, mongoose, JavaScript, HTML, and CSS; implemented user login/signup and account information database storage; pitched prototype app to the Congressional App Challenge and was awarded 3rd place by Rep. Jim Himes',
       shortDescription:
           'Developed front and back end for a community clean up app',
       links: [{ to: 'https://github.com/iadcruz', label: 'GitHub' }],
       logo: Assets.Unknown,
       name: 'Social Media App Full-Stack Development',
       period: {
           from: new Date(2023, 7), to: new Date(2023, 8)
       },
       skills: getSkills('js', 'css', 'html', 'mongodb', 'expressjs', 'nodejs'),
       type: 'App'
   },
   {
       slug: 'double-pendulum',
       color: '#ff3e00',
       description:
           'Created a simulation that models the chaotic motion of a double pendulum under given starting conditions, including initial velocities and positions for each segment of the pendulum; self-studied the fundamentals of chaotic motion and used numpy to model pendulum motion by solving the Lagrangian through Runge-Kutta approximation methods',
       shortDescription:
           'Created a simulation to model the chaotic motion of a double pendulum',
       links: [{ to: 'https://github.com/iadcruz', label: 'GitHub' }],
       logo: Assets.Unknown,
       name: 'Double Pendulum Simulation',
       period: {
           from: new Date(2023, 6), to: new Date(2023, 6)
       },
       skills: getSkills('python', 'numpy'),
       type: 'Simulation'
   },
   {
       slug: 'fluid-sim',
       color: '#ff3e00',
       description:
           'Self-studied fluid dynamics, including concepts like divergence, curl, the Poisson pressure equations, Navier-Stokes equations, etc, as well as CFD and how to implement these physical concepts through code (e.g. Jacobi iteration); used JavaScript, HTML, and CSS to create an Eulerian grid-based fluid dynamics simulation; modeled the relative velocity and pressure fields under varying starting conditions',
       shortDescription:
           'Created a simulation model for vector field properties of a fluid',
       links: [{ to: 'https://github.com/iadcruz', label: 'GitHub' }],
       logo: Assets.Unknown,
       name: 'Fluid Dynamics Simulation',
       period: {
           from: new Date(2023, 6), to: new Date(2023, 6)
       },
       skills: getSkills('js', 'html', 'css'),
       type: 'Simulation'
   },
   {
       slug: 'tictactoe-bot',
       color: '#ff3e00',
       description:
           'Created a TicTacToe bot that evaluates the best move in any position using the Minimax algorithm for game theory.',
       shortDescription:
           'Created a TicTacToe bot that is playable in the console',
       links: [{ to: 'https://github.com/iadcruz/TicTacToeBot', label: 'GitHub' }],
       logo: Assets.Unknown,
       name: 'TicTacToeBot',
       period: {
           from: new Date(2024, 11), to: new Date(2024, 11)
       },
       skills: getSkills('python'),
       type: 'Bot'
   }
];

export const title = 'Projects';