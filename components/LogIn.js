import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Input, Text, Label, Item, H1, H3, Icon } from 'native-base'
import { withRouter } from 'react-router-native'

import firebase from "../firebase"

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [requestActive, setActive] = useState(false)
    const [error, setError] = useState("")

    const handleChangeEmail = text => setEmail(text.trim()),

        handleChangePassword = text => setPassword(text.trim()),

        handleSubmit = _ => {
            if(isEmailInvalid()) {
                setError({ message: "Email is invalid" })
                return
            }

            if(isPasswordInvalid()) {
                setError({ message: "Password is invalid" })
                return
            }

            setError({ message: "" })

            setActive(true)

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(signedInUser => {
                    console.log(signedInUser)
                    setEmail(' ')
                    setPassword(' ')
                    setActive(false)
                })
                .catch(err => {
                    setError(err)
                    setActive(false)
                })
        },

        isEmailInvalid = _ => email.length <= 1

        isPasswordInvalid = _ => password.length <= 1

        _renderButton = _ => {
            if(requestActive) 
                return <H3 submit>Logging in...</H3>
            else 
                return <H3 onPress={handleSubmit} style={{fontFamily: 'bern-r', fontSize: 17}} submit>Log In</H3>
        }

    return (

        <>

            <Icon
                backButton
                name='arrow-back'
                onPress={props.history.goBack}
                style={{fontSize: 24, marginLeft: 20}}
            />

            <Container>
                <Content
                    padder
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingTop: '15%',
                        //     paddingBottom: '85%'
                    }}>

                    <H1 style={{fontFamily: 'gotham', fontSize: 28, color: '#202224'}}>Log In</H1>

                    <Text style={{fontFamily: 'bern-r', fontSize: 17, color: '#202224'}}>Log into your Councils account.</Text>

                    <Item floatingLabel>
                        <Label style={{fontFamily: 'bern-r', fontSize: 17, color: '#6f777e'}}>Email</Label>
                        <Input onChangeText={handleChangeEmail} value = {email} />
                    </Item>

                    <Item floatingLabel>
                        <Label style={{fontFamily: 'bern-r', fontSize: 17, color: '#6f777e'}}>Password</Label>
                        <Input
                            onChangeText={handleChangePassword}
                            value = {password}
                            secureTextEntry={true}
                        />
                    </Item>

                    { _renderButton() }

                    <Text style = {{ color: "red" }}>{error.message}</Text>

                </Content>
            </Container>

        </>

    )
}


export default withRouter(Login)
