import { addTeacher, assignStudentsToTeacherFunc, removeTeacher, updateTeacher } from '../services/teacherService.js';
import { validationResult } from 'express-validator';

//adding teacher
export const createTeacher = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newTeacher = await addTeacher(req.body);
        res.status(201).json(newTeacher);
    } catch (error) {
        next(error); 
    }
};

//editing teacher

export const editTeacher = async (req, res, next) => {
    try {
        const teacherId = req.params.teacherId;
        const updateData = req.body; 

       
        const updatedTeacher = await updateTeacher(teacherId, updateData);

        res.status(200).json({
            success: true,
            message: 'Teacher updated successfully',
            data: updatedTeacher
        });
    } catch (error) {
        
        next(error);
    }
};

//removing teacher

export const deleteTeacher=async(req,res,next)=>{
    try {
        const teacherId=req.params.teacherId;
        const deleted=await removeTeacher(teacherId);
        if(!deleted){
            return res.status(404).json({
                success:false,
                message:'teachers not found'
            });
        }
        res.status(200).json({
            success:true,
            message:'teacher deleted successfully'
        })
    } catch (error) {
        next(error);
    }
};


//assigning students 

export const assignStudentsToTeacher=async(req,res,next)=>{
    try {
        const teacherId=req.params.teacherId;
        const {studentIds}=req.body;
        const result=await assignStudentsToTeacherFunc(teacherId,studentIds);
        res.status(200).json({
            success:true,
            message:'assigned students to teacher successfully',
            data:result
        })
    } catch (error) {
        next(error);
    }
};

//get teachers

export const getTeachersData=async(req,res,next)=>{
    try {
        const teachersData=await getTeachersDataFunc();
        res.status(200).json({
            success:true,
            msg:'teachers data fetched successfully',
            data:teachersData
        })
    } catch (error) {
        
    }
   
}