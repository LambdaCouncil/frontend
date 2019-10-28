// Dependencies
import React, { useState, useEffect } from 'react'
import { Content, View, List, Container, Footer } from 'native-base'
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

  const [messages, setMessages] = useState([])

  useEffect(_ => {

    discussionsRef.onSnapshot(doc => {
      doc.data() && setMessages(doc.data().messages)
    })

  }, [])

  return (
    <Container>


      {/* List is similar in appearance to the Discussions section in the Style Guide. 
          Alternatively, we could use Card for each message.
          see: (Zeplin: 06 Discussions - 1) */}

      <Content>
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

        {/* MessageForm doesn't exist in the app, instead there is a + button 
          on the right side of the header which opens an ActionSheet
          see: (Zeplin: 06 Discussions - 1, 06 Discussions - 2) */}

        <MessageForm
          discussionsRef={discussionsRef}
          currentChannel={props.currentChannel}
          currentUser={props.currentUser}
        />
      </Content>

    </Container>
  )
}

export default connect(state => ({ ...state }))(withRouter(Messages))
