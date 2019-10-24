import React, { useState } from 'react'
import { ActionSheet, Icon  } from 'native-base'

const MessageActionSheet = props => {
    const [buttonPressed, setButtonPressed] = useState(0)
    
    const BUTTONS = ['Council', 'Private', 'Cancel']
    const CANCEL_INDEX = 2
    
    return (
      <Icon name='wine'
        onPress={() => {
          ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              title: "New Discussion"
              // tintColor: 'red'
            },
            buttonIndex => {
              setButtonPressed({ clicked: BUTTONS[buttonIndex] });
            }
          );
        }}
      />
    );
}

export default MessageActionSheet