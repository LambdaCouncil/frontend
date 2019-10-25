import React, { useState } from "react"
import { Button, Text, Header, Left, Icon, Body, Right } from "native-base"
import { withRouter } from "react-router-native"

import SidePanel from "../SidePanel/SidePanel"
import MessageActionSheet from "../Messages/MessageActionSheet"
import NewPrivateMessage from '../Modals/NewPrivateMessage'

const pageHeader = props => {

  const [showPanel, setShowPanel] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const addIconArray = [
    '/discussions',
    '/agendas',
    '/assignments',
    '/files',
    '/promptings'
  ]

  const togglePanel = _ => setShowPanel(!showPanel)

  const renderPageName = _ => {
    if (props.modal) return props.name
    return props.location.pathname
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

  const arrayForSure = _ => {
    if (!props.modal && addIconArray.filter(icon => icon === props.location.pathname).length > 0) {
      return <MessageActionSheet setShowModal={setShowModal} />
    }
  }

  const whichModal = _ => {
    switch (props.location.pathname) {
      case '/discussions':
        return <NewPrivateMessage setShowModal={setShowModal} />
      default:
        return
    }
  }

  return <>
    <Header>
      <Left>
        <Button
          transparent
          onPress={togglePanel}
        >
          <Icon dgreal name="menu" />
        </Button>
      </Left>
      <Body>
        <Text>
          {renderPageName()}
        </Text>
      </Body>
      <Right>
        {arrayForSure()}
      </Right>
    </Header>
    {showPanel && <SidePanel togglePanel={togglePanel} />}
    {showModal && whichModal()}
  </>

}

export default withRouter(pageHeader)
