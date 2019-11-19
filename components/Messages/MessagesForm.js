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

            props.discussionsRef.add({
                timestamp: Date.now(),
                user: props.currentUser.uid,
                content: message
            })
            setMessage('')

        }
    }


    return (
        <>
            <Item floatingLabel>
                <Label style={{ marginLeft: 20 }}>Write a message...</Label>
                <Input message onChange={handleChange} value={message} />
            </Item>

            <Form message>
                {/* <Button transparent>
                    <Text>@</Text>
                </Button> */}

                <Button style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', order: 0 }} transparent onPress={sendMessage}>
                    <Text style={{ color: '#288365', fontFamily: 'bern-sb', fontSize: 17 }}>Send</Text>
                </Button>
            </Form>
        </>
    )
}

export default connect(state => ({ ...state }), { setCurrentChannel })(MessageForm)
