import React from 'react';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';
import {ILLogo,ILGetStarted} from '../../assets';
import {Button,Gap} from '../../components';

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
                <Button title="Get Started" onPress={()=> alert('hello')}/>
                <Gap height={26}/>
                <Button type="secondary" title="Sign in" onPress={()=>alert("sena")}/> 
            </View>      
        </ImageBackground>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    page: {
        padding:40,
        justifyContent:"space-between",
        backgroundColor:"white",
        flex:1
    },
    title :{
        fontSize:28,
        fontWeight:'600',
        color:"white",
        marginTop:91,
        fontFamily:"Nunito-Semibold"
    }
})
