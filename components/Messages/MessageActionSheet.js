import React, { useState } from 'react'
import { ActionSheet, Button, Container, Content, Header, Text  } from 'native-base'


const MessageActionSheet = props => {
    const [buttonPressed, setButtonPressed] = useState(0)
    
    const BUTTONS = ['Council', 'Private', 'Cancel']
    const CANCEL_INDEX = 2
    
    return (
        <Container>
        <Header />
        <Content padder>
          <Button
            onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                title: "New Discussion"
              },
              buttonIndex => {
                setButtonPressed({ clicked: BUTTONS[buttonIndex] });
              }
            )}
          >
            <Text>Plus Button</Text>
          </Button>
        </Content>
      </Container>
    )
}

export default MessageActionSheet