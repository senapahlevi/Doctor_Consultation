/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import {DummyUser} from '../../../assets';
const HomeProfile = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyUser} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>Jessica Stefany</Text>
                <Text style ={styles.profession}>Lead Software Engineer</Text>
            </View>
        </View>
    );
};

export default HomeProfile;


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    avatar:{
        width:46,
        height:46,
        borderRadius:46 / 2,
        marginRight:15,
    },
    name:{
        fontSize: 16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
    },
    profession:{
        fontSize:12,
        fontFamily:fonts.primary[400],
        color:colors.text.secondary,
    }
});
