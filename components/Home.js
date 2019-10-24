import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import firebase from '../firebase'
import { H3 } from "native-base";
import { Link } from "react-router-native";
import Header from './Header/Header';

const Home = props => {
    // console.log('homeprops', props.currentUser)
    return (
        <View>

        </View>
    )
}

const homeStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
}

export default connect(state => ({ ...state }))(Home)
