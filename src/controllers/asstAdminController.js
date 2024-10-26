
import { addAssistantAdmin } from '../services/asstAdminService.js';
import { validationResult } from 'express-validator';

export const createAssistantAdmin = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newAssistantAdmin = await addAssistantAdmin(req.body);
        res.status(201).json(newAssistantAdmin);
    } catch (error) {
        next(error);
    }
};