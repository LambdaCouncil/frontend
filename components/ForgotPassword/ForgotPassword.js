import React, { useState } from 'react'
import { Button, Container, Content, H1, H3, Icon, Input, Item, Label, Text } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { useSafeArea } from 'react-native-safe-area-context'

import firebase from '../../firebase'
import Success from './Success'

const ForgotPassword = props => {
    const safeAreaInsets = useSafeArea() 
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleEmail = text => setEmail(text.trim())

    const handleError = err => setError(err)

    const handleSubmit = (emailAddress) => {
        email.match(/^(.+[@].+[.].+)/) ?
            firebase.auth()
                .sendPasswordResetEmail(emailAddress)
                .then(() => props.history.push('/success'))
                .catch(err => handleError(err))
            :
            setError('Please enter a valid email address')
    }

    return <>
        <Button backButton onPress={props.history.goBack}>
            <Icon backButton name='arrow-back' />
        </Button>

        <Container style={{
            paddingTop: safeAreaInsets.top,
            paddingBottom: safeAreaInsets.bottom,
            paddingLeft: safeAreaInsets.left,
            paddingRight: safeAreaInsets.right
        }}>
            <Content
                padder
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingTop: '15%',
                    height: '100%'
                }}>

                <H1 pre>Forgot Password</H1>

                <Text pre para>Please enter your email address and Councils will send you an email to reset your password.</Text>

                <Item floatingLabel>
                    <Label float>Email</Label>
                    <Input onChangeText={handleEmail} />
                </Item>

                <Text error>{error}</Text>

                <Button transparent onPress={() => handleSubmit(email)}>
                    <H3 submit active={email !== ''}>Reset Password</H3>
                </Button>

            </Content>
        </Container>
    </>

}

export default withRouter(ForgotPassword)