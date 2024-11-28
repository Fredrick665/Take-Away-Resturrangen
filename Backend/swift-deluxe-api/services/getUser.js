import { db } from './index.js';

// Hämta en användare från databasen via e-post.

export const getUser = async (username) => {
    console.log(`Fetching user with username: ${username}`);
    try {
        const { Item } = await db.get({
            TableName: 'users-db',
            Key: {
                username: username    //PK
            },
        });
        console.log('User fetched:', Item);

        return Item;
    } catch (error) {
        console.error('Error getting user:', error);
        throw new Error('Error fetching user from database');
    }
};


// Författare Katerina