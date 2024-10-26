    import { body } from 'express-validator';

    export const validateTeacher = [
        body('name').optional().isString().withMessage('Name must be a string'),
        body('email').optional().isEmail().withMessage('Must be a valid email'),
        body('phonenumber').optional().isMobilePhone().withMessage('Must be a valid phone number'),
        body('whatsappnumber').optional().isMobilePhone().withMessage('Must be a valid WhatsApp number'),
        body('dateOfBirth').optional().isISO8601().withMessage('Must be a valid date (YYYY-MM-DD)'),
        body('qualification').optional().isString().withMessage('Qualification must be a string'),
        body('place').optional().isString().withMessage('Place must be a string'),
        body('pincode').optional().isPostalCode('IN').withMessage('Pincode must be valid'),
        body('address').optional().isString().withMessage('Address must be a string'),
        body('timezone').optional().isString().withMessage('Timezone must be a string'),
        // Validate array of previous company experience if provided
        body('previousCompany').optional().isArray().withMessage('Previous company experience must be an array'),
        body('previousCompany.*.companyname').optional().isString().withMessage('Company name must be a string'),
        body('previousCompany.*.years').optional().isNumeric().withMessage('Years must be a number'),
        body('previousCompany.*.months').optional().isNumeric().withMessage('Months must be a number'),
        // Validation for payment details
        body('upiId').optional().isString().withMessage('UPI ID must be a string'),
        body('accountNumber').optional().isString().withMessage('Account number must be a string'),
        body('accountHolderName').optional().isString().withMessage('Account holder name must be a string'),
        body('accountType').optional().isString().withMessage('Account type must be a string'),
        body('ifscCode').optional().isString().withMessage('IFSC code must be a string'),
        body('bankName').optional().isString().withMessage('Bank name must be a string')
    ];