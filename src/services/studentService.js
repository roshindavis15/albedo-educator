
import db from '../models/index.js'; 
const { Student } = db;



export const addStudent = async (studentData) => {
    return await Student.create(studentData);
};


export const updateStudent=async(studentId,updateData)=>{
    try {
        const [updated]=await Student.update(updateData,{
            where:{id:studentId}
        });
        if(!updated){
            throw new Error('Student not found or no changes made');
        }

        const updatedStudent=await Student.findOne({where:{id:studentId}});

        return updatedStudent;
    } catch (error) {
        throw error
    }
}


export const removeStudent=async(studentId)=>{
 try {
    const deletedCount=await Student.destroy({
        where:{id:studentId}
    });
    return deletedCount>0;
 } catch (error) {
    throw error;
 }
};