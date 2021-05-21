/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconSendDark, IconSendLight } from '../../../assets';
import { colors } from '../../../utils';
/*
icon yang gambar pesawat yang buat send or sent
jadi jika disable maka muncul IconSendDark
jika not disable maka muncul IconSendLight

*/
const BtnIconSend = ({disable}) => {
    return (
        <View style={styles.container(disable)}>
            {disable && <IconSendDark /> }
            {!disable && <IconSendLight />}
        </View>
    );
};

export default BtnIconSend;
/*
jika disable maka color disable jika gak maka tersier(blue send)
*/
const styles = StyleSheet.create({
    container: disable => ({
        backgroundColor:disable ? colors.disable : colors.tertiary,
        width:45,
        height:45,
        borderRadius:10,
        paddingTop:3,
        paddingRight:3,
        paddingBottom:8,
        paddingLeft:8,
    }),

});
