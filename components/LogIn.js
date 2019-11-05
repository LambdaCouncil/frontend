import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Footer, Input, Text, Label, Item, H1, H3, Icon } from 'native-base'
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
            if (isEmailInvalid()) {
                setError({ message: "Email is invalid" })
                return
            }

            if (isPasswordInvalid()) {
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
                    const variable = 'There is no user record corresponding to this identifier. The user may have been deleted.'
                    setError(err.message === variable ?
                        { message: `'${email}' does not exist. Please try again.` } : err)
                    setActive(false)
                })
        },

        isEmailInvalid = _ => email.length <= 1

    isPasswordInvalid = _ => password.length <= 1

    _renderButton = _ => {
        if (requestActive)
            return <H3 style={{}} submit>Logging in...</H3>
        else
            return <H3 onPress={handleSubmit} style={{ color: '#6f777e', fontFamily: 'bern-sb', fontSize: 17 }} submit>Log In</H3>
    }

    return (

        <>

            <Icon
                backButton
                name='arrow-back'
                onPress={props.history.goBack}
                style={{ fontSize: 24, marginLeft: 20, marginTop: 30 }}
            />

            <Container>
                <Content
                    padder
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingTop: '15%',
                        height: '100%'
                        //     paddingBottom: '85%'
                    }}>

                    <H1 style={{ fontFamily: 'gotham', fontSize: 28, color: '#202224' }}>Log In</H1>

                    <Text style={{ fontFamily: 'bern-r', fontSize: 17, color: '#202224' }}>Log into your Councils account.</Text>

                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input onChangeText={handleChangeEmail} value={email} />
                    </Item>

                    <Item floatingLabel>
                        <Label style={{ fontFamily: 'bern-r', fontSize: 17, color: '#6f777e' }}>Password</Label>
                        <Input
                            onChangeText={handleChangePassword}
                            value={password}
                            secureTextEntry={true}
                        />
                    </Item>

                    {_renderButton()}

                    <Text style={{ color: "red" }}>{error.message}</Text>

                    <Footer style={styles.footer}>
                        <Text style={styles.footerText}>Forgot Password?</Text>
                    </Footer>

                </Content>
            </Container>

        </>

    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        alignItems: 'flex-end',
        backgroundColor: 'white',
        elevation: 0,
    },
    footerText: {
        color: '#288365',
        fontFamily: 'bern-r',
        fontSize: 15
    }
})

export default withRouter(Login)
