// @flow

import variable, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variable.councils

  return {
    color: text.darkGreenBlue,
    fontSize: variable.iconFontSize,
    '.rotate90': {
      transform: [{ rotate: '90deg' }]
    },
    '.backButton': {
      color: text.darkGreenBlue,
      fontSize: 24,
      marginLeft: 20,
      marginTop: 20
    },
    '.ddarkGreenBlue': {
      color: text.darkGreenBlue,
    }
  }

}
