const orderService = require('../../services/order_service/orderService');

/***************
 * POSTS
***************/
const putOrder = async (req, res) => {
    const order = req.body;
    console.log(order) // -> development
    if(order.name && order.tel && order.emp && order.type && order.dni){
        try{
            let response = await orderService.putOrder(order);
            if(response) res.status(200).send({message:"Order added successfully"});
            else res.status(401).send({error:"couldn't add the order"});
        } catch(e) {res.status(500).send({error:"Internal server error"});}
    } else res.status(422).send({error:"order details missing"})
}

const test = async (req, res) => {
    console.log('a');
    res.send({data:'OK'})
}

module.exports = { putOrder, test }