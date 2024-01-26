const contactsService = require("../../services/contacts_service/contactsService")


// GETs
const getContacts = async (req, res) => {
    try {
        let contacts = await contactsService.getContacts()
        if(contacts && contacts.length > 0) res.status(200).send({data:contacts})
        else res.status(404).send({error:'No contacts found'})
    } catch(e){res.status(500).send({error:'Internal server error'})}
}

module.exports = {getContacts}