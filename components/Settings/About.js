import React, {useState} from 'react'
import firebase from "../../firebase"
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native'
import {Input, Text, Label, Item, H1, H3} from 'native-base'
import {Link, withRouter} from 'react-router-native'
import {Icon} from 'native-base'


function About(props) {


  return (

    <KeyboardAvoidingView
      style={styles.inputContainer}
      behavior='padding'
    >
      <View style={styles.pageView}>
        <Text style={styles.header}>Councils v.1.0</Text>
        <View style={styles.contentDivs}>
          <Text style={styles.subHeader}>Terms of Use</Text>
          <Text style={styles.textContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc
            tellus, convallis pharetra
            condimentum eu, sodales eget magna. Maecenas auctor eget diam ac efficitur. Praesent et rhoncus erat, eu
            consequat.</Text>
        </View>
        <View style={styles.contentDivs}>
          <Text style={styles.subHeader}>Privacy Policy</Text>
          <Text style={styles.textContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc
            tellus, convallis pharetra
            condimentum eu, sodales eget magna. Maecenas auctor eget diam ac efficitur. Praesent et rhoncus erat, eu
            consequat.</Text>
        </View>
        <View style={styles.contentDivs}>
          <Text style={styles.subHeader}>Contact</Text>
          <Text style={styles.contactContent}>Email: <Text style={styles.contactInfo}>info@councils.io</Text></Text>
          <Text style={styles.contactContent}>Web: <Text style={styles.contactInfo}>councils.io</Text></Text>
        </View>
      </View>
    </KeyboardAvoidingView>

  )
}


const styles = StyleSheet.create({
  inputContainer: {
    height: '100%',
  },
  contactInfo: {
    color: '#288365'
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
  pageView: {
    marginHorizontal: 20,
    marginTop: 80,
  },
  header: {
    fontSize: 28,
    marginBottom: 10,
    fontFamily: 'gotham',
    fontWeight: '500',
  },
  subHeader: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'bern-r'
  },
  textContent: {
    fontSize: 17,
    fontFamily: 'bern-r',
  },
  contentDivs: {
    marginVertical: 10,
    lineHeight: 24
  },
  contactContent: {
    marginVertical: 10,
    fontSize: 17,
    fontFamily: 'bern-r',
    lineHeight: 24
  }
})


export default withRouter(About)
