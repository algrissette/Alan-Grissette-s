const portfolio = [
    {
        id: 0,
        projectName: "The Grape Vine",
        url: "https://uvavine.com",
        image: "/projects/thegrapevine.PNG",
        projectDetail: "Developed a dynamic, scalable social media blogging platform, architecting front-end and back-end systems with a modular, component-based architecture. Engineered real-time user interaction, implementing OAuth 2.0 authentication via Google, profile customization, and an intuitive dashboard with CRUD operations, enabling users to manage 100+ blogs per account. Integrated an event-driven notification system processing 1,000 interactions daily, leveraging asynchronous processing and WebSockets to deliver low-latency. Designed a mobile-first, visually immersive UI using responsive design principles and adaptive rendering, integrating dynamic animations while utilizing NoSQL databases for efficient data handling and scalability.",
        technologiesUsed: [
            { tech: "MongoDB" },
            { tech: "Express.js" },
            { tech: "React" },
            { tech: "Node.js" },
            { tech: "OAuth 2.0" },
            { tech: "WebSockets" },
            { tech: "NoSQL" },
            { tech: "Responsive Design" },
        ]
    },
    {
        id: 1,
        projectName: "PET MATE",
        url: "https://github.com/algrissette/Pet-Mate",
        image: "/projects/Chat Page.png",
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
        id: 2,
        projectName: "Algebraic Equation Interpreter",
        url: "https://github.com/algrissette/AlgebraInterpreter",
        image: "/projects/interp.png",
        projectDetail: "This project involves creating a calculator capable of solving algebraic equations by parsing and evaluating input text. The interpreter follows PEMDAS rules and allows users to define functions using OCaml syntax.",
        technologiesUsed: [
            { tech: "OCaml" },
        ]
    },
    {
        id: 3,
        projectName: "AI-Powered Chess Game",
        url: "https://github.com/algrissette/ChessGame",
        image: "/projects/Chess.png",
        projectDetail: "Developed a chess game featuring an AI opponent that utilizes advanced search algorithms like Minimax and Alpha-Beta pruning. The game allows players to choose AI difficulty and enhances the gameplay experience through well-designed game boards and animations.",
        technologiesUsed: [
            { tech: "Java" },
            { tech: "XML" },
            { tech: "Sepia Framework" }
        ]
    },
    {
        id: 4,
        projectName: "Map-Reduce",
        url: "https://github.com/algrissette/Map-Reduce",
        image: "/projects/map-reduce.png",
        projectDetail: "Implemented a Map-Reduce framework to process large datasets efficiently, leveraging distributed computing principles to improve performance and scalability.",
        technologiesUsed: [
            { tech: "Java" },
            { tech: "Hadoop" },
        ]
    },
    {
        id: 5,
        projectName: "OCaml Stack Interpreter",
        url: "https://github.com/algrissette/OCaml-Stack-Interpreter",
        image: "/projects/stack-interpreter.png",
        projectDetail: "Created a stack-based interpreter in OCaml that can parse and evaluate expressions, supporting various data types and operations for educational purposes.",
        technologiesUsed: [
            { tech: "OCaml" },
        ]
    },
    {
        id: 6,
        projectName: "Q-Learning Combat Agent",
        url: "https://github.com/algrissette/Q-Learning-Combat-Agent",
        image: "/projects/q-learning.png",
        projectDetail: "Developed an AI agent using Q-learning algorithms to make strategic decisions in a combat simulation environment, showcasing reinforcement learning principles.",
        technologiesUsed: [
            { tech: "Python" },
            { tech: "NumPy" },
        ]
    },
    {
        id: 7,
        projectName: "Wordle",
        url: "https://github.com/algrissette/Wordle",
        image: "/projects/wordle.png",
        projectDetail: "A fun word-guessing game inspired by Wordle, featuring a sleek UI and logic to provide feedback on user guesses.",
        technologiesUsed: [
            { tech: "JavaScript" },
            { tech: "HTML" },
            { tech: "CSS" },
        ]
    },
    {
        id: 8,
        projectName: "Alan Grissette Portfolio",
        url: "https://github.com/algrissette/Alan-Grissette-s",
        image: "/projects/portfolio.png",
        projectDetail: "My personal portfolio showcasing projects, skills, and experience, designed to highlight my journey as a developer.",
        technologiesUsed: [
            { tech: "HTML" },
            { tech: "CSS" },
            { tech: "JavaScript" },
        ]
    },
    {
        id: 9,
        projectName: "Astar Hill Climbing",
        url: "https://github.com/algrissette/Astar-Hill-Climbing",
        image: "/projects/astar.png",
        projectDetail: "Implemented the A* algorithm for pathfinding, showcasing hill climbing techniques to optimize routes in a grid-based environment.",
        technologiesUsed: [
            { tech: "Python" },
            { tech: "Pygame" },
        ]
    },
    {
        id: 10,
        projectName: "C Calculator",
        url: "https://github.com/algrissette/C-Calculator",
        image: "/projects/calculator.png",
        projectDetail: "A simple command-line calculator built in C, capable of handling basic arithmetic operations and parsing user input.",
        technologiesUsed: [
            { tech: "C" },
        ]
    },
    {
        id: 11,
        projectName: "Uno",
        url: "https://github.com/algrissette/Uno",
        image: "/projects/uno.png",
        projectDetail: "Developed a digital version of the classic card game Uno, allowing users to play online with friends.",
        technologiesUsed: [
            { tech: "Java" },
            { tech: "JavaFX" },
        ]
    },
    {
        id: 12,
        projectName: "AI Connect Four",
        url: "https://github.com/algrissette/AI-Connect-Four",
        image: "/projects/connect-four.png",
        projectDetail: "Created an AI-powered version of Connect Four, implementing algorithms to make strategic moves against human players.",
        technologiesUsed: [
            { tech: "Python" },
            { tech: "Pygame" },
        ]
    },
];

export default function handler(req, res) {
    res.status(200).json(portfolio);
}
