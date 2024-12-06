import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";

const orderTableName = "Orders_SwiftDeluxe";

const dynamoDBClient = new DynamoDBClient();

export const deleteOrder = async (event) => {
  try {
    const orderId = event.pathParameters?.orderId;

    if (!orderId) {
      throw new Error("orderId saknas i förfrågan.");
    }

    const deleteCommand = new DeleteCommand({
      TableName: orderTableName,
      Key: { id: orderId },
    });

    const result = await dynamoDBClient.send(deleteCommand);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Order med id ${orderId} har raderats.`,
        result,
      }),
    };
  } catch (error) {
    console.error("Fel vid radering:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Det gick inte att radera ordern.",
        error: error.message,
      }),
    };
  }
};

// Författare Fredrick
