import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDB();
const db = DynamoDBDocument.from(client);

export { db };



// Förttatare Fredrick
//Katerina ändrade från const och module.exports till import och export syntax för att använda ES-moduler  