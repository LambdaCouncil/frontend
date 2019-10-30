import React, {useState} from 'react'
import firebase from "../../firebase"
import {StyleSheet} from 'react-native'
import {Input, Text, Label, Item, H1, Icon, View, Content} from 'native-base'
import {Link, withRouter} from 'react-router-native'

function EditProfile(props) {

  const [firstName, setFirstName] = useState(' ')
  const [lastName, setLastName] = useState(' ')
  const [calling, setCalling] = useState(' ')
  const [email, setEmail] = useState(' ')
  const [phone, setPhone] = useState(' ')

  const userRef = firebase.database().ref('users')

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
    <Content padder>
      <View style={styles.pageView}>
        <View style={styles.iconCenter}>
          <View style={styles.uploadPhoto}>
            <Icon dgreal name='camera'/>
          </View>
        </View>
        <Item floatingLabel style={styles.inputItem}>
          <Label>First Name</Label>
          <Input onChangeText={handleFirstName}/>
        </Item>
        <Item floatingLabel style={styles.inputItem}>
          <Label>Last Name</Label>
          <Input onChangeText={handleLastName}/>
        </Item>
        <Item floatingLabel style={styles.inputItem}>
          <Label>Calling</Label>
          <Input onChangeText={handleChangeCalling}/>
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
            <Link to='/change-password'>
              <Text style={styles.password}>Change Password</Text>
            </Link>
          </View>
          <View style={styles.button}>
            <Text onPress={deleteAccount} style={styles.delete}>Delete Account</Text>
          </View>
        </View>
      </View>
    </Content>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    height: '100%',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  uploadPhoto: {
    borderStyle: 'solid',
    borderColor: '#e8e9eb',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    width: 112,
    height: 112,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCenter: {
    justifyContent: 'center',
    alignItems: 'center'
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
    marginTop: 20,
  },
  header: {
    fontSize: 28,
    marginBottom: 10,
    fontFamily: 'gotham',
    fontWeight: '500',
  },
  subHeader: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'bern-r'
  },
  textContent: {
    fontSize: 17,
    fontFamily: 'bern-r',
  },
  contentDivs: {
    marginVertical: 10,
    lineHeight: 24
  },
  buttonsBottom: {
    marginTop: 10,
    fontSize: 17,
    fontFamily: 'bern-r',
    lineHeight: 24
  },
  button: {
    marginVertical: 15,
  },
  password: {
    color: '#288365'
  },
  delete: {
    color: '#dd1d06'
  },
  cancel: {
    color: 'black'
  },
})


export default withRouter(EditProfile)
