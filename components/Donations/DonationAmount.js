import React from "react";
import firebase from "../../firebase";
import {KeyboardAvoidingView, StyleSheet, View, Text, Button} from 'react-native';
import { withRouter } from 'react-router-native';
import {StripeProvider, Elements} from 'react-stripe-elements';


export default class App extends React.Component<IAppProps, IAppState> {
    render(){
        return (
            <StripeProvider apiKey="pk_test_6zLTl66mCBKJihsb5xN6i6qZ">
                <Elements>


                </Elements>
            </StripeProvider>
        )

    }
}
export default DonationAmount;
