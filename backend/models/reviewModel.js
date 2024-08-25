import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true  },
    number: { type: String, required: true },
    message: { type: String, required: true },
  
})

const reviewModel = mongoose.models.review || mongoose.model("review", reviewSchema);
export default reviewModel;