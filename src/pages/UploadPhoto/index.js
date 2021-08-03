/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets';
import { Button, Gap, Header, Link } from '../../components';
import { colors, fonts } from '../../utils';
import ImagePicker from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';
/* jika punya photo maka ada iconremove
jika ga ada photo maka iconad gitu */
const UploadPhoto = ({navigation}) => {

const [hasPhoto, setHasPhoto] = useState(false);
//hasphot ini kondisi ketika sudah ada foto PP maka button jadi ijo biar bisa next
const [photo,setPhoto] = useState(ILNullPhoto);
const getImage = () => {
    /*sengaja {} biar gak error optios namanya
    const source = {uri.response.uri} ini 
    buat milih gambar sumber dari galeri
    */
        ImagePicker.launchImageLibrary({}, response =>{
            console.log('response: hasilnya', response);
            /*ini didCancel kalo gw udah klik google photos trus langsung cancel biar ga blank(aneh jir)

            */
            if (response.didCancel || response.error ) {
                showMessage({
                    message:'oops you cancel pick the image',
                    type:'default',
                    backgroundColor:colors.error,
                    color:colors.white,
                });
            }
            else{
                const source = {uri: response.uri};
                setPhoto(source);
                setHasPhoto(true);
            }
            
        });
    };
        /*const options = {
            noData:'',
        };
        */
        /* ini setPhoto(source) ini akan ganti jadi galeri

        launchImageLibrary(options, response => {
            console.log('response : ',response);
            const source = {uri: response.uri};
            setPhoto(source);
            setHasPhoto(true);
        });*/


    /*
    di <Button /> wajib ada disable biar nyesuain kalo blom
    upload foto gak bisa neken upload Continue(ijo) dan sesuaikan kondisi ={!hasPhoto}
    jika hasPhoto ada foto maka true=> ini ga ijo kalo false baru ijo disable button
    */
    return (
       <View style={styles.page}>
             <Header title="Upload Photo"/>
             <View style={styles.content}>
                <View style={styles.profile}>
                     <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image source={photo} style={styles.avatar}/>
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} /> }
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto}/>}
                    </TouchableOpacity>
                    <Text >Upload Photo Screen</Text>
                    <Text style={styles.name}>Jessica Stefany</Text>
                    <Text style={styles.profession}>Psychology</Text>
                </View>
                <View>
                    <Button
                    disable = {!hasPhoto}
                    title="Upload and continue"
                    onPress={()=>navigation.replace('MainApp')}
                    />
                    <Gap height={30}/>
                    <Link
                    title ="Skip for this"
                    align="center"
                    size={16}
                    onPress={()=>navigation.replace('MainApp')}
                    />
                </View>
             </View>
       </View>
    );
};

export default UploadPhoto;

const styles = StyleSheet.create({
    profile:{
        alignItems:'center',
         flex:1,
        justifyContent:'center',
    },
    content:{
        paddingHorizontal:40,
        paddingBottom:65,
        flex:1,
        justifyContent:'space-between',
    },
    page:{
        flex:1,
        backgroundColor:colors.white,
    },
    avatar:{
        width:110,
        height:110,
        borderRadius:110 / 2,
    },
    avatarWrapper:{
        width:130,
        height:130,
        borderWidth:1,
        borderColor:colors.border,
        borderRadius:130 / 2,
        alignItems:'center',
        justifyContent:'center',
    },
    addPhoto:{
        position:'absolute',
        bottom:8,
        right:6,
    },
    name:{
        fontSize:24,
        color:colors.text.primary,
        fontFamily:fonts.primary[600],
        textAlign:'center',
    },
    profession:{
        fontSize:18,
        fontFamily:fonts.primary.normal,
        textAlign:'center',
        color:colors.text.secondary,
        marginTop:4,
    },
});
