import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Container, Content, H1, H3, Icon, Input, Item, Label, Text } from 'native-base'
import { Link, withRouter } from 'react-router-native'

const Success = props => {
    return (

        <Container>
            <Content>                
                <H1>Success</H1>
                <Text>Check your email to reset your password. Then log into your Councils account.</Text>
                <H3>Log In</H3>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {

    },
    text: {

    },
    button: {

    }
})

export default withRouter(Success)