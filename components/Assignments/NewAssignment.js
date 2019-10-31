import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-native";
import { Modal } from "react-native";
// import { connect } from "react-redux";
import { Content, View, Text, List, ListItem, Button, Form, Item, Input, Label, TextInput, Picker, Footer, H3, DatePicker, Icon, Left, Right } from "native-base";
import ModalHeader from "../Modals/ModalHeader";
import CouncilNames from "../CouncilNames";

// import { setCurrentChannel } from "../../actions";
// import ModalHeader from "../Modals/ModalHeader";
// import firebase from "../../firebase";

const NewAssignment = props => {
  const [chosenDate, setChosenDate] = useState();
  const [council, setCouncil] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [councilNameScreen, setCouncilNameScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  console.log(councilNameScreen);

  const handleSubmit = () => {
    console.log('handleSubmit for assignments pressed');
  };

  const handleAssignmentDescription = text => {
    setAssignmentDescription(text);
    console.log(assignmentDescription);
  }

  const handleCouncil = name => {
    console.log(name + ' was pressed')
    setCouncil(name);
  }

  const handleNotes = text => {
    setNotes(text);
    console.log(notes);
  };

  const openCouncilModal = _ => {
    console.log('modal for council selection should open')
  }

  const changeScreen = text => {
    console.log('changeScreen pressed')
    if (text === 'council') {
      setCouncilNameScreen(true)
      console.log(councilNameScreen);
    }
  }

  return (
    <Modal animationType="slide" transparent={false} visible={true}>
      <ModalHeader name="New Assignment" setShowModal={props.setShowModal} />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Description</Label>
            <Input
              name="description"
              onChangeText={text => handleAssignmentDescription(text)}
              value={assignmentDescription}
            />
          </Item>

          {council.length > 0 ? (
            <View>
              <Label>Council</Label>
              <Text>{council}</Text>
            </View>
          ) : (
            <Button
              title="Council"
              onPress={() => setShowModal(true)}
              transparent
            >
              <Text>Council</Text>
            </Button>
          )}

          {showModal && (
            <CouncilNames
              setShowModal={setShowModal}
              council={council}
              handleCouncil={handleCouncil}
            />
          )}

          {/* 
          <List>
            {councilNames.map((name, id) => (
              // <Button>
              <ListItem key={id} onPress={() => handleCouncil(name)}>
                <Left>
                  <Text>{renderCouncilName(name)}</Text>
                </Left>
                <Right>
                  <Text>{renderCheckmark(name)}</Text>
                </Right>
              </ListItem>
              // </Button>
            ))}
          </List> */}

          {/* <Item floatingLabel >
            <Label>Council</Label>
            <View onPress={openCouncilModal}><Text>Council</Text></View>
            <Modal visible={true}>
              <ModalHeader name='Council' />
            </Modal>

           
          </Item> */}
          <Item floatingLabel>
            <Label>Assign To</Label>
          </Item>

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
            <Input
              name="notes"
              onChangeText={text => handleNotes(text)}
              value={notes}
            />
          </Item>

          <H3 onPress={handleSubmit} submit>
            Create
          </H3>
        </Form>
      </Content>
    </Modal>
  );
};

export default withRouter(NewAssignment);