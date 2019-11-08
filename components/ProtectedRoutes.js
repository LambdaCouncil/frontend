import React from "react"
import { Switch, Route, withRouter } from "react-router-native"

//import Home from './Home'
import SidePanel from "./SidePanel/SidePanel"
import UserPanel from "./SidePanel/UserPanel"
import Page404 from './Page404'

export default _ => (
    <Switch>
        {/* <Route exact path="/home" component={Home} /> */}
        <Route component={Page404} />
    </Switch>
)
