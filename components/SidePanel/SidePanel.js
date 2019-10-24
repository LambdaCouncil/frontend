import React, { createRef, useState } from 'react'
import { Button, View, Left, Icon, Body } from 'native-base'
import { connect } from "react-redux"

import UserPanel from './UserPanel'
import SideMenu from './SideMenu'
import Header from '../Header/Header'


const SidePanel = props => {
  return (
    <View>
      <UserPanel />
      <SideMenu />
    </View>
  )
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, {})(SidePanel)
