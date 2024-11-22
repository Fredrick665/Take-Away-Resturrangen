import { sendResponse } from "../responses/index.js";

export const errorHandlerReg = () => ({
    onError: (handler) => {
        console.error("Error occurred:", handler.error);
        const statusCode = handler.error.statusCode || 500;
        const message = handler.error.message || "Internal Server Error";
        handler.response = sendResponse(statusCode, { message });
        return Promise.resolve(); // Middy kräver att ett Promise returneras vid fel.
    },
});



// Förfatare Katerina