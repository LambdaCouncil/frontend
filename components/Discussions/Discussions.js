import React from 'react'
import { List, ListItem, Thumbnail, Left, Body, Text, Right, View } from 'native-base'
import Header from '../Header/Header'

const Discussions = _ => {

    return (
      <View>
        <Header />
        <List style={{ marginVertical: 25 }}>
          <ListItem avatar>
            <Left>
              <Thumbnail />
            </Left>
            <Body>
              <Text>Whoever</Text>
              <Text note>Some stuff...</Text>
            </Body>
            <Right>
              <Text note>Time?</Text>
            </Right>
          </ListItem>
        </List>
      </View>
    );
}

export default Discussions
