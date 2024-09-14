import foodModel from "../models/foodModel.js";
import foodAvailabilityModel from "../models/foodAvailabilityModel.js";
import fs from 'fs'
import mongoose from 'mongoose';

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add food
const addFood = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete food
const removeFood = async (req, res) => {
    try {

        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

const makeFoodAvailableAtRestaurant = async (req, res) => {
    try {
        const { foodId, restaurantId, availability } = req.body;

        let availabilityRecord = await foodAvailabilityModel.findOne({ food: foodId, restaurant: restaurantId });
      

        console.log(availability)
        console.log(req.body);
        if (availabilityRecord) {
           
            availabilityRecord.availability = availability !== undefined ? availability : true;
            await availabilityRecord.save();
        } else {
            availabilityRecord = new foodAvailabilityModel({
                food: foodId,
                restaurant: restaurantId,
                availability: availability !== undefined ? availability : true,
            });
         await availabilityRecord.save();
        }

        res.status(201).json({ message: 'Food availability updated successfully', availability: availabilityRecord });
    } catch (error) {
        res.status(500).json({ message: 'Error updating food availability', error });
    }
};

const getAvailableFoodForRestaurant = async (req, res) => {
    try {
        const { restaurantId } = req.params;

        if (!restaurantId) {
            return res.status(400).json({ message: 'Restaurant ID is required' });
        }

        // Check if restaurantId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
            return res.status(400).json({ message: 'Invalid Restaurant ID' });
        }

        const availableFood = await foodAvailabilityModel
            .find({ restaurant: restaurantId, availability: true })
            .populate('food');

        // If no food items are found
        if (availableFood.length === 0) {
            return res.status(404).json({ message: 'No available food found for this restaurant' });
        }

        res.status(200).json({ foodItems: availableFood.map(entry => entry.food)}); 
    } catch (error) {
        console.error(error); // Logging the error for debugging purposes
        res.status(500).json({ message: 'Error fetching available food', error });
    }
};

export { listFood, addFood, removeFood,makeFoodAvailableAtRestaurant,getAvailableFoodForRestaurant }