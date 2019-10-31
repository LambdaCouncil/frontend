import React, { useState } from 'react'
import { Button, View, Text } from 'native-base'
import { Link, withRouter } from 'react-router-native'

import firebase from '../../firebase'

const SideMenu = props => {

  return (
    <View>
      <Button>
        <Link to="/agendas" onPress={() => props.togglePanel()}>
          <Text style={{color: 'black'}}>Agendas</Text>
        </Link>
      </Button>
      <Button>
        <Link to="/discussions" onPress={() => props.togglePanel()}>
          <Text style={{color: 'black'}}>Discussions</Text>
        </Link>
      </Button>
      <Button>
        <Link to="/assignments" onPress={() => props.togglePanel()}>
          <Text style={{color: 'black'}}>Assignments</Text>
        </Link>
      </Button>
      <Button>
        <Link to="/files" onPress={() => props.togglePanel()}>
          <Text style={{color: 'black'}}>Files</Text>
        </Link>
      </Button>
      <Button>
        <Link to="/promptings" onPress={() => props.togglePanel()}>
          <Text style={{color: 'black'}}>Promptings</Text>
        </Link>
      </Button>
      <Button>
        <Link to="/push-notifications" onPress={() => props.togglePanel()}>
          <Text style={{color: 'black'}}>Notifications</Text>
        </Link>
      </Button>
      <Button>
        <Link to="/settings" onPress={() => props.togglePanel()}>
          <Text style={{color: 'black'}}>Settings</Text>
        </Link>
      </Button>
      <Button>
        <Link to="/admin" onPress={() => props.togglePanel()}>
          <Text style={{color: 'black'}}>Admin</Text>
        </Link>
      </Button>
      <Button>
        <Link to="/donations" onPress={() => props.togglePanel()}>
          <Text style={{color: 'black'}}>Donations</Text>
        </Link>
      </Button>
      <Button>
        <Link to="/login" onPress={() => props.togglePanel()}>
          <Text style={{color: 'black'}} onPress={() => firebase.auth().signOut()}>Log Out</Text>
        </Link>
      </Button>
    </View>

  )

}

export default withRouter(SideMenu)
