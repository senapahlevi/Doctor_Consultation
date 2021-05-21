/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DummyUser, IconRemovePhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';
const Profile = ({name,desc}) => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
                <Image source={DummyUser} style={styles.avatar}/>
                <IconRemovePhoto style={styles.removePhoto} />
            </View>
            
            {name && (
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profession}>{desc}</Text>
                </View>
            )}
            

        </View>
    );
};
/* nah diatas tuh sen yang name
misal ada props name maka menghilangkan space kosong 
aslinya
<Text style={styles.name}>{name}</Text>
<Text style={styles.profession}>{desc}</Text>  
nah tujuannya biar rapih dan seolah olah bukan nama nya ilang
tapi kok ada space yang keiisi dibawah foto nya itu
kayak curiga lah pasti
*/

export default Profile;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    avatar:{
        width:110,
        height:110,
        borderRadius:110 / 2,

    },
    borderProfile:{
        width:130,
        height:130,
        borderRadius:130 / 2 ,
        borderWidth:1,
        borderColor:colors.border,
        justifyContent:'center',
        alignItems:'center',
    },
    name:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        marginTop:16,
    },
    profession:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.secondary,
        marginTop:2,
    },
    removePhoto:{
        position:'absolute',
        right:8,
        bottom:8,
    },
});
