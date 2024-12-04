import express from "express";
import { mwCompress } from "../middleware/mwCompress.js";
import { mwVal } from "../middleware/mwVal.js";
import { valIdSeller, valSeller } from "../validations/valSeller.js";
import { getSellersCont, getSellerCont, createSellerCont, updateSellerCont, deleteSellerCont } from "../controller/controllerSeller.js";

const routerSellers = express.Router();

routerSellers.get("/", mwCompress, getSellersCont);
routerSellers.get("/:id", valIdSeller, mwVal, getSellerCont);
routerSellers.post("/", valSeller, mwVal, createSellerCont);
routerSellers.put("/:id", valIdSeller, valSeller, mwVal, updateSellerCont);
routerSellers.delete("/:id", valIdSeller, mwVal, deleteSellerCont);

export default routerSellers;