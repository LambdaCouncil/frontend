import React, { createRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Drawer, Left, Icon, Body } from 'native-base';
import { connect } from "react-redux";

import UserPanel from './UserPanel';
import SideMenu from './SideMenu';
import Header from '../Header/Header';


const SidePanel = props => {
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => {
    setShowPanel(!showPanel);
  }

  return (
    <View>
      <View style={styles.content}>
        <View>
          <UserPanel />
        </View>
        <View>
          <SideMenu />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  ...state
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    // paddingTop: 25
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
});

export default connect(mapStateToProps, {})(SidePanel);


// export default class DrawerExample extends Component {
//   closeDrawer () => {
//     this.drawer._root.close()
//   };
//   openDrawer () => { this.drawer._root.open() };

//   render() { 
//     return ( 
//       <Drawer 
//         ref={(ref) => { this.drawer = ref; }} 
//         content={<SideBar navigator={this.navigator} />} 
//         onClose={() => this.closeDrawer()} 
//       >
//         // Main View 
//       </Drawer> 
//     ); 
//   } 
// }