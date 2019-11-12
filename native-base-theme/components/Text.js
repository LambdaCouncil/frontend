// @flow

import variable, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variable.councils

  return {
    fontSize: variable.DefaultFontSize,
    fontFamily: variable.fontFamily,
    color: variable.textColor,
    '.note': {
      color: text.battleShipGrey,
      fontSize: variable.noteFontSize
    },
    '.loginButton': {
      backgroundColor: ui.eggshell,
      color: text.darkGreenBlue,
      textAlign: 'center',
      padding: 10,
      paddingBottom: 15,
      fontSize: 35
    },
    '.registerButton': {
      borderRadius: 7.5,
      overflow: 'hidden',
      backgroundColor: ui.darkGreenBlue,
      padding: 10,
      paddingBottom: 15,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: text.white,
      fontSize: 35
    },
    '.snippet': {
      color: text.darkGrey,
    },
    '.newSnippet': {
      fontWeight: 'bold'
    },
    '.name': {
      fontSize: 20,
      color: text.darkGrey,
    },
    '.new': {
      color: text.darkGreenBlue,
      fontWeight: 'bold'
    },
  }

}
