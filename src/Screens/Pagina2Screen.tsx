import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';


export const Pagina2Screen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: ' ',
        })
    }, [])
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.titulo}>Pagina 2</Text>

            <Button
        title='ir pagina 3' 
        onPress={()=> navigation.navigate('Pagina3Screen')}
        />

       <Text style={{
           marginVertical: 10,
           fontSize: 20,
           fontWeight: 'bold'
       }}>Navegar con Argumentos</Text>


<View style={{flexDirection: 'row', justifyContent:'center'}}>

       <TouchableOpacity
       style={{...styles.btnEspacio,
                backgroundColor:'#5856D6'}}
       onPress={() => navigation.navigate('Perfil', {
           id: 1,
           nombre:'predo',
       })}
       >
           <View>
        <Text  style={styles.btnEspacioText}><Icon name="mars" size={80} color="white" /></Text>
           </View>
       </TouchableOpacity>

       <TouchableOpacity
       style={styles.btnEspacio}
       onPress={() => navigation.navigate('Perfil', {
           id: 2,
           nombre:'maria',
       })}
        >
           <View>
        <Text  style={styles.btnEspacioText}><Icon name="venus" size={80} color="white" /></Text>
           </View>
       </TouchableOpacity>

</View>

        </View>
    )
}