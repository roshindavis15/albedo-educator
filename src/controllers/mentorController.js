import { validationResult } from "express-validator";
import { addMentor, updateMentor } from "../services/mentorService.js";


export const createMentor = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newMentor = await addMentor(req.body);
        res.status(201).json(newMentor);
    } catch (error) {
        next(error);
    }
};


export const editMentor=async(req,res,next)=>{
    try {
        const mentorId=req.params.mentorId;
        const updateData=req.body;

        const updatedMentor=await updateMentor(mentorId,updateData);
        res.status(200).json({
            success:true,
            message:'Mentor updated Successfully',
            data:updatedMentor
        })
    } catch (error) {
        next(error);
    }
};
