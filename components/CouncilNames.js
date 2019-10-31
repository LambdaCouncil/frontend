import React from 'react';
import { withRouter } from "react-router-native";
import { List, ListItem, Left, Right, Text, Icon } from 'native-base';

const CouncilNames = props => {

  const councilNames = [
    "bishopric",
    "ward-council",
    "elders",
    "relief-society",
    "young-men",
    "young-women",
    "sunday-school",
    "primary",
    "ward-missionary"
  ];

  const renderCouncilName = name => {
    return name
      .split("-")
      .map(word =>
        word
          .split("")
          .map((letter, id) => {
            if (id === 0) return letter.toUpperCase();
            else return letter.toLowerCase();
          })
          .join("")
      )
      .join(" ");
  };

  const renderCheckmark = name => {
    return props.council == name ? <Icon name="checkmark" /> : "";
  };

  return (
    <List>
      {councilNames.map((name, id) => (
        // <Button>
        <ListItem key={id} onPress={() => props.handleCouncil(name)}>
          <Left>
            <Text>{renderCouncilName(name)}</Text>
          </Left>
          <Right>
            <Text>{renderCheckmark(name)}</Text>
          </Right>
        </ListItem>
        // </Button>
      ))}
    </List>
  );
}

export default CouncilNames;