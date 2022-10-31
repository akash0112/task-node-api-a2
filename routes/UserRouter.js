import express from "express";
import { add,deletetask,gettask,getall,findbystatus, findandupdate } from "../controller/UserController.js";
export const UserRouter= express.Router()
UserRouter.route("/add").post(add)
UserRouter.route("/delete").delete(deletetask)
UserRouter.route("/getbyid").get(gettask)
UserRouter.route("/getall").get(getall)
UserRouter.route("/getbystatus").get(findbystatus)
UserRouter.route("/findupdate").put(findandupdate)