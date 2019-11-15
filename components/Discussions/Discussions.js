import React, { useState, useEffect } from 'react'
import {
    List,
    ListItem,
    Thumbnail,
    Left,
    Body,
    Text,
    Right,
    Content,
    Spinner
} from 'native-base'
import { withRouter } from 'react-router-native'
import { connect } from 'react-redux'
import moment from 'moment'

import { setCurrentChannel } from '../../actions'
import { db } from '../../firebase'

const Discussions = props => {

    const [loading, setLoading] = useState(false)
    const [discussions, setDiscussions] = useState([])

    useEffect(_ => {

        setLoading(true)

        const unsub = db('directMessages')
            .where('users', 'array-contains', props.currentUser.uid)
            .onSnapshot(allDiscussions => {
                setDiscussions(
                    allDiscussions.docs
                        .map(doc => {
                            return {
                                ...doc.data(),
                                id: doc.id,
                                direct: true
                            }
                        })
                )
                setLoading(false)
            })

        return unsub

    }, [])

    if (discussions.length > 0) return (
        <Content padder>
            <List>
                {
                    discussions
                        .map(disc => <Discussion
                            setCurrentChannel={props.setCurrentChannel}
                            currentUser={props.currentUser}
                            discussion={disc}
                            key={disc.id}
                            history={props.history}
                        />)
                }
            </List>
        </Content>
    )
    else return (
        <Content padder>
            <List>
                {
                    loading ?
                        <Spinner /> :
                        <>
                            <Text style={commonTextStyle}>You have no active discussions!</Text>
                            <Text style={commonTextStyle}>Press '+' to create a new one</Text>
                        </>
                }
            </List>
        </Content>
    )
}

const Discussion = props => {

    const [otherUser, setOtherUser] = useState({})
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(_ => {

        const unsub = db('directMessages').doc(props.discussion.id)
            .collection('messages').onSnapshot(msgSnaps =>
                setMessages(
                    msgSnaps.docs
                        .map(msg => ({ ...msg.data(), id: msg.id }))
                ))

        const populateUsers = _ => {
            const otherUserId = props.discussion.users[0] === props.currentUser.uid ?
                props.discussion.users[1] : props.discussion.users[0]
            db('users').doc(otherUserId).get().then(user => setOtherUser(user.data()))
                .then(_ => setLoading(false))
        }

        if (messages.length) populateUsers()

        return unsub

    }, [messages])

    if (!loading) {

        const mostRecent = messages.sort((conv1, conv2) => conv2.timestamp - conv1.timestamp)[0],
            snippetString = `${mostRecent.user === props.currentUser.uid ? 'me' : otherUser.firstName}: ${mostRecent.content.slice(0, 15)}`

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
                <Left active={mostRecent.unread}>
                    <Thumbnail style={{ height: 48, width: 48 }} source={{ uri: otherUser.avatar || props.currentUser.photoURL }} />
                </Left>
                <Body>
                    <Text name style={{ color: '#202224' }}>{otherUser.name}</Text>
                    <Text snippet style={{
                        color: '#202224',
                        fontFamily: 'bern-r',
                        fontSize: 15,
                        marginTop: 7,
                        marginBottom: 7,
                        maxWidth: '100%',
                    }}>
                        {`${snippetString}${snippetString.length - (mostRecent.user.id === props.currentUser.uid ? 'me'.length : otherUser.firstName.length) < mostRecent.content.length ? '...' : ''}`}
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

    else return <ListItem style={{ height: 88, verticalPadding: 14 }} avatar />

}

export default connect(
    state => ({ ...state }),
    { setCurrentChannel }
)(withRouter(Discussions))

const commonTextStyle = {
    fontFamily: "bern-r",
    fontSize: 19,
    display: "flex",
    justifyContent: "center",
    marginHorizontal: "5%",
    marginVertical: 10
}