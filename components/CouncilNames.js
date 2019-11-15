import React, { useState } from 'react';
import { withRouter } from "react-router-native";
import { Modal } from "react-native";
import { Content, Header, Body, View, List, ListItem, Left, Right, Text, Icon, Button, Title } from 'native-base';

import ModalHeader from './Modals/ModalHeader.js'

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
    
      <Modal
        isVisible={isVisible}
        animationIn={"slideInLeft"}
        animationOut={"slideOutLeft"}
        style={{ flex: 1, margin: 0 }}
      >
        <Content padder
          style={{
            height: "100%",
            width: "100%",
            paddingTop: "15%",
            backgroundColor: "white",
            borderColor: "white"
          }}
        >
            <ModalHeader
              style={{elevation: 0}
              name='Council'
              setShowModal={props.setShowModal}
            />
            {/* <Left>
              <Button transparent onPress={() => props.setShowModal(false)}>
                <Icon ddarkGreenBlue name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Council</Title>
            </Body> */}
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
        </Content>
      </Modal>
    
  );
}

export default CouncilNames;