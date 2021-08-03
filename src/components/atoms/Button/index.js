/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './iconOnly';
/*
jadi kenapa ada parameter props button ini?
buat yang make button dan be Efficient sen ke GetStarted
karena gausah perlu rubah kodingan manual di sini
jadi rubah di Getstarted aja

icon-only khusus kayak arroow back gitu
beda dari yang btn sign in gitu
icon ={icon} itu nanti diisi dari icononly misal{"back-dark"}
type="icon-only "misal itu buat diisi di header misal nya 
jadi ga usah utak atik manual

onPress={onPress} buat nanti diisi
navigation.replace/navigate("Keluar misal")
*/

const Button = ({type, title,icon, onPress, disable}) => {
    if (type === 'btn-icon-send') {
        return <BtnIconSend disable={disable}/>;
    }
    if (type === 'icon-only'){
        return <IconOnly icon={icon} onPress={onPress} />;
    }
    //ketika disable true maka gk bisa diklik ya make view
    if (disable){
        return (
            <View
            style={styles.disableBg}>
                <Text style={styles.text(type)}>{title}</Text>
            </View>
        );
    }

    return (
        <TouchableOpacity
        style={styles.container(type)}
        onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

/*
container ini dibawah ini make arrow fungsi dan ada tulisan
type tujuan nya biar dinamis/ bisa dipake berulang ulang tanpa haru
rubah kodingan manual tapi kita tinggal ngasih label secondary/prime
sehingga udah otomatis berubah jadi BE EFFICIENT!

ini kontainer ya: jika secondary(yes) maka white 
jika no (warna defaultnya) maka automatis warna 0BCAD4
*/
const styles = StyleSheet.create({
container: type=>({
    backgroundColor: type === 'secondary' ? colors.button.secondary.background: colors.button.primary.background,
    paddingVertical:10,
    borderRadius:10,
}),
disableBg:{
    paddingVertical:10,
    borderRadius:10,
    backgroundColor:colors.button.disable.background,
},
text: type =>({
    fontSize:16,
    fontFamily:fonts.primary[600],
    textAlign:'center',
    color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text,
}),

disableText:{
    fontSize:18,
    fontFamily:fonts.primary[600],
    textAlign:'center',
    color:colors.button.disable.text,
},

});
