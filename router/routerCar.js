import express from "express";
import { getCarsCont, getCarCont, createCarCont, updateCarCont, deleteCarCont } from "../controller/controllerCar.js";
import { isAdmin, isLogged } from "../middleware/authMiddleware.js";

const routerCars = express.Router();

routerCars.get("/", getCarsCont);
routerCars.get("/:id",isLogged, getCarCont);
routerCars.post("/",isLogged,isAdmin, createCarCont);
routerCars.put("/:id",isLogged,isAdmin, updateCarCont);
routerCars.delete("/:id",isLogged,isAdmin, deleteCarCont);

export default routerCars;