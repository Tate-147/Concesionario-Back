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

export const createUser = async (username, password, lastname, name, birthdate, addressname, addressnumber, postcode, city, province, country, phone, cellphone, email) => {
    const passhash = await bcrypt.hash(password, 10);
    const user = {
        username: username,
        password: passhash,
        lastname: lastname,
        name: name,
        birthdate: birthdate,
        addressname: addressname,
        addressnumber: addressnumber,
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

export const updateUser = async(id, username, password, lastname, name, birthdate, addressname, addressnumber, postcode, city, province, country, phone, cellphone, email) => {
    const passhash = await bcrypt.hash(password, 10);
    const user = {
        username: username,
        password: passhash,
        lastname: lastname,
        name: name,
        birthdate: birthdate,
        addressname: addressname,
        addressnumber: addressnumber,
        postcode: postcode,
        city: city,
        province: province,
        country: country,
        phone: phone,
        cellphone: cellphone,
        email: email
    };
    const newUser = await User.findByIdAndUpdate(id, user);
    return newUser;
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
    const userId = user._id;
    const accessToken = genAccessToken({username,password: user.password, id: user._id});
    const refreshToken = genRefreshToken({username,password: user.password, id: user._id});
    return {userId: userId, accessToken: accessToken, refreshToken: refreshToken};
    } catch (error) {
        console.log(error);
    };
};

export const token = async (refreshToken) => {
    const user = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const userDB = await User.findOne({username: user.username});
    if(!userDB) {
        return -1;
    };
    const accessToken = genAccessToken({username:user.username,password: user.password, id: user._id});
    return accessToken;
};