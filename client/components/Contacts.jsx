import React, { useEffect } from "react"
import { connect } from 'react-redux'

import ContactList from "./ContactList"

import { getContacts } from "../actions/contacts"

function Contacts ({dispatch, contacts}) {
    
    useEffect(() => {
        dispatch(getContacts())
    }, [])

    return  (
        <>
            <div className="contactRowHeader">
                <p className="contactColumn">Name</p>
                <p className="contactColumn">Email</p>
                <p className="contactColumn">Phone</p>
                <p className="contactColumn">Birthday</p>
                <p className="contactColumn">Last Chat</p>
            </div>
            {contacts?
            <>
                {contacts.map(contact => {
                    return (
                        <ContactList key={contact.id} contact={contact} />
                    )
                })}
            </>
            : <p>Loading...</p>}
        </>
    )
}

function mapStateToProps (globalState) {
    return {
      contacts: globalState.contacts
    }
  }
  
export default connect(mapStateToProps)(Contacts)