import { validationResult } from 'express-validator';
import db from '../models/index.js';
const { Student } = db;
const {Package}=db;
import { addStudent } from '../services/studentService.js';
import { addPackage } from '../services/packageService.js';
import { addTeacher } from '../services/teacherService.js';


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

//creating package
export const createPackage=async(req,res,next)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const newPackage=await addPackage(req.body);
        console.log("newPackage:",newPackage);
        
        res.status(201).json(newPackage);
    } catch (error) {
        next(error);
    }
}

 //for show all packages
export const getAllPackages=async(req,res,next)=>{
    try {
        const packages=await Package.findAll();
        console.log("packages:",packages);
        res.status(200).json(packages);
        
    } catch (error) {
        next(error)
    }
}

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

