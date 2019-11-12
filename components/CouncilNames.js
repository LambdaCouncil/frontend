import React, { useState } from 'react';
import { withRouter } from "react-router-native";
import { Modal } from "react-native";
import { Header, Body, View, List, ListItem, Left, Right, Text, Icon, Button, Title } from 'native-base';

const CouncilNames = props => {
  const {options} = props;
  const [isVisible, setIsVisible] = useState(true);


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

  const renderCheckmark = (name) => {
    return props.council === name ? <Icon name="checkmark" /> : "";
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={isVisible}
        animationIn={"slideInLeft"}
        animationOut={"slideOutLeft"}
        // backdropColor={"#202224"}
        // backdropOpacity={0.5}
        // onBackdropPress={() => setIsVisible(false)}
        style={{ flex: 1, margin: 0 }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            paddingTop: "15%",
            backgroundColor: "white",
            borderColor: "white"
          }}
        >
          <Header style={{ elevation: 0 }}>
            <Left>
              <Button transparent onPress={() => props.setShowModal(false)}>
                <Icon ddarkGreenBlue name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Council</Title>
            </Body>
          </Header>
          <List>
            {props.users
              ? options.map((obj, id) => (
                  <ListItem
                    key={id}
                    onPress={() =>
                      props.handleCouncil(
                        `${obj.name}`,
                        obj.id
                      )
                    }
                  >
                    <Left>
                      <Text>
                        {(`${obj.name}`)}
                      </Text>
                    </Left>
                    <Right>
                      <Text>
                        {renderCheckmark(`${obj.name}`)}
                      </Text>
                    </Right>
                  </ListItem>
                ))
              : options.map((name, id) => (
                  <ListItem key={id} onPress={() => props.handleCouncil(name)}>
                    <Left>
                      <Text>{renderCouncilName(name)}</Text>
                    </Left>
                    <Right>
                      <Text>{renderCheckmark(name)}</Text>
                    </Right>
                  </ListItem>
                ))}
          </List>
        </View>
      </Modal>
    </View>
  );
}

export default CouncilNames;