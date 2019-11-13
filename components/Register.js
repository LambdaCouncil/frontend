import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import firebase from '../firebase'
import {
    Button,
    Content,
    Input,
    Text,
    Label,
    Item,
    View,
    H1,
    H3,
    Icon,
    Spinner
} from 'native-base'
import { withRouter } from 'react-router-native'
import { connect } from 'react-redux'

import { setUser } from '../actions'

function Register(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [requestActive, setActive] = useState(false)
    const [error, setError] = useState({ message: "" })

    const userRef = firebase.firestore().collection('users'),

        handleChangeEmail = text => setEmail(text.trim()),

        handleChangePassword = text => setPassword(text.trim()),

        handleChangePasswordConfirm = text => setPasswordConfirm(text.trim()),

        handleSubmit = _ => {

            if (isEmailInvalid()) {
                setError({ message: "Email is invalid" })
                setActive(false)
                return
            }

            if (isPasswordInvalid()) {
                setError({ message: "Password is invalid" })
                setActive(false)
                return
            }

            if (password === passwordConfirm) {

                setActive(true)

                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(createdUser => {
                        createdUser.user
                            .updateProfile({
                                photoURL: `https://ui-avatars.com/api/?background=fafafa&color=202224&name=${email}`
                            })
                            .then(_ => {
                                userRef.doc(createdUser.user.uid)
                                    .set({
                                        avatar: createdUser.user.photoURL,
                                        id: createdUser.user.uid
                                    })
                                    .then(_ => {
                                        props.setUser(createdUser.user)
                                        props.history.push('/complete-profile')
                                    })
                                    .catch(handleError)
                            })
                            .catch(handleError)
                    })
                    .catch(handleError)

            } else handleError({ message: "Passwords dont match" })

        },

        handleError = err => {
            setError(err)
            setActive(false)
        },

        isEmailInvalid = _ => !email.match(/^(.+[@].+[.].+)/),

        isPasswordInvalid = _ => password.length < 8 && !password.match(/[0-9]/) && !password.match(/[A-Z]/),

        _renderButton = _ => {
            const filled = !(email === "" || password === "" || passwordConfirm === "")
            if (requestActive) return <Spinner />
            else return <H3 submit active={filled} onPress={handleSubmit}>Sign Up</H3>
        },

        _renderErrorText = _ => {
            return error ? error.message : 'An internal error occured'
        }

    return <>

        <Button backButton onPress={props.history.goBack}>
            <Icon backButton name='arrow-back' />
        </Button>

        <Content
            padder
            contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <H1 pre>Sign Up</H1>

            <Text pre>Create Councils account.</Text>

            <Item floatingLabel>
                <Label float>Email</Label>
                <Input onChangeText={handleChangeEmail} value={email} />
            </Item>

            <View info>
                <Text info>Use Councils invitation email</Text>
            </View>

            <Item floatingLabel>
                <Label float>Password</Label>
                <Input
                    onChangeText={handleChangePassword}
                    value={password}
                    secureTextEntry={true}
                />
            </Item>
            <View info>
                <Text info>
                    8 characters, 1 capital letter, 1 number
          </Text>
            </View>

            <Item floatingLabel>
                <Label float>Confirm Password</Label>
                <Input
                    secureTextEntry={true}
                    value={passwordConfirm}
                    onChangeText={handleChangePasswordConfirm}
                />
            </Item>

            {_renderButton()}

            <Text error>{_renderErrorText()}</Text>
        </Content>

    </>

}

export default connect(
    state => ({ ...state }),
    { setUser }
)(withRouter(Register))
