import express from "express";
import { compressMW } from "../middleware/compressMW.js";
import { getCarsCont, getCarCont, getCarSellerCont, createCarCont, updateCarCont, deleteCarCont } from "../controller/controllerCar.js";

const routerCars = express.Router();

routerCars.get("/", compressMW, getCarsCont);
routerCars.get("/:id", getCarCont);
routerCars.get("/seller/:id",getCarSellerCont); //Populate
routerCars.post("/", createCarCont);
routerCars.put("/:id", updateCarCont);
routerCars.delete("/:id", deleteCarCont);

export default routerCars;