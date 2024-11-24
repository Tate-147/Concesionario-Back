import Seller from "../model/modelSeller.js";
import crypto from "crypto";

export const getSellers = async () => {
    const sellers = await Seller.find();
    return sellers;
};

export const getSeller = async (id) => {
    const seller = await Seller.findById(id);
    return seller;
};

export const createSeller = async (lastname, name, address, postcode, city, province, country, phone, cellphone, email) => {
    const seller = {
        lastname: lastname,
        name: name,
        address: address,
        postcode: postcode,
        city: city,
        province: province,
        country: country,
        phone: phone,
        cellphone: cellphone,
        email: email
    };
    const newSeller = await Seller.create(seller);
    return newSeller;
};

export const updateSeller = async(id, lastname, name, address, postcode, city, province, country, phone, cellphone, email) => {
    const seller = await Seller.findByIdAndUpdate(id, {lastname: lastname, name: name, address: address, postcode: postcode, city: city, province: province, country: country, phone: phone, cellphone: cellphone, email: email});
    return seller;
};

export const deleteSeller = async (id) => {
    const seller = await Seller.findByIdAndDelete(id);
    return seller;
};