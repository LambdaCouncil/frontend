import React, { useState, useEffect } from "react"
import firebase from "../../firebase"
import { Grid, Col, Row, Header, Icon, Thumbnail, View, Text, Left, Item, Body } from 'native-base'
import { connect } from "react-redux"

const UserPanel = props => {

  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [])

  const dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{user.displayName}</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "avatar",
      text: <span>Change Avatar</span>
    },
    {
      key: "signout",
      text: <span onClick={handleSignout}>Sign Out</span>
    }
  ]

  const handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("Signed Out"))
  }

  return (
    <Item>
      <Thumbnail
        source={{ uri: 'https://avatars3.githubusercontent.com/u/46138601?s=400&v=4' }}
      />
      <Left>
        <Text>{user.displayName}</Text>
        <Text note>{user.email}</Text>
      </Left>
    </Item>
  )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, {})(UserPanel)
