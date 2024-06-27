const express = require('express');
const RoleRouter = express.Router();
const {getRole, postRole, patchRole, deleteRole} = require('../../CONTROLLER/RoleController/RoleController');
const { validateSchema } = require('../../CONTROLLER/RoleController/RoleValidation');

RoleRouter.get('/viewrole', getRole);
RoleRouter.post('/addrole', validateSchema ,postRole);
RoleRouter.patch('/updaterole/:role_id', patchRole);
RoleRouter.delete('/deleterole/:role_id', deleteRole);




module.exports= RoleRouter;


