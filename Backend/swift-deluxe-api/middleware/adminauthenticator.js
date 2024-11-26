
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;

export const adminAuthenticator = () => ({
    before: async (handler) => {
        // Hämta auktoriseringshuvudet
        const authHeader = handler.event.headers.Authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.error('No token provided');
            throw new Error('Unauthorized: No token provided');
        }

        const token = authHeader.split(' ')[1];

        try {
            // Tokenverifiering
            const decoded = jwt.verify(token, jwtSecret);
            console.log('Decoded token:', decoded);

            // Lägger till en användare till händelsen
            handler.event.user = decoded;

            // Rollverifiering
            if (decoded.role !== 'admin') {
                console.error('Access denied: User is not an admin');
                throw new Error('Forbidden: Only admins are allowed');
            }
        } catch (err) {
            console.error('Authentication error:', err.message);
            throw new Error(err.message === 'jwt expired' ? 'Token expired' : 'Unauthorized: Invalid token');
        }
    },
});





// Författare Katerina 