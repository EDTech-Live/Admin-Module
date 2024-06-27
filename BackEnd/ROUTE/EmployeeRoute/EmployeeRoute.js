const express = require('express');
const EmployeeRouter = express.Router();
const {getEmployee, postEmployee, patchEmployee, deleteEmployee} = require('../../CONTROLLER/EmployeeController/EmployeeController')

const {validateSchema} = require('../../CONTROLLER/EmployeeController/employeeValidation')




EmployeeRouter.get('/viewemployee', getEmployee);
EmployeeRouter.post('/addemployee',validateSchema, postEmployee);
EmployeeRouter.patch('/patchemployee/:employee_id', patchEmployee);
EmployeeRouter.delete('/deleteemployee/:employee_id', deleteEmployee);

module.exports = EmployeeRouter;