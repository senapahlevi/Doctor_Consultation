/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {ScrollView, StyleSheet, View } from 'react-native';
import {Button, Gap, Header,Input} from '../../components';
import { colors } from '../../utils';
const Register = ({navigation}) => {
    const [fullName,setFullname] = useState('');
    const [profession, setProfession] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*
    penjelasan usestate
    nah ini kita mau cek fullname,profesion,
    email,pass tapi kita contoh ke klik continue
    on debug di hp kemudian inspect elemen lalu
    console nah klik abis tuh muncul kalo gak ada
    sekalipun diisi karena apa? 
    karena
    */
    const onContinue = () =>{
        console.log(fullName,profession,email,password);
    };
    /**
     jadi misalkan onChangeText ini buat perubahan text biar bisa 
     diinput/edit jadi (value kita terima) ini input value kemudian memberi 
     value ke salah satu sampel yg gw ambil: setProfile(value),dst
     */
    return (
        <View style={styles.page}>
            <Header onPress={() =>navigation.goBack()} title="Daftar Akun"/>
            <View style ={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input label ="Full Name" value={fullName} onChangeText={(value)=>setFullname(value)}/>
                    <Gap height={24}/>
                    <Input label ="Pekerjaan" value={profession} onChangeText={(value)=>setProfession(value)}/>
                    <Gap height={24} />
                    <Input label ="Email" value={email} onChangeText={(value)=>setEmail(value)}/>
                    <Gap height={24} />
                    <Input label="password" value={password} onChangeText={(value)=>setPassword(value)} secureTextEntry={true}/>
                    <Gap height={24} />
                    <Button title="Continue" onPress={onContinue} />
                    <Gap height={40} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1
    },
    content: {
        padding:40,
        paddingTop:0,
    },


});
