import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
        id: { type: String, required: true, unique: true },
        brand: { type: String, required: true },
        model: { type: String, required: true },
        color: { type: String, required: true },
        year: { type: Number, required: true },
        description: { type: String, default : "" },
        price: { type: Number,default : 0 },
        urlToImage: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    });
    
const Car = mongoose.model("Car", carSchema);

export default Car;