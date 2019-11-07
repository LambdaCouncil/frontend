import React, { useState } from 'react';
import {ListItem, Icon, Body, Text, View,  Right } from 'native-base';
import moment from "moment";


const AssignmentCard = props => {
  const {assignment, toggleComplete} = props;
  const [isComplete, setIsComplete] = useState(false);
  
  return (
    <ListItem >
      {/* <Left> */}
      <Icon
        onPress={() => toggleComplete()}
        name="radio-button-off"
        style={{ paddingRight: 10 }}
      />
      {/* </Left> */}
      <Body>
        <Text>{assignment.content.descript}</Text>
        <View>
          <Text>{assignment.content.council}</Text>
          <Text>{moment(assignment.content.date.seconds * 1000).format("lll")}</Text>
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