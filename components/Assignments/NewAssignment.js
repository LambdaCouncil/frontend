import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-native";
import { Modal } from "react-native";
// import { connect } from "react-redux";
import { Content, View, Text, List, ListItem, Button } from "native-base";
import ModalHeader from "../Modals/ModalHeader";

// import { setCurrentChannel } from "../../actions";
// import ModalHeader from "../Modals/ModalHeader";
// import firebase from "../../firebase";

const NewAssignment = props => {
  return (
    <Modal animationType="slide" transparent={false} visible={true}>
      <ModalHeader name="New Pri" setShowModal={props.setShowModal} />
      <View>
        <Text>New Assignment Goes here</Text>
      </View>
    </Modal>
  );
};

export default withRouter(NewAssignment);