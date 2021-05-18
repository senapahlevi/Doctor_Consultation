/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconDoctor, IconDoctorActive, IconHospitals, IconHospitalsActive, IconMessages, IconMessagesActive } from '../../../assets';
import { colors, fonts } from '../../../utils';
/*
ini menentukan komponen icon apa yang muncul pada di bottom tabs
jadi komponen icon ini mereturn icon apa nanti default nya icon doctor 
diluar kondisi if ini paling akhir itu syntax nya

jika aktif maka Icondoctoraktif/berwarna jka gak maka pasif/gak warna
*/
const TabItem = ({title,active,onPress,onLongPress}) => {
    const Icon = () =>{
        if ( title === 'Doctor'){
            return active ? <IconDoctorActive /> : <IconDoctor />;
        }
        if (title === 'Messages'){
            return active ? <IconMessagesActive /> : <IconMessages />;
        }
        if (title === 'Hospitals'){
            return active ? <IconHospitalsActive /> : <IconHospitals />;
        }
        return <IconDoctor />;
    };
    //ini misal return bawah ini () kalo Misal diganti <IconDoctor /> bukan <Icon/>
    //malah keganti IconDoctor semuanya wkwkw
    /* text active menerima parameter active dan 
    jika text menerima objek active :(active) => ({
        jika acitve maka active : jika false inactive

    })
    ini ke BottomNavigator
    touchableopacity dari view biar bbisa diklik
    */
    return (
        <TouchableOpacity style ={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style ={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    );
};

export default TabItem;


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        color: colors.text.menuInactive,
        fontFamily:fonts.primary[600],
        marginTop:4,
    },
    text: (active) => ({
        fontSize:10,
        color:active ? colors.text.menuActive : colors.text.menuInactive,
    }),

});

