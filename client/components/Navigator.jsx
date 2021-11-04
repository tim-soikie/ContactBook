import React from "react"
import { NavLink } from "react-router-dom";

function Navigator () {
    return  (
        <>
            <div className="navbar">
                <NavLink to="/dashboard" className="navItem" activeClassName="navActive">
                    Dashboard
                </NavLink>
                <NavLink to="/contacts" className="navItem" activeClassName="navActive"> 
                    Contacts
                </NavLink>
                <NavLink to="/reminders" className="navItem" activeClassName="navActive">
                    Reminders
                </NavLink>
            </div>
        </>
    )
}

export default Navigator