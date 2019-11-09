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
    db('directMessages').doc(props.currentChannel.id)
    :
    db('councils').doc(props.currentChannel.council).collection(props.currentChannel)

  const [messages, setMessages] = useState([])

  useEffect(_ => {

    discussionsRef.onSnapshot(doc => {
      doc.data() && setMessages(doc.data().messages)
    })

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
