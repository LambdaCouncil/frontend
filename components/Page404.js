import React from 'react'
import { withRouter } from "react-router-native"
import { View, Text, Icon } from "native-base"

const Page404 = props => {
    return (
        <View>
            <Icon backButton
                name='arrow-back'
                onPress={() => props.history.goBack()}
            />
            <Text>404 page not found</Text>
        </View>
    )
}

export default withRouter(Page404)
