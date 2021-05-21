/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../../components';
import { colors, fonts } from '../../utils';
/*
iini ada efek pengaruh  <Button type="btn-icon" disable={false}/>

pada <Button jika  disable={false} maka IconSendLight
 disable={true} maka <IconSendDark />

 nah biar lebih enak biar ga manual ngetik disini
harus true/false kita serahkan di BtnIconSend 
Container backGroundcolor
*/

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput
             style={styles.input}
             placeholder="Tulis Pesan Untuk Aleksandra"/>
            <Button type="btn-icon-send"/>
        </View>
    );
};

export default InputChat;

const styles = StyleSheet.create({
    container:{
        padding:16,
        flexDirection:'row',
    },
    input:{
        backgroundColor:colors.disable,
        padding:14,
        flex:1,
        borderRadius:10,
        marginRight:10,
        fontSize:14,
        fontFamily:fonts.primary.normal,
        maxHeight:45,
    },

});
