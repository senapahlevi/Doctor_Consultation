/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ILLogo} from '../../assets';
import {Input,Link,Button,Gap} from '../../components';
import { colors, fonts } from '../../utils';
const Login = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Masuk dan Mulai Berkonsultasi</Text>
            <Input label="Email Address"/>
            <Gap height={24} />
            <Input label="Password" size={12}/>
            <Gap height ={10} />
            <Link title="Forgot Password"/>
            <Gap height={40} />
            <Button title="Sign in" onPress={()=> navigation.replace('MainApp')} />
            <Gap height ={15} />
            <Link title="Create New Account" size={16} align="center"/>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    page:{
        padding:40,
        backgroundColor:"white",
        flex:1,
    },
    title:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        marginTop:40,
        marginBottom:40,
        maxWidth:154,

    },

})
