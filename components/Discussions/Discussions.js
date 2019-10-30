import React, { useState, useEffect } from 'react'
import {
    List,
    ListItem,
    Thumbnail,
    Left,
    Body,
    Text,
    Right,
    View,
    Content
} from 'native-base'
import { withRouter } from 'react-router-native'
import { connect } from 'react-redux'
import moment from 'moment'

import { setCurrentChannel } from '../../actions'
import firebase from '../../firebase'

const Discussions = props => {

    const db = firebase.firestore()
    const discussionsRef = db.collection('directMessages')
    const [discussions, setDiscussions] = useState([])

    const populateUsers = cb => {
        discussionsRef
            .where('users', 'array-contains', db.doc(`users/${props.currentUser.uid}`))
            .onSnapshot(allDiscussions => {
                allDiscussions.map(doc => doc.data())
            })
    }

    useEffect(_ => populateUsers(), [])
    console.log('discussions', discussions)

    return (
        <Content padder>
            <List>
                {discussions.length > 0 && discussions
                    .sort((disc1, disc2) => disc2.messages[disc2.messages.length - 1].timestamp - disc1.messages[disc1.messages.length - 1].timestamp)
                    .map(disc => <Discussion
                        setCurrentChannel={props.setCurrentChannel}
                        currentUser={props.currentUser}
                        discussion={disc}
                        key={disc.id}
                        history={props.history}
                    />
                    )}
            </List>
        </Content>
    )
}

const Discussion = props => {

    console.log('discussion', props.discussion)

    const otherUser = props.discussion.users[0].id === props.currentUser.uid ? props.discussion.users[1] : props.discussion.users[0]

    const mostRecent = props.discussion.messages.sort((conv1, conv2) => conv2.timestamp - conv1.timestamp)[0]

    return (

        <ListItem avatar
            onPress={() => {
                props.setCurrentChannel({
                    id: props.discussion.id,
                    direct: true
                })
                props.history.push('/messages')
            }}
        >
            <Left>
                <Thumbnail small source={{ uri: otherUser.avatar || props.currentUser.photoURL }} />
            </Left>
            <Body>
                <Text name>{otherUser.name || mostRecent.user.name}</Text>
                <Text snippet>{mostRecent.content}</Text>
                <Text note>{moment(mostRecent.timestamp).format('lll')}</Text>
            </Body>
            <Right>
                <Text>
                    {/* <Text new>{conv.new > 0 && conv.new}</Text> */}
                    {' >'}
                </Text>
            </Right>
        </ListItem>
    )

}

export default connect(
    state => ({ ...state }),
    { setCurrentChannel }
)(withRouter(Discussions))
