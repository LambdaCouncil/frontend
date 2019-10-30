import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-native";
import { Modal } from "react-native";
// import { connect } from "react-redux";
import { Content, View, Text, List, ListItem, Button, Form, Item, Label, TextInput, Picker, Footer, H3, DatePicker, Icon } from "native-base";
import ModalHeader from "../Modals/ModalHeader";
import CouncilNames from "../CouncilNames";

// import { setCurrentChannel } from "../../actions";
// import ModalHeader from "../Modals/ModalHeader";
// import firebase from "../../firebase";

const NewAssignment = props => {
  const [chosenDate, setChosenDate] = useState();
  const [council, setCouncil] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('');

  const handleSubmit = () => {
    console.log('handleSubmit for assignments pressed');
  };

  const handleAssignmentDescription = text => {
    setAssignmentDescription(text);
    console.log(assignmentDescription);
  }

  const onValueChange = value => {
    setCouncil(value);
  }

  return (
    <Modal animationType="slide" transparent={false} visible={true}>
      <ModalHeader name="New Assignment" setShowModal={props.setShowModal} />
      <Content>
        <Item floatingLabel>
          <Label>Description</Label>
          {/* <TextInput name='description' onChangeText={text => handleAssignmentDescription(text)} value={assignmentDescription}  /> */}
        </Item>
        {council.length > 0 && <Label>Council</Label>}

        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            headerBackButtonText="Baaack!"
            selectedValue={council}
            onValueChange={value => onValueChange(value)}
          >
            {/* <CouncilNames /> */}
            <Picker.Item label='Council' value='' />
            <Picker.Item label="Bishopric" value="bishopric" />
            <Picker.Item label="Ward Council" value="wardCouncil" />
            <Picker.Item label="Elders" value="elders" />
            <Picker.Item label="Relief Society" value="reliefSociety" />
            <Picker.Item label="Young Men" value="youngMen" />
            <Picker.Item label="Young Women" value="youngWomen" />
            <Picker.Item label="Sunday School" value="sundaySchool" />
            <Picker.Item label="Primary" value="primary" />
            <Picker.Item label="Ward Missionary" value="wardMissionary" />
          </Picker>
        </Item>
        <Item floatingLabel>
          <Label>Assign To</Label>
        </Item>
        {/* <Item floatingLabel> */}
        <Label>Date &amp; Time</Label>
        <DatePicker
          // defaultDate={new Date(2019, 9, 30)}
          minimumDate={new Date(2018, 0, 1)}
          maximumDate={new Date(3019, 11, 31)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          // placeHolderText="Select date"
          textStyle={{ color: "green" }}
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          onDateChange={value => setChosenDate(value)}
          disabled={false}
        />
        {/* <Text>{chosenDate && chosenDate.toString().substr(4, 12)}</Text> */}
        {/* </Item> */}
        <Item floatingLabel>
          <Label>Notes</Label>
        </Item>

        <H3 onPress={handleSubmit} submit>
          Create
        </H3>
      </Content>
    </Modal>
  );
};

export default withRouter(NewAssignment);