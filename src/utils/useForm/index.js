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

2.part 2 dari register ya, ...values-->ini values lama
dicopy kemudian kita rubah misal fullname
maka setValues({...values, fullName : params});
tapi inget ini blom dinamis karena manual dan ngebug Wwkwk
malah formnya ikutan berubah yanglain juga wkwk
 lanjut part 3 biar dinamis dan bener satu satu ga ikutan berubah

3. part 3 ini part 3 misal mau rubah fullName ya ['fullName']:params
biar dinamis sesuai yang kita input [type]:params
atau gw rubah(formType,formValue) => {
    return setValues({...values, [formType] : formValue});
*/
/*
jadi intinya jika formType nya reset itu ketika udah isi form
klik continue kemudian auto blank semua sen seperti diawal biar
enak diliat */
const useForm = initialValue => {
    const [values,setValues] = useState(initialValue);
    return [
        values,
        (formType,formValue) => {
            if (formType === 'reset' ) {
                return setValues(initialValue);
            }
            return setValues({...values, [formType] : formValue});
        },
    ];
};


export default useForm;

