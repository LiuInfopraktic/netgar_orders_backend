const documentsService = require("../../services/documents_service/documentsService")

const getDocuments = async (req, res) => {
    try{
        let documents = await documentsService.getDocuments();
        console.log(documents)
        if(documents && documents.length > 0) res.status(200).send({data:documents})
        else res.status(404).send({error:'No documents found'})
    } catch(e){res.status(500).send({error:'Internal server error'})}
}

module.exports = { getDocuments }