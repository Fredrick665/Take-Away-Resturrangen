import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDB();
const db = DynamoDBDocument.from(client);

const tableName = process.env.DYNAMODB_TABLE;

export const getMenuItems = async () => {
  const params = {
    TableName: tableName,
  };

  try {
    const result = await db.send(new ScanCommand(params));

    console.log("Successfully retrieved menu items:", result.Items);

    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (error) {
    console.error("Error occurred while retrieving menu items:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not retrieve menu items" }),
    };
  }
};

//Författare Fredrick
