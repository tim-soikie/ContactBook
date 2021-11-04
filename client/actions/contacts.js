import { fetchAllContacts, fetchContact, addContact, deleteContact, updateContact } from "../apis/contacts"

export const STORE_ALL_CONTACTS = "STORE_ALL_CONTACTS"
export const STORE_ONE_CONTACT = "STORE_ONE_CONTACT"
export const SAVE_CONTACT = "SAVE_CONTACT"
export const REMOVE_CONTACT = "REMOVE_CONTACT"

//ACTIONS

function storeContacts (contacts) {
    return {
        type: STORE_ALL_CONTACTS,
        contacts
    }
}

function storeContact (contact) {
    return {
        type: STORE_ONE_CONTACT,
        searchContact: contact
    }
}

function saveContact (contact) {
    return {
        type: SAVE_CONTACT,
        contact
    }
}

function removeContact (id) {
    return {
        type: REMOVE_CONTACT,
        id
    }
}

//THUNKS

export function getContacts(){
    return (dispatch) => {
        fetchAllContacts()
            .then(contacts => {
                dispatch(storeContacts(contacts))
            })
    }
}

export function getContact(id){
    return (dispatch) => {
        fetchContact(id)
            .then(contact => {
                dispatch(storeContact(contact))
            })
    }
}

export function createContact(contactInfo){
    return (dispatch) =>  {
        addContact(contactInfo)
            .then(contact => {
                dispatch(saveContact(contact))
            })
    }
}

export function deleteBeerThunk(id) {
    return (dispatch) => {
        deleteContact(id)
            .then(() => {
                dispatch(removeContact(id))
            })
    }
}

export function changeContact(contactInfo, contactID) {
    return (dispatch) => {
        updateContact(contactInfo, contactID)
            .then(() => {
                dispatch(saveContact(contactInfo))
            })
    }
}