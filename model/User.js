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
},{ collection: 'User' });
export const User = mongoose.model("User", userSchema)