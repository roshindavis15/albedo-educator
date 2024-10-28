import { validationResult } from "express-validator";
import db from '../models/index.js';


//adding others
export const createOtherUsers=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});

    }

    try {
        const newOtherUser=await addOtherUsers(req.body);
        res.status(201).json(newOtherUser);
    } catch (error) {
        next(error);
    }
}

















