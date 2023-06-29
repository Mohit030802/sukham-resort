import express from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { UserModel } from "../models/Users";

const router = express.Router();

router.post('/register', async(req, res) => {
    const {userName, password} = req.body;

    const user = await UserModel.findOne({userName})

    if(user) 
    {
        return res.json("Already Exist")
    }

    try{
        const newUser = new UserModel({userName, password})
        await newUser.save();
    
        res.json("user registered")
    }
    catch(e){
        res.json(e)
    }
})