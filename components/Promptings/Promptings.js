import React from "react";
import { StyleSheet } from 'react-native'
import { View, Text } from "native-base";
import { connect } from "react-redux";
import { withRouter } from "react-router-native";


const Promptings = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        You have no promptings.
      </Text>
      <Text style={styles.text}>
        Click + to create a new promptings.
      </Text>
      <Text style={styles.sud}>
          (section under development)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#202224',
    fontFamily: 'bern-r',
    fontSize: 17
  },
  sud: {
    color: 'red',
    fontFamily: 'bern-b',
    fontSize: 15,
    marginTop: 15
  }
})

export default withRouter(Promptings);