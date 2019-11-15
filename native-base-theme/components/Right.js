// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    'NativeBase.Button': {
      alignSelf: null
    },
    borderWidth: 0,
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end'
  }

}
