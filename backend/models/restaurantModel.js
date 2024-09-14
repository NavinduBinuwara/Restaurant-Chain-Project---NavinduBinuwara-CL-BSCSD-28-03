
import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
     phone: { type: String, required: true },
    email: { type: String },
    image: { type: String },
    description: { type: String }
});

const restaurantModel = mongoose.models.restaurant || mongoose.model("Restaurant", restaurantSchema);
export default restaurantModel;
