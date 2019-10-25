import React, { useState, useEffect } from 'react'
import { Modal } from 'react-native'
import { connect } from 'react-redux'
import { Content, Text, List, ListItem } from 'native-base'

import { setCurrentChannel } from '../../actions'
import ModalHeader from './ModalHeader'
import firebase from '../../firebase'

const NewPrivateMessage = props => {

    const [allUsers, setAllUsers] = useState([])

    const Users = firebase.database().ref('users')

    useEffect(_ => {
        let loadedMessages = []
        Users.on('value', async snap => {
            await Object.keys(snap.val())
                .forEach(id => loadedMessages
                    .push({ ...snap.val()[id], id }))
            setAllUsers(loadedMessages)
        })
    }, [])

    console.log(allUsers)

    return (
        <Modal
            animationType='slide'
            transparent={false}
            visible={true}
        >

            <ModalHeader
                name='New Private Message'
                setShowModal={props.setShowModal}
            />

            <Content padder>
                <List>
                    {allUsers.length > 0 && allUsers.map((user, id) => (
                        <ListItem key={id * Math.random()}>
                            <Text>{user.name}</Text>
                        </ListItem>
                    ))}
                </List>
            </Content>

        </Modal>
    )
}

export default connect(state => ({ ...state }), { setCurrentChannel })(NewPrivateMessage)
