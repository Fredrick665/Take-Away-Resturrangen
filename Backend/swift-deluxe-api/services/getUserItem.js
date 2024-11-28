
import { db } from './index.js';

export const getUserItem = async (username) => {
    console.log('Fetching user with username:', username);

    try {
        const params = {
            TableName: 'users-db',
            Key: { username }, // Partition key
        };

        const { Item } = await db.get(params);
        console.log('Fetched item:', Item);

        return Item || null;
    } catch (error) {
        console.error('Error fetching user by username:', error);
        console.error('Error stack:', error.stack);
        throw new Error('Error fetching user');
    }
};




///  Författare Katerina