import React from "react"
import { connect } from 'react-redux'

function ContactList ({contact}) {
    return  (
        <div className="contactRow">
            <p className="contactColumn">{contact.name}</p>
        </div>
    )
}

export default connect()(ContactList)