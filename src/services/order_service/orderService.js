const orderDatabase = require('../../database/order_database/orderDatabase');

const putOrder = async (order) => {
    let response = await orderDatabase.putOrder(order);
    return response;
}

module.exports = {putOrder}