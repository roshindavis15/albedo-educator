import db from "../models/index.js";
const {AssistantAdmin}=db;

export const addAssistantAdmin = async (assistantAdminData) => {
    return await AssistantAdmin.create(assistantAdminData);
};