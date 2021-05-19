/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILCatAnak, ILCatObat, ILCatPsikiater, ILCatUmum } from '../../../assets';
import { colors, fonts } from '../../../utils';

const DoctorCategory = ({category}) => {
    const Icon = () => {

    if (category === 'umum'){
        return <ILCatUmum style ={styles.illustration} />;
    }
    if (category === 'psikiater'){
        return <ILCatPsikiater style ={styles.illustration} />;
    }
    if (category === 'obat'){
        return <ILCatObat style ={styles.illustration} />;
    }
    if (category === 'anak'){
        return <ILCatAnak style={styles.illustration} />;
    }
    return <ILCatUmum style={styles.illustration} />;
};
    /*
    ini penting ngasih Icon/> kalo gak ga mau muncul gambar
    icon category nya atau lupa ngasih gambar nya sama
    */
    return (
        <View style={styles.container}>
            <Icon />
            <Text style={styles.label}>Saya butuh dokter</Text>
            <Text style={styles.category}> {category} </Text>
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
