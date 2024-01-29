const orderService = require('../../services/order_service/orderService');

/***************
 * POSTS
***************/
const putOrder = async (req, res) => {
    const order = req.body;
    if(order.name && order.tel && order.emp && order.type && order.dni){
        try{
            let response = await orderService.putOrder(order);
            if(response) res.status(200).send({message:"Order added successfully"});
            else res.status(401).send({error:"couldn't add the order"});
        } catch(e) {res.status(500).send({error:"Internal server error"});}
    } else res.status(422).send({error:"order details missing"})
}

const test = async (req,res) => {
    console.log('aaaa')
    const axios = require('axios');

    const apiUrl = 'https://api.holded.com/api/invoicing/v1/contacts'; // Reemplaza con la URL de la API externa
    const apiKey = '502ad34baa7d93be0c143d3e63766904'; // Reemplaza con tu clave de autenticación
    
    axios({
      method: 'get', // Puedes usar 'post', 'put', etc., según el tipo de solicitud que necesites
      url: apiUrl,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json' // Ajusta según las necesidades de la API
      },
      // Puedes agregar datos en el cuerpo de la solicitud si es necesario (para métodos como 'post' o 'put')
      // data: {
      //   key: 'value'
      // }
    })
      .then(response => {
        console.log('Respuesta de la API:', response.data);
      })
      .catch(error => {
        console.log(error)
        console.error('Error al hacer la solicitud a la API:', error.message);
      });
    
}

module.exports = { putOrder, test }