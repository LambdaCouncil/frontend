import React, { useState } from 'react'

import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Text, Label, Item, H1, H3, Icon } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { connect } from 'react-redux'

import { signUpDisplayName } from '../../actions'

function Settings(props) {

  return (

    <KeyboardAvoidingView
      style={styles.inputContainer}
      behavior='padding'
    >

      <Icon backButton
        onPress={() => props.history.goBack()}
        name='arrow-back'
      />

      <H1>Settings</H1>

      <Link to='/edit-profile'>
        <H3>Edit Profile</H3>
      </Link>
      <Link to='/notifications'>
        <H3>Push Notifications</H3>
      </Link>
      <Link to='/feedback'>
        <H3>Submit Feedback</H3>
      </Link>
      <Link to='/rate'>
        <H3>Rate Councils</H3>
      </Link>
      <Link to='/about'>
        <H3>About</H3>
      </Link>


    </KeyboardAvoidingView>

  )
}


const styles = StyleSheet.create({
  inputContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    position: 'absolute',
    top: 25,
    left: 5,
    width: '100%',
    height: 50
  },
  backButton: {
    fontSize: 50
  },
  inputItem: {
    marginVertical: 10
  }
})


export default withRouter(Settings)
