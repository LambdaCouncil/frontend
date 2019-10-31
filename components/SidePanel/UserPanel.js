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
    <Item style={{borderBottomColor: 'white'}}>
      <Thumbnail style={{height: 48, width: 48}}
        source={{ uri: props.currentUser.photoURL }}
      />
      <Left userPanel>
        <Text style={{color: '#202224', fontSize: 17}}>{user.displayName}</Text>
        <Text note style={{fontSize: 13}}>{user.email}</Text>
      </Left>
    </Item>
  )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, {})(UserPanel)
