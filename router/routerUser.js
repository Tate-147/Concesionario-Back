import express from "express";
import { mwCompress } from "../middleware/mwCompress.js";
import { mwAuth } from "../middleware/mwAuth.js";
import { mwVal } from "../middleware/mwVal.js";
import { valIdUser, valUser } from "../validations/valUser.js";
import { getUsersCont, getUserCont, createUserCont, updateUserCont, deleteUserCont, loginCont, tokenCont } from "../controller/controllerUser.js";

const routerUsers = express.Router();

routerUsers.get("/", mwAuth, mwCompress, getUsersCont);
routerUsers.get("/:id", mwAuth, valIdUser, mwVal, getUserCont);
routerUsers.post("/", valUser, mwVal, createUserCont);
routerUsers.put("/:id", mwAuth, valIdUser, valUser, mwVal, updateUserCont);
routerUsers.delete("/:id", mwAuth, valIdUser, mwVal, deleteUserCont);

routerUsers.post("/login", loginCont);
routerUsers.post("/token", tokenCont);

export default routerUsers;