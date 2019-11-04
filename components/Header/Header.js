import React, {useState} from 'react'
import {Button, Text, Header, Left, Icon, Body, Right} from 'native-base'
import {withRouter} from 'react-router-native'

import SidePanel from '../SidePanel/SidePanel'
import ActionSheets from '../ActionSheets'
import NewPrivateMessage from '../Modals/NewPrivateMessage'

<<<<<<< HEAD
import {buttonsObj} from '../../objects/buttonsObj'
=======
import { buttonsObj } from '../../objects/buttonsObj'
import NewAssignment from '../Assignments/NewAssignment'
>>>>>>> 25ed8f7e4cc649f731c10d7a6379b066ffc9eaa7

const pageHeader = props => {
  const [showPanel, setShowPanel] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const addIconArray = [
    '/agendas',
    '/assignment',
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
      console.log('(Header.js) pathname: ', props.location.pathname)
      switch (props.location.pathname) {
        // primary actionsheets only as of 10/25, (need additional routes for corresponding renders)
        case '/agendas':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.agendas.primary}
            />
          )

        case '/assignments':
          return (
            <Button onPress={() => setShowModal(true)}>
              <Text>
                <Icon name='add' />
              </Text>
            </Button>
          )

        case '/assignment':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.assignment.primary}
            />
          )

        case '/discussions':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.discussions.primary}
            />
          )

        case '/files':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.files.primary}
            />
          )

        case '/promptings':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.promptings.primary}
            />
          )

        case '/messages':
          return (
            <ActionSheets
              setShowModal={setShowModal}
              asInfo={buttonsObj.discussions.public}
            />
          )
      }
    }
  }

  const whichModal = _ => {
    switch (props.location.pathname) {
      case '/discussions':
<<<<<<< HEAD
        return <NewPrivateMessage setShowModal={setShowModal}/>
=======
        return <NewPrivateMessage setShowModal={setShowModal} />
      case '/assignments':
        return <NewAssignment setShowModal={setShowModal} />
>>>>>>> 25ed8f7e4cc649f731c10d7a6379b066ffc9eaa7
      default:
        return
    }
  }

  return (
    <>
      <Header>
        <Left>
          <Button transparent onPress={togglePanel}>
<<<<<<< HEAD
            <Icon dgreal name='menu'/>
=======
            <Icon dgreal name='menu' />
>>>>>>> 25ed8f7e4cc649f731c10d7a6379b066ffc9eaa7
          </Button>
        </Left>
        <Body>
          <Text>{renderPageName()}</Text>
        </Body>
        <Right>{arrayForSure()}</Right>
      </Header>
      {showPanel && <SidePanel togglePanel={togglePanel}/>}
      {showModal && whichModal()}
    </>
  )
}

export default withRouter(pageHeader)
