import React from "react";
import { View, Text } from "native-base";
import { connect } from "react-redux";
import { withRouter } from "react-router-native";


const Agendas = props => {
  return (
    <View>
      <Text>
        Agendas go here
      </Text>
    </View>
  );
};

export default withRouter(Agendas);
