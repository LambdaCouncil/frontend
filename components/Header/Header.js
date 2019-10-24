import React, { useState, useEffect } from "react"
import { Button, Text, Header, Left, Icon, Body, Right } from "native-base"
import { withRouter } from "react-router-native"

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

  useEffect(_ => {
    setCurrentPageName(props.location.pathname)
  }, [props.location.pathname])

  const togglePanel = _ => setShowPanel(!showPanel)

  const arrayForSure = _ => {
    if (addIconArray.filter(icon => icon === currentPageName).length > 0) {
      return <MessageActionSheet />
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
          <Button onPress={togglePanel}>
            <Icon dgreal name="menu" />
          </Button>
        </Left>
        <Body>
          <Text>{renderPageName()}</Text>
        </Body>
        <Right>
          {arrayForSure()}
        </Right>
      </Header>
      {showPanel && <SidePanel togglePanel={togglePanel} />}
    </>
  )
}

export default withRouter(pageHeader)
