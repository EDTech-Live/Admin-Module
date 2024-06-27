const joi = require('joi')

const employeeSchema = joi.object({
    employee_id: joi.string().min(1).max(10).required(),
    employee_name: joi.string().min(2).max(100).required(),
    password: joi.string().required(),
    qualification: joi.string().required(),
    status: joi.string().required(),
    doj: joi.string().required()

    
})

const validateSchema = (req, res, next) => {
    const{error} = employeeSchema.validate(req.body);
    if(error){
        console.log(error);
        return res.send("invalid req");
    }
    else{
        next();
    }
   
}

module.exports = {validateSchema}