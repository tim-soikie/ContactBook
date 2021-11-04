import React from "react"
import { connect } from 'react-redux'

function ContactDetails ({contact}) {
    return  (
        <>
            <p>Details go here</p>
        </>
    )
}

export default connect()(ContactDetails)