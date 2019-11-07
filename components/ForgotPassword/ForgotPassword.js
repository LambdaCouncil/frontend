import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import {Button, Container, Content, H1, Icon, Input, Item, Label, Text} from 'native-base'
import { Link, withRouter } from 'react-router-native'

import firebase from '../../firebase'
import Success from './Success'

const ForgotPassword = props => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    
    const getColor = _ => (email === "") ? '#6f777e' : '#288365'  

    const handleEmail = text => setEmail(text.trim())

    const handleError = err => setError(err)

    const handleSubmit = (emailAddress) => {
        (email !== '') && (email.match(/^(.+[@].+[.].+)/)) ?
            firebase.auth().sendPasswordResetEmail(emailAddress)
            .then(() => props.history.push('/success'))
            .catch(err => handleError(err))
        :
            setError('Please enter a valid email address')
    }

    return (
        <>        
            <Button backButton onPress={props.history.goBack}>
                <Icon
                    backButton
                    name='arrow-back'
                    style={{ fontSize: 24, marginLeft: 20, marginTop: 20}}
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

                    <Text style={{color: '#dd1d06', fontFamily: 'bern-r', fontSize: 13}}>{error}</Text>
                    
                    <Button transparent style={styles.button} onPress={() => handleSubmit(email)}>
                            <Text style={{ color: getColor(), fontFamily: 'bern-sb', fontSize: 17 }}>                            
                                Reset Password                            
                            </Text>
                    </Button>
                    
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
        marginHorizontal: 20,
    },
    button: {
        marginTop: 52
    }
})

export default withRouter(ForgotPassword)