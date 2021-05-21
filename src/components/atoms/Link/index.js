/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils';

const Link = ({title,size,align,onPress}) => {
    //jadi .text(size) itu untuk menerima parameter size
    //sehingga nanti ukuran text forgotpass&create new account bisa dinamis ukuran dan tulisan nya
    //dirubah di bagian login aja jadi lebih simpel rapih efisien
    /*
    jadi intinya ini akan merubah size dan biar tulisan ketengah si forgot password
    dan create new account
    */
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text(size,align)}>{title}</Text>
        </TouchableOpacity >
    );
};

export default Link;

const styles = StyleSheet.create({
    /*
    text: ini pake arrow function yang akan mereturn
    object [(ini object ya)]
    kemudian (size) =>ini object menerima parameter size dari 
    login
    */
    text:(size,align)=> ({
        fontSize:size,
        color:colors.text.secondary,
        fontFamily:fonts.primary.normal,
        textDecorationLine:'underline',
        textAlign:align,
    }),
});
