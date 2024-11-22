
import middy from '@middy/core';
import { validateRegistration } from "../../middleware/validateReg.js";
import { errorHandlerReg } from "../../middleware/errorHandlerReg.js";
import { db } from "../../services/index.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

// Hämta JWT-hemligheten från miljövariabler
// (JWT Secret är en säkerhetsnyckel som används för att signera och verifiera JSON Web Tokens)
const jwtSecret = process.env.JWT_SECRET;

export const addNewUser = async (event) => {
    console.log("Event received:", event);
    const { fullName, email, password, address, role } = JSON.parse(event.body);

    try {
        // Kryptera lösenordet innan vi sparar användaren
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = uuidv4();

        await db.put({
            TableName: 'user-db',
            Item: {
                userId,
                fullName,
                email,
                password: hashedPassword,
                address,
                role,
            },
        });

        // Skapa en JWT-token för den nya användaren
        const token = jwt.sign({ userId, email, role }, jwtSecret, {
            expiresIn: '1h',
        });

        return {
            statusCode: 201,
            body: JSON.stringify({
                success: true,
                message: "User registered successfully.",
                token,
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

// Använda middy för att applicera middleware-funktioner
export const handler = middy(addNewUser)
    .use(validateRegistration())
    .use(errorHandlerReg());



// Författare Katerina