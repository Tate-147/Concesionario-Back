import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastname: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String },
    postcode: { type: String },
    city: { type: String },
    province: { type: String },
    country: { type: String },
    phone: { type: String},
    cellphone: { type: String },
    email: { type: String, required: true }
})

export const User = mongoose.model("User", userSchema);