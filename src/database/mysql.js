const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'patata',
  database: 'netgar_orders',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const connection = async () => {
  return await pool.getConnection();
};

module.exports = {connection}