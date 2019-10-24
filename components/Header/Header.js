import React, { useState, useEffect } from "react"
import { Button, Text, Header, Left, Icon, Body, Right } from "native-base"
import { withRouter } from "react-router-native"
import { connect } from "react-redux"

import SidePanel from "../SidePanel/SidePanel"
import MessageActionSheet from "../Messages/MessageActionSheet"

const pageHeader = props => {
  const [showPanel, setShowPanel] = useState(false)
  const [currentPageName, setCurrentPageName] = useState('')

  const addIconArray = [
    '/discussions',
    '/agendas',
    '/assignments',
    '/files',
    '/promptings'
  ]

  useEffect(() => {
    setCurrentPageName(props.location.pathname)
  }, [props.location.pathname])

  // console.log(props)

  const togglePanel = () => {
    setShowPanel(!showPanel)
  }

  const onClickHandler = () => {
    switch (currentPageName) {
      case '/discussions':
        return <MessageActionSheet />


      default:
        return null
    }
  }

  const renderPageName = () => {
    return currentPageName
      .replace('/', '')
      .split('-')
      .map(word => word.split('')
        .map((letter, id) => {
          if (id === 0) return letter.toUpperCase()
          else return letter.toLowerCase()
        })
        .join(''))
      .join(' ')
  }

  return (
    <>
      <Header>
        <Left>
          <Button onPress={() => togglePanel()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Text>{renderPageName()}</Text>
        </Body>
        <Right>
          <Button onPress={() => onClickHandler()}>
            <Text>
              {addIconArray.filter(icon => icon === currentPageName).length ? (
                <MessageActionSheet />
              ) : ('')}
            </Text>
          </Button>
        </Right>
      </Header>
      {showPanel && <SidePanel togglePanel={togglePanel} />}
    </>
  )
}

export default withRouter(pageHeader)
