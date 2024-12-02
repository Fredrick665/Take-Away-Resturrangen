
import middy from "@middy/core";
import { getUserItem } from "../../services/getUserItem.js";
import { comparePasswords } from "../../utils/token.js";
import { generateJWT } from "../../utils/token.js";
import { sendResponse } from "../../responses/index.js";
import { validateLogin } from "../../middleware/validateLogin.js";
import { errorHandlerReg } from "../../middleware/errorHandlerReg.js";

export const loginUser = async (event) => {
    // Hämtar användarnamn och lösenord från indata
    const { username, password } = JSON.parse(event.body);

    try {
        // Försöker hämta användaren från databasen baserat på användarnamn
        console.log("Trying to fetch user with username:", username);
        const user = await getUserItem(username);
        console.log("Fetched user:", user);

        if (!user || !user.password) {
            console.error('User not found or password is missing');
            return sendResponse(404, { message: "Invalid username or password" });
        }

        // Jämför lösenordet från indata med det lagrade lösenordet
        const isPasswordValid = await comparePasswords(password, user.password);
        console.log("Password validation result:", isPasswordValid);

        if (!isPasswordValid) {
            return sendResponse(401, { message: "Invalid credentials." });
        }

        // Om lösenordet är korrekt, generera en JWT-token för användaren
        const token = generateJWT({ userId: user.userId, username: user.username, role: user.role });
        console.log("Generated JWT token:", token);

        return sendResponse(200, { message: "Login successful.", token });
    } catch (error) {
        console.error("Error during login:", error);
        throw new Error(error.message);
    }
};


export const handler = middy(loginUser)
    .use(validateLogin())
    .use(errorHandlerReg());





// Författare Katerina
// lagt till den fill för att inloggning kräver jämförelse av lösenord och generering av token.