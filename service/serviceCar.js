import Car from "../model/modelCar.js";
import crypto from "crypto";

export const getCars = async () => {
    const cars = await Car.find();
    return cars;
};

export const getCar = async (id) => {
    const car = await Car.findOne({id:id}); // no usamos el findById porque machea con el _id
    return car;
};

export const createCar = async (brand, model, color, year, description, price, urlToImage) => {
    const car = {
        id: crypto.randomUUID(),
        brand: brand,
        model: model,
        color: color,
        year: year,
        description: description,
        price: price,
        urlToImage: urlToImage
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