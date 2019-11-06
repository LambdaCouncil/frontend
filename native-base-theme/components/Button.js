// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {
  const { platformStyle } = variables

  const { ui, text } = variables.councils

  const darkCommon = {
    'NativeBase.Text': {
      color: variables.brandDark
    },
    'NativeBase.Icon': {
      color: variables.brandDark
    },
    'NativeBase.IconNB': {
      color: variables.brandDark
    }
  }

  const lightCommon = {
    'NativeBase.Text': {
      color: variables.brandLight
    },
    'NativeBase.Icon': {
      color: variables.brandLight
    },
    'NativeBase.IconNB': {
      color: variables.brandLight
    }
  }

  const primaryCommon = {
    'NativeBase.Text': {
      color: variables.buttonPrimaryBg
    },
    'NativeBase.Icon': {
      color: variables.buttonPrimaryBg
    },
    'NativeBase.IconNB': {
      color: variables.buttonPrimaryBg
    }
  }

  const successCommon = {
    'NativeBase.Text': {
      color: variables.buttonSuccessBg
    },
    'NativeBase.Icon': {
      color: variables.buttonSuccessBg
    },
    'NativeBase.IconNB': {
      color: variables.buttonSuccessBg
    }
  }

  const infoCommon = {
    'NativeBase.Text': {
      color: variables.buttonInfoBg
    },
    'NativeBase.Icon': {
      color: variables.buttonInfoBg
    },
    'NativeBase.IconNB': {
      color: variables.buttonInfoBg
    }
  }

  const warningCommon = {
    'NativeBase.Text': {
      color: variables.buttonWarningBg
    },
    'NativeBase.Icon': {
      color: variables.buttonWarningBg
    },
    'NativeBase.IconNB': {
      color: variables.buttonWarningBg
    }
  }

  const dangerCommon = {
    'NativeBase.Text': {
      color: variables.buttonDangerBg
    },
    'NativeBase.Icon': {
      color: variables.buttonDangerBg
    },
    'NativeBase.IconNB': {
      color: variables.buttonDangerBg
    }
  }

  return {
    '.disabled': {
      '.transparent': {
        backgroundColor: 'transparent',
        'NativeBase.Text': {
          color: variables.buttonDisabledBg
        },
        'NativeBase.Icon': {
          color: variables.buttonDisabledBg
        },
        'NativeBase.IconNB': {
          color: variables.buttonDisabledBg
        }
      },
      'NativeBase.Icon': {
        color: variables.brandLight
      },
      'NativeBase.IconNB': {
        color: variables.brandLight
      },
      backgroundColor: variables.buttonDisabledBg
    },
    '.bordered': {
      '.dark': {
        ...darkCommon,
        backgroundColor: 'transparent',
        borderColor: variables.brandDark,
        borderWidth: variables.borderWidth * 2
      },
      '.light': {
        ...lightCommon,
        backgroundColor: 'transparent',
        borderColor: variables.brandLight,
        borderWidth: variables.borderWidth * 2
      },
      '.primary': {
        ...primaryCommon,
        backgroundColor: 'transparent',
        borderColor: variables.buttonPrimaryBg,
        borderWidth: variables.borderWidth * 2
      },
      '.success': {
        ...successCommon,
        backgroundColor: 'transparent',
        borderColor: variables.buttonSuccessBg,
        borderWidth: variables.borderWidth * 2
      },
      '.info': {
        ...infoCommon,
        backgroundColor: 'transparent',
        borderColor: variables.buttonInfoBg,
        borderWidth: variables.borderWidth * 2
      },
      '.warning': {
        ...warningCommon,
        backgroundColor: 'transparent',
        borderColor: variables.buttonWarningBg,
        borderWidth: variables.borderWidth * 2
      },
      '.danger': {
        ...dangerCommon,
        backgroundColor: 'transparent',
        borderColor: variables.buttonDangerBg,
        borderWidth: variables.borderWidth * 2
      },
      '.disabled': {
        backgroundColor: 'transparent',
        borderColor: variables.buttonDisabledBg,
        borderWidth: variables.borderWidth * 2,
        'NativeBase.Text': {
          color: variables.buttonDisabledBg
        }
      },
      ...primaryCommon,
      borderWidth: variables.borderWidth * 2,
      elevation: null,
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
      backgroundColor: 'transparent'
    },

    '.dark': {
      '.bordered': {
        ...darkCommon
      },
      backgroundColor: variables.brandDark
    },
    '.light': {
      '.transparent': {
        ...lightCommon,
        backgroundColor: 'transparent'
      },
      '.bordered': {
        ...lightCommon
      },
      ...darkCommon,
      backgroundColor: variables.brandLight
    },

    '.primary': {
      '.bordered': {
        ...primaryCommon
      },
      backgroundColor: variables.buttonPrimaryBg
    },

    '.success': {
      '.bordered': {
        ...successCommon
      },
      backgroundColor: variables.buttonSuccessBg
    },

    '.info': {
      '.bordered': {
        ...infoCommon
      },
      backgroundColor: variables.buttonInfoBg
    },

    '.warning': {
      '.bordered': {
        ...warningCommon
      },
      backgroundColor: variables.buttonWarningBg
    },

    '.danger': {
      '.bordered': {
        ...dangerCommon
      },
      backgroundColor: variables.buttonDangerBg
    },

    '.block': {
      justifyContent: 'center',
      alignSelf: 'stretch'
    },

    '.full': {
      justifyContent: 'center',
      alignSelf: 'stretch',
      borderRadius: 0
    },

    '.rounded': {
      borderRadius: variables.borderRadiusLarge
    },

    '.transparent': {
      backgroundColor: 'transparent',
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      ...primaryCommon,
      '.dark': {
        ...darkCommon
      },
      '.danger': {
        ...dangerCommon
      },
      '.warning': {
        ...warningCommon
      },
      '.info': {
        ...infoCommon
      },
      '.primary': {
        ...primaryCommon
      },
      '.success': {
        ...successCommon
      },
      '.light': {
        ...lightCommon
      },
      '.disabled': {
        backgroundColor: 'transparent',
        borderColor: variables.buttonDisabledBg,
        borderWidth: variables.borderWidth * 2,
        'NativeBase.Text': {
          color: variables.buttonDisabledBg
        },
        'NativeBase.Icon': {
          color: variables.buttonDisabledBg
        },
        'NativeBase.IconNB': {
          color: variables.buttonDisabledBg
        }
      }
    },

    '.small': {
      height: 30,
      'NativeBase.Text': {
        fontSize: 14
      },
      'NativeBase.Icon': {
        fontSize: 20,
        paddingTop: 0
      },
      'NativeBase.IconNB': {
        fontSize: 20,
        paddingTop: 0
      }
    },

    '.large': {
      height: 60,
      'NativeBase.Text': {
        fontSize: 22
      }
    },

    '.capitalize': {},

    '.vertical': {
      flexDirection: 'column',
      height: null
    },

    'NativeBase.Text': {
      fontFamily: variables.buttonFontFamily,
      marginLeft: 0,
      marginRight: 0,
      color: variables.inverseTextColor,
      fontSize: variables.buttonTextSize,
      paddingHorizontal: 16,
      backgroundColor: 'transparent'
    },

    'NativeBase.Icon': {
      color: variables.inverseTextColor,
      fontSize: 24,
      marginHorizontal: 16,
      paddingTop: platform === PLATFORM.IOS ? 2 : undefined
    },
    'NativeBase.IconNB': {
      color: variables.inverseTextColor,
      fontSize: 24,
      marginHorizontal: 16,
      paddingTop: platform === PLATFORM.IOS ? 2 : undefined
    },

    '.iconLeft': {
      'NativeBase.Text': {
        marginLeft: 0
      },
      'NativeBase.IconNB': {
        marginRight: 0,
        marginLeft: 16
      },
      'NativeBase.Icon': {
        marginRight: 0,
        marginLeft: 16
      }
    },
    '.iconRight': {
      'NativeBase.Text': {
        marginRight: 0
      },
      'NativeBase.IconNB': {
        marginLeft: 0,
        marginRight: 16
      },
      'NativeBase.Icon': {
        marginLeft: 0,
        marginRight: 16
      }
    },
    '.picker': {
      'NativeBase.Text': {
        '.note': {
          fontSize: 16,
          lineHeight: null
        }
      }
    },
    '.noBorder': {
      borderWidth: 0,
      borderColor: ui.white
    },
    '.backButton': {
      top: 20,
      left: 0,
      position: 'absolute',
      zIndex: 2,
      fontSize: 50,
      color: text.greal,
      elevation: 0
    },
    backgroundColor: ui.white,
    borderRadius: variables.borderRadiusBase,
    borderColor: ui.white,
    borderWidth: 0,
    height: 45,
    flexDirection: 'row',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}
