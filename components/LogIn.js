import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Input, Text, Label, Item, H1, H3, Icon } from 'native-base'
import { withRouter } from 'react-router-native'

import variables from '../native-base-theme/variables/commonColor'
import firebase from "../firebase"

function Login(props) {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    const handleChangeEmail = text => setEmail(text),

        handleChangePassword = text => setPassword(text),

        handleSubmit = _ => {
            if (isFormValid()) {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(signedInUser => {
                        console.log(signedInUser)
                        setEmail(' ')
                        setPassword(' ')
                    })
                    .catch(err => console.error(err))
            }
        },

        isFormValid = _ => email.length > 1 && password.length > 1

    return (

        <>

            <Icon
                backButton
                name='arrow-back'
                onPress={props.history.goBack}
            />

            <Container>
                <Content
                    padder
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingTop: '15%',
                        paddingBottom: '85%'
                    }}>

                    <H1>Log In</H1>

                    <Text>Log into your Councils account.</Text>

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

                    <H3 onPress={handleSubmit} submit>Log In</H3>

                </Content>
            </Container>

        </>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
})

export default withRouter(Login)
