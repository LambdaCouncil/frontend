import React from 'react'
import Header from '../Header/Header'
import { List, ListItem, Thumbnail, Left, Body, Text, Right, Badge, Icon } from 'native-base'
import { withRouter } from 'react-router-native'
import moment from 'moment'

import variables from '../../native-base-theme/variables/commonColor'
import pseudo from './pseudo'

const Discussions = props => {

    return (

        <>
            <Icon backButton
                onPress={() => props.history.goBack()}
                name='arrow-dropleft'
            />
            <List>
                {pseudo
                    .sort((conv1, conv2) => conv2.time - conv1.time)
                    .map((conv, id) => (
                        <ListItem avatar key={id}>
                            <Left>
                                <Thumbnail small source={{ uri: conv.image }} />
                            </Left>
                            <Body>
                                <Text name new={conv.new > 0}>{conv.name}</Text>
                                <Text snippet newSnippet={conv.new > 0}>{conv.message}</Text>
                                <Text note>{moment(conv.time).format('DD/MM/YYYY')}</Text>
                            </Body>
                            <Right>
                                <Text>{conv.new > 0 && conv.new}{' >'}</Text>
                            </Right>
                        </ListItem>
                    ))}
            </List>
        </>
    )
}

export default withRouter(Discussions)
