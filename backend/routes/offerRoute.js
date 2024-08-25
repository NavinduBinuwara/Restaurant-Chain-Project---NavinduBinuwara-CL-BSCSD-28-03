import express from 'express';
import { addOffer, listOffer, removeOffer    } from '../controllers/offerController.js';
import multer from 'multer';
const offerRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

offerRouter.get("/list",listOffer);
offerRouter.post("/add",upload.single('image'),addOffer);
offerRouter.post("/remove",removeOffer);

export default offerRouter;