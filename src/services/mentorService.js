import db from '../models/index.js'; 
const {Mentor}=db;
const {Student}=db;
const {MentorStudent}=db;

export const addMentor = async (mentorData) => {
    return await Mentor.create(mentorData);
};


export const updateMentor=async(mentorId,updateData)=>{
    try {
        const [updated]=await Mentor.update(updateData,{
            where:{id:mentorId}
        });
        if(!updated){
            throw new Error('Mentor not found or no changes made');
        }

        const updatedMentor=await Mentor.findOne({where:{id:mentorId}});
        return updatedMentor;
    } catch (error) {
        throw error
    }
}

export const removeMentor=async(mentorId)=>{
    try {
        const deletedCount=await Mentor.destroy({
            where:{id:mentorId}
        });
        return deletedCount>0;
    } catch (error) {
        throw error;
    }
}

export const assignStudentsToMentorFunc=async(mentorId,studentIds)=>{
    try {
        const mentor=await Mentor.findByPk(mentorId);
        if(!mentor) throw new Error('Mentor not found');
        const students=await Student.findAll({where:{id:studentIds}});
        if(students.length !==studentIds.length) throw new Error('some students not found');

        await Promise.all(studentIds.map(async(studentId)=>{
            await MentorStudent.create({
                mentorId:mentorId,
                studentId:studentId
            });
        }));

        return {success:true,message:'Students assigned to mentors successfully'};

    } catch (error) {
        throw new Error(`Failed to assign students:${error.message}`);
    }
};