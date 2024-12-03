import Joi from 'joi';

const orderModel = Joi.object({
    id: Joi.string().required(),
    status: Joi.string().valid("locked", "completed", "pending").required(),
    orderItems: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            quantity: Joi.number().integer().min(1).required(),
        })
    ).required(),
    createdAt: Joi.string().isoDate().required(),
    message: Joi.string().optional(),
});

export default orderModel;


// Författare Katerina