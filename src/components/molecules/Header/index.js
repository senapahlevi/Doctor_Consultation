/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBackDark } from '../../../assets'
import {Gap,Button} from '../../atoms';
import {colors} from '../../../utils';
/*
eitss inget sen ini parameter nya onPress lagi karena nanti iini
digunain secara umum bukan satu doang jadi secara umum efisien
misal diterapkan ke register gitu.
JADI inget PROPS kayak dibawah ini digunakan secara umum ga khusus dalam konteks yang 
sama yakni seputar header alias berbau header kan yang make beberapa make yaudah biar ga manual
efisien
*/
const Header = ({onPress,title}) => {
    return (
        <View style={styles.container}>
            <Button type ="icon-only" icon={"back-dark"} onPress={onPress}/>
            <Text style={styles.text}>{title}</Text>
            <Gap width={24 }/>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        paddingVertical:30,
        backgroundColor:colors.white,
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        textAlign:'center',
        flex:1,
        fontSize:20,
        fontFamily:'Nunito-SemiBold',
        color:colors.text.primary,
    },

});
