import React, { createRef, useState } from 'react'
import { Button, Drawer, Left, Icon, Body, View } from 'native-base'
import { connect } from "react-redux"

import UserPanel from './UserPanel'
import SideMenu from './SideMenu'
import Header from '../Header/Header'


const SidePanel = props => {
  const [showPanel, setShowPanel] = useState(false)

  const togglePanel = () => {
    setShowPanel(!showPanel)
  }

  return (
    <View sidePanel>
      <UserPanel />

      <SideMenu />
    </View>
  )
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, {})(SidePanel)
