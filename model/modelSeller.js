import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
        lastname: { type: String, required: true },
        name: { type: String, required: true },
        address: { type: String, required: true },
        postcode: { type: String, required: true },
        city: { type: String, required: true },
        province: { type: String, required: true },
        country: { type: String, required: true },
        phone: { type: String},
        cellphone: { type: String, required: true },
        email: { type: String}
    });
    
const Seller = mongoose.model("Seller", sellerSchema);

export default Seller;