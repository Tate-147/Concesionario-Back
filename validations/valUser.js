import { body, query, param } from "express-validator";

export const valIdUser = [
    param("id").isMongoId().withMessage("Id must be a valid MongoID")
];

export const valUser = [
    body("lastname").isString().withMessage("Lastname must be a valid string").isLength({min: 2, max: 25}).withMessage("Lastname must be at least 2 characters long and max 25"),
    body("name").isString().withMessage("Name must be a valid string").isLength({min: 2, max: 25}).withMessage("Name must be at least 2 characters long and max 25"),
    body("address").isString().withMessage("Address must be a valid string").isLength({min: 2, max: 50}).withMessage("Address must be at least 2 characters long and max 50"),
    body("postcode").isString().withMessage("Postcode must be a valid string").isLength({min: 4, max: 5}).withMessage("Postcode must be at least 4 characters long and max 5"),
    body("city").isString().withMessage("City must be a valid string").isLength({min: 2, max: 25}).withMessage("City must be at least 2 characters long and max 25"),
    body("province").isString().withMessage("Province must be a valid string").isLength({min: 2, max: 25}).withMessage("Province must be at least 2 characters long and max 25"),
    body("country").isString().withMessage("Country must be a valid string").isLength({min: 2, max: 25}).withMessage("Country must be at least 2 characters long and max 25"),
    body("phone").isString().withMessage("Phone must be a valid string").isLength({min: 2, max: 25}).withMessage("Phone must be at least 2 characters long and max 25"),
    body("cellphone").isString().withMessage("Cellphone must be a valid string").isLength({min: 2, max: 25}).withMessage("Cellphone must be at least 2 characters long and max 25"),
    body("email").isEmail().withMessage("Email must be a valid email")
];