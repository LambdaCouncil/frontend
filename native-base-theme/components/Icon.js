// @flow

import variable, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variable.councils

  return {
    fontSize: variable.iconFontSize,
    color: variable.textColor,
    '.backButton': {
      marginTop: 20,
      marginLeft: 10,
      fontSize: 50,
      color: text.greal
    },
    '.dgreal': {
      color: text.greal
    }
  }

}
