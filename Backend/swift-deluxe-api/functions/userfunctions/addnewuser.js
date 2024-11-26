import middy from '@middy/core';
import { validateRegistration } from "../../middleware/validateReg.js";
import { errorHandlerReg } from "../../middleware/errorHandlerReg.js";
import { db } from "../../services/index.js";
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export const registerUser = async (event) => {
    const { username, email, password, address, role } = JSON.parse(event.body);

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = uuidv4();

        await db.put({
            TableName: 'users-db',
            Item: {
                userId,
                username,
                email,
                password: hashedPassword,
                address,
                role,
            },
        });

        return {
            statusCode: 201,
            body: JSON.stringify({
                success: true,
                message: "User registered successfully.",
            }),
        };
    } catch (error) {
        console.error("Error registering user:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                message: "Error registering user.",
            }),
        };
    }
};

export const handler = middy(registerUser)
    .use(validateRegistration())
    .use(errorHandlerReg());



// Författare Katerina