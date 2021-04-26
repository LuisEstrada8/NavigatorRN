import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/authContext';

//<StackNavigator/>
const App = () => {
  return (
    <NavigationContainer>
    <AppState>
      <MenuLateral/>
       </AppState>
    </NavigationContainer>
  );
}


const AppState = ({children}: any) =>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;
