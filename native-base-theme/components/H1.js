// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    '.pre': {
      color: '#202224',
      fontFamily: 'gotham',
      fontSize: 28,
      marginBottom: 10,
      marginTop: 30
    },
    color: variables.councils.text.darkGrey,
    fontSize: variables.fontSizeH1,
    lineHeight: variables.lineHeightH1,
    marginVertical: 10
  }

}
