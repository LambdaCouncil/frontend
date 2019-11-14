import React, { useEffect, useState } from "react";
import { Modal } from "react-native";
import { View, Button, Header, Left, Right, Icon, Body, Title, Text } from "native-base";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-native";
import firebase from '../../firebase';
import { setCurrentAssignment } from '../../actions';

const Assignment = props => {
  return (
    <View>
      <Modal>
        <Header style={{ elevation: 0 }}>
          <Left>
            <Button transparent onPress={() => props.setShowAssignmentModal(false)}>
              <Icon ddarkGreenBlue name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Assignment</Title>
          </Body>
        </Header>
        <Text>randooooooooooooooo</Text>
      </Modal>
    </View>
  );
}

export default Assignment;