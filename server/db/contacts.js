const database = require("./connection.js")

//CRUD+1
function getAllContacts(userID, db=database){
    return db('contacts')
        .where("user_id", userID)
        .select()
}

function getSingleContact(userID, contactID, db=database){
    return db('contacts')
        .where("user_id", userID)
        .where("id", contactID)
        .select()
}

function addContact(userID, contact, db=database){
    //Apply formatting here before saving to DB
    const newContact = {
        user_id: userID,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        birthdate: contact.birthdate,
        last_chat: contact.last_chat,
        notes: contact.notes
    }

    return db('contacts')
        .insert(newContact)
}

function removeContact(userID, contactID, db=database){
    return db('contacts')
        .where("user_id", userID)
        .where("id", contactID)
        .select()
        .delete()
}

function editContact(userID, contact, contactID, db=database){
    //Apply formatting here before updating DB
    const updatedContact = {
        user_id: userID,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        birthdate: contact.birthdate,
        last_chat: contact.last_chat,
        notes: contact.notes
    }

    return db('contacts')
        .where("user_id", userID)
        .where("id", contactID)
        .update(updatedContact)
}

module.exports = {
    getAllContacts,
    getSingleContact,
    addContact,
    removeContact,
    editContact
  }