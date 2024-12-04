import { validationResult } from "express-validator";

export const mwVal = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({status: "failed", menssage: "validation error", data:{}, /*errors: error.array()*/});
    }
    next();
};