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
                                photoURL: `https://ui-avatars.com/api/?name=${email}`
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
            if (requestActive)
                return <Spinner />
            else
                return <H3 onPress={handleSubmit} style={{ fontFamily: 'bern-sb', fontSize: 17, color: getColor() }} submit>Sign Up</H3>
        }

    const getColor = _ => {
        if (email === "" || password === "" || passwordConfirm === "") return "#A9AAAC"
        else return "#288365"
    }

    _renderErrorText = _ => {
        return error ? error.message : "An internal error occured"
    }

    _renderButton = _ => {
        if (requestActive) return <Spinner />
        else
            return (
                <H3
                    onPress={handleSubmit}
                    style={{ fontFamily: 'bern-sb', fontSize: 17, color: getColor() }}
                    submit>
                    Sign Up
        </H3>
            )
    }

    _renderErrorText = _ => {
        return error ? error.message : 'An internal error occured'
    }

    return (
        <>
            <Button backButton onPress={props.history.goBack}>
                <Icon
                    backButton
                    name='arrow-back'
                    style={{ fontSize: 24, marginLeft: 20, marginTop: 20 }}
                />
            </Button>

            <Content
                padder
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text style={styles.header}>Sign Up</Text>

                <Text style={styles.subheader}>Create Councils account.</Text>

                <Item floatingLabel>
                    <Label style={styles.label}>Email</Label>
                    <Input onChangeText={handleChangeEmail} value={email} />
                </Item>
                <View style={styles.view}>
                    <Text style={styles.text}>Use Councils invitation email</Text>
                </View>

                <Item floatingLabel>
                    <Label style={styles.label}>Password</Label>
                    <Input
                        onChangeText={handleChangePassword}
                        value={password}
                        secureTextEntry={true}
                    />
                </Item>
                <View style={styles.view}>
                    <Text style={styles.text}>
                        8 characters, 1 capital letter, 1 number
          </Text>
                </View>

                <Item floatingLabel>
                    <Label style={styles.label}>Confirm Password</Label>
                    <Input
                        secureTextEntry={true}
                        value={passwordConfirm}
                        onChangeText={handleChangePasswordConfirm}
                    />
                </Item>

                {_renderButton()}

                <Text style={{ color: 'red' }}>{_renderErrorText()}</Text>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        color: '#202224',
        fontFamily: 'gotham',
        fontSize: 28,
        marginBottom: 10,
        marginTop: 30
    },
    subheader: {
        color: '#202224',
        fontFamily: 'bern-r',
        fontSize: 17
    },
    label: {
        color: '#6f777e',
        fontFamily: 'bern-r',
        fontSize: 17
    },
    text: {
        color: '#6f777e',
        fontFamily: 'bern-r',
        fontSize: 13
    },
    view: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%'
    }
})

export default connect(
    state => ({ ...state }),
    { setUser }
)(withRouter(Register))
