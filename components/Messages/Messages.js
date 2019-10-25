// Dependencies
import React, { useState, useEffect } from 'react'
import { Content, View, List, ListItem } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { connect } from 'react-redux'

// Components
import MessageForm from "./MessagesForm"
import Message from "./Message"
import firebase from '../../firebase'


const Messages = props => {

  const discussionsRef = props.currentChannel.direct ?
    firebase.database().ref('directMessages').child(props.currentChannel.id)
    :
    firebase.database().ref('councils').child(props.currentChannel.council).child(props.currentChannel)

  // if(props.direct && props.currentChannel.split(':').filter(userId => props.currentUser.id === userId).length) let them pass

  console.log('location', props.location)

  // const discussionsRef = firebase.database().ref('discussions')
  const user = props.currentUser
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [messagesLoading, setMessagesLoading] = useState(true)
  const [numUniqueUsers, setNumUniqueUsers] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  // The Barndon Constant
  // 2019 Colorized
  const [barndon, setBarndon] = useState(false)

  useEffect(() => {
    if (!barndon && (props.currentChannel && user)) {
      addMessageListener()
    }
  }, [messages.length])


  const addMessageListener = channelId => {
    let loadedMessages = []
    discussionsRef.on('value', async snap => {
      await loadedMessages.push(snap.val())
      // messages.length > 0 &&
      setMessages(loadedMessages)
      // console.log('loadedMessages', loadedMessages)
      // console.log('messages', messages)
      setMessagesLoading(false)
    })
  }

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
    setSearchLoading(true)
  }

  const handleSearchMessages = () => {
    const channelMessages = [...messages]
    const regex = new RegExp(searchTerm, 'gi')
    const searchResults = channelMessages.reduce((acc, message) => {
      if (message.content && message.content.match(regex)) {
        acc.push(message)
      }
      return acc
    }, [])
    setSearchResults(searchResults)
  }

  const countUsers = (messages) => {
    const uniqueUsers = messages.reduce((acc, message) => {
      if (!acc.includes(message.user.name)) {
        acc.push(message.user.name)
      }
      return acc
    }, [])
    const plural = uniqueUsers.length > 1 || uniqueUsers.length === 0
    const numUniqueUsers = `${uniqueUsers.length} user${plural ? 's' : ''}`
    setNumUniqueUsers(numUniqueUsers)
  }

  const displayMessages = messages => {
    messages.length > 0 && messages.map((message, id) => (
      <Message message={message}
        key={id * Math.random()}
        message={message}
      // user={user}
      />
    ))
  }

  const displayChannelName = channel => props.currentChannel ? `#${props.currentChannel.name}` : ''

  return (
    <Content padder>
      {/* 
        List is similar in appearance to the Discussions section in the Style Guide. 
          Alternatively, we could use Card for each message.
          see: (Zeplin: 06 Discussions - 1)
        */}
      <View>

        <List className='messages'>
          {displayMessages(messages)}
        </List>

      </View>
      {/* 
          MessageForm doesn't exist in the app, instead there is a + button 
          on the right side of the header which opens an ActionSheet
          see: (Zeplin: 06 Discussions - 1, 06 Discussions - 2) 
        */}


      <View>
        <MessageForm
          discussionsRef={discussionsRef}
          currentChannel={props.currentChannel}
          currentUser={props.currentUser}
        />
      </View>
    </Content>
  )
}

export default connect(state => ({ ...state }))(withRouter(Messages))
