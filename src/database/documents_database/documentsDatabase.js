const conn = require('../mysql');

const getDocuments = async () => {
    const connection = await conn.connection();
    let sql = `SELECT
    d.id AS document_id,
    d.date AS document_date,
    d.due_date AS document_due_date,
    c.name AS contact_name,
    a.name AS article_name,
    da.units
    FROM
        documents d
    JOIN
        contacts c ON d.contact = c.id
    JOIN
        document_articles da ON d.id = da.document
    JOIN
        articles a ON da.article = a.name;`;
    try{
        const [rows, fields] = await connection.execute(sql,[]);
        return rows;
    }catch(err){
        console.log(err)
    } finally {
        connection.release();
    }
}

module.exports = { getDocuments }
