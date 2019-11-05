import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Drawer, Left, Icon, Body } from "native-base";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-native";
import firebase from '../../firebase';
import { setCurrentAssignment } from '../../actions';

const Assignments = props => {

  const db = firebase.firestore();
  const assignmentsRef = db.collection('assignments');
  const [assignments, setAssignments] = useState([]);

  useEffect(_ => {
    assignmentsRef
      .get()
        .then(doc => setAssignments(doc.docs.map(docData => ({
          ...docData.data()
        }))))

  }, [])

  // console.log('props in assignments.js', props.currentUser.uid);
  // console.log("assignmentsRef from Assignments.js", assignmentsRef);
  console.log('assignments from Assignments.js', assignments);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>You have no assignments.</Text>
      <Text style={styles.text}>Click + to create a new assignment.</Text>
    </View>
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
