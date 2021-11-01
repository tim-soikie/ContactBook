import React, { useEffect } from "react"
import { connect } from 'react-redux'

import Contact from "./Contact"

import { getContacts } from "../actions/contacts"

function Contacts ({dispatch, contacts}) {
    useEffect(() => {
        dispatch(getContacts())
    }, [])

    return  (
        <>
            {contacts?
            <>
                {contacts.map(contact => {
                    return (
                        <Contact key={contact.id} contact={contact} />
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