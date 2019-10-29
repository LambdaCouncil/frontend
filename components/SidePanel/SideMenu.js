import React, { useState } from 'react'
import { Button, View, Text } from 'native-base'
import { Link, withRouter } from 'react-router-native'

import firebase from '../../firebase'

const SideMenu = props => {

  return (
    <View>
      <Button light>
        <Link to="/agendas" onPress={() => props.togglePanel()}>
          <Text>Agendas</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/discussions" onPress={() => props.togglePanel()}>
          <Text>Discussions</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/assignments" onPress={() => props.togglePanel()}>
          <Text>Assignments</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/files" onPress={() => props.togglePanel()}>
          <Text>Files</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/promptings" onPress={() => props.togglePanel()}>
          <Text>Promptings</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/push-notifications" onPress={() => props.togglePanel()}>
          <Text>Notifications</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/settings" onPress={() => props.togglePanel()}>
          <Text>Settings</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/admin" onPress={() => props.togglePanel()}>
          <Text>Admin</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/donations" onPress={() => props.togglePanel()}>
          <Text>Donations</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/login" onPress={() => props.togglePanel()}>
          <Text onPress={() => firebase.auth().signOut()}>Log Out</Text>
        </Link>
      </Button>
    </View>
  )

}

export default withRouter(SideMenu)
