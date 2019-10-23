// @flow

import variable, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variable.councils

  return {
    fontSize: variable.DefaultFontSize,
    fontFamily: variable.fontFamily,
    color: variable.textColor,
    '.note': {
      color: text.slateGrey,
      fontSize: variable.noteFontSize
    },
    '.loginButton': {
      backgroundColor: ui.eggshell,
      color: text.greal,
      textAlign: 'center',
      padding: 10,
      paddingBottom: 15,
      fontSize: 35
    },
    '.registerButton': {
      borderRadius: 7.5,
      backgroundColor: ui.greal,
      padding: 10,
      paddingBottom: 15,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: text.white,
      fontSize: 35
    },
    '.snippet': {
      color: text.nearBlack,
    },
    '.newSnippet': {
      fontWeight: 'bold'
    },
    '.name': {
      fontSize: 20,
      color: text.nearBlack,
    },
    '.new': {
      color: text.greal,
      fontWeight: 'bold'
    }
  }

}
