import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, withRouter, Route, Redirect } from 'react-router-native'
import { ActivityIndicator, View } from 'react-native'

import MessageActionSheet from './Messages/MessageActionSheet'
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
import About from "./Settings/About";

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

  const renderHeaderIf = _ => (props.location.pathname !== '/' && props.location.pathname !== '/register' && props.location.pathname !== '/login') ? <Header /> : null

  return props.isLoading ? (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="lime" />
    </View>
  ) : (
      <>
        {renderHeaderIf()}
        <Switch>
          <Route
            exact path="/"
            render={props => <Root />}
          />

          <Route
            exact path="/login"
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
            path='/message-action-sheet'
            render={props => <MessageActionSheet {...props} />}
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

          {/* <Route 
        path="/donations" 
        render={props => <Discussions {...props} />} 
      /> */}

          <ProtectedRoute
            component={props => <ProtectedRoutes />}
            currentUser={props.currentUser}
          />
        </Switch>
      </>
    )
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

const styles = {
  spinnerContainer: {
    flex: 1,
    justifyContent: "center"
  }
}

export default connect(
  state => ({ ...state }),
  { setUser, clearUser }
)(withRouter(Routes))
