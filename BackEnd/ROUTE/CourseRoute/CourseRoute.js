const express = require('express');
const CourseRouter = express.Router();

const {getCourse, PostCourse, patchCourse, deleteCourse}= require('../../CONTROLLER/CourseController/CourseController');

CourseRouter.get('/viewCourse', getCourse);
CourseRouter.post('/addCourse', PostCourse);
CourseRouter.patch('/updateCourse/:course_id', patchCourse);
CourseRouter.delete('/deleteCourse/:course_id', deleteCourse);



module.exports = CourseRouter;