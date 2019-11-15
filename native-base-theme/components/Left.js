// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-start',
    '.userPanel': {
      marginLeft: 15
    },
    '.active': {
      borderLeft: `2px solid ${ui.darkGreenBlue}`
    }
  }

}
