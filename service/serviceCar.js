import Car from "../model/modelCar.js";
import crypto from "crypto";

export const getCars = async (user, brand, model, minPrice, maxPrice, orderby, order, offset, limit, page) => {
    const filters = {};
    if (user) {
        filters.user = {$regex: user, $options: "i"}
    }
    if (brand) {
        filters.brand = {$regex: brand, $options: "i"}
    }
    if (model) {
        filters.model = {$regex: model, $options: "i"}
    }
    if(minPrice || maxPrice){
        filters.price = {};
        if(minPrice){
            filters.price.$gte = minPrice;
        }
        if(maxPrice){
            filters.price.$lte = maxPrice;
        }
    }
    const sortOptions = {}
    if(orderby){
        sortOptions[orderby]= order === 'desc'?-1:1;
    }  
    const cars = await Car.find(filters).sort(sortOptions).skip(offset).limit(limit);
    const totalCars = await Car.countDocuments(filters);
    const totalPages = Math.ceil(totalCars / limit);
    const pagination = {
        cars: cars,
        currentPage: parseInt(page),
        totalPages: totalPages,
        totalCars: totalCars
    };
    return pagination;
};

export const getCar = async (id) => {
    const car = await Car.findOne({id:id}).populate("user"); // no usamos el findById porque machea con el _id y populate con el user
    return car;
};

export const getCarUser = async (id) => {
    const car = await Car.findOne({id:id}).populate("user");
    return car;
};

export const createCar = async (brand, model, color, year, description, price, urlToImage, user) => {
    const car = {
        id: crypto.randomUUID(),
        brand: brand,
        model: model,
        color: color,
        year: year,
        description: description,
        price: price,
        urlToImage: urlToImage,
        user: user
    };
    const newCar = await Car.create(car);
    return newCar;
};

export const updateCar = async(id, brand, model, color, year, description, price, urlToImage) => {
    const car = await Car.findOneAndUpdate({id:id}, {brand: brand, model: model, color: color, year: year, description: description, price: price, urlToImage: urlToImage});
    return car;
};

export const deleteCar = async (id) => {
    const car = await Car.findOneAndDelete({id:id});
    return car;
};