import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { HeaderTitle, StackScreenProps } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RouteStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/authContext';


//interface RouterParams{
//  id: number,
//  nombre: string,
//}

interface Props extends StackScreenProps<RouteStackParams,'Perfil'>{};

export const PersonaScreen = ({route, navigation}: Props) => {

  const param = route.params;
  const {changeUsername} = useContext(AuthContext)

  useEffect(() => {
    navigation.setOptions({
      title: param.nombre
    })
  }, []);

  useEffect(() => {
   
    changeUsername(param.nombre)

  },[])

    return (
        <View style={styles.globalMargin}>
          <Text style={styles.titulo}>{JSON.stringify(param,null,3)}</Text>  
        </View>
    )
}
