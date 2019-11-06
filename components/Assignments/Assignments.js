import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Drawer, Left, Right, Icon, Body, Content, List, ListItem } from "native-base";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-native";
import firebase from '../../firebase';
import { setCurrentAssignment } from '../../actions';
import moment from "moment";

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

  const toggleComplete = _ => {
    console.log('toggle complete')
  }

  return (
    <Content padder>
      {assignments.length > 0 ? (
        <List>

          {assignments.map(assignment => {
            return (
              <ListItem key={assignment.timestamp}>
                {/* <Left> */}
                  <Icon onPress={() => toggleComplete()} name="radio-button-off" style={{ paddingRight: 10}}/>
                {/* </Left> */}
                <Body>
                  <Text>{assignment.content.descript}</Text>
                  <View>
                    <Text>{assignment.content.council}</Text>
                    <Text>
                      {moment(assignment.content.date.seconds).format("lll")}
                    </Text>
                  </View>
                </Body>

                {/* <Text>{moment(assignment.timestamp).format('lll')}</Text> */}
                <Right>
                  <Text>
                    {" >"}
                  </Text>
                </Right>
              </ListItem>
            );


          })}
        </List>

      ) : (
        <View style={styles.view}>
          <Text style={styles.text}>You have no assignments.</Text>
          <Text style={styles.text}>Click + to create a new assignment.</Text>
        </View>
      )}
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
