import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Mackbookpict from './src/assets/Mackbookpict.jpg';
const Product = (props) => {
    return (
        <View style={styles.container}>
            <Image source={Mackbookpict} style={{height: 150, weight:150}} />
            <Text style = {styles.textProduk}>New Mackbook Pro 2020</Text>
            <Text style={styles.textPrice}>Rp25.000.000</Text>
            <Text style={styles.textLokasi}>Tangerang Selatan</Text>
            <TouchableOpacity onPress={props.onButtonPress}>
                <View style={styles.btnWraper}> 
                    <Text style={styles.btnBuy}>BUY</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default Product;

const styles = StyleSheet.create({
    container:{
        padding:12,
        backgroundColor:'white',
        width:212,
        borderRadius:8
    },
    imageProduk:{
        width:188,
        height:108,
        borderRadius:9
    },
    textProduk:{
        fontSize:14,fontWeight:'bold',marginTop:16
    },
    textPrice:{
        fontSize:12,
        fontWeight:'bold',
        color:'brown',
        marginTop:12
    },
    textLokasi:{
        fontSize:12,
        fontWeight:'300',
        marginTop:12
    },
    btnWraper:{
        backgroundColor:'blue',
        paddingVertical:6,
        borderRadius:25,
        marginTop:20,
    },
    btnBuy:{
        fontSize:14,
        fontWeight:'500',
        color:'white',
        textAlign:'center'
    }
});
