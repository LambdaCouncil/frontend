import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import {Button, Container, Content, H1, H3, Icon, Input, Item, Label, Text} from 'native-base'
import { Link, withRouter } from 'react-router-native'

import Success from './Success'

import firebase from '../../firebase'

const ForgotPassword = props => {
    const [email, setEmail] = useState('')

    const handleEmail = text => setEmail(text.trim())

    const getColor = _ => (email === "") ? '#6f777e' : '#288365'  

    forgotPassword = (emailAddress) => {
        firebase.auth().sendPasswordResetEmail(emailAddress)
        .then(() => <Success />)
        .catch(err => console.log(err))
    }

    return (
        <>        
            <Button backButton onPress={props.history.goBack}>
                <Icon
                    backButton
                    name='arrow-back'
                    style={{ fontSize: 24, marginLeft: 20}}
                />
            </Button>

            <Container>
                <Content 
                    padder
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingTop: '15%',
                        height: '100%'
                    }}>
                    <H1 style={styles.header}>Forgot Password</H1>

                    <Text style={styles.text}>Please enter your email address and Councils will send you an email to reset your password.</Text>
                    
                    <Item floatingLabel>
                        <Label style={styles.label}>Email</Label>
                        <Input onChangeText={handleEmail} style={styles.input} value={email} />
                    </Item>
                    
                    <H3
                        onPress={() => forgotPassword(email)}
                        style={{ color: getColor(), fontFamily: 'bern-sb', fontSize: 17, marginTop: 52 }}
                        submit
                    >
                        Reset Password
                    </H3>
                </Content>
            </Container>
        </>

    )

}

const styles = StyleSheet.create({
    header: {
        color: '#202224',
        fontFamily: 'gotham',
        fontSize: 28,
        marginBottom: 10,
        marginTop: 40
    },
    text: {
        color: '#202224',
        fontFamily: 'bern-r',
        fontSize: 17,
        marginHorizontal: 20,
        marginBottom: 48,
        marginTop: 16
    },
    label: {
        color: '#6f777e',
        fontFamily: 'bern-r',
        fontSize: 17,
        marginLeft: 20,
    },
    input: {
        marginHorizontal: 20
    }
})

export default withRouter(ForgotPassword)