import React, { useState } from 'react'
import { View } from 'native-base'
import { connect } from "react-redux"
import Modal from 'react-native-modal';


import UserPanel from './UserPanel'
import SideMenu from './SideMenu'


const SidePanel = props => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <View>
      <Modal
        isVisible={isVisible}
        animationIn={"slideInLeft"}
        animationOut={"slideOutLeft"}
        onBackdropPress={() => setIsVisible(false)}
        onSwipeComplete={() => setIsVisible(false)}
        swipeDirection="left"
      >
        <UserPanel />
        <SideMenu setIsVisible={setIsVisible} togglePanel={props.togglePanel} />
      </Modal>
    </View>
  );
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(SidePanel)
