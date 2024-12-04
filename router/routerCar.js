import express from "express";
import { mwCompress } from "../middleware/mwCompress.js";
import { mwVal } from "../middleware/mwVal.js";
import { valGetCar, valIdCar, valCar } from "../validations/valCar.js";
import { getCarsCont, getCarCont, getCarSellerCont, createCarCont, updateCarCont, deleteCarCont } from "../controller/controllerCar.js";

const routerCars = express.Router();

routerCars.get("/", mwCompress, valGetCar, mwVal, getCarsCont);
routerCars.get("/:id", valIdCar, mwVal, getCarCont);
routerCars.get("/seller/:id", valIdCar ,mwVal, getCarSellerCont); //Populate
routerCars.post("/", valCar, mwVal,createCarCont);
routerCars.put("/:id", valIdCar, valCar,mwVal, updateCarCont);
routerCars.delete("/:id", valIdCar, mwVal, deleteCarCont);

export default routerCars;