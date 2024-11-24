import express from "express";
import { getCarsCont, getCarCont, getCarSellerCont, createCarCont, updateCarCont, deleteCarCont } from "../controller/controllerCar.js";

const routerCars = express.Router();

routerCars.get("/", getCarsCont);
routerCars.get("/:id", getCarCont);
routerCars.get("/seller/:id",getCarSellerCont); //Populate
routerCars.post("/", createCarCont);
routerCars.put("/:id", updateCarCont);
routerCars.delete("/:id", deleteCarCont);

export default routerCars;