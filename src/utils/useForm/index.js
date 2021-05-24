/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
/**
 jadi intinya menggunakan useForm
 adalah hooks (hooks cuma bisa return values gak bisa component)
 jadi make useForm wajib kirim/isi initialValue nyakemudian
 akan mereturn values berupa fungsii ()=> values baru
 yang dikirim dari params(bebas paramsnya) 
 params iini akann menjadi nilai yang merubah 

 ini ke register

 jadi ini lebih ringkas daripada sebelumnya yang bisa memakan kodingan banyak
 const [fullName,setFullname] = useState('');
    const [profession, setProfession] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
nah ini baru satu aja mesti update kek gitu
gimana kalo ada banyak?? nah make ini useForm
biar lebih efektif
    
*/
const useForm = initialValue => {
    const [values,setValues] = useState(initialValue);
    return [
        values,
        params => {
            return setValues(params);
        },
    ];
};


export default useForm;

