/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//external dependencies
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { View } from 'react-native';
//external types dependencies
//internal dependencies
import { initDateMethods, initStrMethods } from '@util';
import { store } from '@store';
import { RootNav } from '@comp/nav';
//internal types dependencies

initStrMethods();
initDateMethods();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View className="h-full flex">
          <RootNav/>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
