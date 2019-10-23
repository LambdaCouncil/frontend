import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, withRouter, Route, Redirect } from "react-router-native";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { Button, Drawer, Header, Left, Icon, Body } from "native-base";
import SidePanel from "../SidePanel/SidePanel";

const pageHeader = props => {
  const [showPanel, setShowPanel] = useState(false);
  const [currentPageName, setCurrentPageName] = useState('');

  useEffect(() => {
    setCurrentPageName(props.location.pathname);
  }, [props.location.pathname]);

  // console.log(props)

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  const renderPageName = () => {
    switch (currentPageName) {
      case "/completeprofile":
        return <Text>Complete Profile</Text>;
      case "/editprofile":
        return <Text>Edit Profile</Text>;
      case "/changepassword":
        return <Text>Change Password</Text>;
      case "/settings":
        return <Text>Settings</Text>;
      case "/notifications":
        return <Text>Push Notifications</Text>;
      case "/feedback":
        return <Text>Submit Feedback</Text>;
      case "/about":
        return <Text>About</Text>;
      case "/messages":
        return <Text>Messages</Text>;
      case "/rate":
        return <Text>Rate Councils</Text>;
      case "/discussions":
        return <Text>Discussions</Text>;
      case "/home":
        return <Text>Home</Text>;
      case "/agendas":
        return <Text>Agendas</Text>;
      case "/assignments":
        return <Text>Assignments</Text>;
      case "/files":
        return <Text>Files</Text>;
      case "/promptings":
        return <Text>Promptings</Text>;
      case "/adminnotifications":
        return <Text>Notifications</Text>;
      case "/closeassignments":
        return <Text>Close Assignments</Text>;
      case "/donations":
        return <Text>Donations</Text>;
      default:
        return null;
    }
  }

  return (
    <Fragment>
      <Header>
        <Left>
          <Button onPress={() => togglePanel()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Text>{renderPageName()}</Text>
        </Body>
      </Header>
      {showPanel ? (
        <SidePanel />
      ) : (
        <Text>When panel is closed, display current page</Text>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {

  }
})

export default withRouter(pageHeader);