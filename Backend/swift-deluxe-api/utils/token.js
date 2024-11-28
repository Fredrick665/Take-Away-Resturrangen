import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

// Tokengenerering och lösenordshasning.

const saltRounds = 10;

// Lösenords-hashningsfunktion
export const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

// Lösenordsjämförelsefunktion (användarlösenord vs lösenord i databasen)
export const comparePasswords = async (password, storedPassword) => {
    const isEqual = await bcrypt.compare(password, storedPassword);
    return isEqual;
};

// Funktion för att generera JWT (token)
export const generateJWT = (user) => {
    const payload = {
        // userId: user.userId,
        username: user.username,
        // role: user.role
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
};

// Funktion för JWT-verifiering
export const verifyJWT = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;  // Om token är ogiltig kommer den att returnera null
    }
};




// Författere Katerina