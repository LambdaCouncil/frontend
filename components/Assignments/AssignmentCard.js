import React, { useState } from 'react';
import {ListItem, Icon, Body, Text, View,  Right } from 'native-base';
import moment from "moment";


const AssignmentCard = props => {
  const {assignment, toggleComplete} = props;

  // console.log('assignment id', assignment.id)
  // console.log('assignment completed', assignment.completed);
  
  return (
    <ListItem>
      {/* <Left> */}
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

      {/* </Left> */}
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

      {/* <Text>{moment(assignment.timestamp).format('lll')}</Text> */}
      <Right>
        <Text>{" >"}</Text>
      </Right>
    </ListItem>
  );
};

export default AssignmentCard;