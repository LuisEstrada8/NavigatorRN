import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1Screen');
        
    }, [])

    const {top} = useSafeAreaInsets();

    return (
        <View style={{...styles.globalMargin,marginTop:top +10}}>
            <Text style={styles.titulo}>Iconos</Text>
        
            <Text>
            <Icon name="rocket" size={80} color="#900" />
            <Icon name="ad" size={80} color="#D3D5D7" />   
            <Icon name="airbnb" size={80} color="#119DA4" />   
            <Icon name="biohazard" size={80} color="#F5BB00" />    
            <Icon name="fort-awesome-alt" size={80} color="#900" />
            <Icon name="bity" size={80} color="#80DED9" />
            <Icon name="bitcoin" size={80} color="#F5BB00" />
            </Text>
        </View>
    )
}
