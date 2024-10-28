import db from "../models/index.js";
const {AssistantAdmin}=db;

export const addAssistantAdmin = async (assistantAdminData) => {
    return await AssistantAdmin.create(assistantAdminData);
};

export const updateAsstAdmin=async(asstAdminId,updatedData)=>{
    try {
        const [updated]=await AssistantAdmin.update(updatedData,{
            where:{id:asstAdminId}
        });
        if(!updated){
            throw new Error('Asst admin not found or no changes in made');
        }
        const updatedAsstAdmin=await AssistantAdmin.findOne({where:{id:asstAdminId}});
        return updatedAsstAdmin;
    } catch (error) {
        throw error;
    }
};

