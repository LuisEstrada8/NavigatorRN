import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';


//interface Props extends StackScreenProps<any, any>{};

interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( {navigation}: Props ) => {
    
    useEffect(() => {

        navigation.setOptions({
            headerLeft: () => (
                <Button
                title="Menu"
                onPress={()=> navigation.toggleDrawer()}
                />
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
