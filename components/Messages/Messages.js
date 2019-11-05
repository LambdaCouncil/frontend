// Dependencies
import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Content, View, List, Text, Container, Footer } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { connect } from 'react-redux'

// Components
import MessageForm from "./MessagesForm"
import Message from "./Message"
import firebase from '../../firebase'


const Messages = props => {

  const discussionsRef = props.currentChannel.direct ?
    firebase.firestore().collection('directMessages').doc(props.currentChannel.id)
    :
    firebase.firestore().ref('councils').child(props.currentChannel.council).child(props.currentChannel)

  const [messages, setMessages] = useState([])

  useEffect(_ => {

    discussionsRef.onSnapshot(doc => {
      doc.data() && setMessages(doc.data().messages)
    })

  }, [])

  console.log('messages from Messages *** : ', messages)

  return (
<<<<<<< HEAD
    <KeyboardAvoidingView
      behavior='padding'
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column-reverse'
=======

    <KeyboardAvoidingView
      behavior='padding'
      style={{
        justifyContent: 'center',
        flexDirection: 'column-reverse',
        height: '100%'
>>>>>>> 9f8262da7d0248659dd1046357289c6aac8036fa
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
<<<<<<< HEAD
          
        <View style={{height: 100}}>
          <MessageForm
            discussionsRef={discussionsRef}
            currentChannel={props.currentChannel}
            currentUser={props.currentUser}
          />
        </View>
      </Content>
    </KeyboardAvoidingView>
=======
        <MessageForm
          discussionsRef={discussionsRef}
          currentChannel={props.currentChannel}
          currentUser={props.currentUser}
        />
      </Content>
    </KeyboardAvoidingView>

>>>>>>> 9f8262da7d0248659dd1046357289c6aac8036fa
  )
}

export default connect(state => ({ ...state }))(withRouter(Messages))
