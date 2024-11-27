// import middy from '@middy/core';
// import { validateRegistration } from "../../middleware/validateReg.js";
// import { errorHandlerReg } from "../../middleware/errorHandlerReg.js";
// import { db } from "../../services/index.js";
// import bcrypt from 'bcryptjs';
// import { v4 as uuidv4 } from 'uuid';

// export const registerUser = async (event) => {
//     const { username, email, password, address, role } = JSON.parse(event.body);

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const userId = uuidv4();

//         await db.put({
//             TableName: 'users-db',
//             Item: {
//                 userId,
//                 username,
//                 email,
//                 password: hashedPassword,
//                 address,
//                 role,
//             },
//         });

//         return {
//             statusCode: 201,
//             body: JSON.stringify({
//                 success: true,
//                 message: "User registered successfully.",
//             }),
//         };
//     } catch (error) {
//         console.error("Error registering user:", error);
//         return {
//             statusCode: 500,
//             body: JSON.stringify({
//                 success: false,
//                 message: "Error registering user.",
//             }),
//         };
//     }
// };

// export const handler = middy(registerUser)
//     .use(validateRegistration())
//     .use(errorHandlerReg());



import middy from '@middy/core';
import { validateRegistration } from "../../middleware/validateReg.js";
import { errorHandlerReg } from "../../middleware/errorHandlerReg.js";
import { db } from "../../services/index.js";
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

// Funkcja rejestracji użytkownika
export const registerUser = async (event) => {
    const { username, email, password, repeatPassword, address, role = 'user' } = JSON.parse(event.body);

    // Walidacja, czy hasła się zgadzają
    if (password !== repeatPassword) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                success: false,
                message: "Hasła muszą być takie same.",
            }),
        };
    }

    try {
        // Hashowanie hasła
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generowanie unikalnego ID użytkownika
        const userId = uuidv4();

        // Sprawdzenie, czy użytkownik już istnieje w bazie danych (unikalność username/email)
        const existingUsername = await db.get({
            TableName: 'users-db',
            Key: { username },
        });


        if (existingUsername.Item) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    success: false,
                    message: "Nazwa użytkownika jest już zajęta.",
                }),
            };
        }

        const existingEmail = await db.scan({
            TableName: 'users-db',
            FilterExpression: "email = :email",
            ExpressionAttributeValues: {
                ":email": email,
            },
        });

        if (existingEmail.Items && existingEmail.Items.length > 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    success: false,
                    message: "E-mail jest już zajęty.",
                }),
            };
        }


        // Dodanie użytkownika do bazy danych
        await db.put({
            TableName: 'users-db',
            Item: {
                username,      // Klucz główny (PK)
                userId,
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
                message: "Użytkownik zarejestrowany pomyślnie.",
            }),
        };
    } catch (error) {
        console.error("Błąd rejestracji użytkownika:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                message: "Wystąpił błąd przy rejestracji użytkownika.",
            }),
        };
    }
};

// Middleware do rejestracji
export const handler = middy(registerUser)
    .use(validateRegistration())  // Walidacja danych przed rejestracją
    .use(errorHandlerReg());  // Obsługa błędów



// Författare Katerina