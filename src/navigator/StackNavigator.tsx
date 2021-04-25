import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../Screens/Pagina1Screen';
import { Pagina2Screen } from '../Screens/Pagina2Screen';
import { Pagina3Screen } from '../Screens/Pagina3Screen';
import { PersonaScreen } from '../Screens/PersonaScreen';

export type RouteStackParams={

  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  Perfil: {id: number, nombre: string};

}

const Stack = createStackNavigator<RouteStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    //initialRouteName="Pagina3Screen"
    screenOptions={{
      headerStyle:{
        elevation:0
      },
      cardStyle:{
        backgroundColor:'white',
      }}}
    >
      <Stack.Screen name="Pagina1Screen" options={{title:'Pagina 1'}}component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:'Pagina 2'}}component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:'Pagina 3'}}component={Pagina3Screen} />
      <Stack.Screen name="Perfil" options={{title:'Perfil'}}component={PersonaScreen} />
    </Stack.Navigator>
  );
} 