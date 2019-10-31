import React from 'react'
import { Header, Left, Body, Text, Icon, Button } from 'native-base'

const ModalHeader = props => {
    return (
        <Header modal>
            <Left>
                <Button transparent onPress={() => props.setShowModal(false)}>
                    <Icon dgreal name='close' />
                </Button>
            </Left>
            <Body>
                <Text>{props.name}</Text>
            </Body>
        </Header>
    )
}

export default ModalHeader
