import mongoose from "mongoose";

const foodAvailabilitySchema = new mongoose.Schema({
    food: { type: mongoose.Schema.Types.ObjectId, ref: 'food', required: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    availability: { type: Boolean, default: true } // Track availability at this specific restaurant
});

const foodAvailabilityModel = mongoose.models.foodAvailability || mongoose.model("FoodAvailability", foodAvailabilitySchema);
export default foodAvailabilityModel;
