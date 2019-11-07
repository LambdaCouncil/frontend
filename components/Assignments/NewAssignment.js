import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-native";
import { connect } from "react-redux";
import { Modal } from "react-native";
import {
  Content,
  View,
  Text,
  Button,
  Form,
  Item,
  Input,
  Label,
  H3,
  DatePicker
} from "native-base";
import { setCurrentAssignment } from '../../actions'
import ModalHeader from "../Modals/ModalHeader";
import CouncilNames from "../CouncilNames";

// import { setCurrentChannel } from "../../actions";
import firebase from "../../firebase";

const blankAssignment = {
  date: null,
  council: '',
  assign: '',
  descript: '',
  note: ''
}

const NewAssignment = props => {
  const [chosenDate, setChosenDate] = useState();
  const [chosenCouncil, setChosenCouncil] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [showCouncilModal, setShowCouncilModal] = useState(false);
  const [showATModal, setShowATModal] = useState(false);
  const [assignment, setAssignment] = useState(blankAssignment);
  // const [createdById, setCreatedById] = useState('');
  const [assignedToId, setAssignedToId] = useState(""); 

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
          await loadedUsers.push({...doc.data(), id: doc.id});
          setAllUsers(loadedUsers);
        })
      )
      .catch(err => console.error(err));
  }, []);

  const assignmentsRef = db.collection('assignments')

  const createAssignment = () => {
    console.log('createAssignment pressed');
    props.setShowModal(false);
    // console.log('assignment', assignment);
    // setAssignment({
    //   date: chosenDate,
    //   council: chosenCouncil,
    //   assign: assignTo,
    //   descript: description,
    //   note: notes
    // })
    if (description.length > 0 && chosenCouncil.length > 0 && assignTo.length > 0 && chosenDate != null && notes.length > 0) {
      console.log('hurray')
      // const newAssignment =
      assignmentsRef.add({
        timestamp: Date.now(),
        createdBy: props.currentUser.uid,
        assignedTo: assignedToId,
        content: {
          date: chosenDate,
          council: chosenCouncil,
          assign: assignTo,
          descript: description,
          note: notes
        },
        completed: false
      })


    } else {
      console.log('boooooo')
    }
  };

  // useEffect(_ => {
  //   assignmentsRef.doc.
  // })

  // console.log('assignment obj outside', assignment);

  const handleDescription = text => {
    setDescription(text);
  }

  const handleCouncil = name => {
    console.log(name + ' was pressed');
    setChosenCouncil(name);
  }

  const handleAssignTo = (name, id) => {
    console.log(name + " was pressed");
    setAssignTo(name);
    setAssignedToId(id);
  };

  const handleDate = value => {
    setChosenDate(value);
  }

  const handleNotes = text => {
    setNotes(text);
  };

  // console.log("description: ", description);
  // console.log("council: ", chosenCouncil);
  // console.log("assignTo: ", assignTo);
  console.log("date: ", chosenDate);
  // console.log("notes", notes);
  console.log('assignedTo id', assignedToId);
  console.log('createdBy id', props.currentUser.uid)

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
            <View>
              <Text>Council</Text>
              {chosenCouncil.length > 0 ? <Text>{chosenCouncil}</Text> : null}
            </View>
          </Button>

          {showCouncilModal && (
            <CouncilNames
              options={councilNames}
              setShowModal={setShowCouncilModal}
              council={chosenCouncil}
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
              users={true}
              options={allUsers}
              setShowModal={setShowATModal}
              council={assignTo}
              handleCouncil={handleAssignTo}
              setAssignedToId={setAssignedToId}
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
          <Item floatingLabel>
            <Label>Notes</Label>
            <Input
              name="notes"
              onChangeText={text => handleNotes(text)}
              value={notes}
            />
          </Item>

          <H3 onPress={createAssignment} submit>
            Create
          </H3>
        </Form>
      </Content>
    </Modal>
  );
};

export default connect(state => ({ ...state }), { setCurrentAssignment })(withRouter(NewAssignment));