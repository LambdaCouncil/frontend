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
                <Text style = {{ fontFamily: "bern-r", fontSize: 20, display: "flex", justifyContent: "center", marginHorizontal: "10%", marginTop: 30 }}>You have no active discussions! Press '+' to create a new one</Text>
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

        <ListItem style={{ height: 88, verticalPadding: 14 }} avatar
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
                <Thumbnail style={{ height: 48, width: 48 }} source={{ uri: otherUser.avatar || props.currentUser.photoURL }} />
            </Left>
            <Body>
                <Text name style={{ color: '#202224' }}>{otherUser.name || mostRecent.user.name}</Text>
                <Text snippet style={{
                    color: '#202224',
                    fontFamily: 'bern-r',
                    fontSize: 15,
                    marginTop: 7,
                    marginBottom: 7,
                }}>
                    {`${mostRecent.user.id === props.currentUser.uid ? 'me' : mostRecent.user.name}: ${mostRecent.content.slice(0, 10)}`}
                </Text>
                <Text note style={{
                    color: '#6f777e',
                    fontFamily: 'bern-r',
                    fontSize: 13
                }}>{moment(mostRecent.timestamp).format('lll')}</Text>
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
