import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens';
import {Screen} from '../constants/screens/screens';
const stack = createStackNavigator();
export const AppNavigator = () => {
  return (
    <stack.Navigator
      initialRouteName={Screen.Home}
      screenOptions={{headerShown: false}}>
      <stack.Screen name={Screen.Home} component={Home} />
    </stack.Navigator>
  );
};
