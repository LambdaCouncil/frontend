// Dependencies
import React, { useState, useEffect } from 'react'
import { Content, View, List, ListItem, Footer } from 'native-base'
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
    firebase.database().ref('councils').child(props.currentChannel.council).child(props.currentChannel)

  const user = props.currentUser
  const [messages, setMessages] = useState([])

  // The Barndon Constant
  // 2019 Colorized
  const [barndon, setBarndon] = useState(false)

  useEffect(_ => {

    const messageListener = _ => {
      discussionsRef.onSnapshot(doc => {
        doc.data() && setMessages(doc.data().messages)
      })
    }

    if (!barndon) messageListener()

  }, [messages.length])

  console.log('messages', messages)

  return (
    <Content padder>
      {/* 
        List is similar in appearance to the Discussions section in the Style Guide. 
          Alternatively, we could use Card for each message.
          see: (Zeplin: 06 Discussions - 1)
        */}

      {messages.length > 0 && messages.map((message, id) => (
        <Message message={message}
          key={id * Math.random()}
          message={message}
        />
      ))}

      {/* 
          MessageForm doesn't exist in the app, instead there is a + button 
          on the right side of the header which opens an ActionSheet
          see: (Zeplin: 06 Discussions - 1, 06 Discussions - 2) 
        */}
      <Footer>
        <MessageForm
          discussionsRef={discussionsRef}
          currentChannel={props.currentChannel}
          currentUser={props.currentUser}
        />
      </Footer>
    </Content>
  )
}

export default connect(state => ({ ...state }))(withRouter(Messages))
