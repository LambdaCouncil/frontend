import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Drawer, Left, Right, Icon, Body, Content, List, ListItem } from "native-base";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-native";
import firebase from '../../firebase';
import { setCurrentAssignment } from '../../actions';
import AssignmentCard from './AssignmentCard';

const Assignments = props => {

  const db = firebase.firestore();
  const assignmentsRef = db.collection('assignments');
  const [allAssignments, setAllAssignments] = useState([]);
  const [myAssignments, setMyAssignments] = useState([]);
  const [assignedByMeAssignments, setAssignedByMeAssignments] = useState([]);
  const [completedAssignments, setCompletedAssignments] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  // for my assignments
  useEffect(_ => {
    assignmentsRef
      .where('assignedTo', '==', props.currentUser.uid)
      .where('completed', '==', false)
      .onSnapshot(doc =>
      setMyAssignments(
        doc.docs.map(docData => ({
          ...docData.data(),
          id: docData.id
        }))
      )
    );
  }, []);

  // for assignments assigned by me
  useEffect(_ => {
    assignmentsRef
      .where("createdBy", "==", props.currentUser.uid)
      .where('completed', '==', false)
      .onSnapshot(doc => {
        setAssignedByMeAssignments(
          doc.docs.map(docData => {
            if (docData.data() && docData.data().assignedTo !== props.currentUser.uid) {
              return {
                ...docData.data(),
                id: docData.id
              }
            }
          })
        );
      });
  }, []);

  // for completed assignments
  useEffect(_ => {
    assignmentsRef
      .where("completed", "==", true)
      .onSnapshot(doc =>
        setCompletedAssignments(
          doc.docs.map(docData => ({
            ...docData.data(),
            id: docData.id
          }))
        )
      );
  }, []);

  const toggleComplete = (aid, completed) => {
    assignmentsRef.doc(aid).update({
      completed: !completed
    })
  }

  return (
    <Content padder>
      {myAssignments.length > 0 && (
        <View>
          <Text>My Assignments</Text>
          <List>
            {myAssignments.map(assignment => {
              return (
                <AssignmentCard
                  key={assignment.timestamp}
                  assignment={assignment}
                  toggleComplete={toggleComplete}
                />
              );
            })}
          </List>
        </View>
      )}
      {assignedByMeAssignments.length > 0 && (
        <View>
          <Text>Assigned By Me</Text>
          <List>
            {assignedByMeAssignments.map(assignment => {
              if (assignment != undefined)
                return (
                  <AssignmentCard
                    key={assignment.timestamp}
                    assignment={assignment}
                    toggleComplete={toggleComplete}
                  />
                );
            })}
          </List>
        </View>
      )}
      {showCompleted ? (completedAssignments.length > 0 && (
        <View>
          <View>
            <Left>
              <Text>Completed</Text>
            </Left>
            <Right>
              <Text onPress={() => setShowCompleted(false)} >Hide</Text>
            </Right>
          </View>
          <List>
            {completedAssignments.map(assignment => {
              return (
                <AssignmentCard
                  key={assignment.timestamp}
                  assignment={assignment}
                  toggleComplete={toggleComplete}
                />
              );
            })}
          </List>
        </View>
      )) : (<View><Text onPress={() => setShowCompleted(true)} >Show Completed</Text></View>)}
      {(!myAssignments.length) &&
        (!assignedByMeAssignments.length) &&
        (!completedAssignments.length) && (
          <View style={styles.view}>
            <Text style={styles.text}>You have no assignments.</Text>
            <Text style={styles.text}>Click + to create a new assignment.</Text>
          </View>
        )
      }
    </Content>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%'
  },
  text: {
    fontFamily: 'bern-r',
    fontSize: 17,
  }
})

// export default connect(state => ({ ...state }), { setCurrentAssignment })(withRouter(Assignments));

export default connect(state => ({ ...state }), {} )(withRouter(Assignments));
