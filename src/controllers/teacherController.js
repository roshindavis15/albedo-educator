import { addTeacher } from '../services/teacherService.js';
import { validationResult } from 'express-validator';

//adding teacher
export const createTeacher = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newTeacher = await addTeacher(req.body);
        res.status(201).json(newTeacher);
    } catch (error) {
        next(error); 
    }
};

