import React, { useState } from 'react'
import { Text, Input, Button, Item, Label, Form } from 'native-base'
import { connect } from 'react-redux'

import { setCurrentChannel } from '../../actions'
import firebase from '../../firebase'


const MessageForm = props => {

    const [message, setMessage] = useState('')

    const handleChange = e => {
        setMessage(e.nativeEvent.text)
    }

    const sendMessage = _ => {
        if (message) {

            const newMessage = {
                messages: firebase.firestore.FieldValue.arrayUnion({
                    timestamp: Date.now(),
                    user: {
                        id: props.currentUser.uid,
                        name: props.currentUser.displayName
                    },
                    content: message
                })
            }

            props.currentChannel.brandNewChannel ?
                props.discussionsRef.set({
                    ...newMessage,
                    users: props.currentChannel.users
                })
                    .then(_ => {
                        props.setCurrentChannel({
                            ...props.currentChannel,
                            brandNewChannel: false
                        })
                        setMessage('')
                    })
                    .catch(err => console.log(err))
                :
                props.discussionsRef.update(newMessage)
                    .then(_ => setMessage(''))
                    .catch(err => console.log(err))

        }
    }


    return (
        <Form>
            <Item floatingLabel>
                <Label>Write your message</Label>
                <Input onChange={handleChange} value={message} />
            </Item>
            <Button transparent>
                <Text>@</Text>
            </Button>
            <Button transparent onPress={sendMessage}>
                <Text>Send</Text>
            </Button>
        </Form>
    )
}

export default connect(state => ({ ...state }), { setCurrentChannel })(MessageForm)
