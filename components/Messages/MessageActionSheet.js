import React from 'react'
import { ActionSheet } from 'native-base'


const MessageActionSheet = props => {

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
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
          >
            <Text>Actionsheet</Text>
          </Button>
        </Content>
      </Container>
    )
}

export default MessageActionSheet