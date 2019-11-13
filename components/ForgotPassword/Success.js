import React from 'react'
import { Button, Container, Content, H1, H3, Icon, Input, Item, Label, Text } from 'native-base'
import { Link, withRouter } from 'react-router-native'

const Success = props => {

    return (
        <>
            <Button backButton onPress={props.history.goBack}>
                <Icon
                    backButton
                    name='arrow-back'
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
                    <H1 pre>Success</H1>

                    <Text pre para>Check your email to reset your password. Then log into your Councils account.</Text>
                    
                    <H3 submit active onPress={() => props.history.push('/login')}>Log In</H3>
                    
                </Content>
            </Container>
        </>
    )
}


export default withRouter(Success)