import express from 'express';
import { validateStudent } from '../middlewares/studentValidator.js';
import { validatePackage } from '../middlewares/packageValidator.js';
import { createStudent,editStudent,getAllStudents } from '../controllers/studentController.js';
import { createPackage, getAllPackages } from '../controllers/packageController.js';
import { validateTeacher } from '../middlewares/teacherValidator.js';
import { createTeacher, editTeacher } from '../controllers/teacherController.js';
import { validateMentor } from '../middlewares/mentorValidator.js';
import { createMentor,editMentor } from '../controllers/mentorController.js';
import { validateAssistantAdmin } from '../middlewares/asstAdminValidator.js';
import { createAssistantAdmin,editAssistantAdmin } from '../controllers/asstAdminController.js';
const adminRoutes = express.Router();

adminRoutes.post('/add-student',validateStudent,createStudent);
adminRoutes.get('/students', getAllStudents);
adminRoutes.post('/add-package',validatePackage,createPackage);
adminRoutes.get('/packages',getAllPackages);
adminRoutes.post('/add-teacher',validateTeacher,createTeacher);
adminRoutes.post('/add-mentor',validateMentor,createMentor);
adminRoutes.post('/add-asst-admin',validateAssistantAdmin,createAssistantAdmin);
adminRoutes.put('/edit-teacher/:teacherId', validateTeacher, editTeacher);
adminRoutes.put('/edit-student/:studentId',validateStudent,editStudent);
adminRoutes.put('/edit-asst-admin/:asstAdminId',validateAssistantAdmin,editAssistantAdmin);
adminRoutes.put('/edit-mentor/:mentorId',validateMentor,editMentor);


export default adminRoutes;
