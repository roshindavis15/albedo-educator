import express from 'express';
import { validateStudent } from '../middlewares/studentValidator.js';
import { validatePackage } from '../middlewares/packageValidator.js';
import { createStudent,deleteStudent,editStudent,getAllStudents } from '../controllers/studentController.js';
import { createPackage, getAllPackages } from '../controllers/packageController.js';
import { validateTeacher } from '../middlewares/teacherValidator.js';
import { createTeacher, editTeacher,deleteTeacher } from '../controllers/teacherController.js';
import { validateMentor } from '../middlewares/mentorValidator.js';
import { createMentor,editMentor,deleteMentor } from '../controllers/mentorController.js';
import { validateAssistantAdmin } from '../middlewares/asstAdminValidator.js';
import { createAssistantAdmin,editAssistantAdmin,deleteAssistantAdmin } from '../controllers/asstAdminController.js';
const adminRoutes = express.Router();

adminRoutes.post('/add-student',validateStudent,createStudent);
adminRoutes.get('/students', getAllStudents);
adminRoutes.put('/edit-student/:studentId',validateStudent,editStudent);
adminRoutes.delete('/delete-student/:studentId',deleteStudent);
adminRoutes.post('/add-teacher',validateTeacher,createTeacher);
adminRoutes.put('/edit-teacher/:teacherId', validateTeacher, editTeacher);
adminRoutes.delete('/delete-teacher/:teacherId',deleteTeacher);
adminRoutes.post('/add-package',validatePackage,createPackage);
adminRoutes.get('/packages',getAllPackages);
adminRoutes.post('/add-mentor',validateMentor,createMentor);
adminRoutes.post('/add-asst-admin',validateAssistantAdmin,createAssistantAdmin);
adminRoutes.put('/edit-asst-admin/:asstAdminId',validateAssistantAdmin,editAssistantAdmin);
adminRoutes.put('/edit-mentor/:mentorId',validateMentor,editMentor);
adminRoutes.delete('/delete-mentor/:mentorId',deleteMentor);
adminRoutes.delete('/delete-asst-admin/:asstAdminId',deleteAssistantAdmin);


export default adminRoutes;
