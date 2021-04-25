import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';

//<StackNavigator/>
const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral/>
    </NavigationContainer>
  );
}

export default App;
