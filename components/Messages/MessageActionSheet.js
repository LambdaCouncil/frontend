import React, { useState } from 'react'
import { ActionSheet, Icon, Button, Text } from 'native-base'
import { connect } from 'react-redux'

import { setCurrentChannel } from '../../actions'

const MessageActionSheet = props => {
  const [buttonPressed, setButtonPressed] = useState(0)

  const BUTTONS = ['Council', 'Private', 'Cancel']
  const CANCEL_INDEX = 2

  console.log(props.currentChannel)

  return (
    <Button onPress={() => ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: "New Discussion"
      },
      buttonIndex => {
        setButtonPressed({ clicked: BUTTONS[buttonIndex] });
        if (buttonIndex === 1) {
          props.setCurrentChannel(`${props.currentUser.uid}`)
        }
      }
    )}>
      <Text>
        <Icon dgreal name='wine' />
      </Text>
    </Button>
  );
}

export default connect(state => ({ ...state }), { setCurrentChannel })(MessageActionSheet)