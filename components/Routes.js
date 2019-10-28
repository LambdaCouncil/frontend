import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, withRouter, Route, Redirect } from 'react-router-native'
import { View, Spinner, Container } from 'native-base'

import ActionSheets from './ActionSheets'
import firebase from '../firebase'
import Register from './Register'
import Login from './LogIn'
import Root from '../Root'
import Donations from './Donations/Donations'
import ProtectedRoutes from "./ProtectedRoutes"
import { setUser, clearUser } from "../actions"
import CompleteProfile from "./CompleteProfile"
import EditProfile from "./Settings/EditProfile"
import ChangePassword from "./Settings/ChangePassword"
import Settings from "./Settings/Settings"
import PushNotifications from "./Settings/PushNotifications"
import SubmitFeedback from "./Settings/SubmitFeedback"
import Header from "./Header/Header"
import Messages from "./Messages/Messages"
import Discussions from "./Discussions/Discussions"
import Agendas from "./Agendas/Agendas"
import Assignments from './Assignments'
import RateCouncils from './Settings/RateCouncils'

const Routes = props => {
  useEffect(_ => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        props.setUser(user)
        props.history.push("/home")
      } else {
        props.history.push("/")
        props.clearUser()
      }
    })
  }, [])


  const renderHeaderIf = _ => {
    if (props.location.pathname !== '/' && props.location.pathname !== '/register' && props.location.pathname !== '/login') return <Header />
  }

  return props.isLoading ?

    <View loading>
      <Spinner />
    </View>

          <Route
            exact path="/donations"
            render={props => <Donations {...props} />}
          /> 

}


const ProtectedRoute = ({ component: Component, currentUser }) => (
  <Route
    render={props =>
      currentUser ? (
        <Component {...props} currentUser={currentUser} />
      ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
    }
  />
)

export default connect(
  state => ({ ...state }),
  { setUser, clearUser }
)(withRouter(Routes))
