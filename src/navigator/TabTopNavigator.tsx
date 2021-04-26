import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../Screens/ChatScreen';
import { ContactScreen } from '../Screens/ContactScreen';
import { AlbumsScreen } from '../Screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialTopTabNavigator();

export const TabTopNavigator = () => {
  
  const {top:paddingTop} =useSafeAreaInsets();

    return (
    <Tab.Navigator
    style={{
        paddingTop
    }}
    sceneContainerStyle={{
        backgroundColor: 'white'
    }}
    tabBarOptions={{
        pressColor: '#727272',
        showIcon: true,
        indicatorStyle:{backgroundColor:'#FFBA08'},
        style:{
            borderTopWidth: 0,
            elevation: 0,
        }
    }}
    screenOptions={ ({route})=> ({
        tabBarIcon: ({color, focused}) => {

            let iconName: string = '';
            switch (route.name){
                case 'Chat':
                    iconName='comments'
                break;
                case 'Contact':
                    iconName='id-badge'
                break;
                case 'Albums':
                    iconName='images'
                break;
            }

            return <Text style={{color}}><Icon name={iconName} size={20} color="#FFBA08" /></Text>
        }
    })}
    >
      <Tab.Screen name="Chat" component={ ChatScreen } />
      <Tab.Screen name="Contact" component={ ContactScreen } />
      <Tab.Screen name="Albums" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}