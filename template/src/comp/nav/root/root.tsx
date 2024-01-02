//external dependencies
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {memo} from 'react';
//external types dependencies
//internal dependencies
import {HomeScreen, StartupScreen} from '@comp/screen';
//internal types dependencies
import type {TRootNavParamList} from '.';

const RootStack = createNativeStackNavigator<TRootNavParamList>();
export const RootNav = memo(() => {
  return (
    <RootStack.Navigator
      initialRouteName="Startup"
      screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
      <RootStack.Screen name="Startup" component={StartupScreen} />
      <RootStack.Screen name="Home" component={HomeScreen} />
    </RootStack.Navigator>
  );
});
