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
            if (buttonIndex === 0) {
              props.setShowModal(true)
              props.setShowCouncils(true)
            }
            else if (buttonIndex === 1) props.setShowModal(true)
          }
        )
      }
    >
      <Icon headerIcon
        name={props.asInfo.iconName}
        style={(Platform.OS === 'android') ?
          styles.androidIcon : styles.Icon}
      />
    </Button>
  )
}

const styles = StyleSheet.create({
  androidIcon: { transform: [{ rotate: '90deg' }] }
})

export default ActionSheets
