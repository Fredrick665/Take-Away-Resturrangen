import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand } from "@aws-sdk/lib-dynamodb";

const orderTableName = "Orders_SwiftDeluxe";
const dynamoDBClient = new DynamoDBClient();

export const orderhistory = async (event) => {
  try {
    const orderId = event.pathParameters?.orderId;

    if (!orderId) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "orderId saknas i förfrågan.",
        }),
      };
    }

    const params = {
      TableName: orderTableName,
      Key: { id: orderId },
    };

    const { Item } = await dynamoDBClient.send(new GetCommand(params));

    if (!Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: `Order med id ${orderId} hittades inte.`,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(Item),
    };
  } catch (error) {
    console.error("Fel vid hämtning av order:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Det gick inte att hämta ordern.",
        error: error.message,
      }),
    };
  }
};
// Författare Fredrick
