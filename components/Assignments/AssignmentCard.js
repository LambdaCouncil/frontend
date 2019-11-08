import React, { useState } from 'react';
import {ListItem, Icon, Body, Text, View,  Right } from 'native-base';
import moment from "moment";


const AssignmentCard = props => {
  const {assignment, toggleComplete} = props;

  console.log('assignment in assignment card ****', assignment)
  // console.log('assignment completed', assignment.completed);
  
  
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
          onPress={() => console.log("modal for assignment should open up")}
          name='arrow-forward'
        />
      </Right>
    </ListItem>
  );
};



export default AssignmentCard;