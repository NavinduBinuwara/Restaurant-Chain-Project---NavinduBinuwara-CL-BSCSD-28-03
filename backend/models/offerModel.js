import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
 
})

const offerModel = mongoose.models.offer || mongoose.model("offer", offerSchema);
export default offerModel;