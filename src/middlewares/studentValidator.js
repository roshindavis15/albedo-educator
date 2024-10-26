import { body } from 'express-validator';

export const validateStudent = [
    body('registrationFee')
    .optional()
    .isBoolean().withMessage('Registration fee must be true or false.'),
    body('photo')
        .optional()  
        .isURL().withMessage('Photo must be a valid URL.'),
    body('name')
        .optional()  
        .isString().withMessage('Name must be a string.'),
    body('email')
        .optional()  
        .isEmail().withMessage('Must be a valid email address.')
        .normalizeEmail(),
    body('phoneNumber')
        .optional()  
        .isString().withMessage('Phone number must be a string.'),
    body('whatsappNumber')
        .optional()
        .isString().withMessage('WhatsApp number must be a string.'),
    body('parentName')
        .optional()  
        .isString().withMessage('Parent name must be a string.'),
    body('parentOccupation')
        .optional()  
        .isString().withMessage('Parent occupation must be a string.'),
    body('place')
        .optional()  
        .isString().withMessage('Place must be a string.'),
    body('pincode')
        .optional()  
        .isPostalCode('IN').withMessage('Pincode must be a valid Indian postal code.'),
    body('address')
        .optional()  
        .isString().withMessage('Address must be a string.'),
    body('timeZone')
        .optional()  
        .isString().withMessage('Time zone must be a string.'),
    body('selectedMode')
        .optional()  
        .isString().withMessage('Selected mode must be a string.'),
    body('adviserName')
        .optional()  
        .isString().withMessage('Adviser name must be a string.'),
];