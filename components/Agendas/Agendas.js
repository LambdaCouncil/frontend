import React, { createRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Drawer, Left, Icon, Body } from "native-base";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-native";
import Header from "../Header/Header";


const Agendas = props => {
  return (
    <View>
      <Header />
      <Text>
        Agendas go here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  }
});

export default withRouter(Agendas);