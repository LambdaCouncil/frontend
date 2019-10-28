import React, { useState } from 'react'
import firebase from "../firebase"
import { Content, Input, Text, Label, Item, H1, H3, Icon } from 'native-base'
import { withRouter } from 'react-router-native'
import { connect } from 'react-redux'

<<<<<<< HEAD
import { signUpDisplayName } from '../actions'
=======
import { signUpDisplayName, setUser } from '../actions'
>>>>>>> 529b0ab0e4e6f831c7845dae146a42b80678e8b6

function Register(props) {

    const [displayName, setDisplayName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [passwordConfirm, setPasswordConfirm] = useState(' ')

    const userRef = firebase.firestore().collection('users'),

        handleChangeDisplayName = text => setDisplayName(text),

        handleChangeEmail = text => setEmail(text),

        handleChangePassword = text => setPassword(text),

        handleChangePasswordConfirm = text => setPasswordConfirm(text),

        handleSubmit = _ => {

            if (password === passwordConfirm) {

                props.signUpDisplayName(displayName)

                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(createdUser => {
                        createdUser.user
                            .updateProfile({
                                displayName: displayName,
                                photoURL: `https://ui-avatars.com/api/?name=${displayName.replace(' ', '+')}`
                            })
                            .then(_ => {
                                userRef
                                    .add({
                                        name: createdUser.user.displayName,
                                        avatar: createdUser.user.photoURL,
                                        id: createdUser.user.uid
                                    })
                                    .then(_ => {
                                        setDisplayName(' ')
                                        setEmail(' ')
                                        setPassword(' ')
                                        setPasswordConfirm(' ')
                                        props.setUser(createdUser.user)
                                        props.history.push('/completeprofile')
                                    })
                            })
                    })
                    .catch(err => {
                        props.history.push('/register')
                        console.error(err)
                    })

            } else alert("Passwords don't match.")

        }

    return (
        <>

            <Icon
                backButton
                name='arrow-back'
                onPress={props.history.goBack}
            />

            <Content
                padder
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingTop: '15%',
                    paddingBottom: '85%'
                }}>

                <H1>Sign Up</H1>

                <Text>Create Councils account.</Text>


                <Item floatingLabel>
                    <Label>Display Name</Label>
                    <Input onChangeText={handleChangeDisplayName} />
                </Item>

                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input onChangeText={handleChangeEmail} />
                </Item>

                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                        onChangeText={handleChangePassword}
                        secureTextEntry={true}
                    />
                </Item>

                <Item floatingLabel>
                    <Label>Confirm Password</Label>
                    <Input
                        secureTextEntry={true}
                        onChangeText={handleChangePasswordConfirm}
                    />
                </Item>

                <H3 onPress={handleSubmit} submit>Sign Up</H3>

            </Content>

        </>

    )
}

export default connect(state => ({ ...state }), { signUpDisplayName, setUser })(withRouter(Register))
