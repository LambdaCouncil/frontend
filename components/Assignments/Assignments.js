import React, { createRef, useState } from "react";
import { View, Text } from "react-native";
import { Button, Drawer, Left, Icon, Body } from "native-base";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-native";

const Assignments = props => {
  return (
    <View>
      <Text>Temp Text. You have no assignments.</Text>
      <Text>Click + to create a new assignment.</Text>
    </View>
  );
};

export default withRouter(Assignments);
