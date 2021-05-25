/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {ScrollView, StyleSheet, View } from 'react-native';
import {Button, Gap, Header,Input, Loading} from '../../components';
import { Fire } from '../../config';
import { colors } from '../../utils';
import useForm from '../../utils/useForm';
const Register = ({navigation}) => {
    // const [fullName,setFullname] = useState('');
    // const [profession, setProfession] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    /*
    penjelasan usestate
    nah ini kita mau cek fullname,profesion,
    email,pass tapi kita contoh ke klik continue
    on debug di hp kemudian inspect elemen lalu
    console nah klik abis tuh muncul kalo gak ada
    sekalipun diisi karena apa? 
    karena
    */

    /* jadi ini Fire melakukan autentikasi kemudian
    target nya form.email,dst,
    then ini jika sukses maka ...
    catch error jika error maka ...
    */
    const onContinue = () =>{
        console.log(form);
        Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('register berhasil',user);
            // ...
          })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('error cuy register !:',errorMessage);
    // ..
  });
    };
    /**
     jadi misalkan onChangeText ini buat perubahan text biar bisa 
     diinput/edit jadi (value kita terima) ini input value kemudian memberi 
     value ke salah satu sampel yg gw ambil: setProfile(value),dst
     */

     /*
     1. ini mereturn sebuah objek karena didalam ( )
     kmudian setForm ini akan merubah values dari useForm
     kemudian onChangeText ganti setForm dan
     value={form.fullName} -->ini sampel
     tapi ini malah muncul tapi hasildoang jadi bingung
     nih 

     2. Kemudian kita coba part 2 
     rubah di useForm part 2

     3.part 3 kita sudah rubah diuseForm kemudian
     setForm('fullName',value)} buat fullname biar dinamis
     biar simpel
     */
     const [form, setForm] = useForm({
        fullName:'',
        profession:'',
        email:'',
        password:'',
     });

    return (
        <>
        <View style={styles.page}>
            <Header onPress={() =>navigation.goBack()} title="Daftar Akun"/>
            <View style ={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input
                    label ="Full Name"
                    value={form.fullName}
                    onChangeText={value=>setForm('fullName',value)}
                    />
                    <Gap height={24}/>
                    <Input label ="Pekerjaan"
                    value={form.profession}
                    onChangeText={value=>setForm('profession',value)}
                    />
                    <Gap height={24} />
                    <Input
                    label ="Email"
                    value={form.email}
                    onChangeText={value=>setForm('email',value)}
                    />
                    <Gap height={24} />
                    <Input
                    label="password"
                    value={form.password}
                    onChangeText={value=>setForm('password',value)}
                    secureTextEntry={true}
                    />
                    <Gap height={24} />
                    <Button title="Continue" onPress={onContinue} />
                    <Gap height={40} />
                </ScrollView>
            </View>  
        </View> 
        <Loading />      
        </>
    );
};
/* ini make fragment <> </> sama aja kayak view 
bedanya kalo mau styling/desain make view kalo gak
yaudah make fragment aja
*/

export default Register;

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1,
    },
    content: {
        padding:40,
        paddingTop:0,
    },


});
