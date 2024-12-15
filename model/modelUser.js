import req from "express/lib/request";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastname: { type: String, required: true },
    name: { type: String, required: true },
    birthdate: { type: Date, required: true },
    addressname: { type: String },
    addressnumber: { type: Number },
    postcode: { type: Number },
    city: { type: String },
    province: { type: String },
    country: { type: String },
    phone: { type: Number},
    cellphone: { type: Number, required: true },
    email: { type: String, required: true }
})

export const User = mongoose.model("User", userSchema);