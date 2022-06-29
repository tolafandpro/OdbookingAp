import mongoose from "mongoose";
import Joi from "joi";
// import { number, string } from "joi";


const HotelSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
    },
    type: {
        type: string,
        required: true,
    },
    city: {
        type: string,
        required: true,
    },
    address: {
        type: string,
        required: true,
    },
    distance: {
        type: string,
        required: true,
    },
    photos: {
        type: [string],
    },
    desc: {
        type: string,
        required: true,
    },
    rating: {
        type: number,
    },
    rooms: {
        type: [string],
        required: true,
    },
    cheapestPrice: {
        type: number,
        required: number,
    },
    featured: {
        type: boolean,
        default: false,
    }
});

const Hotel = mongoose.model("Hotel", HotelSchema);

function ValidateHotels(hotel) {
    const schema = {
        name: Joi.string().required(),
        type: Joi.string().required(),
        city: Joi.string().required(),
        address: Joi.string().required(),
        distance: Joi.string().required(),
        photos: Joi.string().required(),
        desc: Joi.string().required(),
        rating: Joi.number().min(0).max(5),
        rooms: Joi.string().required(),
        cheapestPrice: Joi.number().required(),

    }
};

module.exports.Hotel = Hotel;
module.exports.ValidateHotels = ValidateHotels;