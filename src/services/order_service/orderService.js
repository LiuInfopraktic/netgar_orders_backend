const orderDatabase = require('../../database/order_database/orderDatabase');

const putOrder = async (user) => {
    let response = await orderDatabase.putOrder(user);
    return response;
}

module.exports = {putOrder}