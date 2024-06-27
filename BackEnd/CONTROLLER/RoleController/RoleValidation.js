const joi = require('joi');

const roleSchema = joi.object({
    role_id: joi.string().min(1).max(10).required(),
    role_name: joi.string().min(2).max(100).required()
});

const validateSchema = (req, res, next) => {
    const { error } = roleSchema.validate(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send("Invalid request");
    } else {

        next();
    }
};
 
module.exports = { validateSchema };
