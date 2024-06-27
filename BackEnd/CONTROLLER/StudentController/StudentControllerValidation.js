const joi = require('joi');

const StudentControllerSchema = joi.object({
    student_id: joi.string().required(),
    student_name: joi.string().required(),
    password: joi.string().required(),
    status: joi.string().required(),
    education: joi.string().required()
    
})


const validateSchema = (req, res, next)=> {
    const{error} = StudentControllerSchema.validate(req.body);
    if(error){
        console.log(error);
        return res.send("invalid req");

    }
    else {
        next();
    }
    
}

module.exports = { validateSchema };

