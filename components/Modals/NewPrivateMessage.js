import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-native'
import { Modal } from 'react-native'
import { connect } from 'react-redux'
import { Body, Content, Text, Thumbnail, Left, Right, List, ListItem, Button } from 'native-base'

import { setCurrentChannel } from '../../actions'
import ModalHeader from './ModalHeader'
import { db } from '../../firebase'

const NewPrivateMessage = props => {

    const [allUsers, setAllUsers] = useState([])

    useEffect(_ => {
        const loadedUsers = []
        db('users').get()
            .then(docs => docs.forEach(async doc => {
                await loadedUsers.push(doc.data())
                setAllUsers(loadedUsers)
            }))
            .catch(err => console.error(err))
    }, [])

    console.log('newPrivateMessage Modal: ', allUsers)

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
                        <ListItem avatar style={{ paddingBottom: 10, borderBottomWidth: 1 }} key={id * Math.random()} onPress={() => {
                            props.setCurrentChannel({
                                id: `${props.currentUser.uid}:${user.id}`,
                                direct: true,
                                users: [props.currentUser.uid, user.id]
                            })
                            db('directMessages').doc(`${props.currentUser.uid}:${user.id}`).set({
                                direct: true,
                                users: [props.currentUser.uid, user.id]
                            })
                            props.setShowModal(false)
                            props.history.push('/messages')
                        }}>
                            <Left>
                                <Thumbnail style={{ height: 48, width: 48 }} source={{ uri: user.avatar }} />
                            </Left>
                            <Body>
                                <Text name style={{ color: '#202224', marginTop: 10 }}>{user.name}</Text>
                                <Text style={{ color: '#6f777e', fontSize: 13 }}>Council - {user.calling}</Text>
                            </Body>
                            <Right>

                            </Right>                           
                        </ListItem>
                    ))}
                </List>
            </Content>

        </Modal>
    )
}

export default connect(state => ({ ...state }), { setCurrentChannel })(withRouter(NewPrivateMessage))
