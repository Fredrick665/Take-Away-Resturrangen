
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { db } = require('../../services/index.js');
const { sendResponse, sendError } = require('../../responses/index.js');
const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

exports.handler = async (event) => {
    console.log('Incoming event:', event);
    const { fullName, email, password, address, role = 'user' } = JSON.parse(event.body);
    console.log('User data:', { fullName, email, password, address, role });
    // Walidacja
    if (!fullName || !email || !password || !address || !role) {
        console.log('Validation failed: Missing fields');
        return sendError(400, "All fields are required.");
    }

    if (role !== 'user' && role !== 'admin') {
        return sendError(400, "Invalid role. Allowed values are 'user' or 'admin'.");
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = uuidv4();

        // Domyślna role 'user'
        const role = 'user';

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

        console.log('User data inserted into database');

        const token = jwt.sign({ userId, email, role }, jwtSecret, {
            expiresIn: '1h',
        });    // giltigt 1 timme

        console.log('JWT token generated:', token);

        return sendResponse(201, {
            message: "User registered successfully.",
            token: token,

        });

    } catch (error) {
        console.error("Error registering user:", error);
        return sendError(500, "Error registering user.");
    }
};

