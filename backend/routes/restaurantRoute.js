import express from 'express';
import { list ,addRestaurant,} from '../controllers/restaurantController.js';
import { makeFoodAvailableAtRestaurant ,getAvailableFoodForRestaurant} from '../controllers/foodController.js';
import multer from 'multer';
const restaurantRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

restaurantRouter.get("/list",list);
restaurantRouter.post("/availability",makeFoodAvailableAtRestaurant);
restaurantRouter.get("/available/:restaurantId",getAvailableFoodForRestaurant);
restaurantRouter.post("/add",upload.single('image'),addRestaurant);


export default restaurantRouter;

