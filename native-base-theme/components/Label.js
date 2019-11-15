// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    '.label': {
      fontFamily: 'bern-r',
      fontSize: 17,
      color: '#6f777e'
    },
    '.focused': {
      color: '#202224',
      width: 0,
      fontFamily: 'bern-sb',
      fontSize: 13,
    },
    fontSize: 17
  }

}
