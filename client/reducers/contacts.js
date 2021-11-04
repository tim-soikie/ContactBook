import { STORE_ALL_CONTACTS, STORE_ONE_CONTACT, SAVE_CONTACT, REMOVE_CONTACT } from "../actions/contacts"

export default function contactReducer (state = [], action) {
    switch (action.type) {
        case STORE_ALL_CONTACTS:
            return action.contacts
        case STORE_ONE_CONTACT:
            return action.searchContact
        case SAVE_CONTACT:
            return [...state, action.contacts]
        case REMOVE_CONTACT:
            return state.filter(contact => (contact.id != action.id))
        default:
            return state
    }
} 