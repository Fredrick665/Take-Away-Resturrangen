import Joi from 'joi';

const userSchema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    repeatPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'any.only': 'Passwords must match', //Felmeddelande om lösenorden skiljer sig åt.
    }),
    address: Joi.string().required(),
    role: Joi.string().valid('user', 'admin').default('user'),
});

export default userSchema;


// Författare Katerina