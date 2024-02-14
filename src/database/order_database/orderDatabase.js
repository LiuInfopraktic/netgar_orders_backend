const conn = require('../mysql');

/***************
 * GETs
***************/
const getOrders = async() => {
    const connection = await conn.connection();
    let sql = `select dni, name, company, phone_number, type, data from orders`;
    try{
        const [rows, fields] = await connection.execute(sql,[])
        return rows;
    }catch(err){
        console.log(err)
    } finally {
        connection.release();
    }
}

/***************
 * POSTs
***************/
const putOrder = async (order) => {
    const connection = await conn.connection();
    let sql = `insert into orders (dni, name, company, phone_number, type, data) values (?,?,?,?,?,?)`;
    try{
        const [rows, fields] = await connection.execute(sql,[order.dni, order.name, order.emp, order.tel, order.type,new Date()]);
        return rows;
    }catch(err){
        console.log(err)
    } finally {
        connection.release();
    }
}

module.exports = { putOrder, getOrders }