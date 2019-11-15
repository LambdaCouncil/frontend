import React from "react";
import { StyleSheet } from 'react-native'
import { Container, View, Text } from "native-base";
import { connect } from "react-redux";
import { withRouter } from "react-router-native";
import { useSafeArea } from 'react-native-safe-area-context'


const Files = props => {
  const safeAreaInsets = useSafeArea() 
  
  return (
    <Container style={{
      paddingTop: safeAreaInsets.top,
      paddingBottom: safeAreaInsets.bottom,
      paddingLeft: safeAreaInsets.left,
      paddingRight: safeAreaInsets.right
    }}>
      <View style={styles.view}>
        <Text style={styles.text}>
          You have no files.
        </Text>
        <Text style={styles.text}>
          Click + to create a new file.
        </Text>
        <Text style={styles.sud}>
            (section under development)
        </Text>
      </View>
    </Container>
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

export default withRouter(Files);