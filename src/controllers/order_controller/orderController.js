const orderService = require('../../services/order_service/orderService');
const email = require('../../services/emailService')


/***************
 * GETs
***************/
const getOrders = async (req,res)=> {
    try {
        let orders = await orderService.getOrders();
        if(orders) res.status(200).send(orders)
        else res.status(404).send({error:'Orders not found'})
    } catch(e) {
        console.log(e);res.status(500).send({error:'Server internal error'})
    }
}

/***************
 * POSTS
***************/
const putOrder = async (req, res) => {
    const order = req.body;
    if(order.name && order.tel && order.emp && order.type && order.dni){
        try{
            let response = await orderService.putOrder(order);
            if(response == 'OK') res.status(200).send({message:"Order added successfully"});
            else {
                await email.sendemail_action(JSON.stringify({dni:order.dni, name:order.name, emp:order.emp, tel:order.tel, type:order.type}), JSON.stringify(response))
                res.status(401).send({error:"couldn't add the order"});
            }
        } catch(e) {
            // await email.sendemail_action(JSON.stringify({dni:order.dni, name:order.name, emp:order.emp, tel:order.tel, type:order.type}), JSON.stringify(e))
            res.status(500).send({error:"Internal server error"});
        }
    } else res.status(422).send({error:"order details missing"})
}

module.exports = { putOrder, getOrders }