const joi = require('joi');

const StudentProfileSchema = joi.object({
    profile_id: joi.string().min(1).max(10).required(),
    student_id: joi.string().min(1).max(10).required(),
    gender: joi.string().required(),
    email: joi.string().email().required(),
    document: joi.string().required(),
    address: joi.string().required(),
    city: joi.string().required(),
    state: joi.string().required(),
    nationality: joi.string().required(),
    profile_photo: joi.string(),
    doj: joi.string().required(),
    dob: joi.string().required(),




})

const validateSchema = (req, res, next)=> {
    const{error} = StudentProfileSchema.validate(req.body);
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