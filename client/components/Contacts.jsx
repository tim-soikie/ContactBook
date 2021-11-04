import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'

import ContactList from "./ContactList"

import { getContacts } from "../actions/contacts"
import ContactDetails from "./ContactDetails"

function Contacts ({dispatch, contacts}) {
    
    useEffect(() => {
        dispatch(getContacts())
    }, [])

    const [currentContact, setCurrentContact] = useState({});

    const findCurrentContactDetails = (id) => {
        return setCurrentContact(contacts.find(contact => contact.id === id ))
    }

    return  (
        <>
            <div className="contactRowHeader">
                <p className="contactColumn">Contacts</p>
            </div>
        <div className="contactContainer">
            <div className="contactColumnList">
                {contacts?
                <>
                    {contacts.map(contact => {
                        return (
                            <ContactList key={contact.id} contact={contact} />
                        )
                    })}
                </>
                : <p>Loading...</p>}
            </div>
            <div className="contactDetails">
                {currentContact.id?
                <>
                    <ContactDetails contact={currentContact}/>
                </>
                : <p>Select A contact to view details</p>}
            </div>
        </div>
        </>
    )
}

function mapStateToProps (globalState) {
    return {
      contacts: globalState.contacts
    }
  }
  
export default connect(mapStateToProps)(Contacts)