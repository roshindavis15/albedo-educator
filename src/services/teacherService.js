import db from "../models/index.js";
const {Teacher}=db;

export const addTeacher=async(teacherData)=>{
    return await Teacher.create(teacherData);
};