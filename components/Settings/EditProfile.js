import React, { useState } from 'react'
import firebase from "../../firebase"
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Text, Label, Item, H1, Icon, View, Content } from 'native-base'
import { Link, withRouter } from 'react-router-native'

function EditProfile(props) {

  const [firstName, setFirstName] = useState(' ')
  const [lastName, setLastName] = useState(' ')
  const [calling, setCalling] = useState(' ')
  const [email, setEmail] = useState(' ')
  const [phone, setPhone] = useState(' ')

  const db = firebase.firestore()
  const userRef = db.collection('users')

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

  return (

    <KeyboardAvoidingView>

    <Content padder>
      <View style={styles.pageView}>
        <View style={styles.btnWrapper}>
          <View style={styles.photobtn}>
            <Icon name='camera' />
          </View>
        </View>
        <Item floatingLabel style={styles.inputItem}>
          <Label>First Name</Label>
          <Input onChangeText={handleFirstName} />
        </Item>
        <Item floatingLabel style={styles.inputItem}>
          <Label>Last Name</Label>
          <Input onChangeText={handleLastName} />
        </Item>
        <Item floatingLabel style={styles.inputItem}>
          <Label>Calling</Label>
          <Input onChangeText={handleChangeCalling} />
        </Item>
        <Item floatingLabel style={styles.inputItem}>
          <Label>Email</Label>
          <Input
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
  },
  pageView: {
    marginHorizontal: 20,
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


export default withRouter(EditProfile)
