const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled full stack developer with experience in building robust web applications. Proficient in C#, JavaScript, and frameworks like ASP.NET and Blazor, I can create dynamic and efficient web solutions tailored to meet unique client requirements. My work includes implementing secure payment processing, user authentication, and API integration.',
    },
    {
        id: 1,
        title: 'Game Development',
        desc: 'With a background in teaching Unity programming and game development, I have guided students in creating engaging video games. I utilize C# for scripting and have experience with animations, projectiles, and sound effects to enhance gameplay experiences.',
    },
    {
        id: 2,
        title: 'UI/UX Design',
        desc: 'I am proficient in using design tools like Adobe XD and Bootstrap to create user-friendly interfaces. My design experience includes developing functional elements such as star rating systems and comment sections, ensuring intuitive user interactions.',
    },
    {
        id: 3,
        title: 'Version Control with GitHub',
        desc: "I leverage GitHub for version control and collaboration on projects. Its features, like pull requests and issue tracking, help maintain code quality and facilitate effective teamwork throughout the development process.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "I actively contribute to open source projects, which enhances my coding skills and allows me to engage with the developer community. This involvement keeps me updated on best practices and new technologies in the field.",
    },
];

export default function handler(req, res) {
    res.status(200).json(expertise)
}
