import { validationResult } from "express-validator";
import { addMentor } from "../services/mentorService.js";


export const createMentor = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newMentor = await addMentor(req.body);
        res.status(201).json(newMentor);
    } catch (error) {
        next(error);
    }
};

