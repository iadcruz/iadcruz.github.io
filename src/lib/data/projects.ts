import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';


export const items: Array<Project> = [
   {
       slug: 'kleanzy',
       color: '#5e95e3',
       description:
           'Developed front and back end for a community clean up app using Node.js, MongoDB, mongoose, JavaScript, HTML, and CSS; implemented user login/signup and account information database storage; pitched prototype app to the Congressional App Challenge and was awarded 3rd place by Rep. Jim Himes',
       shortDescription:
           'Developed front and back end for a community clean up app; implemented user login/signup and account information database storage; pitched prototype app to the Congressional App Challenge and was awarded 3rd place by Rep. Jim Himes',
       links: [{ to: 'https://github.com/iadcruz', label: 'GitHub' }],
       logo: Assets.Unknown,
       name: 'Kleanzy',
       period: {
           from: new Date(2023, 7), to: new Date(2023, 8)
       },
       skills: getSkills('js', 'css', 'html', 'mongodb', 'expressjs', 'nodejs'),
       type: 'App'
   },
   {
        slug: 'swipeflix',
        color: '#5e95e3',
        description:
            'Developed a full-stack app that allows users to swipe on movies and tv shows to get personalized recommendations and interact with other users to build their watchlist; implemented user authentication through Clerk, database storage with Postgresql, and responsive UI components with TypeScript, React, ShadCn, and Node.js',
        shortDescription:
            'Developed a full-stack app that allows users to swipe on movies and tv shows to get personalized recommendations and interact with other users to build their watchlist',
        links: [{ to: 'https://github.com/iadcruz/swipeflix', label: 'GitHub'}, { to: 'https://swipeflix.vercel.app', label: 'App' }],
        logo: Assets.Unknown,
        name: 'SwipeFlix',
        period: {
            from: new Date(2025, 1), to: new Date(2025, 1)
        },
        skills: getSkills('js', 'css', 'html', 'ts', 'nodejs', 'react', 'clerk', 'prisma', 'nextjs', 'postgresql', 'tailwind'),
        type: 'App'
    },
   {
       slug: 'double-pendulum',
       color: '#5e95e3',
       description:
           'Created a simulation that models the chaotic motion of a double pendulum under given starting conditions, including initial velocities and positions for each segment of the pendulum; self-studied the fundamentals of chaotic motion and used numpy to model pendulum motion by solving the Lagrangian through Runge-Kutta approximation methods',
       shortDescription:
           'Created a simulation that models the chaotic motion of a double pendulum under given starting conditions, including initial velocities and positions for each segment of the pendulum; self-studied the fundamentals of chaotic motion and used numpy to model pendulum motion by solving the Lagrangian through Runge-Kutta approximation methods',
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
       color: '#5e95e3',
       description:
           'Self-studied fluid dynamics, including concepts like divergence, curl, the Poisson pressure equations, Navier-Stokes equations, etc, as well as CFD and how to implement these physical concepts through code (e.g. Jacobi iteration); used JavaScript, HTML, and CSS to create an Eulerian grid-based fluid dynamics simulation; modeled the relative velocity and pressure fields under varying starting conditions',
       shortDescription:
           'Self-studied fluid dynamics, including concepts like divergence, curl, the Poisson pressure equations, Navier-Stokes equations, etc, as well as CFD and how to implement these physical concepts through code (e.g. Jacobi iteration); used JavaScript, HTML, and CSS to create an Eulerian grid-based fluid dynamics simulation; modeled the relative velocity and pressure fields under varying starting conditions',
       links: [{ to: 'https://github.com/iadcruz', label: 'GitHub' }, { to: 'https://iadcruz.github.io/FluidSim/', label: 'Demo' }],
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
       color: '#5e95e3',
       description:
           'Created a TicTacToe bot playable in the console that evaluates the best move in any position using the Minimax algorithm for game theory',
       shortDescription:
           'Created a TicTacToe bot playable in the console that evaluates the best move in any position using the Minimax algorithm for game theory',
       links: [{ to: 'https://github.com/iadcruz/TicTacToeBot', label: 'GitHub' }],
       logo: Assets.Unknown,
       name: 'TicTacToeBot',
       period: {
           from: new Date(2024, 11), to: new Date(2024, 11)
       },
       skills: getSkills('python'),
       type: 'Bot'
   },
   {
        slug: 'number-converter',
        color: '#5e95e3',
        description:
            'Basic number base converter with stored history and base slider',
        shortDescription:
            'Basic number base converter with stored history and base slider',
        links: [{ to: 'https://github.com/iadcruz/NumberConverter', label: 'Github' }, { to: 'https://iadcruz.github.io/NumberConverter/', label: 'Demo' }],
        logo: Assets.Unknown,
        name: 'NumberConverter',
        period: {
            from: new Date(2022, 11), to: new Date(2022, 11)
        },
        skills: getSkills('js', 'html', 'css'),
        type: 'App'
    },
    {
        slug: '2048',
        color: '#5e95e3',
        description: 'Recreated 2048 tile game with arrow key movement, keyboard shortcuts, score tracking, and saveable game state',
        shortDescription: 'Recreated 2048 tile game with arrow key movement, keyboard shortcuts, score tracking, and saveable game state',
        links: [{ to: 'https://github.com/iadcruz/2048', label: 'Github'}],
        logo: Assets.Unknown,
        name: '2048',
        period: {
            from: new Date(2024, 11), to: new Date(2024, 11)
        },
        skills: getSkills('java', 'swing'),
        type: 'Game'
    },
    {
        slug: 'sudoku-solver',
        color: '#5e95e3',
        description: 'Created a browser-based Sudoku solver using a brute-force DFS algorithm to find a solution to the provided puzzle',
        shortDescription: 'Brute-force algorithm that uses DFS to find a solution to the provided Sudoku puzzle',
        links: [{ to: 'https://github.com/iadcruz/SudokuSolver', label: 'Github'}, { to: 'https://iadcruz.github.io/SudokuSolver/', label: 'Demo'}],
        logo: Assets.Unknown,
        name: 'Sudoku Solver',
        period: {
            from: new Date(2025, 0), to: new Date(2025, 0)
        },
        skills: getSkills('js', 'html', 'css'),
        type: 'App'
    },
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
        slug: 'black-scholes',
        color: '#5e95e3',
        description: 'An interactive options pricing model that utilizes the Black-Scholes equation to output call and put prices, pricing heatmaps, and greeks',
        shortDescription: 'An interactive Black-Scholes options pricing model',
        links: [{ to: 'https://github.com/iadcruz/InteractiveBlackScholesOptionPricing?tab=readme-ov-file', label: 'GitHub' }, { to: 'https://iadcruz-interactiveblackscholesoptionpricing-app-zffkl0.streamlit.app', label: 'Demo' }],
        logo: Assets.Unknown,
        name: 'Black Scholes Option Pricing Model',
        period: {
            from: new Date(2025, 7), to: new Date(2025, 7)
        },
        skills: getSkills('python'),
        type: 'Simulation'
    }
];

export const title = 'Projects';