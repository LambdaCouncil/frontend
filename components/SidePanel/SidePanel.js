import React, { createRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Drawer, Left, Icon, Body } from 'native-base';
import { connect } from "react-redux";

import UserPanel from './UserPanel';
import SideMenu from './SideMenu';
import Header from '../Header/Header';


const SidePanel = props => {
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => {
    setShowPanel(!showPanel);
  }

  return (
    <View>
      <UserPanel />
      <SideMenu />
    </View>
  );
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, {})(SidePanel);