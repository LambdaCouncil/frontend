import React from 'react'
import { Header, Left, Body, Text, Icon, Button } from 'native-base'

const ModalHeader = props => {
    return (
        <Header modal>
            <Left>
                <Button transparent onPress={() => props.setShowModal(false)}>
                    <Icon dgreal style={{height: 24, width: 24, }} name='close' />
                </Button>
            </Left>
            <Body style={{flex: 1, justifyContent: 'center', height: '100%', marginTop: 20}}>
                <Text style={{color: '#202224', fontFamily: 'bern-sb', fontSize: 17}}>{props.name}</Text>
            </Body>
        </Header>
    )
}

export default ModalHeader
