import React from 'react'
import { Button, View, Text } from 'native-base'
import { Link, withRouter } from 'react-router-native'

import firebase from '../../firebase'

const SideMenu = props => {

  return (
    <View>
      <Button light>
        <Link to="/agendas">
          <Text>Agendas</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/discussions">
          <Text>Discussions</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/assignments">
          <Text>Assignments</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/files">
          <Text>Files</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/promptings">
          <Text>Promptings</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/pushnotifications">
          <Text>Notifications</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/settings">
          <Text>Settings</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/admin">
          <Text>Admin</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/donations">
          <Text>Donations</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/login">
          <Text onPress={() => firebase.auth().signOut()}>Log Out</Text>
        </Link>
      </Button>
    </View>
  )

}

export default withRouter(SideMenu)
