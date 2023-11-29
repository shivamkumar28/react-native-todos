/**
 * todos React Native App
 * @format
 */

import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import InitialNavigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/redux';

function App(): JSX.Element {

  return (
    <Provider store={store} >
      <SafeAreaProvider>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        <View style={{ flex: 1 }}>
          <InitialNavigation />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
