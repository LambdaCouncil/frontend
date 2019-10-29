import React, { useState, useEffect } from 'react'
import { List, ListItem, Thumbnail, Left, Body, Text, Right, View, Content } from 'native-base'
import { withRouter } from 'react-router-native'
import { connect } from 'react-redux'
import moment from 'moment'

import { setCurrentChannel } from '../../actions'
import firebase from '../../firebase';

const Discussions = props => {

    const discussionsRef = firebase.firestore().collection('directMessages')
    const [discussions, setDiscussions] = useState([])
    const [otherUser, setOtherUser] = useState()

    useEffect(_ => {

        let loadedChannels = []
        discussionsRef.onSnapshot(async querySnapshot => {
            await querySnapshot.forEach(doc => {
                loadedChannels.push({ id: doc.id, ...doc.data() })
            })
            loadedChannels.length && setDiscussions(loadedChannels.filter(disc => disc.users.includes(props.currentUser.uid)))
        })

    }, [])

    console.log("(Discussions.js) discussions: ", discussions)

    return (
        <Content padder>
            <List>
                {discussions.length > 0 && discussions
                    .sort((disc1, disc2) => disc2.messages[disc2.messages.length - 1].timestamp - disc1.messages[disc1.messages.length - 1].timestamp)
                    .map(messages => (messages.messages
                        .sort((conv1, conv2) => conv2.timestamp - conv1.timestamp)
                        .map((conv, id) => {

                            {/* const otherUserId = disc.users[0] === props.currentUser.uid ? disc.users[1] : disc.users[0]

                            const otherUser = firebase.firestore().collection('users').doc(otherUserId) */}

                            if (id === 0) return (

                                <ListItem avatar
                                    key={id * Math.random()}
                                    onPress={() => {
                                        props.setCurrentChannel({
                                            id: messages.id,
                                            direct: true
                                        })
                                        props.history.push('/messages')
                                    }}
                                >
                                    <Left>
                                        <Thumbnail small source={{ uri: props.currentUser.photoURL }} />
                                    </Left>
                                    <Body>
                                        <Text name>{conv.user.name}</Text>
                                        <Text snippet>{conv.content}</Text>
                                        <Text note>{moment(conv.timestamp).format('lll')}</Text>
                                    </Body>
                                    <Right>
                                        <Text>
                                            {/* <Text new>{conv.new > 0 && conv.new}</Text> */}
                                            {' >'}
                                        </Text>
                                    </Right>
                                </ListItem>
                            )
                        })
                    ))}
            </List>
        </Content>
    )
}

export default connect(state => ({ ...state }), { setCurrentChannel })(withRouter(Discussions))
