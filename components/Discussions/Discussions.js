import React, { useState, useEffect } from 'react'
import { List, ListItem, Thumbnail, Left, Body, Text, Right, View, Content } from 'native-base'
import { withRouter, Link } from 'react-router-native'
import { connect } from 'react-redux'
import moment from 'moment'

import firebase from '../../firebase';

const Discussions = props => {

    const discussionsRef = firebase.database().ref('directMessages')

    const [barndon, setBarndon] = useState(false)
    const [discussions, setDiscussions] = useState([])

    useEffect(_ => {

        const discussionListener = _ => {
            let loadedChannels = []
            discussionsRef.on('value', async snap => {
                await loadedChannels.push(snap.val())
                setDiscussions(loadedChannels
                    .map(chanId => ({
                        [chanId]: Object.keys(chanId)
                            .map(messId => ({ ...chanId[messId], messId }))
                    })))
                setBarndon(true)
            })
        }

        if (!barndon) discussionListener()

    }, [])

    console.log(discussions)

    return (
        <Content padder>
            <List>
                {discussions.length > 0 && discussions
                    .map((conv, id) => (
                        <ListItem avatar key={id * Math.random()}>
                            {/*<Left>
                            <Thumbnail small source={{ uri: conv.image }} />
                        </Left>*/}
                            <Body>
                                <Link to='/messages'>
                                    <Text name>{conv[0].user.name}</Text>
                                </Link>
                                <Link to='/messages'>
                                    <Text snippet>{conv[0].content}</Text>
                                </Link>
                                <Link to='/messages'>
                                    <Text note>{moment(conv[0].timestamp).format('DD/MM/YYYY')}</Text>
                                </Link>
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
                    ))}
            </List>
        </Content>
    )
}

export default connect(state => ({ ...state }), {})(withRouter(Discussions))
