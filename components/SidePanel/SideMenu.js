import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, View, Text } from 'native-base'
import { Link, withRouter } from 'react-router-native'

import firebase from '../../firebase'

import UserPanel from './UserPanel'

const SideMenu = props => {

  console.log('SideMenu Path***: ', props.location.pathname)

  let path = props.location.pathname

  return (
    <>
    <View style={{paddingLeft: 20}}>
      <UserPanel />
    </View>
  
    <View>
      <Button style={(path === '/agendas') ? styles.activeTopButton : styles.normalTopButton}>
        <Link to="/agendas" onPress={() => props.togglePanel()}>
          <Text style={(path === '/agendas') ? styles.activeText : styles.normalText}>Agendas</Text>
        </Link>
      </Button>
      <Button style={(path === '/discussions') ? styles.activeButton : styles.normalButton}>
        <Link to="/discussions" onPress={() => props.togglePanel()}>
          <Text style={(path === '/discussions') ? styles.activeText : styles.normalText}>Discussions</Text>
        </Link>
      </Button>
      <Button style={(path === '/assignments') ? styles.activeButton : styles.normalButton}>
        <Link to="/assignments" onPress={() => props.togglePanel()}>
          <Text style={(path === '/assignments') ? styles.activeText : styles.normalText}>Assignments</Text>
        </Link>
      </Button>
      <Button style={(path === '/files') ? styles.activeButton : styles.normalButton}>
        <Link to="/files" onPress={() => props.togglePanel()}>
          <Text style={(path === '/files') ? styles.activeText : styles.normalText}>Files</Text>
        </Link>
      </Button>
      <Button style={(path === '/promptings') ? styles.activeButton : styles.normalButton}>
        <Link to="/promptings" onPress={() => props.togglePanel()}>
          <Text style={(path === '/promptings') ? styles.activeText : styles.normalText}>Promptings</Text>
        </Link>
      </Button>
      <Button style={(path === '/push-notifications') ? styles.activeButton : styles.normalButton}>
        <Link to="/push-notifications" onPress={() => props.togglePanel()}>
          <Text style={(path === '/push-notifications') ? styles.activeText : styles.normalText}>Notifications</Text>
        </Link>
      </Button>
      <Button style={styles.normalButton}>
        <Link to="/settings" onPress={() => props.togglePanel()}>
          <Text style={{color: '#6f777e', fontSize: 17}}>Settings</Text>
        </Link>
      </Button>
      <Button style={styles.normalButton}>
        <Link to="/admin" onPress={() => props.togglePanel()}>
          <Text style={{color: '#6f777e', fontSize: 17}}>Admin</Text>
        </Link>
      </Button>
      <Button style={styles.normalButton}>
        <Link to="/donations" onPress={() => props.togglePanel()}>
          <Text style={{color: '#6f777e', fontSize: 17}}>Donations</Text>
        </Link>
      </Button>
      <Button style={styles.normalButton}>
        <Link to="/login" onPress={() => props.togglePanel()}>
          <Text style={styles.bottomText} onPress={() => firebase.auth().signOut()}>Log Out</Text>
        </Link>
      </Button>
    </View>
    </>

  )

}

const styles = StyleSheet.create({
  activeTopButton: {
    marginTop: 26,
    paddingLeft: 16, 
    height: '8%', 
    elevation: 0,
    borderColor: null,
    borderRadius: 0,
    borderLeftColor: '#288365',
    borderLeftWidth: 4,
 
  },
  normalTopButton: {
    marginTop: 26, 
    paddingLeft: 20,
    height: '8%', 
    elevation: 0,
    borderColor: null,
    borderRadius: 0
  },
  activeButton: {
    height: '8%',
    paddingLeft: 16,
    elevation: 0,
    borderColor: null,
    borderRadius: 0,
    borderLeftColor: '#288365',
    borderLeftWidth: 4,
  },
  normalButton: {
    height: '8%',
    paddingLeft: 20,
    elevation: 0,
    borderColor: null,
    borderRadius: 0
  },
  activeText: {
    color: '#288365', 
    fontSize: 17,
  },
  normalText: {
    color: '#202224', 
    fontSize: 17,
  },
  bottomText: {
    color: '#6f777e', 
    fontSize: 17,
  }
})

export default withRouter(SideMenu)
