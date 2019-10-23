import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, Text } from "react-native";

const defaultPath = "./assets/Screens/";

export default _ => {
    const [position, setPosition] = useState(1);

    return (
        <View>
            <CarouselPositionList length = {4} position = {position} />
            <ScrollView horizontal = {true}>

            </ScrollView>
        </View>
    );
}

const CarouselPositionList = props => {
    const generateArray = n => {
        const array = []
    
        for(let i = 0; i < n; i++)
            array.push(i)
    
        return array
    }

    const isActive = index => index === props.position 

    const positions = generateArray(props.length)

    return (
        <View style = {carouselPositionListStyle}>
            { 
                positions.map(index => 
                    <CarouselPosition key = {index} isActive = {isActive(index)} />
                )
            }
        </View>
    )
}

const CarouselPosition = ({ isActive }) => {
    const getColor = _ => isActive ? "green" : "gray"

    const carouselStyle = {
        ...defaultCarouselPositionStyle,
        backgroundColor: getColor(),
    }

    return <View style = {carouselStyle} />
}

const CarouselElement = ({ ...props }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Image source = {image} />
        </View>
    );
}

const carouselPositionListStyle = {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "center"
}

const defaultCarouselPositionStyle = {
    width: 11, 
    height: 11, 
    borderRadius: 11/2,
    margin: 5
}