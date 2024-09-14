import restaurantModel from  '../models/restaurantModel.js'

export const addRestaurant = async (req, res) => {
    try {
        const { name, location,email,phone ,description } = req.body;
   
   let image_filename = `${req.file.filename}`

        const newRestaurant = new restaurantModel({
            name:name,
            location:location,
            phone:phone,
            email:email,
            image:image_filename,
            description:description,
        });
        console.log(newRestaurant)
        await newRestaurant.save();
        res.status(201).json({ message: 'Restaurant added successfully', restaurant: newRestaurant });
    } catch (error) {
        res.status(500).json({ message: 'Error adding restaurant', error });
    }
};


export const list =async (req,res)=>{
    try{
        const restaurants = await restaurantModel.find({})
        res.json({ success: true, data: restaurants })
    }catch(error){
        res.status(500).json({ message: 'Error  restaurant', error });
    }
}