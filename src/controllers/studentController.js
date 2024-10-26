import { validationResult } from 'express-validator';
import { addStudent } from '../services/studentService.js';
import db from '../models/index.js';
const { Student } = db;

//adding students
export const createStudent = async (req, res, next) => {
    const errors = validationResult(req);
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


//get all students
export const getAllStudents=async(req,res,next)=>{
    try {
        const students=await Student.findAll();
        console.log("students:",students);
        res.status(200).json(students);
    } catch (error) {
        next(error);
    }
}