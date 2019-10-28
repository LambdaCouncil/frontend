import React from "react"
import moment from "moment"
import { ListItem, Text, Thumbnail, Left, Body, Right } from 'native-base'

const Message = props => {

    const { user, content, timestamp } = props.message

    return user.id === props.currentUser.uid ?
        <ListItem avatar last>
            <Body>
                <Text snippet>{content}</Text>
            </Body>
            <Right>
                <Thumbnail small source={{ uri: user.avatar }} />
            </Right>
        </ListItem>
        :
        <ListItem avatar>
            <Left>
                <Thumbnail small source={{ uri: user.avatar }} />
            </Left>
            <Body>
                <Text snippet>{content}</Text>
            </Body>
        </ListItem>


}

export default Message