import React, { useState, useEffect } from "react"
import { Icon } from "native-base"

import { View, Text, Platform, NativeModules, TouchableOpacity, NetInfo } from "react-native"
const { StatusBarManager } = NativeModules;

export default _ => {
    const [isConnected, setConnected] = useState(true)
    const [hidden, setHidden] = useState(false)
    const [flash, setFlash] = useState(false)

    setTimeout(_ => setFlash(!flash), 1000)

    useEffect(_ => {
        NetInfo.isConnected.addEventListener('connectionChange', handleConnectionChange);

        return _ => {
            NetInfo.isConnected.removeEventListener('connectionChange', handleConnectionChange);
        }
    }, [])

    const handleConnectionChange = event => {
        setConnected(event)
    }

    const onPress = _ => {
        setHidden(!hidden)
    }

    const containerStyle = {
        position: 'absolute', 
        justifyContent: 'center', 
        alignItems: 'center',
        top: STATUSBAR_HEIGHT + 15,
        zIndex: 99999,
        opacity: 0.7,
        alignSelf: "center",
        backgroundColor: "black",
        borderRadius: 10,
    }

    const hiddenStyleSheet = {
        position: 'absolute', 
        justifyContent: 'center', 
        alignItems: 'center',
        bottom: 0,
        left: 0,
        zIndex: 99999,
        opacity: 0.7,
        alignSelf: "center",
        margin: 15,
        backgroundColor: flash ? "black" : "darkgray",
        borderRadius: 10,
    }

    if(isConnected) return <></>

    return (
        <View style = {hidden ? hiddenStyleSheet : containerStyle}>
            <TouchableOpacity style = {innerContainerStyle} onPress = {onPress}>
                <Icon name = "cellular" color = "white" style = {{ color: "white", marginHorizontal: 15, paddingVertical: hidden ? 5 : 15 }} />
                <View style = {{ display: hidden ? "none" : "flex", flexDirection: "row", alignItems: "center" }}>
                    <Text style = {{ color: "white", fontSize: 18 }}>No Internet connection</Text>
                    <Icon name = "close-circle" color = "white" style = {{ color: "white", marginHorizontal: 15 }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const STATUSBAR_HEIGHT = (Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT) * 1;

console.log(STATUSBAR_HEIGHT)



const innerContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
}