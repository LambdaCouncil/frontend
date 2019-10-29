import React, { useState, useEffect } from 'react'
import { List, ListItem, Thumbnail, Left, Body, Text, Right, View, Content } from 'native-base'
import { withRouter } from 'react-router-native'
import { connect } from 'react-redux'
import moment from 'moment'

import { setCurrentChannel } from '../../actions'
import firebase from '../../firebase';

const Discussions = props => {

    const db = firebase.firestore()
    const discussionsRef = db.collection('directMessages')
    const [discussions, setDiscussions] = useState([])

    useEffect(_ => {

        let loadedChannels = []
        discussionsRef.onSnapshot(async querySnapshot => {
            await querySnapshot.forEach(doc => {
                loadedChannels.push({ id: doc.id, ...doc.data() })
            })
            setDiscussions(loadedChannels)
        })

    }, [])

    return (
        <Content padder>
            <List>
                {discussions.length > 0 && discussions
                    .sort((disc1, disc2) => disc2.messages[disc2.messages.length - 1].timestamp - disc1.messages[disc1.messages.length - 1].timestamp)
                    .map(disc => {
                        return <Discussion currentUser={props.currentUser} discussion={disc} key={disc.id} />
                    })}
            </List>
        </Content>
    )
}

const Discussion = props => {

    const [usersArray, setUsersArray] = useState([])
    const [otherUser, setOtherUser] = useState({})

    const mostRecent = props.discussion.messages.sort((conv1, conv2) => conv2.timestamp - conv1.timestamp)[0]

    useEffect(_ => {

        props.discussion.users.forEach(user => {
            user.get().then(querySnapshot => {
                if (querySnapshot.data().id !== props.currentUser.uid) setOtherUser(querySnapshot.data())
                setUsersArray([...usersArray, querySnapshot.data()])
            })
        })

    }, [])

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

export default connect(state => ({ ...state }), { setCurrentChannel })(withRouter(Discussions))
