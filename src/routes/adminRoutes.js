import express from 'express';
import { validateStudent } from '../middlewares/studentValidator.js';
import { validatePackage } from '../middlewares/packageValidator.js';
import { createStudent, getAllStudents,createPackage,getAllPackages,createTeacher } from '../controllers/adminController.js';
import { validateTeacher } from '../middlewares/teacherValidator.js';
const adminRoutes = express.Router();

adminRoutes.post('/add-student',validateStudent,createStudent);
adminRoutes.get('/students', getAllStudents);
adminRoutes.post('/add-package',validatePackage,createPackage);
adminRoutes.get('/get-packages',getAllPackages);
adminRoutes.post('/add-teacher',validateTeacher,createTeacher);

export default adminRoutes;
