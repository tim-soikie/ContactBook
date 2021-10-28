import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Contacts from './Contacts'
import Reminders from './Reminders'
import Navigator from './Navigator'

function App () {
  return (
    <>
      <BrowserRouter>
       <Route path="/" component={Navigator}/>
       <div className="mainContainer">
         <Route exact path="/dashboard" component={Dashboard}/>
         <Route exact path="/contacts" component={Contacts}/>
         <Route exact path="/reminders" component={Reminders}/>
       </div>
      </BrowserRouter>
    </>
  )
}

export default App
