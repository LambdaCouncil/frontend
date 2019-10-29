import React from "react"
import firebase from "../../firebase"
import {KeyboardAvoidingView, StyleSheet, View, Text} from 'react-native'
import { withRouter } from 'react-router-native'


const Donations = props => {
    return (
        <View>
            <Text>Join Our Monthly Giving Program</Text>
            <Text>100% of your donation supports development of this platform so members can more effectively magnify their callings.</Text>
        <Button transparent>Send Donation</Button>
        </View>
    )
}

export default withRouter(Donations)