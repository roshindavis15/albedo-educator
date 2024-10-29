import { Sequelize } from "sequelize";
import db from "../models/index.js";
const {Teacher}=db;
const {Student}=db;
const {TeacherStudent}=db;

//adding teacher
export const addTeacher=async(teacherData)=>{
    return await Teacher.create(teacherData);
};



//editing teacher
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

//deleting teacher

export const removeTeacher=async(teacherId)=>{
    try {
         const deletedCount=await Teacher.destroy({
            where:{id:teacherId}
         });
         return deletedCount>0;
    } catch (error) {
      throw error;
    }
};


export const assignStudentsToTeacher=async(teacherId,studentIds)=>{
    try {
        console.log("here")
        console.log("teacherId:",teacherId)
        console.log("studentIds:",studentIds);
        const teacher=await Teacher.findByPk(teacherId);
        console.log("teacher:",teacher)
        if (!teacher) throw new Error('Teacher not found');

        const students = await Student.findAll({ where: { id: studentIds } });
        if (students.length !== studentIds.length) throw new Error('Some students not found');
         console.log("students:",students);
         

         await Promise.all(studentIds.map(async (studentId) => {
            await TeacherStudent.create({
                teacherId: teacherId,
                studentId: studentId
            });
        }));

        return { success: true, message: 'Students assigned to teacher successfully' };

    } catch (error) {
        throw new Error(`Failed to assign students:${error.message}`);
    }
};
