import React from "react"
import { connect } from 'react-redux'

function ContactList ({contact}) {
    return  (
        <div className="contactRow">
            <p className="contactColumn">{contact.name}</p>
            <p className="contactColumn">{contact.email}</p>
            <p className="contactColumn">{contact.phone}</p>
            <p className="contactColumn">{contact.birthdate}</p>
            <p className="contactColumn">{contact.last_chat}</p>
        </div>
    )
}

export default connect()(ContactList)