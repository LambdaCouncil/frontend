import React, { useState } from 'react'
import * as Font from 'expo-font'
import { YellowBox, View } from 'react-native'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { NativeRouter } from 'react-router-native'
import { StyleProvider, Spinner } from 'native-base'
import { Root } from 'native-base'
import thunk from 'redux-thunk'

import getTheme from './native-base-theme/components'
import common from './native-base-theme/variables/commonColor'
import reducer from './reducer'
import Routes from './components/Routes'

import OfflineStatus from "./OfflineStatus"

const store = createStore(reducer, applyMiddleware(thunk))

const App = _ => {
  const[isLoading, setLoading] = useState(true)


  // hides nuisance warnings from Expo
  YellowBox.ignoreWarnings(['Setting a timer', 'Deprecation warning'])

  
  /* 
     Preloads Councils fonts. Use the alias of each font for styling within the application
     example: style={{fontFamily: 'bern-r', fontSize: 17}}  is BerninaSans-Regular with 17px font size
  */
  Font.loadAsync({
    'gotham': require("./assets/Fonts/Gotham-Medium.ttf"),
    'bern-b': require("./assets/Fonts/BerninaSans-Bold.otf"),
    'bern-r': require("./assets/Fonts/BerninaSans-Regular.otf"),
    'bern-sb': require("./assets/Fonts/BerninaSans-Semibold.otf"),
  })
    .then(_ => {
      setLoading(false)
    })

  /* 
    1.  <StyleProvider style={getTheme(common)}> is for the native-base-theme (see native-base-theme directory)
    2.  <Root> is used to enable action-sheets in ios and android. 
            - ActionSheets are used in conjunction with the side panel:
              See the SidePanel directory, ActionSheets.js, and buttonsObj.js located in the objects directory
  */
  return (
    <Provider store={store}>
      <NativeRouter>
        <StyleProvider style={getTheme(common)}>
          <Root>
            <>
              <Routes loadingFonts = {isLoading} />
              <OfflineStatus />
            </>
          </Root>
        </StyleProvider>
      </NativeRouter>
    </Provider>
  )

}

export default App
