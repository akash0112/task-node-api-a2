import {app}  from "./app.js";
import * as dotenv from 'dotenv'
import cors from 'cors'
import { connectDatabase } from "./config/database.js";
dotenv.config({path:"./config/config.env"})
connectDatabase();
app.use(cors())
app.listen(process.env.PORT,()=>console.log(`Server is running on Port ${process.env.PORT}`))
