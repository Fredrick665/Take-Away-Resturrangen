import { DynamoDB } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocument,
  UpdateCommand,
  GetCommand,
} from "@aws-sdk/lib-dynamodb";

const db = DynamoDBDocument.from(new DynamoDB());
const orderTableName = "Orders_SwiftDeluxe";

export const updateOrderItemsAndMessage = async (event) => {
  try {
    const { id, orderItems, message, status } = JSON.parse(event.body);

    if (!id || (!orderItems && !message && !status)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error:
            "Order ID samt minst ett av 'orderItems' eller 'message' krävs",
        }),
      };
    }

    const existingOrder = await db.send(
      new GetCommand({ TableName: orderTableName, Key: { id } })
    );
    if (!existingOrder.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Order hittades inte" }),
      };
    }

    const updateParams = {
      TableName: orderTableName,
      Key: { id },
      UpdateExpression:
        "SET " +
        (orderItems ? "#oi = :orderItems, " : "") +
        (message ? "#msg = :message, " : "") +
        (status ? "#st = :status, " : "") +
        "updatedAt = :updatedAt",
      ExpressionAttributeNames: {
        ...(orderItems && { "#oi": "orderItems" }),
        ...(message && { "#msg": "message" }),
        ...(status && { "#st": "status" }),
      },
      ExpressionAttributeValues: {
        ...(orderItems && { ":orderItems": orderItems }),
        ...(message && { ":message": message }),
        ...(status && { ":status": status }),
        ":updatedAt": new Date().toISOString(),
      },
      ReturnValues: "UPDATED_NEW",
    };

    const result = await db.send(new UpdateCommand(updateParams));
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Order uppdaterades framgångsrikt!",
        updatedAttributes: result.Attributes,
      }),
    };
  } catch (error) {
    console.error("Fel vid uppdatering av order:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Kunde inte uppdatera order" }),
    };
  }
};


// Författare Fredrick
