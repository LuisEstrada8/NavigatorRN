import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any,any>{};

export const Pagina3Screen = ({navigation}: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.titulo}>Pagina 3</Text>



        <Button
        title='ir pagina 2'
        onPress={()=> navigation.pop()}
        />

        <Button
        title='ir pagina 1'
        onPress={()=> navigation.popToTop()}
        />

        </View>
    )
} 