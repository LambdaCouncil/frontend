import React from 'react'
import { View } from 'native-base'
import { connect } from "react-redux"

import UserPanel from './UserPanel'
import SideMenu from './SideMenu'


const SidePanel = props => {
  return (
    <View>
      <UserPanel />
      <SideMenu togglePanel={props.togglePanel} />
    </View>
  )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(SidePanel)
