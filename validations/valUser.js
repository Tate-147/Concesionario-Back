import { body, query, param } from "express-validator";

export const valIdUser = [
    param("id").isMongoId().withMessage("Id must be a valid MongoID")
];

export const valUser = [
    body("lastname").isString().withMessage("Lastname must be a valid string").isLength({min: 2, max: 25}).withMessage("Lastname must be at least 2 characters long and max 25"),
    body("name").isString().withMessage("Name must be a valid string").isLength({min: 2, max: 25}).withMessage("Name must be at least 2 characters long and max 25"),
    body("birthdate").isDate().withMessage("Birthdate must be a valid date"),
    body("addressname").optional().isString().withMessage("Street Address must be a valid string").isLength({min: 2, max: 25}).withMessage("Street Address must be at least 2 characters long and max 25"),
    body("addressnumber").optional().isInt().withMessage("Number Address must be a valid number").isLength({min: 2, max: 10}).withMessage("Number Address must be at least 2 numbers long and max 10"),        
    body("postcode").optional().isInt().withMessage("Postcode must be a valid number").isLength({min: 2, max: 10}).withMessage("Postcode must be at least 2 numbers long and max 10"),
    body("city").optional().isString().withMessage("City must be a valid string").isLength({min: 2, max: 25}).withMessage("City must be at least 2 characters long and max 25"),
    body("province").optional().isString().withMessage("Province must be a valid string").isLength({min: 2, max: 25}).withMessage("Province must be at least 2 characters long and max 25"),
    body("country").optional().isString().withMessage("Country must be a valid string").isLength({min: 2, max: 25}).withMessage("Country must be at least 2 characters long and max 25"),
    body("phone").optional().isInt().withMessage("Phone must be a valid number").isLength({min: 2, max: 15}).withMessage("Phone must be at least 2 numbers long and max 15"),
    body("cellphone").isInt().withMessage("Cellphone must be a valid number").isLength({min: 2, max: 25}).withMessage("Cellphone must be at least 2 numbers long and max 25"),
    body("email").isEmail().withMessage("Email must be a valid email")
];