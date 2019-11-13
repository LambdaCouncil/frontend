import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Link, withRouter } from 'react-router-native'
import { Button, Container, Content, Footer, Input, Text, Label, Item, H1, H3, Icon, Spinner } from 'native-base'

import ForgotPassword from './ForgotPassword/ForgotPassword'

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
                setActive(false)
                return
            }

            if (isPasswordInvalid()) {
                setError({ message: "Password is invalid" })
                setActive(false)
                return
            }

            setError({ message: "" })

            setActive(true)

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(signedInUser => {
                    console.log(signedInUser)
                })
                .catch(err => {
                    const variable = 'There is no user record corresponding to this identifier. The user may have been deleted.'
                    setError(err.message === variable ?
                        { message: `'${email}' does not exist. Please try again.` } : err)
                    setActive(false)
                })
        },

        isEmailInvalid = _ => email.length <= 1 || !email.match(/^(.+[@].+[.].+)/),

        isPasswordInvalid = _ => password.length < 8 && !password.match(/[0-9]/) && !password.match(/[A-Z]/),

        _renderButton = _ => {
            const filled = !(email === "" || password === "")
            if (requestActive) return <Spinner />
            else return <H3 submit active={filled} onPress={handleSubmit}>Log In</H3>
        }

    return <>

        <Button backButton onPress={props.history.goBack}>
            <Icon backButton name='arrow-back' />
        </Button>

        <Container>
            <Content
                padder
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingTop: '15%',
                    height: '100%'
                }}>

                <H1 pre>Log In</H1>

                <Text pre>Log into your Councils account.</Text>

                <Item floatingLabel>
                    <Label float>Email</Label>
                    <Input onChangeText={handleChangeEmail} value={email} />
                </Item>

                <Item floatingLabel>
                    <Label float>Password</Label>
                    <Input
                        onChangeText={handleChangePassword}
                        value={password}
                        secureTextEntry={true}
                    />
                </Item>

                {_renderButton()}

                <Text error>{error.message}</Text>

                <Footer pre>
                    <Button style={{ elevation: 0 }} onPress={() => <ForgotPassword />}>
                        <Link to='/forgot-password'>
                            <Text pre foot>Forgot Password?</Text>
                        </Link>
                    </Button>
                </Footer>

            </Content>
        </Container>

    </>

}

export default withRouter(Login)
