import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Text, View, Icon, Content } from 'native-base'
import { Link, withRouter } from 'react-router-native'

function SubmitFeedback(props) {

  const [feedback, setFeedback] = useState('')


  const handleSubmit = () => {
    console.log('User Feedback:', feedback);
    props.history.push('/settings')
  }

  return (
    <Content padder>
      <View style={styles.pageView}>
        <Text style={styles.textContent}>What Can We Improve?</Text>
        <View>
          <TextInput
            style={styles.textInput}
            multiline={true}
            editable
            maxLength={500}
            placeholder='Please type your feedback here...'
            value={feedback}
            onChangeText={feedback => setFeedback(feedback)}
          />
        </View>
          <Text style={styles.submit} onPress={handleSubmit}>Submit</Text>
      </View>
    </Content>
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
    marginTop: 20,
  },
  textContent: {
    fontSize: 28,
    marginBottom: 10,
    fontFamily: 'gotham',
    fontWeight: '500',
    textAlign: 'center'
  },
  submit: {
    // marginVertical: 15,
    color: '#288365',
    textAlign: 'center',
    fontSize: 17,
    // top: 169
  }
})


export default withRouter(SubmitFeedback)
