
// import { UpdateCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
// import { db } from "../../services/index.js";
// import { sendResponse, sendError } from "../../responses/index.js";

// export const lockOrder = async (event) => {
//     console.log("Received event:", JSON.stringify(event));

//     const { id, status } = JSON.parse(event.body);

//     if (!id || !status) {
//         return sendError(400, "Order ID and status are required");
//     }

//     if (status.toLowerCase() !== "locked") {
//         return sendError(400, "Invalid status value. Only 'locked' is allowed.");
//     }

//     try {
//         console.log("Fetching existing order with ID:", id);

//         const existingOrder = await db.send(
//             new GetCommand({
//                 TableName: "Orders_SwiftDeluxe",
//                 Key: { id },
//             })
//         );

//         if (!existingOrder.Item) {
//             console.log("Order not found for ID:", id);
//             return sendError(404, "Order not found");
//         }

//         console.log("Updating order status to LOCKED for ID:", id);

//         const updateParams = {
//             TableName: "Orders_SwiftDeluxe",
//             Key: { id },  // id wybrane przez admina
//             UpdateExpression: "SET #status = :status, updatedAt = :updatedAt",
//             ExpressionAttributeNames: {
//                 "#status": "status",
//             },
//             ExpressionAttributeValues: {
//                 ":status": "locked",  // Zmiana statusu na 'locked'
//                 ":updatedAt": new Date().toISOString(),

//             },
//             ReturnValues: "UPDATED_NEW",
//         };

//         const result = await db.send(new UpdateCommand(updateParams));

//         console.log("Update result:", result);

//         return sendResponse(200, {
//             message: "Order successfully locked!",
//             updatedAttributes: result.Attributes,
//         });
//     } catch (error) {
//         console.error("Error locking order:", error);
//         return sendError(500, "Could not lock the order");
//     }
// };


// // Författare Katerina



import { sendResponse, sendError } from "../../responses/index.js";

export const lockOrder = async (event) => {
    console.log("Received event:", JSON.stringify(event));

    const { id, status } = JSON.parse(event.body);

    if (!id || !status) {
        return sendError(400, "Order ID and status are required");
    }

    if (status.toLowerCase() !== "locked") {
        return sendError(400, "Invalid status value. Only 'locked' is allowed.");
    }

    // Symulacja testowych danych w tabeli
    const mockDatabase = [
        {
            id: "123",
            status: "pending",
            orderItems: [{ name: "item1", quantity: 1 }],
            createdAt: "2024-12-03T10:00:00Z",
            message: "Test order",
        },
        {
            id: "456",
            status: "completed",
            orderItems: [{ name: "item2", quantity: 2 }],
            createdAt: "2024-12-03T11:00:00Z",
            message: "Another test order",
        },
    ];

    try {
        console.log("Checking for existing order with ID:", id);

        // Symulowanie pobrania zamówienia z bazy
        const existingOrder = mockDatabase.find((order) => order.id === id);

        if (!existingOrder) {
            console.log("Order not found for ID:", id);
            return sendError(404, "Order not found");
        }

        console.log("Updating order status to LOCKED for ID:", id);

        // Symulacja aktualizacji statusu
        existingOrder.status = "locked";
        existingOrder.updatedAt = new Date().toISOString();

        console.log("Update result:", existingOrder);

        return sendResponse(200, {
            message: "Order successfully locked!",
            updatedOrder: existingOrder,
        });
    } catch (error) {
        console.error("Error locking order:", error);
        return sendError(500, "Could not lock the order");
    }
};
