import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Icon, List, ListItem, Text } from 'native-base'
import { Link, withRouter } from 'react-router-native'

function Settings(props) {

  return (
    <Container>
      <Content padder>
        <List>
          <ListItem style={styles.listItem}>
            <Link to='/edit-profile'>
              <Text style={styles.text}>Edit Profile</Text>              
            </Link>
            <Icon name='arrow-forward' style={styles.icon} />
          </ListItem>
          <ListItem style={styles.listItem}>
            <Link to='/notifications'>
              <Text style={styles.text}>Push Notifications</Text>
            </Link>
            <Icon name='arrow-forward' style={styles.icon} />
          </ListItem>
          <ListItem style={styles.listItem}>
            <Link to='/feedback'>
              <Text style={styles.text}>Submit Feedback</Text>
            </Link>
            <Icon name='arrow-forward' style={styles.icon} />
          </ListItem>
          <ListItem style={styles.listItem}>
            <Link to='/rate'>
              <Text style={styles.text}>Rate Councils</Text>
            </Link>
            <Icon name='arrow-forward' style={styles.icon} />
          </ListItem>
          <ListItem style={styles.listItem}>
            <Link to='/about'>
              <Text style={styles.text}>About</Text>
            </Link>
            <Icon name='arrow-forward' style={styles.icon} />
          </ListItem>
        </List>
      </Content>
    </Container>

  )
}

const styles = StyleSheet.create({
  icon: {
    color: '#6f777e',
    fontSize: 12,    
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#202224',
    fontFamily: 'bern-r',
    fontSize: 17
  }
})

export default withRouter(Settings)
