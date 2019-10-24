import React, {useState} from 'react'
import firebase from "../../firebase"
import {KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native'
import {Input, Text, Label, Item, H1, H3} from 'native-base'
import {Link, withRouter} from 'react-router-native'
import {connect} from 'react-redux'

import Icon from '../Icon'
import {signUpDisplayName} from '../../actions'

function SubmitFeedback(props) {

  const [feedback, setFeedback] = useState('')

  const handleSubmit = () => {
    console.log(feedback)
  }

  return (

    <KeyboardAvoidingView
      style={styles.inputContainer}
      behavior='padding'
    >

      <Link onPress={() => props.history.goBack()} style={styles.link}>
        <Icon
          name='arrow-back'
          color='green'
          style={styles.backButton}
        />
      </Link>
      <View style={styles.pageView}>
        <Text style={styles.textContent}>Submit Feedback</Text>
        <Text style={styles.textContent}>What Can We Improve?</Text>
        <View>
          <TextInput
            style={styles.textInput}
            multiline={true}
            editable
            maxLength={500}
            placeholder='Please type your feedback here...'
          />
        </View>
        <Link to='/settings'>
          <Text style={styles.submit}>Submit</Text>
        </Link>
      </View>
    </KeyboardAvoidingView>

  )
}


const styles = StyleSheet.create({
  inputContainer: {
    height: '100%',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  link: {
    position: 'absolute',
    top: 25,
    left: 5,
    width: '100%',
    height: 50
  },
  backButton: {
    fontSize: 50
  },
  inputItem: {
    marginVertical: 10
  },
  textInput: {
    fontSize: 17
  },
  pageView: {
    marginHorizontal: 20,
    marginTop: 80,
  },
  textContent: {
    fontSize: 28,
    marginBottom: 10,
    fontFamily: 'gotham',
    fontWeight: '500',
  },
  submit: {
    // marginVertical: 15,
    color: '#288365',
    textAlign: 'center',
    fontSize: 17,
    top: 169
  }
})


export default withRouter(SubmitFeedback)
