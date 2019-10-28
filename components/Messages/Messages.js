// Dependencies
import React, { useState, useEffect } from 'react'
import { Content, View, Footer, Header, List, ListItem, Container, Text, Col, Icon } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

// Components
import MessageForm from "./MessagesForm"
import Message from "./Message"
import firebase from '../../firebase'


const Messages = (props, { currentChannel, currentUser }) => {
  // const discussionsRef = props.direct ?
  //   firebase.database().ref('directMessages').child(currentChannel)
  //   :
  //   firebase.database().ref('councils').child(props.currentCouncil).child(currentChannel)

  // if(props.direct && currentChannel.split(':').filter(userId => currentUser.id === userId).length) let them pass

  const discussionsRef = firebase.database().ref('discussions')
  const [user, setUser] = useState(currentUser)
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
    if (!barndon && (currentChannel && user)) {
      addMessageListener(currentChannel.id)
    }
  }, [messages.length])


  const addMessageListener = channelId => {
    let loadedMessages = []
    discussionsRef.child(channelId).on('child_added', async snap => {
      await loadedMessages.push(snap.val())
      // messages.length > 0 &&
      setMessages(loadedMessages)
      // console.log('loadedMessages', loadedMessages)
      // console.log('messages', messages)
      setMessagesLoading(false)
    })
    countUsers(loadedMessages)
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
    messages.length > 0 && messages.map(message => (
      <Message
        key={message.timeStamp}
        message={message}
        user={user}
      />
    ))
  }

  const displayChannelName = channel => currentChannel ? `#${currentChannel.name}` : ''

  return (
    <Content padder>
        <View>

          <List className='messages'>
            {displayMessages(messages)}
            {messages.map(message => (
              <ListItem>
                <Message message={message}
                  user={message.user}
                  key={message.timeStamp} />
              </ListItem>
            ))}
          </List>

        </View>

      <View>
        <MessageForm
          discussionsRef={discussionsRef}
          currentChannel={currentChannel}
          currentUser={currentUser}
        />
      </View>
    </Content>
  )
}

export default connect(state => ({ ...state }))(withRouter(Messages))
