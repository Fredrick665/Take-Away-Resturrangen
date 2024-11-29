export function sendResponse(status, data) {
    return {
        statusCode: status,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data }),
    };
}

export function sendError(status, data) {
    console.log('Error response:', { status, data });
    return {
        statusCode: status,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ success: false, data }),
    };
}



export const sendResponseWithHeaders = (statusCode, body, token) => {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': token,
        },
        body: JSON.stringify({
            data: body,
            token: token
        }),
    };
};



// Förfatare Fredrick
// Katerina ändrade från module.exports till export och uppdaterade funktionerna för att använda ES-modul syntax

