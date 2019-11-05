// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    '.message': {
      paddingVertical: 20
    },
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center'
  }

}
