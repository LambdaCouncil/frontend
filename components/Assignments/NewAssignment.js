import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-native";
import { Modal } from "react-native";
// import { connect } from "react-redux";
import { Content, View, Text, List, ListItem, Button, Form, Item, Input, Label, TextInput, Picker, Footer, H3, DatePicker, Icon, Left, Right } from "native-base";
import ModalHeader from "../Modals/ModalHeader";
import CouncilNames from "../CouncilNames";

// import { setCurrentChannel } from "../../actions";
// import ModalHeader from "../Modals/ModalHeader";
import firebase from "../../firebase";

const NewAssignment = props => {
  const [chosenDate, setChosenDate] = useState();
  const [council, setCouncil] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [councilNameScreen, setCouncilNameScreen] = useState(false);
  const [showCouncilModal, setShowCouncilModal] = useState(false);
  const [showATModal, setShowATModal] = useState(false);

  const councilNames = [
    "bishopric",
    "ward-council",
    "elders",
    "relief-society",
    "young-men",
    "young-women",
    "sunday-school",
    "primary",
    "ward-missionary"
  ];

  const db = firebase.firestore();
  const Users = db.collection("users");

  const [allUsers, setAllUsers] = useState([]);

  useEffect(_ => {
    let loadedUsers = [];
    Users.get()
      .then(docs =>
        docs.forEach(async doc => {
          await loadedUsers.push(doc.data());
          setAllUsers(loadedUsers);
        })
      )
      .catch(err => console.error(err));
  }, []);


  console.log(councilNameScreen);

  const handleSubmit = () => {
    console.log('handleSubmit for assignments pressed');
    props.setShowModal(false);
  };

  const handleDescription = text => {
    setDescription(text);
  }

  const handleCouncil = name => {
    console.log(name + ' was pressed');
    setCouncil(name);
  }

  const handleAssignTo = name => {
    console.log(name + " was pressed");
    setAssignTo(name);
  };

  const handleDate = value => {
    setChosenDate(value);
  }

  const handleNotes = text => {
    setNotes(text);
  };

  console.log("description: ", description);
  console.log("council: ", council);
  console.log("assignTo: ", assignTo);
  console.log("date: ", chosenDate);
  console.log("notes", notes);





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
              onChangeText={text => handleDescription(text)}
              value={description}
            />
          </Item>

          <Button
            title="Council"
            onPress={() => setShowCouncilModal(true)}
            transparent
          >
            {/* {council.length > 0 ? (
              <View>
                <Text>Council</Text>
                <Text>{council}</Text>
              </View>
            ) : (
              <View>
                <Text>Council</Text>
              </View>
            )} */}

            <View>
              <Text>Council</Text>
              {council.length > 0 ? <Text>{council}</Text> : null}
            </View>
          </Button>

          {showCouncilModal && (
            <CouncilNames
              options={councilNames}
              setShowModal={setShowCouncilModal}
              council={council}
              handleCouncil={handleCouncil}
            />
          )}

          <Button
            title="AssignTo"
            onPress={() => setShowATModal(true)}
            transparent
          >
            <View>
              <Text>Assign To</Text>
              {assignTo.length > 0 ? <Text>{assignTo}</Text> : null}
            </View>
          </Button>

          {showATModal && (
            <CouncilNames
              options={allUsers.map(user => user.name)}
              setShowModal={setShowATModal}
              council={assignTo}
              handleCouncil={handleAssignTo}
            />
          )}

          <Label>Date &amp; Time</Label>
          <DatePicker
            // defaultDate={new Date(Date.now())}
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
            onDateChange={value => handleDate(value)}
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