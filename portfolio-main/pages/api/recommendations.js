// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Alan Grissette',
    image: "images/alan.jpg",
    designation: 'Aspiring Coding Superstar',
    view: "If anyone ever hires me, I guarantee you'll wonder how you ever managed without me! My ability to turn caffeine into code is unparalleled. While I may not have the reviews yet, my commitment to excellence and knack for solving problems will leave you amazed. Trust me, I’m just one project away from being a household name in tech! 🚀",
    linkednURL: "https://www.linkedin.com/in/alangrissette/"
  },
  {
    id: 1,
    name: 'Naomi Downing',
    image: "images/naomi.PNG", // Replace with the correct image path if needed
    designation: 'Software Engineer from Hong Kong',
    view: "Working with Alan has been an absolute delight! His passion for coding is infectious, and his problem-solving skills are top-notch. Not only is he a superb coder, but he also brings a fun energy to the team that makes every project enjoyable. If you want someone who combines talent with a great sense of humor, Alan is your guy! 🎉",
    linkednURL: "https://www.linkedin.com/in/naomi-downing/"
  },
  {
    id: 2,
    name: 'Haya Almajali',
    image: "images/Halmajali.PNG", // Replace with the correct image path if needed
    designation: 'Data Scientist from Jordan',
    view: "Alan is one of those rare talents who makes coding look easy! His technical skills are impressive, but what really sets him apart is his friendly demeanor and willingness to help others. He's not just a superb coder; he’s a fantastic friend who makes every team project a breeze. I always look forward to collaborating with him! 🌟",
    linkednURL: " https://www.linkedin.com/in/hayamaj/"
  }
];



export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
