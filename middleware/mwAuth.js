import jwt from "jsonwebtoken";

export const mwAuth = (req, res, next) => {
    const accesstoken = req.headers["authorization"];
    console.log(accesstoken);
    if (!accesstoken) {
        return res.status(401).json({status: "failed", menssage: "unauthorized", data:{}});
    }
    const tokenData = jwt.verify(accesstoken, process.env.JWT_ACCESS_SECRET);
    if (!tokenData) {
        return res.status(401).json({status: "failed", menssage: "unauthorized", data:{}});
    }
    next();
};