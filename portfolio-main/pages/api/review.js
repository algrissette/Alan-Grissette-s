const review = [
    {
        id: 0,
        clientName: 'Tracy Pendleton',
        clientLocation: 'Philadelphia, PA',
        clientSource: 'Direct',
        clientReview: "Alan really understood the vision for my brand from the jump. The site came out clean, modern, and exactly what I needed. Would definitely work with him again."
    },
    {
        id: 1,
        clientName: 'Alexandra Bradley',
        clientLocation: 'USA',
        clientSource: 'Direct',
        clientReview: "Honestly super impressed with how the site turned out. Alan took my ideas and made them look way better than I imagined. The whole process was smooth and he was really easy to communicate with."
    },
    {
        id: 2,
        clientName: 'Emily Voong',
        clientLocation: 'Philadelphia, PA',
        clientSource: 'Direct',
        clientReview: "Alan built our restaurant site and it genuinely exceeded expectations. It looks great, works perfectly on mobile, and our customers love it. 10/10 would recommend."
    },
]

export default function handler(req, res) {
    res.status(200).json(review)
}