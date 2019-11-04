import React, { useState, useEffect } from 'react'
import {
    List,
    ListItem,
    Thumbnail,
    Left,
    Body,
    Text,
    Right,
    Content
} from 'native-base'
import { withRouter } from 'react-router-native'
import { connect } from 'react-redux'
import moment from 'moment'

import { setCurrentChannel } from '../../actions'
import firebase from '../../firebase'
import pseudoDiscussion from './pseudo'

const Discussions = props => {

    const db = firebase.firestore()
    const discussionsRef = db.collection('directMessages')
    const [discussions, setDiscussions] = useState([])

    useEffect(_ => {
        discussionsRef
            .where('users', 'array-contains', db.doc(`users/${props.currentUser.uid}`))
            .onSnapshot(allDiscussions => {
                setDiscussions(allDiscussions.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            })
    }, [])

    if (discussions.length > 0) return (
        <Content padder>
            <List>
                {discussions
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
    else return (
        <Content padder>
            <List>
                <Discussion
                    loading={true}
                    discussion={pseudoDiscussion}
                    currentUser={props.currentUser}
                />
            </List>
        </Content>
    )
}

const Discussion = props => {

    const db = firebase.firestore()
    const [otherUser, setOtherUser] = useState({})

    useEffect(_ => {

        const populateUsers = _ => {
            const discIdArr = props.discussion.id.split(':')
            const otherUserId = discIdArr[0] === props.currentUser.uid ? discIdArr[1] : discIdArr[0]
            db.doc(`users/${otherUserId}`).get().then(user => setOtherUser(user.data()))
        }

        if (!props.loading) populateUsers()

    }, [])

    const mostRecent = props.discussion.messages.sort((conv1, conv2) => conv2.timestamp - conv1.timestamp)[0]

    return (

        <ListItem avatar
            onPress={() => {
                if (!props.loading) {
                    props.setCurrentChannel({
                        id: props.discussion.id,
                        direct: true
                    })
                    props.history.push('/messages')
                }
            }}
        >
            <Left>
                <Thumbnail small source={{ uri: otherUser.avatar || props.currentUser.photoURL }} />
            </Left>
            <Body>
                <Text name>{otherUser.name || mostRecent.user.name}</Text>
                <Text snippet>{`${mostRecent.user.id === props.currentUser.uid ?
                    'me' : mostRecent.user.name}: ${mostRecent.content}`}</Text>
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
