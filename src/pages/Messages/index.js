/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets';
import { List } from '../../components';
import { colors, fonts } from '../../utils';


const Messages = () => {
    const [doctors ] = useState([
        {
            id: 1,
            profile: DummyDoctor4,
            name:'Aleksandra Jeny',
            desc:'Baik ibu, terima kasih banyak atas wakt...',
        },
        {
            id:2,
            profile:DummyDoctor5,
            name:'Nathasa Pauline',
            desc:'Oh tentu saja tidak karena jeruk it...',
        },
        {
            id:3,
            profile:DummyDoctor6,
            name:'Peter McGregor',
            desc:'Oke menurut pak dokter bagaimana unt...',

        },

    ]);
    /*
    ini tujuan dibawah utk mapping adalah untuk ngasih nilai props
    pada ListDoctor(list folder) di menubottom messages jadi biar dinamis/ ntar rubah
    nya di listdoctor bae
    */
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>ini messages</Text>
                {
                    doctors.map(doctor =>{
                        return (
                            <List
                            key={doctor.id}
                            profile={doctor.profile}
                            name={doctor.name}
                            desc={doctor.desc}
                             />
                        );
                    })
                }
            </View>
        </View>
    );
};

export default Messages;

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.secondary,
        flex:1,
    },
    content:{
        backgroundColor:colors.white,
        flex:1,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    title:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        marginTop:30,
        marginLeft:16,
    },
});
