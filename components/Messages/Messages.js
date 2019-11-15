// Dependencies
import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Content, View, List, Text, Container, Footer } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { connect } from 'react-redux'

// Components
import MessageForm from "./MessagesForm"
import Message from "./Message"
import { db } from '../../firebase'


const Messages = props => {

  const discussionsRef = props.currentChannel.direct ?
    db('directMessages').doc(props.currentChannel.id).collection('messages')// if channel is direct message
    :
    db('councils').doc(props.currentChannel.council).collection(props.currentChannel.id)// if channel is council

  const [messages, setMessages] = useState([])

  useEffect(_ => {

    discussionsRef// set messages for current channel
      .onSnapshot(msgs => setMessages(
        msgs.docs
          .map(msg => ({ ...msg.data(), id: msg.id }))
          .sort((msg1, msg2) => msg1.timestamp - msg2.timestamp)
      ))

  }, [])

  console.log('messages from Messages *** : ', messages)

  return (

    <KeyboardAvoidingView
      behavior='padding'
      style={{
        justifyContent: 'center',
        flexDirection: 'column-reverse',
        height: '100%'
      }}>
      <Content test>
        <List>
          {messages.length > 0 && messages.map((message, id) =>
            <Message
              message={message}
              currentUser={props.currentUser}
              key={id * Math.random()}
              message={message}
            />
          )}
        </List>
        <MessageForm
          discussionsRef={discussionsRef}
          currentChannel={props.currentChannel}
          currentUser={props.currentUser}
        />
      </Content>
    </KeyboardAvoidingView>

  )
}

export default connect(state => ({ ...state }))(withRouter(Messages))
