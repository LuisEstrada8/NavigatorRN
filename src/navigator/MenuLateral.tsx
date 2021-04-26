import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../Screens/SettingsScreen';
import { Text, useWindowDimensions, View , Image,TouchableOpacity} from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './TabsNavigator';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
      
      <Drawer.Screen name="Tabs" component={Tabs} />
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

        <TouchableOpacity style={{...styles.menuboton, flexDirection:'row', alignItems:'center'}}
        onPress={()=> navigation.navigate('Tabs')}>
         <Icon name={"ship"} size={20} color={"#FFBA08"} />
        <Text style={{...styles.menuitems, marginLeft:2}}>Navegacion</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={{...styles.menuboton, flexDirection:'row', alignItems:'center'}}
        onPress={()=> navigation.navigate('SettingsScreen')}>
         <Icon name={'adjust'} size={20} color={"#FFBA08"} />
        <Text style={{...styles.menuitems, marginLeft:2}}>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>

  );
}