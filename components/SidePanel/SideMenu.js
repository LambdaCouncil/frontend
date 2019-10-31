import React, { useState } from 'react'
import { Button, View, Text } from 'native-base'
import { Link, withRouter } from 'react-router-native'

import firebase from '../../firebase'

import UserPanel from './UserPanel'

const SideMenu = props => {

  return (
    
    <View style={{marginLeft: 20}}>
      <UserPanel />
      <Button style={{marginTop: 26, height: '8%'}}>
        <Link to="/agendas" onPress={() => props.togglePanel()}>
          <Text style={{color: '#202224', fontSize: 17}}>Agendas</Text>
        </Link>
      </Button>
      <Button style={{height: '8%'}}>
        <Link to="/discussions" onPress={() => props.togglePanel()}>
          <Text style={{color: '#202224', fontSize: 17}}>Discussions</Text>
        </Link>
      </Button>
      <Button style={{height: '8%'}}>
        <Link to="/assignments" onPress={() => props.togglePanel()}>
          <Text style={{color: '#202224', fontSize: 17}}>Assignments</Text>
        </Link>
      </Button>
      <Button style={{height: '8%'}}>
        <Link to="/files" onPress={() => props.togglePanel()}>
          <Text style={{color: '#202224', fontSize: 17}}>Files</Text>
        </Link>
      </Button>
      <Button style={{height: '8%'}}>
        <Link to="/promptings" onPress={() => props.togglePanel()}>
          <Text style={{color: '#202224', fontSize: 17}}>Promptings</Text>
        </Link>
      </Button>
      <Button style={{height: '8%'}}>
        <Link to="/push-notifications" onPress={() => props.togglePanel()}>
          <Text style={{color: '#202224', fontSize: 17}}>Notifications</Text>
        </Link>
      </Button>
      <Button style={{height: '8%'}}>
        <Link to="/settings" onPress={() => props.togglePanel()}>
          <Text style={{color: '#6f777e', fontSize: 17}}>Settings</Text>
        </Link>
      </Button>
      <Button style={{height: '8%'}}>
        <Link to="/admin" onPress={() => props.togglePanel()}>
          <Text style={{color: '#6f777e', fontSize: 17}}>Admin</Text>
        </Link>
      </Button>
      <Button style={{height: '8%'}}>
        <Link to="/donations" onPress={() => props.togglePanel()}>
          <Text style={{color: '#6f777e', fontSize: 17}}>Donations</Text>
        </Link>
      </Button>
      <Button style={{height: '8%'}}>
        <Link to="/login" onPress={() => props.togglePanel()}>
          <Text style={{color: '#6f777e', fontSize: 17}} onPress={() => firebase.auth().signOut()}>Log Out</Text>
        </Link>
      </Button>
    </View>

  )

}

export default withRouter(SideMenu)
