import React from 'react'
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { H1, H3, Text, View, Icon } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { AirbnbRating, Rating } from "react-native-ratings";


const RateCouncils = (props) => {

  const _valueChanged = (rating) => {
    console.log(rating)
  };

  return (
    <KeyboardAvoidingView
      style={styles.inputContainer}
      behavior='padding'>

      <Icon backButton
        onPress={() => props.history.goBack()}
        name='arrow-back'
      />

      <View style={styles.pageView}>
        <Text style={styles.header}>How Would You Rate Our App?</Text>
        <AirbnbRating
          count={5}
          defaultRating={5}
          size={50}
          selectedColor='#288365'
          showRating={false}
        />
        <View>
          <Text style={styles.reviewText}>
            Would you mind to share your feedback on the App Store?
          </Text>
        </View>
        <View>
          <Text style={styles.appStoreLink}>
            Go to App Store
          </Text>
        </View>
      </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    position: 'absolute',
    top: 25,
    left: 5,
    width: '100%',
    height: 50,
  },
  pageView: {
    marginHorizontal: 20
  },
  backButton: {
    fontSize: 50
  },
  appStoreLink: {
    color: '#288365',
    marginTop: 20,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center'
  },
  reviewText: {
    color: 'black',
    marginTop: 32,
    fontSize: 17,
    marginVertical: 20,
    textAlign: 'center',
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
    width: 335,
    marginLeft: 20
  }
});

export default RateCouncils;
