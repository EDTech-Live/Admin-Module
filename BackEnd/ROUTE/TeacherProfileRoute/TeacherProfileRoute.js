const express = require ('express');
const TeacherProfileRouter = express.Router();
const {getTeacherProfile, postTeacherProfile,patchTeacherProfile, deleteTeacherProfile} = require('../../CONTROLLER/TeacherProfileController/TeacherProfileController');



const {validateSchema} = require('../../CONTROLLER/TeacherProfileController/TeacherProfileValidation');

TeacherProfileRouter.get('/viewTeacherProfile', getTeacherProfile);
TeacherProfileRouter.post('/addTeacherProfile',validateSchema, postTeacherProfile);
TeacherProfileRouter.patch('/updateTeacherProfile/:profile_id/:teacher_id', patchTeacherProfile);
TeacherProfileRouter.delete('/deleteTeacherProfile/:profile_id/:teacher_id', deleteTeacherProfile);

module.exports = TeacherProfileRouter;