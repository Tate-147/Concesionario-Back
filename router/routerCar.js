import express from "express";
import { mwCompress } from "../middleware/mwCompress.js";
import { mwAuth } from "../middleware/mwAuth.js";
import { mwVal } from "../middleware/mwVal.js";
import { valGetCar, valIdCar, valCar } from "../validations/valCar.js";
import { getCarsCont, getCarCont, createCarCont, updateCarCont, deleteCarCont } from "../controller/controllerCar.js";

const routerCars = express.Router();

routerCars.get("/", mwCompress, getCarsCont);
routerCars.get("/:id", getCarCont);
routerCars.post("/", mwAuth, valCar, mwVal,createCarCont);
routerCars.put("/:id", mwAuth, valIdCar, valCar,mwVal, updateCarCont);
routerCars.delete("/:id", mwAuth, valIdCar, mwVal, deleteCarCont);

export default routerCars;