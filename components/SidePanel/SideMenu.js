import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { Link, withRouter } from 'react-router-native';

const SideMenu = props => {
  // console.log('props in SideMenu', props);
  return (
    <View sytle={styles.sideMenu}>
      <Button light>
        <Link to="/agendas">
          <Text>Agendas</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/discussions">
          <Text>Discussions</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/assignments">
          <Text>Assignments</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/files">
          <Text>Files</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/promptings">
          <Text>Promptings</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/pushnotifications">
          <Text>Notifications</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/settings">
          <Text>Settings</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/admin">
          <Text>Admin</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/donations">
          <Text>Donations</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/login">
          <Text>Log Out</Text>
        </Link>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  sideMenu: {
    marginTop: 100,
    paddingVertical: 100,
    borderWidth: 2,
    borderColor: 'red'
  }
})

export default withRouter(SideMenu);