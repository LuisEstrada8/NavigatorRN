import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab3Screen } from '../Screens/Tab3Screen';
import { Tab2Screen } from '../Screens/Tab2Screen';
import { Tab1Screen } from '../Screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TabTopNavigator } from './TabTopNavigator';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOSNavigator/> : <TabsAndroidNavigator/>
}

const TabsAndroid = createMaterialBottomTabNavigator();
const TabsAndroidNavigator = () =>  {
  return (
    <TabsAndroid.Navigator
    sceneAnimationEnabled={true}
    barStyle={{backgroundColor: "#727272"}}
    screenOptions={ ({route})=> ({
      tabBarIcon: ({color, focused}) => {

        let iconName: string = '';
        switch (route.name){
            case 'Tab1Screen':
                iconName='home'
            break;
            case 'TabTopNavigator':
                iconName='bandcamp'
            break;
            case 'StackNavigator':
                iconName='hotjar'
            break;
        }

        return <Icon name={iconName} size={20} color={color} />
      }
  })}
    >
     <TabsAndroid.Screen name="Tab1Screen" component={Tab1Screen} />
     <TabsAndroid.Screen name="TabTopNavigator" component={TabTopNavigator} />
      <TabsAndroid.Screen name="StackNavigator" component={StackNavigator} />
    </TabsAndroid.Navigator>
  );
}

const TabIOS = createBottomTabNavigator();
const TabsIOSNavigator = () => {
  return (
    <TabIOS.Navigator
    sceneContainerStyle={{
        backgroundColor:'white'
    }}
    tabBarOptions={{
        activeTintColor:'white',
        style: {
            borderTopColor:'#727272',
            borderTopStartRadius: 12,
            borderTopEndRadius: 12,
            shadowColor: "#000",
            shadowOffset: {
	        width: 0,
	        height: 8,
            },
            shadowOpacity: 0.46,
            shadowRadius: 11.14,

        elevation: 17,
        backgroundColor:'#373737',
        },
        labelStyle:{
            fontSize: 15,
            fontWeight: '300',
            textAlign:'center',
            marginBottom:'5%',
        }
    }}
    screenOptions={ ({route})=> ({
        tabBarIcon: ({color, focused, size}) => {

            let iconName: string = '';
            switch (route.name){
                case 'Tab1Screen':
                    iconName='Home'
                break;
                case 'Tab2Screen':
                    iconName='bandcamp'
                break;
                case 'StackNavigator':
                    iconName='hotjar'
                break;
            }

            return <Icon name={iconName} size={20} color={color} />
        }
    })}

    >
      <TabIOS.Screen name="Tab1Screen" component={Tab1Screen} />
      <TabIOS.Screen name="Tab2Screen" component={Tab2Screen} />
      <TabIOS.Screen name="StackNavigator" component={StackNavigator} />
    </TabIOS.Navigator>
  );
}
