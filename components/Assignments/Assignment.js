import React, { useEffect, useState } from "react";
import { Modal } from "react-native";
import { View, Button, Header, Left, Right, Icon, Body, Title, Text, H3 } from "native-base";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-native";
import moment from 'moment';

const Assignment = props => {
  const {currentAssignment} = props;

  console.log('props.currentAssignment in Assignment.js',currentAssignment )
  return (
    <View>
      {/* <Modal> */}
      <Header style={{ elevation: 0 }}>
        <Left>
          {/* <Button transparent onPress={() => props.setShowAssignmentModal(false)}> */}
          <Button transparent onPress={() => props.history.goBack()}>
            <Icon ddarkGreenBlue name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Text>Assignment</Text>
        </Body>
      </Header>
      <View>
        <Text>Description</Text>
        <Text>{currentAssignment.content.descript}</Text>
      </View>
      <View>
        <Text>Council</Text>
        <Text>{currentAssignment.content.council}</Text>
      </View>
      <View>
        <Text>Assign To</Text>
        <Text>{currentAssignment.content.assign}</Text>
      </View>
      <View>
        <Text>{`Date & Time`}</Text>
        <Text>
          {moment(currentAssignment.content.date.seconds * 1000).format("lll")}
        </Text>
      </View>
      <View>
        <Text>Notes</Text>
        <Text>{currentAssignment.content.note}</Text>
      </View>
      {/* </Modal> */}
    </View>
  );
}

export default connect(state => ({ ...state }), {})(withRouter(Assignment));