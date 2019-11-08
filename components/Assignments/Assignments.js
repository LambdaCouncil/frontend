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



  // useEffect(_ => {
  //   assignmentsRef
  //     .onSnapshot(doc => setAllAssignments(doc.docs.map(docData => ({
  //         ...docData.data(), id: docData.id
  //       }))))

  // }, [])

  useEffect(_ => {
    assignmentsRef.where('assignedTo', '==', props.currentUser.uid).onSnapshot(doc =>
      setMyAssignments(
        doc.docs.map(docData => ({
          ...docData.data(),
          id: docData.id
        }))
      )
    );
  }, []);

  useEffect(_ => {
    assignmentsRef
      .where("createdBy", "==", props.currentUser.uid)
      .onSnapshot(doc => {
        setAssignedByMeAssignments(
          
          doc.docs.map(docData => {
            if (docData.data() && docData.data().assignedTo !== props.currentUser.uid) {
              return {
              // setAssignedByMeAssignments({
                ...docData.data(),
                id: docData.id}
              // })
            }
            console.log('********8inside useEffect docData.data().assignedTo:', docData.data().assignedTo)
          })
        );
          console.log('assignedByMeAssignments', assignedByMeAssignments)
      }

        
      );

  }, []);

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

  // useEffect(_ => {
  //   assignmentsRef.onSnapshot(doc =>
  //     doc.docs.map(docData =>
  //       (docData.data().assignedTo === props.currentUser.uid)
  //         ? 
  //         // console.log('docData.assignedTo', docData.data().assignedTo, ' currentUser id:', props.currentUser.uid)
  //         setAllAssignments({...docData.data(), id: docData.id})
  //         : console.log('switch to if statement to check if assigned by me')
  //     )
  //   );
  // }, []);

  // useEffect(_ => {
  //   assignmentsRef
  //     .onSnapshot(doc => setAllAssignments(doc.docs.filter(docData => docData.data().id === props.currentUser.uid)))

  // }, [])



  // console.log('props in assignments.js', props.currentUser.uid);
  // console.log("assignmentsRef from Assignments.js", assignmentsRef);
  // console.log('assignments from Assignments.js', assignments);

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
              if (assignment.completed == false)
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
              if (assignment != undefined && assignment.completed == false)
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
      {completedAssignments.length > 0 && (
        <View>
          <Text>Completed</Text>
          <List>
            {completedAssignments.map(assignment => {
              // if (assignment.completed != undefined)
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
      {/* ) : (
        <View style={styles.view}>
          <Text style={styles.text}>You have no assignments.</Text>
          <Text style={styles.text}>Click + to create a new assignment.</Text>
        </View>
      )} */}
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
