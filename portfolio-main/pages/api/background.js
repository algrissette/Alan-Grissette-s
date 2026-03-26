const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Academy @ Palumbo',
                degree: 'General High School Education',
                detail: 'High School Diploma',
                year: '2016-2020'
            },
            {
                id: 1,
                title: 'Boston University',
                degree: 'BA in Computer Science',
                detail: 'Completed Computer Science courses with electives specializing in AI and Software Engineering',
                year: '2020-2024'
            },
        ]
    },
    {
        expCards: [
            {
                id: 0,
                title: 'Independent Full Stack Developer / Contractor',
                role: 'Web Developer',
                url: '#',
                desc: 'Designed and deployed full-stack web applications using Next.js, MVC architecture, RESTful APIs, and SQL. Dockerized and deployed to Oracle Cloud Infrastructure, reducing hosting costs for clients by 50%.',
                year: 'Oct 2025 - Present',
                location: 'Philadelphia, PA'
            },
            {
                id: 1,
                title: 'PHLASK.ME',
                role: 'Volunteer Supabase Backend Developer',
                url: 'https://phlask.me',
                desc: 'Volunteer software engineer helping make Philadelphia city resources more accessible. Maintaining and developing the Supabase backend to support the platform.',
                year: '2024 - Present',
                location: 'Philadelphia, PA'
            },
            {
                id: 2,
                title: 'Black Rocket Productions',
                role: 'Game Development Lead Instructor',
                url: '#',
                desc: 'Taught game design principles, scripting, and C# to youth using Unity. Achieved 100% course completion rate and reduced repeat support requests by 30% through clear documentation.',
                year: 'May 2023 - Jan 2024',
                location: 'Freehold, NJ'
            },
            {
                id: 3,
                title: 'Icebox Catering',
                role: 'Caterer',
                url: '#',
                desc: 'Managed catering operations across events in a seasonal capacity over three years.',
                year: 'Oct 2021 - Jan 2025',
                location: 'Boston, MA'
            },
            {
                id: 4,
                title: 'Starbucks',
                role: 'Barista',
                url: '#',
                desc: 'Prepared beverages and provided customer service in a high-volume environment.',
                year: 'Jul 2022 - Jun 2023',
                location: 'Boston, MA'
            },
            {
                id: 5,
                title: 'Taller Puertorriqueño',
                role: 'Camp Counselor & Book Store Clerk',
                url: '#',
                desc: 'Facilitated summer camp activities and managed a gift shop celebrating Latinx culture. Handled inventory using Square, organized 200+ items, and provided customer service.',
                year: 'May 2019 - Aug 2019',
                location: 'Philadelphia, PA'
            },
            {
                id: 6,
                title: 'Levain Bakery',
                role: 'Baker and Sales Associate',
                url: '#',
                desc: 'Managed high-volume production workflows and implemented organized inventory systems to support smooth operations during peak demand.',
                year: 'Apr 2024 - Present',
                location: 'Philadelphia, PA'
            },
        ]
    },
    {
        volunteerCards: [
            {
                id: 0,
                title: 'Free Library of Philadelphia',
                role: 'Summer Helper',
                desc: 'Volunteered in the children\'s section supporting library programs and activities.',
                year: 'May 2019 - Sep 2019',
                location: 'Philadelphia, PA'
            },
            {
                id: 1,
                title: "The Children's Village",
                role: 'Childcare Worker',
                desc: 'Provided childcare support over a year and a half working with youth.',
                year: 'May 2019 - Sep 2020',
                location: 'Philadelphia, PA'
            },
        ]
    }
]

export default function handler(req, res) {
    res.status(200).json(background)
}