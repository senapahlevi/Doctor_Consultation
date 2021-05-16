import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
/*
jadi kenapa ada parameter props button ini?
buat yang make button dan be Efficient sen ke GetStarted
karena gausah perlu rubah kodingan manual di sini
jadi rubah di Getstarted aja

*/

const Button = ({type, title, onPress}) => {
    return (
        <TouchableOpacity
        style={styles.container(type)} 
        onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

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
    backgroundColor: type === 'secondary' ? 'white': "#0BCAD4",
    paddingVertical:10,
    borderRadius:10,
}),
text: type =>({
    fontSize:16,
    fontWeight:'600',
    textAlign:'center',
    color: type === 'secondary' ? '#112340':'white'
}),

});
