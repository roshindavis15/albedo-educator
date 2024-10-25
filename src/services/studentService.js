
import db from '../models/index.js'; 
const { Student } = db;



export const addStudent = async (studentData) => {
    return await Student.create(studentData);
};
