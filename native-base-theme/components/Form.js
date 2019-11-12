// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    'NativeBase.Item': {
      '.fixedLabel': {
        'NativeBase.Label': {
          paddingLeft: null
        },
        marginHorizontal: 20
      },
      '.inlineLabel': {
        'NativeBase.Label': {
          paddingLeft: null
        },
        marginHorizontal: 20
      },
      '.placeholderLabel': {
        'NativeBase.Input': {}
      },
      '.stackedLabel': {
        'NativeBase.Label': {
          top: 5,
          paddingLeft: null
        },
        'NativeBase.Input': {
          paddingLeft: null,
          marginHorizontal: null
        },
        'NativeBase.Icon': {
          marginTop: 36
        },
        marginHorizontal: 20
      },
      '.floatingLabel': {
        'NativeBase.Input': {
          paddingLeft: null,
          top: 10,
          marginHorizontal: null
        },
        'NativeBase.Label': {
          left: 0,
          top: 6
        },
        'NativeBase.Icon': {
          top: 6
        },
        marginTop: 15,
        marginHorizontal: 20
      },
      '.regular': {
        'NativeBase.Label': {
          left: 0
        },
        marginHorizontal: 0
      },
      '.rounded': {
        'NativeBase.Label': {
          left: 0
        },
        marginHorizontal: 0
      },
      '.underline': {
        'NativeBase.Label': {
          left: 0,
          top: 0,
          position: 'relative'
        },
        'NativeBase.Input': {
          left: -15
        },
        marginHorizontal: 20
      },
      '.last': {
        marginHorizontal: 0,
        paddingLeft: 15
      },
      'NativeBase.Label': {
        paddingRight: 5
      },
      marginHorizontal: 20
    },
    '.message': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    }
  }

}
