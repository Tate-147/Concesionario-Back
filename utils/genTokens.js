import jwt from "jsonwebtoken";

export const genAccessToken = payload => {
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: process.env.JWT_ACCESS_EXPIRES});
};
export const genRefreshToken = payload => {
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: process.env.JWT_REFRESH_EXPIRES});
};