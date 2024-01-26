const contactsDatabase = require("../../database/contacts_database/contactsDatabase")

// GETs
const getContacts = async () => {
    let response =  await contactsDatabase.getContacts();
    return response
}

module.exports = { getContacts }