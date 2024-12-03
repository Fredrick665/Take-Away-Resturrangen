
import orderModel from '../models/ordermodel.js';

export const validateProduct = (event) => {
    let requestBody;
    try {
        requestBody = JSON.parse(event.body);
    } catch (err) {
        throw new Error("Invalid JSON in request body");  // Om JSON är ogiltigt
    }

    // Datavalidering enligt orderModel
    const { error } = orderModel.validate(requestBody);
    if (error) {
        throw new Error(`Invalid request data: ${error.details.map(x => x.message).join(", ")}`);
    }

    return requestBody;
};



// Författare Katerina
