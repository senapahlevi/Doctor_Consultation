import React,{useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets/';
/*
make navigation.replace jadi kalo back gak bisa
karena ga nyimpen history sehingga auto keluar mirip apps 
normal pada umumnya

beda make navigation.navigate back nyimpen history
dan bisa back gitu jadi abnormal /tapi ini ga jelaslah
karena aplikasi ga sesuai pada umumnya
*/

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('GetStarted');
        },3000);
    },[]);
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
