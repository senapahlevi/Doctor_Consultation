/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';
import {ILLogo,ILGetStarted} from '../../assets';
import {Button,Gap} from '../../components';
import { colors, fonts } from '../../utils';

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILGetStarted} style ={styles.page}>
           <View>
                <ILLogo />
                <Text style ={styles.title}>
                Konsultasi dengan dokter jadi lebih mudah & fleksibel
                </Text>
           </View>
            <View>
                <Button title="Get Started" onPress={()=> navigation.navigate("Register")}/>
                <Gap height={26}/>
                <Button type="secondary" title="Sign in" onPress={()=>navigation.navigate("Login")}/> 
            </View>      
        </ImageBackground>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    page: {
        padding:40,
        justifyContent:"space-between",
        backgroundColor:colors.white,
        flex:1
    },
    title :{
        fontSize:28,
        color:colors.white,
        marginTop:91,
        fontFamily:fonts.primary[600],
    }
})

//nunito semibold = 600 fontsize