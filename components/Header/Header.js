import React, { useState } from "react"
import { Button, Text, Header, Left, Icon, Body, Right } from "native-base"
import { withRouter } from "react-router-native"

import SidePanel from "../SidePanel/SidePanel"
import ActionSheets from "../ActionSheets"
import AgendaActionSheet from '../Agendas/AgendaActionSheet'
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

  // title and button text for dynamic actionsheet component
  const buttonsObj = {
    agendas: {
      primary: {
        title: 'New Agenda',
        buttons: ['Extended', 'Light', 'Cancel']
      },
      secondary: {
        title: 'Agenda',
        buttons: ['Start Discussion', 'Make Assignmet', 'Cancel']
      },
      tertiary: {
        title: 'Agenda',
        buttons: ['Edit', 'Delete', 'Cancel']
      },
    discussions: {
      default: {
        title: 'New Discussion',
        buttons: ['Council', 'Private', 'Cancel'],
        iconName: 'wine'
      },
      public: {
        title: 'Discussion',
        buttons: ['Leave', 'Delete', 'Cancel'],
        iconName: 'more'
      },
      private: {
        title: 'Discussion',
        buttons: ['Delete', 'Cancel'],
        iconName: 'more'
      }
    }
   }
  };

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
      console.log('pathname in Header arrayForSure', props.location.pathname)
      switch(props.location.pathname) {
        case '/agendas':
          return <ActionSheets setShowModal={setShowModal} asInfo={buttonsObj.agendas.primary} />
          break;
        case '/discussions':
          return <ActionSheets setShowModal={setShowModal} asInfo={buttonsObj.discussions.default} />
          break;
        case '/messages':
          return <ActionSheets setShowModal={setShowModal} asInfo={buttonsObj.discussions.public} />
          break;
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
