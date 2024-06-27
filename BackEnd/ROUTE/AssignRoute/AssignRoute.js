const express = require('express');
const AssignRouter = express.Router();
const {getAssign, postAssign, updateAssign, deleteAssign, getOneRoleAssign} = require('../../CONTROLLER/AssignController/AssignController');


AssignRouter.get('/viewassign', getAssign);
AssignRouter.post('/addassign', postAssign);
AssignRouter.patch('/updateassign/:role_id/:employee_id',updateAssign);
AssignRouter.delete('/deleteassign/:role_id/:employee_id', deleteAssign);
AssignRouter.get('/getOneAssign/:employee_id', getOneRoleAssign)







module.exports = AssignRouter;
