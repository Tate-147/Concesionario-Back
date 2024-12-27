import jwt from "jsonwebtoken";

export const mwAuth = (req, res, next) => {
    const accesstoken = req.headers["authorization"];
    if (!accesstoken) {
        return res.status(401).json({status: "failed", menssage: "unauthorized", data:{}});
    };
    try {
        jwt.verify(accesstoken, process.env.JWT_ACCESS_SECRET);
    } catch (error) {
        return res.status(401).json({status: "failed", menssage: "unauthorized", data:{}});
    };
    next();
};