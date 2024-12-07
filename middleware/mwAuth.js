import jwt from "jsonwebtoken";

export const mwAuth = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({status: "failed", menssage: "unauthorized", data:{}});
    }
    const tokenData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    if (!tokenData) {
        return res.status(401).json({status: "failed", menssage: "unauthorized", data:{}});
    }
    next();
};