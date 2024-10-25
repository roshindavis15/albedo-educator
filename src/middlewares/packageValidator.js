import {body} from 'express-validator';
export const validatePackage=[
    body('packageName').notEmpty().withMessage('Package Name is required'),
        body('syllabus').notEmpty().withMessage('Syllabus is required'),
        body('category').notEmpty().withMessage('Category is required'),
        body('packageFee').isNumeric().withMessage('Package Fee must be a number').notEmpty().withMessage('Package Fee is required'),
        body('spotAdmissionFee').isNumeric().withMessage('Spot Admission Fee must be a number').notEmpty().withMessage('Spot Admission Fee is required'),
        body('teachersSalary').isNumeric().withMessage("Teacher's Salary must be a number").notEmpty().withMessage("Teacher's Salary is required"),
        body('selectMode').isIn(['regular', 'custom']).withMessage('Select Mode must be either "regular" or "custom"').notEmpty().withMessage('Select Mode is required'),
        body('classTime').notEmpty().withMessage('Class Time is required'),
        body('duration').notEmpty().withMessage('Duration is required'),
        body('couponCode').optional().isString().withMessage('Coupon Code must be a string'),
        body('schedule').isArray().withMessage('Schedule must be an array').isLength({ min: 1 }).withMessage('At least one schedule is required'),
]