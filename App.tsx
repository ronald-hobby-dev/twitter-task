import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { AppNavigator } from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
export default App;
