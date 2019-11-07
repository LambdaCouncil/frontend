import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Container, Content, H1, H3, Icon, Input, Item, Label, Text } from 'native-base'
import { Link, withRouter } from 'react-router-native'

const Success = props => {
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
                    justifyContent: 'center',
                    paddingTop: '15%',
                    height: '100%'
                }}
                >                
                    <H1 style={styles.header}>Success</H1>
                    <Text style={styles.text}>Check your email to reset your password. Then log into your Councils account.</Text>
                    <H3 style={styles.button} onPress={() => props.history.push('/login')}>Log In</H3>
                </Content>
            </Container>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        color: '#202224',
        fontFamily: 'gotham',
        fontSize: 28
    },
    text: {
        color: '#202224',
        fontFamily: 'bern-r',
        fontSize: 17,
        marginHorizontal: 20,
        marginTop: 16
    },
    button: {
        color: '#288365',
        fontFamily: 'bern-sb',
        fontSize: 17,
        marginTop: 68
    }
})

export default withRouter(Success)