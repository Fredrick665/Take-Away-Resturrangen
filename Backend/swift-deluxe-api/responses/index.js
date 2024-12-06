const cspHeader =
  "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; img-src 'self' https://images.unsplash.com https://swiftdeluxeimages.s3.eu-north-1.amazonaws.com;";

export const sendResponse = (statusCode, body) => {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "Content-Security-Policy": cspHeader,
    },
    body: JSON.stringify({
      data: body,
    }),
  };
};

export function sendError(status, data) {
  console.log("Error response:", { status, data });
  return {
    statusCode: status,
    headers: {
      "Content-Type": "application/json",
      "Content-Security-Policy": cspHeader,
    },
    body: JSON.stringify({ success: false, data }),
  };
}

export const sendResponseWithHeaders = (statusCode, body, token) => {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      //'Authorization': token,
      "Content-Security-Policy": cspHeader,
    },
    body: JSON.stringify({
      data: body,
      token: token,
    }),
  };
};

// Förfatare Fredrick
// Katerina ändrade från module.exports till export och uppdaterade funktionerna för att använda ES-modul syntax
// Ändring av Fredrick La till CSP.
