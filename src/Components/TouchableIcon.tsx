import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../context/authContext';

interface Props{
    iconName: string;
    iconColor: string;
}

export const TouchableIcon = ({iconName,iconColor}:Props) => {
   
   const {changeFavoritIcon, changeFavoritColor} = useContext(AuthContext)


    return (
        
    <TouchableOpacity
    onPress={() => changeFavoritIcon(iconName)}
    >
        <Icon
        name={iconName}
        size={80}
        color={iconColor}/>
    </TouchableOpacity>
        
    )
}
