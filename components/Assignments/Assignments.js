import React, { createRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Drawer, Left, Icon, Body } from "native-base";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-native";

const Assignments = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>You have no assignments.</Text>
      <Text style={styles.text}>Click + to create a new assignment.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%'
  },
  text: {
    fontFamily: 'bern-r',
    fontSize: 17,
  }
})

export default withRouter(Assignments);
