const joi = require('joi');

const TeacherControllerSchema = joi.object({
    teacher_id: joi.string().min(1).max(10).required(),
    teacher_name: joi.string().required(),
    password: joi.string().required(),
    qualification: joi.string().required(),
    status: joi.string().required(),
    specialization: joi.string().required()
    
})


const validateSchema = (req, res, next)=> {
    const{error} = TeacherControllerSchema.validate(req.body);
    if(error){
        console.log(error);
        return res.send("invalid req");

    }
    else {
        next();
    }
   
}

module.exports = { validateSchema };

