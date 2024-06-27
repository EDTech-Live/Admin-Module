const express = require('express');
const { getStudentProfile, postStudentProfile, patchStudentProfile, deleteStudentProfile } = require('../../CONTROLLER/StudentProfileController/StudentProfileController');
StudentProfileRouter = express.Router();

const {validateSchema} = require('../../CONTROLLER/StudentProfileController/StudentProfileValidation');
const upload = require('../../MODEL/multer');



StudentProfileRouter.get('/viewStudentProfle', getStudentProfile);
StudentProfileRouter.post('/addstudentprofile', upload.single("image"),validateSchema, postStudentProfile)
StudentProfileRouter.patch('/updatestudentProfile/:profile_id/:student_id', patchStudentProfile),
StudentProfileRouter.delete('/deleteProfile/:profile_id/:student_id', deleteStudentProfile);

module.exports = StudentProfileRouter;

























