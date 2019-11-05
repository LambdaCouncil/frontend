import React, { useState } from "react"
import moment from "moment"
import { ListItem, Text, Thumbnail, Left, Body, Right, View } from 'native-base'

import firebase from '../../firebase'

const Message = props => {

    const [avatar, setAvatar] = useState('https://ui-avatars.com/api/?name=Councils+App')

    const { user, content, timestamp } = props.message

    firebase.firestore().collection('users').doc(user.id).get()
        .then(doc => setAvatar(doc.data().avatar))
        .catch(err => console.error(err))

    return user.id === props.currentUser.uid ?
            <ListItem avatar>
                <Body message>
                    <Text snippet>{content}</Text>
                </Body>
                <Right>
                    <Thumbnail small source={{ uri: avatar }} />
                </Right>
            </ListItem>
        :
        <ListItem avatar>
            <Left>
                <Thumbnail small source={{ uri: avatar }} />
            </Left>
            <Body message>
                <Text snippet>{content}</Text>
            </Body>
        </ListItem>

}

export default Message