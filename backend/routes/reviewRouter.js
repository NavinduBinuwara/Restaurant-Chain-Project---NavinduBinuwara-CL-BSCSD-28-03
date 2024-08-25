import express from 'express';
import { addReview, listReview, } from '../controllers/reviewController.js';

const reviewRouter = express.Router();


reviewRouter.get("/list",listReview);
reviewRouter.post("/add",addReview);


export default reviewRouter;