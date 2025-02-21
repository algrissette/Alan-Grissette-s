const portfolio = [
    {
        id: 0,
        projectName: "PET MATE",
        url: "https://github.com/algrissette/PetMate",
        image: "projects/Chat Page.png", // Replace with the correct image path if needed
        projectDetail: "PetMate is a comprehensive web application that allows users to list and rent pets. The platform features user profiles, messaging, and a commenting system to facilitate interactions. With secure payment processing and geolocation capabilities, PetMate enhances the pet rental experience.",
        technologiesUsed: [
            { tech: "C#" },
            { tech: "ASP.NET" },
            { tech: "Blazor/Razor Pages" },
            { tech: "JavaScript" },
            { tech: "MongoDB" },
            { tech: "CSS/Bootstrap" },
            { tech: "AWS" },
        ]
    },
    {
        id: 1,
        projectName: "Algebraic Equation Interpreter",
        url: "https://github.com/algrissette/AlgebraInterpreter",
        image: "projects/interp.png",
        projectDetail: "This project involves creating a calculator capable of solving algebraic equations by parsing and evaluating input text. The interpreter follows PEMDAS rules and allows users to define functions using OCaml syntax.",
        technologiesUsed: [
            { tech: "OCaml" },
        ]
    },
    {
        id: 2,
        projectName: "AI-Powered Chess Game",
        url: "https://github.com/algrissette/ChessGame",
        image: "projects/Chess.png",
        projectDetail: "Developed a chess game featuring an AI opponent that utilizes advanced search algorithms like Minimax and Alpha-Beta pruning. The game allows players to choose AI difficulty and enhances the gameplay experience through well-designed game boards and animations.",
        technologiesUsed: [
            { tech: "Java" },
            { tech: "XML" },
            { tech: "Sepia Framework" }
        ]
    },
    {
        id: 3,
        projectName: "Map-Reduce",
        url: "https://github.com/algrissette/Map-Reduce",
        image: "projects/map-reduce.png", // Replace with the correct image path if needed
        projectDetail: "Implemented a Map-Reduce framework to process large datasets efficiently, leveraging distributed computing principles to improve performance and scalability.",
        technologiesUsed: [
            { tech: "Java" },
            { tech: "Hadoop" },
        ]
    },
    {
        id: 4,
        projectName: "OCaml Stack Interpreter",
        url: "https://github.com/algrissette/OCaml-Stack-Interpreter",
        image: "projects/stack-interpreter.png", // Replace with the correct image path if needed
        projectDetail: "Created a stack-based interpreter in OCaml that can parse and evaluate expressions, supporting various data types and operations for educational purposes.",
        technologiesUsed: [
            { tech: "OCaml" },
        ]
    },
    {
        id: 5,
        projectName: "Q-Learning Combat Agent",
        url: "https://github.com/algrissette/Q-Learning-Combat-Agent",
        image: "projects/q-learning.png", // Replace with the correct image path if needed
        projectDetail: "Developed an AI agent using Q-learning algorithms to make strategic decisions in a combat simulation environment, showcasing reinforcement learning principles.",
        technologiesUsed: [
            { tech: "Python" },
            { tech: "NumPy" },
        ]
    },
    {
        id: 6,
        projectName: "Wordle",
        url: "https://github.com/algrissette/Wordle",
        image: "projects/wordle.png", // Replace with the correct image path if needed
        projectDetail: "A fun word-guessing game inspired by Wordle, featuring a sleek UI and logic to provide feedback on user guesses.",
        technologiesUsed: [
            { tech: "JavaScript" },
            { tech: "HTML" },
            { tech: "CSS" },
        ]
    },
    {
        id: 7,
        projectName: "Alan Grissette Portfolio",
        url: "https://github.com/algrissette/Alan-Grissette",
        image: "projects/portfolio.png", // Replace with the correct image path if needed
        projectDetail: "My personal portfolio showcasing projects, skills, and experience, designed to highlight my journey as a developer.",
        technologiesUsed: [
            { tech: "HTML" },
            { tech: "CSS" },
            { tech: "JavaScript" },
        ]
    },
    {
        id: 8,
        projectName: "Astar Hill Climbing",
        url: "https://github.com/algrissette/Astar-Hill-Climbing",
        image: "projects/astar.png", // Replace with the correct image path if needed
        projectDetail: "Implemented the A* algorithm for pathfinding, showcasing hill climbing techniques to optimize routes in a grid-based environment.",
        technologiesUsed: [
            { tech: "Python" },
            { tech: "Pygame" },
        ]
    },
    {
        id: 9,
        projectName: "C Calculator",
        url: "https://github.com/algrissette/C-Calculator",
        image: "projects/calculator.png", // Replace with the correct image path if needed
        projectDetail: "A simple command-line calculator built in C, capable of handling basic arithmetic operations and parsing user input.",
        technologiesUsed: [
            { tech: "C" },
        ]
    },
    {
        id: 10,
        projectName: "Uno",
        url: "https://github.com/algrissette/Uno",
        image: "projects/uno.png", // Replace with the correct image path if needed
        projectDetail: "Developed a digital version of the classic card game Uno, allowing users to play online with friends.",
        technologiesUsed: [
            { tech: "Java" },
            { tech: "JavaFX" },
        ]
    },
    {
        id: 11,
        projectName: "AI Connect Four",
        url: "https://github.com/algrissette/AI-Connect-Four",
        image: "projects/connect-four.png", // Replace with the correct image path if needed
        projectDetail: "Created an AI-powered version of Connect Four, implementing algorithms to make strategic moves against human players.",
        technologiesUsed: [
            { tech: "Python" },
            { tech: "Pygame" },
        ]
    },
];

    
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },

export default function handler(req, res) {
    res.status(200).json(portfolio)
}
