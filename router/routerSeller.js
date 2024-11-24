import express from "express";
import { getSellersCont, getSellerCont, createSellerCont, updateSellerCont, deleteSellerCont } from "../controller/controllerSeller.js";

const routerSellers = express.Router();

routerSellers.get("/", getSellersCont);
routerSellers.get("/:id", getSellerCont);
routerSellers.post("/", createSellerCont);
routerSellers.put("/:id", updateSellerCont);
routerSellers.delete("/:id", deleteSellerCont);

export default routerSellers;