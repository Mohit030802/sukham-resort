import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
    }
})

export const UserModel = mongoose.model("user", userSchema) 