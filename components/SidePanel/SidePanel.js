import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { View } from 'native-base'
import { connect } from "react-redux"
import Modal from 'react-native-modal'

import SideMenu from './SideMenu'


const SidePanel = props => {
  const [isVisible, setIsVisible] = useState(true);
  return (

    <View style={{flex: 1}}>
      <Modal
        isVisible={isVisible}
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        backdropColor={'#202224'}
        backdropOpacity={0.5}
        onBackdropPress={() => setIsVisible(false)}
        style={{ flex: 1, margin: 0}}
      >
        <View style={{ height: '100%', width: '80%', paddingTop: '15%', backgroundColor: 'white', borderColor: 'white' }}>     
          <SideMenu togglePanel={props.togglePanel} />
        </View>
      </Modal>
    </View>
 
  );
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(SidePanel)
