import React, { useState } from 'react'
import { View } from 'native-base'
import { connect } from "react-redux"

import Modal from 'react-native-modal'


import UserPanel from './UserPanel'
import SideMenu from './SideMenu'


const SidePanel = props => {
  const [isVisible, setIsVisible] = useState(true)
  
  return (
    <View>
      <Modal         
        isVisible={isVisible}   
        animationIn={'slideInLeft'} 
        animationOut={'slideOutLeft'}
        onBackdropPress={() => setIsVisible(false)}
        style={{flex: 1}, {margin: 0}}
      >
        <View style={{width: '80%'}, {backgroundColor: 'white'}}> 
          <UserPanel />
          <SideMenu togglePanel={props.togglePanel} />
        </View>
      </Modal>
    </View>
  )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(SidePanel)
