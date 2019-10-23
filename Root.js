import React from 'react'
import { Text, H1, H2, View } from 'native-base'
import { Link } from 'react-router-native'

import Carousel from "./Carousel"

export default _ => {
    return (
        <View containerAllRoot>

            <Carousel />

            <View buttonContainerRoot>

                <Link to='/login' style={{ width: '45%' }}>
                    <Text loginButton>Log In</Text>
                </Link>

                <Link to='/register' style={{ width: '45%' }}>
                    <Text registerButton>Sign Up</Text>
                </Link>

            </View>
        </View>
    )
}
