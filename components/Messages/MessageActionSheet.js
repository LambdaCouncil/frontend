import React from 'react'
import { ActionSheet, Icon, Button, Text } from 'native-base'

const MessageActionSheet = props => {

  const BUTTONS = ['Council', 'Private', 'Cancel']
  const CANCEL_INDEX = 2

  return (
    <Button
      transparent
      onPress={() => ActionSheet.show(
        {
          options: BUTTONS,
          cancelButtonIndex: CANCEL_INDEX,
          title: "New Discussion"
        },
        buttonIndex => {
          if (buttonIndex === 1) {
            props.setShowModal(true)
          }
        }
      )}>
      <Text>
        <Icon dgreal name='wine' />
      </Text>
    </Button>
  );
}

export default MessageActionSheet