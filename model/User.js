import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    task: {
        type:String,
        required:true
    },
    status: {
        type:String,
        required:true,
    },
    startdate: {
        type: Date,
        default: Date.now,
      },
    enddate: {
        type: Date,
      },
},{ collection: 'User' });
export const User = mongoose.model("User", userSchema)