/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils';
/* ini utk chat dari user ?
sebagai isi chat yang ada bubble nya

*/

const IsMe = () => {
    return (
        <View style={styles.container}>
        <View style={styles.chatContent}>
          <Text style={styles.text}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk ?</Text>
        </View>
        <Text style={styles.date}>4.20 Am</Text>
    </View>
    );
};

export default IsMe;
/*chat content yang bubble nya itu bentuknya
 */
const styles = StyleSheet.create ({

    container:{
        marginBottom:20,
        alignItems:'flex-end',
        paddingRight:16,
    },
    chatContent:{
        padding:12,
        paddingRight:18,
        backgroundColor:colors.cardLight,
        maxWidth:'70%',
        borderRadius:10,
        borderBottomRightRadius:0,

    },
    text:{
        fontSize:14,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary,
    },
    date:{
        fontSize:11,
    },

})
