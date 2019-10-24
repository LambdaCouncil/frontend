import React from 'react'
import { List, ListItem, Thumbnail, Left, Body, Text, Right, View } from 'native-base'
import { withRouter, Link } from 'react-router-native'
import { connect } from 'react-redux'
import moment from 'moment'

import Header from '../Header/Header'
import pseudo from './pseudo';

const Discussions = props => {

    return (
        <List>
            {pseudo
                .sort((conv1, conv2) => conv2.time - conv1.time)
                .map((conv, id) => (
                    <ListItem avatar key={id * Math.random()}>
                        <Left>
                            <Thumbnail small source={{ uri: conv.image }} />
                        </Left>
                        <Body>
                            <Link to='/messages'>
                                <Text name new={conv.new > 0}>{conv.name}</Text>
                            </Link>
                            <Link to='/messages'>
                                <Text snippet newSnippet={conv.new > 0}>{conv.message}</Text>
                            </Link>
                            <Link to='/messages'>
                                <Text note>{moment(conv.time).format('DD/MM/YYYY')}</Text>
                            </Link>
                        </Body>
                        <Right>
                            <Link to='/messages'>
                                <Text>
                                    <Text new>{conv.new > 0 && conv.new}</Text>
                                    {' >'}
                                </Text>
                            </Link>
                        </Right>
                    </ListItem>
                ))}
        </List>
    )
}

export default connect(state => ({ ...state }), {})(withRouter(Discussions))
