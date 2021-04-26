import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../Components/TouchableIcon';
export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1Screen');
        
    }, [])

    const {top} = useSafeAreaInsets();

    return (
        <View style={{...styles.globalMargin,marginTop:top +10}}>
            <Text style={styles.titulo}>Iconos</Text>
        
            <Text>
            <TouchableIcon iconColor="#119DA4" iconName="rocket"/>
            <TouchableIcon iconColor="#0C7489" iconName="ad"/>   
            <TouchableIcon iconColor="#13505B" iconName="airbnb"/>   
            <TouchableIcon iconColor="#65532F" iconName="biohazard"/>    
            <TouchableIcon iconColor="#F19953" iconName="fort-awesome-alt"/>
            <TouchableIcon iconColor="#C47335" iconName="bity"/>
            <TouchableIcon iconColor="#F9A620" iconName="bitcoin"/>
            </Text>
        </View>
    )
}
