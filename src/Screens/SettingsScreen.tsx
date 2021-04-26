import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext, AuthState } from '../context/authContext';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';


export const SettingsScreen = () => {
    
    const insets = useSafeAreaInsets();

    const context = useContext(AuthContext);
    
    const { authState } = useContext(AuthContext);

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top+20}}>

            <Text style={styles.titulo}>Settings Screen</Text>

            <Text>{JSON.stringify(authState,null,4)}</Text>

{
        authState.favoriteicon && (
            <Icon
            name={authState.favoriteicon}
            size={150}
            color={'#66999B'} />
            )
}
        </View>
    )
}
