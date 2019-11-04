import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import firebase from "../firebase"
import { Content, Input, Text, Label, Item, H1, H3, Icon } from 'native-base'
import { withRouter } from 'react-router-native'
import { connect } from 'react-redux'

import { signUpDisplayName, setUser } from '../actions'

function Register(props) {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [requestActive, setActive] = useState(false)
    const [error, setError] = useState({ message: "" })

    const userRef = firebase.firestore().collection('users'),

        handleChangeDisplayName = text => setDisplayName(text.trim()),

        handleChangeEmail = text => setEmail(text.trim()),

        handleChangePassword = text => setPassword(text.trim()),

        handleChangePasswordConfirm = text => setPasswordConfirm(text.trim()),

        handleSubmit = _ => {
            setActive(false)
            setError({ message: "" })

            if (password === passwordConfirm) {

                props.signUpDisplayName(displayName)

                setActive(true)

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
                                userRef.doc(createdUser.user.uid)
                                    .set({
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
        }

        _renderButton = _ => {
            if(requestActive) 
                return <H3 submit>Signing Up...</H3>
            else 
                return <H3 onPress={handleSubmit} submit>Sign Up</H3>
        }

        _renderErrorText = _ => {
            return error ? error.message :"An internal error occured"
        }

    return (
        <>

            <Icon
                backButton
                name='arrow-back'
                onPress={props.history.goBack}
                style={{fontSize: 24, marginLeft: 20, marginTop: 20}}
            />

            <Content
                padder
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                <Text style={styles.header}>Sign Up</Text>

                <Text style={styles.subheader}>Create Councils account.</Text>


                <Item floatingLabel>
                    <Label>Display Name</Label>
                    <Input onChangeText={handleChangeDisplayName} value = {displayName} />
                </Item>

                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input onChangeText={handleChangeEmail} value = {email} />
                </Item>

                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                        onChangeText={handleChangePassword}
                        value = {password}
                        secureTextEntry={true}
                    />
                </Item>

                <Item floatingLabel>
                    <Label>Confirm Password</Label>
                    <Input
                        secureTextEntry={true}
                        value = {passwordConfirm}
                        onChangeText={handleChangePasswordConfirm}
                    />
                </Item>

                { _renderButton() }

                <Text style = {{ color: "red" }}>{_renderErrorText()}</Text>

            </Content>

        </>

    )
}

const styles = StyleSheet.create({
    header: {
        color: '#202224',
        fontFamily: 'gotham',
        fontSize: 28,
    }, 
    subheader: {
        color: '#202224',
        fontFamily: 'bern-r',
        fontSize: 17,
    },
    label: {
        color: '#6f777e',
        fontFamily: 'bern-r',
        fontSize: 17,
    }
})

export default connect(state => ({ ...state }), { signUpDisplayName, setUser })(withRouter(Register))
