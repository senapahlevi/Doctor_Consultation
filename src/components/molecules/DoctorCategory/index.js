/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILCatUmum } from '../../../assets';
import { colors, fonts } from '../../../utils';

const DoctorCategory = () => {
    return (
        <View style={styles.container}>
            <ILCatUmum style={styles.illustration}/>
            <Text style={styles.label}>Saya butuh dokter</Text>
            <Text style={styles.category}>Dokter Umum</Text>
        </View>
    );
};

export default DoctorCategory;
//alignSelf ini mengikuti h,w dari content category
const styles = StyleSheet.create({
    container:{
        padding:12,
        backgroundColor:colors.cardLight,
        alignSelf:'flex-start',
        borderRadius:10,
        marginRight:10,
        width:120,
        height:150,
    },
    illustration:{
        marginBottom:28,
    },
    label:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.primary,
    },
    category:{
        fontSize:12,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
    },

});
