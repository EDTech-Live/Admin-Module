const express = require('express');
const TeacherRouter = express.Router();
const {getTeacher, postTeacher, updateTeacher, deleteTeacher} = require('../../CONTROLLER/TeacherController/TeacherController')

const {validateSchema} = require('../../CONTROLLER/TeacherController/TeacherControllerValidation')

TeacherRouter.get('/viewteacher', getTeacher);
TeacherRouter.post('/addteacher',validateSchema, postTeacher);
TeacherRouter.patch('/updateteacher/:teacher_id', updateTeacher);
TeacherRouter.delete('/deleteteacher/:teacher_id', deleteTeacher);

module.exports = TeacherRouter;