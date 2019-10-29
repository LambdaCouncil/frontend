import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, withRouter, Route, Redirect } from 'react-router-native'
import { View, Spinner, Container } from 'native-base'

import ActionSheets from './ActionSheets'
import firebase from '../firebase'
import Register from './Register'
import Login from './LogIn'
import Root from '../Root'
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
import Donations from './Donations/Donations'
import Form from './Donations/Form'
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

  return props.isLoading || props.loadingFonts ?

    <View loading>
      <Spinner />
    </View>

    :
    <Container>

      {renderHeaderIf()}

      <Switch>

        <Route
          exact path="/"
          render={props => <Root {...props} />}
        />

        <Route
          path="/login"
          render={props => <Login {...props} />}
        />

        <Route
          path="/register"
          render={props => <Register {...props} />}
        />

        <Route
          path="/complete-profile"
          render={props => <CompleteProfile {...props} />}
        />

        <Route
          path="/edit-profile"
          render={props => <EditProfile {...props} />}
        />

        <Route
          path="/change-password"
          render={props => <ChangePassword {...props} />}
        />

        <Route
          path="/settings"
          render={props => <Settings {...props} />}
        />

        <Route
          path="/notifications"
          render={props => <PushNotifications {...props} />}
        />

        <Route
          path="/feedback"
          render={props => <SubmitFeedback {...props} />}
        />

        <Route
          path="/about"
          render={props => <About {...props} />}
        />

        <Route
          path="/messages"
          render={props => <Messages {...props} />}
        />

        <Route
          path='/action-sheets'
          render={props => <ActionSheets {...props} />}
        />

        <Route
          path='/rate'
          render={props => <RateCouncils {...props} />}
        />

        <Route
          path="/agendas"
          render={props => <Agendas {...props} />}
        />

        <Route
          path="/discussions"
          render={props => <Discussions {...props} />}
        />

        <Route
          path="/assignments"
          render={props => <Assignments {...props} />}
        />

        <Route 
        path="/donations" 
        render={props => <Donations {...props} />} 
      /> 

        {/* <Route 
        path="/files" 
        render={props => <Discussions {...props} />} 
      /> */}

        {/* <Route 
        path="/promptings" 
        render={props => <Discussions {...props} />} 
      /> */}

        {/* <Route
        path="/admin-notifications"
        render={props => <Discussions {...props} />}
      /> */}

        {/* <Route 
        path="/admin" 
        render={props => <Discussions {...props} />} 
      /> */}

        {/* <Route
        path="/close-assignments"
        render={props => <Discussions {...props} />}
      /> */}

       

        <ProtectedRoute
          component={props => <ProtectedRoutes />}
          currentUser={props.currentUser}
        />

      </Switch>

    </Container>

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