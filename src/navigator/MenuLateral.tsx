import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../Screens/SettingsScreen';
import { Text, useWindowDimensions, View , Image,TouchableOpacity} from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';


const Drawer = createDrawerNavigator();

/*const Stack = createStackNavigator();
const settingStackScreen = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}*/

export const MenuLateral =() => {

  const {width} = useWindowDimensions();


  return (
    <Drawer.Navigator
    //drawerPosition="right"
    drawerType={width >= 768 ? 'permanent' : 'front'}
    drawerContent={(props) => <MenuInterno {...props} />}
    >
      
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno =({navigation}: DrawerContentComponentProps<DrawerContentOptions>) =>{
  return (

    <DrawerContentScrollView>
      <View style={styles.avatarContent}>
        <Image
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}}
        style={styles.avatar}
        /> 
      </View>

      <View style={styles.menucontainer}>

        <TouchableOpacity style={styles.menuboton}
        onPress={()=> navigation.navigate('StackNavigator')}>
        <Text style={styles.menuitems}>Navegacion</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.menuboton}
        onPress={()=> navigation.navigate('SettingsScreen')}>
        <Text style={styles.menuitems}>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>

  );
}