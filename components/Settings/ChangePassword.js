import React, { useState } from 'react'
import firebase from "../../firebase"
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Text, Label, Item, H1, View, Icon } from 'native-base'
import { Link, withRouter } from 'react-router-native'

function ChangePassword(props) {

  const [oldPassword, setOldPassword] = useState(' ')
  const [newPassword, setNewPassword] = useState(' ')
  const [confirmNewPassword, setConfirmNewPassword] = useState(' ')

  const userRef = firebase.database().ref('users')

  const handleOldPassword = text => setOldPassword(text)

  const handleNewPassword = text => setNewPassword(text)

  const handlePasswordConfirm = text => setConfirmNewPassword(text)

  const changePassword = () => {
    console.log('Password Changed');
    props.history.push('/editprofile')
  }

  console.log('ChangePasswordProps', props)

  return (
    <KeyboardAvoidingView
      style={styles.inputContainer}
      behavior='padding'
    >
      <Link onPress={() => props.history.goBack()} style={styles.link}>
        <Icon
          name='arrow-back'
          color='green'
          style={styles.backButton}
        />
      </Link>
      <View style={styles.pageView}>
        <H1>Change Password</H1>
        <Item floatingLabel style={styles.inputItem}>
          <Label>Old Password</Label>
          <Input
            onChangeText={handleOldPassword}
            secureTextEntry={true}
          />
        </Item>
        <Item floatingLabel style={styles.inputItem}>
          <Label>New Password</Label>
          <Input
            onChangeText={handleNewPassword}
            secureTextEntry={true}
          />
        </Item>
        <Item floatingLabel style={styles.inputItem}>
          <Label>Confirm New Password</Label>
          <Input
            onChangeText={handlePasswordConfirm}
            secureTextEntry={true}
          />
        </Item>
        <View>
          <Text onPress={changePassword}
            style={styles.saveButton}>Save</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    height: '100%',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
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
  pageView: {
    marginHorizontal: 20,
    marginTop: 80,
  },
  header: {
    fontSize: 28,
    marginBottom: 10,
    fontFamily: 'gotham',
    fontWeight: '500',
  },
  saveButton: {
    // marginVertical: 15,
    color: '#288365',
    textAlign: 'center',
    fontSize: 17,
    top: 169
  }
})


export default withRouter(ChangePassword)
