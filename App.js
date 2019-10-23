import React, { useEffect } from 'react'
import * as Font from 'expo-font'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { NativeRouter } from 'react-router-native'
import { StyleProvider } from 'native-base'
import thunk from 'redux-thunk'

import getTheme from './native-base-theme/components'
import common from './native-base-theme/variables/commonColor'
import reducer from './reducer'
// import Routes from './components/Discussions/Discussions'
import Routes from './components/Routes'

const store = createStore(reducer, applyMiddleware(thunk))

const App = _ => {

  YellowBox.ignoreWarnings(['Setting a timer', 'Deprecation warning'])

  Font.loadAsync({
    'gotham': require("./assets/Fonts/Gotham-Medium.ttf"),
    'bern-b': require("./assets/Fonts/BerninaSans-Bold.otf"),
    'bern-r': require("./assets/Fonts/BerninaSans-Regular.otf"),
    'bern-sb': require("./assets/Fonts/BerninaSans-Semibold.otf"),
  })

  return (
    <Provider store={store}>
      <NativeRouter>
        <StyleProvider style={getTheme(common)}>
          <Routes />
        </StyleProvider>
      </NativeRouter>
    </Provider>
  )

}

export default App
