import React, { createRef, useState } from 'react';
import { Button, Drawer, Left, Icon, Body, View } from 'native-base';
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
    <View sidePanel>
      <UserPanel />

      <SideMenu />
    </View>
  );
};

const mapStateToProps = state => ({
  ...state
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