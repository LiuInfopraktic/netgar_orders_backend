const conn = require('../mysql');

const login = async (user) => {
    try{
        const connection = await conn.connection();
        let sql = "select * from user where user = ? and password = ?";
        const [rows, fields] = await connection.execute(sql,[user.user, user.pass]);
        let response = '';
        if(rows.length > 0) response = rows[0] // user & pass match
        else { // user or pass are wrong... discover which one ->
            sql = "select * from user where user = ?";
            const [rows, fields] = await connection.execute(sql,[user.user]);
            if(rows.length > 0) response = "wrong password";
            else response = `user doesn't exist`;
        }
        return response;
    }catch(err){
    } finally {
        connection.release();
    }
}

module.exports = { login }