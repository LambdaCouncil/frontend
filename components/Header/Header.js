import React, { useState } from 'react'
import { Button, Text, Header, Left, Icon, Body, Right } from 'native-base'
import { withRouter } from 'react-router-native'

import SidePanel from '../SidePanel/SidePanel'
import ActionSheets from '../ActionSheets'
import NewPrivateMessage from '../Modals/NewPrivateMessage'

import { buttonsObj } from '../../objects/buttonsObj'

const pageHeader = props => {
  const [showPanel, setShowPanel] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const addIconArray = [
    '/agendas',
    '/assignments',
    '/discussions',
    '/files',
    '/promptings',
    '/messages'
  ]

  const togglePanel = _ => setShowPanel(!showPanel)

  const renderPageName = _ => {
    if (props.modal) return props.name
    return props.location.pathname
      .replace('/', '')
      .split('-')
      .map(word =>
        word
          .split('')
          .map((letter, id) => {
            if (id === 0) return letter.toUpperCase()
            else return letter.toLowerCase()
          })
          .join('')
      )
      .join(' ')
  }

  const arrayForSure = _ => {
    if (
      !props.modal &&
      addIconArray.filter(icon => icon === props.location.pathname).length > 0
    ) {
      console.log('pathname in Header arrayForSure', props.location.pathname)
      switch (props.location.pathname) {
        // primary actionsheets only as of 10/25, (need additional routes for corresponding renders)
        case '/agendas':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.agendas.primary}
            />
          )
          break

        case '/assignments':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.assignments.primary}
            />
          )
          break

        case '/discussions':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.discussions.primary}
            />
          )
          break

        case '/files':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.files.primary}
            />
          )
          break

        case '/promptings':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.promptings.primary}
            />
          )
          break

        case '/messages':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.discussions.public}
            />
          )
          break
      }
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

  return (
    <>
      <Header>
        <Left>
          <Button transparent onPress={togglePanel}>
            <Icon dgreal name='menu' /> 
          </Button>
        </Left>
        <Body>
          <Text>{renderPageName()}</Text>
        </Body>
        <Right>{arrayForSure()}</Right>
      </Header>
      {showPanel && <SidePanel togglePanel={togglePanel} />}
      {showModal && whichModal()}
    </>
  )
}

export default withRouter(pageHeader)
