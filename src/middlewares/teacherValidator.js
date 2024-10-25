import { body} from 'express-validator';

export const validateTeacher = [
    body('name').notEmpty().withMessage('Name is required.'),
    body('photo').notEmpty().withMessage('Photo is required.'),
    body('email').isEmail().withMessage('Invalid email format.'),
    body('phoneNumber').notEmpty().withMessage('Phone number is required.'),
    body('whatsappNumber').optional().isString().withMessage('Invalid WhatsApp number.'),
    body('dateOfBirth').isDate().withMessage('Invalid date of birth.'),
    body('qualification').notEmpty().withMessage('Qualification is required.'),
    body('place').notEmpty().withMessage('Place is required.'),
    body('pincode').notEmpty().withMessage('Pincode is required.'),
    body('address').notEmpty().withMessage('Address is required.'),
    body('timeZone').notEmpty().withMessage('Timezone is required.'),
    body('previousWorkedCompanies').optional().isArray().withMessage('Previous worked companies must be an array.'),
    body('preferredPackages').optional().isArray().withMessage('Preferred packages must be an array.'),
    body('resumeLink').optional().isURL().withMessage('Resume link must be a valid URL.'),
    body('demoLink').optional().isURL().withMessage('Demo link must be a valid URL.'),
    body('upiId').optional().isString().withMessage('Invalid UPI ID.'),
    body('accountNumber').notEmpty().withMessage('Account number is required.'),
    body('accountHolderName').notEmpty().withMessage('Account holder name is required.'),
    body('accountType').notEmpty().withMessage('Account type is required.'),
    body('ifscCode').notEmpty().withMessage('IFSC code is required.'),
    body('bankName').notEmpty().withMessage('Bank name is required.'),
   
];
