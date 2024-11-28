import loginSchema from "../models/loginmodel.js";

export const validateLogin = () => ({
    before: (handler) => {
        // Validerar inloggningsuppgifter
        const { error } = loginSchema.validate(JSON.parse(handler.event.body));
        if (error) {
            // Om validering misslyckas, logga felet och kasta ett undantag
            console.error("Validation error:", error.details[0].message);
            throw new Error(`Validation error: ${error.details[0].message}`);
        }
    },
});




// Förfatare Katerina