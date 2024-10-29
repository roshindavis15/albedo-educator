
import { addAssistantAdmin, updateAsstAdmin } from '../services/asstAdminService.js';
import { validationResult } from 'express-validator';

export const createAssistantAdmin = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newAssistantAdmin = await addAssistantAdmin(req.body);
        res.status(201).json(newAssistantAdmin);
    } catch (error) {
        next(error);
    }
};

//editing asst-admin

export const editAssistantAdmin=async(req,res,next)=>{
    try {
        const asstAdminId=req.params.asstAdminId;
        const updateData=req.body;

        const updatedAsstAdmin=await updateAsstAdmin(asstAdminId,updateData);

        res.status(200).json({
            success:true,
            message:'Asst Admin updated Successfully',
            data:updatedAsstAdmin
        });
    } catch (error) {
        next(error);
    }
};


export const deleteAssistantAdmin=async(req,res,next)=>{
    try {
        const asstAdminId=req.params.asstAdminId;
        const deleted=await removeAsstAdmin(asstAdminId);
        if(!deleted){
            return res.status(404).json({
                success:false,
                message:'Asst Admin not found',
            });
        }
    } catch (error) {
        next(error);
    }
};