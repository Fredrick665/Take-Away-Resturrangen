
import { UpdateCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import { db } from "../../services/index.js";
import { sendResponse, sendError } from "../../responses/index.js";
import { validateProduct } from "../../middleware/validateproduct.js";

export const lockOrder = async (event) => {
    console.log("Received event:", JSON.stringify(event));

    let requestBody;
    try {
        requestBody = validateProduct(event);  // validate
    } catch (err) {
        console.error("Validation or Parsing Error:", err);
        return sendError(400, err.message);
    }

    const { id, status } = requestBody;

    // Kontrola statusu
    if (status.toLowerCase() !== "locked") {
        return sendError(400, "Invalid status value. Only 'locked' is allowed.");
    }

    try {
        console.log("Fetching existing order with ID:", id);

        // Kontrolerar om beställning fins
        const existingOrder = await db.send(
            new GetCommand({
                TableName: "Orders_SwiftDeluxe",
                Key: { id },
            })
        );

        if (!existingOrder.Item) {
            console.log("Order not found for ID:", id);
            return sendError(404, "Order not found");
        }

        console.log("Updating order status to LOCKED for ID:", id);

        const updateParams = {
            TableName: "Orders_SwiftDeluxe",
            Key: { id },
            UpdateExpression: "SET #status = :status, updatedAt = :updatedAt",
            ExpressionAttributeNames: {
                "#status": "status",
            },
            ExpressionAttributeValues: {
                ":status": "locked",
                ":updatedAt": new Date().toISOString(),
            },
            ReturnValues: "UPDATED_NEW",
        };

        // Uppdatera orderstatus
        const result = await db.send(new UpdateCommand(updateParams));

        console.log("Update result:", result);

        return sendResponse(200, {
            message: "Order successfully locked!",
            updatedAttributes: result.Attributes,
        });
    } catch (error) {
        console.error("Error locking order:", error);
        return sendError(500, "Could not lock the order");
    }
};



//Författare Katerina