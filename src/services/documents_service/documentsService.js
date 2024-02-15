const serviceDatabase = require("../../database/documents_database/documentsDatabase")
const dataService = require("../dateService")
/* GETs */
const getDocuments = async () => {// Supongamos que los resultados de la consulta están en la variable 'rows'
    let rows = await serviceDatabase.getDocuments();
    if(rows) {
        let result = [];
        
        rows.forEach(row => {
            let existingDocument = result.find(doc => doc.document_id === row.document_id);
            if (!existingDocument) { // add the document if it is not already listed
                let newDoc = {
                    document_id: row.document_id,
                    document_date: dataService.unixToDate(row.document_date),
                    document_due_date: dataService.unixToDate(row.document_due_date),
                    contact_name: row.contact_name,
                    articles_index:row.units,
                    articles: []
                };
                if(row.article_name){
                    newDoc.articles = [{
                        article_name: row.article_name,
                        units: row.units
                    }]
                }
                result.push(newDoc)
            } else { // add articles
                if(row.article_name){
                    existingDocument.articles_index+=row.units;
                    existingDocument.articles.push({
                        article_name: row.article_name,
                        units: row.units
                    });
                }
            }
    
        });
        
        return result
    } return false

}

module.exports = { getDocuments }