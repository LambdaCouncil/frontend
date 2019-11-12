import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-native'
import { Modal } from 'react-native'
import { connect } from 'react-redux'
import { Content, Text, List, ListItem, Button } from 'native-base'

import { setCurrentChannel } from '../../actions'
import ModalHeader from './ModalHeader'
import { db } from '../../firebase'

const NewPrivateMessage = props => {

    const [allUsers, setAllUsers] = useState([])

    useEffect(_ => {
        db('users').get()
            .then(docs => setAllUsers(docs.map(doc => doc.data())))
            .catch(err => console.error(err))
    }, [])

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
                            <Button transparent onPress={() => {
                                props.setCurrentChannel({
                                    id: `${props.currentUser.uid}:${user.id}`,
                                    direct: true,
                                    brandNewChannel: true,
                                    users: [db.doc(`/users/${props.currentUser.uid}`), db.doc(`/users/${user.id}`)]
                                })
                                props.setShowModal(false)
                                props.history.push('/messages')
                            }}>
                                <Text>{user.name}</Text>
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Content>

        </Modal>
    )
}

export default connect(state => ({ ...state }), { setCurrentChannel })(withRouter(NewPrivateMessage))
