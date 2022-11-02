import express from "express";
import { add,deletetask,getall,updatebyid } from "../controller/UserController.js";
export const UserRouter= express.Router()
UserRouter.route("/add").post(add)
UserRouter.route("/delete/:id").delete(deletetask)
UserRouter.route("/getall").get(getall)
UserRouter.route("/updatebyid/:id").put(updatebyid)
// UserRouter.route("/getbyid").get(gettask)
// UserRouter.route("/getbystatus").get(findbystatus)
// UserRouter.route("/findupdate").put(findandupdate)