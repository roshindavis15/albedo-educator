import db from '../models/index.js'; 
const {Mentor}=db;

export const addMentor = async (mentorData) => {
    return await Mentor.create(mentorData);
};
