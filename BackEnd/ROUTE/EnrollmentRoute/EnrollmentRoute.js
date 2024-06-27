const express = require('express');
const EnrollmentRouter = express.Router();
const { getEnrollment, postEnrollment, patchEnrollmet, deleteEnrollment } = require('../../CONTROLLER/EnrollmentController/EnrollmentController');

EnrollmentRouter.get('/viewEnrollment', getEnrollment);
EnrollmentRouter.post('/addEnrollment', postEnrollment);
EnrollmentRouter.patch('/updateEnrollment/:enrollment_id/:student_id/:course_id', patchEnrollmet);
EnrollmentRouter.delete('/deleteEnrollment/:enrollment_id', deleteEnrollment)

module.exports = EnrollmentRouter;
