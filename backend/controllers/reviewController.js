import reviewModel from "../models/reviewModel.js";


// all review list
const listReview = async (req, res) => {
    try {
        const reviews = await reviewModel.find({})
        res.json({ success: true, data: reviews })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add review
const addReview = async (req, res) => {

    try {
       
            console.log(req.body)
        const review = new reviewModel({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            message: req.body.message,
           
        })

        await review.save();
        res.json({ success: true, message: "message sent" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}


export { listReview, addReview }