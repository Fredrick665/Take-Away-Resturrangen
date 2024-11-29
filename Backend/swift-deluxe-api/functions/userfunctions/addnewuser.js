
import middy from '@middy/core';
import { validateRegistration, validatePasswords, validateEmailAndUsername } from "../../middleware/validateReg.js";
import { sendResponse, sendError } from "../../responses/index.js";
import { db } from "../../services/index.js";
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { errorHandlerReg } from "../../middleware/errorHandlerReg.js";

export const registerUser = async (event) => {
    const { username, email, password, repeatPassword, address, role = 'user' } = JSON.parse(event.body);

    // Password Validation
    const passwordError = validatePasswords(password, repeatPassword);
    if (passwordError) {
        return sendError(400, passwordError);
    }

    // Email and username uniqueness validation
    const usernameEmailError = await validateEmailAndUsername(username, email);
    if (usernameEmailError) {
        return sendError(400, usernameEmailError);
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = uuidv4();

        await db.put({
            TableName: 'users-db',
            Item: {
                username,
                userId,
                email,
                password: hashedPassword,
                address,
                role,
            },
        });

        return sendResponse(201, { message: "User registered successfully." });
    } catch (error) {
        console.error("User registration error:", error);
        return sendError(500, "An error occurred while registering the user.");
    }
};

export const handler = middy(registerUser)
    .use(validateRegistration())
    .use(errorHandlerReg());




// Författare Katerina