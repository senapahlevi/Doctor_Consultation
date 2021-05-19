/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { DummyHospital1 } from '../../../assets';
import { colors, fonts } from '../../../utils';
const ListHospital = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyHospital1} style={styles.picture}/>
            <View>
            <Text style={styles.title}>Rumah Sakit</Text>
            <Text style={styles.title}>Citra Annisa</Text>
            <Text style={styles.address} >Jln Moh Toha km 10</Text>
            </View>
            
        </View>
    );
};

export default ListHospital;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:colors.border,
    },
    picture:{
        width:80,
        height:60,
        borderRadius:11,
        marginRight:16,
    },
    title:{
        fontSize:16,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary,
    },
    address:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.secondary,
        marginTop:6,
    }
});
