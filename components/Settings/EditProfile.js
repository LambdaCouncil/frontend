import React, { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Input, Text, Label, Item, H1, H3, Icon, View, Content } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { connect } from 'react-redux'

import { db } from "../../firebase"

function EditProfile(props) {

  const {currentUser} = props;
  console.log('props', props)
  console.log('currentUser', currentUser)
  // console.log(currentUser.email)
  console.log(currentUser.email)
  // console.log('CU Name', currentUser.displayName)

  const [firstName, setFirstName] = useState(' ')
  const [lastName, setLastName] = useState(' ')
  const [calling, setCalling] = useState(' ')
  const [email, setEmail] = useState(' ')
  const [phone, setPhone] = useState(' ')

  const handleFirstName = text => setFirstName(text)

  const handleLastName = text => setLastName(text)

  const handleChangeCalling = text => setCalling(text)

  const handleChangeEmail = text => setEmail(text)

  const handleChangePhone = text => setPhone(text)

  const changePasswordClicked = () => {
    console.log('Change Password Clicked')
  }

  const changePassword = () => {
    console.log('Password Changed')
  }

  const deleteAccount = () => {
    console.log('Account Deleted');
    props.history.push('/settings')
  }

  const handleSubmit = () => db('users')
    .doc(props.currentUser.uid)
    .update({
      firstName,
      lastName,
      calling,
      email,
      phone
    })

  return (

    <KeyboardAvoidingView
      style={styles.inputContainer}
      behavior='padding'
    >

      <Content padder>

        <View style={styles.pageView}>

          <View style={styles.btnWrapper}>
            <View style={styles.photobtn}>
              <Icon name='camera' />
            </View>
          </View>

          <Item floatingLabel
                style={styles.inputItem}>
            <Label>First Name</Label>
            <Input
              onChangeText={handleFirstName} />
          </Item>

          <Item floatingLabel style={styles.inputItem}>
            <Label>Last Name</Label>
            <Input onChangeText={handleLastName} />
          </Item>

          <Item floatingLabel style={styles.inputItem}>
            <Label>Calling</Label>
            <Input onChangeText={handleChangeCalling} />
          </Item>

          <Item floatingLabel
                style={styles.inputItem}>
            <Label>Email</Label>
            <Input
              value={currentUser.email}
              onChangeText={handleChangeEmail}
            />
          </Item>

          <Item floatingLabel style={styles.inputItem}>
            <Label>Phone</Label>
            <Input
              onChangeText={handleChangePhone}
            />
          </Item>

          <View style={styles.buttonsBottom}>

            <View style={styles.button}>
              <Link to='/changepassword'>
                <Text style={styles.password}>Change Password</Text>
              </Link>
            </View>

            <View style={styles.button}>
              <Text onPress={deleteAccount} style={styles.delete}>Delete Account</Text>
            </View>

            <H3 onPress={() => {
              handleSubmit()
              props.history.push('/discussions')
            }}>Save and Continue</H3>

          </View>

        </View>

      </Content>

    </KeyboardAvoidingView>

  )

}


const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photobtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: 112,
    width: 112,
    borderRadius: 224,
    backgroundColor: '#fafafa'
  },
  inputContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  pageView: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    marginTop: 20
  },
  button: {
    marginVertical: 15,
  },
  password: {
    color: '#288365',
    fontFamily: 'bern-r',
    fontSize: 17
  },
  delete: {
    color: '#dd1d06',
    fontFamily: 'bern-r',
    fontSize: 17
  },
})


export default connect(state => ({ ...state }))(withRouter(EditProfile))
