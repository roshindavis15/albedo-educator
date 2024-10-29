import db from '../models/index.js'; 
const {Mentor}=db;

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