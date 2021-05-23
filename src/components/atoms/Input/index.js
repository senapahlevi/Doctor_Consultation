/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils';
/* ini buat form kayak register
onFocus kita klik form misal A nah si Form A
doang yang muncul warna misal biru di sekitar Form A
kemudian On blur klik form B beralih ke B 
Form B yang gantian warna biru si A udah ga biru(disable)
karena udah ga fokus lagi
misal ada 4 form jadi yang berwarna biru hanya 1 sisa nya border
kan yang diklik cuma 1 form kalo ngisi biodata
jadi intinya onFocusForm akan merubah warna biru(ketika form A)
jika onBlurForm merubah warna seperti semula jadi putih(ketika
    ga diklik form )
*/
/* jadi ini ada onchangetext buat nanti di form kayak
register buat ketika ada perubahan input text atau mau diisi
bisa berjalan dan value ini digunakan pada value form yang mana 
misal buat email yaudah berarti hooks email diisinya 
secureTextEntry buat passwordd
*/
const Input = ({label, value, onChangeText, secureTextEntry}) => {
    const [border,setBorder] = useState(colors.border);
    const onFocusForm = () => {
        setBorder(colors.tertiary);
    };
    const onBlurForm = () => {
        setBorder(colors.border);
    };
    return (
        <View>
            <Text style ={styles.label}>{label}</Text>
            <TextInput
             style={styles.input(border)}
             onFocus={onFocusForm}
             onBlur={onBlurForm}
             value={value}
             onChangeText={onChangeText}
             secureTextEntry={secureTextEntry}
             />
        </View>
    );
};

export default Input;
/*
label buat email password tulisan doang
*/
const styles = StyleSheet.create({
    input: (border) => ({
        borderWidth:1,
        borderColor:border,
        borderRadius:10,
        padding:12,
    }),
    label:{
        fontSize:16,
        color:colors.text.secondary,
        marginBottom:6,
        fontFamily:fonts.primary[600],
    },

});
