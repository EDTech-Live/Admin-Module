const express = require('express');

const EmployeeProfileRouter = express.Router();

const {getEmployeeProfile, postEmployeeProfile, patchEmployeeProfile, deleteEmployeeProfile, getSingleEmployee} = require('../../CONTROLLER/EmployeeProfileController/EmployeeProfileController')

EmployeeProfileRouter.get('/viewEmployeeProfile', getEmployeeProfile)
EmployeeProfileRouter.post('/addEmployeeProfile', postEmployeeProfile);
EmployeeProfileRouter.patch('/updateEmployeeProfile/:profile_id/:employee_id', patchEmployeeProfile);
EmployeeProfileRouter.delete('/deleteEmployeeProfile/:profile_id/:employee_id', deleteEmployeeProfile);
EmployeeProfileRouter.get('/plusEmployee/:employee_id', getSingleEmployee)




module.exports = EmployeeProfileRouter;