import React, { useState, useEffect } from 'react';
import { Text, Form, Input, Button, Container, Content, Item, View, Footer } from 'native-base'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-native'

import firebase from '../../firebase'


const MessageForm = ({ discussionsRef, currentChannel, currentUser, location }) => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [messagesLoading, setMessagesLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [channel, setChannel] = useState(currentChannel);
    const [user, setUser] = useState(currentUser);

    console.log('Message:', location.pathname)

    const handleChange = e => {
        setMessage(e.nativeEvent.text)
    };

    const createMessage = () => {
        return {
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            user: {
                id: user.uid,
                name: user.displayName,
                avatar: user.photoURL
            },
            content: message
        };
    };


    const sendMessage = _ => {
        if (message) {
            setLoading(true);
            discussionsRef
                .child('thisdiscussiondoesnthaveanid')
                .push()
                .set(createMessage())
                .then(() => {
                    setLoading(false);
                    setMessage('')
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false)
                })
        }
    };


    return (

        <View>
            <Item >
                <Input
                    style={style.input}
                    name='message'
                    onChange={handleChange}
                    value={message}
                    placeholder='Write your message'
                />
            </Item>
            <Button transparent style={style.button1}>
                <Text style={style.text}>@</Text>
            </Button>
            <Button transparent style={style.button2} onPress={sendMessage}>
                <Text style={style.text}> Send Message</Text>
            </Button>
        </View>

    );
};

const style = StyleSheet.create({
    screen: {
        flexDirection: 'row'
    },
    button1: {
        width: '50%',
        justifyContent: 'center'

    },
    button2: {
        width: '50%',
        justifyContent: 'center'

    },
    text: {
        color: '#288365'
    },

    input: {
        borderWidth: 0.5,
        borderColor: 'black'
    }

})

export default connect(state => ({ ...state }))(withRouter(MessageForm));