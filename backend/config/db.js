import mongoose from "mongoose";
const url =process.env.MONGODB || "";
export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://gpnbinuwara:8ynPyyoZ690poSjn@cluster0.cx68e.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
