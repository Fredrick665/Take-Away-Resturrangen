import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

const orderTableName = "Orders_SwiftDeluxe";
const dynamoDBClient = new DynamoDBClient({ region: "eu-north-1" });

export const getOrders = async (event) => {
  try {
    const params = { TableName: orderTableName };
    const data = await dynamoDBClient.send(new ScanCommand(params));

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Ordrar hämtade!",
        orders: data.Items,
      }),
    };
  } catch (error) {
    console.error("Fel vid hämtning av ordrar:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Fel vid hämtning av ordrar" }),
    };
  }
};

//Författare Fredrick
