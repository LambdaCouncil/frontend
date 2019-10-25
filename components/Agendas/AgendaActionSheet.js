import React from "react";
import { ActionSheet, Icon, Button, Text } from "native-base";

const AgendaActionSheet = props => {
  const BUTTONS = [...props.asInfo.buttons];
  const CANCEL_INDEX = 2;

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
              props.setShowModal(true);
            }
          }
        )
      }
    >
      <Text>
        <Icon dgreal name="wine" />
      </Text>
    </Button>
  );
};

export default AgendaActionSheet;
