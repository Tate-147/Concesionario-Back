import express from "express";
import { compressMW } from "../middleware/compressMW.js";
import { getSellersCont, getSellerCont, createSellerCont, updateSellerCont, deleteSellerCont } from "../controller/controllerSeller.js";

const routerSellers = express.Router();

routerSellers.get("/", compressMW, getSellersCont);
routerSellers.get("/:id", getSellerCont);
routerSellers.post("/", createSellerCont);
routerSellers.put("/:id", updateSellerCont);
routerSellers.delete("/:id", deleteSellerCont);

export default routerSellers;