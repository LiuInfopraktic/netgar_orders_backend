const conn = require('../mysql');

const getContacts = async () => {
    const connection = await conn.connection();
    let sql = `select * from contacts`;
    try{
        const [rows, fields] = await connection.execute(sql,[]);
        return rows;
    }catch(err){
        console.log(err)
    } finally {
        connection.release();
    }
}

module.exports = { getContacts }