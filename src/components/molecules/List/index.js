/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DummyDoctor2, IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets';
import { colors, fonts } from '../../../utils';
const List = ({profile, name, desc ,type,onPress,icon}) => {
    /* ini merupakan cara unutk
    beri icon pada userProfile di const Icon ini  */

    const Icon = () => {
        if (icon === 'edit-profile') {
            return <IconEditProfile />;
        }
        if (icon === 'language') {
            return <IconLanguage />;
        }
        if ( icon === 'help') {
            return <IconHelp />;
        }
        if ( icon === 'rate') {
            return <IconRate />;
        }
        return <IconEditProfile />;
    };
    /* artinya dibawah ini {icon ? <Icon /> : <Image source={profile} style={styles.avatar} /> }
    jika gw milih panggil props icon maka muncul <Icon />
    kalo gak ya yang muncul <Image /> ini
    ini buat userProfile Ada icon Editprofile,language,dst */
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <Icon /> : <Image source={profile} style={styles.avatar} /> }
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {type === 'next' && <IconNext />}
        </TouchableOpacity>
    );
};
/*
itu  diatas {type==='next}jadi jika props diisi type= "next" Pada choose doctor 
maka nanti dikasih IconNext gitu arrow tiap doctor
*/

export default List;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:colors.border,
        alignItems:'center',
        justifyContent:'space-between',
    },
    content:{
        flex:1,
        marginLeft:16,
    },
    avatar:{
        width:46,
        height:46,
        borderRadius:46 / 2,
        marginRight:12,
    },
    name:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
    },
    desc:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.secondary,
    }
});