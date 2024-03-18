const orderDatabase = require('../../database/order_database/orderDatabase');
const dateService = require('../dateService')

/***************
 * GETs
***************/
const getOrders = async () => {
    let orders = await orderDatabase.getOrders();
    orders.forEach((o) => {
        o.data = dateService.DBToDate(o.data)
    })
    return orders;
}

/***************
 * POSTs
***************/
const putOrder = async (order) => {
    let response = await orderDatabase.putOrder(order);
    return response;
}

module.exports = {putOrder,getOrders}