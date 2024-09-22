const review = [
   {
    id: 5,
    clientName: 'Alan Grissette',
    clientLocation: 'N/A',
    clientSource: 'Imaginary',
    clientReview: "As a self-proclaimed coding wizard, I can confidently say that if anyone actually hired me, they’d be in for a treat! My dedication to turning coffee into code is unmatched. Just wait until you see the magic I can create—once I get those reviews rolling in!"
}

]
export default function handler(req, res) {
    res.status(200).json(review)
}
