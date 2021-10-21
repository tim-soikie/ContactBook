import request from "superagent"

const baseURL = "api/v1/contactbook/contacts"

export function fetchAllContacts(){
    return request
        .get(baseURL)
        .then((res) => res.body)
}

export function fetchContact(contactID){
    return request
        .get(`${baseURL}/${contactID}`)
        .then((res) => res.body)
}

export function addContact(newContact){
    return request
        .post(`${baseURL}/addContact`)
        .send(newContact)
        .then((res) => res.body)
}

export function deleteContact(contactID){
    return request
        .get(`${baseURL}/removeContact/${contactID}`)
        .then((res) => res.body)
}

export function updateContact(newContact, contactID){
    return request
        .patch(`${baseURL}/editContact/${contactID}`)
        .send(newContact)
        .then((res) => res.body)
}