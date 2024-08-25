import offerModel from "../models/offerModel.js"
import fs from 'fs'

// all offer list
const listOffer = async (req, res) => {
    try {
        const offer = await offerModel.find({})
        res.json({ success: true, data: offer })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add food
const addOffer = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const offer = new offerModel({
            name: req.body.name,
            image: image_filename,
        })

        await offer.save();
        res.json({ success: true, message: "Offer Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete food
const removeOffer = async (req, res) => {
    try {

        const offer = await offerModel.findById(req.body.id);
        fs.unlink(`uploads/${offer.image}`, () => { })

        await offerModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Offer Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listOffer, addOffer, removeOffer }