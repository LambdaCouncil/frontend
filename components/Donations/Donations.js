import React from "react"
import firebase from "../../firebase"
import {KeyboardAvoidingView, StyleSheet, View, Text, Button} from 'react-native'
import { withRouter } from 'react-router-native'
import Form from './Form'
import {StripeProvider, Elements} from 'react-stripe-elements';


const Donations = props => {
    return (
        <View>
            <Text>Join Our Monthly Giving Program</Text>
            <Text>100% of your donation supports development of this platform so members can more effectively magnify their callings.</Text>
        <StripeProvider apiKey=''>
            <Elements>
                <Form/>
            </Elements>
        </StripeProvider>
        <Button transparent title="Send Donation">Send Donation</Button>
        </View>
    )
}

export default withRouter(Donations)