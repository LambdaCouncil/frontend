import React, { useState, useEffect } from 'react'
import { List, ListItem, Thumbnail, Left, Body, Text, Right, View, Content } from 'native-base'
import { withRouter, Link } from 'react-router-native'
import { connect } from 'react-redux'
import moment from 'moment'

import { setCurrentChannel } from '../../actions'
import firebase from '../../firebase';

const Discussions = props => {

    const discussionsRef = firebase.firestore().collection('directMessages')

    const [barndon, setBarndon] = useState(false)
    const [discussions, setDiscussions] = useState([])

    useEffect(_ => {

        const discussionListener = _ => {
            let loadedChannels = []
            discussionsRef.get()
                .then(async querySnapshot => {
                    await querySnapshot.forEach(doc => {
                        loadedChannels.push({ id: doc.id, ...doc.data() })
                    })
                    setDiscussions(loadedChannels)
                })
            console.log(discussions)
        }

        if (!barndon) discussionListener()

    }, [])

    console.log(discussions)

    return (
        <Content padder>
            <List>
                {discussions.length > 0 && discussions
                    .map(messages => (messages.messages.sort((conv1, conv2) => conv2.timestamp - conv1.timestamp)
                        .map((conv, id) => {

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
                                    {/*<Left>
                            <Thumbnail small source={{ uri: conv.image }} />
                        </Left>*/}
                                    <Body>
                                        <Text name>{conv.user.name}</Text>
                                        <Text snippet>{conv.content}</Text>
                                        <Text note>{moment(conv.timestamp).format('lll')}</Text>
                                    </Body>
                                    {/*<Right>
                            <Link to='/messages'>
                                <Text>
                                <Text new>{conv.new > 0 && conv.new}</Text>
                                    {' >'}
                                </Text>
                                </Link>
                        </Right>*/}
                                </ListItem>
                            )
                        })
                    ))}
            </List>
        </Content>
    )
}

export default connect(state => ({ ...state }), { setCurrentChannel })(withRouter(Discussions))
