import cookieParser from "cookie-parser";
import express  from "express";
import cors from 'cors'
export const app=express()
app.use(cors())
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended:'true',limit:"50mb"}))
app.use(cookieParser())
import { UserRouter } from "./routes/UserRouter.js";
app.use('/api/v1',UserRouter)
