import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { ActionSheet, Icon, Button, Text } from 'native-base'

const ActionSheets = props => {
  const BUTTONS = [...props.asInfo.buttons]
  const CANCEL_INDEX = props.asInfo.cancelIndex

  return (
    <Button
      transparent
      onPress={() =>
        ActionSheet.show(
          {
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            title: props.asInfo.title
          },
          buttonIndex => {
            if (buttonIndex === 1) {
              props.setShowModal(true)
            }
          }
        )
      }>
      {Platform.OS === 'android' ?
        <Text style={{ transform: [{ rotate: '90deg' }] }}>
          <Icon dgreal name={props.asInfo.iconName} />
        </Text> :
        <Text>
          <Icon dgreal name={props.asInfo.iconName} />
        </Text>}
    </Button>
  )
}

export default ActionSheets
