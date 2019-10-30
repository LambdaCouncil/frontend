import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-native";
import { Modal } from "react-native";
// import { connect } from "react-redux";
import { Content, View, Text, List, ListItem, Button, Form, Item, Label, TextInput, Footer, H3 } from "native-base";
import ModalHeader from "../Modals/ModalHeader";

// import { setCurrentChannel } from "../../actions";
// import ModalHeader from "../Modals/ModalHeader";
// import firebase from "../../firebase";

const NewAssignment = props => {
  const [assignmentDescription, setAssignmentDescription] = useState('');

  const handleSubmit = () => {
    console.log('handleSubmit for assignments pressed');
  };

  const handleAssignmentDescription = text => {
    setAssignmentDescription(text);
    console.log(assignmentDescription);
  }

  return (
    <Modal animationType="slide" transparent={false} visible={true}>
      <ModalHeader name="New Assignment" setShowModal={props.setShowModal} />
      <Form>
        <Item floatingLabel>
          <Label>Description</Label>
          {/* <TextInput name='description' onChangeText={text => handleAssignmentDescription(text)} value={assignmentDescription}  /> */}
        </Item>
        <Item floatingLabel>
          <Label>Council</Label>
        </Item>
        <Item floatingLabel>
          <Label>Assign To</Label>
        </Item>
        <Item floatingLabel>
          <Label>Date &amp; Time</Label>
        </Item>
        <Item floatingLabel>
          <Label>Notes</Label>
        </Item>

        <H3 onPress={handleSubmit} submit>Create</H3>
      </Form>
    </Modal>
  );
};

export default withRouter(NewAssignment);