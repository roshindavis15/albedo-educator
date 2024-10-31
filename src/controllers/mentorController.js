import { validationResult } from "express-validator";
import { addMentor, removeMentor, updateMentor,assignStudentsToMentorFunc } from "../services/mentorService.js";


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


export const deleteMentor=async(req,res,next)=>{
    try {
        const mentorId=req.params.mentorId;
        const deleted=await removeMentor(mentorId);
        if(!deleted){
            return res.status(404).json({
                success:false,
                message:'mentor not found'
            });
        }
        res.status(200).json({
            success:true,
            message:'Mentor deleted successfully'
        })
    } catch (error) {
        next(error);
    }
};

//assigning students

export const assignStudentsToMentor=async(req,res,next)=>{
    try {
        const mentorId=req.params.mentorId;
        const {studentIds}=req.body;
        const result=await assignStudentsToMentorFunc(mentorId,studentIds);
        res.status(200).json({
            success:true,
            message:'assigned students to teacher successfully',
            data:result
        })
    } catch (error) {
        next(error);
    }
};