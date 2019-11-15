// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    color: variables.textColor,
    fontSize: variables.fontSizeH3,
    lineHeight: variables.lineHeightH3,
    '.submit': {
      marginTop: 25,
      fontFamily: 'bern-sb',
      fontSize: 17,
      color: text.battleShipGrey,
    },
    '.active': {
      color: text.darkGreenBlue
    },
  }

}
