import { validationResult } from 'express-validator';
import { addStudent, getStudentsDataFunc, removeStudent, updateStudent } from '../services/studentService.js';
import db from '../models/index.js';
const { Student } = db;

//adding students
export const createStudent = async (req, res, next) => {
    const errors = validationResult(req);
    console.log("errors:",errors);
    console.log("req.body:",req.body);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newStudent = await addStudent(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        next(error); 
    }
}

//editing student

export const editStudent=async(req,res,next)=>{
    try {
        const studentId=req.params.studentId;
        const updateData=req.body;

        const updatedStudent=await updateStudent(studentId,updateData);

        res.status(200).json({
            success:true,
            message:'student updated successfully',
            data:updatedStudent
        })
    } catch (error) {
        next(error);
    }
};

//deleting student  

export const deleteStudent=async(req,res,next)=>{
    try {
        const studentId=req.params.studentId;
        const deleted=await removeStudent(studentId);
        if(!deleted){
            return res.status(404).json({
                success:false,
                message:'student not found'
            });

        }
        res.status(200).json({
            success:true,
            message:'Student deleted successfully'
        })
    } catch (error) {
        next(error);
    }
};

//get students

export const getStudentsData=async(req,res,next)=>{
    try {
        const studentsData=await getStudentsDataFunc();
        res.status(200).json({
            success:true,
            msg:'students data fetched successfully',
            data:studentsData
        })
    } catch (error) {
        next(error);
    }
}
