const joi = require('joi');

const TeacherProfileSchema = joi.object({
    profile_id: joi.string().min(1).max(10).required(),
    teacher_id: joi.string().min(1).max(10).required(),
    gender: joi.string().required(),
    email: joi.string().email().required(),
    document: joi.string().required(),
    address: joi.string().required(),
    city: joi.string().required(),
    state: joi.string().required(),
    marital_status: joi.string().required(),
    nationality: joi.string().required(),
    salary: joi.number().required(),
    profile_photo: joi.string().required(),
    doj: joi.string().required(),
    dob: joi.string().required(),
    
})

const validateSchema = (req, res, next)=> {
    const{error} = TeacherProfileSchema.validate(req.body);
    if(error){
        console.log(error);
        return res.send("invalid req");

    }
    else {
        res.send("Registered Successfully")
    }
    next();
}

module.exports = { validateSchema };