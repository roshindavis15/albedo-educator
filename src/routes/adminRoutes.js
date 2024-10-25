import express from 'express';
import { validateStudent } from '../middlewares/studentValidator.js';
import { validatePackage } from '../middlewares/packageValidator.js';
import { createStudent,getAllStudents } from '../controllers/studentController.js';
import { createPackage, getAllPackages } from '../controllers/packageController.js';
import { validateTeacher } from '../middlewares/teacherValidator.js';
import { createTeacher } from '../controllers/teacherController.js';
import { validateMentor } from '../middlewares/mentorValidator.js';
import { createMentor } from '../controllers/mentorController.js';
const adminRoutes = express.Router();

adminRoutes.post('/add-student',validateStudent,createStudent);
adminRoutes.get('/students', getAllStudents);
adminRoutes.post('/add-package',validatePackage,createPackage);
adminRoutes.get('/packages',getAllPackages);
adminRoutes.post('/add-teacher',validateTeacher,createTeacher);
adminRoutes.post('/add-mentor',validateMentor,createMentor);

export default adminRoutes;
