import userSchema from "../models/usermodel.js";

export const validateRegistration = () => ({
    before: (handler) => {
        const body = handler.event.body ? JSON.parse(handler.event.body) : {};
        const { error } = userSchema.validate(body);

        if (error) {
            throw new Error(error.details[0].message);
        }
    }
});



// Förtfattare Katerina