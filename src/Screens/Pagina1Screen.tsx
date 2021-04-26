import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
//interface Props extends StackScreenProps<any, any>{};

interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( {navigation}: Props ) => {
    
    useEffect(() => {

        navigation.setOptions({
            headerLeft: () => (
               <TouchableOpacity
                onPress={()=> navigation.toggleDrawer()}
                style={{
                    marginLeft:15
                }}
                >
                <Icon name="ellipsis-h" size={35} color="#119DA4" />

               </TouchableOpacity>
            )
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.titulo}>Pagina 1</Text>
        <Button
        title='ir pagina 2'
        onPress={()=> navigation.navigate('Pagina2Screen')}
        />
        </View>
    )
}
