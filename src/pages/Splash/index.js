import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ILLogo} from '../../assets/';
const Splash = () => {
    return (
        <View 
        style ={styles.page}>
            <ILLogo />
            <Text
            style = {styles.title}>
                Dokter Consultation
            </Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:20,
        fontWeight:'600',
        color:'black',
        marginTop:20,
    },

})