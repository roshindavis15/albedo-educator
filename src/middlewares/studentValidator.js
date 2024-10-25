import { body } from 'express-validator';

export const validateStudent = [
    body('photo')
        .notEmpty().withMessage('Photo URL is required.')
        .isURL().withMessage('Photo must be a valid URL.'),
    body('name')
        .notEmpty().withMessage('Name is required.')
        .isString().withMessage('Name must be a string.'),
    body('email')
        .notEmpty().withMessage('Email is required.')
        .isEmail().withMessage('Must be a valid email address.')
        .normalizeEmail(),
    body('phoneNumber')
        .notEmpty().withMessage('Phone number is required.')
        .isString().withMessage('Phone number must be a string.'),
    body('whatsappNumber')
        .optional()
        .isString().withMessage('WhatsApp number must be a string.'),
    body('parentName')
        .notEmpty().withMessage('Parent name is required.')
        .isString().withMessage('Parent name must be a string.'),
    body('parentOccupation')
        .notEmpty().withMessage('Parent occupation is required.')
        .isString().withMessage('Parent occupation must be a string.'),
    body('place')
        .notEmpty().withMessage('Place is required.')
        .isString().withMessage('Place must be a string.'),
    body('pincode')
        .notEmpty().withMessage('Pincode is required.')
        .isPostalCode('IN').withMessage('Pincode must be a valid Indian postal code.'),
    body('address')
        .notEmpty().withMessage('Address is required.')
        .isString().withMessage('Address must be a string.'),
    body('timeZone')
        .notEmpty().withMessage('Time zone is required.')
        .isString().withMessage('Time zone must be a string.'),
    body('selectedMode')
        .notEmpty().withMessage('Selected mode is required.')
        .isString().withMessage('Selected mode must be a string.'),
    body('adviserName')
        .notEmpty().withMessage('Adviser name is required.')
        .isString().withMessage('Adviser name must be a string.'),
];