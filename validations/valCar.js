import { body, query, param } from "express-validator";

export const valGetCar = [
    query("brand").optional().isString().withMessage("Brand must be a valid string").isLength({min:1,max:25}).withMessage("Brand must be at least 2 characters long and max 25"),
    query("model").optional().isString().withMessage("Model must be a valid string").isLength({min:1,max:25}).withMessage("Brand must be at least 2 characters long and max 25"),
    query("minPrice").optional({default_value: 0}).isNumeric({gt: 0, lt: "maxPrice"}).withMessage("Min price must be a valid number greater than 0 and less than max price"),
    query("maxPrice").optional({default_value: "minPrice"}).isNumeric({gt: "minPrice"}).withMessage("Max price must be a valid number greater than min price"),
    query("orderby").optional().isIn(["brand","model","color","year","price"]).withMessage("Order by must be brand, model, color, year or price"),
    query("order").optional().isIn(["asc","desc"]).withMessage("Order must be asc or desc"),
    query("limit").optional().isInt({gt: 0}).withMessage("Limit must be a valid number greater than 0"),
    query("page").optional().isInt({gt: 0}).withMessage("Page must be a valid number greater than 0")
];

export const valIdCar = [
    param("id").isUUID().withMessage("Id must be a valid UUID")
];

export const valCar = [
    body("brand").isString().withMessage("Brand must be a valid string").isLength({min:1,max:25}).withMessage("Brand must be at least 2 characters long and max 25"),
    body("model").isString().withMessage("Model must be a valid string").isLength({min:1,max:25}).withMessage("Model must be at least 2 characters long and max 25"),
    body("color").isString().withMessage("Color must be a valid string").isLength({min:1,max:15}).withMessage("Color must be at least 2 characters long and max 15"),
    body("year").isInt({gt: 1900}).withMessage("Year must be a valid number greater than 1900"),
    body("description").isString().withMessage("Description must be a valid string").isLength({min:1,max:300}).withMessage("Description must be at least 2 characters long and max 300"),
    body("price").isFloat().withMessage("Price must be a valid number").isLength({min: 1}).withMessage("Price must be at least 1 digit long"),
    body("urlToImage").isURL().withMessage("Image must be a valid URL"),
    body("seller").isMongoId().withMessage("Seller must be a valid MongoID")
];