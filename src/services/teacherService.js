import db from "../models/index.js";
const {Teacher}=db;

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

export const deleteTeacher=async(req,res,next)=>{
    try {
        const teacherId=req.params.teacherId;
        const deleted=await removeTeacher(teacherId);
        if(!deleted){
            return res.status(404).json({
                success:false,
                message:'teachers not found'
            })
        }
        res.status(200).json({
            success:true,
            message:'Teacher deleted successfully'
        })
    } catch (error) {
       next(error);
    }
};