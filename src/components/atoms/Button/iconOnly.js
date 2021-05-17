import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconBackDark } from '../../../assets'

/*
jika gw kasih nama dark-back maka dia
muncul iconbackdark jadi ntar tinggal 
ganti " " ini aja misal yang diterapkan register gitu
gausah ganti manual be efisien
*/

const IconOnly = ({onPress,icon}) => {
   
    const Icon = () => {
        if(icon === 'dark-back'){
            return <IconBackDark />;
        }
        if (icon === 'back-light'){
            return <IconBackDark />;
        }
    //INI adalah default nya 
        return <IconBackDark />
    };

    return (
        <TouchableOpacity onPress ={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly;

