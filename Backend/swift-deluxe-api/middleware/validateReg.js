import userSchema from "../models/usermodel.js";
import { db } from '../services/index.js';


export const validateRegistration = () => ({
    before: (handler) => {
        const body = handler.event.body ? JSON.parse(handler.event.body) : {};
        const { error } = userSchema.validate(body);

        if (error) {
            throw new Error(`Validation error: ${error.details[0].message}`);    // felobjektet som returneras av Joi
        }
    }
});


export const validatePasswords = (password, repeatPassword) => {
    if (password !== repeatPassword) {
        return "Passwords must be the same.";
    }

    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    return null;
};


export const validateEmailAndUsername = async (username, email) => {
    const existingUsername = await db.get({
        TableName: 'users-db',
        Key: { username },
    });

    if (existingUsername.Item) {
        return "Username is already taken.";
    }

    const existingEmail = await db.scan({
        TableName: 'users-db',
        FilterExpression: "email = :email",
        ExpressionAttributeValues: {
            ":email": email,
        },
    });

    if (existingEmail.Items && existingEmail.Items.length > 0) {
        return "E-mail is already taken.";
    }

    return null;
};




// Förtfattare Katerina