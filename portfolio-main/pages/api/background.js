const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Academy @ Palumbo',
                degree: 'General Grade School Education',
                detail: "High School",
                year: '2016-2020'
            },
            {
                id: 1,
                title: 'Boston University',
                degree: 'BA in Computer Science',
                detail: "Completed Computer Science courses with electives specializing in AI and Software Engineering",
                year: '2020-2024'
            },
           
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'BU University Team Scrum Master',
                role: 'Full Stack Developer',
                url: '#',
                desc: 'Used C# and JavaScript to develop a web  application for pet rental services',
                year: '2024',
                location: 'Boston, Massachusetts'
            },
           
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
