import React from "react";
import { ActionSheet, Icon, Button, Text } from "native-base";

const AgendaActionSheet = props => {
  const BUTTONS = ["Extended", "Light", "Cancel"];
  const CANCEL_INDEX = 2;

  return (
    <Button
      transparent
      onPress={() =>
        ActionSheet.show(
          {
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            title: "New Agenda"
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
