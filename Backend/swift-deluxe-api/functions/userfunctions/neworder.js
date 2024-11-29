const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const { v4: uuidv4 } = require("uuid");

const orderTableName = "Orders_SwiftDeluxe";

const dynamoDBClient = new DynamoDBClient({ region: "eu-north-1" });

exports.neworder = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    const { orderItems, message } = requestBody;

    if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "orderItems är obligatoriskt och måste vara en array",
        }),
      };
    }

    const orderId = uuidv4();

    const newOrder = {
      id: orderId,
      orderItems: orderItems,
      message: message || "",
      status: "PENDING",
      createdAt: new Date().toISOString(),
    };

    const params = {
      TableName: orderTableName,
      Item: newOrder,
    };

    await dynamoDBClient.send(new PutCommand(params));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Order skapad!", orderId: orderId }),
    };
  } catch (error) {
    console.error("Fel vid skapande av order:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Fel vid skapande av order" }),
    };
  }
};

//Författare Fredrick
// Ändring av Fredrick. La till funktionen att skicka med meddelanden med beställningen
