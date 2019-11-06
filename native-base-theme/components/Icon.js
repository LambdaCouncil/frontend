// @flow

import variable, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variable.councils

  return {
    color: text.greal,
    fontSize: variable.iconFontSize,
    '.rotate90': {
      transform: [{ rotate: '90deg' }]
    },
    '.backButton': {
      fontSize: 50,
      color: text.greal,
    },
    '.dgreal': {
      color: text.greal,
    }
  }

}
