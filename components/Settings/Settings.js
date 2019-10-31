import React from 'react'
import { H1, H3, Content } from 'native-base'
import { Link, withRouter } from 'react-router-native'

function Settings(props) {

  return (

    <Content padder>

      <H1>Settings</H1>

      <Link to='/edit-profile'>
        <H3>Edit Profile</H3>
      </Link>
      <Link to='/notifications'>
        <H3>Push Notifications</H3>
      </Link>
      <Link to='/feedback'>
        <H3>Submit Feedback</H3>
      </Link>
      <Link to='/rate'>
        <H3>Rate Councils</H3>
      </Link>
      <Link to='/about'>
        <H3>About</H3>
      </Link>


    </Content>

  )
}


export default withRouter(Settings)
