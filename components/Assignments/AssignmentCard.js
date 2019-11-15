import React, { useState } from 'react';
import {ListItem, Icon, Body, Text, View,  Right } from 'native-base';
import moment from "moment";
import { Link, withRouter } from "react-router-native";


const AssignmentCard = props => {
  const {assignment, toggleComplete} = props;

  const handleClick = () => {
    props.setCurrentAssignment(assignment);
    props.history.push('/assignment');
  }
  
  return (
    <ListItem>
      {assignment.completed ? (
        <Icon
          onPress={() => toggleComplete(assignment.id, assignment.completed)}
          name="radio-button-on"
          style={{ paddingRight: 10 }}
        />
      ) : (
        <Icon
          onPress={() => toggleComplete(assignment.id, assignment.completed)}
          name="radio-button-off"
          style={{ paddingRight: 10 }}
        />
      )}

      <Body>
        <View>
          <Text>{assignment.content.descript}</Text>
        </View>
        <View>
          <Text>{assignment.content.council}</Text>
          <Text>
            {moment(assignment.content.date.seconds * 1000).format("lll")}
          </Text>
        </View>
      </Body>

      <Right>
        <Icon
          // onPress={() => props.setShowAssignmentModal(true)}
          onPress={() => handleClick()}
          name='arrow-forward'
        />
      </Right>
    </ListItem>
  );
};

export default withRouter(AssignmentCard);