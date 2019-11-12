import React, { useState, useEffect } from "react"
import { StyleSheet } from 'react-native'
import { withRouter } from "react-router-native"
import { connect } from "react-redux"
import { Modal } from "react-native"
import {
  Container,
  Content,
  View,
  Text,
  Button,
  Footer,
  Form,
  Item,
  Input,
  Label,
  H3,
  DatePicker
} from "native-base"

import { setCurrentAssignment } from '../../actions'
import ModalHeader from "../Modals/ModalHeader"
import CouncilNames from "../CouncilNames"

import firebase from "../../firebase"

const NewAssignment = props => {
  const [chosenDate, setChosenDate] = useState();
  const [chosenCouncil, setChosenCouncil] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [showCouncilModal, setShowCouncilModal] = useState(false);
  const [showATModal, setShowATModal] = useState(false);
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
    props.setShowModal(false);

    if (description.length > 0 && chosenCouncil.length > 0 && assignTo.length > 0 && chosenDate != null && notes.length > 0) {
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

  return (
    <Modal animationType="slide" transparent={false} visible={true}>
      <ModalHeader name="New Assignment" setShowModal={props.setShowModal} />
      <Container style={styles.container}>
        <Content>
          
          <Form>            
            <Item floatingLabel>
              <Label style={styles.text}>Description</Label>
              <Input
                name="description"
                onChangeText={text => handleDescription(text)}
                value={description}
              />
            </Item>

            <Button transparent style={styles.button} title="Council" onPress={() => setShowCouncilModal(true)}>
              <View>
                <Text style={styles.text}>Council</Text>
                {chosenCouncil.length > 0 ? <Text>{chosenCouncil}</Text> : null}
              </View>
            </Button>

            {showCouncilModal && (
              <CouncilNames
                options={councilNames}
                setShowModal={setShowCouncilModal}
                council={chosenCouncil}
                handleCouncil={handleCouncil}
              />)
            }

            <Button transparent style={styles.button} title="AssignTo" onPress={() => setShowATModal(true)}>
              <View>
                <Text style={styles.text}>Assign To</Text>
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
              />)
            }
            
            <Item picker>  
              <DatePicker
                placeHolderText='Date & Time'
                minimumDate={new Date(2018, 0, 1)}
                maximumDate={new Date(3019, 11, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                textStyle={{ color: "green" }}
                placeHolderTextStyle={styles.text}
                onDateChange={value => handleDate(value)}
                disabled={false}
                />
            </Item>
         

            <Item floatingLabel>
              <Label style={styles.text}>Notes</Label>
              <Input
                name="notes"
                onChangeText={text => handleNotes(text)}
                value={notes}
              />
            </Item>
          </Form>

          <Footer style={styles.footer}>
              <H3 onPress={createAssignment} submit>
                Create
              </H3>
          </Footer>

        </Content>
      </Container>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
  button: {
    borderBottomWidth: 1,
    borderBottomColor: '#dbdcdf',
    marginVertical: 10,
    marginHorizontal: 20
  },
  text: {
    color: '#6f777e',
    fontFamily: 'bern-r',
    fontSize: 17,
  },
  footer: {
    flex: 3,
    alignItems: 'flex-end'
  }
})

export default connect(state => ({ ...state }), { setCurrentAssignment })(withRouter(NewAssignment));