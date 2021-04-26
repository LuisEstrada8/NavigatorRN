import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/authContext';
import Icon from 'react-native-vector-icons/FontAwesome5';


export const ContactScreen = () => {
 
    const { signIn, authState }  = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text  style={{...styles.titulo, marginTop:'5%'}}>ContactScreen</Text>
        
        {!authState.isLoggin &&
        <View style={{alignItems:'center', marginTop:'10%'}}>
        <TouchableOpacity
        style={{
            flexDirection:'row',
            width: 100,
            height: 50,
            backgroundColor: '#1F7A8C',
            justifyContent:'center',
            alignItems:'center',
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
	            width: 0,
	            height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
        }}
        onPress={signIn}
        >
            <Icon name="sign-in-alt" size={15} color="white" />
            <Text style={{textAlign:'center', color:'white', marginHorizontal:10}}>SignIn</Text>
        </TouchableOpacity>
        </View>
    }

        </View>
    )
}
