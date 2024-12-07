import { User } from "../model/modelUser.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { genAccessToken, genRefreshToken } from "../utils/genTokens.js";

export const getUsers = async () => {
    const users = await User.find();
    return users;
};

export const getUser = async (id) => {
    const user = await User.findById(id);
    return user;
};

export const createUser = async (username, password, lastname, name, address, postcode, city, province, country, phone, cellphone, email) => {
    const passhash = await bcrypt.hash(password, 10);
    const user = {
        username: username,
        password: passhash,
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
    const newUser = await User.create(user);
    return newUser;
};

export const updateUser = async(id, lastname, name, address, postcode, city, province, country, phone, cellphone, email) => {
    const user = await User.findByIdAndUpdate(id, {lastname: lastname, name: name, address: address, postcode: postcode, city: city, province: province, country: country, phone: phone, cellphone: cellphone, email: email});
    return user;
};

export const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id);
    return user;
};

export const login = async (username, password) => {
    try {
        const user = await User.findOne({username});
    if(!user) {
        return -1;
    };
    const passmatch = await bcrypt.compare(password, user.password);
    if(!passmatch) {
        return -1;
    };
    const accessToken = genAccessToken({username,password: user.password, id: user._id});
    const refreshToken = genRefreshToken({username,password: user.password, id: user._id});
    return {accesstoken: accessToken, refreshtoken: refreshToken};
    } catch (error) {
        console.log(error);
    };
};

export const token = async (accessToken) => {
    const user = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    const userDB = await User.findOne({username: user.username});
    if(!userDB) {
        return -1;
    };
    const refreshtoken = genRefreshToken({username:user.username,password: user.password, id: user._id});
    return refreshtoken;
};