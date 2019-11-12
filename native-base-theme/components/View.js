// @flow

import variable, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variable.councils

  return {
    '.padder': {
      padding: variable.contentPadding
    },
    '.buttonContainerRoot': {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: ui.eggshell,
<<<<<<< HEAD
      borderTopWidth: 1,
      borderTopColor: ui.lightPeriwinkle,
      paddingVertical: 10,
      paddingHorizontal: '10%'
=======
      borderTopWidth: 2,
      borderTopColor: ui.lightPeriwinkle,
      paddingVertical: 15
>>>>>>> b9983ae36922d29ecb1cf8fc70faa4aba5bec292
    },
    '.containerAllRoot': {
      height: '100%',
      justifyContent: 'space-between',
      paddingTop: 25
    },
    '.headerContainerRoot': {
      width: '95%',
      alignItems: 'center',
    },
    '.sidePanel': {
      backgroundColor: ui.white,
      position: 'absolute'
    },
    '.loading': {
      flex: 1,
      justifyContent: 'center'
    }
  }

}
