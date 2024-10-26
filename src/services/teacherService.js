import db from "../models/index.js";
const {Teacher}=db;


export const addTeacher=async(teacherData)=>{
    return await Teacher.create(teacherData);
};




export const updateTeacher = async (teacherId, updateData) => {
    try {
        const [updated] = await Teacher.update(updateData, {
            where: { id: teacherId } 
        });

        if (!updated) {
            throw new Error('Teacher not found or no changes made');
        }

  
        const updatedTeacher = await Teacher.findOne({ where: { id: teacherId } });

        return updatedTeacher;
    } catch (error) {
        throw error;
    }
};