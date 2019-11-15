import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Header, Left, Body, Text, Icon, Button } from 'native-base'


const ModalHeader = props => {
    return (
        <Header modal>
            <Left>
                <Button transparent onPress={() => props.setShowModal(false)}>
                    <Icon headerIcon name='close' />
                </Button>
            </Left>
            <Body style={styles.body}>
                <Text style={styles.text}>{props.name}</Text>
            </Body>
        </Header>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 24, 
        width: 24
    },
    body: {
        flex: 1, 
        justifyContent: 'center', 
        height: '100%',
        marginTop: Platform.OS === 'ios' ? 20 : null
    },
    text: {
        color: '#202224', 
        fontFamily: 'bern-sb', 
        fontSize: 17
    },

})

export default ModalHeader
