/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils';
/* ini buat di doctor profile ada alumnus ,foto,nama */
const ProfileItem = ({label,value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}> {label}</Text>
            <Text style={styles.value}> {value}</Text>
        </View>
    );
};

export default ProfileItem;

const styles = StyleSheet.create({
    container:{
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:colors.border,
    },
    label:{
        fontSize:14,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        marginBottom:6,
    },
    value:{
        fontSize:15,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary,
    },


});
